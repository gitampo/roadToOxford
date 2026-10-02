import { Lezione } from "@/types/lezione";

export const adverbsFrequency: Lezione = {
  id: "11",
  titolo: "Avverbi di frequenza",
  descrizione: "Dire quanto spesso fai qualcosa",
  chiavi: "always, never, avverbi di frequenza",
  livello: "A1",
  citazione: {
    testo: "Always look on the bright side of life.",
    fonte: "Monty Python, Brian di Nazareth",
    traduzione: "Guarda sempre il lato positivo della vita.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "QUANTO SPESSO?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Gli avverbi di frequenza dicono quanto spesso fai qualcosa. Si usano soprattutto con il present simple.",
        },
        {
          tipo: "tabella",
          righe: [
            ["always", "sempre (100%)"],
            ["usually", "di solito"],
            ["often", "spesso"],
            ["sometimes", "a volte"],
            ["rarely / seldom", "raramente"],
            ["never", "mai (0%)"],
          ],
        },
      ],
    },
    {
      titolo: "DOVE SI METTONO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Vanno prima del verbo principale, cioè tra il soggetto e il verbo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I always drink tea.", it: "Bevo sempre il tè." },
            { en: "She often goes to the cinema.", it: "Va spesso al cinema." },
            { en: "I drink always tea.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In italiano l'avverbio va dopo il verbo (bevo sempre), in inglese prima (I always drink).",
        },
      ],
    },
    {
      titolo: "CON TO BE È IL CONTRARIO",
      blocchi: [
        {
          tipo: "testo",
          testo: "Con to be, l'avverbio va dopo il verbo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm always late.", it: "Sono sempre in ritardo." },
            { en: "He's never at home.", it: "Non è mai a casa." },
            { en: "I always am late.", sbagliato: true },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Lo stesso vale con gli ausiliari: l'avverbio va dopo don't, can, have.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I don't usually eat meat.", it: "Di solito non mangio carne." },
            { en: "I can never remember his name.", it: "Non riesco mai a ricordare il suo nome." },
          ],
        },
      ],
    },
    {
      titolo: "NEVER È GIÀ NEGATIVO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano diciamo \"non vado mai\", con due negazioni. In inglese ne basta una: never è già negativo.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I don't never go.", sbagliato: true },
            { en: "I never go.", it: "Non ci vado mai." },
            { en: "I don't ever go.", it: "Non ci vado mai (più enfatico)." },
          ],
        },
      ],
    },
    {
      titolo: "LE DOMANDE CON HOW OFTEN",
      blocchi: [
        {
          tipo: "testo",
          testo: "Per chiedere la frequenza si usa How often…?",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "How often do you go to the gym?", it: "Quanto spesso vai in palestra?" },
            { en: "Do you ever eat fish?", it: "Mangi mai il pesce?" },
          ],
        },
        {
          tipo: "testo",
          testo: "Per rispondere con precisione:",
        },
        {
          tipo: "tabella",
          righe: [
            ["once a week", "una volta alla settimana"],
            ["twice a month", "due volte al mese"],
            ["three times a year", "tre volte all'anno"],
            ["every day", "ogni giorno"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Queste espressioni vanno alla fine della frase: \"I go swimming twice a week\".",
        },
      ],
    },
    {
      titolo: "SOMETIMES E USUALLY",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Sometimes e usually possono andare anche all'inizio della frase, per dare enfasi:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Sometimes I walk to school.", it: "A volte vado a scuola a piedi." },
            { en: "Usually we have pasta on Sundays.", it: "Di solito la domenica mangiamo la pasta." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Always e never all'inizio della frase no: si mettono sempre prima del verbo.",
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
          testo: "Quanto spesso",
        },
        {
          tipo: "riordina",
          consegna: "Metti gli avverbi in ordine, da \"sempre\" a \"mai\".",
          parole: ["sometimes", "never", "always", "often", "usually"],
          soluzione: ["always", "usually", "often", "sometimes", "never"],
          spiegazione: "Always 100%, usually, often, sometimes, never 0%.",
          rivedi: "QUANTO SPESSO?",
        },
        {
          tipo: "sottotitolo",
          testo: "Dove si mettono",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Bevo sempre il tè\".",
          parole: ["tea", "drink", "always", "I"],
          soluzione: ["I", "always", "drink", "tea"],
          spiegazione: "L'avverbio va tra il soggetto e il verbo, al contrario dell'italiano.",
          rivedi: "DOVE SI METTONO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["She goes often to the cinema.", "She often goes to the cinema.", "Often she goes to the cinema often."],
          giusta: 1,
          spiegazione: "Prima del verbo principale: she often goes.",
          rivedi: "DOVE SI METTONO",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Sono sempre in ritardo\".",
          parole: ["late", "always", "I'm"],
          soluzione: ["I'm", "always", "late"],
          spiegazione: "Con to be è il contrario: l'avverbio va dopo il verbo.",
          rivedi: "CON TO BE È IL CONTRARIO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Di solito non mangio carne\"?",
          opzioni: ["I usually don't eat meat.", "I don't usually eat meat.", "I don't eat usually meat."],
          giusta: 1,
          spiegazione:
            "Con gli ausiliari l'avverbio va dopo: don't usually. È la forma più naturale.",
          rivedi: "CON TO BE È IL CONTRARIO",
        },
        {
          tipo: "sottotitolo",
          testo: "Never",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Non ci vado mai\"?",
          opzioni: ["I don't never go.", "I never go.", "I go never."],
          giusta: 1,
          spiegazione: "Never è già negativo: in inglese basta una negazione.",
          rivedi: "NEVER È GIÀ NEGATIVO",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le frasi corrette.",
          parole: ["I never eat fish.", "I don't never eat fish.", "I don't ever eat fish.", "I never don't eat fish."],
          giuste: [0, 2],
          spiegazione: "O never da solo, o don't + ever. Mai due negazioni insieme.",
          rivedi: "NEVER È GIÀ NEGATIVO",
        },
        {
          tipo: "sottotitolo",
          testo: "How often",
        },
        {
          tipo: "riordina",
          consegna: "Chiedi \"Quanto spesso vai in palestra?\".",
          parole: ["you", "gym", "do", "go", "the", "often", "how", "to"],
          soluzione: ["how", "often", "do", "you", "go", "to", "the", "gym"],
          rivedi: "LE DOMANDE CON HOW OFTEN",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni espressione alla traduzione.",
          coppie: [
            ["once a week", "una volta alla settimana"],
            ["twice a month", "due volte al mese"],
            ["three times a year", "tre volte all'anno"],
            ["every day", "ogni giorno"],
          ],
          spiegazione: "Queste espressioni vanno alla fine della frase.",
          rivedi: "LE DOMANDE CON HOW OFTEN",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale avverbio NON può stare all'inizio della frase?",
          opzioni: ["Sometimes", "Usually", "Always"],
          giusta: 2,
          spiegazione: "Sometimes e usually possono andare all'inizio per enfasi; always e never no.",
          rivedi: "SOMETIMES E USUALLY",
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
          testo: "Vado spesso al cinema, ma non sono mai in ritardo. A volte ci vado due volte alla settimana.",
          soluzione:
            "I often go to the cinema, but I'm never late. Sometimes I go twice a week.",
          spiegazione:
            "Controlla: often prima di go, never dopo I'm, sometimes all'inizio (va bene anche dopo I), twice a week in fondo.",
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
