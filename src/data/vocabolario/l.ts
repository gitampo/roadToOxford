import { Voce } from "@/types/vocabolario";

export const L: Voce[] = [
  {
    id: "large",
    parola: "large",
    fonetica: "/lɑːdʒ/",
    descrizione: "Falso amico: significa \"grande\", non \"largo\".",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["grande", "ampio"],
            esempi: [
              { en: "They live in a large house.", it: "Vivono in una casa grande." },
              { en: "Can I have a large coffee?", it: "Posso avere un caffè grande?" },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "largo",
      spiegazione:
        "Large vuol dire grande. Largo, da una parte all'altra, è wide (a wide road); un vestito largo è loose o baggy.",
    },
    attenzione: [
      "Large è un po' più formale di big e si usa per le taglie: small, medium, large.",
      "Anche at large non vuol dire \"al largo\": significa \"a piede libero\" (The killer is still at large).",
    ],
  },
  {
    id: "lecture",
    parola: "lecture",
    fonetica: "/ˈlektʃə(r)/",
    descrizione: "Falso amico: significa \"lezione universitaria\", non \"lettura\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "all'università",
            traduzioni: ["lezione", "conferenza"],
            esempi: [{ en: "I have a lecture on Shakespeare at ten.", it: "Alle dieci ho una lezione su Shakespeare." }],
          },
          {
            indicazione: "un rimprovero lungo",
            traduzioni: ["predica", "ramanzina"],
            esempi: [{ en: "My dad gave me a lecture about money.", it: "Mio padre mi ha fatto la predica sui soldi." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "lectures · lectured · lectured · lecturing",
        significati: [
          {
            traduzioni: ["tenere lezioni", "insegnare"],
            esempi: [{ en: "She lectures in history at Oxford.", it: "Insegna storia all'università di Oxford." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "lettura",
      spiegazione:
        "La lettura è reading. Lecture è la lezione all'università, in cui il docente parla davanti a molti studenti.",
    },
    attenzione: [
      "Il docente universitario è lecturer. A Oxford, oltre alle lectures, ci sono i tutorials: lezioni con due o tre studenti.",
    ],
  },
  {
    id: "leave",
    parola: "leave",
    fonetica: "/liːv/",
    descrizione: "Andarsene da un posto, o lasciarci qualcosa.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "leaves · left · left · leaving",
        significati: [
          {
            indicazione: "andarsene da un posto",
            traduzioni: ["partire", "andarsene", "uscire da"],
            esempi: [
              { en: "The train leaves at six.", it: "Il treno parte alle sei." },
              { en: "She left the room without a word.", it: "È uscita dalla stanza senza dire una parola." },
            ],
          },
          {
            indicazione: "una cosa in un posto",
            traduzioni: ["lasciare", "dimenticare"],
            esempi: [{ en: "I left my umbrella on the bus.", it: "Ho dimenticato l'ombrello sull'autobus." }],
          },
          {
            indicazione: "una persona",
            traduzioni: ["lasciare"],
            esempi: [{ en: "His wife left him last year.", it: "Sua moglie l'ha lasciato l'anno scorso." }],
          },
          {
            indicazione: "in un certo stato",
            traduzioni: ["lasciare"],
            esempi: [{ en: "Leave the door open, please.", it: "Lascia la porta aperta, per favore." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            indicazione: "dal lavoro",
            traduzioni: ["permesso", "congedo", "ferie"],
            esempi: [{ en: "She's on maternity leave.", it: "È in congedo di maternità." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "leave somebody alone",
        significati: [
          {
            traduzioni: ["lasciare in pace"],
            esempi: [{ en: "Leave me alone!", it: "Lasciami in pace!" }],
          },
        ],
      },
    ],
    attenzione: [
      "Lasciare fare qualcosa a qualcuno è let, non leave: Let me help you, non Leave me help you.",
      "Left è anche \"sinistra\": Turn left = gira a sinistra. Il contesto fa capire quale dei due.",
    ],
  },
  {
    id: "lend",
    parola: "lend",
    fonetica: "/lend/",
    descrizione: "Dare qualcosa in prestito a qualcuno.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "lends · lent · lent · lending",
        significati: [
          {
            traduzioni: ["prestare"],
            esempi: [
              { en: "Can you lend me ten pounds?", it: "Mi presti dieci sterline?" },
              { en: "I lent her my car.", it: "Le ho prestato la macchina." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "lend a hand",
        significati: [
          {
            traduzioni: ["dare una mano"],
            esempi: [{ en: "Can you lend me a hand with these boxes?", it: "Mi dai una mano con queste scatole?" }],
          },
        ],
      },
    ],
    attenzione: [
      "Lend è dare, borrow è prendere: Anna lent me a book = I borrowed a book from Anna.",
    ],
  },
  {
    id: "let",
    parola: "let",
    fonetica: "/let/",
    descrizione: "Permettere a qualcuno di fare qualcosa: lasciare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "lets · let · let · letting",
        significati: [
          {
            indicazione: "permettere",
            traduzioni: ["lasciare", "permettere"],
            esempi: [
              { en: "My parents let me stay out late.", it: "I miei mi lasciano stare fuori fino a tardi." },
              { en: "Let me help you.", it: "Lascia che ti aiuti." },
            ],
          },
          {
            indicazione: "let's: per proporre",
            traduzioni: ["(imperativo con noi)"],
            esempi: [
              { en: "Let's go!", it: "Andiamo!" },
              { en: "Let's not argue.", it: "Non litighiamo." },
            ],
          },
          {
            indicazione: "una casa, una stanza",
            traduzioni: ["affittare"],
            etichette: ["UK"],
            esempi: [{ en: "Rooms to let.", it: "Camere in affitto." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "let down",
        significati: [
          {
            traduzioni: ["deludere"],
            esempi: [{ en: "Don't let me down.", it: "Non deludermi." }],
          },
        ],
      },
      {
        testo: "let in",
        significati: [
          {
            traduzioni: ["far entrare"],
            esempi: [{ en: "Open the door and let the cat in.", it: "Apri la porta e fai entrare il gatto." }],
          },
        ],
      },
    ],
    attenzione: [
      "Dopo let il verbo va senza to: let me go, non let me to go.",
      "Let è uguale in tutte e tre le forme: let, let, let.",
    ],
    lezioni: [
      { id: "19", riquadro: 3 },
      { id: "47", riquadro: 5 },
    ],
  },
  {
    id: "library",
    parola: "library",
    fonetica: "/ˈlaɪbrəri/",
    descrizione: "Falso amico: significa \"biblioteca\", non \"libreria\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["biblioteca"],
            esempi: [
              { en: "The Bodleian is Oxford's main library.", it: "La Bodleiana è la biblioteca principale di Oxford." },
              { en: "I borrowed this book from the library.", it: "Ho preso questo libro in biblioteca." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "libreria",
      spiegazione:
        "La libreria come negozio è bookshop (US bookstore); la libreria come mobile è bookcase.",
    },
  },
  {
    id: "like",
    parola: "like",
    fonetica: "/laɪk/",
    descrizione: "Trovare piacevole qualcosa: piacere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "likes · liked · liked · liking",
        significati: [
          {
            indicazione: "trovare piacevole",
            traduzioni: ["piacere"],
            esempi: [
              { en: "I like chocolate.", it: "Mi piace il cioccolato." },
              { en: "She likes reading.", it: "Le piace leggere." },
            ],
          },
          {
            indicazione: "would like: in modo cortese",
            traduzioni: ["volere", "desiderare"],
            esempi: [{ en: "I'd like a table for two, please.", it: "Vorrei un tavolo per due, per favore." }],
          },
        ],
      },
      {
        categoria: "preposizione",
        significati: [
          {
            indicazione: "somiglianza",
            traduzioni: ["come"],
            esempi: [
              { en: "She looks like her mother.", it: "Assomiglia a sua madre." },
              { en: "What's the weather like?", it: "Che tempo fa?" },
            ],
          },
          {
            indicazione: "per fare esempi",
            traduzioni: ["come", "per esempio"],
            esempi: [{ en: "I love sports like tennis and golf.", it: "Adoro sport come il tennis e il golf." }],
          },
        ],
      },
    ],
    attenzione: [
      "Like è al contrario rispetto a \"piacere\": chi prova il piacere è il soggetto. Mi piacciono i gatti = I like cats, non Cats like me (che vuol dire \"piaccio ai gatti\").",
      "What's he like? chiede com'è una persona; What does he like? chiede cosa gli piace.",
      "Al ristorante e nei negozi I'd like è più cortese di I want.",
    ],
    lezioni: [
      { id: "20", riquadro: 2 },
      { id: "20", riquadro: 3 },
      { id: "20", riquadro: 4 },
    ],
  },
  {
    id: "look",
    parola: "look",
    fonetica: "/lʊk/",
    descrizione: "Dirigere gli occhi verso qualcosa: guardare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "looks · looked · looked · looking",
        significati: [
          {
            indicazione: "+ at: con gli occhi",
            traduzioni: ["guardare"],
            esempi: [{ en: "Look at this photo!", it: "Guarda questa foto!" }],
          },
          {
            indicazione: "+ aggettivo: come appare",
            traduzioni: ["sembrare", "avere l'aria"],
            esempi: [{ en: "You look tired.", it: "Sembri stanco." }],
          },
          {
            indicazione: "+ like: somiglianza",
            traduzioni: ["assomigliare a", "sembrare"],
            esempi: [
              { en: "He looks like his father.", it: "Assomiglia a suo padre." },
              { en: "It looks like rain.", it: "Sembra che stia per piovere." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["occhiata", "sguardo"],
            esempi: [{ en: "Have a look at this.", it: "Dai un'occhiata a questo." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "look after",
        significati: [
          {
            traduzioni: ["prendersi cura di", "badare a"],
            esempi: [{ en: "Can you look after my cat this weekend?", it: "Puoi badare al mio gatto questo fine settimana?" }],
          },
        ],
      },
      {
        testo: "look for",
        significati: [
          {
            traduzioni: ["cercare"],
            esempi: [{ en: "I'm looking for my glasses.", it: "Sto cercando gli occhiali." }],
          },
        ],
      },
      {
        testo: "look forward to",
        significati: [
          {
            indicazione: "+ -ing o un nome",
            traduzioni: ["non vedere l'ora di"],
            esempi: [{ en: "I look forward to hearing from you.", it: "Attendo una sua risposta." }],
          },
        ],
      },
      {
        testo: "look up",
        significati: [
          {
            traduzioni: ["cercare (in un dizionario, online)"],
            esempi: [{ en: "Look it up in the dictionary.", it: "Cercalo nel dizionario." }],
          },
        ],
      },
    ],
    attenzione: [
      "Look è guardare con attenzione, see è vedere (anche senza volerlo), watch è guardare qualcosa che si muove: la TV, una partita.",
      "Look vuole at davanti all'oggetto: look at me, non look me.",
      "Dopo look forward to si usa -ing: I look forward to seeing you, non to see you.",
    ],
    lezioni: [
      { id: "33", riquadro: 6 },
      { id: "47", riquadro: 5 },
      { id: "47", riquadro: 6 },
    ],
  },
  {
    id: "last",
    parola: "last",
    fonetica: "/lɑːst/",
    descrizione: "Che viene dopo tutti gli altri: ultimo; anche scorso.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "alla fine di una serie",
            traduzioni: ["ultimo"],
            esempi: [{ en: "This is the last chapter.", it: "Questo è l'ultimo capitolo." }],
          },
          {
            indicazione: "il più recente",
            traduzioni: ["scorso", "passato"],
            esempi: [
              { en: "I saw her last week.", it: "L'ho vista la settimana scorsa." },
              { en: "Where were you last night?", it: "Dov'eri ieri sera?" },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "lasts · lasted · lasted · lasting",
        significati: [
          {
            traduzioni: ["durare"],
            esempi: [
              { en: "The film lasts two hours.", it: "Il film dura due ore." },
              { en: "Good shoes last for years.", it: "Le scarpe buone durano anni." },
            ],
          },
        ],
      },
      {
        categoria: "avverbio",
        significati: [
          {
            traduzioni: ["per ultimo", "l'ultima volta"],
            esempi: [{ en: "When did you last see him?", it: "Quand'è l'ultima volta che l'hai visto?" }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "at last",
        significati: [
          {
            traduzioni: ["finalmente"],
            esempi: [{ en: "At last, the holidays!", it: "Finalmente le vacanze!" }],
          },
        ],
      },
    ],
    attenzione: [
      "Con last week, last year, last night niente the e niente preposizione: last Monday, non the last Monday o on last Monday.",
      "The last week vuol dire \"gli ultimi sette giorni\", last week \"la settimana scorsa\".",
      "Last (l'ultimo di una serie) e latest (il più recente, ce ne saranno altri) non sono uguali: his latest film.",
    ],
    lezioni: [
      { id: "9", riquadro: 5 },
      { id: "21", riquadro: 4 },
    ],
  },
  {
    id: "late",
    parola: "late",
    fonetica: "/leɪt/",
    descrizione: "Dopo l'ora giusta o prevista: in ritardo, tardi.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "dopo l'orario",
            traduzioni: ["in ritardo"],
            esempi: [
              { en: "Sorry I'm late.", it: "Scusa il ritardo." },
              { en: "The train was 20 minutes late.", it: "Il treno aveva 20 minuti di ritardo." },
            ],
          },
          {
            indicazione: "verso la fine di un periodo",
            traduzioni: ["tardo", "fine"],
            esempi: [{ en: "in the late 19th century", it: "alla fine dell'Ottocento" }],
          },
          {
            indicazione: "morto",
            traduzioni: ["defunto", "il compianto"],
            etichette: ["formale"],
            esempi: [{ en: "her late husband", it: "il suo defunto marito" }],
          },
        ],
      },
      {
        categoria: "avverbio",
        significati: [
          {
            traduzioni: ["tardi"],
            esempi: [{ en: "I got up late this morning.", it: "Stamattina mi sono alzato tardi." }],
          },
        ],
      },
    ],
    attenzione: [
      "Essere in ritardo è be late, con il verbo essere: I'm late, non I have late.",
      "Lately non è l'avverbio di late: vuol dire \"ultimamente\". I've been busy lately.",
      "Later vuol dire \"più tardi, dopo\": See you later.",
    ],
    lezioni: [{ id: "33", riquadro: 4 }],
  },
  {
    id: "learn",
    parola: "learn",
    fonetica: "/lɜːn/",
    descrizione: "Acquisire una conoscenza o un'abilità: imparare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "learns · learned (UK anche learnt) · learned / learnt · learning",
        significati: [
          {
            indicazione: "una materia, un'abilità",
            traduzioni: ["imparare", "studiare"],
            esempi: [
              { en: "I'm learning English.", it: "Sto imparando l'inglese." },
              { en: "She learned to swim when she was five.", it: "Ha imparato a nuotare a cinque anni." },
            ],
          },
          {
            indicazione: "+ about / of: una notizia",
            traduzioni: ["venire a sapere", "apprendere"],
            esempi: [{ en: "We learned about the accident on the news.", it: "Abbiamo saputo dell'incidente dal telegiornale." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "learn by heart",
        significati: [
          {
            traduzioni: ["imparare a memoria"],
            esempi: [{ en: "We had to learn the poem by heart.", it: "Abbiamo dovuto imparare la poesia a memoria." }],
          },
        ],
      },
    ],
    attenzione: [
      "Learn è imparare, teach è insegnare: She taught me English, non She learned me English.",
      "Imparare a fare qualcosa è learn to + verbo, senza preposizioni: learn to drive.",
    ],
    lezioni: [{ id: "48", riquadro: 3 }],
  },
  {
    id: "lie",
    parola: "lie",
    fonetica: "/laɪ/",
    descrizione: "Stare sdraiato; oppure dire una bugia: mentire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo: stare sdraiato",
        forme: "lies · lay · lain · lying",
        significati: [
          {
            traduzioni: ["stare sdraiato", "giacere"],
            esempi: [
              { en: "I lay on the beach all day.", it: "Sono stato sdraiato in spiaggia tutto il giorno." },
              { en: "Lie down and rest.", it: "Sdraiati e riposa." },
            ],
          },
          {
            indicazione: "un luogo",
            traduzioni: ["trovarsi", "essere situato"],
            etichette: ["formale"],
            esempi: [{ en: "Oxford lies on the River Thames.", it: "Oxford si trova sul Tamigi." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo: mentire",
        forme: "lies · lied · lied · lying",
        significati: [
          {
            traduzioni: ["mentire", "dire bugie"],
            esempi: [{ en: "Don't lie to me!", it: "Non mentirmi!" }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["bugia", "menzogna"],
            esempi: [{ en: "He told me a lie.", it: "Mi ha detto una bugia." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "lie down",
        significati: [
          {
            traduzioni: ["sdraiarsi", "stendersi"],
            esempi: [{ en: "I need to lie down for a bit.", it: "Ho bisogno di stendermi un attimo." }],
          },
        ],
      },
    ],
    attenzione: [
      "Due verbi diversi con la stessa forma: lie, lay, lain (stare sdraiato) e lie, lied, lied (mentire).",
      "Lay (lay, laid, laid) è un altro verbo ancora e vuol dire posare, stendere qualcosa: lay the table = apparecchiare. Il passato di lie (stare sdraiato) è proprio lay: è l'errore più comune anche tra i madrelingua.",
      "Dire una bugia è tell a lie, non say a lie.",
    ],
    lezioni: [{ id: "47", riquadro: 2 }],
  },
  {
    id: "light",
    parola: "light",
    fonetica: "/laɪt/",
    descrizione: "Ciò che permette di vedere: luce; come aggettivo, leggero o chiaro.",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "non numerabile: del sole",
            traduzioni: ["luce"],
            esempi: [{ en: "There isn't enough light to read.", it: "Non c'è abbastanza luce per leggere." }],
          },
          {
            indicazione: "numerabile: una lampada",
            traduzioni: ["luce", "lampada", "semaforo"],
            esempi: [
              { en: "Turn off the light.", it: "Spegni la luce." },
              { en: "Turn left at the lights.", it: "Al semaforo gira a sinistra." },
            ],
          },
        ],
      },
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "di peso",
            traduzioni: ["leggero"],
            esempi: [{ en: "This bag is very light.", it: "Questa borsa è leggerissima." }],
          },
          {
            indicazione: "di colore",
            traduzioni: ["chiaro"],
            esempi: [{ en: "a light blue shirt", it: "una camicia azzurro chiaro" }],
          },
          {
            indicazione: "un pasto",
            traduzioni: ["leggero"],
            esempi: [{ en: "We had a light lunch.", it: "Abbiamo fatto un pranzo leggero." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "lights · lit · lit · lighting",
        significati: [
          {
            indicazione: "fuoco, candele",
            traduzioni: ["accendere"],
            esempi: [{ en: "She lit a candle.", it: "Ha acceso una candela." }],
          },
        ],
      },
    ],
    attenzione: [
      "Accendere la luce o un apparecchio è turn on o switch on; light si usa per il fuoco (light a fire, light a cigarette).",
      "Il contrario di light (leggero) è heavy; il contrario di light (chiaro) è dark.",
    ],
  },
  {
    id: "live",
    parola: "live",
    fonetica: "/lɪv/",
    descrizione: "Essere in vita, o abitare in un posto: vivere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "lives · lived · lived · living",
        significati: [
          {
            indicazione: "abitare",
            traduzioni: ["vivere", "abitare"],
            esempi: [
              { en: "I live in Oxford.", it: "Abito a Oxford." },
              { en: "She lives with her parents.", it: "Vive con i suoi genitori." },
            ],
          },
          {
            indicazione: "essere in vita",
            traduzioni: ["vivere"],
            esempi: [{ en: "My grandmother lived to 98.", it: "Mia nonna è vissuta fino a 98 anni." }],
          },
        ],
      },
      {
        categoria: "aggettivo",
        fonetica: "/laɪv/",
        significati: [
          {
            indicazione: "non registrato",
            traduzioni: ["dal vivo", "in diretta"],
            esempi: [{ en: "a live concert", it: "un concerto dal vivo" }],
          },
          {
            indicazione: "non morto",
            traduzioni: ["vivo"],
            esempi: [{ en: "live animals", it: "animali vivi" }],
          },
        ],
      },
    ],
    attenzione: [
      "La pronuncia cambia: il verbo è /lɪv/ (i breve), l'aggettivo /laɪv/ (come five).",
      "Vivo dopo il verbo è alive: Is he still alive? (live va solo prima del nome: live animals).",
      "Per una situazione temporanea si usa il present continuous: I'm living with friends at the moment.",
    ],
    lezioni: [
      { id: "13", riquadro: 2 },
      { id: "31", riquadro: 1 },
    ],
  },
  {
    id: "lose",
    parola: "lose",
    fonetica: "/luːz/",
    descrizione: "Non avere più qualcosa, o non vincere: perdere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "loses · lost · lost · losing",
        significati: [
          {
            indicazione: "un oggetto",
            traduzioni: ["perdere", "smarrire"],
            esempi: [{ en: "I've lost my keys.", it: "Ho perso le chiavi." }],
          },
          {
            indicazione: "una gara",
            traduzioni: ["perdere"],
            esempi: [{ en: "We lost 2–1.", it: "Abbiamo perso 2 a 1." }],
          },
          {
            indicazione: "peso, pazienza, lavoro",
            traduzioni: ["perdere"],
            esempi: [
              { en: "I've lost three kilos.", it: "Ho perso tre chili." },
              { en: "Don't lose your temper.", it: "Non perdere la pazienza." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "get lost",
        significati: [
          {
            indicazione: "non trovare la strada",
            traduzioni: ["perdersi"],
            esempi: [{ en: "We got lost in the old town.", it: "Ci siamo persi nel centro storico." }],
          },
          {
            indicazione: "Get lost!",
            traduzioni: ["Sparisci!", "Vattene!"],
            etichette: ["informale", "offensivo"],
            esempi: [{ en: "Get lost! Leave me alone.", it: "Sparisci! Lasciami in pace." }],
          },
        ],
      },
    ],
    attenzione: [
      "Lose (perdere) /luːz/ e loose (largo, allentato) /luːs/ si confondono spesso, anche nello scritto.",
      "Perdere un treno o un'occasione non è lose ma miss: I missed the bus.",
      "Perdere tempo è waste time: Don't waste your time.",
    ],
    lezioni: [{ id: "56", riquadro: 2 }],
  },
];
