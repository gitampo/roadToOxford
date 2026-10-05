import { Lezione } from "@/types/lezione";

// George Gordon Byron, She Walks in Beauty (1814, pubblicata nel 1815),
// pubblico dominio
const POESIA = [
  "She walks in beauty, like the night",
  "Of cloudless climes and starry skies;",
  "And all that's best of dark and bright",
  "Meet in her aspect and her eyes:",
  "Thus mellowed to that tender light",
  "Which heaven to gaudy day denies.",
  "One shade the more, one ray the less,",
  "Had half impaired the nameless grace",
  "Which waves in every raven tress,",
  "Or softly lightens o'er her face;",
  "Where thoughts serenely sweet express,",
  "How pure, how dear their dwelling-place.",
  "And on that cheek, and o'er that brow,",
  "So soft, so calm, yet eloquent,",
  "The smiles that win, the tints that glow,",
  "But tell of days in goodness spent,",
  "A mind at peace with all below,",
  "A heart whose love is innocent!",
];

const POESIA_TRADUZIONE = [
  "Lei cammina nella bellezza, come la notte",
  "di climi senza nuvole e di cieli stellati;",
  "e tutto il meglio del buio e della luce",
  "si incontra nel suo aspetto e nei suoi occhi:",
  "così addolcito in quella luce tenera",
  "che il cielo nega al giorno sfarzoso.",
  "Un'ombra in più, un raggio in meno,",
  "avrebbero offuscato a metà la grazia senza nome",
  "che ondeggia in ogni ciocca corvina",
  "o illumina dolcemente il suo volto;",
  "dove pensieri serenamente dolci esprimono",
  "quanto sia pura, quanto cara la loro dimora.",
  "E su quella guancia, e su quella fronte,",
  "così dolci, così calme, eppure eloquenti,",
  "i sorrisi che conquistano, i colori che risplendono",
  "parlano solo di giorni trascorsi nella bontà,",
  "di una mente in pace con tutto ciò che è quaggiù,",
  "di un cuore il cui amore è innocente!",
];

export const sheWalksInBeauty: Lezione = {
  id: "she-walks-in-beauty",
  titolo: "She Walks in Beauty",
  descrizione:
    "Byron e la bellezza come armonia di luce e ombra: lettura, analisi ed esercizi",
  chiavi: "Byron, Romanticismo, bellezza, tetrametro giambico",
  livello: "Letteratura",
  sottotitolo: "Modulo C5 · Lord Byron",
  citazione: {
    testo:
      "She walks in beauty, like the night / Of cloudless climes and starry skies.",
    fonte: "Lord Byron, She Walks in Beauty (1815)",
    traduzione:
      "Lei cammina nella bellezza, come la notte di climi senza nuvole e di cieli stellati.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Tre strofe brevi, una sola donna. Leggi la poesia tutta una volta, con calma. Nei riquadri successivi la analizziamo strofa per strofa; la traduzione completa la trovi alla fine.",
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
            "George Gordon, Lord Byron (1788–1824), fu il poeta più famoso e scandaloso d'Europa: ribelle, pieno di debiti e di amori, morì in Grecia, dove era andato a combattere per l'indipendenza (lezione C5{7}). Il suo personaggio tipico, l'eroe byroniano, è orgoglioso e tormentato.",
        },
        {
          tipo: "testo",
          testo:
            "Questa poesia, invece, è serena. Secondo i racconti dell'epoca, Byron la scrisse nel 1814 dopo aver visto a una festa una cugina acquisita, Anne Wilmot, vestita a lutto: un abito nero con piccoli lustrini scintillanti. La poesia fu pubblicata nel 1815 nelle Hebrew Melodies, una raccolta di testi da mettere in musica.",
        },
        {
          tipo: "nota",
          testo:
            "Nota la scelta sorprendente: la bellezza della donna non è paragonata al giorno, al sole o alla primavera, come nella tradizione, ma alla notte. È proprio l'immagine del vestito nero con i lustrini.",
        },
      ],
    },
    {
      titolo: "STROFA 1: COME LA NOTTE",
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
            "Lei cammina avvolta nella bellezza come una notte limpida e stellata. Nel suo volto e nei suoi occhi si incontra il meglio del buio e della luce, mescolati in una luce dolce e tenue: quella che il cielo non concede al giorno, troppo sfacciato e luminoso.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "She walks in beauty",
              it: "present simple: una caratteristica stabile, non un momento (lezione 10{1})",
            },
            {
              en: "like the night / Of cloudless climes",
              it: 'like + nome: "come" (similitudine); cloudless = senza nuvole: il suffisso -less (senza)',
            },
            {
              en: "all that's best of dark and bright / Meet",
              it: "all that = tutto ciò che; il verbo meet è al plurale perché il poeta pensa a tante cose (lezione 44{6})",
            },
            {
              en: "Which heaven to gaudy day denies",
              it: "→ which heaven denies to gaudy day: l'oggetto (which) in testa, il complemento prima del verbo",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Il suffisso -less vuol dire "senza": cloudless (senza nuvole), nameless (senza nome, v. 8), homeless, useless. Il suffisso -y vuol dire "pieno di": starry (pieno di stelle), cloudy.',
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
              "like the night: la bellezza paragonata alla notte, non al giorno",
            ],
            [
              "antithesis (antitesi)",
              "dark and bright: il buio e la luce, uniti nella stessa persona",
            ],
            [
              "alliteration (allitterazione)",
              "cloudless climes; starry skies; best… bright",
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
            ["night / bright / light", "versi 1, 3 e 5: rima A"],
            ["skies / eyes / denies", "versi 2, 4 e 6: rima B"],
          ],
        },
      ],
    },
    {
      titolo: "IL METRO: SOLO DUE RIME",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ogni verso ha otto sillabe e quattro accenti con il ritmo da-DUM: è il tetrametro giambico. Ogni strofa ha sei versi con lo schema ABABAB: soltanto due rime per sei versi, che si alternano come il buio e la luce di cui parla la poesia.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "she WALKS | in BEAU- | ty, LIKE | the NIGHT",
              it: "otto sillabe, quattro accenti",
            },
            {
              en: "of CLOUD- | less CLIMES | and STAR- | ry SKIES",
              it: "un ritmo regolarissimo, come un passo calmo",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Il ritmo regolare e le rime che tornano danno alla poesia un movimento lento e armonioso: lo stesso del passo della donna che "cammina nella bellezza". La forma imita il contenuto.',
        },
      ],
    },
    {
      titolo: "STROFA 2: UN'OMBRA IN PIÙ",
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
            "L'equilibrio è perfetto: basterebbe un'ombra in più o un raggio in meno per rovinare a metà quella grazia indescrivibile, che si muove nei suoi capelli neri come le penne del corvo e illumina il suo volto. E sul volto, i pensieri sereni mostrano quanto sia pura la mente che li ospita.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "One shade the more, one ray the less, / Had half impaired…",
              it: 'un\'ipotesi irreale sul passato: had + participio usato come would have + participio, "avrebbe offuscato" (lezione 41{1})',
            },
            {
              en: "the nameless grace / Which waves… / Or softly lightens",
              it: "relativa con which; softly è un avverbio di modo (lezione 33{1})",
            },
            {
              en: "thoughts serenely sweet express, / How pure, how dear…",
              it: "→ sweet thoughts express how pure and dear their home is: un'esclamazione indiretta con how",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nell'inglese di oggi la frase sarebbe un third conditional: If there had been one more shade, her grace would have been half impaired. Byron usa la forma antica, più breve: had al posto di would have.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "antithesis (antitesi)",
              "one shade the more, one ray the less: ombra e luce in perfetto equilibrio",
            ],
            [
              "metaphor (metafora)",
              "raven tress: i capelli neri come le penne del corvo",
            ],
            [
              "metaphor (metafora)",
              'dwelling-place: la mente è la "casa" dei pensieri',
            ],
          ],
        },
      ],
    },
    {
      titolo: "STROFA 3: LA BELLEZZA DELL'ANIMA",
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
            "Lo sguardo scende sulla guancia e sulla fronte: dolci, calme, eppure espressive. I suoi sorrisi e il colore del suo viso raccontano una vita trascorsa nella bontà, una mente in pace con il mondo, un cuore che ama in modo innocente. La bellezza esteriore è il riflesso di quella interiore.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "So soft, so calm, yet eloquent",
              it: 'so + aggettivo: "così"; yet = eppure, ma (lezione 55{3})',
            },
            {
              en: "The smiles that win, the tints that glow",
              it: "due relative con that, parallele (lezione 44{1})",
            },
            {
              en: "But tell of days in goodness spent",
              it: 'but = only: "non fanno che parlare"; spent = participio di spend, dopo il nome',
            },
            {
              en: "A heart whose love is innocent",
              it: "whose = il cui, di cui (lezione 14{4})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Spend si usa sia per i soldi sia per il tempo: spend money, spend a day. Il paradigma è irregolare: spend / spent / spent (lezione 23{3}).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "anaphora (anafora)",
              "So soft, so calm…; A mind… / A heart…: la ripetizione dà un tono solenne",
            ],
            [
              "parallelism (parallelismo)",
              "the smiles that win, the tints that glow: due frasi costruite allo stesso modo",
            ],
            [
              "exclamation (esclamazione)",
              "A heart whose love is innocent!: l'unico punto esclamativo della poesia, alla fine",
            ],
          ],
        },
      ],
    },
    {
      titolo: "LA BELLEZZA COME ARMONIA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutte le strofe, guarda il movimento dello sguardo. La poesia parte dalla figura intera che cammina, poi si avvicina al volto, agli occhi, ai capelli, alla guancia; e alla fine entra dentro di lei, nella mente e nel cuore.",
        },
        {
          tipo: "tabella",
          righe: [
            ["strofa 1", "la figura e gli occhi: buio e luce insieme"],
            ["strofa 2", "i capelli e il volto: un equilibrio perfetto"],
            ["strofa 3", "il sorriso, poi la mente e il cuore: la bontà"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Non succede nulla: non c'è una storia, non c'è un \"io\" che parla d'amore. C'è solo uno sguardo che contempla. Per un poeta famoso per le passioni e gli scandali, è una poesia sorprendentemente calma, in cui la bellezza è armonia tra opposti e tra corpo e anima.",
        },
        {
          tipo: "nota",
          testo:
            "L'idea che la bellezza esteriore rifletta quella interiore viene dalla filosofia antica (Platone) e torna spesso nella poesia d'amore, anche in quella italiana: pensa alla donna angelo del Dolce stil novo.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzata strofa per strofa, rileggi tutta la poesia con la traduzione. Leggila lentamente: ha il passo calmo della donna che descrive. Sotto trovi il riepilogo delle rime e delle figure retoriche.",
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
            "Ogni strofa ha lo schema ABABAB: due sole rime alternate per sei versi, in tetrametri giambici. Strofa 1: night / bright / light e skies / eyes / denies. Strofa 2: less / tress / express e grace / face / place. Strofa 3: brow / glow / below e eloquent / spent / innocent.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["simile (similitudine)", "like the night (v. 1)"],
            [
              "antithesis (antitesi)",
              "dark and bright (v. 3), one shade the more, one ray the less (v. 7)",
            ],
            [
              "alliteration (allitterazione)",
              "cloudless climes, starry skies (v. 2)",
            ],
            [
              "metaphor (metafora)",
              "raven tress (v. 9), dwelling-place (v. 12)",
            ],
            [
              "anaphora (anafora)",
              "So soft, so calm (v. 14), A mind… / A heart… (vv. 17–18)",
            ],
            [
              "parallelism (parallelismo)",
              "the smiles that win, the tints that glow (v. 15)",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Tutte le figure lavorano per la stessa idea: l'equilibrio, tra luce e buio, tra corpo e anima.",
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
          domanda: "A che cosa viene paragonata la bellezza della donna?",
          opzioni: [
            "A una notte limpida e stellata",
            "A un giorno d'estate",
            "A una rosa",
            "Al sole",
          ],
          giusta: 0,
          spiegazione:
            '"Like the night / Of cloudless climes and starry skies": una scelta insolita, ispirata forse al suo abito nero con i lustrini.',
          rivedi: "STROFA 1: COME LA NOTTE",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Che cosa succederebbe con "un\'ombra in più, un raggio in meno"?',
          opzioni: [
            "La donna diventerebbe più bella",
            "La sua grazia sarebbe rovinata a metà",
            "Arriverebbe la notte",
          ],
          giusta: 1,
          spiegazione:
            "L'equilibrio è perfetto: basterebbe pochissimo per rovinarlo.",
          rivedi: "STROFA 2: UN'OMBRA IN PIÙ",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa mostra la terza strofa?",
          opzioni: [
            "Che la donna è triste",
            "Che il poeta è innamorato e soffre",
            "Che la bellezza esteriore riflette la bontà interiore",
          ],
          giusta: 2,
          spiegazione:
            "I sorrisi e i colori del viso parlano di una vita di bontà, di una mente in pace e di un cuore innocente.",
          rivedi: "STROFA 3: LA BELLEZZA DELL'ANIMA",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola al suo significato.",
          coppie: [
            ["cloudless", "senza nuvole"],
            ["starry", "pieno di stelle"],
            ["gaudy", "sfarzoso, vistoso"],
            ["raven", "nero come il corvo"],
            ["brow", "fronte"],
          ],
          rivedi: "STROFA 1: COME LA NOTTE",
        },
        {
          tipo: "completa",
          consegna: 'Forma l\'aggettivo con -less: "senza nome".',
          prima: "the",
          dopo: "grace",
          risposte: ["nameless"],
          spiegazione:
            'Il suffisso -less vuol dire "senza": name + less = nameless.',
          rivedi: "STROFA 1: COME LA NOTTE",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi nell'ordine normale.",
          citazione: "Which heaven to gaudy day denies",
          parole: ["to", "day", "heaven", "gaudy", "which", "denies"],
          soluzione: ["which", "heaven", "denies", "to", "gaudy", "day"],
          spiegazione:
            "Soggetto + verbo + complemento: il poeta sposta denies in fondo per la rima con skies ed eyes.",
          rivedi: "STROFA 1: COME LA NOTTE",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi nell'ordine normale.",
          citazione: "But tell of days in goodness spent",
          parole: ["of", "spent", "in", "tell", "goodness", "days"],
          soluzione: ["tell", "of", "days", "spent", "in", "goodness"],
          spiegazione:
            "Il participio spent va subito dopo il nome che descrive: days spent in goodness.",
          rivedi: "STROFA 3: LA BELLEZZA DELL'ANIMA",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che valore ha "had half impaired" in questi versi?',
          citazione:
            "One shade the more, one ray the less, / Had half impaired the nameless grace",
          opzioni: [
            'Un\'ipotesi irreale: "avrebbe offuscato"',
            "Un past perfect che racconta un fatto",
            "Un passivo",
          ],
          giusta: 0,
          spiegazione:
            "Had + participio qui vale would have + participio: è un'ipotesi che non si è realizzata (lezione 41{1}).",
          rivedi: "STROFA 2: UN'OMBRA IN PIÙ",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Che cosa significa "whose" in "A heart whose love is innocent"?',
          opzioni: ["Chi", "Il cui", "Quale", "Che cosa"],
          giusta: 1,
          spiegazione:
            "Whose indica possesso: un cuore il cui amore è innocente (lezione 14{4}).",
          rivedi: "STROFA 3: LA BELLEZZA DELL'ANIMA",
        },
        {
          tipo: "sottotitolo",
          testo: "Metro e figure",
        },
        {
          tipo: "seleziona",
          consegna:
            'Tocca le parole che rimano con "night" nella prima strofa.',
          parole: ["skies", "bright", "eyes", "light", "denies", "beauty"],
          giuste: [1, 3],
          spiegazione:
            "Night, bright e light: la rima A. Skies, eyes e denies sono la rima B.",
          rivedi: "IL METRO: SOLO DUE RIME",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è lo schema delle rime di ogni strofa?",
          opzioni: ["AABBCC", "ABABCC", "ABABAB", "ABCABC"],
          giusta: 2,
          spiegazione: "Solo due rime alternate per sei versi: ABABAB.",
          rivedi: "IL METRO: SOLO DUE RIME",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["simile", "like the night"],
            ["antithesis", "one shade the more, one ray the less"],
            ["metaphor", "raven tress"],
            ["anaphora", "A mind… / A heart…"],
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
          consegna: "Traduci in italiano i primi quattro versi.",
          testo:
            "She walks in beauty, like the night\nOf cloudless climes and starry skies;\nAnd all that's best of dark and bright\nMeet in her aspect and her eyes:",
          soluzione:
            "Lei cammina nella bellezza, come la notte di climi senza nuvole e di cieli stellati; e tutto ciò che c'è di meglio nel buio e nella luce si incontra nel suo volto e nei suoi occhi:",
          spiegazione:
            'Come hai reso "walks in beauty"? È un\'espressione insolita anche in inglese: "cammina nella bellezza", "incede bella" sono entrambe possibili.',
          rivedi: "STROFA 1: COME LA NOTTE",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of the idea of beauty in the poem.",
          punti: [
            "the simile of the night",
            "the balance of dark and bright",
            "inner and outer beauty",
            "the regular form",
          ],
          modello:
            'Byron compares the woman\'s beauty not to the day but to "the night / Of cloudless climes and starry skies". Her beauty is a perfect balance of "dark and bright": "one shade the more, one ray the less" would spoil it. In the last stanza her physical beauty reflects her inner goodness, "a mind at peace" and "a heart whose love is innocent". The regular iambic tetrameter and the alternating rhymes ABABAB reflect the same harmony. Unusually for Byron, the poem is calm and contemplative.',
          spiegazione:
            "Hai citato il testo e usato termini come simile, antithesis e iambic tetrameter? Sono le cose che un esaminatore cerca.",
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
