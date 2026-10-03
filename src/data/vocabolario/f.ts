import { Voce } from "@/types/vocabolario";

export const F: Voce[] = [
  {
    id: "fabric",
    parola: "fabric",
    fonetica: "/ˈfæbrɪk/",
    descrizione: "Falso amico: significa \"tessuto\", non \"fabbrica\".",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "per vestiti, tende...",
            traduzioni: ["tessuto", "stoffa"],
            esempi: [{ en: "This fabric is soft and easy to wash.", it: "Questo tessuto è morbido e facile da lavare." }],
          },
          {
            indicazione: "la struttura di qualcosa",
            traduzioni: ["tessuto", "struttura"],
            etichette: ["formale"],
            esempi: [{ en: "Crime damages the fabric of society.", it: "La criminalità danneggia il tessuto sociale." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "fabbrica",
      spiegazione: "Fabric è la stoffa. La fabbrica è factory.",
    },
  },
  {
    id: "factory",
    parola: "factory",
    fonetica: "/ˈfæktəri/",
    descrizione: "Falso amico: significa \"fabbrica\", non \"fattoria\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["fabbrica", "stabilimento"],
            esempi: [{ en: "My grandfather worked in a car factory.", it: "Mio nonno lavorava in una fabbrica di automobili." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "fattoria",
      spiegazione: "Factory è la fabbrica. La fattoria è farm.",
    },
    attenzione: ["Il plurale è factories: la y diventa ies dopo una consonante."],
  },
  {
    id: "feel",
    parola: "feel",
    fonetica: "/fiːl/",
    descrizione: "Provare una sensazione: sentirsi, sentire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "feels · felt · felt · feeling",
        significati: [
          {
            indicazione: "+ aggettivo: come si sta",
            traduzioni: ["sentirsi"],
            esempi: [
              { en: "I feel tired.", it: "Mi sento stanco." },
              { en: "How are you feeling today?", it: "Come ti senti oggi?" },
            ],
          },
          {
            indicazione: "al tatto",
            traduzioni: ["essere (al tatto)", "sembrare"],
            esempi: [{ en: "This blanket feels so soft.", it: "Questa coperta è morbidissima." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        significati: [
          {
            indicazione: "una sensazione fisica",
            traduzioni: ["sentire"],
            esempi: [{ en: "I felt a drop of rain.", it: "Ho sentito una goccia di pioggia." }],
          },
          {
            indicazione: "un'opinione",
            traduzioni: ["pensare", "ritenere"],
            esempi: [{ en: "I feel that we should wait.", it: "Penso che dovremmo aspettare." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "feel like",
        significati: [
          {
            indicazione: "+ -ing o un nome",
            traduzioni: ["avere voglia di"],
            esempi: [
              { en: "I don't feel like going out tonight.", it: "Stasera non ho voglia di uscire." },
              { en: "I feel like a pizza.", it: "Ho voglia di una pizza." },
            ],
          },
        ],
      },
      {
        testo: "feel free",
        significati: [
          {
            traduzioni: ["fare pure", "non esitare"],
            esempi: [{ en: "Feel free to ask questions.", it: "Fate pure domande." }],
          },
        ],
      },
    ],
    attenzione: [
      "Feel non è riflessivo: I feel happy, non I feel myself happy.",
      "Dopo feel si usa l'aggettivo, non l'avverbio: I feel bad, non I feel badly.",
      "Con feel like si usa -ing: feel like dancing, non feel like to dance.",
    ],
    lezioni: [{ id: "33", riquadro: 6 }],
  },
  {
    id: "find",
    parola: "find",
    fonetica: "/faɪnd/",
    descrizione: "Trovare qualcosa che si cercava, o scoprirla per caso.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "finds · found · found · finding",
        significati: [
          {
            indicazione: "una cosa persa o cercata",
            traduzioni: ["trovare"],
            esempi: [
              { en: "I can't find my keys.", it: "Non trovo le chiavi." },
              { en: "Did you find a flat in London?", it: "Hai trovato un appartamento a Londra?" },
            ],
          },
          {
            indicazione: "un'opinione",
            traduzioni: ["trovare"],
            esempi: [{ en: "I find this book really boring.", it: "Trovo questo libro davvero noioso." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "find out",
        significati: [
          {
            traduzioni: ["scoprire", "venire a sapere"],
            esempi: [{ en: "I found out the truth yesterday.", it: "Ieri ho scoperto la verità." }],
          },
        ],
      },
    ],
    attenzione: [
      "Non confondere find (trovare: found, found) con found (fondare: founded, founded): The University of Oxford was founded in the 12th century.",
      "Per scoprire un'informazione si usa find out, non discover: discover è per le scoperte (Fleming discovered penicillin).",
    ],
    lezioni: [{ id: "46", riquadro: 6 }],
  },
  {
    id: "fine",
    parola: "fine",
    fonetica: "/faɪn/",
    descrizione: "Bene, va bene; come nome, una multa.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "di salute",
            traduzioni: ["bene"],
            esempi: [{ en: "— How are you? — Fine, thanks.", it: "— Come stai? — Bene, grazie." }],
          },
          {
            indicazione: "accettabile",
            traduzioni: ["va bene", "a posto"],
            esempi: [
              { en: "Tomorrow is fine for me.", it: "Domani mi va bene." },
              { en: "Don't worry, everything's fine.", it: "Non preoccuparti, è tutto a posto." },
            ],
          },
          {
            indicazione: "del tempo",
            traduzioni: ["bello"],
            esempi: [{ en: "If it's fine tomorrow, we'll go to the beach.", it: "Se domani è bello, andiamo al mare." }],
          },
          {
            indicazione: "molto sottile",
            traduzioni: ["fine", "sottile"],
            esempi: [{ en: "She has very fine hair.", it: "Ha i capelli molto sottili." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["multa", "contravvenzione"],
            esempi: [{ en: "I got a parking fine.", it: "Ho preso una multa per divieto di sosta." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "fines · fined · fined · fining",
        significati: [
          {
            traduzioni: ["multare"],
            esempi: [{ en: "He was fined £100.", it: "Gli hanno dato una multa di 100 sterline." }],
          },
        ],
      },
    ],
    attenzione: [
      "Fine non vuol dire \"fine\" nel senso di conclusione: quella è the end.",
      "I'm fine è la risposta di tutti i giorni, ma detto in tono secco può voler dire \"lasciami stare\".",
    ],
  },
  {
    id: "free",
    parola: "free",
    fonetica: "/friː/",
    descrizione: "Gratis, oppure libero.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "che non si paga",
            traduzioni: ["gratis", "gratuito"],
            esempi: [{ en: "Entry to the museum is free.", it: "L'ingresso al museo è gratuito." }],
          },
          {
            indicazione: "non occupato",
            traduzioni: ["libero"],
            esempi: [
              { en: "Are you free on Saturday?", it: "Sei libero sabato?" },
              { en: "Is this seat free?", it: "È libero questo posto?" },
            ],
          },
          {
            indicazione: "non prigioniero, non controllato",
            traduzioni: ["libero"],
            esempi: [{ en: "You're free to leave at any time.", it: "Sei libero di andartene quando vuoi." }],
          },
        ],
      },
      {
        categoria: "avverbio",
        significati: [
          {
            traduzioni: ["gratis"],
            esempi: [{ en: "Children travel free.", it: "I bambini viaggiano gratis." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "frees · freed · freed · freeing",
        significati: [
          {
            traduzioni: ["liberare"],
            esempi: [{ en: "The prisoners were freed.", it: "I prigionieri sono stati liberati." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "for free",
        significati: [
          {
            traduzioni: ["gratis"],
            esempi: [{ en: "I got these tickets for free.", it: "Ho avuto questi biglietti gratis." }],
          },
        ],
      },
      {
        testo: "free time",
        significati: [
          {
            traduzioni: ["tempo libero"],
            esempi: [{ en: "What do you do in your free time?", it: "Cosa fai nel tempo libero?" }],
          },
        ],
      },
    ],
    attenzione: [
      "-free in fondo a una parola vuol dire \"senza\": sugar-free = senza zucchero, tax-free = esentasse, gluten-free = senza glutine.",
    ],
  },
  {
    id: "fail",
    parola: "fail",
    fonetica: "/feɪl/",
    descrizione: "Non riuscire in qualcosa; un esame: essere bocciato.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "fails · failed · failed · failing",
        significati: [
          {
            indicazione: "un esame",
            traduzioni: ["essere bocciato a", "non superare", "bocciare"],
            esempi: [
              { en: "I failed my driving test.", it: "Non ho passato l'esame di guida." },
              { en: "The teacher failed half the class.", it: "L'insegnante ha bocciato metà della classe." },
            ],
          },
          {
            indicazione: "non riuscire",
            traduzioni: ["fallire", "non riuscire a"],
            esempi: [
              { en: "The plan failed.", it: "Il piano è fallito." },
              { en: "He failed to arrive on time.", it: "Non è riuscito ad arrivare in orario." },
            ],
          },
          {
            indicazione: "una macchina, un organo",
            traduzioni: ["guastarsi", "smettere di funzionare"],
            esempi: [{ en: "The brakes failed.", it: "I freni non hanno funzionato." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "without fail",
        significati: [
          {
            traduzioni: ["immancabilmente", "senza fallo"],
            esempi: [{ en: "He calls his mother every Sunday without fail.", it: "Chiama sua madre ogni domenica, immancabilmente." }],
          },
        ],
      },
    ],
    attenzione: [
      "Un'azienda che fallisce (in bancarotta) è go bankrupt o go bust, non fail.",
      "Il nome è failure: fallimento, insuccesso. Una persona che non combina niente è a failure.",
    ],
  },
  {
    id: "fair",
    parola: "fair",
    fonetica: "/feə(r)/",
    descrizione: "Che tratta tutti allo stesso modo: giusto, equo.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "giusto",
            traduzioni: ["giusto", "equo", "corretto"],
            esempi: [
              { en: "It's not fair!", it: "Non è giusto!" },
              { en: "She's a strict but fair teacher.", it: "È un'insegnante severa ma giusta." },
            ],
          },
          {
            indicazione: "capelli, pelle",
            traduzioni: ["biondo", "chiaro"],
            esempi: [{ en: "He has fair hair and blue eyes.", it: "Ha i capelli biondi e gli occhi azzurri." }],
          },
          {
            indicazione: "abbastanza buono",
            traduzioni: ["discreto", "ragionevole"],
            esempi: [{ en: "There's a fair chance we'll win.", it: "Abbiamo buone possibilità di vincere." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["fiera", "luna park"],
            esempi: [{ en: "We went to the book fair in London.", it: "Siamo andati alla fiera del libro di Londra." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "fair enough",
        significati: [
          {
            traduzioni: ["giusto", "va bene", "d'accordo"],
            etichette: ["UK", "informale"],
            esempi: [{ en: "— I'm too tired to go out. — Fair enough.", it: "— Sono troppo stanco per uscire. — Va bene, ci sta." }],
          },
        ],
      },
    ],
    attenzione: [
      "Fair si pronuncia come fare (la tariffa del biglietto): /feə/.",
      "Fair play è il comportamento corretto, anche fuori dallo sport.",
    ],
  },
  {
    id: "fall",
    parola: "fall",
    fonetica: "/fɔːl/",
    descrizione: "Andare giù all'improvviso: cadere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "falls · fell · fallen · falling",
        significati: [
          {
            indicazione: "verso il basso",
            traduzioni: ["cadere"],
            esempi: [
              { en: "She fell and broke her arm.", it: "È caduta e si è rotta un braccio." },
              { en: "The leaves fall in autumn.", it: "In autunno cadono le foglie." },
            ],
          },
          {
            indicazione: "prezzi, numeri",
            traduzioni: ["scendere", "calare", "diminuire"],
            esempi: [{ en: "Prices fell by 10%.", it: "I prezzi sono scesi del 10%." }],
          },
          {
            indicazione: "+ aggettivo: cambiare stato",
            traduzioni: ["cadere", "diventare"],
            esempi: [{ en: "I fell asleep on the sofa.", it: "Mi sono addormentato sul divano." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "una caduta",
            traduzioni: ["caduta", "calo"],
            esempi: [{ en: "a fall in temperature", it: "un calo della temperatura" }],
          },
          {
            indicazione: "la stagione",
            traduzioni: ["autunno"],
            etichette: ["US"],
            esempi: [{ en: "We'll visit in the fall.", it: "Verremo in autunno." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "fall out (with)",
        significati: [
          {
            traduzioni: ["litigare (con)", "rompere i rapporti"],
            esempi: [{ en: "She's fallen out with her best friend.", it: "Ha litigato con la sua migliore amica." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "fall in love (with)",
        significati: [
          {
            traduzioni: ["innamorarsi (di)"],
            esempi: [{ en: "They fell in love in Paris.", it: "Si sono innamorati a Parigi." }],
          },
        ],
      },
    ],
    attenzione: [
      "Non confondere fell (passato di fall) con felt (passato di feel), né fall (cadere) con feel (sentire).",
      "Far cadere qualcosa non è fall ma drop: I dropped my phone.",
    ],
    lezioni: [
      { id: "49", riquadro: 3 },
      { id: "56", riquadro: 5 },
    ],
  },
  {
    id: "firm",
    parola: "firm",
    fonetica: "/fɜːm/",
    descrizione: "Falso amico: come nome è \"ditta, azienda\", non \"firma\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["ditta", "azienda", "studio"],
            esempi: [{ en: "She works for a law firm.", it: "Lavora in uno studio legale." }],
          },
        ],
      },
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "non morbido",
            traduzioni: ["sodo", "rigido", "compatto"],
            esempi: [{ en: "a firm mattress", it: "un materasso rigido" }],
          },
          {
            indicazione: "deciso",
            traduzioni: ["fermo", "deciso", "risoluto"],
            esempi: [{ en: "Parents need to be firm with their children.", it: "I genitori devono essere fermi con i figli." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "firma",
      spiegazione: "La firma è signature; firmare è sign: Sign here, please.",
    },
  },
  {
    id: "fit",
    parola: "fit",
    fonetica: "/fɪt/",
    descrizione: "Avere la misura giusta: andare bene, stare; come aggettivo, in forma.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "fits · fitted (US fit) · fitted (US fit) · fitting",
        significati: [
          {
            indicazione: "un vestito",
            traduzioni: ["andare bene", "stare (bene)"],
            esempi: [{ en: "These jeans don't fit me any more.", it: "Questi jeans non mi vanno più." }],
          },
          {
            indicazione: "lo spazio",
            traduzioni: ["entrare", "starci"],
            esempi: [{ en: "Will the sofa fit through the door?", it: "Il divano passerà dalla porta?" }],
          },
        ],
      },
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "fisicamente",
            traduzioni: ["in forma", "allenato"],
            esempi: [{ en: "I go to the gym to keep fit.", it: "Vado in palestra per tenermi in forma." }],
          },
          {
            indicazione: "+ for / to: adatto",
            traduzioni: ["adatto", "idoneo"],
            esempi: [{ en: "This food isn't fit to eat.", it: "Questo cibo non è commestibile." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "fit in",
        significati: [
          {
            traduzioni: ["inserirsi", "integrarsi"],
            esempi: [{ en: "It's hard to fit in at a new school.", it: "È difficile inserirsi in una scuola nuova." }],
          },
        ],
      },
    ],
    attenzione: [
      "Fit riguarda la taglia, suit lo stile o il colore: The dress fits you (è della tua taglia), Red suits you (il rosso ti dona).",
    ],
  },
  {
    id: "fix",
    parola: "fix",
    fonetica: "/fɪks/",
    descrizione: "Rimettere in funzione qualcosa: aggiustare; anche fissare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "fixes · fixed · fixed · fixing",
        significati: [
          {
            indicazione: "una cosa rotta",
            traduzioni: ["aggiustare", "riparare"],
            esempi: [{ en: "Can you fix my bike?", it: "Mi aggiusti la bici?" }],
          },
          {
            indicazione: "una data, un prezzo",
            traduzioni: ["fissare", "stabilire"],
            esempi: [{ en: "Let's fix a date for the meeting.", it: "Fissiamo una data per la riunione." }],
          },
          {
            indicazione: "a un muro",
            traduzioni: ["fissare", "attaccare"],
            esempi: [{ en: "He fixed the shelf to the wall.", it: "Ha fissato la mensola al muro." }],
          },
          {
            indicazione: "cibo, bevande",
            traduzioni: ["preparare"],
            etichette: ["US", "informale"],
            esempi: [{ en: "I'll fix you a drink.", it: "Ti preparo qualcosa da bere." }],
          },
        ],
      },
    ],
    attenzione: [
      "Fissare una persona (guardarla a lungo) non è fix ma stare: Stop staring at me!",
    ],
  },
  {
    id: "follow",
    parola: "follow",
    fonetica: "/ˈfɒləʊ/",
    descrizione: "Andare dietro a qualcuno o qualcosa: seguire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "follows · followed · followed · following",
        significati: [
          {
            indicazione: "andare dietro",
            traduzioni: ["seguire"],
            esempi: [{ en: "Follow me, please.", it: "Seguitemi, per favore." }],
          },
          {
            indicazione: "consigli, istruzioni",
            traduzioni: ["seguire", "rispettare"],
            esempi: [{ en: "Follow the instructions carefully.", it: "Segui attentamente le istruzioni." }],
          },
          {
            indicazione: "capire",
            traduzioni: ["seguire", "capire"],
            esempi: [{ en: "Sorry, I don't follow you.", it: "Scusa, non ti seguo." }],
          },
          {
            indicazione: "venire dopo",
            traduzioni: ["seguire", "venire dopo"],
            esempi: [{ en: "Dinner will be followed by a concert.", it: "Alla cena seguirà un concerto." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "as follows",
        significati: [
          {
            traduzioni: ["come segue", "i seguenti"],
            etichette: ["formale"],
            esempi: [{ en: "The rules are as follows.", it: "Le regole sono le seguenti." }],
          },
        ],
      },
    ],
    attenzione: [
      "Following è anche un aggettivo (the following day = il giorno seguente) e una preposizione formale (following the meeting = dopo la riunione).",
    ],
  },
  {
    id: "forget",
    parola: "forget",
    fonetica: "/fəˈɡet/",
    descrizione: "Non ricordare più: dimenticare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "forgets · forgot · forgotten · forgetting",
        significati: [
          {
            indicazione: "un'informazione",
            traduzioni: ["dimenticare", "dimenticarsi di"],
            esempi: [
              { en: "I forgot her birthday.", it: "Mi sono dimenticato del suo compleanno." },
              { en: "Don't forget to call me.", it: "Non dimenticarti di chiamarmi." },
            ],
          },
          {
            indicazione: "un oggetto",
            traduzioni: ["dimenticare"],
            esempi: [{ en: "I forgot my keys.", it: "Ho dimenticato le chiavi." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "Forget it!",
        significati: [
          {
            traduzioni: ["Lascia perdere!", "Non importa!", "Scordatelo!"],
            etichette: ["informale"],
            esempi: [{ en: "— Sorry! — Forget it.", it: "— Scusa! — Non importa." }],
          },
        ],
      },
    ],
    attenzione: [
      "Forget non è riflessivo: I forgot, non I forgot myself.",
      "Con il luogo si usa leave, non forget: I left my keys at home (non I forgot my keys at home).",
      "Forget to + verbo = dimenticare di fare; forget + -ing = dimenticare di aver fatto: I'll never forget meeting you.",
    ],
    lezioni: [{ id: "13", riquadro: 3 }],
  },
  {
    id: "funny",
    parola: "funny",
    fonetica: "/ˈfʌni/",
    descrizione: "Che fa ridere: divertente; ma anche strano.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "che fa ridere",
            traduzioni: ["divertente", "buffo", "comico"],
            esempi: [{ en: "He told a really funny joke.", it: "Ha raccontato una barzelletta divertentissima." }],
          },
          {
            indicazione: "insolito",
            traduzioni: ["strano", "curioso"],
            esempi: [
              { en: "That's funny, I'm sure I left it here.", it: "Strano, sono sicuro di averlo lasciato qui." },
              { en: "This milk tastes funny.", it: "Questo latte ha un sapore strano." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Funny non vuol dire \"divertente\" nel senso di piacevole: per una festa o una gita si dice fun (The party was fun). Funny è ciò che fa ridere.",
      "Per chiarire si chiede: Funny ha-ha or funny strange? (divertente o strano?).",
    ],
  },
];
