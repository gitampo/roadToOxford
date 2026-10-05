import { Lezione } from "@/types/lezione";

// Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886),
// capitolo finale, "Henry Jekyll's Full Statement of the Case": due
// passaggi dello stesso capitolo, pubblico dominio
const BRANO = [
  "I was born in the year 18— to a large fortune,",
  "endowed besides with excellent parts, inclined by nature to industry,",
  "fond of the respect of the wise and good among my fellowmen,",
  "and thus, as might have been supposed, with every guarantee of an honourable and distinguished future.",
  "And indeed the worst of my faults was a certain impatient gaiety of disposition,",
  "such as has made the happiness of many,",
  "but such as I found it hard to reconcile with my imperious desire to carry my head high,",
  "and wear a more than commonly grave countenance before the public.",
  "Hence it came about that I concealed my pleasures;",
  "and that when I reached years of reflection, and began to look round me and take stock of my progress and position in the world,",
  "I stood already committed to a profound duplicity of life.",
  "With every day, and from both sides of my intelligence, the moral and the intellectual,",
  "I thus drew steadily nearer to that truth, by whose partial discovery I have been doomed to such a dreadful shipwreck:",
  "that man is not truly one, but truly two.",
];

const BRANO_TRADUZIONE = [
  "Nacqi nell'anno 18… erede di un grande patrimonio,",
  "dotato inoltre di ottime qualità, incline per natura all'operosità,",
  "desideroso del rispetto dei saggi e dei buoni tra i miei simili,",
  "e quindi, come si sarebbe potuto supporre, con ogni garanzia di un futuro onorevole e illustre.",
  "E in effetti il peggiore dei miei difetti era una certa impaziente allegria di carattere,",
  "di quelle che hanno fatto la felicità di molti,",
  "ma che io trovavo difficile conciliare con il mio imperioso desiderio di andare a testa alta",
  "e di mostrare in pubblico un aspetto più serio del normale.",
  "Accadde così che nascondevo i miei piaceri;",
  "e che, quando raggiunsi l'età della riflessione e cominciai a guardarmi intorno e a fare il bilancio dei miei progressi e della mia posizione nel mondo,",
  "mi trovavo già vincolato a una profonda doppiezza di vita.",
  "Giorno dopo giorno, e da entrambi i lati della mia intelligenza, quello morale e quello intellettuale,",
  "mi avvicinavo così sempre di più a quella verità, la cui scoperta parziale mi ha condannato a un così terribile naufragio:",
  "che l'uomo non è veramente uno, ma veramente due.",
];

export const jekyllHyde: Lezione = {
  id: "jekyll-hyde",
  titolo: "Dr Jekyll and Mr Hyde",
  descrizione:
    'La confessione finale di Jekyll: "l\'uomo non è uno, ma due". Lettura, analisi ed esercizi',
  chiavi: "Stevenson, romanzo vittoriano, doppio, doppiezza, gotico",
  livello: "Letteratura",
  sottotitolo: "Modulo C6 · Robert Louis Stevenson",
  citazione: {
    testo: "Man is not truly one, but truly two.",
    fonte:
      "Robert Louis Stevenson, Strange Case of Dr Jekyll and Mr Hyde (1886)",
    traduzione: "L'uomo non è veramente uno, ma veramente due.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "È l'inizio della confessione che il dottor Jekyll lascia prima di morire, e la sua conclusione più famosa. Il brano è in prosa: lo abbiamo diviso in righe, una per ogni frase o parte di frase. Leggilo tutto una volta. Nei riquadri successivi lo analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
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
            "Robert Louis Stevenson (1850–1894), scozzese, autore anche dell'Isola del tesoro, pubblicò Lo strano caso del dottor Jekyll e del signor Hyde nel 1886. Raccontò di averne sognato la trama, e di averla scritta in pochi giorni (lezione C6{5}).",
        },
        {
          tipo: "testo",
          testo:
            "Nella Londra vittoriana l'avvocato Utterson indaga su un uomo violento e ripugnante, Edward Hyde, che sembra legato al suo amico, lo stimato dottor Jekyll. Solo nell'ultimo capitolo, con la confessione scritta di Jekyll, il lettore scopre la verità: Jekyll e Hyde sono la stessa persona. Una pozione separava il lato \"buono\" di Jekyll da quello malvagio, finché Hyde non ha preso il sopravvento.",
        },
        {
          tipo: "nota",
          testo:
            "Il libro è il simbolo del compromesso vittoriano (lezione C6{2}): una società che chiedeva una facciata di rispettabilità assoluta, e che proprio per questo spingeva a nascondere tutto il resto.",
        },
      ],
    },
    {
      titolo: "LE PAROLE DI JEKYLL",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Jekyll scrive in un inglese colto e formale, da gentiluomo vittoriano. Ecco le parole che ti servono:",
        },
        {
          tipo: "tabella",
          righe: [
            ["fortune", 'patrimonio (non "fortuna" nel senso di caso)'],
            ["endowed with", "dotato di"],
            ["parts", "qualità, doti (uso antico)"],
            [
              "industry",
              'operosità, impegno nel lavoro (non solo "industria")',
            ],
            ["fellowmen", "i propri simili"],
            ["gaiety of disposition", "allegria di carattere"],
            ["countenance", "aspetto, espressione del viso"],
            ["hence", "quindi, per questo"],
            ["take stock of", "fare il bilancio di"],
            ["duplicity", "doppiezza"],
            ["doomed", "condannato"],
            ["shipwreck", "naufragio"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Industry e fortune sono falsi amici parziali: in questo testo vogliono dire "operosità" e "patrimonio". Il contesto decide il significato.',
        },
      ],
    },
    {
      titolo: "FRASI 1–4: UN UOMO FORTUNATO",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [0, 3],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Jekyll si presenta: è nato ricco, intelligente, portato per il lavoro, desideroso della stima delle persone per bene. Aveva tutto per un futuro onorato e illustre. La confessione comincia come un curriculum perfetto, ed è proprio questo a renderla inquietante.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I was born in the year 18—",
              it: 'be born: "nascere" in inglese è passivo (lezione 21{3}); la data nascosta era una convenzione dei romanzi dell\'epoca',
            },
            {
              en: "endowed… inclined… fond of…",
              it: "tre participi e aggettivi in fila che descrivono il soggetto, senza ripetere I was",
            },
            {
              en: "fond of the respect",
              it: 'fond of: "che ama, che tiene a": aggettivo + preposizione (lezione 49{4})',
            },
            {
              en: "the wise and good",
              it: "aggettivi usati come nomi: i saggi e i buoni, come the rich (lezione 3{6})",
            },
            {
              en: "as might have been supposed",
              it: 'modale + have been + participio: "come si sarebbe potuto supporre" (lezione 51{1})',
            },
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
              "accumulation (accumulazione)",
              "fortune, parts, industry, respect, guarantee: le qualità si sommano",
            ],
            [
              "irony (ironia)",
              "every guarantee of an honourable future: il lettore sa già come è andata a finire",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 5–8: IL DIFETTO",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [4, 7],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Il suo difetto peggiore? Una certa voglia di divertirsi: niente di grave, dice, molti ne hanno fatto la loro felicità. Ma Jekyll non riusciva a conciliarla con il desiderio di apparire serio e rispettabile davanti a tutti. Il problema non è il piacere: è la facciata.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "the worst of my faults",
              it: "superlativo irregolare: bad / worse / the worst (lezione 26{4})",
            },
            {
              en: "such as has made the happiness of many",
              it: 'such as = "di quelle che"; has made = present perfect (lezione 29{1})',
            },
            {
              en: "I found it hard to reconcile",
              it: 'find + it + aggettivo + to: "trovavo difficile conciliare"',
            },
            {
              en: "my imperious desire to carry my head high",
              it: "nome + to + verbo: il desiderio di (lezione 48{3})",
            },
            {
              en: "a more than commonly grave countenance",
              it: "→ a face that was more serious than usual",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Find it hard / easy / difficult to… è una costruzione utilissima: I find it hard to wake up early (faccio fatica ad alzarmi presto). It anticipa l'infinito che viene dopo.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "euphemism (eufemismo)",
              "a certain impatient gaiety of disposition: un modo elegante per non dire quali fossero i suoi piaceri",
            ],
            [
              "antithesis (antitesi)",
              "gaiety contro grave countenance: il piacere contro la serietà",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 9–11: LA DOPPIA VITA",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [8, 10],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Così Jekyll cominciò a nascondere i suoi piaceri. E quando, ormai adulto, si guardò intorno e fece il bilancio della sua vita, scoprì di essere già prigioniero di una profonda doppiezza: un uomo in pubblico, un altro in privato. Hyde non è ancora nato, ma la divisione c'è già.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Hence it came about that…",
              it: 'hence = therefore (lezione 55{5}); it came about that = "accadde che"',
            },
            {
              en: "when I reached years of reflection, and began to look round me",
              it: "past simple per azioni concluse; begin to + verbo (lezione 48{3})",
            },
            {
              en: "take stock of my progress",
              it: "take stock of: fare il bilancio di, un'espressione fissa",
            },
            {
              en: "I stood already committed to",
              it: 'stand + participio: "mi trovavo già vincolato"',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il pronome I compare in quasi ogni frase: è una confessione in prima persona, scritta come un documento. Stevenson cambia narratore proprio alla fine: dopo capitoli raccontati dall'esterno, finalmente sentiamo la voce di Jekyll.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "understatement",
              "I concealed my pleasures: una frase calma per un segreto enorme",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 12–14: LA VERITÀ",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [11, 13],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Giorno dopo giorno, con la ragione e con la coscienza, Jekyll si avvicinò a una verità: l\'uomo non è una persona sola, ma due. Averla scoperta, anche solo in parte, gli è costato la vita: è il suo "naufragio".',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I thus drew steadily nearer",
              it: "draw near: avvicinarsi; nearer = comparativo (lezione 26{1}); drew = passato di draw",
            },
            {
              en: "by whose partial discovery",
              it: 'whose dopo una preposizione: "per la cui scoperta" (lezione 14{4})',
            },
            {
              en: "I have been doomed",
              it: "present perfect passivo: have been + participio (lezione 43{2})",
            },
            {
              en: "that man is not truly one, but truly two",
              it: "not… but…: non… ma…; man senza articolo = l'essere umano in generale (lezione 3{7})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Man senza articolo indica tutta l'umanità: Man is mortal. Oggi si preferiscono parole neutre come humans o people, ma nei testi antichi troverai sempre man.",
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
              "a dreadful shipwreck: la sua vita è un naufragio",
            ],
            ["antithesis (antitesi)", "not truly one, but truly two"],
            [
              "parallelism (parallelismo)",
              "truly one / truly two: due metà costruite allo stesso modo, come le due metà dell'uomo",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LA DOPPIEZZA VITTORIANA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutto il brano, guarda il percorso della confessione: da un uomo perfetto a un uomo diviso.",
        },
        {
          tipo: "tabella",
          righe: [
            ["le qualità (frasi 1–4)", "ricco, dotato, rispettabile"],
            [
              "il difetto (frasi 5–8)",
              "il desiderio di piacere, contro quello di apparire serio",
            ],
            [
              "la doppia vita (frasi 9–11)",
              "nascondere: una vita pubblica e una segreta",
            ],
            ["la verità (frasi 12–14)", "ogni uomo è due"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Il punto più inquietante è che Jekyll non è un mostro: è un gentiluomo come tanti. Il suo vero problema non è il male, ma l'ipocrisia, il bisogno di separare il lato rispettabile da tutto ciò che la società vittoriana condannava. Hyde nasce da quella separazione.",
        },
        {
          tipo: "nota",
          testo:
            'Ancora oggi "a Jekyll and Hyde" si dice di una persona con due personalità molto diverse, per esempio gentile in pubblico e cattiva in privato: He\'s a real Jekyll and Hyde.',
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato frase per frase, rileggi tutto il brano con la traduzione. Nota come la calma della lingua contrasta con l'orrore di quello che racconta. Sotto trovi il riepilogo delle figure retoriche.",
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
              "accumulation (accumulazione)",
              "fortune, parts, industry… (frasi 1–4)",
            ],
            [
              "irony (ironia)",
              "every guarantee of an honourable… future (frase 4)",
            ],
            [
              "euphemism (eufemismo)",
              "a certain impatient gaiety of disposition (frase 5)",
            ],
            [
              "antithesis (antitesi)",
              "gaiety / grave countenance (frasi 5–8), one / two (frase 14)",
            ],
            ["understatement", "I concealed my pleasures (frase 9)"],
            ["metaphor (metafora)", "a dreadful shipwreck (frase 13)"],
            ["parallelism (parallelismo)", "truly one / truly two (frase 14)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Lo stile è quello di un gentiluomo che vuole restare rispettabile fino all'ultimo: frasi lunghe, parole scelte, nessun grido. Anche la lingua è una facciata.",
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
          domanda: "Com'era la vita di Jekyll alla nascita?",
          opzioni: [
            "Povera e difficile",
            "Ricca e piena di promesse",
            "Solitaria e malata",
          ],
          giusta: 1,
          spiegazione:
            'Nato "to a large fortune", con ottime qualità e "every guarantee of an honourable… future".',
          rivedi: "FRASI 1–4: UN UOMO FORTUNATO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual era il vero problema di Jekyll?",
          opzioni: [
            "Era malvagio fin dall'infanzia",
            "Non aveva amici",
            "Non sapeva conciliare il desiderio di piacere con quello di sembrare rispettabile",
          ],
          giusta: 2,
          spiegazione:
            "Il difetto in sé era piccolo; il problema era nasconderlo per mantenere la facciata.",
          rivedi: "FRASI 5–8: IL DIFETTO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "man is not truly one, but truly two"?',
          opzioni: [
            "Che in ogni essere umano convivono due nature opposte",
            "Che ogni uomo ha un gemello",
            "Che gli uomini devono vivere in coppia",
          ],
          giusta: 0,
          spiegazione:
            "È la scoperta di Jekyll: dentro ogni persona c'è un lato rispettabile e uno nascosto.",
          rivedi: "FRASI 12–14: LA VERITÀ",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola al suo significato nel testo.",
          coppie: [
            ["fortune", "patrimonio"],
            ["industry", "operosità"],
            ["countenance", "aspetto del viso"],
            ["duplicity", "doppiezza"],
            ["shipwreck", "naufragio"],
          ],
          rivedi: "LE PAROLE DI JEKYLL",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi in inglese semplice.",
          citazione: "I found it hard to reconcile",
          parole: ["was", "to", "it", "for", "hard", "me", "reconcile"],
          soluzione: ["it", "was", "hard", "for", "me", "to", "reconcile"],
          spiegazione:
            'Find it hard to… = it is hard for me to…: "faccio fatica a".',
          rivedi: "FRASI 5–8: IL DIFETTO",
        },
        {
          tipo: "riordina",
          consegna: "Ricomponi la frase più famosa del libro.",
          citazione: "that man is not truly one, but truly two",
          parole: ["two", "one", "but", "man", "truly", "is", "not", "truly"],
          soluzione: [
            "man",
            "is",
            "not",
            "truly",
            "one",
            "but",
            "truly",
            "two",
          ],
          spiegazione: "Not… but… costruisce l'antitesi: non uno, ma due.",
          rivedi: "FRASI 12–14: LA VERITÀ",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Perché si dice "I was born"?',
          opzioni: [
            "Perché è un past continuous",
            'Perché in inglese "nascere" è una forma passiva: be born',
            "È un errore",
          ],
          giusta: 1,
          spiegazione:
            "Nascere si dice be born: I was born in 1990 (lezione 21{3}).",
          rivedi: "FRASI 1–4: UN UOMO FORTUNATO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che forma è "I have been doomed"?',
          opzioni: [
            "Past simple",
            "Futuro",
            "Present perfect passivo",
            "Condizionale",
          ],
          giusta: 2,
          spiegazione:
            "Have been + participio: present perfect passivo (lezione 43{2}).",
          rivedi: "FRASI 12–14: LA VERITÀ",
        },
        {
          tipo: "completa",
          consegna: "Scrivi il superlativo di bad.",
          prima: "the",
          dopo: "of my faults",
          risposte: ["worst"],
          spiegazione:
            "Bad / worse / the worst: superlativo irregolare (lezione 26{4}).",
          rivedi: "FRASI 5–8: IL DIFETTO",
        },
        {
          tipo: "sottotitolo",
          testo: "Stile e figure",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Quale figura retorica è "a dreadful shipwreck"?',
          opzioni: [
            "Metafora",
            "Similitudine",
            "Allitterazione",
            "Domanda retorica",
          ],
          giusta: 0,
          spiegazione:
            'La vita di Jekyll è un naufragio: un paragone senza "come".',
          rivedi: "FRASI 12–14: LA VERITÀ",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["euphemism", "a certain impatient gaiety of disposition"],
            ["antithesis", "not truly one, but truly two"],
            ["metaphor", "a dreadful shipwreck"],
            ["understatement", "I concealed my pleasures"],
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
          consegna: "Traduci in italiano le frasi 9–11.",
          testo:
            "Hence it came about that I concealed my pleasures; and that when I reached years of reflection, and began to look round me and take stock of my progress and position in the world, I stood already committed to a profound duplicity of life.",
          soluzione:
            "Fu così che nascondevo i miei piaceri; e che, quando raggiunsi l'età della ragione e cominciai a guardarmi intorno e a fare il bilancio dei miei progressi e della mia posizione nel mondo, mi trovai già legato a una profonda doppiezza di vita.",
          spiegazione:
            'Hai reso take stock con "fare il bilancio"? È un\'espressione che viene dal commercio: contare la merce in magazzino.',
          rivedi: "FRASI 9–11: LA DOPPIA VITA",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of Jekyll's confession.",
          punti: [
            "his perfect start in life",
            'his "fault" and the need to hide it',
            "duplicity",
            "the Victorian context",
          ],
          modello:
            'Jekyll opens his confession by describing a perfect start in life: he was born "to a large fortune", with excellent qualities and "every guarantee of an honourable and distinguished future". His only fault was "a certain impatient gaiety of disposition", a euphemism for pleasures he does not name. Because he wanted to appear serious in public, he "concealed" these pleasures and lived a "profound duplicity of life". He finally discovers that "man is not truly one, but truly two". The novel reflects Victorian society, where respectability demanded a perfect façade and pushed everything else into secret.',
          spiegazione:
            "Hai citato il testo e usato termini come euphemism e duplicity? Sono le cose che un esaminatore cerca.",
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
