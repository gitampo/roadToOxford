import { Lezione } from "@/types/lezione";

export const middleAges: Lezione = {
  id: "C2",
  titolo: "Il Medioevo",
  descrizione: "Feudalesimo, Plantageneti, Magna Carta, peste nera",
  chiavi: "Beowulf, Lord Randal, Chaucer (The Canterbury Tales)",
  livello: "Letteratura",
  citazione: {
    testo:
      "No free man shall be seized or imprisoned… except by the lawful judgement of his equals or by the law of the land.",
    fonte: "Magna Carta, 1215",
    traduzione:
      "Nessun uomo libero sarà arrestato o imprigionato… se non per giudizio legale dei suoi pari o per la legge del paese.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL FEUDALESIMO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Dopo la conquista normanna, l'Inghilterra fu organizzata secondo il sistema feudale: il re concedeva terre ai baroni in cambio di fedeltà e soldati; i baroni le concedevano ai cavalieri; i contadini (serfs) lavoravano la terra e non potevano lasciarla.",
        },
        {
          tipo: "tabella",
          righe: [
            ["king", "re"],
            ["barons", "baroni"],
            ["knights", "cavalieri"],
            ["serfs / peasants", "servi della gleba / contadini"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Le donne nobili potevano gestire proprietà e monasteri, ma la loro vita dipendeva quasi sempre dal padre o dal marito.",
        },
      ],
    },
    {
      titolo: "I PLANTAGENETI E LE CROCIATE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel 1154 salì al trono Enrico II, primo re della dinastia dei Plantageneti, che governò anche su gran parte della Francia. Suo figlio Riccardo I, detto Cuor di Leone, passò quasi tutto il regno fuori dall'Inghilterra, combattendo nella Terza Crociata.",
        },
        {
          tipo: "testo",
          testo:
            "La Chiesa era potentissima. Nel 1170 l'arcivescovo Thomas Becket, in conflitto con Enrico II, fu ucciso nella cattedrale di Canterbury. Divenne santo, e la sua tomba meta di pellegrinaggi: proprio i pellegrini dei Racconti di Canterbury.",
        },
      ],
    },
    {
      titolo: "LA MAGNA CARTA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il re Giovanni Senza Terra (John Lackland), fratello di Riccardo, perse le terre francesi e impose tasse altissime. Nel 1215 i baroni ribelli lo costrinsero a firmare la Magna Carta, un documento che limitava il potere del re: anche il sovrano doveva rispettare la legge.",
        },
        {
          tipo: "testo",
          testo:
            "Nel 1295 Edoardo I convocò il cosiddetto Model Parliament, con nobili, clero e rappresentanti delle città: il modello del Parlamento moderno.",
        },
        {
          tipo: "nota",
          testo:
            "La Magna Carta è considerata una delle basi dei diritti moderni, e ha ispirato anche la Costituzione americana.",
        },
      ],
    },
    {
      titolo: "LA PESTE NERA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel 1348 arrivò la peste nera (Black Death), che uccise forse un terzo della popolazione. Mancando i lavoratori, i contadini chiesero salari più alti. Nel 1381, contro una nuova tassa, scoppiò la Rivolta dei contadini (Peasants' Revolt), guidata da Wat Tyler: fu repressa, ma il sistema feudale iniziò a sgretolarsi.",
        },
      ],
    },
    {
      titolo: "BEOWULF E L'OLD ENGLISH",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il Beowulf è il più importante poema epico in Old English. Racconta dell'eroe Beowulf che combatte il mostro Grendel, sua madre e infine un drago. L'inglese antico è così diverso da quello di oggi che va studiato come una lingua straniera:",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Hwæt! We Gardena in geardagum…",
              it: "Ascoltate! Noi dei Danesi dalle lance, nei giorni antichi…",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Tolkien, professore a Oxford, fu un grande studioso del Beowulf. Il drago del poema ha ispirato lo Smaug dello Hobbit.",
        },
        {
          tipo: "apri",
          id: "beowulf",
          titolo: "Beowulf",
          descrizione: "Anonimo, VIII–XI secolo · lettura e analisi completa",
        },
      ],
    },
    {
      titolo: "LE BALLATE: LORD RANDAL",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le ballate erano canzoni popolari tramandate a voce, con strofe brevi, ritornelli e molti dialoghi. In Lord Randal una madre interroga il figlio, che torna a casa dopo aver incontrato l'amata. Dalle risposte si capisce, strofa dopo strofa, che lei lo ha avvelenato.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "O where have you been, Lord Randal, my son?",
              it: "Oh, dove sei stato, Lord Randal, figlio mio?",
            },
            {
              en: "I'm weary wi' hunting, and fain wald lie down.",
              it: "Sono stanco della caccia, e vorrei sdraiarmi.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Esistono molte versioni, perché ogni cantore la modificava. Il testo qui è in parte modernizzato.",
        },
        {
          tipo: "apri",
          id: "lord-randal",
          titolo: "Lord Randal",
          descrizione:
            "Ballata tradizionale scozzese · lettura e analisi completa",
        },
      ],
    },
    {
      titolo: "CHAUCER E I RACCONTI DI CANTERBURY",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Geoffrey Chaucer (1343 circa – 1400) è il padre della letteratura inglese. Nei Canterbury Tales un gruppo di pellegrini diretti alla tomba di Becket si racconta storie durante il viaggio, come nel Decameron di Boccaccio, che Chaucer probabilmente conosceva. Scrisse in Middle English, già riconoscibile:",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Whan that Aprill with his shoures soote",
              it: "Quando aprile con le sue dolci piogge",
            },
            {
              en: "The droghte of March hath perced to the roote",
              it: "ha penetrato fino alla radice la siccità di marzo",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Il personaggio più famoso è la Donna di Bath (Wife of Bath): sposata cinque volte, ironica e indipendente, sostiene che nel matrimonio debba comandare la donna.",
        },
        {
          tipo: "apri",
          id: "canterbury-tales",
          titolo: "I racconti di Canterbury",
          descrizione:
            "Geoffrey Chaucer, circa 1387 · lettura e analisi completa",
        },
      ],
    },
  ],
};
