import { Lezione } from "@/types/lezione";

export const imperatives: Lezione = {
  id: "19",
  titolo: "L'imperativo",
  descrizione: "Dare istruzioni e indicazioni",
  chiavi: "imperativo, ricette",
  livello: "A1",
  citazione: {
    testo: "Keep calm and carry on.",
    fonte: "Manifesto britannico, 1939",
    traduzione: "Mantieni la calma e vai avanti.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COME SI FORMA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'imperativo è il verbo nella forma base, senza soggetto. È uguale per tu e per voi.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Sit down.", it: "Siediti. / Sedetevi." },
            { en: "Open the window.", it: "Apri la finestra." },
            { en: "Listen!", it: "Ascolta!" },
          ],
        },
      ],
    },
    {
      titolo: "LA FORMA NEGATIVA",
      blocchi: [
        {
          tipo: "testo",
          testo: "Si mette don't davanti al verbo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Don't touch!", it: "Non toccare!" },
            { en: "Don't be late.", it: "Non fare tardi." },
            { en: "Don't worry.", it: "Non preoccuparti." },
            { en: "Not touch!", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Anche con to be si usa don't: \"Don't be sad\". È l'unico caso in cui to be vuole do.",
        },
      ],
    },
    {
      titolo: "LET'S",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per proporre qualcosa da fare insieme si usa let's (let us) + verbo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Let's go!", it: "Andiamo!" },
            { en: "Let's have a break.", it: "Facciamo una pausa." },
            { en: "Let's not argue.", it: "Non litighiamo." },
          ],
        },
      ],
    },
    {
      titolo: "ESSERE GENTILI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In inglese l'imperativo da solo può suonare brusco. Per essere educati si aggiunge please, oppure si trasforma in domanda:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Close the door, please.", it: "Chiudi la porta, per favore." },
            { en: "Could you close the door, please?", it: "Potresti chiudere la porta, per favore?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Con gli sconosciuti, in un negozio o al ristorante, meglio sempre la domanda con could you. Gli inglesi ci tengono molto.",
        },
      ],
    },
    {
      titolo: "LE INDICAZIONI STRADALI",
      blocchi: [
        {
          tipo: "testo",
          testo: "L'imperativo si usa per dare indicazioni:",
        },
        {
          tipo: "tabella",
          righe: [
            ["go straight on", "vai sempre dritto"],
            ["turn left / right", "gira a sinistra / destra"],
            ["take the second left", "prendi la seconda a sinistra"],
            ["cross the road", "attraversa la strada"],
            ["it's on your right", "è sulla tua destra"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Go straight on and turn left at the lights.", it: "Vai dritto e gira a sinistra al semaforo." },
          ],
        },
      ],
    },
    {
      titolo: "LE RICETTE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Anche le ricette e le istruzioni usano l'imperativo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Boil the water.", it: "Fai bollire l'acqua." },
            { en: "Add salt and cook for ten minutes.", it: "Aggiungi il sale e cuoci per dieci minuti." },
            { en: "Mix the eggs and the flour.", it: "Mescola le uova e la farina." },
            { en: "Serve hot.", it: "Servire caldo." },
          ],
        },
      ],
    },
    {
      titolo: "ALTRE ESPRESSIONI UTILI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["Have a nice day!", "Buona giornata!"],
            ["Take care.", "Stammi bene."],
            ["Help yourself.", "Serviti pure."],
            ["Mind the gap.", "Attenzione allo spazio (nella metro di Londra)."],
            ["Hurry up!", "Sbrigati!"],
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
          testo: "Affermativo e negativo",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Sedetevi\" a una classe?",
          opzioni: ["You sit down.", "Sit down.", "Sit you down."],
          giusta: 1,
          spiegazione: "L'imperativo è il verbo base senza soggetto, uguale per tu e per voi.",
          rivedi: "COME SI FORMA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Non toccare!\"?",
          opzioni: ["Not touch!", "Don't touch!", "No touch!"],
          giusta: 1,
          spiegazione: "La negativa si fa con don't davanti al verbo.",
          rivedi: "LA FORMA NEGATIVA",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Non essere triste\".",
          prima: "",
          dopo: "be sad.",
          risposte: ["Don't", "Do not"],
          spiegazione: "Nell'imperativo anche to be vuole don't: è l'unico caso.",
          rivedi: "LA FORMA NEGATIVA",
        },
        {
          tipo: "riordina",
          consegna: "Proponi \"Facciamo una pausa\".",
          parole: ["break", "have", "a", "let's"],
          soluzione: ["let's", "have", "a", "break"],
          spiegazione: "Let's + verbo base per proporre qualcosa da fare insieme.",
          rivedi: "LET'S",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Non litighiamo\"?",
          opzioni: ["Don't let's argue.", "Let's not argue.", "Let's don't argue."],
          giusta: 1,
          spiegazione: "La negativa di let's si fa con not dopo let's.",
          rivedi: "LET'S",
        },
        {
          tipo: "sottotitolo",
          testo: "Essere gentili",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "In un negozio chiedi al commesso di chiudere la porta. Qual è il modo più educato?",
          opzioni: ["Close the door.", "Close the door now.", "Could you close the door, please?"],
          giusta: 2,
          spiegazione: "Con gli sconosciuti l'imperativo da solo suona brusco: meglio una domanda con could you + please.",
          rivedi: "ESSERE GENTILI",
        },
        {
          tipo: "sottotitolo",
          testo: "Indicazioni e ricette",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni indicazione alla traduzione.",
          coppie: [
            ["go straight on", "vai sempre dritto"],
            ["turn left", "gira a sinistra"],
            ["cross the road", "attraversa la strada"],
            ["take the second right", "prendi la seconda a destra"],
            ["it's on your left", "è sulla tua sinistra"],
          ],
          rivedi: "LE INDICAZIONI STRADALI",
        },
        {
          tipo: "riordina",
          consegna: "Scrivi il passo della ricetta: \"Aggiungi il sale e cuoci per dieci minuti\".",
          parole: ["cook", "salt", "minutes", "add", "for", "ten", "and"],
          soluzione: ["add", "salt", "and", "cook", "for", "ten", "minutes"],
          spiegazione: "Ricette e istruzioni usano l'imperativo.",
          rivedi: "LE RICETTE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni espressione al suo significato.",
          coppie: [
            ["Have a nice day!", "Buona giornata!"],
            ["Take care.", "Stammi bene."],
            ["Help yourself.", "Serviti pure."],
            ["Hurry up!", "Sbrigati!"],
          ],
          rivedi: "ALTRE ESPRESSIONI UTILI",
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
          consegna: "Un turista ti chiede la strada per la stazione. Dagli le indicazioni in 3–4 frasi.",
          punti: ["vai dritto", "gira a destra o a sinistra", "un punto di riferimento", "dove si trova alla fine"],
          modello:
            "Go straight on for about two hundred metres. Turn right at the lights and cross the road. Take the second left: the station is on your right, opposite a big supermarket.",
          spiegazione:
            "Controlla che ogni frase cominci con il verbo base, senza you. Se vuoi essere ancora più gentile, aggiungi \"Don't worry, it's easy!\".",
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
