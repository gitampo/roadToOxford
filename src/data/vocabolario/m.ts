import { Voce } from "@/types/vocabolario";

export const M: Voce[] = [
  {
    id: "magazine",
    parola: "magazine",
    fonetica: "/ˌmæɡəˈziːn/",
    descrizione: "Falso amico: significa \"rivista\", non \"magazzino\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["rivista", "periodico"],
            esempi: [{ en: "She reads a fashion magazine every month.", it: "Legge una rivista di moda ogni mese." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "magazzino",
      spiegazione: "Il magazzino è warehouse, o storeroom se è una stanza piccola.",
    },
  },
  {
    id: "make",
    parola: "make",
    fonetica: "/meɪk/",
    descrizione: "Creare o preparare qualcosa: fare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "makes · made · made · making",
        significati: [
          {
            indicazione: "creare, produrre",
            traduzioni: ["fare", "preparare", "costruire"],
            esempi: [
              { en: "I'll make dinner tonight.", it: "Stasera preparo io la cena." },
              { en: "This table is made of wood.", it: "Questo tavolo è fatto di legno." },
            ],
          },
          {
            indicazione: "con certi nomi",
            traduzioni: ["fare", "prendere"],
            esempi: [
              { en: "Everybody makes mistakes.", it: "Tutti fanno errori." },
              { en: "We need to make a decision.", it: "Dobbiamo prendere una decisione." },
            ],
          },
          {
            indicazione: "make + persona + verbo: costringere, causare",
            traduzioni: ["far fare", "costringere"],
            esempi: [
              { en: "He made me laugh.", it: "Mi ha fatto ridere." },
              { en: "My mum made me tidy my room.", it: "Mia madre mi ha fatto mettere in ordine la camera." },
            ],
          },
          {
            indicazione: "make + persona + aggettivo",
            traduzioni: ["rendere", "far diventare"],
            esempi: [{ en: "The film made me sad.", it: "Il film mi ha reso triste." }],
          },
          {
            indicazione: "soldi",
            traduzioni: ["guadagnare"],
            esempi: [{ en: "She makes a lot of money.", it: "Guadagna molti soldi." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["marca"],
            esempi: [{ en: "What make is your car?", it: "Di che marca è la tua macchina?" }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "make up",
        significati: [
          {
            indicazione: "dopo un litigio",
            traduzioni: ["fare pace"],
            esempi: [{ en: "They argued, but they made up the next day.", it: "Hanno litigato, ma hanno fatto pace il giorno dopo." }],
          },
          {
            indicazione: "una storia, una scusa",
            traduzioni: ["inventare"],
            esempi: [{ en: "He made up an excuse.", it: "Si è inventato una scusa." }],
          },
        ],
      },
      {
        testo: "make out",
        significati: [
          {
            traduzioni: ["distinguere", "riuscire a capire"],
            esempi: [{ en: "I couldn't make out what he was saying.", it: "Non riuscivo a capire cosa diceva." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "make sure",
        significati: [
          {
            traduzioni: ["assicurarsi"],
            esempi: [{ en: "Make sure you lock the door.", it: "Assicurati di chiudere a chiave." }],
          },
        ],
      },
      {
        testo: "make sense",
        significati: [
          {
            traduzioni: ["avere senso"],
            esempi: [{ en: "This sentence doesn't make sense.", it: "Questa frase non ha senso." }],
          },
        ],
      },
    ],
    attenzione: [
      "Make + persona + verbo senza to: He made me cry, non He made me to cry. Al passivo invece il to torna: I was made to wait.",
      "Make o do? Make per creare o produrre (make a cake, make a mistake, make a noise); do per attività e lavori (do homework, do the shopping).",
    ],
    lezioni: [
      { id: "46", riquadro: 1 },
      { id: "46", riquadro: 3 },
      { id: "46", riquadro: 5 },
      { id: "57", riquadro: 5 },
    ],
  },
  {
    id: "matter",
    parola: "matter",
    fonetica: "/ˈmætə(r)/",
    descrizione: "Una questione da affrontare; come verbo, importare.",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "un argomento, un problema",
            traduzioni: ["questione", "faccenda"],
            esempi: [{ en: "It's a private matter.", it: "È una questione privata." }],
          },
          {
            indicazione: "the matter: cosa non va",
            traduzioni: ["problema"],
            esempi: [{ en: "What's the matter? You look upset.", it: "Cosa c'è che non va? Sembri turbato." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "matters · mattered · mattered · mattering",
        significati: [
          {
            traduzioni: ["importare", "contare", "essere importante"],
            esempi: [
              { en: "It doesn't matter.", it: "Non importa." },
              { en: "Your opinion matters to me.", it: "La tua opinione conta per me." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "no matter what",
        significati: [
          {
            traduzioni: ["qualunque cosa succeda", "a ogni costo"],
            esempi: [{ en: "I'll be there, no matter what.", it: "Ci sarò, qualunque cosa succeda." }],
          },
        ],
      },
      {
        testo: "as a matter of fact",
        significati: [
          {
            traduzioni: ["a dire il vero", "in effetti"],
            esempi: [{ en: "As a matter of fact, I've never been to Rome.", it: "A dire il vero, non sono mai stato a Roma." }],
          },
        ],
      },
    ],
    attenzione: [
      "Il soggetto di matter è la cosa che importa: Non mi importa = It doesn't matter to me, oppure I don't care.",
      "Matter non è la materia scolastica: quella è subject.",
    ],
  },
  {
    id: "mean",
    parola: "mean",
    fonetica: "/miːn/",
    descrizione: "Avere un certo significato: voler dire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "means · meant · meant · meaning",
        significati: [
          {
            indicazione: "il significato",
            traduzioni: ["significare", "voler dire"],
            esempi: [{ en: "What does this word mean?", it: "Cosa significa questa parola?" }],
          },
          {
            indicazione: "l'intenzione",
            traduzioni: ["intendere", "voler dire", "avere intenzione di"],
            esempi: [
              { en: "What do you mean?", it: "Cosa intendi?" },
              { en: "I didn't mean to hurt you.", it: "Non volevo farti male." },
            ],
          },
          {
            indicazione: "la conseguenza",
            traduzioni: ["significare", "comportare"],
            esempi: [{ en: "This new job means moving to London.", it: "Questo nuovo lavoro significa trasferirsi a Londra." }],
          },
        ],
      },
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "con le persone",
            traduzioni: ["cattivo", "meschino"],
            esempi: [{ en: "Don't be mean to your brother.", it: "Non essere cattivo con tuo fratello." }],
          },
          {
            indicazione: "con i soldi",
            traduzioni: ["tirchio", "avaro"],
            etichette: ["UK"],
            esempi: [{ en: "He's too mean to buy anyone a drink.", it: "È troppo tirchio per offrire da bere a qualcuno." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "I mean",
        significati: [
          {
            indicazione: "per correggersi o spiegare",
            traduzioni: ["cioè", "voglio dire"],
            esempi: [{ en: "She's coming on Monday, I mean Tuesday.", it: "Arriva lunedì, cioè martedì." }],
          },
        ],
      },
    ],
    attenzione: [
      "Meant si pronuncia /ment/, non /miːnt/.",
      "Means (sempre con la s) è un altro nome e vuol dire \"mezzo\": a means of transport, un mezzo di trasporto. By all means = certamente.",
    ],
  },
  {
    id: "miss",
    parola: "miss",
    fonetica: "/mɪs/",
    descrizione: "Non riuscire a prendere qualcosa, o sentirne la mancanza.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "misses · missed · missed · missing",
        significati: [
          {
            indicazione: "un mezzo, un'occasione",
            traduzioni: ["perdere"],
            esempi: [
              { en: "I missed the bus.", it: "Ho perso l'autobus." },
              { en: "Don't miss this opportunity.", it: "Non perdere questa occasione." },
            ],
          },
          {
            indicazione: "sentire la mancanza",
            traduzioni: ["mancare (a)"],
            esempi: [
              { en: "I miss you.", it: "Mi manchi." },
              { en: "She misses Italy.", it: "Le manca l'Italia." },
            ],
          },
          {
            indicazione: "non colpire",
            traduzioni: ["mancare", "sbagliare"],
            esempi: [{ en: "He missed the penalty.", it: "Ha sbagliato il rigore." }],
          },
          {
            indicazione: "non andare a",
            traduzioni: ["saltare", "perdersi"],
            esempi: [{ en: "I missed the lesson because I was ill.", it: "Ho saltato la lezione perché ero malato." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "davanti al cognome",
        significati: [
          {
            indicazione: "per una donna non sposata",
            traduzioni: ["signorina"],
            esempi: [{ en: "Good morning, Miss Smith.", it: "Buongiorno, signorina Smith." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "miss out (on)",
        significati: [
          {
            traduzioni: ["perdersi (un'occasione)"],
            esempi: [{ en: "Come with us, you don't want to miss out!", it: "Vieni con noi, non vorrai perdertelo!" }],
          },
        ],
      },
    ],
    attenzione: [
      "Miss è al contrario rispetto a \"mancare\": chi sente la mancanza è il soggetto. Mi manchi = I miss you; I miss Rome = mi manca Roma.",
      "Perdere un oggetto è lose (I lost my keys); perdere un mezzo o un'occasione è miss (I missed the train).",
      "Missing come aggettivo vuol dire scomparso o mancante: a missing person, there's a page missing.",
    ],
  },
  {
    id: "morbid",
    parola: "morbid",
    fonetica: "/ˈmɔːbɪd/",
    descrizione: "Falso amico: significa \"morboso\", non \"morbido\".",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["morboso", "macabro"],
            esempi: [{ en: "He has a morbid interest in death.", it: "Ha un interesse morboso per la morte." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "morbido",
      spiegazione: "Morbido si dice soft: a soft pillow, un cuscino morbido.",
    },
  },
  {
    id: "manage",
    parola: "manage",
    fonetica: "/ˈmænɪdʒ/",
    descrizione: "Riuscire a fare qualcosa di difficile; anche dirigere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "manages · managed · managed · managing",
        significati: [
          {
            indicazione: "+ to: con fatica",
            traduzioni: ["riuscire a", "farcela"],
            esempi: [
              { en: "Did you manage to find the hotel?", it: "Sei riuscito a trovare l'albergo?" },
              { en: "Don't worry, I'll manage.", it: "Non preoccuparti, me la cavo." },
            ],
          },
          {
            indicazione: "un'azienda, delle persone",
            traduzioni: ["dirigere", "gestire", "amministrare"],
            esempi: [{ en: "She manages a team of ten people.", it: "Dirige una squadra di dieci persone." }],
          },
        ],
      },
    ],
    attenzione: [
      "Manage to è il modo naturale per dire \"riuscire a\" quando c'è stata una difficoltà; could al passato non va bene per un singolo successo: I managed to pass, non I could pass.",
      "Il manager è chi dirige; nel calcio inglese è anche l'allenatore.",
    ],
  },
  {
    id: "meet",
    parola: "meet",
    fonetica: "/miːt/",
    descrizione: "Trovarsi con qualcuno, o conoscerlo per la prima volta: incontrare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "meets · met · met · meeting",
        significati: [
          {
            indicazione: "per la prima volta",
            traduzioni: ["conoscere"],
            esempi: [
              { en: "Nice to meet you.", it: "Piacere di conoscerti." },
              { en: "Where did you meet your wife?", it: "Dove hai conosciuto tua moglie?" },
            ],
          },
          {
            indicazione: "darsi appuntamento",
            traduzioni: ["incontrarsi", "vedersi", "trovarsi"],
            esempi: [{ en: "Let's meet outside the cinema at eight.", it: "Troviamoci davanti al cinema alle otto." }],
          },
          {
            indicazione: "per caso",
            traduzioni: ["incontrare"],
            esempi: [{ en: "I met Sarah in the supermarket.", it: "Ho incontrato Sarah al supermercato." }],
          },
          {
            indicazione: "andare a prendere",
            traduzioni: ["andare a prendere", "accogliere"],
            esempi: [{ en: "I'll meet you at the airport.", it: "Ti vengo a prendere all'aeroporto." }],
          },
        ],
      },
    ],
    attenzione: [
      "Conoscere qualcuno per la prima volta è meet, non know: I met him last year (l'ho conosciuto l'anno scorso).",
      "Meet non è riflessivo: We met at university, non We met us.",
      "Il nome meeting è la riunione: I've got a meeting at ten.",
    ],
    lezioni: [{ id: "23", riquadro: 3 }],
  },
  {
    id: "mind",
    parola: "mind",
    fonetica: "/maɪnd/",
    descrizione: "La mente; come verbo, dispiacere o dare fastidio.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["mente", "testa"],
            esempi: [
              { en: "She has a brilliant mind.", it: "Ha una mente brillante." },
              { en: "I can't get that song out of my mind.", it: "Non riesco a togliermi quella canzone dalla testa." },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "minds · minded · minded · minding",
        significati: [
          {
            indicazione: "nelle domande e nelle negative",
            traduzioni: ["dispiacere", "dare fastidio"],
            esempi: [
              { en: "Do you mind if I open the window?", it: "Ti dispiace se apro la finestra?" },
              { en: "I don't mind waiting.", it: "Non mi pesa aspettare." },
            ],
          },
          {
            indicazione: "fare attenzione",
            traduzioni: ["fare attenzione a", "badare a"],
            etichette: ["UK"],
            esempi: [{ en: "Mind the gap!", it: "Attenzione allo spazio tra il treno e la banchina!" }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "change your mind",
        significati: [
          {
            traduzioni: ["cambiare idea"],
            esempi: [{ en: "I've changed my mind.", it: "Ho cambiato idea." }],
          },
        ],
      },
      {
        testo: "make up your mind",
        significati: [
          {
            traduzioni: ["decidersi"],
            esempi: [{ en: "Make up your mind!", it: "Deciditi!" }],
          },
        ],
      },
      {
        testo: "Never mind.",
        significati: [
          {
            traduzioni: ["Non importa.", "Lascia stare."],
            esempi: [{ en: "— I forgot your book. — Never mind.", it: "— Ho dimenticato il tuo libro. — Non importa." }],
          },
        ],
      },
    ],
    attenzione: [
      "Would you mind...? è un modo molto cortese per chiedere qualcosa, e vuole -ing: Would you mind closing the door?",
      "Attenzione alla risposta: a Do you mind...? si risponde No, not at all se si è d'accordo (no, non mi dispiace).",
    ],
    lezioni: [
      { id: "48", riquadro: 2 },
      { id: "56", riquadro: 5 },
    ],
  },
  {
    id: "mistake",
    parola: "mistake",
    fonetica: "/mɪˈsteɪk/",
    descrizione: "Una cosa fatta o detta in modo sbagliato: errore.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["errore", "sbaglio"],
            esempi: [
              { en: "Everybody makes mistakes.", it: "Tutti sbagliano." },
              { en: "I took your umbrella by mistake.", it: "Ho preso il tuo ombrello per sbaglio." },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "mistakes · mistook · mistaken · mistaking",
        significati: [
          {
            indicazione: "+ for: confondere",
            traduzioni: ["scambiare per", "confondere con"],
            esempi: [{ en: "I mistook him for his brother.", it: "L'ho scambiato per suo fratello." }],
          },
        ],
      },
    ],
    attenzione: [
      "Fare un errore è make a mistake, non do a mistake.",
      "Mistake (errore in generale) ed error (più formale, tecnico) sono simili: a spelling mistake, a computer error.",
      "Be mistaken vuol dire sbagliarsi: If I'm not mistaken... (se non sbaglio...).",
    ],
    lezioni: [{ id: "46", riquadro: 3 }],
  },
  {
    id: "move",
    parola: "move",
    fonetica: "/muːv/",
    descrizione: "Cambiare posizione: muovere, spostare; anche traslocare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "moves · moved · moved · moving",
        significati: [
          {
            indicazione: "posizione",
            traduzioni: ["muovere", "muoversi", "spostare", "spostarsi"],
            esempi: [
              { en: "Can you move your car, please?", it: "Può spostare la macchina, per favore?" },
              { en: "Don't move!", it: "Non muoverti!" },
            ],
          },
          {
            indicazione: "casa",
            traduzioni: ["traslocare", "trasferirsi"],
            esempi: [
              { en: "We're moving house next month.", it: "Il mese prossimo traslochiamo." },
              { en: "She moved to London in 2020.", it: "Si è trasferita a Londra nel 2020." },
            ],
          },
          {
            indicazione: "le emozioni",
            traduzioni: ["commuovere"],
            esempi: [{ en: "I was deeply moved by the film.", it: "Il film mi ha commosso profondamente." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un'azione, una mossa",
            traduzioni: ["mossa", "passo"],
            esempi: [{ en: "That was a smart move.", it: "È stata una mossa furba." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "move in / move out",
        significati: [
          {
            traduzioni: ["andare ad abitare / lasciare una casa"],
            esempi: [{ en: "We moved in last week.", it: "Ci siamo trasferiti qui la settimana scorsa." }],
          },
        ],
      },
    ],
    attenzione: [
      "Move non è riflessivo: Don't move, non Don't move yourself.",
      "Commovente è moving: a moving story.",
    ],
  },
];
