import { Lezione } from "@/types/lezione";

export const pastSimpleToBe: Lezione = {
  id: "21",
  titolo: "Il passato di to be",
  descrizione: "Raccontare biografie; was born",
  chiavi: "passato di essere, nascere",
  livello: "A1",
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
          testo: "Was o were?",
        },
        {
          tipo: "completa",
          consegna: "Completa con was o were.",
          prima: "I",
          dopo: "tired yesterday.",
          risposte: ["was"],
          spiegazione: "I, he, she, it vogliono was.",
          rivedi: "WAS E WERE",
        },
        {
          tipo: "completa",
          consegna: "Completa con was o were.",
          prima: "They",
          dopo: "at home last night.",
          risposte: ["were"],
          spiegazione: "You, we, they vogliono were.",
          rivedi: "WAS E WERE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si chiede \"Eri alla festa?\"",
          opzioni: ["Did you be at the party?", "Were you at the party?", "Was you at the party?"],
          giusta: 1,
          spiegazione: "To be fa le domande da solo, anche al passato: niente did.",
          rivedi: "NEGATIVA E DOMANDE",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Non è stato facile\".",
          prima: "It",
          dopo: "easy.",
          risposte: ["wasn't", "was not"],
          rivedi: "NEGATIVA E DOMANDE",
        },
        {
          tipo: "sottotitolo",
          testo: "Nascere",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Sono nato a Roma\"?",
          opzioni: ["I born in Rome.", "I was born in Rome.", "I am born in Rome."],
          giusta: 1,
          spiegazione: "Nascere si dice be born: la nascita è un fatto concluso, quindi was born.",
          rivedi: "BE BORN: NASCERE",
        },
        {
          tipo: "riordina",
          consegna: "Chiedi \"Dove sei nato?\".",
          parole: ["born", "you", "where", "were"],
          soluzione: ["where", "were", "you", "born"],
          rivedi: "BE BORN: NASCERE",
        },
        {
          tipo: "sottotitolo",
          testo: "Il tempo",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Tre anni fa ero a Londra\".",
          parole: ["ago", "London", "in", "years", "I", "three", "was"],
          soluzione: ["I", "was", "in", "London", "three", "years", "ago"],
          spiegazione: "Ago va dopo il periodo, proprio come \"fa\": three years ago.",
          rivedi: "LE ESPRESSIONI DI TEMPO",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni espressione alla traduzione.",
          coppie: [
            ["yesterday", "ieri"],
            ["last night", "ieri sera"],
            ["last year", "l'anno scorso"],
            ["two days ago", "due giorni fa"],
          ],
          rivedi: "LE ESPRESSIONI DI TEMPO",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"C'era molta gente\".",
          prima: "There",
          dopo: "a lot of people.",
          risposte: ["were"],
          spiegazione: "People è plurale: there were.",
          rivedi: "THERE WAS, THERE WERE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si chiede \"C'era una festa?\"",
          opzioni: ["Was there a party?", "There was a party?", "Did there be a party?"],
          giusta: 0,
          spiegazione: "Nella domanda was passa davanti a there.",
          rivedi: "THERE WAS, THERE WERE",
        },
        {
          tipo: "sottotitolo",
          testo: "Scrivi",
        },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi il tuo testo e confrontalo con il modello.",
        },
        {
          tipo: "scrivi",
          consegna: "Scrivi una breve biografia (4 frasi) di un personaggio famoso, usando solo was e were.",
          punti: ["chi era", "quando e dove è nato", "perché era famoso", "com'era il suo lavoro"],
          modello:
            "Leonardo da Vinci was an Italian artist and scientist. He was born in Vinci in 1452. He was famous for his paintings, like the Mona Lisa. His ideas were very modern for his time.",
          spiegazione:
            "Controlla: was born, was con he/she, were con un soggetto plurale (his ideas).",
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
