import { Lezione } from "@/types/lezione";

export const possessivePronouns: Lezione = {
  id: "14",
  titolo: "Pronomi possessivi e whose",
  descrizione: "Dire di chi è qualcosa",
  chiavi: "pronomi possessivi, mine, yours",
  livello: "A1",
  citazione: {
    testo: "Whose Line Is It Anyway?",
    fonte: "Programma televisivo britannico",
    traduzione: "Ma di chi è questa battuta?",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "I PRONOMI POSSESSIVI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Sostituiscono il possessivo e il nome insieme, per non ripetere la parola:",
        },
        {
          tipo: "tabella",
          righe: [
            ["my → mine", "il mio"],
            ["your → yours", "il tuo"],
            ["his → his", "il suo (di lui)"],
            ["her → hers", "il suo (di lei)"],
            ["our → ours", "il nostro"],
            ["your → yours", "il vostro"],
            ["their → theirs", "il loro"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "This is my book. That's yours.", it: "Questo è il mio libro. Quello è il tuo." },
          ],
        },
      ],
    },
    {
      titolo: "AGGETTIVO O PRONOME?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'aggettivo possessivo (my) vuole sempre un nome dopo. Il pronome (mine) sta da solo.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It's my phone.", it: "È il mio telefono." },
            { en: "It's mine.", it: "È mio." },
            { en: "It's mine phone.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "I pronomi possessivi non vogliono mai l'articolo: \"the mine\" è sbagliato.",
        },
      ],
    },
    {
      titolo: "NIENTE APOSTROFO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Yours, hers, ours, theirs finiscono in -s ma non hanno l'apostrofo. E non esiste \"its\" come pronome.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Is this your's?", sbagliato: true },
            { en: "Is this yours?", it: "È tuo?" },
            { en: "The house is theirs.", it: "La casa è loro." },
          ],
        },
      ],
    },
    {
      titolo: "WHOSE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Whose significa \"di chi\". Si usa per chiedere chi possiede qualcosa:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Whose bag is this?", it: "Di chi è questa borsa?" },
            { en: "Whose is this bag?", it: "Di chi è questa borsa?" },
            { en: "Whose are these keys?", it: "Di chi sono queste chiavi?" },
          ],
        },
        {
          tipo: "testo",
          testo: "Per rispondere si usa il pronome possessivo o il genitivo 's:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It's mine.", it: "È mia." },
            { en: "It's Sarah's.", it: "È di Sarah." },
          ],
        },
      ],
    },
    {
      titolo: "WHOSE O WHO'S?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si pronunciano uguali ma sono diversi. Whose = di chi. Who's = who is o who has.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Whose car is that?", it: "Di chi è quella macchina?" },
            { en: "Who's that man?", it: "Chi è quell'uomo?" },
            { en: "Who's got a pen?", it: "Chi ha una penna?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Stessa trappola di its e it's: se puoi dire \"who is\", ci va l'apostrofo.",
        },
      ],
    },
    {
      titolo: "A FRIEND OF MINE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per dire \"un mio amico\" non si può mettere a e my insieme. Si usa a… of + pronome possessivo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "a my friend", sbagliato: true },
            { en: "a friend of mine", it: "un mio amico" },
            { en: "a colleague of hers", it: "una sua collega" },
            { en: "a friend of Tom's", it: "un amico di Tom" },
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
          testo: "I pronomi possessivi",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni aggettivo possessivo al pronome.",
          coppie: [
            ["my", "mine"],
            ["your", "yours"],
            ["her", "hers"],
            ["our", "ours"],
            ["their", "theirs"],
          ],
          spiegazione: "His resta uguale: his book → it's his.",
          rivedi: "I PRONOMI POSSESSIVI",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Questo è il mio libro. Quello è il tuo.\"",
          prima: "This is my book. That's",
          dopo: ".",
          risposte: ["yours"],
          spiegazione: "Yours sostituisce your book, per non ripetere la parola.",
          rivedi: "I PRONOMI POSSESSIVI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["It's mine phone.", "It's my phone.", "It's the mine phone."],
          giusta: 1,
          spiegazione: "Davanti a un nome si usa l'aggettivo (my). Mine sta da solo: It's mine.",
          rivedi: "AGGETTIVO O PRONOME?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["Is this your's?", "Is this yours?", "Is this the yours?"],
          giusta: 1,
          spiegazione: "Yours, hers, ours e theirs non hanno mai l'apostrofo, né l'articolo.",
          rivedi: "NIENTE APOSTROFO",
        },
        {
          tipo: "sottotitolo",
          testo: "Whose",
        },
        {
          tipo: "riordina",
          consegna: "Chiedi \"Di chi è questa borsa?\".",
          parole: ["this", "bag", "is", "whose"],
          soluzione: ["whose", "bag", "is", "this"],
          spiegazione: "Whose + la cosa + is + this. Va bene anche Whose is this bag?",
          rivedi: "WHOSE",
        },
        {
          tipo: "completa",
          consegna: "Rispondi: \"È di Sarah\".",
          prima: "It's",
          dopo: ".",
          risposte: ["Sarah's"],
          spiegazione: "Con un nome si usa il genitivo 's, senza ripetere la cosa.",
          rivedi: "WHOSE",
        },
        {
          tipo: "completa",
          consegna: "Completa con whose o who's.",
          prima: "",
          dopo: "that man?",
          risposte: ["Who's"],
          spiegazione: "Qui puoi dire \"Who is that man?\": quindi who's.",
          rivedi: "WHOSE O WHO'S?",
        },
        {
          tipo: "completa",
          consegna: "Completa con whose o who's.",
          prima: "",
          dopo: "car is that?",
          risposte: ["Whose"],
          spiegazione: "Qui chiedi di chi è la macchina: whose.",
          rivedi: "WHOSE O WHO'S?",
        },
        {
          tipo: "sottotitolo",
          testo: "A friend of mine",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"un mio amico\"?",
          opzioni: ["a my friend", "a friend of mine", "a friend of my"],
          giusta: 1,
          spiegazione: "A e my non stanno insieme: si dice a friend of + pronome possessivo.",
          rivedi: "A FRIEND OF MINE",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"una sua collega\" (di lei).",
          parole: ["hers", "colleague", "of", "a"],
          soluzione: ["a", "colleague", "of", "hers"],
          rivedi: "A FRIEND OF MINE",
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
          testo: "Di chi sono queste chiavi? Non sono mie: sono di un mio amico.",
          soluzione: "Whose are these keys? They aren't mine: they belong to a friend of mine.",
          spiegazione:
            "Controlla: whose (non who's), mine senza articolo né apostrofo, a friend of mine (non a my friend). \"Belong to\" significa \"appartenere a\".",
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
