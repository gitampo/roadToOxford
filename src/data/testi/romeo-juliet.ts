import { Lezione } from "@/types/lezione";

// William Shakespeare, Romeo and Juliet, atto II, scena 2 (circa 1595),
// pubblico dominio
const SCENA = [
  "JULIET: O Romeo, Romeo! wherefore art thou Romeo?",
  "Deny thy father and refuse thy name;",
  "Or, if thou wilt not, be but sworn my love,",
  "And I'll no longer be a Capulet.",
  "ROMEO (aside): Shall I hear more, or shall I speak at this?",
  "JULIET: 'Tis but thy name that is my enemy;",
  "Thou art thyself, though not a Montague.",
  "What's Montague? It is nor hand, nor foot,",
  "Nor arm, nor face, nor any other part",
  "Belonging to a man. O, be some other name!",
  "What's in a name? That which we call a rose",
  "By any other name would smell as sweet;",
  "So Romeo would, were he not Romeo call'd,",
  "Retain that dear perfection which he owes",
  "Without that title. Romeo, doff thy name,",
  "And for that name, which is no part of thee,",
  "Take all myself.",
];

const SCENA_TRADUZIONE = [
  "GIULIETTA: O Romeo, Romeo! Perché sei tu Romeo?",
  "Rinnega tuo padre e rifiuta il tuo nome;",
  "o, se non vuoi, giura soltanto di essere mio,",
  "e io non sarò più una Capuleti.",
  "ROMEO (a parte): Devo ascoltare ancora, o rispondere a questo?",
  "GIULIETTA: È solo il tuo nome a essermi nemico;",
  "tu sei te stesso, anche se non sei un Montecchi.",
  "Che cos'è Montecchi? Non è una mano, né un piede,",
  "né un braccio, né un volto, né alcun'altra parte",
  "che appartenga a un uomo. Oh, prendi un altro nome!",
  "Che cosa c'è in un nome? Quella che chiamiamo rosa",
  "con qualunque altro nome avrebbe lo stesso dolce profumo;",
  "così Romeo, se non si chiamasse Romeo,",
  "conserverebbe quella cara perfezione che possiede",
  "anche senza quel titolo. Romeo, togliti il nome,",
  "e in cambio di quel nome, che non è parte di te,",
  "prenditi tutta me stessa.",
];

export const romeoJuliet: Lezione = {
  id: "romeo-juliet",
  titolo: "Romeo and Juliet",
  descrizione:
    'La scena del balcone: "che cosa c\'è in un nome?". Lettura, analisi ed esercizi',
  chiavi: "Shakespeare, teatro, blank verse, scena del balcone",
  livello: "Letteratura",
  sottotitolo: "Modulo C3 · William Shakespeare",
  citazione: {
    testo:
      "What's in a name? That which we call a rose / By any other name would smell as sweet.",
    fonte: "William Shakespeare, Romeo and Juliet (circa 1595)",
    traduzione:
      "Che cosa c'è in un nome? Quella che chiamiamo rosa, con qualunque altro nome, avrebbe lo stesso dolce profumo.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "È di notte. Giulietta, affacciata alla sua finestra, parla da sola; Romeo, nascosto nel giardino sotto di lei, la ascolta. Leggi tutta la scena una volta, con calma. Nei riquadri successivi la analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: SCENA,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Romeo and Juliet fu scritta intorno al 1595. A Verona due famiglie nobili, i Montecchi (Montagues) e i Capuleti (Capulets), si odiano da generazioni. Romeo, un Montecchi, si intrufola mascherato a una festa dei Capuleti e si innamora di Giulietta; solo dopo scoprono chi è l'altro (lezione C3{6}).",
        },
        {
          tipo: "testo",
          testo:
            "Questa è la scena 2 dell'atto II, subito dopo la festa. Romeo ha scavalcato il muro del giardino dei Capuleti. Giulietta, che non sa di essere ascoltata, confessa il suo amore e il suo problema: Romeo appartiene alla famiglia nemica.",
        },
        {
          tipo: "nota",
          testo:
            "Nel testo di Shakespeare la parola balcony non compare mai: Giulietta è a una finestra (window). Il balcone è arrivato con le messe in scena dei secoli successivi, ed è diventato inseparabile dalla storia, tanto che a Verona i turisti ne visitano uno.",
        },
      ],
    },
    {
      titolo: "L'INGLESE DI SHAKESPEARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Prima di iniziare, le forme antiche che incontrerai. Giulietta usa thou, il "tu" affettuoso dell\'inglese del Cinquecento:',
        },
        {
          tipo: "tabella",
          righe: [
            [
              "thou / thee / thy",
              "you (tu, te, tuo): come I / me / my (lezione 16{1})",
            ],
            ["thyself", "yourself"],
            ["thou art / thou wilt", "you are / you will"],
            ["wherefore", "why: perché (non where!)"],
            ["'tis", "it is"],
            ["owes", "owns: possiede"],
            ["doff", "do off: togliersi (un vestito, un cappello)"],
            ["nor… nor…", "né… né…"],
          ],
        },
        {
          tipo: "nota",
          testo:
            '"Wherefore art thou Romeo?" è uno dei versi più fraintesi della letteratura: molti credono che Giulietta chieda "dove sei, Romeo?". In realtà chiede "perché sei Romeo?", cioè perché sei proprio un Montecchi.',
        },
      ],
    },
    {
      titolo: "VERSI 1–4: PERCHÉ SEI ROMEO?",
      blocchi: [
        {
          tipo: "brano",
          righe: SCENA,
          traduzione: SCENA_TRADUZIONE,
          evidenzia: [0, 3],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Giulietta si lamenta che l'uomo che ama sia un Montecchi, e gli propone due soluzioni: rinnega tuo padre e il tuo nome; oppure, se non vuoi, giura soltanto di amarmi, e sarò io a smettere di essere una Capuleti. È disposta a tutto, già alla prima notte.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Deny thy father and refuse thy name",
              it: "due imperativi: verbo base senza soggetto (lezione 19{1})",
            },
            {
              en: "if thou wilt not",
              it: '→ if you won\'t: dopo if si usa will quando significa "volere", non quando indica il futuro (lezione 34{4})',
            },
            {
              en: "be but sworn my love",
              it: "→ just swear to be my love: imperativo passivo (be + participio); but = only",
            },
            {
              en: "I'll no longer be a Capulet",
              it: "will + no longer: non… più (lezione 28{1})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "But nel senso di only è frequentissimo in Shakespeare e nella lingua letteraria: 'tis but thy name (v. 6), \"è soltanto il tuo nome\". Oggi sopravvive in espressioni come all but (quasi) e nothing but (nient'altro che).",
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
              "O Romeo, Romeo!: Giulietta si rivolge a Romeo, che crede assente",
            ],
            [
              "rhetorical question (domanda retorica)",
              "wherefore art thou Romeo?: non aspetta una risposta",
            ],
          ],
        },
      ],
    },
    {
      titolo: "IL METRO: IL BLANK VERSE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel teatro Shakespeare usa soprattutto il blank verse: pentametri giambici senza rima. Il verso ha dieci sillabe e cinque accenti, con il ritmo da-DUM, ma non rima: così suona quasi come un discorso naturale, solo un po' più musicale.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "de-NY | thy FA- | ther AND | re-FUSE | thy NAME",
              it: "cinque giambi perfetti",
            },
            {
              en: "and I'll | no LON- | ger BE | a CAP- | u-LET",
              it: "cinque accenti, nessuna rima con il verso prima",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'L\'ultimo verso della scena è cortissimo: Take all myself, tre sillabe. Il resto del verso lo "completa" la risposta di Romeo, che nel testo arriva subito dopo. Quando due personaggi si dividono lo stesso pentametro, la loro intesa si sente anche nel ritmo.',
        },
        {
          tipo: "nota",
          testo:
            "Romeo e Giulietta, quando si parlano per la prima volta alla festa, compongono insieme un sonetto intero: quattordici versi con le rime, divisi tra le loro battute. Shakespeare usa la forma del sonetto, la poesia d'amore per eccellenza, per farli innamorare.",
        },
      ],
    },
    {
      titolo: "VERSO 5: L'A PARTE",
      blocchi: [
        {
          tipo: "brano",
          righe: SCENA,
          traduzione: SCENA_TRADUZIONE,
          evidenzia: [4, 4],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Romeo parla "a parte" (aside): il pubblico lo sente, Giulietta no. È combattuto: continuare ad ascoltare o farsi vedere e rispondere? Per ora sceglie di ascoltare.',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Shall I hear more, or shall I speak…?",
              it: 'Shall I…? chiede un consiglio o un parere: "devo…?" (lezione 28{3})',
            },
            {
              en: "speak at this",
              it: "→ respond to this: rispondere a queste parole",
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
              "dramatic irony (ironia drammatica)",
              "il pubblico sa che Romeo ascolta; Giulietta no, e si confida senza difese",
            ],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 6–10: SOLO UN NOME",
      blocchi: [
        {
          tipo: "brano",
          righe: SCENA,
          traduzione: SCENA_TRADUZIONE,
          evidenzia: [5, 9],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Giulietta ragiona: il nemico non è Romeo, è solo il suo nome. "Montecchi" non è una parte del corpo, non è qualcosa di reale: è un\'etichetta. Basterebbe cambiarla.',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "'Tis but thy name that is my enemy",
              it: "→ It's only your name that is my enemy: frase scissa, mette in risalto thy name (lezione 53{5})",
            },
            {
              en: "though not a Montague",
              it: "→ though you are not a Montague: il verbo è sottinteso",
            },
            {
              en: "nor hand, nor foot, nor arm…",
              it: "una lista di negazioni: oggi neither hand nor foot (lezione 18{3})",
            },
            {
              en: "Belonging to a man",
              it: "→ that belongs to a man: l'-ing al posto di una relativa (lezione 44{1})",
            },
            {
              en: "be some other name!",
              it: 'imperativo di be: "sii un altro nome", cioè prendine un altro',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Belong vuole to: belong to a man, belong to me (lezione 49{2}). È un verbo di stato: non si usa al continuous, neanche per una situazione temporanea (lezione 13{3}).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["rhetorical question (domanda retorica)", "What's Montague?"],
            [
              "polysyndeton (polisindeto)",
              "nor hand, nor foot, nor arm, nor face, nor any other part: la ripetizione di nor rallenta e insiste",
            ],
          ],
        },
      ],
    },
    {
      titolo: "VERSI 11–17: LA ROSA",
      blocchi: [
        {
          tipo: "brano",
          righe: SCENA,
          traduzione: SCENA_TRADUZIONE,
          evidenzia: [10, 16],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "La prova: una rosa, chiamata in un altro modo, avrebbe lo stesso profumo. Allo stesso modo Romeo, se non si chiamasse Romeo, resterebbe perfetto com'è. Quindi: togliti il nome, e in cambio prendi tutta me stessa.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "That which we call a rose",
              it: "→ What we call a rose: that which = what, ciò che (lezione 44{6})",
            },
            {
              en: "would smell as sweet",
              it: "condizionale con would; dopo smell l'aggettivo, non l'avverbio: smell sweet (lezione 33{6}); as… = altrettanto (lezione 26{6})",
            },
            {
              en: "were he not Romeo call'd",
              it: "→ if he were not called Romeo: if sparisce e were va prima del soggetto (lezione 53{4})",
            },
            {
              en: "which he owes",
              it: "→ which he owns: relativa con which (lezione 44{1})",
            },
            {
              en: "doff thy name",
              it: 'doff = do off, "togliti", come take off con un vestito (lezione 47{3})',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Were he not è un second conditional (lezione 36{2}) con l'inversione, ancora usata nell'inglese formale: Were I in your position, I would accept. Nota anche were con he: nei condizionali si può usare were per tutte le persone (lezione 36{3}).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "analogy (analogia)",
              "la rosa e Romeo: quello che vale per l'una vale per l'altro",
            ],
            [
              "metaphor (metafora)",
              "doff thy name: il nome è un vestito che si può togliere",
            ],
            ["rhetorical question (domanda retorica)", "What's in a name?"],
          ],
        },
      ],
    },
    {
      titolo: "NOMI E COSE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutta la scena, guarda il ragionamento di Giulietta. È costruito come una dimostrazione: una domanda, un esempio, una conclusione.",
        },
        {
          tipo: "tabella",
          righe: [
            ["il problema", "Romeo è un Montecchi (vv. 1–4)"],
            ["la tesi", "il nemico è solo il nome, non la persona (vv. 6–7)"],
            [
              "la prova",
              "un nome non è una parte del corpo (vv. 8–10); la rosa avrebbe lo stesso profumo (vv. 11–12)",
            ],
            ["la conclusione", "togliti il nome e prendi me (vv. 13–17)"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Ma è proprio qui l'ironia tragica dell'opera: i nomi contano, eccome. Saranno l'odio tra le famiglie e i loro nomi a portare i due ragazzi alla morte. Giulietta ha ragione in teoria, e torto nel mondo in cui vive.",
        },
        {
          tipo: "nota",
          testo:
            '"A rose by any other name" è diventata un\'espressione comune in inglese: si usa per dire che cambiare nome a una cosa non ne cambia la natura. Fino ai titoli dei giornali: A tax by any other name….',
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzata verso per verso, rileggi tutta la scena con la traduzione. Prova a leggerla ad alta voce, come un'attrice. Sotto trovi il riepilogo delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: SCENA,
          traduzione: SCENA_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["apostrophe (apostrofe)", "O Romeo, Romeo! (v. 1)"],
            [
              "rhetorical question (domanda retorica)",
              "wherefore art thou Romeo? (v. 1), What's Montague? (v. 8), What's in a name? (v. 11)",
            ],
            ["dramatic irony (ironia drammatica)", "l'a parte di Romeo (v. 5)"],
            [
              "polysyndeton (polisindeto)",
              "nor hand, nor foot, nor arm… (vv. 8–9)",
            ],
            ["analogy (analogia)", "la rosa (vv. 11–14)"],
            ["metaphor (metafora)", "doff thy name (v. 15)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Non ci sono rime: è blank verse. La musica viene dal ritmo dei pentametri e dalle ripetizioni (Romeo, Romeo; name, name).",
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
          domanda: 'Che cosa chiede Giulietta con "wherefore art thou Romeo?"',
          opzioni: [
            "Dove sei, Romeo?",
            "Chi sei, Romeo?",
            "Perché sei Romeo?",
            "Quando arrivi, Romeo?",
          ],
          giusta: 2,
          spiegazione:
            "Wherefore = why. Giulietta si chiede perché Romeo debba essere proprio un Montecchi.",
          rivedi: "L'INGLESE DI SHAKESPEARE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Giulietta sa che Romeo la sta ascoltando?",
          opzioni: [
            "No: crede di essere sola, e il pubblico sa che Romeo è lì",
            "Sì, gli parla direttamente",
            "Sì, ma finge di non saperlo",
          ],
          giusta: 0,
          spiegazione:
            'È l\'ironia drammatica: Romeo parla "a parte", il pubblico lo sente e Giulietta no.',
          rivedi: "VERSO 5: L'A PARTE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "A che cosa serve l'esempio della rosa?",
          opzioni: [
            "A dire che Giulietta ama i fiori",
            "A dimostrare che il nome non cambia la natura di una cosa, né di una persona",
            "A paragonare Romeo a un fiore delicato",
          ],
          giusta: 1,
          spiegazione:
            "Una rosa con un altro nome avrebbe lo stesso profumo; Romeo con un altro nome resterebbe lo stesso.",
          rivedi: "VERSI 11–17: LA ROSA",
        },
        {
          tipo: "sottotitolo",
          testo: "L'inglese di Shakespeare",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni forma antica a quella moderna.",
          coppie: [
            ["wherefore", "why"],
            ["thou wilt", "you will"],
            ["'tis", "it is"],
            ["doff", "take off"],
            ["owes", "owns"],
          ],
          rivedi: "L'INGLESE DI SHAKESPEARE",
        },
        {
          tipo: "completa",
          consegna: 'Completa con la forma antica di "you are".',
          prima: "Thou",
          dopo: "thyself, though not a Montague.",
          risposte: ["art"],
          spiegazione: "Thou art = you are.",
          rivedi: "L'INGLESE DI SHAKESPEARE",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi la condizione in inglese moderno, con if.",
          citazione: "were he not Romeo call'd",
          parole: ["he", "called", "if", "not", "Romeo", "were"],
          soluzione: ["if", "he", "were", "not", "called", "Romeo"],
          spiegazione:
            "Nell'inversione if scompare e were va prima del soggetto (lezione 53{4}).",
          rivedi: "VERSI 11–17: LA ROSA",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi in inglese moderno.",
          citazione: "'Tis but thy name that is my enemy",
          parole: ["is", "your", "my", "it's", "that", "name", "only", "enemy"],
          soluzione: [
            "it's",
            "only",
            "your",
            "name",
            "that",
            "is",
            "my",
            "enemy",
          ],
          spiegazione:
            "'Tis = it's, but = only, thy = your: una frase scissa che mette in risalto il nome.",
          rivedi: "VERSI 6–10: SOLO UN NOME",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Perché dopo "smell" c\'è "sweet" e non "sweetly"?',
          citazione: "By any other name would smell as sweet",
          opzioni: [
            "È un errore",
            "Sweetly non esiste",
            "Dopo i verbi dei sensi (smell, taste, look…) si usa l'aggettivo",
          ],
          giusta: 2,
          spiegazione:
            'Smell, taste, look, sound, feel nel senso di "sembrare" vogliono l\'aggettivo (lezione 33{6}).',
          rivedi: "VERSI 11–17: LA ROSA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "but" in "\'Tis but thy name"?',
          opzioni: ["Solo, soltanto", "Ma", "Senza", "Tranne"],
          giusta: 0,
          spiegazione: 'But nel senso di only: "è soltanto il tuo nome".',
          rivedi: "VERSI 1–4: PERCHÉ SEI ROMEO?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che tipo di frase è "Deny thy father and refuse thy name"?',
          opzioni: [
            "Una domanda",
            "Due imperativi",
            "Un condizionale",
            "Un passivo",
          ],
          giusta: 1,
          spiegazione:
            "Deny e refuse sono verbi base senza soggetto: imperativi (lezione 19{1}).",
          rivedi: "VERSI 1–4: PERCHÉ SEI ROMEO?",
        },
        {
          tipo: "sottotitolo",
          testo: "Ritmo e figure",
        },
        {
          tipo: "seleziona",
          consegna:
            "Ecco il verso 2 diviso in sillabe. Tocca le 5 sillabe accentate.",
          parole: [
            "de",
            "ny",
            "thy",
            "fa",
            "ther",
            "and",
            "re",
            "fuse",
            "thy",
            "name",
          ],
          giuste: [1, 3, 5, 7, 9],
          sillabe: true,
          spiegazione:
            "de-NY thy FA-ther AND re-FUSE thy NAME: cinque giambi, il ritmo del blank verse.",
          rivedi: "IL METRO: IL BLANK VERSE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cos'è il blank verse?",
          opzioni: [
            "Versi senza ritmo",
            "Versi in rima baciata",
            "Pentametri giambici senza rima",
            "Prosa",
          ],
          giusta: 2,
          spiegazione:
            "Dieci sillabe e cinque accenti, come nel sonetto, ma senza rima: il verso del teatro di Shakespeare.",
          rivedi: "IL METRO: IL BLANK VERSE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["apostrophe", "O Romeo, Romeo!"],
            ["polysyndeton", "nor hand, nor foot, nor arm"],
            ["metaphor", "doff thy name"],
            ["dramatic irony", "l'a parte di Romeo"],
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
          consegna: "Traduci in italiano i versi della rosa.",
          testo:
            "What's in a name? That which we call a rose\nBy any other name would smell as sweet;",
          soluzione:
            "Che cosa c'è in un nome? Quella che chiamiamo rosa, con qualsiasi altro nome, profumerebbe allo stesso modo.",
          spiegazione:
            'Hai reso "as sweet" con un paragone ("altrettanto dolce", "allo stesso modo")? È la parte che porta il senso della frase.',
          rivedi: "VERSI 11–17: LA ROSA",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of Juliet's argument in this scene.",
          punti: [
            "the meaning of wherefore",
            "the argument about names",
            "the image of the rose",
            "the tragic irony",
          ],
          modello:
            'In this scene Juliet asks "wherefore art thou Romeo?", which means why, not where: she regrets that the man she loves is a Montague. She argues that only his name is her enemy, because a name is not a real part of a person. To prove it, she uses the image of the rose, which "by any other name would smell as sweet". The irony is tragic: in Verona names do matter, and the feud between the two families will lead the lovers to their death.',
          spiegazione:
            "Hai citato il testo e usato termini come argument, image e tragic irony? Sono le cose che un esaminatore cerca.",
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
