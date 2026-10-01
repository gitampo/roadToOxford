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
  ],
};
