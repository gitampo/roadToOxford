import { Voce } from "@/types/vocabolario";

export const G: Voce[] = [
  {
    id: "get",
    parola: "get",
    fonetica: "/ɡet/",
    descrizione: "Ricevere o procurarsi qualcosa.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "gets · got · got (US gotten) · getting",
        significati: [
          {
            indicazione: "ricevere",
            traduzioni: ["ricevere"],
            esempi: [
              {
                en: "I got a letter from the university this morning.",
                it: "Stamattina ho ricevuto una lettera dall'università.",
              },
            ],
          },
          {
            indicazione: "procurarsi, comprare",
            traduzioni: ["prendere", "procurarsi", "comprare"],
            esempi: [
              {
                en: "Can you get some bread on your way home?",
                it: "Puoi prendere del pane tornando a casa?",
              },
            ],
          },
          {
            indicazione: "andare a prendere qualcuno o qualcosa",
            traduzioni: ["andare a prendere"],
            esempi: [
              {
                en: "I'll get the children from school.",
                it: "Vado io a prendere i bambini a scuola.",
              },
            ],
          },
          {
            indicazione: "capire",
            traduzioni: ["capire"],
            etichette: ["informale"],
            esempi: [
              {
                en: "Sorry, I don't get the joke.",
                it: "Scusa, non capisco la battuta.",
              },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        significati: [
          {
            indicazione: "+ aggettivo: cambiare stato",
            traduzioni: ["diventare", "farsi"],
            esempi: [
              { en: "It's getting dark.", it: "Si sta facendo buio." },
              {
                en: "She got angry when she saw the bill.",
                it: "Si è arrabbiata quando ha visto il conto.",
              },
            ],
          },
          {
            indicazione: "raggiungere un luogo",
            traduzioni: ["arrivare"],
            esempi: [
              {
                en: "What time did you get home last night?",
                it: "A che ora sei arrivato a casa ieri sera?",
              },
            ],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "get up",
        significati: [
          {
            traduzioni: ["alzarsi"],
            esempi: [{ en: "I get up at seven.", it: "Mi alzo alle sette." }],
          },
        ],
      },
      {
        testo: "get on with",
        significati: [
          {
            indicazione: "una persona",
            traduzioni: ["andare d'accordo con"],
            esempi: [
              {
                en: "I get on well with my sister.",
                it: "Vado d'accordo con mia sorella.",
              },
            ],
          },
        ],
      },
      {
        testo: "get over",
        significati: [
          {
            indicazione: "una malattia, una delusione",
            traduzioni: ["superare", "riprendersi da"],
            esempi: [
              {
                en: "It took her months to get over the break-up.",
                it: "Le ci sono voluti mesi per superare la rottura.",
              },
            ],
          },
        ],
      },
      {
        testo: "get away with",
        significati: [
          {
            traduzioni: ["farla franca"],
            esempi: [
              {
                en: "He cheated in the exam and got away with it.",
                it: "Ha copiato all'esame e l'ha fatta franca.",
              },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "have got",
        significati: [
          {
            indicazione: "possedere",
            traduzioni: ["avere"],
            etichette: ["UK"],
            esempi: [
              { en: "I've got two sisters.", it: "Ho due sorelle." },
            ],
          },
        ],
      },
      {
        testo: "get used to",
        significati: [
          {
            traduzioni: ["abituarsi a"],
            esempi: [
              {
                en: "You'll soon get used to the English weather.",
                it: "Ti abituerai presto al clima inglese.",
              },
            ],
          },
        ],
      },
      {
        testo: "get rid of",
        significati: [
          {
            traduzioni: ["sbarazzarsi di", "liberarsi di"],
            esempi: [
              {
                en: "We need to get rid of these old boxes.",
                it: "Dobbiamo sbarazzarci di queste vecchie scatole.",
              },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Molti verbi riflessivi italiani in inglese si fanno con get: alzarsi (get up), vestirsi (get dressed), sposarsi (get married), perdersi (get lost). Mai I get up me.",
      "Get è informale. Nello scritto formale si preferiscono receive, obtain, become, arrive: I received your email, non I got your email.",
    ],
    lezioni: [
      { id: "6", riquadro: 1 },
      { id: "10", riquadro: 7 },
      { id: "38", riquadro: 5 },
      { id: "46", riquadro: 2 },
      { id: "53", riquadro: 1 },
    ],
  },
];
