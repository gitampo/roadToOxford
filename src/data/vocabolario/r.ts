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
  {
    id: "realize",
    parola: "realize",
    fonetica: "/ˈriːəlaɪz/",
    descrizione: "Falso amico: di solito significa \"rendersi conto\", non \"realizzare\".",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "realizes · realized · realized · realizing",
        significati: [
          {
            indicazione: "capire all'improvviso",
            traduzioni: ["rendersi conto di", "accorgersi di"],
            esempi: [
              { en: "I didn't realize it was so late.", it: "Non mi ero reso conto che fosse così tardi." },
              { en: "She suddenly realized she'd left her phone at home.", it: "All'improvviso si è accorta di aver lasciato il telefono a casa." },
            ],
          },
          {
            indicazione: "un sogno, un obiettivo",
            traduzioni: ["realizzare"],
            etichette: ["formale"],
            esempi: [{ en: "She realized her dream of becoming a doctor.", it: "Ha realizzato il sogno di diventare medico." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "realizzare",
      spiegazione:
        "Nel senso di costruire o fare, realizzare si dice make, build o carry out (realizzare un progetto = carry out a project). Realize vuol dire quasi sempre rendersi conto.",
    },
    attenzione: ["Nell'inglese britannico si scrive anche realise."],
  },
  {
    id: "remember",
    parola: "remember",
    fonetica: "/rɪˈmembə(r)/",
    descrizione: "Avere in mente qualcosa del passato, o non dimenticarla.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "remembers · remembered · remembered · remembering",
        significati: [
          {
            indicazione: "avere in mente",
            traduzioni: ["ricordare", "ricordarsi di"],
            esempi: [{ en: "I can't remember his name.", it: "Non mi ricordo il suo nome." }],
          },
          {
            indicazione: "+ to: una cosa da fare",
            traduzioni: ["ricordarsi di"],
            esempi: [{ en: "Remember to lock the door.", it: "Ricordati di chiudere a chiave." }],
          },
          {
            indicazione: "+ -ing: una cosa già fatta",
            traduzioni: ["ricordarsi di (aver fatto)"],
            esempi: [{ en: "I remember locking the door.", it: "Mi ricordo di aver chiuso a chiave." }],
          },
        ],
      },
    ],
    attenzione: [
      "Remember non è riflessivo: I remember, non I remember myself.",
      "Ricordare qualcosa a qualcuno è remind: Remind me to call Anna = ricordami di chiamare Anna.",
    ],
    lezioni: [{ id: "47", riquadro: 6 }],
  },
  {
    id: "rumour",
    parola: "rumour",
    fonetica: "/ˈruːmə(r)/",
    descrizione: "Falso amico: significa \"voce, diceria\", non \"rumore\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["voce", "diceria", "pettegolezzo"],
            esempi: [
              { en: "There's a rumour that the school will close.", it: "Gira voce che la scuola chiuderà." },
              { en: "Don't believe the rumours.", it: "Non credere alle dicerie." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "rumore",
      spiegazione: "Il rumore è noise: Don't make so much noise! = Non fare tanto rumore!",
    },
    attenzione: ["In inglese americano si scrive rumor."],
  },
  {
    id: "raise",
    parola: "raise",
    fonetica: "/reɪz/",
    descrizione: "Portare più in alto qualcosa: alzare, sollevare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "raises · raised · raised · raising",
        significati: [
          {
            indicazione: "verso l'alto",
            traduzioni: ["alzare", "sollevare"],
            esempi: [{ en: "Raise your hand if you know the answer.", it: "Alzate la mano se sapete la risposta." }],
          },
          {
            indicazione: "prezzi, livelli",
            traduzioni: ["aumentare", "alzare"],
            esempi: [{ en: "They've raised the price of tickets.", it: "Hanno aumentato il prezzo dei biglietti." }],
          },
          {
            indicazione: "figli",
            traduzioni: ["crescere", "allevare"],
            esempi: [{ en: "She raised three children on her own.", it: "Ha cresciuto tre figli da sola." }],
          },
          {
            indicazione: "soldi, una questione",
            traduzioni: ["raccogliere", "sollevare"],
            esempi: [
              { en: "We're raising money for charity.", it: "Raccogliamo fondi per beneficenza." },
              { en: "He raised an interesting question.", it: "Ha sollevato una questione interessante." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["aumento (di stipendio)"],
            etichette: ["US"],
            esempi: [{ en: "I asked my boss for a raise.", it: "Ho chiesto un aumento al mio capo." }],
          },
        ],
      },
    ],
    attenzione: [
      "Raise ha sempre un oggetto (qualcuno alza qualcosa); rise no (qualcosa sale da solo): They raised prices ↔ Prices rose.",
      "In Gran Bretagna l'aumento di stipendio è a pay rise; in America a raise.",
    ],
  },
  {
    id: "rather",
    parola: "rather",
    fonetica: "/ˈrɑːðə(r)/",
    descrizione: "Piuttosto, abbastanza; would rather: preferire.",
    usi: [
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "+ aggettivo",
            traduzioni: ["piuttosto", "alquanto"],
            esempi: [{ en: "It's rather cold in here.", it: "Fa piuttosto freddo qui dentro." }],
          },
          {
            indicazione: "would rather: preferenza",
            traduzioni: ["preferire"],
            esempi: [
              { en: "I'd rather stay at home tonight.", it: "Stasera preferirei restare a casa." },
              { en: "I'd rather you didn't smoke here.", it: "Preferirei che tu non fumassi qui." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "rather than",
        significati: [
          {
            traduzioni: ["piuttosto che", "invece di"],
            esempi: [{ en: "I'll have tea rather than coffee.", it: "Prendo un tè invece del caffè." }],
          },
        ],
      },
      {
        testo: "or rather",
        significati: [
          {
            traduzioni: ["o meglio", "anzi"],
            esempi: [{ en: "She's Italian, or rather Sicilian.", it: "È italiana, o meglio siciliana." }],
          },
        ],
      },
    ],
    attenzione: [
      "Dopo would rather il verbo va senza to: I'd rather go, non I'd rather to go. Prefer invece vuole to: I'd prefer to go.",
      "Rather è più formale di quite e spesso indica qualcosa di inatteso o negativo: rather expensive.",
    ],
    lezioni: [{ id: "20", riquadro: 6 }],
  },
  {
    id: "reach",
    parola: "reach",
    fonetica: "/riːtʃ/",
    descrizione: "Arrivare fino a un posto o a un livello: raggiungere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "reaches · reached · reached · reaching",
        significati: [
          {
            indicazione: "un luogo, un livello",
            traduzioni: ["raggiungere", "arrivare a"],
            esempi: [
              { en: "We reached Oxford at noon.", it: "Siamo arrivati a Oxford a mezzogiorno." },
              { en: "Temperatures reached 35 degrees.", it: "Le temperature hanno raggiunto i 35 gradi." },
            ],
          },
          {
            indicazione: "con la mano",
            traduzioni: ["arrivare a prendere", "allungare la mano"],
            esempi: [{ en: "I can't reach the top shelf.", it: "Non arrivo all'ultimo scaffale." }],
          },
          {
            indicazione: "una persona al telefono",
            traduzioni: ["contattare", "rintracciare"],
            esempi: [{ en: "You can reach me on this number.", it: "Mi puoi trovare a questo numero." }],
          },
          {
            indicazione: "una decisione",
            traduzioni: ["raggiungere", "arrivare a"],
            esempi: [{ en: "They finally reached an agreement.", it: "Finalmente hanno raggiunto un accordo." }],
          },
        ],
      },
    ],
    attenzione: ["Reach non vuole preposizioni: reach London, non reach to London o reach at London."],
  },
  {
    id: "recipe",
    parola: "recipe",
    fonetica: "/ˈresəpi/",
    descrizione: "Falso amico: significa \"ricetta\" di cucina, non \"ricevuta\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["ricetta"],
            esempi: [
              { en: "This is my grandmother's recipe for lasagne.", it: "È la ricetta delle lasagne di mia nonna." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "ricevuta",
      spiegazione:
        "La ricevuta (lo scontrino) è receipt /rɪˈsiːt/, con la p muta. La ricetta del medico è prescription.",
    },
    attenzione: ["Si pronuncia /ˈresəpi/, in tre sillabe: la e finale si legge."],
  },
  {
    id: "remind",
    parola: "remind",
    fonetica: "/rɪˈmaɪnd/",
    descrizione: "Far ricordare qualcosa a qualcuno: ricordare a.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "reminds · reminded · reminded · reminding",
        significati: [
          {
            indicazione: "+ persona + to",
            traduzioni: ["ricordare a qualcuno di"],
            esempi: [{ en: "Remind me to call my mother.", it: "Ricordami di chiamare mia madre." }],
          },
          {
            indicazione: "+ of: una somiglianza",
            traduzioni: ["ricordare", "far pensare a"],
            esempi: [{ en: "You remind me of your father.", it: "Mi ricordi tuo padre." }],
          },
        ],
      },
    ],
    attenzione: [
      "Remember è ricordare da soli; remind è far ricordare a un altro: I remember; she reminded me.",
      "Il nome reminder è il promemoria: I set a reminder on my phone.",
    ],
  },
  {
    id: "rest",
    parola: "rest",
    fonetica: "/rest/",
    descrizione: "Riposo; the rest: il resto.",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "dalla fatica",
            traduzioni: ["riposo", "pausa"],
            esempi: [{ en: "You need a good rest.", it: "Hai bisogno di riposarti bene." }],
          },
          {
            indicazione: "the rest",
            traduzioni: ["il resto", "gli altri"],
            esempi: [
              { en: "I'll do the rest tomorrow.", it: "Il resto lo faccio domani." },
              { en: "The rest of the class went home.", it: "Il resto della classe è andato a casa." },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "rests · rested · rested · resting",
        significati: [
          {
            traduzioni: ["riposare", "riposarsi"],
            esempi: [{ en: "The doctor told me to rest.", it: "Il medico mi ha detto di riposare." }],
          },
        ],
      },
    ],
    attenzione: [
      "Il resto dei soldi in un negozio è change, non rest: Keep the change.",
      "Rest non è riflessivo: I need to rest, non I need to rest myself.",
    ],
  },
  {
    id: "return",
    parola: "return",
    fonetica: "/rɪˈtɜːn/",
    descrizione: "Tornare, o restituire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "returns · returned · returned · returning",
        significati: [
          {
            traduzioni: ["tornare", "ritornare"],
            esempi: [{ en: "She returned from Paris yesterday.", it: "È tornata da Parigi ieri." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        significati: [
          {
            traduzioni: ["restituire", "riportare", "rendere"],
            esempi: [{ en: "I need to return these books to the library.", it: "Devo riportare questi libri in biblioteca." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "il ritorno",
            traduzioni: ["ritorno"],
            esempi: [{ en: "on my return", it: "al mio ritorno" }],
          },
          {
            indicazione: "un biglietto",
            traduzioni: ["andata e ritorno"],
            etichette: ["UK"],
            esempi: [{ en: "A return to London, please.", it: "Un andata e ritorno per Londra, per favore." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "in return",
        significati: [
          {
            traduzioni: ["in cambio"],
            esempi: [{ en: "I helped him and he gave me nothing in return.", it: "L'ho aiutato e non mi ha dato niente in cambio." }],
          },
        ],
      },
    ],
    attenzione: [
      "Return è già \"tornare indietro\": return back è un errore (ripetizione).",
      "Nel parlato si usa di più come back e give back: return è più formale.",
      "Un biglietto di sola andata è a single (UK) o a one-way ticket (US).",
    ],
  },
  {
    id: "right",
    parola: "right",
    fonetica: "/raɪt/",
    descrizione: "Giusto, corretto; anche destra.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "corretto",
            traduzioni: ["giusto", "corretto", "esatto"],
            esempi: [
              { en: "That's the right answer.", it: "È la risposta giusta." },
              { en: "You're right.", it: "Hai ragione." },
            ],
          },
          {
            indicazione: "la direzione",
            traduzioni: ["destro"],
            esempi: [{ en: "my right hand", it: "la mia mano destra" }],
          },
        ],
      },
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "direzione",
            traduzioni: ["a destra"],
            esempi: [{ en: "Turn right at the church.", it: "Gira a destra alla chiesa." }],
          },
          {
            indicazione: "proprio, esattamente",
            traduzioni: ["proprio", "subito"],
            esempi: [
              { en: "I'll be right back.", it: "Torno subito." },
              { en: "He was standing right behind me.", it: "Era proprio dietro di me." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["diritto"],
            esempi: [{ en: "Everyone has the right to vote.", it: "Tutti hanno il diritto di voto." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "right now",
        significati: [
          {
            traduzioni: ["proprio adesso", "subito"],
            esempi: [{ en: "I'm busy right now.", it: "Adesso sono occupato." }],
          },
        ],
      },
      {
        testo: "all right",
        significati: [
          {
            traduzioni: ["va bene", "d'accordo", "tutto bene"],
            esempi: [{ en: "— Are you all right? — Yes, I'm all right.", it: "— Tutto bene? — Sì, tutto bene." }],
          },
        ],
      },
    ],
    attenzione: [
      "Avere ragione è be right, con il verbo essere: You're right, non You have right.",
      "Right non vuol dire \"retto\" nel senso di onesto: per quello si dice honest o upright.",
    ],
    lezioni: [
      { id: "2", riquadro: 8 },
      { id: "19", riquadro: 5 },
    ],
  },
  {
    id: "rise",
    parola: "rise",
    fonetica: "/raɪz/",
    descrizione: "Andare verso l'alto da solo: salire, aumentare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "rises · rose · risen · rising",
        significati: [
          {
            indicazione: "prezzi, numeri",
            traduzioni: ["aumentare", "salire", "crescere"],
            esempi: [{ en: "Prices rose by 5% last year.", it: "L'anno scorso i prezzi sono aumentati del 5%." }],
          },
          {
            indicazione: "il sole, il fumo",
            traduzioni: ["sorgere", "salire", "alzarsi"],
            esempi: [{ en: "The sun rises in the east.", it: "Il sole sorge a est." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["aumento", "crescita"],
            esempi: [{ en: "a sharp rise in unemployment", it: "un forte aumento della disoccupazione" }],
          },
        ],
      },
    ],
    attenzione: [
      "Rise non ha oggetto (qualcosa sale da solo), raise sì (qualcuno alza qualcosa): The sun rises; raise your hand.",
      "Nei grafici si usa spesso: rise, increase, go up (salire) e fall, decrease, go down (scendere).",
    ],
    lezioni: [{ id: "49", riquadro: 3 }],
  },
];
