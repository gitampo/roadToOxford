import { Lezione } from "@/types/lezione";

export const mustHaveToShould: Lezione = {
  id: "32",
  titolo: "Must, have to, should",
  descrizione: "Esprimere obblighi, regole e consigli",
  chiavi: "dovere, obbligo, mustn't",
  livello: "[A2]",
  citazione: {
    testo: "The show must go on.",
    fonte: "Queen",
    traduzione: "Lo spettacolo deve continuare.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "MUST E HAVE TO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Tutti e due significano \"dovere\". La differenza è da dove viene l'obbligo:",
        },
        {
          tipo: "tabella",
          righe: [
            ["must", "obbligo che senti tu, regole scritte"],
            ["have to", "obbligo che viene da fuori"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I must call my grandmother.", it: "Devo chiamare la nonna (lo sento io)." },
            { en: "I have to wear a uniform at work.", it: "Al lavoro devo portare la divisa (è la regola)." },
          ],
        },
      ],
    },
    {
      titolo: "COME SI USANO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Must è un modale: uguale per tutti, senza to, senza do. Have to è un verbo normale: vuole la -s e do nelle domande.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She must study.", it: "Deve studiare." },
            { en: "She has to study.", it: "Deve studiare." },
            { en: "Do you have to go?", it: "Devi andare?" },
            { en: "She musts study.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Must non ha il passato. Per \"dovevo\" si usa had to: \"I had to work yesterday\".",
        },
      ],
    },
    {
      titolo: "MUSTN'T E DON'T HAVE TO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Qui sta la trappola. Al negativo, i due verbi hanno significati completamente diversi:",
        },
        {
          tipo: "tabella",
          righe: [
            ["mustn't", "è vietato"],
            ["don't have to", "non è necessario"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You mustn't smoke here.", it: "Qui non si può fumare (è vietato)." },
            { en: "You don't have to come.", it: "Non sei obbligato a venire (puoi, se vuoi)." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Mustn't si pronuncia \"masnt\": la prima t è muta.",
        },
      ],
    },
    {
      titolo: "SHOULD: I CONSIGLI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Should significa \"dovresti\": è un consiglio, non un obbligo. Anche should è un modale.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You should see a doctor.", it: "Dovresti andare dal medico." },
            { en: "You shouldn't eat so much sugar.", it: "Non dovresti mangiare tanto zucchero." },
            { en: "What should I do?", it: "Cosa dovrei fare?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Per un consiglio ancora più gentile: \"I think you should…\" oppure \"Maybe you should…\".",
        },
      ],
    },
    {
      titolo: "DAL PIÙ FORTE AL PIÙ DEBOLE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["must / have to", "obbligo"],
            ["should", "consiglio"],
            ["don't have to", "non è necessario"],
            ["shouldn't", "sconsigliato"],
            ["mustn't", "divieto"],
          ],
        },
      ],
    },
    {
      titolo: "LE REGOLE DELLA SCUOLA",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "You must be on time.", it: "Devi essere puntuale." },
            { en: "You mustn't use your phone in class.", it: "Non puoi usare il telefono in classe." },
            { en: "You don't have to wear a uniform.", it: "Non devi portare la divisa." },
            { en: "You should revise every day.", it: "Dovresti ripassare ogni giorno." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In molte scuole britanniche la divisa è obbligatoria: lì si direbbe \"You have to wear a uniform\".",
        },
      ],
    },
  ],
};
