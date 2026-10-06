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
import { cercaNelDizionario } from "./dizionario";
import { baseVerbo } from "./parole";

export type Messaggio = {
  tipo: "tempo" | "errore" | "parole" | "nota";
  testo: string;
  // Per gli errori puntuali: il pezzo sbagliato della risposta e, se si può
  // dire senza svelare la soluzione, come va corretto (She go → She goes)
  sbagliato?: string;
  giusto?: string;
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

// Che cosa vuol dire una parola inglese: prima nel vocabolario del contesto
// (evening → serata), poi nel dizionario dell'app (day → giorno), anche alla
// forma base (went → go)
function significato(parola: string, c: Contesto) {
  const w = parola.toLowerCase();
  for (const [it, en] of c.parole) {
    const alternative = en
      .toLowerCase()
      .split("/")
      .map((x) => x.trim());
    if (alternative.includes(w)) return it;
  }
  return (
    cercaNelDizionario(w, "nome") ??
    cercaNelDizionario(baseVerbo(w), "verbo") ??
    cercaNelDizionario(w.replace(/s$/, ""), "nome")
  );
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
  "of",
  "with",
  "about",
  "from",
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

// Il tipo di ciascuna parola mancante (nome, verbo, ausiliare...)
function tipiPer(mancano: string[], soluzione: string) {
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
  return mancano.map((w) => {
    const k = parole.findIndex((p) => p.forma === w);
    const tipo = k >= 0 ? parole[k].tipo : "parola";
    if (k >= 0) parole.splice(k, 1);
    return tipo;
  });
}

function tipiDelleParole(mancano: string[], soluzione: string) {
  const conta = new Map<string, number>();
  for (const tipo of tipiPer(mancano, soluzione))
    conta.set(tipo, (conta.get(tipo) ?? 0) + 1);
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
    // Tutte le frasi della risposta (Good morning! How are you?)
    const frasi = analizza(risposta);
    const gruppi = frasi.flatMap((a) =>
      a.gruppi
        .filter((g) => !g.coda)
        .map((g) => ({
          g,
          testo: a.parole
            .filter((_, i) => g.parole.includes(i))
            .map((p) => p.testo)
            .join(" "),
        })),
    );
    if (frasi.length) {
      const attesi = c.tempo.toLowerCase().split("|");
      tempoOk = gruppi.some(({ g }) =>
        attesi.some((a) => g.tempo.toLowerCase().includes(a)),
      );
      if (!tempoOk) {
        const usati = gruppi.filter(({ g }) => g.modo !== "gerundio");
        const elenco = usati
          .map(({ g, testo }) => `«${testo}» (${g.tempo})`)
          .join(", ");
        messaggi.push({
          tipo: "tempo",
          testo: usati.length
            ? `Hai usato ${elenco}, ma qui non va bene. ${c.suggerimenti[0]}`
            : `Nella tua frase manca il verbo giusto. ${c.suggerimenti[0]}`,
          lezione: c.lezione,
        });
      }
      for (const e of frasi.flatMap((a) => a.semantica.errori)) {
        errori++;
        messaggi.push({
          tipo: "errore",
          sbagliato: e.testo,
          giusto: e.correzione,
          testo: e.regola,
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
  // Le forme sbagliate: la parola giusta nella forma sbagliata (she work →
  // works, forward to see → seeing, two brother → brothers): è un errore di grammatica, e la forma
  // giusta non si dice
  const forme: string[] = [];
  for (const w of [...inPiuGrezze]) {
    const giusta = mancanoGrezze.find(
      (x) =>
        x !== w &&
        (baseVerbo(x) === baseVerbo(w) ||
          // singolare ↔ plurale: two brother → brothers
          x.replace(/e?s$/, "") === w.replace(/e?s$/, "")),
    );
    if (giusta) {
      forme.push(w);
      inPiuGrezze.splice(inPiuGrezze.indexOf(w), 1);
      mancanoGrezze.splice(mancanoGrezze.indexOf(giusta), 1);
    }
  }
  // I refusi: una parola in più che somiglia molto a una che manca
  // (studing ↔ studying)
  const refusi: [string, string][] = [];
  for (const w of [...inPiuGrezze]) {
    const giusta = mancanoGrezze.find(
      (x) =>
        // (she ↔ the, in ↔ on sono parole diverse, non errori di battitura)
        x.length >= 4 &&
        !GRAMMATICALI.has(x) &&
        !GRAMMATICALI.has(w) &&
        distanza(w, x) <= Math.max(1, Math.floor(x.length / 4)),
    );
    if (giusta) {
      refusi.push([w, giusta]);
      inPiuGrezze.splice(inPiuGrezze.indexOf(w), 1);
      mancanoGrezze.splice(mancanoGrezze.indexOf(giusta), 1);
    }
  }
  const mancano = mancanoGrezze;
  const inPiu = inPiuGrezze;
  for (const w of forme)
    messaggi.push({
      tipo: "errore",
      sbagliato: w,
      testo:
        "È la parola giusta, ma non nella forma giusta: pensa alla persona, al tempo, al singolare o plurale e a che cosa viene prima (un ausiliare, una preposizione, un numero...).",
    });
  for (const [sbagliata, giusta] of refusi)
    messaggi.push({
      tipo: "errore",
      sbagliato: sbagliata,
      giusto: giusta,
      testo: "Attenzione all'ortografia.",
    });
  // "Quasi giusta" solo se le differenze non toccano la grammatica (un
  // ausiliare, una preposizione, un articolo, la forma o la scelta di un
  // verbo: said ↔ told) e il tempo è giusto
  const grammaticale =
    forme.length > 0 ||
    [...mancano, ...inPiu].some((w) => GRAMMATICALI.has(w)) ||
    tipiPer(mancano, migliore.s).some(
      (t) => t === "verbo" || t === "ausiliare",
    );
  // e se qualcosa cambia davvero: le stesse parole in un altro ordine non sono
  // "quasi giuste" (Never I have seen... invece di Never have I seen...)
  const soloOrdine =
    mancano.length === 0 &&
    inPiu.length === 0 &&
    refusi.length === 0 &&
    forme.length === 0;
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
    // Si spiega ogni differenza: le parole al posto di quelle attese (con
    // il significato di tutte e due: day = giorno, evening = serata), poi
    // quelle in più e quelle che mancano
    const coppie = Math.min(mancano.length, inPiu.length);
    for (let k = 0; k < coppie; k++) {
      const tua = inPiu[k];
      const attesa = mancano[k];
      const sTua = significato(tua, c);
      const sAttesa = significato(attesa, c);
      const sensi = [
        sTua ? `«${tua}» vuol dire «${sTua}»` : "",
        sAttesa ? `«${attesa}» vuol dire «${sAttesa}»` : "",
      ].filter(Boolean);
      messaggi.push({
        tipo: "parole",
        sbagliato: tua,
        giusto: attesa,
        testo: `${sensi.length ? sensi.join(", ") + ". " : ""}Qui la parola più adatta alla situazione è «${attesa}»: la tua frase va bene lo stesso, ma il senso cambia un po'.`,
      });
    }
    for (const w of inPiu.slice(coppie))
      messaggi.push({
        tipo: "parole",
        sbagliato: w,
        testo: `«${w}» nella frase attesa non c'è: puoi lasciarlo, ma la frase sta in piedi anche senza.`,
      });
    for (const w of mancano.slice(coppie)) {
      const sw = significato(w, c);
      messaggi.push({
        tipo: "parole",
        testo: `Nella frase attesa c'è anche «${w}»${sw ? ` («${sw}»)` : ""}: aggiungila per essere più precisa.`,
      });
    }
    // Se non c'è niente di preciso da dire (né refusi né parole diverse)
    if (!messaggi.length)
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
        ? `${mancano.length === 1 ? "ti manca o stai sbagliando" : "ti mancano o stai sbagliando"} ${elenca(tipiDelleParole(mancano, migliore.s))}`
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
  } else if (!identica && !refusi.length && !forme.length) {
    messaggi.push({
      tipo: "parole",
      testo: "Le parole ci sono tutte, ma l'ordine non è quello giusto.",
    });
  }

  return { esito: quasi ? "quasi" : "sbagliata", vicina: migliore.s, messaggi };
}
