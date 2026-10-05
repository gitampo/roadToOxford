import { Lezione } from "@/types/lezione";

export const reportedSpeech: Lezione = {
  id: "42",
  titolo: "Il discorso indiretto",
  descrizione: "Riferire cosa ha detto qualcuno; say vs tell",
  chiavi: "discorso indiretto",
  livello: "B1",
  citazione: {
    testo: "Mama always said life was like a box of chocolates.",
    fonte: "Forrest Gump",
    traduzione: "La mamma diceva sempre che la vita era come una scatola di cioccolatini.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "DIRETTO E INDIRETTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il discorso indiretto riferisce le parole di qualcuno senza citarle. Quando il verbo introduttivo è al passato (said, told), i tempi fanno un passo indietro:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "\"I'm tired.\"", it: "\"Sono stanco.\"" },
            { en: "He said he was tired.", it: "Ha detto che era stanco." },
          ],
        },
      ],
    },
    {
      titolo: "UN PASSO INDIETRO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["present simple → past simple", "\"I like it\" → she said she liked it"],
            ["present continuous → past continuous", "\"I'm working\" → he said he was working"],
            ["past simple → past perfect", "\"I saw it\" → she said she had seen it"],
            ["present perfect → past perfect", "\"I've finished\" → he said he had finished"],
            ["will → would", "\"I'll call\" → she said she would call"],
            ["can → could", "\"I can swim\" → he said he could swim"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Se quello che è stato detto è ancora vero, il passo indietro non è obbligatorio: \"She said she likes jazz\".",
        },
      ],
    },
    {
      titolo: "SAY O TELL?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Tell vuole sempre la persona a cui parli, senza to. Say no: se vuoi nominare la persona, ci vuole to.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She told me she was busy.", it: "Mi ha detto che era impegnata." },
            { en: "She said she was busy.", it: "Ha detto che era impegnata." },
            { en: "She said me she was busy.", sbagliato: true },
            { en: "She said to me she was busy.", it: "Mi ha detto che era impegnata (meno comune)." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Espressioni fisse con tell: tell the truth, tell a lie, tell a story, tell a joke. Con say: say hello, say sorry, say goodbye.",
        },
      ],
    },
    {
      titolo: "LUOGHI E TEMPI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Anche le espressioni di tempo e di luogo cambiano, perché il punto di vista è diverso:",
        },
        {
          tipo: "tabella",
          righe: [
            ["now", "then"],
            ["today", "that day"],
            ["tomorrow", "the next day"],
            ["yesterday", "the day before"],
            ["here", "there"],
            ["this", "that"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "\"I'll see you tomorrow.\"", it: "\"Ci vediamo domani.\"" },
            { en: "He said he would see me the next day.", it: "Ha detto che ci saremmo visti il giorno dopo." },
          ],
        },
      ],
    },
    {
      titolo: "LE DOMANDE INDIRETTE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nelle domande riferite l'ordine torna quello di una frase normale: soggetto e poi verbo, senza do. Per le domande sì/no si usa if:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "\"Where do you live?\"", it: "\"Dove abiti?\"" },
            { en: "She asked me where I lived.", it: "Mi ha chiesto dove abitavo." },
            { en: "She asked me where did I live.", sbagliato: true },
            { en: "He asked if I was hungry.", it: "Mi ha chiesto se avevo fame." },
          ],
        },
      ],
    },
    {
      titolo: "ORDINI E RICHIESTE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ordini e richieste si riferiscono con tell o ask + persona + to + verbo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "\"Sit down!\"", it: "\"Siediti!\"" },
            { en: "The teacher told us to sit down.", it: "L'insegnante ci ha detto di sederci." },
            { en: "She asked me not to be late.", it: "Mi ha chiesto di non fare tardi." },
          ],
        },
      ],
    },
  ],
};
