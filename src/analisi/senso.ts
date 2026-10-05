/**
 * Il senso della frase: quello che l'analisi logica da sola non dice.
 * - Espressioni: phrasal verbs ed espressioni del vocabolario, modi di dire
 *   delle lezioni (whatever it takes, cut corners...);
 * - Costruzioni: strutture con un significato proprio (it takes = ci vuole,
 *   the one who = colui che, I am the one who... = frase identificativa,
 *   be about to = stare per...);
 * - Significato del verbo qui: tra i significati del vocabolario, quello i
 *   cui esempi somigliano di più alla frase (It takes an hour → volerci);
 * - Riferimenti: a chi o a che cosa si riferiscono who, one, it;
 * - Concordanze: perché il verbo è in quella persona (who knocks: 3ª
 *   persona, perché who sta per "the one");
 * - Tempi nel contesto: will come promessa, previsione o determinazione...
 *
 * Tutto a regole: le costruzioni sono scritte a mano, i significati vengono
 * dal vocabolario e dalle lezioni dell'app.
 */

import { LEZIONI } from "@/data/lezioni";
import { VOCABOLARIO } from "@/data/vocabolario";
import { Proposizione } from "./logica";
import { dividiInParole, Parola, PARTICIPI, unisci } from "./parole";
import { fineGruppoNominale, GruppoVerbale } from "./verbi";

export type Osservazione = {
  tipo:
    | "espressione"
    | "costruzione"
    | "significato"
    | "riferimento"
    | "concordanza";
  titolo: string;
  testo: string;
  lezione?: string;
  // Le parole a cui si riferisce
  indici?: number[];
  // Solo per i significati: la traduzione scelta, in breve ("volerci"), e
  // le altre traduzioni del verbo (per gli esercizi)
  breve?: string;
  alternative?: string[];
};

// I pronomi personali in italiano, e come si dice "sono io quello che..."
const IN_ITALIANO: Record<string, [string, string]> = {
  i: ["io", "sono io quello che..."],
  you: ["tu, voi", "sei tu quello che... / siete voi quelli che..."],
  he: ["lui", "è lui quello che..."],
  she: ["lei", "è lei quella che..."],
  we: ["noi", "siamo noi quelli che..."],
  they: ["loro", "sono loro quelli che..."],
  it: ["esso, questo", "è questo quello che..."],
};

const daA = (da: number, a: number) =>
  Array.from({ length: a - da + 1 }, (_, k) => da + k);
const testoDi = (parole: Parola[], da: number, a: number) =>
  unisci(parole, daA(da, a));

// La 3ª persona singolare del present simple: knock → knocks
function terzaPersona(base: string) {
  if (/(s|sh|ch|x|z|o)$/.test(base)) return base + "es";
  if (/[^aeiou]y$/.test(base)) return base.slice(0, -1) + "ies";
  return base + "s";
}

// Cerca una sequenza di parole (per forma; "~take" = qualsiasi forma di
// take). Restituisce l'indice della prima parola, o -1
function cerca(parole: Parola[], sequenza: string[], da = 0) {
  for (let i = da; i <= parole.length - sequenza.length; i++) {
    const ok = sequenza.every((s, j) => {
      const p = parole[i + j];
      return s.startsWith("~") ? p.base === s.slice(1) : p.forma === s;
    });
    if (ok) return i;
  }
  return -1;
}

// ---------- Espressioni del vocabolario e modi di dire ----------

type Schema = {
  parole: string[];
  significato: string;
  titolo: string;
  lezione?: string;
};

const POSSESSIVI_JOLLY = new Set([
  "my",
  "your",
  "his",
  "her",
  "its",
  "our",
  "their",
  "one's",
]);
const QUALCUNO = new Set(["someone", "somebody", "something", "sb", "sth"]);

// Gli schemi si preparano una volta sola
let schemi: Schema[] | undefined;
function preparaSchemi(): Schema[] {
  if (schemi) return schemi;
  const lista: Schema[] = [];
  const aggiungi = (
    testo: string,
    significato: string,
    titolo: string,
    lezione?: string,
  ) => {
    const alternative = testo.split(" / ");
    // "accendere / spegnere" per "turn on / turn off": a ogni alternativa
    // il suo significato, se si contano uguali
    const significati = significato.split(" / ");
    for (const [n, alternativa] of alternative.entries()) {
      const suo =
        significati.length === alternative.length
          ? significati[n]
          : significato;
      const pulito = alternativa
        .toLowerCase()
        .replace(/\(.*?\)/g, "")
        .replace(/[.!?,]/g, "")
        .replace(/\bi've\b/g, "i have")
        .replace(/\bi'm\b/g, "i am")
        .replace(/n't\b/g, " not")
        .replace(/'s\b/g, "")
        .trim();
      const pezzi = pulito.split(/\s+/).filter(Boolean);
      // Il titolo è l'alternativa trovata (turn off, non "turn on / turn off")
      if (pezzi.length >= 2)
        lista.push({
          parole: pezzi,
          significato: suo,
          titolo: lezione ? titolo : alternativa.trim(),
          lezione,
        });
    }
  };
  for (const v of VOCABOLARIO) {
    for (const e of [...(v.phrasalVerbs ?? []), ...(v.espressioni ?? [])]) {
      const traduzioni = [
        ...new Set(e.significati.flatMap((s) => s.traduzioni)),
      ]
        .slice(0, 3)
        .join(", ");
      aggiungi(e.testo, traduzioni, e.testo);
    }
  }
  // I modi di dire: il titolo del riquadro è l'espressione, la prima frase
  // del primo testo ne spiega il significato
  for (const l of LEZIONI.filter((x) => x.livello === "Modi di dire")) {
    (l.riquadri ?? []).forEach((r, k) => {
      if (
        ["PERCHÉ I MODI DI DIRE", "ESERCIZI", "IL TUO RISULTATO"].includes(
          r.titolo,
        )
      )
        return;
      const primo = r.blocchi.find((b) => b.tipo === "testo");
      const spiegazione =
        primo && "testo" in primo ? primo.testo.split(/(?<=\.)\s/)[0] : "";
      aggiungi(
        r.titolo,
        spiegazione,
        r.titolo.toLowerCase(),
        `lezione ${l.id}{${k + 1}}`,
      );
    });
  }
  schemi = lista;
  return lista;
}

// Vero se lo schema compare nella frase. Le parole dello schema valgono
// per qualsiasi forma (cut = cutting = cuts), "someone" vale per un gruppo
// nominale o un pronome, "your" per qualsiasi possessivo; tra il verbo e la
// particella possono stare fino a 3 parole (turn the light off)
function trovaSchema(parole: Parola[], schema: string[]): number[] | undefined {
  for (let i = 0; i < parole.length; i++) {
    const indici: number[] = [];
    let k = i;
    let ok = true;
    for (let s = 0; s < schema.length; s++) {
      const voce = schema[s];
      if (QUALCUNO.has(voce)) {
        const fine = fineGruppoNominale(parole, k);
        if (fine < 0) {
          ok = false;
          break;
        }
        k = fine + 1;
        continue;
      }
      // Qualsiasi forma vale solo per la prima parola, se è un verbo (cut
      // corners = cutting corners); le altre devono essere identiche
      // (I see non è "I seen")
      const uguale = (p: Parola | undefined) =>
        !!p &&
        (p.forma === voce ||
          (s === 0 && p.categoria === "verbo" && p.base === voce) ||
          (POSSESSIVI_JOLLY.has(voce) && POSSESSIVI_JOLLY.has(p.forma)));
      if (uguale(parole[k])) {
        indici.push(k);
        k++;
        continue;
      }
      // phrasal verb separabile: la particella può venire dopo l'oggetto
      if (s === 1 && schema.length === 2 && parole[i].categoria === "verbo") {
        const dopo = [k, k + 1, k + 2, k + 3].find((x) => uguale(parole[x]));
        if (dopo !== undefined) {
          indici.push(dopo);
          k = dopo + 1;
          continue;
        }
      }
      ok = false;
      break;
    }
    if (ok && indici.length) {
      // Il primo pezzo dev'essere davvero all'inizio dello schema
      if (indici[0] !== i) continue;
      return indici;
    }
  }
  return undefined;
}

function espressioni(parole: Parola[]): Osservazione[] {
  const trovate: Osservazione[] = [];
  const basi = new Set(parole.flatMap((p) => [p.forma, p.base]));
  for (const s of preparaSchemi()) {
    // Filtro veloce: tutte le parole "fisse" devono esserci
    if (
      !s.parole.every(
        (w) => QUALCUNO.has(w) || POSSESSIVI_JOLLY.has(w) || basi.has(w),
      )
    )
      continue;
    const indici = trovaSchema(parole, s.parole);
    if (!indici) continue;
    // Una sola osservazione per le stesse parole (la più lunga vince)
    if (
      trovate.some(
        (t) => t.indici && indici.every((x) => t.indici!.includes(x)),
      )
    )
      continue;
    trovate.push({
      tipo: "espressione",
      titolo: s.titolo,
      testo: s.lezione
        ? `Modo di dire: ${s.significato}`
        : `Significa: ${s.significato}.`,
      lezione: s.lezione,
      indici,
      breve: s.lezione ? undefined : s.significato,
    });
  }
  return trovate;
}

// ---------- Costruzioni ----------

function costruzioni(
  parole: Parola[],
  gruppi: GruppoVerbale[],
  proposizioni: Proposizione[],
): Osservazione[] {
  const o: Osservazione[] = [];
  const forme = parole.map((p) => p.forma);
  const ha = (f: string) => forme.includes(f);

  // whatever it takes
  const wit = cerca(parole, ["whatever", "it", "~take"]);
  if (wit >= 0)
    o.push({
      tipo: "espressione",
      titolo: "whatever it takes",
      testo:
        "Espressione fissa: «tutto ciò che serve», «costi quel che costi». Esprime determinazione: si è pronti a fare qualunque cosa sia necessaria per riuscire.",
      indici: [wit, wit + 1, wit + 2],
    });

  // Relativi indefiniti (whatever, whoever, what = ciò che)
  for (const p of proposizioni.filter(
    (x) =>
      x.tipo.startsWith("subordinata relativa libera") &&
      x.introdotta !== undefined,
  )) {
    const w = parole[p.introdotta!];
    const significato = w.dettaglio.match(/"([^"]*)"/)?.[1] ?? "";
    o.push({
      tipo: "costruzione",
      titolo: `${w.testo} + frase: una relativa libera`,
      testo: `${w.testo} = ${significato}. Introduce una proposizione senza un nome a cui riferirsi: è la proposizione intera («${unisci(parole, p.parole)}») che fa da ${p.funzione ?? "complemento"}.`,
      lezione: "lezione 44{6}",
      indici: p.parole,
    });
  }

  // it takes (+ tempo / cosa) = ci vuole
  const it = cerca(parole, ["it", "~take"]);
  if (it >= 0 && wit < 0)
    o.push({
      tipo: "costruzione",
      titolo: "it takes...",
      testo:
        "it + take = ci vuole, ci vogliono, serve (It takes an hour = ci vuole un'ora; it takes courage = ci vuole coraggio). It è impersonale.",
      indici: [it, it + 1],
    });

  // the one who / the ones that
  const one = parole.findIndex(
    (p, i) =>
      (p.forma === "one" || p.forma === "ones") &&
      p.categoria === "pronome" &&
      parole[i + 1]?.dettaglio.startsWith("pronome relativo"),
  );
  if (one >= 0)
    o.push({
      tipo: "costruzione",
      titolo: `the ${parole[one].forma} ${parole[one + 1].forma}`,
      testo: `= ${parole[one].forma === "one" ? "colui che, quello che, la persona che" : "coloro che, quelli che"}. One sostituisce un nome (the person, the thing) per non ripeterlo.`,
      indici: [one - 1, one, one + 1],
    });

  // Frase identificativa: I am the one who... / You're the only person who...
  for (const p of proposizioni) {
    const g = p.gruppo;
    if (!g || !g.copula || g.base !== "be") continue;
    const sogg = p.elementi.find((e) => e.ruolo === "soggetto" && e.da >= 0);
    const np = p.elementi.find((e) => e.ruolo === "nome del predicato");
    if (!sogg || !np) continue;
    const testaNP = parole[np.a];
    const relativa = proposizioni.find(
      (r) =>
        r.tipo.startsWith("subordinata relativa") &&
        r.antecedente &&
        r.antecedente[1] === np.a,
    );
    if (
      !relativa?.gruppo ||
      ![
        "one",
        "person",
        "man",
        "woman",
        "people",
        "ones",
        "first",
        "last",
        "only",
      ].includes(testaNP.forma)
    )
      continue;
    const chi = testoDi(parole, sogg.da, sogg.a);
    const rg = relativa.gruppo;
    const soggettoPersonale = parole[sogg.a].forma;
    // La frase "neutra", senza enfasi: I knock
    let neutra = "";
    if (rg.tempo.startsWith("present simple") && rg.parole.length === 1)
      neutra = `${chi} ${["he", "she", "it"].includes(soggettoPersonale) || parole[sogg.a].categoria === "nome" ? terzaPersona(rg.base) : rg.base}`;
    else if (rg.tempo.startsWith("past simple") && rg.parole.length === 1)
      neutra = `${chi} ${parole[rg.principale].testo}`;
    const resto = relativa.parole.filter(
      (k) => !rg.parole.includes(k) && k !== relativa.introdotta,
    );
    if (neutra && resto.length) neutra += " " + unisci(parole, resto);
    o.push({
      tipo: "costruzione",
      titolo: "Frase identificativa (con enfasi)",
      testo: `${chi} + be + ${testoDi(parole, np.da, np.a)} + ${parole[relativa.introdotta!].testo}...: mette in risalto CHI compie l'azione. Non dice solo che cosa succede, ma identifica la persona: proprio ${chi}${IN_ITALIANO[soggettoPersonale] ? ` (${IN_ITALIANO[soggettoPersonale][0]})` : ""}, e nessun altro. In italiano: «${IN_ITALIANO[soggettoPersonale]?.[1] ?? "è proprio lui quello che..."}».${neutra ? ` La frase neutra, senza enfasi, sarebbe: «${neutra}».` : ""}`,
      lezione: "lezione 53{5}",
      indici: [...daA(sogg.da, sogg.a), ...daA(np.da, np.a)],
    });
  }

  // Frase scissa: It is/was X who/that...
  if (
    forme[0] === "it" &&
    parole[1]?.base === "be" &&
    parole.slice(2).some((p) => p.dettaglio.startsWith("pronome relativo"))
  )
    o.push({
      tipo: "costruzione",
      titolo: "Frase scissa (It is... that/who)",
      testo:
        "It + be + X + who/that: la frase è «spezzata» in due per mettere in risalto X (It was John who called = è stato John a chiamare). Qui it è vuoto: serve solo a costruire la frase, non si riferisce a niente.",
      lezione: "lezione 53{5}",
      indici: [0, 1],
    });

  // Pseudo-scissa: What I need is...
  const primaRel = proposizioni.find(
    (p) =>
      p.tipo.startsWith("subordinata relativa libera") &&
      p.introdotta === 0 &&
      parole[0].forma === "what",
  );
  if (primaRel)
    o.push({
      tipo: "costruzione",
      titolo: "What... is: frase pseudo-scissa",
      testo:
        "What + frase + be + X = «ciò che... è X»: mette in risalto la parte dopo be (What I need is time = ciò di cui ho bisogno è tempo).",
      lezione: "lezione 53{5}",
      indici: primaRel.parole,
    });

  const semplici: [string[], string, string, string?][] = [
    [
      ["~be", "about", "to"],
      "be about to",
      "be about to + verbo = stare per (fare qualcosa): un'azione imminente.",
    ],
    [
      ["~be", "supposed", "to"],
      "be supposed to",
      "be supposed to + verbo = dovrebbe (secondo i piani, le regole o ciò che ci si aspetta).",
    ],
    [
      ["had", "better"],
      "had better",
      "had better + verbo = faresti/farebbe meglio a: un consiglio forte, quasi un avvertimento.",
      "lezione 32{4}",
    ],
    [
      ["would", "rather"],
      "would rather",
      "would rather + verbo = preferirei, preferiresti.",
    ],
    [
      ["~look", "forward", "to"],
      "look forward to",
      "look forward to + -ing/nome = non vedere l'ora di. Attenzione: to è una preposizione, quindi dopo va la forma in -ing.",
    ],
    [
      ["~get", "used", "to"],
      "get used to",
      "get used to + -ing/nome = abituarsi a (un cambiamento in corso).",
      "lezione 38{5}",
    ],
    [
      ["as", "long", "as"],
      "as long as",
      "as long as = purché, a condizione che (oppure: finché).",
    ],
    [["as", "soon", "as"], "as soon as", "as soon as = non appena."],
    [
      ["even", "if"],
      "even if",
      "even if = anche se (ipotesi: anche nel caso in cui).",
    ],
    [
      ["even", "though"],
      "even though",
      "even though = anche se, sebbene (un fatto reale).",
    ],
    [
      ["~can", "not", "help"],
      "can't help + -ing",
      "can't help + -ing = non riuscire a fare a meno di.",
    ],
    [
      ["it", "~be", "time"],
      "it's time...",
      "it's time to + verbo = è ora di; it's time + soggetto + passato (It's time you went) = sarebbe ora che.",
    ],
  ];
  for (const [seq, titolo, testo, lezione] of semplici) {
    const i = cerca(parole, seq);
    if (i >= 0)
      o.push({
        tipo: "costruzione",
        titolo,
        testo,
        lezione,
        indici: daA(i, i + seq.length - 1),
      });
  }

  // be used to (essere abituato), diverso da used to (abitudine passata)
  const bu = cerca(parole, ["~be", "used", "to"]);
  if (bu >= 0 && parole[bu].forma !== "used")
    o.push({
      tipo: "costruzione",
      titolo: "be used to",
      testo:
        "be used to + -ing/nome = essere abituato a. Non confonderlo con used to + verbo (abitudine passata: I used to smoke = fumavo).",
      lezione: "lezione 38{5}",
      indici: daA(bu, bu + 2),
    });

  // Causativi: have/get something done, make/let someone do
  for (const g of gruppi) {
    const fine = Math.max(...g.parole);
    const np = fineGruppoNominale(parole, fine + 1);
    if (np < 0) continue;
    const dopo = parole[np + 1];
    if (!dopo) continue;
    if (
      (g.base === "have" || g.base === "get") &&
      dopo.categoria === "verbo" &&
      (dopo.tags.has("PastTense") ||
        dopo.tags.has("Participle") ||
        PARTICIPI.has(dopo.forma) ||
        /ed$/.test(dopo.forma))
    )
      o.push({
        tipo: "costruzione",
        titolo: `${g.base} + qualcosa + participio (causativo)`,
        testo: `Far fare qualcosa a qualcun altro: ${unisci(parole, [...g.parole, ...daA(fine + 1, np + 1)])} = farsi fare / far ${dopo.base === "cut" ? "tagliare" : "fare"} da altri, non da soli (I had my hair cut = mi sono fatto tagliare i capelli).`,
        indici: [...g.parole, np + 1],
      });
    if (
      (g.base === "make" || g.base === "let") &&
      dopo.categoria === "verbo" &&
      !dopo.tags.has("PastTense") &&
      dopo.base !== "to"
    )
      o.push({
        tipo: "costruzione",
        titolo: `${g.base} + qualcuno + verbo`,
        testo:
          g.base === "make"
            ? "make + qualcuno + verbo (senza to) = costringere, far fare (She made me laugh = mi ha fatto ridere)."
            : "let + qualcuno + verbo (senza to) = lasciar fare, permettere (Let me go = lasciami andare).",
        indici: [...g.parole, np + 1],
      });
  }

  // too + aggettivo + to / aggettivo + enough + to
  const too = forme.findIndex(
    (f, i) => f === "too" && parole[i + 1]?.categoria === "aggettivo",
  );
  if (too >= 0)
    o.push({
      tipo: "costruzione",
      titolo: "too + aggettivo (+ to)",
      testo: `too = troppo: indica un eccesso che impedisce qualcosa («too ${parole[too + 1].testo} to...» = troppo ${parole[too + 1].testo} per...).`,
      indici: [too, too + 1],
    });
  const enough = forme.findIndex(
    (f, i) => f === "enough" && parole[i - 1]?.categoria === "aggettivo",
  );
  if (enough >= 0)
    o.push({
      tipo: "costruzione",
      titolo: "aggettivo + enough",
      testo:
        "enough va DOPO l'aggettivo (old enough = abbastanza grande): indica che il livello basta per qualcosa.",
      indici: [enough - 1, enough],
    });

  // so + aggettivo + that / such (a) ... that: conseguenza
  const so = forme.findIndex(
    (f, i) =>
      (f === "so" || f === "such") &&
      forme.slice(i + 1, i + 5).includes("that"),
  );
  if (so >= 0)
    o.push({
      tipo: "costruzione",
      titolo: `${forme[so]}... that: conseguenza`,
      testo: `${forme[so] === "so" ? "so + aggettivo" : "such (a) + nome"} + that = così... che: la seconda parte è la conseguenza (proposizione consecutiva).`,
      indici: [so],
    });

  // The more..., the more...
  if (
    forme[0] === "the" &&
    parole[1]?.dettaglio.includes("comparativ") &&
    forme
      .slice(2)
      .some(
        (f, k) =>
          f === "the" && parole[k + 3]?.dettaglio.includes("comparativ"),
      )
  )
    o.push({
      tipo: "costruzione",
      titolo: "the + comparativo..., the + comparativo",
      testo:
        "Più..., più...: le due cose crescono (o diminuiscono) insieme (The more you practise, the better you get).",
      indici: [0, 1],
    });

  // wish + passato: un desiderio irreale
  const wish = parole.findIndex(
    (p) => p.base === "wish" && p.categoria === "verbo",
  );
  if (wish >= 0) {
    const dopo = gruppi.find((g) => Math.min(...g.parole) > wish + 1);
    if (dopo && dopo.tempo.startsWith("past"))
      o.push({
        tipo: "costruzione",
        titolo: "wish + passato",
        testo: dopo.tempo.startsWith("past perfect")
          ? "wish + past perfect = un rimpianto sul passato: vorrei che fosse andata diversamente (I wish I had studied = magari avessi studiato)."
          : "wish + past simple = un desiderio irreale sul presente: vorrei che fosse diverso (I wish I were taller = vorrei essere più alto).",
        lezione: dopo.tempo.startsWith("past perfect")
          ? "lezione 41{5}"
          : "lezione 36{6}",
        indici: [wish],
      });
  }

  // It is said / believed / thought that: passivo impersonale
  const detto = cerca(parole, ["it", "~be"]);
  if (
    detto >= 0 &&
    ["said", "believed", "thought", "known", "reported", "expected"].includes(
      forme[detto + 2] ?? "",
    ) &&
    ha("that")
  )
    o.push({
      tipo: "costruzione",
      titolo: "It is said that...",
      testo:
        "Passivo impersonale: si dice che, si crede che. Riporta un'opinione diffusa senza dire di chi è.",
      lezione: "lezione 43{6}",
      indici: [detto, detto + 1, detto + 2],
    });

  // Do enfatico: I do like it (affermativa, non domanda, non imperativo)
  for (const g of gruppi) {
    const primo = parole[g.parole[0]];
    if (
      primo.base === "do" &&
      g.parole.length >= 2 &&
      !g.negativo &&
      !g.domanda &&
      g.modo === "finito" &&
      parole[g.principale].base !== "do"
    )
      o.push({
        tipo: "costruzione",
        titolo: "do enfatico",
        testo: `${primo.testo} davanti al verbo in una frase affermativa = enfasi: «davvero, proprio» (I do like it = mi piace davvero).`,
        lezione: "lezione 53{6}",
        indici: g.parole,
      });
  }

  // Inversione dopo un'espressione negativa: Never have I seen...
  if (
    ["never", "rarely", "seldom", "hardly", "little", "nowhere"].includes(
      forme[0],
    ) &&
    gruppi[0]?.domanda &&
    !parole[parole.length - 1].dopo.includes("?")
  )
    o.push({
      tipo: "costruzione",
      titolo: `Inversione dopo ${parole[0].testo}`,
      testo:
        "Un'espressione negativa all'inizio vuole l'ordine della domanda (ausiliare prima del soggetto): è un modo formale ed enfatico.",
      lezione: "lezione 53{2}",
      indici: [0],
    });

  return o;
}

// ---------- Il significato del verbo qui ----------

type Contesto = {
  sogg?: string;
  prep?: string;
  testa?: string;
  classe?: string;
  dopoCat?: string;
  infinito: boolean;
};

function contesto(parole: Parola[], i: number): Contesto {
  let k = i - 1;
  while (
    k >= 0 &&
    (parole[k].categoria === "verbo" || parole[k].categoria === "avverbio")
  )
    k--;
  let j = i + 1;
  while (
    j < parole.length &&
    (parole[j].categoria === "avverbio" || parole[j].forma === "not")
  )
    j++;
  const dopo = parole[j];
  const prep = dopo?.categoria === "preposizione" ? dopo.forma : undefined;
  const fine = fineGruppoNominale(parole, prep ? j + 1 : j);
  const testa = fine >= 0 ? parole[fine] : undefined;
  return {
    sogg: parole[k]?.forma,
    prep,
    testa: testa?.base,
    classe: testa?.classe,
    dopoCat: dopo?.categoria,
    infinito: parole
      .slice(j, j + 6)
      .some((q) => q.base === "to" && q.categoria === "verbo"),
  };
}

function punteggio(a: Contesto, b: Contesto) {
  let s = 0;
  if (a.sogg && a.sogg === b.sogg)
    s += ["it", "there"].includes(a.sogg) ? 4 : 0.5;
  if (a.prep && a.prep === b.prep) s += 3;
  if (a.testa && a.testa === b.testa) s += 3;
  // La classe (tempo, luogo, persona) conta solo se la parola è diversa
  if (a.classe && a.classe === b.classe && a.testa !== b.testa) s += 2;
  if (a.dopoCat && a.dopoCat === b.dopoCat) s += 0.5;
  if (a.infinito && b.infinito) s += 1;
  return s;
}

const esempiAnalizzati = new Map<string, Parola[] | null>();
function paroleEsempio(en: string) {
  if (!esempiAnalizzati.has(en))
    esempiAnalizzati.set(en, dividiInParole(en)[0] ?? null);
  return esempiAnalizzati.get(en);
}

function significatoVerbi(
  parole: Parola[],
  gruppi: GruppoVerbale[],
  giaSpiegati: Set<number>,
): Osservazione[] {
  const incerti: string[] = [];
  const o: Osservazione[] = [];
  const visti = new Set<string>();
  for (const g of gruppi) {
    if (g.coda || visti.has(g.base) || g.note.includes("have got")) continue;
    // Un verbo che fa parte di un'espressione già spiegata (go out,
    // whatever it takes) non ha bisogno del suo significato da solo
    if (giaSpiegati.has(g.principale)) continue;
    // be, have e do come ausiliari o copula non hanno bisogno di spiegazioni
    if (g.copula || (g.base === "be" && !parole[g.principale])) continue;
    const voce = VOCABOLARIO.find((v) => v.parola === g.base);
    const uso = voce?.usi.find((u) => u.categoria === "verbo");
    if (!voce || !uso || uso.significati.length === 0) continue;
    visti.add(g.base);
    const qui = contesto(parole, g.principale);
    let migliore = uso.significati[0];
    let massimo = 0;
    let esempio: { en: string; it?: string } | undefined;
    for (const sig of uso.significati) {
      let s = 0;
      if (sig.indicazione?.includes("tempo") && qui.classe === "tempo") s += 2;
      if (sig.indicazione?.match(/person|qualcuno/) && qui.classe === "persona")
        s += 1;
      if (sig.indicazione?.includes("luogo") && qui.classe === "luogo") s += 1;
      let migliorEsempio: typeof esempio;
      let massimoEsempio = 0;
      for (const ex of sig.esempi ?? []) {
        const pe = paroleEsempio(ex.en);
        const iv =
          pe?.findIndex((p) => p.base === g.base && p.categoria === "verbo") ??
          -1;
        if (!pe || iv < 0) continue;
        const sc = punteggio(qui, contesto(pe, iv));
        if (sc > massimoEsempio) {
          massimoEsempio = sc;
          migliorEsempio = ex;
        }
      }
      s += massimoEsempio;
      if (s > massimo) {
        massimo = s;
        migliore = sig;
        esempio = migliorEsempio;
      }
    }
    const traduzioni = migliore.traduzioni.join(", ");
    const altre = [...new Set(uso.significati.flatMap((s) => s.traduzioni))]
      .filter((t) => !migliore.traduzioni.includes(t))
      .slice(0, 4);
    // I verbi "tuttofare" (have, do, get, make) cambiano senso con ogni
    // nome: per essere sicuri serve un indizio più forte
    const soglia = ["have", "do", "get", "make", "be"].includes(g.base) ? 4 : 2;
    const certo = massimo >= soglia || uso.significati.length === 1;
    if (certo)
      o.push({
        tipo: "significato",
        titolo: `${g.base}, qui`,
        testo: `= ${traduzioni}${migliore.indicazione ? ` (${migliore.indicazione})` : ""}.${esempio ? ` Come in «${esempio.en}»${esempio.it ? ` = ${esempio.it}` : ""}` : ""}`,
        breve: migliore.traduzioni[0],
        alternative: altre,
        indici: g.parole,
      });
    else
      incerti.push(
        `${g.base} (${[...migliore.traduzioni, ...altre].slice(0, 3).join(", ")}...)`,
      );
  }
  // I verbi su cui il contesto non basta: una riga sola, senza rumore
  if (incerti.length)
    o.push({
      tipo: "significato",
      titolo: "Altri verbi",
      testo: `${incerti.join("; ")}: hanno più significati e qui il contesto non basta a sceglierne uno con sicurezza. Guarda la voce nel Vocabolario.`,
    });
  return o;
}

// ---------- Riferimenti e concordanze ----------

// A chi o a che cosa si riferisce un pronome relativo: la catena fino al
// nome vero (who → the one → I)
export function catenaRelativo(
  parole: Parola[],
  proposizioni: Proposizione[],
  p: Proposizione,
): string[] {
  if (!p.antecedente) return [];
  const [da, a] = p.antecedente;
  const catena = [testoDi(parole, da, a)];
  // Se l'antecedente è il nome del predicato di be (I am THE ONE who),
  // è la stessa persona del soggetto
  for (const q of proposizioni) {
    if (!q.gruppo?.copula) continue;
    const np = q.elementi.find((e) => e.ruolo === "nome del predicato");
    const s = q.elementi.find((e) => e.ruolo === "soggetto" && e.da >= 0);
    if (np && s && np.a === a && parole[s.a].forma !== "it")
      catena.push(testoDi(parole, s.da, s.a));
  }
  return catena;
}

const IMPERSONALI = new Set([
  "take",
  "rain",
  "snow",
  "seem",
  "appear",
  "matter",
  "happen",
  "depend",
  "look",
]);

function riferimentiEConcordanze(
  parole: Parola[],
  gruppi: GruppoVerbale[],
  proposizioni: Proposizione[],
): Osservazione[] {
  const o: Osservazione[] = [];

  for (const p of proposizioni) {
    const g = p.gruppo;
    const sogg = p.elementi.find((e) => e.ruolo === "soggetto" && e.da >= 0);

    // Relative: a chi si riferisce il pronome, e perché il verbo è in
    // quella persona
    if (
      p.tipo.startsWith("subordinata relativa") &&
      p.introdotta !== undefined &&
      p.antecedente
    ) {
      const rel = parole[p.introdotta];
      const catena = catenaRelativo(parole, proposizioni, p);
      o.push({
        tipo: "riferimento",
        titolo: `${rel.testo} = ${catena.join(" = ")}`,
        testo:
          catena.length > 1
            ? `${rel.testo} sta per «${catena[0]}», che a sua volta è ${catena[1]} (be li identifica): parlano tutti della stessa persona.`
            : `${rel.testo} sta per «${catena[0]}»: la relativa dice qualcosa di più su ${catena[0]}.`,
        indici: [p.introdotta, ...daA(p.antecedente[0], p.antecedente[1])],
      });
      if (g && g.modo === "finito" && sogg && sogg.da === p.introdotta) {
        const v = parole[g.principale];
        const terza =
          g.tempo.startsWith("present simple") &&
          /s$/.test(v.forma) &&
          v.base !== "be";
        const testa = parole[p.antecedente[1]];
        const plurale = testa.tags.has("Plural") || testa.forma === "ones";
        if (
          terza ||
          ["is", "was", "has", "does"].includes(parole[g.parole[0]].forma)
        ) {
          const diverso =
            catena.length > 1 &&
            ["i", "you", "we"].includes(
              catena[catena.length - 1].toLowerCase(),
            );
          o.push({
            tipo: "concordanza",
            titolo: `${unisci(parole, g.parole)}: 3ª persona ${plurale ? "plurale" : "singolare"}`,
            testo: `Il soggetto di ${unisci(parole, g.parole)} è ${rel.testo}, che sta per «${catena[0]}»: ${plurale ? "plurale" : "3ª persona singolare"}${terza ? `, per questo ${v.testo} ha la -s` : ""}.${diverso ? ` Non concorda con ${catena[catena.length - 1]}: il verbo va d'accordo con «${catena[0]}». Succede anche in italiano: in «sono io quello che paga» il verbo paga va con «quello», non con «io» (anche se «sono io che pago» è possibile).` : ""}`,
            lezione: "lezione 10{3}",
            indici: [...g.parole, p.introdotta],
          });
        }
      }
    }

    if (!g || !sogg) continue;
    const testa = parole[sogg.a];

    // it impersonale: non si riferisce a niente
    if (
      testa.forma === "it" &&
      (IMPERSONALI.has(g.base) ||
        (g.base === "be" &&
          (parole[Math.max(...g.parole) + 1]?.classe === "tempo" ||
            [
              "late",
              "early",
              "cold",
              "hot",
              "warm",
              "sunny",
              "windy",
              "raining",
              "time",
              "important",
              "difficult",
              "easy",
              "possible",
              "impossible",
              "necessary",
            ].includes(parole[Math.max(...g.parole) + 1]?.forma ?? ""))))
    ) {
      o.push({
        tipo: "riferimento",
        titolo: "it impersonale",
        testo: `Qui it non si riferisce a niente di preciso: è il soggetto «vuoto» che l'inglese vuole sempre (it rains = piove, it takes = ci vuole, it's late = è tardi). In italiano il soggetto non si dice.`,
        indici: [sogg.a],
      });
    }

    // there is / there are: il verbo concorda con ciò che viene dopo
    if (
      parole[Math.min(...g.parole) - 1]?.forma === "there" &&
      g.base === "be"
    ) {
      const plurale = testa.tags.has("Plural");
      o.push({
        tipo: "concordanza",
        titolo: `there ${parole[g.parole[0]].testo}: ${plurale ? "plurale" : "singolare"}`,
        testo: `Il verbo concorda con il vero soggetto, che viene dopo: «${testoDi(parole, sogg.da, sogg.a)}» è ${plurale ? "plurale, quindi are/were" : "singolare, quindi is/was"}.`,
        lezione: "lezione 7{1}",
        indici: [...g.parole, ...daA(sogg.da, sogg.a)],
      });
    }

    // everyone, nobody, something...: singolare anche se parlano di tanti
    if (
      [
        "everyone",
        "everybody",
        "nobody",
        "no one",
        "someone",
        "somebody",
        "anyone",
        "anybody",
        "everything",
        "nothing",
      ].includes(testa.forma) &&
      g.modo === "finito"
    )
      o.push({
        tipo: "concordanza",
        titolo: `${testa.testo} + verbo al singolare`,
        testo: `${testa.testo} è grammaticalmente singolare anche se l'idea è di tante persone o cose: il verbo va alla 3ª persona singolare (everyone knows, nobody was there).`,
        indici: [sogg.a, ...g.parole],
      });

    // people, police, children: plurali
    if (
      ["people", "police", "children", "men", "women"].includes(testa.forma) &&
      g.modo === "finito"
    )
      o.push({
        tipo: "concordanza",
        titolo: `${testa.testo} + verbo al plurale`,
        testo: `${testa.testo} è plurale in inglese${testa.forma === "people" ? " (people = le persone, la gente)" : testa.forma === "police" ? " (the police are...)" : ""}: il verbo va al plurale.`,
        indici: [sogg.a, ...g.parole],
      });
  }

  // one pronome: sostituisce un nome
  return o;
}

// ---------- Il tempo nel contesto ----------

// Il significato di un tempo in QUESTA frase, scegliendo tra quelli
// possibili in base agli indizi (soggetto, avverbi, tipo di proposizione)
export function significatoInContesto(
  g: GruppoVerbale,
  parole: Parola[],
  proposizioni: Proposizione[],
): string {
  const p = proposizioni.find((x) => x.gruppo === g);
  const sogg = p?.elementi.find((e) => e.ruolo === "soggetto" && e.da >= 0);
  const chi = sogg ? parole[sogg.a].forma : undefined;
  const forme = parole.map((w) => w.forma);
  const tempoFuturo = forme.some((f) =>
    ["tomorrow", "next", "soon", "later", "tonight"].includes(f),
  );
  const frequenza = forme.some((f) =>
    [
      "always",
      "usually",
      "often",
      "sometimes",
      "never",
      "rarely",
      "every",
    ].includes(f),
  );

  if (g.modale === "will" && g.tempo.startsWith("future simple")) {
    if (g.domanda)
      return chi === "you"
        ? "una richiesta o un invito (Will you...? = mi faresti...?)"
        : "una domanda sul futuro";
    if (chi === "i" || chi === "we")
      return tempoFuturo
        ? "un'azione futura decisa ora, o una promessa"
        : "una decisione presa in questo momento, o una promessa (lo farò)";
    if (chi === "you" && !tempoFuturo)
      return "una previsione sicura, quasi una certezza o una determinazione: «farai...», detto con convinzione";
    return tempoFuturo ? "un fatto previsto nel futuro" : "una previsione";
  }
  if (g.tempo.startsWith("present simple") && g.modo === "finito") {
    if (g.copula || g.base === "be" || g.note.includes("stato"))
      return "uno stato: com'è, chi è, che cosa pensa o prova qualcuno (non un'azione in corso)";
    if (frequenza) return "un'abitudine: un'azione che si ripete";
    if (p?.tipo.startsWith("subordinata relativa") && p.antecedente)
      return `una caratteristica: ciò che «${testoDi(parole, p.antecedente[0], p.antecedente[1])}» fa di solito, quello che la identifica`;
    if (p?.tipo.includes("ipotetica") || p?.tipo.includes("temporale"))
      return "una condizione (dopo if/when il futuro si esprime con il presente)";
    if (chi === "it" && g.base === "take")
      return "un fatto generale: ciò che serve, sempre";
    return "un fatto generale o abituale (non un'azione in corso adesso)";
  }
  return g.significato;
}

export function analisiDelSenso(
  parole: Parola[],
  gruppi: GruppoVerbale[],
  proposizioni: Proposizione[],
): Osservazione[] {
  const dalVocabolario = espressioni(parole);
  const prime = [
    ...costruzioni(parole, gruppi, proposizioni),
    ...dalVocabolario,
  ];
  // Le parole dei phrasal verbs e dei modi di dire: lì l'espressione
  // sostituisce il significato del verbo (go out = uscire). Le costruzioni
  // no: in "whatever it takes" serve sapere che take = volerci
  const giaSpiegati = new Set(dalVocabolario.flatMap((o) => o.indici ?? []));
  const tutte = [
    ...prime,
    ...riferimentiEConcordanze(parole, gruppi, proposizioni),
    ...significatoVerbi(parole, gruppi, giaSpiegati),
  ];
  // Niente doppioni (whatever it takes compare sia come costruzione sia
  // come espressione del vocabolario)
  const viste = new Set<string>();
  return tutte.filter((o) => {
    const chiave = o.titolo.toLowerCase();
    if (viste.has(chiave)) return false;
    viste.add(chiave);
    return true;
  });
}
