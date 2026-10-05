import { Lezione } from "@/types/lezione";

// Samuel Taylor Coleridge, The Rime of the Ancient Mariner (versione del
// 1834): l'ultima strofa della parte I e sei strofe della parte II,
// pubblico dominio
const BALLATA = [
  '"God save thee, ancient Mariner!',
  "From the fiends, that plague thee thus! —",
  "Why look'st thou so?\" — With my cross-bow",
  "I shot the ALBATROSS.",
  "The fair breeze blew, the white foam flew,",
  "The furrow followed free;",
  "We were the first that ever burst",
  "Into that silent sea.",
  "Down dropt the breeze, the sails dropt down,",
  "'Twas sad as sad could be;",
  "And we did speak only to break",
  "The silence of the sea!",
  "All in a hot and copper sky,",
  "The bloody Sun, at noon,",
  "Right up above the mast did stand,",
  "No bigger than the Moon.",
  "Day after day, day after day,",
  "We stuck, nor breath nor motion;",
  "As idle as a painted ship",
  "Upon a painted ocean.",
  "Water, water, every where,",
  "And all the boards did shrink;",
  "Water, water, every where,",
  "Nor any drop to drink.",
  "The very deep did rot: O Christ!",
  "That ever this should be!",
  "Yea, slimy things did crawl with legs",
  "Upon the slimy sea.",
];

const BALLATA_TRADUZIONE = [
  "«Dio ti salvi, vecchio marinaio,",
  "dai demoni che così ti tormentano!",
  "Perché hai quello sguardo?» «Con la mia balestra",
  "uccisi l'ALBATRO.»",
  "La bella brezza soffiava, la bianca schiuma volava,",
  "la scia ci seguiva libera;",
  "eravamo i primi che mai fossero entrati",
  "in quel mare silenzioso.",
  "Cadde la brezza, le vele si afflosciarono,",
  "era triste quanto più non si poteva;",
  "e parlavamo solo per rompere",
  "il silenzio del mare!",
  "In un cielo caldo e color rame,",
  "il sole sanguigno, a mezzogiorno,",
  "stava proprio sopra l'albero maestro,",
  "non più grande della luna.",
  "Giorno dopo giorno, giorno dopo giorno,",
  "restammo bloccati, senza un soffio né un movimento;",
  "immobili come una nave dipinta",
  "su un oceano dipinto.",
  "Acqua, acqua, ovunque,",
  "e tutte le assi si ritiravano;",
  "acqua, acqua, ovunque,",
  "e neanche una goccia da bere.",
  "Perfino il mare marciva: o Cristo!",
  "Che questo potesse mai accadere!",
  "Sì, creature viscide strisciavano con le loro zampe",
  "sul mare viscido.",
];

export const ancientMariner: Lezione = {
  id: "ancient-mariner",
  titolo: "The Rime of the Ancient Mariner",
  descrizione: "L'albatro, la bonaccia e la sete: lettura, analisi ed esercizi",
  chiavi: "Coleridge, Romanticismo, ballata, soprannaturale, albatro",
  livello: "Letteratura",
  sottotitolo: "Modulo C5 · Samuel Taylor Coleridge",
  citazione: {
    testo: "Water, water, every where, / Nor any drop to drink.",
    fonte: "Samuel Taylor Coleridge, The Rime of the Ancient Mariner (1798)",
    traduzione: "Acqua, acqua, ovunque, e neanche una goccia da bere.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Sono sette strofe di un lungo poema: l'ultima della prima parte, in cui il marinaio confessa la sua colpa, e sei della seconda, che ne raccontano le conseguenze. Leggile tutte una volta, ad alta voce: è una ballata, fatta per essere ascoltata. Nei riquadri successivi le analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: BALLATA,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Samuel Taylor Coleridge (1772–1834) pubblicò la Ballata del vecchio marinaio nel 1798, nelle Lyrical Ballads scritte insieme a Wordsworth (lezione C5{6}). Wordsworth avrebbe scritto della natura e della vita quotidiana; Coleridge del soprannaturale, rendendolo credibile.",
        },
        {
          tipo: "testo",
          testo:
            "La cornice: un vecchio marinaio ferma un invitato che sta andando a un matrimonio e lo costringe ad ascoltare la sua storia. Durante un viaggio verso il Polo Sud, un albatro, uccello di buon augurio, aveva guidato la nave fuori dai ghiacci. E il marinaio, senza un motivo, lo aveva ucciso con la balestra.",
        },
        {
          tipo: "tabella",
          righe: [
            ["parte I", "la nave, i ghiacci, l'albatro; l'uccisione"],
            ["parte II", "la bonaccia e la sete: la natura si vendica"],
            [
              "parti III–VII",
              "la morte dell'equipaggio, il pentimento, il ritorno a casa",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Coleridge parlava di "willing suspension of disbelief": il lettore sospende volontariamente l\'incredulità, e accetta il soprannaturale come vero mentre legge. È la stessa cosa che facciamo oggi al cinema.',
        },
      ],
    },
    {
      titolo: "L'INGLESE DELLA BALLATA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Coleridge imita apposta le vecchie ballate popolari, con parole e forme antiche:",
        },
        {
          tipo: "tabella",
          righe: [
            ["thee / thou look'st", "you / you look: il tu antico"],
            ["fiends", "demoni"],
            ["plague", "tormentare (come la peste, plague)"],
            ["dropt", "dropped: la grafia antica del passato"],
            ["'twas", "it was"],
            [
              "did speak, did stand, did shrink",
              "spoke, stood, shrank: did + verbo base al posto del passato",
            ],
            ["nor… nor", "né… né"],
            ["yea", "yes: sì, certo"],
            ["every where", "everywhere"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Did + verbo base in una frase affermativa oggi si usa solo per dare enfasi (I did tell you!, lezione 53{6}). Nella ballata è un modo antico di fare il passato, comodo per avere una sillaba in più nel verso.",
        },
      ],
    },
    {
      titolo: "VERSI 1–4: LA CONFESSIONE",
      blocchi: [
        {
          tipo: "brano",
          righe: BALLATA,
          traduzione: BALLATA_TRADUZIONE,
          evidenzia: [0, 3],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "L'invitato vede il volto del marinaio sconvolto e gli chiede che cosa lo tormenta. La risposta arriva secca, nell'ultimo verso: ho ucciso l'albatro. La parola ALBATROSS è scritta tutta in maiuscolo, come un grido, o come un'accusa.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "God save thee",
              it: "un augurio con il congiuntivo, senza la -s: come God save the King",
            },
            {
              en: "the fiends, that plague thee thus",
              it: "relativa con that (lezione 44{1})",
            },
            {
              en: "Why look'st thou so?",
              it: "→ Why do you look like that?: domanda antica, senza do",
            },
            {
              en: "With my cross-bow / I shot the ALBATROSS",
              it: "past simple irregolare: shoot / shot / shot (lezione 23{2})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Look so qui significa "avere quell\'aspetto". Ricorda che look + aggettivo vuol dire "sembrare": You look tired (lezione 33{6}).',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "climax",
              "la risposta arriva solo nell'ultimo verso, e nell'ultima parola",
            ],
            [
              "typographical emphasis (enfasi tipografica)",
              "ALBATROSS in maiuscolo: l'uccello diventa un simbolo",
            ],
          ],
        },
      ],
    },
    {
      titolo: "IL METRO: LA STROFA DELLA BALLATA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il poema usa la strofa delle ballate popolari (ballad stanza): quattro versi, che alternano quattro e tre accenti. Rimano solo il secondo e il quarto verso: lo schema è ABCB.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "the FAIR breeze BLEW, the WHITE foam FLEW,",
              it: "quattro accenti",
            },
            { en: "the FUR-row FOL-lowed FREE;", it: "tre accenti" },
            { en: "we WERE the FIRST that EV-er BURST", it: "quattro accenti" },
            {
              en: "in-TO that SI-lent SEA.",
              it: "tre accenti: free / sea rimano",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Coleridge aggiunge spesso una rima interna, dentro lo stesso verso: blew / flew, first / burst, dropt / dropt. Così il verso suona come una canzone, ed è facile da ricordare.",
        },
        {
          tipo: "nota",
          testo:
            "È lo stesso metro di molti inni religiosi e canzoni popolari inglesi. In Italia lo conosciamo poco, ma è il ritmo naturale delle canzoni in inglese.",
        },
      ],
    },
    {
      titolo: "VERSI 5–12: IL MARE SILENZIOSO",
      blocchi: [
        {
          tipo: "brano",
          righe: BALLATA,
          traduzione: BALLATA_TRADUZIONE,
          evidenzia: [4, 11],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "All'inizio il viaggio va benissimo: il vento soffia, la nave corre, i marinai sono i primi a entrare in un oceano sconosciuto (il Pacifico). Poi, di colpo, il vento cade e le vele si afflosciano. Nel silenzio totale, i marinai parlano solo per sentire una voce.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "We were the first that ever burst / Into that silent sea",
              it: 'the first + relativa: i primi che (lezione 44{1}); ever rafforza: "che mai"',
            },
            {
              en: "Down dropt the breeze",
              it: "→ the breeze dropped down: l'avverbio in testa e il verbo prima del soggetto, per rendere la caduta improvvisa",
            },
            {
              en: "'Twas sad as sad could be",
              it: '"era triste quanto più non si poteva": as… as con lo stesso aggettivo (lezione 26{6})',
            },
            {
              en: "we did speak only to break / The silence",
              it: "did speak = spoke; to break = per rompere: to indica lo scopo (lezione 48{7})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Burst (irrompere) ha il passato uguale al presente: burst / burst / burst, come put e cut (lezione 23{2}).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "alliteration (allitterazione)",
              "fair… foam… flew… furrow… followed free: sei F che imitano il vento nelle vele",
            ],
            ["internal rhyme (rima interna)", "blew / flew, first / burst"],
            [
              "chiasmus (chiasmo)",
              "Down dropt the breeze, the sails dropt down: le parole si ripetono in ordine inverso",
            ],
            [
              "antithesis (antitesi)",
              "la corsa felice della strofa 2 contro la bonaccia della strofa 3",
            ],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 13–20: LA BONACCIA",
      blocchi: [
        {
          tipo: "brano",
          righe: BALLATA,
          traduzione: BALLATA_TRADUZIONE,
          evidenzia: [12, 19],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Il cielo è rovente, color rame; a mezzogiorno il sole è rosso come il sangue, proprio sopra l'albero della nave, e sembra piccolo come la luna. Giorno dopo giorno la nave resta immobile, senza un filo di vento, come una nave dipinta su un mare dipinto.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Right up above the mast did stand",
              it: "→ stood right above the mast: il complemento prima del verbo",
            },
            {
              en: "No bigger than the Moon",
              it: "comparativo con than: no bigger = non più grande (lezione 26{5})",
            },
            {
              en: "We stuck, nor breath nor motion",
              it: "stuck: passato di stick (restare bloccati); nor… nor = né… né, senza verbo",
            },
            {
              en: "As idle as a painted ship",
              it: 'as + aggettivo + as: "immobile come" (lezione 26{6})',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Painted è un participio passato usato come aggettivo: a painted ship, una nave dipinta. Molti participi funzionano così: a broken window, a lost child (lezione 22{1}).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "imagery (immagini)",
              "hot and copper sky, the bloody Sun: colori violenti, come in un incubo",
            ],
            [
              "repetition (ripetizione)",
              "Day after day, day after day: il tempo che non passa mai",
            ],
            [
              "simile (similitudine)",
              "As idle as a painted ship / Upon a painted ocean",
            ],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 21–28: ACQUA, ACQUA OVUNQUE",
      blocchi: [
        {
          tipo: "brano",
          righe: BALLATA,
          traduzione: BALLATA_TRADUZIONE,
          evidenzia: [20, 27],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Il paradosso più famoso del poema: intorno c'è solo acqua, ma è salata, e non c'è una goccia da bere. Il legno della nave si ritira per il caldo. Poi l'incubo: il mare stesso sembra marcire, e sulla sua superficie viscida strisciano creature con le zampe. La natura offesa si sta vendicando.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "And all the boards did shrink",
              it: "did shrink = shrank: shrink / shrank / shrunk",
            },
            {
              en: "Nor any drop to drink",
              it: "any in una frase negativa (lezione 18{1}); to drink = da bere, infinito dopo un nome",
            },
            {
              en: "The very deep did rot",
              it: 'the very + nome = "perfino, proprio": perfino il mare marciva',
            },
            {
              en: "That ever this should be!",
              it: 'esclamazione con should: "che questo potesse mai accadere!"',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            '"Water, water, everywhere, nor any drop to drink" è diventato un modo di dire: si usa quando c\'è tantissimo di qualcosa, ma niente di utile. Spesso viene citato in modo sbagliato: "and not a drop to drink".',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["paradox (paradosso)", "acqua ovunque, e niente da bere"],
            [
              "repetition (ripetizione)",
              "Water, water, every where (due volte)",
            ],
            ["apostrophe (apostrofe)", "O Christ!: il marinaio invoca Cristo"],
            [
              "repetition (ripetizione)",
              "slimy things… slimy sea: il disgusto si ripete",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LA COLPA E LA NATURA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutte le strofe, guarda la logica del racconto. Uccidere l'albatro sembra un gesto piccolo e senza motivo; ma tutta la natura reagisce: il vento, il sole, il mare. È la visione romantica della natura come un tutto vivo e sacro, in cui ogni creatura è legata alle altre.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "la colpa (vv. 1–4)",
              "un gesto gratuito: uccidere un essere innocente",
            ],
            [
              "l'illusione (vv. 5–8)",
              "per un po' sembra che non succeda nulla",
            ],
            [
              "la punizione (vv. 9–28)",
              "il vento muore, il sole brucia, l'acqua diventa inutile",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            'Più avanti, i compagni appenderanno l\'albatro morto al collo del marinaio, come una croce. Alla fine del poema il marinaio, salvo ma condannato a raccontare per sempre la sua storia, darà la lezione: "He prayeth best, who loveth best / All things both great and small": prega meglio chi ama di più tutte le creature, grandi e piccole.',
        },
        {
          tipo: "nota",
          testo:
            "Anche questa immagine è entrata nella lingua: an albatross around one's neck è un peso, una colpa che non ci si riesce a togliere di dosso.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato strofa per strofa, rileggi tutto il brano con la traduzione. Senti come il ritmo allegro della ballata contrasta con l'orrore della storia. Sotto trovi il riepilogo delle rime e delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: BALLATA,
          traduzione: BALLATA_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "testo",
          testo:
            "Ogni strofa segue lo schema ABCB (rimano il secondo e il quarto verso), con molte rime interne: blew / flew, first / burst.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["climax", "I shot the ALBATROSS (v. 4)"],
            [
              "alliteration (allitterazione)",
              "fair… foam… flew… furrow… followed free (vv. 5–6)",
            ],
            [
              "internal rhyme (rima interna)",
              "blew / flew (v. 5), first / burst (v. 7)",
            ],
            [
              "chiasmus (chiasmo)",
              "Down dropt the breeze, the sails dropt down (v. 9)",
            ],
            ["simile (similitudine)", "As idle as a painted ship (v. 19)"],
            [
              "paradox (paradosso)",
              "Water, water, every where, / Nor any drop to drink (vv. 21–24)",
            ],
            [
              "repetition (ripetizione)",
              "Day after day (v. 17), slimy… slimy (vv. 27–28)",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il contrasto tra una forma semplice, da canzone, e un contenuto da incubo è ciò che rende il poema indimenticabile.",
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
          domanda: "Qual è la colpa del marinaio?",
          opzioni: [
            "Ha ucciso l'albatro con la balestra",
            "Ha rubato l'acqua dei compagni",
            "Ha fatto affondare la nave",
          ],
          giusta: 0,
          spiegazione: '"With my cross-bow / I shot the ALBATROSS".',
          rivedi: "VERSI 1–4: LA CONFESSIONE",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Perché i marinai non possono bere, anche se sono circondati dall'acqua?",
          opzioni: [
            "Perché è troppo fredda",
            "Perché l'acqua del mare è salata",
            "Perché il capitano lo vieta",
          ],
          giusta: 1,
          spiegazione:
            "È il paradosso del poema: acqua ovunque, ma è acqua di mare, e non si può bere.",
          rivedi: "VERSI 21–28: ACQUA, ACQUA OVUNQUE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa vuol dire la bonaccia, nel senso del poema?",
          opzioni: [
            "È solo sfortuna",
            "È una festa per i marinai",
            "È la punizione della natura per l'uccisione dell'albatro",
          ],
          giusta: 2,
          spiegazione:
            "Il vento, il sole e il mare reagiscono alla colpa: la natura è un tutto vivo e sacro.",
          rivedi: "LA COLPA E LA NATURA",
        },
        {
          tipo: "sottotitolo",
          testo: "L'inglese della ballata",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni forma antica a quella moderna.",
          coppie: [
            ["'twas", "it was"],
            ["dropt", "dropped"],
            ["did speak", "spoke"],
            ["yea", "yes"],
            ["did shrink", "shrank"],
          ],
          rivedi: "L'INGLESE DELLA BALLATA",
        },
        {
          tipo: "completa",
          consegna: "Scrivi il passato di shoot.",
          prima: "With my cross-bow I",
          dopo: "the albatross.",
          risposte: ["shot"],
          spiegazione: "Shoot / shot / shot: verbo irregolare (lezione 23{2}).",
          rivedi: "VERSI 1–4: LA CONFESSIONE",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi nell'ordine normale.",
          citazione: "Down dropt the breeze",
          parole: ["dropped", "the", "down", "breeze"],
          soluzione: ["the", "breeze", "dropped", "down"],
          spiegazione:
            "Coleridge mette down in testa e il verbo prima del soggetto: la caduta del vento diventa improvvisa.",
          rivedi: "VERSI 5–12: IL MARE SILENZIOSO",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi in inglese moderno.",
          citazione: "Right up above the mast did stand",
          parole: ["stood", "above", "sun", "the", "the", "mast"],
          soluzione: ["the", "sun", "stood", "above", "the", "mast"],
          spiegazione:
            "Did stand = stood; il soggetto è the Sun del verso prima.",
          rivedi: "VERSI 13–20: LA BONACCIA",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Quale struttura c\'è in "As idle as a painted ship"?',
          opzioni: [
            "Un paragone con as… as",
            "Un comparativo con than",
            "Un superlativo",
            "Un passivo",
          ],
          giusta: 0,
          spiegazione: 'As + aggettivo + as: "immobile come" (lezione 26{6}).',
          rivedi: "VERSI 13–20: LA BONACCIA",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Che cosa indica "to" in "we did speak only to break the silence"?',
          opzioni: [
            "Una direzione",
            "Uno scopo: per rompere il silenzio",
            "Un futuro",
          ],
          giusta: 1,
          spiegazione:
            "To + verbo indica il motivo per cui si fa qualcosa (lezione 48{7}).",
          rivedi: "VERSI 5–12: IL MARE SILENZIOSO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "the very deep"?',
          citazione: "The very deep did rot",
          opzioni: [
            "Il mare molto profondo",
            "Il mare vero",
            "Perfino il mare",
          ],
          giusta: 2,
          spiegazione:
            'The very + nome = "proprio, perfino": perfino il mare marciva.',
          rivedi: "VERSI 21–28: ACQUA, ACQUA OVUNQUE",
        },
        {
          tipo: "sottotitolo",
          testo: "Metro e figure",
        },
        {
          tipo: "seleziona",
          consegna:
            "Tocca le due parole che rimano tra loro dentro il verso 5 (rima interna).",
          parole: [
            "The",
            "fair",
            "breeze",
            "blew,",
            "the",
            "white",
            "foam",
            "flew,",
          ],
          giuste: [3, 7],
          spiegazione:
            "Blew e flew rimano dentro lo stesso verso: è una rima interna.",
          rivedi: "IL METRO: LA STROFA DELLA BALLATA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è lo schema delle rime della strofa della ballata?",
          opzioni: ["ABCB", "AABB", "ABAB", "ABBA"],
          giusta: 0,
          spiegazione: "Rimano solo il secondo e il quarto verso: ABCB.",
          rivedi: "IL METRO: LA STROFA DELLA BALLATA",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["alliteration", "the furrow followed free"],
            ["chiasmus", "Down dropt the breeze, the sails dropt down"],
            ["simile", "as idle as a painted ship"],
            ["paradox", "water every where, nor any drop to drink"],
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
          consegna:
            "Traduci in italiano la strofa della bonaccia (versi 17–20).",
          testo:
            "Day after day, day after day,\nWe stuck, nor breath nor motion;\nAs idle as a painted ship\nUpon a painted ocean.",
          soluzione:
            "Giorno dopo giorno, giorno dopo giorno, restammo fermi, senza un soffio né un movimento; immobili come una nave dipinta su un oceano dipinto.",
          spiegazione:
            'Hai ripetuto "dipinta / dipinto"? La ripetizione di painted è essenziale: la nave e il mare sembrano un quadro, fuori dal tempo.',
          rivedi: "VERSI 13–20: LA BONACCIA",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of how nature punishes the Mariner.",
          punti: [
            "the killing of the albatross",
            "the contrast between stanzas",
            "one simile or paradox",
            "the Romantic view of nature",
          ],
          modello:
            'The Mariner\'s crime is described in one short line: "I shot the ALBATROSS", with the bird\'s name in capital letters. At first the voyage continues happily, with alliteration that imitates the wind: "The fair breeze blew, the white foam flew". Then suddenly the breeze drops and the ship becomes "as idle as a painted ship / Upon a painted ocean". The sailors suffer a terrible paradox: "Water, water, every where, / Nor any drop to drink". For Coleridge, nature is a living whole, and the killing of an innocent creature disturbs its balance.',
          spiegazione:
            "Hai citato il testo e usato termini come alliteration, simile e paradox? Sono le cose che un esaminatore cerca.",
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
