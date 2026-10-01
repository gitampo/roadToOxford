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
  ],
};
