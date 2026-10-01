import { Lezione } from "@/types/lezione";

export const adverbsFrequency: Lezione = {
  id: "11",
  titolo: "Avverbi di frequenza",
  descrizione: "Dire quanto spesso fai qualcosa",
  chiavi: "always, never, avverbi di frequenza",
  livello: "[A1]",
  citazione: {
    testo: "Always look on the bright side of life.",
    fonte: "Monty Python, Brian di Nazareth",
    traduzione: "Guarda sempre il lato positivo della vita.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "QUANTO SPESSO?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Gli avverbi di frequenza dicono quanto spesso fai qualcosa. Si usano soprattutto con il present simple.",
        },
        {
          tipo: "tabella",
          righe: [
            ["always", "sempre (100%)"],
            ["usually", "di solito"],
            ["often", "spesso"],
            ["sometimes", "a volte"],
            ["rarely / seldom", "raramente"],
            ["never", "mai (0%)"],
          ],
        },
      ],
    },
    {
      titolo: "DOVE SI METTONO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Vanno prima del verbo principale, cioè tra il soggetto e il verbo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I always drink tea.", it: "Bevo sempre il tè." },
            { en: "She often goes to the cinema.", it: "Va spesso al cinema." },
            { en: "I drink always tea.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In italiano l'avverbio va dopo il verbo (bevo sempre), in inglese prima (I always drink).",
        },
      ],
    },
    {
      titolo: "CON TO BE È IL CONTRARIO",
      blocchi: [
        {
          tipo: "testo",
          testo: "Con to be, l'avverbio va dopo il verbo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm always late.", it: "Sono sempre in ritardo." },
            { en: "He's never at home.", it: "Non è mai a casa." },
            { en: "I always am late.", sbagliato: true },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Lo stesso vale con gli ausiliari: l'avverbio va dopo don't, can, have.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I don't usually eat meat.", it: "Di solito non mangio carne." },
            { en: "I can never remember his name.", it: "Non riesco mai a ricordare il suo nome." },
          ],
        },
      ],
    },
    {
      titolo: "NEVER È GIÀ NEGATIVO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano diciamo \"non vado mai\", con due negazioni. In inglese ne basta una: never è già negativo.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I don't never go.", sbagliato: true },
            { en: "I never go.", it: "Non ci vado mai." },
            { en: "I don't ever go.", it: "Non ci vado mai (più enfatico)." },
          ],
        },
      ],
    },
    {
      titolo: "LE DOMANDE CON HOW OFTEN",
      blocchi: [
        {
          tipo: "testo",
          testo: "Per chiedere la frequenza si usa How often…?",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "How often do you go to the gym?", it: "Quanto spesso vai in palestra?" },
            { en: "Do you ever eat fish?", it: "Mangi mai il pesce?" },
          ],
        },
        {
          tipo: "testo",
          testo: "Per rispondere con precisione:",
        },
        {
          tipo: "tabella",
          righe: [
            ["once a week", "una volta alla settimana"],
            ["twice a month", "due volte al mese"],
            ["three times a year", "tre volte all'anno"],
            ["every day", "ogni giorno"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Queste espressioni vanno alla fine della frase: \"I go swimming twice a week\".",
        },
      ],
    },
    {
      titolo: "SOMETIMES E USUALLY",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Sometimes e usually possono andare anche all'inizio della frase, per dare enfasi:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Sometimes I walk to school.", it: "A volte vado a scuola a piedi." },
            { en: "Usually we have pasta on Sundays.", it: "Di solito la domenica mangiamo la pasta." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Always e never all'inizio della frase no: si mettono sempre prima del verbo.",
        },
      ],
    },
  ],
};
