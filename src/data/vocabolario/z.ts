import { Voce } from "@/types/vocabolario";

export const Z: Voce[] = [
  {
    id: "zero",
    parola: "zero",
    fonetica: "/ˈzɪərəʊ/",
    descrizione: "Il numero 0: zero.",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "il numero",
            traduzioni: ["zero"],
            esempi: [{ en: "Write down a number between zero and ten.", it: "Scrivi un numero tra zero e dieci." }],
          },
          {
            indicazione: "la temperatura",
            traduzioni: ["zero (gradi)"],
            esempi: [{ en: "It was five degrees below zero.", it: "Erano cinque gradi sotto zero." }],
          },
        ],
      },
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["zero", "nessuno"],
            esempi: [{ en: "There's zero chance of that happening.", it: "Non c'è nessuna possibilità che succeda." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "zero tolerance",
        significati: [
          {
            traduzioni: ["tolleranza zero"],
            esempi: [{ en: "The school has a zero-tolerance policy on bullying.", it: "La scuola ha una politica di tolleranza zero sul bullismo." }],
          },
        ],
      },
    ],
    attenzione: [
      "Lo 0 si legge in modi diversi a seconda del contesto. Nei numeri di telefono e nelle stanze d'albergo si dice oh, come la lettera O: 020 = oh two oh.",
      "Nel calcio e negli altri sport britannici lo 0 si dice nil: We won two–nil. Nel tennis si dice love: thirty–love.",
      "Nei numeri decimali britannici lo 0 si legge spesso nought: 0.5 = nought point five.",
    ],
    lezioni: [{ id: "8", riquadro: 1 }],
  },
  {
    id: "zip",
    parola: "zip",
    fonetica: "/zɪp/",
    descrizione: "La chiusura lampo di vestiti e borse: cerniera.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "su vestiti e borse",
            traduzioni: ["cerniera", "zip", "chiusura lampo"],
            etichette: ["UK"],
            esempi: [{ en: "The zip on my jacket is broken.", it: "La cerniera della giacca è rotta." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "zips · zipped · zipped · zipping",
        significati: [
          {
            indicazione: "chiudere con la cerniera",
            traduzioni: ["chiudere la cerniera di"],
            esempi: [{ en: "Zip up your coat, it's freezing.", it: "Chiudi la cerniera del cappotto, si gela." }],
          },
          {
            indicazione: "un file",
            traduzioni: ["comprimere", "zippare"],
            etichette: ["informatica"],
            esempi: [{ en: "I'll zip the files and email them to you.", it: "Comprimo i file e te li mando per email." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "zip code",
        significati: [
          {
            traduzioni: ["codice postale", "CAP"],
            etichette: ["US"],
            esempi: [{ en: "What's your zip code?", it: "Qual è il tuo CAP?" }],
          },
        ],
      },
    ],
    attenzione: [
      "In America la cerniera è zipper; in Gran Bretagna zip.",
      "Il CAP britannico è postcode (per esempio OX1 2JD a Oxford); zip code è americano.",
    ],
  },
  {
    id: "zone",
    parola: "zone",
    fonetica: "/zəʊn/",
    descrizione: "Un'area con caratteristiche o regole particolari: zona.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["zona", "area", "fascia"],
            esempi: [
              { en: "This is a no-parking zone.", it: "Questa è una zona di divieto di sosta." },
              { en: "London is in a different time zone from Rome.", it: "Londra ha un fuso orario diverso da Roma." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "time zone",
        significati: [
          {
            traduzioni: ["fuso orario"],
            esempi: [{ en: "We crossed three time zones.", it: "Abbiamo attraversato tre fusi orari." }],
          },
        ],
      },
      {
        testo: "comfort zone",
        significati: [
          {
            traduzioni: ["zona di comfort"],
            esempi: [{ en: "Studying abroad took me out of my comfort zone.", it: "Studiare all'estero mi ha fatto uscire dalla mia zona di comfort." }],
          },
        ],
      },
    ],
    attenzione: [
      "Per una zona della città nel parlato si usa più spesso area: I live in a quiet area. Zone suona tecnico o ufficiale.",
      "La metropolitana di Londra è divisa in zone tariffarie: zone 1 è il centro.",
    ],
  },
  {
    id: "zoom",
    parola: "zoom",
    fonetica: "/zuːm/",
    descrizione: "Muoversi molto veloce; nelle immagini, ingrandire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "zooms · zoomed · zoomed · zooming",
        significati: [
          {
            indicazione: "muoversi veloce",
            traduzioni: ["sfrecciare", "schizzare"],
            etichette: ["informale"],
            esempi: [{ en: "A motorbike zoomed past us.", it: "Una moto ci è sfrecciata accanto." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "di una macchina fotografica",
            traduzioni: ["zoom"],
            esempi: [{ en: "This camera has a powerful zoom.", it: "Questa macchina fotografica ha uno zoom potente." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "zoom in / zoom out",
        significati: [
          {
            traduzioni: ["ingrandire / rimpicciolire", "zoomare"],
            esempi: [{ en: "Zoom in on the map to see the street names.", it: "Ingrandisci la mappa per vedere i nomi delle vie." }],
          },
        ],
      },
    ],
    attenzione: [
      "Si pronuncia /zuːm/, con la u lunga di food, non come in italiano \"zum\" con la z dura di pizza.",
    ],
  },
];
