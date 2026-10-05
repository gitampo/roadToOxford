import { Lezione } from "@/types/lezione";

export const ristorante: Lezione = {
  id: "S6",
  titolo: "Al ristorante",
  descrizione: "Prenotare, ordinare, parlare di allergie, chiedere il conto",
  chiavi: "prenotare, menù, ordinare, allergie, conto, bill, mancia",
  livello: "Situazioni",
  sottotitolo: "Situazioni · Lezione S6 · A2",
  citazione: {
    testo: "Please, sir, I want some more.",
    fonte: "Charles Dickens, Oliver Twist (1838)",
    traduzione: "Per favore, signore, ne voglio ancora.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "PRENOTARE E ARRIVARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La citazione in alto è la richiesta più famosa della letteratura inglese: Oliver Twist, orfano affamato, chiede un'altra porzione di zuppa. Dice I want, e per questo la frase suona così sfacciata. Al ristorante useremo formule più gentili: Could I have some more?.",
        },
        {
          tipo: "testo",
          testo:
            "Per prenotare (book, nel Regno Unito più comune di reserve) si dice quante persone, che giorno e a che ora. L'ora vuole at, il giorno on (lezione 9{1}).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I'd like to book a table for four on Saturday at eight.",
              it: "Vorrei prenotare un tavolo per quattro sabato alle otto.",
            },
            {
              en: "Have you got a table for two at half past seven?",
              it: "Avete un tavolo per due alle sette e mezza?",
            },
            {
              en: "Under what name? — It's under Rossi.",
              it: "A che nome? — A nome Rossi.",
            },
            {
              en: "I'm sorry, we're fully booked.",
              it: "Mi dispiace, siamo al completo.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Quando arrivi, aspetta all'ingresso: in molti ristoranti c'è il cartello Please wait to be seated, \"attendere di essere accompagnati al tavolo\".",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Hi, we've got a booking for two, under Rossi.",
              it: "Salve, abbiamo una prenotazione per due, a nome Rossi.",
            },
            {
              en: "A table for three, please.",
              it: "Un tavolo per tre, per favore.",
            },
            {
              en: "Could we sit by the window?",
              it: "Potremmo sederci vicino alla finestra?",
            },
            {
              en: "There's about a twenty-minute wait.",
              it: "C'è da aspettare una ventina di minuti.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            '"Siamo in quattro" non si traduce We are four: si dice There are four of us, oppure semplicemente A table for four.',
        },
      ],
    },
    {
      titolo: "IL MENÙ",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Un menù britannico è diviso in portate. Non c'è la divisione italiana tra primo e secondo: il piatto principale è uno solo, il main course, spesso con i contorni già inclusi.",
        },
        {
          tipo: "tabella",
          righe: [
            ["starters", "antipasti"],
            ["mains / main courses", "piatti principali"],
            ["sides", "contorni (da ordinare a parte)"],
            ["desserts / pudding", "dolci"],
            ["today's specials", "i piatti del giorno"],
            ["the set menu", "il menù fisso (a prezzo fisso)"],
            ["the wine list", "la carta dei vini"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Menu in inglese è la lista dei piatti, non il menù fisso, che si chiama set menu. Attenzione anche a entrée: in un ristorante americano è il piatto principale, non l'antipasto. Nel Regno Unito pudding indica spesso il dolce in generale: What's for pudding? vuol dire \"che c'è per dolce?\".",
        },
        {
          tipo: "testo",
          testo: "Per capire che cosa ordini servono i modi di cottura:",
        },
        {
          tipo: "tabella",
          righe: [
            ["grilled / roast", "alla griglia / arrosto"],
            [
              "fried / deep-fried",
              "fritto in padella / fritto in olio abbondante",
            ],
            ["baked / steamed", "al forno / al vapore"],
            ["stuffed", "ripieno"],
            [
              "rare / medium / well done",
              "al sangue / cottura media / ben cotto (la bistecca)",
            ],
            ["spicy / mild", "piccante / delicato"],
          ],
        },
      ],
    },
    {
      titolo: "ORDINARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il cameriere (waiter o waitress; oggi spesso server) ti farà domande precise. Ecco quelle da riconoscere subito.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Are you ready to order?", "Siete pronti per ordinare?"],
            ["Can I get you any drinks?", "Vi porto qualcosa da bere?"],
            ["Would you like a starter?", "Gradite un antipasto?"],
            ["How would you like your steak?", "Come vuole la bistecca?"],
            ["Would you like any sides with that?", "Desidera dei contorni?"],
            ["Still or sparkling?", "Naturale o frizzante?"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Per ordinare la formula più naturale è I'll have..., perché decidi in quel momento (lezione 28{2}). Vanno bene anche I'd like... e Could I have...? (lezione 20{5}).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Could we have a few more minutes?",
              it: "Potremmo avere ancora qualche minuto?",
            },
            { en: "What do you recommend?", it: "Che cosa ci consiglia?" },
            {
              en: "What's in the shepherd's pie?",
              it: "Che cosa c'è nello shepherd's pie?",
            },
            {
              en: "I'll have the salmon, please.",
              it: "Per me il salmone, grazie.",
            },
            {
              en: "For me, the mushroom risotto.",
              it: "Per me il risotto ai funghi.",
            },
            {
              en: "Could I have it without onions?",
              it: "Potrei averlo senza cipolla?",
            },
            {
              en: "Can I have the sauce on the side?",
              it: "Posso avere la salsa a parte?",
            },
            { en: "The same for me, please.", it: "Lo stesso per me, grazie." },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Is it possible to have...? è un calco dall\'italiano ("è possibile avere...?"): non è sbagliato, ma un madrelingua direbbe Could I have...? o Can I get...?.',
        },
      ],
    },
    {
      titolo: "ALLERGIE E DIETE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel Regno Unito i ristoranti devono saperti dire se un piatto contiene uno dei 14 allergeni principali (glutine, frutta a guscio, latticini, uova e altri). Il cameriere spesso chiede lui stesso: Do you have any allergies?. Rispondi in modo chiaro: è una questione di salute, non di gusti.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I'm allergic to nuts.",
              it: "Sono allergico alla frutta a guscio.",
            },
            { en: "Does this contain gluten?", it: "Contiene glutine?" },
            { en: "Is there any dairy in it?", it: "Ci sono latticini?" },
            {
              en: "I'm vegetarian. / I'm vegan.",
              it: "Sono vegetariano. / Sono vegano.",
            },
            { en: "I don't eat pork.", it: "Non mangio carne di maiale." },
            { en: "I'm coeliac.", it: "Sono celiaco." },
            {
              en: "Have you got anything gluten-free?",
              it: "Avete qualcosa senza glutine?",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Allergic vuole to: allergic to nuts, non allergic at o allergic of (lezione 49{4}). Nuts in inglese comprende noci, nocciole, mandorle e simili; le arachidi sono peanuts, e si nominano a parte.",
        },
      ],
    },
    {
      titolo: "DURANTE IL PASTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Pochi minuti dopo averti servito, il cameriere passa a chiedere se va tutto bene. La risposta abituale è positiva e breve.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Is everything OK with your meal?", it: "Va tutto bene?" },
            { en: "Lovely, thank you.", it: "Ottimo, grazie." },
            {
              en: "Could we have some more bread, please?",
              it: "Potremmo avere ancora un po' di pane?",
            },
            {
              en: "Could I have another fork, please?",
              it: "Potrei avere un'altra forchetta?",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Se c'è un problema, i britannici tendono a non lamentarsi; ma si può (e si deve) fare con gentilezza. Actually all'inizio della frase ammorbidisce la correzione.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Actually, my pasta's a bit cold. Could you warm it up?",
              it: "A dire il vero, la mia pasta è un po' fredda. Potrebbe scaldarla?",
            },
            {
              en: "Excuse me, I think there's been a mistake. I ordered the chicken.",
              it: "Mi scusi, credo ci sia un errore. Avevo ordinato il pollo.",
            },
            {
              en: "Sorry, we've been waiting quite a long time.",
              it: "Scusi, è da un po' che aspettiamo.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Per chiamare il cameriere si cerca il suo sguardo e si alza appena la mano, oppure si dice Excuse me! quando passa. Schioccare le dita, fischiare o chiamare Waiter! a voce alta è considerato molto maleducato.",
        },
      ],
    },
    {
      titolo: "IL CONTO E LA MANCIA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il conto nel Regno Unito è the bill; negli Stati Uniti the check. Puoi chiederlo a voce o, da lontano, mimando una firma nell'aria: il gesto è capito ovunque.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Could we have the bill, please?",
              it: "Potremmo avere il conto, per favore?",
            },
            {
              en: "Can we pay separately?",
              it: "Possiamo pagare separatamente?",
            },
            { en: "Shall we split the bill?", it: "Facciamo alla romana?" },
            { en: "Is service included?", it: "Il servizio è incluso?" },
            { en: "This one's on me.", it: "Questa la offro io." },
            {
              en: "Could I take the rest home?",
              it: "Potrei portare a casa quello che è avanzato?",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Nel Regno Unito di solito non c'è il coperto. Spesso però il conto include un service charge, una percentuale per il servizio (di solito il 12,5%). È facoltativo: se il servizio è stato pessimo puoi chiedere di toglierlo. Se non è incluso, si lascia di solito una mancia del 10–15%.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "service charge (12.5%)",
              "percentuale per il servizio, già nel conto",
            ],
            ["tip", "la mancia"],
            ["Keep the change.", "Tenga il resto."],
            ["Could I have a receipt?", "Potrei avere la ricevuta?"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Prima di lasciare la mancia, controlla sempre il conto: se c'è già il service charge, lasciarne un'altra significa pagare il servizio due volte.",
        },
      ],
    },
    {
      titolo: "A TAVOLA: LE BUONE MANIERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'L\'inglese non ha un vero equivalente di "buon appetito". Il cameriere, servendo, dice Enjoy! o Enjoy your meal!; tra amici si dice Tuck in! (informale, "forza, mangiamo!") oppure niente. Alcuni usano il francese Bon appétit. Good appetite è un errore.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Enjoy your meal!",
              it: "Buon appetito! (detto da chi serve)",
            },
            { en: "This is delicious!", it: "È buonissimo!" },
            {
              en: "Could you pass the salt, please?",
              it: "Mi passi il sale, per favore?",
            },
            { en: "Help yourself!", it: "Serviti pure!" },
            {
              en: "I'm full. / I couldn't eat another thing.",
              it: "Sono pieno. / Non riesco a mangiare più niente.",
            },
            { en: "Good appetite!", sbagliato: true },
          ],
        },
        {
          tipo: "testo",
          testo:
            'E il nostro "prego", che in italiano usiamo per tutto? In inglese cambia a seconda di che cosa stai facendo.',
        },
        {
          tipo: "tabella",
          righe: [
            ["dopo un grazie", "You're welcome. / No problem. / Not at all."],
            ["porgendo qualcosa", "Here you are."],
            ["facendo passare qualcuno", "After you."],
            ["invitando a fare qualcosa", "Go ahead. / Please, sit down."],
            ['per dire "come, scusa?"', "Sorry? / Pardon?"],
          ],
        },
      ],
    },
    {
      titolo: "UN DIALOGO: CENA A JERICHO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Jericho è un quartiere di Oxford pieno di ristoranti. Anna e Luca hanno prenotato un tavolo per festeggiare la fine degli esami.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Waiter: Good evening! Have you got a booking?",
              it: "Buonasera! Avete prenotato?",
            },
            {
              en: "Anna: Yes, a table for two, under Bianchi.",
              it: "Sì, un tavolo per due, a nome Bianchi.",
            },
            {
              en: "Waiter: Lovely, follow me. ... Here's the menu. Can I get you any drinks?",
              it: "Perfetto, seguitemi. ... Ecco il menù. Vi porto qualcosa da bere?",
            },
            {
              en: "Luca: Could we have a bottle of sparkling water, please?",
              it: "Potremmo avere una bottiglia d'acqua frizzante, per favore?",
            },
            {
              en: "Waiter: Of course. ... Are you ready to order?",
              it: "Certo. ... Siete pronti per ordinare?",
            },
            {
              en: "Anna: Almost. What do you recommend?",
              it: "Quasi. Che cosa ci consiglia?",
            },
            {
              en: "Waiter: The lamb is very popular tonight.",
              it: "L'agnello stasera va molto.",
            },
            {
              en: "Anna: I'll have the lamb, then. Does it come with vegetables?",
              it: "Allora prendo l'agnello. È servito con le verdure?",
            },
            {
              en: "Waiter: Yes, with roast potatoes and seasonal vegetables.",
              it: "Sì, con patate arrosto e verdure di stagione.",
            },
            {
              en: "Luca: And I'd like the steak, please.",
              it: "E io vorrei la bistecca, per favore.",
            },
            { en: "Waiter: How would you like it?", it: "Come la preferisce?" },
            {
              en: "Luca: Medium, please. Oh, and I'm allergic to nuts. Is there anything in the sauce?",
              it: "Cottura media, grazie. Ah, e sono allergico alla frutta a guscio. C'è qualcosa nella salsa?",
            },
            {
              en: "Waiter: Let me check with the chef. ... No, it's completely nut-free.",
              it: "Controllo con lo chef. ... No, non ce n'è proprio.",
            },
            { en: "Luca: Great, thank you.", it: "Perfetto, grazie." },
            { en: "Waiter: Enjoy your meal!", it: "Buon appetito!" },
            {
              en: "Anna: Could we have the bill, please?",
              it: "Potremmo avere il conto, per favore?",
            },
            { en: "Luca: Is service included?", it: "Il servizio è incluso?" },
            {
              en: "Waiter: Yes, there's a 12.5% service charge.",
              it: "Sì, c'è un 12,5% per il servizio.",
            },
            {
              en: "Anna: This one's on me, Luca. You paid last time.",
              it: "Questa la offro io, Luca. L'altra volta hai pagato tu.",
            },
          ],
        },
      ],
    },
    {
      titolo: "GLI ERRORI TIPICI",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "I want the fish.", sbagliato: true },
            {
              en: "I'll have the fish, please.",
              it: "Per me il pesce, grazie.",
            },
            { en: "We are four.", sbagliato: true },
            { en: "There are four of us.", it: "Siamo in quattro." },
            { en: "Can I have the account?", sbagliato: true },
            { en: "Can I have the bill?", it: "Posso avere il conto?" },
            { en: "A steak well cooked.", sbagliato: true },
            {
              en: "A steak, well done, please.",
              it: "Una bistecca ben cotta, per favore.",
            },
            { en: "Waiter! Come here!", sbagliato: true },
            { en: "Excuse me!", it: "Mi scusi! (per chiamare il cameriere)" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Account è il conto in banca, non il conto del ristorante. E se al bar, al pub o in una caffetteria paghi subito, al ristorante si paga alla fine, al tavolo: per le differenze rivedi la lezione S3{1}.",
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
          testo: "Prenotare e ordinare",
        },
        {
          tipo: "riordina",
          consegna: 'Prenota: "Vorrei prenotare un tavolo per due".',
          parole: ["table", "to", "I'd", "two", "a", "book", "like", "for"],
          soluzione: ["I'd", "like", "to", "book", "a", "table", "for", "two"],
          spiegazione:
            "I'd like to book a table for + numero di persone. Nel Regno Unito book è più comune di reserve.",
          rivedi: "PRENOTARE E ARRIVARE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come dici "Siamo in cinque"?',
          opzioni: ["We are five.", "We are in five.", "There are five of us."],
          giusta: 2,
          spiegazione: "Si dice There are five of us, oppure A table for five.",
          rivedi: "PRENOTARE E ARRIVARE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola del menù alla traduzione.",
          coppie: [
            ["starters", "antipasti"],
            ["mains", "piatti principali"],
            ["sides", "contorni"],
            ["set menu", "menù fisso"],
            ["today's specials", "piatti del giorno"],
          ],
          rivedi: "IL MENÙ",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Vuoi la bistecca al sangue. Come rispondi a "How would you like your steak?"',
          opzioni: ["Rare, please.", "Bloody, please.", "Red, please."],
          giusta: 0,
          spiegazione:
            "Al sangue = rare; cottura media = medium; ben cotta = well done.",
          rivedi: "IL MENÙ",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è il modo più naturale di ordinare?",
          opzioni: [
            "I want the chicken.",
            "I'll have the chicken, please.",
            "Is it possible to have the chicken?",
          ],
          giusta: 1,
          spiegazione:
            "I'll have... (o I'd like... / Could I have...?) è il modo naturale; I want suona brusco, Is it possible to have è un calco dall'italiano.",
          rivedi: "ORDINARE",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Sono allergico alle arachidi".',
          prima: "I'm allergic",
          dopo: "peanuts.",
          risposte: ["to"],
          spiegazione: "Allergic vuole sempre to.",
          rivedi: "ALLERGIE E DIETE",
        },
        {
          tipo: "sottotitolo",
          testo: "Durante e dopo",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "La tua zuppa è fredda. Che cosa dici al cameriere, alla britannica?",
          opzioni: [
            "This soup is cold. Bring me another.",
            "Cold soup! Unbelievable!",
            "Actually, my soup's a bit cold. Could you warm it up?",
          ],
          giusta: 2,
          spiegazione:
            "Actually e a bit ammorbidiscono la lamentela; could you trasforma l'ordine in richiesta.",
          rivedi: "DURANTE IL PASTO",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Sul conto c\'è scritto "12.5% service charge". Che cosa significa?',
          opzioni: [
            "Che il servizio è già incluso nel conto",
            "Che devi aggiungere il 12,5% di mancia",
            "Che c'è il coperto",
          ],
          giusta: 0,
          spiegazione:
            "Il service charge è già nel totale: non serve lasciare un'altra mancia.",
          rivedi: "IL CONTO E LA MANCIA",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Potremmo avere il conto, per favore?"',
          prima: "Could we have the",
          dopo: ", please?",
          risposte: ["bill"],
          spiegazione:
            "Nel Regno Unito il conto è the bill (negli Stati Uniti the check). Account è il conto in banca.",
          rivedi: "IL CONTO E LA MANCIA",
        },
        {
          tipo: "abbina",
          consegna: 'Abbina ogni situazione al "prego" giusto.',
          coppie: [
            ["dopo un grazie", "You're welcome."],
            ["porgendo qualcosa", "Here you are."],
            ["facendo passare qualcuno", "After you."],
            ['per dire "come, scusa?"', "Sorry?"],
          ],
          rivedi: "A TAVOLA: LE BUONE MANIERE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Il cameriere ti porta il piatto. Che cosa ti dirà?",
          opzioni: ["Good appetite!", "Enjoy your meal!", "Eat well!"],
          giusta: 1,
          spiegazione:
            'L\'inglese non ha un vero "buon appetito": chi serve dice Enjoy! o Enjoy your meal!.',
          rivedi: "A TAVOLA: LE BUONE MANIERE",
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
            "Telefoni a un ristorante per prenotare la cena di compleanno di un'amica. Scrivi le tue battute.",
          punti: [
            "per quante persone, che giorno e a che ora",
            "il nome della prenotazione",
            "una richiesta (tavolo, torta, allergia)",
            "un ringraziamento",
          ],
          modello:
            "Hi, I'd like to book a table for six on Friday at half past seven, please. It's under Rossi. It's my friend's birthday: could we have a table by the window? Also, one of us is vegetarian and another is allergic to nuts, so could you let the chef know? Great, thank you very much!",
          spiegazione:
            "Controlla on per il giorno e at per l'ora, could per le richieste e allergic to.",
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
