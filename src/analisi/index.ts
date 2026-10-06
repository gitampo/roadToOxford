/**
 * L'analisi di una frase inglese, senza IA: tutto a regole.
 *   analizza("My sister has been living in London for three years.")
 * restituisce, per ogni frase del testo:
 * - grammaticale: ogni parola (o gruppo verbale) con la sua categoria;
 * - proposizioni: l'analisi del periodo e l'analisi logica di ognuna;
 * - semantica: tipo di frase, significato dei tempi, chi fa che cosa,
 *   periodo ipotetico, parole spia ed errori tipici.
 *
 * I pezzi: parole.ts (le parti del discorso), verbi.ts (i gruppi verbali e
 * i tempi), logica.ts (proposizioni e complementi), semantica.ts.
 */

import { glosse } from "./glossario";
import { dividiInProposizioni, Proposizione } from "./logica";
import { PRONOMI } from "./lessico";
import {
  Categoria,
  dividiInParole,
  Parola,
  ricomponi,
  unisci,
} from "./parole";
import { analisiSemantica, Semantica } from "./semantica";
import { GruppoVerbale, trovaGruppiVerbali } from "./verbi";

export { unisci };

export type { Elemento, Proposizione } from "./logica";
export type { Categoria, Parola } from "./parole";
export type { Semantica } from "./semantica";
export type { GruppoVerbale } from "./verbi";

export type VoceGrammaticale = {
  // Le parole della voce (un gruppo verbale può averne più di una)
  indici: number[];
  testo: string;
  categoria: Categoria;
  dettaglio: string;
  // La traduzione in questo contesto ("" se non si trova)
  traduzione: string;
};

export type AnalisiFrase = {
  testo: string;
  parole: Parola[];
  gruppi: GruppoVerbale[];
  grammaticale: VoceGrammaticale[];
  proposizioni: Proposizione[];
  semantica: Semantica;
  // La traduzione di ogni parola, nello stesso ordine di parole (per un
  // gruppo verbale sta sotto il verbo principale)
  glosse: string[];
};

// Come mostrare una parola: i pezzi delle forme contratte con, tra
// parentesi, la parola intera ('s (is), n't (not))
export function mostra(p: Parola) {
  if (p.contratta && p.testo.toLowerCase() !== p.forma)
    return `${p.testo} (${p.forma})`;
  return p.testo;
}

export function analizza(testo: string): AnalisiFrase[] {
  const pulito = testo.replace(/\s+/g, " ").trim();
  if (!pulito) return [];
  return dividiInParole(pulito).map((grezze) => {
    // Gli indici devono corrispondere alla posizione nella lista
    const parole = grezze.map((p, i) => ({ ...p, i }));
    const gruppi = trovaGruppiVerbali(parole);
    const proposizioni = dividiInProposizioni(parole, gruppi);
    const semantica = analisiSemantica(parole, gruppi, proposizioni);
    const traduzioni = glosse(parole, gruppi, proposizioni, semantica.senso);
    return {
      testo: ricomponi(
        parole
          .map((p) => p.testo + p.dopo)
          .join(" ")
          .replace(/ ('|n't)/g, "$1")
          .replace(/\s+/g, " ")
          .trim(),
      ),
      parole,
      gruppi,
      grammaticale: analisiGrammaticale(
        parole,
        gruppi,
        proposizioni,
        traduzioni,
      ),
      proposizioni,
      semantica,
      glosse: traduzioni,
    };
  });
}

// La persona del verbo, dal soggetto della sua proposizione
function personaDi(
  parole: Parola[],
  g: GruppoVerbale,
  proposizioni: Proposizione[],
) {
  if (g.modo !== "finito") return undefined;
  const p = proposizioni.find((x) => x.gruppo === g);
  const s = p?.elementi.find((e) => e.ruolo === "soggetto");
  if (!s || s.da < 0) return g.persona;
  let testa = parole[s.a];
  // who, which, that: la persona è quella del nome a cui si riferiscono, e
  // lo si dice (knocks: 3ª singolare perché who sta per "the one")
  let perche = "";
  if (testa.dettaglio.startsWith("pronome relativo") && p?.antecedente) {
    const [da, a] = p.antecedente;
    const ant = unisci(
      parole,
      Array.from({ length: a - da + 1 }, (_, k) => da + k),
    );
    perche = ` (il soggetto è ${testa.testo}, che sta per «${ant}»)`;
    testa = parole[a];
  }
  const info = PRONOMI[testa.forma];
  if (info?.persona) {
    if (testa.forma === "you") return "2ª persona singolare o plurale";
    return `${info.persona}ª persona ${info.numero ?? ""}`.trim() + perche;
  }
  // Più soggetti uniti da and: plurale
  if (s.a > s.da && parole.slice(s.da, s.a + 1).some((w) => w.forma === "and"))
    return "3ª persona plurale";
  if (testa.categoria === "nome")
    return `3ª persona ${testa.tags.has("Plural") ? "plurale" : "singolare"}${perche}`;
  if (testa.categoria === "pronome" && /plurale/.test(testa.dettaglio))
    return `3ª persona plurale${perche}`;
  if (testa.categoria === "pronome" && /singolare/.test(testa.dettaglio))
    return `3ª persona singolare${perche}`;
  return g.persona;
}

function analisiGrammaticale(
  parole: Parola[],
  gruppi: GruppoVerbale[],
  proposizioni: Proposizione[],
  traduzioni: string[],
) {
  const voci: VoceGrammaticale[] = [];
  const gruppoDi = new Map<number, GruppoVerbale>();
  for (const g of gruppi) for (const i of g.parole) gruppoDi.set(i, g);
  const fatti = new Set<GruppoVerbale>();

  for (const p of parole) {
    const g = gruppoDi.get(p.i);
    if (g && p.categoria === "verbo") {
      if (fatti.has(g)) continue;
      fatti.add(g);
      // Tutte le parole verbali del gruppo in una sola voce
      const indici = g.parole.filter((k) => parole[k].categoria === "verbo");
      const persona = personaDi(parole, g, proposizioni);
      const ausiliari = indici
        .filter((k) => k !== g.principale && parole[k].base !== "to")
        .map((k) => parole[k].forma);
      const parti = [
        `voce del verbo to ${g.base}`,
        g.tempo,
        g.modo === "finito" || g.modo === "imperativo"
          ? `forma ${g.forma}${g.negativo ? ", negativa" : ""}${g.domanda ? ", interrogativa" : ""}`
          : g.forma === "passiva"
            ? "forma passiva"
            : "",
        persona ?? "",
        ausiliari.length ? `ausiliari: ${ausiliari.join(", ")}` : "",
        g.copula && g.base === "be" ? "qui fa da copula" : "",
      ].filter(Boolean);
      voci.push({
        indici,
        testo: indici.map((k) => mostra(parole[k])).join(" "),
        categoria: "verbo",
        dettaglio: parti.join("; "),
        traduzione: traduzioni[g.principale],
      });
      continue;
    }
    voci.push({
      indici: [p.i],
      testo: mostra(p),
      categoria: p.categoria,
      dettaglio: p.dettaglio,
      traduzione: traduzioni[p.i],
    });
  }
  return voci;
}
