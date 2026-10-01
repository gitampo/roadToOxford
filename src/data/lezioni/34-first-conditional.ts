import { Lezione } from "@/types/lezione";

export const firstConditional: Lezione = {
  id: "34",
  titolo: "Zero e first conditional",
  descrizione: "Parlare di condizioni e conseguenze",
  chiavi: "periodo ipotetico, primo tipo",
  livello: "[A2]",
  citazione: {
    testo: "If you build it, he will come.",
    fonte: "L'uomo dei sogni",
    traduzione: "Se lo costruisci, lui verrà.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COS'È UN CONDIZIONALE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Una frase con if ha due parti: la condizione (se succede questo) e la conseguenza. In inglese ci sono diversi tipi, a seconda di quanto è reale la condizione. Qui vediamo i primi due.",
        },
        {
          tipo: "tabella",
          righe: [
            ["zero conditional", "cose sempre vere"],
            ["first conditional", "possibilità reali nel futuro"],
            ["second conditional", "situazioni immaginarie (lezione 36{1})"],
          ],
        },
      ],
    },
    {
      titolo: "ZERO CONDITIONAL",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "If + present simple, present simple. Per fatti scientifici e cose che succedono sempre:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If you heat ice, it melts.", it: "Se scaldi il ghiaccio, si scioglie." },
            { en: "If I drink coffee at night, I can't sleep.", it: "Se bevo caffè la sera, non riesco a dormire." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nello zero conditional if si può sostituire con when senza cambiare il senso.",
        },
      ],
    },
    {
      titolo: "FIRST CONDITIONAL",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "If + present simple, will + verbo. Per qualcosa di possibile e probabile nel futuro:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If it rains, we'll stay at home.", it: "Se piove, restiamo a casa." },
            { en: "If you study, you'll pass the exam.", it: "Se studi, passerai l'esame." },
            { en: "If I see him, I'll tell him.", it: "Se lo vedo, glielo dico." },
          ],
        },
      ],
    },
    {
      titolo: "MAI WILL DOPO IF",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano possiamo dire \"se pioverà\". In inglese, dopo if, il futuro è vietato: si usa il present simple.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If it will rain, we'll stay at home.", sbagliato: true },
            { en: "If it rains, we'll stay at home.", it: "Se pioverà, resteremo a casa." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "La stessa regola vale dopo when, as soon as, before, after, until: \"I'll call you when I arrive\".",
        },
      ],
    },
    {
      titolo: "L'ORDINE DELLE PARTI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le due parti si possono invertire. Se if è all'inizio, ci va la virgola; se è in mezzo, no:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If you hurry, you'll catch the bus.", it: "Se ti sbrighi, prendi l'autobus." },
            { en: "You'll catch the bus if you hurry.", it: "Prendi l'autobus se ti sbrighi." },
          ],
        },
      ],
    },
    {
      titolo: "UNLESS",
      blocchi: [
        {
          tipo: "testo",
          testo: "Unless significa \"a meno che\", cioè \"if… not\":",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I won't go unless you come with me.", it: "Non vado a meno che tu non venga con me." },
            { en: "I won't go if you don't come with me.", it: "Non vado se non vieni con me." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Unless è già negativo: \"unless you don't come\" è sbagliato.",
        },
      ],
    },
    {
      titolo: "AL POSTO DI WILL",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nella conseguenza puoi usare anche can, may, might, l'imperativo o should:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If you're tired, you can go to bed.", it: "Se sei stanco, puoi andare a letto." },
            { en: "If you see Sara, say hello from me.", it: "Se vedi Sara, salutala da parte mia." },
            { en: "If it's sunny, we might go to the beach.", it: "Se c'è il sole, forse andiamo al mare." },
          ],
        },
      ],
    },
  ],
};
