import { Lezione } from "@/types/lezione";

// Geoffrey Chaucer, The Canterbury Tales, General Prologue, versi 1–18
// (circa 1387), pubblico dominio
const PROLOGO = [
  "Whan that Aprill with his shoures soote",
  "The droghte of March hath perced to the roote,",
  "And bathed every veyne in swich licour",
  "Of which vertu engendred is the flour;",
  "Whan Zephirus eek with his sweete breeth",
  "Inspired hath in every holt and heeth",
  "The tendre croppes, and the yonge sonne",
  "Hath in the Ram his half cours yronne,",
  "And smale foweles maken melodye,",
  "That slepen al the nyght with open ye",
  "(So priketh hem Nature in hir corages),",
  "Thanne longen folk to goon on pilgrimages,",
  "And palmeres for to seken straunge strondes,",
  "To ferne halwes, kowthe in sondry londes;",
  "And specially from every shires ende",
  "Of Engelond to Caunterbury they wende,",
  "The hooly blisful martir for to seke,",
  "That hem hath holpen whan that they were seeke.",
];

const PROLOGO_TRADUZIONE = [
  "Quando aprile con le sue dolci piogge",
  "ha penetrato fino alla radice la siccità di marzo,",
  "e ha bagnato ogni vena di quell'umore",
  "per la cui virtù nasce il fiore;",
  "quando anche Zefiro con il suo dolce respiro",
  "ha ridato vita in ogni bosco e brughiera",
  "ai teneri germogli, e il giovane sole",
  "ha percorso nell'Ariete metà del suo corso,",
  "e gli uccellini cantano melodie",
  "e dormono tutta la notte con gli occhi aperti",
  "(tanto la Natura li sprona nel cuore),",
  "allora la gente desidera andare in pellegrinaggio,",
  "e i pellegrini cercare lidi stranieri,",
  "santuari lontani, venerati in diverse terre;",
  "e soprattutto da ogni angolo di ogni contea",
  "d'Inghilterra vanno a Canterbury,",
  "a cercare il santo martire beato",
  "che li ha aiutati quando erano malati.",
];

export const canterburyTales: Lezione = {
  id: "canterbury-tales",
  titolo: "I racconti di Canterbury",
  descrizione:
    "L'apertura del General Prologue di Chaucer: lettura, analisi ed esercizi",
  chiavi: "Chaucer, Middle English, pellegrinaggio, distico eroico",
  livello: "Letteratura",
  sottotitolo: "Modulo C2 · Geoffrey Chaucer",
  citazione: {
    testo: "Thanne longen folk to goon on pilgrimages.",
    fonte: "Geoffrey Chaucer, The Canterbury Tales (circa 1387)",
    traduzione: "Allora la gente desidera andare in pellegrinaggio.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Sono i primi diciotto versi dei Canterbury Tales, in Middle English, l'inglese del Trecento. Leggili ad alta voce pronunciando tutte le lettere, come faresti con l'italiano: è il modo più vicino a come li leggeva Chaucer. Nei riquadri successivi li analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: PROLOGO,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Geoffrey Chaucer (1343 circa – 1400) fu funzionario della corte, diplomatico e viaggiatore: andò anche in Italia, dove conobbe le opere di Dante, Petrarca e Boccaccio. Cominciò i Canterbury Tales intorno al 1387 e li lasciò incompiuti alla sua morte.",
        },
        {
          tipo: "testo",
          testo:
            "La cornice: in primavera, nella locanda del Tabard a Southwark, appena fuori Londra, si incontrano circa trenta pellegrini diretti a Canterbury, alla tomba di Thomas Becket, l'arcivescovo ucciso nella cattedrale nel 1170. L'oste propone una gara: ognuno racconterà delle storie durante il viaggio, e chi racconterà la migliore avrà una cena gratis.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "General Prologue",
              "l'introduzione: la primavera, poi il ritratto di ogni pellegrino",
            ],
            [
              "i racconti",
              "24 storie di ogni genere: cavalleresche, comiche, religiose, oscene",
            ],
            [
              "i pellegrini",
              "tutta la società: un cavaliere, un mugnaio, una badessa, la Donna di Bath, un mercante…",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Come nel Decameron, una cornice tiene insieme molte storie. Ma i narratori di Boccaccio sono giovani nobili; quelli di Chaucer vengono da tutte le classi sociali, e ognuno racconta a modo suo (lezione C2{7}).",
        },
      ],
    },
    {
      titolo: "IL MIDDLE ENGLISH",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il Middle English è l'inglese parlato tra il 1100 e il 1500, dopo l'arrivo dei Normanni (lezione C1{6}). È già riconoscibile, soprattutto se lo leggi ad alta voce. Due regole aiutano molto:",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "si pronuncia tutto",
              'anche la e finale: soote si legge "sòo-te", due sillabe',
            ],
            [
              'le vocali sono "italiane"',
              'nyght si legge "nicht", ye "ii-e": il grande cambiamento delle vocali inglesi verrà dopo Chaucer',
            ],
          ],
        },
        {
          tipo: "testo",
          testo: "Ecco le parole che ti servono per questi versi:",
        },
        {
          tipo: "tabella",
          righe: [
            ["whan that", "when"],
            ["shoures soote", "sweet showers: dolci piogge"],
            ["droghte, perced, roote", "drought, pierced, root"],
            ["swich licour", "such liquid: un tale umore, una tale linfa"],
            ["vertu", "potere, forza (non virtù morale)"],
            ["eek", "also"],
            ["holt and heeth", "bosco e brughiera"],
            ["croppes", "germogli"],
            ["foweles", "fowls: uccelli"],
            ["ye", "eye"],
            ["hem / hir", "them / their"],
            ["corages", "cuori, animi"],
            ["goon, seken, seke", "go, seek, seek"],
            ["palmeres", "pellegrini (che portavano una palma da Gerusalemme)"],
            ["strondes, halwes, kowthe", "lidi, santuari, conosciuti"],
            ["wende", "go: andare"],
            ["holpen, seeke", "helped, sick"],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 1–4: LA PIOGGIA DI APRILE",
      blocchi: [
        {
          tipo: "brano",
          righe: PROLOGO,
          traduzione: PROLOGO_TRADUZIONE,
          evidenzia: [0, 3],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Le piogge di aprile arrivano fino alle radici, dove la siccità di marzo aveva seccato tutto, e riempiono ogni vena delle piante di quella linfa che fa nascere i fiori. Il poema comincia con il risveglio della natura in primavera.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Whan that Aprill… hath perced",
              it: "→ When April has pierced: present perfect, have + participio (lezione 29{1})",
            },
            {
              en: "his shoures soote",
              it: 'l\'aggettivo dopo il nome, alla francese; oggi sweet showers. E aprile è "lui" (his): è personificato',
            },
            {
              en: "Of which vertu engendred is the flour",
              it: "→ by the power of which the flower is engendered: passivo (lezione 43{1}) con il participio prima del verbo",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il plurale in -es (shoures) e il genitivo in -es (shires ende, v. 15) sono gli antenati diretti della -s di oggi (lezioni 4{1} e 5{6}).",
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
              "Aprill with his shoures: aprile ha le sue piogge, come una persona",
            ],
            [
              "metaphor (metafora)",
              "every veyne: le piante hanno vene, come un corpo",
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
            ["soote / roote", "versi 1 e 2: rima A"],
            ["licour / flour", "versi 3 e 4: rima B"],
          ],
        },
      ],
    },
    {
      titolo: "IL METRO: IL DISTICO EROICO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Chaucer è il primo grande poeta a usare in inglese il pentametro giambico: dieci sillabe, cinque accenti, con il ritmo da-DUM. Lo unisce in coppie di versi che rimano tra loro (AA BB CC…): il distico eroico (heroic couplet), che resterà il verso della poesia narrativa inglese per quattro secoli.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "whan THAT a-PRIL-le WITH his SHOU-res SOO-te",
              it: "Aprille ha tre sillabe; la -e finale di soote si pronuncia",
            },
            {
              en: "and BA-thed EV-ry VEYNE in SWICH li-COUR",
              it: "dieci sillabe: bathed ne ha due, every si legge ev-ry",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Se leggi soote con la e muta, come faresti oggi, il verso perde una sillaba e zoppica. È la prova che allora la e finale si pronunciava.",
        },
      ],
    },
    {
      titolo: "VERSI 5–11: ZEFIRO, IL SOLE, GLI UCCELLI",
      blocchi: [
        {
          tipo: "brano",
          righe: PROLOGO,
          traduzione: PROLOGO_TRADUZIONE,
          evidenzia: [4, 10],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Il vento di ponente, Zefiro, soffia vita nei germogli; il sole "giovane" ha percorso metà della costellazione dell\'Ariete (siamo a metà aprile); gli uccellini cantano tutta la notte, perché la Natura li "punge" nel cuore. È la seconda grande proposizione con Whan: tutta la natura si risveglia.',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Inspired hath… the tendre croppes",
              it: "→ has inspired the tender shoots: il participio prima dell'ausiliare, per la rima",
            },
            {
              en: "Hath… yronne",
              it: "→ has run: y- è un vecchio prefisso del participio, come il ge- del tedesco",
            },
            {
              en: "smale foweles maken melodye",
              it: "→ small birds make melody: -en era la desinenza del plurale dei verbi",
            },
            {
              en: "That slepen al the nyght",
              it: "→ that sleep all night: relativa con that (lezione 44{1})",
            },
            {
              en: "So priketh hem Nature in hir corages",
              it: "→ so Nature spurs them in their hearts: il verbo prima del soggetto",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Hem e hir erano i pronomi inglesi originali. They, them e their vengono dal norreno dei Vichinghi (lezione C1{5}): ai tempi di Chaucer era arrivato solo they, e infatti al verso 16 trovi they wende, ma anche hem e hir.",
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
              "Zephirus with his sweete breeth; Nature che sprona gli uccelli",
            ],
            [
              "periphrasis (perifrasi)",
              'the yonge sonne hath in the Ram his half cours yronne: un modo dotto, astronomico, di dire "a metà aprile"',
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
            ["breeth / heeth", "versi 5 e 6: rima C"],
            ["sonne / yronne", "versi 7 e 8: rima D"],
            ["melodye / ye", "versi 9 e 10: rima E"],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 12–18: IL PELLEGRINAGGIO",
      blocchi: [
        {
          tipo: "brano",
          righe: PROLOGO,
          traduzione: PROLOGO_TRADUZIONE,
          evidenzia: [11, 17],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Finalmente, dopo undici versi, arriva la frase principale: Thanne, allora. In primavera la gente sente il desiderio di partire in pellegrinaggio, verso santuari lontani; e in Inghilterra, soprattutto, verso Canterbury, per ringraziare il santo martire Thomas Becket che li ha guariti.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Thanne longen folk to goon on pilgrimages",
              it: "→ then people long to go on pilgrimages: long to + infinito, desiderare (lezione 48{3})",
            },
            {
              en: "for to seken straunge strondes",
              it: "→ to seek foreign shores: for to + infinito indicava lo scopo, oggi solo to (lezione 48{7})",
            },
            {
              en: "from every shires ende",
              it: "→ from every shire's end: genitivo in -es (lezione 5{6})",
            },
            {
              en: "That hem hath holpen",
              it: "→ who has helped them: holpen è il vecchio participio di help, oggi regolare",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Strange in Chaucer vuol dire "straniero", come il francese étranger. Il significato di "strano" è venuto dopo: ciò che viene da fuori sembra strano.',
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
              "seken straunge strondes: tre S di fila",
            ],
            [
              "rime riche (rima equivoca)",
              "seke / seeke: stesso suono, significato diverso (cercare / malati)",
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
            ["corages / pilgrimages", "versi 11 e 12: rima F"],
            ["strondes / londes", "versi 13 e 14: rima G"],
            ["ende / wende", "versi 15 e 16: rima H"],
            ["seke / seeke", "versi 17 e 18: rima I"],
          ],
        },
      ],
    },
    {
      titolo: "UNA FRASE DI DICIOTTO VERSI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutte le parti, guarda la costruzione: i diciotto versi sono una frase sola. Chaucer fa aspettare il lettore come la natura aspetta la primavera, e la frase principale arriva solo al verso 12.",
        },
        {
          tipo: "tabella",
          righe: [
            ["versi 1–4: Whan…", "la pioggia: la terra"],
            [
              "versi 5–11: Whan…",
              "il vento, il sole, gli uccelli: il cielo e gli animali",
            ],
            ["versi 12–14: Thanne…", "la gente desidera partire: gli uomini"],
            ["versi 15–18", "verso Canterbury, per il santo: lo spirito"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Nota il movimento: dalle radici delle piante al cosmo, poi agli uccelli, poi alle persone, e infine a Dio. Lo stesso impulso della primavera che fa crescere le piante spinge gli uomini a mettersi in cammino.",
        },
        {
          tipo: "nota",
          testo:
            "La struttura Whan… Thanne… (quando… allora…) è la stessa delle frasi con When di oggi: prima la condizione, poi la conseguenza (lezione 34{2}).",
        },
      ],
    },
    {
      titolo: "DAL MIDDLE ENGLISH A OGGI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In questi versi convivono i due strati dell'inglese (lezione C1{7}): le parole germaniche della vita quotidiana e le parole francesi arrivate con i Normanni, più colte.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "parole germaniche",
              "sweete, roote, sonne, nyght, folk, open, smale",
            ],
            [
              "parole francesi",
              "vertu, licour, melodye, nature, corages, pilgrimages, martir",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Dopo Chaucer, tra il 1400 e il 1700, la pronuncia delle vocali lunghe inglesi cambiò completamente: è il Great Vowel Shift. La grafia invece rimase quasi uguale. Per questo oggi l'inglese si scrive in un modo e si pronuncia in un altro (lezione 58{1}).",
        },
        {
          tipo: "tabella",
          righe: [
            ['nyght: "nicht"', '→ night: "nait"'],
            ['soote: "sòote"', '→ sweet: "suiit"'],
            ['ye: "iie"', '→ eye: "ai"'],
          ],
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Ora che l\'hai analizzato pezzo per pezzo, rileggilo tutto con la traduzione. Prova a leggerlo ad alta voce con la pronuncia "italiana": sentirai la musica dei distici. Sotto trovi il riepilogo delle rime e delle figure retoriche.',
        },
        {
          tipo: "brano",
          righe: PROLOGO,
          traduzione: PROLOGO_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "testo",
          testo:
            "Lo schema è AA BB CC DD EE FF GG HH II: nove distici a rima baciata, in pentametri giambici.",
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
              "Aprill with his shoures (v. 1), Zephirus (v. 5), Nature (v. 11)",
            ],
            ["metaphor (metafora)", "every veyne (v. 3)"],
            [
              "periphrasis (perifrasi)",
              "the yonge sonne… in the Ram (vv. 7–8)",
            ],
            [
              "alliteration (allitterazione)",
              "seken straunge strondes (v. 13)",
            ],
            ["rime riche (rima equivoca)", "seke / seeke (vv. 17–18)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Questi versi sono tra i più imparati a memoria della letteratura inglese: molti studenti britannici li sanno ancora recitare con la pronuncia medievale.",
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
          domanda:
            "In quale stagione la gente desidera partire in pellegrinaggio?",
          opzioni: ["In inverno", "In estate", "In primavera", "In autunno"],
          giusta: 2,
          spiegazione:
            "Le piogge di aprile, Zefiro, il sole nell'Ariete: è la primavera che spinge la gente a mettersi in cammino.",
          rivedi: "VERSI 1–4: LA PIOGGIA DI APRILE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Chi è "the hooly blisful martir"?',
          opzioni: [
            "Thomas Becket",
            "San Giorgio",
            "Re Artù",
            "Geoffrey Chaucer",
          ],
          giusta: 0,
          spiegazione:
            "Thomas Becket, l'arcivescovo ucciso nella cattedrale di Canterbury nel 1170.",
          rivedi: "IL CONTESTO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "In quale verso arriva la frase principale?",
          opzioni: ["Verso 1", "Verso 12", "Verso 5", "Verso 18"],
          giusta: 1,
          spiegazione:
            "Thanne longen folk to goon on pilgrimages: prima ci sono solo le due proposizioni con Whan.",
          rivedi: "UNA FRASE DI DICIOTTO VERSI",
        },
        {
          tipo: "sottotitolo",
          testo: "Il Middle English",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola in Middle English alla parola moderna.",
          coppie: [
            ["soote", "sweet"],
            ["eek", "also"],
            ["ye", "eye"],
            ["hem", "them"],
            ["holpen", "helped"],
          ],
          rivedi: "IL MIDDLE ENGLISH",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Come si pronuncia la e finale di "soote" ai tempi di Chaucer?',
          opzioni: [
            "Non si pronuncia, come oggi",
            'Si pronuncia "i"',
            "Si pronuncia: è una sillaba in più",
          ],
          giusta: 2,
          spiegazione:
            "La e finale si pronunciava, e serve a far tornare le sillabe del verso.",
          rivedi: "IL METRO: IL DISTICO EROICO",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi il verso in inglese moderno.",
          citazione: "Thanne longen folk to goon on pilgrimages",
          parole: ["go", "people", "pilgrimages", "long", "on", "then", "to"],
          soluzione: [
            "then",
            "people",
            "long",
            "to",
            "go",
            "on",
            "pilgrimages",
          ],
          spiegazione:
            "Long to + infinito = desiderare. Folk oggi si direbbe people.",
          rivedi: "VERSI 12–18: IL PELLEGRINAGGIO",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi il verso in inglese moderno.",
          citazione: "So priketh hem Nature in hir corages",
          parole: ["their", "spurs", "so", "hearts", "them", "in", "nature"],
          soluzione: ["so", "nature", "spurs", "them", "in", "their", "hearts"],
          spiegazione:
            "Chaucer mette il verbo prima del soggetto; hem e hir sono i vecchi them e their.",
          rivedi: "VERSI 5–11: ZEFIRO, IL SOLE, GLI UCCELLI",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che tempo verbale è "hath perced"?',
          citazione: "The droghte of March hath perced to the roote",
          opzioni: ["Present perfect", "Past simple", "Futuro", "Imperativo"],
          giusta: 0,
          spiegazione:
            "Hath (has) + participio: present perfect (lezione 29{1}).",
          rivedi: "VERSI 1–4: LA PIOGGIA DI APRILE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa indica la desinenza -en in "maken" e "slepen"?',
          opzioni: [
            "Il passato",
            "Il plurale del verbo",
            "Il participio",
            "La forma negativa",
          ],
          giusta: 1,
          spiegazione:
            "Nel Middle English i verbi al plurale finivano in -en: smale foweles maken = small birds make.",
          rivedi: "VERSI 5–11: ZEFIRO, IL SOLE, GLI UCCELLI",
        },
        {
          tipo: "completa",
          consegna:
            'Completa con la forma moderna: "to seek foreign shores" (Chaucer: for to seken).',
          prima: "And pilgrims",
          dopo: "seek foreign shores",
          risposte: ["to"],
          spiegazione:
            "For to + infinito indicava lo scopo; oggi basta to (lezione 48{7}).",
          rivedi: "VERSI 12–18: IL PELLEGRINAGGIO",
        },
        {
          tipo: "sottotitolo",
          testo: "Rime e figure",
        },
        {
          tipo: "seleziona",
          consegna:
            "Tocca le due parole che formano una rima equivoca (stesso suono, significato diverso).",
          parole: ["seke", "ende", "seeke", "wende", "roote", "soote"],
          giuste: [0, 2],
          spiegazione:
            "Seke (cercare) e seeke (malati) suonano uguali ma significano cose diverse: è una rime riche.",
          rivedi: "VERSI 12–18: IL PELLEGRINAGGIO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che schema di rime usa Chaucer?",
          opzioni: [
            "ABAB",
            "Nessuna rima",
            "Distici a rima baciata: AA BB CC",
            "ABBA",
          ],
          giusta: 2,
          spiegazione:
            "Coppie di pentametri che rimano tra loro: il distico eroico.",
          rivedi: "IL METRO: IL DISTICO EROICO",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola alla sua origine.",
          coppie: [
            ["vertu", "dal francese (oggi virtue)"],
            ["melodye", "dal francese (oggi melody)"],
            ["roote", "dal norreno dei Vichinghi (oggi root)"],
            ["sonne", "dall'inglese antico (oggi sun)"],
          ],
          rivedi: "DAL MIDDLE ENGLISH A OGGI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Quale figura retorica è "the yonge sonne / Hath in the Ram his half cours yronne"?',
          opzioni: [
            "Perifrasi",
            "Allitterazione",
            "Domanda retorica",
            "Ritornello",
          ],
          giusta: 0,
          spiegazione:
            'Invece di dire "a metà aprile", Chaucer lo descrive con un giro di parole astronomico: è una perifrasi.',
          rivedi: "VERSI 5–11: ZEFIRO, IL SOLE, GLI UCCELLI",
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
          consegna: "Traduci in italiano gli ultimi quattro versi.",
          testo:
            "And specially from every shires ende\nOf Engelond to Caunterbury they wende,\nThe hooly blisful martir for to seke,\nThat hem hath holpen whan that they were seeke.",
          soluzione:
            "E soprattutto da ogni angolo di ogni contea d'Inghilterra vanno a Canterbury, a cercare il santo martire beato che li ha aiutati quando erano malati.",
          spiegazione:
            "Hai riconosciuto seke (cercare) e seeke (malati)? Sono la chiave degli ultimi due versi.",
          rivedi: "VERSI 12–18: IL PELLEGRINAGGIO",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of the opening of the General Prologue.",
          punti: [
            "the season and nature",
            "the long sentence and the main clause",
            "the heroic couplet",
            "one feature of Middle English",
          ],
          modello:
            'The General Prologue opens with a description of spring: April\'s "shoures soote" bring life back to the earth, while Zephyrus, the sun and the birds complete the picture. The first eighteen lines form a single sentence, and the main clause, "Thanne longen folk to goon on pilgrimages", comes only in line 12. The poem is written in heroic couplets, pairs of rhyming iambic pentameters. Middle English is already recognisable, but it keeps old forms such as hem and hir for them and their, and verbs ending in -en in the plural.',
          spiegazione:
            "Hai citato il testo e usato termini tecnici come heroic couplet e main clause? Sono le cose che un esaminatore cerca.",
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
