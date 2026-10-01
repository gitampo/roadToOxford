import { Lezione } from "@/types/lezione";

export const comparatives: Lezione = {
  id: "26",
  titolo: "Comparativi e superlativi",
  descrizione: "Fare confronti tra persone, luoghi, oggetti",
  chiavi: "comparativo, superlativo",
  livello: "[A1]",
  citazione: {
    testo: "Mirror, mirror on the wall, who is the fairest of them all?",
    fonte: "Biancaneve",
    traduzione: "Specchio, specchio delle mie brame, chi è la più bella del reame?",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "AGGETTIVI CORTI: -ER E -EST",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con gli aggettivi di una sillaba si aggiunge -er per il comparativo e -est per il superlativo:",
        },
        {
          tipo: "tabella",
          righe: [
            ["tall → taller → the tallest", "alto"],
            ["cheap → cheaper → the cheapest", "economico"],
            ["old → older → the oldest", "vecchio"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Tom is taller than Luca.", it: "Tom è più alto di Luca." },
            { en: "He's the tallest in the class.", it: "È il più alto della classe." },
          ],
        },
      ],
    },
    {
      titolo: "COME SI SCRIVONO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["finisce in -e: + -r, -st", "nice → nicer → nicest"],
            ["consonante + y → -ier, -iest", "happy → happier → happiest"],
            ["vocale + consonante: si raddoppia", "big → bigger → biggest"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Gli aggettivi di due sillabe in -y seguono questa regola: easy → easier, funny → funnier.",
        },
      ],
    },
    {
      titolo: "AGGETTIVI LUNGHI: MORE E MOST",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con gli aggettivi di due o più sillabe (tranne quelli in -y) si usa more e the most:",
        },
        {
          tipo: "tabella",
          righe: [
            ["expensive → more expensive → the most expensive", "caro"],
            ["interesting → more interesting → the most interesting", "interessante"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "London is more expensive than Rome.", it: "Londra è più cara di Roma." },
            { en: "more cheaper", sbagliato: true },
            { en: "expensiver", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "GLI IRREGOLARI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["good → better → the best", "buono, migliore, il migliore"],
            ["bad → worse → the worst", "cattivo, peggiore, il peggiore"],
            ["far → further → the furthest", "lontano"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "This film is better than the book.", it: "Questo film è meglio del libro." },
            { en: "It was the worst day of my life.", it: "È stato il giorno peggiore della mia vita." },
          ],
        },
      ],
    },
    {
      titolo: "THAN, IN, OF",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel comparativo \"di\" si dice than. Nel superlativo, con i luoghi e i gruppi, si usa in:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She's older than me.", it: "È più grande di me." },
            { en: "She's older of me.", sbagliato: true },
            { en: "the best restaurant in town", it: "il ristorante migliore della città" },
            { en: "the best of all", it: "il migliore di tutti" },
          ],
        },
      ],
    },
    {
      titolo: "AS… AS",
      blocchi: [
        {
          tipo: "testo",
          testo: "Per dire che due cose sono uguali si usa as + aggettivo + as:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Anna is as tall as her mother.", it: "Anna è alta quanto sua madre." },
            { en: "It's not as cold as yesterday.", it: "Non fa freddo come ieri." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Not as… as è un modo gentile per dire \"meno\": \"It's not as good as I hoped\".",
        },
      ],
    },
    {
      titolo: "CONFRONTARE CITTÀ",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "Oxford is smaller than London.", it: "Oxford è più piccola di Londra." },
            { en: "It's quieter and greener.", it: "È più tranquilla e più verde." },
            { en: "Oxford University is the oldest university in the English-speaking world.", it: "L'Università di Oxford è la più antica del mondo anglofono." },
          ],
        },
      ],
    },
  ],
};
