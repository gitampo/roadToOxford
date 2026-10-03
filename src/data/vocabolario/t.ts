import { Voce } from "@/types/vocabolario";

export const T: Voce[] = [
  {
    id: "take",
    parola: "take",
    fonetica: "/teɪk/",
    descrizione: "Prendere qualcosa, o portarla via con sé.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "takes · took · taken · taking",
        significati: [
          {
            indicazione: "con le mani, con sé",
            traduzioni: ["prendere"],
            esempi: [
              { en: "Take an umbrella, it's going to rain.", it: "Prendi un ombrello, sta per piovere." },
              { en: "Who took my pen?", it: "Chi ha preso la mia penna?" },
            ],
          },
          {
            indicazione: "verso un altro posto",
            traduzioni: ["portare"],
            esempi: [{ en: "Take this letter to the post office.", it: "Porta questa lettera all'ufficio postale." }],
          },
          {
            indicazione: "un mezzo di trasporto",
            traduzioni: ["prendere"],
            esempi: [{ en: "Let's take a taxi.", it: "Prendiamo un taxi." }],
          },
          {
            indicazione: "il tempo necessario",
            traduzioni: ["volerci", "metterci"],
            esempi: [{ en: "It takes an hour to get there.", it: "Ci vuole un'ora per arrivarci." }],
          },
          {
            indicazione: "con certi nomi",
            traduzioni: ["fare", "sostenere"],
            esempi: [
              { en: "Can I take a photo?", it: "Posso fare una foto?" },
              { en: "I'm taking my driving test tomorrow.", it: "Domani faccio l'esame di guida." },
            ],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "take off",
        significati: [
          {
            indicazione: "un aereo",
            traduzioni: ["decollare"],
            esempi: [{ en: "The plane took off.", it: "L'aereo è decollato." }],
          },
          {
            indicazione: "un vestito",
            traduzioni: ["togliersi"],
            esempi: [{ en: "Take off your shoes.", it: "Togliti le scarpe." }],
          },
        ],
      },
      {
        testo: "take up",
        significati: [
          {
            indicazione: "un'attività",
            traduzioni: ["cominciare", "dedicarsi a"],
            esempi: [{ en: "I've taken up yoga.", it: "Ho cominciato a fare yoga." }],
          },
        ],
      },
      {
        testo: "take after",
        significati: [
          {
            indicazione: "un genitore",
            traduzioni: ["assomigliare a", "prendere da"],
            esempi: [{ en: "She takes after her father.", it: "Ha preso da suo padre." }],
          },
        ],
      },
    ],
    attenzione: [
      "Take è portare verso un altro posto, bring verso qui: Take it to the office, ma Bring it here.",
      "Fare (sostenere) un esame è take an exam; superarlo è pass: I took the exam but I didn't pass = ho fatto l'esame ma non l'ho passato.",
    ],
    lezioni: [
      { id: "45", riquadro: 6 },
      { id: "46", riquadro: 3 },
      { id: "56", riquadro: 3 },
    ],
  },
  {
    id: "tell",
    parola: "tell",
    fonetica: "/tel/",
    descrizione: "Dire qualcosa a qualcuno: comunicare, raccontare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "tells · told · told · telling",
        significati: [
          {
            indicazione: "a una persona",
            traduzioni: ["dire"],
            esempi: [
              { en: "Tell me the truth.", it: "Dimmi la verità." },
              { en: "She told me she was tired.", it: "Mi ha detto che era stanca." },
            ],
          },
          {
            indicazione: "una storia, una barzelletta",
            traduzioni: ["raccontare"],
            esempi: [{ en: "Tell me a story.", it: "Raccontami una storia." }],
          },
          {
            indicazione: "+ persona + to: un ordine",
            traduzioni: ["dire di", "ordinare di"],
            esempi: [{ en: "She told me to wait outside.", it: "Mi ha detto di aspettare fuori." }],
          },
          {
            indicazione: "distinguere",
            traduzioni: ["capire", "distinguere"],
            esempi: [{ en: "I can't tell the difference.", it: "Non vedo la differenza." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "tell off",
        significati: [
          {
            traduzioni: ["sgridare", "rimproverare"],
            etichette: ["UK"],
            esempi: [{ en: "The teacher told us off for being late.", it: "L'insegnante ci ha sgridati perché eravamo in ritardo." }],
          },
        ],
      },
    ],
    attenzione: [
      "Tell vuole la persona subito dopo, senza to: tell me, non tell to me. Say invece non la vuole: say something (to me).",
      "Si dice tell the truth, tell a lie, tell a story, tell a joke: qui si usa sempre tell, anche senza la persona.",
    ],
    lezioni: [
      { id: "41", riquadro: 3 },
      { id: "41", riquadro: 6 },
    ],
  },
  {
    id: "terrific",
    parola: "terrific",
    fonetica: "/təˈrɪfɪk/",
    descrizione: "Falso amico: significa \"fantastico\", non \"terrificante\".",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "molto bello",
            traduzioni: ["fantastico", "splendido"],
            etichette: ["informale"],
            esempi: [{ en: "You look terrific!", it: "Stai benissimo!" }],
          },
          {
            indicazione: "molto grande",
            traduzioni: ["enorme", "tremendo"],
            esempi: [{ en: "There was a terrific noise.", it: "Ci fu un rumore tremendo." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "terrificante",
      spiegazione: "Terrificante si dice terrifying: a terrifying film = un film terrificante.",
    },
  },
  {
    id: "think",
    parola: "think",
    fonetica: "/θɪŋk/",
    descrizione: "Avere un'opinione, o usare la mente: pensare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "thinks · thought · thought · thinking",
        significati: [
          {
            indicazione: "un'opinione",
            traduzioni: ["pensare", "credere"],
            esempi: [
              { en: "I think you're right.", it: "Penso che tu abbia ragione." },
              { en: "What do you think of my new haircut?", it: "Cosa pensi del mio nuovo taglio?" },
            ],
          },
          {
            indicazione: "+ about: riflettere",
            traduzioni: ["pensare a", "riflettere su"],
            esempi: [{ en: "What are you thinking about?", it: "A cosa stai pensando?" }],
          },
          {
            indicazione: "+ of + -ing: un progetto",
            traduzioni: ["pensare di", "avere in mente di"],
            esempi: [{ en: "I'm thinking of moving to Scotland.", it: "Sto pensando di trasferirmi in Scozia." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "think over",
        significati: [
          {
            traduzioni: ["pensarci su", "riflettere su"],
            esempi: [{ en: "Think it over and let me know.", it: "Pensaci su e fammi sapere." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "I think so / I don't think so",
        significati: [
          {
            traduzioni: ["penso di sì / penso di no"],
            esempi: [{ en: "— Is it going to rain? — I don't think so.", it: "— Pioverà? — Penso di no." }],
          },
        ],
      },
    ],
    attenzione: [
      "Pensare di fare qualcosa = think of/about + -ing: I'm thinking of leaving, non I think to leave.",
      "\"Penso di no\" è I don't think so, non I think not (troppo formale) e non I think no.",
      "La th di think è sorda: lingua tra i denti e si soffia. Se la pronunci come s, diventa sink (affondare).",
    ],
    lezioni: [
      { id: "56", riquadro: 1 },
      { id: "57", riquadro: 3 },
    ],
  },
  {
    id: "try",
    parola: "try",
    fonetica: "/traɪ/",
    descrizione: "Fare uno sforzo per riuscire in qualcosa: provare, cercare di.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "tries · tried · tried · trying",
        significati: [
          {
            indicazione: "+ to: con sforzo",
            traduzioni: ["cercare di", "provare a"],
            esempi: [{ en: "I'm trying to sleep.", it: "Sto cercando di dormire." }],
          },
          {
            indicazione: "+ -ing: per vedere se funziona",
            traduzioni: ["provare a"],
            esempi: [{ en: "Try restarting your computer.", it: "Prova a riavviare il computer." }],
          },
          {
            indicazione: "cibo, una cosa nuova",
            traduzioni: ["assaggiare", "provare"],
            esempi: [{ en: "Try this cake, it's delicious.", it: "Assaggia questa torta, è buonissima." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["tentativo", "prova"],
            esempi: [{ en: "Let's give it a try.", it: "Facciamo un tentativo." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "try on",
        significati: [
          {
            indicazione: "un vestito",
            traduzioni: ["provare", "provarsi"],
            esempi: [{ en: "Can I try on these jeans?", it: "Posso provare questi jeans?" }],
          },
        ],
      },
    ],
    attenzione: [
      "Try to + verbo (sforzo) e try + -ing (esperimento) non sono uguali: I tried to open it = ho cercato di aprirlo; Try opening it = prova ad aprirlo e vedi.",
      "Nel parlato si sente spesso try and + verbo: Try and relax = cerca di rilassarti.",
    ],
    lezioni: [{ id: "47", riquadro: 6 }],
  },
  {
    id: "turn",
    parola: "turn",
    fonetica: "/tɜːn/",
    descrizione: "Girare, o cambiare direzione.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "turns · turned · turned · turning",
        significati: [
          {
            indicazione: "cambiare direzione",
            traduzioni: ["girare", "svoltare"],
            esempi: [{ en: "Turn left at the lights.", it: "Gira a sinistra al semaforo." }],
          },
          {
            indicazione: "il corpo",
            traduzioni: ["girarsi", "voltarsi"],
            esempi: [{ en: "She turned and smiled at me.", it: "Si è girata e mi ha sorriso." }],
          },
          {
            indicazione: "+ aggettivo o età: cambiare stato",
            traduzioni: ["diventare", "compiere (anni)"],
            esempi: [
              { en: "The leaves turn red in autumn.", it: "In autunno le foglie diventano rosse." },
              { en: "She turned 18 last week.", it: "La settimana scorsa ha compiuto 18 anni." },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        significati: [
          {
            traduzioni: ["girare", "voltare"],
            esempi: [{ en: "Turn the page.", it: "Gira la pagina." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "in un gioco, in fila",
            traduzioni: ["turno"],
            esempi: [{ en: "It's your turn.", it: "Tocca a te." }],
          },
          {
            indicazione: "sulla strada",
            traduzioni: ["svolta", "curva"],
            esempi: [{ en: "Take the next turn on the right.", it: "Prendi la prossima a destra." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "turn on / turn off",
        significati: [
          {
            traduzioni: ["accendere / spegnere"],
            esempi: [{ en: "Turn off the lights when you leave.", it: "Spegni le luci quando esci." }],
          },
        ],
      },
      {
        testo: "turn up / turn down",
        significati: [
          {
            indicazione: "il volume",
            traduzioni: ["alzare / abbassare"],
            esempi: [{ en: "Can you turn the music down?", it: "Puoi abbassare la musica?" }],
          },
        ],
      },
      {
        testo: "turn into",
        significati: [
          {
            traduzioni: ["trasformarsi in", "diventare"],
            esempi: [{ en: "The frog turned into a prince.", it: "La rana si trasformò in un principe." }],
          },
        ],
      },
    ],
    attenzione: [
      "Accendere e spegnere apparecchi è turn on/off o switch on/off: open the light e close the light sono errori tipici degli italiani.",
    ],
    lezioni: [{ id: "46", riquadro: 3 }],
  },
  {
    id: "teach",
    parola: "teach",
    fonetica: "/tiːtʃ/",
    descrizione: "Far imparare qualcosa a qualcuno: insegnare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "teaches · taught · taught · teaching",
        significati: [
          {
            traduzioni: ["insegnare"],
            esempi: [
              { en: "She teaches English at a secondary school.", it: "Insegna inglese in una scuola superiore." },
              { en: "My dad taught me to swim.", it: "Mio padre mi ha insegnato a nuotare." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "teach somebody a lesson",
        significati: [
          {
            traduzioni: ["dare una lezione a qualcuno"],
            esempi: [{ en: "That'll teach him a lesson!", it: "Così impara!" }],
          },
        ],
      },
    ],
    attenzione: [
      "Teach è insegnare, learn è imparare: She taught me, I learned. Mai She learned me.",
      "Taught si pronuncia /tɔːt/, come caught e bought.",
      "Insegnare a fare: teach somebody to do something (o how to do something).",
    ],
  },
  {
    id: "travel",
    parola: "travel",
    fonetica: "/ˈtrævl/",
    descrizione: "Andare da un posto a un altro, spesso lontano: viaggiare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "travels · travelled (US traveled) · travelled · travelling",
        significati: [
          {
            traduzioni: ["viaggiare", "spostarsi"],
            esempi: [
              { en: "I love travelling.", it: "Adoro viaggiare." },
              { en: "We travelled around Scotland by train.", it: "Abbiamo girato la Scozia in treno." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            traduzioni: ["viaggi", "il viaggiare"],
            esempi: [{ en: "Travel broadens the mind.", it: "Viaggiare apre la mente." }],
          },
        ],
      },
    ],
    attenzione: [
      "Travel come nome è non numerabile: a travel è sbagliato. Un viaggio è a trip o a journey.",
      "In inglese britannico la l raddoppia: travelled, travelling, traveller. In americano no: traveled, traveling.",
    ],
    lezioni: [{ id: "24", riquadro: 6 }],
  },
  {
    id: "trust",
    parola: "trust",
    fonetica: "/trʌst/",
    descrizione: "Credere che qualcuno sia onesto: fidarsi.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "trusts · trusted · trusted · trusting",
        significati: [
          {
            traduzioni: ["fidarsi di", "avere fiducia in"],
            esempi: [
              { en: "I trust you.", it: "Mi fido di te." },
              { en: "Don't trust everything you read online.", it: "Non fidarti di tutto quello che leggi online." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            traduzioni: ["fiducia"],
            esempi: [{ en: "Trust is important in a relationship.", it: "In una relazione la fiducia è importante." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "Trust me.",
        significati: [
          {
            traduzioni: ["Fidati."],
            esempi: [{ en: "Trust me, it's a great film.", it: "Fidati, è un film bellissimo." }],
          },
        ],
      },
    ],
    attenzione: [
      "Trust non vuole preposizioni: trust me, non trust of me o trust in me (trust in si usa per Dio o per un principio).",
      "Trust è anche un ente o una fondazione: il National Trust protegge castelli, giardini e coste britanniche.",
    ],
  },
];
