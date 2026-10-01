import { Lezione } from "@/types/lezione";

export const articles: Lezione = {
  id: "3",
  titolo: "Articoli: a / an / the",
  descrizione: "Nominare persone e cose",
  chiavi: "articoli, determinativo, indeterminativo",
  livello: "[A1]",
  citazione: {
    testo: "An apple a day keeps the doctor away.",
    fonte: "Proverbio inglese",
    traduzione: "Una mela al giorno toglie il medico di torno.",
    immagine: require("@/assets/images/textures/doc.jpg"),
  },
  riquadri: [
    {
      titolo: "A E AN",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'inglese ha solo tre articoli: a, an e the. Non cambiano né con il genere né con il numero, ma si usano con regole diverse dalle nostre.",
        },
        {
          tipo: "testo",
          testo:
            'A e an corrispondono a "un, uno, una, un\'". Si usano con un sostantivo singolare numerabile, quando parli di una cosa qualsiasi o la nomini per la prima volta:',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have a dog.", it: "Ho un cane." },
            { en: "She eats an apple.", it: "Mangia una mela." },
            { en: "There's a problem.", it: "C'è un problema." },
          ],
        },
      ],
    },
    {
      titolo: "A O AN? CONTA IL SUONO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["a + suono di consonante", "a car, a house, a book"],
            ["an + suono di vocale", "an egg, an idea, an orange"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "La regola riguarda il suono con cui si pronuncia la parola, non la lettera con cui si scrive. Da qui i casi che sembrano strani:",
        },
        {
          tipo: "tabella",
          righe: [
            ["a university", 'si pronuncia "iuniversiti"'],
            ["a European", 'si pronuncia "iuropian"'],
            ["a one-way ticket", 'one si pronuncia "uan"'],
            ["an hour", 'la h è muta: "auer"'],
            ["an honest man", 'si pronuncia "onest"'],
            ["an MBA", 'la M si pronuncia "em"'],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il trucco: leggi la parola ad alta voce. Se il primo suono è una vocale, an.",
        },
      ],
    },
    {
      titolo: "QUANDO SERVE A/AN",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'A/an significa "uno", quindi non si usa con i plurali né con i non numerabili:',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "a dogs", sbagliato: true },
            { en: "dogs / some dogs", it: "cani / dei cani" },
            { en: "an advice", sbagliato: true },
            { en: "some advice / a piece of advice", it: "dei consigli / un consiglio" },
          ],
        },
        {
          tipo: "testo",
          testo:
            'In italiano diciamo "sono studente". In inglese, con i mestieri, l\'articolo è obbligatorio:',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm student.", sbagliato: true },
            { en: "I'm a student.", it: "Sono studente." },
            { en: "She's an engineer.", it: "Fa l'ingegnere." },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Si usa a/an anche per descrivere qualcuno e con molti disturbi di salute:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She has a big nose.", it: "Ha il naso grande." },
            { en: "I have a cold.", it: "Ho il raffreddore." },
            { en: "I have a headache.", it: "Ho mal di testa." },
          ],
        },
      ],
    },
    {
      titolo: "ESCLAMAZIONI E FREQUENZE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Nelle esclamazioni con un singolare numerabile, l\'articolo ci vuole, anche se in italiano diciamo "che bella giornata!" senza:',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "What beautiful day!", sbagliato: true },
            { en: "What a beautiful day!", it: "Che bella giornata!" },
            { en: "What an idea!", it: "Che idea!" },
            { en: "What good news!", it: "Che belle notizie! (non numerabile: niente articolo)" },
          ],
        },
        {
          tipo: "testo",
          testo: 'Nelle frequenze e nei prezzi, a/an significa "ogni" o "al":',
        },
        {
          tipo: "tabella",
          righe: [
            ["twice a day", "due volte al giorno"],
            ["three times a week", "tre volte alla settimana"],
            ["100 km an hour", "100 km all'ora"],
            ["5 pounds a kilo", "5 sterline al chilo"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'A e one significano entrambi "uno", ma one si usa quando conta il numero: "I have one car, not two".',
        },
      ],
    },
    {
      titolo: "THE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'The corrisponde a "il, lo, la, i, gli, le", ed è uno solo per tutti. Si usa quando è chiaro di quale cosa parli.',
        },
        {
          tipo: "testo",
          testo: "Perché l'hai già nominata:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have a dog. The dog is black.", it: "Ho un cane. Il cane è nero." },
          ],
        },
        {
          tipo: "testo",
          testo: "Perché il contesto la rende evidente, o perché ne esiste una sola:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Close the door, please.", it: "Chiudi la porta, per favore." },
            { en: "Where's the bathroom?", it: "Dov'è il bagno?" },
            { en: "The sun is hot.", it: "Il sole è caldo." },
          ],
        },
        {
          tipo: "testo",
          testo: "Perché la frase stessa la definisce:",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "The man in the red shirt is my brother.",
              it: "L'uomo con la maglia rossa è mio fratello.",
            },
          ],
        },
      ],
    },
    {
      titolo: "ALTRI USI DI THE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Superlativi e numeri ordinali indicano una cosa unica, quindi vogliono sempre the:",
        },
        {
          tipo: "tabella",
          righe: [
            ["the best film", "il film migliore"],
            ["the first time", "la prima volta"],
            ["the last day", "l'ultimo giorno"],
          ],
        },
        {
          tipo: "testo",
          testo: "Gli strumenti vogliono the, gli sport no:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I play the piano.", it: "Suono il pianoforte." },
            { en: "I play football.", it: "Gioco a calcio." },
            { en: "I play the football.", sbagliato: true },
          ],
        },
        {
          tipo: "testo",
          testo: "The + aggettivo indica un gruppo di persone, e il verbo va al plurale:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The rich are getting richer.", it: "I ricchi diventano sempre più ricchi." },
            { en: "the young, the elderly", it: "i giovani, gli anziani" },
          ],
        },
        {
          tipo: "nota",
          testo:
            'The si pronuncia "de" davanti a un suono di consonante (the car) e "di" davanti a un suono di vocale (the apple, the hour).',
        },
      ],
    },
    {
      titolo: "NESSUN ARTICOLO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Quando parli di qualcosa in generale, con plurali o non numerabili, l'inglese non mette l'articolo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I like dogs.", it: "Mi piacciono i cani." },
            { en: "Life is beautiful.", it: "La vita è bella." },
            { en: "Coffee is expensive.", it: "Il caffè è caro." },
          ],
        },
        {
          tipo: "testo",
          testo: "Niente articolo anche con:",
        },
        {
          tipo: "tabella",
          righe: [
            ["i pasti", "have breakfast"],
            ["le lingue", "I speak English"],
            ["le materie", "I study history"],
            ["giorni, mesi, feste", "on Monday, in May"],
            ["mezzi con by", "by car, by train"],
            ["titolo + nome", "Mr Smith, Queen Elizabeth"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Senza il nome, il titolo vuole the: the Queen, the President.",
        },
      ],
    },
    {
      titolo: "LUOGHI: CON THE O SENZA?",
      blocchi: [
        {
          tipo: "testo",
          testo: "È la parte più irregolare. Senza articolo:",
        },
        {
          tipo: "tabella",
          righe: [
            ["paesi e città", "Italy, London"],
            ["continenti", "Europe, Asia"],
            ["singole montagne e laghi", "Mount Everest, Lake Como"],
            ["strade, piazze, parchi", "Oxford Street, Hyde Park"],
            ["stazioni e aeroporti", "Victoria Station, Heathrow"],
          ],
        },
        {
          tipo: "testo",
          testo: "Con the:",
        },
        {
          tipo: "tabella",
          righe: [
            ["paesi plurali o con Kingdom, States…", "the UK, the USA"],
            ["fiumi, mari, oceani", "the Thames, the Atlantic"],
            ["catene montuose, arcipelaghi", "the Alps, the Canaries"],
            ["musei, teatri, alberghi", "the British Museum"],
            ["giornali", "The Times, The Guardian"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Si dice Oxford University, ma the University of Oxford. Quando compare "of", di solito serve the.',
        },
      ],
    },
    {
      titolo: "SCUOLA, LETTO, OSPEDALE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con alcuni luoghi l'articolo cambia il significato. Senza the parli della funzione, con the dell'edificio:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I go to school.", it: "Vado a scuola (come studente)." },
            { en: "I go to the school.", it: "Vado alla scuola (all'edificio)." },
            { en: "She's in hospital.", it: "È ricoverata." },
            { en: "She's at the hospital.", it: "È all'ospedale (magari in visita)." },
          ],
        },
        {
          tipo: "testo",
          testo: "Lo stesso vale per bed, church, prison, university, work.",
        },
        {
          tipo: "nota",
          testo:
            'Home non vuole mai l\'articolo, e dopo i verbi di movimento nemmeno "to": I\'m going home. I\'m at home.',
        },
      ],
    },
    {
      titolo: "GLI ERRORI TIPICI",
      blocchi: [
        {
          tipo: "testo",
          testo: "L'italiano mette l'articolo quando generalizza, l'inglese no:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The life is beautiful.", sbagliato: true },
            { en: "Life is beautiful.", it: "La vita è bella." },
            { en: "Dogs are loyal.", it: "I cani (in generale) sono fedeli." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Prima di scrivere the, chiediti: parlo di una cosa precisa, o di tutte le cose di quel tipo? Nel secondo caso, niente articolo.",
        },
        {
          tipo: "testo",
          testo: "Il possessivo sostituisce l'articolo, e next e last non lo vogliono:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "the my car", sbagliato: true },
            { en: "my car", it: "la mia macchina" },
            { en: "next week, last year", it: "la settimana prossima, l'anno scorso" },
          ],
        },
      ],
    },
  ],
};
