import { Lezione } from "@/types/lezione";
export const toBe: Lezione = {
  id: "2",
  titolo: "Il Verbo Essere",
  livello: "[A1]",
  citazione: {
    testo: "To be, or not to be, that is the question.",
    fonte: "William Shakespeare, Hamlet",
    traduzione: "Essere, o non essere, questo è il problema.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL VERBO TO BE (ESSERE)",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che conosci i pronomi, puoi usarli con il primo verbo: to be, cioè essere.",
        },
        {
          tipo: "tabella",
          righe: [
            ["I am", "io sono"],
            ["you are", "tu sei"],
            ["he / she / it is", "lui / lei / esso è"],
            ["we are", "noi siamo"],
            ["you are", "voi siete"],
            ["they are", "loro sono"],
          ],
        },
        {
          tipo: "nota",
          testo: "Sono tre forme in tutto: am, is, are. In italiano ne abbiamo sei.",
        },
      ],
    },
    {
      titolo: "LE FORME CONTRATTE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel parlato e nella scrittura informale si usano quasi sempre le forme contratte:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I am", "I'm"],
            ["you are", "you're"],
            ["he is", "he's"],
            ["she is", "she's"],
            ["it is", "it's"],
            ["we are", "we're"],
            ["they are", "they're"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm Francesco.", it: "Sono Francesco." },
            { en: "She's from Italy.", it: "Lei viene dall'Italia." },
            { en: "They're students.", it: "Sono studenti." },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Le forme intere (I am, she is) si usano nella scrittura formale, oppure per dare enfasi:",
        },
        {
          tipo: "esempi",
          esempi: [{ en: "I AM listening!", it: "Ma ti sto ascoltando!" }],
        },
        {
          tipo: "testo",
          testo:
            'Attenzione a \'s: può significare "is" oppure "has". Lo capisci da quello che segue:',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "He's tired.", it: "he is: è stanco" },
            {
              en: "He's got a car.",
              it: 'he has: ha una macchina (lo vedremo nella lezione su "have got")',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Non confonderla con la 's del possesso (Mark's car), che vedremo nella lezione 5.",
        },
      ],
    },
    {
      titolo: "LA FORMA NEGATIVA",
      blocchi: [
        {
          tipo: "testo",
          testo: 'Si aggiunge "not" dopo il verbo:',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I am not tired.", it: "Non sono stanco." },
            { en: "He is not here.", it: "Lui non è qui." },
            { en: "We are not ready.", it: "Non siamo pronti." },
          ],
        },
        {
          tipo: "testo",
          testo: "Contratta, esistono due forme:",
        },
        {
          tipo: "tabella",
          righe: [
            ["he isn't", "he's not"],
            ["you aren't", "you're not"],
            ["they aren't", "they're not"],
          ],
        },
        {
          tipo: "testo",
          testo:
            'Sono entrambe corrette. "He\'s not" è leggermente più enfatico. Per "I" invece esiste una sola contrazione:',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm not", it: "io non sono" },
            { en: "I amn't", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "LE DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Il verbo passa davanti al soggetto:",
        },
        {
          tipo: "tabella",
          righe: [
            ["You are Italian.", "Are you Italian?"],
            ["She is at home.", "Is she at home?"],
            ["They are ready.", "Are they ready?"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Con le parole interrogative, la parola va all'inizio e poi segue lo stesso schema:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Where are you?", it: "Dove sei?" },
            { en: "Who is she?", it: "Chi è lei?" },
            { en: "How are you?", it: "Come stai?" },
            { en: "What is your name?", it: "Come ti chiami?" },
            { en: "How old are you?", it: "Quanti anni hai?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            'In inglese "come ti chiami" si dice "qual è il tuo nome", e "quanti anni hai" si dice "quanto vecchio sei".',
        },
      ],
    },
    {
      titolo: "LE RISPOSTE BREVI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alle domande con to be si risponde ripetendo soggetto e verbo:",
        },
        {
          tipo: "tabella",
          righe: [
            ["Are you tired?", "Yes, I am. / No, I'm not."],
            ["Is she Italian?", "Yes, she is. / No, she isn't."],
            ["Are they here?", "Yes, they are. / No, they aren't."],
          ],
        },
        {
          tipo: "testo",
          testo:
            'Rispondere solo "Yes" o "No" non è sbagliato, ma può suonare brusco. La risposta breve è più naturale e più gentile.',
        },
        {
          tipo: "nota",
          testo: "Nella risposta breve affermativa non si contrae mai.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Yes, I am.", it: "corretto" },
            { en: "Yes, I'm.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "LE DOMANDE NEGATIVE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Si usano per chiedere conferma o esprimere sorpresa:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Aren't you tired?", it: "Non sei stanco?" },
            { en: "Isn't it beautiful?", it: "Non è bellissimo?" },
          ],
        },
      ],
    },
    {
      titolo: "A COSA SERVE TO BE",
      blocchi: [
        {
          tipo: "testo",
          testo: "To be è il verbo più usato dell'inglese. Serve per dire:",
        },
        {
          tipo: "tabella",
          righe: [
            ["il nome", "I'm Francesco."],
            ["la provenienza", "I'm from Italy."],
            ["la nazionalità", "She's Italian."],
            ["il lavoro", "He's a teacher."],
            ["l'età", "We're 25."],
            ["come stai", "I'm fine, thanks."],
            ["dove sei", "They're at home."],
            ["com'è qualcosa", "The film is long."],
            ["il prezzo", "How much is it? It's 10 pounds."],
          ],
        },
      ],
    },
    {
      titolo: "TO BE AL POSTO DI AVERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Per l\'età e per molte sensazioni, l\'inglese usa "to be" dove l\'italiano usa "avere":',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I am 20 years old.", it: "Ho 20 anni." },
            { en: "I am hungry.", it: "Ho fame." },
            { en: "I am thirsty.", it: "Ho sete." },
            { en: "I am cold.", it: "Ho freddo." },
            { en: "I am hot.", it: "Ho caldo." },
            { en: "I am sleepy.", it: "Ho sonno." },
            { en: "I am afraid.", it: "Ho paura." },
            { en: "I am right.", it: "Ho ragione." },
            { en: "I am wrong.", it: "Ho torto." },
            { en: "I am lucky.", it: "Ho fortuna." },
            { en: "I am in a hurry.", it: "Ho fretta." },
          ],
        },
        {
          tipo: "nota",
          testo:
            '"I have 20 years" è l\'errore più riconoscibile di chi parla inglese da italiano. Evitarlo fa già una grande differenza.',
        },
        {
          tipo: "testo",
          testo:
            'Nell\'età "years old" si può omettere, ma "years" da solo no:',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm 20 years old.", it: "corretto" },
            { en: "I'm 20.", it: "corretto" },
            { en: "I'm 20 years.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "ALTRI DUE ERRORI DA EVITARE",
      blocchi: [
        {
          tipo: "testo",
          testo: '"Agree" è un verbo, non un aggettivo: non vuole to be.',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I agree.", it: "Sono d'accordo." },
            { en: "I am agree.", sbagliato: true },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Stanco o noioso? Gli aggettivi in -ed descrivono come ti senti, quelli in -ing descrivono cosa provoca quella sensazione:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm bored.", it: "Mi annoio." },
            { en: "I'm boring.", it: "Sono noioso." },
            { en: "I'm interested.", it: "Sono interessato." },
            { en: "I'm interesting.", it: "Sono interessante." },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Dire "I\'m boring" quando intendi "mi annoio" è un errore comune e un po\' imbarazzante.',
        },
      ],
    },
  ],
};
