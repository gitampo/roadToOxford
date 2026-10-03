import { Voce } from "@/types/vocabolario";

export const J: Voce[] = [
  {
    id: "journey",
    parola: "journey",
    fonetica: "/ˈdʒɜːni/",
    descrizione: "Lo spostamento da un posto a un altro: viaggio, tragitto.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["viaggio", "tragitto"],
            esempi: [
              { en: "The journey to work takes an hour.", it: "Il tragitto per andare al lavoro dura un'ora." },
              { en: "Have a safe journey!", it: "Buon viaggio!" },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Journey è lo spostamento da un posto all'altro; trip è il viaggio con andata e ritorno (a business trip, a school trip); travel è il viaggiare in generale e si usa quasi solo come verbo: a travel è sbagliato.",
    ],
  },
];
