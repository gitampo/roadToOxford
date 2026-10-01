import { Lezione } from "@/types/lezione";

export const secondConditional: Lezione = {
  id: "36",
  titolo: "Second conditional e wish",
  descrizione: "Immaginare situazioni ed esprimere desideri",
  chiavi: "periodo ipotetico, secondo tipo, congiuntivo",
  livello: "[A2]",
  citazione: {
    testo: "If I were a rich man…",
    fonte: "Il violinista sul tetto",
    traduzione: "Se fossi un uomo ricco…",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "SITUAZIONI IMMAGINARIE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il second conditional parla di situazioni irreali o molto improbabili, nel presente o nel futuro. Corrisponde al nostro \"se + congiuntivo, condizionale\".",
        },
        {
          tipo: "tabella",
          righe: [
            ["if + past simple", "se + congiuntivo imperfetto"],
            ["would + verbo base", "condizionale"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I had more time, I would learn Japanese.", it: "Se avessi più tempo, imparerei il giapponese." },
            { en: "If I won the lottery, I'd buy a house.", it: "Se vincessi alla lotteria, comprerei una casa." },
          ],
        },
      ],
    },
    {
      titolo: "IL PASSATO CHE NON È PASSATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Dopo if si usa il past simple, ma non si parla del passato: il tempo passato indica che la situazione è irreale.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I would have money, I would travel.", sbagliato: true },
            { en: "If I had money, I would travel.", it: "Se avessi soldi, viaggerei." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Come nel first conditional, would non va mai dopo if.",
        },
      ],
    },
    {
      titolo: "IF I WERE YOU",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con to be si usa were per tutte le persone, anche con I, he, she. È il resto di un antico congiuntivo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I were rich, I'd stop working.", it: "Se fossi ricco, smetterei di lavorare." },
            { en: "If I were you, I'd apologise.", it: "Se fossi in te, chiederei scusa." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nel parlato si sente anche \"if I was\", ma \"If I were you\" è l'espressione fissa per dare consigli.",
        },
      ],
    },
    {
      titolo: "FIRST O SECOND?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La differenza è quanto consideri possibile la situazione:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I pass the exam, I'll celebrate.", it: "Se passo l'esame, festeggio (è probabile)." },
            { en: "If I passed the exam, I'd be amazed.", it: "Se passassi l'esame, ne sarei stupito (è improbabile)." },
          ],
        },
      ],
    },
    {
      titolo: "WOULD, COULD, MIGHT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nella conseguenza, al posto di would puoi usare could (potrei) o might (forse):",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I had a car, I could drive to Oxford.", it: "Se avessi la macchina, potrei andare a Oxford." },
            { en: "If she asked me, I might say yes.", it: "Se me lo chiedesse, forse direi di sì." },
          ],
        },
      ],
    },
    {
      titolo: "WISH: VORREI CHE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Wish + past simple esprime il desiderio che il presente fosse diverso. Come nel second conditional, il passato indica l'irrealtà:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I wish I had a dog.", it: "Vorrei avere un cane (ma non ce l'ho)." },
            { en: "I wish I were taller.", it: "Vorrei essere più alto." },
            { en: "I wish I lived by the sea.", it: "Mi piacerebbe vivere al mare." },
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I wish I have a dog.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "WISH + COULD",
      blocchi: [
        {
          tipo: "testo",
          testo: "Per le capacità che vorresti avere si usa wish + could:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I wish I could fly.", it: "Vorrei saper volare." },
            { en: "I wish I could speak English fluently.", it: "Vorrei parlare inglese fluentemente." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Per un desiderio sul futuro, possibile, non si usa wish ma hope: \"I hope you pass the exam\" (spero che tu passi l'esame).",
        },
      ],
    },
  ],
};
