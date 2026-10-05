import { Lezione } from "@/types/lezione";

// John McCrae, In Flanders Fields (1915), pubblico dominio
const POESIA = [
  "In Flanders fields the poppies blow",
  "Between the crosses, row on row,",
  "That mark our place; and in the sky",
  "The larks, still bravely singing, fly",
  "Scarce heard amid the guns below.",
  "We are the Dead. Short days ago",
  "We lived, felt dawn, saw sunset glow,",
  "Loved and were loved, and now we lie",
  "In Flanders fields.",
  "Take up our quarrel with the foe:",
  "To you from failing hands we throw",
  "The torch; be yours to hold it high.",
  "If ye break faith with us who die",
  "We shall not sleep, though poppies grow",
  "In Flanders fields.",
];

const POESIA_TRADUZIONE = [
  "Nei campi delle Fiandre sbocciano i papaveri",
  "tra le croci, fila dopo fila,",
  "che segnano il nostro posto; e nel cielo",
  "le allodole, ancora cantando coraggiose, volano,",
  "appena udite tra i cannoni laggiù.",
  "Noi siamo i Morti. Pochi giorni fa",
  "vivevamo, sentivamo l'alba, vedevamo splendere il tramonto,",
  "amavamo ed eravamo amati, e ora giacciamo",
  "nei campi delle Fiandre.",
  "Riprendete voi la nostra lotta contro il nemico:",
  "a voi, da mani che cedono, lanciamo",
  "la fiaccola; tocca a voi tenerla alta.",
  "Se tradirete la fede di noi che moriamo,",
  "non dormiremo, anche se crescono i papaveri",
  "nei campi delle Fiandre.",
];

export const flandersFields: Lezione = {
  id: "flanders-fields",
  titolo: "In Flanders Fields",
  descrizione:
    "La poesia dei papaveri della Grande Guerra: lettura, analisi ed esercizi",
  chiavi: "McCrae, Prima guerra mondiale, war poets, papavero, rondeau",
  livello: "Letteratura",
  sottotitolo: "Modulo C7 · John McCrae",
  citazione: {
    testo: "We are the Dead. Short days ago / We lived.",
    fonte: "John McCrae, In Flanders Fields (1915)",
    traduzione: "Noi siamo i Morti. Pochi giorni fa vivevamo.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Quindici versi, scritti al fronte, in un giorno di battaglia. Leggi la poesia tutta una volta, con calma: fai attenzione a chi parla. Nei riquadri successivi la analizziamo strofa per strofa; la traduzione completa la trovi alla fine.",
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
            "John McCrae (1872–1918) era un medico canadese, arruolato come ufficiale nella Prima guerra mondiale (lezione C7{1}). Nella primavera del 1915 era in Belgio, nelle Fiandre, durante la seconda battaglia di Ypres, una delle più sanguinose della guerra. Il 2 maggio morì un suo giovane amico, il tenente Alexis Helmer; il giorno dopo, McCrae scrisse questa poesia.",
        },
        {
          tipo: "testo",
          testo:
            "La poesia fu pubblicata a dicembre del 1915 dalla rivista inglese Punch e divenne subito famosissima. McCrae morì di polmonite in Francia nel gennaio del 1918, senza vedere la fine della guerra.",
        },
        {
          tipo: "nota",
          testo:
            "I papaveri crescono bene nei terreni smossi: nei campi di battaglia, sconvolti dalle bombe e dalle trincee, fiorivano in grande quantità tra le tombe. Grazie a questa poesia il papavero rosso è diventato il simbolo del ricordo dei caduti: nel Regno Unito e in Canada si porta sul petto a novembre, per il Remembrance Day (11 novembre).",
        },
      ],
    },
    {
      titolo: "STROFA 1: I PAPAVERI E LE ALLODOLE",
      blocchi: [
        {
          tipo: "brano",
          righe: POESIA,
          traduzione: POESIA_TRADUZIONE,
          evidenzia: [0, 4],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Nei campi delle Fiandre i papaveri fioriscono tra le croci, allineate fila dopo fila. Le croci "segnano il nostro posto": all\'improvviso capiamo che a parlare sono i morti. In cielo le allodole volano e cantano ancora, coraggiose, ma il loro canto quasi non si sente, coperto dai cannoni.',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "the poppies blow",
              it: 'blow qui significa "fiorire", un uso antico e poetico; present simple per una scena che si ripete',
            },
            {
              en: "row on row",
              it: '"fila dopo fila": un\'espressione che indica ripetizione, come day after day',
            },
            {
              en: "That mark our place",
              it: "relativa con that (lezione 44{1}); our rivela chi parla",
            },
            {
              en: "The larks, still bravely singing, fly",
              it: 'un -ing dentro la frase, tra virgole: "che cantano ancora coraggiose"; bravely è un avverbio di modo (lezione 33{1})',
            },
            {
              en: "Scarce heard amid the guns below",
              it: 'scarce = scarcely, appena; heard è un participio: "appena udite"',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Scarcely è un avverbio negativo come hardly: vuol dire \"quasi per niente\". Se si mette all'inizio della frase, vuole l'inversione: Scarcely had he arrived when… (lezione 53{2}).",
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
              "il rosso dei papaveri, le croci, il cielo: una scena che si vede",
            ],
            [
              "antithesis (antitesi)",
              "le allodole che cantano in cielo contro i cannoni a terra: la vita contro la guerra",
            ],
            [
              "alliteration (allitterazione)",
              "bravely… below; Flanders fields",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LA FORMA: IL RONDEAU",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La poesia è un rondeau, una forma antica di origine francese: quindici versi in tre strofe (5 + 4 + 6), con due sole rime, e un ritornello preso dalle prime parole della poesia. Il metro è il tetrametro giambico: otto sillabe, quattro accenti, da-DUM.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "in FLAN- | ders FIELDS | the POP- | pies BLOW",
              it: "otto sillabe, quattro accenti",
            },
            {
              en: "in FLAN- | ders FIELDS.",
              it: "il ritornello: solo quattro sillabe",
            },
          ],
        },
        {
          tipo: "tabella",
          righe: [
            [
              "rima A (-ow, -o)",
              "blow, row, below, ago, glow, foe, throw, grow",
            ],
            ["rima B (-y, -ie)", "sky, fly, lie, high, die"],
            ["ritornello", "In Flanders fields (vv. 9 e 15)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il ritornello è cortissimo e cade alla fine della seconda e della terza strofa. Come una campana che suona: riporta sempre il lettore nello stesso luogo, il cimitero.",
        },
      ],
    },
    {
      titolo: "STROFA 2: NOI SIAMO I MORTI",
      blocchi: [
        {
          tipo: "brano",
          righe: POESIA,
          traduzione: POESIA_TRADUZIONE,
          evidenzia: [5, 8],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "I morti si presentano: \"Noi siamo i Morti\". Pochi giorni fa erano vivi come chiunque: sentivano l'alba, vedevano i tramonti, amavano ed erano amati. Ora giacciono qui. In quattro versi c'è tutta una vita, e la sua fine improvvisa.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "We are the Dead",
              it: "present simple: i morti parlano adesso; the + aggettivo = i morti (lezione 3{6})",
            },
            {
              en: "Short days ago / We lived",
              it: "ago + past simple: un momento concluso nel passato (lezione 31{6})",
            },
            {
              en: "felt dawn, saw sunset glow",
              it: "see + oggetto + verbo base: vedere il tramonto risplendere (lezione 13{5})",
            },
            {
              en: "Loved and were loved",
              it: "attivo e passivo dello stesso verbo, uno accanto all'altro (lezione 43{1})",
            },
            {
              en: "and now we lie",
              it: "di nuovo il presente: il contrasto tra ieri e oggi",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Guarda i tempi verbali: presente (We are), passato (We lived… loved), presente (now we lie). La grammatica racconta la storia: vivi ieri, morti oggi.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["prosopopoeia (prosopopea)", "i morti prendono la parola"],
            [
              "asyndeton (asindeto)",
              "We lived, felt dawn, saw sunset glow: i verbi in fila, senza congiunzioni, come una vita che scorre veloce",
            ],
            [
              "polyptoton (poliptoto)",
              "Loved and were loved: lo stesso verbo, attivo e passivo",
            ],
            ["antithesis (antitesi)", "dawn / sunset; lived / lie"],
          ],
        },
      ],
    },
    {
      titolo: "STROFA 3: LA FIACCOLA",
      blocchi: [
        {
          tipo: "brano",
          righe: POESIA,
          traduzione: POESIA_TRADUZIONE,
          evidenzia: [9, 14],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "I morti si rivolgono ai vivi e chiedono loro di continuare la battaglia. Con mani che non hanno più forza passano la fiaccola, come in una staffetta: tocca a voi tenerla alta. E avvertono: se tradirete la nostra fede, non troveremo pace, anche se i papaveri crescono sulle nostre tombe.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Take up our quarrel with the foe",
              it: "imperativo (lezione 19{1}); take up = riprendere, assumersi: un phrasal verb (lezione 47{1})",
            },
            {
              en: "To you from failing hands we throw / The torch",
              it: "→ we throw the torch to you from failing hands: i complementi prima del soggetto, per dare enfasi a you",
            },
            {
              en: "be yours to hold it high",
              it: '→ let it be yours to hold it high: un congiuntivo antico, "che sia vostro il compito"',
            },
            {
              en: "If ye break faith… / We shall not sleep",
              it: "first conditional: if + presente, poi shall/will (lezione 34{3}); ye = you plurale antico",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Us who die: dopo un pronome complemento (us) può venire una relativa: "noi che moriamo". Nota il presente: die, non died. I morti continuano a morire, ogni giorno, in quella guerra.',
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
              "Take up our quarrel: i morti parlano direttamente ai vivi, al lettore",
            ],
            [
              "metaphor (metafora)",
              "The torch: la fiaccola è il compito di continuare a combattere, come in una staffetta",
            ],
            [
              "symbol (simbolo)",
              "poppies: i papaveri sono il ricordo, ma anche il sonno (dal papavero si ricava l'oppio)",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LA GUERRA E LA MEMORIA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutta la poesia, guardane il movimento: dalla descrizione di un luogo alla voce dei morti, e infine a un appello ai vivi.",
        },
        {
          tipo: "tabella",
          righe: [
            ["strofa 1", "il luogo: papaveri, croci, allodole, cannoni"],
            ["strofa 2", "chi parla: i morti, e la vita che hanno perso"],
            [
              "strofa 3",
              "il messaggio: continuate la lotta, non dimenticateci",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            'La terza strofa fu usata durante la guerra per convincere i giovani ad arruolarsi e la gente a comprare i titoli di guerra. Pochi anni dopo, altri war poets, come Wilfred Owen e Siegfried Sassoon, scriveranno invece della guerra come di un orrore senza senso: Owen chiamerà "the old Lie" l\'idea che sia bello morire per la patria.',
        },
        {
          tipo: "nota",
          testo:
            "Un confronto classico per l'esame è con Ungaretti, che scrisse le poesie del Porto Sepolto nelle trincee del Carso, negli stessi anni: pensa a Veglia (1915) e a Soldati (\"Si sta come d'autunno / sugli alberi / le foglie\").",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzata strofa per strofa, rileggi tutta la poesia con la traduzione. Leggila lentamente, come si legge a una cerimonia del ricordo. Sotto trovi il riepilogo delle rime e delle figure retoriche.",
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
            "È un rondeau: lo schema è AABBA AABR AABBAR, dove R è il ritornello In Flanders fields. Tutta la poesia si regge su due sole rime.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["imagery (immagini)", "poppies, crosses, larks, guns (strofa 1)"],
            [
              "antithesis (antitesi)",
              "le allodole e i cannoni (vv. 3–5), lived / lie (vv. 7–8)",
            ],
            ["prosopopoeia (prosopopea)", "We are the Dead (v. 6)"],
            [
              "asyndeton (asindeto)",
              "We lived, felt dawn, saw sunset glow (v. 7)",
            ],
            ["polyptoton (poliptoto)", "Loved and were loved (v. 8)"],
            ["metaphor (metafora)", "the torch (vv. 11–12)"],
            ["symbol (simbolo)", "poppies (vv. 1 e 14)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "La poesia comincia e finisce con i papaveri: all'inizio sono fiori in un campo, alla fine sono la promessa di non dimenticare.",
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
          domanda: "Chi parla nella poesia?",
          opzioni: [
            "Un generale",
            "I soldati morti",
            "Le allodole",
            "Il poeta, da solo",
          ],
          giusta: 1,
          spiegazione:
            '"We are the Dead": a parlare sono i caduti sepolti nei campi delle Fiandre.',
          rivedi: "STROFA 2: NOI SIAMO I MORTI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa chiedono i morti ai vivi?",
          opzioni: [
            "Di dimenticarli",
            "Di portare fiori sulle loro tombe",
            "Di continuare la loro lotta e non tradire la loro fede",
          ],
          giusta: 2,
          spiegazione:
            '"Take up our quarrel with the foe… be yours to hold it high".',
          rivedi: "STROFA 3: LA FIACCOLA",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Perché il papavero è diventato il simbolo del ricordo dei caduti?",
          opzioni: [
            "Perché cresceva tra le tombe dei campi di battaglia, ed è al centro di questa poesia",
            "Perché era il fiore preferito di McCrae",
            "Perché è il fiore nazionale del Belgio",
          ],
          giusta: 0,
          spiegazione:
            "I papaveri fiorivano nei terreni sconvolti dalla guerra; la poesia li ha resi un simbolo.",
          rivedi: "IL CONTESTO",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola al suo significato.",
          coppie: [
            ["poppies", "papaveri"],
            ["larks", "allodole"],
            ["foe", "nemico"],
            ["torch", "fiaccola"],
            ["scarce", "appena"],
          ],
          rivedi: "STROFA 1: I PAPAVERI E LE ALLODOLE",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi nell'ordine normale.",
          citazione: "To you from failing hands we throw / The torch",
          parole: ["torch", "you", "we", "to", "throw", "the"],
          soluzione: ["we", "throw", "the", "torch", "to", "you"],
          spiegazione:
            "Soggetto + verbo + oggetto + complemento: il poeta mette to you in testa per rivolgersi direttamente al lettore.",
          rivedi: "STROFA 3: LA FIACCOLA",
        },
        {
          tipo: "riordina",
          consegna: "Ricomponi il verso dei Morti.",
          citazione: "Noi siamo i Morti. Pochi giorni fa vivevamo",
          parole: ["ago", "we", "days", "lived", "short"],
          soluzione: ["short", "days", "ago", "we", "lived"],
          spiegazione:
            "Ago va dopo l'espressione di tempo, e vuole il past simple (lezione 31{6}).",
          rivedi: "STROFA 2: NOI SIAMO I MORTI",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Quale struttura c\'è in "If ye break faith with us who die / We shall not sleep"?',
          opzioni: [
            "Second conditional",
            "First conditional",
            "Third conditional",
            "Passivo",
          ],
          giusta: 1,
          spiegazione:
            "If + presente, poi shall/will: una condizione possibile nel futuro (lezione 34{3}).",
          rivedi: "STROFA 3: LA FIACCOLA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa mostra "Loved and were loved"?',
          opzioni: [
            "Due past simple attivi",
            "Un present perfect",
            "Lo stesso verbo all'attivo e al passivo",
          ],
          giusta: 2,
          spiegazione:
            "Loved (attivo) e were loved (passivo): amavano ed erano amati (lezione 43{1}).",
          rivedi: "STROFA 2: NOI SIAMO I MORTI",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "vedevamo il tramonto risplendere".',
          prima: "We saw sunset",
          dopo: "",
          risposte: ["glow"],
          spiegazione:
            "See + oggetto + verbo base: vedere qualcosa accadere (lezione 13{5}).",
          rivedi: "STROFA 2: NOI SIAMO I MORTI",
        },
        {
          tipo: "sottotitolo",
          testo: "Forma e figure",
        },
        {
          tipo: "seleziona",
          consegna: 'Tocca le parole che rimano con "blow".',
          parole: ["row", "sky", "below", "fly", "glow", "lie"],
          giuste: [0, 2, 4],
          spiegazione:
            "Blow, row, below, glow: la rima A. Sky, fly e lie sono la rima B.",
          rivedi: "LA FORMA: IL RONDEAU",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è il ritornello della poesia?",
          opzioni: [
            "In Flanders fields",
            "We are the Dead",
            "Take up our quarrel",
            "row on row",
          ],
          giusta: 0,
          spiegazione:
            "In Flanders fields: le prime parole tornano alla fine della seconda e della terza strofa.",
          rivedi: "LA FORMA: IL RONDEAU",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["prosopopoeia", "We are the Dead"],
            ["metaphor", "the torch"],
            ["asyndeton", "We lived, felt dawn, saw sunset glow"],
            ["antithesis", "larks singing / guns below"],
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
          consegna: "Traduci in italiano la seconda strofa.",
          testo:
            "We are the Dead. Short days ago\nWe lived, felt dawn, saw sunset glow,\nLoved and were loved, and now we lie\nIn Flanders fields.",
          soluzione:
            "Noi siamo i Morti. Pochi giorni fa vivevamo, sentivamo l'alba, vedevamo il tramonto risplendere, amavamo ed eravamo amati, e ora giacciamo nei campi delle Fiandre.",
          spiegazione:
            "Hai usato l'imperfetto per i verbi al passato? In italiano rende bene la vita quotidiana che i soldati facevano prima della morte.",
          rivedi: "STROFA 2: NOI SIAMO I MORTI",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of In Flanders Fields.",
          punti: [
            "who speaks",
            "the contrast between nature and war",
            "the change of tenses",
            "the message and the poppy",
          ],
          modello:
            'In Flanders Fields is spoken by dead soldiers, who suddenly reveal themselves with "We are the Dead". The first stanza contrasts the beauty of nature, the poppies and the larks "still bravely singing", with the guns of the battlefield. The second stanza moves from the present to the past and back again: "Short days ago / We lived", "and now we lie". In the last stanza the dead pass "the torch" to the living and ask them not to break faith. The poem made the red poppy the symbol of remembrance for the soldiers who died in the war.',
          spiegazione:
            "Hai citato il testo e usato termini come stanza, contrast e symbol? Sono le cose che un esaminatore cerca.",
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
