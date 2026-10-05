/**
 * La traduzione parola per parola (glossa): per ogni parola della frase, il
 * suo significato in italiano in QUESTO contesto.
 * - parole grammaticali (articoli, pronomi, preposizioni...): una tabella
 *   scritta a mano, attenta al ruolo (her davanti a un nome = suo; her
 *   complemento = la, le; it impersonale = non si traduce);
 * - verbi: il significato scelto dal contesto (senso.ts), poi il
 *   Vocabolario, i paradigmi e il dizionario; per un gruppo verbale si dice
 *   anche il tempo (will do = fare · futuro);
 * - nomi, aggettivi, avverbi: Vocabolario, poi dizionario; gli avverbi in
 *   -ly si ricavano dall'aggettivo (quickly = velocemente), i comparativi
 *   dal grado (bigger = più grande).
 * Tutto offline: niente servizi esterni.
 */

import { PARADIGMI } from "@/data/paradigmi";
import { VOCABOLARIO } from "@/data/vocabolario";
import { cercaNelDizionario } from "./dizionario";
import { ePhrasal } from "./phrasal";
import { Proposizione } from "./logica";
import { Parola } from "./parole";
import { Osservazione } from "./senso";
import { GruppoVerbale } from "./verbi";

const CHIUSE: Record<string, string> = {
  // articoli
  the: "il, la…",
  a: "un, uno, una",
  an: "un, una",
  // pronomi
  i: "io",
  he: "lui",
  she: "lei",
  we: "noi",
  they: "loro",
  me: "me, mi",
  him: "lui, lo, gli",
  us: "noi, ci",
  them: "loro, li, le",
  mine: "mio",
  yours: "tuo, vostro",
  hers: "suo (di lei)",
  ours: "nostro",
  theirs: "loro",
  myself: "me stesso",
  yourself: "te stesso",
  himself: "se stesso",
  herself: "se stessa",
  itself: "se stesso",
  ourselves: "noi stessi",
  yourselves: "voi stessi",
  themselves: "se stessi",
  someone: "qualcuno",
  somebody: "qualcuno",
  something: "qualcosa",
  anyone: "qualcuno, chiunque",
  anybody: "qualcuno, chiunque",
  anything: "qualcosa, niente",
  everyone: "tutti",
  everybody: "tutti",
  everything: "tutto",
  nobody: "nessuno",
  nothing: "niente",
  none: "nessuno",
  whom: "chi, cui",
  whatever: "qualunque cosa",
  whoever: "chiunque",
  whichever: "qualunque",
  ones: "quelli",
  these: "questi",
  those: "quelli",
  // possessivi
  my: "mio",
  your: "tuo, vostro",
  his: "suo (di lui)",
  its: "suo",
  our: "nostro",
  their: "loro",
  // quantificatori e indefiniti
  some: "un po' di, alcuni",
  any: "qualche, alcuno",
  no: "nessuno",
  every: "ogni",
  each: "ciascuno",
  all: "tutti, tutto",
  both: "entrambi",
  either: "l'uno o l'altro",
  neither: "nessuno dei due",
  many: "molti",
  much: "molto",
  few: "pochi",
  little: "poco, piccolo",
  several: "parecchi",
  more: "più",
  most: "la maggior parte, il più",
  less: "meno",
  enough: "abbastanza",
  another: "un altro",
  other: "altro",
  such: "tale",
  // preposizioni
  about: "di, su, circa",
  above: "sopra",
  across: "attraverso",
  after: "dopo",
  against: "contro",
  along: "lungo",
  among: "tra",
  around: "intorno a",
  at: "a, in",
  before: "prima di",
  behind: "dietro",
  below: "sotto",
  beside: "accanto a",
  between: "tra",
  beyond: "oltre",
  by: "da, con, entro",
  despite: "nonostante",
  down: "giù",
  during: "durante",
  except: "tranne",
  for: "per",
  from: "da",
  in: "in, a",
  inside: "dentro",
  into: "dentro, in",
  near: "vicino a",
  of: "di",
  off: "via (da)",
  on: "su, sopra",
  onto: "su",
  out: "fuori",
  outside: "fuori",
  over: "sopra, oltre",
  past: "oltre",
  than: "di, che (paragone)",
  through: "attraverso",
  till: "fino a",
  until: "fino a, finché",
  to: "a, verso",
  toward: "verso",
  towards: "verso",
  under: "sotto",
  up: "su",
  upon: "su",
  with: "con",
  within: "entro",
  without: "senza",
  like: "come",
  as: "come, mentre",
  // congiunzioni
  and: "e",
  or: "o",
  but: "ma",
  nor: "né",
  because: "perché",
  if: "se",
  unless: "a meno che",
  although: "sebbene",
  though: "anche se",
  whereas: "mentre",
  whether: "se",
  while: "mentre",
  whenever: "ogni volta che",
  // interiezioni
  oh: "oh",
  wow: "wow",
  hello: "ciao",
  hi: "ciao",
  bye: "ciao",
  yes: "sì",
  please: "per favore",
  thanks: "grazie",
  ok: "va bene",
  okay: "va bene",
  // numeri
  one: "uno",
  two: "due",
  three: "tre",
  four: "quattro",
  five: "cinque",
  six: "sei",
  seven: "sette",
  eight: "otto",
  nine: "nove",
  ten: "dieci",
  eleven: "undici",
  twelve: "dodici",
  twenty: "venti",
  thirty: "trenta",
  forty: "quaranta",
  fifty: "cinquanta",
  hundred: "cento",
  thousand: "mille",
  million: "milione",
  first: "primo",
  second: "secondo",
  third: "terzo",
  last: "ultimo",
  // la negazione
  not: "non",
  thirteen: "tredici",
  fourteen: "quattordici",
  fifteen: "quindici",
  sixteen: "sedici",
  seventeen: "diciassette",
  eighteen: "diciotto",
  nineteen: "diciannove",
  sixty: "sessanta",
  seventy: "settanta",
  eighty: "ottanta",
  ninety: "novanta",
  thousands: "migliaia",
  however: "tuttavia",
  therefore: "quindi, perciò",
  otherwise: "altrimenti",
  moreover: "inoltre",
  thus: "così, quindi",
  besides: "inoltre",
  meanwhile: "nel frattempo",
  instead: "invece",
  lot: "molto (a lot: molto, tanti)",
  twice: "due volte",
  abroad: "all'estero",
  goodbye: "arrivederci",
  ago: "fa",
  opposite: "di fronte a",
  wherefore: "perché (antico)",
};

const MODALI_IT: Record<string, string> = {
  can: "potere",
  could: "potevo, potrei",
  will: "",
  would: "",
  shall: "",
  must: "dovere",
  should: "dovrei",
  may: "potere (forse)",
  might: "potrebbe (forse)",
};

// I modali al passato (modale + have + participio)
const MODALI_PASSATO: Record<string, string> = {
  should: "avrei dovuto",
  could: "avrei potuto",
  must: "deve aver",
  might: "potrebbe aver",
  may: "potrebbe aver",
  would: "avrei",
};

const CATEGORIA_VOCABOLARIO: Record<string, string> = {
  nome: "sostantivo",
  verbo: "verbo",
  aggettivo: "aggettivo",
  avverbio: "avverbio",
};

// I paradigmi: base del verbo irregolare → traduzione (go → andare)
let paradigmi: Map<string, string> | undefined;
function traduzioneParadigma(base: string) {
  if (!paradigmi)
    paradigmi = new Map(
      PARADIGMI.map((p) => [
        p.present.split("/")[0].trim().toLowerCase(),
        p.traduzione,
      ]),
    );
  return paradigmi.get(base);
}

// La prima traduzione della parola nel Vocabolario, per la sua categoria
function dalVocabolario(base: string, categoria: string) {
  const voce = VOCABOLARIO.find((v) => v.parola.toLowerCase() === base);
  const uso =
    voce?.usi.find((u) => u.categoria === CATEGORIA_VOCABOLARIO[categoria]) ??
    voce?.usi[0];
  return uso?.significati[0]?.traduzioni.slice(0, 2).join(", ");
}

// Il plurale italiano, solo nei casi sicuri (gatto → gatti, casa → case);
// se non è sicuro, si scrive "(pl.)"
const PLURALI: Record<string, string> = {
  uomo: "uomini",
  uovo: "uova",
  dito: "dita",
  braccio: "braccia",
  amico: "amici",
  medico: "medici",
  gioco: "giochi",
  luogo: "luoghi",
  problema: "problemi",
  tema: "temi",
  sistema: "sistemi",
  programma: "programmi",
  mano: "mani",
};
function plurale(nome: string) {
  const [primo, ...resto] = nome.split(",")[0].trim().split(" ");
  const fine = resto.length ? " " + resto.join(" ") : "";
  if (PLURALI[primo]) return PLURALI[primo] + fine;
  if (
    /(co|go|io|ca|ga|ma|ista)$/.test(primo) ||
    /[àèéìòù]$/.test(primo) ||
    !/[aeo]$/.test(primo)
  )
    return `${primo}${fine} (pl.)`;
  if (/o$/.test(primo)) return primo.slice(0, -1) + "i" + fine;
  if (/a$/.test(primo)) return primo.slice(0, -1) + "e" + fine;
  return primo.slice(0, -1) + "i" + fine;
}

// Il nome breve del tempo, per stare sotto la parola
function tempoBreve(g: GruppoVerbale) {
  const passivo = g.forma === "passiva" ? ", passivo" : "";
  // can, must, should...: il modale è già nella traduzione (potere + ...)
  if (
    g.modale &&
    !["will", "would", "shall"].includes(g.modale) &&
    !g.tempo.includes("have +")
  )
    return passivo.replace(", ", "");
  const tabella: [RegExp, string][] = [
    [/^present simple/, "presente"],
    [/^present continuous/, "presente (sto ...-ndo)"],
    [/^present perfect continuous/, "presente con «da»"],
    [/^present perfect/, "passato prossimo"],
    [/^past simple/, "passato"],
    [/^past continuous/, "imperfetto (stavo ...-ndo)"],
    [/^past perfect/, "trapassato"],
    [/^future perfect/, "futuro anteriore"],
    [/^future/, "futuro"],
    [/^conditional perfect/, "condizionale passato"],
    [/^conditional/, "condizionale"],
    [/going to/, "futuro (intenzione)"],
    [/about to/, "stare per"],
    [/used to/, "imperfetto (abitudine)"],
    [/have to|had to/, "dovere"],
    [/have \+ participio/, "passato"],
    [/^imperativo/, "imperativo"],
    [/^infinito/, "infinito"],
    [/-ing/, "gerundio"],
    [/participio/, "participio"],
  ];
  const trovato = tabella.find(([re]) => re.test(g.tempo));
  return trovato ? trovato[1] + passivo : g.italiano;
}

// Da un aggettivo italiano all'avverbio in -mente (veloce → velocemente)
function inMente(aggettivo: string) {
  const a = aggettivo.split(",")[0].trim();
  if (a.includes(" ")) return undefined;
  if (/o$/.test(a)) return a.slice(0, -1) + "amente";
  if (/(l|r)e$/.test(a)) return a.slice(0, -1) + "mente";
  if (/e$/.test(a)) return a + "mente";
  return undefined;
}

// La traduzione di una parola "piena" (nome, verbo, aggettivo, avverbio)
function parolaPiena(p: Parola, senso: Osservazione[]): string | undefined {
  const base = p.base.toLowerCase();
  if (p.categoria === "verbo") {
    const s = senso.find(
      (o) => o.tipo === "significato" && o.titolo === `${base}, qui` && o.breve,
    );
    return (
      s?.breve ??
      dalVocabolario(base, "verbo") ??
      traduzioneParadigma(base) ??
      cercaNelDizionario(base, "verbo")
    );
  }
  if (p.categoria === "nome") {
    // genitivo sassone: sister's = di sorella (la cosa che segue è sua)
    if (/'s?$/.test(base) && base.length > 3) {
      const senza = parolaPiena(
        {
          ...p,
          base: base.replace(/'s?$/, ""),
          forma: p.forma.replace(/'s?$/, ""),
          testo: p.testo.replace(/'s?$/, ""),
        },
        senso,
      );
      return senza ? `di ${senza.split(",")[0]}` : undefined;
    }
    if (p.tags.has("ProperNoun") || (/^[A-Z]/.test(p.testo) && p.i > 0))
      return p.testo;
    const singolare = base
      .replace(/ies$/, "y")
      .replace(/(ch|sh|x|ss)es$/, "$1")
      .replace(/s$/, "");
    const t =
      dalVocabolario(base, "nome") ??
      cercaNelDizionario(base, "nome") ??
      cercaNelDizionario(singolare, "nome") ??
      dalVocabolario(singolare, "nome");
    // il plurale si vede anche in italiano (cats = gatti)
    return t && (p.tags.has("Plural") || p.dettaglio.includes("plurale"))
      ? plurale(t)
      : t;
  }
  if (p.categoria === "aggettivo") {
    let trovato =
      dalVocabolario(base, "aggettivo") ??
      cercaNelDizionario(base, "aggettivo");
    if (trovato) return trovato;
    // bigger → big, nicest → nice, happier → happy
    for (const [fine, sost] of [
      ["iest", "y"],
      ["ier", "y"],
      ["est", ""],
      ["er", ""],
      ["est", "e"],
      ["er", "e"],
    ] as const) {
      if (!base.endsWith(fine)) continue;
      let radice = base.slice(0, -fine.length) + sost;
      if (/([bdgmnpt])\1$/.test(radice)) radice = radice.slice(0, -1);
      trovato =
        dalVocabolario(radice, "aggettivo") ??
        cercaNelDizionario(radice, "aggettivo");
      if (trovato)
        return `${fine.includes("est") ? "il più" : "più"} ${trovato.split(",")[0]}`;
    }
    return undefined;
  }
  if (p.categoria === "avverbio") {
    const diretto =
      cercaNelDizionario(base, "avverbio") ?? dalVocabolario(base, "avverbio");
    if (diretto) return diretto;
    if (base.endsWith("ly")) {
      const radice = base.endsWith("ily")
        ? base.slice(0, -3) + "y"
        : base.slice(0, -2);
      const agg =
        dalVocabolario(radice, "aggettivo") ??
        cercaNelDizionario(radice, "aggettivo");
      if (agg) return inMente(agg) ?? `in modo ${agg.split(",")[0]}`;
    }
  }
  return undefined;
}

// La glossa di una parola "chiusa", guardando il suo ruolo
function parolaChiusa(
  p: Parola,
  parole: Parola[],
  senso: Osservazione[],
): string | undefined {
  const f = p.forma;
  const d = p.dettaglio;
  if (f === "it") {
    if (
      senso.some(
        (o) => o.titolo === "it impersonale" && o.indici?.includes(p.i),
      )
    )
      return "(non si traduce)";
    return d.includes("soggetto") ? "esso (spesso non si dice)" : "lo, la";
  }
  if (f === "you") return d.includes("soggetto") ? "tu, voi" : "ti, te, vi";
  if (f === "her")
    return d.startsWith("aggettivo") ? "suo (di lei)" : "lei, la, le";
  if (f === "who") return d.includes("relativo") ? "che" : "chi";
  if (f === "which") return d.includes("relativo") ? "che, il quale" : "quale";
  if (f === "whose") return d.includes("relativo") ? "il cui" : "di chi";
  if (f === "what")
    return d.includes("relativo")
      ? "ciò che"
      : d.includes("esclamativo")
        ? "che...!"
        : "che cosa";
  if (f === "that")
    return d.includes("relativo") || d.includes("congiunzione")
      ? "che"
      : "quello";
  if (f === "this") return "questo";
  if (f === "one") return d.includes("pronome") ? "quello, colui" : "uno";
  if (f === "there")
    return d.includes("soggetto apparente") ? "ci (c'è, ci sono)" : "là";
  if (f === "so") return p.categoria === "avverbio" ? "così" : "quindi";
  if (f === "since")
    return p.categoria === "congiunzione" ? "da quando, poiché" : "da";
  if (f === "before" || f === "after")
    return p.categoria === "congiunzione"
      ? f === "before"
        ? "prima che"
        : "dopo che"
      : f === "before"
        ? "prima di"
        : "dopo";
  if (f === "when") return "quando";
  if (f === "where") return "dove";
  if (f === "why") return "perché";
  if (f === "how") return "come";
  if (/^\d/.test(f)) return p.testo;
  if (
    p.categoria === "preposizione" &&
    parole[p.i - 1]?.categoria === "verbo" &&
    d === "preposizione"
  ) {
    // una particella di phrasal verb (turn OFF): si traduce con il verbo
    if (ePhrasal(parole[p.i - 1].base, f)) return "(con il verbo)";
  }
  return CHIUSE[f];
}

// La glossa di ogni parola della frase (stringa vuota se non c'è)
export function glosse(
  parole: Parola[],
  gruppi: GruppoVerbale[],
  proposizioni: Proposizione[],
  senso: Osservazione[],
): string[] {
  const risultato = parole.map(() => "");
  const nelGruppo = new Map<number, GruppoVerbale>();
  for (const g of gruppi) for (const k of g.parole) nelGruppo.set(k, g);

  // I gruppi verbali: la traduzione va sotto il verbo principale, con il
  // tempo (will do = fare · futuro); gli ausiliari restano vuoti
  for (const g of gruppi) {
    const p = parole[g.principale];
    // un phrasal verb o un'espressione: la traduzione dell'espressione
    const espr = senso.find(
      (o) =>
        o.tipo === "espressione" && o.breve && o.indici?.includes(g.principale),
    );
    let verbo =
      espr?.breve ??
      (g.copula && g.base === "be" ? "essere" : parolaPiena(p, senso));
    if (g.base === "be" && !g.copula && !verbo) verbo = "essere, stare";
    if (g.note.includes("have got")) verbo = "avere";
    if (!verbo) verbo = `to ${g.base}`;
    // should have told = avrei dovuto + dire
    const modaleAlPassato = g.modale && g.tempo.includes("have +");
    const modale = g.modale
      ? ((modaleAlPassato ? MODALI_PASSATO[g.modale] : MODALI_IT[g.modale]) ??
        "")
      : "";
    const tempo = g.coda
      ? "vero? (coda)"
      : modaleAlPassato
        ? ""
        : tempoBreve(g);
    risultato[g.principale] = [
      modale ? `${modale} + ${verbo.split(",")[0]}` : verbo,
      tempo,
    ]
      .filter(Boolean)
      .join(" · ");
    for (const k of g.parole) {
      if (k === g.principale) continue;
      const q = parole[k];
      if (q.forma === "not") risultato[k] = "non";
      // avverbi e pronomi in mezzo al gruppo (have NEVER been, let US go)
      else if (q.categoria !== "verbo")
        risultato[k] =
          parolaChiusa(q, parole, senso) ?? parolaPiena(q, senso) ?? "";
    }
  }

  for (const p of parole) {
    if (nelGruppo.has(p.i)) continue;
    const chiusa = parolaChiusa(p, parole, senso);
    if (chiusa !== undefined) {
      risultato[p.i] = chiusa;
      continue;
    }
    risultato[p.i] = parolaPiena(p, senso) ?? "";
  }
  return risultato;
}
