import { Voce } from "@/types/vocabolario";

export const I: Voce[] = [
  {
    id: "information",
    parola: "information",
    fonetica: "/ˌɪnfəˈmeɪʃn/",
    descrizione: "Notizie o dati su qualcosa: informazioni.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            traduzioni: ["informazioni", "informazione"],
            esempi: [
              { en: "Can you give me some information about the course?", it: "Mi può dare qualche informazione sul corso?" },
              { en: "That's a useful piece of information.", it: "È un'informazione utile." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Information è non numerabile: niente plurale e niente an. Un'informazione = a piece of information; tante informazioni = a lot of information.",
      "Il verbo va al singolare: The information is correct, non The information are correct.",
    ],
    lezioni: [{ id: "17", riquadro: 6 }],
  },
  {
    id: "ignore",
    parola: "ignore",
    fonetica: "/ɪɡˈnɔː(r)/",
    descrizione: "Falso amico: significa \"non dare retta, non considerare\", non \"non sapere\".",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "ignores · ignored · ignored · ignoring",
        significati: [
          {
            traduzioni: ["ignorare", "non considerare", "non dare retta a"],
            esempi: [
              { en: "She ignored me all evening.", it: "Mi ha ignorato tutta la sera." },
              { en: "Don't ignore the warning signs.", it: "Non trascurare i segnali di pericolo." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "ignorare (non sapere)",
      spiegazione:
        "Ignore vuol dire fare finta di non vedere o sentire. \"Ignoro la risposta\" nel senso di non saperla è I don't know the answer.",
    },
    attenzione: [
      "Ignorant vuol dire che non sa (be ignorant of = non sapere); in tono offensivo è \"ignorante, maleducato\".",
    ],
  },
  {
    id: "improve",
    parola: "improve",
    fonetica: "/ɪmˈpruːv/",
    descrizione: "Rendere o diventare migliore: migliorare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "improves · improved · improved · improving",
        significati: [
          {
            traduzioni: ["migliorare", "perfezionare"],
            esempi: [
              { en: "I want to improve my English.", it: "Voglio migliorare il mio inglese." },
              { en: "The weather is improving.", it: "Il tempo sta migliorando." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Il nome è improvement: There's been a big improvement in your writing.",
      "Non confonderlo con improvise (improvvisare).",
    ],
  },
  {
    id: "include",
    parola: "include",
    fonetica: "/ɪnˈkluːd/",
    descrizione: "Avere come parte di un insieme: includere, comprendere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "includes · included · included · including",
        significati: [
          {
            traduzioni: ["includere", "comprendere"],
            esempi: [
              { en: "Breakfast is included in the price.", it: "La colazione è compresa nel prezzo." },
              { en: "The team includes three Italians.", it: "Nella squadra ci sono tre italiani." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Including (preposizione) vuol dire \"compreso, tra cui\": Six people came, including my sister.",
      "Il contrario è exclude; \"escluso\" si dice excluding o not included.",
    ],
  },
  {
    id: "injury",
    parola: "injury",
    fonetica: "/ˈɪndʒəri/",
    descrizione: "Falso amico: significa \"ferita, lesione\", non \"ingiuria\".",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            traduzioni: ["ferita", "lesione", "infortunio"],
            esempi: [
              { en: "He missed the match because of an injury.", it: "Ha saltato la partita per un infortunio." },
              { en: "Nobody suffered serious injuries.", it: "Nessuno ha riportato ferite gravi." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "ingiuria",
      spiegazione: "L'ingiuria (un'offesa a parole) è insult: He shouted insults at the referee.",
    },
    attenzione: [
      "Il verbo è injure (ferire), l'aggettivo injured (ferito): Two people were injured in the accident.",
    ],
  },
  {
    id: "issue",
    parola: "issue",
    fonetica: "/ˈɪʃuː/",
    descrizione: "Un argomento importante da discutere, o un problema.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un argomento di discussione",
            traduzioni: ["questione", "tema", "problema"],
            esempi: [
              { en: "Climate change is a global issue.", it: "Il cambiamento climatico è una questione globale." },
              { en: "That's not the issue.", it: "Il punto non è questo." },
            ],
          },
          {
            indicazione: "un problema pratico",
            traduzioni: ["problema", "difficoltà"],
            etichette: ["informale"],
            esempi: [{ en: "We had some issues with the internet.", it: "Abbiamo avuto qualche problema con internet." }],
          },
          {
            indicazione: "di una rivista",
            traduzioni: ["numero", "uscita"],
            esempi: [{ en: "Have you read this month's issue?", it: "Hai letto il numero di questo mese?" }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "issues · issued · issued · issuing",
        significati: [
          {
            traduzioni: ["emettere", "rilasciare", "pubblicare"],
            etichette: ["formale"],
            esempi: [{ en: "The police issued a warning.", it: "La polizia ha diramato un avviso." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "raise an issue",
        significati: [
          {
            traduzioni: ["sollevare una questione"],
            esempi: [{ en: "She raised an important issue at the meeting.", it: "Alla riunione ha sollevato una questione importante." }],
          },
        ],
      },
    ],
    attenzione: [
      "Si pronuncia /ˈɪʃuː/ in Gran Bretagna (anche /ˈɪsjuː/): la ss suona come sc di scena.",
      "Nei saggi issue è più neutro di problem: The essay discusses the issue of identity.",
    ],
  },
];
