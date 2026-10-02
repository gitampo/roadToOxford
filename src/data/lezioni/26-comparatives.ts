import { Lezione } from "@/types/lezione";

export const comparatives: Lezione = {
  id: "26",
  titolo: "Comparativi e superlativi",
  descrizione: "Fare confronti tra persone, luoghi, oggetti",
  chiavi: "comparativo, superlativo",
  livello: "A1",
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
          testo: "-er o more?",
        },
        {
          tipo: "completa",
          consegna: "Completa con il comparativo di \"cheap\".",
          prima: "The bus is",
          dopo: "than the train.",
          risposte: ["cheaper"],
          spiegazione: "Aggettivo di una sillaba: + -er.",
          rivedi: "AGGETTIVI CORTI: -ER E -EST",
        },
        {
          tipo: "completa",
          consegna: "Completa con il comparativo di \"expensive\".",
          prima: "London is",
          dopo: "than Rome.",
          risposte: ["more expensive"],
          spiegazione: "Aggettivo lungo: more + aggettivo.",
          rivedi: "AGGETTIVI LUNGHI: MORE E MOST",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni aggettivo al suo comparativo.",
          coppie: [
            ["nice", "nicer"],
            ["happy", "happier"],
            ["big", "bigger"],
            ["easy", "easier"],
            ["interesting", "more interesting"],
          ],
          spiegazione:
            "-e + r, consonante + y → -ier (anche con due sillabe), consonante raddoppiata in big, more per gli aggettivi lunghi.",
          rivedi: "COME SI SCRIVONO",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le forme corrette.",
          parole: ["more cheaper", "cheaper", "expensiver", "more expensive", "funnier", "more funny"],
          giuste: [1, 3, 4],
          spiegazione: "Mai -er e more insieme. Funny finisce in -y, quindi funnier.",
          rivedi: "AGGETTIVI LUNGHI: MORE E MOST",
        },
        {
          tipo: "sottotitolo",
          testo: "Superlativi e irregolari",
        },
        {
          tipo: "completa",
          consegna: "Completa con il superlativo di \"tall\".",
          prima: "He's",
          dopo: "in the class.",
          risposte: ["the tallest"],
          spiegazione: "Il superlativo vuole sempre the: the tallest.",
          rivedi: "AGGETTIVI CORTI: -ER E -EST",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni aggettivo irregolare alle sue forme.",
          coppie: [
            ["good", "better, the best"],
            ["bad", "worse, the worst"],
            ["far", "further, the furthest"],
          ],
          rivedi: "GLI IRREGOLARI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Questo film è meglio del libro\"?",
          opzioni: ["This film is more good than the book.", "This film is gooder than the book.", "This film is better than the book."],
          giusta: 2,
          spiegazione: "Good è irregolare: better, the best.",
          rivedi: "GLI IRREGOLARI",
        },
        {
          tipo: "sottotitolo",
          testo: "Than, in, as… as",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"È più grande di me\"?",
          opzioni: ["She's older of me.", "She's older than me.", "She's older that me."],
          giusta: 1,
          spiegazione: "Nel comparativo \"di\" si dice than.",
          rivedi: "THAN, IN, OF",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"il ristorante migliore della città\".",
          prima: "the best restaurant",
          dopo: "town",
          risposte: ["in"],
          spiegazione: "Nel superlativo, con i luoghi, \"di\" si dice in.",
          rivedi: "THAN, IN, OF",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Anna è alta quanto sua madre\".",
          parole: ["as", "mother", "tall", "is", "her", "Anna", "as"],
          soluzione: ["Anna", "is", "as", "tall", "as", "her", "mother"],
          spiegazione: "As + aggettivo + as per dire che due cose sono uguali.",
          rivedi: "AS… AS",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa significa \"It's not as cold as yesterday\"?",
          opzioni: ["Fa più freddo di ieri.", "Fa meno freddo di ieri.", "Fa freddo come ieri."],
          giusta: 1,
          spiegazione: "Not as… as è un modo gentile per dire \"meno\".",
          rivedi: "AS… AS",
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
          consegna: "Confronta la tua città con una città famosa in 4–5 frasi.",
          punti: ["un comparativo corto (-er)", "un comparativo lungo (more)", "un irregolare (better, worse)", "un superlativo", "una frase con as… as"],
          modello:
            "My town is smaller than Milan, but it's quieter and greener. Milan is more interesting for young people. The food in my town is better! Our castle is the oldest building in the area. Life here isn't as expensive as in a big city.",
          spiegazione:
            "Controlla: mai -er e more insieme, than per il confronto, the + superlativo, in per \"della zona\".",
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
