import { Lezione } from "@/types/lezione";

// William Blake, The Tyger, da Songs of Experience (1794),
// pubblico dominio (grafia originale di Blake)
const TYGER = [
  "Tyger Tyger, burning bright,",
  "In the forests of the night;",
  "What immortal hand or eye,",
  "Could frame thy fearful symmetry?",
  "In what distant deeps or skies.",
  "Burnt the fire of thine eyes?",
  "On what wings dare he aspire?",
  "What the hand, dare seize the fire?",
  "And what shoulder, & what art,",
  "Could twist the sinews of thy heart?",
  "And when thy heart began to beat,",
  "What dread hand? & what dread feet?",
  "What the hammer? what the chain,",
  "In what furnace was thy brain?",
  "What the anvil? what dread grasp,",
  "Dare its deadly terrors clasp!",
  "When the stars threw down their spears",
  "And water'd heaven with their tears:",
  "Did he smile his work to see?",
  "Did he who made the Lamb make thee?",
  "Tyger Tyger burning bright,",
  "In the forests of the night:",
  "What immortal hand or eye,",
  "Dare frame thy fearful symmetry?",
];

const TYGER_TRADUZIONE = [
  "Tigre, tigre, che bruci luminosa",
  "nelle foreste della notte,",
  "quale mano o quale occhio immortale",
  "poté plasmare la tua terribile simmetria?",
  "In quali profondità lontane o in quali cieli",
  "bruciò il fuoco dei tuoi occhi?",
  "Su quali ali osa egli innalzarsi?",
  "Quale mano osa afferrare il fuoco?",
  "E quale spalla, e quale arte",
  "poté torcere i muscoli del tuo cuore?",
  "E quando il tuo cuore cominciò a battere,",
  "quale mano tremenda? E quali piedi tremendi?",
  "Quale il martello? Quale la catena?",
  "In quale fornace era il tuo cervello?",
  "Quale l'incudine? Quale stretta tremenda",
  "osa serrarne i terrori mortali?",
  "Quando le stelle scagliarono giù le loro lance",
  "e bagnarono il cielo con le loro lacrime,",
  "sorrise egli nel vedere la sua opera?",
  "Colui che creò l'Agnello creò anche te?",
  "Tigre, tigre, che bruci luminosa",
  "nelle foreste della notte,",
  "quale mano o quale occhio immortale",
  "osa plasmare la tua terribile simmetria?",
];

// The Lamb, da Songs of Innocence (1789), pubblico dominio
const LAMB = [
  "Little Lamb who made thee",
  "Dost thou know who made thee",
  "Gave thee life & bid thee feed.",
  "By the stream & o'er the mead;",
  "Gave thee clothing of delight,",
  "Softest clothing wooly bright;",
  "Gave thee such a tender voice,",
  "Making all the vales rejoice!",
  "Little Lamb who made thee",
  "Dost thou know who made thee",
  "Little Lamb I'll tell thee,",
  "Little Lamb I'll tell thee!",
  "He is called by thy name,",
  "For he calls himself a Lamb:",
  "He is meek & he is mild,",
  "He became a little child:",
  "I a child & thou a lamb,",
  "We are called by his name.",
  "Little Lamb God bless thee.",
  "Little Lamb God bless thee.",
];

const LAMB_TRADUZIONE = [
  "Agnellino, chi ti ha creato?",
  "Lo sai chi ti ha creato,",
  "chi ti ha dato la vita e ti ha fatto pascolare",
  "lungo il ruscello e sul prato;",
  "chi ti ha dato una veste di delizia,",
  "la più morbida veste di lana splendente;",
  "chi ti ha dato una voce così tenera",
  "che fa gioire tutte le valli?",
  "Agnellino, chi ti ha creato?",
  "Lo sai chi ti ha creato?",
  "Agnellino, te lo dirò io,",
  "agnellino, te lo dirò io!",
  "Egli porta il tuo nome,",
  "perché lui stesso si chiama Agnello:",
  "è umile ed è mite,",
  "si è fatto bambino:",
  "io bambino e tu agnello,",
  "portiamo il suo nome.",
  "Agnellino, Dio ti benedica.",
  "Agnellino, Dio ti benedica.",
];

export const theTyger: Lezione = {
  id: "the-tyger",
  titolo: "The Tyger",
  descrizione:
    "La tigre e l'agnello: chi ha creato il male? Lettura, analisi ed esercizi",
  chiavi:
    "Blake, Romanticismo, Songs of Innocence and of Experience, tetrametro trocaico",
  livello: "Letteratura",
  sottotitolo: "Modulo C5 · William Blake",
  citazione: {
    testo: "Did he who made the Lamb make thee?",
    fonte: "William Blake, The Tyger (1794)",
    traduzione: "Colui che creò l'Agnello creò anche te?",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La poesia è quasi tutta fatta di domande. Leggila una volta ad alta voce: senti il ritmo martellante. Nei riquadri successivi la analizziamo strofa per strofa; la traduzione completa la trovi alla fine. Blake scriveva Tyger con la y e usava & per and: abbiamo lasciato la sua grafia.",
        },
        {
          tipo: "brano",
          righe: TYGER,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "William Blake (1757–1827) fu poeta, pittore e incisore. Non trovò un editore: stampava da solo i suoi libri con una tecnica inventata da lui, incidendo insieme versi e immagini su lastre di rame e colorando a mano ogni copia (lezione C5{4}).",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "Songs of Innocence (1789)",
              "lo sguardo del bambino: un mondo protetto da Dio, pieno di gioia",
            ],
            [
              "Songs of Experience (1794)",
              "lo sguardo dell'adulto: ingiustizia, sfruttamento, violenza",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            'Le due raccolte vanno lette insieme: molte poesie di Innocence hanno una "gemella" in Experience. The Tyger (Experience) è la risposta a The Lamb (Innocence). L\'agnello è mite e innocente; la tigre è bellissima e terribile. La domanda è: le ha create lo stesso Dio?',
        },
        {
          tipo: "nota",
          testo:
            "Blake scrive negli anni della Rivoluzione industriale (lezione C5{2}): martelli, catene, incudini e fornaci, nella poesia, sono gli strumenti di un fabbro, ma anche delle nuove fabbriche di Londra.",
        },
      ],
    },
    {
      titolo: "L'INGLESE DI BLAKE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Prima di iniziare, le forme antiche e le parole difficili:",
        },
        {
          tipo: "tabella",
          righe: [
            ["thy / thine", "your: tuo (thine davanti a vocale: thine eyes)"],
            ["thee", "you (complemento)"],
            ["frame", "costruire, plasmare"],
            ["fearful", "terribile, che fa paura"],
            ["deeps", "le profondità (del mare)"],
            ["aspire", "innalzarsi, puntare in alto"],
            ["seize / clasp / grasp", "afferrare / stringere / la stretta"],
            ["sinews", "tendini, muscoli"],
            ["dread", "tremendo, terribile"],
            ["anvil", "incudine"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Dare qui è un verbo modale: dare he aspire? = osa innalzarsi?. Come gli altri modali, vuole il verbo base senza to. Lo usi ancora oggi in How dare you! (Come osi!).",
        },
      ],
    },
    {
      titolo: "STROFA 1: LA DOMANDA",
      blocchi: [
        {
          tipo: "brano",
          righe: TYGER,
          traduzione: TYGER_TRADUZIONE,
          evidenzia: [0, 3],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Il poeta chiama la tigre, che "brucia" luminosa nel buio della foresta, come una fiamma. Poi pone la domanda che tornerà in tutta la poesia: quale mano, quale occhio immortale ha potuto creare una bellezza così perfetta e così spaventosa?',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Tyger Tyger, burning bright",
              it: 'vocativo + -ing: "tu che bruci"; bright è un aggettivo usato come avverbio',
            },
            {
              en: "What immortal hand or eye / Could frame…?",
              it: "domanda sul soggetto: what + nome fa da soggetto, quindi niente did (lezione 24{5})",
            },
            {
              en: "Could frame thy fearful symmetry",
              it: 'could = possibilità al passato: "ha potuto" (lezione 25{5})',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il verbo burn ha due passati: burned e burnt. Blake usa burnt (v. 6), più comune nell'inglese britannico (lezione 22{3}).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "apostrophe (apostrofe)",
              "Tyger Tyger: il poeta si rivolge alla tigre",
            ],
            [
              "metaphor (metafora)",
              "burning bright: la tigre è un fuoco nella notte",
            ],
            [
              "alliteration (allitterazione)",
              "frame thy fearful: tre F; burning bright: due B",
            ],
          ],
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "tabella",
          righe: [
            ["bright / night", "versi 1 e 2: rima baciata"],
            [
              "eye / symmetry",
              "versi 3 e 4: rima imperfetta, per l'occhio più che per l'orecchio",
            ],
          ],
        },
      ],
    },
    {
      titolo: "IL METRO: IL TETRAMETRO TROCAICO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il ritmo della poesia è il contrario di quello di Shakespeare. Il trocheo è un piede DUM-da: prima la sillaba forte, poi la debole. I versi hanno quattro accenti, e l'ultima sillaba debole viene tolta: il verso finisce su un colpo forte.",
        },
        {
          tipo: "tabella",
          righe: [
            ["giambo (iamb)", "da-DUM: il ritmo del Sonetto 18"],
            ["trocheo (trochee)", "DUM-da: il ritmo di The Tyger"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "TY-ger | TY-ger, | BURN-ing | BRIGHT",
              it: "DUM-da / DUM-da / DUM-da / DUM: sette sillabe, quattro accenti",
            },
            { en: "IN the | FOR-ests | OF the | NIGHT", it: "stesso schema" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Ascolta il ritmo: è come un martello che batte sull'incudine. Il suono della poesia imita il lavoro del fabbro che, nelle strofe 3 e 4, forgia la tigre.",
        },
      ],
    },
    {
      titolo: "STROFA 2: IL FUOCO",
      blocchi: [
        {
          tipo: "brano",
          righe: TYGER,
          traduzione: TYGER_TRADUZIONE,
          evidenzia: [4, 7],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Da dove viene il fuoco degli occhi della tigre: dagli abissi o dal cielo, cioè dall'inferno o dal paradiso? Il creatore che lo ha preso deve aver volato in alto e afferrato il fuoco con la mano, come Prometeo che lo rubò agli dèi, o come Icaro che volò troppo vicino al sole.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Burnt the fire of thine eyes?",
              it: "→ did the fire of your eyes burn? Il verbo va prima del soggetto, senza did",
            },
            {
              en: "On what wings dare he aspire?",
              it: "dare + verbo base, senza do e senza to: dare è un modale",
            },
            {
              en: "What the hand, dare seize the fire?",
              it: "→ what is the hand that dares to seize the fire?: una domanda spezzata, senza verbo principale",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Thine al posto di thy davanti a vocale (thine eyes), come an al posto di a: per non far incontrare due vocali (lezione 3{2}).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "allusion (allusione)",
              "On what wings dare he aspire? / seize the fire: rimanda ai miti di Icaro e Prometeo",
            ],
            [
              "antithesis (antitesi)",
              "deeps or skies: le profondità contro i cieli, l'inferno contro il paradiso",
            ],
          ],
        },
      ],
    },
    {
      titolo: "STROFE 3–4: IL FABBRO",
      blocchi: [
        {
          tipo: "brano",
          righe: TYGER,
          traduzione: TYGER_TRADUZIONE,
          evidenzia: [8, 15],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Il creatore diventa un fabbro gigantesco: con la forza delle spalle torce i muscoli del cuore della tigre; quando il cuore comincia a battere, che mani e che piedi terribili servono per tenerla? Martello, catena, fornace, incudine: la tigre viene forgiata come un oggetto di metallo.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "what shoulder, & what art, / Could twist the sinews…?",
              it: "di nuovo what + nome come soggetto: niente did",
            },
            {
              en: "when thy heart began to beat",
              it: "begin to + verbo; began è il passato irregolare (lezione 23{2})",
            },
            {
              en: "What the hammer? what the chain",
              it: "domande senza verbo: il ritmo diventa sempre più rapido",
            },
            {
              en: "what dread grasp, / Dare its deadly terrors clasp!",
              it: "→ what terrible grip dares to clasp its deadly terrors?: l'oggetto prima del verbo",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Le frasi senza verbo (What the hammer?) sono come colpi di martello: brevi, uno dopo l'altro. La grammatica spezzata imita il lavoro della forgia e l'emozione di chi guarda.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "extended metaphor (metafora continuata)",
              "Dio come un fabbro: hammer, chain, furnace, anvil",
            ],
            [
              "anaphora (anafora)",
              "What… what… what…: ogni verso ripete la domanda",
            ],
            [
              "alliteration (allitterazione)",
              "dread… deadly: due D minacciose",
            ],
          ],
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "tabella",
          righe: [
            ["art / heart, beat / feet", "strofa 3"],
            ["chain / brain, grasp / clasp", "strofa 4"],
          ],
        },
      ],
    },
    {
      titolo: "STROFA 5: L'AGNELLO",
      blocchi: [
        {
          tipo: "brano",
          righe: TYGER,
          traduzione: TYGER_TRADUZIONE,
          evidenzia: [16, 19],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Quando le stelle gettarono le loro lance e piansero (forse gli angeli ribelli sconfitti, forse il giorno della creazione), il creatore sorrise guardando la sua opera? E soprattutto: colui che ha creato l'agnello, mite e innocente, ha creato anche te, la tigre?",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "When the stars threw down their spears",
              it: "threw: passato irregolare di throw (lezione 23{2}); throw down = gettare a terra",
            },
            {
              en: "Did he smile his work to see?",
              it: "→ did he smile to see his work?: domanda con did (lezione 24{3}); l'oggetto prima dell'infinito, per la rima",
            },
            {
              en: "Did he who made the Lamb make thee?",
              it: "he who = colui che (lezione 44{2}); did + verbo base",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Qui, per la prima volta, le domande usano did come l'inglese moderno: il tono si fa più semplice e diretto, perché arriva la domanda centrale.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "personification (personificazione)",
              "the stars threw down their spears… with their tears: le stelle combattono e piangono",
            ],
            [
              "antithesis (antitesi)",
              "the Lamb / thee: l'innocenza contro la ferocia",
            ],
            [
              "rhetorical question (domanda retorica)",
              "Did he who made the Lamb make thee?: la domanda resta senza risposta",
            ],
          ],
        },
      ],
    },
    {
      titolo: "STROFA 6: COULD DIVENTA DARE",
      blocchi: [
        {
          tipo: "brano",
          righe: TYGER,
          traduzione: TYGER_TRADUZIONE,
          evidenzia: [20, 23],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'L\'ultima strofa ripete la prima, con una sola parola cambiata: could diventa dare. All\'inizio la domanda era chi "poteva" creare la tigre, una questione di forza; ora è chi "osa" crearla, una questione di audacia, quasi di sfida. Dopo tutte quelle domande, la creazione della tigre sembra un atto temerario.',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "could frame (v. 4)",
              "capacità, possibilità: chi ha potuto (lezione 25{5})",
            ],
            ["dare frame (v. 24)", "coraggio, audacia: chi osa"],
          ],
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "ring composition (struttura ad anello)",
              "la poesia finisce come comincia, ma con una differenza che cambia tutto",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LA TIGRE E L'AGNELLO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora leggi la poesia gemella, The Lamb, dai Songs of Innocence. Qui un bambino fa domande a un agnello, e sa rispondere: ti ha creato Dio, che si chiama Agnello anche lui (Gesù, l'Agnello di Dio).",
        },
        {
          tipo: "brano",
          righe: LAMB,
          traduzione: LAMB_TRADUZIONE,
        },
        {
          tipo: "tabella",
          righe: [
            [
              "The Lamb (Innocence)",
              "domande con risposta; tono dolce; il creatore è un padre buono",
            ],
            [
              "The Tyger (Experience)",
              "domande senza risposta; tono terribile; il creatore è un fabbro misterioso",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Blake non sceglie tra le due: le tiene insieme. In un'altra opera scrisse: \"Without Contraries is no progression\", senza contrari non c'è progresso. Il mondo ha bisogno della tigre e dell'agnello, dell'innocenza e dell'esperienza.",
        },
        {
          tipo: "nota",
          testo:
            "Nota la grammatica di The Lamb: domande semplici con who come soggetto (who made thee?) e frasi brevi. È la lingua di un bambino. The Tyger invece accumula domande spezzate e inversioni: è la lingua dello sgomento.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzata strofa per strofa, rileggi tutta la poesia con la traduzione. Leggila ad alta voce, battendo le sillabe forti: sentirai il martello. Sotto trovi il riepilogo delle rime e delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: TYGER,
          traduzione: TYGER_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "testo",
          testo:
            "Lo schema è AABB in ogni strofa: sei quartine in distici a rima baciata. Alcune rime sono imperfette (eye / symmetry), ma il ritmo martellante le tiene insieme.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["apostrophe (apostrofe)", "Tyger Tyger (vv. 1 e 21)"],
            ["metaphor (metafora)", "burning bright (v. 1)"],
            ["rhetorical question (domanda retorica)", "quasi tutta la poesia"],
            ["allusion (allusione)", "Icaro e Prometeo (vv. 7–8)"],
            [
              "extended metaphor (metafora continuata)",
              "il creatore fabbro (strofe 3–4)",
            ],
            ["anaphora (anafora)", "What… what… (strofe 3–4)"],
            [
              "personification (personificazione)",
              "le stelle con le lance e le lacrime (vv. 17–18)",
            ],
            [
              "ring composition (struttura ad anello)",
              "strofa 1 e strofa 6, con could → dare",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "La poesia non risponde mai alla sua domanda. È proprio questo che la rende così inquietante, e così moderna.",
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
          domanda: "Qual è la domanda centrale della poesia?",
          opzioni: [
            "Dove vive la tigre",
            "Come si caccia una tigre",
            "Se lo stesso creatore abbia fatto l'agnello e la tigre",
          ],
          giusta: 2,
          spiegazione:
            '"Did he who made the Lamb make thee?": come può lo stesso Dio creare l\'innocenza e la ferocia?',
          rivedi: "STROFA 5: L'AGNELLO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "A chi viene paragonato il creatore nelle strofe 3 e 4?",
          opzioni: ["A un fabbro", "A un pittore", "A un pastore", "A un re"],
          giusta: 0,
          spiegazione:
            "Hammer, chain, furnace, anvil: il creatore forgia la tigre come un fabbro.",
          rivedi: "STROFE 3–4: IL FABBRO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa cambia tra la prima e l'ultima strofa?",
          opzioni: [
            "La tigre diventa un agnello",
            "Could diventa dare: dalla capacità all'audacia",
            "Non cambia nulla",
          ],
          giusta: 1,
          spiegazione:
            'Chi "poteva" creare la tigre diventa chi "osa" crearla.',
          rivedi: "STROFA 6: COULD DIVENTA DARE",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola al suo significato.",
          coppie: [
            ["frame", "plasmare"],
            ["fearful", "terribile"],
            ["anvil", "incudine"],
            ["sinews", "tendini"],
            ["seize", "afferrare"],
          ],
          rivedi: "L'INGLESE DI BLAKE",
        },
        {
          tipo: "completa",
          consegna:
            'Scrivi la forma di "your" che Blake usa davanti a una vocale.',
          prima: "Burnt the fire of",
          dopo: "eyes?",
          risposte: ["thine"],
          spiegazione:
            "Thine davanti a vocale, thy davanti a consonante: come an e a.",
          rivedi: "STROFA 2: IL FUOCO",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi la domanda in inglese moderno, con did.",
          citazione: "Burnt the fire of thine eyes?",
          parole: ["your", "the", "burn", "did", "fire", "eyes", "of"],
          soluzione: ["did", "the", "fire", "of", "your", "eyes", "burn"],
          spiegazione:
            "Oggi la domanda al passato vuole did + soggetto + verbo base.",
          rivedi: "STROFA 2: IL FUOCO",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi nell'ordine normale.",
          citazione: "Did he smile his work to see?",
          parole: ["see", "did", "his", "to", "he", "work", "smile"],
          soluzione: ["did", "he", "smile", "to", "see", "his", "work"],
          spiegazione:
            "Blake mette l'oggetto prima dell'infinito per far rimare see con thee.",
          rivedi: "STROFA 5: L'AGNELLO",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Perché in "What immortal hand or eye / Could frame…?" non c\'è did?',
          opzioni: [
            "Perché è poesia antica",
            "Perché could non vuole mai did",
            "Perché what + nome è il soggetto della domanda",
          ],
          giusta: 2,
          spiegazione:
            "Quando la parola interrogativa è il soggetto, la domanda non vuole do/did: Who made thee? What happened? (lezione 24{5}). In più, could è un modale.",
          rivedi: "STROFA 1: LA DOMANDA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'In "dare he aspire", che tipo di verbo è dare?',
          opzioni: [
            "Un modale, seguito dal verbo base",
            "Un verbo regolare con to",
            "Un ausiliare del passato",
          ],
          giusta: 0,
          spiegazione:
            "Come modale, dare vuole il verbo base senza to e senza do: How dare you!",
          rivedi: "L'INGLESE DI BLAKE",
        },
        {
          tipo: "sottotitolo",
          testo: "Ritmo e figure",
        },
        {
          tipo: "seleziona",
          consegna:
            "Ecco il verso 1 diviso in sillabe. Tocca le 4 sillabe accentate.",
          parole: ["Ty", "ger", "Ty", "ger", "burn", "ing", "bright"],
          giuste: [0, 2, 4, 6],
          sillabe: true,
          spiegazione:
            "TY-ger TY-ger BURN-ing BRIGHT: trochei (DUM-da), con l'ultima sillaba debole tolta.",
          rivedi: "IL METRO: IL TETRAMETRO TROCAICO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cos'è un trocheo?",
          opzioni: [
            "Un piede da-DUM: debole, poi forte",
            "Un piede DUM-da: forte, poi debole",
            "Un verso di dieci sillabe",
          ],
          giusta: 1,
          spiegazione:
            "Il trocheo è il contrario del giambo: prima la sillaba forte.",
          rivedi: "IL METRO: IL TETRAMETRO TROCAICO",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["apostrophe", "Tyger Tyger"],
            ["extended metaphor", "hammer, chain, furnace, anvil"],
            ["allusion", "dare seize the fire"],
            ["personification", "the stars threw down their spears"],
          ],
          rivedi: "RILEGGILO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è la differenza principale tra The Lamb e The Tyger?",
          opzioni: [
            "The Lamb è in prosa, The Tyger in versi",
            "The Lamb parla di animali, The Tyger di uomini",
            "In The Lamb le domande hanno una risposta, in The Tyger no",
          ],
          giusta: 2,
          spiegazione:
            "Il bambino di The Lamb sa che Dio ha creato l'agnello; le domande di The Tyger restano senza risposta.",
          rivedi: "LA TIGRE E L'AGNELLO",
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
          consegna: "Traduci in italiano la prima strofa.",
          testo:
            "Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?",
          soluzione:
            "Tigre, tigre, che bruci luminosa nelle foreste della notte, quale mano o quale occhio immortale poté plasmare la tua terribile simmetria?",
          spiegazione:
            'Come hai reso fearful? "Terribile", "spaventosa", "tremenda" vanno bene: l\'importante è che la simmetria sia bella e insieme paurosa.',
          rivedi: "STROFA 1: LA DOMANDA",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short comparison (4–5 sentences) between The Lamb and The Tyger.",
          punti: [
            "innocence and experience",
            "questions with or without answers",
            "the image of the creator",
            "Blake's idea of contraries",
          ],
          modello:
            'The Lamb and The Tyger are companion poems from Songs of Innocence and Songs of Experience. In The Lamb a child asks "who made thee?" and answers immediately: God, who is also called a Lamb. In The Tyger the questions multiply and remain unanswered, ending with "Did he who made the Lamb make thee?". The creator of the tiger is a mysterious blacksmith with hammer and anvil, very different from the gentle shepherd of The Lamb. For Blake, both are necessary, because "without Contraries is no progression".',
          spiegazione:
            "Hai citato entrambe le poesie e usato parole come innocence, experience e contraries? Sono le cose che un esaminatore cerca.",
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
