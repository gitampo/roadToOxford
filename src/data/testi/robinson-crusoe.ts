import { Lezione } from "@/types/lezione";

// Daniel Defoe, Robinson Crusoe (1719), l'impronta sulla spiaggia,
// pubblico dominio. Una riga per ogni frase o parte di frase
const BRANO = [
  "It happened one day, about noon, going towards my boat,",
  "I was exceedingly surprised with the print of a man's naked foot on the shore, which was very plain to be seen in the sand.",
  "I stood like one thunderstruck, or as if I had seen an apparition;",
  "I listened, I looked round me, I could hear nothing, nor see anything;",
  "I went up to a rising ground to look farther;",
  "I went up the shore and down the shore, but it was all one; I could see no other impression but that one.",
  "I went to it again to see if there were any more, and to observe if it might not be my fancy;",
  "but there was no room for that, for there was exactly the print of a foot — toes, heel, and every part of a foot.",
  "How it came thither I knew not, nor could in the least imagine;",
  "but after innumerable fluttering thoughts, like a man perfectly confused and out of myself,",
  "I came home to my fortification, not feeling, as we say, the ground I went on,",
  "but terrified to the last degree, looking behind me at every two or three steps,",
  "mistaking every bush and tree, and fancying every stump at a distance to be a man.",
];

const BRANO_TRADUZIONE = [
  "Accadde un giorno, verso mezzogiorno, mentre andavo verso la mia barca,",
  "che fui estremamente sorpreso dall'impronta di un piede nudo d'uomo sulla riva, che si vedeva benissimo nella sabbia.",
  "Rimasi come fulminato, o come se avessi visto un fantasma;",
  "ascoltai, mi guardai intorno, non riuscivo a sentire nulla, né a vedere niente;",
  "salii su un'altura per guardare più lontano;",
  "percorsi la riva in su e in giù, ma non cambiava nulla; non riuscivo a vedere nessun'altra impronta oltre a quella.",
  "Tornai a guardarla per vedere se ce ne fossero altre, e per capire se non fosse un'illusione;",
  "ma non c'era spazio per il dubbio, perché era esattamente l'impronta di un piede: le dita, il tallone e ogni parte di un piede.",
  "Come fosse arrivata lì non lo sapevo, né riuscivo minimamente a immaginarlo;",
  "ma dopo innumerevoli pensieri agitati, come un uomo del tutto confuso e fuori di sé,",
  "tornai a casa, alla mia fortificazione, senza sentire, come si dice, la terra sotto i piedi,",
  "ma terrorizzato all'estremo, guardandomi alle spalle ogni due o tre passi,",
  "scambiando ogni cespuglio e ogni albero, e immaginando che ogni ceppo in lontananza fosse un uomo.",
];

export const robinsonCrusoe: Lezione = {
  id: "robinson-crusoe",
  titolo: "Robinson Crusoe: l'impronta",
  descrizione:
    "Dopo anni di solitudine, un'impronta sulla sabbia: lettura, analisi ed esercizi",
  chiavi: "Defoe, romanzo, realismo, narratore in prima persona",
  livello: "Letteratura",
  sottotitolo: "Modulo C4 · Daniel Defoe",
  citazione: {
    testo: "I stood like one thunderstruck, or as if I had seen an apparition.",
    fonte: "Daniel Defoe, Robinson Crusoe (1719)",
    traduzione: "Rimasi come fulminato, o come se avessi visto un fantasma.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "È una delle scene più famose del romanzo inglese. Il brano è in prosa: lo abbiamo diviso in righe, una per ogni frase o parte di frase, per poterlo analizzare con ordine. Leggilo tutto una volta. Nei riquadri successivi lo analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: BRANO,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Daniel Defoe (1660 circa – 1731) fu commerciante e giornalista prima che scrittore. Pubblicò Robinson Crusoe nel 1719, quasi a sessant\'anni, presentandolo come la vera autobiografia di un marinaio "scritta da lui stesso". Molti lettori ci credettero (lezione C4{6}).',
        },
        {
          tipo: "testo",
          testo:
            "Crusoe naufraga su un'isola deserta al largo del Sud America e ci resta per ventotto anni. Costruisce una casa fortificata, coltiva, alleva capre, tiene un diario. Questa scena arriva dopo circa quindici anni di totale solitudine: per la prima volta, una traccia di un altro essere umano.",
        },
        {
          tipo: "nota",
          testo:
            "Defoe si ispirò alla storia vera di Alexander Selkirk, un marinaio scozzese che visse da solo per quattro anni su un'isola del Pacifico. Robinson Crusoe è considerato uno dei primi romanzi della letteratura inglese.",
        },
      ],
    },
    {
      titolo: "LE PAROLE DEL SETTECENTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'inglese di Defoe è già quasi moderno, ma alcune parole e costruzioni sono antiche. Ecco quelle che ti servono:",
        },
        {
          tipo: "tabella",
          righe: [
            ["exceedingly", "extremely: estremamente"],
            ["the print of a foot", "l'impronta di un piede (oggi footprint)"],
            ["thunderstruck", "fulminato, sbalordito"],
            ["an apparition", "un fantasma, un'apparizione"],
            ["a rising ground", "un'altura"],
            ["it was all one", "era lo stesso, non cambiava nulla"],
            ["fancy", 'immaginazione, illusione (oggi anche "capriccio")'],
            ["thither", "there: là, lì"],
            ["out of myself", "fuori di me"],
            ["to the last degree", "all'estremo"],
            ["a stump", "un ceppo d'albero"],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 1–2: L'IMPRONTA",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [0, 1],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Un giorno qualunque, a mezzogiorno, mentre va verso la sua barca, Crusoe vede sulla sabbia l'impronta di un piede nudo. Non c'è niente di soprannaturale: è un dettaglio concreto, quotidiano. Proprio per questo è sconvolgente.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "It happened one day…",
              it: "past simple narrativo: azioni concluse una dopo l'altra (lezione 22{1})",
            },
            {
              en: "going towards my boat, I was…",
              it: '-ing al posto di while I was going: "mentre andavo" (lezione 35{2})',
            },
            {
              en: "a man's naked foot",
              it: "genitivo sassone: il piede di un uomo (lezione 5{6})",
            },
            {
              en: "which was very plain to be seen",
              it: "relativa non restrittiva, tra virgole (lezione 44{4}); to be seen = infinito passivo",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Oggi si direbbe surprised at o surprised by, non surprised with. Le preposizioni dopo gli aggettivi cambiano nel tempo, e vanno imparate a memoria (lezione 49{4}).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "realistic detail (dettaglio realistico)",
              "about noon, my boat, the sand: ora, luogo e oggetti precisi rendono credibile la scena",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 3–6: LO SMARRIMENTO",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [2, 5],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Crusoe resta immobile, come colpito da un fulmine. Poi reagisce in modo frenetico: ascolta, si guarda intorno, sale su un'altura, corre su e giù per la spiaggia. Ma non trova niente: c'è solo quell'impronta.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "as if I had seen an apparition",
              it: 'as if + past perfect: "come se avessi visto" (lezione 37{1})',
            },
            {
              en: "I could hear nothing, nor see anything",
              it: "nothing = not anything: una sola negazione per frase (lezione 18{3})",
            },
            {
              en: "to look farther",
              it: "to = per, scopo (lezione 48{7}); farther = più lontano (comparativo di far)",
            },
            {
              en: "I could see no other impression but that one",
              it: "no… but = nessun'altra… tranne",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Could ("riuscivo") è il passato di can (lezione 25{5}). Con i verbi dei sensi, can e could si usano molto: I can hear something, I couldn\'t see anything (lezione 25{6}).',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "simile (similitudine)",
              "like one thunderstruck: come un uomo colpito da un fulmine",
            ],
            [
              "asyndeton (asindeto)",
              "I listened, I looked round me, I could hear nothing: azioni in fila, senza congiunzioni, come in un affanno",
            ],
            [
              "anaphora (anafora)",
              "I went up… I went up…: la ripetizione mostra la ricerca ossessiva",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LO STILE: SEMPLICE E CONCRETO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Hai visto come scrive Defoe: frasi semplici, una dopo l'altra, separate da punti e virgola; verbi d'azione (stood, listened, looked, went); parole di tutti i giorni. È lo stile del giornalista e del mercante, non del poeta.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "paratassi (parataxis)",
              "frasi coordinate, una dopo l'altra, senza subordinate complicate",
            ],
            [
              "punto e virgola",
              "collega azioni rapide, come in un racconto a voce",
            ],
            [
              "prima persona",
              "il narratore racconta quello che ha vissuto: il lettore vede con i suoi occhi",
            ],
            [
              "dettagli concreti",
              "toes, heel, the sand, my boat: niente è vago",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Questo stile è chiamato plain style: era quello raccomandato in quegli anni dalla Royal Society per i testi scientifici. Defoe lo usa per un romanzo, e il risultato è un realismo mai visto prima.",
        },
      ],
    },
    {
      titolo: "FRASI 7–9: LA PROVA",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [6, 8],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Crusoe torna a guardare l'impronta, per essere sicuro di non essersela immaginata. Ma non ci sono dubbi: è un piede, completo di dita e tallone. Come sia arrivato lì, non riesce nemmeno a immaginarlo.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "to see if there were any more",
              it: "domanda indiretta con if (lezione 42{5}); were al posto di was: un congiuntivo antico",
            },
            {
              en: "if it might not be my fancy",
              it: "might = possibilità (lezione 45{4})",
            },
            {
              en: "for there was exactly the print of a foot",
              it: "for = because; there was (lezione 21{5})",
            },
            {
              en: "How it came thither I knew not",
              it: "→ I didn't know how it had come there: la domanda va in testa, e la negazione antica non vuole did",
            },
            {
              en: "nor could in the least imagine",
              it: "→ and I couldn't imagine it at all: in the least = minimamente",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nella domanda indiretta l'ordine è quello di una frase normale: how it came, non how did it come. È la stessa regola di Could you tell me where the station is? (lezione 42{5}).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "enumeration (enumerazione)",
              "toes, heel, and every part of a foot: l'elenco è una prova, come in un verbale",
            ],
            [
              "anastrophe (anastrofe)",
              "How it came thither I knew not: l'ordine invertito mette in risalto il mistero",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 10–13: LA FUGA",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [9, 12],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Confuso e fuori di sé, Crusoe torna alla sua fortezza senza nemmeno sentire la terra sotto i piedi, voltandosi ogni due o tre passi. La paura trasforma tutto: ogni cespuglio, ogni albero, ogni ceppo da lontano gli sembra un uomo.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "like a man perfectly confused",
              it: 'like + nome: "come un uomo" (similitudine)',
            },
            {
              en: "the ground I went on",
              it: "→ the ground (that) I walked on: relativa senza pronome, con la preposizione in fondo (lezioni 44{3} e 44{5})",
            },
            {
              en: "not feeling… looking… mistaking… fancying",
              it: "una catena di -ing: azioni contemporanee al ritorno a casa",
            },
            {
              en: "fancying every stump… to be a man",
              it: 'fancy + oggetto + to be: "immaginare che qualcosa sia"',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'At every two or three steps: "ogni due o tre passi". Every con un numero indica la frequenza: every two days, ogni due giorni.',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["simile (similitudine)", "like a man perfectly confused"],
            [
              "idiom (modo di dire)",
              'not feeling the ground I went on: "non sentire la terra sotto i piedi", e Crusoe stesso lo segnala con as we say',
            ],
            [
              "climax",
              "every bush… tree… every stump… a man: la paura cresce fino all'allucinazione",
            ],
          ],
        },
      ],
    },
    {
      titolo: "IL SIGNIFICATO DELL'IMPRONTA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutto il brano, guarda il paradosso. Per quindici anni Crusoe ha desiderato la compagnia di un altro essere umano. Quando finalmente ne trova la traccia, prova solo terrore.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "la sorpresa (frasi 1–2)",
              "un dettaglio concreto sconvolge tutto",
            ],
            ["la ricerca (frasi 3–6)", "il corpo reagisce prima della mente"],
            ["la verifica (frasi 7–9)", "la ragione conferma: è reale"],
            ["la paura (frasi 10–13)", "l'immaginazione prende il sopravvento"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "L'impronta apre l'ultima parte del romanzo: arriveranno i cannibali, e Crusoe salverà Venerdì. Molti critici leggono in questa paura dell'\"altro\" la mentalità coloniale dell'Inghilterra del Settecento, che guardava agli altri popoli come a una minaccia o a dei servi.",
        },
        {
          tipo: "nota",
          testo:
            'Defoe è un maestro del realismo psicologico: non dice "ebbi paura", ma mostra quello che la paura fa fare. È la tecnica che i corsi di scrittura chiamano show, don\'t tell.',
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato frase per frase, rileggi tutto il brano con la traduzione. Nota come il ritmo accelera e rallenta con le emozioni di Crusoe. Sotto trovi il riepilogo delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "simile (similitudine)",
              "like one thunderstruck (frase 3), like a man perfectly confused (frase 10)",
            ],
            [
              "asyndeton (asindeto)",
              "I listened, I looked round me… (frase 4)",
            ],
            ["anaphora (anafora)", "I went up… I went up… (frasi 5–6)"],
            [
              "enumeration (enumerazione)",
              "toes, heel, and every part of a foot (frase 8)",
            ],
            [
              "anastrophe (anastrofe)",
              "How it came thither I knew not (frase 9)",
            ],
            ["climax", "every bush… every stump… a man (frase 13)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Tutte servono a un unico scopo: farci vivere la scena dall'interno, con il cuore che batte insieme a quello di Crusoe.",
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
          domanda: "Che cosa trova Crusoe sulla spiaggia?",
          opzioni: [
            "Una barca abbandonata",
            "L'impronta di un piede nudo",
            "Un uomo addormentato",
            "Una lettera",
          ],
          giusta: 1,
          spiegazione: '"The print of a man\'s naked foot on the shore".',
          rivedi: "FRASI 1–2: L'IMPRONTA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Perché Crusoe torna a guardare l'impronta?",
          opzioni: [
            "Per misurarla",
            "Per cancellarla",
            "Per essere sicuro che non sia un'illusione",
          ],
          giusta: 2,
          spiegazione:
            '"To observe if it might not be my fancy": vuole capire se se l\'è immaginata.',
          rivedi: "FRASI 7–9: LA PROVA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è il paradosso della scena?",
          opzioni: [
            "Crusoe ha desiderato a lungo la compagnia umana, ma la sua traccia lo terrorizza",
            "Crusoe è felice di essere solo",
            "L'impronta è di Crusoe stesso",
          ],
          giusta: 0,
          spiegazione:
            "Dopo anni di solitudine, la prima traccia di un altro uomo provoca solo paura.",
          rivedi: "IL SIGNIFICATO DELL'IMPRONTA",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola al suo significato.",
          coppie: [
            ["thunderstruck", "fulminato"],
            ["apparition", "fantasma"],
            ["thither", "lì"],
            ["fancy", "illusione"],
            ["stump", "ceppo"],
          ],
          rivedi: "LE PAROLE DEL SETTECENTO",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi in inglese moderno.",
          citazione: "How it came thither I knew not",
          parole: ["know", "how", "come", "I", "it", "there", "had", "didn't"],
          soluzione: [
            "I",
            "didn't",
            "know",
            "how",
            "it",
            "had",
            "come",
            "there",
          ],
          spiegazione:
            "Oggi la negazione vuole did, e la domanda indiretta va dopo il verbo: I didn't know how it had come there.",
          rivedi: "FRASI 7–9: LA PROVA",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi con il pronome relativo che è stato omesso.",
          citazione: "the ground I went on",
          parole: ["on", "I", "the", "that", "went", "ground"],
          soluzione: ["the", "ground", "that", "I", "went", "on"],
          spiegazione:
            "Il relativo complemento si può omettere: the ground (that) I went on (lezione 44{3}).",
          rivedi: "FRASI 10–13: LA FUGA",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Quale tempo verbale c\'è dopo "as if"?',
          citazione: "as if I had seen an apparition",
          opzioni: [
            "Past simple",
            "Past perfect",
            "Present perfect",
            "Past continuous",
          ],
          giusta: 1,
          spiegazione:
            'Had + participio: past perfect, "come se avessi visto" (lezione 37{1}).',
          rivedi: "FRASI 3–6: LO SMARRIMENTO",
        },
        {
          tipo: "completa",
          consegna:
            'Completa con la forma negativa corretta: "non riuscivo a sentire niente".',
          prima: "I could hear",
          dopo: ".",
          risposte: ["nothing"],
          spiegazione:
            "Una sola negazione: could hear nothing oppure couldn't hear anything (lezione 18{3}).",
          rivedi: "FRASI 3–6: LO SMARRIMENTO",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Che cosa significa "going towards my boat" in questa frase?',
          citazione: "It happened one day, about noon, going towards my boat,",
          opzioni: [
            "Per andare alla barca",
            "Dopo essere andato alla barca",
            "Mentre andavo verso la barca",
          ],
          giusta: 2,
          spiegazione:
            "La forma in -ing qui sostituisce while I was going: un'azione in corso (lezione 35{2}).",
          rivedi: "FRASI 1–2: L'IMPRONTA",
        },
        {
          tipo: "sottotitolo",
          testo: "Stile e figure",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa caratterizza lo stile di Defoe?",
          opzioni: [
            "Frasi semplici, verbi d'azione, dettagli concreti",
            "Frasi lunghe e complesse, piene di metafore",
            "Versi in rima",
          ],
          giusta: 0,
          spiegazione:
            "È il plain style: paratassi, punti e virgola, parole quotidiane.",
          rivedi: "LO STILE: SEMPLICE E CONCRETO",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca i verbi d'azione nella frase 4.",
          parole: [
            "I",
            "listened,",
            "I",
            "looked",
            "round",
            "me,",
            "I",
            "could",
            "hear",
            "nothing",
          ],
          giuste: [1, 3, 8],
          spiegazione:
            "Listened, looked, hear: azioni in fila, senza congiunzioni (asindeto).",
          rivedi: "FRASI 3–6: LO SMARRIMENTO",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["simile", "like one thunderstruck"],
            ["anaphora", "I went up… I went up…"],
            ["enumeration", "toes, heel, and every part"],
            ["climax", "every bush… every stump… a man"],
          ],
          rivedi: "RILEGGILO",
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
          consegna: "Traduci in italiano la frase 3 e la frase 4.",
          testo:
            "I stood like one thunderstruck, or as if I had seen an apparition; I listened, I looked round me, I could hear nothing, nor see anything;",
          soluzione:
            "Rimasi come fulminato, o come se avessi visto un fantasma; ascoltai, mi guardai intorno, non riuscivo a sentire nulla, né a vedere niente;",
          spiegazione:
            "Hai mantenuto la successione rapida delle azioni, senza aggiungere congiunzioni? È lì che si sente l'affanno di Crusoe.",
          rivedi: "FRASI 3–6: LO SMARRIMENTO",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of how Defoe shows Crusoe's fear.",
          punti: [
            "the realistic detail of the footprint",
            "the short actions",
            "a simile",
            "the final hallucination",
          ],
          modello:
            'Defoe describes the footprint with realistic precision, "toes, heel, and every part of a foot", so the reader believes the scene completely. Crusoe\'s fear is shown through a series of short actions joined by semicolons: "I listened, I looked round me". The simile "like one thunderstruck" expresses his shock. In the end his imagination takes over, and he mistakes "every stump at a distance" for a man. Instead of telling us that Crusoe is afraid, Defoe shows us what fear makes him do.',
          spiegazione:
            "Hai citato il testo e usato termini come simile e realistic detail? Sono le cose che un esaminatore cerca.",
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
