/**
 * La traduzione delle frasi intere, per l'analisi.
 * 1. Prima si cerca tra le frasi già tradotte a mano: gli esempi delle
 *    lezioni (con la lezione da cui vengono) e la banca degli esercizi.
 * 2. Poi tra quelle già tradotte in passato su questo telefono.
 * 3. Solo se serve, si chiede a MyMemory (api.mymemory.translated.net): un
 *    servizio di traduzione GRATUITO, senza chiave, con un limite di circa
 *    5000 caratteri al giorno per dispositivo. La traduzione si salva sul
 *    telefono, così la stessa frase non consuma di nuovo il limite.
 * MyMemory a volte risponde con la traduzione di una frase SIMILE già
 * tradotta da qualcuno ("You must do..." invece di "You will do..."): tra le
 * sue risposte si sceglie quella della frase identica.
 */

import { FRASI } from "@/analisi/frasi";
import { LEZIONI } from "@/data/lezioni";
import { dataDi } from "@/data/progressi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

// ---------- Il limite giornaliero di MyMemory ----------

// MyMemory gratuito: circa 5000 caratteri al giorno per dispositivo. Una
// frase media è lunga circa 50 caratteri, quindi circa 100 frasi
export const LIMITE_GIORNALIERO = 5000;
export const CARATTERI_PER_FRASE = 50;

const CHIAVE_USO = "traduzioni-uso";
type Uso = { data: string; caratteri: number };
const ascoltatori = new Set<(usati: number) => void>();

async function leggiUso(): Promise<number> {
  try {
    const t = await AsyncStorage.getItem(CHIAVE_USO);
    const uso = t ? (JSON.parse(t) as Uso) : undefined;
    // Un nuovo giorno: si riparte da zero
    return uso && uso.data === dataDi() ? uso.caratteri : 0;
  } catch {
    return 0;
  }
}

async function salvaUso(caratteri: number) {
  try {
    await AsyncStorage.setItem(
      CHIAVE_USO,
      JSON.stringify({ data: dataDi(), caratteri }),
    );
  } catch {}
  for (const a of ascoltatori) a(caratteri);
}

// Aggiunge i caratteri mandati a MyMemory a quelli usati oggi
async function registraUso(caratteri: number) {
  await salvaUso(Math.min(LIMITE_GIORNALIERO, (await leggiUso()) + caratteri));
}

// I caratteri già usati oggi; si aggiorna da solo quando se ne usano altri
export function useCaratteriUsati() {
  const [usati, setUsati] = useState(0);
  useEffect(() => {
    let attivo = true;
    leggiUso().then((u) => attivo && setUsati(u));
    const ascolta = (u: number) => setUsati(u);
    ascoltatori.add(ascolta);
    return () => {
      attivo = false;
      ascoltatori.delete(ascolta);
    };
  }, []);
  return usati;
}

export type Traduzione = {
  testo: string;
  // Da dove viene: una lezione (rimando "lezione 29{3}"), un esercizio
  // dell'app, o la traduzione automatica
  fonte: "lezione" | "esercizio" | "automatica" | "approssimativa";
  lezione?: string;
};

export type EsitoTraduzione = Traduzione | { errore: string };

// Minuscole, apostrofi dritti, senza punteggiatura: per confrontare le frasi
export function normalizzaFrase(s: string) {
  return s
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[.,!?;:"“”()…—-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

let note: Map<string, Traduzione> | undefined;

// Le frasi già tradotte a mano nell'app
function frasiNote() {
  if (note) return note;
  note = new Map();
  for (const f of FRASI)
    note.set(normalizzaFrase(f.testo), { testo: f.it, fonte: "esercizio" });
  for (const l of LEZIONI) {
    (l.riquadri ?? []).forEach((r, k) => {
      for (const b of r.blocchi) {
        if (b.tipo !== "esempi") continue;
        for (const e of b.esempi) {
          if (!e.it || e.sbagliato) continue;
          const chiave = normalizzaFrase(e.en);
          if (!note!.has(chiave))
            note!.set(chiave, {
              testo: e.it,
              fonte: "lezione",
              lezione: `lezione ${l.id}{${k + 1}}`,
            });
        }
      }
    });
  }
  return note;
}

// La traduzione scritta a mano, se la frase è nell'app (subito, offline)
export function traduzioneNota(testo: string): Traduzione | undefined {
  return frasiNote().get(normalizzaFrase(testo));
}

// Le poche entità HTML che MyMemory a volte lascia nel testo
function decodifica(s: string) {
  return s
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+([?!.,;:])/g, "$1")
    .trim();
}

// Le traduzioni della memoria di MyMemory a volte hanno virgolette di
// troppo («Dì il mio nome!): se la frase originale non ne ha, si tolgono
function ripulisci(originale: string, t: string) {
  if (/["“”«»]/.test(originale)) return t;
  return t
    .replace(/["“”«»]/g, "")
    .replace(/\s+([?!.,;:])/g, "$1")
    .replace(/([?!.])\./g, "$1")
    .trim();
}

type RispostaMyMemory = {
  responseData?: { translatedText?: string; match?: number };
  responseStatus?: number | string;
  quotaFinished?: boolean;
  matches?: {
    segment: string;
    translation: string;
    match: number;
    quality?: string | number;
  }[];
};

// La chiave della memoria sul telefono. Il numero cambia quando cambia il
// modo di tradurre: le traduzioni sbagliate salvate prima (per esempio
// "I%20am%20the%20winner") non si usano più
const CHIAVE = (testo: string) => `traduzione-2:${normalizzaFrase(testo)}`;

// Vero se il testo è davvero una traduzione: non è la frase ricopiata e non
// contiene codici dell'indirizzo web (%20, %2C...)
function eTradotto(originale: string, t?: string): t is string {
  if (!t || !t.trim()) return false;
  if (/%[0-9a-f]{2}/i.test(t)) return false;
  return normalizzaFrase(t) !== normalizzaFrase(originale);
}

// L'indirizzo per MyMemory. Ogni carattere non valido va codificato, anche
// la | di "en|it": altrimenti sul telefono React Native ricodifica tutto
// l'indirizzo, i %20 diventano %2520 e MyMemory riceve "I%20am%20the..."
// invece della frase. La seconda variante usa + per gli spazi
function indirizzo(testo: string, variante: number) {
  const q = encodeURIComponent(testo);
  return `https://api.mymemory.translated.net/get?langpair=en%7Cit&q=${variante === 0 ? q : q.replace(/%20/g, "+")}`;
}

type Tentativo = { tradotto?: string; esatta: boolean; quotaFinita?: boolean };

async function chiediAMyMemory(
  testo: string,
  variante: number,
): Promise<Tentativo> {
  const controllo = new AbortController();
  const timer = setTimeout(() => controllo.abort(), 9000);
  try {
    const r = await fetch(indirizzo(testo, variante), {
      signal: controllo.signal,
    });
    const dati = (await r.json()) as RispostaMyMemory;
    if (dati.quotaFinished || String(dati.responseStatus) === "429")
      return { esatta: false, quotaFinita: true };
    // Tra le risposte, la traduzione della frase identica (non di una frase
    // simile tradotta da altri), la più affidabile
    const voluta = normalizzaFrase(testo);
    const esatta = (dati.matches ?? [])
      .filter(
        (m) =>
          normalizzaFrase(m.segment) === voluta &&
          eTradotto(testo, m.translation),
      )
      .sort((x, y) => Number(y.quality ?? 0) - Number(x.quality ?? 0))[0];
    if (esatta) return { tradotto: esatta.translation, esatta: true };
    const generale = dati.responseData?.translatedText;
    return eTradotto(testo, generale)
      ? { tradotto: generale, esatta: false }
      : { esatta: false };
  } finally {
    clearTimeout(timer);
  }
}

export async function traduciFrase(testo: string): Promise<EsitoTraduzione> {
  const nota = traduzioneNota(testo);
  if (nota) return nota;

  try {
    const salvata = await AsyncStorage.getItem(CHIAVE(testo));
    if (salvata) {
      const t = JSON.parse(salvata) as Traduzione;
      if (eTradotto(testo, t.testo)) return t;
    }
  } catch {
    // se la memoria non risponde, si va avanti con la traduzione online
  }

  try {
    // Due tentativi: se il primo restituisce la frase non tradotta, si
    // riprova con l'altra codifica dell'indirizzo
    let migliore: Tentativo = { esatta: false };
    for (const variante of [0, 1]) {
      const t = await chiediAMyMemory(testo, variante);
      // ogni richiesta a MyMemory consuma i caratteri della frase; se il
      // limite è finito, il contatore va a zero
      if (t.quotaFinita) await salvaUso(LIMITE_GIORNALIERO);
      else await registraUso(testo.length);
      if (t.quotaFinita)
        return {
          errore:
            "Per oggi le traduzioni automatiche gratuite sono finite: riprova domani. Sotto trovi la traduzione parola per parola.",
        };
      if (t.tradotto && (t.esatta || !migliore.tradotto)) migliore = t;
      if (t.esatta) break;
    }
    if (!migliore.tradotto)
      return {
        errore:
          "La traduzione automatica non è riuscita a tradurre questa frase: guarda la traduzione parola per parola.",
      };
    const risultato: Traduzione = {
      testo: ripulisci(testo, decodifica(migliore.tradotto)),
      fonte: migliore.esatta ? "automatica" : "approssimativa",
    };
    // Si salva solo una traduzione sicura: quelle approssimative si
    // richiedono la volta dopo, magari va meglio
    if (migliore.esatta) {
      try {
        await AsyncStorage.setItem(CHIAVE(testo), JSON.stringify(risultato));
      } catch {
        // non salvata: la prossima volta si chiederà di nuovo
      }
    }
    return risultato;
  } catch {
    return {
      errore:
        "Senza connessione la traduzione della frase non è disponibile. Sotto trovi quella parola per parola, che funziona sempre.",
    };
  }
}
