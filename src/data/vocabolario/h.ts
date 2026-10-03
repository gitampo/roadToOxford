import { Voce } from "@/types/vocabolario";

export const H: Voce[] = [
  {
    id: "hard",
    parola: "hard",
    fonetica: "/hɑːd/",
    descrizione: "Duro al tatto, o difficile da fare.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "non morbido",
            traduzioni: ["duro"],
            esempi: [{ en: "This bed is too hard.", it: "Questo letto è troppo duro." }],
          },
          {
            indicazione: "non facile",
            traduzioni: ["difficile", "duro", "faticoso"],
            esempi: [
              { en: "The exam was really hard.", it: "L'esame è stato difficilissimo." },
              { en: "It's hard to say.", it: "È difficile da dire." },
            ],
          },
          {
            indicazione: "con le persone",
            traduzioni: ["severo", "duro"],
            esempi: [{ en: "Don't be so hard on yourself.", it: "Non essere così severo con te stesso." }],
          },
        ],
      },
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "con impegno",
            traduzioni: ["sodo", "duramente"],
            esempi: [{ en: "She works hard.", it: "Lavora sodo." }],
          },
          {
            indicazione: "con forza",
            traduzioni: ["forte"],
            esempi: [{ en: "It's raining hard.", it: "Piove forte." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "hard-working",
        significati: [
          {
            traduzioni: ["laborioso", "che lavora sodo"],
            esempi: [{ en: "She's a hard-working student.", it: "È una studentessa che si impegna molto." }],
          },
        ],
      },
    ],
    attenzione: [
      "L'avverbio è hard, uguale all'aggettivo. Hardly è un'altra parola e vuol dire \"quasi per niente\": He works hard = lavora sodo; He hardly works = non lavora quasi mai.",
    ],
    lezioni: [{ id: "33", riquadro: 4 }],
  },
  {
    id: "have",
    parola: "have",
    fonetica: "/hæv/",
    descrizione: "Possedere qualcosa: avere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "has · had · had · having",
        significati: [
          {
            indicazione: "possedere",
            traduzioni: ["avere"],
            esempi: [
              { en: "I have two brothers.", it: "Ho due fratelli." },
              { en: "Do you have a pen?", it: "Hai una penna?" },
            ],
          },
          {
            indicazione: "pasti, cibo, bevande",
            traduzioni: ["mangiare", "bere", "prendere", "fare"],
            esempi: [
              { en: "We have breakfast at eight.", it: "Facciamo colazione alle otto." },
              { en: "I'll have a coffee, please.", it: "Prendo un caffè, grazie." },
            ],
          },
          {
            indicazione: "con nomi di azione",
            traduzioni: ["fare"],
            esempi: [
              { en: "I'm going to have a shower.", it: "Vado a fare la doccia." },
              { en: "Have a good time!", it: "Divertiti!" },
            ],
          },
          {
            indicazione: "have + oggetto + participio",
            traduzioni: ["farsi fare"],
            esempi: [{ en: "I had my hair cut.", it: "Mi sono fatto tagliare i capelli." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "ausiliare",
        significati: [
          {
            indicazione: "nei tempi perfect",
            traduzioni: ["avere", "essere"],
            esempi: [
              { en: "I have finished.", it: "Ho finito." },
              { en: "She has gone home.", it: "È andata a casa." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "have to",
        significati: [
          {
            traduzioni: ["dovere"],
            esempi: [{ en: "I have to go now.", it: "Ora devo andare." }],
          },
        ],
      },
      {
        testo: "have got",
        significati: [
          {
            indicazione: "possedere",
            traduzioni: ["avere"],
            etichette: ["UK"],
            esempi: [{ en: "She's got blue eyes.", it: "Ha gli occhi azzurri." }],
          },
        ],
      },
    ],
    attenzione: [
      "Molte espressioni italiane con \"avere\" in inglese vogliono be: avere fame = be hungry, avere vent'anni = be twenty, avere freddo = be cold, avere ragione = be right.",
      "Have nel senso di \"possedere\" non va al -ing: I have a car, non I'm having a car. Ma I'm having lunch va bene, perché lì vuol dire mangiare.",
      "Nei tempi perfect l'ausiliare è sempre have, anche dove in italiano si usa essere: She has arrived = è arrivata.",
    ],
    lezioni: [
      { id: "2", riquadro: 8 },
      { id: "6", riquadro: 1 },
      { id: "29", riquadro: 7 },
      { id: "32", riquadro: 1 },
      { id: "45", riquadro: 6 },
    ],
  },
  {
    id: "hold",
    parola: "hold",
    fonetica: "/həʊld/",
    descrizione: "Tenere qualcosa in mano o tra le braccia.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "holds · held · held · holding",
        significati: [
          {
            indicazione: "in mano, tra le braccia",
            traduzioni: ["tenere", "reggere"],
            esempi: [
              { en: "Can you hold my bag for a moment?", it: "Puoi tenermi la borsa un attimo?" },
              { en: "She was holding a baby.", it: "Teneva in braccio un bambino." },
            ],
          },
          {
            indicazione: "avere spazio per",
            traduzioni: ["contenere"],
            esempi: [{ en: "The stadium holds 60,000 people.", it: "Lo stadio contiene 60.000 persone." }],
          },
          {
            indicazione: "un evento",
            traduzioni: ["tenere", "organizzare"],
            esempi: [{ en: "The meeting will be held on Monday.", it: "La riunione si terrà lunedì." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "hold on",
        significati: [
          {
            traduzioni: ["aspettare", "restare in linea"],
            etichette: ["informale"],
            esempi: [{ en: "Hold on, I'll get a pen.", it: "Aspetta, prendo una penna." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "hold hands",
        significati: [
          {
            traduzioni: ["tenersi per mano"],
            esempi: [{ en: "They were walking and holding hands.", it: "Camminavano tenendosi per mano." }],
          },
        ],
      },
    ],
    attenzione: [
      "Al telefono \"resti in linea\" è Hold on o Hold the line, please.",
    ],
  },
  {
    id: "happen",
    parola: "happen",
    fonetica: "/ˈhæpən/",
    descrizione: "Avere luogo: succedere, accadere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "happens · happened · happened · happening",
        significati: [
          {
            traduzioni: ["succedere", "accadere", "capitare"],
            esempi: [
              { en: "What happened?", it: "Cos'è successo?" },
              { en: "What happened to your arm?", it: "Cosa ti è successo al braccio?" },
            ],
          },
          {
            indicazione: "+ to: per caso",
            traduzioni: ["per caso"],
            esempi: [{ en: "I happened to see her at the station.", it: "L'ho vista per caso alla stazione." }],
          },
        ],
      },
    ],
    attenzione: [
      "Happen non ha mai un oggetto diretto e non va al passivo: It happened, non It was happened.",
      "A chi succede si dice con to: What happened to you?",
      "Nelle domande con who o what come soggetto niente did: What happened?, non What did happen?",
    ],
    lezioni: [{ id: "24", riquadro: 5 }],
  },
  {
    id: "hear",
    parola: "hear",
    fonetica: "/hɪə(r)/",
    descrizione: "Percepire un suono con le orecchie: sentire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "hears · heard · heard · hearing",
        significati: [
          {
            indicazione: "con le orecchie",
            traduzioni: ["sentire", "udire"],
            esempi: [
              { en: "Can you hear me?", it: "Mi senti?" },
              { en: "I heard a noise downstairs.", it: "Ho sentito un rumore al piano di sotto." },
            ],
          },
          {
            indicazione: "una notizia",
            traduzioni: ["sentire", "venire a sapere"],
            esempi: [{ en: "Have you heard the news?", it: "Hai sentito la notizia?" }],
          },
          {
            indicazione: "+ from: avere notizie",
            traduzioni: ["avere notizie di", "sentire"],
            esempi: [{ en: "I haven't heard from her for months.", it: "Non la sento da mesi." }],
          },
        ],
      },
    ],
    attenzione: [
      "Hear è sentire senza volerlo; listen (to) è ascoltare con attenzione: I heard music, so I listened.",
      "Heard si pronuncia /hɜːd/, diverso da hear /hɪə/.",
      "Sentire un odore o un sapore non è hear ma smell e taste; sentire con il corpo è feel.",
    ],
    lezioni: [
      { id: "13", riquadro: 5 },
      { id: "25", riquadro: 6 },
    ],
  },
  {
    id: "help",
    parola: "help",
    fonetica: "/help/",
    descrizione: "Rendere più facile qualcosa a qualcuno: aiutare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "helps · helped · helped · helping",
        significati: [
          {
            traduzioni: ["aiutare"],
            esempi: [
              { en: "Can you help me?", it: "Mi puoi aiutare?" },
              { en: "She helped me (to) carry the boxes.", it: "Mi ha aiutato a portare le scatole." },
            ],
          },
          {
            indicazione: "can't help + -ing",
            traduzioni: ["non riuscire a fare a meno di"],
            esempi: [{ en: "I couldn't help laughing.", it: "Non sono riuscito a trattenere le risate." }],
          },
          {
            indicazione: "help yourself",
            traduzioni: ["servirsi"],
            esempi: [{ en: "Help yourself to some cake.", it: "Serviti pure della torta." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            traduzioni: ["aiuto"],
            esempi: [
              { en: "Thanks for your help.", it: "Grazie dell'aiuto." },
              { en: "Help!", it: "Aiuto!" },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Dopo help + persona il verbo va con o senza to: help me (to) find it. Mai help me finding.",
      "Help è non numerabile: an help e helps sono sbagliati.",
    ],
    lezioni: [{ id: "28", riquadro: 3 }],
  },
  {
    id: "hit",
    parola: "hit",
    fonetica: "/hɪt/",
    descrizione: "Dare un colpo forte: colpire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "hits · hit · hit · hitting",
        significati: [
          {
            indicazione: "con la mano, un oggetto",
            traduzioni: ["colpire", "picchiare"],
            esempi: [{ en: "He hit the ball really hard.", it: "Ha colpito la palla fortissimo." }],
          },
          {
            indicazione: "urtare",
            traduzioni: ["urtare", "sbattere contro", "investire"],
            esempi: [
              { en: "I hit my head on the door.", it: "Ho sbattuto la testa contro la porta." },
              { en: "The car hit a tree.", it: "La macchina è andata a sbattere contro un albero." },
            ],
          },
          {
            indicazione: "colpire duramente",
            traduzioni: ["colpire", "danneggiare"],
            esempi: [{ en: "The town was badly hit by the floods.", it: "La città è stata colpita duramente dalle alluvioni." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un successo",
            traduzioni: ["successo", "hit"],
            esempi: [{ en: "The song was a huge hit.", it: "La canzone è stata un enorme successo." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "hit it off",
        significati: [
          {
            traduzioni: ["andare subito d'accordo", "trovarsi subito bene"],
            etichette: ["informale"],
            esempi: [{ en: "We hit it off immediately.", it: "Ci siamo trovati subito bene." }],
          },
        ],
      },
    ],
    attenzione: ["Hit è uguale in tutte e tre le forme: hit, hit, hit."],
    lezioni: [{ id: "55", riquadro: 3 }],
  },
  {
    id: "hope",
    parola: "hope",
    fonetica: "/həʊp/",
    descrizione: "Desiderare che qualcosa succeda: sperare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "hopes · hoped · hoped · hoping",
        significati: [
          {
            traduzioni: ["sperare"],
            esempi: [
              { en: "I hope you feel better soon.", it: "Spero che tu ti senta meglio presto." },
              { en: "We hope to see you again.", it: "Speriamo di rivederti." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        significati: [
          {
            traduzioni: ["speranza"],
            esempi: [{ en: "Don't lose hope.", it: "Non perdere la speranza." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "I hope so / I hope not",
        significati: [
          {
            traduzioni: ["spero di sì / spero di no"],
            esempi: [{ en: "— Will it rain tomorrow? — I hope not.", it: "— Pioverà domani? — Spero di no." }],
          },
        ],
      },
    ],
    attenzione: [
      "Dopo I hope si usa spesso il presente con valore di futuro: I hope it doesn't rain tomorrow.",
      "Hope (spero che succeda, ed è possibile) e wish (vorrei che fosse così, ma non lo è) non sono uguali: I hope you pass ≠ I wish I were rich.",
      "Spero di no è I hope not, non I don't hope so.",
    ],
    lezioni: [{ id: "47", riquadro: 3 }],
  },
  {
    id: "hurt",
    parola: "hurt",
    fonetica: "/hɜːt/",
    descrizione: "Fare male, fisicamente o con le parole.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "hurts · hurt · hurt · hurting",
        significati: [
          {
            indicazione: "il corpo",
            traduzioni: ["fare male a", "ferire"],
            esempi: [
              { en: "I hurt my back playing football.", it: "Mi sono fatto male alla schiena giocando a calcio." },
              { en: "Did you hurt yourself?", it: "Ti sei fatto male?" },
            ],
          },
          {
            indicazione: "i sentimenti",
            traduzioni: ["ferire", "offendere"],
            esempi: [{ en: "His words really hurt me.", it: "Le sue parole mi hanno ferito davvero." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        significati: [
          {
            traduzioni: ["fare male", "dolere"],
            esempi: [{ en: "My feet hurt.", it: "Mi fanno male i piedi." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "It won't hurt to...",
        significati: [
          {
            traduzioni: ["non costa niente...", "non fa male..."],
            esempi: [{ en: "It won't hurt to ask.", it: "Chiedere non costa niente." }],
          },
        ],
      },
    ],
    attenzione: [
      "Hurt è uguale in tutte e tre le forme: hurt, hurt, hurt.",
      "\"Mi fa male la testa\" è My head hurts o I have a headache: la parte del corpo è il soggetto.",
    ],
    lezioni: [{ id: "30", riquadro: 7 }],
  },
];
