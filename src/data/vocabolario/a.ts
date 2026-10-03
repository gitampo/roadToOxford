import { Voce } from "@/types/vocabolario";

export const A: Voce[] = [
  {
    id: "actually",
    parola: "actually",
    fonetica: "/ˈæktʃuəli/",
    descrizione: "Falso amico: significa \"in realtà\", non \"attualmente\".",
    usi: [
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "per dire come stanno davvero le cose",
            traduzioni: ["in realtà", "in effetti", "veramente"],
            esempi: [
              {
                en: "He looks young, but he's actually forty.",
                it: "Sembra giovane, ma in realtà ha quarant'anni.",
              },
            ],
          },
          {
            indicazione: "per correggere o contraddire qualcuno con garbo",
            traduzioni: ["a dire il vero", "veramente"],
            etichette: ["parlato"],
            esempi: [
              {
                en: "Actually, I'd rather stay at home tonight.",
                it: "A dire il vero, stasera preferirei restare a casa.",
              },
              {
                en: "— You're Italian, aren't you? — Actually, I'm Spanish.",
                it: "— Sei italiano, vero? — Veramente sono spagnolo.",
              },
            ],
          },
          {
            indicazione: "per sottolineare la sorpresa",
            traduzioni: ["davvero", "addirittura"],
            esempi: [
              {
                en: "Did she actually say that to her boss?",
                it: "Ha detto davvero così al suo capo?",
              },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "attualmente",
      spiegazione:
        "Actually non ha niente a che fare con il tempo. \"Attualmente\" si dice currently o at the moment.",
    },
    attenzione: [
      "\"Attualmente vivo a Oxford\" è At the moment I live in Oxford (o I currently live in Oxford). Actually I live in Oxford vuol dire \"in realtà vivo a Oxford\", come se si correggesse qualcuno.",
      "Lo stesso vale per l'aggettivo actual: significa \"reale, vero\" (the actual cost, il costo reale), non \"attuale\", che è current.",
    ],
    lezioni: [
      { id: "54", riquadro: 7 },
      { id: "49", riquadro: 7 },
    ],
  },
  {
    id: "advice",
    parola: "advice",
    fonetica: "/ədˈvaɪs/",
    descrizione: "Un suggerimento su cosa fare: consiglio, consigli.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            traduzioni: ["consiglio", "consigli"],
            esempi: [
              { en: "Can I give you some advice?", it: "Posso darti un consiglio?" },
              { en: "My teacher gave me a useful piece of advice.", it: "Il mio insegnante mi ha dato un consiglio utile." },
              { en: "She asked me for advice about universities.", it: "Mi ha chiesto consiglio sulle università." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "take somebody's advice",
        significati: [
          {
            traduzioni: ["seguire il consiglio di qualcuno"],
            esempi: [{ en: "Take my advice and go to bed early.", it: "Segui il mio consiglio e vai a letto presto." }],
          },
        ],
      },
    ],
    attenzione: [
      "Advice è non numerabile: niente plurale e niente an. Un consiglio = a piece of advice o some advice. An advice e advices sono sbagliati.",
      "Il verbo è advise, con la s che suona z: /ədˈvaɪz/. I advise you to rest = ti consiglio di riposare.",
    ],
    lezioni: [{ id: "17", riquadro: 6 }],
  },
  {
    id: "argument",
    parola: "argument",
    fonetica: "/ˈɑːɡjumənt/",
    descrizione: "Falso amico: significa \"litigio\" o \"tesi\", non \"argomento\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "una discussione accesa",
            traduzioni: ["litigio", "discussione"],
            esempi: [
              { en: "My neighbours had a terrible argument last night.", it: "Ieri sera i miei vicini hanno litigato di brutto." },
            ],
          },
          {
            indicazione: "un ragionamento a favore o contro qualcosa",
            traduzioni: ["argomentazione", "tesi", "ragione"],
            esempi: [
              { en: "There are strong arguments against the plan.", it: "Ci sono forti argomentazioni contro il progetto." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "argomento",
      spiegazione:
        "Argument è un litigio, oppure una tesi a sostegno di qualcosa. L'argomento di cui si parla è topic o subject.",
    },
    attenzione: [
      "\"Cambiamo argomento\" è Let's change the subject, non Let's change the argument.",
      "Litigare si dice have an argument o argue: They argue all the time = litigano sempre.",
    ],
    lezioni: [{ id: "49", riquadro: 7 }],
  },
  {
    id: "ask",
    parola: "ask",
    fonetica: "/ɑːsk/",
    descrizione: "Chiedere qualcosa a qualcuno, per sapere o per avere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "asks · asked · asked · asking",
        significati: [
          {
            indicazione: "per avere una risposta",
            traduzioni: ["chiedere", "domandare"],
            esempi: [
              { en: "Can I ask you a question?", it: "Posso farti una domanda?" },
              { en: "Ask your teacher if you don't understand.", it: "Chiedi all'insegnante se non capisci." },
            ],
          },
          {
            indicazione: "+ for: per avere qualcosa",
            traduzioni: ["chiedere"],
            esempi: [
              { en: "She asked for the bill.", it: "Ha chiesto il conto." },
              { en: "Don't be afraid to ask for help.", it: "Non avere paura di chiedere aiuto." },
            ],
          },
          {
            indicazione: "+ to: chiedere di fare",
            traduzioni: ["chiedere di"],
            esempi: [
              { en: "He asked me to close the window.", it: "Mi ha chiesto di chiudere la finestra." },
            ],
          },
          {
            indicazione: "a una festa, a un evento",
            traduzioni: ["invitare"],
            esempi: [
              { en: "They asked us to dinner on Friday.", it: "Ci hanno invitati a cena venerdì." },
            ],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "ask out",
        significati: [
          {
            traduzioni: ["invitare a uscire", "chiedere di uscire"],
            esempi: [{ en: "He finally asked her out.", it: "Finalmente le ha chiesto di uscire." }],
          },
        ],
      },
      {
        testo: "ask around",
        significati: [
          {
            traduzioni: ["chiedere in giro"],
            esempi: [{ en: "I'll ask around and see if anyone has a spare room.", it: "Chiedo in giro se qualcuno ha una stanza libera." }],
          },
        ],
      },
    ],
    attenzione: [
      "Fare una domanda è ask a question, non make a question o do a question.",
      "Si chiede a qualcuno senza to: Ask your mother, non Ask to your mother.",
      "Per chiedere un oggetto serve for: ask for the menu. Senza for, ask the menu vorrebbe dire \"fare una domanda al menù\".",
    ],
    lezioni: [{ id: "45", riquadro: 6 }],
  },
  {
    id: "assist",
    parola: "assist",
    fonetica: "/əˈsɪst/",
    descrizione: "Falso amico: significa \"aiutare\", non \"assistere a\" un evento.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "assists · assisted · assisted · assisting",
        significati: [
          {
            traduzioni: ["aiutare", "assistere"],
            etichette: ["formale"],
            esempi: [
              { en: "Our staff will be happy to assist you.", it: "Il nostro personale sarà lieto di aiutarvi." },
              { en: "Two nurses assisted the surgeon.", it: "Due infermieri assistevano il chirurgo." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "nello sport",
            traduzioni: ["assist", "passaggio decisivo"],
            esempi: [{ en: "He scored one goal and made two assists.", it: "Ha segnato un gol e fatto due assist." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "assistere (a)",
      spiegazione:
        "Assist vuol dire aiutare. Assistere a uno spettacolo o a un evento si dice attend, watch o be present at.",
    },
    attenzione: [
      "\"Ho assistito alla partita\" è I watched the match o I was at the match, non I assisted the match.",
      "Nel parlato di tutti i giorni si usa help: assist è formale, da negozi, uffici e annunci.",
    ],
  },
  {
    id: "attend",
    parola: "attend",
    fonetica: "/əˈtend/",
    descrizione: "Falso amico: significa \"partecipare, frequentare\", non \"attendere\".",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "attends · attended · attended · attending",
        significati: [
          {
            indicazione: "essere presenti a un evento",
            traduzioni: ["partecipare a", "assistere a", "essere presente a"],
            etichette: ["formale"],
            esempi: [
              { en: "Over 300 people attended the conference.", it: "Più di 300 persone hanno partecipato al convegno." },
            ],
          },
          {
            indicazione: "una scuola, un corso",
            traduzioni: ["frequentare"],
            esempi: [{ en: "She attends a school in Oxford.", it: "Frequenta una scuola a Oxford." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "attend to",
        significati: [
          {
            traduzioni: ["occuparsi di", "servire (un cliente)"],
            esempi: [{ en: "I have some business to attend to.", it: "Ho delle faccende di cui occuparmi." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "attendere",
      spiegazione:
        "Attend vuol dire essere presenti a qualcosa. Attendere si dice wait (for): I'm waiting for the bus.",
    },
    attenzione: [
      "Attend non vuole preposizioni: attend a meeting, non attend to a meeting (attend to vuol dire \"occuparsi di\").",
      "Anche attention è diverso da \"attesa\": pay attention = fare attenzione.",
    ],
  },
  {
    id: "able",
    parola: "able",
    fonetica: "/ˈeɪbl/",
    descrizione: "Che riesce a fare qualcosa: capace, in grado.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "be able to + verbo",
            traduzioni: ["in grado di", "capace di", "riuscire a"],
            esempi: [
              { en: "Will you be able to come tomorrow?", it: "Riuscirai a venire domani?" },
              { en: "I wasn't able to finish the exam.", it: "Non sono riuscito a finire l'esame." },
            ],
          },
          {
            indicazione: "bravo, competente",
            traduzioni: ["capace", "abile"],
            esempi: [{ en: "She's a very able student.", it: "È una studentessa molto capace." }],
          },
        ],
      },
    ],
    attenzione: [
      "Can non ha futuro né participio: per questi tempi si usa be able to. I'll be able to help you, non I'll can help you; I've never been able to swim.",
      "Per un'impresa riuscita una volta nel passato si usa was able to (o managed to), non could: After hours, we were able to open the door.",
    ],
  },
  {
    id: "actual",
    parola: "actual",
    fonetica: "/ˈæktʃuəl/",
    descrizione: "Falso amico: significa \"reale, vero\", non \"attuale\".",
    usi: [
      {
        categoria: "aggettivo",
        dettaglio: "prima del nome",
        significati: [
          {
            traduzioni: ["reale", "vero", "effettivo"],
            esempi: [
              { en: "The actual cost was much higher.", it: "Il costo reale è stato molto più alto." },
              { en: "What were his actual words?", it: "Quali sono state le sue parole esatte?" },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "in actual fact",
        significati: [
          {
            traduzioni: ["in realtà", "di fatto"],
            esempi: [{ en: "In actual fact, she's older than me.", it: "In realtà è più grande di me." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "attuale",
      spiegazione:
        "Attuale si dice current o present: the current situation = la situazione attuale.",
    },
    attenzione: ["L'avverbio actually segue la stessa regola: significa \"in realtà\", non \"attualmente\"."],
  },
  {
    id: "afford",
    parola: "afford",
    fonetica: "/əˈfɔːd/",
    descrizione: "Avere abbastanza soldi (o tempo) per qualcosa: potersi permettere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo, con can",
        forme: "affords · afforded · afforded · affording",
        significati: [
          {
            indicazione: "soldi",
            traduzioni: ["potersi permettere"],
            esempi: [
              { en: "We can't afford a new car.", it: "Non possiamo permetterci una macchina nuova." },
              { en: "Can you afford to live in London?", it: "Puoi permetterti di vivere a Londra?" },
            ],
          },
          {
            indicazione: "tempo, rischi",
            traduzioni: ["potersi permettere"],
            esempi: [{ en: "I can't afford to waste any more time.", it: "Non posso permettermi di perdere altro tempo." }],
          },
        ],
      },
    ],
    attenzione: [
      "Afford si usa quasi sempre con can, could o be able to, e spesso al negativo: I can't afford it.",
      "Non è riflessivo: I can't afford it, non I can't afford myself it.",
      "L'aggettivo affordable vuol dire \"a un prezzo accessibile\": affordable housing, case a prezzi accessibili.",
    ],
  },
  {
    id: "agree",
    parola: "agree",
    fonetica: "/əˈɡriː/",
    descrizione: "Avere la stessa opinione di qualcuno: essere d'accordo.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "agrees · agreed · agreed · agreeing",
        significati: [
          {
            indicazione: "+ with: un'opinione",
            traduzioni: ["essere d'accordo"],
            esempi: [
              { en: "I agree with you.", it: "Sono d'accordo con te." },
              { en: "I don't agree with what he said.", it: "Non sono d'accordo con quello che ha detto." },
            ],
          },
          {
            indicazione: "+ to: accettare di fare",
            traduzioni: ["accettare di", "acconsentire a"],
            esempi: [{ en: "She agreed to help us.", it: "Ha accettato di aiutarci." }],
          },
          {
            indicazione: "+ on: decidere insieme",
            traduzioni: ["mettersi d'accordo su"],
            esempi: [{ en: "We agreed on a price.", it: "Ci siamo messi d'accordo sul prezzo." }],
          },
        ],
      },
    ],
    attenzione: [
      "Agree è un verbo, non un aggettivo: I agree, non I am agree. Il negativo è I don't agree o I disagree.",
      "Con le persone e le opinioni si usa with (agree with you), con le proposte to (agree to the plan), con le decisioni comuni on (agree on a date).",
    ],
    lezioni: [
      { id: "2", riquadro: 9 },
      { id: "48", riquadro: 2 },
    ],
  },
  {
    id: "allow",
    parola: "allow",
    fonetica: "/əˈlaʊ/",
    descrizione: "Dare il permesso: permettere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "allows · allowed · allowed · allowing",
        significati: [
          {
            indicazione: "dare il permesso",
            traduzioni: ["permettere", "lasciare", "consentire"],
            esempi: [
              { en: "My parents don't allow me to go out on weeknights.", it: "I miei non mi permettono di uscire durante la settimana." },
              { en: "Smoking is not allowed here.", it: "Qui è vietato fumare." },
            ],
          },
          {
            indicazione: "rendere possibile",
            traduzioni: ["permettere", "consentire"],
            esempi: [{ en: "The new app allows you to study offline.", it: "La nuova app ti permette di studiare offline." }],
          },
          {
            indicazione: "tempo, denaro",
            traduzioni: ["calcolare", "prevedere"],
            esempi: [{ en: "Allow two hours for the journey.", it: "Calcola due ore per il viaggio." }],
          },
        ],
      },
    ],
    attenzione: [
      "Allow vuole la persona e poi to: allow me to go. Let invece vuole il verbo senza to: let me go.",
      "Al passivo \"è permesso\" e \"non è permesso\" si dicono is allowed e is not allowed: You're not allowed to park here.",
      "Si pronuncia /əˈlaʊ/, come how, non come low.",
    ],
  },
  {
    id: "already",
    parola: "already",
    fonetica: "/ɔːlˈredi/",
    descrizione: "Prima di adesso, o prima del previsto: già.",
    usi: [
      {
        categoria: "avverbio",
        significati: [
          {
            traduzioni: ["già"],
            esempi: [
              { en: "I've already seen this film.", it: "Ho già visto questo film." },
              { en: "Are you leaving already?", it: "Te ne vai già?" },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Already va di solito tra l'ausiliare e il verbo (I've already eaten) e si usa nelle frasi affermative. Nelle domande e nelle negative si usa yet: Have you eaten yet? I haven't eaten yet.",
      "Nell'inglese britannico già si usa con il present perfect: I've already done it, non I already did it.",
      "Non confondere already con all ready (tutti pronti): We're all ready to go.",
    ],
    lezioni: [{ id: "30", riquadro: 4 }],
  },
  {
    id: "apply",
    parola: "apply",
    fonetica: "/əˈplaɪ/",
    descrizione: "Fare domanda per un lavoro o un corso; anche applicare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "applies · applied · applied · applying",
        significati: [
          {
            indicazione: "+ for / to: un lavoro, un'università",
            traduzioni: ["fare domanda", "candidarsi"],
            esempi: [
              { en: "I've applied for a job in a bank.", it: "Ho fatto domanda per un lavoro in banca." },
              { en: "She applied to Oxford.", it: "Ha fatto domanda a Oxford." },
            ],
          },
          {
            indicazione: "+ to: valere per",
            traduzioni: ["valere (per)", "riguardare"],
            esempi: [{ en: "These rules apply to everyone.", it: "Queste regole valgono per tutti." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        significati: [
          {
            indicazione: "una regola, una crema",
            traduzioni: ["applicare", "mettere"],
            esempi: [{ en: "Apply the cream twice a day.", it: "Applicare la crema due volte al giorno." }],
          },
        ],
      },
    ],
    attenzione: [
      "Si fa domanda per il posto con for (apply for a job, apply for a visa) e all'ente con to (apply to a university).",
      "La domanda scritta è an application; chi la fa è an applicant.",
    ],
    lezioni: [{ id: "48", riquadro: 2 }],
  },
  {
    id: "approach",
    parola: "approach",
    fonetica: "/əˈprəʊtʃ/",
    descrizione: "Un modo di affrontare un problema; come verbo, avvicinarsi.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un metodo",
            traduzioni: ["approccio", "metodo", "impostazione"],
            esempi: [{ en: "We need a new approach to the problem.", it: "Ci serve un nuovo approccio al problema." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "approaches · approached · approached · approaching",
        significati: [
          {
            indicazione: "nello spazio o nel tempo",
            traduzioni: ["avvicinarsi (a)"],
            esempi: [
              { en: "A man approached me in the street.", it: "Un uomo mi si è avvicinato per strada." },
              { en: "Winter is approaching.", it: "L'inverno si avvicina." },
            ],
          },
          {
            indicazione: "un problema",
            traduzioni: ["affrontare"],
            esempi: [{ en: "How should we approach this question?", it: "Come dovremmo affrontare questa domanda?" }],
          },
        ],
      },
    ],
    attenzione: [
      "Il verbo non vuole preposizioni: approach the door, non approach to the door. Il nome invece vuole to: an approach to learning.",
      "È una parola chiave dei saggi accademici: this approach, a different approach, a critical approach.",
    ],
  },
  {
    id: "argue",
    parola: "argue",
    fonetica: "/ˈɑːɡjuː/",
    descrizione: "Litigare a parole, oppure sostenere una tesi.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "argues · argued · argued · arguing",
        significati: [
          {
            indicazione: "+ with / about: discutere animatamente",
            traduzioni: ["litigare", "discutere"],
            esempi: [
              { en: "They argue about money all the time.", it: "Litigano sempre per i soldi." },
              { en: "Don't argue with me!", it: "Non discutere con me!" },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        significati: [
          {
            indicazione: "+ that: in un saggio, un dibattito",
            traduzioni: ["sostenere", "affermare"],
            esempi: [
              { en: "The author argues that the poem is about death.", it: "L'autore sostiene che la poesia parli della morte." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Nei saggi argue è il verbo giusto per presentare una tesi: Some critics argue that... (Alcuni critici sostengono che...).",
      "Il nome è argument: litigio oppure argomentazione, mai \"argomento\".",
    ],
    lezioni: [{ id: "19", riquadro: 3 }],
  },
  {
    id: "arrive",
    parola: "arrive",
    fonetica: "/əˈraɪv/",
    descrizione: "Raggiungere un posto: arrivare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "arrives · arrived · arrived · arriving",
        significati: [
          {
            traduzioni: ["arrivare", "giungere"],
            esempi: [
              { en: "What time does the train arrive?", it: "A che ora arriva il treno?" },
              { en: "We arrived in London at midnight.", it: "Siamo arrivati a Londra a mezzanotte." },
              { en: "The parcel arrived this morning.", it: "Il pacco è arrivato stamattina." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Arrive vuole in per città e paesi (arrive in Rome) e at per luoghi più piccoli (arrive at the station, at school). Mai arrive to.",
      "Con home niente preposizione: arrive home.",
      "Nel parlato si usa spesso get: What time did you get here?",
    ],
    lezioni: [{ id: "30", riquadro: 6 }],
  },
  {
    id: "assume",
    parola: "assume",
    fonetica: "/əˈsjuːm/",
    descrizione: "Dare per scontato qualcosa senza averne la prova: supporre.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "assumes · assumed · assumed · assuming",
        significati: [
          {
            indicazione: "credere senza prove",
            traduzioni: ["supporre", "presumere", "dare per scontato"],
            esempi: [
              { en: "I assumed you knew.", it: "Davo per scontato che lo sapessi." },
              { en: "Let's assume that the data are correct.", it: "Supponiamo che i dati siano corretti." },
            ],
          },
          {
            indicazione: "un ruolo, un controllo",
            traduzioni: ["assumere", "prendere"],
            etichette: ["formale"],
            esempi: [{ en: "She assumed control of the company.", it: "Ha assunto il controllo dell'azienda." }],
          },
        ],
      },
    ],
    attenzione: [
      "Assumere un lavoratore non è assume ma hire o employ: The company hired ten new people.",
      "Il nome è assumption: un'ipotesi data per vera. È una parola molto usata nei testi accademici.",
    ],
  },
  {
    id: "avoid",
    parola: "avoid",
    fonetica: "/əˈvɔɪd/",
    descrizione: "Fare in modo che qualcosa non succeda: evitare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "avoids · avoided · avoided · avoiding",
        significati: [
          {
            traduzioni: ["evitare"],
            esempi: [
              { en: "Try to avoid the city centre at rush hour.", it: "Cerca di evitare il centro nell'ora di punta." },
              { en: "He avoided answering the question.", it: "Ha evitato di rispondere alla domanda." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Dopo avoid si usa -ing: avoid making mistakes, non avoid to make mistakes.",
    ],
    lezioni: [{ id: "47", riquadro: 2 }],
  },
  {
    id: "aware",
    parola: "aware",
    fonetica: "/əˈweə(r)/",
    descrizione: "Che sa o si accorge di qualcosa: consapevole.",
    usi: [
      {
        categoria: "aggettivo",
        dettaglio: "dopo il verbo",
        significati: [
          {
            indicazione: "+ of / that",
            traduzioni: ["consapevole", "al corrente"],
            esempi: [
              { en: "Are you aware of the risks?", it: "Sei consapevole dei rischi?" },
              { en: "I wasn't aware that the shop was closed.", it: "Non sapevo che il negozio fosse chiuso." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Aware sta dopo il verbo (I'm aware of it) e vuole of: aware of the problem, non aware about.",
      "Il nome è awareness, consapevolezza: raise awareness = sensibilizzare.",
    ],
  },
];
