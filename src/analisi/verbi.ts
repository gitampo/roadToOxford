/**
 * I gruppi verbali: in inglese un verbo è spesso fatto di più parole
 * (has been living, was written, did ... go, is going to visit). Qui si
 * trovano questi gruppi e se ne ricava tutto: il tempo, l'aspetto (simple,
 * continuous, perfect), la forma attiva o passiva, se è negativo, se è una
 * domanda, il modale, e la lezione dove è spiegato.
 *
 * L'idea di fondo è quella della lezione T1 (la mappa dei tempi): ogni
 * ausiliare porta un'informazione precisa.
 *   be + -ing         → continuous
 *   have + participio → perfect
 *   be + participio   → passivo
 *   will / would      → futuro / condizionale
 * Il primo verbo del gruppo porta il tempo (presente o passato).
 */

import {
  COPULATIVI,
  FORME_BE,
  FORME_DO,
  FORME_HAVE,
  MODALI,
  VERBI_DI_STATO,
} from "./lessico";
import { INVARIABILI, Parola, PARTICIPI } from "./parole";

export type GruppoVerbale = {
  // Tutte le parole del gruppo, compresi not e gli avverbi in mezzo
  parole: number[];
  // Il soggetto, quando sta in mezzo al gruppo (Did YOU go?)
  soggettoInterno?: [number, number];
  // Il verbo che porta il significato (live in "has been living")
  principale: number;
  base: string;
  // Il nome del tempo, in inglese come nelle lezioni
  tempo: string;
  // Il tempo italiano più vicino
  italiano: string;
  // A cosa serve questo tempo
  significato: string;
  lezione?: string;
  forma: "attiva" | "passiva";
  negativo: boolean;
  domanda: boolean;
  modale?: string;
  // Il tipo di forma verbale
  modo: "finito" | "imperativo" | "infinito" | "gerundio" | "participio";
  // be (o seem, become...) usato per unire il soggetto a un nome o aggettivo
  copula: boolean;
  // Persona e numero, se il verbo li mostra (is → 3ª singolare)
  persona?: string;
  // Note per la semantica (verbi di stato, have got...)
  note: string[];
  // La coda di una question tag (..., isn't it?)
  coda?: boolean;
};

const AVVERBI_INTERNI = new Set([
  "not",
  "never",
  "always",
  "just",
  "already",
  "ever",
  "still",
  "also",
  "often",
  "usually",
  "really",
  "probably",
  "sometimes",
  "certainly",
  "definitely",
  "even",
  "only",
  "recently",
  "rarely",
  "seldom",
  "hardly",
]);

const eAusiliareForma = (f: string) =>
  f in FORME_BE || f in FORME_HAVE || f in FORME_DO || f in MODALI;

// Dove finisce il gruppo nominale che comincia in j (-1 se non è un nome).
// Gruppo nominale: articoli, aggettivi, numerali e nomi di fila, oppure un
// pronome da solo
export function fineGruppoNominale(parole: Parola[], j: number): number {
  const p = parole[j];
  if (!p) return -1;
  if (
    p.categoria === "pronome" &&
    !p.dettaglio.includes("relativo") &&
    !p.dettaglio.includes("interrogativo")
  )
    return j;
  let k = j;
  let ultimoNome = -1;
  let ultimoNumero = -1;
  while (k < parole.length) {
    const q = parole[k];
    if (q.categoria === "nome") ultimoNome = k;
    // the one, a new one: il pronome one fa da nome del gruppo
    else if (
      q.categoria === "pronome" &&
      (q.forma === "one" || q.forma === "ones") &&
      k > j
    ) {
      ultimoNome = k;
      k++;
      break;
    } else if (q.categoria === "numerale" && ultimoNome < 0) ultimoNumero = k;
    else if (
      q.categoria === "articolo" ||
      q.categoria === "aggettivo" ||
      q.categoria === "numerale" ||
      (q.categoria === "avverbio" &&
        q.dettaglio.includes("quantità") &&
        parole[k + 1]?.categoria === "aggettivo")
    ) {
      if (ultimoNome >= 0) break; // dopo il nome, un altro articolo è un nuovo gruppo
    } else break;
    if (q.dopo.match(/[,.;!?]/)) break;
    k++;
  }
  // Un numero da solo fa da nome (in 2015, at 5, since 1990)
  if (ultimoNome < 0 && ultimoNumero >= 0) return ultimoNumero;
  return ultimoNome;
}

// Se prima della parola in i c'è "verbo + gruppo nominale" e il verbo è
// make, let, have, get... restituisce la sua forma base (made ME wait,
// had MY HAIR cut). Serve a riconoscere infiniti senza to e causativi
export function reggenteCausativo(parole: Parola[], i: number) {
  let k = i - 1;
  if (k < 0) return undefined;
  const q = parole[k];
  if (q.categoria === "pronome" && /complemento|personale/.test(q.dettaglio))
    k--;
  else if (q.categoria === "nome") {
    while (
      k > 0 &&
      ["nome", "aggettivo", "articolo", "numerale"].includes(
        parole[k - 1].categoria,
      )
    )
      k--;
    k--;
  } else return undefined;
  const v = parole[k];
  return v && v.categoria === "verbo" ? v.base : undefined;
}

// L'ausiliare in j può aprire una domanda (Did YOU go?) solo se prima non
// c'è già un soggetto: all'inizio, dopo una parola interrogativa o dopo
// un'espressione negativa (Never have I...). In "I had my hair cut" no
function puoEssereDomanda(parole: Parola[], j: number) {
  const prima = parole[j - 1];
  if (!prima) return true;
  if (prima.dettaglio.includes("interrogativ")) return true;
  if (
    prima.categoria === "avverbio" ||
    prima.categoria === "congiunzione" ||
    prima.categoria === "interiezione"
  )
    return true;
  if (prima.dopo.match(/[,;:]/)) return true;
  return false;
}

// Il tipo di forma di un verbo nel gruppo
type FormaVerbo = "base" | "presente" | "passato" | "participio" | "ing";

function formaDi(p: Parola, prima?: Parola): FormaVerbo {
  const f = p.forma;
  if (f in FORME_BE) {
    const t = FORME_BE[f].tempo;
    return t === "present"
      ? "presente"
      : t === "past"
        ? "passato"
        : t === "participle"
          ? "participio"
          : t === "ing"
            ? "ing"
            : "base";
  }
  if (f in FORME_HAVE) {
    const t = FORME_HAVE[f];
    if (t === "ing") return "ing";
    if (
      prima &&
      (prima.forma in MODALI || prima.forma === "to" || prima.base === "do")
    )
      return "base";
    return t === "present"
      ? f === "have" && prima
        ? "base"
        : "presente"
      : "passato";
  }
  if (f in FORME_DO) return FORME_DO[f] === "past" ? "passato" : "presente";
  if (f in MODALI) return "presente";
  if (/ing$/.test(f) || p.tags.has("Gerund")) return "ing";
  // Dopo have o be, una forma del passato è un participio
  if (
    prima &&
    (prima.base === "have" || prima.base === "be") &&
    (PARTICIPI.has(f) ||
      p.tags.has("PastTense") ||
      p.tags.has("Participle") ||
      /(ed|en|wn|ne)$/.test(f))
  )
    return "participio";
  if (
    prima &&
    (prima.forma in MODALI || prima.base === "do" || prima.forma === "to")
  )
    return "base";
  if (p.tags.has("Participle")) return "participio";
  if (p.tags.has("PastTense")) return "passato";
  if (p.tags.has("Infinitive") || p.tags.has("Imperative")) return "base";
  return "presente";
}

// Trova tutti i gruppi verbali della frase
export function trovaGruppiVerbali(parole: Parola[]): GruppoVerbale[] {
  const gruppi: GruppoVerbale[] = [];
  let i = 0;
  while (i < parole.length) {
    if (parole[i].categoria !== "verbo") {
      i++;
      continue;
    }
    const g = costruisci(parole, i);
    // "to" seguito da qualcosa che non è un verbo: niente gruppo, è una
    // preposizione (succede se una parola è stata classificata male)
    if (!g) {
      parole[i].categoria = "preposizione";
      parole[i].dettaglio = "preposizione";
      i++;
      continue;
    }
    gruppi.push(g);
    i = Math.max(...g.parole) + 1;
  }
  return gruppi;
}

// Il prossimo verbo dopo j, saltando not e gli avverbi interni (e, se
// permesso, il soggetto di una domanda). -1 se non c'è
function prossimoVerbo(parole: Parola[], j: number, saltaSoggetto: boolean) {
  let k = j + 1;
  let soggetto: [number, number] | undefined;
  while (k < parole.length) {
    const q = parole[k];
    if (q.categoria === "verbo" && q.base !== "to") return { k, soggetto };
    if (q.categoria === "avverbio" && AVVERBI_INTERNI.has(q.forma)) {
      k++;
      continue;
    }
    if (saltaSoggetto && !soggetto) {
      const fine = fineGruppoNominale(parole, k);
      if (fine >= 0) {
        soggetto = [k, fine];
        k = fine + 1;
        continue;
      }
    }
    return { k: -1, soggetto: undefined };
  }
  return { k: -1, soggetto: undefined };
}

// La coda di una question tag: ausiliare (+ not) + pronome in fondo alla
// frase, dopo una virgola (It's late, ISN'T IT?)
function eCoda(parole: Parola[], inizio: number) {
  const aux = parole[inizio];
  if (
    !aux ||
    !eAusiliareForma(aux.forma) ||
    !parole[inizio - 1]?.dopo.includes(",")
  )
    return undefined;
  let k = inizio + 1;
  if (parole[k]?.forma === "not") k++;
  const pron = parole[k];
  if (
    pron &&
    pron.categoria === "pronome" &&
    k === parole.length - 1 &&
    pron.dopo.includes("?")
  )
    return k;
  return undefined;
}

function costruisci(
  parole: Parola[],
  inizio: number,
): GruppoVerbale | undefined {
  const fineCoda = eCoda(parole, inizio);
  if (fineCoda !== undefined) {
    const indici =
      parole[inizio + 1]?.forma === "not" ? [inizio, inizio + 1] : [inizio];
    return {
      parole: indici,
      soggettoInterno: [fineCoda, fineCoda],
      principale: inizio,
      base: parole[inizio].base,
      tempo: "question tag (coda interrogativa)",
      italiano: "vero? no?",
      significato:
        "riprende l'ausiliare e il soggetto della frase, con la polarità rovesciata, per chiedere conferma",
      lezione: "lezione 40{2}",
      forma: "attiva",
      negativo: indici.length > 1,
      domanda: true,
      modo: "finito",
      copula: false,
      note: [],
      coda: true,
    };
  }
  const indici: number[] = [];
  const verbi: number[] = [];
  let soggettoInterno: [number, number] | undefined;
  let infinito = false;
  let j = inizio;

  // to + verbo: un infinito (to go, to be done)
  if (parole[j].base === "to") {
    infinito = true;
    indici.push(j);
    j++;
  }

  while (j < parole.length) {
    const p = parole[j];
    if (p.categoria === "verbo" && p.base !== "to") {
      verbi.push(j);
      indici.push(j);
      // È un ausiliare se dopo arriva un altro verbo
      const primo = verbi.length === 1;
      const { k, soggetto } = eAusiliareForma(p.forma)
        ? prossimoVerbo(
            parole,
            j,
            primo && !infinito && puoEssereDomanda(parole, j),
          )
        : { k: -1, soggetto: undefined };
      // Domanda con be come verbo principale: Are you tired? Where is it?
      const domandaFrase = parole[parole.length - 1]?.dopo.includes("?");
      if (
        k < 0 &&
        primo &&
        !infinito &&
        p.base === "be" &&
        domandaFrase &&
        (j === 0 ||
          parole[j - 1].dettaglio.includes("interrogativ") ||
          (parole[j - 2]?.forma === "how" && j === 2))
      ) {
        const fine = fineGruppoNominale(parole, j + 1);
        if (fine >= 0) soggettoInterno = [j + 1, fine];
        break;
      }
      if (k >= 0) {
        // Gli avverbi e not in mezzo fanno parte del gruppo
        for (let a = j + 1; a < k; a++) {
          if (soggetto && a >= soggetto[0] && a <= soggetto[1]) continue;
          indici.push(a);
        }
        if (soggetto) soggettoInterno = soggetto;
        j = k;
        continue;
      }
      // be about to + verbo (stare per)
      if (
        p.base === "be" &&
        parole[j + 1]?.forma === "about" &&
        parole[j + 2]?.base === "to" &&
        parole[j + 3]?.categoria === "verbo"
      ) {
        indici.push(j + 1, j + 2);
        j += 3;
        continue;
      }
      // going to, used to, have to + verbo
      const dopo = parole[j + 1];
      if (
        dopo?.base === "to" &&
        parole[j + 2]?.categoria === "verbo" &&
        (p.forma === "going" ||
          p.forma === "used" ||
          p.forma === "use" ||
          p.base === "have" ||
          p.forma === "ought")
      ) {
        indici.push(j + 1);
        j += 2;
        continue;
      }
      // let's + verbo
      if (
        p.forma === "let" &&
        dopo?.forma === "us" &&
        parole[j + 2]?.categoria === "verbo"
      ) {
        indici.push(j + 1);
        j += 2;
        continue;
      }
      break;
    }
    break;
  }

  if (verbi.length === 0) return undefined;
  return descrivi(parole, indici, verbi, soggettoInterno, infinito, inizio);
}

function descrivi(
  parole: Parola[],
  indici: number[],
  verbi: number[],
  soggettoInterno: [number, number] | undefined,
  infinito: boolean,
  inizio: number,
): GruppoVerbale {
  const v = verbi.map((i) => parole[i]);
  const forme = v.map((p, i) =>
    formaDi(p, i > 0 ? v[i - 1] : infinito ? parole[inizio] : undefined),
  );
  // cut, put, hit...: con he/she/it e senza -s sono per forza al passato
  const prima = parole[inizio - 1];
  if (
    v.length === 1 &&
    (forme[0] === "presente" || forme[0] === "base") &&
    INVARIABILI.has(v[0].forma) &&
    prima &&
    (["he", "she", "it"].includes(prima.forma) ||
      (prima.categoria === "nome" && !prima.tags.has("Plural")))
  )
    forme[0] = "passato";
  const negativo = indici.some(
    (i) => parole[i].forma === "not" || parole[i].forma === "never",
  );
  const note: string[] = [];

  // Le forme "a più verbi" fisse: be going to, used to, have to, let's
  let catena = v.map((p, i) => ({ p, forma: forme[i], i: verbi[i] }));
  let speciale:
    "going to" | "used to" | "have to" | "let's" | "about to" | undefined;
  let tempoSpeciale: FormaVerbo | undefined;
  const idxGoing = catena.findIndex(
    (c) => c.p.forma === "going" && parole[c.i + 1]?.base === "to",
  );
  const idxAbout = catena.findIndex(
    (c) =>
      c.p.base === "be" &&
      parole[c.i + 1]?.forma === "about" &&
      parole[c.i + 2]?.base === "to",
  );
  if (idxAbout >= 0) {
    speciale = "about to";
    tempoSpeciale = catena[0].forma;
    catena = catena.slice(idxAbout + 1);
  } else if (idxGoing >= 0) {
    speciale = "going to";
    tempoSpeciale = idxGoing > 0 ? catena[0].forma : "presente";
    catena = catena.slice(idxGoing + 1);
  } else if (
    catena.some(
      (c) =>
        (c.p.forma === "used" || c.p.forma === "use") &&
        parole[c.i + 1]?.base === "to",
    )
  ) {
    speciale = "used to";
    catena = catena.slice(
      catena.findIndex((c) => c.p.forma === "used" || c.p.forma === "use") + 1,
    );
  } else if (
    catena.length > 1 &&
    catena[catena.length - 2].p.base === "have" &&
    parole[catena[catena.length - 2].i + 1]?.base === "to"
  ) {
    speciale = "have to";
    tempoSpeciale = catena[catena.length - 2].forma;
    catena = catena.slice(catena.length - 1);
  } else if (
    catena[0]?.p.forma === "let" &&
    parole[catena[0].i + 1]?.forma === "us"
  ) {
    speciale = "let's";
    catena = catena.slice(1);
  }
  // Dopo going to / used to / have to il resto parte dalla forma base
  if (speciale && catena[0]) catena[0] = { ...catena[0], forma: "base" };

  const ultimo = catena[catena.length - 1] ?? {
    p: v[v.length - 1],
    forma: forme[forme.length - 1],
    i: verbi[verbi.length - 1],
  };
  const principale = ultimo.p;
  let base = principale.base;

  // Le tre lenti: perfect, continuous, passivo
  let perfect = false;
  let continuous = false;
  let passivo = false;
  catena.forEach((c, k) => {
    const seg = catena[k + 1];
    if (!seg) return;
    if (c.p.base === "have" && seg.forma === "participio") perfect = true;
    if (c.p.base === "be" && seg.forma === "ing") continuous = true;
    if (
      c.p.base === "be" &&
      seg.forma === "participio" &&
      seg.p.base !== "be" &&
      k + 1 === catena.length - 1
    )
      passivo = true;
  });

  // have got = avere (possesso), non il present perfect di get
  let haveGot = false;
  if (
    perfect &&
    base === "get" &&
    catena.length === 2 &&
    catena[0].forma === "presente"
  ) {
    haveGot = true;
    perfect = false;
    base = "have";
  }

  // Il primo verbo porta il tempo
  const primo = catena[0];
  const modale = primo && primo.p.forma in MODALI ? primo.p.forma : undefined;

  // Dopo make/let/help... + persona il verbo è un infinito senza to (made
  // me WAIT); dopo have/get + cosa è un participio (had my hair CUT)
  const causativo =
    v.length === 1 ? reggenteCausativo(parole, inizio) : undefined;
  const senzaTo =
    !!causativo &&
    ["make", "let", "help", "watch", "see", "hear", "feel", "have"].includes(
      causativo,
    ) &&
    (forme[0] === "base" || forme[0] === "presente") &&
    !/s$/.test(v[0].forma) &&
    !PARTICIPI.has(v[0].forma);
  const participioCausativo =
    !!causativo &&
    ["have", "get"].includes(causativo) &&
    (PARTICIPI.has(v[0].forma) || /ed$/.test(v[0].forma));
  if (senzaTo) note.push("senza to");

  // Il modo: infinito, gerundio, imperativo o finito
  let modo: GruppoVerbale["modo"] = "finito";
  if (infinito || senzaTo) modo = "infinito";
  else if (participioCausativo) modo = "participio";
  else if (v.length === 1 && forme[0] === "ing" && !soggettoInterno)
    modo = "gerundio";
  else if (speciale === "let's") modo = "imperativo";
  else if (
    inizioDiFrase(parole, inizio) &&
    !soggettoInterno &&
    (forme[0] === "base" ||
      (v[0].base === "do" && negativo && v.length > 1) ||
      v[0].tags.has("Imperative"))
  )
    modo = "imperativo";
  else if (
    v.length === 1 &&
    forme[0] === "participio" &&
    parole[inizio - 1]?.categoria === "nome"
  )
    modo = "participio";

  // La copula: be (o seem, become...) seguito da un aggettivo o da un nome
  // (nelle domande, dopo il soggetto: Are you TIRED?)
  const dopoGruppo =
    Math.max(...indici, soggettoInterno ? soggettoInterno[1] : -1) + 1;
  const seguente = parole[dopoGruppo];
  const copula =
    COPULATIVI.has(base) &&
    !haveGot &&
    parole[inizio - 1]?.forma !== "there" &&
    !passivo &&
    !continuous &&
    !!seguente &&
    // get è copulativo solo con un aggettivo (get tired), non con un nome
    // (get a prize = ricevere)
    (!["get", "turn", "grow", "keep", "go"].includes(base) ||
      seguente.categoria === "aggettivo") &&
    (seguente.categoria === "aggettivo" ||
      seguente.categoria === "articolo" ||
      seguente.categoria === "numerale" ||
      (base === "be" && seguente.categoria === "nome") ||
      (seguente.categoria === "avverbio" &&
        parole[dopoGruppo + 1]?.categoria === "aggettivo"));

  if (VERBI_DI_STATO.has(base)) note.push("stato");
  if (principale.forma === "born" && passivo) note.push("born");
  if (haveGot) note.push("have got");

  const info = nomeTempo({
    modale,
    tempoFinito: tempoSpeciale ?? primo?.forma ?? "presente",
    perfect,
    continuous,
    passivo,
    speciale,
    modo,
    haveGot,
    senzaTo,
    causativo: participioCausativo,
    doSupport: primo?.p.base === "do" && catena.length > 1,
  });

  return {
    parole: [...indici].sort((a, b) => a - b),
    soggettoInterno,
    principale: ultimo.i,
    base,
    ...info,
    forma: passivo ? "passiva" : "attiva",
    negativo,
    domanda: !!soggettoInterno,
    modale,
    modo,
    copula,
    persona: personaDalVerbo(v[0], forme[0]),
    note,
  };
}

// Vero se il gruppo comincia la frase (o viene dopo un'interiezione, please
// o una virgola): serve per riconoscere l'imperativo
function inizioDiFrase(parole: Parola[], i: number) {
  for (let k = i - 1; k >= 0; k--) {
    const q = parole[k];
    if (
      q.categoria === "interiezione" ||
      q.forma === "please" ||
      q.forma === "just"
    )
      continue;
    if (
      q.dopo.match(/[,;:]/) &&
      q.categoria !== "nome" &&
      q.categoria !== "pronome"
    )
      return true;
    return false;
  }
  return true;
}

function personaDalVerbo(p: Parola, forma: FormaVerbo) {
  const f = p.forma;
  if (f === "am") return "1ª persona singolare";
  if (f === "is") return "3ª persona singolare";
  if (f === "has" || f === "does") return "3ª persona singolare";
  if (
    forma === "presente" &&
    /s$/.test(f) &&
    !(f in FORME_BE) &&
    !(f in MODALI)
  )
    return "3ª persona singolare";
  return undefined;
}

type Ingredienti = {
  modale?: string;
  tempoFinito: FormaVerbo;
  perfect: boolean;
  continuous: boolean;
  passivo: boolean;
  speciale?: "going to" | "used to" | "have to" | "let's" | "about to";
  senzaTo?: boolean;
  causativo?: boolean;
  modo: GruppoVerbale["modo"];
  haveGot: boolean;
  doSupport: boolean;
};

// Nome, equivalente italiano, significato e lezione di un tempo
function nomeTempo(
  x: Ingredienti,
): Pick<GruppoVerbale, "tempo" | "italiano" | "significato" | "lezione"> {
  const passivoTxt = x.passivo ? " (forma passiva)" : "";
  const lezPassivo = x.passivo ? "lezione 43{2}" : undefined;

  if (x.modo === "imperativo") {
    if (x.speciale === "let's")
      return {
        tempo: "imperativo esortativo (let's)",
        italiano: 'esortativo ("facciamo")',
        significato: "una proposta da fare insieme",
        lezione: "lezione 19{3}",
      };
    return {
      tempo: "imperativo",
      italiano: "imperativo",
      significato: "un ordine, un invito, un'istruzione o un consiglio",
      lezione: "lezione 19{1}",
    };
  }
  if (x.modo === "infinito" && x.senzaTo)
    return {
      tempo: "infinito senza to",
      italiano: "infinito (fare)",
      significato:
        "dopo make, let, help... + persona il verbo va all'infinito SENZA to (made me wait, let him go)",
      lezione: "lezione 48{3}",
    };
  if (x.modo === "participio" && x.causativo)
    return {
      tempo: "participio passato (causativo)",
      italiano: "farsi fare (mi sono fatto tagliare...)",
      significato:
        "have/get + cosa + participio: l'azione la fa qualcun altro per noi",
    };
  if (x.modo === "infinito") {
    if (x.perfect)
      return {
        tempo: "infinito perfetto (to have + participio)",
        italiano: "infinito passato (aver fatto)",
        significato: "un'azione anteriore, all'infinito",
      };
    return {
      tempo: `infinito${passivoTxt}`,
      italiano: x.passivo
        ? "infinito passivo (essere fatto)"
        : "infinito (fare)",
      significato:
        "il verbo senza tempo né persona: spesso uno scopo o il complemento di un altro verbo",
      lezione: "lezione 48{3}",
    };
  }
  if (x.modo === "gerundio")
    return {
      tempo: "forma in -ing (gerundio)",
      italiano: "gerundio o infinito sostantivato (il fare)",
      significato: "l'azione usata come un nome, o dopo una preposizione",
      lezione: "lezione 48{2}",
    };
  if (x.modo === "participio")
    return {
      tempo: "participio passato",
      italiano: "participio passato",
      significato: "usato come un aggettivo, spesso con valore passivo",
    };

  if (x.haveGot)
    return {
      tempo: "have got",
      italiano: "presente di avere (possedere)",
      significato:
        "possesso, famiglia, caratteristiche fisiche, malattie, impegni",
      lezione: "lezione 6{1}",
    };

  if (x.speciale === "about to") {
    const passato = x.tempoFinito === "passato";
    return {
      tempo: `${passato ? "was/were" : "be"} about to + infinito`,
      italiano: passato ? "stavo per (fare)" : "sto per (fare)",
      significato: "un'azione imminente: sta per succedere tra pochissimo",
    };
  }
  if (x.speciale === "used to")
    return {
      tempo: "used to + infinito",
      italiano: "imperfetto (abitudine passata)",
      significato:
        "un'abitudine o una situazione del passato che oggi non c'è più",
      lezione: "lezione 38{1}",
    };
  if (x.speciale === "have to") {
    const passato = x.tempoFinito === "passato";
    return {
      tempo: `${passato ? "had to" : "have to"} + infinito`,
      italiano: passato
        ? "dovere al passato (dovetti, ho dovuto)"
        : "dovere (presente)",
      significato: "un obbligo, spesso deciso da altri (regole, circostanze)",
      lezione: "lezione 32{1}",
    };
  }
  if (x.speciale === "going to") {
    const passato = x.tempoFinito === "passato";
    return {
      tempo: `${passato ? "was/were going to" : "be going to"}${passivoTxt}`,
      italiano: passato
        ? "futuro nel passato (stavo per, avevo intenzione di)"
        : "futuro (intenzione)",
      significato: passato
        ? "un'intenzione del passato, spesso non realizzata"
        : "un'intenzione già decisa, o una previsione basata su prove che si vedono adesso",
      lezione: lezPassivo ?? "lezione 27{2}",
    };
  }

  const aspetto =
    x.perfect && x.continuous
      ? "perfect continuous"
      : x.perfect
        ? "perfect"
        : x.continuous
          ? "continuous"
          : "simple";

  if (x.modale === "will") {
    const t = {
      simple: "future simple (will)",
      continuous: "future continuous",
      perfect: "future perfect",
      "perfect continuous": "future perfect continuous",
    }[aspetto];
    const sig = {
      simple:
        "una previsione, una decisione presa ora, una promessa o un'offerta",
      continuous: "un'azione che sarà in corso in un momento del futuro",
      perfect: "un'azione che sarà già conclusa prima di un momento del futuro",
      "perfect continuous":
        "la durata di un'azione fino a un momento del futuro",
    }[aspetto];
    return {
      tempo: t + passivoTxt,
      italiano:
        aspetto === "perfect"
          ? "futuro anteriore (avrò fatto)"
          : "futuro semplice",
      significato: sig,
      lezione: lezPassivo ?? "lezione 28{1}",
    };
  }
  if (x.modale === "would") {
    const t = {
      simple: "conditional (would)",
      continuous: "conditional continuous",
      perfect: "conditional perfect (would have + participio)",
      "perfect continuous": "conditional perfect continuous",
    }[aspetto];
    const passato = aspetto.startsWith("perfect");
    return {
      tempo: t + passivoTxt,
      italiano: passato
        ? "condizionale passato (avrei fatto)"
        : "condizionale presente (farei)",
      significato: passato
        ? "un'ipotesi irreale nel passato: qualcosa che non è successo"
        : "un'ipotesi, un desiderio o una richiesta gentile",
      lezione: lezPassivo ?? (passato ? "lezione 41{1}" : "lezione 36{1}"),
    };
  }
  if (x.modale) {
    const info = MODALI[x.modale];
    if (x.perfect)
      return {
        tempo: `${x.modale} have + participio (modale al passato)`,
        italiano:
          x.modale === "should"
            ? "condizionale passato di dovere (avrei dovuto)"
            : x.modale === "must"
              ? "deduzione sul passato (deve aver fatto)"
              : "possibilità nel passato (avrebbe potuto)",
        significato:
          x.modale === "should"
            ? "un rimprovero o un rimpianto: era la cosa giusta, ma non è stata fatta"
            : "una deduzione o una possibilità riferita al passato",
        lezione: "lezione 51{1}",
      };
    return {
      tempo: `${x.modale} + infinito${passivoTxt}`,
      italiano: `verbo modale (${info.significati[0]})`,
      significato: `modale: può esprimere ${info.significati.join(", ")}`,
      lezione: info.lezione,
    };
  }

  const passato = x.tempoFinito === "passato";
  const tempo = `${passato ? "past" : "present"} ${aspetto}`;
  const tabella: Record<string, [string, string, string]> = {
    "present simple": [
      "presente indicativo",
      "un'abitudine, un fatto generale o uno stato",
      "lezione 10{1}",
    ],
    "present continuous": [
      "presente progressivo (sto facendo)",
      "un'azione in corso adesso o in questo periodo, oppure un programma già fissato",
      "lezione 12{1}",
    ],
    "present perfect": [
      "passato prossimo (spesso)",
      "un fatto passato legato al presente: un'esperienza, un risultato che si vede ora, un periodo non ancora finito",
      "lezione 29{1}",
    ],
    "present perfect continuous": [
      'presente con "da" (lavoro qui da...)',
      "un'azione iniziata nel passato che continua fino ad ora, con l'accento sulla durata",
      "lezione 39{2}",
    ],
    "past simple": [
      "passato prossimo o remoto (o imperfetto per gli stati)",
      "un'azione conclusa in un momento del passato",
      "lezione 22{1}",
    ],
    "past continuous": [
      "imperfetto (stavo facendo)",
      "un'azione in corso in un momento del passato: lo sfondo di un racconto",
      "lezione 35{2}",
    ],
    "past perfect": [
      "trapassato prossimo (avevo fatto)",
      "un'azione avvenuta prima di un altro momento del passato",
      "lezione 37{1}",
    ],
    "past perfect continuous": [
      'imperfetto con "da" (lavoravo lì da...)',
      "la durata di un'azione fino a un momento del passato",
      "lezione 37{1}",
    ],
  };
  const [italiano, significato, lezione] = tabella[tempo];
  return {
    tempo: tempo + passivoTxt,
    italiano: x.passivo ? `${italiano}, forma passiva` : italiano,
    significato: x.passivo
      ? `${significato}. Al passivo conta chi subisce l'azione, non chi la fa`
      : significato,
    lezione: lezPassivo ?? lezione,
  };
}
