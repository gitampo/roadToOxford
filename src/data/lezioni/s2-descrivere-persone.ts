import { Lezione } from "@/types/lezione";

export const descriverePersone: Lezione = {
  id: "S2",
  titolo: "Descrivere le persone",
  descrizione: "Dire com'è una persona: aspetto fisico, età e carattere",
  chiavi:
    "aspetto fisico, carattere, what is she like, capelli, falsi amici, simpatico",
  livello: "Situazioni",
  sottotitolo: "Situazioni · Lezione S2 · A1",
  citazione: {
    testo: "She is tolerable, but not handsome enough to tempt me.",
    fonte: "Jane Austen, Orgoglio e pregiudizio (1813)",
    traduzione: "È passabile, ma non abbastanza bella da tentarmi.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "TRE DOMANDE DIVERSE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano \"com'è?\" serve per tutto: l'aspetto, il carattere, la salute. In inglese ci sono tre domande diverse, e confonderle porta a risposte sbagliate. È la prima cosa da fissare.",
        },
        {
          tipo: "tabella",
          righe: [
            ["What does she look like?", "Che aspetto ha? (fisico)"],
            ["What's she like?", "Com'è? Che tipo è? (carattere)"],
            ["How is she?", "Come sta? (salute, umore)"],
            ["What does she like?", "Che cosa le piace?"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "What does your brother look like? — He's tall and dark.",
              it: "Com'è tuo fratello (d'aspetto)? — È alto e moro.",
            },
            {
              en: "What's your new flatmate like? — She's really friendly.",
              it: "Com'è la tua nuova coinquilina? — È molto simpatica.",
            },
            {
              en: "How's your mum? — She's fine, thanks.",
              it: "Come sta tua mamma? — Bene, grazie.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'In What\'s she like? la parola like non è il verbo "piacere": è una preposizione che significa "come". Per questo non c\'è do. La domanda letterale è "Lei è come?".',
        },
      ],
    },
    {
      titolo: "ESSERE O AVERE?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Per descrivere qualcuno l\'inglese alterna due verbi. To be + aggettivo per le caratteristiche della persona intera (alto, giovane, biondo, simpatico); have got (o have) + nome per le parti del corpo e quello che "ha" addosso (gli occhi, i capelli, la barba). Have got è più britannico, have più americano: entrambi sono giusti (lezione 6{4}).',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She's tall and slim.", it: "È alta e snella." },
            {
              en: "She's got long dark hair.",
              it: "Ha i capelli lunghi e scuri.",
            },
            {
              en: "He's blond. / He's got blond hair.",
              it: "È biondo. / Ha i capelli biondi.",
            },
            { en: "He's got a beard.", it: "Ha la barba." },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Per mettere insieme più caratteristiche in una frase sola, si usa with: è il modo più naturale di descrivere qualcuno senza ripetere has got a ogni frase.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "She's tall and slim, with long dark hair.",
              it: "È alta e snella, con i capelli lunghi e scuri.",
            },
            {
              en: "He's the guy with the beard and the glasses.",
              it: "È il ragazzo con la barba e gli occhiali.",
            },
            {
              en: "A short woman with curly red hair.",
              it: "Una donna bassa con i capelli rossi e ricci.",
            },
          ],
        },
      ],
    },
    {
      titolo: "ALTEZZA E CORPORATURA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per l'altezza: tall (alto), short (basso), of medium height o of average height (di statura media). Per la statura precisa si usa be + misura + tall. Nel Regno Unito molti misurano ancora le persone in piedi (foot, plurale feet) e pollici (inches): un piede è circa 30 cm.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "He's about one metre eighty.",
              it: "È alto circa un metro e ottanta.",
            },
            {
              en: "She's 1.65 metres tall.",
              it: "È alta un metro e sessantacinque.",
            },
            { en: "He's six foot.", it: "È alto un metro e ottantatré circa." },
            {
              en: "I'm five foot six.",
              it: "Sono alto circa un metro e sessantotto.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'Per la corporatura l\'inglese ha molte sfumature, e qui la scelta della parola conta: alcune sono complimenti, altre offese. Il nostro "magro" si divide in tre.',
        },
        {
          tipo: "tabella",
          righe: [
            ["slim", "snello (positivo)"],
            ["thin", "magro (neutro, a volte troppo)"],
            ["skinny", "magrissimo, pelle e ossa (spesso negativo)"],
            ["well-built / muscular", "robusto / muscoloso"],
            [
              "a bit overweight / a bit heavy",
              "un po' in carne (il modo gentile)",
            ],
            ["fat", "grasso (offensivo se riferito a una persona)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Nel Regno Unito commentare il peso di qualcuno, anche in modo affettuoso ("sei ingrassato!"), è considerato molto maleducato. Se devi descrivere una persona robusta, usa a bit overweight o well-built, mai fat.',
        },
      ],
    },
    {
      titolo: "I CAPELLI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Hair è non numerabile quando indica tutti i capelli: va al singolare e non vuole a (lezione 17{1}). Hairs al plurale significa "peli" o singoli capelli, per esempio quelli trovati nel lavandino.',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She's got long hair.", it: "Ha i capelli lunghi." },
            { en: "Her hair is beautiful.", it: "Ha dei bei capelli." },
            { en: "She's got long hairs.", sbagliato: true },
            {
              en: "There's a hair in my soup!",
              it: "C'è un capello nella mia zuppa!",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Con più aggettivi l'ordine è fisso: prima la lunghezza, poi la forma, poi il colore, e infine hair.",
        },
        {
          tipo: "tabella",
          righe: [
            ["lunghezza", "long, short, shoulder-length (alle spalle)"],
            ["forma", "straight (lisci), wavy (mossi), curly (ricci)"],
            ["colore", "dark, fair, blond(e), brown, red, grey"],
            ["esempio", "long straight dark hair · short curly fair hair"],
          ],
        },
        {
          tipo: "tabella",
          righe: [
            ["dark", "scuri, mori"],
            [
              "fair / blond",
              "chiari / biondi (blonde, con la e, per una donna)",
            ],
            ["brown", "castani"],
            ["red / ginger", "rossi (ginger è britannico e colloquiale)"],
            ["grey", "grigi"],
            [
              "He's bald. / He's going bald.",
              "È calvo. / Sta perdendo i capelli.",
            ],
            ["a beard / a moustache", "la barba / i baffi"],
            ["a ponytail", "una coda di cavallo"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Brown hair è "capelli castani", non marroni; e "è moro" si dice he\'s dark (o he\'s got dark hair), non he\'s brown, che si riferirebbe alla pelle. Ricorda anche che la parte del corpo vuole il possessivo: "si è tagliata i capelli" è She\'s cut her hair (lezione 5{5}).',
        },
      ],
    },
    {
      titolo: "OCCHI, VISO E SEGNI PARTICOLARI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["blue / green / brown eyes", "occhi azzurri / verdi / castani"],
            ["hazel eyes", "occhi nocciola"],
            ["He wears glasses.", "Porta gli occhiali."],
            ["She's got freckles.", "Ha le lentiggini."],
            ["He's got a tattoo on his arm.", "Ha un tatuaggio sul braccio."],
            ["pale / tanned", "pallido / abbronzato"],
            ["good-looking", "di bell'aspetto (uomini e donne)"],
            ["pretty / handsome", "carina (donna) / bello (uomo)"],
          ],
        },
        {
          tipo: "testo",
          testo:
            'Due verbi utilissimi: look + aggettivo significa "sembrare", look like + nome significa "somigliare a". Dopo look si mette l\'aggettivo, non l\'avverbio (lezione 33{6}).',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You look tired.", it: "Sembri stanco." },
            { en: "She looks like her mother.", it: "Somiglia a sua madre." },
            {
              en: "He looks like a film star.",
              it: "Sembra un attore del cinema.",
            },
            { en: "You look like tired.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Beautiful è forte: "bellissima". Per un uomo si usa di solito handsome o good-looking. Gorgeous (stupendo) e fit ("figo", britannico e molto informale) li sentirai tra i ragazzi.',
        },
      ],
    },
    {
      titolo: "L'ETÀ",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per un'età approssimativa l'inglese ragiona per decenni: in his twenties è \"tra i venti e i trent'anni\". Early, mid e late precisano: inizio, metà o fine del decennio.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "She's in her twenties.",
              it: "Avrà tra i venti e i trent'anni.",
            },
            {
              en: "He's in his early forties.",
              it: "Ha poco più di quarant'anni.",
            },
            { en: "She's in her late fifties.", it: "Va per i sessanta." },
            { en: "He's about thirty.", it: "Avrà una trentina d'anni." },
          ],
        },
        {
          tipo: "tabella",
          righe: [
            [
              "a teenager",
              "un adolescente (da 13 a 19 anni: thirTEEN... nineTEEN)",
            ],
            ["young", "giovane"],
            ["middle-aged", "di mezza età"],
            ["elderly", "anziano (il modo rispettoso)"],
            ["old", "vecchio (diretto, a volte poco gentile)"],
          ],
        },
      ],
    },
    {
      titolo: "IL CARATTERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Gli aggettivi del carattere si imparano meglio a coppie, insieme al loro contrario.",
        },
        {
          tipo: "tabella",
          righe: [
            ["friendly ↔ unfriendly", "cordiale, alla mano ↔ freddo"],
            ["outgoing ↔ shy", "estroverso ↔ timido"],
            ["kind ↔ unkind", "gentile, buono ↔ cattivo"],
            ["generous ↔ mean", "generoso ↔ tirchio"],
            ["hard-working ↔ lazy", "che si impegna ↔ pigro"],
            ["easy-going ↔ uptight", "tranquillo, accomodante ↔ teso, rigido"],
            ["chatty ↔ quiet", "chiacchierone ↔ silenzioso"],
            ["polite ↔ rude", "educato ↔ maleducato"],
            ["clever, bright ↔ silly", "intelligente, sveglio ↔ sciocco"],
            ["reliable ↔ unreliable", "affidabile ↔ inaffidabile"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Mean nel Regno Unito vuol dire soprattutto "tirchio"; negli Stati Uniti soprattutto "cattivo, meschino". Funny vuol dire "divertente, che fa ridere" (e anche "strano"); fun descrive una persona con cui ci si diverte: She\'s fun to be with.',
        },
      ],
    },
    {
      titolo: "I FALSI AMICI DEL CARATTERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Questi aggettivi assomigliano a parole italiane ma significano un'altra cosa. Sono tra gli errori più frequenti in assoluto, perché li usiamo proprio per descrivere le persone che conosciamo.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "simpatico",
              "nice, friendly, likeable (non sympathetic = comprensivo)",
            ],
            ["antipatico", "unpleasant, not very nice"],
            ["sensibile", "sensitive (non sensible = assennato, giudizioso)"],
            ["educato", "polite, well-mannered (non educated = istruito)"],
            [
              "nervoso (irritato)",
              "irritable, in a bad mood (nervous = agitato, in ansia)",
            ],
            [
              "bravo (in qualcosa)",
              "good at something (non brave = coraggioso)",
            ],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Your sister is very sympathetic.", sbagliato: true },
            {
              en: "Your sister is really nice.",
              it: "Tua sorella è molto simpatica.",
            },
            {
              en: "He's a very sensitive person.",
              it: "È una persona molto sensibile.",
            },
            {
              en: "She's a very sensible person.",
              it: "È una persona molto giudiziosa.",
            },
            {
              en: "I'm nervous about the exam.",
              it: "Sono agitato per l'esame.",
            },
          ],
        },
      ],
    },
    {
      titolo: "AMMORBIDIRE E RAFFORZARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I britannici raramente descrivono le persone in modo netto: ammorbidiscono le critiche e misurano i complimenti. Davanti all'aggettivo si mettono parole che ne regolano la forza.",
        },
        {
          tipo: "tabella",
          righe: [
            ["really / very", "molto"],
            ["quite", "abbastanza, piuttosto (nel Regno Unito attenua)"],
            ["a bit / a little", "un po' (solo con aggettivi negativi)"],
            ["not very", "non molto (il modo gentile di dire il contrario)"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "He's a bit shy at first.",
              it: "All'inizio è un po' timido.",
            },
            {
              en: "She's not very tall.",
              it: "Non è molto alta. (= è bassina)",
            },
            { en: "The film was quite good.", it: "Il film era discreto." },
            { en: "He's a bit nice.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Not very + l'aggettivo positivo è il trucco britannico per criticare con garbo: He's not very clever invece di He's stupid, It's not very warm invece di It's cold. E attenzione a quite: quite good per un inglese è un \"discreto\", non un \"molto bene\".",
        },
      ],
    },
    {
      titolo: "UN DIALOGO: CHI È?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "A una festa in college, Sophie cerca di mostrare a Luca il ragazzo di cui gli ha parlato. Nota come per indicare una persona in mezzo a tante si usa the one + with o in.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Sophie: Can you see Tom? He's over there, by the window.",
              it: "Vedi Tom? È là, vicino alla finestra.",
            },
            {
              en: "Luca: Which one is he? The tall guy with the beard?",
              it: "Quale? Il ragazzo alto con la barba?",
            },
            {
              en: "Sophie: No, that's James. Tom's the one in the blue shirt.",
              it: "No, quello è James. Tom è quello con la camicia blu.",
            },
            {
              en: "Luca: Oh, the guy with the curly hair and glasses?",
              it: "Ah, quello con i capelli ricci e gli occhiali?",
            },
            { en: "Sophie: Yes, that's him!", it: "Sì, è lui!" },
            {
              en: "Luca: He looks a bit serious. What's he like?",
              it: "Sembra un po' serio. Che tipo è?",
            },
            {
              en: "Sophie: He's lovely, actually. A bit quiet at first, but really funny when you get to know him.",
              it: "In realtà è adorabile. Un po' silenzioso all'inizio, ma molto divertente quando lo conosci.",
            },
            { en: "Luca: And what does he study?", it: "E che cosa studia?" },
            {
              en: "Sophie: Maths. He's very bright. Come on, I'll introduce you!",
              it: "Matematica. È molto sveglio. Dai, te lo presento!",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'That\'s him! (e non That\'s he!): dopo il verbo to be, nel parlato, si usa il pronome complemento (lezione 16{2}). Actually non vuol dire "attualmente" ma "in realtà": è uno dei falsi amici più famosi.',
        },
      ],
    },
    {
      titolo: "DESCRIVERE TE STESSO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Ti chiederanno di descriverti in molte occasioni: per incontrare qualcuno che non ti ha mai visto ("come ti riconosco?"), in un profilo, in un colloquio. Ecco due modelli: uno per l\'aspetto, uno per il carattere.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I'm quite tall, with short dark hair and brown eyes.",
              it: "Sono piuttosto alto, con i capelli corti e scuri e gli occhi castani.",
            },
            {
              en: "I'll be wearing a red jacket.",
              it: "Avrò una giacca rossa.",
            },
            {
              en: "People say I'm friendly and easy-going.",
              it: "Dicono che sono simpatico e alla mano.",
            },
            {
              en: "I'm a bit shy at first, but I'm very chatty once I know you.",
              it: "All'inizio sono un po' timido, ma quando ti conosco parlo tantissimo.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "People say I'm... e I'd say I'm... sono il modo britannico di parlare bene di sé senza sembrare presuntuosi. Ai colloqui di lavoro va accompagnato da un esempio concreto: I'm very reliable: I've never missed a deadline.",
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
          testo: "Le domande",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Vuoi sapere che carattere ha la nuova coinquilina di un amico. Che cosa chiedi?",
          opzioni: [
            "What does she look like?",
            "What's she like?",
            "How is she?",
          ],
          giusta: 1,
          spiegazione:
            "What's she like? chiede il carattere; What does she look like? l'aspetto; How is she? come sta.",
          rivedi: "TRE DOMANDE DIVERSE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni domanda al suo significato.",
          coppie: [
            ["What does he look like?", "Che aspetto ha?"],
            ["What's he like?", "Che tipo è?"],
            ["How is he?", "Come sta?"],
            ["What does he like?", "Che cosa gli piace?"],
          ],
          rivedi: "TRE DOMANDE DIVERSE",
        },
        {
          tipo: "sottotitolo",
          testo: "L'aspetto",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come si dice "Ha i capelli lunghi e ricci"?',
          opzioni: [
            "She's got long curly hairs.",
            "She's got curly long hair.",
            "She's got long curly hair.",
          ],
          giusta: 2,
          spiegazione:
            "Hair è non numerabile (niente -s) e l'ordine è lunghezza, forma, colore.",
          rivedi: "I CAPELLI",
        },
        {
          tipo: "riordina",
          consegna: 'Descrivi: "È alto, con la barba e gli occhiali".',
          parole: ["glasses", "tall,", "a", "and", "he's", "beard", "with"],
          soluzione: ["he's", "tall,", "with", "a", "beard", "and", "glasses"],
          spiegazione:
            "Be + aggettivo per la persona intera, poi with per aggiungere i particolari.",
          rivedi: "ESSERE O AVERE?",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Vuoi descrivere con garbo un uomo robusto. Quale parola scegli?",
          opzioni: ["a bit overweight", "fat", "skinny"],
          giusta: 0,
          spiegazione:
            "Fat riferito a una persona è offensivo; a bit overweight (o well-built) è il modo gentile.",
          rivedi: "ALTEZZA E CORPORATURA",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Somiglia a suo padre".',
          prima: "He looks",
          dopo: "his father.",
          risposte: ["like"],
          spiegazione:
            "Look like + nome = somigliare a. Look + aggettivo = sembrare (You look tired).",
          rivedi: "OCCHI, VISO E SEGNI PARTICOLARI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Una donna ha più o meno 43 anni. Come lo dici in modo naturale?",
          opzioni: [
            "She's in the forty.",
            "She's in her early forties.",
            "She has about forty years.",
          ],
          giusta: 1,
          spiegazione:
            "In + possessivo + decennio: in her early forties = poco più di quarant'anni.",
          rivedi: "L'ETÀ",
        },
        {
          tipo: "sottotitolo",
          testo: "Il carattere",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come si dice "Il tuo amico è molto simpatico"?',
          opzioni: [
            "Your friend is very sympathetic.",
            "Your friend is very sensible.",
            "Your friend is really nice.",
          ],
          giusta: 2,
          spiegazione:
            'Sympathetic significa "comprensivo", sensible "giudizioso": simpatico si dice nice, friendly o likeable.',
          rivedi: "I FALSI AMICI DEL CARATTERE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni aggettivo inglese al suo significato.",
          coppie: [
            ["sensitive", "sensibile"],
            ["sensible", "giudizioso"],
            ["polite", "educato"],
            ["educated", "istruito"],
            ["nervous", "agitato"],
          ],
          rivedi: "I FALSI AMICI DEL CARATTERE",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Un collega inglese dice di un libro "It was quite good". Che cosa intende?',
          opzioni: [
            "Che era discreto, niente di speciale",
            "Che era bellissimo",
            "Che era pessimo",
          ],
          giusta: 0,
          spiegazione:
            'Nel Regno Unito quite attenua: quite good è un "discreto".',
          rivedi: "AMMORBIDIRE E RAFFORZARE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è sbagliata?",
          opzioni: [
            "He's a bit shy.",
            "He's a bit nice.",
            "He's not very tall.",
          ],
          giusta: 1,
          spiegazione:
            "A bit si usa solo con aggettivi negativi: a bit shy, a bit rude. Con quelli positivi si usa really, very o quite.",
          rivedi: "AMMORBIDIRE E RAFFORZARE",
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
            "Devi incontrare alla stazione un ragazzo inglese che non ti ha mai visto. Scrivigli un messaggio per farti riconoscere, poi aggiungi due righe sul tuo carattere.",
          punti: [
            "altezza e corporatura",
            "capelli e occhi",
            "un segno particolare o un vestito",
            "due aggettivi sul carattere",
          ],
          modello:
            "Hi Jack! I'm quite tall and slim, with short curly dark hair and brown eyes. I wear glasses and I'll be wearing a green jacket. I'll wait for you by the ticket machines. By the way, people say I'm easy-going, but I'm a bit shy at first, so you'll have to do most of the talking!",
          spiegazione:
            "Controlla hair al singolare, l'ordine degli aggettivi (short curly dark) e l'uso di with per unire i particolari.",
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
