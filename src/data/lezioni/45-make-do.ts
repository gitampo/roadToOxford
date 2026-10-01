import { Lezione } from "@/types/lezione";

export const makeDo: Lezione = {
  id: "45",
  titolo: "Make o do?",
  descrizione: "Parlare di impegni e faccende",
  chiavi: "fare, collocazioni",
  livello: "B1",
  citazione: {
    testo: "Do or do not. There is no try.",
    fonte: "Yoda, L'Impero colpisce ancora",
    traduzione: "Fare o non fare. Non c'è provare.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "DUE VERBI PER \"FARE\"",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'italiano ha un solo verbo, fare. L'inglese ne ha due, e sceglierli è una questione di abitudine più che di regole. C'è però un'idea di base:",
        },
        {
          tipo: "tabella",
          righe: [
            ["make", "creare, produrre qualcosa di nuovo"],
            ["do", "svolgere un'attività, un compito"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I made a cake.", it: "Ho fatto una torta (prima non c'era)." },
            { en: "I did the washing-up.", it: "Ho lavato i piatti (un'attività)." },
          ],
        },
      ],
    },
    {
      titolo: "LE ESPRESSIONI CON DO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["do homework", "fare i compiti"],
            ["do the housework", "fare le faccende di casa"],
            ["do the shopping", "fare la spesa"],
            ["do sport / exercise", "fare sport / esercizio"],
            ["do a favour", "fare un favore"],
            ["do your best", "fare del tuo meglio"],
            ["do business", "fare affari"],
            ["do an exam", "fare un esame (britannico)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Con le parole vaghe si usa do: do something, do nothing, do everything.",
        },
      ],
    },
    {
      titolo: "LE ESPRESSIONI CON MAKE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["make a mistake", "fare un errore"],
            ["make a decision", "prendere una decisione"],
            ["make a phone call", "fare una telefonata"],
            ["make friends", "fare amicizia"],
            ["make money", "guadagnare"],
            ["make noise", "fare rumore"],
            ["make an effort", "fare uno sforzo"],
            ["make the bed", "rifare il letto"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I did a mistake.", sbagliato: true },
            { en: "I made a mistake.", it: "Ho fatto un errore." },
          ],
        },
      ],
    },
    {
      titolo: "IL CIBO",
      blocchi: [
        {
          tipo: "testo",
          testo: "Con i pasti e le bevande che prepari si usa make:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "make breakfast", it: "preparare la colazione" },
            { en: "make a cup of tea", it: "fare una tazza di tè" },
            { en: "make a sandwich", it: "fare un panino" },
          ],
        },
      ],
    },
    {
      titolo: "MAKE + PERSONA + VERBO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Make someone do something significa \"far fare qualcosa a qualcuno\", spesso per obbligarlo o come effetto. Il verbo dopo è senza to:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "My mum made me tidy my room.", it: "Mia madre mi ha fatto riordinare la stanza." },
            { en: "This song makes me cry.", it: "Questa canzone mi fa piangere." },
            { en: "It makes me to laugh.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Make + aggettivo: \"You make me happy\" (mi rendi felice).",
        },
      ],
    },
    {
      titolo: "NON È SEMPRE FARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Molte espressioni italiane con \"fare\" in inglese usano altri verbi:",
        },
        {
          tipo: "tabella",
          righe: [
            ["take a photo", "fare una foto"],
            ["take a shower", "fare la doccia"],
            ["have breakfast", "fare colazione"],
            ["go for a walk", "fare una passeggiata"],
            ["ask a question", "fare una domanda"],
            ["pay attention", "fare attenzione"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Can I do a question?", sbagliato: true },
            { en: "Can I ask a question?", it: "Posso fare una domanda?" },
          ],
        },
      ],
    },
  ],
};
