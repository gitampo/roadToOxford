import { Voce } from "@/types/vocabolario";

export const Q: Voce[] = [
  {
    id: "quite",
    parola: "quite",
    fonetica: "/kwaɪt/",
    descrizione: "Abbastanza; con certi aggettivi, del tutto.",
    usi: [
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "con aggettivi normali",
            traduzioni: ["abbastanza", "piuttosto"],
            etichette: ["UK"],
            esempi: [
              { en: "The film was quite good.", it: "Il film era abbastanza bello." },
              { en: "It's quite cold today.", it: "Oggi fa piuttosto freddo." },
            ],
          },
          {
            indicazione: "con aggettivi assoluti",
            traduzioni: ["del tutto", "completamente"],
            esempi: [
              { en: "You're quite right.", it: "Hai perfettamente ragione." },
              { en: "I'm not quite sure.", it: "Non ne sono del tutto sicuro." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "quite a lot / quite a few",
        significati: [
          {
            traduzioni: ["parecchio", "parecchi"],
            esempi: [{ en: "Quite a few people came.", it: "È venuta parecchia gente." }],
          },
        ],
      },
    ],
    attenzione: [
      "Nell'inglese britannico quite good è \"abbastanza buono\", quasi tiepido; in quello americano suona più positivo, come \"proprio buono\".",
      "L'articolo va dopo quite: quite a long time, non a quite long time.",
      "Non confondere quite /kwaɪt/ con quiet /ˈkwaɪət/ (silenzioso).",
    ],
  },
];
