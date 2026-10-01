import { Lezione } from "@/types/lezione";

export const adverbsManner: Lezione = {
  id: "33",
  titolo: "Avverbi di modo",
  descrizione: "Descrivere come si fa qualcosa",
  chiavi: "avverbi di modo, -ly",
  livello: "A2",
  citazione: {
    testo: "Speak softly and carry a big stick.",
    fonte: "Theodore Roosevelt",
    traduzione: "Parla con gentilezza e porta con te un grosso bastone.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "AGGETTIVO + -LY",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Gli avverbi di modo dicono come si fa qualcosa. Si formano quasi sempre aggiungendo -ly all'aggettivo, come il nostro -mente:",
        },
        {
          tipo: "tabella",
          righe: [
            ["slow → slowly", "lentamente"],
            ["quick → quickly", "velocemente"],
            ["careful → carefully", "con attenzione"],
            ["quiet → quietly", "in silenzio"],
          ],
        },
      ],
    },
    {
      titolo: "COME SI SCRIVONO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["consonante + y → -ily", "easy → easily, happy → happily"],
            ["-le → -ly", "gentle → gently, terrible → terribly"],
            ["-ic → -ically", "basic → basically"],
          ],
        },
      ],
    },
    {
      titolo: "AGGETTIVO O AVVERBIO?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'aggettivo descrive un nome. L'avverbio descrive un verbo, cioè come si fa l'azione:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She's a careful driver.", it: "È una guidatrice prudente (aggettivo)." },
            { en: "She drives carefully.", it: "Guida con prudenza (avverbio)." },
            { en: "She drives careful.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "GLI IRREGOLARI",
      blocchi: [
        {
          tipo: "testo",
          testo: "Alcuni avverbi sono uguali all'aggettivo, o cambiano del tutto:",
        },
        {
          tipo: "tabella",
          righe: [
            ["good → well", "bene"],
            ["fast → fast", "velocemente"],
            ["hard → hard", "duramente, molto"],
            ["late → late", "tardi"],
            ["early → early", "presto"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "He speaks English well.", it: "Parla bene l'inglese." },
            { en: "He speaks English good.", sbagliato: true },
            { en: "She works hard.", it: "Lavora sodo." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Attenzione: hardly significa \"a malapena\", e lately \"ultimamente\". Non sono gli avverbi di hard e late.",
        },
      ],
    },
    {
      titolo: "DOVE SI METTONO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Di solito dopo il verbo, o dopo il complemento se c'è. Mai tra il verbo e il complemento:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She sings beautifully.", it: "Canta benissimo." },
            { en: "He speaks English fluently.", it: "Parla inglese fluentemente." },
            { en: "He speaks fluently English.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In italiano \"parla bene l'inglese\" è normale; in inglese l'avverbio non può separare il verbo dal complemento.",
        },
      ],
    },
    {
      titolo: "I VERBI DEI SENSI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Dopo look, sound, feel, taste, smell (quando significano \"sembrare\") si usa l'aggettivo, non l'avverbio:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You look tired.", it: "Sembri stanco." },
            { en: "This cake tastes good.", it: "Questa torta è buona." },
            { en: "I feel badly.", sbagliato: true },
            { en: "I feel bad.", it: "Mi sento male (in colpa)." },
          ],
        },
      ],
    },
  ],
};
