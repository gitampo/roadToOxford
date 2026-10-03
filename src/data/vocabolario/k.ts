import { Voce } from "@/types/vocabolario";

export const K: Voce[] = [
  {
    id: "keep",
    parola: "keep",
    fonetica: "/kiːp/",
    descrizione: "Tenere qualcosa, o continuare a fare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "keeps · kept · kept · keeping",
        significati: [
          {
            indicazione: "non dare via",
            traduzioni: ["tenere", "tenersi"],
            esempi: [{ en: "You can keep the change.", it: "Tenga il resto." }],
          },
          {
            indicazione: "in un posto",
            traduzioni: ["tenere", "conservare"],
            esempi: [{ en: "Keep the milk in the fridge.", it: "Tieni il latte in frigo." }],
          },
          {
            indicazione: "una promessa, un segreto",
            traduzioni: ["mantenere"],
            esempi: [{ en: "Can you keep a secret?", it: "Sai mantenere un segreto?" }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        significati: [
          {
            indicazione: "+ -ing",
            traduzioni: ["continuare a"],
            esempi: [
              { en: "Keep walking.", it: "Continua a camminare." },
              { en: "He keeps calling me.", it: "Continua a chiamarmi." },
            ],
          },
          {
            indicazione: "+ aggettivo",
            traduzioni: ["stare", "rimanere"],
            esempi: [
              { en: "Keep calm.", it: "Stai calmo." },
              { en: "Keep quiet!", it: "Stai zitto!" },
            ],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "keep on",
        significati: [
          {
            traduzioni: ["continuare a"],
            esempi: [{ en: "She kept on talking.", it: "Ha continuato a parlare." }],
          },
        ],
      },
      {
        testo: "keep up (with)",
        significati: [
          {
            traduzioni: ["stare al passo (con)"],
            esempi: [{ en: "Slow down, I can't keep up with you!", it: "Rallenta, non riesco a starti dietro!" }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "keep in touch",
        significati: [
          {
            traduzioni: ["restare in contatto", "sentirsi"],
            esempi: [{ en: "Let's keep in touch!", it: "Teniamoci in contatto!" }],
          },
        ],
      },
    ],
    attenzione: ["Dopo keep si usa -ing: keep trying, non keep to try."],
    lezioni: [
      { id: "47", riquadro: 2 },
      { id: "56", riquadro: 1 },
    ],
  },
  {
    id: "know",
    parola: "know",
    fonetica: "/nəʊ/",
    descrizione: "Sapere un'informazione, o conoscere qualcuno.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "knows · knew · known · knowing",
        significati: [
          {
            indicazione: "fatti, informazioni",
            traduzioni: ["sapere"],
            esempi: [
              { en: "I don't know the answer.", it: "Non so la risposta." },
              { en: "Do you know where the station is?", it: "Sai dov'è la stazione?" },
            ],
          },
          {
            indicazione: "persone, luoghi",
            traduzioni: ["conoscere"],
            esempi: [
              { en: "Do you know Mark?", it: "Conosci Mark?" },
              { en: "I know London very well.", it: "Conosco molto bene Londra." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "you know",
        significati: [
          {
            indicazione: "nel parlato, per riempire",
            traduzioni: ["sai", "cioè"],
            esempi: [{ en: "It was, you know, a bit strange.", it: "Era, sai, un po' strano." }],
          },
        ],
      },
      {
        testo: "as far as I know",
        significati: [
          {
            traduzioni: ["per quanto ne so"],
            esempi: [{ en: "As far as I know, she's still in Paris.", it: "Per quanto ne so, è ancora a Parigi." }],
          },
        ],
      },
    ],
    attenzione: [
      "Sapere fare qualcosa è can, non know: I can swim, non I know swim.",
      "Conoscere qualcuno per la prima volta è meet: I met him in 2020 = l'ho conosciuto nel 2020. I knew him in 2020 vuol dire che lo conoscevo già.",
      "La k iniziale è muta: know si pronuncia /nəʊ/, come no.",
    ],
    lezioni: [
      { id: "25", riquadro: 1 },
      { id: "57", riquadro: 6 },
    ],
  },
  {
    id: "kind",
    parola: "kind",
    fonetica: "/kaɪnd/",
    descrizione: "Gentile con gli altri; come nome, tipo.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["gentile", "buono", "premuroso"],
            esempi: [
              { en: "That's very kind of you.", it: "È molto gentile da parte tua." },
              { en: "She's always kind to animals.", it: "È sempre buona con gli animali." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["tipo", "genere", "specie"],
            esempi: [
              { en: "What kind of music do you like?", it: "Che genere di musica ti piace?" },
              { en: "There are all kinds of shops here.", it: "Qui ci sono negozi di ogni tipo." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "kind of",
        significati: [
          {
            traduzioni: ["un po'", "abbastanza", "tipo"],
            etichette: ["informale"],
            esempi: [{ en: "I'm kind of tired.", it: "Sono un po' stanco." }],
          },
        ],
      },
      {
        testo: "Would you be kind enough to...?",
        significati: [
          {
            traduzioni: ["Sarebbe così gentile da...?"],
            etichette: ["formale"],
            esempi: [{ en: "Would you be kind enough to close the door?", it: "Sarebbe così gentile da chiudere la porta?" }],
          },
        ],
      },
    ],
    attenzione: [
      "Gentile con qualcuno è kind to (o nice to), non kind with.",
      "Kind è la parola giusta per \"gentile\"; gentle vuol dire delicato.",
    ],
    lezioni: [{ id: "53", riquadro: 3 }],
  },
];
