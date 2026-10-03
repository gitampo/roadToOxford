import { Voce } from "@/types/vocabolario";

export const Y: Voce[] = [
  {
    id: "yet",
    parola: "yet",
    fonetica: "/jet/",
    descrizione: "Fino a ora: ancora (nelle negative), già (nelle domande).",
    usi: [
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "nelle frasi negative",
            traduzioni: ["ancora"],
            esempi: [{ en: "I haven't finished yet.", it: "Non ho ancora finito." }],
          },
          {
            indicazione: "nelle domande",
            traduzioni: ["già"],
            esempi: [{ en: "Have you finished yet?", it: "Hai già finito?" }],
          },
        ],
      },
      {
        categoria: "congiunzione",
        significati: [
          {
            traduzioni: ["eppure", "però"],
            etichette: ["formale"],
            esempi: [{ en: "The story is simple, yet powerful.", it: "La storia è semplice, eppure potente." }],
          },
        ],
      },
    ],
    attenzione: [
      "Yet va di solito in fondo alla frase e, nell'inglese britannico, con il present perfect: Has the post arrived yet?",
      "Nelle frasi affermative \"già\" è already: I've already eaten. \"Ancora\" nel senso di \"tuttora\" è still: I'm still hungry.",
    ],
    lezioni: [{ id: "30", riquadro: 4 }],
  },
];
