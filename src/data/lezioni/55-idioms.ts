import { Lezione } from "@/types/lezione";

export const idioms: Lezione = {
  id: "55",
  titolo: "Espressioni idiomatiche e collocazioni",
  descrizione: "Parlare come un madrelingua",
  chiavi: "espressioni idiomatiche",
  livello: "[B2-C1]",
  citazione: {
    testo: "It's raining cats and dogs.",
    fonte: "Espressione inglese",
    traduzione: "Piove a catinelle. (Letteralmente: piovono cani e gatti.)",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "LE COLLOCAZIONI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le collocazioni sono parole che \"vanno insieme\" per abitudine. Non c'è una regola: un madrelingua sente semplicemente che una combinazione suona giusta e un'altra no.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "strong coffee", it: "caffè forte" },
            { en: "powerful coffee", sbagliato: true },
            { en: "heavy rain", it: "pioggia forte" },
            { en: "strong rain", sbagliato: true },
            { en: "a big mistake / a serious mistake", it: "un grave errore" },
          ],
        },
      ],
    },
    {
      titolo: "VERBI E NOMI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["pay attention", "fare attenzione"],
            ["take a risk", "correre un rischio"],
            ["keep a secret", "mantenere un segreto"],
            ["catch a cold", "prendere il raffreddore"],
            ["break a promise", "non mantenere una promessa"],
            ["save time", "risparmiare tempo"],
            ["waste time", "perdere tempo"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Don't lose time!", sbagliato: true },
            { en: "Don't waste time!", it: "Non perdere tempo!" },
          ],
        },
      ],
    },
    {
      titolo: "GLI IDIOMI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Gli idiomi sono espressioni il cui significato non si ricava dalle singole parole:",
        },
        {
          tipo: "tabella",
          righe: [
            ["a piece of cake", "facilissimo"],
            ["break the ice", "rompere il ghiaccio"],
            ["hit the books", "mettersi a studiare"],
            ["under the weather", "un po' giù di salute"],
            ["once in a blue moon", "una volta ogni morte di papa"],
            ["cost an arm and a leg", "costare un occhio della testa"],
          ],
        },
      ],
    },
    {
      titolo: "COME IN ITALIANO, MA DIVERSI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Molti idiomi hanno un equivalente italiano con immagini diverse:",
        },
        {
          tipo: "tabella",
          righe: [
            ["kill two birds with one stone", "prendere due piccioni con una fava"],
            ["when pigs fly", "quando gli asini voleranno"],
            ["the last straw", "la goccia che fa traboccare il vaso"],
            ["let the cat out of the bag", "lasciarsi scappare un segreto"],
            ["speak of the devil", "si parla del diavolo…"],
          ],
        },
      ],
    },
    {
      titolo: "MOLTO BRITANNICI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["It's not my cup of tea.", "Non fa per me."],
            ["Bob's your uncle!", "Ed è fatta!"],
            ["I'm knackered.", "Sono distrutto (informale)."],
            ["Mind your own business.", "Fatti gli affari tuoi."],
            ["Fancy a cuppa?", "Ti va una tazza di tè?"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Gli idiomi vanno usati con misura: troppi, da un non madrelingua, suonano forzati. È più importante capirli che usarli.",
        },
      ],
    },
    {
      titolo: "BREAK A LEG!",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alcuni idiomi sono auguri o formule fisse, e tradurli alla lettera crea equivoci:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Break a leg!", it: "In bocca al lupo! (prima di uno spettacolo)" },
            { en: "Fingers crossed!", it: "Incrociamo le dita!" },
            { en: "Better late than never.", it: "Meglio tardi che mai." },
          ],
        },
      ],
    },
  ],
};
