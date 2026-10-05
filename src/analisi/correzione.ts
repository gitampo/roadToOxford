/**
 * La correzione delle risposte di "Impara dal contesto".
 * 1. La risposta si confronta con le soluzioni senza badare a maiuscole,
 *    punteggiatura e forme contratte (I've = I have, she's been = she has
 *    been, I'd studied = I had studied).
 * 2. Se non è identica a nessuna, si trova la soluzione più vicina e si
 *    dice quali parole mancano o sono in più.
 * 3. La risposta passa dal motore di analisi: si controlla il tempo verbale
 *    (hai usato il past simple, qui serve il present perfect...) e si
 *    riportano gli errori tipici che il motore riconosce (I have 20 years,
 *    did you went...).
 * 4. Se il tempo è giusto ma manca una parola del vocabolario del contesto,
 *    si rimanda al suggerimento «Parole utili» (senza dire la parola).
 * Esito: giusta (identica a una soluzione), quasi (molto vicina, tempo
 * giusto, nessun errore: accettata), sbagliata.
 */

import type { Contesto } from "@/data/contesti";
import { analizza } from "./index";

export type Messaggio = {
  tipo: "tempo" | "errore" | "parole" | "nota";
  testo: string;
  lezione?: string;
};

export type Correzione = {
  esito: "giusta" | "quasi" | "sbagliata";
  // La soluzione più vicina alla risposta
  vicina: string;
  messaggi: Messaggio[];
};

const PARTICIPI_COMUNI =
  "been|gone|done|had|got|seen|made|taken|left|finished|lived|worked|known|studied|eaten|written|told|given|arrived|started|bought|found|heard|lost|met|paid|read|said|sent|sold|spent|thought|won|broken|chosen|forgotten|spoken|stolen|woken|driven|flown|grown|shown|accepted|passed|called|visited|travelled|decided|changed|happened|learned|learnt|tried|wanted|waited|watched|played|opened|closed|helped";

// La frase in parole confrontabili: minuscole, contrazioni sciolte, senza
// punteggiatura
export function parolePer(frase: string) {
  return frase
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/\bwon't\b/g, "will not")
    .replace(/\bcan't\b/g, "can not")
    .replace(/\bcannot\b/g, "can not")
    .replace(/\bshan't\b/g, "shall not")
    .replace(/n't\b/g, " not")
    .replace(/'m\b/g, " am")
    .replace(/'re\b/g, " are")
    .replace(/'ve\b/g, " have")
    .replace(/'ll\b/g, " will")
    .replace(new RegExp(`'s (${PARTICIPI_COMUNI})\\b`, "g"), " has $1")
    .replace(new RegExp(`'d (${PARTICIPI_COMUNI}|better)\\b`, "g"), " had $1")
    .replace(/'d\b/g, " would")
    .replace(/(\w)'s\b/g, (_, c) => `${c} is`)
    .replace(/[^a-z0-9' ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

// Le parole grammaticali: se la differenza è su una di queste, la frase è
// sbagliata (had/would, have/has, been...), non "quasi giusta"
const GRAMMATICALI = new Set([
  "am",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "shall",
  "should",
  "can",
  "could",
  "may",
  "might",
  "must",
  "not",
  "to",
  "for",
  "since",
  "ago",
  "by",
  "in",
  "on",
  "at",
  "the",
  "a",
  "an",
  "if",
  "when",
  "who",
  "that",
  "which",
  "used",
  "going",
]);

// Quante lettere bisogna cambiare per passare da a a b (distanza di
// Levenshtein): serve a riconoscere i refusi (studing → studying)
function distanza(a: string, b: string) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [
    i,
    ...new Array<number>(b.length).fill(0),
  ]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
  return d[a.length][b.length];
}

// Che tipo di parola è ciascuna parola mancante, guardando come il motore
// analizza la soluzione (had = un verbo ausiliare, for = una preposizione):
// così si aiuta senza dire la parola
const TIPI: Record<string, [string, string]> = {
  nome: ["un nome", "nomi"],
  aggettivo: ["un aggettivo", "aggettivi"],
  avverbio: ["un avverbio", "avverbi"],
  pronome: ["un pronome", "pronomi"],
  articolo: ["un articolo", "articoli"],
  preposizione: ["una preposizione", "preposizioni"],
  congiunzione: ["una congiunzione", "congiunzioni"],
  numerale: ["un numero", "numeri"],
  interiezione: ["un'interiezione", "interiezioni"],
  ausiliare: ["un verbo ausiliare", "verbi ausiliari"],
  verbo: ["un verbo", "verbi"],
};

function tipiDelleParole(mancano: string[], soluzione: string) {
  let parole: { forma: string; tipo: string }[] = [];
  try {
    const a = analizza(soluzione)[0];
    const principali = new Set(a.gruppi.map((g) => g.principale));
    parole = a.parole.map((p, i) => ({
      forma: p.forma,
      tipo:
        p.categoria === "verbo" && !principali.has(i) && p.base !== "to"
          ? "ausiliare"
          : p.categoria,
    }));
  } catch {
    // senza analisi si dice solo quante parole mancano
  }
  const conta = new Map<string, number>();
  for (const w of mancano) {
    const k = parole.findIndex((p) => p.forma === w);
    const tipo = k >= 0 ? parole[k].tipo : "parola";
    if (k >= 0) parole.splice(k, 1);
    conta.set(tipo, (conta.get(tipo) ?? 0) + 1);
  }
  return [...conta.entries()].map(([tipo, n]) => {
    const [uno, molti] = TIPI[tipo] ?? ["una parola", "parole"];
    return n === 1 ? uno : `${n} ${molti}`;
  });
}

// "a, b e c"
function elenca(voci: string[]) {
  return voci.length <= 1
    ? (voci[0] ?? "")
    : `${voci.slice(0, -1).join(", ")} e ${voci[voci.length - 1]}`;
}

// La sottosequenza comune più lunga tra due liste di parole
function lcs(a: string[], b: string[]) {
  const t = Array.from({ length: a.length + 1 }, () =>
    new Array<number>(b.length + 1).fill(0),
  );
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      t[i][j] =
        a[i - 1] === b[j - 1]
          ? t[i - 1][j - 1] + 1
          : Math.max(t[i - 1][j], t[i][j - 1]);
  return t[a.length][b.length];
}

// Le parole di b che non compaiono in a (contando i doppioni)
function differenza(a: string[], b: string[]) {
  const resto = [...a];
  const mancano: string[] = [];
  for (const w of b) {
    const k = resto.indexOf(w);
    if (k >= 0) resto.splice(k, 1);
    else mancano.push(w);
  }
  return mancano;
}

export function correggi(risposta: string, c: Contesto): Correzione {
  const tue = parolePer(risposta);
  const candidati = c.soluzioni.map((s) => {
    const p = parolePer(s);
    return { s, p, simile: (2 * lcs(tue, p)) / (tue.length + p.length || 1) };
  });
  candidati.sort((x, y) => y.simile - x.simile);
  const migliore = candidati[0];
  const identica = migliore.p.join(" ") === tue.join(" ");
  const messaggi: Messaggio[] = [];

  if (identica) return { esito: "giusta", vicina: migliore.s, messaggi };

  // Il motore di analisi sulla risposta: tempo verbale ed errori tipici
  let tempoOk = true;
  let errori = 0;
  try {
    const analisi = analizza(risposta)[0];
    if (analisi) {
      const attesi = c.tempo.toLowerCase().split("|");
      const tempi = analisi.gruppi
        .filter((g) => !g.coda)
        .map((g) => g.tempo.toLowerCase());
      tempoOk = tempi.some((t) => attesi.some((a) => t.includes(a)));
      if (!tempoOk) {
        const usati = analisi.gruppi.filter(
          (g) => !g.coda && g.modo !== "gerundio",
        );
        const elenco = usati
          .map(
            (g) =>
              `«${analisi.parole
                .filter((_, i) => g.parole.includes(i))
                .map((p) => p.testo)
                .join(" ")}» (${g.tempo})`,
          )
          .join(", ");
        messaggi.push({
          tipo: "tempo",
          testo: usati.length
            ? `Hai usato ${elenco}, ma qui non va bene. ${c.suggerimenti[0]}`
            : `Nella tua frase manca il verbo giusto. ${c.suggerimenti[0]}`,
          lezione: c.lezione,
        });
      }
      for (const e of analisi.semantica.errori) {
        errori++;
        messaggi.push({
          tipo: "errore",
          testo: `«${e.testo}» → ${e.correzione}. ${e.regola}`,
          lezione: e.lezione,
        });
      }
    }
  } catch {
    // se l'analisi non riesce, resta il confronto parola per parola
  }

  // Le parole che mancano e quelle in più rispetto alla soluzione più vicina
  const mancanoGrezze = differenza(tue, migliore.p);
  const inPiuGrezze = differenza(migliore.p, tue);
  // I refusi: una parola in più che somiglia molto a una che manca
  // (studing ↔ studying)
  const refusi: [string, string][] = [];
  for (const w of [...inPiuGrezze]) {
    const giusta = mancanoGrezze.find(
      (x) => distanza(w, x) <= Math.max(1, Math.floor(x.length / 4)),
    );
    if (giusta) {
      refusi.push([w, giusta]);
      inPiuGrezze.splice(inPiuGrezze.indexOf(w), 1);
      mancanoGrezze.splice(mancanoGrezze.indexOf(giusta), 1);
    }
  }
  const mancano = mancanoGrezze;
  const inPiu = inPiuGrezze;
  for (const [sbagliata, giusta] of refusi)
    messaggi.push({
      tipo: "errore",
      testo: `Attenzione all'ortografia: «${sbagliata}» si scrive «${giusta}».`,
    });
  // "Quasi giusta" solo se le differenze non toccano la grammatica (un
  // ausiliare, una preposizione, un articolo...) e il tempo è giusto
  const grammaticale = [...mancano, ...inPiu].some((w) => GRAMMATICALI.has(w));
  // e se qualcosa cambia davvero: le stesse parole in un altro ordine non sono
  // "quasi giuste" (Never I have seen... invece di Never have I seen...)
  const soloOrdine =
    mancano.length === 0 && inPiu.length === 0 && refusi.length === 0;
  const quasi =
    migliore.simile >= 0.8 &&
    tempoOk &&
    errori === 0 &&
    !grammaticale &&
    !soloOrdine;
  if (migliore.simile < 0.4) {
    messaggi.push({
      tipo: "parole",
      testo:
        "La tua frase è molto diversa da quella attesa: rileggi bene la consegna (che cosa devi dire, e a chi).",
    });
  } else if (quasi) {
    // Quasi giusta: la soluzione si può mostrare, non c'è più niente da
    // scoprire
    messaggi.push({
      tipo: "parole",
      testo: `Una piccola differenza rispetto a «${migliore.s}»: va bene lo stesso, ma confrontale.`,
    });
  } else if (mancano.length || inPiu.length) {
    // Sbagliata: niente spoiler. Le parole dello studente da cambiare si
    // citano (sono sue); quelle che mancano si descrivono solo per tipo
    const parti = [
      inPiu.length
        ? `da togliere o cambiare: ${inPiu.map((w) => `«${w}»`).join(", ")}`
        : "",
      mancano.length
        ? `${mancano.length === 1 ? "ti manca" : "ti mancano"} ${elenca(tipiDelleParole(mancano, migliore.s))}`
        : "",
    ].filter(Boolean);
    messaggi.push({
      tipo: "parole",
      testo: `Nella tua frase: ${parti.join("; ")}.`,
    });
    // Il tempo è giusto e manca una parola del vocabolario del contesto
    // (occhiali di protezione → safety glasses): il problema è il lessico,
    // non la grammatica. Si rimanda al suggerimento con le parole
    const lessico = new Set(
      c.parole
        .flatMap(([, en]) => en.toLowerCase().split(/[^a-z']+/))
        .filter((w) => w.length > 1 && !GRAMMATICALI.has(w)),
    );
    if (tempoOk && mancano.some((w) => lessico.has(w)))
      messaggi.push({
        tipo: "nota",
        testo:
          "Il tempo verbale va bene: ti manca una parola del vocabolario. Se non ti viene in mente come si dice, sblocca il suggerimento «Parole utili».",
      });
  } else if (!identica && !refusi.length) {
    messaggi.push({
      tipo: "parole",
      testo: "Le parole ci sono tutte, ma l'ordine non è quello giusto.",
    });
  }

  return { esito: quasi ? "quasi" : "sbagliata", vicina: migliore.s, messaggi };
}
