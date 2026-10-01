import { Lezione } from "@/types/lezione";

export const pastModals: Lezione = {
  id: "50",
  titolo: "I modali al passato",
  descrizione: "Criticare, rimpiangere, fare ipotesi sul passato",
  chiavi: "should have, might have",
  livello: "[B2-C1]",
  citazione: {
    testo: "I should have known better.",
    fonte: "The Beatles",
    traduzione: "Avrei dovuto capirlo.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "MODALE + HAVE + PARTICIPIO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I modali non hanno il passato. Per parlare del passato si aggiunge have + participio passato. La forma è sempre la stessa, cambia solo il modale:",
        },
        {
          tipo: "tabella",
          righe: [
            ["should have done", "avrei dovuto fare"],
            ["could have done", "avrei potuto fare"],
            ["would have done", "avrei fatto"],
            ["might have done", "forse ho fatto"],
            ["must have done", "devo aver fatto"],
            ["can't have done", "non posso aver fatto"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nel parlato have si riduce a un suono debole: \"should've\", \"could've\". Per questo molti madrelingua scrivono per errore \"should of\". È sbagliato.",
        },
      ],
    },
    {
      titolo: "SHOULD HAVE: RIMPIANTI E CRITICHE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Should have indica qualcosa che era giusto fare, ma non è stato fatto. Shouldn't have il contrario:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I should have studied more.", it: "Avrei dovuto studiare di più." },
            { en: "You shouldn't have told her.", it: "Non avresti dovuto dirglielo." },
            { en: "We should have left earlier.", it: "Saremmo dovuti partire prima." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "\"Oh, you shouldn't have!\" è anche un modo cortese per ringraziare di un regalo: \"non dovevi!\".",
        },
      ],
    },
    {
      titolo: "COULD HAVE: OCCASIONI PERSE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Could have indica una possibilità che c'era, ma non è stata sfruttata:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You could have called me!", it: "Avresti potuto chiamarmi!" },
            { en: "I could have won, but I fell.", it: "Avrei potuto vincere, ma sono caduto." },
            { en: "It could have been worse.", it: "Poteva andare peggio." },
          ],
        },
      ],
    },
    {
      titolo: "WOULD HAVE: IL CONDIZIONALE PASSATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Would have è la conseguenza nel third conditional (lezione 40{1}), ma si usa anche da solo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I would have helped you.", it: "Ti avrei aiutato." },
            { en: "She wouldn't have liked it.", it: "Non le sarebbe piaciuto." },
          ],
        },
      ],
    },
    {
      titolo: "DEDUZIONI SUL PASSATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Must have, might have e can't have servono per ipotizzare cosa è successo (lezione 44{5}):",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "He must have forgotten.", it: "Se ne sarà dimenticato." },
            { en: "They might have got lost.", it: "Forse si sono persi." },
            { en: "She can't have finished already.", it: "Non può aver già finito." },
          ],
        },
      ],
    },
    {
      titolo: "NEEDN'T HAVE E DIDN'T NEED TO",
      blocchi: [
        {
          tipo: "testo",
          testo: "Una differenza sottile, tipica del livello avanzato:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I needn't have bought bread.", it: "Non c'era bisogno di comprare il pane (ma l'ho comprato)." },
            { en: "I didn't need to buy bread.", it: "Non avevo bisogno di comprare il pane (e di solito non l'ho comprato)." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Needn't have è molto britannico. In americano si dice \"I didn't have to…\" in entrambi i casi.",
        },
      ],
    },
  ],
};
