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
      { id: "47", riquadro: 2 },
      { id: "54", riquadro: 1 },
    ],
  },
  {
    id: "give",
    parola: "give",
    fonetica: "/ɡɪv/",
    descrizione: "Dare qualcosa a qualcuno.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "gives · gave · given · giving",
        significati: [
          {
            indicazione: "passare una cosa a qualcuno",
            traduzioni: ["dare"],
            esempi: [
              { en: "Give me your hand.", it: "Dammi la mano." },
              { en: "Can you give this book to Sarah?", it: "Puoi dare questo libro a Sarah?" },
            ],
          },
          {
            indicazione: "come regalo",
            traduzioni: ["regalare"],
            esempi: [{ en: "What did they give you for your birthday?", it: "Cosa ti hanno regalato per il compleanno?" }],
          },
          {
            indicazione: "con nomi di azione",
            traduzioni: ["fare", "tenere"],
            esempi: [
              { en: "She gave a speech at the ceremony.", it: "Ha tenuto un discorso alla cerimonia." },
              { en: "Give me a call.", it: "Fammi una telefonata." },
            ],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "give up",
        significati: [
          {
            indicazione: "+ -ing: un'abitudine",
            traduzioni: ["smettere di"],
            esempi: [{ en: "I gave up smoking last year.", it: "Ho smesso di fumare l'anno scorso." }],
          },
          {
            indicazione: "senza oggetto",
            traduzioni: ["arrendersi", "rinunciare"],
            esempi: [{ en: "Don't give up!", it: "Non arrenderti!" }],
          },
        ],
      },
      {
        testo: "give back",
        significati: [
          {
            traduzioni: ["restituire", "ridare"],
            esempi: [{ en: "Give me back my phone!", it: "Ridammi il telefono!" }],
          },
        ],
      },
      {
        testo: "give away",
        significati: [
          {
            indicazione: "un oggetto",
            traduzioni: ["regalare", "dare via"],
            esempi: [{ en: "I gave away all my old clothes.", it: "Ho dato via tutti i miei vestiti vecchi." }],
          },
          {
            indicazione: "un segreto",
            traduzioni: ["rivelare", "tradire"],
            esempi: [{ en: "Don't give away the ending!", it: "Non svelare il finale!" }],
          },
        ],
      },
    ],
    attenzione: [
      "Con due oggetti l'ordine è persona + cosa (give me the book) oppure cosa + to + persona (give the book to me). Mai give to me the book.",
      "Dopo give up si usa -ing: give up smoking, non give up to smoke.",
    ],
    lezioni: [
      { id: "47", riquadro: 1 },
      { id: "47", riquadro: 6 },
    ],
  },
  {
    id: "go",
    parola: "go",
    fonetica: "/ɡəʊ/",
    descrizione: "Spostarsi da un posto a un altro: andare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "goes · went · gone · going",
        significati: [
          {
            indicazione: "spostarsi",
            traduzioni: ["andare"],
            esempi: [
              { en: "I go to school by bus.", it: "Vado a scuola in autobus." },
              { en: "Let's go home.", it: "Andiamo a casa." },
            ],
          },
          {
            indicazione: "lasciare un posto",
            traduzioni: ["andarsene", "partire"],
            esempi: [{ en: "I have to go now.", it: "Ora devo andare." }],
          },
          {
            indicazione: "come procede una cosa",
            traduzioni: ["andare"],
            esempi: [{ en: "How did the exam go?", it: "Com'è andato l'esame?" }],
          },
          {
            indicazione: "+ aggettivo: cambiare stato",
            traduzioni: ["diventare"],
            esempi: [
              { en: "Her hair went grey.", it: "Le sono diventati grigi i capelli." },
              { en: "He went red.", it: "È diventato rosso." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un tentativo",
            traduzioni: ["prova", "tentativo"],
            etichette: ["informale"],
            esempi: [{ en: "Can I have a go?", it: "Posso provare?" }],
          },
          {
            indicazione: "in un gioco",
            traduzioni: ["turno"],
            etichette: ["UK"],
            esempi: [{ en: "It's your go.", it: "Tocca a te." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "go out",
        significati: [
          {
            traduzioni: ["uscire"],
            esempi: [{ en: "Are you going out tonight?", it: "Esci stasera?" }],
          },
        ],
      },
      {
        testo: "go on",
        significati: [
          {
            indicazione: "continuare",
            traduzioni: ["continuare", "andare avanti"],
            esempi: [{ en: "Go on, I'm listening.", it: "Vai avanti, ti ascolto." }],
          },
          {
            indicazione: "succedere",
            traduzioni: ["succedere"],
            esempi: [{ en: "What's going on?", it: "Cosa succede?" }],
          },
        ],
      },
      {
        testo: "go off",
        significati: [
          {
            indicazione: "una sveglia, un allarme",
            traduzioni: ["suonare"],
            esempi: [{ en: "My alarm didn't go off.", it: "La sveglia non ha suonato." }],
          },
          {
            indicazione: "il cibo",
            traduzioni: ["andare a male"],
            etichette: ["UK"],
            esempi: [{ en: "The milk has gone off.", it: "Il latte è andato a male." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "be going to",
        significati: [
          {
            traduzioni: ["avere intenzione di", "stare per"],
            esempi: [
              { en: "I'm going to study medicine.", it: "Studierò medicina (ho deciso)." },
              { en: "Look at the sky, it's going to rain.", it: "Guarda il cielo, sta per piovere." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Been o gone? She has gone to London = è andata e non è ancora tornata; She has been to London = c'è stata ed è tornata.",
      "Con home niente to: go home, non go to home.",
      "Per le attività in -ing si usa go senza preposizioni: go swimming, go shopping, go running.",
    ],
    lezioni: [
      { id: "27", riquadro: 2 },
      { id: "29", riquadro: 4 },
      { id: "47", riquadro: 2 },
    ],
  },
  {
    id: "gentle",
    parola: "gentle",
    fonetica: "/ˈdʒentl/",
    descrizione: "Falso amico: significa \"delicato, mite\", non \"gentile\".",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "una persona, un gesto",
            traduzioni: ["delicato", "dolce", "mite"],
            esempi: [{ en: "Be gentle with the baby.", it: "Sii delicato con il bambino." }],
          },
          {
            indicazione: "vento, pendio, esercizio",
            traduzioni: ["leggero", "lieve", "dolce"],
            esempi: [
              { en: "a gentle breeze", it: "una brezza leggera" },
              { en: "a gentle slope", it: "un pendio dolce" },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "gentile",
      spiegazione: "Gentile si dice kind o nice: That's very kind of you = è molto gentile da parte tua.",
    },
    attenzione: ["Gentleman (signore, gentiluomo) viene da qui: un uomo dai modi delicati ed educati."],
  },
  {
    id: "grow",
    parola: "grow",
    fonetica: "/ɡrəʊ/",
    descrizione: "Diventare più grande: crescere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "grows · grew · grown · growing",
        significati: [
          {
            indicazione: "persone, piante",
            traduzioni: ["crescere"],
            esempi: [{ en: "Children grow so fast!", it: "I bambini crescono così in fretta!" }],
          },
          {
            indicazione: "aumentare",
            traduzioni: ["aumentare", "crescere"],
            esempi: [{ en: "The population is growing.", it: "La popolazione sta aumentando." }],
          },
          {
            indicazione: "+ aggettivo: diventare",
            traduzioni: ["diventare", "farsi"],
            etichette: ["formale"],
            esempi: [{ en: "It was growing dark.", it: "Si stava facendo buio." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        significati: [
          {
            indicazione: "piante",
            traduzioni: ["coltivare"],
            esempi: [{ en: "We grow tomatoes in the garden.", it: "Coltiviamo pomodori nell'orto." }],
          },
          {
            indicazione: "barba, capelli",
            traduzioni: ["farsi crescere"],
            esempi: [{ en: "He's growing a beard.", it: "Si sta facendo crescere la barba." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "grow up",
        significati: [
          {
            traduzioni: ["crescere", "diventare adulto"],
            esempi: [
              { en: "I grew up in Naples.", it: "Sono cresciuto a Napoli." },
              { en: "What do you want to be when you grow up?", it: "Cosa vuoi fare da grande?" },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Crescere un figlio non è grow ma bring up o raise: She was brought up by her aunt.",
    ],
    lezioni: [{ id: "47", riquadro: 5 }],
  },
  {
    id: "guess",
    parola: "guess",
    fonetica: "/ɡes/",
    descrizione: "Dire una cosa senza saperla per certo: indovinare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "guesses · guessed · guessed · guessing",
        significati: [
          {
            indicazione: "provare a indovinare",
            traduzioni: ["indovinare", "tirare a indovinare"],
            esempi: [
              { en: "Guess who I saw today!", it: "Indovina chi ho visto oggi!" },
              { en: "If you don't know, just guess.", it: "Se non lo sai, tira a indovinare." },
            ],
          },
          {
            indicazione: "I guess: supporre",
            traduzioni: ["supporre", "credere"],
            etichette: ["informale"],
            esempi: [{ en: "I guess you're right.", it: "Credo che tu abbia ragione." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["ipotesi", "tentativo"],
            esempi: [{ en: "Have a guess!", it: "Prova a indovinare!" }],
          },
        ],
      },
    ],
    attenzione: [
      "Si pronuncia /ɡes/: la u è muta, come in guitar e guest.",
      "I guess so (credo di sì) è molto americano; in Gran Bretagna si dice più spesso I suppose so.",
    ],
  },
];
