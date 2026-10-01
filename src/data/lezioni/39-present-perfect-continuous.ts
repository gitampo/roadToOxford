import { Lezione } from "@/types/lezione";

export const presentPerfectContinuous: Lezione = {
  id: "39",
  titolo: "Present Perfect Continuous",
  descrizione: "Parlare di attività in corso da tempo",
  chiavi: "how long, been + -ing",
  livello: "[B1]",
  citazione: {
    testo: "I've been working on the railroad.",
    fonte: "Canzone popolare americana",
    traduzione: "Ho lavorato alla ferrovia.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COME SI FORMA",
      blocchi: [
        {
          tipo: "testo",
          testo: "Have / has + been + verbo in -ing:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I've been waiting", "sto aspettando, aspetto da…"],
            ["she's been working", "sta lavorando, lavora da…"],
            ["they haven't been sleeping", "non stanno dormendo"],
            ["Have you been crying?", "Hai pianto?"],
          ],
        },
      ],
    },
    {
      titolo: "UN'AZIONE CHE DURA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Indica un'azione iniziata nel passato e ancora in corso. Va spesso con for, since e How long (lezione 31{1}):",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've been studying for three hours.", it: "Studio da tre ore." },
            { en: "It's been raining since this morning.", it: "Piove da stamattina." },
            { en: "How long have you been learning English?", it: "Da quanto studi inglese?" },
          ],
        },
      ],
    },
    {
      titolo: "LE TRACCE DI UN'AZIONE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si usa anche per un'azione appena finita di cui si vedono ancora gli effetti:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You're out of breath. Have you been running?", it: "Hai il fiatone. Hai corso?" },
            { en: "The ground is wet. It's been raining.", it: "Il terreno è bagnato. Ha piovuto." },
            { en: "Her eyes are red. She's been crying.", it: "Ha gli occhi rossi. Ha pianto." },
          ],
        },
      ],
    },
    {
      titolo: "SIMPLE O CONTINUOUS?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il present perfect simple guarda al risultato (quanto hai fatto). Il continuous guarda all'attività (per quanto tempo):",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've read three chapters.", it: "Ho letto tre capitoli (risultato)." },
            { en: "I've been reading all afternoon.", it: "Ho letto tutto il pomeriggio (attività)." },
            { en: "I've painted the kitchen.", it: "Ho pitturato la cucina (è finita)." },
            { en: "I've been painting the kitchen.", it: "Sto pitturando la cucina (forse non è finita)." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Con un numero (quanti, quante volte) si usa il simple: \"I've drunk four coffees\", non \"I've been drinking four coffees\".",
        },
      ],
    },
    {
      titolo: "I VERBI DI STATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Come sempre, i verbi di stato non vanno al continuous. Si usa il present perfect simple:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've been knowing her for years.", sbagliato: true },
            { en: "I've known her for years.", it: "La conosco da anni." },
            { en: "He's had that car since 2015.", it: "Ha quella macchina dal 2015." },
          ],
        },
      ],
    },
    {
      titolo: "LIVE E WORK",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con live, work, study, teach le due forme sono quasi uguali. Il continuous fa sembrare la situazione più temporanea:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've lived here for twenty years.", it: "Abito qui da vent'anni (stabile)." },
            { en: "I've been living here for a few months.", it: "Abito qui da qualche mese (temporaneo)." },
          ],
        },
      ],
    },
  ],
};
