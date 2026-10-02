import { Lezione } from "@/types/lezione";

export const pluralNouns: Lezione = {
  id: "4",
  titolo: "Il plurale dei sostantivi",
  descrizione: "Parlare di più cose",
  chiavi: "plurale, plurali irregolari",
  livello: "A1",
  citazione: {
    testo: "Friends don't lie.",
    fonte: "Stranger Things",
    traduzione: "Gli amici non mentono.",
    immagine: require("@/assets/images/textures/fdl.jpg"),
  },
  riquadri: [
    {
      titolo: "LA REGOLA BASE: -S",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In inglese il plurale si forma quasi sempre aggiungendo -s. Le eccezioni sono poche, ma riguardano proprio le parole più usate.",
        },
        {
          tipo: "tabella",
          righe: [
            ["car", "cars"],
            ["book", "books"],
            ["friend", "friends"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Il plurale cambia solo il sostantivo. Articoli e aggettivi restano identici:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "the red car → the red cars", it: "la macchina rossa → le macchine rosse" },
            { en: "reds cars", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo: "In inglese l'aggettivo non ha mai il plurale.",
        },
      ],
    },
    {
      titolo: "-ES E LE PAROLE IN -Y",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si aggiunge -es dopo s, ss, sh, ch, x, z: la vocale in più rende la parola pronunciabile.",
        },
        {
          tipo: "tabella",
          righe: [
            ["bus", "buses"],
            ["glass", "glasses"],
            ["dish", "dishes"],
            ["church", "churches"],
            ["box", "boxes"],
            ["quiz", "quizzes"],
          ],
        },
        {
          tipo: "testo",
          testo: "Consonante + y: la y diventa -ies. Vocale + y: solo -s.",
        },
        {
          tipo: "tabella",
          righe: [
            ["city", "cities"],
            ["baby", "babies"],
            ["boy", "boys"],
            ["day", "days"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Conta il suono, non solo la lettera: stomach finisce in -ch ma si pronuncia con la k, quindi fa stomachs.",
        },
      ],
    },
    {
      titolo: "LE PAROLE IN -F E IN -O",
      blocchi: [
        {
          tipo: "testo",
          testo: "Molte parole in -f e -fe cambiano in -ves:",
        },
        {
          tipo: "tabella",
          righe: [
            ["leaf", "leaves"],
            ["knife", "knives"],
            ["wife", "wives"],
            ["life", "lives"],
            ["half", "halves"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Altre aggiungono solo -s: roofs, chiefs, beliefs. Non c'è una regola: nel dubbio, controlla sul dizionario.",
        },
        {
          tipo: "testo",
          testo:
            "Con le parole in -o, quelle comuni e antiche prendono -es, quelle abbreviate o prese da altre lingue solo -s:",
        },
        {
          tipo: "tabella",
          righe: [
            ["potato", "potatoes"],
            ["tomato", "tomatoes"],
            ["hero", "heroes"],
            ["photo", "photos"],
            ["piano", "pianos"],
          ],
        },
      ],
    },
    {
      titolo: "I PLURALI IRREGOLARI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Sono residui dell'inglese antico. Vanno imparati a memoria, ma sono pochi e frequentissimi:",
        },
        {
          tipo: "tabella",
          righe: [
            ["man", "men"],
            ["woman", "women"],
            ["child", "children"],
            ["person", "people"],
            ["foot", "feet"],
            ["tooth", "teeth"],
            ["mouse", "mice"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Women si pronuncia "uimin", molto diverso da woman ("uman").',
        },
        {
          tipo: "testo",
          testo: "Alcune parole hanno singolare e plurale identici:",
        },
        {
          tipo: "tabella",
          righe: [
            ["one sheep", "two sheep"],
            ["one fish", "two fish"],
            ["one series", "two series"],
          ],
        },
      ],
    },
    {
      titolo: "PAROLE DOTTE E COMPOSTE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alcune parole di origine latina o greca conservano il plurale originale. Le trovi nei testi scientifici e accademici:",
        },
        {
          tipo: "tabella",
          righe: [
            ["analysis", "analyses"],
            ["crisis", "crises"],
            ["criterion", "criteria"],
            ["phenomenon", "phenomena"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Data e media sono plurali latini, ma oggi si usano come singolari: "The data is correct" è normale.',
        },
        {
          tipo: "testo",
          testo:
            "Nei composti il plurale va sulla parola principale: mothers-in-law, passers-by. Se la principale è l'ultima, va in fondo: bus stops.",
        },
      ],
    },
    {
      titolo: "IL SOSTANTIVO CHE FA DA AGGETTIVO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Un sostantivo usato per descriverne un altro resta sempre singolare, anche con un numero:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "a ten-year-old boy", it: "un bambino di dieci anni" },
            { en: "a ten-years-old boy", sbagliato: true },
            { en: "a five-star hotel", it: "un albergo a cinque stelle" },
            { en: "a shoe shop", it: "un negozio di scarpe" },
          ],
        },
      ],
    },
    {
      titolo: "COME SI PRONUNCIA LA -S",
      blocchi: [
        {
          tipo: "testo",
          testo: "La -s finale ha tre pronunce, a seconda del suono che la precede:",
        },
        {
          tipo: "tabella",
          righe: [
            ["/s/ dopo p, t, k, f", "cats, books, cups"],
            ["/z/ dopo suoni sonori e vocali", "dogs, cars, days"],
            ["/iz/ dopo i suoni sibilanti", "buses, boxes, churches"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Non serve pensarci mentre parli: con l'ascolto diventa automatico. Ricorda solo che dogs non ha la s dura di \"sasso\".",
        },
      ],
    },
    {
      titolo: "SEMPRE PLURALI E COLLETTIVI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le cose formate da due parti uguali sono sempre plurali: jeans, trousers, glasses, scissors, pyjamas. Per contarle si usa a pair of:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "My jeans are new.", it: "I miei jeans sono nuovi." },
            { en: "two pairs of glasses", it: "due paia di occhiali" },
          ],
        },
        {
          tipo: "testo",
          testo: "People e police sono plurali: il verbo va sempre al plurale.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "People are friendly here.", it: "Qui la gente è cordiale." },
            { en: "The police are coming.", it: "Sta arrivando la polizia." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Con team, family, government, staff l'inglese britannico usa spesso il plurale (The team are winning), l'americano il singolare (The team is winning). Sono giuste entrambe.",
        },
      ],
    },
    {
      titolo: "I NON NUMERABILI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alcuni sostantivi non si possono contare: non hanno plurale, non vogliono a/an e reggono il verbo al singolare. Per esempio water, money, music, bread, rice. Per contarli si usa un'unità di misura:",
        },
        {
          tipo: "tabella",
          righe: [
            ["a glass of water", "un bicchiere d'acqua"],
            ["a piece of bread", "un pezzo di pane"],
            ["two bottles of water", "due bottiglie d'acqua"],
          ],
        },
        {
          tipo: "testo",
          testo: "Alcune parole cambiano significato:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I don't have time.", it: "Non ho tempo." },
            { en: "I've been there three times.", it: "Ci sono stato tre volte." },
            { en: "Two coffees, please.", it: "Due caffè, per favore." },
          ],
        },
      ],
    },
    {
      titolo: "L'ERRORE TIPICO DEGLI ITALIANI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alcune parole che in italiano hanno il plurale, in inglese non lo hanno mai:",
        },
        {
          tipo: "tabella",
          righe: [
            ["information", "informazioni"],
            ["advice", "consigli"],
            ["furniture", "mobili"],
            ["luggage", "bagagli"],
            ["homework", "compiti"],
            ["news", "notizie"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "informations, advices", sbagliato: true },
            { en: "Can you give me some information?", it: "Mi puoi dare qualche informazione?" },
            { en: "a piece of advice", it: "un consiglio" },
            { en: "The news is good.", it: "Le notizie sono buone." },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Informations e advices sono tra gli errori più riconoscibili di chi parla inglese da italiano. Per indicarne una sola unità si usa "a piece of".',
        },
      ],
    },
    {
      titolo: "ESERCIZI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora mettiti alla prova. Ogni esercizio, se sbagli, ti indica il riquadro da rivedere: dopo averlo riletto, torni qui con un tocco. In fondo trovi il tuo risultato.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le regole",
        },
        {
          tipo: "completa",
          consegna: "Scrivi il plurale di \"box\".",
          prima: "two",
          dopo: "",
          risposte: ["boxes"],
          spiegazione: "Dopo s, ss, sh, ch, x, z si aggiunge -es: la vocale in più rende la parola pronunciabile.",
          rivedi: "-ES E LE PAROLE IN -Y",
        },
        {
          tipo: "completa",
          consegna: "Scrivi il plurale di \"city\".",
          prima: "three big",
          dopo: "",
          risposte: ["cities"],
          spiegazione: "Consonante + y: la y diventa -ies.",
          rivedi: "-ES E LE PAROLE IN -Y",
        },
        {
          tipo: "completa",
          consegna: "Scrivi il plurale di \"day\".",
          prima: "five",
          dopo: "",
          risposte: ["days"],
          spiegazione: "Vocale + y: si aggiunge solo -s (days, boys).",
          rivedi: "-ES E LE PAROLE IN -Y",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è il plurale di \"knife\"?",
          opzioni: ["knifes", "knives", "knifs"],
          giusta: 1,
          spiegazione: "Molte parole in -f e -fe cambiano in -ves: knife → knives, life → lives.",
          rivedi: "LE PAROLE IN -F E IN -O",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca i plurali scritti correttamente.",
          parole: ["potatoes", "photoes", "tomatos", "pianos", "heroes", "leafs"],
          giuste: [0, 3, 4],
          spiegazione:
            "Potatoes, tomatoes e heroes prendono -es; photos e pianos (parole abbreviate o straniere) solo -s. Leaf fa leaves.",
          rivedi: "LE PAROLE IN -F E IN -O",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["the reds cars", "the red cars", "the reds car"],
          giusta: 1,
          spiegazione: "In inglese l'aggettivo non ha mai il plurale: cambia solo il sostantivo.",
          rivedi: "LA REGOLA BASE: -S",
        },
        {
          tipo: "sottotitolo",
          testo: "Gli irregolari",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni singolare al suo plurale.",
          coppie: [
            ["man", "men"],
            ["child", "children"],
            ["person", "people"],
            ["foot", "feet"],
            ["tooth", "teeth"],
            ["mouse", "mice"],
          ],
          spiegazione: "Sono residui dell'inglese antico: pochi, ma tra le parole più usate.",
          rivedi: "I PLURALI IRREGOLARI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Al lago vedi un pesce, poi altri due. Come dici \"tre pesci\"?",
          opzioni: ["three fishes", "three fish", "three fishs"],
          giusta: 1,
          spiegazione: "Fish, sheep e series hanno singolare e plurale identici.",
          rivedi: "I PLURALI IRREGOLARI",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"un bambino di dieci anni\".",
          prima: "a ten-year-old",
          dopo: "",
          risposte: ["boy", "child"],
          spiegazione:
            "Attenzione alla parte prima: ten-year-old resta al singolare, perché un sostantivo che fa da aggettivo non va mai al plurale.",
          rivedi: "IL SOSTANTIVO CHE FA DA AGGETTIVO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale espressione è corretta?",
          opzioni: ["a five-stars hotel", "a five-star hotel", "a hotel of five stars"],
          giusta: 1,
          spiegazione: "Five-star descrive l'albergo, quindi resta singolare anche con un numero.",
          rivedi: "IL SOSTANTIVO CHE FA DA AGGETTIVO",
        },
        {
          tipo: "sottotitolo",
          testo: "Pronuncia e casi speciali",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le parole in cui la -s finale si pronuncia /iz/ (una sillaba in più).",
          parole: ["cats", "buses", "dogs", "boxes", "days", "churches"],
          giuste: [1, 3, 5],
          spiegazione:
            "Dopo i suoni sibilanti (s, x, ch) la -s diventa /iz/. Cats ha /s/, dogs e days /z/.",
          rivedi: "COME SI PRONUNCIA LA -S",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Completa: \"The police ___ coming.\"",
          opzioni: ["is", "are"],
          giusta: 1,
          spiegazione: "People e police sono sempre plurali: il verbo va al plurale.",
          rivedi: "SEMPRE PLURALI E COLLETTIVI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"due paia di occhiali\"?",
          opzioni: ["two glasses", "two pairs of glasses", "two pair of glass"],
          giusta: 1,
          spiegazione:
            "Le cose formate da due parti uguali (glasses, jeans, scissors) si contano con a pair of. Two glasses vuol dire due bicchieri.",
          rivedi: "SEMPRE PLURALI E COLLETTIVI",
        },
        {
          tipo: "sottotitolo",
          testo: "I non numerabili",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: [
            "Can you give me some informations?",
            "Can you give me an information?",
            "Can you give me some information?",
          ],
          giusta: 2,
          spiegazione:
            "Information è non numerabile: niente -s e niente an. È uno degli errori più riconoscibili degli italiani.",
          rivedi: "L'ERRORE TIPICO DEGLI ITALIANI",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le parole che in inglese NON hanno plurale.",
          parole: ["advice", "chair", "furniture", "luggage", "suitcase", "homework", "book"],
          giuste: [0, 2, 3, 5],
          spiegazione:
            "Advice, furniture, luggage e homework sono non numerabili. Chair, suitcase e book si contano normalmente.",
          rivedi: "L'ERRORE TIPICO DEGLI ITALIANI",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Le notizie sono buone\".",
          prima: "The news",
          dopo: "good.",
          risposte: ["is"],
          spiegazione: "News finisce in -s ma è singolare e non numerabile: the news is.",
          rivedi: "L'ERRORE TIPICO DEGLI ITALIANI",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"un bicchiere d'acqua\".",
          parole: ["water", "glass", "of", "a"],
          soluzione: ["a", "glass", "of", "water"],
          spiegazione: "I non numerabili si contano con un'unità di misura: a glass of, a piece of, a bottle of.",
          rivedi: "I NON NUMERABILI",
        },
        {
          tipo: "sottotitolo",
          testo: "Traduci",
        },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi la tua versione e confrontala con quella proposta.",
        },
        {
          tipo: "traduci",
          consegna: "Traduci in inglese.",
          testo: "Ho due bambini di cinque anni. Mi servono dei consigli: i miei bagagli sono pieni di giocattoli!",
          soluzione:
            "I have two five-year-old children. I need some advice: my luggage is full of toys!",
          spiegazione:
            "Controlla: children (irregolare), five-year-old al singolare, advice e luggage senza -s e con il verbo al singolare (is).",
        },
      ],
    },
    {
      titolo: "IL TUO RISULTATO",
      blocchi: [
        {
          tipo: "punteggio",
        },
        {
          tipo: "nota",
          testo:
            "Tocca un esercizio sbagliato qui sopra per andare al riquadro da rivedere.",
        },
      ],
    },
  ],
};
