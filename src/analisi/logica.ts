/**
 * L'analisi logica e del periodo, come si fa a scuola in Italia:
 * - il periodo diviso in proposizioni (principale, coordinate, subordinate,
 *   implicite all'infinito);
 * - in ogni proposizione il soggetto, il predicato (verbale o nominale) e i
 *   complementi, ognuno con la domanda a cui risponde (Chi? Dove? Quando?).
 *
 * Il complemento si sceglie dalla preposizione, dal significato del nome
 * (persona, luogo, tempo, mezzo...) e dal verbo: "to London" dopo "go" è
 * moto a luogo, "to my sister" è termine, "by" dopo un passivo è agente.
 */

import {
  AVVERBI,
  CONGIUNZIONI_COORDINANTI,
  CONGIUNZIONI_SUBORDINANTI,
  DITRANSITIVI,
  ESPRESSIONI,
  INIZIO_TEMPO,
  MOVIMENTO,
  NOMI_MEZZO,
  NOMI_MODO,
  NOMI_STRUMENTO,
  PREPOSIZIONI_COMPOSTE,
} from "./lessico";
import { Parola, unisci } from "./parole";
import { ePhrasal } from "./phrasal";
import { fineGruppoNominale, GruppoVerbale } from "./verbi";

export type Elemento = {
  // Le parole dell'elemento (dalla prima all'ultima)
  da: number;
  a: number;
  // Solo quando l'elemento non è fatto di parole di fila: il predicato di
  // una domanda (DID you GO?) non comprende il soggetto in mezzo
  indici?: number[];
  ruolo: string;
  // La domanda a cui risponde, come a scuola
  domanda?: string;
  // Spiegazione breve (per esempio: "who = the man")
  nota?: string;
  // Gli aggettivi che accompagnano il nome: gli attributi
  attributi?: number[];
};

export type Proposizione = {
  tipo: string;
  // Per le relative libere: che funzione hanno nella reggente
  // ("complemento oggetto di will do")
  funzione?: string;
  // La parola che la introduce (because, who, and...)
  introdotta?: number;
  gruppo?: GruppoVerbale;
  elementi: Elemento[];
  // Tutte le parole della proposizione
  parole: number[];
  // Per le relative: il nome a cui si riferiscono
  antecedente?: [number, number];
};

// Verbi dopo cui to + infinito è il complemento del verbo (oggettiva)
const REGGONO_INFINITO = new Set([
  "want",
  "need",
  "decide",
  "hope",
  "plan",
  "like",
  "love",
  "hate",
  "prefer",
  "try",
  "learn",
  "forget",
  "remember",
  "agree",
  "promise",
  "refuse",
  "choose",
  "expect",
  "wish",
  "start",
  "begin",
  "seem",
  "manage",
  "offer",
  "would",
  "ask",
  "tell",
  "help",
  "afford",
  "intend",
  "mean",
  "pretend",
]);

const DOMANDE: Record<string, string> = {
  soggetto: "Chi? Che cosa? (compie l'azione o di cui si parla)",
  "predicato verbale": "Che cosa fa? Che cosa succede?",
  "predicato nominale": "Com'è? Che cos'è?",
  "complemento oggetto": "Chi? Che cosa?",
  "complemento di termine": "A chi? A che cosa?",
  "complemento di specificazione": "Di chi? Di che cosa?",
  "complemento d'agente": "Da chi? (al passivo)",
  "complemento di causa efficiente": "Da che cosa? (al passivo)",
  "complemento di stato in luogo": "Dove?",
  "complemento di moto a luogo": "Verso dove?",
  "complemento di moto da luogo": "Da dove?",
  "complemento di moto per luogo": "Per dove? Attraverso dove?",
  "complemento di tempo determinato": "Quando?",
  "complemento di tempo continuato": "Per quanto tempo? Da quanto tempo?",
  "complemento di compagnia": "Con chi?",
  "complemento di mezzo": "Per mezzo di chi o di che cosa? Con che cosa?",
  "complemento di modo": "Come? In che modo?",
  "complemento di causa": "Perché? Per quale causa?",
  "complemento di fine": "Per quale scopo?",
  "complemento di vantaggio": "Per chi? A favore di chi?",
  "complemento di argomento": "Di che cosa? Su che cosa?",
  "complemento di materia": "Di che materia?",
  "complemento di origine o provenienza": "Da dove? Da chi? (origine)",
  "complemento di paragone": "Rispetto a chi? Rispetto a che cosa?",
  "complemento di privazione": "Senza chi? Senza che cosa?",
  "complemento predicativo del soggetto": "Come appare? Come diventa?",
  "complemento partitivo": "Di quale insieme? Tra chi?",
  "complemento di quantità": "Quanto?",
  "complemento di tempo (frequenza)": "Quante volte? Ogni quanto?",
};

const el = (
  da: number,
  a: number,
  ruolo: string,
  extra: Partial<Elemento> = {},
): Elemento => ({
  da,
  a,
  ruolo,
  domanda: DOMANDE[ruolo],
  ...extra,
});

// Se in i comincia un'espressione fissa (next door, by heart), la sua fine
// e il suo ruolo
export function espressioneFissa(parole: Parola[], i: number) {
  for (const [e, ruolo] of Object.entries(ESPRESSIONI)) {
    const pezzi = e.split(" ");
    if (pezzi.every((pz, j) => parole[i + j]?.forma === pz))
      return { fine: i + pezzi.length - 1, ruolo };
  }
  return undefined;
}

// ---------- Il periodo: le proposizioni ----------

export function dividiInProposizioni(
  parole: Parola[],
  gruppi: GruppoVerbale[],
): Proposizione[] {
  // A quale gruppo verbale appartiene ogni parola
  const gruppoDi = new Map<number, GruppoVerbale>();
  for (const g of gruppi) for (const i of g.parole) gruppoDi.set(i, g);

  type Aperta = Proposizione & { chiusa?: boolean };
  const tutte: Aperta[] = [];
  const pila: Aperta[] = [];
  const nuova = (
    tipo: string,
    introdotta?: number,
    extra: Partial<Proposizione> = {},
  ) => {
    const p: Aperta = { tipo, introdotta, elementi: [], parole: [], ...extra };
    tutte.push(p);
    pila.push(p);
    return p;
  };
  let corrente = nuova("principale");
  // Le subordinate che stanno in testa (If I had..., I would...) finiscono
  // alla virgola
  let finisceAllaVirgola = false;

  for (let i = 0; i < parole.length; i++) {
    const w = parole[i];
    const g = gruppoDi.get(i);

    // Un nuovo gruppo verbale finito in una proposizione che ne ha già uno:
    // se siamo in una relativa, la relativa è finita e si torna fuori
    if (g && g.parole[0] === i && g.modo !== "infinito" && corrente.gruppo) {
      while (
        pila.length > 1 &&
        corrente.gruppo &&
        corrente.tipo.startsWith("subordinata relativa")
      ) {
        pila.pop();
        corrente = pila[pila.length - 1];
      }
    }

    // La coda di una question tag (..., isn't it?)
    if (g && g.parole[0] === i && g.coda) {
      while (pila.length > 1) pila.pop();
      const p = nuova("question tag (coda interrogativa)", undefined, {
        gruppo: g,
      });
      p.parole.push(
        ...g.parole,
        ...(g.soggettoInterno ? [g.soggettoInterno[0]] : []),
      );
      i = parole.length;
      corrente = p;
      continue;
    }

    // to + infinito, o -ing dopo un verbo (I enjoy reading): una
    // proposizione implicita
    const gerundioOggetto =
      g?.modo === "gerundio" &&
      parole[i - 1]?.categoria === "verbo" &&
      corrente.gruppo;
    if (g && g.parole[0] === i && (g.modo === "infinito" || gerundioOggetto)) {
      const reggente = corrente.gruppo;
      // Dopo want, decide, hope... l'infinito è il complemento del verbo
      // (I want to go); altrimenti indica lo scopo (I went out to buy milk)
      const oggettiva =
        (!!reggente && REGGONO_INFINITO.has(reggente.base)) ||
        g.note.includes("senza to");
      const forma =
        g.modo === "gerundio"
          ? "gerundio"
          : g.note.includes("senza to")
            ? "infinito senza to"
            : "infinito";
      const p = nuova(
        oggettiva || g.modo === "gerundio"
          ? `subordinata oggettiva implicita (${forma})`
          : "subordinata finale implicita (infinito)",
        undefined,
        { gruppo: g },
      );
      p.parole.push(...g.parole);
      i = Math.max(...g.parole);
      // Il resto (complementi dell'infinito) va nella stessa implicita,
      // fino alla fine o a una congiunzione
      corrente = p;
      continue;
    }

    if (
      w.categoria === "congiunzione" &&
      w.forma in CONGIUNZIONI_SUBORDINANTI
    ) {
      const tipo = CONGIUNZIONI_SUBORDINANTI[w.forma].proposizione;
      // La subordinata dipende dalla proposizione in cui si trova
      if (corrente.tipo.includes("implicita")) {
        pila.pop();
        corrente = pila[pila.length - 1];
      }
      corrente = nuova(`subordinata ${tipo}`, i);
      corrente.parole.push(i);
      finisceAllaVirgola =
        i === 0 || (parole[i - 1]?.dopo ?? "").match(/[,;]/) !== null;
      continue;
    }

    if (
      w.categoria === "pronome" &&
      w.dettaglio.startsWith("pronome relativo")
    ) {
      const ant = antecedente(parole, i);
      // Senza un nome a cui riferirsi è una relativa libera
      // (whatever it takes, what you need): fa da complemento della reggente
      const libera =
        !ant && (w.dettaglio.includes("indefinito") || w.forma === "what");
      corrente = nuova(
        libera ? "subordinata relativa libera" : "subordinata relativa",
        i,
        { antecedente: ant },
      );
      corrente.parole.push(i);
      continue;
    }

    // and/but/or + un altro verbo (con o senza soggetto): una coordinata
    if (
      w.categoria === "congiunzione" &&
      w.forma in CONGIUNZIONI_COORDINANTI &&
      iniziaUnaFrase(parole, i, gruppoDi)
    ) {
      // La coordinata sta allo stesso livello della proposizione corrente
      const livello = corrente;
      pila.pop();
      const tipo =
        livello.tipo === "principale" ||
        livello.tipo.startsWith("coordinata alla principale")
          ? "coordinata alla principale"
          : `coordinata (${livello.tipo})`;
      corrente = nuova(
        `${tipo}: ${CONGIUNZIONI_COORDINANTI[w.forma].replace("coordinante ", "")}`,
        i,
      );
      corrente.parole.push(i);
      continue;
    }

    corrente.parole.push(i);
    if (g && g.parole[0] === i && !corrente.gruppo) {
      corrente.gruppo = g;
      // Le altre parole del gruppo verbale (anche il soggetto in mezzo)
      const fine = Math.max(...g.parole);
      for (let k = i + 1; k <= fine; k++) corrente.parole.push(k);
      i = fine;
    }

    // Una subordinata in testa finisce alla virgola: dopo torna la principale
    if (finisceAllaVirgola && parole[i].dopo.match(/[,;]/) && pila.length > 1) {
      pila.pop();
      corrente = pila[pila.length - 1];
      finisceAllaVirgola = false;
    }
  }

  // La principale che segue una subordinata in testa ha le parole dopo
  const risultato = tutte.filter((p) => p.parole.length > 0);
  for (const p of risultato) p.parole.sort((a, b) => a - b);
  for (const p of risultato) analizzaProposizione(parole, p);

  // Le relative libere fanno da complemento (o da soggetto) della reggente
  for (const p of risultato) {
    if (
      !p.tipo.startsWith("subordinata relativa libera") ||
      p.introdotta === undefined
    )
      continue;
    const reggente = risultato.find(
      (q) => q !== p && q.gruppo && !q.tipo.startsWith("subordinata relativa"),
    );
    if (!reggente?.gruppo) continue;
    const verbo = unisci(parole, reggente.gruppo.parole);
    const dopo = p.introdotta > Math.max(...reggente.gruppo.parole);
    const haOggetto = reggente.elementi.some(
      (e) => e.ruolo === "complemento oggetto",
    );
    p.funzione = dopo
      ? haOggetto || reggente.gruppo.copula
        ? reggente.gruppo.copula
          ? `nome del predicato di «${verbo}»`
          : `complemento di «${verbo}»`
        : `complemento oggetto di «${verbo}»`
      : `soggetto di «${verbo}»`;
    p.tipo = `subordinata relativa libera (fa da ${p.funzione})`;
    // Il soggetto sottinteso della reggente, se la relativa sta prima, è la
    // relativa stessa (Whoever wins gets a prize)
    if (!dopo) {
      const s = reggente.elementi.find(
        (e) => e.ruolo === "soggetto" && e.da < 0,
      );
      if (s) s.nota = "è la relativa libera che sta prima del verbo";
    }
  }
  return risultato;
}

// Il nome a cui si riferisce un pronome relativo (the man WHO...)
function antecedente(
  parole: Parola[],
  i: number,
): [number, number] | undefined {
  let k = i - 1;
  if (k < 0) return undefined;
  const prima = parole[k];
  // un nome, o un pronome che ne fa le veci (the ONE who, SOMEONE who,
  // THOSE who, EVERYTHING that)
  const pronomeAntecedente =
    prima.categoria === "pronome" &&
    !prima.dettaglio.includes("personale") &&
    !prima.dettaglio.includes("relativo");
  if (prima.categoria !== "nome" && !pronomeAntecedente) return undefined;
  const fine = k;
  while (
    k > 0 &&
    ["nome", "aggettivo", "articolo", "numerale"].includes(
      parole[k - 1].categoria,
    )
  )
    k--;
  return [k, fine];
}

// Vero se dopo la congiunzione in i comincia una nuova frase (c'è un verbo
// finito prima della fine o della prossima congiunzione)
function iniziaUnaFrase(
  parole: Parola[],
  i: number,
  gruppoDi: Map<number, GruppoVerbale>,
) {
  for (let k = i + 1; k < parole.length; k++) {
    const g = gruppoDi.get(k);
    if (g && g.modo !== "infinito" && g.modo !== "gerundio") return true;
    if (parole[k].categoria === "congiunzione") return false;
  }
  return false;
}

// ---------- Dentro una proposizione: soggetto, predicato, complementi ----------

function analizzaProposizione(parole: Parola[], p: Proposizione) {
  const g = p.gruppo;
  const usate = new Set<number>();
  const elementi: Elemento[] = [];
  const insieme = new Set(p.parole);
  const aggiungi = (e: Elemento) => {
    for (let k = e.da; k <= e.a; k++) usate.add(k);
    elementi.push(e);
  };

  // La parola che introduce la proposizione
  if (p.introdotta !== undefined) {
    const w = parole[p.introdotta];
    if (w.categoria === "congiunzione") {
      aggiungi({
        da: p.introdotta,
        a: p.introdotta,
        ruolo: "congiunzione",
        nota: `introduce la ${p.tipo.replace("subordinata ", "").replace(/:.*/, "")}`,
      });
    }
  }

  if (!g) {
    // Una frase senza verbo (Hello! What a day!)
    analizzaResto(parole, p, elementi, usate, insieme, undefined);
    p.elementi = ordina(elementi);
    return;
  }

  // La coda di una question tag: ausiliare e pronome
  if (g.coda) {
    const pr = g.soggettoInterno ? g.soggettoInterno[0] : -1;
    p.elementi = [
      {
        da: Math.min(...g.parole),
        a: Math.max(...g.parole),
        ruolo: "ausiliare della coda",
        nota: "lo stesso ausiliare della frase, con la polarità rovesciata",
      },
      ...(pr >= 0
        ? [
            {
              da: pr,
              a: pr,
              ruolo: "pronome della coda",
              nota: "riprende il soggetto della frase",
            },
          ]
        : []),
    ];
    return;
  }

  // Il predicato
  const fineGruppo = Math.max(...g.parole);
  const inizioGruppo = Math.min(...g.parole);
  const paroleGruppo = g.parole.filter((k) => insieme.has(k));
  const tipoPredicato =
    g.copula && g.base === "be" ? "copula" : "predicato verbale";
  // be + not: la negazione fa parte della copula (We AREN'T hungry)
  if (
    tipoPredicato === "copula" &&
    !g.soggettoInterno &&
    parole[fineGruppo + 1]?.forma === "not" &&
    insieme.has(fineGruppo + 1)
  )
    paroleGruppo.push(fineGruppo + 1);
  for (const k of paroleGruppo) usate.add(k);
  elementi.push({
    da: inizioGruppo,
    a: Math.max(...paroleGruppo),
    indici: g.soggettoInterno ? paroleGruppo : undefined,
    ruolo: tipoPredicato,
    domanda:
      tipoPredicato === "copula" ? undefined : DOMANDE["predicato verbale"],
    nota:
      tipoPredicato === "copula"
        ? "be unisce il soggetto al nome del predicato: insieme formano il predicato nominale"
        : `${g.tempo}${g.forma === "passiva" ? ", passivo" : ""}`,
  });

  // Il soggetto
  const soggetto = trovaSoggetto(parole, p, g, insieme, usate);
  if (soggetto) aggiungi(soggetto);
  // there di there is / there are (o Is THERE...? nelle domande)
  const there =
    parole[inizioGruppo - 1]?.forma === "there"
      ? inizioGruppo - 1
      : parole[fineGruppo + 1]?.forma === "there" &&
          (g.domanda || inizioGruppo === 0)
        ? fineGruppo + 1
        : -1;
  if (there >= 0 && g.base === "be" && insieme.has(there))
    aggiungi({
      da: there,
      a: there,
      ruolo: "soggetto apparente",
      nota: "there + be = esserci: il vero soggetto viene dopo il verbo",
    });

  // Il pronome relativo, se non è il soggetto, è un complemento
  // (the letter THAT I wrote: that = complemento oggetto)
  if (
    p.tipo.startsWith("subordinata relativa") &&
    p.introdotta !== undefined &&
    !usate.has(p.introdotta)
  ) {
    const r = parole[p.introdotta];
    const ant = p.antecedente
      ? parole
          .slice(p.antecedente[0], p.antecedente[1] + 1)
          .map((w) => w.testo)
          .join(" ")
      : "";
    const ruolo =
      r.forma === "whose"
        ? "complemento di specificazione"
        : r.forma === "where"
          ? "complemento di stato in luogo"
          : "complemento oggetto";
    aggiungi(
      el(p.introdotta, p.introdotta, ruolo, {
        nota: `pronome relativo${ant ? `: sta per "${ant}"` : ""}`,
      }),
    );
  }

  // Dopo il verbo: nome del predicato, oggetto, termine
  const subitoDopo =
    Math.max(fineGruppo, g.soggettoInterno ? g.soggettoInterno[1] : -1) + 1;
  let k = subitoDopo;
  while (
    k < parole.length &&
    insieme.has(k) &&
    parole[k].categoria === "avverbio" &&
    !AVVERBI[parole[k].forma]?.complemento
  )
    k++;
  const primo = parole[k];

  if (primo && insieme.has(k) && !usate.has(k)) {
    if (g.copula) {
      // be + aggettivo/nome = predicato nominale; seem/become... + aggettivo
      // = complemento predicativo del soggetto
      // L'avverbio di grado fa parte del nome del predicato (very long)
      // (gli avverbi di frequenza restano fuori: He is NEVER late)
      k = subitoDopo;
      while (
        parole[k]?.categoria === "avverbio" &&
        (AVVERBI[parole[k].forma]?.complemento || parole[k].forma === "not")
      )
        k++;
      const fine = fineNomeDelPredicato(parole, k, insieme);
      const ruolo =
        g.base === "be"
          ? "nome del predicato"
          : "complemento predicativo del soggetto";
      aggiungi(
        el(k, fine, ruolo, {
          domanda:
            g.base === "be" ? DOMANDE["predicato nominale"] : DOMANDE[ruolo],
          nota:
            g.base === "be"
              ? "con la copula forma il predicato nominale"
              : undefined,
          attributi: attributi(parole, k, fine),
        }),
      );
    } else if (g.forma === "attiva" && !espressioneFissa(parole, k)) {
      const fine1 = fineGruppoNominale(parole, k);
      if (fine1 >= 0 && !eTempo(parole, k, fine1) && insieme.has(fine1)) {
        const fine2 = fineGruppoNominale(parole, fine1 + 1);
        if (
          fine2 >= 0 &&
          DITRANSITIVI.has(g.base) &&
          !eTempo(parole, fine1 + 1, fine2) &&
          insieme.has(fine2)
        ) {
          // gave HER BROTHER (a chi?) A PRESENT (che cosa?)
          aggiungi(
            el(k, fine1, "complemento di termine", {
              nota: "in inglese senza to, perché viene prima dell'oggetto",
              attributi: attributi(parole, k, fine1),
            }),
          );
          aggiungi(
            el(fine1 + 1, fine2, "complemento oggetto", {
              attributi: attributi(parole, fine1 + 1, fine2),
            }),
          );
        } else if (!(parole[k].forma === "home" && MOVIMENTO.has(g.base))) {
          aggiungi(
            el(k, fine1, "complemento oggetto", {
              attributi: attributi(parole, k, fine1),
            }),
          );
        }
      }
    }
  }

  analizzaResto(parole, p, elementi, usate, insieme, g);
  p.elementi = ordina(elementi);
}

function ordina(elementi: Elemento[]) {
  return elementi.sort((a, b) => a.da - b.da);
}

function fineNomeDelPredicato(
  parole: Parola[],
  k: number,
  insieme: Set<number>,
) {
  const nome = fineGruppoNominale(parole, k);
  if (nome >= 0) return nome;
  let fine = k;
  while (
    fine + 1 < parole.length &&
    insieme.has(fine + 1) &&
    (parole[fine].categoria === "avverbio" ||
      (parole[fine + 1].categoria === "aggettivo" && parole[fine].dopo === ""))
  )
    fine++;
  return fine;
}

// Gli aggettivi qualificativi dentro un gruppo nominale (gli attributi)
function attributi(parole: Parola[], da: number, a: number) {
  const lista: number[] = [];
  for (let k = da; k <= a; k++)
    if (
      parole[k].categoria === "aggettivo" &&
      parole[k].dettaglio.startsWith("aggettivo qualificativo")
    )
      lista.push(k);
  return lista.length ? lista : undefined;
}

// Vero se il gruppo nominale è un'espressione di tempo senza preposizione
// (last week, every day, this morning, three years)
function eTempo(parole: Parola[], da: number, a: number) {
  const testa = parole[a];
  if (testa.classe !== "tempo") return false;
  // I pasti subito dopo il verbo sono l'oggetto: we have LUNCH at one
  if (
    ["breakfast", "lunch", "dinner", "supper", "brunch"].includes(testa.base) &&
    parole[da - 1]?.categoria === "verbo"
  )
    return false;
  const primo = parole[da];
  return (
    INIZIO_TEMPO.has(primo.forma) ||
    primo.categoria === "numerale" ||
    primo.forma === "all" ||
    parole[a + 1]?.forma === "ago" ||
    da === a
  );
}

function trovaSoggetto(
  parole: Parola[],
  p: Proposizione,
  g: GruppoVerbale,
  insieme: Set<number>,
  usate: Set<number>,
): Elemento | undefined {
  // Domanda: il soggetto sta dopo l'ausiliare (Did YOU go?)
  if (g.soggettoInterno) {
    const [da, a] = g.soggettoInterno;
    return el(da, a, "soggetto", {
      nota: "nelle domande va dopo l'ausiliare",
      attributi: attributi(parole, da, a),
    });
  }
  if (g.modo === "imperativo")
    return {
      da: -1,
      a: -1,
      ruolo: "soggetto",
      domanda: DOMANDE.soggetto,
      nota: g.tempo.includes("let's")
        ? "sottinteso: we (noi)"
        : "sottinteso: you (tu, voi)",
    };
  if (g.modo === "infinito" || g.modo === "gerundio") return undefined;

  const inizio = Math.min(...g.parole);
  // Relativa: il pronome relativo davanti al verbo è il soggetto
  if (
    p.tipo.startsWith("subordinata relativa") &&
    p.introdotta !== undefined &&
    p.introdotta === inizio - 1 &&
    parole[p.introdotta].forma !== "where"
  ) {
    const ant = p.antecedente;
    return el(p.introdotta, p.introdotta, "soggetto", {
      nota: ant
        ? `pronome relativo: sta per "${parole
            .slice(ant[0], ant[1] + 1)
            .map((w) => w.forma)
            .join(" ")}"`
        : "pronome relativo",
    });
  }
  // there is / there are: il vero soggetto viene dopo (anche nelle domande:
  // Is there a bank...?; e dopo not: There aren't ANY EGGS)
  const prima = parole[inizio - 1];
  const fineG = Math.max(...g.parole);
  const thereDopo =
    parole[fineG + 1]?.forma === "there" && (g.domanda || inizio === 0);
  if ((prima?.forma === "there" || thereDopo) && g.base === "be") {
    usate.add(thereDopo ? fineG + 1 : inizio - 1);
    let da = fineG + 1 + (thereDopo ? 1 : 0);
    while (parole[da]?.forma === "not") da++;
    const fine = fineGruppoNominale(parole, da);
    if (fine >= 0) {
      return el(da, fine, "soggetto", {
        nota: "posposto: there è il soggetto apparente (c'è, ci sono)",
        attributi: attributi(parole, da, fine),
      });
    }
  }
  // Domanda sul soggetto: Who called? What happened?
  if (
    prima &&
    inizio - 1 === 0 &&
    prima.dettaglio.startsWith("pronome interrogativo")
  )
    return el(0, 0, "soggetto", {
      nota: "la domanda è sul soggetto: niente ausiliare do",
    });

  // Il gruppo nominale prima del verbo, saltando gli avverbi e le parole
  // di un'altra proposizione (una relativa in mezzo: The man WHO... is)
  let k = inizio - 1;
  while (
    k >= 0 &&
    (!insieme.has(k) || (parole[k].categoria === "avverbio" && !usate.has(k)))
  )
    k--;
  const sottinteso = {
    da: -1,
    a: -1,
    ruolo: "soggetto",
    domanda: DOMANDE.soggetto,
    nota: p.tipo.startsWith("coordinata")
      ? "sottinteso: lo stesso della proposizione precedente"
      : "sottinteso",
  };
  if (
    k < 0 ||
    usate.has(k) ||
    (parole[k].categoria !== "nome" && parole[k].categoria !== "pronome")
  )
    return sottinteso;
  // Un pronome è il soggetto da solo (non ha articoli o aggettivi davanti)
  if (parole[k].categoria === "pronome") return el(k, k, "soggetto");
  const fine = k;
  while (
    k > 0 &&
    insieme.has(k - 1) &&
    !usate.has(k - 1) &&
    !parole[k - 1].dopo.match(/[,;:]/) &&
    ["nome", "aggettivo", "articolo", "numerale"].includes(
      parole[k - 1].categoria,
    )
  )
    k--;
  return el(k, fine, "soggetto", { attributi: attributi(parole, k, fine) });
}

// Le parole rimaste: complementi introdotti da preposizione, avverbi,
// espressioni di tempo, interiezioni
function analizzaResto(
  parole: Parola[],
  p: Proposizione,
  elementi: Elemento[],
  usate: Set<number>,
  insieme: Set<number>,
  g: GruppoVerbale | undefined,
) {
  const aggiungi = (e: Elemento) => {
    for (let k = e.da; k <= e.a; k++) usate.add(k);
    elementi.push(e);
  };
  const ordinate = [...p.parole];
  for (let n = 0; n < ordinate.length; n++) {
    const i = ordinate[n];
    if (usate.has(i)) continue;
    const w = parole[i];

    // How + aggettivo (How old are you? How tall is he?)
    if (
      i === 0 &&
      w.forma === "how" &&
      parole[1]?.categoria === "aggettivo" &&
      g
    ) {
      aggiungi(
        el(
          0,
          1,
          g.base === "be"
            ? "nome del predicato"
            : // How long have you lived here? (da quanto tempo?)
              parole[1].forma === "long"
              ? "complemento di tempo continuato"
              : "complemento di modo",
          {
            nota: "How + aggettivo: la domanda chiede una misura o una qualità (how old = quanti anni)",
          },
        ),
      );
      continue;
    }

    // Domande con la parola interrogativa (What did you buy? Where...?)
    if (i === 0 && g?.domanda && w.dettaglio.includes("interrogativo")) {
      const ruolo =
        w.forma === "where"
          ? "complemento di stato in luogo"
          : w.forma === "when"
            ? "complemento di tempo determinato"
            : w.forma === "why"
              ? "complemento di causa"
              : w.forma === "how"
                ? "complemento di modo"
                : w.forma === "whose"
                  ? "complemento di specificazione"
                  : // What time...? (a che ora?)
                    parole[i + 1]?.forma === "time" &&
                      w.categoria === "aggettivo"
                    ? "complemento di tempo determinato"
                    : "complemento oggetto";
      const fine =
        w.categoria === "aggettivo"
          ? Math.max(i, fineGruppoNominale(parole, i + 1))
          : i;
      aggiungi(el(i, fine, ruolo, { nota: "è la parola della domanda" }));
      continue;
    }

    // Espressioni fisse (next door, by heart, on foot)
    const fissa = espressioneFissa(parole, i);
    if (fissa) {
      aggiungi(el(i, fissa.fine, fissa.ruolo, { nota: "espressione fissa" }));
      continue;
    }

    // Preposizione (anche di più parole) + gruppo nominale
    const composta = PREPOSIZIONI_COMPOSTE.find((c) => {
      const pezzi = c.split(" ");
      return pezzi.every((pz, j) => parole[i + j]?.forma === pz);
    });
    // Phrasal verb: la particella subito dopo il verbo fa parte del verbo,
    // e il nome dopo è il complemento oggetto (turn OFF the light)
    if (
      w.categoria === "preposizione" &&
      !composta &&
      g &&
      i === Math.max(...g.parole) + 1 &&
      ePhrasal(g.base, w.forma)
    ) {
      aggiungi({
        da: i,
        a: i,
        ruolo: "particella avverbiale",
        nota: `fa parte del phrasal verb ${g.base} ${w.forma}: insieme hanno un significato nuovo`,
      });
      const fine = fineGruppoNominale(parole, i + 1);
      if (
        fine >= 0 &&
        insieme.has(fine) &&
        !usate.has(i + 1) &&
        g.forma === "attiva"
      )
        aggiungi(
          el(i + 1, fine, "complemento oggetto", {
            nota: `oggetto di ${g.base} ${w.forma}`,
            attributi: attributi(parole, i + 1, fine),
          }),
        );
      continue;
    }

    if (w.categoria === "preposizione" || composta) {
      const lunghezza = composta ? composta.split(" ").length : 1;
      const prep = composta ?? w.forma;
      const inizioNome = i + lunghezza;
      let fine = fineGruppoNominale(parole, inizioNome);
      // preposizione + forma in -ing (before leaving, by working)
      if (fine < 0 && parole[inizioNome]?.categoria === "verbo")
        fine = inizioNome;
      if (fine < 0 || !insieme.has(fine)) {
        // Preposizione senza nome dopo: particella di un phrasal verb
        aggiungi({
          da: i,
          a: i + lunghezza - 1,
          ruolo: "particella avverbiale",
          nota: "fa parte del phrasal verb: cambia il significato del verbo",
        });
        continue;
      }
      // "of" dopo un nome: specificazione di quel nome
      const ruolo = complemento(
        prep,
        parole,
        inizioNome,
        fine,
        g,
        parole[i - 1],
      );
      aggiungi(
        el(i, fine, ruolo, { attributi: attributi(parole, inizioNome, fine) }),
      );
      continue;
    }

    // Espressioni di tempo senza preposizione (last week, three years ago)
    if (
      w.categoria === "nome" ||
      w.categoria === "articolo" ||
      w.categoria === "aggettivo" ||
      w.categoria === "numerale"
    ) {
      const fine = fineGruppoNominale(parole, i);
      if (fine >= 0 && eTempo(parole, i, fine)) {
        const ago = parole[fine + 1]?.forma === "ago";
        const continuato =
          (parole[i].categoria === "numerale" && !ago) ||
          parole[i].forma === "all";
        aggiungi(
          el(
            i,
            ago ? fine + 1 : fine,
            continuato
              ? "complemento di tempo continuato"
              : "complemento di tempo determinato",
          ),
        );
        continue;
      }
      if (fine >= 0) {
        aggiungi(
          g
            ? el(i, fine, "gruppo nominale", {
                nota: "nome senza un ruolo chiaro nella proposizione",
                attributi: attributi(parole, i, fine),
              })
            : el(i, fine, "frase nominale", {
                nota: "una frase senza verbo (esclamazione, saluto, titolo)",
                attributi: attributi(parole, i, fine),
              }),
        );
        continue;
      }
      // Un aggettivo da solo dopo il verbo fa da avverbio (study harder)
      if (w.categoria === "aggettivo" && g && !g.copula) {
        aggiungi(
          el(i, i, "complemento di modo", {
            nota: "aggettivo usato come avverbio (hard → harder)",
          }),
        );
        continue;
      }
    }

    if (w.categoria === "avverbio") {
      const info = AVVERBI[w.forma];
      if (w.forma === "not") continue;
      // home dopo un verbo di movimento: moto a luogo (go home)
      if (w.forma === "home" && g && MOVIMENTO.has(g.base)) {
        aggiungi(
          el(i, i, "complemento di moto a luogo", {
            nota: "home senza preposizione dopo un verbo di movimento",
          }),
        );
        continue;
      }
      // Un avverbio di grado con il suo avverbio (very well)
      let fine = i;
      while (
        parole[fine + 1]?.categoria === "avverbio" &&
        insieme.has(fine + 1) &&
        parole[fine].dettaglio.includes("quantità")
      )
        fine++;
      const ultimo = parole[fine];
      const tipo =
        AVVERBI[ultimo.forma]?.complemento ??
        (ultimo.dettaglio.includes("modo") ? "modo" : info?.complemento);
      if (tipo) {
        const ruolo =
          tipo === "tempo (frequenza)"
            ? "complemento di tempo (frequenza)"
            : tipo.startsWith("tempo")
              ? "complemento di tempo determinato"
              : tipo === "luogo"
                ? "complemento di stato in luogo"
                : "complemento di modo";
        aggiungi(
          el(i, fine, ruolo, {
            nota:
              tipo === "tempo (frequenza)"
                ? "avverbio di frequenza: quante volte"
                : "espresso da un avverbio",
          }),
        );
      } else {
        aggiungi({ da: i, a: fine, ruolo: "avverbio", nota: w.dettaglio });
      }
      continue;
    }

    // Il participio di have/get + oggetto + participio (had my hair CUT)
    if (w.categoria === "verbo" && g && ["have", "get"].includes(g.base)) {
      aggiungi(
        el(i, i, "complemento predicativo dell'oggetto", {
          nota: "participio: completa il causativo (have + oggetto + participio = farsi fare)",
        }),
      );
      continue;
    }

    if (w.categoria === "interiezione") {
      aggiungi({
        da: i,
        a: i,
        ruolo: "interiezione",
        nota: "esprime un'emozione o un saluto: è fuori dalla struttura della frase",
      });
      continue;
    }
    if (w.categoria === "congiunzione") {
      aggiungi({ da: i, a: i, ruolo: "congiunzione", nota: w.dettaglio });
      continue;
    }
  }
}

// Il complemento introdotto da una preposizione
function complemento(
  prep: string,
  parole: Parola[],
  da: number,
  a: number,
  g: GruppoVerbale | undefined,
  prima: Parola | undefined,
): string {
  const testa = parole[a];
  const base = testa.base;
  const persona =
    testa.classe === "persona" ||
    (testa.categoria === "pronome" &&
      ![
        "it",
        "this",
        "that",
        "something",
        "anything",
        "nothing",
        "everything",
      ].includes(testa.forma));
  const tempo = testa.classe === "tempo" || /^\d{4}$/.test(testa.forma);
  const luogo = testa.classe === "luogo";
  const movimento = !!g && MOVIMENTO.has(g.base);
  const durata =
    parole[da].categoria === "numerale" ||
    testa.tags.has("Duration") ||
    (/s$/.test(testa.forma) && tempo);

  switch (prep) {
    case "of":
      if (prima?.forma === "made") return "complemento di materia";
      if (
        prima &&
        (prima.categoria === "pronome" ||
          prima.categoria === "numerale" ||
          prima.dettaglio.includes("indefinito") ||
          prima.dettaglio.includes("quantità"))
      )
        return "complemento partitivo";
      return "complemento di specificazione";
    case "in":
    case "on":
    case "at":
      if (tempo) return "complemento di tempo determinato";
      if (testa.tags.has("Language")) return "complemento di modo";
      return "complemento di stato in luogo";
    case "into":
    case "onto":
    case "towards":
    case "toward":
      return "complemento di moto a luogo";
    case "out of":
      return "complemento di moto da luogo";
    case "through":
    case "across":
    case "along":
    case "past":
      return "complemento di moto per luogo";
    case "to":
      if (luogo || (movimento && !persona))
        return "complemento di moto a luogo";
      if (tempo) return "complemento di tempo determinato";
      return "complemento di termine";
    case "from":
      if (tempo) return "complemento di tempo determinato";
      if (g?.base === "be" || persona)
        return "complemento di origine o provenienza";
      return "complemento di moto da luogo";
    case "for":
      if (tempo && durata) return "complemento di tempo continuato";
      if (persona) return "complemento di vantaggio";
      return "complemento di fine";
    case "since":
      return "complemento di tempo continuato";
    case "during":
    case "before":
    case "after":
    case "until":
    case "till":
      return "complemento di tempo determinato";
    case "with":
      if (persona) return "complemento di compagnia";
      if (NOMI_MODO.has(base)) return "complemento di modo";
      if (NOMI_STRUMENTO.has(base)) return "complemento di mezzo";
      return "complemento di mezzo";
    case "without":
      return "complemento di privazione";
    case "by":
      if (g?.forma === "passiva")
        return persona
          ? "complemento d'agente"
          : "complemento di causa efficiente";
      if (NOMI_MEZZO.has(base)) return "complemento di mezzo";
      if (tempo) return "complemento di tempo determinato";
      if (parole[da].categoria === "verbo") return "complemento di mezzo";
      return "complemento di modo";
    case "about":
      return "complemento di argomento";
    case "because of":
    case "due to":
    case "thanks to":
      return "complemento di causa";
    case "like":
    case "as":
      return "complemento di modo";
    case "than":
      return "complemento di paragone";
    case "next to":
    case "near":
    case "under":
    case "behind":
    case "above":
    case "below":
    case "between":
    case "among":
    case "in front of":
    case "opposite":
    case "beside":
    case "inside":
    case "outside":
    case "close to":
    case "on top of":
    case "over":
    case "around":
      return movimento
        ? "complemento di moto per luogo"
        : "complemento di stato in luogo";
    default:
      return "complemento indiretto";
  }
}
