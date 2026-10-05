import { Lezione } from "@/types/lezione";

export const indicazioni: Lezione = {
  id: "S4",
  titolo: "Chiedere e dare indicazioni",
  descrizione: "Trovare la strada, capire le risposte e aiutare chi si è perso",
  chiavi:
    "indicazioni stradali, how do I get to, turn left, rotonda, semaforo, distanze",
  livello: "Situazioni",
  sottotitolo: "Situazioni · Lezione S4 · A1",
  citazione: {
    testo: "Would you tell me, please, which way I ought to go from here?",
    fonte: "Lewis Carroll, Alice nel Paese delle Meraviglie (1865)",
    traduzione: "Mi diresti, per favore, che strada dovrei prendere da qui?",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "FERMARE QUALCUNO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per attirare l'attenzione di uno sconosciuto si comincia sempre con Excuse me. Sorry si usa dopo, per scusarsi di un errore o di un urto; all'inizio di una richiesta va bene solo nella forma Sorry to bother you, \"scusi il disturbo\".",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Excuse me, could you help me?",
              it: "Mi scusi, potrebbe aiutarmi?",
            },
            {
              en: "Sorry to bother you, but I'm a bit lost.",
              it: "Scusi il disturbo, ma mi sono perso.",
            },
            {
              en: "Excuse me, do you know this area?",
              it: "Mi scusi, conosce la zona?",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Se la persona non sa rispondere, ti dirà quasi sempre una di queste frasi. Ringrazia e cerca qualcun altro.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Sorry, I'm not from around here.", "Mi spiace, non sono di qui."],
            ["Sorry, I've no idea.", "Mi spiace, non ne ho idea."],
            [
              "You'd better ask someone else.",
              "Meglio chiedere a qualcun altro.",
            ],
            ["Thanks anyway!", "Grazie lo stesso!"],
          ],
        },
      ],
    },
    {
      titolo: "LE DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ci sono domande dirette, brevi e informali, e domande più gentili, adatte agli sconosciuti. Le seconde cominciano con Could you tell me...? o Do you know...?",
        },
        {
          tipo: "tabella",
          righe: [
            ["Where's the station?", "Dov'è la stazione? (diretta)"],
            ["How do I get to the station?", "Come arrivo alla stazione?"],
            [
              "Could you tell me the way to the station?",
              "Mi sa indicare la strada per la stazione?",
            ],
            [
              "Is there a cash machine near here?",
              "C'è un bancomat qui vicino? (lezione 7{3})",
            ],
            ["Which way is the city centre?", "Da che parte è il centro?"],
            [
              "Am I going the right way for the museum?",
              "Sto andando nella direzione giusta per il museo?",
            ],
            ["Is it far? / How far is it?", "È lontano? / Quanto è lontano?"],
            ["Is it within walking distance?", "Ci si arriva a piedi?"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Attenzione alla trappola più importante. Dopo Could you tell me...? o Do you know...? la domanda vera diventa una domanda indiretta, e l'ordine delle parole torna quello di una frase normale: prima il soggetto, poi il verbo (lezione 42{5}).",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Where is the station?", it: "Dov'è la stazione?" },
            {
              en: "Could you tell me where the station is?",
              it: "Mi sa dire dov'è la stazione?",
            },
            { en: "Could you tell me where is the station?", sbagliato: true },
            {
              en: "Do you know where the nearest bus stop is?",
              it: "Sa dov'è la fermata dell'autobus più vicina?",
            },
            {
              en: "Do you know if there's a pharmacy near here?",
              it: "Sa se c'è una farmacia qui vicino?",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Per le domande sì/no la domanda indiretta si introduce con if: Is there a pharmacy? diventa Do you know if there's a pharmacy?.",
        },
      ],
    },
    {
      titolo: "LE INDICAZIONI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Le indicazioni si danno con l\'imperativo (lezione 19{5}). Ecco i verbi e le espressioni che sentirai. Nota che turn left non vuole preposizioni: "gira a sinistra" è turn left, non turn on the left.',
        },
        {
          tipo: "tabella",
          righe: [
            ["go straight on / straight ahead", "vai sempre dritto"],
            ["keep going", "continua così"],
            ["go along this road", "percorri questa strada"],
            ["go past the church", "supera la chiesa"],
            [
              "go up / down the road",
              "vai avanti per la strada (non per forza in salita o discesa)",
            ],
            [
              "turn left / right (into Broad Street)",
              "gira a sinistra / destra (in Broad Street)",
            ],
            [
              "take the first / second left",
              "prendi la prima / seconda a sinistra",
            ],
            ["cross the road / the bridge", "attraversa la strada / il ponte"],
            [
              "follow the signs for the station",
              "segui le indicazioni per la stazione",
            ],
            ["it's on your left / right", "è sulla sinistra / destra"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Le indicazioni usano dei punti di riferimento. Questi sono i più comuni in una città britannica:",
        },
        {
          tipo: "tabella",
          righe: [
            ["the traffic lights / the lights", "il semaforo"],
            ["the roundabout", "la rotonda"],
            ["the crossroads / the junction", "l'incrocio"],
            ["the zebra crossing", "le strisce pedonali"],
            ["the corner", "l'angolo"],
            ["the end of the road", "la fine della strada"],
            ["the high street", "la via principale, con i negozi"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Turn left at the lights.",
              it: "Al semaforo gira a sinistra.",
            },
            {
              en: "At the roundabout, take the second exit.",
              it: "Alla rotonda prendi la seconda uscita.",
            },
            {
              en: "It's on the corner of High Street and Turl Street.",
              it: "È all'angolo tra High Street e Turl Street.",
            },
          ],
        },
      ],
    },
    {
      titolo: "DOV'È ESATTAMENTE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'ultima parte delle indicazioni dice dove si trova il posto rispetto a quello che c'è intorno. Servono le preposizioni di luogo (lezione 7{6}). Attenzione: \"di fronte\" ha due traduzioni diverse.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "opposite the bank",
              "di fronte alla banca (dall'altra parte della strada)",
            ],
            ["in front of the bank", "davanti alla banca (dalla stessa parte)"],
            ["next to the post office", "accanto all'ufficio postale"],
            ["between the café and the bookshop", "tra il bar e la libreria"],
            ["behind the church", "dietro la chiesa"],
            ["on the left-hand side", "sul lato sinistro della strada"],
            ["at the end of the street", "in fondo alla strada"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "The museum is opposite the park.",
              it: "Il museo è di fronte al parco.",
            },
            {
              en: "You'll see it on your right, next to a big bookshop.",
              it: "Lo vedrai sulla destra, accanto a una grande libreria.",
            },
            { en: "You can't miss it.", it: "Non puoi sbagliarti." },
          ],
        },
        {
          tipo: "nota",
          testo:
            'You can\'t miss it vuol dire "non puoi sbagliarti, si vede benissimo". Sentirla è rassicurante; detta da un britannico, però, non garantisce niente.',
        },
      ],
    },
    {
      titolo: "DISTANZE E TEMPI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel Regno Unito le distanze a piedi si danno quasi sempre in minuti. Ci sono due costruzioni: con l'apostrofo (five minutes' walk) o con il trattino, dove minute resta al singolare perché fa da aggettivo (a five-minute walk).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "It's about five minutes' walk.",
              it: "Sono circa cinque minuti a piedi.",
            },
            {
              en: "It's a ten-minute walk from here.",
              it: "Sono dieci minuti a piedi da qui.",
            },
            {
              en: "It's a twenty-minute bus ride.",
              it: "Sono venti minuti di autobus.",
            },
            { en: "It's a ten-minutes walk.", sbagliato: true },
          ],
        },
        {
          tipo: "tabella",
          righe: [
            ["It's just round the corner.", "È proprio dietro l'angolo."],
            ["It's not far at all.", "Non è affatto lontano."],
            ["It's a bit of a walk.", "È un bel pezzo a piedi (= è lontano)."],
            ["It's miles away.", "È lontanissimo."],
            ["You'd better get a bus.", "Meglio prendere un autobus."],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Per le distanze stradali il Regno Unito usa le miglia (miles): un miglio è circa 1,6 km. Per le distanze brevi senti a volte le iarde (yards): una iarda è poco meno di un metro. It's a bit of a walk è un esempio di understatement britannico: \"un po' di strada\" significa che è proprio lontano.",
        },
      ],
    },
    {
      titolo: "QUANDO NON CAPISCI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le indicazioni arrivano veloci e piene di nomi di strade. Non fingere di aver capito: chiedi di ripetere, e soprattutto ripeti tu le indicazioni per controllare. È normalissimo, e chi ti aiuta lo apprezza.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Sorry, could you say that again?",
              it: "Scusi, potrebbe ripetere?",
            },
            {
              en: "Could you speak a bit more slowly, please?",
              it: "Potrebbe parlare un po' più piano, per favore?",
            },
            {
              en: "So, straight on and then left at the lights?",
              it: "Quindi, dritto e poi a sinistra al semaforo?",
            },
            {
              en: "Left at the church, did you say?",
              it: "A sinistra alla chiesa, ha detto?",
            },
            {
              en: "Could you show me on the map?",
              it: "Me lo può indicare sulla mappa?",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "So, ...? con il tono che sale è il modo più naturale per ripetere e controllare: chi ti ha dato le indicazioni risponderà That's it! (esatto) oppure ti correggerà. Could you speak more slowly? lo trovi anche nella lezione 25{4}.",
        },
      ],
    },
    {
      titolo: "DARE INDICAZIONI TU",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Prima o poi qualcuno chiederà la strada a te. Le indicazioni chiare hanno un ordine: si comincia dal punto in cui si è, si procede una tappa alla volta con le parole di sequenza, e si chiude dicendo che cosa si vedrà all'arrivo.",
        },
        {
          tipo: "tabella",
          righe: [
            ["First, ...", "Prima..."],
            ["Then... / After that, ...", "Poi... / Dopo..."],
            ["When you get to the lights, ...", "Quando arrivi al semaforo..."],
            ["Finally, ...", "Alla fine..."],
            ["You'll see it on your left.", "Lo vedrai sulla sinistra."],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Dopo when, anche se si parla del futuro, il verbo va al presente: When you get to the lights, non When you will get (lezione 34{4}). Quello che l'altro vedrà, invece, si dice con will.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "First, go along this road until you get to the lights.",
              it: "Prima percorri questa strada fino al semaforo.",
            },
            {
              en: "When you get to the lights, turn right.",
              it: "Quando arrivi al semaforo, gira a destra.",
            },
            {
              en: "Then take the second left. You'll see the station in front of you.",
              it: "Poi prendi la seconda a sinistra. Vedrai la stazione davanti a te.",
            },
            {
              en: "I'm going that way. Follow me!",
              it: "Vado da quella parte. Seguimi!",
            },
          ],
        },
      ],
    },
    {
      titolo: "UN DIALOGO: VERSO LA BODLEIAN",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Elena è a Carfax, l'incrocio al centro di Oxford, e cerca la Bodleian Library, la grande biblioteca dell'università. Ferma una signora.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Elena: Excuse me, could you tell me the way to the Bodleian Library?",
              it: "Mi scusi, mi sa indicare la strada per la Bodleian Library?",
            },
            {
              en: "Woman: Of course. Go up Cornmarket Street, that's this one here, with all the shops.",
              it: "Certo. Vada su per Cornmarket Street, è questa qui, con tutti i negozi.",
            },
            {
              en: "Elena: Up Cornmarket. OK.",
              it: "Su per Cornmarket. Va bene.",
            },
            {
              en: "Woman: At the end, turn right into Broad Street.",
              it: "In fondo giri a destra in Broad Street.",
            },
            {
              en: "Elena: Sorry, could you say that again?",
              it: "Scusi, può ripetere?",
            },
            {
              en: "Woman: Turn right into Broad Street. It's a wide street with a bookshop on the corner.",
              it: "Giri a destra in Broad Street. È una strada larga con una libreria all'angolo.",
            },
            {
              en: "Elena: Right into Broad Street. And then?",
              it: "A destra in Broad Street. E poi?",
            },
            {
              en: "Woman: Keep going to the end of the street. You'll see a round building with big stone heads in front of it, the Sheldonian Theatre. The Bodleian is just behind it.",
              it: "Vada avanti fino in fondo alla strada. Vedrà un edificio rotondo con delle grandi teste di pietra davanti, lo Sheldonian Theatre. La Bodleian è proprio lì dietro.",
            },
            {
              en: "Elena: So, up Cornmarket, right into Broad Street, and it's behind the Sheldonian?",
              it: "Quindi, su per Cornmarket, a destra in Broad Street, ed è dietro lo Sheldonian?",
            },
            {
              en: "Woman: That's it! It's about a ten-minute walk.",
              it: "Esatto! Sono circa dieci minuti a piedi.",
            },
            { en: "Elena: Thank you so much!", it: "Grazie mille!" },
            { en: "Woman: You're welcome. Enjoy!", it: "Prego. Buona visita!" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nota come Elena ripete ogni tappa (Up Cornmarket. OK.) e alla fine riassume tutto con So, ...?. È la tecnica che ti permette di non perderti nemmeno quando capisci solo metà delle parole.",
        },
      ],
    },
    {
      titolo: "GLI ERRORI TIPICI",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "Can you tell me where is the station?", sbagliato: true },
            {
              en: "Can you tell me where the station is?",
              it: "Mi sa dire dov'è la stazione?",
            },
            { en: "Turn on the left.", sbagliato: true },
            { en: "Turn left.", it: "Gira a sinistra." },
            { en: "It's in the right.", sbagliato: true },
            { en: "It's on the right.", it: "È sulla destra." },
            {
              en: "It's ten minutes on foot from here.",
              it: "È a dieci minuti a piedi da qui.",
            },
            {
              en: "Sorry, where is the museum? (per fermare qualcuno)",
              sbagliato: true,
            },
            {
              en: "Excuse me, where's the museum?",
              it: "Mi scusi, dov'è il museo?",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "On foot (a piedi) è giusto, ma nel parlato è più naturale dire a ten-minute walk. E ricorda: il semaforo è the lights (o the traffic lights), al plurale, anche se è uno solo.",
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
          testo: "Chiedere",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Vuoi fermare un passante per chiedere la strada. Come cominci?",
          opzioni: ["Excuse me,", "Sorry!", "Hey you,"],
          giusta: 0,
          spiegazione:
            "Excuse me serve per attirare l'attenzione; Sorry si usa dopo un errore o un urto.",
          rivedi: "FERMARE QUALCUNO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale domanda è giusta?",
          opzioni: [
            "Could you tell me where is the bank?",
            "Could you tell me where the bank is?",
            "Could you tell me where does the bank is?",
          ],
          giusta: 1,
          spiegazione:
            "Nella domanda indiretta l'ordine è quello della frase normale: soggetto (the bank) + verbo (is).",
          rivedi: "LE DOMANDE",
        },
        {
          tipo: "riordina",
          consegna: 'Chiedi: "Sa se c\'è un supermercato qui vicino?"',
          parole: [
            "near",
            "there's",
            "you",
            "if",
            "a",
            "do",
            "here?",
            "supermarket",
            "know",
          ],
          soluzione: [
            "do",
            "you",
            "know",
            "if",
            "there's",
            "a",
            "supermarket",
            "near",
            "here?",
          ],
          spiegazione:
            "Nelle domande indirette sì/no si usa if, e dopo l'ordine è soggetto + verbo: there's.",
          rivedi: "LE DOMANDE",
        },
        {
          tipo: "sottotitolo",
          testo: "Capire le indicazioni",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni indicazione alla traduzione.",
          coppie: [
            ["go past the church", "supera la chiesa"],
            ["take the second right", "prendi la seconda a destra"],
            ["at the roundabout", "alla rotonda"],
            ["at the lights", "al semaforo"],
            ["it's just round the corner", "è proprio dietro l'angolo"],
          ],
          rivedi: "LE INDICAZIONI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Ti dicono "The café is opposite the bank". Dove si trova il bar?',
          opzioni: [
            "Accanto alla banca",
            "Dietro la banca",
            "Dall'altra parte della strada rispetto alla banca",
          ],
          giusta: 2,
          spiegazione:
            "Opposite = di fronte, dall'altra parte della strada. Next to = accanto; behind = dietro.",
          rivedi: "DOV'È ESATTAMENTE",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Gira a sinistra al semaforo".',
          prima: "Turn",
          dopo: "at the lights.",
          risposte: ["left"],
          spiegazione:
            "Turn left / turn right, senza preposizioni e senza articolo.",
          rivedi: "LE INDICAZIONI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è giusta?",
          opzioni: [
            "It's a ten-minute walk.",
            "It's a ten-minutes walk.",
            "It's ten minute walk.",
          ],
          giusta: 0,
          spiegazione:
            "Con il trattino il numero e minute formano un aggettivo, che non va al plurale: a ten-minute walk (oppure ten minutes' walk).",
          rivedi: "DISTANZE E TEMPI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Un inglese ti dice "It\'s a bit of a walk". Che cosa ti sta dicendo davvero?',
          opzioni: [
            "Che è vicinissimo",
            "Che è piuttosto lontano",
            "Che bisogna camminare un pochino",
          ],
          giusta: 1,
          spiegazione:
            'È un understatement: "un po\' di strada" significa che è proprio lontano.',
          rivedi: "DISTANZE E TEMPI",
        },
        {
          tipo: "sottotitolo",
          testo: "Dare indicazioni",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è giusta?",
          opzioni: [
            "When you will get to the bridge, cross it.",
            "When you are getting to the bridge, cross it.",
            "When you get to the bridge, cross it.",
          ],
          giusta: 2,
          spiegazione:
            "Dopo when, anche per il futuro, si usa il presente: When you get to....",
          rivedi: "DARE INDICAZIONI TU",
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
            "Un turista ti ferma davanti a casa tua e ti chiede come arrivare al supermercato più vicino. Dagli le indicazioni in 4–5 frasi.",
          punti: [
            "una parola di sequenza (first, then...)",
            "una svolta con un punto di riferimento",
            "when you get to...",
            "dove si trova esattamente",
            "quanto ci vuole",
          ],
          modello:
            "Sure! First, go along this road until you get to the roundabout. At the roundabout, take the second exit. Then go past the church and take the first right. The supermarket is on your left, opposite a petrol station. It's about a ten-minute walk.",
          spiegazione:
            "Controlla l'imperativo senza you, il presente dopo when e le preposizioni: on your left, opposite, at the roundabout.",
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
