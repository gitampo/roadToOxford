import { Lezione } from "@/types/lezione";

// Virginia Woolf, Mrs Dalloway (1925): l'inizio del romanzo,
// pubblico dominio. Una riga per ogni frase o parte di frase
const BRANO = [
  "Mrs. Dalloway said she would buy the flowers herself.",
  "For Lucy had her work cut out for her.",
  "The doors would be taken off their hinges; Rumpelmayer's men were coming.",
  "And then, thought Clarissa Dalloway, what a morning — fresh as if issued to children on a beach.",
  "What a lark! What a plunge!",
  "For so it had always seemed to her, when, with a little squeak of the hinges, which she could hear now, she had burst open the French windows and plunged at Bourton into the open air.",
  "How fresh, how calm, stiller than this of course, the air was in the early morning;",
  "like the flap of a wave; the kiss of a wave; chill and sharp and yet (for a girl of eighteen as she then was) solemn,",
  "feeling as she did, standing there at the open window, that something awful was about to happen;",
  "looking at the flowers, at the trees with the smoke winding off them and the rooks rising, falling;",
  'standing and looking until Peter Walsh said, "Musing among the vegetables?" — was that it? — "I prefer men to cauliflowers" — was that it?',
];

const BRANO_TRADUZIONE = [
  "La signora Dalloway disse che i fiori li avrebbe comprati lei.",
  "Perché Lucy aveva già il suo bel da fare.",
  "Le porte sarebbero state tolte dai cardini; stavano arrivando gli uomini di Rumpelmayer.",
  "E poi, pensò Clarissa Dalloway, che mattina: fresca come se fosse stata distribuita a dei bambini su una spiaggia.",
  "Che allegria! Che tuffo!",
  "Perché così le era sempre sembrato quando, con un piccolo cigolio dei cardini, che sentiva anche adesso, aveva spalancato le portefinestre e si era tuffata, a Bourton, nell'aria aperta.",
  "Com'era fresca, com'era calma, più ferma di questa naturalmente, l'aria la mattina presto;",
  "come lo schiaffo di un'onda; il bacio di un'onda; fredda e pungente eppure (per una ragazza di diciotto anni, come era lei allora) solenne,",
  "perché sentiva, in piedi lì alla finestra aperta, che stava per succedere qualcosa di terribile;",
  "guardando i fiori, gli alberi da cui il fumo saliva a spirale, e le cornacchie che si alzavano, ricadevano;",
  "in piedi a guardare finché Peter Walsh disse: «Fantastichiamo tra le verdure?» (era così?) «Preferisco gli uomini ai cavolfiori» (era così?)",
];

export const mrsDalloway: Lezione = {
  id: "mrs-dalloway",
  titolo: "Mrs Dalloway: l'inizio",
  descrizione:
    "Un mattino a Londra e trent'anni di ricordi: lettura, analisi ed esercizi",
  chiavi:
    "Woolf, modernismo, flusso di coscienza, discorso indiretto libero, tempo",
  livello: "Letteratura",
  sottotitolo: "Modulo C7 · Virginia Woolf",
  citazione: {
    testo: "Mrs. Dalloway said she would buy the flowers herself.",
    fonte: "Virginia Woolf, Mrs Dalloway (1925)",
    traduzione:
      "La signora Dalloway disse che i fiori li avrebbe comprati lei.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "È l'inizio di uno dei romanzi più importanti del Novecento. Lo abbiamo diviso in righe, una per ogni frase o parte di frase. Leggilo una volta, senza preoccuparti se ti perdi: i pensieri saltano dal presente al passato, ed è proprio questo il punto. Nei riquadri successivi lo analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
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
            "Virginia Woolf (1882–1941) fu una delle grandi scrittrici del modernismo, il movimento che all'inizio del Novecento rinnovò il romanzo (lezione C7{4}). Mrs Dalloway (1925) racconta una sola giornata di giugno del 1923, a Londra: Clarissa Dalloway, una signora dell'alta società, prepara una festa per la sera.",
        },
        {
          tipo: "testo",
          testo:
            "Mentre cammina per Londra, i pensieri di Clarissa tornano continuamente alla giovinezza a Bourton, la casa di campagna della sua famiglia, e a Peter Walsh, l'uomo che l'aveva amata e che lei aveva rifiutato. Accanto alla sua storia c'è quella di Septimus Warren Smith, un reduce della guerra sconvolto dal trauma: i due non si incontrano mai, ma le loro giornate si specchiano.",
        },
        {
          tipo: "nota",
          testo:
            "Il titolo provvisorio del romanzo era The Hours (Le ore). Le ore battute dal Big Ben scandiscono il tempo dell'orologio; i pensieri dei personaggi seguono un altro tempo, interiore, che va avanti e indietro.",
        },
      ],
    },
    {
      titolo: "LE PAROLE DEL MATTINO",
      blocchi: [
        {
          tipo: "testo",
          testo: "Ecco le parole e le espressioni che ti servono:",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "have one's work cut out",
              "avere un sacco da fare (modo di dire)",
            ],
            ["hinges", "cardini"],
            [
              "Rumpelmayer's",
              "una pasticceria e ditta di ricevimenti di Londra",
            ],
            ["a lark", "un divertimento (ma anche un'allodola)"],
            ["a plunge", "un tuffo"],
            ["a squeak", "un cigolio"],
            ["French windows", "portefinestre"],
            ["the flap of a wave", "lo schiaffo, il colpo di un'onda"],
            ["chill", "fresco, freddo"],
            ["rooks", "corvi, cornacchie"],
            ["musing", "fantasticare, riflettere"],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 1–3: I FIORI",
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
            "Una frase semplicissima apre il romanzo: la signora Dalloway andrà a comprare i fiori di persona. Il motivo: la cameriera, Lucy, ha già troppo da fare, perché bisogna togliere le porte dai cardini per la festa, e stanno arrivando gli uomini della ditta che si occupa del ricevimento.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "said she would buy the flowers herself",
              it: 'discorso indiretto: "I will buy" diventa she would buy, un passo indietro nel tempo (lezione 42{2})',
            },
            {
              en: "herself",
              it: 'il riflessivo per dare enfasi: "lei stessa, di persona"',
            },
            {
              en: "For Lucy had her work cut out for her",
              it: "for all'inizio = perché (lezione 55{5}); have one's work cut out = avere molto da fare",
            },
            {
              en: "The doors would be taken off their hinges",
              it: "futuro nel passato, al passivo: would be + participio (lezione 43{2})",
            },
            {
              en: "Rumpelmayer's men were coming",
              it: "past continuous per un appuntamento già fissato (lezione 27{4})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'La prima frase è un discorso indiretto: Clarissa ha detto "I\'ll buy the flowers myself". Ma chi lo racconta? Il narratore, che ci informa dei fatti. Dalla quarta frase, invece, la voce cambierà.',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "in medias res",
              "il romanzo comincia nel mezzo di una situazione, senza presentazioni",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 4–5: CHE MATTINA!",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [3, 4],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Clarissa esce, e il mattino la travolge: è fresco, nuovo, come se fosse stato appena consegnato a dei bambini su una spiaggia. Che allegria! Che tuffo! Non è più il narratore che parla: sono le esclamazioni di Clarissa, la sua gioia.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "thought Clarissa Dalloway",
              it: 'dopo le parole riportate il verbo può venire prima del soggetto: "pensò Clarissa"',
            },
            {
              en: "what a morning",
              it: "what a + nome: esclamazione (lezione 3{4})",
            },
            {
              en: "fresh as if issued to children on a beach",
              it: 'as if + participio, senza soggetto né verbo: "come se fosse stato distribuito"',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Lark ha due significati: "allodola" e "divertimento, scherzo" (for a lark = per divertimento). Il mattino presto, l\'ora delle allodole, e l\'allegria di un gioco: Woolf usa entrambi.',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "exclamation (esclamazione)",
              "What a lark! What a plunge!: le emozioni di Clarissa, senza filtro",
            ],
            [
              "simile (similitudine)",
              "fresh as if issued to children on a beach",
            ],
            [
              "pun (gioco di parole)",
              "lark: l'allodola del mattino e il divertimento",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LA TECNICA: LA VOCE DENTRO LA TESTA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Hai visto il cambio: nella prima frase parla il narratore, nella quarta parla già Clarissa, anche se il testo è in terza persona e senza virgolette. Questa tecnica si chiama discorso indiretto libero (free indirect speech): la voce del narratore si fonde con i pensieri del personaggio.",
        },
        {
          tipo: "tabella",
          righe: [
            ["discorso diretto", '"What a lark!" thought Clarissa.'],
            ["discorso indiretto", "Clarissa thought that it was great fun."],
            [
              "discorso indiretto libero",
              "What a lark! What a plunge!: i pensieri, in terza persona, senza virgolette",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Woolf la spinge fino al flusso di coscienza (stream of consciousness): il testo segue i pensieri come vengono, con associazioni, salti nel tempo, frasi lasciate a metà. Un cigolio di cardini di oggi riporta Clarissa a un cigolio di cardini di trent'anni prima.",
        },
        {
          tipo: "nota",
          testo:
            "I segnali del discorso indiretto libero: esclamazioni (What a morning), espressioni parlate (of course), domande che il personaggio si fa (was that it?). Quando li vedi, sai che stai leggendo dentro la testa del personaggio.",
        },
      ],
    },
    {
      titolo: "FRASI 6–9: BOURTON",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [5, 8],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Il mattino di Londra le ricorda le mattine di Bourton, quando a diciotto anni spalancava le portefinestre e si tuffava nell'aria aperta, con il cigolio dei cardini che sente ancora adesso. Quell'aria era fresca e calma, come un'onda, come il bacio di un'onda; eppure lei, ragazza, sentiva che stava per accadere qualcosa di terribile.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "so it had always seemed to her, when… she had burst open",
              it: "past perfect: un passato più lontano del racconto, il ricordo (lezione 37{2})",
            },
            {
              en: "which she could hear now",
              it: "relativa non restrittiva tra virgole (lezione 44{4}); now dentro il ricordo: passato e presente si sovrappongono",
            },
            {
              en: "How fresh, how calm… the air was",
              it: "esclamazione con how + aggettivo, con soggetto e verbo in fondo",
            },
            {
              en: "something awful was about to happen",
              it: 'be about to + verbo: "stare per", un futuro imminente',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Feeling as she did vuol dire "sentendo, come infatti sentiva": un modo letterario di sottolineare una sensazione. Burst open (spalancare) è irregolare: burst / burst / burst.',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "flashback",
              "da Londra a Bourton, da più di cinquant'anni ai diciotto, in una sola frase",
            ],
            [
              "simile (similitudine)",
              "like the flap of a wave; the kiss of a wave",
            ],
            [
              "antithesis (antitesi)",
              "chill and sharp and yet… solemn; fresh and calm, ma something awful",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 10–11: PETER WALSH",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [9, 10],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            'Il ricordo continua: Clarissa guarda i fiori, gli alberi, il fumo, le cornacchie che si alzano e ricadono, finché Peter Walsh la prende in giro: "Fantastichiamo tra le verdure?". O forse disse "Preferisco gli uomini ai cavolfiori"? Clarissa non ricorda bene. La memoria è imprecisa, e il testo lo mostra.',
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "looking… standing and looking",
              it: "una catena di -ing: azioni contemporanee, senza un verbo principale",
            },
            {
              en: "the rooks rising, falling",
              it: "-ing dopo il nome: le cornacchie mentre si alzano e ricadono",
            },
            {
              en: "until Peter Walsh said",
              it: 'until + past simple: "finché"',
            },
            {
              en: "I prefer men to cauliflowers",
              it: "prefer A to B: preferire A a B (lezione 20{6})",
            },
            {
              en: "was that it?",
              it: '"era così?": una domanda che Clarissa fa a se stessa',
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
              "repetition (ripetizione)",
              "was that it? — was that it?: il dubbio della memoria",
            ],
            [
              "irony (ironia)",
              "Musing among the vegetables?: la serietà della ragazza contro la battuta di Peter",
            ],
          ],
        },
      ],
    },
    {
      titolo: "IL TEMPO INTERIORE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutto l'inizio, guarda quanto tempo passa davvero: Clarissa esce di casa, nient'altro. Pochi secondi. Ma in quei secondi la sua mente percorre trent'anni.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "il presente (frasi 1–5)",
              "Londra, giugno 1923: i fiori, la festa, il mattino",
            ],
            [
              "il passato (frasi 6–9)",
              "Bourton, la giovinezza: la finestra, l'aria, un presentimento",
            ],
            [
              "il passato incerto (frasi 10–11)",
              "Peter Walsh e le sue parole, ricordate a metà",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            "È la grande scoperta del romanzo modernista: il tempo dell'orologio e il tempo della mente non coincidono. Un cigolio, un'aria fresca, e il passato torna presente. Woolf vuole mostrare la vita come la viviamo davvero: non una storia in ordine, ma un intreccio di percezioni e ricordi.",
        },
        {
          tipo: "nota",
          testo:
            "In A Room of One's Own (1929) Woolf scrisse che una donna, per scrivere, ha bisogno di soldi e di una stanza tutta per sé. Anche in Mrs Dalloway c'è questa riflessione: Clarissa è una padrona di casa brillante, ma la sua vita interiore resta invisibile agli altri.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato frase per frase, rileggi tutto l'inizio con la traduzione. Prova a segnare con il dito il momento in cui si passa dal presente al passato. Sotto trovi il riepilogo delle figure e delle tecniche.",
        },
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure e le tecniche",
        },
        {
          tipo: "tabella",
          righe: [
            ["in medias res", "Mrs. Dalloway said… (frase 1)"],
            [
              "free indirect speech (discorso indiretto libero)",
              "what a morning (frase 4), What a lark! (frase 5)",
            ],
            ["pun (gioco di parole)", "lark (frase 5)"],
            [
              "simile (similitudine)",
              "fresh as if issued… (frase 4), like the flap of a wave (frase 8)",
            ],
            ["flashback", "Bourton (frasi 6–11)"],
            [
              "antithesis (antitesi)",
              "chill and sharp and yet… solemn (frase 8)",
            ],
            ["repetition (ripetizione)", "was that it? (frase 11)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "La punteggiatura è parte della tecnica: punti e virgola, trattini e parentesi permettono ai pensieri di interrompersi e ripartire, come fanno nella mente.",
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
          domanda: "Perché Clarissa va a comprare i fiori di persona?",
          opzioni: [
            "Perché la cameriera Lucy ha già molto da fare per la festa",
            "Perché adora fare la spesa",
            "Perché il fioraio è un suo amico",
          ],
          giusta: 0,
          spiegazione: '"For Lucy had her work cut out for her".',
          rivedi: "FRASI 1–3: I FIORI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa riporta Clarissa al passato?",
          opzioni: [
            "Una lettera di Peter Walsh",
            "L'aria fresca del mattino e il cigolio dei cardini",
            "Una fotografia",
          ],
          giusta: 1,
          spiegazione:
            "Il mattino fresco e il piccolo cigolio dei cardini la riportano a Bourton, a diciotto anni.",
          rivedi: "FRASI 6–9: BOURTON",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa mostra "was that it?" alla fine del brano?',
          opzioni: [
            "Che Clarissa non ha sentito bene",
            "Che Peter le ha fatto una domanda",
            "Che la memoria è imprecisa: Clarissa non ricorda esattamente le parole di Peter",
          ],
          giusta: 2,
          spiegazione:
            "Clarissa si chiede quali fossero davvero le parole di Peter: la memoria ricostruisce.",
          rivedi: "FRASI 10–11: PETER WALSH",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola o espressione al suo significato.",
          coppie: [
            ["have one's work cut out", "avere molto da fare"],
            ["hinges", "cardini"],
            ["plunge", "tuffo"],
            ["squeak", "cigolio"],
            ["musing", "fantasticare"],
          ],
          rivedi: "LE PAROLE DEL MATTINO",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi la frase come discorso diretto, al futuro.",
          citazione: "Mrs. Dalloway said she would buy the flowers herself.",
          parole: ["buy", "I", "myself", "flowers", "will", "the"],
          soluzione: ["I", "will", "buy", "the", "flowers", "myself"],
          spiegazione:
            "Nel discorso indiretto will diventa would e herself prende il posto di myself (lezione 42{2}).",
          rivedi: "FRASI 1–3: I FIORI",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi l'esclamazione nell'ordine normale di una frase.",
          citazione: "How fresh, how calm… the air was",
          parole: ["was", "calm", "the", "fresh", "air", "and"],
          soluzione: ["the", "air", "was", "fresh", "and", "calm"],
          spiegazione:
            "Nell'esclamazione con how l'aggettivo va in testa e soggetto e verbo in fondo.",
          rivedi: "FRASI 6–9: BOURTON",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "something awful was about to happen"?',
          opzioni: [
            "Stava per succedere qualcosa di terribile",
            "Era successo qualcosa di terribile",
            "Succedeva spesso qualcosa di terribile",
          ],
          giusta: 0,
          spiegazione: "Be about to + verbo = stare per: un futuro imminente.",
          rivedi: "FRASI 6–9: BOURTON",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Perché "she had burst open the French windows" è al past perfect?',
          opzioni: [
            "Perché è un'azione in corso",
            "Perché è un ricordo, più lontano nel passato del momento del racconto",
            "Perché è un condizionale",
          ],
          giusta: 1,
          spiegazione:
            "Il past perfect indica il passato del passato: Bourton viene prima di Londra (lezione 37{2}).",
          rivedi: "FRASI 6–9: BOURTON",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "preferisco gli uomini ai cavolfiori".',
          prima: "I prefer men",
          dopo: "cauliflowers",
          risposte: ["to"],
          spiegazione: "Prefer A to B: preferire A a B (lezione 20{6}).",
          rivedi: "FRASI 10–11: PETER WALSH",
        },
        {
          tipo: "sottotitolo",
          testo: "Tecniche e figure",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cos'è il discorso indiretto libero?",
          opzioni: [
            "Un dialogo tra virgolette",
            "Una lettera inserita nel romanzo",
            "I pensieri del personaggio riportati in terza persona, senza virgolette, con la sua voce",
          ],
          giusta: 2,
          spiegazione:
            'Come in "What a lark! What a plunge!": la voce del narratore si fonde con quella di Clarissa.',
          rivedi: "LA TECNICA: LA VOCE DENTRO LA TESTA",
        },
        {
          tipo: "seleziona",
          consegna:
            "Tocca le frasi che sono chiaramente pensieri di Clarissa, non informazioni del narratore.",
          parole: [
            "Mrs. Dalloway said she would buy the flowers herself.",
            "What a lark!",
            "What a plunge!",
            "Rumpelmayer's men were coming.",
          ],
          giuste: [1, 2],
          spiegazione:
            "Le esclamazioni sono la voce di Clarissa. Le altre due frasi danno informazioni.",
          rivedi: "LA TECNICA: LA VOCE DENTRO LA TESTA",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura o tecnica al suo esempio.",
          coppie: [
            ["pun", "What a lark!"],
            ["simile", "like the flap of a wave"],
            ["flashback", "she had burst open the French windows… at Bourton"],
            [
              "in medias res",
              "Mrs. Dalloway said she would buy the flowers herself.",
            ],
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
          consegna: "Traduci in italiano le prime cinque frasi.",
          testo:
            "Mrs. Dalloway said she would buy the flowers herself. For Lucy had her work cut out for her. The doors would be taken off their hinges; Rumpelmayer's men were coming. And then, thought Clarissa Dalloway, what a morning — fresh as if issued to children on a beach. What a lark! What a plunge!",
          soluzione:
            "La signora Dalloway disse che i fiori li avrebbe comprati lei. Perché Lucy aveva il suo bel daffare. Si dovevano togliere le porte dai cardini; stavano arrivando gli uomini di Rumpelmayer. E poi, pensò Clarissa Dalloway, che mattina: fresca come se fosse stata appena regalata a dei bambini su una spiaggia. Che allegria! Che tuffo!",
          spiegazione:
            'Come hai reso What a lark? È quasi intraducibile: "che spasso", "che allegria", "che divertimento" perdono l\'allodola del mattino. È il tipico problema di traduzione dei giochi di parole.',
          rivedi: "FRASI 4–5: CHE MATTINA!",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of the opening of Mrs Dalloway.",
          punti: [
            "the simple first sentence",
            "free indirect speech",
            "the flashback to Bourton",
            "clock time and inner time",
          ],
          modello:
            'Mrs Dalloway opens with a simple, ordinary sentence: "Mrs. Dalloway said she would buy the flowers herself." Soon the narrator\'s voice merges with Clarissa\'s thoughts through free indirect speech, as in "What a lark! What a plunge!". The squeak of the hinges takes her back thirty years to Bourton, where she used to burst open the French windows. In just a few seconds of real time, her mind travels through decades of memories. Woolf shows that inner time, made of perceptions and memories, is very different from the time of the clock.',
          spiegazione:
            "Hai citato il testo e usato termini come free indirect speech e flashback? Sono le cose che un esaminatore cerca.",
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
