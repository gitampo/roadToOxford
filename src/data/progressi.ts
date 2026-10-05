/**
 * Salvataggio dei progressi sul telefono (AsyncStorage).
 * Per ogni lezione si salvano le risposte agli esercizi e il risultato.
 * A parte c'è lo storico: quanto si è studiato giorno per giorno, per il
 * grafico dei miglioramenti.
 */

import { Risultato, StatoEsercizio } from "@/types/lezione";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Progressi = {
  stati: Record<string, StatoEsercizio>;
  risultato: Risultato;
};

const chiave = (id: string) => `progressi:${id}`;

export async function leggiProgressi(id: string): Promise<Progressi | null> {
  try {
    const testo = await AsyncStorage.getItem(chiave(id));
    return testo ? (JSON.parse(testo) as Progressi) : null;
  } catch {
    return null;
  }
}

export async function salvaProgressi(id: string, progressi: Progressi) {
  try {
    await AsyncStorage.setItem(chiave(id), JSON.stringify(progressi));
  } catch {
    // Se il salvataggio fallisce, l'app continua a funzionare senza memoria
  }
}

export async function cancellaProgressi(id: string) {
  try {
    await AsyncStorage.removeItem(chiave(id));
  } catch {}
}

// Legge i risultati di più lezioni in una volta sola (per la lista delle lezioni)
export async function leggiRisultati(
  ids: string[],
): Promise<Record<string, Risultato>> {
  try {
    const coppie = await AsyncStorage.multiGet(ids.map(chiave));
    const risultati: Record<string, Risultato> = {};
    coppie.forEach(([, testo], i) => {
      if (testo) risultati[ids[i]] = (JSON.parse(testo) as Progressi).risultato;
    });
    return risultati;
  } catch {
    return {};
  }
}

// I riquadri aperti di una lezione (per la barra della teoria),
// salvati a parte rispetto alle risposte
const chiaveVisti = (id: string) => `visti:${id}`;

export async function segnaVisto(id: string, pagina: number) {
  try {
    const testo = await AsyncStorage.getItem(chiaveVisti(id));
    const visti: number[] = testo ? JSON.parse(testo) : [];
    if (visti.includes(pagina)) return;
    await AsyncStorage.setItem(
      chiaveVisti(id),
      JSON.stringify([...visti, pagina]),
    );
    // Solo la prima apertura di un riquadro conta come studio
    await registraAttivita({ riquadri: 1 });
  } catch {}
}

// Legge i riquadri visti di più lezioni in una volta sola
export async function leggiVisti(
  ids: string[],
): Promise<Record<string, number[]>> {
  try {
    const coppie = await AsyncStorage.multiGet(ids.map(chiaveVisti));
    const visti: Record<string, number[]> = {};
    coppie.forEach(([, testo], i) => {
      if (testo) visti[ids[i]] = JSON.parse(testo) as number[];
    });
    return visti;
  } catch {
    return {};
  }
}

// ---------- Storico ----------

// Quello che si è fatto in un giorno
export type Giorno = { risposte: number; giuste: number; riquadri: number };

// Tutti i giorni con attività, sotto la data "2026-10-04"
export type Storico = Record<string, Giorno>;

const CHIAVE_STORICO = "storico";

// La data di oggi (o di d), nell'ora del telefono. toISOString() userebbe
// l'ora di Greenwich: in Italia, poco dopo mezzanotte, darebbe il giorno prima
export function dataDi(d = new Date()) {
  const due = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${due(d.getMonth() + 1)}-${due(d.getDate())}`;
}

export async function leggiStorico(): Promise<Storico> {
  try {
    const testo = await AsyncStorage.getItem(CHIAVE_STORICO);
    return testo ? (JSON.parse(testo) as Storico) : {};
  } catch {
    return {};
  }
}

// Le scritture vanno in fila: se due arrivassero insieme (un riquadro aperto
// e una risposta), entrambe leggerebbero lo stesso storico e la seconda
// cancellerebbe la prima
let coda: Promise<void> = Promise.resolve();

// Aggiunge al giorno di oggi quello che si è appena fatto
export function registraAttivita(fatto: Partial<Giorno>) {
  coda = coda.then(async () => {
    try {
      const storico = await leggiStorico();
      const oggi = dataDi();
      const g = storico[oggi] ?? { risposte: 0, giuste: 0, riquadri: 0 };
      storico[oggi] = {
        risposte: g.risposte + (fatto.risposte ?? 0),
        giuste: g.giuste + (fatto.giuste ?? 0),
        riquadri: g.riquadri + (fatto.riquadri ?? 0),
      };
      await AsyncStorage.setItem(CHIAVE_STORICO, JSON.stringify(storico));
    } catch {}
  });
  return coda;
}
