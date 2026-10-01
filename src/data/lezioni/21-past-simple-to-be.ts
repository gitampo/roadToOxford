import { Lezione } from "@/types/lezione";

export const pastSimpleToBe: Lezione = {
  id: "21",
  titolo: "Il passato di to be",
  descrizione: "Raccontare biografie; was born",
  chiavi: "passato di essere, nascere",
  livello: "[A1]",
  citazione: {
    testo: "It was the best of times, it was the worst of times.",
    fonte: "Charles Dickens, Racconto di due città",
    traduzione: "Era il migliore dei tempi, era il peggiore dei tempi.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "WAS E WERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Al passato to be ha solo due forme: was e were. Corrispondono a \"ero\" e a \"sono stato\".",
        },
        {
          tipo: "tabella",
          righe: [
            ["I was", "ero, sono stato"],
            ["you were", "eri"],
            ["he / she / it was", "era"],
            ["we were", "eravamo"],
            ["you were", "eravate"],
            ["they were", "erano"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I was tired yesterday.", it: "Ieri ero stanco." },
            { en: "They were at home.", it: "Erano a casa." },
          ],
        },
      ],
    },
    {
      titolo: "NEGATIVA E DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Funziona come al presente: not dopo il verbo, inversione nelle domande.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It wasn't easy.", it: "Non è stato facile." },
            { en: "We weren't ready.", it: "Non eravamo pronti." },
            { en: "Were you at the party?", it: "Eri alla festa?" },
            { en: "Where was she?", it: "Dov'era?" },
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Yes, I was. / No, I wasn't.", it: "Sì. / No." },
            { en: "Did you be at the party?", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "BE BORN: NASCERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In inglese \"nascere\" si dice be born, e al passato was/were born:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I was born in 2008.", it: "Sono nato nel 2008." },
            { en: "Where were you born?", it: "Dove sei nato?" },
            { en: "Shakespeare was born in Stratford.", it: "Shakespeare è nato a Stratford." },
            { en: "I born in Rome.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Si dice \"I was born\" anche se sei vivo: la nascita è un fatto concluso nel passato.",
        },
      ],
    },
    {
      titolo: "LE ESPRESSIONI DI TEMPO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["yesterday", "ieri"],
            ["last night", "ieri sera"],
            ["last week / year", "la settimana / l'anno scorso"],
            ["two days ago", "due giorni fa"],
            ["in 1990", "nel 1990"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I was in London three years ago.", it: "Tre anni fa ero a Londra." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Ago va dopo il periodo di tempo, proprio come \"fa\" in italiano: two days ago = due giorni fa.",
        },
      ],
    },
    {
      titolo: "THERE WAS, THERE WERE",
      blocchi: [
        {
          tipo: "testo",
          testo: "There is e there are al passato diventano there was e there were:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "There was a problem.", it: "C'era un problema." },
            { en: "There were a lot of people.", it: "C'era molta gente." },
            { en: "Was there a party?", it: "C'era una festa?" },
          ],
        },
      ],
    },
    {
      titolo: "RACCONTARE UNA BIOGRAFIA",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "Jane Austen was a writer.", it: "Jane Austen era una scrittrice." },
            { en: "She was born in 1775.", it: "Nacque nel 1775." },
            { en: "Her novels were very popular.", it: "I suoi romanzi erano molto popolari." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In italiano per le biografie usiamo passato remoto e imperfetto. In inglese basta il past simple.",
        },
      ],
    },
  ],
};
