import { Lezione } from "@/types/lezione";

// Beowulf, versi 1–11, nella traduzione di Francis B. Gummere (1910),
// pubblico dominio
const BEOWULF = [
  "LO, praise of the prowess of people-kings",
  "of spear-armed Danes, in days long sped,",
  "we have heard, and what honor the athelings won!",
  "Oft Scyld the Scefing from squadroned foes,",
  "from many a tribe, the mead-bench tore,",
  "awing the earls. Since erst he lay",
  "friendless, a foundling, fate repaid him:",
  "for he waxed under welkin, in wealth he throve,",
  "till before him the folk, both far and near,",
  "who house by the whale-path, heard his mandate,",
  "gave him gifts: a good king he!",
];

const BEOWULF_TRADUZIONE = [
  "Ecco, la lode del valore dei re dei popoli",
  "dei Danesi armati di lancia, in giorni ormai lontani,",
  "abbiamo udito, e quale onore conquistarono i principi!",
  "Spesso Scyld Scefing ai nemici schierati in squadre,",
  "a molte tribù, strappò le panche dell'idromele,",
  "atterrendo i guerrieri. Da quando giacque la prima volta",
  "senza amici, un trovatello, il destino lo ripagò:",
  "crebbe infatti sotto il cielo, prosperò nella ricchezza,",
  "finché davanti a lui le genti, vicine e lontane,",
  "che abitano lungo la via della balena, udirono il suo comando",
  "e gli portarono tributi: un buon re, lui!",
];

// I primi versi dell'originale in Old English (circa 700–1000)
const ORIGINALE = [
  "Hwæt! We Gardena in geardagum,",
  "þeodcyninga, þrym gefrunon,",
  "hu ða æþelingas ellen fremedon.",
];

// Una traduzione inglese parola per parola, per vedere le somiglianze
const ORIGINALE_LETTERALE = [
  "Listen! We of the Spear-Danes in year-days (days of old),",
  "of the people-kings, the glory have heard,",
  "how the athelings (princes) did deeds of courage.",
];

export const beowulf: Lezione = {
  id: "beowulf",
  titolo: "Beowulf",
  descrizione:
    "L'inizio del grande poema epico anglosassone: lettura, analisi ed esercizi",
  chiavi: "Old English, verso allitterativo, kenning, epica",
  livello: "Letteratura",
  sottotitolo: "Modulo C2 · Anonimo anglosassone",
  citazione: {
    testo: "A good king he!",
    fonte: "Beowulf, verso 11 (traduzione di F. B. Gummere, 1910)",
    traduzione: "Un buon re, lui!",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Questi sono i primi undici versi del Beowulf, nella traduzione inglese di Francis Gummere (1910), che imita il suono e il ritmo dell'originale. Leggili tutti una volta, ad alta voce se puoi, anche se molte parole ti sembreranno strane. Nei riquadri successivi li analizziamo pezzo per pezzo; la traduzione italiana completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: BEOWULF,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il Beowulf è il più lungo poema in Old English che ci sia arrivato: 3182 versi, composti da un autore anonimo tra il 700 e il 1000. Ci è giunto in un solo manoscritto, scritto intorno all'anno 1000 e danneggiato da un incendio nel 1731: alcune parole sono andate perse per sempre.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "prima parte",
              "il giovane Beowulf, un guerriero dei Geati (nel sud della Svezia), uccide il mostro Grendel",
            ],
            [
              "seconda parte",
              "uccide la madre di Grendel, che vuole vendicare il figlio",
            ],
            [
              "terza parte",
              "cinquant'anni dopo, Beowulf ormai re combatte un drago: lo uccide, ma muore",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            'La storia è ambientata in Scandinavia, la terra da cui venivano gli Anglosassoni (lezione C1{4}). Il poema nasce dalla tradizione orale: un cantore, lo scop, lo recitava nella sala del re durante i banchetti. Per questo comincia come un racconto ad alta voce: "abbiamo udito".',
        },
        {
          tipo: "nota",
          testo:
            "I versi che leggiamo non parlano ancora di Beowulf: raccontano la storia del fondatore della dinastia dei re danesi, Scyld. È il modo dell'epica di cominciare dalle origini, come l'Iliade che parte dall'ira di Achille.",
        },
      ],
    },
    {
      titolo: "L'ORIGINALE IN OLD ENGLISH",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ecco i primi tre versi nella lingua in cui furono scritti, con sotto una traduzione inglese parola per parola. L'Old English è così diverso dall'inglese di oggi che va studiato come una lingua straniera; eppure molte parole sono le nonne di parole che usi ogni giorno.",
        },
        {
          tipo: "brano",
          righe: ORIGINALE,
          traduzione: ORIGINALE_LETTERALE,
        },
        {
          tipo: "tabella",
          righe: [
            [
              "þ e ð (thorn ed eth)",
              "due lettere scomparse: si leggevano come il th di think e di this",
            ],
            ["æ (ash)", "una vocale tra a ed e, come in cat"],
            ["we", "we: è rimasta identica"],
            ["gear-dagum", "year-days: i giorni degli anni passati"],
            ["cyning", "king"],
            ["hu", "how"],
            ["æþelingas", "athelings: i principi"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Hwæt! è la prima parola del poema: un richiamo per far tacere la sala, qualcosa come "Ascoltate!" o "Ecco!". Gummere lo rende con Lo!. Tolkien, professore di Old English a Oxford, dedicò al Beowulf una delle conferenze più famose della critica letteraria (1936).',
        },
      ],
    },
    {
      titolo: "LE PAROLE DI GUMMERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Gummere sceglie apposta parole antiche, perché il lettore senta di essere davanti a un testo di mille anni fa. Prima di iniziare, ecco quelle che ti servono:",
        },
        {
          tipo: "tabella",
          righe: [
            ["lo", "ecco, guarda (un'esclamazione antica)"],
            ["prowess", "valore, prodezza"],
            ["athelings", "principi, nobili"],
            ["oft", "often"],
            ["foes", "nemici"],
            [
              "mead-bench",
              "la panca della sala dove si beveva idromele (mead)",
            ],
            ["erst", "first, per la prima volta"],
            ["waxed", "grew: crebbe (oggi wax si usa per la luna che cresce)"],
            ["welkin", "il cielo"],
            ["throve", "thrived: prosperò"],
            ["folk", "la gente, il popolo"],
            ["mandate", "il comando"],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 1–3: ASCOLTATE!",
      blocchi: [
        {
          tipo: "brano",
          righe: BEOWULF,
          traduzione: BEOWULF_TRADUZIONE,
          evidenzia: [0, 2],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Il cantore chiede silenzio e annuncia l\'argomento: "abbiamo sentito" le lodi dei re danesi dei tempi antichi e le imprese dei loro principi. Non dice "io ho inventato", ma "noi abbiamo udito": la storia appartiene a tutta la comunità, che se la tramanda da generazioni.',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "testo",
          testo: "Prima rimettiamo la frase in ordine:",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Praise of the prowess of people-kings… we have heard",
              it: "→ We have heard praise of the prowess of the people-kings",
            },
          ],
        },
        {
          tipo: "tabella",
          righe: [
            [
              "praise… we have heard",
              "il complemento oggetto va in testa, prima del soggetto: lo mette in risalto (lezione 53{1})",
            ],
            [
              "we have heard",
              "present perfect: un'esperienza che conta adesso, non un momento preciso (lezione 29{3})",
            ],
            [
              "what honor the athelings won",
              'what + nome: "quale onore", in una frase esclamativa (lezione 44{6})',
            ],
            ["won", "past simple irregolare di win (lezione 23{2})"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "People-kings e spear-armed sono parole composte: due parole unite in una sola. L'inglese di oggi le usa ancora moltissimo (a bus stop, a ten-minute walk), mettendo davanti la parola che fa da aggettivo (lezione 4{6}).",
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
              "Lo!: il cantore si rivolge direttamente al pubblico",
            ],
            [
              "alliteration (allitterazione)",
              "praise… prowess… people: la stessa consonante all'inizio di parole vicine",
            ],
          ],
        },
      ],
    },
    {
      titolo: "IL METRO: IL VERSO ALLITTERATIVO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La poesia in Old English non usa la rima. Il verso è diviso in due metà da una pausa (la cesura) e ha quattro accenti forti. A tenere insieme le due metà è l'allitterazione: almeno una parola accentata della prima metà comincia con lo stesso suono di una della seconda.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Hwæt! We GAR-dena | in GEAR-dagum",
              it: "originale: G e G (la g di gear allora si pronunciava simile alla y)",
            },
            {
              en: "LO, PRAISE of the PROW-ess | of PEO-ple-KINGS",
              it: "Gummere: P, P, P",
            },
            {
              en: "for he WAXED under WEL-kin, | in WEALTH he THROVE",
              it: "Gummere: W, W, W",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Pensa a un poema da recitare a memoria, davanti a una sala rumorosa: l'allitterazione aiutava il cantore a ricordare i versi e il pubblico a seguirli. Ne restano tracce nelle espressioni inglesi di oggi: safe and sound, time and tide, friend or foe.",
        },
      ],
    },
    {
      titolo: "VERSI 4–7: SCYLD, IL TROVATELLO",
      blocchi: [
        {
          tipo: "brano",
          righe: BEOWULF,
          traduzione: BEOWULF_TRADUZIONE,
          evidenzia: [3, 6],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Scyld Scefing era arrivato da bambino, solo, su una nave senza equipaggio: un trovatello. Diventato adulto, terrorizzò i popoli vicini e "strappò loro le panche dell\'idromele": prese le loro sale, cioè il loro potere. Il destino lo ripagò del suo inizio difficile.',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "from many a tribe the mead-bench tore",
              it: "→ he tore the mead-bench from many a tribe: il verbo va in fondo, come in latino",
            },
            {
              en: "many a tribe",
              it: "many a + singolare = many + plurale (many tribes): forma letteraria, si usa ancora (many a time)",
            },
            {
              en: "awing the earls",
              it: "-ing al posto di una frase intera: and so he awed the earls (lezione 48{1})",
            },
            {
              en: "Since erst he lay friendless",
              it: "→ since he first lay without friends: lay è il passato irregolare di lie (giacere)",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Tore (da tear, strappare) e lay (da lie, giacere) sono due paradigmi irregolari importanti (lezione 23{3}). Attenzione: lie / lay / lain (giacere) è diverso da lay / laid / laid (posare).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "metonymy (metonimia)",
              "the mead-bench tore: la panca della sala vale per la sala intera, e la sala per il potere del popolo",
            ],
            [
              "alliteration (allitterazione)",
              "friendless, a foundling, fate: tre F nello stesso verso",
            ],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 8–11: UN BUON RE",
      blocchi: [
        {
          tipo: "brano",
          righe: BEOWULF,
          traduzione: BEOWULF_TRADUZIONE,
          evidenzia: [7, 10],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Scyld crebbe e diventò ricco, finché tutti i popoli che vivono al di là del mare dovettero obbedirgli e pagargli un tributo. Il giudizio arriva in tre parole secche: era un buon re. Per gli Anglosassoni il buon re è forte con i nemici e generoso con i suoi.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "he waxed… he throve",
              it: "due passati antichi: oggi si direbbe he grew… he thrived",
            },
            {
              en: "till before him the folk… heard his mandate",
              it: "till = until; il soggetto (the folk) arriva dopo un complemento",
            },
            {
              en: "who house by the whale-path",
              it: "relativa con who (lezione 44{2}); house qui è un verbo: who live",
            },
            {
              en: "a good king he!",
              it: "manca il verbo: he was a good king! (un'esclamazione che imita l'originale)",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Folk è un nome collettivo, come people: il verbo va al plurale (the folk… heard… gave). Oggi folk sopravvive in folk music e folklore, e in folks ("gente", "ragazzi") nell\'inglese americano.',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["kenning", "the whale-path: la via della balena, cioè il mare"],
            [
              "ellipsis (ellissi)",
              "a good king he!: manca il verbo, e la frase suona più solenne",
            ],
            [
              "alliteration (allitterazione)",
              "gave him gifts: a good king: quattro G",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LE KENNING",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La kenning è la figura più tipica della poesia anglosassone e norrena: invece di nominare una cosa, la si descrive con una piccola immagine composta da due parole. Il mare è \"la via della balena\": ci vuole un attimo per capirla, e in quell'attimo il lettore vede l'immagine.",
        },
        {
          tipo: "tabella",
          righe: [
            ["whale-path, swan-road", "il mare"],
            ["bone-house", "il corpo"],
            ["battle-light", "la spada (che brilla nella battaglia)"],
            ["sea-wood", "la nave"],
            ["ring-giver", "il re (che dona anelli ai guerrieri)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'La kenning sopravvive nell\'inglese moderno più di quanto pensi: skyscraper (il grattacielo, "che gratta il cielo") e bookworm ("verme dei libri", chi legge tantissimo) funzionano allo stesso modo.',
        },
      ],
    },
    {
      titolo: "L'EROE E IL SUO MONDO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In soli undici versi trovi i valori di tutto il poema. Ora che hai letto ogni parte, guardali insieme.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "la fama",
              "gli uomini vivono nei racconti degli altri: we have heard",
            ],
            [
              "il coraggio",
              "il valore in battaglia (prowess), che terrorizza i nemici",
            ],
            [
              "la generosità",
              "il re riceve tributi e li redistribuisce ai suoi guerrieri",
            ],
            [
              "il destino (wyrd)",
              "una forza che premia e punisce: fate repaid him",
            ],
            [
              "la comunità",
              "la sala dell'idromele, dove si mangia, si beve e si ascoltano i canti",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Il poema è stato scritto da un cristiano, ma racconta un mondo pagano. Per questo convivono il destino dei Germani e il Dio della Bibbia: Grendel, per esempio, è presentato come un discendente di Caino.",
        },
        {
          tipo: "nota",
          testo:
            "Quando studi un testo epico, chiediti sempre: che cosa rende grande un uomo in questo mondo? La risposta ti dice molto della società che l'ha prodotto.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato verso per verso, rileggilo tutto con la traduzione. Leggilo ad alta voce: sentirai le allitterazioni come colpi di tamburo. Sotto trovi il riepilogo delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: BEOWULF,
          traduzione: BEOWULF_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["apostrophe (apostrofe)", "Lo! (v. 1)"],
            [
              "alliteration (allitterazione)",
              "praise… prowess… people (v. 1), friendless… foundling… fate (v. 7), waxed… welkin… wealth (v. 8)",
            ],
            ["metonymy (metonimia)", "the mead-bench tore (v. 5)"],
            ["kenning", "the whale-path (v. 10)"],
            ["ellipsis (ellissi)", "a good king he! (v. 11)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Non ci sono rime: nella poesia anglosassone il lavoro della rima lo fa l'allitterazione.",
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
          domanda: 'Perché il poema comincia con "we have heard"?',
          opzioni: [
            "Perché il poeta ha sentito la storia in sogno",
            "Perché è una storia della tradizione orale, che la comunità si tramanda",
            "Perché il poeta è sordo",
          ],
          giusta: 1,
          spiegazione:
            "Il Beowulf nasce per essere recitato da un cantore: la storia appartiene a chi ascolta e a chi l'ha ascoltata prima.",
          rivedi: "VERSI 1–3: ASCOLTATE!",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Chi era Scyld Scefing da bambino?",
          opzioni: [
            "Il figlio di un re",
            "Un mostro",
            "Un trovatello arrivato da solo",
            "Un drago",
          ],
          giusta: 2,
          spiegazione:
            '"Friendless, a foundling": arrivò da solo e senza nessuno, e il destino lo ripagò facendolo diventare un grande re.',
          rivedi: "VERSI 4–7: SCYLD, IL TROVATELLO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "the whale-path"?',
          citazione: "who house by the whale-path",
          opzioni: [
            "Il mare",
            "Una strada di montagna",
            "Il cielo",
            "Un fiume",
          ],
          giusta: 0,
          spiegazione: "È una kenning: la via della balena è il mare.",
          rivedi: "LE KENNING",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola antica al suo significato.",
          coppie: [
            ["oft", "often"],
            ["waxed", "grew"],
            ["welkin", "il cielo"],
            ["throve", "prosperò"],
            ["foes", "nemici"],
          ],
          rivedi: "LE PAROLE DI GUMMERE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola in Old English alla parola moderna.",
          coppie: [
            ["cyning", "king"],
            ["hu", "how"],
            ["gear", "year"],
            ["we", "we"],
          ],
          rivedi: "L'ORIGINALE IN OLD ENGLISH",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi nell'ordine dell'inglese moderno.",
          citazione: "from many a tribe the mead-bench tore",
          parole: [
            "the",
            "tribe",
            "tore",
            "from",
            "mead-bench",
            "a",
            "he",
            "many",
          ],
          soluzione: [
            "he",
            "tore",
            "the",
            "mead-bench",
            "from",
            "many",
            "a",
            "tribe",
          ],
          spiegazione:
            "Nell'ordine normale: soggetto + verbo + oggetto + complemento. Il poeta mette il verbo in fondo per il ritmo.",
          rivedi: "VERSI 4–7: SCYLD, IL TROVATELLO",
        },
        {
          tipo: "riordina",
          consegna: "Aggiungi il verbo che manca e riscrivi l'esclamazione.",
          citazione: "a good king he!",
          parole: ["king", "was", "good", "a", "he"],
          soluzione: ["he", "was", "a", "good", "king"],
          spiegazione:
            "Il poeta toglie il verbo (ellissi) e mette il soggetto in fondo: la frase diventa un giudizio solenne.",
          rivedi: "VERSI 8–11: UN BUON RE",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Quale tempo verbale è "we have heard"?',
          opzioni: ["Past simple", "Present perfect", "Past perfect"],
          giusta: 1,
          spiegazione:
            "Have + participio: il present perfect parla di un'esperienza passata che conta adesso (lezione 29{3}).",
          rivedi: "VERSI 1–3: ASCOLTATE!",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "many a tribe"?',
          opzioni: ["Una tribù numerosa", "Una sola tribù", "Molte tribù"],
          giusta: 2,
          spiegazione:
            "Many a + singolare equivale a many + plurale: è una forma letteraria che si usa ancora (many a time = molte volte).",
          rivedi: "VERSI 4–7: SCYLD, IL TROVATELLO",
        },
        {
          tipo: "completa",
          consegna: "Scrivi il passato moderno di thrive (Gummere usa throve).",
          prima: "In wealth he",
          dopo: ".",
          risposte: ["thrived"],
          spiegazione:
            "Throve è il passato antico; oggi thrive è regolare: thrived.",
          rivedi: "VERSI 8–11: UN BUON RE",
        },
        {
          tipo: "sottotitolo",
          testo: "Allitterazione e figure",
        },
        {
          tipo: "seleziona",
          consegna:
            "Tocca le parole che allitterano nel verso 8 (cominciano con lo stesso suono).",
          parole: [
            "for",
            "he",
            "waxed",
            "under",
            "welkin",
            "in",
            "wealth",
            "he",
            "throve",
          ],
          giuste: [2, 4, 6],
          spiegazione:
            "Waxed, welkin, wealth: tre W accentate che tengono insieme le due metà del verso.",
          rivedi: "IL METRO: IL VERSO ALLITTERATIVO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa sostituisce la rima nella poesia anglosassone?",
          opzioni: [
            "L'allitterazione",
            "La rima baciata",
            "Il ritornello",
            "Nulla: è prosa",
          ],
          giusta: 0,
          spiegazione:
            "Il verso ha quattro accenti e due metà legate dall'allitterazione: niente rima.",
          rivedi: "IL METRO: IL VERSO ALLITTERATIVO",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni kenning al suo significato.",
          coppie: [
            ["bone-house", "il corpo"],
            ["battle-light", "la spada"],
            ["sea-wood", "la nave"],
            ["ring-giver", "il re"],
          ],
          rivedi: "LE KENNING",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Quale figura retorica è "the mead-bench tore"?',
          opzioni: ["Kenning", "Metonimia", "Domanda retorica", "Anafora"],
          giusta: 1,
          spiegazione:
            "La panca della sala sta per la sala, e la sala per il potere di un popolo: è una metonimia.",
          rivedi: "VERSI 4–7: SCYLD, IL TROVATELLO",
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
          consegna: "Traduci in italiano gli ultimi tre versi.",
          testo:
            "till before him the folk, both far and near,\nwho house by the whale-path, heard his mandate,\ngave him gifts: a good king he!",
          soluzione:
            "finché davanti a lui le genti, vicine e lontane, che abitano lungo la via della balena, udirono il suo comando e gli portarono doni: fu davvero un buon re!",
          spiegazione:
            'Hai mantenuto l\'immagine della "via della balena" o l\'hai sciolta in "il mare"? Entrambe vanno bene, ma la prima conserva la kenning.',
          rivedi: "VERSI 8–11: UN BUON RE",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short paragraph (4–5 sentences) about the opening of Beowulf.",
          punti: [
            "who is speaking and to whom",
            "the alliterative line",
            "one kenning",
            "what makes a good king",
          ],
          modello:
            'The poem opens with the voice of a singer who calls for silence with "Lo!" and speaks for the whole community: "we have heard". There is no rhyme; instead, each line is held together by alliteration, as in "praise of the prowess of people-kings". The poet calls the sea "the whale-path", a typical kenning. Scyld, a foundling who becomes a powerful ruler, shows the Anglo-Saxon ideal of kingship: strong against enemies, rich, and respected. The section ends with a simple judgement: "a good king he!"',
          spiegazione:
            "Hai citato il testo tra virgolette e usato i termini tecnici alliteration e kenning? Sono le cose che un esaminatore cerca.",
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
