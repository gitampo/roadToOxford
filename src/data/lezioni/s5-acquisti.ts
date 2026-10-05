import { Lezione } from "@/types/lezione";

export const acquisti: Lezione = {
  id: "S5",
  titolo: "Fare acquisti",
  descrizione: "Chiedere, provare, pagare e cambiare quello che compri",
  chiavi: "shopping, taglia, fit, suit, quanto costa, saldi, resi, rimborso",
  livello: "Situazioni",
  sottotitolo: "Situazioni · Lezione S5 · A2",
  citazione: {
    testo: "Can I help you? — No thanks, I'm just looking.",
    fonte: "Il dialogo di ogni negozio britannico",
    traduzione: "Posso aiutarla? — No grazie, sto solo dando un'occhiata.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "NEL NEGOZIO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Appena entri in un negozio, il commesso (shop assistant) ti saluta con una domanda. Non è insistenza: è la formula di cortesia. Se vuoi solo guardare, c'è una risposta fissa che chiude la conversazione con gentilezza.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Can I help you?", "Posso aiutarla?"],
            [
              "Are you looking for anything in particular?",
              "Cerca qualcosa in particolare?",
            ],
            ["Are you OK there?", "Tutto bene? Le serve qualcosa?"],
            [
              "I'm just looking, thanks.",
              "Sto solo dando un'occhiata, grazie.",
            ],
            ["Yes, I'm looking for a jumper.", "Sì, cerco un maglione."],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Do you sell phone chargers?",
              it: "Vendete caricabatterie per il telefono?",
            },
            {
              en: "Have you got any umbrellas?",
              it: "Avete degli ombrelli? (lezione 18{2})",
            },
            {
              en: "Where can I find the notebooks?",
              it: "Dove trovo i quaderni?",
            },
            { en: "Have you got this in blue?", it: "Ce l'avete in blu?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Look for significa "cercare", look at "guardare": I\'m looking for a jumper (cerco un maglione) è diverso da I\'m looking at the jumpers (sto guardando i maglioni). Confonderli è un errore molto frequente.',
        },
      ],
    },
    {
      titolo: "I NOMI DEI NEGOZI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Molti negozi britannici prendono il nome da chi ci lavora, con il genitivo sassone: the baker\'s è "il negozio del fornaio". Spesso la parola shop si sottintende (lezione 5{6}).',
        },
        {
          tipo: "tabella",
          righe: [
            [
              "the chemist's / the pharmacy",
              "la farmacia (che vende anche cosmetici e prodotti per la casa)",
            ],
            ["the newsagent's", "il giornalaio (anche dolciumi e bibite)"],
            [
              "the corner shop",
              "il negozietto di quartiere, aperto fino a tardi",
            ],
            ["the off-licence", "il negozio di alcolici"],
            ["the stationer's", "la cartoleria"],
            ["the baker's / the butcher's", "il panificio / la macelleria"],
            [
              "a charity shop",
              "un negozio dell'usato che finanzia un ente benefico",
            ],
            [
              "the shopping centre",
              "il centro commerciale (mall negli Stati Uniti)",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "I charity shops sono ovunque nel Regno Unito: vestiti, libri e oggetti usati a pochissimo prezzo, venduti da volontari. Per uno studente sono una miniera.",
        },
      ],
    },
    {
      titolo: "TAGLIE E CAMERINI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le taglie britanniche sono diverse da quelle italiane: per i vestiti da donna un 10 inglese corrisponde più o meno a una 42 italiana, e per le scarpe un 8 inglese è circa un 42. Molti negozi indicano anche le taglie europee, e quelle universali (small, medium, large) funzionano ovunque.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "What size are you?", it: "Che taglia porta?" },
            { en: "I'm a medium.", it: "Porto la M." },
            {
              en: "I'm a size 42 in European sizes.",
              it: "Porto la 42 europea.",
            },
            { en: "Can I try it on?", it: "Posso provarlo? (lezione 47{3})" },
            {
              en: "Where are the changing rooms?",
              it: "Dove sono i camerini?",
            },
            {
              en: "Have you got it in a smaller size?",
              it: "Ce l'avete in una taglia più piccola?",
            },
            {
              en: "Have you got it a size up?",
              it: "Ce l'avete di una taglia in più?",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'Ora la distinzione più importante della lezione. In italiano "mi sta bene" può riguardare la taglia o l\'aspetto; in inglese sono tre verbi diversi.',
        },
        {
          tipo: "tabella",
          righe: [
            ["It fits (me).", "È la mia taglia, la misura è giusta."],
            ["It suits me.", "Mi dona, mi sta bene (il colore, lo stile)."],
            ["It goes with my jacket.", "Si abbina alla mia giacca."],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "The jeans don't fit. They're too tight.",
              it: "I jeans non mi vanno. Sono troppo stretti.",
            },
            {
              en: "That colour really suits you!",
              it: "Quel colore ti sta benissimo!",
            },
            {
              en: "It's a bit loose around the waist.",
              it: "È un po' largo in vita.",
            },
            {
              en: "Does this go with these shoes?",
              it: "Si abbina a queste scarpe?",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            '"Provare" un vestito è try on, non prove: prove significa "dimostrare". Can I prove it? suona come "posso dimostrarlo?".',
        },
      ],
    },
    {
      titolo: "QUANTO COSTA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "How much...? si accorda con quello che compri: is per una cosa sola, are per più cose. I prezzi si leggono di solito senza pounds e pence (lezione 8{9}).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "How much is this jumper?",
              it: "Quanto costa questo maglione?",
            },
            {
              en: "How much are these shoes?",
              it: "Quanto costano queste scarpe?",
            },
            { en: "How much does it cost?", it: "Quanto costa?" },
            {
              en: "It's twelve ninety-nine.",
              it: "Costa dodici e novantanove.",
            },
            { en: "How much it costs?", sbagliato: true },
          ],
        },
        {
          tipo: "tabella",
          righe: [
            ["It's on sale. / It's in the sale.", "È in saldo. / È nei saldi."],
            ["There's 20% off.", "C'è il 20% di sconto."],
            ["It's been reduced.", "È stato ribassato."],
            ["Buy one, get one free.", "Prendi due, paghi uno."],
            ["It's a bargain!", "È un affare!"],
            ["It's a rip-off!", "È una fregatura! (informale)"],
            ["It's a bit pricey.", "È un po' caro."],
            [
              "Have you got anything cheaper?",
              "Avete qualcosa di più economico?",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nei negozi britannici il prezzo non si contratta. Si tratta solo nei mercatini e nei car boot sales, i mercatini dell'usato dove la gente vende le proprie cose dal bagagliaio della macchina.",
        },
      ],
    },
    {
      titolo: "ALLA CASSA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La cassa è the till o the checkout. Il cassiere ti farà alcune domande, quasi sempre le stesse.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Next, please!", "Il prossimo, prego!"],
            ["Do you need a bag?", "Le serve una busta? (si paga a parte)"],
            ["Have you got a loyalty card?", "Ha la carta fedeltà?"],
            ["Would you like your receipt?", "Vuole lo scontrino?"],
            ["Would you like it gift-wrapped?", "Glielo incarto per regalo?"],
            [
              "Just pop your card in. / Enter your PIN.",
              "Inserisca la carta. / Digiti il PIN.",
            ],
            ["Would you like any cashback?", "Vuole prelevare dei contanti?"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "No, I've got one, thanks.",
              it: "No, ce l'ho, grazie. (la busta)",
            },
            { en: "Can I pay contactless?", it: "Posso pagare contactless?" },
            {
              en: "Could I have a receipt, please?",
              it: "Potrei avere lo scontrino, per favore?",
            },
            {
              en: "It's a present. Could you take the price off?",
              it: "È un regalo. Potrebbe togliere il prezzo?",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Alle casse automatiche dei supermercati britannici sentirai spesso una voce che dice Unexpected item in the bagging area, \"oggetto inatteso nell'area di imbustamento\". È così famosa da essere diventata uno scherzo nazionale: vuol dire solo che la bilancia non è d'accordo con quello che hai passato. Chiama un commesso con Excuse me, could you help me?.",
        },
      ],
    },
    {
      titolo: "CAMBI E RESI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per cambiare o restituire qualcosa si va al customer service desk o direttamente alla cassa. Tieni sempre lo scontrino: senza, molti negozi non accettano il reso.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I'd like to return this, please.",
              it: "Vorrei restituire questo, per favore.",
            },
            {
              en: "Can I exchange it for a smaller size?",
              it: "Posso cambiarlo con una taglia più piccola?",
            },
            { en: "Could I get a refund?", it: "Potrei avere un rimborso?" },
            {
              en: "It doesn't work. / It's faulty.",
              it: "Non funziona. / È difettoso.",
            },
            { en: "Have you got the receipt?", it: "Ha lo scontrino?" },
            {
              en: "We can give you a credit note.",
              it: "Possiamo darle un buono.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Molti negozi accettano i resi entro 28 o 30 giorni, ma è una loro scelta. Per legge il rimborso è obbligatorio solo se il prodotto è difettoso, oppure se l'hai comprato online (in quel caso hai 14 giorni per ripensarci). Refund è il rimborso in denaro, exchange il cambio, credit note il buono da spendere nello stesso negozio.",
        },
      ],
    },
    {
      titolo: "AL SUPERMERCATO E AL MERCATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Al supermercato si chiede dove si trovano le cose; i prodotti sono divisi in corsie (aisles). Per le quantità si usano i contenitori, soprattutto con i non numerabili (lezione 17{4}).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Excuse me, where can I find the rice?",
              it: "Mi scusi, dove trovo il riso?",
            },
            {
              en: "It's in aisle five, next to the pasta.",
              it: "È nella corsia cinque, vicino alla pasta.",
            },
          ],
        },
        {
          tipo: "tabella",
          righe: [
            ["a loaf of bread", "una pagnotta, un pane in cassetta"],
            ["a pint of milk", "una bottiglia di latte (568 ml)"],
            [
              "a dozen eggs / half a dozen eggs",
              "una dozzina / mezza dozzina di uova",
            ],
            ["a packet of crisps", "un pacchetto di patatine"],
            [
              "a tin of tomatoes",
              "una scatola di pomodori (can negli Stati Uniti)",
            ],
            ["a bunch of bananas", "un casco di banane"],
            ["half a kilo of apples", "mezzo chilo di mele"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Una trappola classica: nel Regno Unito crisps sono le patatine in busta, chips le patatine fritte (quelle del fish and chips). Negli Stati Uniti chips sono le patatine in busta e le fritte si chiamano French fries.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "How much are the strawberries?",
              it: "Quanto costano le fragole?",
            },
            { en: "Two pounds a punnet.", it: "Due sterline la vaschetta." },
            {
              en: "Can I have a kilo of potatoes, please?",
              it: "Mi dà un chilo di patate, per favore?",
            },
            { en: "Are these organic?", it: "Sono biologici?" },
          ],
        },
      ],
    },
    {
      titolo: "UN DIALOGO: UN MAGLIONE DA CAMBIARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Sara ha comprato un maglione per il freddo di Oxford, ma a casa si è accorta che è troppo stretto. Torna al negozio.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Assistant: Hi there, can I help you?",
              it: "Salve, posso aiutarla?",
            },
            {
              en: "Sara: Yes, please. I bought this jumper yesterday, but it doesn't fit. It's too tight.",
              it: "Sì, grazie. Ho comprato questo maglione ieri, ma non mi va. È troppo stretto.",
            },
            {
              en: "Assistant: Oh, I'm sorry about that. Have you got the receipt?",
              it: "Oh, mi dispiace. Ha lo scontrino?",
            },
            { en: "Sara: Yes, here you are.", it: "Sì, eccolo." },
            {
              en: "Assistant: Would you like a refund, or would you like to exchange it?",
              it: "Vuole un rimborso o preferisce cambiarlo?",
            },
            {
              en: "Sara: I'd like to exchange it for a bigger size, if you've got one.",
              it: "Vorrei cambiarlo con una taglia più grande, se ce l'avete.",
            },
            {
              en: "Assistant: Let me have a look. Yes, we've got it in a large. Would you like to try it on?",
              it: "Controllo. Sì, ce l'abbiamo nella L. Vuole provarlo?",
            },
            {
              en: "Sara: Yes, please. Where are the changing rooms?",
              it: "Sì, grazie. Dove sono i camerini?",
            },
            {
              en: "Assistant: Just over there, on the left.",
              it: "Proprio lì, sulla sinistra.",
            },
            {
              en: "Sara: Thanks. ... Yes, this one fits perfectly.",
              it: "Grazie. ... Sì, questo va benissimo.",
            },
            {
              en: "Assistant: Great! And that colour really suits you.",
              it: "Perfetto! E quel colore le sta proprio bene.",
            },
            {
              en: "Sara: Thank you! Is there anything to pay?",
              it: "Grazie! C'è qualcosa da pagare?",
            },
            {
              en: "Assistant: No, it's the same price. Here's your new receipt.",
              it: "No, è lo stesso prezzo. Ecco il nuovo scontrino.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Nel dialogo trovi sia fit (la taglia giusta) sia suit (il colore che dona). Here you are si dice porgendo qualcosa: è uno dei tanti significati del nostro "prego".',
        },
      ],
    },
    {
      titolo: "GLI ERRORI TIPICI",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "Can I prove it?", sbagliato: true },
            { en: "Can I try it on?", it: "Posso provarlo?" },
            { en: "It doesn't stay well on me.", sbagliato: true },
            { en: "It doesn't suit me.", it: "Non mi sta bene." },
            { en: "The price is very expensive.", sbagliato: true },
            {
              en: "It's very expensive. / The price is very high.",
              it: "È molto caro. / Il prezzo è molto alto.",
            },
            { en: "I'm looking a jumper.", sbagliato: true },
            { en: "I'm looking for a jumper.", it: "Cerco un maglione." },
          ],
        },
        {
          tipo: "testo",
          testo: "E qualche falso amico dello shopping:",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "magazine",
              "rivista (il magazzino è the warehouse o the stockroom)",
            ],
            ["cassa", "the till, the checkout (non the case)"],
            ["scontrino", "the receipt (si pronuncia /rɪˈsiːt/, la p è muta)"],
            ["libreria", "bookshop (library è la biblioteca)"],
            ["commesso", "shop assistant (commission è la provvigione)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Expensive e cheap si dicono delle cose, non dei prezzi: un prezzo è high o low. In receipt la p non si pronuncia: è una delle lettere mute della lezione 58{6}.",
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
          testo: "Nel negozio",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Il commesso ti chiede "Can I help you?", ma vuoi solo guardare. Che cosa rispondi?',
          opzioni: [
            "No, I'm only seeing.",
            "I'm just looking, thanks.",
            "Leave me, please.",
          ],
          giusta: 1,
          spiegazione: "I'm just looking, thanks è la formula fissa e gentile.",
          rivedi: "NEL NEGOZIO",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Cerco un ombrello".',
          prima: "I'm looking",
          dopo: "an umbrella.",
          risposte: ["for"],
          spiegazione: "Look for = cercare; look at = guardare.",
          rivedi: "NEL NEGOZIO",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni negozio a che cosa vende.",
          coppie: [
            ["the chemist's", "medicine e cosmetici"],
            ["the newsagent's", "giornali e dolciumi"],
            ["the off-licence", "alcolici"],
            ["the stationer's", "penne e quaderni"],
          ],
          rivedi: "I NOMI DEI NEGOZI",
        },
        {
          tipo: "sottotitolo",
          testo: "Taglie e prove",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come chiedi di provare una giacca?",
          opzioni: ["Can I prove it?", "Can I test it?", "Can I try it on?"],
          giusta: 2,
          spiegazione:
            'Provare un vestito = try on. Prove significa "dimostrare".',
          rivedi: "TAGLIE E CAMERINI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "La taglia è giusta, ma il colore non ti dona. Che cosa dici?",
          opzioni: [
            "It fits me, but it doesn't suit me.",
            "It suits me, but it doesn't fit me.",
            "It goes with me, but it doesn't fit.",
          ],
          giusta: 0,
          spiegazione:
            "Fit riguarda la misura; suit se ti sta bene, se ti dona.",
          rivedi: "TAGLIE E CAMERINI",
        },
        {
          tipo: "sottotitolo",
          testo: "Prezzi e cassa",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come chiedi il prezzo di due paia di scarpe?",
          opzioni: [
            "How much is these shoes?",
            "How much are these shoes?",
            "How much these shoes cost?",
          ],
          giusta: 1,
          spiegazione:
            "Con un plurale si usa are; con does it cost serve l'ordine delle domande: How much do they cost?",
          rivedi: "QUANTO COSTA",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni espressione al suo significato.",
          coppie: [
            ["It's a bargain!", "È un affare!"],
            ["It's a rip-off!", "È una fregatura!"],
            ["There's 20% off.", "C'è il 20% di sconto."],
            ["Buy one, get one free.", "Prendi due, paghi uno."],
          ],
          rivedi: "QUANTO COSTA",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Il cassiere ti chiede "Do you need a bag?". Che cosa vuole sapere?',
          opzioni: [
            "Se hai una borsa da controllare",
            "Se vuoi un sacchetto regalo gratis",
            "Se ti serve una busta",
          ],
          giusta: 2,
          spiegazione:
            "Ti chiede se vuoi una busta (che nel Regno Unito di solito si paga).",
          rivedi: "ALLA CASSA",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Vorrei un rimborso, per favore".',
          prima: "Could I get a",
          dopo: ", please?",
          risposte: ["refund"],
          spiegazione:
            "Refund è il rimborso in denaro; exchange il cambio; credit note il buono.",
          rivedi: "CAMBI E RESI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'In un negozio britannico chiedi "a packet of crisps". Che cosa compri?',
          opzioni: [
            "Patatine in busta",
            "Patatine fritte",
            "Un pacchetto di cracker",
          ],
          giusta: 0,
          spiegazione:
            "Nel Regno Unito crisps sono le patatine in busta, chips quelle fritte.",
          rivedi: "AL SUPERMERCATO E AL MERCATO",
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
            "Hai comprato delle scarpe online, ma sono troppo grandi. Scrivi le tue battute al negozio per cambiarle.",
          punti: [
            "spiegare il problema",
            "dire che hai lo scontrino",
            "chiedere un'altra misura",
            "chiedere se c'è da pagare",
          ],
          modello:
            "Hi, I bought these shoes online last week, but they don't fit: they're too big. Here's the receipt. Could I exchange them for a smaller size? I'm a size 7. If you haven't got them in a 7, could I get a refund? Is there anything to pay?",
          spiegazione:
            "Controlla fit per la misura, could I per le richieste e il past simple per quello che hai fatto (bought).",
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
