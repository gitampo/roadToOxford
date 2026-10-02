import { Lezione } from "@/types/lezione";

export const countableUncountable: Lezione = {
  id: "17",
  titolo: "Numerabili e non numerabili",
  descrizione: "Parlare di cibo e bevande",
  chiavi: "numerabili, non numerabili",
  livello: "A1",
  citazione: {
    testo: "Money can't buy me love.",
    fonte: "The Beatles, Can't Buy Me Love",
    traduzione: "I soldi non possono comprarmi l'amore.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "SI POSSONO CONTARE?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I sostantivi numerabili indicano cose che puoi contare una per una: hanno il plurale e vogliono a/an al singolare. I non numerabili indicano sostanze, masse o concetti: non hanno il plurale.",
        },
        {
          tipo: "tabella",
          righe: [
            ["numerabili", "an apple, two apples, a chair"],
            ["non numerabili", "water, bread, money, music"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I need a chair.", it: "Mi serve una sedia." },
            { en: "I need water.", it: "Mi serve dell'acqua." },
            { en: "I need a water.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "IL CIBO",
      blocchi: [
        {
          tipo: "testo",
          testo: "Molti cibi e bevande sono non numerabili:",
        },
        {
          tipo: "tabella",
          righe: [
            ["bread", "pane"],
            ["rice", "riso"],
            ["pasta", "pasta"],
            ["cheese", "formaggio"],
            ["meat", "carne"],
            ["milk", "latte"],
            ["fruit", "frutta"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Fruit è non numerabile quando parli della frutta in generale: \"I eat a lot of fruit\". Ma apple, banana e orange sono numerabili.",
        },
      ],
    },
    {
      titolo: "IL VERBO VA AL SINGOLARE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Con un non numerabile il verbo è sempre singolare:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The water is cold.", it: "L'acqua è fredda." },
            { en: "Money isn't everything.", it: "I soldi non sono tutto." },
            { en: "Money aren't everything.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In italiano \"i soldi\" è plurale, in inglese money è singolare.",
        },
      ],
    },
    {
      titolo: "COME CONTARLI",
      blocchi: [
        {
          tipo: "testo",
          testo: "Per contare un non numerabile si usa un contenitore o un'unità:",
        },
        {
          tipo: "tabella",
          righe: [
            ["a bottle of water", "una bottiglia d'acqua"],
            ["a cup of tea", "una tazza di tè"],
            ["a slice of pizza", "una fetta di pizza"],
            ["a loaf of bread", "una pagnotta"],
            ["a kilo of rice", "un chilo di riso"],
            ["a piece of cake", "una fetta di torta"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Two cups of coffee, please.", it: "Due tazze di caffè, per favore." },
          ],
        },
      ],
    },
    {
      titolo: "ORDINARE AL BAR",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Quando ordini, coffee, tea e beer diventano numerabili: two coffees significa \"due tazze di caffè\".",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Can I have two coffees and a tea, please?", it: "Posso avere due caffè e un tè, per favore?" },
            { en: "Two beers, please.", it: "Due birre, per favore." },
          ],
        },
      ],
    },
    {
      titolo: "I FALSI AMICI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alcune parole che in italiano sono numerabili, in inglese non lo sono. Le hai già viste nella lezione 4{10}:",
        },
        {
          tipo: "tabella",
          righe: [
            ["information", "informazioni"],
            ["advice", "consigli"],
            ["news", "notizie"],
            ["furniture", "mobili"],
            ["homework", "compiti"],
            ["hair", "capelli"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She has long hair.", it: "Ha i capelli lunghi." },
            { en: "She has long hairs.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "\"A hair\" esiste, ma significa un singolo capello: \"There's a hair in my soup!\"",
        },
      ],
    },
    {
      titolo: "ESERCIZI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora mettiti alla prova. Ogni esercizio, se sbagli, ti indica il riquadro da rivedere: dopo averlo riletto, torni qui con un tocco. In fondo trovi il tuo risultato.",
        },
        {
          tipo: "sottotitolo",
          testo: "Numerabile o no?",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca i sostantivi NON numerabili.",
          parole: ["water", "chair", "bread", "apple", "money", "music", "banana", "rice"],
          giuste: [0, 2, 4, 5, 7],
          spiegazione: "Water, bread, money, music e rice sono sostanze o concetti: non si contano una per una.",
          rivedi: "SI POSSONO CONTARE?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["I need a water.", "I need water.", "I need waters."],
          giusta: 1,
          spiegazione: "Water è non numerabile: niente a, niente plurale.",
          rivedi: "SI POSSONO CONTARE?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["I eat a lot of fruits.", "I eat a lot of fruit.", "I eat a fruit."],
          giusta: 1,
          spiegazione: "Fruit, come frutta in generale, è non numerabile. Apple e banana invece si contano.",
          rivedi: "IL CIBO",
        },
        {
          tipo: "sottotitolo",
          testo: "Il verbo",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"I soldi non sono tutto\".",
          prima: "Money",
          dopo: "everything.",
          risposte: ["isn't", "is not"],
          spiegazione: "Money è singolare in inglese, anche se \"i soldi\" in italiano è plurale.",
          rivedi: "IL VERBO VA AL SINGOLARE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Completa: \"The water ___ cold.\"",
          opzioni: ["is", "are"],
          giusta: 0,
          spiegazione: "Con un non numerabile il verbo è sempre singolare.",
          rivedi: "IL VERBO VA AL SINGOLARE",
        },
        {
          tipo: "sottotitolo",
          testo: "Contare",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni unità al cibo giusto.",
          coppie: [
            ["a cup of", "tea"],
            ["a slice of", "pizza"],
            ["a loaf of", "bread"],
            ["a bottle of", "water"],
            ["a kilo of", "rice"],
          ],
          spiegazione: "Per contare un non numerabile si usa un contenitore o un'unità.",
          rivedi: "COME CONTARLI",
        },
        {
          tipo: "riordina",
          consegna: "Al bar: \"Due caffè e un tè, per favore\".",
          parole: ["tea", "please", "and", "coffees", "two", "a"],
          soluzione: ["two", "coffees", "and", "a", "tea", "please"],
          spiegazione: "Quando ordini, coffee e tea diventano numerabili: two coffees = due tazze di caffè.",
          rivedi: "ORDINARE AL BAR",
        },
        {
          tipo: "sottotitolo",
          testo: "I falsi amici",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Ha i capelli lunghi\"?",
          opzioni: ["She has long hairs.", "She has long hair.", "She has a long hair."],
          giusta: 1,
          spiegazione: "Hair, come insieme dei capelli, è non numerabile. A hair è un capello solo.",
          rivedi: "I FALSI AMICI",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le frasi corrette.",
          parole: [
            "I have a lot of homework.",
            "Can you give me an advice?",
            "The news is good.",
            "We need new furnitures.",
            "Thanks for the information.",
          ],
          giuste: [0, 2, 4],
          spiegazione: "Advice e furniture sono non numerabili: some advice, new furniture.",
          rivedi: "I FALSI AMICI",
        },
        {
          tipo: "sottotitolo",
          testo: "Scrivi",
        },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi il tuo testo e confrontalo con il modello.",
        },
        {
          tipo: "scrivi",
          consegna: "Sei al bar con due amici. Scrivi il tuo ordine e una domanda al cameriere (3–4 frasi).",
          punti: ["due bevande", "qualcosa da mangiare con un'unità (a slice of, a piece of…)", "una domanda con information o advice"],
          modello:
            "Hello! Can we have two coffees and an orange juice, please? And a slice of chocolate cake. Can you give us some information about the museum near here?",
          spiegazione:
            "Controlla: two coffees (al bar diventa numerabile), a slice of, some information senza -s.",
        },
      ],
    },
    {
      titolo: "IL TUO RISULTATO",
      blocchi: [
        {
          tipo: "punteggio",
        },
        {
          tipo: "nota",
          testo:
            "Tocca un esercizio sbagliato qui sopra per andare al riquadro da rivedere.",
        },
      ],
    },
  ],
};
