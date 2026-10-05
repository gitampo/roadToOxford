import { Lezione } from "@/types/lezione";

// John Donne, Holy Sonnet X (pubblicato nel 1633), pubblico dominio
const SONETTO = [
  "Death, be not proud, though some have called thee",
  "Mighty and dreadful, for thou art not so;",
  "For those whom thou think'st thou dost overthrow",
  "Die not, poor Death, nor yet canst thou kill me.",
  "From rest and sleep, which but thy pictures be,",
  "Much pleasure; then from thee much more must flow,",
  "And soonest our best men with thee do go,",
  "Rest of their bones, and soul's delivery.",
  "Thou art slave to fate, chance, kings, and desperate men,",
  "And dost with poison, war, and sickness dwell,",
  "And poppy or charms can make us sleep as well",
  "And better than thy stroke; why swell'st thou then?",
  "One short sleep past, we wake eternally",
  "And death shall be no more; Death, thou shalt die.",
];

const SONETTO_TRADUZIONE = [
  "Morte, non essere orgogliosa, anche se alcuni ti hanno chiamata",
  "potente e terribile, perché non lo sei;",
  "perché quelli che tu credi di abbattere",
  "non muoiono, povera Morte, e nemmeno puoi uccidere me.",
  "Dal riposo e dal sonno, che sono solo tue immagini,",
  "viene molto piacere; quindi da te deve venirne molto di più,",
  "e i migliori tra noi se ne vanno con te per primi,",
  "riposo delle loro ossa e liberazione dell'anima.",
  "Sei schiava del destino, del caso, dei re e dei disperati,",
  "e abiti con il veleno, la guerra e la malattia,",
  "e il papavero o gli incantesimi possono farci dormire altrettanto bene",
  "e meglio del tuo colpo; perché allora ti gonfi d'orgoglio?",
  "Passato un breve sonno, ci svegliamo per l'eternità",
  "e la morte non ci sarà più; Morte, tu morirai.",
];

export const deathBeNotProud: Lezione = {
  id: "death-be-not-proud",
  titolo: "Death, be not proud",
  descrizione:
    "John Donne sfida la Morte in un sonetto: lettura, analisi ed esercizi",
  chiavi: "Donne, poeti metafisici, Holy Sonnets, paradosso",
  livello: "Letteratura",
  sottotitolo: "Modulo C3 · John Donne",
  citazione: {
    testo: "Death, thou shalt die.",
    fonte: "John Donne, Holy Sonnet X (1633)",
    traduzione: "Morte, tu morirai.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il poeta parla direttamente alla Morte, come a una persona. Leggi il sonetto tutto una volta, con calma. Nei riquadri successivi lo analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: SONETTO,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "John Donne (1572–1631) è il maggiore dei poeti metafisici (lezione C3{8}). Da giovane scrisse poesie d'amore audaci e ironiche; più tardi diventò sacerdote anglicano e decano della cattedrale di St Paul a Londra, il predicatore più famoso del suo tempo.",
        },
        {
          tipo: "testo",
          testo:
            "I diciannove Holy Sonnets (\"sonetti sacri\") furono scritti intorno al 1609–1610, in un periodo di malattia e di crisi, e pubblicati solo dopo la sua morte, nel 1633. Death, be not proud è il decimo. La sua idea di fondo è cristiana: la morte è solo un passaggio, dopo il quale l'anima si risveglia per l'eternità.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "metaphysical poets",
              "poeti del Seicento che uniscono passione e ragionamento",
            ],
            [
              "conceit (concetto)",
              "un paragone sorprendente e ingegnoso, sviluppato con logica",
            ],
            [
              "wit",
              "l'intelligenza brillante che gioca con le idee e le parole",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Di Donne è anche la frase "No man is an island" (nessun uomo è un\'isola) e l\'espressione "for whom the bell tolls" (per chi suona la campana), che Hemingway userà come titolo di un romanzo.',
        },
      ],
    },
    {
      titolo: "L'INGLESE DI DONNE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Donne si rivolge alla Morte con thou, il "tu" antico. Ecco le forme che incontrerai:',
        },
        {
          tipo: "tabella",
          righe: [
            ["thou / thee / thy", "you / you / your (tu, te, tuo)"],
            ["thou art", "you are"],
            ["thou think'st, thou dost", "you think, you do: -st con thou"],
            ["thou canst, thou shalt", "you can, you shall"],
            ["why swell'st thou?", "why do you swell? (perché ti gonfi?)"],
            [
              "be not proud / die not",
              "don't be proud / don't die: negazione senza do",
            ],
            [
              "which but thy pictures be",
              "which are only your pictures: be per are",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Lo schema è quello che conosci già: I / me / my corrisponde a thou / thee / thy (lezioni 1{1}, 5{1} e 16{1}).",
        },
      ],
    },
    {
      titolo: "VERSI 1–4: LA SFIDA",
      blocchi: [
        {
          tipo: "brano",
          righe: SONETTO,
          traduzione: SONETTO_TRADUZIONE,
          evidenzia: [0, 3],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Il poeta sfida la Morte: non essere orgogliosa. Qualcuno ti ha chiamata potente e terribile, ma non lo sei: quelli che credi di uccidere in realtà non muoiono, e nemmeno io morirò. La Morte, di solito temuta, diventa "povera Morte".',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Death, be not proud",
              it: "→ Death, don't be proud: imperativo negativo antico, senza do (lezione 19{2})",
            },
            {
              en: "though some have called thee",
              it: "though = anche se; have called = present perfect (lezione 29{1})",
            },
            {
              en: "those whom thou think'st thou dost overthrow",
              it: "→ those (whom) you think you overthrow: whom è il complemento (lezione 44{2})",
            },
            {
              en: "nor yet canst thou kill me",
              it: "→ and you cannot kill me either: dopo nor il verbo va prima del soggetto (lezione 53{2})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'For all\'inizio di una frase (for thou art not so) significa "perché": è un uso formale e letterario, che trovi ancora oggi nei testi scritti (lezione 55{5}).',
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
              "Death, be not proud: il poeta si rivolge alla Morte",
            ],
            [
              "personification (personificazione)",
              "la Morte è orgogliosa, pensa, uccide: è una persona",
            ],
            [
              "paradox (paradosso)",
              "those whom thou… dost overthrow / Die not: chi muore non muore",
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
            ["thee / me", "versi 1 e 4: rima A"],
            ["so / overthrow", "versi 2 e 3: rima B"],
          ],
        },
      ],
    },
    {
      titolo: "LA FORMA: UN SONETTO DIVERSO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Anche questo è un sonetto: quattordici pentametri giambici. Ma lo schema delle rime non è quello di Shakespeare. Le prime due quartine sono incrociate, come in Petrarca: ABBA ABBA. Poi CDDC e un distico finale EE, all'inglese.",
        },
        {
          tipo: "tabella",
          righe: [
            ["sonetto di Shakespeare", "ABAB CDCD EFEF GG"],
            ["sonetto di Donne", "ABBA ABBA CDDC EE"],
            ["sonetto di Petrarca", "ABBA ABBA CDE CDE (o simili)"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Il ritmo di Donne è volutamente irregolare: accenti che si scontrano, sillabe in più. Il poeta Ben Jonson disse che Donne, \"per non aver rispettato gli accenti, meritava l'impiccagione\". Ma l'irregolarità è voluta: fa suonare i versi come una discussione vera, appassionata.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "DEATH, BE not PROUD, though SOME have CALL-ed THEE",
              it: "Death e be accentati di fila: il verso comincia con un colpo",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Called qui conta due sillabe (call-ed): nella poesia antica la -ed si poteva pronunciare per far tornare il ritmo (lezione 22{4}).",
        },
      ],
    },
    {
      titolo: "VERSI 5–8: IL SONNO",
      blocchi: [
        {
          tipo: "brano",
          righe: SONETTO,
          traduzione: SONETTO_TRADUZIONE,
          evidenzia: [4, 7],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Il primo argomento: il riposo e il sonno sono solo \"ritratti\" della morte, eppure ci danno molto piacere; quindi la morte, che è l'originale, deve darcene ancora di più. E infatti i migliori se ne vanno con te per primi: per le loro ossa è un riposo, per l'anima una liberazione.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "which but thy pictures be",
              it: "→ which are only your pictures: but = only, be = are",
            },
            {
              en: "Much pleasure; then from thee much more must flow",
              it: 'manca il verbo nella prima parte ([flows]); must = deduzione logica: "deve per forza" (lezione 45{2})',
            },
            {
              en: "soonest our best men with thee do go",
              it: "→ our best men go with you soonest: do + verbo per il ritmo (lezione 53{6}); best e soonest sono superlativi (lezione 26{4})",
            },
            {
              en: "soul's delivery",
              it: "genitivo sassone: la liberazione dell'anima (lezione 5{6})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Must qui non è un obbligo ma una deduzione: se la copia dà piacere, l\'originale deve darne di più. È lo stesso must di "He must be tired" (sarà stanco).',
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
              "rest and sleep… thy pictures: il sonno è un ritratto della morte",
            ],
            [
              "syllogism (sillogismo)",
              "il sonno dà piacere; il sonno è un'immagine della morte; quindi la morte dà più piacere",
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
            ["be / delivery", "versi 5 e 8: rima A"],
            ["flow / go", "versi 6 e 7: rima B"],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 9–12: LA MORTE SCHIAVA",
      blocchi: [
        {
          tipo: "brano",
          righe: SONETTO,
          traduzione: SONETTO_TRADUZIONE,
          evidenzia: [8, 11],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Il secondo argomento: la Morte non è una regina, è una schiava. Obbedisce al destino, al caso, ai re che fanno guerre, ai disperati che si uccidono; e vive in pessima compagnia, con il veleno, la guerra e la malattia. E per farci dormire basta l'oppio o un incantesimo: perché allora ti dai tante arie?",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Thou art slave to fate, chance, kings…",
              it: "→ you are a slave to…: una lista senza congiunzioni, che accumula",
            },
            {
              en: "dost with poison, war, and sickness dwell",
              it: "→ you live with poison…: dost + verbo, con i complementi in mezzo",
            },
            {
              en: "can make us sleep",
              it: 'make + persona + verbo base: "farci dormire" (lezione 46{5})',
            },
            {
              en: "as well / And better than thy stroke",
              it: "as well (as) e better than: due paragoni insieme (lezioni 26{5} e 26{6})",
            },
            {
              en: "why swell'st thou then?",
              it: "→ why do you swell, then?: domanda antica, senza do",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Swell significa "gonfiarsi": la Morte si gonfia d\'orgoglio come un pallone. È un verbo irregolare: swell / swelled / swollen.',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "asyndeton (asindeto)",
              "fate, chance, kings, and desperate men: un elenco incalzante",
            ],
            [
              "metonymy (metonimia)",
              "poppy: il papavero sta per l'oppio che se ne ricava",
            ],
            [
              "rhetorical question (domanda retorica)",
              "why swell'st thou then?",
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
            ["men / then", "versi 9 e 12: rima C"],
            ["dwell / well", "versi 10 e 11: rima D"],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 13–14: MORTE, TU MORIRAI",
      blocchi: [
        {
          tipo: "brano",
          righe: SONETTO,
          traduzione: SONETTO_TRADUZIONE,
          evidenzia: [12, 13],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "La conclusione: dopo un breve sonno ci risveglieremo per l'eternità, e la morte non esisterà più. L'ultimo colpo è un paradosso: la Morte, che uccide tutti, sarà lei a morire.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "One short sleep past",
              it: "→ when one short sleep is past: costruzione senza verbo né congiunzione",
            },
            {
              en: "death shall be no more",
              it: "shall per un futuro solenne, quasi una profezia (lezione 28{1}); no more = not any more",
            },
            {
              en: "thou shalt die",
              it: "→ you shall die: thou shalt, come nei Dieci Comandamenti (thou shalt not kill)",
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
            ["paradox (paradosso)", "Death, thou shalt die: la morte morirà"],
            ["antithesis (antitesi)", "short sleep / wake eternally"],
            [
              "polyptoton (poliptoto)",
              "death… Death… die: la stessa radice in forme diverse",
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
            [
              "eternally / die",
              "versi 13 e 14: rima E, baciata (allora -ly e die suonavano più vicini)",
            ],
          ],
        },
      ],
    },
    {
      titolo: "UN'ARRINGA CONTRO LA MORTE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutte le parti, guardale dall'alto. Donne non descrive la morte: le fa un processo. Come un avvocato, mette in fila le prove e poi pronuncia la sentenza.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "l'accusa (vv. 1–4)",
              "non sei potente: chi uccidi non muore davvero",
            ],
            [
              "primo argomento (vv. 5–8)",
              "il sonno è piacevole, quindi tu lo sei di più",
            ],
            [
              "secondo argomento (vv. 9–12)",
              "sei una schiava, e l'oppio fa meglio di te",
            ],
            ["la sentenza (vv. 13–14)", "ci risveglieremo, e tu morirai"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "È il wit dei poeti metafisici: usare la logica, i paradossi e un tono da conversazione per parlare dei temi più alti. La paura della morte viene sconfitta non con le lacrime, ma con un ragionamento.",
        },
        {
          tipo: "nota",
          testo:
            "Confronta con il Sonetto 18 di Shakespeare: anche lì il poeta sfida il tempo e la morte. Ma Shakespeare promette l'immortalità della poesia; Donne quella dell'anima.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato verso per verso, rileggilo tutto con la traduzione. Prova a leggerlo ad alta voce, con il tono di chi vince una discussione. Sotto trovi il riepilogo delle rime e delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: SONETTO,
          traduzione: SONETTO_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "testo",
          testo:
            "Lo schema è ABBA ABBA CDDC EE: due quartine incrociate con le stesse rime, poi una quartina nuova e un distico finale.",
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
              "Death, be not proud (v. 1), Death, thou shalt die (v. 14)",
            ],
            [
              "personification (personificazione)",
              "la Morte orgogliosa, schiava, che si gonfia",
            ],
            [
              "paradox (paradosso)",
              "Die not (v. 4), Death, thou shalt die (v. 14)",
            ],
            ["syllogism (sillogismo)", "vv. 5–6"],
            [
              "asyndeton (asindeto)",
              "fate, chance, kings, and desperate men (v. 9)",
            ],
            ["metonymy (metonimia)", "poppy (v. 11)"],
            [
              "rhetorical question (domanda retorica)",
              "why swell'st thou then? (v. 12)",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il sonetto comincia e finisce con la stessa parola, Death, rivolta alla Morte: il cerchio si chiude con la sua sconfitta.",
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
          domanda: "A chi parla il poeta?",
          opzioni: ["A Dio", "A una donna amata", "Alla Morte", "Al lettore"],
          giusta: 2,
          spiegazione:
            '"Death, be not proud": il poeta si rivolge alla Morte, personificata.',
          rivedi: "VERSI 1–4: LA SFIDA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Perché, secondo Donne, la morte dovrebbe dare piacere?",
          opzioni: [
            "Perché il sonno, che è solo una sua immagine, dà già piacere",
            "Perché porta via i cattivi",
            "Perché è bella",
          ],
          giusta: 0,
          spiegazione:
            'Rest and sleep sono "ritratti" della morte e danno piacere: quindi l\'originale deve darne di più.',
          rivedi: "VERSI 5–8: IL SONNO",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Che cosa significa il paradosso finale "Death, thou shalt die"?',
          opzioni: [
            "Che anche la Morte prima o poi si stancherà",
            "Che dopo la risurrezione la morte non esisterà più",
            "Che il poeta vuole uccidere qualcuno",
          ],
          giusta: 1,
          spiegazione:
            'Ci svegliamo per l\'eternità e "death shall be no more": la morte è vinta.',
          rivedi: "VERSI 13–14: MORTE, TU MORIRAI",
        },
        {
          tipo: "sottotitolo",
          testo: "L'inglese di Donne",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni forma antica a quella moderna.",
          coppie: [
            ["be not proud", "don't be proud"],
            ["thou canst", "you can"],
            ["thou shalt", "you shall"],
            ["thou art", "you are"],
            ["dost", "do"],
          ],
          rivedi: "L'INGLESE DI DONNE",
        },
        {
          tipo: "completa",
          consegna: 'Riscrivi in inglese moderno: "Death, be not proud".',
          prima: "Death,",
          dopo: "be proud.",
          risposte: ["don't", "do not"],
          spiegazione:
            "Oggi l'imperativo negativo vuole don't, anche con be (lezione 19{2}).",
          rivedi: "VERSI 1–4: LA SFIDA",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi nell'ordine dell'inglese moderno.",
          citazione: "soonest our best men with thee do go",
          parole: ["go", "you", "soonest", "best", "our", "men", "with"],
          soluzione: ["our", "best", "men", "go", "with", "you", "soonest"],
          spiegazione:
            "Soggetto + verbo + complementi: our best men go with you soonest. Thee = you.",
          rivedi: "VERSI 5–8: IL SONNO",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi la domanda in inglese moderno.",
          citazione: "why swell'st thou then?",
          parole: ["then", "swell", "do", "why", "you"],
          soluzione: ["why", "do", "you", "swell", "then"],
          spiegazione:
            "Oggi le domande al presente vogliono do: why do you swell?",
          rivedi: "VERSI 9–12: LA MORTE SCHIAVA",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale struttura c'è in questo verso?",
          citazione: "nor yet canst thou kill me",
          opzioni: [
            "Un passivo",
            "Un condizionale",
            "Un'inversione dopo una negazione",
            "Un imperativo",
          ],
          giusta: 2,
          spiegazione:
            "Dopo nor il verbo (canst) va prima del soggetto (thou) (lezione 53{2}).",
          rivedi: "VERSI 1–4: LA SFIDA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che valore ha "must" in "from thee much more must flow"?',
          opzioni: ["Deduzione logica", "Obbligo", "Divieto", "Permesso"],
          giusta: 0,
          spiegazione:
            "Non è un obbligo: se il sonno dà piacere, la morte deve per forza darne di più. È il must della deduzione (lezione 45{2}).",
          rivedi: "VERSI 5–8: IL SONNO",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "possono farci dormire".',
          prima: "can",
          dopo: "us sleep",
          risposte: ["make"],
          spiegazione:
            "Make + persona + verbo base: make us sleep (lezione 46{5}).",
          rivedi: "VERSI 9–12: LA MORTE SCHIAVA",
        },
        {
          tipo: "sottotitolo",
          testo: "Forma e figure",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è lo schema delle rime di questo sonetto?",
          opzioni: [
            "ABAB CDCD EFEF GG",
            "ABBA ABBA CDDC EE",
            "AABB CCDD EEFF GG",
          ],
          giusta: 1,
          spiegazione:
            "Due quartine incrociate come in Petrarca, poi CDDC e un distico finale all'inglese.",
          rivedi: "LA FORMA: UN SONETTO DIVERSO",
        },
        {
          tipo: "seleziona",
          consegna: 'Tocca le parole che rimano con "so".',
          parole: ["overthrow", "thee", "flow", "go", "me", "dwell"],
          giuste: [0, 2, 3],
          spiegazione:
            'So, overthrow, flow e go hanno lo stesso suono finale "-ou": sono le rime B delle prime due quartine.',
          rivedi: "RILEGGILO",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["paradox", "Death, thou shalt die"],
            ["metonymy", "poppy"],
            ["apostrophe", "Death, be not proud"],
            ["rhetorical question", "why swell'st thou then?"],
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
          consegna: "Traduci in italiano il distico finale.",
          testo:
            "One short sleep past, we wake eternally\nAnd death shall be no more; Death, thou shalt die.",
          soluzione:
            "Passato un breve sonno, ci svegliamo per sempre, e la morte non sarà più; Morte, tu morirai.",
          spiegazione:
            'Hai reso "One short sleep past" con una frase breve, senza verbo, come l\'originale? È quella brevità a dare forza al verso.',
          rivedi: "VERSI 13–14: MORTE, TU MORIRAI",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of how Donne argues against Death.",
          punti: [
            "the apostrophe and personification",
            "one argument (sleep, or Death as a slave)",
            "the final paradox",
            "the metaphysical wit",
          ],
          modello:
            'In this Holy Sonnet Donne addresses Death directly, personifying it as a proud figure who believes it is "mighty and dreadful". He then builds a logical case against it: rest and sleep are only Death\'s "pictures", yet they give pleasure, so Death itself must give even more. Death is also described as a "slave to fate, chance, kings, and desperate men", weaker than poppy or charms. The poem ends with a paradox, "Death, thou shalt die", because after resurrection death will no longer exist. This mix of logic, paradox and passion is typical of metaphysical wit.',
          spiegazione:
            "Hai citato il testo e usato termini come personification, paradox e wit? Sono le cose che un esaminatore cerca.",
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
