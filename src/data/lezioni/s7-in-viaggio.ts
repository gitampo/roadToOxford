import { Lezione } from "@/types/lezione";

export const inViaggio: Lezione = {
  id: "S7",
  titolo: "In viaggio",
  descrizione: "Biglietti, treni, autobus, aeroporto e hotel",
  chiavi: "biglietto, andata e ritorno, binario, treno, aeroporto, hotel, miss",
  livello: "Situazioni",
  sottotitolo: "Situazioni · Lezione S7 · A2",
  citazione: {
    testo: "Not all those who wander are lost.",
    fonte: "J.R.R. Tolkien, La Compagnia dell'Anello (1954)",
    traduzione: "Non tutti quelli che vagano sono perduti.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL BIGLIETTO DEL TRENO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Tolkien, l'autore della citazione, insegnò a Oxford per più di trent'anni. Da Oxford a Londra c'è un'ora di treno: è il viaggio che farai più spesso. I biglietti si comprano alla biglietteria (the ticket office), alle macchinette (the ticket machines) o sull'app, e la prima scelta è il tipo di biglietto.",
        },
        {
          tipo: "tabella",
          righe: [
            ["a single (ticket)", "un biglietto di sola andata"],
            [
              "a return (ticket)",
              "un biglietto di andata e ritorno (round trip negli Stati Uniti)",
            ],
            ["a day return", "andata e ritorno in giornata"],
            [
              "off-peak / peak",
              "fuori dalle ore di punta (più economico) / nelle ore di punta",
            ],
            ["first class / standard class", "prima / seconda classe"],
            [
              "a railcard",
              "una tessera sconto (per i giovani tra 16 e 25 anni c'è la 16-25 Railcard)",
            ],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "A day return to London, please.",
              it: "Un andata e ritorno in giornata per Londra, per favore.",
            },
            {
              en: "Is there a student discount?",
              it: "C'è uno sconto per studenti?",
            },
            {
              en: "When's the next train to Bath?",
              it: "Quando parte il prossimo treno per Bath?",
            },
            {
              en: "Is it direct, or do I have to change?",
              it: "È diretto o devo cambiare?",
            },
            { en: "Where do I change?", it: "Dove devo cambiare?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nel Regno Unito il prezzo del treno cambia moltissimo secondo l'orario: lo stesso viaggio può costare il doppio nelle ore di punta. Se puoi, viaggia off-peak e compra la Railcard, che fa risparmiare un terzo.",
        },
      ],
    },
    {
      titolo: "IN STAZIONE E SUL TRENO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            '"Binario" si dice platform. Il treno parte from un binario e si ferma at una stazione.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Which platform does the London train leave from?",
              it: "Da che binario parte il treno per Londra?",
            },
            {
              en: "It leaves from platform four.",
              it: "Parte dal binario quattro.",
            },
            {
              en: "Does this train stop at Reading?",
              it: "Questo treno ferma a Reading?",
            },
            { en: "Is this seat taken?", it: "È occupato questo posto?" },
            {
              en: "The train is delayed by fifteen minutes.",
              it: "Il treno ha quindici minuti di ritardo.",
            },
            {
              en: "The train has been cancelled.",
              it: "Il treno è stato cancellato.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Gli annunci in stazione sono veloci e seguono sempre lo stesso schema. Conoscerlo ti fa capire anche se perdi qualche parola.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "The train now approaching platform 2 is...",
              "Il treno in arrivo al binario 2 è...",
            ],
            [
              "...the 10:15 service to London Paddington.",
              "...il treno delle 10:15 per Londra Paddington.",
            ],
            ["Calling at Didcot and Reading.", "Ferma a Didcot e Reading."],
            [
              "Please stand behind the yellow line.",
              "Si prega di restare dietro la linea gialla.",
            ],
            [
              "This train terminates here.",
              "Questo treno termina qui la corsa.",
            ],
            ["We apologise for the delay.", "Ci scusiamo per il ritardo."],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Is delayed (è in ritardo) è un aggettivo come tanti: non si dice is in delay. Per un ritardo in generale si usa anche be late: Sorry I'm late, the train was late.",
        },
      ],
    },
    {
      titolo: "AUTOBUS, METRO E TAXI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Sugli autobus britannici si sale davanti e si paga all'autista (o si appoggia la carta). Le fermate non sono sempre annunciate: chiedi all'autista di avvisarti, e premi il pulsante per prenotare la fermata.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Does this bus go to the train station?",
              it: "Questo autobus va alla stazione?",
            },
            {
              en: "A single to the city centre, please.",
              it: "Un biglietto per il centro, per favore.",
            },
            {
              en: "Could you tell me when we get to Summertown?",
              it: "Mi può avvisare quando arriviamo a Summertown?",
            },
            {
              en: "I need to get off at the next stop.",
              it: "Devo scendere alla prossima fermata.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            '"Salire" e "scendere" da un mezzo si dicono con get on e get off (bus, treno, aereo) e get in e get out of (macchina, taxi): con i mezzi grandi "si sale sopra", in quelli piccoli "si entra".',
        },
        {
          tipo: "tabella",
          righe: [
            ["get on / get off the bus", "salire / scendere dall'autobus"],
            ["get in / get out of the taxi", "salire / scendere dal taxi"],
            ["the Tube / the Underground", "la metropolitana di Londra"],
            [
              "touch in / touch out",
              "passare la carta all'entrata / all'uscita",
            ],
            ["Mind the gap.", "Attenzione allo spazio tra treno e banchina."],
            ["the Central line, eastbound", "la linea Central, direzione est"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Could you take me to the airport, please?",
              it: "Mi porta all'aeroporto, per favore?",
            },
            {
              en: "Roughly how much will it be?",
              it: "Più o meno quanto verrà?",
            },
            {
              en: "Could you drop me here, please?",
              it: "Mi può lasciare qui, per favore?",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nella metro di Londra le linee si chiamano per nome (Central, Northern, Victoria...) e la direzione si indica con i punti cardinali: northbound, southbound, eastbound, westbound. Con la carta contactless non serve comprare il biglietto, ma ricordati di passarla anche all'uscita.",
        },
      ],
    },
    {
      titolo: "IN AEROPORTO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["check-in desk", "banco del check-in"],
            ["hand luggage / hold luggage", "bagaglio a mano / da stiva"],
            ["boarding pass", "carta d'imbarco"],
            ["gate", "uscita d'imbarco"],
            ["window seat / aisle seat", "posto finestrino / corridoio"],
            ["baggage reclaim", "ritiro bagagli"],
            ["passport control / customs", "controllo passaporti / dogana"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Al controllo passaporti nel Regno Unito ti possono fare alcune domande. Rispondi in modo breve, chiaro e sincero.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "What's the purpose of your visit?",
              it: "Qual è lo scopo del suo viaggio?",
            },
            {
              en: "I'm here to study. / I'm on holiday.",
              it: "Sono qui per studiare. / Sono in vacanza.",
            },
            { en: "How long are you staying?", it: "Quanto tempo si ferma?" },
            {
              en: "For two weeks. / Until June.",
              it: "Due settimane. / Fino a giugno.",
            },
            { en: "Where are you staying?", it: "Dove alloggia?" },
            { en: "At a hostel in Oxford.", it: "In un ostello a Oxford." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Luggage (bagagli) è non numerabile, come baggage: non si dice two luggages ma two bags o two suitcases (lezione 17{1}). How long are you staying? usa il present continuous per un programma già deciso (lezione 27{4}).",
        },
      ],
    },
    {
      titolo: "IN HOTEL O IN OSTELLO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per il check-in si dice il nome della prenotazione con under, come al ristorante. Attenzione alla differenza tra le camere: double e twin hanno entrambe due posti, ma non lo stesso letto.",
        },
        {
          tipo: "tabella",
          righe: [
            ["a single room", "una camera singola"],
            ["a double room", "una camera doppia con letto matrimoniale"],
            ["a twin room", "una camera doppia con due letti separati"],
            ["en-suite", "con bagno in camera"],
            ["a dorm (dormitory)", "una camerata (in ostello)"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Hi, I've got a reservation under the name Bianchi.",
              it: "Salve, ho una prenotazione a nome Bianchi.",
            },
            {
              en: "I booked a twin room for three nights.",
              it: "Ho prenotato una doppia con due letti per tre notti.",
            },
            { en: "Is breakfast included?", it: "La colazione è inclusa?" },
            {
              en: "What time is checkout?",
              it: "A che ora bisogna lasciare la camera?",
            },
            {
              en: "Could I have the Wi-Fi password?",
              it: "Potrei avere la password del Wi-Fi?",
            },
            {
              en: "Could I leave my luggage here until this afternoon?",
              it: "Potrei lasciare qui i bagagli fino al pomeriggio?",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "E se qualcosa non va nella stanza, lo si dice con il present simple o con there isn't / there aren't (lezione 7{3}).",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The shower doesn't work.", it: "La doccia non funziona." },
            {
              en: "There aren't any towels in my room.",
              it: "Nella mia camera non ci sono asciugamani.",
            },
            {
              en: "My room is very noisy. Could I change rooms?",
              it: "La mia camera è molto rumorosa. Potrei cambiare stanza?",
            },
            {
              en: "I'd like to check out, please.",
              it: "Vorrei lasciare la camera, per favore.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Camera in inglese è la macchina fotografica: la stanza è room, la camera da letto bedroom. È uno dei falsi amici più antichi e più traditori.",
        },
      ],
    },
    {
      titolo: "QUANDO QUALCOSA VA STORTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Per annunciare un problema appena successo si usa il present perfect: conta il risultato adesso, non il momento (lezione 29{5}). Il present perfect serve proprio per le "notizie" (lezione 30{7}).',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've missed my train.", it: "Ho perso il treno." },
            { en: "I've lost my passport.", it: "Ho perso il passaporto." },
            {
              en: "My phone's been stolen.",
              it: "Mi hanno rubato il telefono.",
            },
            {
              en: "My suitcase hasn't arrived.",
              it: "La mia valigia non è arrivata.",
            },
            {
              en: "Can I use this ticket on the next train?",
              it: "Posso usare questo biglietto sul prossimo treno?",
            },
            {
              en: "Where's the lost property office?",
              it: "Dov'è l'ufficio oggetti smarriti?",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Il nostro "perdere" ha due traduzioni. Lose è perdere qualcosa che non trovi più (le chiavi, il passaporto); miss è perdere un mezzo, un\'occasione o un evento perché arrivi tardi (il treno, il volo, la lezione). I lost the train fa ridere: sembra che tu abbia smarrito un treno intero.',
        },
      ],
    },
    {
      titolo: "UN DIALOGO: DA OXFORD A LONDRA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Paolo vuole passare la giornata a Londra. È alla biglietteria della stazione di Oxford.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Clerk: Morning! Where are you travelling to?",
              it: "Buongiorno! Dove deve andare?",
            },
            {
              en: "Paolo: Hi, a day return to London Paddington, please.",
              it: "Salve, un andata e ritorno in giornata per Londra Paddington, per favore.",
            },
            {
              en: "Clerk: Are you travelling now? It's still peak time, so it's more expensive.",
              it: "Parte adesso? È ancora orario di punta, quindi costa di più.",
            },
            {
              en: "Paolo: Oh. When does the off-peak start?",
              it: "Ah. Da quando inizia la fascia economica?",
            },
            {
              en: "Clerk: In about twenty minutes. There's an off-peak train at ten past ten.",
              it: "Tra una ventina di minuti. C'è un treno off-peak alle dieci e dieci.",
            },
            {
              en: "Paolo: I'll take that one, then. I've got a 16-25 Railcard.",
              it: "Allora prendo quello. Ho la 16-25 Railcard.",
            },
            {
              en: "Clerk: Great, that's a third off. Can I see it, please?",
              it: "Perfetto, è un terzo di sconto. Me la fa vedere?",
            },
            {
              en: "Paolo: Here you are. Is it direct?",
              it: "Eccola. È diretto?",
            },
            {
              en: "Clerk: Yes, it's direct. It leaves from platform one.",
              it: "Sì, è diretto. Parte dal binario uno.",
            },
            {
              en: "Paolo: And what time is the last train back?",
              it: "E a che ora è l'ultimo treno per tornare?",
            },
            {
              en: "Clerk: Just before midnight. But check the app: it sometimes changes at weekends.",
              it: "Poco prima di mezzanotte. Ma controlli l'app: nel fine settimana a volte cambia.",
            },
            {
              en: "Paolo: Brilliant, thanks a lot.",
              it: "Perfetto, grazie mille.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Brilliant nel Regno Unito si usa di continuo per dire "perfetto, ottimo", anche per cose piccolissime. Morning! è la forma breve e amichevole di Good morning.',
        },
      ],
    },
    {
      titolo: "GLI ERRORI TIPICI",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "I lost the train.", sbagliato: true },
            { en: "I missed the train.", it: "Ho perso il treno." },
            { en: "The train is in delay.", sbagliato: true },
            { en: "The train is delayed.", it: "Il treno è in ritardo." },
            { en: "A ticket of return, please.", sbagliato: true },
            {
              en: "A return ticket, please.",
              it: "Un biglietto di andata e ritorno, per favore.",
            },
            { en: "I have two luggages.", sbagliato: true },
            { en: "I've got two suitcases.", it: "Ho due valigie." },
            { en: "We'd like a double room with two beds.", sbagliato: true },
            {
              en: "We'd like a twin room.",
              it: "Vorremmo una doppia con due letti.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "A return ticket: il nome che indica il tipo (return) va davanti, come un aggettivo, invece di essere legato con of (lezione 4{6}). Lo stesso vale per a train station, a bus stop, a ticket machine.",
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
          testo: "In stazione",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Vuoi andare a Londra e tornare a Oxford la sera stessa. Che biglietto chiedi?",
          opzioni: [
            "A day return to London.",
            "A single to London.",
            "A round to London.",
          ],
          giusta: 0,
          spiegazione:
            "Single = solo andata; return = andata e ritorno; day return = andata e ritorno in giornata.",
          rivedi: "IL BIGLIETTO DEL TRENO",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Da che binario parte?"',
          prima: "Which",
          dopo: "does it leave from?",
          risposte: ["platform"],
          spiegazione: "Il binario si chiama platform.",
          rivedi: "IN STAZIONE E SUL TRENO",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'L\'annuncio dice: "calling at Didcot and Reading". Che cosa significa?',
          opzioni: [
            "Che bisogna telefonare a Didcot e Reading",
            "Che il treno ferma a Didcot e a Reading",
            "Che il treno arriva da Didcot e Reading",
          ],
          giusta: 1,
          spiegazione: "Calling at negli annunci indica le fermate del treno.",
          rivedi: "IN STAZIONE E SUL TRENO",
        },
        {
          tipo: "sottotitolo",
          testo: "Mezzi e aeroporto",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Come dici "Devo scendere alla prossima fermata" sull\'autobus?',
          opzioni: [
            "I need to go down at the next stop.",
            "I need to get out at the next stop.",
            "I need to get off at the next stop.",
          ],
          giusta: 2,
          spiegazione:
            "Dai mezzi grandi (bus, treno) si scende con get off; get out of si usa con macchina e taxi.",
          rivedi: "AUTOBUS, METRO E TAXI",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola dell'aeroporto alla traduzione.",
          coppie: [
            ["boarding pass", "carta d'imbarco"],
            ["hand luggage", "bagaglio a mano"],
            ["aisle seat", "posto corridoio"],
            ["baggage reclaim", "ritiro bagagli"],
          ],
          rivedi: "IN AEROPORTO",
        },
        {
          tipo: "sottotitolo",
          testo: "In hotel",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Viaggi con un amico e volete due letti separati. Che camera chiedete?",
          opzioni: ["A twin room.", "A double room.", "Two single beds room."],
          giusta: 0,
          spiegazione:
            "Twin = due letti separati; double = un letto matrimoniale.",
          rivedi: "IN HOTEL O IN OSTELLO",
        },
        {
          tipo: "riordina",
          consegna: 'Al check-in: "Ho una prenotazione a nome Rossi".',
          parole: ["reservation", "Rossi", "a", "I've", "under", "got"],
          soluzione: ["I've", "got", "a", "reservation", "under", "Rossi"],
          spiegazione: "La prenotazione è under + nome.",
          rivedi: "IN HOTEL O IN OSTELLO",
        },
        {
          tipo: "sottotitolo",
          testo: "I problemi",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Sei arrivato in stazione due minuti tardi. Che cosa dici?",
          opzioni: [
            "I've lost my train.",
            "I've missed my train.",
            "My train has lost me.",
          ],
          giusta: 1,
          spiegazione:
            "Miss = perdere un mezzo o un evento arrivando tardi; lose = smarrire.",
          rivedi: "QUANDO QUALCOSA VA STORTO",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Ho perso il passaporto" (non lo trovi più).',
          prima: "I've",
          dopo: "my passport.",
          risposte: ["lost"],
          spiegazione:
            "Lost: hai smarrito qualcosa. Il present perfect annuncia il problema che c'è adesso.",
          rivedi: "QUANDO QUALCOSA VA STORTO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è giusta?",
          opzioni: [
            "The train is in delay.",
            "The train has delay.",
            "The train is delayed.",
          ],
          giusta: 2,
          spiegazione: "In ritardo = delayed (o late).",
          rivedi: "IN STAZIONE E SUL TRENO",
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
            "Arrivi in hotel a Edimburgo alle dieci di mattina, ma il check-in è alle due. Scrivi che cosa dici alla reception.",
          punti: [
            "la tua prenotazione",
            "che tipo di camera e per quante notti",
            "lasciare i bagagli",
            "una domanda sulla colazione o sul Wi-Fi",
          ],
          modello:
            "Good morning! I've got a reservation under the name Ferri. I booked a twin room for two nights. I know check-in is at two, but could I leave my luggage here until then? Also, is breakfast included? And what time is checkout on Sunday? Thank you!",
          spiegazione:
            "Controlla under + nome, luggage al singolare e le richieste con could I.",
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
