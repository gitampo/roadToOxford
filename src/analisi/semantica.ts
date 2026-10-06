/**
 * L'analisi semantica: che cosa vuol dire la frase.
 * - il tipo di frase (dichiarativa, interrogativa, imperativa, esclamativa);
 * - il significato di ogni tempo verbale e dei modali;
 * - il periodo ipotetico (zero, first, second, third, misto);
 * - chi fa che cosa: i ruoli dei partecipanti (chi agisce, chi subisce...);
 * - le parole spia dei tempi (for, since, already, ago...);
 * - gli errori tipici degli italiani, con la correzione e la regola.
 */

import { Proposizione } from "./logica";
import { Parola, unisci } from "./parole";
import {
  analisiDelSenso,
  catenaRelativo,
  Osservazione,
  significatoInContesto,
} from "./senso";
import { GruppoVerbale } from "./verbi";

export type Errore = {
  testo: string;
  correzione: string;
  regola: string;
  lezione?: string;
};

export type Semantica = {
  // Il senso: costruzioni, espressioni, significato dei verbi qui,
  // riferimenti e concordanze (vedi senso.ts)
  senso: Osservazione[];
  tipo: string;
  // Spiegazione del tipo di frase
  tipoNota: string;
  lezioneTipo?: string;
  // Un paragrafo per ogni verbo: tempo e significato
  verbi: {
    testo: string;
    // Le parole del verbo nella frase
    indici: number[];
    tempo: string;
    italiano: string;
    significato: string;
    lezione?: string;
  }[];
  ipotetico?: { tipo: string; spiegazione: string; lezione: string };
  // Chi fa che cosa, proposizione per proposizione
  ruoli: {
    proposizione: string;
    voci: { etichetta: string; testo: string }[];
  }[];
  spie: { parola: string; spiegazione: string }[];
  errori: Errore[];
};

const testoDi = (parole: Parola[], da: number, a: number) =>
  unisci(
    parole,
    Array.from({ length: a - da + 1 }, (_, k) => da + k),
  );

// Le parole spia dei tempi verbali
const SPIE: Record<string, string> = {
  for: "for + durata (for three years): quanto dura → spesso present perfect (continuous)",
  since:
    "since + punto d'inizio (since 2020): da quando → present perfect (continuous)",
  already: "already (già): tipico del present perfect",
  yet: "yet (ancora / già, in domande e negazioni): tipico del present perfect",
  just: "just (appena): tipico del present perfect",
  ever: "ever (mai, nelle domande): esperienze → present perfect",
  never:
    "never (mai): esperienze → present perfect, o abitudini → present simple",
  ago: "ago (fa): un momento passato preciso → past simple",
  yesterday: "yesterday: passato concluso → past simple",
  last: "last week/year...: passato concluso → past simple",
  now: "now: in questo momento → present continuous",
  usually: "usually: abitudine → present simple",
  always:
    "always: abitudine → present simple (con il continuous: un'abitudine che irrita)",
  often: "often: frequenza → present simple",
  sometimes: "sometimes: frequenza → present simple",
  tomorrow: "tomorrow: futuro → will, going to o present continuous",
  next: "next week/year...: futuro → will, going to o present continuous",
  while: "while: due azioni contemporanee → spesso past continuous",
  when: "when: un momento preciso → spesso past simple (l'azione breve)",
  by: "by + momento futuro (by six): entro → future perfect",
};

const PRONOMI_3S = new Set(["he", "she", "it"]);

// La 3ª persona singolare del present simple: go → goes, study → studies
function terzaPersona(base: string) {
  if (/(s|sh|ch|x|z|o)$/.test(base)) return base + "es";
  if (/[^aeiou]y$/.test(base)) return base.slice(0, -1) + "ies";
  return base + "s";
}

export function analisiSemantica(
  parole: Parola[],
  gruppi: GruppoVerbale[],
  proposizioni: Proposizione[],
): Semantica {
  const principale =
    proposizioni.find((p) => p.tipo === "principale") ?? proposizioni[0];
  const gp = principale?.gruppo;
  const ultima = parole[parole.length - 1];
  const finale = ultima?.dopo ?? "";
  const primo = parole[0];

  // ---------- Tipo di frase ----------
  let tipo = "dichiarativa affermativa";
  let tipoNota = "afferma un fatto";
  let lezioneTipo: string | undefined;
  const negativaParole = parole.some((w) =>
    ["nobody", "nothing", "never", "no", "none", "neither", "nowhere"].includes(
      w.forma,
    ),
  );
  // Domanda con coda (It's late, isn't it?)
  const coda =
    gruppi.length > 1 &&
    gruppi[gruppi.length - 1].domanda &&
    finale.includes("?") &&
    parole[gruppi[gruppi.length - 1].parole[0] - 1]?.dopo.includes(",");
  if (coda) {
    tipo = "interrogativa con question tag";
    tipoNota =
      "afferma qualcosa e chiede conferma con la coda finale (vero? no?)";
    lezioneTipo = "lezione 40{2}";
  } else if (finale.includes("?") || gp?.domanda) {
    const aperta = primo && primo.dettaglio.includes("interrogativo");
    tipo = aperta
      ? "interrogativa parziale (domanda aperta)"
      : "interrogativa totale (domanda sì/no)";
    tipoNota = aperta
      ? `chiede un'informazione precisa: ${primo.forma} = la cosa che si vuole sapere`
      : "si risponde con yes o no: l'ausiliare va prima del soggetto";
    lezioneTipo = aperta ? "lezione 24{3}" : "lezione 10{5}";
  } else if (gp?.modo === "imperativo") {
    const neg = gp.negativo;
    tipo = gp.tempo.includes("let's")
      ? "esortativa (let's)"
      : neg
        ? "imperativa negativa"
        : "imperativa";
    tipoNota = gp.tempo.includes("let's")
      ? "propone di fare qualcosa insieme"
      : neg
        ? "vieta o sconsiglia (don't + verbo)"
        : "dà un ordine, un'istruzione o un invito";
    lezioneTipo = gp.tempo.includes("let's")
      ? "lezione 19{3}"
      : neg
        ? "lezione 19{2}"
        : "lezione 19{1}";
  } else if (
    finale.includes("!") &&
    primo &&
    ["what", "how"].includes(primo.forma)
  ) {
    tipo = "esclamativa";
    tipoNota = "esprime stupore o un'emozione forte";
  } else if (gp?.negativo || negativaParole) {
    tipo = "dichiarativa negativa";
    tipoNota = gp?.negativo
      ? "nega un fatto con not (o n't)"
      : "è negativa grazie a una parola negativa (never, nobody, nothing...): in inglese una sola negazione basta";
  }

  // ---------- I verbi ----------
  const verbi = gruppi
    .filter((g) => !(coda && g === gruppi[gruppi.length - 1]))
    .map((g) => {
      let significato = significatoInContesto(g, parole, proposizioni);
      if (g.note.includes("stato") && g.tempo.includes("continuous"))
        significato +=
          ". Attenzione: è un verbo di stato, di solito non va al continuous";
      if (g.modale && ["can", "could"].includes(g.modale) && g.domanda)
        significato =
          "una richiesta o una domanda di permesso (Can I...? Could you...?)";
      if (g.note.includes("born"))
        significato =
          'be born = nascere: in inglese è un passivo (letteralmente "essere partorito")';
      return {
        testo: unisci(parole, g.parole),
        indici: g.parole,
        tempo: g.tempo,
        italiano: g.italiano,
        significato,
        lezione: g.lezione,
      };
    });

  // ---------- Periodo ipotetico ----------
  let ipotetico: Semantica["ipotetico"];
  const se = proposizioni.find((p) => p.tipo.includes("ipotetica"));
  const reggente = proposizioni.find(
    (p) => !p.tipo.includes("ipotetica") && p.gruppo,
  );
  if (se?.gruppo && reggente?.gruppo) {
    const ts = se.gruppo.tempo;
    const tr = reggente.gruppo.tempo;
    const pastPerfectSe = ts.startsWith("past perfect");
    const pastSe =
      ts.startsWith("past simple") || ts.startsWith("past continuous");
    const presenteSe = ts.startsWith("present");
    if (pastPerfectSe && tr.includes("conditional perfect"))
      ipotetico = {
        tipo: "third conditional (terzo tipo)",
        spiegazione:
          "ipotesi irreale nel passato: non è successo, e non si può cambiare (se avessi..., avrei...)",
        lezione: "lezione 41{1}",
      };
    else if (pastPerfectSe && tr.startsWith("conditional"))
      ipotetico = {
        tipo: "condizionale misto (passato → presente)",
        spiegazione:
          "una condizione passata irreale con una conseguenza nel presente",
        lezione: "lezione 52{1}",
      };
    else if (pastSe && tr.includes("conditional perfect"))
      ipotetico = {
        tipo: "condizionale misto (presente → passato)",
        spiegazione:
          "una condizione irreale di sempre con una conseguenza nel passato",
        lezione: "lezione 52{1}",
      };
    else if (
      pastSe &&
      (tr.startsWith("conditional") ||
        (reggente.gruppo.modale &&
          ["could", "might"].includes(reggente.gruppo.modale)))
    )
      ipotetico = {
        tipo: "second conditional (secondo tipo)",
        spiegazione:
          "ipotesi irreale o improbabile nel presente o nel futuro (se avessi..., farei...)",
        lezione: "lezione 36{1}",
      };
    else if (
      presenteSe &&
      (tr.startsWith("future") ||
        reggente.gruppo.modale ||
        reggente.gruppo.modo === "imperativo")
    )
      ipotetico = {
        tipo: "first conditional (primo tipo)",
        spiegazione:
          "una condizione possibile e la sua conseguenza probabile nel futuro",
        lezione: "lezione 34{3}",
      };
    else if (presenteSe && tr.startsWith("present"))
      ipotetico = {
        tipo: "zero conditional",
        spiegazione:
          "una verità generale: ogni volta che succede una cosa, ne succede un'altra",
        lezione: "lezione 34{2}",
      };
  }

  // ---------- Chi fa che cosa ----------
  const senso = analisiDelSenso(parole, gruppi, proposizioni);
  // L'azione con il significato trovato nel contesto (to take = volerci)
  const azione = (base: string, p?: Proposizione) => {
    // Un phrasal verb: to turn off = spegnere
    const particella = p?.elementi.find(
      (e) =>
        e.ruolo === "particella avverbiale" && e.nota?.includes("phrasal verb"),
    );
    if (particella) {
      const pv = `${base} ${parole[particella.da].forma}`;
      const e = senso.find(
        (o) => o.tipo === "espressione" && o.titolo === pv && o.breve,
      );
      return e ? `to ${pv} = ${e.breve}` : `to ${pv}`;
    }
    const s = senso.find(
      (o) =>
        o.tipo === "significato" && o.titolo.startsWith(`${base},`) && o.breve,
    );
    return s ? `to ${base} = ${s.breve}` : `to ${base}`;
  };
  const ruoli: Semantica["ruoli"] = [];
  for (const p of proposizioni) {
    if (!p.gruppo || p.gruppo.coda) continue;
    const g = p.gruppo;
    const voci: { etichetta: string; testo: string }[] = [];
    ruoli.push({ proposizione: p.tipo, voci });
    const sogg = p.elementi.find((e) => e.ruolo === "soggetto");
    let sTesto = sogg
      ? sogg.da >= 0
        ? testoDi(parole, sogg.da, sogg.a)
        : (sogg.nota?.replace("sottinteso: ", "") ?? "")
      : "";
    // who, that: si dice chi è davvero (who = the one = I)
    if (sogg && sogg.da >= 0 && sogg.da === p.introdotta && p.antecedente)
      sTesto = [sTesto, ...catenaRelativo(parole, proposizioni, p)].join(" = ");
    // Una relativa libera prima del verbo fa da soggetto (Whoever wins...)
    if (sogg && sogg.da < 0) {
      const libera = proposizioni.find(
        (q) =>
          q.funzione?.startsWith("soggetto") &&
          q.funzione.includes(unisci(parole, g.parole)),
      );
      if (libera) sTesto = unisci(parole, libera.parole);
    }
    const there =
      parole[Math.min(...g.parole) - 1]?.forma === "there" && g.base === "be";
    if (there) {
      voci.push({ etichetta: "Che cosa c'è", testo: sTesto });
      voci.push({
        etichetta: "Azione",
        testo: "esserci (there is / there are)",
      });
    } else if (g.forma === "passiva") {
      const agente = p.elementi.find(
        (e) =>
          e.ruolo === "complemento d'agente" ||
          e.ruolo === "complemento di causa efficiente",
      );
      voci.push({ etichetta: `Chi subisce l'azione`, testo: sTesto });
      voci.push({ etichetta: `Azione`, testo: `${azione(g.base)} (passivo)` });
      voci.push({
        etichetta: `Chi la compie`,
        testo: agente
          ? testoDi(parole, agente.da + 1, agente.a)
          : "non detto (al passivo spesso non interessa)",
      });
    } else if (g.copula) {
      voci.push({ etichetta: `Di chi o di che cosa si parla`, testo: sTesto });
      const np = p.elementi.find(
        (e) =>
          e.ruolo === "nome del predicato" ||
          e.ruolo === "complemento predicativo del soggetto",
      );
      voci.push({
        etichetta: `Che cosa se ne dice`,
        testo: np ? testoDi(parole, np.da, np.a) : "",
      });
    } else {
      // it impersonale non è "chi agisce": non indica nessuno
      const impersonale = senso.some(
        (o) =>
          o.titolo === "it impersonale" && o.indici?.includes(sogg?.a ?? -1),
      );
      if (impersonale)
        voci.push({
          etichetta: `Soggetto`,
          testo: `${sTesto} (impersonale: non indica nessuno)`,
        });
      else if (sTesto) voci.push({ etichetta: `Chi agisce`, testo: sTesto });
      voci.push({ etichetta: `Azione`, testo: azione(g.base, p) });
      const ogg = p.elementi.find((e) => e.ruolo === "complemento oggetto");
      // L'oggetto può essere un'intera proposizione (whatever it takes)
      const libera = proposizioni.find(
        (q) =>
          q.funzione?.startsWith("complemento oggetto") &&
          q.funzione.includes(unisci(parole, g.parole)),
      );
      if (ogg)
        voci.push({
          etichetta: `Su chi o che cosa`,
          testo: testoDi(parole, ogg.da, ogg.a),
        });
      else if (libera)
        voci.push({
          etichetta: `Su chi o che cosa`,
          testo: `${unisci(parole, libera.parole)} (un'intera proposizione)`,
        });
    }
    const circostanze: [string, string][] = [
      ["complemento di termine", "A chi"],
      ["complemento di compagnia", "Con chi"],
      ["complemento di mezzo", "Con che mezzo"],
      ["complemento di modo", "Come"],
      ["complemento di stato in luogo", "Dove"],
      ["complemento di moto a luogo", "Verso dove"],
      ["complemento di moto da luogo", "Da dove"],
      ["complemento di tempo determinato", "Quando"],
      ["complemento di tempo continuato", "Per quanto tempo"],
      ["complemento di tempo (frequenza)", "Quante volte"],
      ["complemento di causa", "Perché"],
      ["complemento di fine", "A che scopo"],
    ];
    for (const [ruolo, etichetta] of circostanze)
      for (const e of p.elementi.filter((x) => x.ruolo === ruolo))
        voci.push({
          etichetta: `${etichetta}`,
          testo: testoDi(parole, e.da, e.a),
        });
  }

  // ---------- Parole spia ----------
  const spie: Semantica["spie"] = [];
  const viste = new Set<string>();
  for (const w of parole) {
    const s = SPIE[w.forma];
    if (s && !viste.has(w.forma)) {
      // for e by solo quando indicano tempo
      if (
        w.forma === "for" &&
        !parole[
          w.i + 1 + (parole[w.i + 1]?.categoria === "numerale" ? 1 : 0)
        ]?.classe?.includes("tempo") &&
        parole[w.i + 1]?.categoria !== "numerale"
      )
        continue;
      if (
        w.forma === "by" &&
        !gruppi.some((g) => g.tempo.includes("future perfect"))
      )
        continue;
      if (w.forma === "when" || w.forma === "while")
        if (!gruppi.some((g) => g.tempo.startsWith("past"))) continue;
      if (w.forma === "next" || w.forma === "last")
        if (parole[w.i + 1]?.classe !== "tempo") continue;
      spie.push({ parola: w.forma, spiegazione: s });
      viste.add(w.forma);
    }
  }

  return {
    senso,
    tipo,
    tipoNota,
    lezioneTipo,
    verbi,
    ipotetico,
    ruoli,
    spie,
    errori: trovaErrori(parole, gruppi, proposizioni),
  };
}

// ---------- Gli errori tipici ----------

// Le unità di durata: since three YEARS è sbagliato (for three years)
const DURATE = new Set([
  "second",
  "minute",
  "hour",
  "day",
  "week",
  "month",
  "year",
  "decade",
  "century",
]);

function trovaErrori(
  parole: Parola[],
  gruppi: GruppoVerbale[],
  proposizioni: Proposizione[],
): Errore[] {
  const errori: Errore[] = [];

  // I momenti passati precisi (yesterday, ago, last week, in 2019), ciascuno
  // con il gruppo verbale più vicino, quello a cui si riferisce: in "Have you
  // seen the book I bought yesterday?" yesterday va con bought
  const momenti = (gruppi.length ? parole : [])
    .map((w, i) => ({ w, i }))
    // (since last summer, since yesterday vanno bene col present perfect)
    .filter(
      ({ i }) =>
        parole[i - 1]?.forma !== "since" &&
        !(parole[i - 1]?.forma === "last" && parole[i - 2]?.forma === "since"),
    )
    .filter(
      ({ w, i }) =>
        w.forma === "yesterday" ||
        w.forma === "ago" ||
        (w.forma === "last" && parole[i + 1]?.classe === "tempo") ||
        (/^(1[0-9]|20)\d\d$/.test(w.forma) && parole[i - 1]?.forma === "in"),
    )
    .map(({ i }) => {
      // (last di "last week" a volte è preso per il verbo last, durare)
      const altri = gruppi.filter((g) => !g.parole.includes(i));
      const lontano = (g: GruppoVerbale) =>
        Math.min(...g.parole.map((k) => Math.abs(k - i)));
      return altri.length
        ? altri.reduce((a, b) => (lontano(b) < lontano(a) ? b : a))
        : undefined;
    });

  for (const g of gruppi) {
    const testo = unisci(parole, g.parole);
    // Present perfect con un momento passato preciso
    if (g.tempo.startsWith("present perfect") && momenti.includes(g))
      errori.push({
        testo,
        correzione: `past simple (to ${g.base} al passato)`,
        regola:
          "Con un momento passato preciso e concluso (yesterday, ago, last week, in 2019) non si usa il present perfect, ma il past simple.",
        lezione: "lezione 30{1}",
      });
    // did + forma del passato (did you went)
    const did = g.parole.find((k) => parole[k].forma === "did");
    const princ = parole[g.principale];
    if (
      did !== undefined &&
      princ &&
      princ.forma !== princ.base &&
      princ.tags.has("PastTense") &&
      princ.base !== "do"
    )
      errori.push({
        testo,
        correzione: testo.replace(princ.testo, princ.base),
        regola:
          "Dopo did il verbo va alla forma base: il passato lo porta già did.",
        lezione: "lezione 24{2}",
      });
    // Verbo di stato al continuous
    if (
      g.note.includes("stato") &&
      g.tempo.includes("continuous") &&
      !["think", "have", "see", "taste", "smell", "feel", "look"].includes(
        g.base,
      )
    )
      errori.push({
        testo,
        correzione: `forma simple (I ${g.base}...)`,
        regola: `${g.base} è un verbo di stato: di solito non si usa al continuous.`,
        lezione: "lezione 13{3}",
      });
  }

  // since + durata (since three years; ma since seven o'clock va bene)
  parole.forEach((w, i) => {
    if (
      w.forma === "since" &&
      parole[i + 1]?.categoria === "numerale" &&
      DURATE.has(parole[i + 2]?.base ?? "")
    )
      errori.push({
        testo: `since ${parole[i + 1].testo} ${parole[i + 2].testo}`,
        correzione: `for ${parole[i + 1].testo} ${parole[i + 2].testo}`,
        regola:
          "Con una durata si usa for; since vuole il momento d'inizio (since 2020, since Monday).",
        lezione: "lezione 31{2}",
      });
  });

  // L'età con have (I have 20 years)
  parole.forEach((w, i) => {
    if (
      w.base === "have" &&
      parole[i + 1]?.categoria === "numerale" &&
      ["years", "year"].includes(parole[i + 2]?.forma ?? "")
    )
      errori.push({
        testo: `${w.testo} ${parole[i + 1].testo} ${parole[i + 2].testo}`,
        correzione: `be + ${parole[i + 1].testo} (I'm ${parole[i + 1].testo})`,
        regola: "L'età si dice con to be, non con have: I'm 20 (years old).",
        lezione: "lezione 2{8}",
      });
  });

  // 3ª persona singolare senza -s (she go, he like)
  for (const p of proposizioni) {
    const g = p.gruppo;
    if (
      !g ||
      g.modo !== "finito" ||
      g.parole.length !== 1 ||
      !g.tempo.startsWith("present simple")
    )
      continue;
    const v = parole[g.principale];
    const sogg = p.elementi.find((e) => e.ruolo === "soggetto" && e.da >= 0);
    if (!sogg) continue;
    const testa = parole[sogg.a];
    const terza =
      PRONOMI_3S.has(testa.forma) ||
      (testa.categoria === "nome" &&
        !testa.tags.has("Plural") &&
        sogg.da === sogg.a - 1 &&
        parole[sogg.da].categoria === "articolo");
    if (
      terza &&
      v.forma === v.base &&
      !v.tags.has("PastTense") &&
      ![
        "be",
        "have",
        "can",
        "will",
        "must",
        "should",
        "may",
        "might",
        "could",
        "would",
      ].includes(v.base) &&
      !/s$/.test(v.forma)
    )
      errori.push({
        testo: `${testa.testo} ${v.testo}`,
        correzione: `${testa.testo} ${terzaPersona(v.base)}`,
        regola:
          "Al present simple, con he, she, it (e un nome singolare) il verbo prende la -s.",
        lezione: "lezione 10{3}",
      });
  }

  // would dopo if (If I would have studied...): nella frase con if niente
  // would, si usa il passato (o il past perfect)
  for (const p of proposizioni) {
    if (
      !p.tipo.includes("ipotetica") ||
      !p.gruppo ||
      p.gruppo.modale !== "would"
    )
      continue;
    const perfetto = p.gruppo.tempo.includes("perfect");
    errori.push({
      testo: unisci(parole, p.gruppo.parole),
      correzione: perfetto
        ? "if + past perfect (If I had studied...)"
        : "if + past simple (If I had more time...)",
      regola:
        "Dopo if non si usa would: il condizionale va solo nella frase principale.",
      lezione: perfetto ? "lezione 41{3}" : "lezione 34{4}",
    });
  }

  // Doppia negazione (I don't know nothing), dentro la stessa parte di
  // frase: in "Don't worry, I won't tell anyone" le negazioni sono due, ma
  // in due frasi diverse (separate dalla virgola o da and, but, so...)
  const parti: Parola[][] = [[]];
  for (const w of parole) {
    if (w.categoria === "congiunzione" && parti[parti.length - 1].length)
      parti.push([]);
    parti[parti.length - 1].push(w);
    if (/[,;:]/.test(w.dopo)) parti.push([]);
  }
  const negazioni =
    parti
      .map((parte) =>
        parte.filter(
          (w) =>
            w.forma === "not" ||
            ["nothing", "nobody", "never", "none", "nowhere"].includes(w.forma),
        ),
      )
      .find((n) => n.length >= 2 && n.some((w) => w.forma === "not")) ?? [];
  if (negazioni.length)
    errori.push({
      testo: negazioni.map((w) => w.testo || w.forma).join(" ... "),
      correzione: "una sola negazione (I don't know anything / I know nothing)",
      regola:
        "In inglese standard basta una negazione: con not si usano any-, anything, anybody, ever.",
      lezione: "lezione 18{3}",
    });

  return errori;
}
