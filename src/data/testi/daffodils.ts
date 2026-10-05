import { Lezione } from "@/types/lezione";

// William Wordsworth, I Wandered Lonely as a Cloud (versione del 1815),
// pubblico dominio
const POESIA = [
  "I wandered lonely as a cloud",
  "That floats on high o'er vales and hills,",
  "When all at once I saw a crowd,",
  "A host, of golden daffodils;",
  "Beside the lake, beneath the trees,",
  "Fluttering and dancing in the breeze.",
  "Continuous as the stars that shine",
  "And twinkle on the milky way,",
  "They stretched in never-ending line",
  "Along the margin of a bay:",
  "Ten thousand saw I at a glance,",
  "Tossing their heads in sprightly dance.",
  "The waves beside them danced; but they",
  "Out-did the sparkling waves in glee:",
  "A poet could not but be gay,",
  "In such a jocund company:",
  "I gazed — and gazed — but little thought",
  "What wealth the show to me had brought:",
  "For oft, when on my couch I lie",
  "In vacant or in pensive mood,",
  "They flash upon that inward eye",
  "Which is the bliss of solitude;",
  "And then my heart with pleasure fills,",
  "And dances with the daffodils.",
];

const POESIA_TRADUZIONE = [
  "Vagavo solitario come una nuvola",
  "che fluttua alta sopra valli e colline,",
  "quando all'improvviso vidi una folla,",
  "una schiera di narcisi dorati;",
  "accanto al lago, sotto gli alberi,",
  "che fremevano e danzavano nella brezza.",
  "Continui come le stelle che brillano",
  "e scintillano nella Via Lattea,",
  "si stendevano in una fila senza fine",
  "lungo il margine di una baia:",
  "diecimila ne vidi con un solo sguardo,",
  "che scuotevano la testa in una danza vivace.",
  "Le onde accanto a loro danzavano; ma essi",
  "superavano in allegria le onde scintillanti:",
  "un poeta non poteva che essere felice",
  "in una compagnia così gioiosa:",
  "guardavo, e guardavo, ma non pensavo affatto",
  "a quale ricchezza quello spettacolo mi avesse portato:",
  "perché spesso, quando sono disteso sul divano,",
  "con l'animo vuoto o pensieroso,",
  "essi balenano davanti a quell'occhio interiore",
  "che è la beatitudine della solitudine;",
  "e allora il mio cuore si riempie di piacere",
  "e danza con i narcisi.",
];

export const daffodils: Lezione = {
  id: "daffodils",
  titolo: "I Wandered Lonely as a Cloud",
  descrizione:
    "I narcisi di Wordsworth e la gioia del ricordo: lettura, analisi ed esercizi",
  chiavi: "Wordsworth, Romanticismo, natura, narcisi, memoria",
  livello: "Letteratura",
  sottotitolo: "Modulo C5 · William Wordsworth",
  citazione: {
    testo: "I wandered lonely as a cloud.",
    fonte: "William Wordsworth, I Wandered Lonely as a Cloud (1807)",
    traduzione: "Vagavo solitario come una nuvola.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "È forse la poesia più conosciuta del Regno Unito: tanti britannici ne sanno a memoria almeno la prima strofa. Leggila tutta una volta, con calma. Nei riquadri successivi la analizziamo strofa per strofa; la traduzione completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: POESIA,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "William Wordsworth (1770–1850) visse quasi tutta la vita nel Lake District, la regione dei laghi nel nord dell'Inghilterra (lezione C5{5}). Il 15 aprile 1802, passeggiando con la sorella Dorothy lungo il lago Ullswater, vide una lunghissima distesa di narcisi selvatici. Dorothy lo annotò nel suo diario; Wordsworth ne fece una poesia, pubblicata nel 1807 e ampliata nel 1815.",
        },
        {
          tipo: "testo",
          testo:
            'Nel 1798 Wordsworth e Coleridge avevano pubblicato insieme le Lyrical Ballads, il libro che segna l\'inizio del Romanticismo inglese. Nella prefazione Wordsworth spiegava la sua idea di poesia: "the spontaneous overflow of powerful feelings", lo spontaneo traboccare di emozioni potenti, che nasce da "emotion recollected in tranquillity", un\'emozione ricordata nella calma.',
        },
        {
          tipo: "nota",
          testo:
            "Tieni a mente quest'ultima frase: emotion recollected in tranquillity. È la chiave di tutta la poesia, e la capirai nell'ultima strofa.",
        },
      ],
    },
    {
      titolo: "STROFA 1: LA NUVOLA E I NARCISI",
      blocchi: [
        {
          tipo: "brano",
          righe: POESIA,
          traduzione: POESIA_TRADUZIONE,
          evidenzia: [0, 5],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Il poeta camminava da solo, senza meta, come una nuvola che passa alta sopra valli e colline. All'improvviso vide una folla di narcisi dorati, vicino al lago, sotto gli alberi: si muovevano nel vento come se danzassero.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I wandered lonely as a cloud",
              it: "past simple; lonely è un aggettivo riferito a I, non un avverbio (lezione 33{3}); as + nome = come",
            },
            {
              en: "That floats on high o'er vales and hills",
              it: "relativa con that e present simple: una verità generale sulle nuvole (lezione 44{1}); o'er = over",
            },
            {
              en: "When all at once I saw a crowd",
              it: "when + past simple: l'evento improvviso che interrompe il vagare (lezione 35{3})",
            },
            {
              en: "Fluttering and dancing in the breeze",
              it: "due -ing che descrivono i narcisi mentre si muovono",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Lonely sembra un avverbio per la -ly, ma è un aggettivo, come friendly e lovely. Per questo si dice I wandered lonely: descrive come si sentiva il poeta, non il modo in cui camminava.",
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
              "lonely as a cloud: il poeta è come una nuvola",
            ],
            [
              "personification (personificazione)",
              "a crowd, a host… dancing: i fiori sono una folla di persone che balla",
            ],
            [
              "alliteration (allitterazione)",
              "beside… beneath… breeze; host… hills",
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
            ["cloud / crowd", "versi 1 e 3: rima A"],
            ["hills / daffodils", "versi 2 e 4: rima B"],
            ["trees / breeze", "versi 5 e 6: rima C, baciata"],
          ],
        },
      ],
    },
    {
      titolo: "IL METRO: IL TETRAMETRO GIAMBICO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ogni verso ha otto sillabe e quattro accenti, con il ritmo da-DUM: è il tetrametro giambico, più corto e leggero del pentametro di Shakespeare. Ogni strofa ha sei versi con lo schema ABABCC: quattro versi a rima alternata e un distico finale a rima baciata.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "i WAN- | dered LONE- | ly AS | a CLOUD",
              it: "otto sillabe, quattro accenti",
            },
            {
              en: "be-SIDE | the LAKE, | be-NEATH | the TREES",
              it: "un ritmo regolare, come una passeggiata",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Il verso 6 rompe il ritmo: FLUT-ter-ing AND DANC-ing IN the BREEZE comincia con un accento forte e ha una sillaba in più. Proprio nel verso in cui i fiori si mettono a ballare, il ritmo si muove anche lui.",
        },
        {
          tipo: "nota",
          testo:
            "Il distico finale (CC) chiude ogni strofa come un piccolo ritornello, con un'immagine di movimento: dancing in the breeze, sprightly dance, jocund company… e alla fine dances with the daffodils.",
        },
      ],
    },
    {
      titolo: "STROFA 2: DIECIMILA",
      blocchi: [
        {
          tipo: "brano",
          righe: POESIA,
          traduzione: POESIA_TRADUZIONE,
          evidenzia: [6, 11],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "I narcisi sono tanti come le stelle della Via Lattea, e si stendono in una fila senza fine lungo la riva. Il poeta ne vede diecimila con un solo sguardo, e tutti scuotono la testa come in una danza allegra.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Continuous as the stars that shine / And twinkle",
              it: "as + aggettivo + as (qui il primo as è sottinteso): continui come (lezione 26{6})",
            },
            {
              en: "They stretched in never-ending line",
              it: "never-ending: aggettivo composto con il trattino (lezione 4{6})",
            },
            {
              en: "Ten thousand saw I at a glance",
              it: "→ I saw ten thousand at a glance: l'oggetto e il verbo prima del soggetto, per dare risalto al numero",
            },
            {
              en: "Tossing their heads in sprightly dance",
              it: "-ing riferito ai fiori: mentre scuotevano la testa",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Ten thousand senza s: i numeri come hundred, thousand e million non prendono la -s quando c'è un numero davanti (lezione 8{2}). Thousands of… solo quando non c'è un numero preciso.",
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
              "continuous as the stars: i fiori sono come le stelle",
            ],
            [
              "hyperbole (iperbole)",
              "ten thousand… never-ending line: un numero enorme, impossibile da contare",
            ],
            [
              "personification (personificazione)",
              "tossing their heads: i fiori hanno una testa e ballano",
            ],
          ],
        },
      ],
    },
    {
      titolo: "STROFA 3: LA RICCHEZZA NASCOSTA",
      blocchi: [
        {
          tipo: "brano",
          righe: POESIA,
          traduzione: POESIA_TRADUZIONE,
          evidenzia: [12, 17],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Anche le onde del lago danzano, ma i narcisi le superano in allegria. In una compagnia così gioiosa, un poeta non può che essere felice. Lui guardava e guardava, senza rendersi conto del tesoro che quello spettacolo gli stava regalando. Che tesoro sia, lo scopriremo nella strofa dopo.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "they / Out-did the sparkling waves in glee",
              it: "out-do: fare meglio di, superare; out-did è il passato (do / did / done)",
            },
            {
              en: "A poet could not but be gay",
              it: 'could not but + verbo base: "non poteva che", non poteva fare a meno di',
            },
            {
              en: "but little thought / What wealth the show to me had brought",
              it: "little = per niente; what wealth… had brought: domanda indiretta con il past perfect (lezioni 42{5} e 37{1})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Gay qui ha il significato antico di "allegro, felice". Il senso di "omosessuale" si è diffuso nel Novecento. Le parole cambiano significato nel tempo: è una cosa da ricordare sempre quando si leggono testi antichi.',
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
              "the waves… danced: anche le onde ballano",
            ],
            [
              "repetition (ripetizione)",
              "I gazed — and gazed —: i trattini fanno sentire il tempo che passa",
            ],
            ["metaphor (metafora)", "what wealth: il ricordo è una ricchezza"],
          ],
        },
      ],
    },
    {
      titolo: "STROFA 4: L'OCCHIO INTERIORE",
      blocchi: [
        {
          tipo: "brano",
          righe: POESIA,
          traduzione: POESIA_TRADUZIONE,
          evidenzia: [18, 23],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Ecco la ricchezza: spesso, quando è disteso sul divano, annoiato o pensieroso, i narcisi gli tornano in mente all'improvviso, davanti all'\"occhio interiore\" della memoria. E allora il suo cuore si riempie di gioia e danza con loro.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "For oft, when on my couch I lie",
              it: "il tempo passa al presente: present simple per un'abitudine (lezione 10{1}); oft = often (lezione 11{1})",
            },
            {
              en: "They flash upon that inward eye / Which is the bliss of solitude",
              it: "relativa con which (lezione 44{1})",
            },
            {
              en: "my heart with pleasure fills",
              it: "→ my heart fills with pleasure: il complemento prima del verbo, per la rima con daffodils",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il passaggio dal passato (wandered, saw, gazed) al presente (lie, flash, fills, dances) è il punto più importante della poesia: l'esperienza è finita, ma il ricordo è vivo, e si ripete ogni volta che il poeta ci pensa.",
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
              "that inward eye: l'occhio interiore è la memoria, l'immaginazione",
            ],
            [
              "paradox (paradosso)",
              "the bliss of solitude: la solitudine, di solito triste, diventa beatitudine",
            ],
            [
              "personification (personificazione)",
              "my heart… dances: il cuore balla con i fiori",
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
            ["lie / eye", "versi 19 e 21"],
            ["mood / solitude", "versi 20 e 22"],
            [
              "fills / daffodils",
              "versi 23 e 24: l'ultima parola della poesia rima con la prima strofa (hills / daffodils)",
            ],
          ],
        },
      ],
    },
    {
      titolo: "UN'EMOZIONE RICORDATA NELLA CALMA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutte le strofe, guarda la struttura. Le prime tre raccontano un'esperienza passata; l'ultima ne mostra il valore nel presente. È esattamente l'idea di poesia di Wordsworth: un'emozione vissuta, poi ricordata nella calma.",
        },
        {
          tipo: "tabella",
          righe: [
            ["strofa 1 (passato)", "la solitudine e l'incontro improvviso"],
            ["strofa 2 (passato)", "la quantità: i fiori come le stelle"],
            ["strofa 3 (passato)", "la gioia, e un tesoro non ancora capito"],
            [
              "strofa 4 (presente)",
              "il tesoro: il ricordo che torna e porta gioia",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            'Confronta con il diario di Dorothy, che vide gli stessi fiori: "I never saw daffodils so beautiful… they tossed and reeled and danced". Molte immagini sono già lì. Ma solo il poeta aggiunge la quarta strofa: il senso dell\'esperienza.',
        },
        {
          tipo: "nota",
          testo:
            "Per i Romantici la natura non è solo un paesaggio: è una forza che educa e consola l'uomo. La poesia lo mostra in modo semplicissimo, con parole di tutti i giorni.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzata strofa per strofa, rileggi tutta la poesia con la traduzione. Fai caso al momento in cui il tempo passa dal passato al presente. Sotto trovi il riepilogo delle rime e delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: POESIA,
          traduzione: POESIA_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "testo",
          testo:
            "Ogni strofa segue lo schema ABABCC: quattro tetrametri giambici a rima alternata e un distico a rima baciata.",
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
              "lonely as a cloud (v. 1), continuous as the stars (v. 7)",
            ],
            [
              "personification (personificazione)",
              "a crowd… dancing (vv. 3–6), tossing their heads (v. 12), my heart… dances (v. 24)",
            ],
            ["hyperbole (iperbole)", "ten thousand (v. 11)"],
            [
              "metaphor (metafora)",
              "what wealth (v. 18), that inward eye (v. 21)",
            ],
            ["paradox (paradosso)", "the bliss of solitude (v. 22)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "La poesia comincia con una persona sola (lonely) e finisce con un cuore che danza in compagnia. È un viaggio dalla solitudine alla gioia.",
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
          domanda: "A che cosa si paragona il poeta nel primo verso?",
          opzioni: ["A un fiore", "A una nuvola", "A una stella", "A un'onda"],
          giusta: 1,
          spiegazione:
            '"I wandered lonely as a cloud": solo e senza meta, come una nuvola.',
          rivedi: "STROFA 1: LA NUVOLA E I NARCISI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Qual è la "ricchezza" (wealth) che lo spettacolo gli ha portato?',
          opzioni: [
            "Dei fiori da vendere",
            "Una poesia famosa che gli ha fatto guadagnare soldi",
            "Il ricordo, che torna a dargli gioia quando è solo",
          ],
          giusta: 2,
          spiegazione:
            'Nell\'ultima strofa i narcisi "flash upon that inward eye": il ricordo è il vero tesoro.',
          rivedi: "STROFA 4: L'OCCHIO INTERIORE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa cambia nell'ultima strofa?",
          opzioni: [
            "Il tempo passa dal passato al presente",
            "Il poeta torna al lago",
            "I narcisi appassiscono",
          ],
          giusta: 0,
          spiegazione:
            "L'esperienza è passata, il ricordo è presente: lie, flash, fills, dances.",
          rivedi: "UN'EMOZIONE RICORDATA NELLA CALMA",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola al suo significato.",
          coppie: [
            ["host", "schiera, folla"],
            ["glee", "allegria"],
            ["jocund", "gioioso"],
            ["oft", "spesso"],
            ["bliss", "beatitudine"],
          ],
          rivedi: "STROFA 3: LA RICCHEZZA NASCOSTA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "gay" in questo verso?',
          citazione: "A poet could not but be gay",
          opzioni: ["Omosessuale", "Allegro, felice", "Triste"],
          giusta: 1,
          spiegazione:
            'È il significato antico della parola: "allegro". Le parole cambiano significato nel tempo.',
          rivedi: "STROFA 3: LA RICCHEZZA NASCOSTA",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi nell'ordine normale.",
          citazione: "Ten thousand saw I at a glance",
          parole: ["a", "saw", "glance", "ten", "at", "I", "thousand"],
          soluzione: ["I", "saw", "ten", "thousand", "at", "a", "glance"],
          spiegazione:
            "Soggetto + verbo + oggetto: il poeta inverte l'ordine per mettere in risalto il numero.",
          rivedi: "STROFA 2: DIECIMILA",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi nell'ordine normale.",
          citazione: "And then my heart with pleasure fills",
          parole: ["pleasure", "fills", "heart", "with", "my", "then", "and"],
          soluzione: [
            "and",
            "then",
            "my",
            "heart",
            "fills",
            "with",
            "pleasure",
          ],
          spiegazione:
            "Il poeta sposta fills in fondo per farlo rimare con daffodils.",
          rivedi: "STROFA 4: L'OCCHIO INTERIORE",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Perché si dice "I wandered lonely" e non "I wandered lonelily"?',
          opzioni: [
            "È un errore",
            "Perché è poesia",
            "Lonely è un aggettivo che descrive il poeta, non il modo di camminare",
          ],
          giusta: 2,
          spiegazione:
            "Lonely, come friendly e lovely, è un aggettivo anche se finisce in -ly (lezione 33{3}).",
          rivedi: "STROFA 1: LA NUVOLA E I NARCISI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "could not but be gay"?',
          opzioni: [
            "Non poteva che essere felice",
            "Non poteva essere felice",
            "Poteva essere felice, ma non lo era",
          ],
          giusta: 0,
          spiegazione:
            "Could not but + verbo base = non poteva fare a meno di, non poteva che.",
          rivedi: "STROFA 3: LA RICCHEZZA NASCOSTA",
        },
        {
          tipo: "completa",
          consegna:
            'Completa il verso: "diecimila ne vidi". Attento: con un numero davanti, niente -s.',
          prima: "Ten",
          dopo: "saw I at a glance",
          risposte: ["thousand"],
          spiegazione:
            "Con un numero davanti, hundred, thousand e million restano al singolare (lezione 8{2}).",
          rivedi: "STROFA 2: DIECIMILA",
        },
        {
          tipo: "sottotitolo",
          testo: "Rime e figure",
        },
        {
          tipo: "seleziona",
          consegna: 'Tocca le parole che rimano con "hills".',
          parole: ["clouds", "daffodils", "trees", "fills", "breeze", "crowd"],
          giuste: [1, 3],
          spiegazione:
            'Hills, daffodils e fills hanno lo stesso suono finale "-ills". Trees e breeze rimano tra loro.',
          rivedi: "RILEGGILO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è lo schema di rime di ogni strofa?",
          opzioni: ["AABB CC", "ABABCC", "ABBA CC", "ABCABC"],
          giusta: 1,
          spiegazione:
            "Quattro versi a rima alternata (ABAB) e un distico a rima baciata (CC).",
          rivedi: "IL METRO: IL TETRAMETRO GIAMBICO",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["simile", "lonely as a cloud"],
            ["hyperbole", "ten thousand saw I"],
            ["metaphor", "that inward eye"],
            ["paradox", "the bliss of solitude"],
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
          consegna: "Traduci in italiano l'ultima strofa.",
          testo:
            "For oft, when on my couch I lie\nIn vacant or in pensive mood,\nThey flash upon that inward eye\nWhich is the bliss of solitude;\nAnd then my heart with pleasure fills,\nAnd dances with the daffodils.",
          soluzione:
            "Perché spesso, quando sono disteso sul divano, con l'animo vuoto o pensieroso, essi balenano davanti a quell'occhio interiore che è la beatitudine della solitudine; e allora il mio cuore si riempie di gioia e danza con i narcisi.",
          spiegazione:
            "Hai tenuto il presente? È fondamentale: l'ultima strofa parla di un ricordo che si ripete ancora oggi.",
          rivedi: "STROFA 4: L'OCCHIO INTERIORE",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of the poem's structure and its message.",
          punti: [
            "past and present",
            "the daffodils as people",
            '"that inward eye"',
            "emotion recollected in tranquillity",
          ],
          modello:
            'The first three stanzas describe a past experience in the past tense: the poet "wandered lonely as a cloud" and suddenly saw a crowd of daffodils. The flowers are personified as a crowd of dancers, "tossing their heads in sprightly dance". In the last stanza the tense changes to the present, because the memory still returns. The daffodils "flash upon that inward eye", which is memory and imagination. The poem perfectly illustrates Wordsworth\'s idea of poetry as "emotion recollected in tranquillity".',
          spiegazione:
            "Hai citato il testo e usato termini come personification e stanza? Sono le cose che un esaminatore cerca.",
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
