import { Voce } from "@/types/vocabolario";

export const B: Voce[] = [
  {
    id: "borrow",
    parola: "borrow",
    fonetica: "/ˈbɒrəʊ/",
    descrizione: "Prendere qualcosa in prestito da qualcuno.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "borrows · borrowed · borrowed · borrowing",
        significati: [
          {
            indicazione: "farsi dare per un po'",
            traduzioni: ["prendere in prestito", "farsi prestare"],
            esempi: [
              { en: "Can I borrow your pen?", it: "Mi presti la penna?" },
              { en: "I borrowed three books from the library.", it: "Ho preso in prestito tre libri in biblioteca." },
            ],
          },
          {
            indicazione: "parole, idee",
            traduzioni: ["prendere", "riprendere"],
            esempi: [
              { en: "English has borrowed many words from French.", it: "L'inglese ha preso molte parole dal francese." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Borrow è prendere, lend è dare: I borrowed a book from Anna = Anna lent me a book.",
      "\"Mi presti...?\" si dice Can I borrow...? oppure Can you lend me...? Mai Can you borrow me...?",
    ],
  },
  {
    id: "break",
    parola: "break",
    fonetica: "/breɪk/",
    descrizione: "Rompere qualcosa, o rompersi.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "breaks · broke · broken · breaking",
        significati: [
          {
            indicazione: "un oggetto, un osso",
            traduzioni: ["rompere"],
            esempi: [
              { en: "I've broken my glasses.", it: "Ho rotto gli occhiali." },
              { en: "She broke her leg skiing.", it: "Si è rotta una gamba sciando." },
            ],
          },
          {
            indicazione: "una regola, una promessa",
            traduzioni: ["infrangere", "violare", "non mantenere"],
            esempi: [
              { en: "He broke his promise.", it: "Non ha mantenuto la promessa." },
              { en: "You're breaking the law.", it: "Stai violando la legge." },
            ],
          },
          {
            indicazione: "un record",
            traduzioni: ["battere"],
            esempi: [{ en: "She broke the world record.", it: "Ha battuto il record del mondo." }],
          },
          {
            indicazione: "una notizia",
            traduzioni: ["dare", "comunicare"],
            esempi: [{ en: "I don't know how to break the news to her.", it: "Non so come darle la notizia." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        significati: [
          {
            traduzioni: ["rompersi", "guastarsi"],
            esempi: [
              { en: "The washing machine has broken.", it: "La lavatrice si è rotta." },
              { en: "The glass fell and broke.", it: "Il bicchiere è caduto e si è rotto." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "dal lavoro, dallo studio",
            traduzioni: ["pausa", "intervallo"],
            esempi: [{ en: "Let's take a ten-minute break.", it: "Facciamo una pausa di dieci minuti." }],
          },
          {
            indicazione: "una vacanza breve",
            traduzioni: ["vacanza", "vacanze"],
            esempi: [{ en: "We had a weekend break in Edinburgh.", it: "Abbiamo fatto un fine settimana di vacanza a Edimburgo." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "break down",
        significati: [
          {
            indicazione: "una macchina",
            traduzioni: ["guastarsi", "andare in panne"],
            esempi: [{ en: "Our car broke down on the motorway.", it: "La macchina si è guastata in autostrada." }],
          },
          {
            indicazione: "una persona",
            traduzioni: ["crollare", "scoppiare a piangere"],
            esempi: [{ en: "She broke down when she heard the news.", it: "È crollata quando ha sentito la notizia." }],
          },
        ],
      },
      {
        testo: "break up",
        significati: [
          {
            indicazione: "una coppia",
            traduzioni: ["lasciarsi"],
            esempi: [{ en: "They broke up after five years.", it: "Si sono lasciati dopo cinque anni." }],
          },
        ],
      },
      {
        testo: "break into",
        significati: [
          {
            traduzioni: ["entrare (per rubare)", "scassinare"],
            esempi: [{ en: "Someone broke into our house last night.", it: "Ieri notte i ladri sono entrati in casa nostra." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "break the ice",
        significati: [
          {
            traduzioni: ["rompere il ghiaccio"],
            esempi: [{ en: "He told a joke to break the ice.", it: "Ha raccontato una barzelletta per rompere il ghiaccio." }],
          },
        ],
      },
      {
        testo: "Break a leg!",
        significati: [
          {
            indicazione: "prima di uno spettacolo",
            traduzioni: ["In bocca al lupo!"],
            esempi: [{ en: "Your first show tonight? Break a leg!", it: "Stasera la prima? In bocca al lupo!" }],
          },
        ],
      },
    ],
    attenzione: [
      "Con le parti del corpo l'inglese usa il possessivo: I broke my arm, non I broke the arm.",
      "Il participio è broken: I have broken, non I have broke.",
    ],
    lezioni: [
      { id: "47", riquadro: 5 },
      { id: "57", riquadro: 6 },
      { id: "56", riquadro: 6 },
    ],
  },
  {
    id: "bring",
    parola: "bring",
    fonetica: "/brɪŋ/",
    descrizione: "Portare qualcosa o qualcuno verso chi parla.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "brings · brought · brought · bringing",
        significati: [
          {
            indicazione: "verso chi parla o chi ascolta",
            traduzioni: ["portare"],
            esempi: [
              { en: "Can you bring me a glass of water?", it: "Mi porti un bicchiere d'acqua?" },
              { en: "Bring your sister to the party!", it: "Porta tua sorella alla festa!" },
            ],
          },
          {
            indicazione: "causare",
            traduzioni: ["portare", "causare"],
            esempi: [
              { en: "Money doesn't always bring happiness.", it: "I soldi non sempre portano la felicità." },
            ],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "bring up",
        significati: [
          {
            indicazione: "un figlio",
            traduzioni: ["crescere", "allevare"],
            esempi: [{ en: "She was brought up by her grandparents.", it: "È stata cresciuta dai nonni." }],
          },
          {
            indicazione: "un argomento",
            traduzioni: ["sollevare", "tirare fuori"],
            esempi: [{ en: "Don't bring up politics at dinner.", it: "Non tirare fuori la politica a cena." }],
          },
        ],
      },
      {
        testo: "bring back",
        significati: [
          {
            indicazione: "un oggetto",
            traduzioni: ["riportare"],
            esempi: [{ en: "Bring it back when you've finished.", it: "Riportalo quando hai finito." }],
          },
          {
            indicazione: "ricordi",
            traduzioni: ["far tornare in mente"],
            esempi: [{ en: "This song brings back memories.", it: "Questa canzone mi riporta alla mente tanti ricordi." }],
          },
        ],
      },
    ],
    attenzione: [
      "Bring è portare verso qui (dove sono io, o dove sei tu); take è portare verso lì. Bring it here, ma Take it to the office.",
      "Brought si pronuncia /brɔːt/ e fa rima con bought /bɔːt/ (il passato di buy): attenzione a non confonderli.",
    ],
    lezioni: [{ id: "47", riquadro: 5 }],
  },
  {
    id: "become",
    parola: "become",
    fonetica: "/bɪˈkʌm/",
    descrizione: "Cominciare a essere qualcosa: diventare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "becomes · became · become · becoming",
        significati: [
          {
            indicazione: "+ nome o aggettivo",
            traduzioni: ["diventare"],
            esempi: [
              { en: "She wants to become a doctor.", it: "Vuole diventare medico." },
              { en: "It's becoming difficult to find a flat.", it: "Sta diventando difficile trovare un appartamento." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Become è un po' formale. Nel parlato, con gli aggettivi, si usa spesso get: It's getting cold (sta diventando freddo).",
      "Il participio è become, come il presente: She has become famous.",
      "Con i mestieri serve l'articolo: become a teacher, non become teacher.",
    ],
  },
  {
    id: "believe",
    parola: "believe",
    fonetica: "/bɪˈliːv/",
    descrizione: "Pensare che qualcosa sia vero: credere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "believes · believed · believed · believing",
        significati: [
          {
            indicazione: "una persona, una notizia",
            traduzioni: ["credere (a)"],
            esempi: [
              { en: "I don't believe you.", it: "Non ti credo." },
              { en: "I can't believe it!", it: "Non ci posso credere!" },
            ],
          },
          {
            indicazione: "+ that: un'opinione",
            traduzioni: ["credere", "ritenere"],
            esempi: [{ en: "I believe that everyone deserves a second chance.", it: "Credo che tutti meritino una seconda possibilità." }],
          },
          {
            indicazione: "+ in: esistenza, fiducia",
            traduzioni: ["credere in"],
            esempi: [
              { en: "Do you believe in ghosts?", it: "Credi ai fantasmi?" },
              { en: "Believe in yourself.", it: "Credi in te stesso." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Believe è un verbo di stato: non va al -ing. I believe you, non I'm believing you.",
      "Credere a una persona è believe + persona, senza preposizioni: I believe her. Believe in vuol dire avere fiducia o credere che esista.",
    ],
    lezioni: [{ id: "13", riquadro: 3 }],
  },
  {
    id: "bill",
    parola: "bill",
    fonetica: "/bɪl/",
    descrizione: "Il foglio con quanto si deve pagare: conto, bolletta.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "al ristorante",
            traduzioni: ["conto"],
            etichette: ["UK"],
            esempi: [{ en: "Could we have the bill, please?", it: "Ci porta il conto, per favore?" }],
          },
          {
            indicazione: "luce, gas, telefono",
            traduzioni: ["bolletta", "fattura"],
            esempi: [{ en: "We need to pay the electricity bill.", it: "Dobbiamo pagare la bolletta della luce." }],
          },
          {
            indicazione: "in parlamento",
            traduzioni: ["disegno di legge", "progetto di legge"],
            esempi: [{ en: "Parliament passed the bill.", it: "Il Parlamento ha approvato il disegno di legge." }],
          },
          {
            indicazione: "denaro",
            traduzioni: ["banconota"],
            etichette: ["US"],
            esempi: [{ en: "a ten-dollar bill", it: "una banconota da dieci dollari" }],
          },
        ],
      },
    ],
    attenzione: [
      "Al ristorante in America si dice check: Can I have the check? In Gran Bretagna banconota è note: a ten-pound note.",
    ],
    lezioni: [{ id: "20", riquadro: 5 }],
  },
  {
    id: "bored",
    parola: "bored",
    fonetica: "/bɔːd/",
    descrizione: "Che si annoia: annoiato.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["annoiato"],
            esempi: [
              { en: "I'm bored. Let's go out.", it: "Mi annoio. Usciamo." },
              { en: "She got bored of waiting.", it: "Si è stufata di aspettare." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "bored stiff / bored to death",
        significati: [
          {
            traduzioni: ["annoiato a morte"],
            etichette: ["informale"],
            esempi: [{ en: "I was bored to death at the party.", it: "Alla festa mi sono annoiato a morte." }],
          },
        ],
      },
    ],
    attenzione: [
      "Bored è chi si annoia, boring è ciò che annoia: I'm bored = mi annoio; I'm boring = sono noioso!",
      "La stessa regola vale per tutte le coppie in -ed e -ing: interested/interesting, tired/tiring, excited/exciting.",
    ],
    lezioni: [{ id: "2", riquadro: 9 }],
  },
  {
    id: "brave",
    parola: "brave",
    fonetica: "/breɪv/",
    descrizione: "Falso amico: significa \"coraggioso\", non \"bravo\".",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["coraggioso"],
            esempi: [
              { en: "It was very brave of you to say that.", it: "È stato molto coraggioso da parte tua dirlo." },
              { en: "The firefighters were incredibly brave.", it: "I vigili del fuoco sono stati incredibilmente coraggiosi." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "bravo",
      spiegazione:
        "Bravo in qualcosa si dice good at: She's good at maths = è brava in matematica. Bravo! per complimentarsi è Well done!",
    },
  },
  {
    id: "busy",
    parola: "busy",
    fonetica: "/ˈbɪzi/",
    descrizione: "Che ha molto da fare: impegnato, occupato.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "una persona",
            traduzioni: ["impegnato", "occupato", "indaffarato"],
            esempi: [
              { en: "Sorry, I'm busy right now.", it: "Scusa, adesso sono occupato." },
              { en: "She's busy studying for her exams.", it: "È presa a studiare per gli esami." },
            ],
          },
          {
            indicazione: "un luogo, un periodo",
            traduzioni: ["affollato", "trafficato", "intenso"],
            esempi: [{ en: "Oxford Street is always busy.", it: "Oxford Street è sempre affollata." }],
          },
          {
            indicazione: "il telefono",
            traduzioni: ["occupato"],
            etichette: ["US"],
            esempi: [{ en: "The line is busy.", it: "La linea è occupata." }],
          },
        ],
      },
    ],
    attenzione: [
      "Si pronuncia /ˈbɪzi/, con la i: la u di busy si legge come una i, come in business /ˈbɪznəs/.",
      "Busy + -ing per dire cosa si sta facendo: I'm busy cooking, non I'm busy to cook.",
    ],
  },
  {
    id: "buy",
    parola: "buy",
    fonetica: "/baɪ/",
    descrizione: "Avere qualcosa pagandola: comprare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "buys · bought · bought · buying",
        significati: [
          {
            indicazione: "pagando",
            traduzioni: ["comprare", "acquistare"],
            esempi: [
              { en: "I bought a new jacket.", it: "Ho comprato una giacca nuova." },
              { en: "Let me buy you a drink.", it: "Lascia che ti offra da bere." },
            ],
          },
          {
            indicazione: "credere a una scusa",
            traduzioni: ["bere", "credere a"],
            etichette: ["informale"],
            esempi: [{ en: "He said he was ill, but I don't buy it.", it: "Ha detto che era malato, ma io non me la bevo." }],
          },
        ],
      },
    ],
    attenzione: [
      "Bought si pronuncia /bɔːt/ e fa rima con brought (il passato di bring): attenzione a non confonderli.",
      "Comprare qualcosa a qualcuno: buy somebody something (buy me a coffee) o buy something for somebody.",
    ],
    lezioni: [{ id: "23", riquadro: 3 }],
  },
];
