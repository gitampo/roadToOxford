import { Lezione } from "@/types/lezione";

export const canCould: Lezione = {
  id: "25",
  titolo: "Can e could",
  descrizione: "Parlare di capacità, chiedere permessi",
  chiavi: "potere, saper fare",
  livello: "A1",
  citazione: {
    testo: "Yes, we can.",
    fonte: "Barack Obama, 2008",
    traduzione: "Sì, possiamo.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "CAN: SAPER FARE E POTERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Can indica una capacità (saper fare) o una possibilità (potere). È uguale per tutte le persone e vuole il verbo base, senza to:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I can swim.", it: "So nuotare." },
            { en: "She can speak three languages.", it: "Sa parlare tre lingue." },
            { en: "You can sit here.", it: "Puoi sederti qui." },
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "He cans swim.", sbagliato: true },
            { en: "I can to swim.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "NEGATIVA E DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Negativa: can't (cannot, scritto attaccato). Domande: can davanti al soggetto. Niente do.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I can't drive.", it: "Non so guidare." },
            { en: "Can you help me?", it: "Mi puoi aiutare?" },
            { en: "Yes, I can. / No, I can't.", it: "Sì. / No." },
            { en: "Do you can help me?", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In britannico can't si pronuncia con una a lunga, \"caant\". Così si distingue da can.",
        },
      ],
    },
    {
      titolo: "CHIEDERE IL PERMESSO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Can si usa per chiedere e dare il permesso. Could è più gentile:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Can I open the window?", it: "Posso aprire la finestra?" },
            { en: "Could I use your phone?", it: "Potrei usare il tuo telefono?" },
            { en: "Of course you can.", it: "Certo che puoi." },
          ],
        },
      ],
    },
    {
      titolo: "CHIEDERE UN FAVORE",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "Can you pass me the salt?", it: "Mi passi il sale?" },
            { en: "Could you speak more slowly, please?", it: "Potrebbe parlare più lentamente, per favore?" },
            { en: "Could you repeat that?", it: "Potrebbe ripetere?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Con gli sconosciuti usa could: suona più educato. \"Could you speak more slowly?\" ti sarà utilissimo in Inghilterra.",
        },
      ],
    },
    {
      titolo: "COULD: IL PASSATO DI CAN",
      blocchi: [
        {
          tipo: "testo",
          testo: "Could è anche il passato di can: \"sapevo\", \"potevo\".",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I could read when I was four.", it: "Sapevo leggere a quattro anni." },
            { en: "We couldn't sleep.", it: "Non riuscivamo a dormire." },
          ],
        },
      ],
    },
    {
      titolo: "CAN CON I SENSI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con see, hear, smell l'inglese usa can dove l'italiano usa il presente:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I can see the sea.", it: "Vedo il mare." },
            { en: "Can you hear me?", it: "Mi senti?" },
            { en: "I can smell smoke.", it: "Sento odore di fumo." },
          ],
        },
      ],
    },
  ],
};
