import { Lezione } from "@/types/lezione";

export const countableUncountable: Lezione = {
  id: "17",
  titolo: "Numerabili e non numerabili",
  descrizione: "Parlare di cibo e bevande",
  chiavi: "numerabili, non numerabili",
  livello: "[A1]",
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
  ],
};
