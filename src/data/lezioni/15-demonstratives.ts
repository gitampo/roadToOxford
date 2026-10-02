import { Lezione } from "@/types/lezione";

export const demonstratives: Lezione = {
  id: "15",
  titolo: "This, that, these, those",
  descrizione: "Indicare oggetti vicini e lontani",
  chiavi: "dimostrativi",
  livello: "A1",
  citazione: {
    testo: "This is Sparta!",
    fonte: "300",
    traduzione: "Questa è Sparta!",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "VICINO O LONTANO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I dimostrativi indicano qualcosa. Dipendono da due cose: se è vicino o lontano, e se è singolare o plurale.",
        },
        {
          tipo: "tabella",
          righe: [
            ["this", "questo (vicino, singolare)"],
            ["these", "questi (vicino, plurale)"],
            ["that", "quello (lontano, singolare)"],
            ["those", "quelli (lontano, plurale)"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "This book is mine.", it: "Questo libro è mio." },
            { en: "These shoes are new.", it: "Queste scarpe sono nuove." },
            { en: "That house is old.", it: "Quella casa è vecchia." },
            { en: "Those people are my friends.", it: "Quelle persone sono miei amici." },
          ],
        },
      ],
    },
    {
      titolo: "NON CAMBIANO CON IL GENERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Non esiste maschile e femminile: this vale per questo e questa. Cambia solo il numero.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "this boy, this girl", it: "questo ragazzo, questa ragazza" },
            { en: "this books", sbagliato: true },
            { en: "these books", it: "questi libri" },
          ],
        },
      ],
    },
    {
      titolo: "COME AGGETTIVO O DA SOLO",
      blocchi: [
        {
          tipo: "testo",
          testo: "Possono stare davanti a un nome o da soli, come pronomi:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I like this jacket.", it: "Mi piace questa giacca." },
            { en: "I like this.", it: "Mi piace questo." },
            { en: "What's that?", it: "Cos'è quello?" },
          ],
        },
      ],
    },
    {
      titolo: "PER PRESENTARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "This si usa per presentare qualcuno, anche se in italiano diremmo \"lui è\":",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "This is my friend Luca.", it: "Ti presento il mio amico Luca." },
            { en: "He is my friend Luca.", sbagliato: true },
          ],
        },
        {
          tipo: "testo",
          testo: "Al telefono ci si presenta con this, e si chiede con who's:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Hello, this is Anna.", it: "Pronto, sono Anna." },
            { en: "Who's calling, please?", it: "Chi parla, scusi?" },
          ],
        },
      ],
    },
    {
      titolo: "NEL TEMPO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "This indica il presente o il futuro vicino, that il passato:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "this week, this morning", it: "questa settimana, stamattina" },
            { en: "in those days", it: "a quei tempi" },
            { en: "That was a great party!", it: "È stata una bella festa!" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "That's right, that's fine, that's it: con that si commenta quello che ha appena detto qualcuno.",
        },
      ],
    },
    {
      titolo: "THE ONE, THE ONES",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per non ripetere il nome si usa one (singolare) o ones (plurale):",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Which cake do you want? This one or that one?", it: "Quale torta vuoi? Questa o quella?" },
            { en: "I prefer the red ones.", it: "Preferisco quelli rossi." },
          ],
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
          testo: "This, that, these, those",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni dimostrativo al suo significato.",
          coppie: [
            ["this", "vicino, singolare"],
            ["these", "vicino, plurale"],
            ["that", "lontano, singolare"],
            ["those", "lontano, plurale"],
          ],
          rivedi: "VICINO O LONTANO",
        },
        {
          tipo: "completa",
          consegna: "Hai in mano delle scarpe. Completa: \"Queste scarpe sono nuove\".",
          prima: "",
          dopo: "shoes are new.",
          risposte: ["These"],
          spiegazione: "Vicino e plurale: these.",
          rivedi: "VICINO O LONTANO",
        },
        {
          tipo: "completa",
          consegna: "Indichi delle persone dall'altra parte della strada. Completa.",
          prima: "",
          dopo: "people are my friends.",
          risposte: ["Those"],
          spiegazione: "Lontano e plurale: those. People è plurale.",
          rivedi: "VICINO O LONTANO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale espressione è corretta?",
          opzioni: ["this books", "these books", "these book"],
          giusta: 1,
          spiegazione: "Il dimostrativo si accorda con il numero: this book, these books.",
          rivedi: "NON CAMBIANO CON IL GENERE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"questa ragazza\"?",
          opzioni: ["this girl", "thisa girl", "these girl"],
          giusta: 0,
          spiegazione: "I dimostrativi non cambiano con il genere: this vale per questo e questa.",
          rivedi: "NON CAMBIANO CON IL GENERE",
        },
        {
          tipo: "sottotitolo",
          testo: "Presentare e telefonare",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Presenti il tuo amico Luca a qualcuno. Cosa dici?",
          opzioni: ["He is my friend Luca.", "This is my friend Luca.", "Here is he, my friend Luca."],
          giusta: 1,
          spiegazione: "Per presentare qualcuno si usa this is.",
          rivedi: "PER PRESENTARE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Rispondi al telefono e dici chi sei. Cosa dici?",
          opzioni: ["Hello, I'm Anna.", "Hello, this is Anna.", "Hello, here Anna."],
          giusta: 1,
          spiegazione: "Al telefono ci si presenta con this is, e si chiede \"Who's calling?\".",
          rivedi: "PER PRESENTARE",
        },
        {
          tipo: "sottotitolo",
          testo: "Tempo e risposte",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"a quei tempi\"?",
          opzioni: ["in these days", "in those days", "in that days"],
          giusta: 1,
          spiegazione: "That e those indicano il passato; days è plurale, quindi those.",
          rivedi: "NEL TEMPO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Un amico ti dice l'orario giusto del treno. Come rispondi \"Giusto!\"?",
          opzioni: ["This is right!", "That's right!", "These right!"],
          giusta: 1,
          spiegazione: "Con that si commenta quello che qualcuno ha appena detto.",
          rivedi: "NEL TEMPO",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Preferisco quelli rossi\".",
          prima: "I prefer the red",
          dopo: ".",
          risposte: ["ones"],
          spiegazione: "Ones sostituisce un nome plurale, per non ripeterlo.",
          rivedi: "THE ONE, THE ONES",
        },
        {
          tipo: "riordina",
          consegna: "Chiedi \"Questa o quella?\" (parlando di una torta).",
          parole: ["that", "this", "or", "one", "one"],
          soluzione: ["this", "one", "or", "that", "one"],
          rivedi: "THE ONE, THE ONES",
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
          testo: "Ti presento mia sorella. Queste foto sono sue, ma quelle sono mie.",
          soluzione: "This is my sister. These photos are hers, but those are mine.",
          spiegazione:
            "Controlla: this is per presentare, these vicino e plurale, those da solo come pronome.",
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
