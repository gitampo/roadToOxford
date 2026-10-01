import { Lezione } from "@/types/lezione";

export const pastSimpleQuestions: Lezione = {
  id: "24",
  titolo: "Past Simple: negativa e domande",
  descrizione: "Chiedere e raccontare un viaggio",
  chiavi: "did, didn't",
  livello: "[A1]",
  citazione: {
    testo: "Why did the chicken cross the road?",
    fonte: "Indovinello tradizionale",
    traduzione: "Perché la gallina ha attraversato la strada?",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "LA NEGATIVA: DIDN'T",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si usa didn't (did not) + verbo base, per tutte le persone. Vale per regolari e irregolari.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I didn't sleep well.", it: "Non ho dormito bene." },
            { en: "She didn't come.", it: "Non è venuta." },
            { en: "We didn't see the film.", it: "Non abbiamo visto il film." },
          ],
        },
      ],
    },
    {
      titolo: "IL PASSATO SI USA UNA VOLTA SOLA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Did porta già il passato, quindi il verbo torna alla forma base. È come la -s con doesn't:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I didn't went.", sbagliato: true },
            { en: "I didn't go.", it: "Non sono andato." },
            { en: "She didn't called.", sbagliato: true },
            { en: "She didn't call.", it: "Non ha chiamato." },
          ],
        },
      ],
    },
    {
      titolo: "LE DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Did va davanti al soggetto, il verbo resta base:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Did you like it?", it: "Ti è piaciuto?" },
            { en: "Did she call you?", it: "Ti ha chiamato?" },
            { en: "Where did you go?", it: "Dove sei andato?" },
            { en: "What did you do yesterday?", it: "Cosa hai fatto ieri?" },
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Yes, I did. / No, I didn't.", it: "Sì. / No." },
          ],
        },
      ],
    },
    {
      titolo: "TO BE NON VUOLE DID",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Come al presente, to be e i modali (can, could) non vogliono l'ausiliare:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Did you be tired?", sbagliato: true },
            { en: "Were you tired?", it: "Eri stanco?" },
            { en: "I didn't can come.", sbagliato: true },
            { en: "I couldn't come.", it: "Non sono potuto venire." },
          ],
        },
      ],
    },
    {
      titolo: "WHO SENZA DID",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Quando who o what sono il soggetto della domanda, did non si usa:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Who called you?", it: "Chi ti ha chiamato? (who è il soggetto)" },
            { en: "Who did you call?", it: "Chi hai chiamato? (you è il soggetto)" },
            { en: "What happened?", it: "Cos'è successo?" },
            { en: "What did happen?", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "RACCONTARE UN VIAGGIO",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "Where did you go on holiday?", it: "Dove sei andato in vacanza?" },
            { en: "We went to Scotland.", it: "Siamo andati in Scozia." },
            { en: "How did you travel?", it: "Come avete viaggiato?" },
            { en: "We took the train.", it: "Abbiamo preso il treno." },
            { en: "Did you enjoy it?", it: "Ti è piaciuto?" },
            { en: "Yes, but it didn't stop raining!", it: "Sì, ma non ha mai smesso di piovere!" },
          ],
        },
      ],
    },
  ],
};
