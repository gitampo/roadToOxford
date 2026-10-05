import { Lezione } from "@/types/lezione";

// Jonathan Swift, Gulliver's Travels (1726), parte I, capitolo 1: il
// risveglio a Lilliput, pubblico dominio. Una riga per ogni frase o
// parte di frase
const BRANO = [
  "I lay down on the grass, which was very short and soft,",
  "where I slept sounder than ever I remembered to have done in my life,",
  "and, as I reckoned, about nine hours; for when I awaked, it was just day-light.",
  "I attempted to rise, but was not able to stir:",
  "for, as I happened to lie on my back, I found my arms and legs were strongly fastened on each side to the ground;",
  "and my hair, which was long and thick, tied down in the same manner.",
  "I likewise felt several slender ligatures across my body, from my arm-pits to my thighs.",
  "I could only look upwards; the sun began to grow hot, and the light offended my eyes.",
  "I heard a confused noise about me; but in the posture I lay, could see nothing except the sky.",
  "In a little time I felt something alive moving on my left leg,",
  "which advancing gently forward over my breast, came almost up to my chin;",
  "when, bending my eyes downwards as much as I could,",
  "I perceived it to be a human creature not six inches high,",
  "with a bow and arrow in his hands, and a quiver at his back.",
];

const BRANO_TRADUZIONE = [
  "Mi sdraiai sull'erba, che era molto corta e morbida,",
  "dove dormii più profondamente di quanto ricordassi di aver mai fatto in vita mia,",
  "e, secondo i miei calcoli, per circa nove ore; perché quando mi svegliai era appena giorno.",
  "Cercai di alzarmi, ma non riuscii a muovermi:",
  "perché, trovandomi sdraiato sulla schiena, scoprii che braccia e gambe erano saldamente legate a terra da entrambi i lati;",
  "e i capelli, che erano lunghi e folti, legati allo stesso modo.",
  "Sentii anche diversi lacci sottili attraverso il corpo, dalle ascelle alle cosce.",
  "Potevo guardare solo verso l'alto; il sole cominciava a scottare, e la luce mi feriva gli occhi.",
  "Sentivo un rumore confuso intorno a me; ma nella posizione in cui ero, non potevo vedere altro che il cielo.",
  "Dopo poco sentii qualcosa di vivo che si muoveva sulla mia gamba sinistra,",
  "e che, avanzando piano sul mio petto, arrivò quasi fino al mento;",
  "quando, abbassando gli occhi più che potevo,",
  "mi accorsi che era una creatura umana alta nemmeno quindici centimetri,",
  "con un arco e una freccia in mano, e una faretra sulla schiena.",
];

export const gulliver: Lezione = {
  id: "gulliver",
  titolo: "Gulliver a Lilliput",
  descrizione:
    "Il risveglio di un gigante legato a terra: lettura, analisi ed esercizi",
  chiavi: "Swift, satira, Lilliput, realismo, narratore in prima persona",
  livello: "Letteratura",
  sottotitolo: "Modulo C4 · Jonathan Swift",
  citazione: {
    testo: "I perceived it to be a human creature not six inches high.",
    fonte: "Jonathan Swift, Gulliver's Travels (1726)",
    traduzione:
      "Mi accorsi che era una creatura umana alta nemmeno quindici centimetri.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Gulliver è appena naufragato ed è arrivato a nuoto su una spiaggia sconosciuta, sfinito. Il brano è in prosa: lo abbiamo diviso in righe, una per ogni frase o parte di frase. Leggilo tutto una volta. Nei riquadri successivi lo analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
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
            "Jonathan Swift (1667–1745), irlandese, fu sacerdote anglicano, decano della cattedrale di San Patrizio a Dublino e il più feroce autore satirico della sua epoca. Pubblicò I viaggi di Gulliver nel 1726, senza il suo nome, come se fosse il vero diario di viaggio di un chirurgo di bordo, Lemuel Gulliver (lezione C4{7}).",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "primo viaggio",
              "Lilliput, dove gli abitanti sono alti meno di quindici centimetri",
            ],
            ["secondo viaggio", "Brobdingnag, il paese dei giganti"],
            ["terzo viaggio", "Laputa, un'isola volante di scienziati assurdi"],
            [
              "quarto viaggio",
              "il paese degli Houyhnhnm, cavalli saggi che governano uomini bestiali",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Sembra un libro d'avventure per ragazzi, ed è diventato anche questo. Ma è una satira: a Lilliput i politici ottengono le cariche ballando sulla corda, e due partiti si combattono per l'altezza dei tacchi. Dietro i lillipuziani c'è l'Inghilterra del tempo, con le sue meschinità.",
        },
        {
          tipo: "nota",
          testo:
            'Swift scrisse a un amico che il suo scopo era "irritare il mondo, più che divertirlo" (to vex the world rather than divert it).',
        },
      ],
    },
    {
      titolo: "LE PAROLE DI SWIFT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'inglese di Swift è già moderno, con qualche parola e forma del Settecento:",
        },
        {
          tipo: "tabella",
          righe: [
            ["sounder", "più profondamente (oggi more soundly)"],
            ["reckoned", "calcolai, stimai"],
            ["awaked", "mi svegliai (oggi woke)"],
            ["stir", "muoversi appena"],
            ["fastened", "legato, fissato"],
            ["likewise", "allo stesso modo, anche"],
            ["ligatures", "lacci, legature"],
            ["offended", "feriva, dava fastidio (agli occhi)"],
            ["posture", "posizione"],
            ["perceived", "mi accorsi"],
            ["a quiver", "una faretra"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Un pollice (inch) è circa 2,5 cm: six inches sono circa quindici centimetri. Nel Regno Unito si usano ancora pollici e piedi per le misure di tutti i giorni (lezione S2{3}).",
        },
      ],
    },
    {
      titolo: "FRASI 1–3: IL SONNO",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [0, 2],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Stremato dal naufragio, Gulliver si sdraia sull'erba e dorme come non ha mai dormito in vita sua: circa nove ore. Quando si sveglia, è appena l'alba. Tutto è normale, quasi noioso: ed è proprio questo tono calmo a preparare la sorpresa.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I lay down on the grass",
              it: "lay è il passato di lie (sdraiarsi): lie / lay / lain (lezione 23{3})",
            },
            {
              en: "which was very short and soft, / where I slept",
              it: "due relative di fila: which per la cosa, where per il luogo (lezione 44{1})",
            },
            {
              en: "sounder than ever I remembered to have done",
              it: 'comparativo + than ever: "più che mai"; to have done = infinito passato (lezione 26{5})',
            },
            {
              en: "when I awaked",
              it: "awaked è il passato antico di awake: oggi woke (lezione 23{2})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Lie (sdraiarsi, giacere) e lay (posare, mettere giù) si confondono anche tra i madrelingua, perché il passato di lie è proprio lay. Ricorda: I lay down (mi sdraiai) ma I laid the book on the table (posai il libro).",
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
              "about nine hours, just day-light: numeri e orari precisi, come in un diario di bordo",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 4–7: LEGATO A TERRA",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [3, 6],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Gulliver prova ad alzarsi e non ci riesce. Scopre di essere legato a terra: braccia, gambe, perfino i capelli, e sottili lacci gli attraversano il corpo dalle ascelle alle cosce. Il gigante è prigioniero, ma ancora non sa di chi.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I attempted to rise",
              it: "attempt + to: cercare di (lezione 48{3})",
            },
            {
              en: "was not able to stir",
              it: "be able to: il passato di can per una situazione precisa (lezione 25{5})",
            },
            {
              en: "as I happened to lie on my back",
              it: 'happen to + verbo: "mi trovavo per caso"; as = siccome',
            },
            {
              en: "my arms and legs were strongly fastened",
              it: "passivo al passato: was/were + participio (lezione 43{2})",
            },
            {
              en: "and my hair… tied down in the same manner",
              it: "manca il verbo: and my hair (was) tied down",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Hair qui è singolare (my hair… was), come sempre quando indica tutti i capelli (lezione 17{1}).",
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
              "arms and legs… hair… ligatures across my body: l'elenco fa sentire la prigionia, parte dopo parte",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LO STILE: IL REALISMO DEI NUMERI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Hai notato i numeri? Nove ore, le ascelle e le cosce, sei pollici. Gulliver racconta l'incredibile con la precisione di un medico che compila un rapporto. È la tecnica di Swift: più la storia è assurda, più il tono è serio e misurato.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "prima persona",
              "il narratore è un testimone: ha visto con i suoi occhi",
            ],
            [
              "misure e numeri",
              "nine hours, six inches: rendono credibile l'impossibile",
            ],
            ["tono calmo", "nessuna esclamazione, nessun commento: solo fatti"],
            [
              "parodia",
              "Swift imita i diari di viaggio veri, molto popolari nel Settecento",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Lo stesso stile di Defoe in Robinson Crusoe (1719), uscito sette anni prima. Ma Defoe lo usa per rendere vera una storia realistica; Swift per rendere credibile una storia assurda e prendere in giro il lettore.",
        },
      ],
    },
    {
      titolo: "FRASI 8–11: QUALCOSA SI MUOVE",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [7, 10],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Immobile, Gulliver può guardare solo il cielo; il sole comincia a scottare. Sente un rumore confuso intorno a sé. Poi sente qualcosa di vivo che gli cammina sulla gamba, sale sul petto e arriva quasi al mento.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "the sun began to grow hot",
              it: "begin to + verbo (lezione 48{3}); grow + aggettivo = diventare",
            },
            {
              en: "in the posture I lay",
              it: "→ in the position (in which) I lay: relativa senza pronome (lezione 44{3})",
            },
            {
              en: "could see nothing except the sky",
              it: "nothing except = niente tranne; una sola negazione (lezione 18{3})",
            },
            {
              en: "I felt something alive moving on my left leg",
              it: "feel + oggetto + -ing: sentire qualcosa mentre succede (lezione 13{5})",
            },
            {
              en: "which advancing gently forward… came",
              it: 'dentro la relativa, un -ing: "che, avanzando… arrivò"',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Something alive, non alive something: alcuni aggettivi come alive, asleep, afraid non vanno mai prima del nome, e dopo something l'aggettivo va comunque dopo (something interesting).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "suspense",
              "il narratore, come il lettore, non vede: sente un rumore, poi un movimento, e la rivelazione è rimandata",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 12–14: LA SCOPERTA",
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
            "Abbassando gli occhi più che può, Gulliver finalmente vede: è un essere umano, alto nemmeno quindici centimetri, armato di arco e frecce. Il gigante legato e il minuscolo guerriero armato: la situazione è comica, e la satira comincia.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "bending my eyes downwards as much as I could",
              it: "-ing per un'azione contemporanea; as much as I could = più che potevo (lezione 26{6})",
            },
            {
              en: "I perceived it to be a human creature",
              it: 'perceive + oggetto + to be: "mi accorsi che era"',
            },
            {
              en: "not six inches high",
              it: "→ less than six inches tall: per misurare l'altezza si usa numero + unità + high o tall",
            },
            {
              en: "with a bow and arrow in his hands",
              it: "with + nome: aggiunge i particolari (come in He's the guy with the glasses)",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Nota il passaggio da it a his: prima la creatura è "una cosa" (it), poi, appena Gulliver capisce che è un uomo, diventa "lui" (his hands). La grammatica segue la scoperta (lezione 1{2}).',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "irony (ironia)",
              "un esercito di creature minuscole tiene prigioniero un gigante, e lo minaccia con le frecce",
            ],
            [
              "anticlimax",
              "dopo tanta tensione, la rivelazione è una creaturina alta quindici centimetri",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LA SATIRA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutto il brano, guardalo dall'alto. Swift costruisce una situazione rovesciata: il gigante è impotente, i minuscoli sono i padroni. Nei capitoli successivi i lillipuziani si mostreranno orgogliosi, litigiosi e crudeli, convinti di essere il centro del mondo.",
        },
        {
          tipo: "tabella",
          righe: [
            ["il risveglio (frasi 1–3)", "tutto è normale"],
            [
              "la prigionia (frasi 4–7)",
              "il corpo è legato, la mente non capisce",
            ],
            ["il movimento (frasi 8–11)", "qualcosa di vivo si avvicina"],
            ["la rivelazione (frasi 12–14)", "un uomo minuscolo e armato"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Il messaggio della satira: la grandezza è relativa. I lillipuziani sono ridicoli nella loro superbia, e il lettore ride di loro; ma i lillipuziani siamo noi, con le nostre guerre per motivi minuscoli.",
        },
        {
          tipo: "nota",
          testo:
            "Dal libro di Swift vengono parole entrate nell'uso: lilliputian (minuscolo, meschino) e, in informatica, big-endian e little-endian (lezione C4{7}).",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato frase per frase, rileggi tutto il brano con la traduzione. Nota come il tono resta calmo e preciso anche quando la situazione diventa incredibile. Sotto trovi il riepilogo delle figure retoriche.",
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
              "realistic detail (dettaglio realistico)",
              "about nine hours (frase 3), not six inches high (frase 13)",
            ],
            [
              "enumeration (enumerazione)",
              "arms and legs… hair… ligatures (frasi 5–7)",
            ],
            ["suspense", "noise… something alive… (frasi 9–11)"],
            [
              "irony (ironia)",
              "il gigante prigioniero dei minuscoli (frasi 12–14)",
            ],
            ["anticlimax", "la creatura alta quindici centimetri (frase 13)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il contrasto tra il tono serissimo e la situazione assurda è il cuore dell'umorismo di Swift.",
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
          domanda: "Perché Gulliver non riesce ad alzarsi?",
          opzioni: [
            "Perché è ferito",
            "Perché è troppo stanco",
            "Perché è legato a terra",
            "Perché ha paura",
          ],
          giusta: 2,
          spiegazione:
            '"My arms and legs were strongly fastened on each side to the ground".',
          rivedi: "FRASI 4–7: LEGATO A TERRA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa sente camminare sulla sua gamba?",
          opzioni: [
            "Un essere umano alto meno di quindici centimetri",
            "Un insetto",
            "Un serpente",
          ],
          giusta: 0,
          spiegazione:
            '"A human creature not six inches high, with a bow and arrow".',
          rivedi: "FRASI 12–14: LA SCOPERTA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Perché Swift usa tanti numeri e misure precise?",
          opzioni: [
            "Perché era un matematico",
            "Per rendere credibile una storia assurda, come in un vero diario di viaggio",
            "Per annoiare il lettore",
          ],
          giusta: 1,
          spiegazione:
            "Il tono serio e preciso fa sembrare vero l'impossibile: è il cuore della sua satira.",
          rivedi: "LO STILE: IL REALISMO DEI NUMERI",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola al suo significato.",
          coppie: [
            ["stir", "muoversi appena"],
            ["fastened", "legato"],
            ["likewise", "anche, allo stesso modo"],
            ["perceived", "mi accorsi"],
            ["quiver", "faretra"],
          ],
          rivedi: "LE PAROLE DI SWIFT",
        },
        {
          tipo: "completa",
          consegna: "Scrivi il passato moderno di awake (Swift usa awaked).",
          prima: "When I",
          dopo: ", it was just day-light.",
          risposte: ["woke", "awoke"],
          spiegazione: "Oggi awake e wake sono irregolari: woke (o awoke).",
          rivedi: "FRASI 1–3: IL SONNO",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi aggiungendo il verbo che manca.",
          citazione:
            "and my hair, which was long and thick, tied down in the same manner",
          parole: ["down", "was", "my", "tied", "hair"],
          soluzione: ["my", "hair", "was", "tied", "down"],
          spiegazione:
            "Swift sottintende il verbo was: è un passivo, come quello della frase prima (lezione 43{2}).",
          rivedi: "FRASI 4–7: LEGATO A TERRA",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi in inglese moderno.",
          citazione: "I perceived it to be a human creature",
          parole: ["it", "a", "was", "realised", "creature", "human", "I"],
          soluzione: ["I", "realised", "it", "was", "a", "human", "creature"],
          spiegazione:
            "Perceive + oggetto + to be è formale; oggi si direbbe I realised (that) it was….",
          rivedi: "FRASI 12–14: LA SCOPERTA",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale struttura c'è in questa frase?",
          citazione:
            "my arms and legs were strongly fastened on each side to the ground",
          opzioni: [
            "Un condizionale",
            "Un present perfect",
            "Un passivo",
            "Un imperativo",
          ],
          giusta: 2,
          spiegazione:
            "Were + participio: forma passiva al passato (lezione 43{2}).",
          rivedi: "FRASI 4–7: LEGATO A TERRA",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Che cosa significa "I felt something alive moving on my left leg"?',
          opzioni: [
            "Sentii qualcosa di vivo che si muoveva sulla mia gamba",
            "Mi sentivo vivo e mi muovevo",
            "Qualcosa mi fece muovere la gamba",
          ],
          giusta: 0,
          spiegazione:
            "Feel + oggetto + -ing: sentire qualcosa mentre accade (lezione 13{5}).",
          rivedi: "FRASI 8–11: QUALCOSA SI MUOVE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Perché Swift passa da "it" a "his"?',
          citazione:
            "I perceived it to be a human creature… with a bow and arrow in his hands",
          opzioni: [
            "È un errore",
            'Perché Gulliver capisce che la "cosa" è un essere umano',
            "Perché parla di due creature diverse",
          ],
          giusta: 1,
          spiegazione:
            "Prima è una cosa sconosciuta (it); quando Gulliver la riconosce come uomo, diventa his (lezione 1{2}).",
          rivedi: "FRASI 12–14: LA SCOPERTA",
        },
        {
          tipo: "sottotitolo",
          testo: "Stile e figure",
        },
        {
          tipo: "seleziona",
          consegna:
            "Tocca le parole che danno una misura precisa nella frase 13.",
          parole: ["a", "human", "creature", "not", "six", "inches", "high"],
          giuste: [4, 5, 6],
          spiegazione:
            "Six inches high: un numero, un'unità di misura, una dimensione.",
          rivedi: "LO STILE: IL REALISMO DEI NUMERI",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura o tecnica al suo esempio.",
          coppie: [
            ["realistic detail", "about nine hours"],
            ["suspense", "something alive moving on my left leg"],
            ["irony", "il gigante prigioniero dei minuscoli"],
            ["anticlimax", "una creatura alta quindici centimetri"],
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
          consegna: "Traduci in italiano le ultime tre righe.",
          testo:
            "when, bending my eyes downwards as much as I could, I perceived it to be a human creature not six inches high, with a bow and arrow in his hands, and a quiver at his back.",
          soluzione:
            "quando, abbassando gli occhi più che potevo, mi accorsi che era una creatura umana alta nemmeno quindici centimetri, con un arco e una freccia in mano e una faretra sulla schiena.",
          spiegazione:
            "Hai convertito six inches in centimetri o l'hai lasciato in pollici? Entrambe le scelte sono possibili: la prima è più chiara, la seconda più fedele.",
          rivedi: "FRASI 12–14: LA SCOPERTA",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of how Swift creates humour in this passage.",
          punti: [
            "the calm, precise tone",
            "the numbers",
            "the reversal giant / tiny people",
            "the satire",
          ],
          modello:
            'Swift tells an absurd story in a calm, precise tone, as if Gulliver were writing a ship\'s report. Numbers and measurements, such as "about nine hours" and "not six inches high", make the impossible seem real. The situation is reversed: the giant lies helpless, while a tiny man with "a bow and arrow" stands on his chest. This contrast between serious style and ridiculous content creates humour. It also prepares the satire: the proud Lilliputians are a small mirror of English society.',
          spiegazione:
            "Hai citato il testo e usato termini come tone, irony e satire? Sono le cose che un esaminatore cerca.",
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
