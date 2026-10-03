import { Voce } from "@/types/vocabolario";

export const U: Voce[] = [
  {
    id: "use",
    parola: "use",
    fonetica: "/juːz/",
    descrizione: "Servirsi di qualcosa: usare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "uses · used · used · using",
        significati: [
          {
            traduzioni: ["usare", "utilizzare", "adoperare"],
            esempi: [
              { en: "Can I use your phone?", it: "Posso usare il tuo telefono?" },
              { en: "We use English at work.", it: "Al lavoro usiamo l'inglese." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        fonetica: "/juːs/",
        significati: [
          {
            traduzioni: ["uso", "utilizzo"],
            esempi: [{ en: "This room is for staff use only.", it: "Questa stanza è riservata al personale." }],
          },
          {
            indicazione: "it's no use: inutilità",
            traduzioni: ["è inutile"],
            esempi: [{ en: "It's no use crying.", it: "È inutile piangere." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "used to",
        significati: [
          {
            indicazione: "abitudini passate",
            traduzioni: ["(imperfetto)", "ero solito"],
            esempi: [{ en: "I used to live in Rome.", it: "Vivevo a Roma." }],
          },
        ],
      },
      {
        testo: "be used to",
        significati: [
          {
            indicazione: "+ -ing o un nome",
            traduzioni: ["essere abituato a"],
            esempi: [{ en: "I'm used to getting up early.", it: "Sono abituato ad alzarmi presto." }],
          },
        ],
      },
    ],
    attenzione: [
      "La pronuncia cambia: il verbo è /juːz/ (con la z), il nome è /juːs/ (con la s). Lo stesso vale per used to, che si pronuncia /juːst/.",
      "Used to (abitudine passata) e be used to (essere abituato) non sono la stessa cosa: I used to work at night = un tempo lavoravo di notte; I'm used to working at night = sono abituato a lavorare di notte.",
    ],
    lezioni: [
      { id: "38", riquadro: 1 },
      { id: "38", riquadro: 5 },
    ],
  },
  {
    id: "understand",
    parola: "understand",
    fonetica: "/ˌʌndəˈstænd/",
    descrizione: "Afferrare il significato di qualcosa: capire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "understands · understood · understood · understanding",
        significati: [
          {
            indicazione: "il significato",
            traduzioni: ["capire", "comprendere"],
            esempi: [
              { en: "I don't understand this word.", it: "Non capisco questa parola." },
              { en: "Do you understand?", it: "Hai capito?" },
            ],
          },
          {
            indicazione: "una persona",
            traduzioni: ["capire", "comprendere"],
            esempi: [{ en: "Nobody understands me!", it: "Nessuno mi capisce!" }],
          },
          {
            indicazione: "essere stato informato",
            traduzioni: ["sapere", "credere di capire"],
            etichette: ["formale"],
            esempi: [{ en: "I understand you're leaving the company.", it: "Mi risulta che lei lasci l'azienda." }],
          },
        ],
      },
    ],
    attenzione: [
      "Understand è un verbo di stato: I understand, non I'm understanding.",
      "\"Hai capito?\" si dice spesso Do you understand? al presente, non Did you understand?",
      "L'aggettivo understanding vuol dire comprensivo: an understanding teacher.",
    ],
    lezioni: [{ id: "13", riquadro: 3 }],
  },
];
