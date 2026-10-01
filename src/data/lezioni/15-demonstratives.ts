import { Lezione } from "@/types/lezione";

export const demonstratives: Lezione = {
  id: "15",
  titolo: "This, that, these, those",
  descrizione: "Indicare oggetti vicini e lontani",
  chiavi: "dimostrativi",
  livello: "[A1]",
  citazione: {
    testo: "This is Sparta!",
    fonte: "300",
    traduzione: "Questa è Sparta!",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "VICINO O LONTANO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I dimostrativi indicano qualcosa. Dipendono da due cose: se è vicino o lontano, e se è singolare o plurale.",
        },
        {
          tipo: "tabella",
          righe: [
            ["this", "questo (vicino, singolare)"],
            ["these", "questi (vicino, plurale)"],
            ["that", "quello (lontano, singolare)"],
            ["those", "quelli (lontano, plurale)"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "This book is mine.", it: "Questo libro è mio." },
            { en: "These shoes are new.", it: "Queste scarpe sono nuove." },
            { en: "That house is old.", it: "Quella casa è vecchia." },
            { en: "Those people are my friends.", it: "Quelle persone sono miei amici." },
          ],
        },
      ],
    },
    {
      titolo: "NON CAMBIANO CON IL GENERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Non esiste maschile e femminile: this vale per questo e questa. Cambia solo il numero.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "this boy, this girl", it: "questo ragazzo, questa ragazza" },
            { en: "this books", sbagliato: true },
            { en: "these books", it: "questi libri" },
          ],
        },
      ],
    },
    {
      titolo: "COME AGGETTIVO O DA SOLO",
      blocchi: [
        {
          tipo: "testo",
          testo: "Possono stare davanti a un nome o da soli, come pronomi:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I like this jacket.", it: "Mi piace questa giacca." },
            { en: "I like this.", it: "Mi piace questo." },
            { en: "What's that?", it: "Cos'è quello?" },
          ],
        },
      ],
    },
    {
      titolo: "PER PRESENTARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "This si usa per presentare qualcuno, anche se in italiano diremmo \"lui è\":",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "This is my friend Luca.", it: "Ti presento il mio amico Luca." },
            { en: "He is my friend Luca.", sbagliato: true },
          ],
        },
        {
          tipo: "testo",
          testo: "Al telefono ci si presenta con this, e si chiede con who's:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Hello, this is Anna.", it: "Pronto, sono Anna." },
            { en: "Who's calling, please?", it: "Chi parla, scusi?" },
          ],
        },
      ],
    },
    {
      titolo: "NEL TEMPO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "This indica il presente o il futuro vicino, that il passato:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "this week, this morning", it: "questa settimana, stamattina" },
            { en: "in those days", it: "a quei tempi" },
            { en: "That was a great party!", it: "È stata una bella festa!" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "That's right, that's fine, that's it: con that si commenta quello che ha appena detto qualcuno.",
        },
      ],
    },
    {
      titolo: "THE ONE, THE ONES",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per non ripetere il nome si usa one (singolare) o ones (plurale):",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Which cake do you want? This one or that one?", it: "Quale torta vuoi? Questa o quella?" },
            { en: "I prefer the red ones.", it: "Preferisco quelli rossi." },
          ],
        },
      ],
    },
  ],
};
