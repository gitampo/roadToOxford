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
          testo: "In, on o at?",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni espressione alla preposizione giusta.",
          coppie: [
            ["July", "in"],
            ["Monday", "on"],
            ["7 o'clock", "at"],
          ],
          spiegazione:
            "Pensa all'imbuto: in per i periodi lunghi, on per i giorni, at per i momenti precisi.",
          rivedi: "DAL PIÙ GRANDE AL PIÙ PICCOLO",
        },
        {
          tipo: "completa",
          consegna: "Completa con in, on o at.",
          prima: "I was born",
          dopo: "1999.",
          risposte: ["in"],
          spiegazione: "Anni, mesi, stagioni e secoli vogliono in.",
          rivedi: "IN",
        },
        {
          tipo: "completa",
          consegna: "Completa con in, on o at.",
          prima: "My birthday is",
          dopo: "25th December.",
          risposte: ["on"],
          spiegazione: "Le date e i giorni vogliono on.",
          rivedi: "ON",
        },
        {
          tipo: "completa",
          consegna: "Completa con in, on o at.",
          prima: "The film starts",
          dopo: "8:30.",
          risposte: ["at"],
          spiegazione: "Gli orari vogliono at.",
          rivedi: "AT",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"di notte\"?",
          opzioni: ["in the night", "at night", "on the night"],
          giusta: 1,
          spiegazione:
            "Le parti del giorno vogliono in (in the morning, in the evening), ma la notte è un'eccezione: at night.",
          rivedi: "IN",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"lunedì mattina\"?",
          opzioni: ["in Monday morning", "on Monday morning", "at Monday morning"],
          giusta: 1,
          spiegazione: "Quando c'è il nome del giorno, vince on: on Monday morning.",
          rivedi: "ON",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase indica un'abitudine?",
          opzioni: ["I play tennis on Saturday.", "I play tennis on Saturdays."],
          giusta: 1,
          spiegazione: "Con il giorno al plurale si intende \"ogni sabato\": è un'abitudine.",
          rivedi: "ON",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Vai dai nonni durante le feste di Natale. Come lo dici?",
          opzioni: ["at Christmas", "on Christmas", "in Christmas"],
          giusta: 0,
          spiegazione:
            "At Christmas indica il periodo; on Christmas Day solo il giorno del 25.",
          rivedi: "AT",
        },
        {
          tipo: "sottotitolo",
          testo: "Nessuna preposizione",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le espressioni corrette.",
          parole: ["next Monday", "on next Monday", "last year", "in last year", "this morning", "in this morning", "every day"],
          giuste: [0, 2, 4, 6],
          spiegazione: "Davanti a next, last, this ed every non si mette nessuna preposizione.",
          rivedi: "NESSUNA PREPOSIZIONE",
        },
        {
          tipo: "sottotitolo",
          testo: "Luoghi e \"tra\"",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["I live at Rome.", "I live in Rome.", "I live on Rome."],
          giusta: 1,
          spiegazione: "Per le città si usa in. At è per un punto preciso, come un indirizzo o la stazione.",
          rivedi: "IN, AT E ON PER I LUOGHI",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"La foto è sul muro\".",
          prima: "The photo is",
          dopo: "the wall.",
          risposte: ["on"],
          spiegazione: "On per le superfici: on the table, on the wall.",
          rivedi: "IN, AT E ON PER I LUOGHI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Torno tra dieci minuti\"?",
          opzioni: [
            "I'll be back between ten minutes.",
            "I'll be back in ten minutes.",
            "I'll be back after ten minutes.",
          ],
          giusta: 1,
          spiegazione:
            "In + periodo significa \"tra\", da adesso a un momento futuro. Between è \"tra\" solo nel senso di \"in mezzo a\".",
          rivedi: "IN O AFTER?",
        },
        {
          tipo: "sottotitolo",
          testo: "Traduci",
        },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi la tua versione e confrontala con quella proposta.",
        },
        {
          tipo: "traduci",
          consegna: "Traduci in inglese.",
          testo: "Il sabato mattina vado in palestra alle nove. Lunedì prossimo inizio un corso: finisce a giugno.",
          soluzione:
            "On Saturday mornings I go to the gym at nine. Next Monday I start a course: it finishes in June.",
          spiegazione:
            "Controlla: on Saturday mornings (giorno, al plurale per l'abitudine), at nine, next Monday senza preposizione, in June.",
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
