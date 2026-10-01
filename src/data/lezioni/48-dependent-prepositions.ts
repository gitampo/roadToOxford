import { Lezione } from "@/types/lezione";

export const dependentPrepositions: Lezione = {
  id: "48",
  titolo: "Preposizioni rette",
  descrizione: "Usare la preposizione giusta dopo verbi e aggettivi",
  chiavi: "preposizioni rette",
  livello: "[B1]",
  citazione: {
    testo: "I'm in love with the shape of you.",
    fonte: "Ed Sheeran, Shape of You",
    traduzione: "Sono innamorato della tua forma.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COSA SONO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Molti verbi, aggettivi e nomi vogliono una preposizione precisa. Spesso non è quella che useresti traducendo dall'italiano: \"innamorato di\" è in love with, non of.",
        },
        {
          tipo: "nota",
          testo:
            "Non c'è una logica da capire: vanno imparate insieme alla parola, come se fossero un blocco unico.",
        },
      ],
    },
    {
      titolo: "VERBI + PREPOSIZIONE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["depend on", "dipendere da"],
            ["listen to", "ascoltare"],
            ["wait for", "aspettare"],
            ["look for", "cercare"],
            ["think about / of", "pensare a"],
            ["belong to", "appartenere a"],
            ["agree with", "essere d'accordo con"],
            ["apply for", "fare domanda per"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It depends from the weather.", sbagliato: true },
            { en: "It depends on the weather.", it: "Dipende dal tempo." },
            { en: "I'm listening music.", sbagliato: true },
            { en: "I'm listening to music.", it: "Sto ascoltando musica." },
          ],
        },
      ],
    },
    {
      titolo: "SENZA PREPOSIZIONE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il contrario: alcuni verbi vogliono la preposizione in italiano, ma non in inglese:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I phoned to my mother.", sbagliato: true },
            { en: "I phoned my mother.", it: "Ho telefonato a mia madre." },
            { en: "Can you answer to the question?", sbagliato: true },
            { en: "Can you answer the question?", it: "Puoi rispondere alla domanda?" },
            { en: "We discussed the problem.", it: "Abbiamo discusso del problema." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Altri verbi senza preposizione: enter (entrare in), marry (sposarsi con), reach (arrivare a), ask (chiedere a).",
        },
      ],
    },
    {
      titolo: "AGGETTIVI + PREPOSIZIONE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["good / bad at", "bravo / scarso in"],
            ["interested in", "interessato a"],
            ["afraid of", "spaventato da"],
            ["proud of", "orgoglioso di"],
            ["married to", "sposato con"],
            ["different from", "diverso da"],
            ["similar to", "simile a"],
            ["responsible for", "responsabile di"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm good in maths.", sbagliato: true },
            { en: "I'm good at maths.", it: "Sono bravo in matematica." },
            { en: "She's married to a Scottish man.", it: "È sposata con uno scozzese." },
          ],
        },
      ],
    },
    {
      titolo: "NOMI + PREPOSIZIONE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["reason for", "motivo di"],
            ["increase in", "aumento di"],
            ["solution to", "soluzione a / di"],
            ["advantage of", "vantaggio di"],
            ["relationship with", "rapporto con"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "There's been an increase in prices.", it: "C'è stato un aumento dei prezzi." },
            { en: "What's the reason for the delay?", it: "Qual è il motivo del ritardo?" },
          ],
        },
      ],
    },
    {
      titolo: "PREPOSIZIONE + -ING",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Se dopo la preposizione c'è un verbo, va in -ing (lezione 47{4}):",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm thinking about moving to London.", it: "Sto pensando di trasferirmi a Londra." },
            { en: "She's afraid of flying.", it: "Ha paura di volare." },
            { en: "I'm tired of waiting.", it: "Sono stanco di aspettare." },
          ],
        },
      ],
    },
  ],
};
