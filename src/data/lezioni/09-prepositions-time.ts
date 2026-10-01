import { Lezione } from "@/types/lezione";

export const prepositionsTime: Lezione = {
  id: "9",
  titolo: "Preposizioni di tempo: in / on / at",
  descrizione: "Parlare di orari e appuntamenti",
  chiavi: "preposizioni di tempo",
  livello: "A1",
  citazione: {
    testo: "At the going down of the sun and in the morning we will remember them.",
    fonte: "Laurence Binyon, For the Fallen",
    traduzione: "Al calar del sole e al mattino li ricorderemo.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "DAL PIÙ GRANDE AL PIÙ PICCOLO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In, on e at dipendono da quanto è lungo il periodo di tempo. Immagina un imbuto: in per i periodi lunghi, on per i giorni, at per i momenti precisi.",
        },
        {
          tipo: "tabella",
          righe: [
            ["in", "mesi, anni, stagioni, secoli"],
            ["on", "giorni e date"],
            ["at", "orari e momenti precisi"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "in July, in 2010, in winter", it: "a luglio, nel 2010, d'inverno" },
            { en: "on Monday, on 5th May", it: "lunedì, il 5 maggio" },
            { en: "at 7 o'clock, at noon", it: "alle 7, a mezzogiorno" },
          ],
        },
      ],
    },
    {
      titolo: "IN",
      blocchi: [
        {
          tipo: "testo",
          testo: "In si usa per i periodi lunghi e per le parti del giorno:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "in March", it: "a marzo" },
            { en: "in 1999", it: "nel 1999" },
            { en: "in the summer", it: "d'estate" },
            { en: "in the 19th century", it: "nell'Ottocento" },
            { en: "in the morning / afternoon / evening", it: "di mattina / pomeriggio / sera" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Eccezione: di notte si dice at night, non in the night.",
        },
      ],
    },
    {
      titolo: "ON",
      blocchi: [
        {
          tipo: "testo",
          testo: "On si usa per i giorni della settimana, le date e i giorni speciali:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "on Friday", it: "venerdì" },
            { en: "on 25th December", it: "il 25 dicembre" },
            { en: "on my birthday", it: "il giorno del mio compleanno" },
            { en: "on Monday morning", it: "lunedì mattina" },
          ],
        },
        {
          tipo: "testo",
          testo: "Con i giorni al plurale indica un'abitudine:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I play tennis on Saturdays.", it: "Gioco a tennis il sabato." },
          ],
        },
      ],
    },
    {
      titolo: "AT",
      blocchi: [
        {
          tipo: "testo",
          testo: "At si usa per gli orari e i momenti precisi:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "at 8:30", it: "alle 8:30" },
            { en: "at midnight", it: "a mezzanotte" },
            { en: "at night", it: "di notte" },
            { en: "at the moment", it: "in questo momento" },
            { en: "at the weekend", it: "nel fine settimana" },
          ],
        },
        {
          tipo: "testo",
          testo: "E per le feste, se intendi il periodo e non il singolo giorno:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "at Christmas", it: "a Natale (nel periodo)" },
            { en: "on Christmas Day", it: "il giorno di Natale" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "At the weekend è britannico; in America si dice on the weekend.",
        },
      ],
    },
    {
      titolo: "NESSUNA PREPOSIZIONE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Davanti a next, last, this, every, today, tomorrow e yesterday non si mette nessuna preposizione:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "on next Monday", sbagliato: true },
            { en: "next Monday", it: "lunedì prossimo" },
            { en: "last year", it: "l'anno scorso" },
            { en: "this morning", it: "stamattina" },
            { en: "every day", it: "ogni giorno" },
          ],
        },
      ],
    },
    {
      titolo: "IN, AT E ON PER I LUOGHI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le stesse preposizioni si usano anche per i luoghi, con la stessa logica: in per gli spazi chiusi o grandi, on per le superfici, at per un punto preciso.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "in London, in the kitchen", it: "a Londra, in cucina" },
            { en: "on the table, on the wall", it: "sul tavolo, sul muro" },
            { en: "at the station, at school", it: "alla stazione, a scuola" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Per le città si usa in, non at: \"I live in Rome\". At si usa per indirizzi precisi: \"at 10 Downing Street\".",
        },
      ],
    },
    {
      titolo: "IN O AFTER?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In + un periodo può significare \"tra\", cioè da adesso a un momento futuro:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'll be back in ten minutes.", it: "Torno tra dieci minuti." },
            { en: "The film starts in an hour.", it: "Il film inizia tra un'ora." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Per \"tra dieci minuti\" non si usa between: between significa \"tra\" solo nel senso di \"in mezzo a\" due cose.",
        },
      ],
    },
  ],
};
