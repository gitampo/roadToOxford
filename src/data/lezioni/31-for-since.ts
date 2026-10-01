import { Lezione } from "@/types/lezione";

export const forSince: Lezione = {
  id: "31",
  titolo: "For e since",
  descrizione: "Dire da quanto tempo",
  chiavi: "durata",
  livello: "A2",
  citazione: {
    testo: "I've been waiting for this moment for all my life.",
    fonte: "Phil Collins, In the Air Tonight",
    traduzione: "Ho aspettato questo momento per tutta la vita.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "DA QUANTO TEMPO?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano diciamo \"abito qui da tre anni\", con il presente. In inglese, per una situazione iniziata nel passato e che dura ancora, serve il present perfect:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I live here for three years.", sbagliato: true },
            { en: "I've lived here for three years.", it: "Abito qui da tre anni." },
            { en: "I know him since 2015.", sbagliato: true },
            { en: "I've known him since 2015.", it: "Lo conosco dal 2015." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "È uno degli errori più tipici degli italiani. Se c'è \"da\" + tempo e la situazione continua, pensa subito al present perfect.",
        },
      ],
    },
    {
      titolo: "FOR O SINCE?",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["for + durata", "for two hours, for a week, for ages"],
            ["since + punto di partenza", "since Monday, since 2010, since I was a child"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've been here for two hours.", it: "Sono qui da due ore." },
            { en: "I've been here since ten o'clock.", it: "Sono qui dalle dieci." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il trucco: se puoi contarlo (due ore, tre anni), for. Se è una data o un momento, since.",
        },
      ],
    },
    {
      titolo: "HOW LONG",
      blocchi: [
        {
          tipo: "testo",
          testo: "La domanda si fa con How long + present perfect:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "How long have you lived in Milan?", it: "Da quanto tempo abiti a Milano?" },
            { en: "How long have you had your phone?", it: "Da quanto hai il telefono?" },
            { en: "How long do you live here?", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "PRESENT PERFECT CONTINUOUS",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con i verbi di azione (work, study, wait) si usa spesso have been + -ing, per sottolineare che l'azione continua:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've been studying English for five years.", it: "Studio inglese da cinque anni." },
            { en: "She's been waiting since nine.", it: "Aspetta dalle nove." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "I verbi di stato (know, have, be, like) non vanno al continuous: \"I've known her for years\". Lo approfondisci nella lezione 39{5}.",
        },
      ],
    },
    {
      titolo: "FOR CON GLI ALTRI TEMPI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "For si usa anche con il past simple, per una durata finita nel passato:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I lived in Dublin for two years.", it: "Ho abitato a Dublino per due anni (ora non più)." },
            { en: "I've lived in Dublin for two years.", it: "Abito a Dublino da due anni (ci abito ancora)." },
          ],
        },
      ],
    },
    {
      titolo: "AGO, FOR, SINCE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["ago", "quanto tempo fa (past simple)"],
            ["for", "per quanto tempo"],
            ["since", "da quando"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I met her two years ago.", it: "L'ho conosciuta due anni fa." },
            { en: "I've known her for two years.", it: "La conosco da due anni." },
            { en: "I've known her since 2023.", it: "La conosco dal 2023." },
          ],
        },
      ],
    },
  ],
};
