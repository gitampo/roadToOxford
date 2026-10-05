import { Lezione } from "@/types/lezione";

export const passive: Lezione = {
  id: "43",
  titolo: "La forma passiva",
  descrizione: "Descrivere notizie e processi",
  chiavi: "forma passiva",
  livello: "B1",
  citazione: {
    testo: "Rome wasn't built in a day.",
    fonte: "Proverbio inglese",
    traduzione: "Roma non è stata costruita in un giorno.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "ATTIVO E PASSIVO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nella frase passiva conta chi o cosa subisce l'azione, non chi la fa. Si forma con to be + participio passato:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Shakespeare wrote Hamlet.", it: "Shakespeare ha scritto Amleto (attiva)." },
            { en: "Hamlet was written by Shakespeare.", it: "Amleto è stato scritto da Shakespeare (passiva)." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Chi fa l'azione si introduce con by. Spesso però si omette, perché non è importante o non si sa.",
        },
      ],
    },
    {
      titolo: "IN TUTTI I TEMPI",
      blocchi: [
        {
          tipo: "testo",
          testo: "Cambia solo to be; il participio resta sempre uguale:",
        },
        {
          tipo: "tabella",
          righe: [
            ["present simple", "English is spoken here."],
            ["present continuous", "The road is being repaired."],
            ["past simple", "The bridge was built in 1890."],
            ["present perfect", "My bike has been stolen."],
            ["will", "The results will be published tomorrow."],
            ["modali", "Phones must be switched off."],
          ],
        },
      ],
    },
    {
      titolo: "QUANDO SI USA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si usa quando chi fa l'azione è sconosciuto, ovvio o poco importante. È frequentissimo nelle notizie, nei cartelli e nei testi scientifici:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "My car was stolen last night.", it: "Ieri notte mi hanno rubato la macchina." },
            { en: "The museum was opened in 1683.", it: "Il museo è stato aperto nel 1683." },
            { en: "Breakfast is served from 7 to 10.", it: "La colazione è servita dalle 7 alle 10." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "L'italiano usa spesso il \"si\" o la terza persona plurale (mi hanno rubato, si parla inglese). L'inglese usa il passivo.",
        },
      ],
    },
    {
      titolo: "IL SOGGETTO PERSONA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con verbi come give, send, tell, offer, in inglese anche la persona può diventare soggetto. In italiano non si può:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I was given a present.", it: "Mi è stato fatto un regalo." },
            { en: "She was offered a job.", it: "Le è stato offerto un lavoro." },
            { en: "We were told to wait.", it: "Ci hanno detto di aspettare." },
          ],
        },
      ],
    },
    {
      titolo: "BORN E ALTRI PASSIVI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alcune espressioni comuni sono passive in inglese e attive in italiano:",
        },
        {
          tipo: "tabella",
          righe: [
            ["be born", "nascere"],
            ["be located", "trovarsi"],
            ["be made of", "essere fatto di"],
            ["be supposed to", "dovere (secondo le regole)"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "This table is made of oak.", it: "Questo tavolo è di quercia." },
            { en: "You're supposed to wear a helmet.", it: "Dovresti portare il casco." },
          ],
        },
      ],
    },
    {
      titolo: "IT IS SAID THAT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per riferire opinioni generali, nei testi formali e giornalistici:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It is said that the castle is haunted.", it: "Si dice che il castello sia infestato." },
            { en: "He is believed to be in London.", it: "Si crede che sia a Londra." },
          ],
        },
      ],
    },
  ],
};
