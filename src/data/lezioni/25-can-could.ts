import { Lezione } from "@/types/lezione";

export const canCould: Lezione = {
  id: "25",
  titolo: "Can e could",
  descrizione: "Parlare di capacità, chiedere permessi",
  chiavi: "potere, saper fare",
  livello: "A1",
  citazione: {
    testo: "Yes, we can.",
    fonte: "Barack Obama, 2008",
    traduzione: "Sì, possiamo.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "CAN: SAPER FARE E POTERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Can indica una capacità (saper fare) o una possibilità (potere). È uguale per tutte le persone e vuole il verbo base, senza to:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I can swim.", it: "So nuotare." },
            { en: "She can speak three languages.", it: "Sa parlare tre lingue." },
            { en: "You can sit here.", it: "Puoi sederti qui." },
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "He cans swim.", sbagliato: true },
            { en: "I can to swim.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "NEGATIVA E DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Negativa: can't (cannot, scritto attaccato). Domande: can davanti al soggetto. Niente do.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I can't drive.", it: "Non so guidare." },
            { en: "Can you help me?", it: "Mi puoi aiutare?" },
            { en: "Yes, I can. / No, I can't.", it: "Sì. / No." },
            { en: "Do you can help me?", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In britannico can't si pronuncia con una a lunga, \"caant\". Così si distingue da can.",
        },
      ],
    },
    {
      titolo: "CHIEDERE IL PERMESSO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Can si usa per chiedere e dare il permesso. Could è più gentile:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Can I open the window?", it: "Posso aprire la finestra?" },
            { en: "Could I use your phone?", it: "Potrei usare il tuo telefono?" },
            { en: "Of course you can.", it: "Certo che puoi." },
          ],
        },
      ],
    },
    {
      titolo: "CHIEDERE UN FAVORE",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "Can you pass me the salt?", it: "Mi passi il sale?" },
            { en: "Could you speak more slowly, please?", it: "Potrebbe parlare più lentamente, per favore?" },
            { en: "Could you repeat that?", it: "Potrebbe ripetere?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Con gli sconosciuti usa could: suona più educato. \"Could you speak more slowly?\" ti sarà utilissimo in Inghilterra.",
        },
      ],
    },
    {
      titolo: "COULD: IL PASSATO DI CAN",
      blocchi: [
        {
          tipo: "testo",
          testo: "Could è anche il passato di can: \"sapevo\", \"potevo\".",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I could read when I was four.", it: "Sapevo leggere a quattro anni." },
            { en: "We couldn't sleep.", it: "Non riuscivamo a dormire." },
          ],
        },
      ],
    },
    {
      titolo: "CAN CON I SENSI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con see, hear, smell l'inglese usa can dove l'italiano usa il presente:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I can see the sea.", it: "Vedo il mare." },
            { en: "Can you hear me?", it: "Mi senti?" },
            { en: "I can smell smoke.", it: "Sento odore di fumo." },
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
          testo: "Can",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["He cans swim.", "He can to swim.", "He can swim."],
          giusta: 2,
          spiegazione: "Can è uguale per tutti (niente -s) e vuole il verbo base, senza to.",
          rivedi: "CAN: SAPER FARE E POTERE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa significa \"She can speak three languages\"?",
          opzioni: ["Può parlare tre lingue (ha il permesso)", "Sa parlare tre lingue"],
          giusta: 1,
          spiegazione: "Qui can indica una capacità: saper fare.",
          rivedi: "CAN: SAPER FARE E POTERE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale domanda è corretta?",
          opzioni: ["Do you can help me?", "Can you help me?", "Can you to help me?"],
          giusta: 1,
          spiegazione: "Can fa le domande da solo, senza do.",
          rivedi: "NEGATIVA E DOMANDE",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Non so guidare\".",
          prima: "I",
          dopo: "drive.",
          risposte: ["can't", "cannot"],
          spiegazione: "Can't, oppure cannot scritto tutto attaccato.",
          rivedi: "NEGATIVA E DOMANDE",
        },
        {
          tipo: "sottotitolo",
          testo: "Permessi e favori",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Chiedi a uno sconosciuto di usare il suo telefono. Qual è il modo più gentile?",
          opzioni: ["Can I use your phone?", "Could I use your phone?", "I use your phone?"],
          giusta: 1,
          spiegazione: "Could è più gentile di can: meglio con chi non conosci.",
          rivedi: "CHIEDERE IL PERMESSO",
        },
        {
          tipo: "riordina",
          consegna: "Chiedi gentilmente \"Potrebbe parlare più lentamente, per favore?\".",
          parole: ["slowly", "you", "more", "please", "could", "speak"],
          soluzione: ["could", "you", "speak", "more", "slowly", "please"],
          spiegazione: "È la frase più utile del tuo primo viaggio in Inghilterra.",
          rivedi: "CHIEDERE UN FAVORE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "A tavola, con la tua famiglia. Come chiedi \"Mi passi il sale?\"",
          opzioni: ["Can you pass me the salt?", "Do you pass me the salt?", "You pass me the salt?"],
          giusta: 0,
          spiegazione: "Con le persone che conosci can va benissimo.",
          rivedi: "CHIEDERE UN FAVORE",
        },
        {
          tipo: "sottotitolo",
          testo: "Could e i sensi",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Sapevo leggere a quattro anni\".",
          prima: "I",
          dopo: "read when I was four.",
          risposte: ["could"],
          spiegazione: "Could è il passato di can.",
          rivedi: "COULD: IL PASSATO DI CAN",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Non riuscivamo a dormire\".",
          prima: "We",
          dopo: "sleep.",
          risposte: ["couldn't", "could not"],
          rivedi: "COULD: IL PASSATO DI CAN",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Al telefono, come chiedi \"Mi senti?\"",
          opzioni: ["Do you hear me?", "Can you hear me?", "Are you hearing me?"],
          giusta: 1,
          spiegazione: "Con see, hear e smell l'inglese usa can dove l'italiano usa il presente.",
          rivedi: "CAN CON I SENSI",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Vedo il mare\".",
          parole: ["see", "sea", "can", "the", "I"],
          soluzione: ["I", "can", "see", "the", "sea"],
          rivedi: "CAN CON I SENSI",
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
          consegna: "Scrivi 4–5 frasi su cosa sai fare e cosa no, oggi e da bambino.",
          punti: ["due cose che sai fare", "una cosa che non sai fare", "una cosa che sapevi fare da bambino", "una cosa che non riuscivi a fare"],
          modello:
            "I can play the piano and I can cook very well. I can't swim, unfortunately. When I was six, I could ride a bike without hands! But I couldn't read until I was seven.",
          spiegazione:
            "Controlla: can e could senza to, niente -s, couldn't per il passato negativo.",
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
