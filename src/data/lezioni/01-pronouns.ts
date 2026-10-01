import { Lezione } from "@/types/lezione";
export const pronouns: Lezione = {
  id: "1",
  titolo: "Pronomi Personali",
  descrizione: "Dire chi fa l'azione: io, tu, lui, lei…",
  chiavi: "pronomi personali, soggetto",
  livello: "A1",
  citazione: {
    testo: "I am me. I am not you.",
    fonte: "Rei Ayanami, Evangelion",
    traduzione: "Io sono io. Io non sono te.",
    immagine: require("@/assets/images/textures/rei.jpeg"),
  },
  riquadri: [
    {
      titolo: "I PRONOMI PERSONALI SOGGETTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'In inglese il soggetto va sempre espresso. In italiano puoi dire "sono stanco", perché la desinenza del verbo ti dice già chi è il soggetto. In inglese no: il verbo cambia pochissimo, quindi il pronome è indispensabile.',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Am tired.", sbagliato: true },
            { en: "I am tired.", it: "Sono stanco." },
          ],
        },
        {
          tipo: "tabella",
          righe: [
            ["I", "io"],
            ["you", "tu"],
            ["he", "lui"],
            ["she", "lei"],
            ["it", "esso/essa"],
            ["we", "noi"],
            ["you", "voi"],
            ["they", "loro"],
          ],
        },
        {
          tipo: "nota",
          testo:
            '"I" si scrive sempre maiuscolo, anche in mezzo alla frase: "Yesterday I was tired".',
        },
        {
          tipo: "testo",
          testo:
            '"You" vale sia per "tu" sia per "voi", e non esiste una forma di cortesia come il nostro "Lei". Con un amico o con la regina si dice sempre "you": la cortesia si esprime con il tono e con le parole, non con il pronome.',
        },
      ],
    },
    {
      titolo: "HE, SHE O IT?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "He e she si usano per le persone. It si usa per le cose, le idee e gli animali in generale:",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Where is my phone? It's on the table.",
              it: "Dov'è il mio telefono? È sul tavolo.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Con gli animali domestici si usa di solito he o she, perché li consideriamo quasi persone:",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "This is my cat. She's three years old.",
              it: "Questa è la mia gatta. Ha tre anni.",
            },
          ],
        },
      ],
    },
    {
      titolo: "THEY AL SINGOLARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Quando non conosci il genere di una persona, o non è importante, si usa "they" anche per una persona sola:',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Someone called. They left a message.",
              it: "Ha chiamato qualcuno. Ha lasciato un messaggio.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Il verbo resta al plurale ("they are"), anche se la persona è una. È un uso normale e diffuso, non un errore.',
        },
      ],
    },
    {
      titolo: 'IL SOGGETTO "IT" CHE NON SIGNIFICA NIENTE',
      blocchi: [
        {
          tipo: "testo",
          testo:
            'In italiano molte frasi non hanno soggetto: piove, è tardi, sono le cinque. In inglese un soggetto ci vuole sempre, quindi si usa "it" come soggetto vuoto:',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It's raining.", it: "Piove." },
            { en: "It's late.", it: "È tardi." },
            { en: "It's five o'clock.", it: "Sono le cinque." },
            { en: "It's cold today.", it: "Oggi fa freddo." },
            { en: "It's 10 km from here.", it: "È a 10 km da qui." },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Meteo, ora, date, distanze, temperature: sempre con "it".',
        },
      ],
    },
    {
      titolo: 'YOU PER DIRE "SI"',
      blocchi: [
        {
          tipo: "testo",
          testo: '"You" si usa spesso in modo generico, come il nostro "si":',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You never know.", it: "Non si sa mai." },
            { en: "You can't smoke here.", it: "Qui non si può fumare." },
          ],
        },
      ],
    },
  ],
};
