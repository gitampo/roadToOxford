import { Lezione } from "@/types/lezione";

export const pronunciation: Lezione = {
  id: "57",
  titolo: "Pronuncia e accento britannico",
  descrizione: "Suonare britannico",
  chiavi: "pronuncia, accento, RP",
  livello: "B2-C1",
  citazione: {
    testo: "The rain in Spain stays mainly in the plain.",
    fonte: "My Fair Lady",
    traduzione: "La pioggia in Spagna cade soprattutto in pianura.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "SCRITTURA E SUONO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano si legge come si scrive. In inglese no: la stessa lettera può avere molti suoni, e lo stesso suono molte grafie.",
        },
        {
          tipo: "tabella",
          righe: [
            ["though", "\"dou\""],
            ["through", "\"thru\""],
            ["tough", "\"taf\""],
            ["cough", "\"cof\""],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Quando impari una parola nuova, controlla sempre come si pronuncia. Il dizionario online ti fa anche sentire l'audio.",
        },
      ],
    },
    {
      titolo: "L'ACCENTO DI PAROLA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Sbagliare l'accento rende una parola irriconoscibile, più di un suono sbagliato. Le sillabe senza accento si riducono a un suono debole, la \"schwa\" /ə/.",
        },
        {
          tipo: "tabella",
          righe: [
            ["PHOtograph", "phoTOgrapher"],
            ["comFORtable", "si dice \"CAMF-ta-bl\""],
            ["VEGetable", "si dice \"VEJ-ta-bl\""],
            ["hoTEL", "accento alla fine"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Alcune coppie nome/verbo cambiano accento: a REcord (un disco), to reCORD (registrare).",
        },
      ],
    },
    {
      titolo: "I SUONI DIFFICILI PER GLI ITALIANI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["th sorda /θ/", "think, three: lingua tra i denti, soffia"],
            ["th sonora /ð/", "this, mother: lingua tra i denti, vibra"],
            ["h aspirata", "house, hotel: si sente un soffio"],
            ["vocali lunghe e brevi", "ship / sheep, full / fool"],
            ["w", "water, week: come la u di uomo"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I think", it: "Io penso" },
            { en: "I sink", it: "Io affondo (se sbagli la th!)" },
          ],
        },
      ],
    },
    {
      titolo: "L'ACCENTO BRITANNICO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'accento che si studia di solito si chiama RP (Received Pronunciation), o \"Standard Southern British\". È quello della BBC e di molti docenti di Oxford. Le differenze principali dall'americano:",
        },
        {
          tipo: "tabella",
          righe: [
            ["la r finale non si pronuncia", "car \"caa\", water \"uotə\""],
            ["a lunga in alcune parole", "bath, class, can't: \"baath\""],
            ["la t si pronuncia", "water, better: t vera, non \"d\""],
            ["o più aperta", "hot, stop"],
          ],
        },
      ],
    },
    {
      titolo: "L'ACCENTO DELLA FRASE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In una frase si accentano le parole importanti (nomi, verbi, aggettivi). Le parole grammaticali (a, the, to, of, can, was) diventano deboli e rapide:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I WANT to GO to the PARK.", it: "\"ai UONT tə GOU tə thə PAAK\"" },
            { en: "What do you want?", it: "\"UOT-djə-UONT\"" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "È per questo che l'inglese parlato sembra velocissimo: non tutte le parole hanno lo stesso peso.",
        },
      ],
    },
    {
      titolo: "LE LETTERE MUTE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["k davanti a n", "know, knife"],
            ["w davanti a r", "write, wrong"],
            ["b dopo m", "climb, bomb"],
            ["l in alcune parole", "walk, talk, half"],
            ["gh", "night, daughter"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Leicester", it: "si pronuncia \"LESS-tə\"" },
            { en: "Worcester", it: "si pronuncia \"UUS-tə\"" },
          ],
        },
      ],
    },
    {
      titolo: "COME MIGLIORARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La pronuncia migliora con l'ascolto e l'imitazione. Qualche metodo pratico:",
        },
        {
          tipo: "tabella",
          righe: [
            ["shadowing", "ripeti subito dopo un audio, imitando il ritmo"],
            ["registrarti", "ascolta la differenza con l'originale"],
            ["serie in lingua", "con sottotitoli in inglese, non in italiano"],
            ["podcast della BBC", "per abituarti all'accento britannico"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "L'obiettivo non è perdere del tutto l'accento italiano, ma farsi capire senza fatica.",
        },
      ],
    },
  ],
};
