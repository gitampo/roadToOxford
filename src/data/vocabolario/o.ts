import { Voce } from "@/types/vocabolario";

export const O: Voce[] = [
  {
    id: "own",
    parola: "own",
    fonetica: "/əʊn/",
    descrizione: "Che appartiene a qualcuno: proprio.",
    usi: [
      {
        categoria: "aggettivo",
        dettaglio: "dopo un possessivo",
        significati: [
          {
            traduzioni: ["proprio", "mio, tuo, suo..."],
            esempi: [
              { en: "I want my own room.", it: "Voglio una stanza tutta mia." },
              { en: "She runs her own business.", it: "Ha un'attività tutta sua." },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "owns · owned · owned · owning",
        significati: [
          {
            traduzioni: ["possedere", "essere proprietario di"],
            esempi: [{ en: "Who owns this car?", it: "Di chi è questa macchina?" }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "on my own",
        significati: [
          {
            traduzioni: ["da solo"],
            esempi: [
              { en: "I live on my own.", it: "Vivo da solo." },
              { en: "She did it on her own.", it: "L'ha fatto da sola." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Own va sempre dopo un possessivo: my own, her own. Mai an own house: si dice a house of my own.",
      "Il proprietario è owner.",
    ],
  },
  {
    id: "occasion",
    parola: "occasion",
    fonetica: "/əˈkeɪʒn/",
    descrizione: "Falso amico: significa \"evento, circostanza\", non \"occasione\" nel senso di opportunità.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un momento particolare",
            traduzioni: ["occasione", "volta", "circostanza"],
            esempi: [{ en: "I've met him on several occasions.", it: "L'ho incontrato in diverse occasioni." }],
          },
          {
            indicazione: "un evento speciale",
            traduzioni: ["evento", "ricorrenza"],
            esempi: [{ en: "This dress is perfect for a special occasion.", it: "Questo vestito è perfetto per un evento speciale." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "occasione (opportunità, affare)",
      spiegazione:
        "L'occasione come opportunità è chance o opportunity; l'occasione come affare è bargain: These shoes were a bargain!",
    },
    attenzione: [
      "Occasionally vuol dire \"ogni tanto\", non \"occasionalmente\" nel senso di per caso: I occasionally eat meat.",
    ],
  },
  {
    id: "offer",
    parola: "offer",
    fonetica: "/ˈɒfə(r)/",
    descrizione: "Proporre di dare o di fare qualcosa: offrire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "offers · offered · offered · offering",
        significati: [
          {
            indicazione: "dare",
            traduzioni: ["offrire"],
            esempi: [
              { en: "They offered me a job.", it: "Mi hanno offerto un lavoro." },
              { en: "Can I offer you a drink?", it: "Posso offrirti qualcosa da bere?" },
            ],
          },
          {
            indicazione: "+ to: proporsi",
            traduzioni: ["offrirsi di"],
            esempi: [{ en: "He offered to drive me home.", it: "Si è offerto di riaccompagnarmi a casa." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "una proposta",
            traduzioni: ["offerta", "proposta"],
            esempi: [{ en: "Thanks for the offer.", it: "Grazie della proposta." }],
          },
          {
            indicazione: "in un negozio",
            traduzioni: ["offerta", "promozione"],
            esempi: [{ en: "Strawberries are on offer this week.", it: "Questa settimana le fragole sono in offerta." }],
          },
        ],
      },
    ],
    attenzione: [
      "Offrire da bere o da mangiare pagando per qualcuno è buy: Let me buy you a coffee (ti offro un caffè). It's on me = offro io.",
      "Offrirsi di fare è offer to + verbo: She offered to help.",
    ],
    lezioni: [{ id: "28", riquadro: 3 }],
  },
  {
    id: "order",
    parola: "order",
    fonetica: "/ˈɔːdə(r)/",
    descrizione: "La disposizione di cose una dopo l'altra: ordine; anche un'ordinazione.",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "una sequenza",
            traduzioni: ["ordine"],
            esempi: [{ en: "The names are in alphabetical order.", it: "I nomi sono in ordine alfabetico." }],
          },
          {
            indicazione: "un comando",
            traduzioni: ["ordine", "comando"],
            esempi: [{ en: "The soldiers were given orders to wait.", it: "Ai soldati fu ordinato di aspettare." }],
          },
          {
            indicazione: "al ristorante, in un negozio",
            traduzioni: ["ordinazione", "ordine"],
            esempi: [{ en: "Can I take your order?", it: "Posso prendere l'ordinazione?" }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "orders · ordered · ordered · ordering",
        significati: [
          {
            indicazione: "cibo, merce",
            traduzioni: ["ordinare"],
            esempi: [{ en: "I ordered a pizza.", it: "Ho ordinato una pizza." }],
          },
          {
            indicazione: "comandare",
            traduzioni: ["ordinare"],
            esempi: [{ en: "The doctor ordered him to rest.", it: "Il medico gli ha ordinato di riposare." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "in order to",
        significati: [
          {
            traduzioni: ["per", "allo scopo di"],
            etichette: ["formale"],
            esempi: [{ en: "She moved to London in order to study.", it: "Si è trasferita a Londra per studiare." }],
          },
        ],
      },
      {
        testo: "out of order",
        significati: [
          {
            traduzioni: ["guasto", "fuori servizio"],
            esempi: [{ en: "The lift is out of order.", it: "L'ascensore è fuori servizio." }],
          },
        ],
      },
    ],
    attenzione: [
      "Mettere in ordine una stanza non è order ma tidy (up): Tidy your room!",
    ],
  },
  {
    id: "owe",
    parola: "owe",
    fonetica: "/əʊ/",
    descrizione: "Dover dare soldi (o qualcos'altro) a qualcuno: dovere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "owes · owed · owed · owing",
        significati: [
          {
            indicazione: "soldi",
            traduzioni: ["dovere"],
            esempi: [
              { en: "I owe you £10.", it: "Ti devo 10 sterline." },
              { en: "How much do I owe you?", it: "Quanto ti devo?" },
            ],
          },
          {
            indicazione: "un favore, la riconoscenza",
            traduzioni: ["dovere", "essere debitore di"],
            esempi: [
              { en: "Thanks, I owe you one!", it: "Grazie, ti devo un favore!" },
              { en: "I owe my success to my teachers.", it: "Devo il mio successo ai miei insegnanti." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Dovere nel senso di obbligo (devo andare) non è owe ma must o have to. Owe è solo \"essere in debito\".",
      "Owing to (formale) vuol dire \"a causa di\": The match was cancelled owing to the rain.",
    ],
  },
];
