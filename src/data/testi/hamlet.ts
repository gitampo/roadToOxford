import { Lezione } from "@/types/lezione";

// William Shakespeare, Hamlet, atto III, scena 1, versi 56–69
// (circa 1600), pubblico dominio
const MONOLOGO = [
  "To be, or not to be, that is the question:",
  "Whether 'tis nobler in the mind to suffer",
  "The slings and arrows of outrageous fortune,",
  "Or to take arms against a sea of troubles,",
  "And by opposing end them. To die, to sleep;",
  "No more; and by a sleep to say we end",
  "The heart-ache and the thousand natural shocks",
  "That flesh is heir to: 'tis a consummation",
  "Devoutly to be wish'd. To die, to sleep;",
  "To sleep, perchance to dream: ay, there's the rub;",
  "For in that sleep of death what dreams may come,",
  "When we have shuffled off this mortal coil,",
  "Must give us pause: there's the respect",
  "That makes calamity of so long life.",
];

const MONOLOGO_TRADUZIONE = [
  "Essere o non essere, questo è il problema:",
  "se sia più nobile per l'animo sopportare",
  "i colpi di fionda e le frecce della fortuna oltraggiosa,",
  "o prendere le armi contro un mare di guai",
  "e, combattendoli, porvi fine. Morire, dormire;",
  "nient'altro; e con un sonno dire che mettiamo fine",
  "al dolore del cuore e ai mille colpi naturali",
  "che la carne riceve in eredità: è una conclusione",
  "da desiderare con devozione. Morire, dormire;",
  "dormire, forse sognare: sì, ecco l'ostacolo;",
  "perché quali sogni possano venire in quel sonno di morte,",
  "quando ci saremo liberati di questo groviglio mortale,",
  "deve farci esitare: è questa la considerazione",
  "che rende così lunga la vita della sventura.",
];

export const hamlet: Lezione = {
  id: "hamlet",
  titolo: "Hamlet: to be, or not to be",
  descrizione:
    "Il monologo più famoso del teatro: lettura, analisi ed esercizi",
  chiavi: "Shakespeare, Amleto, monologo, soliloquio, blank verse",
  livello: "Letteratura",
  sottotitolo: "Modulo C3 · William Shakespeare",
  citazione: {
    testo: "To be, or not to be, that is the question.",
    fonte: "William Shakespeare, Hamlet (circa 1600)",
    traduzione: "Essere o non essere, questo è il problema.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Sono i primi quattordici versi del monologo, che in tutto ne conta trentatré. Leggili una volta con calma, anche se non capisci ogni parola: senti il ritmo di un pensiero che va avanti e torna indietro. Nei riquadri successivi li analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: MONOLOGO,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Hamlet (circa 1600) è la tragedia più lunga di Shakespeare. Il fantasma del re di Danimarca appare al figlio, il principe Amleto, e gli rivela di essere stato ucciso dal fratello Claudio, che ha preso il trono e ne ha sposato la vedova. Amleto giura vendetta, ma esita: finge la pazzia, dubita, rimanda (lezione C3{6}).",
        },
        {
          tipo: "testo",
          testo:
            "Il monologo si trova nell'atto III, scena 1. Amleto crede di essere solo; in realtà il re Claudio e il consigliere Polonio sono nascosti e lo spiano. Amleto non parla della vendetta: si chiede se valga la pena vivere.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "soliloquy (soliloquio)",
              "un personaggio, solo in scena, pensa ad alta voce: il pubblico ascolta i suoi pensieri",
            ],
            [
              "aside (a parte)",
              "una battuta breve detta al pubblico, mentre gli altri personaggi sono in scena",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Amleto è considerato il primo grande personaggio moderno: invece di agire, riflette su se stesso. Il soliloquio è lo strumento che permette a Shakespeare di mostrare i suoi pensieri dall'interno.",
        },
      ],
    },
    {
      titolo: "L'INGLESE DI SHAKESPEARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Prima di iniziare, le parole antiche e le forme che incontrerai:",
        },
        {
          tipo: "tabella",
          righe: [
            ["'tis", "it is"],
            [
              "wish'd",
              "wished: l'apostrofo indica che -ed non è una sillaba in più",
            ],
            ["perchance", "perhaps: forse"],
            ["ay", "yes: sì (si pronuncia come I)"],
            [
              "the rub",
              "l'ostacolo (dal gioco delle bocce: un'irregolarità del terreno che devia la boccia)",
            ],
            ["heir to", "erede di"],
            ["consummation", "conclusione, compimento"],
            ["shuffle off", "liberarsi di, scrollarsi di dosso"],
            ["coil", "tumulto, confusione (oggi: spirale, bobina)"],
            ["respect", "considerazione, motivo"],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 1–5: LA DOMANDA",
      blocchi: [
        {
          tipo: "brano",
          righe: MONOLOGO,
          traduzione: MONOLOGO_TRADUZIONE,
          evidenzia: [0, 4],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Esistere o non esistere: questa è la vera domanda. Che cosa è più nobile: sopportare in silenzio i colpi della sfortuna, oppure ribellarsi contro un intero mare di problemi e farla finita? "Farla finita" ha un doppio senso: vincere i problemi, o morire combattendoli.',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "To be, or not to be",
              it: "l'infinito fa da soggetto; oggi si usa più spesso l'-ing (Being or not being), ma l'infinito è più solenne (lezione 48{5})",
            },
            {
              en: "Whether 'tis nobler… to suffer… or to take arms",
              it: "whether… or…: se… o… (lezione 42{5}); nobler è un comparativo in -er (lezione 26{1})",
            },
            {
              en: "by opposing end them",
              it: 'by + -ing: "opponendosi", il modo in cui si fa qualcosa (lezione 48{4})',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nota il not prima del to: not to be. La negazione dell'infinito si mette sempre davanti a to: I decided not to go, non to not go nell'inglese più curato.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "antithesis (antitesi)",
              "to be / not to be; to suffer / to take arms: le due scelte, una contro l'altra",
            ],
            [
              "metaphor (metafora)",
              "the slings and arrows: la sfortuna è un arciere che ci colpisce",
            ],
            [
              "mixed metaphor (metafora mista)",
              "take arms against a sea: non si combatte il mare con le armi, e proprio l'assurdità mostra che la lotta è impossibile",
            ],
            [
              "personification (personificazione)",
              "outrageous fortune: la fortuna è violenta e crudele, come una persona",
            ],
          ],
        },
      ],
    },
    {
      titolo: "IL METRO: IL BLANK VERSE E LE FINALI DEBOLI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il monologo è in blank verse: pentametri giambici senza rima, il verso del teatro di Shakespeare. Ma guarda come finiscono i primi versi: question, suffer, fortune, troubles. Hanno tutti una sillaba in più, debole, dopo l'ultimo accento.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "to BE, | or NOT | to BE, | that IS | the QUES- (tion)",
              it: "dieci sillabe + una debole: finale femminile",
            },
            {
              en: "WHE-ther | 'tis NO- | bler IN | the MIND | to SUF- (fer)",
              it: "il primo piede è rovesciato (DUM-da), poi giambi",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Questa sillaba in più si chiama feminine ending. Il verso resta come sospeso, non si chiude con un colpo forte: è il suono dell'incertezza di Amleto, che non riesce a decidere.",
        },
        {
          tipo: "nota",
          testo:
            "Confronta con il Sonetto 18, dove quasi ogni verso chiude su un accento forte (day, May, date): lì il poeta è sicuro della sua promessa. Il ritmo racconta lo stato d'animo quanto le parole.",
        },
      ],
    },
    {
      titolo: "VERSI 5–9: MORIRE, DORMIRE",
      blocchi: [
        {
          tipo: "brano",
          righe: MONOLOGO,
          traduzione: MONOLOGO_TRADUZIONE,
          evidenzia: [4, 8],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Amleto prova a immaginare la morte: è come dormire, niente di più. E se con un sonno potessimo mettere fine a tutti i dolori del cuore e alle mille sofferenze che il corpo umano eredita nascendo, sarebbe una conclusione da desiderare con tutto il cuore.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "To die, to sleep; / No more",
              it: "frasi senza verbo principale: il pensiero procede a scatti",
            },
            {
              en: "by a sleep to say we end",
              it: "→ to say that we end (it) by a sleep: that si può omettere dopo say (lezione 42{1})",
            },
            {
              en: "the thousand natural shocks / That flesh is heir to",
              it: "relativa con la preposizione in fondo: that flesh is heir to (lezione 44{5})",
            },
            {
              en: "a consummation / Devoutly to be wish'd",
              it: 'infinito passivo: to be + participio, "da desiderare" (lezione 43{2})',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "La preposizione in fondo alla relativa (the shocks that flesh is heir to) è normalissima nell'inglese parlato: the girl I was talking to, the house I grew up in. La versione con la preposizione davanti (to which flesh is heir) è più formale.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["metaphor (metafora)", "la morte è un sonno (to die, to sleep)"],
            [
              "hyperbole (iperbole)",
              "the thousand natural shocks: mille colpi, un numero esagerato",
            ],
            [
              "metonymy (metonimia)",
              "flesh: la carne sta per il corpo, e il corpo per la condizione umana",
            ],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 10–14: L'OSTACOLO",
      blocchi: [
        {
          tipo: "brano",
          righe: MONOLOGO,
          traduzione: MONOLOGO_TRADUZIONE,
          evidenzia: [9, 13],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Ma il sonno porta i sogni. Che cosa sogneremo, nel sonno della morte, quando ci saremo liberati del corpo? È questa paura dell'ignoto che ci fa esitare, ed è per questo che sopportiamo una vita piena di sventure così a lungo.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "what dreams may come… / Must give us pause",
              it: "il soggetto di must è un'intera frase: what dreams may come (lezione 44{6}); may = possibilità (lezione 28{5})",
            },
            {
              en: "When we have shuffled off this mortal coil",
              it: 'dopo when il present perfect al posto del future perfect: "quando ci saremo liberati" (lezione 34{4})',
            },
            {
              en: "there's the respect / That makes calamity of so long life",
              it: "relativa con that; make + nome + of: rendere qualcosa in un certo modo",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Must give us pause: pause qui è un nome, "esitazione". L\'espressione give someone pause, "far riflettere, far esitare", è ancora usata oggi.',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "metaphor (metafora)",
              "this mortal coil: la vita è un groviglio, un tumulto da cui liberarsi",
            ],
            [
              "metaphor (metafora)",
              "there's the rub: l'ostacolo che devia la boccia nel gioco",
            ],
            [
              "repetition (ripetizione)",
              "To sleep, perchance to dream: la parola sleep torna e si trasforma in dream",
            ],
          ],
        },
      ],
    },
    {
      titolo: "IL RAGIONAMENTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutte le parti, guarda come si muove il pensiero di Amleto. Non è un discorso lineare: è una mente che ragiona, prova una risposta, la smonta.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "la domanda (vv. 1–5)",
              "è meglio sopportare o ribellarsi e farla finita?",
            ],
            [
              "la tentazione (vv. 5–9)",
              "la morte è solo un sonno: sarebbe una liberazione",
            ],
            [
              "l'ostacolo (vv. 10–13)",
              "ma nel sonno si sogna: che cosa c'è dopo la morte?",
            ],
            [
              "la conclusione (vv. 13–14)",
              "è la paura dell'ignoto che ci tiene in vita, e nella sofferenza",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            'Nel resto del monologo Amleto concluderà che "la coscienza ci rende tutti codardi" (conscience does make cowards of us all): pensare troppo blocca l\'azione. È proprio il suo problema in tutta la tragedia.',
        },
        {
          tipo: "nota",
          testo:
            "Il pronome è sempre we, mai I: Amleto parla di sé, ma anche di tutti gli esseri umani. Per questo il monologo è diventato universale.",
        },
      ],
    },
    {
      titolo: "LE ESPRESSIONI DIVENTATE COMUNI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Pochi testi hanno dato all'inglese tante espressioni ancora vive. Le sentirai nei giornali, nei film, nelle conversazioni:",
        },
        {
          tipo: "tabella",
          righe: [
            ["to be or not to be", "si usa scherzando per qualsiasi dilemma"],
            ["there's the rub", "ecco il problema, ecco l'ostacolo"],
            ["the slings and arrows", "le difficoltà e le sfortune della vita"],
            ["shuffle off this mortal coil", "morire (ironico e letterario)"],
            [
              "a consummation devoutly to be wished",
              "una cosa che si desidera molto",
            ],
            ["what dreams may come", "il titolo di un film del 1998"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Nel celebre sketch del pappagallo morto dei Monty Python, il cliente dice che il pappagallo "has shuffled off his mortal coil": l\'effetto comico nasce proprio dal contrasto tra la frase solenne di Amleto e un pappagallo.',
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato verso per verso, rileggilo tutto con la traduzione. Prova a leggerlo ad alta voce, lentamente, come un attore che pensa. Sotto trovi il riepilogo delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: MONOLOGO,
          traduzione: MONOLOGO_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "antithesis (antitesi)",
              "to be / not to be (v. 1), to suffer / to take arms (vv. 2–4)",
            ],
            [
              "metaphor (metafora)",
              "slings and arrows (v. 3), sleep (vv. 5–10), the rub (v. 10), mortal coil (v. 12)",
            ],
            [
              "mixed metaphor (metafora mista)",
              "take arms against a sea of troubles (v. 4)",
            ],
            ["personification (personificazione)", "outrageous fortune (v. 3)"],
            ["hyperbole (iperbole)", "the thousand natural shocks (v. 7)"],
            ["metonymy (metonimia)", "flesh (v. 8)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Non ci sono rime: è blank verse. Le finali deboli e le frasi spezzate dai punti e virgola fanno sentire un pensiero che esita.",
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
          testo: "Comprensione",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è la domanda di Amleto?",
          opzioni: [
            "Se sia meglio sopportare le sofferenze della vita o farla finita",
            "Se uccidere lo zio subito o aspettare",
            "Se sposare Ofelia",
          ],
          giusta: 0,
          spiegazione:
            "Amleto si chiede se sia più nobile sopportare la sfortuna o ribellarsi e porre fine a tutto.",
          rivedi: "VERSI 1–5: LA DOMANDA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Perché, secondo Amleto, le persone non scelgono la morte?",
          opzioni: [
            "Perché amano troppo la vita",
            'Per paura di quello che potrebbe esserci dopo (i "sogni" della morte)',
            "Perché la religione lo vieta",
          ],
          giusta: 1,
          spiegazione:
            '"What dreams may come… must give us pause": è la paura dell\'ignoto a fermarci.',
          rivedi: "VERSI 10–14: L'OSTACOLO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "A che cosa paragona la morte Amleto?",
          opzioni: ["A un viaggio", "A una battaglia", "Al sonno", "A un mare"],
          giusta: 2,
          spiegazione:
            "To die, to sleep: la morte è un sonno, e nel sonno si sogna.",
          rivedi: "VERSI 5–9: MORIRE, DORMIRE",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola antica al suo significato.",
          coppie: [
            ["perchance", "perhaps"],
            ["ay", "yes"],
            ["'tis", "it is"],
            ["the rub", "l'ostacolo"],
            ["shuffle off", "liberarsi di"],
          ],
          rivedi: "L'INGLESE DI SHAKESPEARE",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna:
            "Riscrivi in inglese moderno, con la preposizione in fondo.",
          citazione: "the thousand natural shocks / That flesh is heir to",
          parole: ["the", "that", "to", "shocks", "is", "flesh", "heir"],
          soluzione: ["the", "shocks", "that", "flesh", "is", "heir", "to"],
          spiegazione:
            "La preposizione può restare in fondo alla relativa: the shocks that flesh is heir to (lezione 44{5}).",
          rivedi: "VERSI 5–9: MORIRE, DORMIRE",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi la domanda di Amleto in inglese moderno.",
          citazione: "Whether 'tis nobler in the mind to suffer",
          parole: ["to", "is", "it", "suffer", "nobler", "whether"],
          soluzione: ["whether", "it", "is", "nobler", "to", "suffer"],
          spiegazione: "'Tis = it is; whether introduce una domanda indiretta.",
          rivedi: "VERSI 1–5: LA DOMANDA",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che forma è "to be wish\'d"?',
          citazione: "a consummation / Devoutly to be wish'd",
          opzioni: [
            "Un infinito passivo",
            "Un past simple",
            "Un imperativo",
            "Un futuro",
          ],
          giusta: 0,
          spiegazione:
            'To be + participio: infinito passivo, "da desiderare" (lezione 43{2}).',
          rivedi: "VERSI 5–9: MORIRE, DORMIRE",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Perché dopo "When" c\'è "we have shuffled" e non "we will have shuffled"?',
          opzioni: [
            "È un errore di Shakespeare",
            "Dopo when il futuro si esprime con il presente (o il present perfect)",
            "Perché parla del passato",
          ],
          giusta: 1,
          spiegazione:
            'Come dopo if, dopo when non si usa will: "when we have shuffled off" = quando ci saremo liberati (lezione 34{4}).',
          rivedi: "VERSI 10–14: L'OSTACOLO",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "combattendoli" si dice by + -ing.',
          prima: "And by",
          dopo: "end them.",
          risposte: ["opposing"],
          spiegazione:
            "By + -ing indica il modo: by opposing, opponendosi (lezione 48{4}).",
          rivedi: "VERSI 1–5: LA DOMANDA",
        },
        {
          tipo: "sottotitolo",
          testo: "Ritmo e figure",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Che cos\'è la feminine ending di "question", "suffer", "fortune"?',
          opzioni: [
            "Una rima tra parole femminili",
            "Un verso più corto",
            "Una sillaba debole in più alla fine del verso",
          ],
          giusta: 2,
          spiegazione:
            "Il verso ha dieci sillabe più una debole: lascia il verso sospeso, come il dubbio di Amleto.",
          rivedi: "IL METRO: IL BLANK VERSE E LE FINALI DEBOLI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Quale figura retorica è "take arms against a sea of troubles"?',
          opzioni: [
            "Metafora mista",
            "Anafora",
            "Domanda retorica",
            "Allitterazione",
          ],
          giusta: 0,
          spiegazione:
            "Due immagini che non si accordano: non si combatte il mare con le armi. L'assurdità mostra che la lotta è senza speranza.",
          rivedi: "VERSI 1–5: LA DOMANDA",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni espressione al significato che ha oggi.",
          coppie: [
            ["there's the rub", "ecco il problema"],
            ["slings and arrows", "le sfortune della vita"],
            ["shuffle off this mortal coil", "morire"],
            ["give someone pause", "far esitare"],
          ],
          rivedi: "LE ESPRESSIONI DIVENTATE COMUNI",
        },
        {
          tipo: "sottotitolo",
          testo: "Traduci e scrivi",
        },
        {
          tipo: "testo",
          testo:
            "Questi due esercizi non hanno un punteggio: non esiste un'unica risposta giusta. Scrivi la tua versione e confrontala con quella proposta.",
        },
        {
          tipo: "traduci",
          consegna: "Traduci in italiano i primi tre versi.",
          testo:
            "To be, or not to be, that is the question:\nWhether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,",
          soluzione:
            "Essere o non essere, questo è il problema: se sia più nobile nell'animo sopportare i colpi e le frecce della fortuna oltraggiosa,",
          spiegazione:
            'La traduzione italiana più famosa usa "il problema" per question, non "la domanda": rende meglio il dilemma.',
          rivedi: "VERSI 1–5: LA DOMANDA",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of Hamlet's reasoning in these lines.",
          punti: [
            "the question",
            "death as sleep",
            '"the rub"',
            "the use of we and the soliloquy",
          ],
          modello:
            'Hamlet opens with a universal question: is it nobler to endure "the slings and arrows of outrageous fortune" or to fight against them and end everything? He imagines death as a sleep that would end "the thousand natural shocks" of life, a consummation "devoutly to be wished". However, sleep brings dreams, and "there\'s the rub": nobody knows what comes after death. It is this fear of the unknown that makes people endure their suffering. As a soliloquy spoken with "we", the speech turns Hamlet\'s private doubt into a question about all human beings.',
          spiegazione:
            "Hai citato il testo e usato termini come soliloquy e metaphor? Sono le cose che un esaminatore cerca.",
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
