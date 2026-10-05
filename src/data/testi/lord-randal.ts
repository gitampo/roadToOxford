import { Lezione } from "@/types/lezione";

// Lord Randal, ballata tradizionale (Child 12A, versione di Walter Scott,
// 1803), pubblico dominio
const LORD_RANDAL = [
  '"O where hae ye been, Lord Randal, my son?',
  'O where hae ye been, my handsome young man?"',
  '"I hae been to the wild wood; mother, make my bed soon,',
  "For I'm weary wi hunting, and fain wald lie down.\"",
  '"Where gat ye your dinner, Lord Randal, my son?',
  'Where gat ye your dinner, my handsome young man?"',
  "\"I din'd wi my true-love; mother, make my bed soon,",
  "For I'm weary wi hunting, and fain wald lie down.\"",
  '"What gat ye to your dinner, Lord Randal, my son?',
  'What gat ye to your dinner, my handsome young man?"',
  "\"I gat eels boil'd in broo; mother, make my bed soon,",
  "For I'm weary wi hunting, and fain wald lie down.\"",
  '"What became of your bloodhounds, Lord Randal, my son?',
  'What became of your bloodhounds, my handsome young man?"',
  "\"O they swell'd and they died; mother, make my bed soon,",
  "For I'm weary wi hunting, and fain wald lie down.\"",
  "\"O I fear ye are poison'd, Lord Randal, my son!",
  "O I fear ye are poison'd, my handsome young man!\"",
  "\"O yes! I am poison'd; mother, make my bed soon,",
  "For I'm sick at the heart, and I fain wald lie down.\"",
];

const LORD_RANDAL_TRADUZIONE = [
  "«Oh, dove sei stato, Lord Randal, figlio mio?",
  "Oh, dove sei stato, mio bel giovane?»",
  "«Sono stato nel bosco selvaggio; madre, preparami presto il letto,",
  "perché sono stanco della caccia, e vorrei tanto sdraiarmi.»",
  "«Dove hai cenato, Lord Randal, figlio mio?",
  "Dove hai cenato, mio bel giovane?»",
  "«Ho cenato con la mia innamorata; madre, preparami presto il letto,",
  "perché sono stanco della caccia, e vorrei tanto sdraiarmi.»",
  "«Che cosa hai mangiato a cena, Lord Randal, figlio mio?",
  "Che cosa hai mangiato a cena, mio bel giovane?»",
  "«Ho mangiato anguille bollite nel brodo; madre, preparami presto il letto,",
  "perché sono stanco della caccia, e vorrei tanto sdraiarmi.»",
  "«Che fine hanno fatto i tuoi segugi, Lord Randal, figlio mio?",
  "Che fine hanno fatto i tuoi segugi, mio bel giovane?»",
  "«Oh, si sono gonfiati e sono morti; madre, preparami presto il letto,",
  "perché sono stanco della caccia, e vorrei tanto sdraiarmi.»",
  "«Oh, temo che tu sia stato avvelenato, Lord Randal, figlio mio!",
  "Oh, temo che tu sia stato avvelenato, mio bel giovane!»",
  "«Oh sì! Sono stato avvelenato; madre, preparami presto il letto,",
  "perché ho il cuore malato, e vorrei tanto sdraiarmi.»",
];

export const lordRandal: Lezione = {
  id: "lord-randal",
  titolo: "Lord Randal",
  descrizione:
    "Un avvelenamento raccontato in cinque domande: lettura, analisi ed esercizi",
  chiavi: "ballata, scots, ritornello, ripetizione incrementale",
  livello: "Letteratura",
  sottotitolo: "Modulo C2 · Ballata tradizionale scozzese",
  citazione: {
    testo: "O where hae ye been, Lord Randal, my son?",
    fonte: "Lord Randal, ballata tradizionale",
    traduzione: "Oh, dove sei stato, Lord Randal, figlio mio?",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "È un dialogo tra una madre e un figlio. Leggilo tutto una volta: alcune parole sono in scozzese antico, ma la ripetizione ti aiuterà a capire. Nei riquadri successivi lo analizziamo strofa per strofa; la traduzione completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: LORD_RANDAL,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le ballate sono canzoni popolari narrative, nate nel Medioevo e tramandate a voce per secoli, soprattutto al confine tra Scozia e Inghilterra. Nessuno sa chi le abbia composte: ogni cantore le cambiava un po', e per questo di Lord Randal esistono decine di versioni.",
        },
        {
          tipo: "testo",
          testo:
            "All'inizio dell'Ottocento lo scrittore Walter Scott le raccolse nel Minstrelsy of the Scottish Border (1802–1803); più tardi l'americano Francis Child ne catalogò 305. Lord Randal è la ballata numero 12 della raccolta di Child, e il testo che leggiamo è la versione di Scott.",
        },
        {
          tipo: "nota",
          testo:
            "La stessa storia si trova in tutta Europa. In Italia è il canto popolare del Testamento dell'avvelenato; e Bob Dylan, nel 1962, prese da Lord Randal lo schema della sua A Hard Rain's A-Gonna Fall: \"Oh, where have you been, my blue-eyed son?\".",
        },
      ],
    },
    {
      titolo: "LO SCOTS DELLA BALLATA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La ballata è in scots, la lingua delle Lowlands scozzesi, sorella dell'inglese. Molte parole sono solo scritte e pronunciate in modo diverso: leggendole ad alta voce le riconosci subito.",
        },
        {
          tipo: "tabella",
          righe: [
            ["hae", "have"],
            ["ye", "you"],
            ["wi", "with"],
            ["gat", "got (passato di get)"],
            ["din'd", "dined: cenò, ha cenato"],
            ["wald", "would"],
            ["fain", "volentieri (oggi solo letterario)"],
            ["broo", "brodo (broth)"],
            [
              "swell'd, poison'd",
              "swelled, poisoned: l'apostrofo toglie la e che non si pronuncia",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Ye è un "voi" antico, ma qui la madre lo usa per un solo figlio: in molte varianti dell\'inglese ye, you e thou si sono mescolati a lungo. Il possessivo, invece, resta your.',
        },
      ],
    },
    {
      titolo: "STROFA 1: DOVE SEI STATO?",
      blocchi: [
        {
          tipo: "brano",
          righe: LORD_RANDAL,
          traduzione: LORD_RANDAL_TRADUZIONE,
          evidenzia: [0, 3],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "La madre vede tornare il figlio e gli chiede dove sia stato. Lui risponde in modo vago: a caccia, nel bosco. Poi chiede subito di andare a letto: è stanco. Sembra una scena di tutti i giorni, ma quella stanchezza è il primo indizio.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "O where hae ye been…?",
              it: "→ Where have you been? Present perfect: la madre chiede che cosa ha fatto fino ad ora (lezione 29{1})",
            },
            {
              en: "I hae been to the wild wood",
              it: "→ I have been to…: been to = andato e tornato (lezione 29{4})",
            },
            {
              en: "mother, make my bed soon",
              it: "imperativo: verbo base senza soggetto (lezione 19{1})",
            },
            {
              en: "I'm weary wi hunting",
              it: "→ I'm tired of hunting: dopo una preposizione il verbo va in -ing (lezione 48{4})",
            },
            {
              en: "and fain wald lie down",
              it: "→ and I would gladly lie down: would per un desiderio, come I'd like (lezione 20{4})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Lie down significa "sdraiarsi": è un phrasal verb (lezione 47{2}). Attenzione al paradigma: lie / lay / lain (giacere) è irregolare, mentre lie nel senso di "mentire" è regolare.',
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
              "Lord Randal, my son… my handsome young man: la madre lo chiama per nome, con affetto",
            ],
            [
              "refrain (ritornello)",
              "mother, make my bed soon… lie down: torna uguale in ogni strofa",
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
            "Le ballate erano cantate, e il loro metro è quello di una canzone. Ogni verso ha quattro accenti forti, con due sillabe deboli in mezzo: il ritmo è da-da-DUM, saltellante come una danza.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "o WHERE hae ye BEEN, lord RAN-dal, my SON?",
              it: "quattro accenti",
            },
            {
              en: "for I'm WEA-ry wi HUNT-ing, and FAIN wald lie DOWN",
              it: "quattro accenti",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "La rima è poca e imperfetta (soon / down): la ballata non si regge sulla rima ma sulla ripetizione. Ogni strofa ha la stessa struttura: due versi di domanda quasi identici, poi la risposta, poi il ritornello.",
        },
        {
          tipo: "tabella",
          righe: [
            ["versi 1–2", "la domanda della madre, ripetuta due volte"],
            ["verso 3", "la risposta del figlio + mother, make my bed soon"],
            ["verso 4", "il ritornello: For I'm weary wi hunting…"],
          ],
        },
      ],
    },
    {
      titolo: "STROFE 2–3: LA CENA",
      blocchi: [
        {
          tipo: "brano",
          righe: LORD_RANDAL,
          traduzione: LORD_RANDAL_TRADUZIONE,
          evidenzia: [4, 11],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Le domande diventano più precise: dove hai cenato? Con la mia innamorata. Che cosa hai mangiato? Anguille bollite nel brodo. Il lettore comincia a sospettare: perché la madre insiste proprio sulla cena?",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Where gat ye your dinner?",
              it: "→ Where did you get your dinner? Nell'inglese antico le domande si facevano senza did, invertendo verbo e soggetto (lezione 24{3})",
            },
            {
              en: "What gat ye to your dinner?",
              it: "→ What did you have for dinner?",
            },
            {
              en: "I din'd wi my true-love",
              it: "→ I dined with my sweetheart: past simple regolare (lezione 22{2})",
            },
            {
              en: "eels boil'd in broo",
              it: "→ eels (that were) boiled in broth: il participio passato funziona come una relativa passiva (lezione 43{1})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Oggi "che cosa hai mangiato a cena" si dice What did you have for dinner?. Have, con i pasti, significa "mangiare" o "bere": have breakfast, have a coffee.',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "incremental repetition (ripetizione incrementale)",
              "ogni strofa ripete la precedente cambiando un solo dettaglio, che aggiunge un pezzo di storia",
            ],
            [
              "euphemism (eufemismo)",
              "my true-love: la parola affettuosa per la persona che, scopriremo, lo ha ucciso",
            ],
          ],
        },
      ],
    },
    {
      titolo: "STROFA 4: I SEGUGI",
      blocchi: [
        {
          tipo: "brano",
          righe: LORD_RANDAL,
          traduzione: LORD_RANDAL_TRADUZIONE,
          evidenzia: [12, 15],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "La domanda della madre cambia argomento, ma solo in apparenza: che fine hanno fatto i tuoi cani? Si sono gonfiati e sono morti. Il lettore capisce: i cani hanno mangiato gli avanzi della cena, ed erano avvelenati. La ballata non lo dice mai, lo fa capire.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "What became of your bloodhounds?",
              it: 'become of = "che fine ha fatto": What became of him? Che ne è stato di lui?',
            },
            {
              en: "they swell'd and they died",
              it: "due past simple regolari in fila, collegati da and (lezione 22{2})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Became è il passato irregolare di become (become / became / become): lezione 23{3}.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "ellipsis (ellissi narrativa)",
              'la ballata salta le spiegazioni: niente "i cani mangiarono gli avanzi", solo il risultato',
            ],
          ],
        },
      ],
    },
    {
      titolo: "STROFA 5: LA VERITÀ",
      blocchi: [
        {
          tipo: "brano",
          righe: LORD_RANDAL,
          traduzione: LORD_RANDAL_TRADUZIONE,
          evidenzia: [16, 19],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Ora la madre lo dice: temo che tu sia stato avvelenato. E il figlio, per la prima volta, ammette: sì. Anche il ritornello cambia: non è più "stanco della caccia", ma "malato nel cuore". Il cuore malato è il veleno, ma è anche il dolore del tradimento.',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I fear ye are poison'd",
              it: '→ I\'m afraid you have been poisoned: fear qui significa "temo che"',
            },
            {
              en: "ye are poison'd / I am poison'd",
              it: "forma passiva: to be + participio (lezione 43{1})",
            },
            {
              en: "I'm sick at the heart",
              it: "sick = malato; at the heart = nel cuore",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Il punto esclamativo alla fine delle domande della madre ("my son!") mostra il cambio: non sono più domande, sono grida.',
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
              "le domande si stringono strofa dopo strofa, fino alla verità",
            ],
            [
              "variation of the refrain (variazione del ritornello)",
              "weary wi hunting diventa sick at the heart: il cambio segna la fine",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LA RIPETIZIONE INCREMENTALE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutte le strofe, guarda come funziona la ballata. Ogni strofa è quasi uguale alla precedente: cambia solo una parola o una frase. Ma quel dettaglio fa avanzare la storia, come i fotogrammi di un film.",
        },
        {
          tipo: "tabella",
          righe: [
            ["strofa 1", "dove sei stato? → nel bosco"],
            ["strofa 2", "dove hai cenato? → con la mia innamorata"],
            ["strofa 3", "che cosa hai mangiato? → anguille nel brodo"],
            ["strofa 4", "che fine hanno fatto i cani? → sono morti"],
            ["strofa 5", "sei avvelenato? → sì"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Nota quello che la ballata non dice: non sappiamo perché la ragazza lo abbia avvelenato, né che cosa succederà dopo. Il racconto procede per salti, lasciando al pubblico il compito di riempire i vuoti. È questo che lo rende così teso.",
        },
        {
          tipo: "nota",
          testo:
            "In molte versioni seguono altre strofe: il figlio fa testamento, lasciando qualcosa a ogni familiare e \"l'inferno e il fuoco\" all'innamorata. È la stessa struttura del Testamento dell'avvelenato italiano.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato strofa per strofa, rileggilo tutto con la traduzione. Fai caso a come cresce la tensione mentre le parole restano quasi le stesse. Sotto trovi il riepilogo delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: LORD_RANDAL,
          traduzione: LORD_RANDAL_TRADUZIONE,
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
              "Lord Randal, my son… my handsome young man (in ogni strofa)",
            ],
            [
              "refrain (ritornello)",
              "mother, make my bed soon… fain wald lie down",
            ],
            [
              "incremental repetition (ripetizione incrementale)",
              "le domande della madre, sempre più precise",
            ],
            ["euphemism (eufemismo)", "my true-love (v. 7)"],
            [
              "ellipsis (ellissi narrativa)",
              "i cani morti (v. 15): il veleno non viene mai nominato prima della fine",
            ],
            ["climax", "dalla caccia (v. 3) all'avvelenamento (v. 19)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il dialogo senza narratore, la ripetizione e i salti nel racconto sono le tre caratteristiche di quasi tutte le ballate popolari.",
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
          domanda: "Con chi ha cenato Lord Randal?",
          opzioni: [
            "Con sua madre",
            "Con i suoi cani",
            "Con la sua innamorata",
            "Da solo nel bosco",
          ],
          giusta: 2,
          spiegazione:
            '"I din\'d wi my true-love": con la sua innamorata, che lo ha avvelenato.',
          rivedi: "STROFE 2–3: LA CENA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Perché la madre chiede dei cani?",
          opzioni: [
            "Perché i cani hanno mangiato gli avanzi della cena, e sono morti",
            "Perché vuole andare a caccia",
            "Perché i cani hanno morso Lord Randal",
          ],
          giusta: 0,
          spiegazione:
            "I cani si sono gonfiati e sono morti: è la prova che la cena era avvelenata. La ballata non lo spiega, lo fa capire.",
          rivedi: "STROFA 4: I SEGUGI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa cambia nel ritornello dell'ultima strofa?",
          opzioni: [
            "Lord Randal chiede di uscire invece di dormire",
            "Lord Randal non è più stanco della caccia, ma malato nel cuore",
            "Il ritornello scompare",
          ],
          giusta: 1,
          spiegazione:
            '"For I\'m sick at the heart": il veleno, e il dolore del tradimento.',
          rivedi: "STROFA 5: LA VERITÀ",
        },
        {
          tipo: "sottotitolo",
          testo: "Lo scots",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola scozzese alla parola inglese.",
          coppie: [
            ["hae", "have"],
            ["ye", "you"],
            ["wi", "with"],
            ["gat", "got"],
            ["wald", "would"],
          ],
          rivedi: "LO SCOTS DELLA BALLATA",
        },
        {
          tipo: "completa",
          consegna: 'Riscrivi in inglese moderno: "O where hae ye been?"',
          prima: "Where have you",
          dopo: "?",
          risposte: ["been"],
          spiegazione:
            'Where have you been?: present perfect con been, "dove sei stato?".',
          rivedi: "STROFA 1: DOVE SEI STATO?",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi la domanda in inglese moderno, con did.",
          citazione: "Where gat ye your dinner?",
          parole: ["you", "your", "where", "get", "dinner", "did"],
          soluzione: ["where", "did", "you", "get", "your", "dinner"],
          spiegazione:
            "Oggi le domande al past simple vogliono did + verbo base (lezione 24{3}).",
          rivedi: "STROFE 2–3: LA CENA",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi il verso in inglese moderno.",
          citazione: "For I'm weary wi hunting, and fain wald lie down",
          parole: ["tired", "I'm", "of", "hunting", "for"],
          soluzione: ["for", "I'm", "tired", "of", "hunting"],
          spiegazione:
            "Weary wi hunting = tired of hunting: dopo of il verbo va in -ing (lezione 48{4}).",
          rivedi: "STROFA 1: DOVE SEI STATO?",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale struttura c'è in questo verso?",
          citazione: "O I fear ye are poison'd",
          opzioni: [
            "Un imperativo",
            "Un condizionale",
            "Una forma passiva",
            "Un do enfatico",
          ],
          giusta: 2,
          spiegazione:
            "Are poisoned: to be + participio, la forma passiva (lezione 43{1}).",
          rivedi: "STROFA 5: LA VERITÀ",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "What became of your bloodhounds?"',
          opzioni: [
            "Che fine hanno fatto i tuoi cani?",
            "Che cosa sono diventati i tuoi cani?",
            "Che cosa hanno mangiato i tuoi cani?",
          ],
          giusta: 0,
          spiegazione: "Become of = che fine ha fatto, che ne è stato di.",
          rivedi: "STROFA 4: I SEGUGI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che tipo di frase è "mother, make my bed soon"?',
          opzioni: ["Una domanda", "Un imperativo", "Un passivo"],
          giusta: 1,
          spiegazione:
            "Il verbo base senza soggetto è l'imperativo (lezione 19{1}).",
          rivedi: "STROFA 1: DOVE SEI STATO?",
        },
        {
          tipo: "sottotitolo",
          testo: "La forma della ballata",
        },
        {
          tipo: "seleziona",
          consegna:
            "Ecco il primo verso. Tocca le 4 parole su cui cade l'accento forte.",
          parole: [
            "O",
            "where",
            "hae",
            "ye",
            "been,",
            "Lord",
            "Randal,",
            "my",
            "son?",
          ],
          giuste: [1, 4, 6, 8],
          spiegazione:
            "o WHERE hae ye BEEN, lord RAN-dal, my SON: quattro accenti, con due sillabe deboli in mezzo.",
          rivedi: "IL METRO: LA STROFA DELLA BALLATA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cos'è la ripetizione incrementale?",
          opzioni: [
            "Ripetere la stessa strofa senza cambiare nulla",
            "Ripetere solo l'ultima parola di ogni verso",
            "Ripetere una strofa cambiando un dettaglio che fa avanzare la storia",
          ],
          giusta: 2,
          spiegazione:
            "Ogni strofa è quasi uguale alla precedente, ma il dettaglio nuovo aggiunge un pezzo di storia.",
          rivedi: "LA RIPETIZIONE INCREMENTALE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["refrain", "mother, make my bed soon"],
            ["euphemism", "my true-love"],
            ["apostrophe", "Lord Randal, my son"],
            ["climax", "dal bosco all'avvelenamento"],
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
            "\"O I fear ye are poison'd, Lord Randal, my son!\nO I fear ye are poison'd, my handsome young man!\"\n\"O yes! I am poison'd; mother, make my bed soon,\nFor I'm sick at the heart, and I fain wald lie down.\"",
          soluzione:
            "«Oh, temo che ti abbiano avvelenato, Lord Randal, figlio mio! Oh, temo che ti abbiano avvelenato, mio bel giovane!» «Oh sì! Mi hanno avvelenato; madre, preparami presto il letto, perché ho il cuore malato, e vorrei tanto sdraiarmi.»",
          spiegazione:
            'Hai reso il passivo con "sei stato avvelenato" o con "ti hanno avvelenato"? La seconda è più naturale in italiano, ed è la scelta di molti traduttori.',
          rivedi: "STROFA 5: LA VERITÀ",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of how the ballad builds suspense.",
          punti: [
            "the dialogue between mother and son",
            "incremental repetition",
            "the clue of the bloodhounds",
            "the change in the refrain",
          ],
          modello:
            'Lord Randal is told entirely through a dialogue between a mother and her son, without a narrator. Each stanza repeats the previous one with a small change, a technique called incremental repetition, so the story moves forward one detail at a time. The death of the bloodhounds is the key clue: the reader understands that the dinner was poisoned before anyone says it. Finally, the refrain changes from "weary wi hunting" to "sick at the heart", which marks the tragic end of the ballad.',
          spiegazione:
            "Hai citato il testo e usato termini tecnici come refrain e incremental repetition? Sono le cose che un esaminatore cerca.",
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
