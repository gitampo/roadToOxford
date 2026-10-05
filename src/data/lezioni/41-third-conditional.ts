import { Lezione } from "@/types/lezione";

export const thirdConditional: Lezione = {
  id: "41",
  titolo: "Third conditional",
  descrizione: "Fare ipotesi sul passato, esprimere rimpianti",
  chiavi: "periodo ipotetico, terzo tipo",
  livello: "B1",
  citazione: {
    testo: "If you had been here, my brother would not have died.",
    fonte: "Vangelo di Giovanni 11,21",
    traduzione: "Se tu fossi stato qui, mio fratello non sarebbe morto.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IPOTESI SUL PASSATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il third conditional immagina un passato diverso da com'è andato. La situazione non si può più cambiare.",
        },
        {
          tipo: "tabella",
          righe: [
            ["if + past perfect", "se + congiuntivo trapassato"],
            ["would have + participio", "condizionale passato"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I had studied, I would have passed.", it: "Se avessi studiato, sarei stato promosso." },
            { en: "If we had left earlier, we wouldn't have missed the train.", it: "Se fossimo partiti prima, non avremmo perso il treno." },
          ],
        },
      ],
    },
    {
      titolo: "COSA È SUCCESSO DAVVERO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Dietro ogni third conditional c'è la realtà opposta:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I had known, I would have helped you.", it: "Se l'avessi saputo, ti avrei aiutato." },
            { en: "I didn't know, so I didn't help you.", it: "Non lo sapevo, quindi non ti ho aiutato." },
          ],
        },
      ],
    },
    {
      titolo: "L'ERRORE CLASSICO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Would non va mai dopo if, nemmeno qui. Dopo if ci vuole had + participio:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I would have known, I would have come.", sbagliato: true },
            { en: "If I had known, I would have come.", it: "Se l'avessi saputo, sarei venuto." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nel parlato tutto si contrae: \"If I'd known, I'd have come\". Il primo 'd è had, il secondo would.",
        },
      ],
    },
    {
      titolo: "COULD HAVE E MIGHT HAVE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Al posto di would have puoi usare could have (avrei potuto) o might have (forse avrei):",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If you had asked me, I could have helped.", it: "Se me l'avessi chiesto, avrei potuto aiutarti." },
            { en: "If he had trained more, he might have won.", it: "Se si fosse allenato di più, forse avrebbe vinto." },
          ],
        },
      ],
    },
    {
      titolo: "RIMPIANTI: WISH + PAST PERFECT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Wish + past perfect esprime un rimpianto per qualcosa che è successo, o non è successo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I wish I had studied harder.", it: "Vorrei aver studiato di più." },
            { en: "I wish I hadn't said that.", it: "Vorrei non averlo detto." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Wish + past simple (lezione 36{6}) riguarda il presente; wish + past perfect riguarda il passato.",
        },
      ],
    },
    {
      titolo: "I TRE CONDIZIONALI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["first: if + present, will", "possibile nel futuro"],
            ["second: if + past, would", "immaginario nel presente"],
            ["third: if + past perfect, would have", "impossibile, nel passato"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I win, I'll be happy.", it: "Se vinco, sarò felice." },
            { en: "If I won, I'd be happy.", it: "Se vincessi, sarei felice." },
            { en: "If I had won, I'd have been happy.", it: "Se avessi vinto, sarei stato felice." },
          ],
        },
      ],
    },
  ],
};
