import { Voce } from "@/types/vocabolario";

export const D: Voce[] = [
  {
    id: "do",
    parola: "do",
    fonetica: "/duː/",
    descrizione: "Fare un'attività o un lavoro; serve anche per le domande e le negative.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "does · did · done · doing",
        significati: [
          {
            indicazione: "un'attività in generale",
            traduzioni: ["fare"],
            esempi: [
              { en: "What are you doing?", it: "Cosa stai facendo?" },
              { en: "What do you do?", it: "Che lavoro fai?" },
            ],
          },
          {
            indicazione: "lavori, compiti, faccende",
            traduzioni: ["fare"],
            esempi: [
              { en: "I do my homework after dinner.", it: "Faccio i compiti dopo cena." },
              { en: "Who does the cooking at home?", it: "Chi cucina a casa?" },
            ],
          },
          {
            indicazione: "una materia di studio",
            traduzioni: ["studiare", "fare"],
            etichette: ["UK"],
            esempi: [{ en: "She's doing law at Oxford.", it: "Fa giurisprudenza a Oxford." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        significati: [
          {
            indicazione: "andare bene",
            traduzioni: ["bastare", "andare bene"],
            esempi: [{ en: "Any chair will do.", it: "Va bene una sedia qualsiasi." }],
          },
          {
            indicazione: "come va una cosa",
            traduzioni: ["andare"],
            esempi: [{ en: "How did you do in the exam?", it: "Come ti è andato l'esame?" }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "ausiliare",
        significati: [
          {
            indicazione: "nelle domande e nelle negative",
            traduzioni: ["(non si traduce)"],
            esempi: [
              { en: "Do you speak English?", it: "Parli inglese?" },
              { en: "I don't like coffee.", it: "Non mi piace il caffè." },
            ],
          },
          {
            indicazione: "per dare enfasi",
            traduzioni: ["davvero", "sì che"],
            esempi: [{ en: "I do love you!", it: "Ti amo davvero!" }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "do up",
        significati: [
          {
            indicazione: "un vestito",
            traduzioni: ["allacciare", "abbottonare"],
            esempi: [{ en: "Do up your coat, it's cold.", it: "Abbottonati il cappotto, fa freddo." }],
          },
          {
            indicazione: "una casa",
            traduzioni: ["ristrutturare"],
            etichette: ["UK"],
            esempi: [{ en: "They're doing up an old cottage.", it: "Stanno ristrutturando un vecchio cottage." }],
          },
        ],
      },
      {
        testo: "do without",
        significati: [
          {
            traduzioni: ["fare a meno di"],
            esempi: [{ en: "I can't do without my morning coffee.", it: "Non posso fare a meno del caffè del mattino." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "do your best",
        significati: [
          {
            traduzioni: ["fare del proprio meglio"],
            esempi: [{ en: "Don't worry, just do your best.", it: "Non preoccuparti, fai del tuo meglio." }],
          },
        ],
      },
      {
        testo: "How do you do?",
        significati: [
          {
            indicazione: "al primo incontro",
            traduzioni: ["piacere"],
            etichette: ["formale"],
            esempi: [{ en: "— How do you do? — How do you do?", it: "— Piacere. — Piacere." }],
          },
        ],
      },
    ],
    attenzione: [
      "Do e make vogliono dire tutti e due \"fare\": do per le attività e i lavori (do homework, do the shopping), make per creare o produrre qualcosa (make a cake, make a mistake).",
      "How do you do? non è una domanda: si risponde ripetendo How do you do?",
      "Con la terza persona è does: Does she work? She doesn't work. Il verbo dopo resta senza -s.",
    ],
    lezioni: [
      { id: "10", riquadro: 4 },
      { id: "10", riquadro: 5 },
      { id: "45", riquadro: 1 },
      { id: "45", riquadro: 2 },
    ],
  },
  {
    id: "date",
    parola: "date",
    fonetica: "/deɪt/",
    descrizione: "Il giorno preciso in cui succede qualcosa: data; anche un appuntamento romantico.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "sul calendario",
            traduzioni: ["data"],
            esempi: [{ en: "What's the date today?", it: "Quanti ne abbiamo oggi?" }],
          },
          {
            indicazione: "romantico",
            traduzioni: ["appuntamento", "uscita"],
            esempi: [{ en: "They went on a date last night.", it: "Ieri sera sono usciti insieme." }],
          },
          {
            indicazione: "il frutto",
            traduzioni: ["dattero"],
            esempi: [{ en: "a box of dates", it: "una scatola di datteri" }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "dates · dated · dated · dating",
        significati: [
          {
            indicazione: "una persona",
            traduzioni: ["uscire con", "frequentare"],
            esempi: [{ en: "She's dating a guy from work.", it: "Esce con un ragazzo del lavoro." }],
          },
          {
            indicazione: "+ from / back to: l'epoca",
            traduzioni: ["risalire a"],
            esempi: [{ en: "The church dates from the 12th century.", it: "La chiesa risale al XII secolo." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "up to date / out of date",
        significati: [
          {
            traduzioni: ["aggiornato / superato, scaduto"],
            esempi: [
              { en: "This map is out of date.", it: "Questa cartina è vecchia." },
              { en: "Keep your software up to date.", it: "Tieni aggiornato il software." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Un appuntamento di lavoro o dal medico non è a date ma an appointment: I have a dentist's appointment.",
      "Le date britanniche si scrivono giorno/mese/anno, quelle americane mese/giorno/anno: 04/07 è il 4 luglio a Londra e il 7 aprile a New York.",
    ],
    lezioni: [{ id: "8", riquadro: 8 }],
  },
  {
    id: "deal",
    parola: "deal",
    fonetica: "/diːl/",
    descrizione: "Un accordo; come verbo, occuparsi di qualcosa.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un accordo",
            traduzioni: ["accordo", "affare", "patto"],
            esempi: [
              { en: "We made a deal.", it: "Abbiamo fatto un patto." },
              { en: "It's a good deal.", it: "È un buon affare." },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "deals · dealt · dealt · dealing",
        significati: [
          {
            indicazione: "+ with: un problema, una persona",
            traduzioni: ["occuparsi di", "gestire", "affrontare"],
            esempi: [
              { en: "I'll deal with it tomorrow.", it: "Me ne occupo domani." },
              { en: "She deals with difficult customers every day.", it: "Ogni giorno ha a che fare con clienti difficili." },
            ],
          },
          {
            indicazione: "+ with: un argomento",
            traduzioni: ["trattare di"],
            esempi: [{ en: "The book deals with the First World War.", it: "Il libro tratta della prima guerra mondiale." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "a great deal (of)",
        significati: [
          {
            traduzioni: ["molto", "una grande quantità di"],
            esempi: [{ en: "She spends a great deal of time reading.", it: "Passa molto tempo a leggere." }],
          },
        ],
      },
      {
        testo: "It's a deal! / Deal!",
        significati: [
          {
            traduzioni: ["Affare fatto!", "D'accordo!"],
            etichette: ["informale"],
            esempi: [{ en: "— I'll cook if you wash up. — Deal!", it: "— Io cucino se tu lavi i piatti. — Affare fatto!" }],
          },
        ],
      },
      {
        testo: "no big deal",
        significati: [
          {
            traduzioni: ["niente di che", "non è un problema"],
            etichette: ["informale"],
            esempi: [{ en: "Don't worry, it's no big deal.", it: "Non preoccuparti, non è niente di grave." }],
          },
        ],
      },
    ],
    attenzione: ["Dealt si pronuncia /delt/, con la e breve."],
  },
  {
    id: "decide",
    parola: "decide",
    fonetica: "/dɪˈsaɪd/",
    descrizione: "Scegliere dopo averci pensato: decidere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "decides · decided · decided · deciding",
        significati: [
          {
            traduzioni: ["decidere"],
            esempi: [
              { en: "I've decided to study medicine.", it: "Ho deciso di studiare medicina." },
              { en: "We can't decide where to go.", it: "Non riusciamo a decidere dove andare." },
            ],
          },
          {
            indicazione: "+ on: scegliere tra più cose",
            traduzioni: ["scegliere", "optare per"],
            esempi: [{ en: "Have you decided on a name for the baby?", it: "Avete scelto il nome per il bambino?" }],
          },
        ],
      },
    ],
    attenzione: [
      "Dopo decide si usa to + verbo: decide to go, non decide going.",
      "Il nome è decision. Prendere una decisione si dice make a decision; take a decision esiste nell'inglese britannico, ma è meno comune.",
    ],
    lezioni: [{ id: "47", riquadro: 3 }],
  },
  {
    id: "delusion",
    parola: "delusion",
    fonetica: "/dɪˈluːʒn/",
    descrizione: "Falso amico: significa \"illusione, idea sbagliata\", non \"delusione\".",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            traduzioni: ["illusione", "convinzione errata"],
            esempi: [
              { en: "He's under the delusion that he's a great singer.", it: "Si è illuso di essere un grande cantante." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "delusione",
      spiegazione:
        "La delusione è disappointment; essere deluso è be disappointed: I was disappointed with the film.",
    },
    attenzione: ["Delusions of grandeur = manie di grandezza."],
  },
  {
    id: "depend",
    parola: "depend",
    fonetica: "/dɪˈpend/",
    descrizione: "Essere condizionato da qualcosa: dipendere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "depends · depended · depended · depending",
        significati: [
          {
            indicazione: "+ on: essere condizionato",
            traduzioni: ["dipendere da"],
            esempi: [
              { en: "It depends on the weather.", it: "Dipende dal tempo." },
              { en: "— Are you coming? — It depends.", it: "— Vieni? — Dipende." },
            ],
          },
          {
            indicazione: "+ on: aver bisogno, fidarsi",
            traduzioni: ["contare su", "dipendere da"],
            esempi: [{ en: "You can depend on her.", it: "Puoi contare su di lei." }],
          },
        ],
      },
    ],
    attenzione: [
      "Dipendere da è depend on, non depend from o depend of.",
      "L'aggettivo è dependent on (dipendente da); il dipendente di un'azienda però è employee.",
    ],
    lezioni: [{ id: "48", riquadro: 2 }],
  },
  {
    id: "develop",
    parola: "develop",
    fonetica: "/dɪˈveləp/",
    descrizione: "Crescere o far crescere qualcosa: sviluppare, svilupparsi.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "develops · developed · developed · developing",
        significati: [
          {
            indicazione: "crescere, migliorare",
            traduzioni: ["sviluppare", "svilupparsi"],
            esempi: [
              { en: "Children develop very quickly.", it: "I bambini si sviluppano molto in fretta." },
              { en: "Reading helps you develop your vocabulary.", it: "Leggere ti aiuta ad ampliare il lessico." },
            ],
          },
          {
            indicazione: "un prodotto, un'idea",
            traduzioni: ["sviluppare", "elaborare", "mettere a punto"],
            esempi: [{ en: "They are developing a new vaccine.", it: "Stanno mettendo a punto un nuovo vaccino." }],
          },
          {
            indicazione: "una malattia, un problema",
            traduzioni: ["contrarre", "manifestare"],
            esempi: [{ en: "He developed a cough.", it: "Gli è venuta la tosse." }],
          },
        ],
      },
    ],
    attenzione: [
      "Si scrive con una sola p e senza e finale: develop, developed. L'accento è sulla seconda sillaba: deVElop.",
      "Developing countries sono i paesi in via di sviluppo.",
    ],
  },
  {
    id: "die",
    parola: "die",
    fonetica: "/daɪ/",
    descrizione: "Smettere di vivere: morire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "dies · died · died · dying",
        significati: [
          {
            traduzioni: ["morire"],
            esempi: [
              { en: "Shakespeare died in 1616.", it: "Shakespeare è morto nel 1616." },
              { en: "My plants died while I was away.", it: "Le mie piante sono morte mentre ero via." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "be dying to / for",
        significati: [
          {
            traduzioni: ["morire dalla voglia di"],
            etichette: ["informale"],
            esempi: [{ en: "I'm dying for a cup of tea.", it: "Muoio dalla voglia di una tazza di tè." }],
          },
        ],
      },
    ],
    attenzione: [
      "Die è il verbo, dead l'aggettivo (morto), death il nome (la morte): He died last year; he's dead; after his death.",
      "\"È morto\" detto di un fatto passato è He died, non He is died. He's dead dice solo che ora non è vivo.",
      "Il -ing è dying, con la y: The plant is dying.",
    ],
  },
  {
    id: "discover",
    parola: "discover",
    fonetica: "/dɪˈskʌvə(r)/",
    descrizione: "Trovare per primi qualcosa che nessuno conosceva: scoprire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "discovers · discovered · discovered · discovering",
        significati: [
          {
            indicazione: "una cosa nuova per tutti",
            traduzioni: ["scoprire"],
            esempi: [{ en: "Fleming discovered penicillin in 1928.", it: "Fleming scoprì la penicillina nel 1928." }],
          },
          {
            indicazione: "un fatto",
            traduzioni: ["scoprire", "rendersi conto"],
            esempi: [{ en: "She discovered that her bag had been stolen.", it: "Ha scoperto che le avevano rubato la borsa." }],
          },
        ],
      },
    ],
    attenzione: [
      "Per un'informazione di tutti i giorni si usa più spesso find out: I found out the truth.",
      "Inventare (creare qualcosa che non esisteva) è invent: Bell invented the telephone; scoprire è trovare qualcosa che c'era già.",
    ],
  },
  {
    id: "disgrace",
    parola: "disgrace",
    fonetica: "/dɪsˈɡreɪs/",
    descrizione: "Falso amico: significa \"vergogna, disonore\", non \"disgrazia\".",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            traduzioni: ["vergogna", "disonore", "scandalo"],
            esempi: [
              { en: "The state of this kitchen is a disgrace!", it: "Lo stato di questa cucina è una vergogna!" },
              { en: "He left the company in disgrace.", it: "Ha lasciato l'azienda nel disonore." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "disgrazia",
      spiegazione:
        "La disgrazia (un incidente, una sventura) è accident, misfortune o tragedy.",
    },
    attenzione: ["L'aggettivo disgraceful vuol dire vergognoso: disgraceful behaviour."],
  },
  {
    id: "drive",
    parola: "drive",
    fonetica: "/draɪv/",
    descrizione: "Guidare un veicolo.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "drives · drove · driven · driving",
        significati: [
          {
            indicazione: "un'auto",
            traduzioni: ["guidare"],
            esempi: [
              { en: "Can you drive?", it: "Sai guidare?" },
              { en: "In Britain they drive on the left.", it: "In Gran Bretagna si guida a sinistra." },
            ],
          },
          {
            indicazione: "portare in macchina",
            traduzioni: ["accompagnare (in macchina)"],
            esempi: [{ en: "I'll drive you to the station.", it: "Ti accompagno in stazione." }],
          },
          {
            indicazione: "spingere a uno stato",
            traduzioni: ["far diventare", "spingere"],
            esempi: [{ en: "This noise is driving me crazy.", it: "Questo rumore mi sta facendo impazzire." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un viaggio in macchina",
            traduzioni: ["giro in macchina", "viaggio"],
            esempi: [{ en: "It's a two-hour drive.", it: "Sono due ore di macchina." }],
          },
          {
            indicazione: "davanti a una casa",
            traduzioni: ["vialetto"],
            esempi: [{ en: "Park in the drive.", it: "Parcheggia nel vialetto." }],
          },
        ],
      },
    ],
    attenzione: [
      "Si guida un'auto con drive, una bici o una moto con ride: ride a bike.",
      "La patente è driving licence (UK) o driver's license (US).",
    ],
    lezioni: [{ id: "25", riquadro: 2 }],
  },
  {
    id: "during",
    parola: "during",
    fonetica: "/ˈdjʊərɪŋ/",
    descrizione: "Nel corso di un periodo: durante.",
    usi: [
      {
        categoria: "preposizione",
        significati: [
          {
            traduzioni: ["durante", "nel corso di"],
            esempi: [
              { en: "I fell asleep during the film.", it: "Mi sono addormentato durante il film." },
              { en: "During the summer, the city is full of tourists.", it: "D'estate la città è piena di turisti." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "During risponde a \"quando?\" (during the lesson); for risponde a \"per quanto tempo?\" (for two hours). I slept for two hours during the flight.",
      "During vuole un nome, non una frase: during the meeting, ma while we were talking.",
    ],
  },
];
