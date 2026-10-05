import { Lezione } from "@/types/lezione";

// Charles Dickens, Hard Times (1854), libro I, capitolo 5: Coketown,
// pubblico dominio. Una riga per ogni frase o parte di frase
const BRANO = [
  "It was a town of red brick, or of brick that would have been red if the smoke and ashes had allowed it;",
  "but as matters stood, it was a town of unnatural red and black like the painted face of a savage.",
  "It was a town of machinery and tall chimneys, out of which interminable serpents of smoke trailed themselves for ever and ever, and never got uncoiled.",
  "It had a black canal in it, and a river that ran purple with ill-smelling dye,",
  "and vast piles of building full of windows where there was a rattling and a trembling all day long,",
  "and where the piston of the steam-engine worked monotonously up and down, like the head of an elephant in a state of melancholy madness.",
  "It contained several large streets all very like one another, and many small streets still more like one another,",
  "inhabited by people equally like one another,",
  "who all went in and out at the same hours, with the same sound upon the same pavements, to do the same work,",
  "and to whom every day was the same as yesterday and to-morrow, and every year the counterpart of the last and the next.",
];

const BRANO_TRADUZIONE = [
  "Era una città di mattoni rossi, o di mattoni che sarebbero stati rossi se il fumo e la cenere l'avessero permesso;",
  "ma, stando così le cose, era una città di un rosso e di un nero innaturali, come la faccia dipinta di un selvaggio.",
  "Era una città di macchinari e di alte ciminiere, da cui interminabili serpenti di fumo si trascinavano in eterno, senza mai srotolarsi.",
  "C'era un canale nero, e un fiume che scorreva viola di tinture maleodoranti,",
  "e grandi blocchi di edifici pieni di finestre, dove tutto il giorno c'era uno sferragliare e un tremare,",
  "e dove lo stantuffo della macchina a vapore andava monotono su e giù, come la testa di un elefante in uno stato di malinconica follia.",
  "C'erano diverse strade grandi, tutte molto simili tra loro, e molte strade piccole ancora più simili tra loro,",
  "abitate da persone altrettanto simili tra loro,",
  "che uscivano ed entravano tutte alle stesse ore, con lo stesso rumore sugli stessi marciapiedi, per fare lo stesso lavoro,",
  "e per le quali ogni giorno era uguale a ieri e a domani, e ogni anno la copia del precedente e del successivo.",
];

export const coketown: Lezione = {
  id: "coketown",
  titolo: "Hard Times: Coketown",
  descrizione: "La città industriale di Dickens: lettura, analisi ed esercizi",
  chiavi:
    "Dickens, romanzo vittoriano, Rivoluzione industriale, città, ripetizione",
  livello: "Letteratura",
  sottotitolo: "Modulo C6 · Charles Dickens",
  citazione: {
    testo: "It was a town of machinery and tall chimneys.",
    fonte: "Charles Dickens, Hard Times (1854)",
    traduzione: "Era una città di macchinari e di alte ciminiere.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'È la descrizione di una città industriale inventata, Coketown, "la città del carbone". Il brano è in prosa: lo abbiamo diviso in righe, una per ogni frase o parte di frase. Leggilo tutto una volta: senti come le stesse parole tornano di continuo. Nei riquadri successivi lo analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.',
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
            "Charles Dickens (1812–1870) è il romanziere più popolare dell'Inghilterra vittoriana. Da bambino aveva lavorato in una fabbrica di lucido da scarpe, mentre il padre era in prigione per debiti: per tutta la vita scrisse dei poveri e delle ingiustizie sociali (lezione C6{4}).",
        },
        {
          tipo: "testo",
          testo:
            "Hard Times (Tempi difficili) uscì nel 1854, a puntate, sulla rivista di Dickens. È ambientato a Coketown, una città di fabbriche tessili ispirata a Preston, nel nord dell'Inghilterra, che Dickens visitò proprio durante un grande sciopero. Il romanzo attacca l'utilitarismo: l'idea che contino solo i fatti, i numeri e il profitto.",
        },
        {
          tipo: "nota",
          testo:
            'Il romanzo si apre con la voce del preside Gradgrind: "Now, what I want is, Facts" (ora, quello che voglio sono i Fatti). Coketown è quella filosofia trasformata in città.',
        },
      ],
    },
    {
      titolo: "LE PAROLE DELLA FABBRICA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il lessico è quello della Rivoluzione industriale (lezione C5{2}). Ecco le parole che ti servono:",
        },
        {
          tipo: "tabella",
          righe: [
            ["brick", "mattone"],
            ["ashes", "cenere"],
            ["machinery", "macchinari (non numerabile, lezione 17{1})"],
            ["chimneys", "ciminiere, camini"],
            ["uncoiled", "srotolato (coil = spira, rotolo)"],
            ["dye", "tintura, colorante"],
            ["rattling / trembling", "sferragliare / tremare"],
            [
              "the piston of the steam-engine",
              "lo stantuffo della macchina a vapore",
            ],
            ["pavements", "marciapiedi"],
            ["counterpart", "copia, corrispondente"],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 1–2: IL COLORE DELLA CITTÀ",
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
            "Coketown è fatta di mattoni rossi; o meglio, di mattoni che sarebbero rossi, se il fumo e la cenere non li avessero anneriti. Il risultato è un rosso e nero innaturale, come un volto dipinto. Già nella prima frase la città è sporca, falsa, rovinata dall'industria.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "brick that would have been red if the smoke and ashes had allowed it",
              it: "third conditional: would have + participio… if + past perfect, un'ipotesi irreale sul passato (lezione 41{1})",
            },
            {
              en: "as matters stood",
              it: '"stando così le cose": un\'espressione fissa',
            },
            {
              en: "like the painted face of a savage",
              it: "like + nome: similitudine",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Savage (selvaggio) è una parola che riflette i pregiudizi coloniali dell'Ottocento verso i popoli non europei. Oggi è considerata offensiva. Leggere i classici vuol dire anche riconoscere i limiti del loro tempo.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "correctio (correzione)",
              "red brick, or of brick that would have been red: lo scrittore corregge se stesso, e la correzione diventa ironia",
            ],
            ["simile (similitudine)", "like the painted face of a savage"],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 3–6: SERPENTI ED ELEFANTI",
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
            "Dalle ciminiere escono serpenti di fumo che non si srotolano mai. Il canale è nero, il fiume è viola per le tinture delle fabbriche. Negli edifici tutto trema e sferraglia dalla mattina alla sera, e lo stantuffo della macchina a vapore va su e giù come la testa di un elefante impazzito di malinconia. Le macchine sembrano animali; gli animali sembrano macchine.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "tall chimneys, out of which interminable serpents… trailed",
              it: "relativa con la preposizione davanti: out of which (lezione 44{5})",
            },
            {
              en: "never got uncoiled",
              it: 'get + participio: un passivo informale, "non venivano mai srotolati" (lezione 43{1})',
            },
            {
              en: "a river that ran purple",
              it: 'run + aggettivo: "scorreva viola", il colore che il fiume prende',
            },
            {
              en: "there was a rattling and a trembling",
              it: "l'-ing usato come nome, con l'articolo (lezione 48{5})",
            },
            {
              en: "worked monotonously up and down",
              it: "avverbio di modo in -ly (lezione 33{1})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Ill-smelling è un aggettivo composto: ill (male) + smelling. Lo stesso schema in ill-tempered, well-known, good-looking (lezione 4{6}).",
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
              "interminable serpents of smoke: il fumo è un serpente",
            ],
            [
              "simile (similitudine)",
              "like the head of an elephant in a state of melancholy madness",
            ],
            [
              "onomatopoeia (onomatopea)",
              "rattling, trembling: parole che imitano il rumore",
            ],
            [
              "polysyndeton (polisindeto)",
              "and… and… and where…: la frase si allunga senza fine, come il lavoro",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LO STILE: LA RIPETIZIONE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora guarda le parole che tornano. Dickens non le ripete per sbaglio: la ripetizione è il suo strumento principale. Una città monotona va descritta con una lingua monotona.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "It was a town of… (3 volte)",
              "anafora: ogni frase ricomincia uguale",
            ],
            [
              "like one another (3 volte)",
              "le strade e le persone sono tutte uguali",
            ],
            [
              "the same (5 volte)",
              "le stesse ore, lo stesso rumore, gli stessi marciapiedi, lo stesso lavoro, lo stesso giorno",
            ],
            [
              "and… and… and…",
              "le frasi si allungano senza fermarsi, come le giornate",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Leggi ad alta voce la frase 9: "at the same hours, with the same sound upon the same pavements, to do the same work". Il ritmo stesso diventa il rumore della fabbrica.',
        },
      ],
    },
    {
      titolo: "FRASI 7–10: TUTTI UGUALI",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [6, 9],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Le strade si somigliano tutte, e le persone che le abitano anche. Escono ed entrano alla stessa ora, fanno lo stesso rumore sugli stessi marciapiedi, fanno lo stesso lavoro. Per loro ogni giorno è uguale a ieri e a domani, ogni anno è la copia del precedente. Gli esseri umani sono diventati parti della macchina.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "still more like one another",
              it: 'still + comparativo: "ancora più" (lezione 26{3})',
            },
            {
              en: "inhabited by people",
              it: 'participio passato con by: "abitate da", un passivo ridotto (lezione 43{1})',
            },
            {
              en: "who all went in and out… to do the same work",
              it: "relativa con who (lezione 44{2}); to do = per fare, scopo (lezione 48{7})",
            },
            {
              en: "to whom every day was the same as yesterday",
              it: "relativa con la preposizione davanti (lezione 44{5}); the same as = uguale a (lezione 26{6})",
            },
            {
              en: "and every year the counterpart of the last and the next",
              it: "manca il verbo: and every year (was) the counterpart…",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Like one another vuol dire "simili tra loro". One another ed each other indicano un\'azione reciproca: They help each other (si aiutano a vicenda).',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["anaphora (anafora)", "the same… the same… the same…"],
            [
              "climax",
              "dalle strade alle persone, dalle ore ai giorni agli anni: la monotonia si allarga a tutta la vita",
            ],
            [
              "irony (ironia)",
              'una descrizione precisa e "oggettiva", come vorrebbe Gradgrind, che diventa una condanna',
            ],
          ],
        },
      ],
    },
    {
      titolo: "LA CRITICA DI DICKENS",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Ora che hai letto tutto il brano, guarda il percorso. Dickens parte dai mattoni, passa alle macchine, poi alle strade, e solo alla fine arriva alle persone. Ma quando ci arriva, le persone non hanno né nomi né volti: sono come le strade, "like one another".',
        },
        {
          tipo: "tabella",
          righe: [
            [
              "i colori (frasi 1–2)",
              "la natura è sporcata: niente è del colore che dovrebbe",
            ],
            [
              "le macchine (frasi 3–6)",
              "le macchine sono animali mostruosi e malati",
            ],
            [
              "le persone (frasi 7–10)",
              "gli uomini sono ingranaggi, tutti uguali",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            "È la critica centrale del romanzo: una società che crede solo nei fatti e nel profitto toglie agli esseri umani l'immaginazione, la varietà, la gioia. Dickens non scrive un saggio: usa le immagini e l'umorismo per far sentire al lettore l'oppressione di quella vita.",
        },
        {
          tipo: "nota",
          testo:
            "Dickens era un fenomeno popolare: i suoi romanzi uscivano a puntate e la gente faceva la coda per comprare il numero nuovo. Le sue descrizioni contribuirono a far approvare leggi sul lavoro e sull'istruzione.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato frase per frase, rileggi tutto il brano con la traduzione. Leggilo ad alta voce e senti il ritmo martellante delle ripetizioni. Sotto trovi il riepilogo delle figure retoriche.",
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
              "correctio (correzione)",
              "red brick, or of brick that would have been red (frase 1)",
            ],
            [
              "simile (similitudine)",
              "like the painted face (frase 2), like the head of an elephant (frase 6)",
            ],
            ["metaphor (metafora)", "serpents of smoke (frase 3)"],
            ["onomatopoeia (onomatopea)", "rattling, trembling (frase 5)"],
            [
              "anaphora (anafora)",
              "It was a town of… (frasi 1–3), the same… (frasi 9–10)",
            ],
            ["polysyndeton (polisindeto)", "and… and… (frasi 4–6)"],
            ["climax", "strade, persone, ore, giorni, anni (frasi 7–10)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Tutte servono a un'unica idea: a Coketown tutto è uguale, meccanico, senza vita.",
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
          domanda: "Perché i mattoni di Coketown non sono rossi?",
          opzioni: [
            "Perché il fumo e la cenere li hanno anneriti",
            "Perché sono stati dipinti di nero",
            "Perché sono vecchi",
          ],
          giusta: 0,
          spiegazione:
            '"Brick that would have been red if the smoke and ashes had allowed it".',
          rivedi: "FRASI 1–2: IL COLORE DELLA CITTÀ",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "A che cosa viene paragonato lo stantuffo della macchina a vapore?",
          opzioni: [
            "A un serpente",
            "Alla testa di un elefante in preda a una malinconica follia",
            "A un cuore che batte",
          ],
          giusta: 1,
          spiegazione:
            "È la similitudine più famosa del brano: la macchina diventa un animale malato.",
          rivedi: "FRASI 3–6: SERPENTI ED ELEFANTI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa vuole criticare Dickens?",
          opzioni: [
            "La bruttezza dei mattoni",
            "Il traffico delle grandi città",
            "Una società industriale che rende tutti uguali e senza vita",
          ],
          giusta: 2,
          spiegazione:
            "Le persone diventano ingranaggi della macchina: è la critica all'utilitarismo e al profitto.",
          rivedi: "LA CRITICA DI DICKENS",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola al suo significato.",
          coppie: [
            ["brick", "mattone"],
            ["chimney", "ciminiera"],
            ["dye", "tintura"],
            ["pavement", "marciapiede"],
            ["counterpart", "copia"],
          ],
          rivedi: "LE PAROLE DELLA FABBRICA",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Ricostruisci il condizionale della frase 1.",
          citazione:
            "brick that would have been red if the smoke and ashes had allowed it",
          parole: [
            "been",
            "had",
            "red",
            "if",
            "would",
            "allowed",
            "have",
            "it",
            "the",
            "smoke",
          ],
          soluzione: [
            "would",
            "have",
            "been",
            "red",
            "if",
            "the",
            "smoke",
            "had",
            "allowed",
            "it",
          ],
          spiegazione:
            "Third conditional: would have + participio, poi if + past perfect (lezione 41{1}).",
          rivedi: "FRASI 1–2: IL COLORE DELLA CITTÀ",
        },
        {
          tipo: "riordina",
          consegna: "Aggiungi il verbo sottinteso e riscrivi.",
          citazione: "and every year the counterpart of the last",
          parole: [
            "was",
            "counterpart",
            "every",
            "the",
            "year",
            "last",
            "the",
            "of",
          ],
          soluzione: [
            "every",
            "year",
            "was",
            "the",
            "counterpart",
            "of",
            "the",
            "last",
          ],
          spiegazione:
            "Dickens toglie was per non ripetere il verbo della frase prima.",
          rivedi: "FRASI 7–10: TUTTI UGUALI",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che tipo di condizionale c'è nella frase 1?",
          opzioni: [
            "Third conditional",
            "Zero conditional",
            "First conditional",
            "Second conditional",
          ],
          giusta: 0,
          spiegazione:
            "Would have been… if… had allowed: un'ipotesi irreale sul passato (lezione 41{1}).",
          rivedi: "FRASI 1–2: IL COLORE DELLA CITTÀ",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "per le quali ogni giorno era uguale a ieri".',
          prima: "to whom every day was the same",
          dopo: "yesterday",
          risposte: ["as"],
          spiegazione: "The same as = uguale a (lezione 26{6}).",
          rivedi: "FRASI 7–10: TUTTI UGUALI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "never got uncoiled"?',
          opzioni: [
            "Non riuscivano mai a uscire",
            "Non si srotolavano mai",
            "Non diventavano mai neri",
          ],
          giusta: 1,
          spiegazione:
            'Get + participio è un passivo informale: "non venivano mai srotolati".',
          rivedi: "FRASI 3–6: SERPENTI ED ELEFANTI",
        },
        {
          tipo: "sottotitolo",
          testo: "Stile e figure",
        },
        {
          tipo: "seleziona",
          consegna: 'Tocca tutte le volte che compare "same".',
          parole: [
            "at",
            "the",
            "same",
            "hours,",
            "with",
            "the",
            "same",
            "sound",
            "upon",
            "the",
            "same",
            "pavements,",
            "to",
            "do",
            "the",
            "same",
            "work",
          ],
          giuste: [2, 6, 10, 15],
          spiegazione:
            "Quattro volte in una sola frase: la ripetizione imita la monotonia della vita a Coketown.",
          rivedi: "LO STILE: LA RIPETIZIONE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["metaphor", "serpents of smoke"],
            ["simile", "like the head of an elephant"],
            ["onomatopoeia", "rattling"],
            ["anaphora", "It was a town of…"],
          ],
          rivedi: "RILEGGILO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Perché Dickens ripete tanto le stesse parole?",
          opzioni: [
            "Perché aveva poco vocabolario",
            "Per errore di stampa",
            "Per far sentire la monotonia della città nel ritmo della frase",
          ],
          giusta: 2,
          spiegazione:
            "Una città monotona descritta con una lingua monotona: la forma imita il contenuto.",
          rivedi: "LO STILE: LA RIPETIZIONE",
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
          consegna: "Traduci in italiano la frase 9.",
          testo:
            "who all went in and out at the same hours, with the same sound upon the same pavements, to do the same work,",
          soluzione:
            "che uscivano ed entravano tutti alle stesse ore, con lo stesso rumore sugli stessi marciapiedi, per fare lo stesso lavoro,",
          spiegazione:
            'Hai ripetuto "stesso / stesse" quattro volte? In italiano ripetere sembra un errore di stile, ma qui è proprio l\'effetto voluto.',
          rivedi: "FRASI 7–10: TUTTI UGUALI",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of how Dickens describes Coketown.",
          punti: [
            "the colours",
            "machines as animals",
            'the repetition of "the same"',
            "people and the critique of industrial society",
          ],
          modello:
            'Dickens describes Coketown as a town of "unnatural red and black", where even the bricks have lost their colour because of smoke. The machines are compared to animals: smoke forms "interminable serpents" and the piston moves "like the head of an elephant in a state of melancholy madness". The repetition of "like one another" and "the same" makes the style as monotonous as the town itself. When people finally appear, they have no names and do "the same work" every day. Through these images Dickens criticises an industrial society that turns human beings into parts of a machine.',
          spiegazione:
            "Hai citato il testo e usato termini come simile, metaphor e repetition? Sono le cose che un esaminatore cerca.",
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
