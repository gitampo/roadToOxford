import { Voce } from "@/types/vocabolario";

export const C: Voce[] = [
  {
    id: "call",
    parola: "call",
    fonetica: "/kɔːl/",
    descrizione: "Telefonare a qualcuno, o dare un nome a qualcosa.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "calls · called · called · calling",
        significati: [
          {
            indicazione: "al telefono",
            traduzioni: ["chiamare", "telefonare a"],
            esempi: [{ en: "I'll call you tonight.", it: "Ti chiamo stasera." }],
          },
          {
            indicazione: "dare un nome",
            traduzioni: ["chiamare"],
            esempi: [
              { en: "They called their son Oliver.", it: "Hanno chiamato il figlio Oliver." },
              { en: "What do you call this in English?", it: "Come si dice questo in inglese?" },
            ],
          },
          {
            indicazione: "ad alta voce, per far venire",
            traduzioni: ["chiamare"],
            esempi: [{ en: "Call a doctor!", it: "Chiamate un medico!" }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "al telefono",
            traduzioni: ["telefonata", "chiamata"],
            esempi: [{ en: "Give me a call when you arrive.", it: "Fammi una telefonata quando arrivi." }],
          },
          {
            indicazione: "una decisione",
            traduzioni: ["decisione"],
            etichette: ["informale"],
            esempi: [{ en: "It's your call.", it: "Decidi tu." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "call back",
        significati: [
          {
            traduzioni: ["richiamare"],
            esempi: [{ en: "I'm busy now, can I call you back?", it: "Adesso sono impegnato, ti posso richiamare?" }],
          },
        ],
      },
      {
        testo: "call off",
        significati: [
          {
            traduzioni: ["annullare", "disdire"],
            esempi: [{ en: "The match was called off because of the rain.", it: "La partita è stata annullata per la pioggia." }],
          },
        ],
      },
    ],
    attenzione: [
      "\"Mi chiamo Luca\" è My name is Luca o I'm Luca. I call myself Luca suona strano, come \"mi faccio chiamare Luca\".",
      "Si telefona a qualcuno senza to: call your mother, non call to your mother.",
    ],
  },
  {
    id: "camera",
    parola: "camera",
    fonetica: "/ˈkæmərə/",
    descrizione: "Falso amico: è la macchina fotografica, non la camera da letto.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "per le foto",
            traduzioni: ["macchina fotografica", "fotocamera"],
            esempi: [{ en: "The camera on my phone is excellent.", it: "La fotocamera del mio telefono è ottima." }],
          },
          {
            indicazione: "per i video",
            traduzioni: ["telecamera", "videocamera"],
            esempi: [{ en: "The shop has security cameras.", it: "Il negozio ha le telecamere di sorveglianza." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "camera",
      spiegazione:
        "La camera da letto è bedroom, la camera d'albergo è room. Camera è solo l'apparecchio per fare foto e video.",
    },
    attenzione: ["\"Ho prenotato una camera doppia\" è I've booked a double room."],
  },
  {
    id: "catch",
    parola: "catch",
    fonetica: "/kætʃ/",
    descrizione: "Prendere qualcosa che si muove: una palla, un treno, un raffreddore.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "catches · caught · caught · catching",
        significati: [
          {
            indicazione: "al volo",
            traduzioni: ["prendere", "afferrare"],
            esempi: [{ en: "Catch the ball!", it: "Prendi la palla!" }],
          },
          {
            indicazione: "un mezzo di trasporto",
            traduzioni: ["prendere"],
            esempi: [{ en: "I need to catch the 8.15 train.", it: "Devo prendere il treno delle 8.15." }],
          },
          {
            indicazione: "una malattia",
            traduzioni: ["prendersi", "beccarsi"],
            esempi: [{ en: "I caught a cold.", it: "Mi sono preso un raffreddore." }],
          },
          {
            indicazione: "sorprendere qualcuno",
            traduzioni: ["prendere", "beccare", "sorprendere"],
            esempi: [
              { en: "The police caught the thief.", it: "La polizia ha preso il ladro." },
              { en: "She caught him reading her diary.", it: "Lo ha beccato a leggere il suo diario." },
            ],
          },
          {
            indicazione: "sentire, capire",
            traduzioni: ["sentire", "afferrare"],
            esempi: [{ en: "Sorry, I didn't catch your name.", it: "Scusa, non ho capito il tuo nome." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "catch up (with)",
        significati: [
          {
            indicazione: "chi è più avanti",
            traduzioni: ["raggiungere"],
            esempi: [{ en: "Go ahead, I'll catch up with you.", it: "Andate avanti, vi raggiungo." }],
          },
          {
            indicazione: "lavoro arretrato",
            traduzioni: ["mettersi in pari", "recuperare"],
            esempi: [{ en: "I've got a lot of work to catch up on.", it: "Ho tanto lavoro da recuperare." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "catch fire",
        significati: [
          {
            traduzioni: ["prendere fuoco"],
            esempi: [{ en: "The curtains caught fire.", it: "Le tende hanno preso fuoco." }],
          },
        ],
      },
    ],
    attenzione: [
      "Caught si pronuncia /kɔːt/, come court.",
      "Il treno si prende con catch o take, ma non si \"perde\" con lose: perdere il treno è miss the train.",
    ],
    lezioni: [{ id: "56", riquadro: 2 }],
  },
  {
    id: "chance",
    parola: "chance",
    fonetica: "/tʃɑːns/",
    descrizione: "Un'occasione, o la possibilità che qualcosa succeda.",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "un momento favorevole",
            traduzioni: ["occasione", "opportunità"],
            esempi: [
              { en: "This is your last chance.", it: "È la tua ultima occasione." },
              { en: "I didn't get the chance to say goodbye.", it: "Non ho avuto l'occasione di salutare." },
            ],
          },
          {
            indicazione: "quanto è probabile",
            traduzioni: ["probabilità", "possibilità"],
            esempi: [{ en: "There's a good chance it will rain.", it: "È molto probabile che piova." }],
          },
          {
            indicazione: "il caso",
            traduzioni: ["caso"],
            esempi: [{ en: "We met by chance.", it: "Ci siamo incontrati per caso." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "Any chance...?",
        significati: [
          {
            traduzioni: ["per caso...?"],
            etichette: ["informale"],
            esempi: [{ en: "Any chance you could lend me a tenner?", it: "Per caso mi presteresti dieci sterline?" }],
          },
        ],
      },
      {
        testo: "take a chance",
        significati: [
          {
            traduzioni: ["rischiare", "tentare la sorte"],
            esempi: [{ en: "Let's take a chance and buy it.", it: "Rischiamo e compriamolo." }],
          },
        ],
      },
    ],
    attenzione: [
      "Chance non vuol dire \"fortuna\": per quella si usa luck. Buona fortuna! = Good luck!",
    ],
  },
  {
    id: "college",
    parola: "college",
    fonetica: "/ˈkɒlɪdʒ/",
    descrizione: "Falso amico: una scuola dopo i 16 anni o, in America, l'università; non un collegio.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "in Gran Bretagna, dopo i 16 anni",
            traduzioni: ["istituto superiore", "scuola professionale"],
            etichette: ["UK"],
            esempi: [{ en: "She's studying hairdressing at college.", it: "Studia da parrucchiera in un istituto professionale." }],
          },
          {
            indicazione: "negli Stati Uniti",
            traduzioni: ["università"],
            etichette: ["US"],
            esempi: [{ en: "Where did you go to college?", it: "Dove hai fatto l'università?" }],
          },
          {
            indicazione: "a Oxford e Cambridge",
            traduzioni: ["college"],
            esempi: [{ en: "Oxford has more than thirty colleges.", it: "Oxford ha più di trenta college." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "collegio",
      spiegazione:
        "Il collegio dove si vive e si studia è boarding school. College è una scuola superiore o l'università.",
    },
    attenzione: [
      "A Oxford il college è la comunità dove si vive, si mangia e si fanno le lezioni individuali (tutorials); l'università organizza le lezioni generali e gli esami e dà i titoli.",
    ],
  },
  {
    id: "come",
    parola: "come",
    fonetica: "/kʌm/",
    descrizione: "Muoversi verso chi parla: venire, arrivare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "comes · came · come · coming",
        significati: [
          {
            indicazione: "verso chi parla o chi ascolta",
            traduzioni: ["venire"],
            esempi: [
              { en: "Come here!", it: "Vieni qui!" },
              { en: "Are you coming to the party?", it: "Vieni alla festa?" },
            ],
          },
          {
            indicazione: "raggiungere un momento, un posto",
            traduzioni: ["arrivare"],
            esempi: [{ en: "Summer has come at last.", it: "Finalmente è arrivata l'estate." }],
          },
          {
            indicazione: "+ from: l'origine",
            traduzioni: ["venire", "essere di"],
            esempi: [{ en: "Where do you come from?", it: "Di dove sei?" }],
          },
          {
            indicazione: "in una gara",
            traduzioni: ["arrivare", "classificarsi"],
            esempi: [{ en: "She came second in the race.", it: "È arrivata seconda nella gara." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "come back",
        significati: [
          {
            traduzioni: ["tornare"],
            esempi: [{ en: "When are you coming back?", it: "Quando torni?" }],
          },
        ],
      },
      {
        testo: "come in",
        significati: [
          {
            traduzioni: ["entrare"],
            esempi: [{ en: "Come in, the door's open.", it: "Entra, la porta è aperta." }],
          },
        ],
      },
      {
        testo: "come across",
        significati: [
          {
            traduzioni: ["imbattersi in", "trovare per caso"],
            esempi: [{ en: "I came across an old photo of you.", it: "Ho trovato per caso una tua vecchia foto." }],
          },
        ],
      },
      {
        testo: "come up with",
        significati: [
          {
            traduzioni: ["farsi venire in mente", "tirare fuori"],
            esempi: [{ en: "She came up with a brilliant idea.", it: "Le è venuta in mente un'idea geniale." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "How come?",
        significati: [
          {
            traduzioni: ["come mai?"],
            etichette: ["informale"],
            esempi: [{ en: "How come you're so late?", it: "Come mai sei così in ritardo?" }],
          },
        ],
      },
      {
        testo: "come true",
        significati: [
          {
            traduzioni: ["avverarsi", "realizzarsi"],
            esempi: [{ en: "Her dream came true.", it: "Il suo sogno si è avverato." }],
          },
        ],
      },
    ],
    attenzione: [
      "Il participio passato è come, uguale al presente: She has come, non She has came.",
      "Quando ci si muove verso chi ascolta si usa come, anche se in italiano diciamo \"arrivo\": — Dinner's ready! — I'm coming! (Arrivo!)",
    ],
    lezioni: [
      { id: "46", riquadro: 2 },
      { id: "56", riquadro: 2 },
    ],
  },
  {
    id: "control",
    parola: "control",
    fonetica: "/kənˈtrəʊl/",
    descrizione: "Falso amico: significa \"avere potere su qualcosa\", non \"verificare\".",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "controls · controlled · controlled · controlling",
        significati: [
          {
            traduzioni: ["controllare", "dominare", "gestire", "regolare"],
            esempi: [
              { en: "She couldn't control her anger.", it: "Non riusciva a dominare la rabbia." },
              { en: "This button controls the temperature.", it: "Questo pulsante regola la temperatura." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            traduzioni: ["controllo", "potere"],
            esempi: [{ en: "The driver lost control of the car.", it: "L'autista ha perso il controllo dell'auto." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "controllare (verificare)",
      spiegazione:
        "Control vuol dire avere potere su qualcosa. Controllare nel senso di verificare si dice check.",
    },
    attenzione: [
      "\"Controllo la posta\" è I'll check my email; \"controlla le risposte\" è check your answers.",
      "Passport control resta control perché è un'autorità che ha il potere di far passare o no.",
    ],
  },
  {
    id: "carry",
    parola: "carry",
    fonetica: "/ˈkæri/",
    descrizione: "Tenere qualcosa addosso mentre ci si sposta: portare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "carries · carried · carried · carrying",
        significati: [
          {
            indicazione: "in mano, in braccio",
            traduzioni: ["portare", "trasportare"],
            esempi: [
              { en: "Can you help me carry these bags?", it: "Mi aiuti a portare queste borse?" },
              { en: "She was carrying a baby.", it: "Portava in braccio un bambino." },
            ],
          },
          {
            indicazione: "sempre con sé",
            traduzioni: ["portare con sé", "avere addosso"],
            esempi: [{ en: "I never carry cash.", it: "Non porto mai contanti." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "carry on",
        significati: [
          {
            traduzioni: ["continuare", "andare avanti"],
            esempi: [{ en: "Carry on, I'm listening.", it: "Continua, ti ascolto." }],
          },
        ],
      },
      {
        testo: "carry out",
        significati: [
          {
            traduzioni: ["eseguire", "effettuare", "realizzare"],
            etichette: ["formale"],
            esempi: [{ en: "The researchers carried out an experiment.", it: "I ricercatori hanno condotto un esperimento." }],
          },
        ],
      },
    ],
    attenzione: [
      "Carry è portare addosso spostandosi; bring e take dicono la direzione (verso qui, verso lì); wear è portare un vestito: She's wearing a hat.",
    ],
    lezioni: [{ id: "46", riquadro: 6 }],
  },
  {
    id: "case",
    parola: "case",
    fonetica: "/keɪs/",
    descrizione: "Una situazione particolare; anche una custodia o una valigia.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "una situazione",
            traduzioni: ["caso"],
            esempi: [
              { en: "In that case, I'll stay at home.", it: "In tal caso resto a casa." },
              { en: "It's a classic case of bad luck.", it: "È un classico caso di sfortuna." },
            ],
          },
          {
            indicazione: "per la polizia, un tribunale",
            traduzioni: ["caso", "causa", "processo"],
            esempi: [{ en: "The police are investigating the case.", it: "La polizia sta indagando sul caso." }],
          },
          {
            indicazione: "un contenitore",
            traduzioni: ["custodia", "astuccio", "valigia"],
            esempi: [
              { en: "a pencil case", it: "un astuccio" },
              { en: "I need a new case for my phone.", it: "Mi serve una custodia nuova per il telefono." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "in case",
        significati: [
          {
            indicazione: "per precauzione",
            traduzioni: ["nel caso", "in caso"],
            esempi: [{ en: "Take an umbrella in case it rains.", it: "Prendi l'ombrello, nel caso piova." }],
          },
        ],
      },
      {
        testo: "just in case",
        significati: [
          {
            traduzioni: ["non si sa mai", "per sicurezza"],
            esempi: [{ en: "I'll bring a jumper, just in case.", it: "Mi porto un maglione, non si sa mai." }],
          },
        ],
      },
    ],
    attenzione: [
      "Case non è la casa: quella è house (l'edificio) o home (il proprio focolare).",
      "Dopo in case si usa il presente, non will: in case it rains, non in case it will rain.",
      "Per caso (by chance) non si traduce con case: We met by chance.",
    ],
  },
  {
    id: "cause",
    parola: "cause",
    fonetica: "/kɔːz/",
    descrizione: "Ciò che fa succedere qualcosa: causa; come verbo, causare.",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "il motivo",
            traduzioni: ["causa", "motivo"],
            esempi: [{ en: "What was the cause of the accident?", it: "Qual è stata la causa dell'incidente?" }],
          },
          {
            indicazione: "un ideale",
            traduzioni: ["causa"],
            esempi: [{ en: "They're raising money for a good cause.", it: "Raccolgono fondi per una buona causa." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "causes · caused · caused · causing",
        significati: [
          {
            traduzioni: ["causare", "provocare"],
            esempi: [{ en: "The storm caused a lot of damage.", it: "La tempesta ha provocato molti danni." }],
          },
        ],
      },
    ],
    attenzione: [
      "La causa in tribunale non è cause ma case o lawsuit.",
      "Because of, non cause of, per dire \"a causa di\": because of the rain.",
    ],
  },
  {
    id: "claim",
    parola: "claim",
    fonetica: "/kleɪm/",
    descrizione: "Dire che una cosa è vera, anche senza prove: sostenere, affermare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "claims · claimed · claimed · claiming",
        significati: [
          {
            indicazione: "+ that / to",
            traduzioni: ["sostenere", "affermare", "dichiarare"],
            esempi: [
              { en: "He claims that he saw a UFO.", it: "Sostiene di aver visto un UFO." },
              { en: "She claims to be a descendant of Shakespeare.", it: "Dice di essere una discendente di Shakespeare." },
            ],
          },
          {
            indicazione: "soldi, un diritto",
            traduzioni: ["chiedere", "richiedere", "rivendicare"],
            esempi: [{ en: "You can claim your money back.", it: "Puoi chiedere il rimborso." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un'affermazione",
            traduzioni: ["affermazione", "tesi"],
            esempi: [{ en: "There is no evidence for this claim.", it: "Non ci sono prove a sostegno di questa affermazione." }],
          },
          {
            indicazione: "una richiesta",
            traduzioni: ["richiesta", "domanda di risarcimento"],
            esempi: [{ en: "I made an insurance claim.", it: "Ho fatto una richiesta di risarcimento all'assicurazione." }],
          },
        ],
      },
    ],
    attenzione: [
      "Nei saggi claim fa capire che chi scrive non è del tutto d'accordo: The author claims that... suona più dubbioso di The author argues that...",
      "Non vuol dire \"reclamare\" nel senso di lamentarsi: quello è complain.",
    ],
  },
  {
    id: "clever",
    parola: "clever",
    fonetica: "/ˈklevə(r)/",
    descrizione: "Che capisce e impara in fretta: intelligente, sveglio.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "una persona",
            traduzioni: ["intelligente", "sveglio", "bravo"],
            etichette: ["UK"],
            esempi: [{ en: "She's the cleverest girl in the class.", it: "È la ragazza più intelligente della classe." }],
          },
          {
            indicazione: "un'idea, un oggetto",
            traduzioni: ["ingegnoso", "furbo"],
            esempi: [{ en: "What a clever idea!", it: "Che idea ingegnosa!" }],
          },
        ],
      },
    ],
    attenzione: [
      "Clever è molto britannico; in America si dice più spesso smart.",
      "A volte ha una sfumatura negativa, come \"furbo\": Don't get clever with me! = Non fare il furbo con me!",
    ],
  },
  {
    id: "close",
    parola: "close",
    fonetica: "/kləʊz/",
    descrizione: "Chiudere qualcosa; come aggettivo, vicino.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "closes · closed · closed · closing",
        significati: [
          {
            indicazione: "porte, libri, occhi",
            traduzioni: ["chiudere", "chiudersi"],
            esempi: [
              { en: "Close the window, please.", it: "Chiudi la finestra, per favore." },
              { en: "The shop closes at six.", it: "Il negozio chiude alle sei." },
            ],
          },
        ],
      },
      {
        categoria: "aggettivo",
        fonetica: "/kləʊs/",
        significati: [
          {
            indicazione: "nello spazio o nel tempo",
            traduzioni: ["vicino"],
            esempi: [{ en: "The station is close to my house.", it: "La stazione è vicino a casa mia." }],
          },
          {
            indicazione: "una relazione",
            traduzioni: ["intimo", "stretto"],
            esempi: [{ en: "She's a close friend.", it: "È un'amica intima." }],
          },
          {
            indicazione: "una gara",
            traduzioni: ["combattuto", "equilibrato"],
            esempi: [{ en: "It was a close match.", it: "È stata una partita combattuta." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "That was close!",
        significati: [
          {
            traduzioni: ["C'è mancato poco!", "Per un pelo!"],
            esempi: [{ en: "We nearly missed the train. That was close!", it: "Abbiamo quasi perso il treno. C'è mancato poco!" }],
          },
        ],
      },
    ],
    attenzione: [
      "La pronuncia cambia: il verbo è /kləʊz/ (con la z), l'aggettivo /kləʊs/ (con la s).",
      "Vicino a è close to o near: close to the sea. Mai close at.",
    ],
    lezioni: [{ id: "19", riquadro: 4 }],
  },
  {
    id: "comprehensive",
    parola: "comprehensive",
    fonetica: "/ˌkɒmprɪˈhensɪv/",
    descrizione: "Falso amico: significa \"completo, esauriente\", non \"comprensivo\".",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["completo", "esauriente", "globale"],
            esempi: [
              { en: "This is a comprehensive guide to English grammar.", it: "È una guida completa alla grammatica inglese." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "comprehensive school",
            traduzioni: ["scuola superiore statale"],
            etichette: ["UK"],
            esempi: [{ en: "She went to the local comprehensive.", it: "Ha frequentato la scuola statale del quartiere." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "comprensivo",
      spiegazione:
        "Comprensivo (che capisce gli altri) si dice understanding o sympathetic: My teacher was very understanding.",
    },
  },
  {
    id: "confident",
    parola: "confident",
    fonetica: "/ˈkɒnfɪdənt/",
    descrizione: "Falso amico: significa \"sicuro (di sé)\", non \"confidente\".",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "di sé",
            traduzioni: ["sicuro di sé", "fiducioso"],
            esempi: [{ en: "She's a very confident speaker.", it: "Parla in pubblico con grande sicurezza." }],
          },
          {
            indicazione: "+ that / of: di un risultato",
            traduzioni: ["sicuro", "convinto"],
            esempi: [{ en: "I'm confident that we'll win.", it: "Sono sicuro che vinceremo." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "confidente",
      spiegazione:
        "Il confidente, la persona a cui si dicono i segreti, è confidant. Dare confidenza a qualcuno è be too familiar with somebody.",
    },
    attenzione: ["Il nome è confidence, sicurezza: self-confidence = autostima, fiducia in se stessi."],
  },
  {
    id: "consistent",
    parola: "consistent",
    fonetica: "/kənˈsɪstənt/",
    descrizione: "Falso amico: significa \"coerente, costante\", non \"consistente\".",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "sempre uguale",
            traduzioni: ["costante", "regolare"],
            esempi: [{ en: "Her work has been consistent all year.", it: "Il suo lavoro è stato costante tutto l'anno." }],
          },
          {
            indicazione: "+ with: in accordo",
            traduzioni: ["coerente", "compatibile"],
            esempi: [{ en: "The results are consistent with our theory.", it: "I risultati sono coerenti con la nostra teoria." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "consistente",
      spiegazione:
        "Consistente (sostanzioso, notevole) si dice substantial o considerable: a substantial amount = una quantità consistente.",
    },
    attenzione: ["Il contrario è inconsistent, incoerente: His story was inconsistent."],
  },
  {
    id: "convenient",
    parola: "convenient",
    fonetica: "/kənˈviːniənt/",
    descrizione: "Falso amico: significa \"comodo, pratico\", non \"conveniente\" nel prezzo.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "comodo da usare o raggiungere",
            traduzioni: ["comodo", "pratico"],
            esempi: [
              { en: "The hotel is in a convenient location.", it: "L'albergo è in una posizione comoda." },
            ],
          },
          {
            indicazione: "un momento",
            traduzioni: ["adatto", "che va bene"],
            esempi: [{ en: "Is Monday convenient for you?", it: "Lunedì ti va bene?" }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "conveniente",
      spiegazione:
        "Conveniente nel senso di economico si dice cheap, good value o a good deal: These shoes are good value.",
    },
    attenzione: ["Il minimarket aperto fino a tardi è a convenience store, il negozio \"comodo\", non quello economico."],
  },
  {
    id: "cost",
    parola: "cost",
    fonetica: "/kɒst/",
    descrizione: "Avere un certo prezzo: costare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "costs · cost · cost · costing",
        significati: [
          {
            traduzioni: ["costare"],
            esempi: [
              { en: "How much does it cost?", it: "Quanto costa?" },
              { en: "The tickets cost £20 each.", it: "I biglietti costano 20 sterline l'uno." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        significati: [
          {
            traduzioni: ["costo", "prezzo", "spesa"],
            esempi: [{ en: "The cost of living in London is very high.", it: "Il costo della vita a Londra è molto alto." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "at all costs",
        significati: [
          {
            traduzioni: ["a tutti i costi", "a ogni costo"],
            esempi: [{ en: "We must avoid war at all costs.", it: "Dobbiamo evitare la guerra a ogni costo." }],
          },
        ],
      },
      {
        testo: "cost an arm and a leg",
        significati: [
          {
            traduzioni: ["costare un occhio della testa"],
            etichette: ["informale"],
            esempi: [{ en: "That bag cost an arm and a leg.", it: "Quella borsa è costata un occhio della testa." }],
          },
        ],
      },
    ],
    attenzione: [
      "Cost è uguale in tutte e tre le forme: Yesterday it cost £5, non costed.",
      "Si chiede il prezzo con How much: How much does it cost? oppure How much is it?",
    ],
    lezioni: [{ id: "55", riquadro: 3 }],
  },
  {
    id: "count",
    parola: "count",
    fonetica: "/kaʊnt/",
    descrizione: "Dire i numeri in ordine o calcolare quanti sono: contare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "counts · counted · counted · counting",
        significati: [
          {
            indicazione: "numeri, oggetti",
            traduzioni: ["contare"],
            esempi: [
              { en: "Can you count to ten in French?", it: "Sai contare fino a dieci in francese?" },
              { en: "She counted the money twice.", it: "Ha contato i soldi due volte." },
            ],
          },
          {
            indicazione: "essere importante, essere valido",
            traduzioni: ["contare", "valere"],
            esempi: [{ en: "Every vote counts.", it: "Ogni voto conta." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "count on",
        significati: [
          {
            traduzioni: ["contare su"],
            esempi: [{ en: "You can always count on me.", it: "Puoi sempre contare su di me." }],
          },
        ],
      },
    ],
    attenzione: [
      "Contare su qualcuno è count on, non count with.",
      "I nomi numerabili sono countable nouns, quelli non numerabili uncountable nouns.",
    ],
  },
  {
    id: "cover",
    parola: "cover",
    fonetica: "/ˈkʌvə(r)/",
    descrizione: "Mettere qualcosa sopra un'altra cosa: coprire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "covers · covered · covered · covering",
        significati: [
          {
            indicazione: "mettere sopra",
            traduzioni: ["coprire"],
            esempi: [
              { en: "Cover the pan and cook for ten minutes.", it: "Coprire la pentola e cuocere per dieci minuti." },
              { en: "The hills were covered in snow.", it: "Le colline erano coperte di neve." },
            ],
          },
          {
            indicazione: "un argomento",
            traduzioni: ["trattare", "comprendere"],
            esempi: [{ en: "This course covers the whole of English grammar.", it: "Questo corso tratta tutta la grammatica inglese." }],
          },
          {
            indicazione: "una distanza",
            traduzioni: ["percorrere"],
            esempi: [{ en: "We covered 30 miles in a day.", it: "Abbiamo percorso 30 miglia in un giorno." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "di un libro",
            traduzioni: ["copertina"],
            esempi: [{ en: "Don't judge a book by its cover.", it: "Non giudicare un libro dalla copertina." }],
          },
          {
            indicazione: "un riparo",
            traduzioni: ["riparo"],
            esempi: [{ en: "We took cover from the rain.", it: "Ci siamo riparati dalla pioggia." }],
          },
        ],
      },
    ],
    attenzione: ["Coperto di si dice covered in o covered with, non covered of."],
  },
  {
    id: "cry",
    parola: "cry",
    fonetica: "/kraɪ/",
    descrizione: "Versare lacrime: piangere; anche gridare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "cries · cried · cried · crying",
        significati: [
          {
            indicazione: "con le lacrime",
            traduzioni: ["piangere"],
            esempi: [
              { en: "The baby cried all night.", it: "Il bambino ha pianto tutta la notte." },
              { en: "The film made me cry.", it: "Il film mi ha fatto piangere." },
            ],
          },
          {
            indicazione: "con la voce",
            traduzioni: ["gridare", "urlare"],
            esempi: [{ en: "\"Help!\" she cried.", it: "\"Aiuto!\" gridò." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["grido", "urlo", "pianto"],
            esempi: [{ en: "We heard a cry for help.", it: "Abbiamo sentito una richiesta d'aiuto." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "It's no use crying over spilt milk.",
        significati: [
          {
            traduzioni: ["È inutile piangere sul latte versato."],
            esempi: [{ en: "It's done now. It's no use crying over spilt milk.", it: "Ormai è fatta. È inutile piangere sul latte versato." }],
          },
        ],
      },
    ],
    attenzione: ["Make + persona + cry, senza to: It made me cry."],
    lezioni: [{ id: "45", riquadro: 5 }],
  },
  {
    id: "cut",
    parola: "cut",
    fonetica: "/kʌt/",
    descrizione: "Dividere qualcosa con una lama: tagliare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "cuts · cut · cut · cutting",
        significati: [
          {
            indicazione: "con un coltello, le forbici",
            traduzioni: ["tagliare"],
            esempi: [
              { en: "Cut the bread, please.", it: "Taglia il pane, per favore." },
              { en: "I cut my finger.", it: "Mi sono tagliato un dito." },
            ],
          },
          {
            indicazione: "ridurre",
            traduzioni: ["tagliare", "ridurre"],
            esempi: [{ en: "The government has cut taxes.", it: "Il governo ha tagliato le tasse." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "una ferita",
            traduzioni: ["taglio"],
            esempi: [{ en: "It's just a small cut.", it: "È solo un taglietto." }],
          },
          {
            indicazione: "una riduzione",
            traduzioni: ["taglio", "riduzione"],
            esempi: [{ en: "There will be cuts in public spending.", it: "Ci saranno tagli alla spesa pubblica." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "cut down (on)",
        significati: [
          {
            traduzioni: ["ridurre", "limitare"],
            esempi: [{ en: "I'm trying to cut down on sugar.", it: "Sto cercando di ridurre lo zucchero." }],
          },
        ],
      },
      {
        testo: "cut off",
        significati: [
          {
            traduzioni: ["tagliare fuori", "interrompere", "staccare"],
            esempi: [{ en: "We were cut off in the middle of the call.", it: "La telefonata si è interrotta a metà." }],
          },
        ],
      },
    ],
    attenzione: [
      "Cut è uguale in tutte e tre le forme: cut, cut, cut.",
      "\"Mi sono tagliato i capelli\" dal parrucchiere è I had my hair cut; I cut my hair vuol dire che l'hai fatto da solo.",
    ],
  },
];
