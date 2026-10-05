import { Lezione } from "@/types/lezione";

export const barPub: Lezione = {
  id: "S3",
  titolo: "Al bar e al pub",
  descrizione: "Ordinare da bere e da mangiare, pagare, offrire un giro",
  chiavi: "ordinare, caffè, pub, pint, take away, offrire, round",
  livello: "Situazioni",
  sottotitolo: "Situazioni · Lezione S3 · A1",
  citazione: {
    testo: "Fancy a pint?",
    fonte: "La domanda più britannica che ci sia",
    traduzione: "Ti va una birra?",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COME FUNZIONA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Prima delle frasi, le regole del gioco: nei bar e nei pub britannici molte cose funzionano diversamente che in Italia, e chi non le conosce rischia di aspettare al tavolo per mezz'ora senza che nessuno arrivi.",
        },
        {
          tipo: "testo",
          testo:
            "Nei coffee shop (le caffetterie come Costa o Pret) si ordina al bancone, si paga subito e poi ci si siede o si porta via. Nei pub, di solito, non c'è servizio al tavolo: si va al bancone (the bar), si ordina, si paga subito e si porta da soli il bicchiere al tavolo. Se ordini anche da mangiare, al bancone ti chiedono il numero del tavolo e il cibo te lo portano dopo.",
        },
        {
          tipo: "testo",
          testo:
            "Al bancone non c'è una fila ordinata, ma tutti sanno chi è arrivato prima, e il barista serve in quell'ordine. Non sventolare i soldi, non schioccare le dita e non chiamare a voce alta: aspetta il tuo turno guardando il barista, che ti farà un cenno.",
        },
        {
          tipo: "nota",
          testo:
            "Tra amici al pub si va a giri (rounds): ognuno, a turno, offre da bere a tutto il gruppo. Saltare il proprio giro è una delle poche cose che un britannico non perdona facilmente. Per comprare alcolici bisogna avere 18 anni; se sembri giovane, ti chiederanno un documento: Can I see some ID?",
        },
      ],
    },
    {
      titolo: "ORDINARE: LE FORMULE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per ordinare ci sono poche formule fisse. Tutte sono gentili, e tutte finiscono con please. Can I have...? è la più usata; Could I have...? è un filo più cortese; I'll have... va bene quando decidi lì per lì (lezione 28{2}); I'd like... è un po' più formale (lezione 20{4}).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Can I have a cappuccino, please?",
              it: "Mi fa un cappuccino, per favore?",
            },
            {
              en: "Could I have a pot of tea for two, please?",
              it: "Potrei avere una teiera di tè per due, per favore?",
            },
            {
              en: "I'll have a latte, please.",
              it: "Prendo un caffellatte, per favore.",
            },
            {
              en: "I'd like a hot chocolate, please.",
              it: "Vorrei una cioccolata calda, per favore.",
            },
            {
              en: "A flat white, please.",
              it: "Un flat white, per favore. (la forma più breve)",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "I want a coffee e Give me a coffee sono grammaticalmente giusti, ma a un britannico suonano bruschi, quasi maleducati. Lo stesso vale per un ordine senza please. È la differenza più importante di tutta la lezione.",
        },
        {
          tipo: "testo",
          testo:
            'Quando ordini, coffee, tea e beer diventano numerabili: two coffees vuol dire "due caffè" (lezione 17{5}). Si dice a coffee, non one coffee, a meno che tu non voglia sottolineare il numero.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Two coffees and a tea, please.",
              it: "Due caffè e un tè, per favore.",
            },
            {
              en: "Can I get a large Americano?",
              it: "Mi dà un americano grande? (frase che arriva dagli Stati Uniti, ormai comune)",
            },
          ],
        },
      ],
    },
    {
      titolo: "LE DOMANDE DEL BARISTA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Spesso la parte difficile non è ordinare, ma capire le domande, che arrivano veloci e abbreviate. Queste sono quelle che sentirai di sicuro.",
        },
        {
          tipo: "tabella",
          righe: [
            ["What can I get you?", "Che cosa ti preparo? / Cosa prendi?"],
            ["Are you being served?", "La stanno già servendo?"],
            ["Who's next?", "Chi è il prossimo?"],
            ["Eat in or take away?", "Da consumare qui o da portare via?"],
            ["Small, medium or large?", "Piccolo, medio o grande?"],
            [
              "Any milk? / What milk would you like?",
              "Con latte? / Che latte vuole? (vaccino, di soia, d'avena...)",
            ],
            ["Anything else?", "Altro?"],
            ["Is that everything? / Is that all?", "È tutto?"],
            ["What name is it?", "A che nome? (per chiamarti quando è pronto)"],
          ],
        },
        {
          tipo: "testo",
          testo: "E queste sono le risposte da avere pronte:",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Eat in, please. / Take away, please.",
              it: "Qui, grazie. / Da portare via, grazie.",
            },
            { en: "Just a regular one, thanks.", it: "Uno normale, grazie." },
            {
              en: "With oat milk, please.",
              it: "Con latte d'avena, per favore.",
            },
            { en: "That's all, thanks.", it: "È tutto, grazie." },
            { en: "No, I'm fine, thanks.", it: "No, a posto così, grazie." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Eat in or take away? è britannico; negli Stati Uniti senti For here or to go?. Are you being served? è la frase con cui il barista ti nota al bancone: se nessuno ti ha ancora servito, rispondi No, not yet, thanks, e ordina.",
        },
      ],
    },
    {
      titolo: "IL CAFFÈ E IL TÈ, ALL'INGLESE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le parole del caffè sono italiane, ma nel Regno Unito non sempre indicano la stessa cosa. Se chiedi a coffee, in molti posti ti danno un caffè lungo all'americana in una tazza grande. Se vuoi il caffè come in Italia, chiedi an espresso (e attenzione: si dice espresso, non expresso).",
        },
        {
          tipo: "tabella",
          righe: [
            ["an espresso", "un caffè (come al bar in Italia)"],
            ["a double espresso", "un caffè doppio"],
            ["an Americano", "un caffè lungo, all'americana"],
            ["a latte", "un caffellatte (non un bicchiere di latte!)"],
            [
              "a flat white",
              "un caffè con latte vellutato, più forte del latte",
            ],
            [
              "a black coffee / a white coffee",
              "un caffè senza latte / con latte",
            ],
            ["a decaf", "un decaffeinato"],
            ["a glass of milk", "un bicchiere di latte"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Il tè britannico è tè nero, e si beve con il latte. Se ordini a tea, ti chiederanno come lo vuoi, oppure ti daranno la bustina e il latte a parte. Il limone non è scontato: va chiesto.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "How do you take your tea?", it: "Come lo prendi il tè?" },
            { en: "Milk and sugar?", it: "Latte e zucchero?" },
            {
              en: "Just milk, please. No sugar.",
              it: "Solo latte, per favore. Niente zucchero.",
            },
            {
              en: "Could I have it with lemon instead?",
              it: "Potrei averlo con il limone invece?",
            },
            {
              en: "Fancy a cuppa?",
              it: "Ti va una tazza di tè? (molto britannico)",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Un caso curioso è lemonade: nel Regno Unito è una bibita gassata trasparente, simile alla Sprite, non una spremuta di limone. Se vuoi la limonata vera, cerca homemade lemonade o cloudy lemonade.",
        },
      ],
    },
    {
      titolo: "AL PUB: BIRRE E MISURE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La birra alla spina (draught beer) si ordina a pinte. Una pinta (pint) britannica è 568 ml, più di una media italiana; mezza pinta si dice a half. Il tipo di birra si mette dopo of, oppure si dice il nome della marca.",
        },
        {
          tipo: "tabella",
          righe: [
            ["a pint of lager", "una pinta di birra chiara"],
            [
              "a half of bitter",
              "mezza pinta di bitter (birra ambrata tipica inglese)",
            ],
            ["a pint of cider", "una pinta di sidro"],
            [
              "a glass of red / white wine",
              "un bicchiere di vino rosso / bianco",
            ],
            ["small, medium or large?", "per il vino: 125, 175 o 250 ml"],
            ["a soft drink", "una bibita analcolica"],
            ["a lime and soda", "acqua frizzante con sciroppo di lime"],
            ["a glass of tap water", "un bicchiere d'acqua del rubinetto"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "What have you got on draught?",
              it: "Che birre avete alla spina?",
            },
            { en: "What do you recommend?", it: "Che cosa mi consiglia?" },
            { en: "Can I try it first?", it: "Posso assaggiarla prima?" },
            {
              en: "Same again, please.",
              it: "Un altro giro uguale, per favore.",
            },
            { en: "Cheers!", it: "Salute! (e anche: grazie!)" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In Inghilterra e in Galles i locali che vendono alcolici devono per legge darti gratis un bicchiere d'acqua del rubinetto: si chiede A glass of tap water, please. Se dici solo water, potrebbero portarti una bottiglia, a pagamento.",
        },
      ],
    },
    {
      titolo: "LE CORTESIE DEL BANCONE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Un pub pieno è un piccolo esercizio di buone maniere. Queste frasi ti servono per muoverti, chiedere un posto e non pestare i piedi a nessuno.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "Excuse me, can I just squeeze past?",
              "Scusi, posso passare? (in mezzo alla folla)",
            ],
            [
              "Sorry, are you waiting?",
              "Scusi, sta aspettando? (per capire chi c'è prima)",
            ],
            ["After you.", "Prego, prima lei."],
            [
              "Is this seat free? / Is anyone sitting here?",
              "È libero questo posto?",
            ],
            [
              "Do you mind if I take this chair?",
              "Le dispiace se prendo questa sedia?",
            ],
            ["Sorry!", "Scusi! (se urti qualcuno)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Do you mind if...? significa "le dispiace se...?": se la risposta è No, go ahead, vuol dire che puoi farlo (lezione 25{3}). La logica delle risposte a mind la trovi spiegata nella lezione S10{5}.',
        },
      ],
    },
    {
      titolo: "PAGARE E OFFRIRE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il barista ti dice quanto devi con That's..., spesso seguito da una domanda sul metodo di pagamento. Nel Regno Unito quasi tutto si paga con la carta contactless.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "That's eight pounds fifty, please.",
              it: "Sono otto sterline e cinquanta, per favore.",
            },
            { en: "Card or cash?", it: "Carta o contanti?" },
            { en: "Can I pay by card?", it: "Posso pagare con la carta?" },
            {
              en: "Just tap your card there.",
              it: "Appoggi pure la carta lì.",
            },
            { en: "Do you want a receipt?", it: "Vuole lo scontrino?" },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Per offrire, in inglese ci sono molte formule, quasi tutte brevi. E per dire che offri tu il prossimo giro basta una frase.",
        },
        {
          tipo: "tabella",
          righe: [
            ["It's on me. / My treat.", "Offro io."],
            ["Let me get this.", "Lascia, pago io."],
            ["It's my round.", "Tocca a me offrire (il giro)."],
            ["Whose round is it?", "A chi tocca offrire?"],
            ["I'll get the next one.", "Il prossimo lo offro io."],
            ["Shall we split it?", "Facciamo a metà?"],
            ["Keep the change.", "Tenga il resto."],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Al bancone del pub la mancia non si usa. Se un barista è stato particolarmente gentile, la frase tradizionale è And one for yourself: gli offri da bere, e di solito lui tiene l'equivalente in denaro. Per i prezzi in sterline, rivedi la lezione 8{9}.",
        },
      ],
    },
    {
      titolo: "UN DIALOGO: AL CAFFÈ",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Giulia entra in un coffee shop in Broad Street prima della lezione.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Barista: Hi there, what can I get you?",
              it: "Ciao, cosa ti preparo?",
            },
            {
              en: "Giulia: Hi! Can I have a flat white, please?",
              it: "Ciao! Mi fai un flat white, per favore?",
            },
            {
              en: "Barista: Sure. Regular or large?",
              it: "Certo. Normale o grande?",
            },
            {
              en: "Giulia: Regular, please. With oat milk, if that's OK.",
              it: "Normale, per favore. Con latte d'avena, se si può.",
            },
            {
              en: "Barista: No problem. Eat in or take away?",
              it: "Nessun problema. Qui o da portare via?",
            },
            {
              en: "Giulia: Take away, please. And could I have one of those croissants?",
              it: "Da portare via, per favore. E potrei avere uno di quei croissant?",
            },
            {
              en: "Barista: Of course. Would you like it warmed up?",
              it: "Certo. Te lo scaldo?",
            },
            { en: "Giulia: Yes, please.", it: "Sì, grazie." },
            { en: "Barista: Anything else?", it: "Altro?" },
            {
              en: "Giulia: No, that's all, thanks.",
              it: "No, è tutto, grazie.",
            },
            {
              en: "Barista: That's six twenty, please. Just tap when you're ready.",
              it: "Sono sei e venti. Appoggia pure la carta quando vuoi.",
            },
            { en: "Giulia: Thanks!", it: "Grazie!" },
            {
              en: "Barista: Can I take a name for the coffee?",
              it: "Mi dici un nome per il caffè?",
            },
            { en: "Giulia: Giulia. G-I-U-L-I-A.", it: "Giulia. G-I-U-L-I-A." },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Six twenty: nel parlato i prezzi si dicono spesso senza pounds e pence, come in italiano "sei e venti". Of course, Sure, No problem sono tutti modi di dire "certo".',
        },
      ],
    },
    {
      titolo: "UN DIALOGO: AL PUB",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Venerdì sera, Marco è al pub con tre amici del college. Tocca a lui offrire il giro.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Marco: Right, it's my round. What are you having?",
              it: "Allora, tocca a me. Che cosa prendete?",
            },
            {
              en: "Emily: Oh, thanks! A pint of cider, please.",
              it: "Oh, grazie! Una pinta di sidro, per favore.",
            },
            {
              en: "Tom: Same for me, cheers.",
              it: "Lo stesso per me, grazie.",
            },
            {
              en: "Priya: Just a lime and soda for me. I'm driving.",
              it: "Per me solo acqua e lime. Devo guidare.",
            },
            {
              en: "Bartender: Hiya, are you being served?",
              it: "Ciao, ti stanno già servendo?",
            },
            {
              en: "Marco: Not yet, thanks. Can I have two pints of cider, a lime and soda and a pint of lager, please?",
              it: "Non ancora, grazie. Mi dà due pinte di sidro, un'acqua e lime e una pinta di birra chiara, per favore?",
            },
            {
              en: "Bartender: Which lager? We've got Peroni or a local one.",
              it: "Quale birra? Abbiamo la Peroni o una locale.",
            },
            {
              en: "Marco: I'll try the local one, please.",
              it: "Provo quella locale, grazie.",
            },
            {
              en: "Bartender: That's twenty-three forty.",
              it: "Sono ventitré e quaranta.",
            },
            {
              en: "Marco: Can I pay contactless?",
              it: "Posso pagare contactless?",
            },
            { en: "Bartender: Yep, go ahead.", it: "Sì, vai pure." },
            {
              en: "Marco: Cheers! Could I get a tray as well?",
              it: "Grazie! Potrei avere anche un vassoio?",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'What are you having? è il modo naturale di chiedere "che cosa prendete?" offrendo da bere: il present continuous qui indica una decisione già presa per adesso. Cheers, come vedi, vale sia "grazie" sia "salute".',
        },
      ],
    },
    {
      titolo: "GLI ERRORI TIPICI",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "I want a coffee.", sbagliato: true },
            {
              en: "Can I have a coffee, please?",
              it: "Mi fa un caffè, per favore?",
            },
            { en: "One coffee, please.", sbagliato: true },
            { en: "A coffee, please.", it: "Un caffè, per favore." },
            {
              en: "A latte, please. (per avere un bicchiere di latte)",
              sbagliato: true,
            },
            {
              en: "A glass of milk, please.",
              it: "Un bicchiere di latte, per favore.",
            },
            {
              en: "Can I have the bill? (al bancone del pub)",
              sbagliato: true,
            },
            {
              en: "Can I pay, please? / How much is that?",
              it: "Posso pagare? / Quant'è?",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Al pub e al coffee shop si paga subito, quindi non c'è un conto da chiedere: the bill (il conto) si chiede al ristorante, dove si paga alla fine (lezione S6{6}). E se dopo aver ordinato ti accorgi di non sapere come si dice qualcosa, indica con il dito e usa this one o one of those: funziona sempre.",
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
          testo: "Come funziona",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Entri in un pub britannico e ti siedi a un tavolo. Che cosa succede, di solito?",
          opzioni: [
            "Arriva un cameriere a prendere l'ordine.",
            "Ordini e paghi alla fine, prima di uscire.",
            "Nessuno viene: devi andare a ordinare al bancone.",
          ],
          giusta: 2,
          spiegazione:
            "Nella maggior parte dei pub si ordina e si paga al bancone, subito.",
          rivedi: "COME FUNZIONA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa vuol dire "It\'s my round"?',
          opzioni: [
            "È il mio turno di offrire da bere a tutti.",
            "È il mio tavolo.",
            "Tocca a me ordinare per me stesso.",
          ],
          giusta: 0,
          spiegazione:
            "Al pub si offre a giri: chi dice It's my round paga da bere a tutto il gruppo.",
          rivedi: "COME FUNZIONA",
        },
        {
          tipo: "sottotitolo",
          testo: "Ordinare",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è il modo giusto di ordinare un tè?",
          opzioni: [
            "I want a tea.",
            "Can I have a tea, please?",
            "Give me a tea, please.",
          ],
          giusta: 1,
          spiegazione:
            "Can I have...? / Could I have...? / I'll have... + please. I want e Give me suonano bruschi.",
          rivedi: "ORDINARE: LE FORMULE",
        },
        {
          tipo: "riordina",
          consegna: 'Ordina: "Prendo un cappuccino, per favore".',
          parole: ["please", "a", "have", "I'll", "cappuccino,"],
          soluzione: ["I'll", "have", "a", "cappuccino,", "please"],
          spiegazione:
            "I'll have... è perfetto quando decidi al momento che cosa prendere.",
          rivedi: "ORDINARE: LE FORMULE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni domanda del barista al suo significato.",
          coppie: [
            ["Eat in or take away?", "Qui o da portare via?"],
            ["Anything else?", "Altro?"],
            ["Are you being served?", "La stanno già servendo?"],
            ["What can I get you?", "Che cosa ti preparo?"],
          ],
          rivedi: "LE DOMANDE DEL BARISTA",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Il barista ti chiede "Anything else?" e hai finito. Che cosa rispondi?',
          opzioni: ["Nothing more.", "It's finished.", "That's all, thanks."],
          giusta: 2,
          spiegazione:
            "That's all, thanks (o No, I'm fine, thanks) chiude l'ordine con gentilezza.",
          rivedi: "LE DOMANDE DEL BARISTA",
        },
        {
          tipo: "sottotitolo",
          testo: "Che cosa ti arriva?",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "In un caffè di Londra vuoi un caffè come quello italiano. Che cosa chiedi?",
          opzioni: [
            "An espresso, please.",
            "A coffee, please.",
            "A latte, please.",
          ],
          giusta: 0,
          spiegazione:
            "A coffee spesso è un caffè lungo; a latte è un caffellatte. Il caffè all'italiana è an espresso.",
          rivedi: "IL CAFFÈ E IL TÈ, ALL'INGLESE",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Ordini "a lemonade" in un pub inglese. Che cosa ti portano?',
          opzioni: [
            "Una spremuta di limone",
            "Una bibita gassata trasparente, tipo Sprite",
            "Un tè al limone",
          ],
          giusta: 1,
          spiegazione:
            "Nel Regno Unito lemonade è una bibita gassata: la limonata vera è homemade o cloudy lemonade.",
          rivedi: "IL CAFFÈ E IL TÈ, ALL'INGLESE",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Mezza pinta di birra chiara, per favore".',
          prima: "A",
          dopo: "of lager, please.",
          risposte: ["half"],
          spiegazione: "Mezza pinta si dice semplicemente a half.",
          rivedi: "AL PUB: BIRRE E MISURE",
        },
        {
          tipo: "sottotitolo",
          testo: "Pagare",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni frase alla traduzione.",
          coppie: [
            ["It's on me.", "Offro io."],
            ["Shall we split it?", "Facciamo a metà?"],
            ["Keep the change.", "Tenga il resto."],
            ["Same again, please.", "Un altro giro uguale."],
          ],
          rivedi: "PAGARE E OFFRIRE",
        },
        {
          tipo: "sottotitolo",
          testo: "Scrivi",
        },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi il tuo testo e confrontalo con il modello.",
        },
        {
          tipo: "scrivi",
          consegna:
            "Sei al bancone di un coffee shop. Scrivi le tue battute: ordina una bevanda e qualcosa da mangiare, rispondi alle domande del barista e paga.",
          punti: [
            "saluto e ordine con please",
            "misura o tipo di latte",
            "qui o da portare via",
            "chiudere l'ordine",
            "pagare con la carta",
          ],
          modello:
            "Hi! Can I have a large latte, please? With soya milk, if that's OK. And could I have a blueberry muffin as well? To eat in, please. No, that's all, thanks. Can I pay by card? Great, thank you!",
          spiegazione:
            "Controlla che ogni richiesta abbia una formula gentile (Can I have / Could I have) e please, e che il latte non sia diventato a milk.",
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
