/**
 * Primo passo dell'analisi: la frase divisa in parole, e per ognuna la
 * categoria grammaticale all'italiana (nome, verbo, aggettivo...) con i
 * dettagli ("nome comune di persona, singolare").
 *
 * compromise divide la frase, scioglie le forme contratte (don't = do + not,
 * she's = she + has/is) e propone un'etichetta per ogni parola. Le sue
 * etichette sono un punto di partenza: il dizionario (lessico.ts) e il
 * contesto (le parole vicine) decidono la categoria finale.
 */

import { PARADIGMI } from "@/data/paradigmi";
import { VOCABOLARIO } from "@/data/vocabolario";
import nlp from "compromise";
import {
  ARTICOLI,
  AVVERBI,
  CONGIUNZIONI_COORDINANTI,
  CONGIUNZIONI_SUBORDINANTI,
  DETERMINANTI,
  FORME_BE,
  FORME_DO,
  FORME_HAVE,
  INTERIEZIONI,
  INTERROGATIVI,
  MODALI,
  NOMI_LUOGO,
  NOMI_PERSONA,
  NOMI_TEMPO,
  PARTICIPI_AGGETTIVI,
  POSSESSIVI,
  PREPOSIZIONI,
  PRONOMI,
  RELATIVI_INDEFINITI,
  VERBI_DICHIARATIVI,
} from "./lessico";

export type Categoria =
  | "nome"
  | "verbo"
  | "aggettivo"
  | "avverbio"
  | "pronome"
  | "articolo"
  | "preposizione"
  | "congiunzione"
  | "numerale"
  | "interiezione";

export type Parola = {
  i: number;
  // Come appare nella frase. Nelle forme contratte il primo pezzo ha tutta
  // la forma ("Don't") e il secondo è vuoto
  testo: string;
  // La parola intera, minuscola: per "Don't" è "do" e poi "not"
  forma: string;
  // La forma base (living → live, children → child)
  base: string;
  // Vero se la parola nasce da una contrazione (don't, she's, I'm)
  contratta: boolean;
  tags: Set<string>;
  categoria: Categoria;
  // I dettagli in italiano, per l'analisi grammaticale
  dettaglio: string;
  // Il significato del nome: serve a riconoscere i complementi
  classe?: "persona" | "luogo" | "tempo";
  // La punteggiatura subito dopo (",", "?", "!")
  dopo: string;
};

// Le forme del past simple e del participio irregolari → la forma base
const BASE_IRREGOLARE = new Map<string, string>([["born", "bear"]]);
// I participi passati irregolari (written, gone, born...)
export const PARTICIPI = new Set<string>(["born"]);
// I passati irregolari (went, rose, saw...)
export const PASSATI = new Set<string>();
// I verbi con il passato uguale al presente (cut, put, hit...)
export const INVARIABILI = new Set<string>();
for (const p of PARADIGMI) {
  const base = p.present.split("/")[0].trim();
  for (const f of [
    ...p.past_simple.split("/"),
    ...p.past_participle.split("/"),
  ])
    BASE_IRREGOLARE.set(f.trim().toLowerCase(), base);
  for (const f of p.past_participle.split("/"))
    PARTICIPI.add(f.trim().toLowerCase());
  for (const f of p.past_simple.split("/"))
    PASSATI.add(f.trim().toLowerCase());
  if (p.past_simple.trim().toLowerCase() === base.toLowerCase())
    INVARIABILI.add(base.toLowerCase());
}

// I verbi che vogliono dopo di sé la forma in -ing (I enjoy reading)
const VOGLIONO_ING = new Set([
  "enjoy",
  "like",
  "love",
  "hate",
  "prefer",
  "stop",
  "finish",
  "mind",
  "keep",
  "avoid",
  "suggest",
  "start",
  "begin",
  "consider",
  "miss",
  "practise",
  "practice",
  "imagine",
  "go",
  "spend",
  "can't stand",
]);

// Divide il testo di una forma contratta tra i suoi due pezzi:
// It's → It + 's, Don't → Do + n't, can't → can + n't
function dividiContrazione(testo: string): [string, string] {
  if (/n't$/i.test(testo)) {
    const primo = testo.slice(0, -3);
    const sistemato: Record<string, string> = {
      ca: "can",
      wo: "will",
      sha: "shall",
    };
    const pieno = sistemato[primo.toLowerCase()];
    return [pieno ? primo[0] + pieno.slice(1) : primo, "n't"];
  }
  const k = testo.lastIndexOf("'");
  return k > 0 ? [testo.slice(0, k), testo.slice(k)] : [testo, ""];
}

// Ricompone il testo di alcune parole come era scritto: niente spazio
// prima dei pezzi delle forme contratte ('s, n't, 've)
export function unisci(parole: Parola[], indici: number[]) {
  let testo = "";
  for (const k of [...indici].sort((a, b) => a - b)) {
    const t = parole[k]?.testo ?? "";
    if (!t) continue;
    testo += testo && !/^'|^n't$/.test(t) ? " " + t : t;
  }
  return ricomponi(testo);
}

// Le contrazioni irregolari tornano come erano: will + n't → won't,
// can + n't → can't, shall + n't → shan't
export function ricomponi(testo: string) {
  return testo
    .replace(/\b([Ww])illn't\b/g, "$1on't")
    .replace(/\b([Cc])ann't\b/g, "$1an't")
    .replace(/\b([Ss])halln't\b/g, "$1han't");
}

// Le parole che il vocabolario conosce come verbi (need, want, like...)
let verbiVocabolario: Set<string> | undefined;
function VERBI_VOCABOLARIO() {
  if (!verbiVocabolario)
    verbiVocabolario = new Set(
      VOCABOLARIO.filter((v) => v.usi.some((u) => u.categoria === "verbo")).map(
        (v) => v.parola,
      ),
    );
  return verbiVocabolario;
}

// La forma base di un verbo
export function baseVerbo(forma: string, radice?: string) {
  if (forma in FORME_BE) return "be";
  if (forma in FORME_HAVE) return "have";
  if (forma in FORME_DO) return "do";
  const irregolare = BASE_IRREGOLARE.get(forma);
  if (irregolare) return irregolare;
  if (radice && radice !== forma) return radice;
  const inf = nlp(forma).verbs().toInfinitive().text().toLowerCase();
  return inf || forma;
}

// Le etichette di compromise che fanno pensare a un nome
const eNome = (p: Parola | undefined) =>
  !!p && (p.categoria === "nome" || p.categoria === "pronome");

// Vero se dopo la posizione i c'è, a breve, un verbo con il suo soggetto:
// serve per capire se before/after/since introducono una frase
// (since I was a child: sì; since 2015 and she loves it: no, perché il
// verbo viene dopo and e appartiene a un'altra proposizione)
function seguitoDaFrase(parole: Parola[], i: number) {
  for (let j = i + 1; j < Math.min(parole.length, i + 8); j++) {
    if (parole[j].forma in CONGIUNZIONI_COORDINANTI) return false;
    if (parole[j].tags.has("Verb") && j > i + 1) return true;
    if (parole[j - 1].dopo.match(/[,.;!?]/)) return false;
  }
  return false;
}

// La classe di significato di un nome (persona, luogo, tempo)
function classeNome(forma: string, base: string, tags: Set<string>) {
  if (
    NOMI_TEMPO.has(base) ||
    NOMI_TEMPO.has(forma) ||
    tags.has("Date") ||
    tags.has("Duration")
  )
    return "tempo" as const;
  if (
    tags.has("Person") ||
    tags.has("Actor") ||
    tags.has("FirstName") ||
    NOMI_PERSONA.has(base) ||
    NOMI_PERSONA.has(forma)
  )
    return "persona" as const;
  if (
    tags.has("Place") ||
    tags.has("City") ||
    tags.has("Country") ||
    NOMI_LUOGO.has(base) ||
    NOMI_LUOGO.has(forma)
  )
    return "luogo" as const;
  return undefined;
}

// Divide la frase (o le frasi) in parole con la loro categoria.
// Restituisce una lista di parole per ogni frase
export function dividiInParole(testo: string): Parola[][] {
  const doc = nlp(testo);
  doc.compute("root");
  const frasi = doc.json() as {
    terms: {
      text: string;
      normal: string;
      implicit?: string;
      root?: string;
      tags: string[];
      post: string;
    }[];
  }[];

  return frasi.map((f) => {
    const parole: Parola[] = f.terms.map((t, i) => {
      const forma = (t.implicit ?? t.normal)
        .toLowerCase()
        .replace(/[^a-z0-9'-]/g, "");
      const tags = new Set(t.tags);
      return {
        i,
        testo: t.text,
        forma,
        base: forma,
        contratta: t.implicit !== undefined,
        tags,
        categoria: "nome",
        dettaglio: "",
        dopo: t.post.trim(),
        radice: t.root,
      } as Parola & { radice?: string };
    });
    // Le forme contratte: compromise mette tutto il testo sul primo pezzo
    // ("It's" + ""); qui lo si divide tra i due ("It" + "'s")
    parole.forEach((p, i) => {
      const dopo = parole[i + 1];
      if (p.contratta && p.testo && dopo?.contratta && dopo.testo === "") {
        [p.testo, dopo.testo] = dividiContrazione(p.testo);
        dopo.dopo = p.dopo;
        p.dopo = "";
      }
    });
    // 'd + verbo base è would, non had: I'd DRIVE to Scotland if... (compromise
    // a volte prende drive per un nome e scioglie 'd in had)
    parole.forEach((p, i) => {
      const dopo = parole[i + 1];
      if (
        p.testo === "'d" &&
        p.forma === "had" &&
        dopo &&
        !PARTICIPI.has(dopo.forma) &&
        !dopo.tags.has("PastTense") &&
        !dopo.tags.has("Participle") &&
        !/(ed|en)$/.test(dopo.forma) &&
        dopo.forma !== "better" &&
        (dopo.tags.has("Verb") || VERBI_VOCABOLARIO().has(dopo.forma))
      ) {
        p.forma = "would";
        p.base = "would";
        p.tags.delete("PastTense");
        dopo.tags.delete("Noun");
        dopo.tags.add("Verb");
        dopo.tags.add("Infinitive");
      }
    });
    for (const p of parole) classifica(p, parole);
    correggiDalContesto(parole);
    return parole.filter((p) => p.forma !== "");
  });
}

// La categoria di una parola, guardando prima il dizionario e poi le
// etichette di compromise
function classifica(p: Parola & { radice?: string }, parole: Parola[]) {
  const f = p.forma;
  const t = p.tags;
  const prossima = parole[p.i + 1];
  const precedente = parole[p.i - 1];
  const prossimaNominale =
    !!prossima &&
    (prossima.tags.has("Noun") ||
      prossima.tags.has("Adjective") ||
      prossima.tags.has("Value")) &&
    !prossima.tags.has("Pronoun");

  // one dopo un articolo o un aggettivo, senza un nome dopo: è un pronome
  // che sostituisce un nome (the one = quello, colui; a new one)
  if (
    (f === "one" &&
      precedente &&
      [
        "the",
        "this",
        "that",
        "a",
        "every",
        "which",
        "another",
        "only",
      ].includes(precedente.forma)) ||
    (f === "one" && precedente?.tags.has("Adjective"))
  ) {
    if (
      !prossima ||
      !prossima.tags.has("Noun") ||
      prossima.tags.has("Pronoun")
    ) {
      p.categoria = "pronome";
      p.dettaglio =
        "pronome indefinito (one = quello, colui: sostituisce un nome per non ripeterlo), 3ª persona singolare";
      return;
    }
  }
  if (f === "ones" && precedente) {
    p.categoria = "pronome";
    p.dettaglio =
      "pronome indefinito (ones = quelli: sostituisce un nome plurale), 3ª persona plurale";
    return;
  }

  // whatever, whoever, whichever: pronomi relativi indefiniti (davanti a un
  // nome sono aggettivi: whatever reason = qualunque motivo)
  if (f in RELATIVI_INDEFINITI) {
    if (
      prossima &&
      prossima.tags.has("Noun") &&
      !prossima.tags.has("Pronoun")
    ) {
      p.categoria = "aggettivo";
      p.dettaglio = `aggettivo relativo indefinito ("${RELATIVI_INDEFINITI[f]}")`;
    } else {
      p.categoria = "pronome";
      p.dettaglio = `pronome relativo indefinito ("${RELATIVI_INDEFINITI[f]}")`;
    }
    return;
  }

  // what in mezzo alla frase, seguito da soggetto e verbo: ciò che
  // (I know what you did, Tell me what you need)
  if (
    f === "what" &&
    (p.i > 0 || !parole[parole.length - 1]?.dopo.includes("?")) &&
    prossima &&
    (prossima.tags.has("Pronoun") ||
      prossima.tags.has("Noun") ||
      prossima.tags.has("Determiner")) &&
    parole.slice(p.i + 2, p.i + 6).some((q) => q.tags.has("Verb"))
  ) {
    p.categoria = "pronome";
    p.dettaglio =
      'pronome relativo indefinito ("ciò che", o "che cosa" in una domanda indiretta)';
    return;
  }

  // Numeri
  if (
    t.has("Value") ||
    t.has("Cardinal") ||
    t.has("Ordinal") ||
    /^\d/.test(f)
  ) {
    const ordinale =
      t.has("Ordinal") ||
      (/(st|nd|rd|th)$/.test(f) && /^\d|first|second|third/.test(f));
    p.categoria = "numerale";
    p.dettaglio = ordinale
      ? "aggettivo numerale ordinale"
      : "aggettivo numerale cardinale";
    return;
  }

  if (f in ARTICOLI) {
    p.categoria = "articolo";
    p.dettaglio = ARTICOLI[f];
    return;
  }

  // Verbi ausiliari e modali: la loro funzione la decide verbi.ts
  if (f in FORME_BE || f in FORME_HAVE || f in FORME_DO || f in MODALI) {
    p.categoria = "verbo";
    p.base = f in MODALI ? f : baseVerbo(f);
    return;
  }

  if (f === "not") {
    p.categoria = "avverbio";
    p.dettaglio = "avverbio di negazione";
    return;
  }

  // "to" davanti a un verbo è il segno dell'infinito (to go)
  if (
    f === "to" &&
    prossima &&
    prossima.tags.has("Verb") &&
    !prossima.tags.has("Gerund") &&
    !prossima.tags.has("PastTense")
  ) {
    p.categoria = "verbo";
    p.dettaglio = "to dell'infinito";
    p.base = "to";
    return;
  }

  // Aggettivi possessivi (my, your...) o pronomi (her, his)
  if (f in POSSESSIVI) {
    // my, your, our, their, its vanno sempre davanti a un nome
    const sempreAggettivo =
      ["my", "your", "our", "their", "its"].includes(f) && !!prossima;
    if (
      sempreAggettivo ||
      prossimaNominale ||
      (prossima && prossima.tags.has("Noun"))
    ) {
      p.categoria = "aggettivo";
      p.dettaglio = `aggettivo possessivo, ${POSSESSIVI[f]}`;
    } else if (f === "her") {
      p.categoria = "pronome";
      p.dettaglio =
        "pronome personale complemento, 3ª persona singolare femminile";
    } else {
      p.categoria = "pronome";
      p.dettaglio = `pronome possessivo, ${POSSESSIVI[f]}`;
    }
    return;
  }

  // A inizio frase senza punto di domanda: When/Where introducono una
  // subordinata, What/How un'esclamazione (What a day!)
  const domanda = parole[parole.length - 1]?.dopo.includes("?");
  if (p.i === 0 && !domanda && (f === "when" || f === "where")) {
    p.categoria = "congiunzione";
    p.dettaglio =
      f === "when"
        ? "congiunzione subordinante temporale"
        : "congiunzione subordinante di luogo";
    return;
  }
  if (
    p.i === 0 &&
    !domanda &&
    (f === "what" || f === "how") &&
    parole[parole.length - 1]?.dopo.includes("!")
  ) {
    p.categoria = f === "what" ? "aggettivo" : "avverbio";
    p.dettaglio =
      f === "what"
        ? "aggettivo esclamativo (che...!)"
        : "avverbio esclamativo (come...!)";
    return;
  }

  // Parole interrogative a inizio frase (What, Where, How...)
  if (f in INTERROGATIVI && p.i === 0) {
    if (["where", "when", "why", "how"].includes(f)) {
      p.categoria = "avverbio";
      p.dettaglio = `avverbio interrogativo ("${INTERROGATIVI[f]}")`;
    } else if (prossimaNominale && f !== "who") {
      p.categoria = "aggettivo";
      p.dettaglio = `aggettivo interrogativo ("${INTERROGATIVI[f]}")`;
    } else {
      p.categoria = "pronome";
      p.dettaglio = `pronome interrogativo ("${INTERROGATIVI[f]}")`;
    }
    return;
  }

  // Pronomi relativi: dopo un nome (the man who..., the book that...)
  if (["who", "whom", "which", "whose"].includes(f) && p.i > 0) {
    p.categoria = "pronome";
    p.dettaglio =
      f === "whose"
        ? "pronome relativo (possesso: il cui)"
        : "pronome relativo";
    return;
  }

  // that: dimostrativo, relativo o congiunzione
  if (f === "that") {
    if (
      precedente &&
      ((precedente.tags.has("Noun") && !precedente.tags.has("Pronoun")) ||
        [
          "one",
          "ones",
          "something",
          "anything",
          "everything",
          "nothing",
          "all",
          "those",
          "someone",
          "anyone",
          "everyone",
        ].includes(precedente.forma)) &&
      prossima &&
      (prossima.tags.has("Verb") || eNome(prossima))
    ) {
      p.categoria = "pronome";
      p.dettaglio = "pronome relativo";
    } else if (
      precedente &&
      precedente.tags.has("Verb") &&
      VERBI_DICHIARATIVI.has(baseVerbo(precedente.forma)) &&
      prossima &&
      (eNome(prossima) || prossima.tags.has("Determiner"))
    ) {
      p.categoria = "congiunzione";
      p.dettaglio = "congiunzione subordinante dichiarativa";
    } else if (prossimaNominale) {
      p.categoria = "aggettivo";
      p.dettaglio = DETERMINANTI.that;
    } else {
      p.categoria = "pronome";
      p.dettaglio = "pronome dimostrativo (lontano), singolare";
    }
    return;
  }

  // such a / such an: aggettivo (such a thing = una cosa simile)
  if (f === "such" && prossima?.forma && ["a", "an"].includes(prossima.forma)) {
    p.categoria = "aggettivo";
    p.dettaglio =
      "aggettivo indefinito (such a = un tale, una cosa del genere)";
    return;
  }

  // Dimostrativi e indefiniti: aggettivi davanti al nome, se no pronomi
  if (
    f in DETERMINANTI &&
    !(f in PRONOMI) &&
    !(f in AVVERBI && !prossimaNominale)
  ) {
    if (prossimaNominale) {
      p.categoria = "aggettivo";
      p.dettaglio = DETERMINANTI[f];
    } else {
      p.categoria = "pronome";
      p.dettaglio = DETERMINANTI[f].replace("aggettivo", "pronome");
    }
    return;
  }

  if (f in PRONOMI && !(f === "one" && prossimaNominale)) {
    const info = PRONOMI[f];
    p.categoria = "pronome";
    const persona = info.persona ? `, ${info.persona}ª persona` : "";
    const numero = info.numero
      ? ` ${info.numero}`
      : f === "you"
        ? " singolare o plurale"
        : "";
    p.dettaglio = `pronome ${info.tipo}${persona}${numero}`;
    if (f === "it" || f === "you") {
      // Soggetto o complemento dipende dalla posizione
      const soggetto = !!prossima && prossima.tags.has("Verb");
      p.dettaglio = `pronome personale ${soggetto ? "soggetto" : "complemento"}${persona}${numero}`;
    }
    return;
  }

  // Congiunzioni subordinanti (before, after, since possono essere anche
  // preposizioni: lo sono se non le segue una frase)
  if (f in CONGIUNZIONI_SUBORDINANTI && f !== "that" && f !== "where") {
    const ambigua = [
      "before",
      "after",
      "since",
      "until",
      "till",
      "as",
    ].includes(f);
    if (!ambigua || seguitoDaFrase(parole, p.i)) {
      p.categoria = "congiunzione";
      p.dettaglio = `congiunzione ${CONGIUNZIONI_SUBORDINANTI[f].tipo}`;
      return;
    }
  }
  if (f === "where" || f === "when") {
    p.categoria = p.i === 0 ? "avverbio" : "congiunzione";
    p.dettaglio =
      f === "where"
        ? "avverbio relativo di luogo"
        : "congiunzione subordinante temporale";
    return;
  }

  if (f in CONGIUNZIONI_COORDINANTI) {
    // so e yet possono essere avverbi (so happy, not yet)
    if (f === "so" && prossima && prossima.tags.has("Adjective")) {
      p.categoria = "avverbio";
      p.dettaglio = "avverbio di quantità (così)";
    } else if (f === "yet" && !prossima) {
      p.categoria = "avverbio";
      p.dettaglio = "avverbio di tempo (ancora, già)";
    } else {
      p.categoria = "congiunzione";
      p.dettaglio = `congiunzione ${CONGIUNZIONI_COORDINANTI[f]}`;
    }
    return;
  }

  // like: verbo (I like, do you like, would like) o preposizione (looks like)
  const likeVerbo =
    f === "like" &&
    !!precedente &&
    ((precedente.forma in PRONOMI &&
      PRONOMI[precedente.forma].caso !== "complemento" &&
      precedente.forma !== "it") ||
      precedente.forma === "you" ||
      precedente.forma === "not" ||
      precedente.forma === "to" ||
      precedente.forma in FORME_DO ||
      precedente.forma in MODALI ||
      (precedente.tags.has("Noun") &&
        !parole.slice(0, p.i).some((q) => q.tags.has("Verb"))));
  if (likeVerbo) {
    p.categoria = "verbo";
    p.base = "like";
    return;
  }
  if (
    PREPOSIZIONI.has(f) &&
    !(
      f in AVVERBI &&
      (!prossima ||
        prossima.tags.has("Verb") ||
        prossima.tags.has("Conjunction"))
    )
  ) {
    p.categoria = "preposizione";
    p.dettaglio = "preposizione";
    return;
  }

  // only tra un articolo e un nome è un aggettivo (the only person = l'unica)
  if (f === "only" && precedente?.categoria === "articolo") {
    p.categoria = "aggettivo";
    p.dettaglio = "aggettivo qualificativo (only = unico, solo)";
    return;
  }

  if (f in AVVERBI) {
    p.categoria = "avverbio";
    p.dettaglio = `avverbio ${AVVERBI[f].tipo}`;
    return;
  }

  // Interiezioni, se stanno in apertura (Oh, Wow, Hello...)
  if (INTERIEZIONI.has(f) && (p.i === 0 || p.dopo === "," || p.dopo === "!")) {
    p.categoria = "interiezione";
    p.dettaglio = "interiezione";
    return;
  }

  // Da qui decidono le etichette di compromise
  if (t.has("Verb")) {
    p.categoria = "verbo";
    p.base = baseVerbo(f, p.radice);
    return;
  }
  if (
    t.has("Adverb") ||
    (/ly$/.test(f) && t.has("Adjective") && f.length > 4)
  ) {
    p.categoria = "avverbio";
    p.dettaglio = /ly$/.test(f) ? "avverbio di modo" : "avverbio";
    return;
  }
  if (t.has("Adjective") || t.has("Comparable")) {
    p.categoria = "aggettivo";
    p.dettaglio = gradoAggettivo(f, t);
    return;
  }
  if (t.has("Conjunction")) {
    p.categoria = "congiunzione";
    p.dettaglio = "congiunzione";
    return;
  }
  if (t.has("Preposition")) {
    p.categoria = "preposizione";
    p.dettaglio = "preposizione";
    return;
  }
  if (t.has("Expression")) {
    p.categoria = "interiezione";
    p.dettaglio = "interiezione";
    return;
  }

  // Tutto il resto è un nome
  descriviNome(p);
}

function gradoAggettivo(f: string, t: Set<string>) {
  if (t.has("Superlative") || /est$/.test(f))
    return "aggettivo qualificativo, grado superlativo";
  if (
    t.has("Comparative") ||
    (/er$/.test(f) && f.length > 4 && !/(ver|ber|ter|der|ger)$/.test(f))
  )
    return "aggettivo qualificativo, grado comparativo";
  return "aggettivo qualificativo";
}

function descriviNome(p: Parola & { radice?: string }) {
  const t = p.tags;
  p.categoria = "nome";
  const proprio = t.has("ProperNoun") || (/^[A-Z]/.test(p.testo) && p.i > 0);
  const plurale = t.has("Plural");
  p.base = plurale
    ? nlp(p.forma).nouns().toSingular().text().toLowerCase() || p.forma
    : p.forma;
  p.classe = classeNome(p.forma, p.base, t);
  const di =
    p.classe === "persona"
      ? " di persona"
      : p.classe === "luogo"
        ? " di luogo"
        : p.classe === "tempo"
          ? " di tempo"
          : "";
  const genitivo = t.has("Possessive")
    ? ", genitivo sassone ('s: possesso)"
    : "";
  p.dettaglio = `nome ${proprio ? "proprio" : "comune"}${di}, ${plurale ? "plurale" : "singolare"}${genitivo}`;
}

// Correzioni che si vedono solo guardando le parole vicine
function correggiDalContesto(parole: Parola[]) {
  parole.forEach((p, i) => {
    const prima = parole[i - 1];
    const dopo = parole[i + 1];

    // What / which + nome + ausiliare: il nome non è un verbo (What TIME does
    // the museum open?)
    if (
      p.categoria === "verbo" &&
      prima &&
      i === 1 &&
      ["what", "which", "whose"].includes(prima.forma) &&
      dopo &&
      ["do", "does", "did", "is", "are", "was", "were"].includes(dopo.forma)
    ) {
      p.categoria = "nome";
      p.base = p.forma;
      descriviNome(p);
      prima.categoria = "aggettivo";
      prima.dettaglio = "aggettivo interrogativo";
    }

    // Domanda con do/does/did + soggetto + verbo: la parola dopo il soggetto
    // è il verbo (When does the film START? Where does your sister WORK?)
    if (
      (p.categoria === "nome" ||
        p.categoria === "aggettivo" ||
        p.forma === "like") &&
      parole[parole.length - 1].dopo.includes("?") &&
      prima?.categoria === "nome" &&
      (VERBI_VOCABOLARIO().has(p.forma) ||
        p.tags.has("Verb") ||
        p.tags.has("Infinitive") ||
        (!p.tags.has("Plural") && !/s$/.test(p.forma)))
    ) {
      let k = i - 1;
      let nomi = 0;
      while (
        k > 0 &&
        ["nome", "aggettivo", "articolo", "numerale"].includes(
          parole[k].categoria,
        ) &&
        !parole[k].dopo.match(/[,;:]/)
      ) {
        if (parole[k].categoria === "nome") nomi++;
        k--;
      }
      if (nomi > 0 && ["do", "does", "did"].includes(parole[k]?.forma)) {
        p.categoria = "verbo";
        p.base = baseVerbo(p.forma);
      }
    }

    // last + un nome di tempo è un aggettivo: last NIGHT, last week (non il
    // verbo last, durare)
    if (p.forma === "last" && dopo?.classe === "tempo") {
      p.categoria = "aggettivo";
      p.base = "last";
      p.dettaglio = "aggettivo qualificativo";
    }

    // preposizione + articolo + nome + parola in -s: è un nome composto, non
    // un verbo (at the traffic LIGHTS, near the bus STOPS)
    if (
      p.categoria === "verbo" &&
      /s$/.test(p.forma) &&
      prima?.categoria === "nome" &&
      parole[i - 2]?.categoria === "articolo" &&
      parole[i - 3]?.categoria === "preposizione"
    ) {
      p.categoria = "nome";
      p.base = p.forma.replace(/s$/, "");
      descriviNome(p);
    }

    // turn / go + left, right: sono avverbi di direzione (Turn LEFT), non il
    // passato di leave
    if (
      ["left", "right"].includes(p.forma) &&
      prima &&
      ["turn", "go"].includes(prima.base) &&
      prima.categoria === "verbo"
    ) {
      p.categoria = "avverbio";
      p.base = p.forma;
      p.dettaglio = "avverbio di luogo";
    }

    // Il passato di un verbo irregolare subito dopo il soggetto è un verbo,
    // anche se ha la forma di un nome: Sales ROSE by ten per cent (rose qui
    // non è la rosa). Solo se prima della parola non c'è ancora un verbo
    if (
      p.categoria === "nome" &&
      PASSATI.has(p.forma) &&
      !INVARIABILI.has(p.forma) &&
      prima &&
      (prima.categoria === "nome" || prima.categoria === "pronome") &&
      prima.forma !== "the" &&
      (!dopo || ["preposizione", "avverbio"].includes(dopo.categoria)) &&
      !parole.slice(0, i).some((q) => q.categoria === "verbo")
    ) {
      p.categoria = "verbo";
      p.base = baseVerbo(p.forma);
      p.tags.add("PastTense");
    }

    // Un "aggettivo" in fondo a un gruppo nominale è un nome:
    // "a beautiful present." → present è nome
    if (
      p.categoria === "aggettivo" &&
      prima &&
      (prima.categoria === "articolo" || prima.categoria === "aggettivo") &&
      (!dopo ||
        dopo.categoria === "preposizione" ||
        dopo.categoria === "verbo" ||
        dopo.categoria === "congiunzione" ||
        p.dopo !== "") &&
      !(prima.categoria === "articolo" && parole[i - 2]?.base === "be") &&
      !/ly$/.test(p.forma)
    ) {
      descriviNome(p);
    }

    // Dopo un pronome soggetto (I, you, we...) una parola che può essere un
    // verbo lo è: What I NEED is... (compromise a volte la prende per nome)
    if (
      p.categoria === "nome" &&
      prima?.categoria === "pronome" &&
      ["i", "you", "we", "they", "he", "she"].includes(prima.forma) &&
      VERBI_VOCABOLARIO().has(p.base.replace(/s$/, ""))
    ) {
      p.categoria = "verbo";
      p.base = baseVerbo(p.forma);
    }

    // have/get + qualcosa + participio: had my hair CUT (cut non è un nome)
    if (
      p.categoria === "nome" &&
      (PARTICIPI.has(p.forma) || /ed$/.test(p.forma)) &&
      i > 1 &&
      (!dopo || dopo.categoria !== "nome")
    ) {
      let k = i - 1;
      let nomi = 0;
      while (
        k > 0 &&
        ["nome", "aggettivo", "articolo"].includes(parole[k].categoria)
      ) {
        if (parole[k].categoria === "nome") nomi++;
        k--;
      }
      if (
        nomi > 0 &&
        parole[k]?.categoria === "verbo" &&
        ["have", "get"].includes(parole[k].base)
      ) {
        p.categoria = "verbo";
        p.base = baseVerbo(p.forma);
      }
    }

    // Una parola in -ing dopo una preposizione, o dopo verbi come enjoy,
    // stop, finish, è un gerundio (verbo)
    if (
      p.categoria === "nome" &&
      /ing$/.test(p.forma) &&
      (prima?.categoria === "preposizione" ||
        (prima?.categoria === "verbo" && VOGLIONO_ING.has(prima.base)))
    ) {
      p.categoria = "verbo";
      p.base = baseVerbo(p.forma);
    }

    // have (+ not o il soggetto di una domanda) + participio è un tempo
    // perfect: I have DONE it, I haven't FINISHED it, Have you DONE it?
    // (compromise a volte lo prende per aggettivo)
    const haveDavanti =
      prima?.base === "have" ||
      ((prima?.forma === "not" || prima?.categoria === "pronome") &&
        parole[i - 2]?.base === "have");
    if (
      p.categoria === "aggettivo" &&
      haveDavanti &&
      (PARTICIPI.has(p.forma) || /ed$/.test(p.forma))
    ) {
      p.categoria = "verbo";
      p.base = baseVerbo(p.forma);
    }

    // tired, exhausted, married... dopo be sono aggettivi, se non c'è by
    // (They were exhausted; ma: The house was destroyed by the storm)
    if (
      p.categoria === "verbo" &&
      PARTICIPI_AGGETTIVI.has(p.forma) &&
      (prima?.base === "be" ||
        (prima?.categoria === "avverbio" && parole[i - 2]?.base === "be")) &&
      dopo?.forma !== "by"
    ) {
      p.categoria = "aggettivo";
      p.dettaglio = "aggettivo qualificativo (participio usato come aggettivo)";
    }

    // late, early, fast... subito dopo be sono aggettivi (It's late)
    if (
      p.categoria === "avverbio" &&
      ["late", "early", "fast", "hard", "alone", "well"].includes(p.forma) &&
      // anche con un avverbio di frequenza in mezzo: He is NEVER late
      ((prima?.base === "be" && prima.categoria === "verbo") ||
        (prima &&
          ["never", "always", "often", "usually", "sometimes", "rarely"].includes(
            prima.forma,
          ) &&
          parole[i - 2]?.base === "be" &&
          parole[i - 2].categoria === "verbo"))
    ) {
      p.categoria = "aggettivo";
      p.dettaglio = "aggettivo qualificativo";
    }

    // "there" davanti a be è il soggetto apparente (there is, there are)
    if (p.forma === "there" && dopo && dopo.base === "be") {
      p.categoria = "avverbio";
      p.dettaglio = "avverbio (there di there is/are: soggetto apparente)";
    }

    // Dopo un aggettivo possessivo viene un nome, anche se compromise lo
    // prende per avverbio o preposizione (your BACK, my WAY)
    if (
      prima?.dettaglio.startsWith("aggettivo possessivo") &&
      (p.categoria === "avverbio" || p.categoria === "preposizione")
    ) {
      descriviNome(p);
    }

    // Un verbo subito dopo un articolo o un possessivo è un nome
    // (the run, my work)
    if (
      p.categoria === "verbo" &&
      prima &&
      (prima.categoria === "articolo" ||
        (prima.categoria === "aggettivo" &&
          prima.dettaglio.startsWith("aggettivo possessivo"))) &&
      !(p.forma in FORME_BE) &&
      !(p.forma in FORME_HAVE)
    ) {
      descriviNome(p);
    }
  });
}
