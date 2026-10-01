import { Lezione } from "@/types/lezione";

export const willMayMight: Lezione = {
  id: "28",
  titolo: "Will, may, might",
  descrizione: "Fare previsioni, promesse e offerte",
  chiavi: "futuro, probabilità",
  livello: "[A2]",
  citazione: {
    testo: "I'll be back.",
    fonte: "Terminator",
    traduzione: "Tornerò.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COME SI FORMA WILL",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Will + verbo base, uguale per tutte le persone. Nel parlato si contrae in 'll. Negativa: won't (will not).",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'll call you tonight.", it: "Ti chiamo stasera." },
            { en: "She won't be late.", it: "Non farà tardi." },
            { en: "Will you help me?", it: "Mi aiuti?" },
            { en: "It will to rain.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Won't si pronuncia \"uount\", con lo stesso suono di go. Want invece si pronuncia \"uont\". Ascolta bene la differenza: \"I won't go\" e \"I want to go\" hanno significati opposti.",
        },
      ],
    },
    {
      titolo: "DECISIONI DEL MOMENTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Will si usa quando decidi qualcosa proprio mentre parli, senza averlo pianificato:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The phone's ringing. — I'll get it.", it: "Squilla il telefono. — Rispondo io." },
            { en: "I'm cold. — I'll close the window.", it: "Ho freddo. — Chiudo la finestra." },
            { en: "I'll have the chicken, please.", it: "Prendo il pollo, per favore." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Confronta con going to (lezione 27{2}): \"I'm going to buy a bike\" è deciso da prima; \"OK, I'll buy it!\" è deciso adesso.",
        },
      ],
    },
    {
      titolo: "PROMESSE E OFFERTE",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "I'll always love you.", it: "Ti amerò per sempre." },
            { en: "I won't tell anyone.", it: "Non lo dirò a nessuno." },
            { en: "I'll help you with your homework.", it: "Ti aiuto con i compiti." },
          ],
        },
        {
          tipo: "testo",
          testo: "Per offrirsi di fare qualcosa, nella domanda si usa shall:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Shall I open the door?", it: "Apro io la porta?" },
            { en: "Shall we go?", it: "Andiamo?" },
          ],
        },
      ],
    },
    {
      titolo: "PREVISIONI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Will si usa per le previsioni basate su un'opinione, spesso con I think, I'm sure, probably:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I think it will be a great film.", it: "Penso che sarà un bel film." },
            { en: "She'll probably pass the exam.", it: "Probabilmente passerà l'esame." },
            { en: "I don't think he'll come.", it: "Non credo che verrà." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Si dice \"I don't think he'll come\", non \"I think he won't come\": in inglese la negazione va su think.",
        },
      ],
    },
    {
      titolo: "MAY E MIGHT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "May e might indicano una possibilità, non una certezza. Significano \"forse\", \"può darsi che\":",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It might rain later.", it: "Forse più tardi pioverà." },
            { en: "I may be late.", it: "Potrei fare tardi." },
            { en: "She might not come.", it: "Può darsi che non venga." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "May è un po' più probabile e più formale, might un po' meno sicuro. Nel parlato si usa soprattutto might.",
        },
      ],
    },
    {
      titolo: "DALLA CERTEZZA AL DUBBIO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["will", "sicuro"],
            ["will probably", "molto probabile"],
            ["may", "possibile"],
            ["might", "possibile, ma meno"],
            ["probably won't", "poco probabile"],
            ["won't", "sicuramente no"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'll probably stay at home.", it: "Probabilmente resterò a casa." },
            { en: "I probably won't go out.", it: "Probabilmente non uscirò." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Attenzione all'ordine: probably va dopo will, ma prima di won't.",
        },
      ],
    },
  ],
};
