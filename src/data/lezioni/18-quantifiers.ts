import { Lezione } from "@/types/lezione";

export const quantifiers: Lezione = {
  id: "18",
  titolo: "Some, any, much, many",
  descrizione: "Fare la spesa, chiedere quantità",
  chiavi: "quantificatori, a lot of",
  livello: "A1",
  citazione: {
    testo: "Much Ado About Nothing.",
    fonte: "William Shakespeare",
    traduzione: "Molto rumore per nulla.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "SOME E ANY",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Some e any significano \"un po' di\", \"qualche\", \"del/della\". Si usano con i plurali e con i non numerabili.",
        },
        {
          tipo: "tabella",
          righe: [
            ["some", "frasi affermative"],
            ["any", "frasi negative e domande"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have some friends in London.", it: "Ho degli amici a Londra." },
            { en: "There's some milk.", it: "C'è del latte." },
            { en: "I don't have any money.", it: "Non ho soldi." },
            { en: "Are there any eggs?", it: "Ci sono uova?" },
          ],
        },
      ],
    },
    {
      titolo: "SOME NELLE DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Quando offri o chiedi qualcosa, e ti aspetti un sì, si usa some anche nelle domande:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Would you like some tea?", it: "Vuoi del tè?" },
            { en: "Can I have some water, please?", it: "Posso avere dell'acqua, per favore?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Any nelle frasi affermative significa \"qualsiasi\": \"Take any seat\" (siediti dove vuoi).",
        },
      ],
    },
    {
      titolo: "NO E NOT ANY",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "No ha lo stesso significato di not any, ma si usa con il verbo affermativo. Mai insieme a un'altra negazione:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I haven't got any time.", it: "Non ho tempo." },
            { en: "I've got no time.", it: "Non ho tempo." },
            { en: "I haven't got no time.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "SOMETHING, ANYONE, NOWHERE…",
      blocchi: [
        {
          tipo: "testo",
          testo: "Le stesse regole valgono per le parole composte:",
        },
        {
          tipo: "tabella",
          righe: [
            ["something / anything / nothing", "qualcosa / niente"],
            ["someone / anyone / no one", "qualcuno / nessuno"],
            ["somewhere / anywhere / nowhere", "da qualche parte / da nessuna parte"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I want to eat something.", it: "Voglio mangiare qualcosa." },
            { en: "Is anyone here?", it: "C'è qualcuno?" },
            { en: "I didn't see anything.", it: "Non ho visto niente." },
            { en: "Nobody knows.", it: "Nessuno lo sa." },
          ],
        },
      ],
    },
    {
      titolo: "MUCH E MANY",
      blocchi: [
        {
          tipo: "testo",
          testo: "Significano entrambi \"molto\", ma si usano con nomi diversi:",
        },
        {
          tipo: "tabella",
          righe: [
            ["many + plurale", "many books, many people"],
            ["much + non numerabile", "much time, much money"],
          ],
        },
        {
          tipo: "testo",
          testo: "Si usano soprattutto nelle domande e nelle negative:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "How many brothers have you got?", it: "Quanti fratelli hai?" },
            { en: "How much is it?", it: "Quanto costa?" },
            { en: "I don't have much time.", it: "Non ho molto tempo." },
          ],
        },
      ],
    },
    {
      titolo: "A LOT OF",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nelle frasi affermative much suona formale. Si usa a lot of, che va bene con tutto:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have a lot of friends.", it: "Ho molti amici." },
            { en: "She drinks a lot of coffee.", it: "Beve molto caffè." },
            { en: "I have much money.", sbagliato: true },
            { en: "I have a lot of money.", it: "Ho molti soldi." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Lots of è ancora più informale. Alla fine della frase si usa a lot, senza of: \"I like it a lot\".",
        },
      ],
    },
    {
      titolo: "A FEW E A LITTLE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Significano \"un po'\", \"qualche\":",
        },
        {
          tipo: "tabella",
          righe: [
            ["a few + plurale", "a few days"],
            ["a little + non numerabile", "a little sugar"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Senza a, il significato diventa negativo: \"pochi, non abbastanza\".",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have a few friends.", it: "Ho qualche amico (è positivo)." },
            { en: "I have few friends.", it: "Ho pochi amici (non abbastanza)." },
            { en: "There's a little milk left.", it: "È rimasto un po' di latte." },
          ],
        },
      ],
    },
  ],
};
