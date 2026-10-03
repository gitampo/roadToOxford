import { Voce } from "@/types/vocabolario";

export const P: Voce[] = [
  {
    id: "parents",
    parola: "parents",
    fonetica: "/ˈpeərənts/",
    descrizione: "Falso amico: significa \"genitori\", non \"parenti\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "plurale",
        significati: [
          {
            traduzioni: ["genitori"],
            esempi: [
              { en: "My parents live in Bristol.", it: "I miei genitori vivono a Bristol." },
              { en: "She's a single parent.", it: "È una madre single." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "parenti",
      spiegazione: "I parenti sono relatives o relations. Parents sono solo la madre e il padre.",
    },
    attenzione: ["Il singolare parent vuol dire \"genitore\": a single parent, un genitore single."],
  },
  {
    id: "pay",
    parola: "pay",
    fonetica: "/peɪ/",
    descrizione: "Dare soldi in cambio di qualcosa: pagare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "pays · paid · paid · paying",
        significati: [
          {
            indicazione: "dare soldi",
            traduzioni: ["pagare"],
            esempi: [
              { en: "Can I pay by card?", it: "Posso pagare con la carta?" },
              { en: "I paid the bill.", it: "Ho pagato il conto." },
            ],
          },
          {
            indicazione: "+ for: un acquisto",
            traduzioni: ["pagare"],
            esempi: [{ en: "Who paid for the tickets?", it: "Chi ha pagato i biglietti?" }],
          },
          {
            indicazione: "dare un vantaggio",
            traduzioni: ["convenire", "rendere"],
            esempi: [{ en: "Crime doesn't pay.", it: "Il crimine non paga." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            traduzioni: ["paga", "stipendio"],
            esempi: [{ en: "The pay is good, but the hours are long.", it: "Lo stipendio è buono, ma l'orario è lungo." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "pay back",
        significati: [
          {
            traduzioni: ["restituire (soldi)", "ripagare"],
            esempi: [{ en: "I'll pay you back tomorrow.", it: "Ti restituisco i soldi domani." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "pay attention",
        significati: [
          {
            traduzioni: ["fare attenzione", "stare attento"],
            esempi: [{ en: "Pay attention to the teacher.", it: "Stai attento all'insegnante." }],
          },
        ],
      },
      {
        testo: "pay a visit",
        significati: [
          {
            traduzioni: ["fare visita"],
            esempi: [{ en: "Let's pay Grandma a visit.", it: "Andiamo a trovare la nonna." }],
          },
        ],
      },
    ],
    attenzione: [
      "Si paga una cosa con for: pay for the meal, non pay the meal. Ma si paga direttamente il conto o la persona: pay the bill, pay the waiter.",
      "Il passato è paid, non payed.",
    ],
    lezioni: [{ id: "45", riquadro: 6 }],
  },
  {
    id: "preservative",
    parola: "preservative",
    fonetica: "/prɪˈzɜːvətɪv/",
    descrizione: "Falso amico: significa \"conservante\", non \"preservativo\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["conservante"],
            esempi: [{ en: "This jam contains no preservatives.", it: "Questa marmellata non contiene conservanti." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "preservativo",
      spiegazione: "Il preservativo è condom. Preservative è la sostanza che fa durare di più il cibo.",
    },
  },
  {
    id: "pretend",
    parola: "pretend",
    fonetica: "/prɪˈtend/",
    descrizione: "Falso amico: significa \"fingere\", non \"pretendere\".",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "pretends · pretended · pretended · pretending",
        significati: [
          {
            traduzioni: ["fingere", "far finta"],
            esempi: [
              { en: "He pretended to be asleep.", it: "Ha finto di dormire." },
              { en: "Let's pretend we're pirates.", it: "Facciamo finta di essere pirati." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "pretendere",
      spiegazione:
        "Pretendere si dice demand (esigere) o expect (aspettarsi): She expects too much from her students.",
    },
    attenzione: ["Dopo pretend si usa to + verbo: pretend to know, non pretend knowing."],
  },
  {
    id: "put",
    parola: "put",
    fonetica: "/pʊt/",
    descrizione: "Mettere qualcosa in un posto.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "puts · put · put · putting",
        significati: [
          {
            indicazione: "in un posto",
            traduzioni: ["mettere", "posare"],
            esempi: [
              { en: "Put your bag on the chair.", it: "Metti la borsa sulla sedia." },
              { en: "Where did you put my keys?", it: "Dove hai messo le mie chiavi?" },
            ],
          },
          {
            indicazione: "con le parole",
            traduzioni: ["dire", "esprimere"],
            esempi: [{ en: "Let me put it another way.", it: "Lascia che lo dica in un altro modo." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "put on",
        significati: [
          {
            indicazione: "un vestito",
            traduzioni: ["mettersi", "indossare"],
            esempi: [{ en: "Put on your coat.", it: "Mettiti il cappotto." }],
          },
          {
            indicazione: "peso",
            traduzioni: ["prendere (peso)", "ingrassare"],
            esempi: [{ en: "I've put on two kilos.", it: "Ho preso due chili." }],
          },
        ],
      },
      {
        testo: "put off",
        significati: [
          {
            traduzioni: ["rimandare", "rinviare"],
            esempi: [{ en: "Never put off till tomorrow what you can do today.", it: "Non rimandare a domani quello che puoi fare oggi." }],
          },
        ],
      },
      {
        testo: "put up with",
        significati: [
          {
            traduzioni: ["sopportare"],
            esempi: [{ en: "I can't put up with this noise any longer.", it: "Non sopporto più questo rumore." }],
          },
        ],
      },
    ],
    attenzione: [
      "Put è uguale in tutte e tre le forme: put, put, put.",
      "Si pronuncia /pʊt/, con la u breve di good, non con quella di but.",
    ],
    lezioni: [
      { id: "46", riquadro: 3 },
      { id: "56", riquadro: 2 },
    ],
  },
  {
    id: "pass",
    parola: "pass",
    fonetica: "/pɑːs/",
    descrizione: "Andare oltre qualcosa; un esame: superarlo.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "passes · passed · passed · passing",
        significati: [
          {
            indicazione: "un esame",
            traduzioni: ["superare", "passare"],
            esempi: [{ en: "I passed my driving test!", it: "Ho passato l'esame di guida!" }],
          },
          {
            indicazione: "andare oltre",
            traduzioni: ["passare davanti a", "superare"],
            esempi: [{ en: "I pass the library on my way to school.", it: "Andando a scuola passo davanti alla biblioteca." }],
          },
          {
            indicazione: "dare a qualcuno",
            traduzioni: ["passare"],
            esempi: [{ en: "Could you pass the salt, please?", it: "Mi passi il sale, per favore?" }],
          },
          {
            indicazione: "il tempo",
            traduzioni: ["passare", "trascorrere"],
            esempi: [{ en: "The weeks passed quickly.", it: "Le settimane sono passate in fretta." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "pass away",
        significati: [
          {
            traduzioni: ["morire", "venire a mancare"],
            etichette: ["eufemismo"],
            esempi: [{ en: "His grandfather passed away last year.", it: "Suo nonno è venuto a mancare l'anno scorso." }],
          },
        ],
      },
      {
        testo: "pass out",
        significati: [
          {
            traduzioni: ["svenire"],
            esempi: [{ en: "It was so hot that she passed out.", it: "Faceva così caldo che è svenuta." }],
          },
        ],
      },
    ],
    attenzione: [
      "Pass an exam vuol dire superarlo. Sostenerlo, anche senza passarlo, è take an exam.",
      "Passare del tempo facendo qualcosa è spend: I spent the weekend studying, non I passed the weekend.",
      "Non confondere passed (passato di pass) con past (passato come nome o preposizione): It's half past ten.",
    ],
    lezioni: [{ id: "25", riquadro: 4 }],
  },
  {
    id: "pavement",
    parola: "pavement",
    fonetica: "/ˈpeɪvmənt/",
    descrizione: "Falso amico: significa \"marciapiede\", non \"pavimento\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["marciapiede"],
            etichette: ["UK"],
            esempi: [{ en: "Don't ride your bike on the pavement.", it: "Non andare in bici sul marciapiede." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "pavimento",
      spiegazione: "Il pavimento di una stanza è floor: The book fell on the floor.",
    },
    attenzione: ["In America marciapiede si dice sidewalk, e pavement è l'asfalto della strada."],
  },
  {
    id: "petrol",
    parola: "petrol",
    fonetica: "/ˈpetrəl/",
    descrizione: "Falso amico: significa \"benzina\", non \"petrolio\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            traduzioni: ["benzina"],
            etichette: ["UK"],
            esempi: [{ en: "We need to stop for petrol.", it: "Dobbiamo fermarci a fare benzina." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "petrolio",
      spiegazione: "Il petrolio è oil (o crude oil, il greggio).",
    },
    attenzione: [
      "In America la benzina è gas o gasoline. Il distributore è a petrol station (UK) o a gas station (US).",
    ],
  },
  {
    id: "pick",
    parola: "pick",
    fonetica: "/pɪk/",
    descrizione: "Scegliere, oppure raccogliere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "picks · picked · picked · picking",
        significati: [
          {
            indicazione: "scegliere",
            traduzioni: ["scegliere"],
            esempi: [{ en: "Pick a card, any card.", it: "Scegli una carta, una qualsiasi." }],
          },
          {
            indicazione: "fiori, frutta",
            traduzioni: ["cogliere", "raccogliere"],
            esempi: [{ en: "We picked strawberries on the farm.", it: "Abbiamo raccolto le fragole alla fattoria." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "pick up",
        significati: [
          {
            indicazione: "da terra",
            traduzioni: ["raccogliere", "tirare su"],
            esempi: [{ en: "Pick up your clothes!", it: "Raccogli i tuoi vestiti!" }],
          },
          {
            indicazione: "una persona",
            traduzioni: ["andare a prendere"],
            esempi: [{ en: "I'll pick you up at seven.", it: "Ti passo a prendere alle sette." }],
          },
          {
            indicazione: "una lingua, un'abitudine",
            traduzioni: ["imparare (senza studiare)"],
            esempi: [{ en: "She picked up Spanish while living in Madrid.", it: "Ha imparato lo spagnolo vivendo a Madrid." }],
          },
          {
            indicazione: "il telefono",
            traduzioni: ["rispondere"],
            esempi: [{ en: "I called, but nobody picked up.", it: "Ho chiamato, ma non ha risposto nessuno." }],
          },
        ],
      },
    ],
    attenzione: ["Pick e choose sono simili, ma pick è più informale e si usa per scelte veloci."],
    lezioni: [{ id: "46", riquadro: 3 }],
  },
  {
    id: "place",
    parola: "place",
    fonetica: "/pleɪs/",
    descrizione: "Una parte dello spazio: posto, luogo.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un luogo",
            traduzioni: ["posto", "luogo"],
            esempi: [{ en: "Oxford is a beautiful place.", it: "Oxford è un posto bellissimo." }],
          },
          {
            indicazione: "la casa di qualcuno",
            traduzioni: ["casa"],
            etichette: ["informale"],
            esempi: [{ en: "Let's go to my place.", it: "Andiamo da me." }],
          },
          {
            indicazione: "in una gara, in un corso",
            traduzioni: ["posto", "posizione"],
            esempi: [
              { en: "She finished in first place.", it: "È arrivata al primo posto." },
              { en: "He got a place at Oxford.", it: "È stato ammesso a Oxford." },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "places · placed · placed · placing",
        significati: [
          {
            traduzioni: ["mettere", "collocare", "posare"],
            etichette: ["formale"],
            esempi: [{ en: "Place the dish in the oven.", it: "Mettete la teglia in forno." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "take place",
        significati: [
          {
            traduzioni: ["avere luogo", "svolgersi"],
            esempi: [{ en: "The wedding will take place in June.", it: "Il matrimonio si terrà a giugno." }],
          },
        ],
      },
      {
        testo: "in place of",
        significati: [
          {
            traduzioni: ["al posto di"],
            esempi: [{ en: "Use honey in place of sugar.", it: "Usa il miele al posto dello zucchero." }],
          },
        ],
      },
    ],
    attenzione: [
      "Un posto a sedere è a seat (Is this seat free?); un posto di lavoro è a job; c'è posto (spazio) è there's room.",
      "Take place non va al passivo: The concert took place yesterday.",
    ],
  },
  {
    id: "point",
    parola: "point",
    fonetica: "/pɔɪnt/",
    descrizione: "Un'idea importante in un discorso; anche un punto o una punta.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "in un discorso",
            traduzioni: ["punto", "osservazione", "argomento"],
            esempi: [
              { en: "That's a good point.", it: "Hai ragione, è un'osservazione giusta." },
              { en: "What's your point?", it: "Dove vuoi arrivare?" },
            ],
          },
          {
            indicazione: "lo scopo",
            traduzioni: ["senso", "scopo"],
            esempi: [{ en: "There's no point in waiting.", it: "Non ha senso aspettare." }],
          },
          {
            indicazione: "nel punteggio",
            traduzioni: ["punto"],
            esempi: [{ en: "We won by two points.", it: "Abbiamo vinto di due punti." }],
          },
          {
            indicazione: "un momento",
            traduzioni: ["momento", "punto"],
            esempi: [{ en: "At that point, I decided to leave.", it: "A quel punto ho deciso di andarmene." }],
          },
          {
            indicazione: "nei numeri",
            traduzioni: ["virgola"],
            esempi: [{ en: "3.5 = three point five", it: "3,5 = tre virgola cinque" }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "points · pointed · pointed · pointing",
        significati: [
          {
            indicazione: "+ at / to",
            traduzioni: ["indicare", "puntare"],
            esempi: [{ en: "It's rude to point at people.", it: "È maleducato indicare le persone." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "point out",
        significati: [
          {
            traduzioni: ["far notare", "sottolineare"],
            esempi: [{ en: "She pointed out a mistake in my essay.", it: "Mi ha fatto notare un errore nel saggio." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "point of view",
        significati: [
          {
            traduzioni: ["punto di vista"],
            esempi: [{ en: "From my point of view, it's a mistake.", it: "Dal mio punto di vista è un errore." }],
          },
        ],
      },
    ],
    attenzione: [
      "Nei numeri inglesi la virgola decimale è un punto (3.5) e il separatore delle migliaia è una virgola (1,000): l'opposto dell'italiano.",
      "Il punto alla fine della frase è full stop (UK) o period (US), non point.",
    ],
    lezioni: [{ id: "56", riquadro: 4 }],
  },
  {
    id: "prevent",
    parola: "prevent",
    fonetica: "/prɪˈvent/",
    descrizione: "Fare in modo che qualcosa non succeda: impedire, prevenire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "prevents · prevented · prevented · preventing",
        significati: [
          {
            traduzioni: ["impedire", "prevenire", "evitare"],
            esempi: [
              { en: "Wash your hands to prevent infection.", it: "Lavati le mani per prevenire le infezioni." },
              { en: "The rain prevented us from going out.", it: "La pioggia ci ha impedito di uscire." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Impedire a qualcuno di fare è prevent somebody from + -ing: prevent me from leaving, non prevent me to leave.",
      "Non vuol dire \"preventivo\": il preventivo di un lavoro è a quote o an estimate.",
    ],
  },
];
