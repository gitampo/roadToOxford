import { Voce } from "@/types/vocabolario";

export const N: Voce[] = [
  {
    id: "notice",
    parola: "notice",
    fonetica: "/ˈnəʊtɪs/",
    descrizione: "Falso amico: significa \"notare\" o \"avviso\", non \"notizia\".",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "notices · noticed · noticed · noticing",
        significati: [
          {
            traduzioni: ["notare", "accorgersi di"],
            esempi: [
              { en: "Did you notice anything strange?", it: "Hai notato qualcosa di strano?" },
              { en: "Nobody noticed that I'd left.", it: "Nessuno si è accorto che me n'ero andato." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "scritto, appeso",
            traduzioni: ["avviso", "cartello"],
            esempi: [{ en: "There's a notice on the door.", it: "C'è un avviso sulla porta." }],
          },
          {
            indicazione: "con anticipo",
            traduzioni: ["preavviso"],
            esempi: [{ en: "Thanks for coming at such short notice.", it: "Grazie di essere venuto con così poco preavviso." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "notizia",
      spiegazione:
        "La notizia è news, che è non numerabile: una notizia = a piece of news, e il verbo va al singolare (The news is good).",
    },
    lezioni: [{ id: "17", riquadro: 6 }],
  },
  {
    id: "novel",
    parola: "novel",
    fonetica: "/ˈnɒvl/",
    descrizione: "Falso amico: significa \"romanzo\", non \"novella\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["romanzo"],
            esempi: [{ en: "Jane Austen wrote six novels.", it: "Jane Austen ha scritto sei romanzi." }],
          },
        ],
      },
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["nuovo", "originale", "insolito"],
            etichette: ["formale"],
            esempi: [{ en: "That's a novel idea.", it: "È un'idea originale." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "novella",
      spiegazione: "La novella, un racconto breve, è short story. Novel è il romanzo.",
    },
    attenzione: ["Lo scrittore di romanzi è novelist."],
  },
  {
    id: "need",
    parola: "need",
    fonetica: "/niːd/",
    descrizione: "Non poter fare a meno di qualcosa: avere bisogno.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "needs · needed · needed · needing",
        significati: [
          {
            indicazione: "+ nome",
            traduzioni: ["avere bisogno di", "servire"],
            esempi: [
              { en: "I need a new phone.", it: "Mi serve un telefono nuovo." },
              { en: "Do you need any help?", it: "Ti serve una mano?" },
            ],
          },
          {
            indicazione: "+ to: dovere",
            traduzioni: ["dovere", "avere bisogno di"],
            esempi: [{ en: "You need to rest.", it: "Devi riposare." }],
          },
          {
            indicazione: "don't need to: non serve",
            traduzioni: ["non c'è bisogno di", "non occorre"],
            esempi: [{ en: "You don't need to come.", it: "Non c'è bisogno che tu venga." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        significati: [
          {
            traduzioni: ["bisogno", "necessità"],
            esempi: [{ en: "There's no need to shout.", it: "Non c'è bisogno di urlare." }],
          },
        ],
      },
    ],
    attenzione: [
      "Need è un verbo normale: I don't need it, Do you need it? Niente I need not nel parlato di tutti i giorni.",
      "Needn't have + participio = l'hai fatto ma non serviva: You needn't have brought a present.",
      "Need è un verbo di stato: I need help, non I'm needing help.",
    ],
    lezioni: [
      { id: "13", riquadro: 3 },
      { id: "50", riquadro: 6 },
    ],
  },
  {
    id: "nervous",
    parola: "nervous",
    fonetica: "/ˈnɜːvəs/",
    descrizione: "Falso amico: significa \"agitato, ansioso\", non \"nervoso\" nel senso di arrabbiato.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["agitato", "ansioso", "teso"],
            esempi: [
              { en: "I always get nervous before exams.", it: "Prima degli esami mi agito sempre." },
              { en: "She's nervous about flying.", it: "Ha paura di volare." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "nervoso (irritato)",
      spiegazione:
        "Nervoso nel senso di irritato o arrabbiato si dice annoyed, irritable o in a bad mood: Don't talk to him, he's in a bad mood.",
    },
    attenzione: [
      "Il sistema nervoso però è the nervous system: in medicina il significato è lo stesso.",
      "Avere i nervi a fior di pelle = be on edge.",
    ],
  },
  {
    id: "news",
    parola: "news",
    fonetica: "/njuːz/",
    descrizione: "Informazioni su fatti recenti: notizie.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            indicazione: "informazioni nuove",
            traduzioni: ["notizia", "notizie", "novità"],
            esempi: [
              { en: "I've got some good news!", it: "Ho delle belle notizie!" },
              { en: "That's great news.", it: "È una notizia fantastica." },
            ],
          },
          {
            indicazione: "the news: in TV, alla radio",
            traduzioni: ["telegiornale", "notiziario"],
            esempi: [{ en: "Did you watch the news last night?", it: "Hai visto il telegiornale ieri sera?" }],
          },
        ],
      },
    ],
    attenzione: [
      "News sembra plurale ma è singolare e non numerabile: The news is good, non The news are good. Una notizia = a piece of news.",
      "Mai a news: si dice some news o a piece of news.",
    ],
    lezioni: [
      { id: "4", riquadro: 10 },
      { id: "17", riquadro: 6 },
    ],
  },
];
