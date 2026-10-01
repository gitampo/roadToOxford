import { Lezione } from "@/types/lezione";

export const thereIs: Lezione = {
  id: "7",
  titolo: "There is / there are",
  descrizione: "Descrivere luoghi: casa, città, scuola",
  chiavi: "c'è, ci sono",
  livello: "A1",
  citazione: {
    testo: "There's no place like home.",
    fonte: "Il mago di Oz",
    traduzione: "Non c'è nessun posto come casa.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "C'È E CI SONO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "There is e there are corrispondono a \"c'è\" e \"ci sono\". Servono per dire che qualcosa esiste o si trova in un posto.",
        },
        {
          tipo: "tabella",
          righe: [
            ["there is + singolare", "c'è"],
            ["there are + plurale", "ci sono"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "There is a cat in the garden.", it: "C'è un gatto in giardino." },
            { en: "There are two banks in this street.", it: "Ci sono due banche in questa strada." },
          ],
        },
      ],
    },
    {
      titolo: "LA FORMA CONTRATTA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel parlato there is diventa quasi sempre there's. There are non si contrae nello scritto.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "There's a problem.", it: "C'è un problema." },
            { en: "There's a bus stop near here.", it: "C'è una fermata dell'autobus qui vicino." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Con i non numerabili si usa there is, anche se in italiano diremmo il plurale: \"There's some milk in the fridge\" (c'è del latte).",
        },
      ],
    },
    {
      titolo: "NEGATIVA E DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nella negativa si aggiunge not, di solito con any o no. Nelle domande is/are passa davanti a there.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "There isn't a cinema in my town.", it: "Non c'è un cinema nella mia città." },
            { en: "There aren't any shops here.", it: "Qui non ci sono negozi." },
            { en: "There are no shops here.", it: "Qui non ci sono negozi." },
            { en: "Is there a lift?", it: "C'è un ascensore?" },
            { en: "Are there any questions?", it: "Ci sono domande?" },
          ],
        },
        {
          tipo: "testo",
          testo: "Risposte brevi:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Yes, there is. / No, there isn't.", it: "Sì. / No." },
            { en: "Yes, there are. / No, there aren't.", it: "Sì. / No." },
          ],
        },
      ],
    },
    {
      titolo: "HOW MANY",
      blocchi: [
        {
          tipo: "testo",
          testo: "Per chiedere quante cose ci sono si usa How many… are there?",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "How many students are there in your class?", it: "Quanti studenti ci sono nella tua classe?" },
            { en: "There are twenty-five.", it: "Ce ne sono venticinque." },
          ],
        },
      ],
    },
    {
      titolo: "THERE IS O IT IS?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "There is presenta qualcosa per la prima volta. It is descrive qualcosa di cui si sta già parlando.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "There's a restaurant near here. It's very good.", it: "C'è un ristorante qui vicino. È molto buono." },
          ],
        },
        {
          tipo: "testo",
          testo: "Un errore frequente è tradurre \"c'è\" con it is o con have:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It is a park near my house.", sbagliato: true },
            { en: "There is a park near my house.", it: "C'è un parco vicino a casa mia." },
            { en: "In my town have a castle.", sbagliato: true },
            { en: "There is a castle in my town.", it: "Nella mia città c'è un castello." },
          ],
        },
      ],
    },
    {
      titolo: "LE PREPOSIZIONI DI LUOGO",
      blocchi: [
        {
          tipo: "testo",
          testo: "There is si usa quasi sempre con una preposizione di luogo:",
        },
        {
          tipo: "tabella",
          righe: [
            ["in", "dentro, in"],
            ["on", "sopra (a contatto)"],
            ["under", "sotto"],
            ["next to", "accanto a"],
            ["between", "tra (due cose)"],
            ["in front of", "davanti a"],
            ["behind", "dietro"],
            ["opposite", "di fronte a"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "There's a lamp on the desk.", it: "C'è una lampada sulla scrivania." },
            { en: "There's a bank opposite the station.", it: "C'è una banca di fronte alla stazione." },
          ],
        },
      ],
    },
    {
      titolo: "DESCRIVERE UN LUOGO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con there is e there are puoi descrivere casa tua, la tua città o la tua scuola:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "There are three bedrooms in my flat.", it: "Nel mio appartamento ci sono tre camere." },
            { en: "There's a big park in the centre.", it: "In centro c'è un grande parco." },
            { en: "There isn't a gym at my school.", it: "Nella mia scuola non c'è una palestra." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In una lista, il verbo si accorda con il primo elemento: \"There's a sofa and two chairs\".",
        },
      ],
    },
  ],
};
