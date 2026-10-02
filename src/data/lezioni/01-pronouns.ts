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
    {
      titolo: "ESERCIZI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora mettiti alla prova. Ogni esercizio, se sbagli, ti indica il riquadro da rivedere: dopo averlo riletto, torni qui con un tocco. In fondo trovi il tuo risultato.",
        },
        {
          tipo: "sottotitolo",
          testo: "Il pronome giusto",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni pronome inglese al suo significato.",
          coppie: [
            ["I", "io"],
            ["he", "lui"],
            ["she", "lei"],
            ["we", "noi"],
            ["they", "loro"],
          ],
          spiegazione:
            "Manca you perché vale sia per tu sia per voi: non ha un solo abbinamento possibile.",
          rivedi: "I PRONOMI PERSONALI SOGGETTO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["Am tired.", "I am tired.", "Tired I am."],
          giusta: 1,
          spiegazione:
            "In inglese il soggetto va sempre espresso: il verbo da solo non dice chi fa l'azione.",
          rivedi: "I PRONOMI PERSONALI SOGGETTO",
        },
        {
          tipo: "completa",
          consegna: "Completa con il pronome giusto.",
          prima: "Yesterday",
          dopo: "was at home.",
          risposte: ["I"],
          spiegazione:
            "\"I\" si scrive sempre maiuscolo, anche in mezzo alla frase.",
          rivedi: "I PRONOMI PERSONALI SOGGETTO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Parli con un professore che non conosci. Come gli dai del \"Lei\"?",
          opzioni: [
            "Uso she o he",
            "Uso you, come con tutti",
            "Uso they",
          ],
          giusta: 1,
          spiegazione:
            "L'inglese non ha una forma di cortesia nel pronome: you vale per tutti. La gentilezza passa dal tono e da parole come please.",
          rivedi: "I PRONOMI PERSONALI SOGGETTO",
        },
        {
          tipo: "sottotitolo",
          testo: "He, she, it o they?",
        },
        {
          tipo: "completa",
          consegna: "Si parla del tuo telefono. Completa.",
          prima: "Where is my phone?",
          dopo: "'s on the table.",
          risposte: ["It", "it"],
          spiegazione: "Per le cose si usa it.",
          rivedi: "HE, SHE O IT?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Parli della tua gatta, Luna. Quale pronome è più naturale?",
          citazione: "This is my cat. ___ is three years old.",
          opzioni: ["It", "She", "They"],
          giusta: 1,
          spiegazione:
            "Per gli animali domestici si usa di solito he o she: li consideriamo quasi persone. It va bene per gli animali in generale.",
          rivedi: "HE, SHE O IT?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qualcuno ti ha chiamato, ma non sai chi. Come continui?",
          citazione: "Someone called. ___ left a message.",
          opzioni: ["He", "It", "They"],
          giusta: 2,
          spiegazione:
            "Quando il genere non è noto si usa they anche per una persona sola. Il verbo resta al plurale: they are, they were.",
          rivedi: "THEY AL SINGOLARE",
        },
        {
          tipo: "sottotitolo",
          testo: "Il soggetto \"it\"",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le frasi che in inglese cominciano con \"It's\".",
          parole: ["Piove.", "Sono stanco.", "È tardi.", "Sono le cinque.", "Siamo a casa.", "Fa freddo."],
          giuste: [0, 2, 3, 5],
          spiegazione:
            "Meteo, ora e temperatura vogliono il soggetto vuoto it: It's raining, It's late, It's five o'clock, It's cold. Sono stanco e Siamo a casa hanno un soggetto vero: I'm tired, We're at home.",
          rivedi: 'IL SOGGETTO "IT" CHE NON SIGNIFICA NIENTE',
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Oggi fa freddo\" rimettendo in ordine le parole.",
          parole: ["today", "cold", "it's"],
          soluzione: ["it's", "cold", "today"],
          spiegazione:
            "Anche se in italiano non c'è un soggetto, in inglese ci vuole: it.",
          rivedi: 'IL SOGGETTO "IT" CHE NON SIGNIFICA NIENTE',
        },
        {
          tipo: "completa",
          consegna: "Completa: \"È a 10 km da qui\".",
          prima: "",
          dopo: "'s 10 km from here.",
          risposte: ["It", "it"],
          spiegazione: "Anche le distanze vogliono it come soggetto.",
          rivedi: 'IL SOGGETTO "IT" CHE NON SIGNIFICA NIENTE',
        },
        {
          tipo: "sottotitolo",
          testo: "You per dire \"si\"",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Non si sa mai\"?",
          opzioni: ["It never knows.", "You never know.", "They never knows."],
          giusta: 1,
          spiegazione:
            "Il nostro \"si\" impersonale diventa spesso you: una persona qualsiasi, anche chi parla.",
          rivedi: 'YOU PER DIRE "SI"',
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Qui non si può fumare\".",
          parole: ["smoke", "here", "can't", "you"],
          soluzione: ["you", "can't", "smoke", "here"],
          spiegazione: "You generico + can't: è il modo più naturale di dare una regola.",
          rivedi: 'YOU PER DIRE "SI"',
        },
        {
          tipo: "sottotitolo",
          testo: "Traduci",
        },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi la tua versione e confrontala con quella proposta.",
        },
        {
          tipo: "traduci",
          consegna: "Traduci in inglese.",
          testo: "Piove. Sono a casa con la mia gatta: è sul divano.",
          soluzione: "It's raining. I'm at home with my cat: she's on the sofa.",
          spiegazione:
            "Controlla tre cose: It's per il meteo, il soggetto I espresso, she (non it) per la gatta.",
        },
      ],
    },
    {
      titolo: "IL TUO RISULTATO",
      blocchi: [
        {
          tipo: "punteggio",
        },
        {
          tipo: "nota",
          testo:
            "Tocca un esercizio sbagliato qui sopra per andare al riquadro da rivedere.",
        },
      ],
    },
  ],
};
