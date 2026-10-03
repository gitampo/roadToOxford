import { Voce } from "@/types/vocabolario";

export const R: Voce[] = [
  {
    id: "record",
    parola: "record",
    fonetica: "/ˈrekɔːd/",
    descrizione: "Una traccia scritta di fatti o dati, conservata per il futuro.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "informazioni scritte e conservate",
            traduzioni: ["registro", "documentazione", "traccia"],
            esempi: [
              {
                en: "We keep a record of every payment.",
                it: "Teniamo traccia di ogni pagamento.",
              },
            ],
          },
          {
            indicazione: "nello sport",
            traduzioni: ["record", "primato"],
            esempi: [
              {
                en: "She broke the world record in the 400 metres.",
                it: "Ha battuto il record del mondo nei 400 metri.",
              },
            ],
          },
          {
            indicazione: "di musica, in vinile",
            traduzioni: ["disco"],
            esempi: [
              {
                en: "My dad still collects old records.",
                it: "Mio padre colleziona ancora vecchi dischi.",
              },
            ],
          },
          {
            indicazione: "il passato di una persona",
            traduzioni: ["precedenti", "curriculum"],
            esempi: [
              {
                en: "He has a criminal record.",
                it: "Ha precedenti penali.",
              },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        fonetica: "/rɪˈkɔːd/",
        forme: "records · recorded · recorded · recording",
        significati: [
          {
            indicazione: "suoni o immagini",
            traduzioni: ["registrare", "incidere"],
            esempi: [
              {
                en: "The band recorded their first album in a week.",
                it: "La band ha registrato il primo album in una settimana.",
              },
            ],
          },
          {
            indicazione: "prendere nota",
            traduzioni: ["annotare", "registrare"],
            esempi: [
              {
                en: "The nurse recorded his temperature every hour.",
                it: "L'infermiera annotava la sua temperatura ogni ora.",
              },
            ],
          },
        ],
      },
      {
        categoria: "aggettivo",
        dettaglio: "solo davanti al nome",
        significati: [
          {
            indicazione: "mai visto prima",
            traduzioni: ["record", "da record"],
            esempi: [
              {
                en: "Prices reached a record high last year.",
                it: "L'anno scorso i prezzi hanno raggiunto un livello record.",
              },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "off the record",
        significati: [
          {
            traduzioni: ["in via ufficiosa", "detto tra noi"],
            esempi: [
              {
                en: "Off the record, I think he's wrong.",
                it: "Detto tra noi, credo che abbia torto.",
              },
            ],
          },
        ],
      },
      {
        testo: "for the record",
        significati: [
          {
            traduzioni: ["per la cronaca", "tanto per chiarire"],
            esempi: [
              {
                en: "For the record, I never agreed to this.",
                it: "Per la cronaca, io non sono mai stato d'accordo.",
              },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "L'accento si sposta: come nome e aggettivo cade sulla prima sillaba (a REcord), come verbo sulla seconda (to reCORD). Succede lo stesso con present, object, increase, permit, export.",
    ],
    lezioni: [{ id: "57", riquadro: 2 }],
  },
  {
    id: "run",
    parola: "run",
    fonetica: "/rʌn/",
    descrizione: "Muoversi velocemente a piedi, più in fretta che camminando.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "runs · ran · run · running",
        significati: [
          {
            indicazione: "muoversi velocemente a piedi",
            traduzioni: ["correre"],
            esempi: [
              {
                en: "She runs every morning before work.",
                it: "Corre ogni mattina prima del lavoro.",
              },
            ],
          },
          {
            indicazione: "di una macchina, un motore",
            traduzioni: ["funzionare", "andare", "essere acceso"],
            esempi: [
              {
                en: "Don't touch the engine while it's running.",
                it: "Non toccare il motore mentre è acceso.",
              },
            ],
          },
          {
            indicazione: "di autobus e treni, secondo l'orario",
            traduzioni: ["passare", "circolare"],
            esempi: [
              {
                en: "The buses run every ten minutes.",
                it: "Gli autobus passano ogni dieci minuti.",
              },
            ],
          },
          {
            indicazione: "di un liquido",
            traduzioni: ["scorrere", "colare"],
            esempi: [
              {
                en: "Tears were running down her face.",
                it: "Le lacrime le scorrevano sul viso.",
              },
            ],
          },
          {
            indicazione: "di uno spettacolo, un contratto",
            traduzioni: ["durare", "restare in scena"],
            esempi: [
              {
                en: "The play ran for three years in London.",
                it: "Lo spettacolo è rimasto in scena per tre anni a Londra.",
              },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        significati: [
          {
            indicazione: "un'attività, un'azienda",
            traduzioni: ["gestire", "dirigere"],
            esempi: [
              {
                en: "My parents run a small hotel in Devon.",
                it: "I miei genitori gestiscono un piccolo albergo nel Devon.",
              },
            ],
          },
          {
            indicazione: "un programma, una prova",
            traduzioni: ["eseguire", "far girare"],
            etichette: ["informatica"],
            esempi: [
              {
                en: "Can you run the program again?",
                it: "Puoi eseguire di nuovo il programma?",
              },
            ],
          },
          {
            indicazione: "un bagno",
            traduzioni: ["preparare"],
            esempi: [
              { en: "I'll run you a bath.", it: "Ti preparo il bagno." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "l'azione di correre",
            traduzioni: ["corsa"],
            esempi: [
              {
                en: "I go for a run every Sunday.",
                it: "Ogni domenica vado a correre.",
              },
            ],
          },
          {
            indicazione: "una serie di cose uguali",
            traduzioni: ["serie", "periodo"],
            esempi: [
              {
                en: "The team has had a run of bad luck.",
                it: "La squadra ha avuto un periodo di sfortuna.",
              },
            ],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "run out (of)",
        significati: [
          {
            traduzioni: ["finire", "rimanere senza"],
            esempi: [
              {
                en: "We've run out of milk.",
                it: "Siamo rimasti senza latte.",
              },
            ],
          },
        ],
      },
      {
        testo: "run into",
        significati: [
          {
            indicazione: "una persona",
            traduzioni: ["incontrare per caso", "imbattersi in"],
            esempi: [
              {
                en: "I ran into an old friend at the station.",
                it: "Ho incontrato per caso un vecchio amico in stazione.",
              },
            ],
          },
        ],
      },
      {
        testo: "run away",
        significati: [
          {
            traduzioni: ["scappare"],
            esempi: [
              { en: "The dog ran away.", it: "Il cane è scappato." },
            ],
          },
        ],
      },
      {
        testo: "run over",
        significati: [
          {
            indicazione: "con un veicolo",
            traduzioni: ["investire"],
            esempi: [
              {
                en: "He was nearly run over by a bus.",
                it: "Per poco non è stato investito da un autobus.",
              },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "in the long run",
        significati: [
          {
            traduzioni: ["alla lunga", "a lungo andare"],
            esempi: [
              {
                en: "It will save you money in the long run.",
                it: "Alla lunga ti farà risparmiare.",
              },
            ],
          },
        ],
      },
      {
        testo: "be running late",
        significati: [
          {
            traduzioni: ["essere in ritardo"],
            esempi: [
              {
                en: "I'm running late, start without me.",
                it: "Sono in ritardo, cominciate senza di me.",
              },
            ],
          },
        ],
      },
      {
        testo: "on the run",
        significati: [
          {
            traduzioni: ["in fuga", "latitante"],
            esempi: [
              {
                en: "The prisoner is still on the run.",
                it: "Il detenuto è ancora in fuga.",
              },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Il participio passato è run, uguale al presente: I have run, non I have ran.",
      "\"Vado a correre\" si dice I go running o I go for a run, non I go to run.",
    ],
    lezioni: [
      { id: "46", riquadro: 6 },
      { id: "56", riquadro: 1 },
    ],
  },
];
