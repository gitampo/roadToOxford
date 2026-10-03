import { Voce } from "@/types/vocabolario";

export const A: Voce[] = [
  {
    id: "actually",
    parola: "actually",
    fonetica: "/ˈæktʃuəli/",
    descrizione: "Falso amico: significa \"in realtà\", non \"attualmente\".",
    usi: [
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "per dire come stanno davvero le cose",
            traduzioni: ["in realtà", "in effetti", "veramente"],
            esempi: [
              {
                en: "He looks young, but he's actually forty.",
                it: "Sembra giovane, ma in realtà ha quarant'anni.",
              },
            ],
          },
          {
            indicazione: "per correggere o contraddire qualcuno con garbo",
            traduzioni: ["a dire il vero", "veramente"],
            etichette: ["parlato"],
            esempi: [
              {
                en: "Actually, I'd rather stay at home tonight.",
                it: "A dire il vero, stasera preferirei restare a casa.",
              },
              {
                en: "— You're Italian, aren't you? — Actually, I'm Spanish.",
                it: "— Sei italiano, vero? — Veramente sono spagnolo.",
              },
            ],
          },
          {
            indicazione: "per sottolineare la sorpresa",
            traduzioni: ["davvero", "addirittura"],
            esempi: [
              {
                en: "Did she actually say that to her boss?",
                it: "Ha detto davvero così al suo capo?",
              },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "attualmente",
      spiegazione:
        "Actually non ha niente a che fare con il tempo. \"Attualmente\" si dice currently o at the moment.",
    },
    attenzione: [
      "\"Attualmente vivo a Oxford\" è At the moment I live in Oxford (o I currently live in Oxford). Actually I live in Oxford vuol dire \"in realtà vivo a Oxford\", come se si correggesse qualcuno.",
      "Lo stesso vale per l'aggettivo actual: significa \"reale, vero\" (the actual cost, il costo reale), non \"attuale\", che è current.",
    ],
    lezioni: [
      { id: "54", riquadro: 6 },
      { id: "49", riquadro: 7 },
    ],
  },
];
