import { Voce } from "@/types/vocabolario";

export const V: Voce[] = [
  {
    id: "vacancy",
    parola: "vacancy",
    fonetica: "/ˈveɪkənsi/",
    descrizione: "Falso amico: significa \"posto libero\", non \"vacanza\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un lavoro",
            traduzioni: ["posto vacante", "posto di lavoro libero"],
            esempi: [{ en: "We have a vacancy for a receptionist.", it: "Cerchiamo un receptionist." }],
          },
          {
            indicazione: "in un albergo",
            traduzioni: ["camera libera"],
            esempi: [{ en: "No vacancies.", it: "Completo." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "vacanza",
      spiegazione:
        "La vacanza è holiday (UK) o vacation (US): We're going on holiday to Spain.",
    },
    attenzione: [
      "Essere in vacanza è be on holiday: I'm on holiday next week.",
      "L'aggettivo vacant vuol dire libero, non occupato: a vacant seat.",
    ],
  },
];
