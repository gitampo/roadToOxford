import { Voce } from "@/types/vocabolario";

export const E: Voce[] = [
  {
    id: "eventually",
    parola: "eventually",
    fonetica: "/ɪˈventʃuəli/",
    descrizione: "Falso amico: significa \"alla fine\", non \"eventualmente\".",
    usi: [
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "dopo molto tempo, o dopo molti tentativi",
            traduzioni: ["alla fine", "finalmente", "col tempo"],
            esempi: [
              {
                en: "After three hours we eventually found the hotel.",
                it: "Dopo tre ore alla fine abbiamo trovato l'albergo.",
              },
              {
                en: "Don't worry, you'll get used to it eventually.",
                it: "Non preoccuparti, col tempo ti ci abituerai.",
              },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "eventualmente",
      spiegazione:
        "Eventually dice che una cosa succede di sicuro, ma tardi. \"Eventualmente\" (se capita, se serve) si dice if necessary, if need be o possibly.",
    },
    attenzione: [
      "\"Eventualmente ti chiamo\" è I'll call you if necessary. I'll call you eventually vuol dire \"prima o poi ti chiamo\".",
      "L'aggettivo eventual segue la stessa regola: the eventual winner è \"il vincitore finale\", non \"l'eventuale vincitore\" (che è the possible winner).",
    ],
    lezioni: [{ id: "49", riquadro: 7 }],
  },
];
