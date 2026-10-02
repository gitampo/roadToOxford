import { Lezione } from "@/types/lezione";
export const toBe: Lezione = {
  id: "2",
  titolo: "Il Verbo Essere",
  descrizione: "Presentarsi: nome, età, provenienza",
  chiavi: "verbo essere",
  livello: "A1",
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
            "Non confonderla con la 's del possesso (Mark's car), che vedremo nella lezione 5{6}.",
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
          testo: "Am, is, are",
        },
        {
          tipo: "completa",
          consegna: "Completa con am, is o are.",
          prima: "She",
          dopo: "from Italy.",
          risposte: ["is"],
          spiegazione: "He, she e it vogliono is.",
          rivedi: "IL VERBO TO BE (ESSERE)",
        },
        {
          tipo: "completa",
          consegna: "Completa con am, is o are.",
          prima: "We",
          dopo: "students.",
          risposte: ["are"],
          spiegazione: "We, you e they vogliono are.",
          rivedi: "IL VERBO TO BE (ESSERE)",
        },
        {
          tipo: "completa",
          consegna: "Completa con am, is o are.",
          prima: "I",
          dopo: "at home.",
          risposte: ["am"],
          spiegazione: "Am si usa solo con I.",
          rivedi: "IL VERBO TO BE (ESSERE)",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni forma intera alla sua forma contratta.",
          coppie: [
            ["I am", "I'm"],
            ["you are", "you're"],
            ["she is", "she's"],
            ["it is", "it's"],
            ["they are", "they're"],
          ],
          spiegazione:
            "L'apostrofo prende il posto della lettera che cade: I am → I'm, they are → they're.",
          rivedi: "LE FORME CONTRATTE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "In questa frase, che cosa significa 's?",
          citazione: "He's tired.",
          opzioni: ["is", "has", "il possesso"],
          giusta: 0,
          spiegazione:
            "Davanti a un aggettivo (tired) 's è is. Davanti a got è has (He's got a car); dopo un nome indica possesso (Mark's car).",
          rivedi: "LE FORME CONTRATTE",
        },
        {
          tipo: "sottotitolo",
          testo: "Negative e domande",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è la forma negativa contratta di \"I am not\"?",
          opzioni: ["I amn't", "I'm not", "I aren't"],
          giusta: 1,
          spiegazione:
            "Con I esiste una sola contrazione: I'm not. \"I amn't\" non esiste.",
          rivedi: "LA FORMA NEGATIVA",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le due forme corrette di \"they are not\".",
          parole: ["they aren't", "they're not", "they not are", "they isn't"],
          giuste: [0, 1],
          spiegazione:
            "Esistono due contrazioni, entrambe corrette: they aren't e they're not. La seconda è un po' più enfatica.",
          rivedi: "LA FORMA NEGATIVA",
        },
        {
          tipo: "riordina",
          consegna: "Trasforma in domanda: \"She is at home.\"",
          parole: ["at", "she", "home", "is"],
          soluzione: ["is", "she", "at", "home"],
          spiegazione:
            "Nella domanda il verbo passa davanti al soggetto: Is she…?",
          rivedi: "LE DOMANDE",
        },
        {
          tipo: "riordina",
          consegna: "Chiedi \"Dove sei?\".",
          parole: ["you", "are", "where"],
          soluzione: ["where", "are", "you"],
          spiegazione:
            "La parola interrogativa va all'inizio, poi verbo e soggetto.",
          rivedi: "LE DOMANDE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si chiede \"Come ti chiami?\"",
          opzioni: ["How do you call?", "What is your name?", "How is your name?"],
          giusta: 1,
          spiegazione:
            "In inglese si chiede \"qual è il tuo nome\": What is your name?",
          rivedi: "LE DOMANDE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è la risposta breve corretta?",
          citazione: "Are you tired?",
          opzioni: ["Yes, I'm.", "Yes, I am.", "Yes, I tired."],
          giusta: 1,
          spiegazione:
            "Nella risposta breve affermativa non si contrae mai: Yes, I am. Nella negativa invece sì: No, I'm not.",
          rivedi: "LE RISPOSTE BREVI",
        },
        {
          tipo: "completa",
          consegna: "Completa la risposta breve negativa.",
          prima: "Is she Italian? No, she",
          dopo: ".",
          risposte: ["isn't", "is not"],
          spiegazione: "Si ripetono soggetto e verbo: No, she isn't.",
          rivedi: "LE RISPOSTE BREVI",
        },
        {
          tipo: "sottotitolo",
          testo: "Essere o avere?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Ho 20 anni\"?",
          opzioni: ["I have 20 years.", "I'm 20 years.", "I'm 20 years old."],
          giusta: 2,
          spiegazione:
            "Per l'età si usa to be. Si può dire I'm 20 years old o solo I'm 20, ma mai I'm 20 years.",
          rivedi: "TO BE AL POSTO DI AVERE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni frase italiana alla traduzione.",
          coppie: [
            ["Ho fame.", "I'm hungry."],
            ["Ho sete.", "I'm thirsty."],
            ["Ho freddo.", "I'm cold."],
            ["Ho ragione.", "I'm right."],
            ["Ho fretta.", "I'm in a hurry."],
          ],
          spiegazione:
            "Tutte queste sensazioni in inglese si \"sono\", non si \"hanno\".",
          rivedi: "TO BE AL POSTO DI AVERE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Sono d'accordo\"?",
          opzioni: ["I am agree.", "I agree.", "I'm agreeing with."],
          giusta: 1,
          spiegazione:
            "Agree è un verbo, non un aggettivo: non vuole to be.",
          rivedi: "ALTRI DUE ERRORI DA EVITARE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Il film è lungo e lento. Come dici \"Mi annoio\"?",
          opzioni: ["I'm boring.", "I'm bored.", "I bore."],
          giusta: 1,
          spiegazione:
            "Gli aggettivi in -ed dicono come ti senti (bored), quelli in -ing cosa provoca la sensazione (boring = noioso).",
          rivedi: "ALTRI DUE ERRORI DA EVITARE",
        },
        {
          tipo: "sottotitolo",
          testo: "Scrivi",
        },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi il tuo testo e confrontalo con il modello.",
        },
        {
          tipo: "scrivi",
          consegna: "Presentati in inglese in 4–5 frasi.",
          punti: ["il nome", "l'età", "da dove vieni", "il lavoro o lo studio", "come stai oggi"],
          modello:
            "Hi! I'm Giulia. I'm 22 years old and I'm from Bologna, in Italy. I'm a student: I'm at university. Today I'm a bit tired, but I'm happy.",
          spiegazione:
            "Controlla l'età (I'm 22, non I have 22) e le forme contratte: in una presentazione informale suonano più naturali.",
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
