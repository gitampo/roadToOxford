/**
 * Gli esercizi di analisi ("Analizza tu"): l'app analizza la frase con il
 * motore e ne ricava le domande; la risposta giusta è quella del motore.
 * - grammaticale: per ogni parola, la categoria (tra tutte le 10);
 * - logica: per ogni elemento, il ruolo (il giusto + 3 alternative
 *   plausibili: un complemento si confonde con altri complementi);
 * - semantica: domande a scelta su tipo di frase, tempi, periodo ipotetico
 *   e su chi compie l'azione.
 * Tutte le domande hanno la stessa forma, così si mostrano una alla volta.
 */

import type { AnalisiFrase } from "./index";
import type { Categoria } from "./parole";
import { unisci } from "./parole";

export type Domanda = {
  domanda: string;
  // Le parole a cui si riferisce, e dove stanno nella frase (per
  // evidenziarle)
  testo?: string;
  indici?: number[];
  opzioni: string[];
  giusta: number;
  spiegazione?: string;
};

// Le 10 categorie, nell'ordine in cui si mostrano come risposte
export const CATEGORIE_ESERCIZIO: Categoria[] = [
  "nome",
  "verbo",
  "aggettivo",
  "avverbio",
  "pronome",
  "articolo",
  "preposizione",
  "congiunzione",
  "numerale",
  "interiezione",
];

// I ruoli che non si chiedono: sono troppo incerti o non sono veri ruoli
const RUOLI_ESCLUSI = new Set([
  "congiunzione",
  "particella avverbiale",
  "avverbio",
  "gruppo nominale",
  "interiezione",
  "frase nominale",
  "ausiliare della coda",
  "pronome della coda",
]);

const NUCLEO = [
  "soggetto",
  "predicato verbale",
  "copula",
  "nome del predicato",
  "complemento oggetto",
  "complemento di termine",
];
const COMPLEMENTI = [
  "complemento di specificazione",
  "complemento d'agente",
  "complemento di stato in luogo",
  "complemento di moto a luogo",
  "complemento di tempo determinato",
  "complemento di tempo continuato",
  "complemento di compagnia",
  "complemento di mezzo",
  "complemento di modo",
  "complemento di argomento",
  "complemento predicativo del soggetto",
  "complemento di tempo (frequenza)",
  "complemento di causa efficiente",
  "complemento di materia",
  "complemento di fine",
  "complemento di causa",
];

const TEMPI = [
  "present simple",
  "present continuous",
  "present perfect",
  "present perfect continuous",
  "past simple",
  "past continuous",
  "past perfect",
  "past perfect continuous",
  "future simple (will)",
  "be going to",
  "conditional (would)",
  "imperativo",
];

const TIPI = [
  "dichiarativa affermativa",
  "dichiarativa negativa",
  "interrogativa totale (domanda sì/no)",
  "interrogativa parziale (domanda aperta)",
  "imperativa",
  "imperativa negativa",
  "esclamativa",
];

const IPOTETICI = [
  "zero conditional",
  "first conditional (primo tipo)",
  "second conditional (secondo tipo)",
  "third conditional (terzo tipo)",
  "condizionale misto (passato → presente)",
];

// Mescola una lista (Fisher-Yates)
function mescola<T>(lista: T[]) {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Una domanda a scelta: la giusta e fino a 3 sbagliate prese dalla lista
function scelta(
  domanda: string,
  giusta: string,
  alternative: string[],
  extra: Partial<Domanda> = {},
): Domanda {
  const sbagliate = mescola(alternative.filter((x) => x !== giusta)).slice(
    0,
    3,
  );
  const opzioni = mescola([giusta, ...sbagliate]);
  return { domanda, opzioni, giusta: opzioni.indexOf(giusta), ...extra };
}

const daA = (da: number, a: number) =>
  Array.from({ length: a - da + 1 }, (_, k) => da + k);

export function eserciziGrammaticali(a: AnalisiFrase): Domanda[] {
  return a.grammaticale.map((v) => ({
    domanda: "Che parte del discorso è?",
    testo: v.testo,
    indici: v.indici,
    opzioni: CATEGORIE_ESERCIZIO,
    giusta: CATEGORIE_ESERCIZIO.indexOf(v.categoria),
    spiegazione: v.dettaglio,
  }));
}

export function eserciziLogici(a: AnalisiFrase): Domanda[] {
  const domande: Domanda[] = [];
  for (const p of a.proposizioni) {
    for (const e of p.elementi) {
      if (e.da < 0 || RUOLI_ESCLUSI.has(e.ruolo)) continue;
      const indici = e.indici ?? daA(e.da, e.a);
      // Le alternative: per il nucleo, altri ruoli del nucleo e un
      // complemento; per un complemento, soprattutto altri complementi
      const alternative = NUCLEO.includes(e.ruolo)
        ? [...NUCLEO, "complemento di stato in luogo", "complemento di modo"]
        : [...COMPLEMENTI, "complemento oggetto", "soggetto"];
      domande.push(
        scelta(
          a.proposizioni.length > 1
            ? `Che ruolo ha nella ${p.tipo.replace(/:.*/, "")}?`
            : "Che ruolo ha?",
          e.ruolo,
          alternative,
          {
            testo: unisci(a.parole, indici),
            indici,
            spiegazione: [e.domanda, e.nota].filter(Boolean).join(" · "),
          },
        ),
      );
    }
  }
  return domande;
}

export function eserciziSemantici(a: AnalisiFrase): Domanda[] {
  const s = a.semantica;
  const domande: Domanda[] = [];
  const tipi = s.tipo.includes("tag")
    ? [...TIPI, "interrogativa con question tag"]
    : s.tipo.includes("esortativa")
      ? [...TIPI, "esortativa (let's)"]
      : TIPI;
  domande.push(
    scelta("Che tipo di frase è?", s.tipo, tipi, { spiegazione: s.tipoNota }),
  );

  for (const v of s.verbi.slice(0, 2)) {
    const base = v.tempo.replace(" (forma passiva)", "");
    const alternative = TEMPI.includes(base) ? TEMPI : [...TEMPI, base];
    domande.push(
      scelta(
        "Che tempo è?",
        v.tempo,
        // Al passivo anche le alternative sono passive (non l'imperativo);
        // la stessa forma attiva resta come trabocchetto
        alternative.map((t) =>
          v.tempo.includes("passiva") && t !== "imperativo" && t !== base
            ? `${t} (forma passiva)`
            : t,
        ),
        {
          testo: v.testo,
          indici: v.indici,
          spiegazione: `${v.italiano}: ${v.significato}`,
        },
      ),
    );
  }

  if (s.ipotetico)
    domande.push(
      scelta("Che periodo ipotetico è?", s.ipotetico.tipo, IPOTETICI, {
        spiegazione: s.ipotetico.spiegazione,
      }),
    );

  // Il senso: che cosa significa il verbo qui (take = volerci, non prendere)
  for (const o of s.senso
    .filter((x) => x.tipo === "significato" && x.breve && x.alternative?.length)
    .slice(0, 2)) {
    const verbo = o.titolo.replace(", qui", "");
    domande.push(
      scelta(
        `Che cosa significa «${verbo}» in questa frase?`,
        o.breve!,
        o.alternative!,
        {
          indici: o.indici,
          testo: verbo,
          spiegazione: o.testo,
        },
      ),
    );
  }

  // Il senso: a chi si riferisce il pronome relativo (who = the one)
  for (const o of s.senso
    .filter(
      (x) =>
        x.tipo === "riferimento" &&
        x.titolo.includes(" = ") &&
        !x.titolo.startsWith("it "),
    )
    .slice(0, 1)) {
    const [pronome, ...catena] = o.titolo.split(" = ");
    const altri = a.proposizioni
      .flatMap((p) => p.elementi)
      .filter(
        (e) =>
          e.da >= 0 &&
          ["soggetto", "complemento oggetto", "nome del predicato"].includes(
            e.ruolo,
          ),
      )
      .map((e) => unisci(a.parole, e.indici ?? daA(e.da, e.a)))
      // Niente alternative che siano la stessa persona (who = the one = I)
      .filter((t) => t && t !== pronome && !catena.includes(t));
    if (altri.length)
      domande.push(
        scelta(
          `A chi o a che cosa si riferisce «${pronome}»?`,
          catena[0],
          [...new Set(altri)],
          {
            indici: o.indici,
            testo: pronome,
            spiegazione: o.testo,
          },
        ),
      );
  }

  // Chi compie l'azione (o di chi si parla) nella principale
  const principale =
    a.proposizioni.find((p) => p.tipo === "principale") ?? a.proposizioni[0];
  const voce = s.ruoli.find((r) => r.proposizione === principale?.tipo)
    ?.voci[0];
  if (voce && voce.testo && principale) {
    const altri = principale.elementi
      // Con be il nome del predicato è la stessa cosa del soggetto (I am
      // the one): non può fare da alternativa sbagliata
      .filter(
        (e) =>
          e.da >= 0 &&
          ![
            "predicato verbale",
            "copula",
            "congiunzione",
            "nome del predicato",
          ].includes(e.ruolo),
      )
      .map((e) => unisci(a.parole, e.indici ?? daA(e.da, e.a)))
      .filter((t) => t && t !== voce.testo);
    if (altri.length >= 1)
      domande.push(
        scelta(`${voce.etichetta}?`, voce.testo, altri, {
          spiegazione:
            "Guarda il soggetto (o, al passivo, chi subisce l'azione).",
        }),
      );
  }
  return domande;
}
