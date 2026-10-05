import { Lezione } from "@/types/lezione";

export const modalsDeduction: Lezione = {
  id: "45",
  titolo: "Modali di deduzione",
  descrizione: "Fare supposizioni",
  chiavi: "must be, can't be, deduzione",
  livello: "B1",
  citazione: {
    testo: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    fonte: "Arthur Conan Doyle, Il segno dei quattro",
    traduzione: "Eliminato l'impossibile, ciò che resta, per quanto improbabile, deve essere la verità.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "RAGIONARE COME SHERLOCK",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Must, might, can't non esprimono solo obbligo o possibilità: servono anche per fare deduzioni, cioè ipotesi basate su indizi.",
        },
        {
          tipo: "tabella",
          righe: [
            ["must be", "deve essere (sono quasi sicuro di sì)"],
            ["might / may / could be", "potrebbe essere (forse)"],
            ["can't be", "non può essere (sono quasi sicuro di no)"],
          ],
        },
      ],
    },
    {
      titolo: "MUST: QUASI SICURO",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "She's been working all day. She must be tired.", it: "Ha lavorato tutto il giorno. Sarà stanca." },
            { en: "The lights are on. They must be at home.", it: "Le luci sono accese. Devono essere a casa." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In italiano la deduzione si fa spesso con il futuro: \"sarà stanca\". In inglese si usa must.",
        },
      ],
    },
    {
      titolo: "CAN'T: SICURAMENTE NO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il contrario di must, in una deduzione, non è mustn't ma can't:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "He mustn't be hungry, he's just eaten.", sbagliato: true },
            { en: "He can't be hungry, he's just eaten.", it: "Non può avere fame, ha appena mangiato." },
            { en: "That can't be true!", it: "Non può essere vero!" },
          ],
        },
      ],
    },
    {
      titolo: "MIGHT, MAY, COULD: FORSE",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "Where's Tom? — He might be in the library.", it: "Dov'è Tom? — Potrebbe essere in biblioteca." },
            { en: "This could be the answer.", it: "Questa potrebbe essere la risposta." },
            { en: "She may not know.", it: "Forse non lo sa." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Could not ha un significato diverso da might not: \"It couldn't be him\" = non può essere lui. \"It might not be him\" = forse non è lui.",
        },
      ],
    },
    {
      titolo: "DEDUZIONI SUL PASSATO",
      blocchi: [
        {
          tipo: "testo",
          testo: "Per il passato si aggiunge have + participio:",
        },
        {
          tipo: "tabella",
          righe: [
            ["must have done", "deve aver fatto"],
            ["might have done", "potrebbe aver fatto"],
            ["can't have done", "non può aver fatto"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The ground is wet. It must have rained.", it: "Il terreno è bagnato. Deve aver piovuto." },
            { en: "She can't have seen us.", it: "Non può averci visti." },
            { en: "I might have left my keys at school.", it: "Forse ho lasciato le chiavi a scuola." },
          ],
        },
      ],
    },
    {
      titolo: "CON IL CONTINUOUS",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per un'azione in corso si usa must / might / can't + be + -ing:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "He's not answering. He must be sleeping.", it: "Non risponde. Starà dormendo." },
            { en: "You can't be serious!", it: "Non dirai sul serio!" },
          ],
        },
      ],
    },
  ],
};
