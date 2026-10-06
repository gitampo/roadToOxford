import type { Contesto } from ".";

// I contesti di livello A1
export const CONTESTI_A1: Contesto[] = [
  {
    id: "a1-presentarsi",
    livello: "A1",
    contesto:
      "Sei a una festa di benvenuto a Oxford. Una ragazza ti sorride e ti chiede come ti chiami. Ti chiami Marco.",
    consegna: "Rispondi dicendo il tuo nome.",
    soluzioni: [
      "My name is Marco.",
      "I'm Marco.",
      "I am Marco.",
      "My name's Marco.",
    ],
    tempo: "present simple",
    parole: [
      ["mio / mia", "my"],
      ["nome", "name"],
      ["io", "I"],
    ],
    suggerimenti: [
      "Stai dicendo chi sei: un fatto stabile, non un'azione. Quale verbo inglese corrisponde a «essere»? E ricorda che «mi chiamo» in inglese si costruisce in modo diverso dall'italiano.",
      "Ti serve il present simple del verbo «essere». Puoi partire dal tuo nome («il mio nome è...») oppure da te stesso («io sono...»).",
    ],
    simile: "My brother is Luca.",
    spiegazione:
      "Per presentarsi si usa to be al present simple: My name is... oppure I'm...",
    lezione: "lezione 2{1}",
  },
  {
    id: "a1-eta",
    livello: "A1",
    contesto:
      "Il tuo nuovo compagno di corso ti chiede quanti anni hai. Hai diciannove anni.",
    consegna: "Rispondi dicendo la tua età.",
    soluzioni: [
      "I'm nineteen.",
      "I am nineteen.",
      "I'm 19.",
      "I am 19.",
      "I'm nineteen years old.",
      "I am nineteen years old.",
      "I'm 19 years old.",
      "I am 19 years old.",
    ],
    tempo: "present simple",
    parole: [["diciannove", "nineteen (19)"]],
    suggerimenti: [
      "Attenzione alla trappola italiana: in italiano gli anni si «hanno». In inglese con quale verbo si dice l'età?",
      "Present simple di quel verbo, alla prima persona. Dopo il numero puoi aggiungere un'espressione che vuol dire «di età», oppure niente: ma mai la sola parola per «anni».",
    ],
    simile: "My sister is twelve years old.",
    spiegazione:
      "L'età si dice con to be: I'm 19 (years old). «I have 19 years» è l'errore tipico degli italiani.",
    lezione: "lezione 2{8}",
  },
  {
    id: "a1-routine",
    livello: "A1",
    contesto:
      "Un amico inglese ti chiede come vai all'università. Tutti i giorni prendi l'autobus.",
    consegna: "Digli che vai all'università in autobus ogni giorno.",
    soluzioni: [
      "I go to university by bus every day.",
      "Every day I go to university by bus.",
      "I take the bus to university every day.",
      "I go to the university by bus every day.",
    ],
    tempo: "present simple",
    parole: [
      ["andare", "go"],
      ["università", "university"],
      ["autobus", "bus"],
      ["prendere (un mezzo)", "take"],
      ["ogni giorno", "every day"],
    ],
    suggerimenti: [
      "Lo fai adesso, una volta sola o sempre? Quale tempo inglese si usa per le abitudini?",
      "Present simple, prima persona: soggetto + verbo base. Per il mezzo di trasporto l'inglese non usa «con», ma un'altra preposizione, e senza articolo.",
    ],
    simile: "She goes to work by train every morning.",
    spiegazione:
      "Le abitudini vogliono il present simple; il mezzo di trasporto si dice con by + nome senza articolo.",
    lezione: "lezione 10{1}",
  },
  {
    id: "a1-adesso",
    livello: "A1",
    contesto:
      "Tua madre ti telefona. Sei in camera tua e in questo momento stai studiando per l'esame.",
    consegna: "Dille che cosa stai facendo adesso.",
    soluzioni: [
      "I'm studying for my exam.",
      "I am studying for my exam.",
      "I'm studying for the exam.",
      "I am studying for the exam.",
      "I'm studying.",
      "I am studying.",
    ],
    tempo: "present continuous",
    parole: [
      ["studiare", "study"],
      ["esame", "exam"],
      ["per (l'esame)", "for"],
      ["il mio / la mia", "my"],
    ],
    suggerimenti: [
      "L'azione sta succedendo nel momento in cui parli, o è un'abitudine? Quale tempo descrive ciò che accade proprio adesso?",
      "Present continuous: soggetto + forma di «essere» + verbo con -ing. Attenzione a come si scrive l'-ing di quel verbo (finisce in -y).",
    ],
    simile: "I'm cooking dinner right now.",
    spiegazione:
      "Per un'azione in corso nel momento in cui parli si usa il present continuous: am/is/are + -ing.",
    lezione: "lezione 12{1}",
  },
  {
    id: "a1-piacere",
    livello: "A1",
    contesto:
      "Al bar ti offrono un tè. Tu preferisci di gran lunga il caffè, il tè non ti piace.",
    consegna: "Di' gentilmente che non ti piace il tè.",
    soluzioni: [
      "I don't like tea.",
      "I do not like tea.",
      "Sorry, I don't like tea.",
      "I'm sorry, I don't like tea.",
      "No thanks, I don't like tea.",
      "No, thank you, I don't like tea.",
    ],
    tempo: "present simple",
    parole: [
      [
        "piacere",
        "like",
        "in inglese il soggetto è chi prova il gusto: «mi piace» → «io» + like",
      ],
      ["tè", "tea"],
      ["scusa / mi dispiace", "sorry"],
      ["no, grazie", "no, thank you / no thanks"],
    ],
    suggerimenti: [
      "Esprimi un gusto, che vale sempre e non solo adesso. Quale tempo si usa per i gusti? E come si fa la sua forma negativa?",
      "Nella negativa del present simple serve un ausiliare + not + verbo base. Parli del tè in generale: serve l'articolo?",
    ],
    simile: "I don't like horror films.",
    spiegazione:
      "La negativa del present simple si fa con do not / don't + verbo base. Like non va al continuous.",
    lezione: "lezione 10{4}",
  },
  {
    id: "a1-ce",
    livello: "A1",
    contesto:
      "Un turista ti chiede se vicino c'è una farmacia. Sai che ce n'è una in fondo alla strada.",
    consegna: "Digli che c'è una farmacia in fondo alla strada.",
    soluzioni: [
      "There is a pharmacy at the end of the street.",
      "There's a pharmacy at the end of the street.",
      "There is a chemist's at the end of the street.",
      "There's a chemist's at the end of the street.",
      "There is a pharmacy at the end of the road.",
      "There's a pharmacy at the end of the road.",
    ],
    tempo: "present simple",
    parole: [
      ["farmacia", "pharmacy / chemist's"],
      ["in fondo a", "at the end of"],
      ["strada", "street / road"],
    ],
    suggerimenti: [
      "Vuoi dire che una cosa esiste in un certo posto («c'è»). In inglese non si usa «it is»: quale espressione si usa?",
      "L'espressione per «c'è» è fatta da un avverbio di luogo + il verbo «essere» al singolare. Poi: «una» + il negozio, e infine il luogo («alla fine della strada»).",
    ],
    simile: "There's a supermarket next to the station.",
    spiegazione:
      "C'è / ci sono = there is / there are. In inglese britannico la farmacia è spesso «the chemist's».",
    lezione: "lezione 7{1}",
  },
  {
    id: "a1-capacita",
    livello: "A1",
    contesto:
      "Il professore di musica chiede chi sa suonare uno strumento. Tu suoni la chitarra da anni.",
    consegna: "Di' che sai suonare la chitarra.",
    soluzioni: ["I can play the guitar.", "I can play guitar."],
    tempo: "can",
    parole: [
      ["suonare (uno strumento)", "play"],
      ["chitarra", "guitar"],
    ],
    suggerimenti: [
      "Vuoi esprimere una capacità, qualcosa che sai fare. Quale verbo modale si usa per «saper fare»?",
      "Modale + verbo base, senza «to» e senza -s. Con gli strumenti musicali l'inglese di solito mette l'articolo determinativo.",
    ],
    simile: "She can speak three languages.",
    spiegazione:
      "Can + verbo base esprime la capacità; dopo can niente to e niente -s.",
    lezione: "lezione 25{1}",
  },
  {
    id: "a1-ordine",
    livello: "A1",
    contesto:
      "È una giornata ventosa e la finestra è aperta. I fogli volano dappertutto. Chiedi al tuo compagno di chiuderla.",
    consegna: "Usa una frase all'imperativo, con «please».",
    soluzioni: [
      "Close the window, please.",
      "Please close the window.",
      "Please, close the window.",
      "Shut the window, please.",
    ],
    tempo: "imperativo",
    parole: [
      ["chiudere", "close / shut"],
      ["finestra", "window"],
      ["per favore", "please"],
    ],
    suggerimenti: [
      "Stai dando un ordine, o facendo una richiesta diretta. Quale modo verbale si usa? Serve il soggetto?",
      "Imperativo: il verbo alla forma base, senza soggetto, poi la cosa da chiudere. La parola di cortesia può stare all'inizio o alla fine.",
    ],
    simile: "Open the door, please.",
    spiegazione:
      "L'imperativo inglese è la forma base del verbo, senza soggetto; please lo rende gentile.",
    lezione: "lezione 19{1}",
  },
  {
    id: "a1-provenienza",
    livello: "A1",
    contesto:
      "Primo giorno del corso di lingua. L'insegnante gira tra i banchi e chiede a ciascuno da dove viene. Tu sei italiano.",
    consegna: "Di' che vieni dall'Italia.",
    soluzioni: [
      "I'm from Italy.",
      "I am from Italy.",
      "I come from Italy.",
      "I'm Italian.",
      "I am Italian.",
    ],
    tempo: "present simple",
    parole: [
      ["Italia", "Italy"],
      ["italiano (nazionalità)", "Italian", "sempre con la maiuscola"],
      ["venire", "come"],
    ],
    suggerimenti: [
      "La tua provenienza è un fatto stabile, non cambia da un giorno all'altro. Quale tempo si usa per i fatti che valgono sempre?",
      "La forma più comune usa il verbo «essere» + una preposizione che indica l'origine + il paese. In alternativa: «essere» + l'aggettivo di nazionalità, che in inglese si scrive con la maiuscola.",
    ],
    simile: "She's from Spain.",
    spiegazione:
      "Per la provenienza si dice I'm from + paese (oppure I come from). Gli aggettivi di nazionalità vogliono sempre la maiuscola: Italian, English, Spanish.",
    lezione: "S1{5}",
  },
  {
    id: "a1-professione",
    livello: "A1",
    contesto:
      "In treno verso Londra, il signore seduto accanto a te attacca bottone e ti chiede che lavoro fai. Non lavori ancora: sei uno studente.",
    consegna: "Rispondi che sei uno studente.",
    soluzioni: [
      "I'm a student.",
      "I am a student.",
      "I'm a university student.",
      "I am a university student.",
    ],
    tempo: "present simple",
    parole: [
      ["studente", "student"],
      ["universitario (studente)", "university student"],
    ],
    suggerimenti: [
      "Stai dicendo chi sei, una condizione che dura nel tempo. Quale verbo e quale tempo servono?",
      "Present simple del verbo «essere». Attenzione: in italiano diciamo «sono studente» senza articolo, ma in inglese davanti a una professione al singolare l'articolo indeterminativo è obbligatorio.",
    ],
    simile: "My mother is a nurse.",
    spiegazione:
      "Con le professioni al singolare serve sempre a/an: I'm a student, she's an engineer. «I'm student» è un errore tipico degli italiani.",
    lezione: "lezione 3{3}",
  },
  {
    id: "a1-fratelli",
    livello: "A1",
    contesto:
      "Mostri a una nuova amica la foto della tua famiglia sul telefono. Lei ti chiede se hai fratelli. Ne hai due, entrambi maschi.",
    consegna: "Dille che hai due fratelli.",
    soluzioni: [
      "I've got two brothers.",
      "I have got two brothers.",
      "I have two brothers.",
    ],
    tempo: "have got|present simple",
    parole: [
      ["fratello", "brother", "«fratelli» misti (maschi e femmine) si dice siblings"],
      ["due", "two"],
    ],
    suggerimenti: [
      "Parli di un possesso, di qualcosa che «hai» in modo stabile. Quale verbo inglese si usa per «avere» nel senso di possedere, anche per la famiglia?",
      "In inglese britannico si usa spesso have + got (con la forma contratta dopo il soggetto); va bene anche il solo have al present simple. Poi il numero e il nome al plurale.",
    ],
    simile: "She's got three cousins.",
    spiegazione:
      "Have got (o have) esprime il possesso, anche per i familiari. Brothers sono solo fratelli maschi; per fratelli e sorelle insieme si usa siblings.",
    lezione: "lezione 6{5}",
  },
  {
    id: "a1-ci-sono",
    livello: "A1",
    contesto:
      "Prenoti una camera in un piccolo B&B di Oxford per te e un amico. Al telefono, la proprietaria ti descrive la stanza: ha due letti singoli.",
    consegna:
      "Più tardi riferisci all'amico che nella stanza ci sono due letti.",
    soluzioni: [
      "There are two beds in the room.",
      "There are two single beds in the room.",
      "In the room there are two beds.",
      "There are two beds in our room.",
    ],
    tempo: "present simple",
    parole: [
      ["letto", "bed"],
      ["singolo (letto)", "single"],
      ["stanza / camera", "room"],
    ],
    suggerimenti: [
      "Vuoi dire che delle cose esistono in un luogo («ci sono»). Le cose sono una o più di una? La forma cambia.",
      "L'espressione per «ci sono» è fatta dallo stesso avverbio di luogo di «c'è» + il verbo «essere» al plurale. Poi il numero, il nome al plurale e il luogo.",
    ],
    simile: "There are three windows in the kitchen.",
    spiegazione:
      "C'è = there is (singolare), ci sono = there are (plurale). Il verbo si accorda con quello che viene dopo.",
    lezione: "lezione 7{1}",
  },
  {
    id: "a1-terza-persona",
    livello: "A1",
    contesto:
      "Un compagno di corso ti chiede che lavoro fa tua sorella. Lei è infermiera e lavora in un ospedale.",
    consegna: "Rispondi che tua sorella lavora in un ospedale.",
    soluzioni: [
      "My sister works in a hospital.",
      "She works in a hospital.",
      "My sister works at a hospital.",
      "She works at a hospital.",
      "My sister works in the hospital.",
    ],
    tempo: "present simple",
    parole: [
      ["sorella", "sister"],
      ["lavorare", "work"],
      ["ospedale", "hospital"],
    ],
    suggerimenti: [
      "Il lavoro di tua sorella è una situazione stabile, non un'azione di questo momento. Quale tempo serve? E attenzione al soggetto: non sei tu.",
      "Present simple: con he, she, it (e con «mia sorella») il verbo prende una lettera in più alla fine. Poi la preposizione di luogo e «un ospedale».",
    ],
    simile: "My father teaches at a school.",
    spiegazione:
      "Al present simple la terza persona singolare (he, she, it, my sister...) aggiunge -s: she works. È l'errore più frequente dei principianti.",
    lezione: "lezione 10{2}",
  },
  {
    id: "a1-frequenza",
    livello: "A1",
    contesto:
      "La tua coinquilina inglese nota che ogni mattina, senza eccezioni, ti prepari una moka di caffè. Ti chiede se è un'abitudine.",
    consegna: "Dille che bevi sempre il caffè la mattina.",
    soluzioni: [
      "I always drink coffee in the morning.",
      "I always have coffee in the morning.",
      "I always drink coffee in the mornings.",
      "In the morning I always drink coffee.",
    ],
    tempo: "present simple",
    parole: [
      ["bere", "drink"],
      ["prendere (un caffè)", "have"],
      ["caffè", "coffee"],
      ["la mattina", "in the morning"],
    ],
    suggerimenti: [
      "È un'abitudine che si ripete ogni giorno. Quale tempo serve? E con quale parola dici «sempre»?",
      "Present simple. L'avverbio di frequenza va in una posizione precisa: tra il soggetto e il verbo principale (con «essere» invece va dopo). Parli del caffè in generale: serve l'articolo?",
    ],
    simile: "He usually walks to work.",
    spiegazione:
      "Gli avverbi di frequenza (always, usually, often, never) vanno prima del verbo principale: I always drink. Coffee in generale non vuole l'articolo.",
    lezione: "lezione 11{2}",
  },
  {
    id: "a1-domanda",
    livello: "A1",
    contesto:
      "Sei in un ostello a Edimburgo. Accanto a te c'è un ragazzo che ascolta musica italiana. Vorresti sapere se parla la tua lingua.",
    consegna: "Chiedigli se parla italiano.",
    soluzioni: [
      "Do you speak Italian?",
      "Can you speak Italian?",
      "Excuse me, do you speak Italian?",
    ],
    tempo: "present simple|can",
    parole: [
      ["parlare (una lingua)", "speak"],
      ["italiano (la lingua)", "Italian", "sempre con la maiuscola"],
      ["scusa (per attirare l'attenzione)", "excuse me"],
    ],
    suggerimenti: [
      "Gli chiedi una capacità stabile, non che cosa sta facendo ora. Quale tempo si usa? E come si fa una domanda con quel tempo?",
      "Nelle domande del present simple serve un ausiliare all'inizio, prima del soggetto; poi il verbo alla forma base. In italiano basta cambiare l'intonazione, in inglese no.",
    ],
    simile: "Do you like football?",
    spiegazione:
      "Le domande al present simple si formano con do/does + soggetto + verbo base: Do you speak...? «You speak Italian?» con la sola intonazione è informale e poco corretto.",
    lezione: "lezione 10{5}",
  },
  {
    id: "a1-essere-negativo",
    livello: "A1",
    contesto:
      "Un amico passa a trovare la tua coinquilina, Emma. Lei è uscita da un'ora e tu sei solo in casa.",
    consegna: "Digli che Emma non è a casa.",
    soluzioni: [
      "Emma isn't at home.",
      "Emma is not at home.",
      "She isn't at home.",
      "She is not at home.",
      "She's not at home.",
      "Emma isn't home.",
      "Sorry, Emma isn't at home.",
      "Sorry, she isn't here.",
      "She isn't here.",
    ],
    tempo: "present simple",
    parole: [
      ["a casa", "at home / home"],
      ["qui", "here"],
      ["mi dispiace", "sorry"],
    ],
    suggerimenti: [
      "Descrivi dove si trova una persona adesso, con il verbo «essere». Come si fa la negativa di «essere»: serve un ausiliare?",
      "Con «essere» non serve nessun ausiliare: basta mettere la negazione subito dopo il verbo (anche in forma contratta). «A casa» in inglese ha una preposizione diversa da «in».",
    ],
    simile: "Tom isn't at work today.",
    spiegazione:
      "To be fa la negativa da solo: is not / isn't, senza do. «Emma doesn't be at home» è sbagliato. A casa = at home.",
    lezione: "lezione 2{3}",
  },
  {
    id: "a1-vorrei",
    livello: "A1",
    contesto:
      "Sei in un caffè di Covered Market di Oxford. Il barista ti sorride e chiede: «What can I get you?» Hai voglia di un tè.",
    consegna: "Ordina gentilmente un tè.",
    soluzioni: [
      "I'd like a tea, please.",
      "I would like a tea, please.",
      "I'd like a cup of tea, please.",
      "I would like a cup of tea, please.",
      "Could I have a tea, please?",
      "Could I have a cup of tea, please?",
      "Can I have a tea, please?",
      "Can I have a cup of tea, please?",
    ],
    tempo: "conditional|can|could",
    parole: [
      ["tè", "tea"],
      ["una tazza di", "a cup of"],
      ["per favore", "please"],
    ],
    suggerimenti: [
      "Non dici che il tè ti piace in generale: chiedi qualcosa adesso, in modo cortese. Quale forma corrisponde all'italiano «vorrei»?",
      "La forma cortese è un modale al condizionale + il verbo che vuol dire «piacere», poi quello che chiedi. In alternativa, una domanda: modale + io + «avere».",
    ],
    simile: "I'd like a glass of water, please.",
    spiegazione:
      "I'd like (= I would like) significa «vorrei»: è la formula per ordinare. «I like a tea» significa «mi piace il tè», ed è sbagliato qui.",
    lezione: "lezione 20{4}",
  },
  {
    id: "a1-permesso",
    livello: "A1",
    contesto:
      "Durante una lezione fa caldissimo e l'aula è senza aria. La finestra è vicina al tuo banco.",
    consegna: "Chiedi al professore se puoi aprire la finestra.",
    soluzioni: [
      "Can I open the window?",
      "Could I open the window?",
      "Can I open the window, please?",
      "Could I open the window, please?",
      "Excuse me, can I open the window?",
    ],
    tempo: "can|could",
    parole: [
      ["aprire", "open"],
      ["finestra", "window"],
      ["per favore", "please"],
    ],
    suggerimenti: [
      "Chiedi un permesso. Quale verbo modale si usa per chiedere «posso...?»",
      "Nella domanda il modale va prima del soggetto, poi il verbo base senza «to». Esiste anche una versione più cortese dello stesso modale.",
    ],
    simile: "Can I use your phone?",
    spiegazione:
      "Per chiedere il permesso: Can I + verbo base? Could I...? è più cortese. Niente to dopo can/could.",
    lezione: "lezione 25{3}",
  },
  {
    id: "a1-lets",
    livello: "A1",
    contesto:
      "Venerdì sera, tu e i tuoi compagni di corso avete finito gli esami. Qualcuno chiede: «What shall we do?» Tu proponi il pub.",
    consegna: "Proponi a tutti di andare al pub.",
    soluzioni: [
      "Let's go to the pub!",
      "Let's go to the pub.",
      "Let us go to the pub.",
      "Let's go to the pub tonight!",
    ],
    tempo: "imperativo",
    parole: [
      ["andare", "go"],
      ["il pub", "the pub"],
      ["stasera", "tonight"],
    ],
    suggerimenti: [
      "È una proposta che include anche te: «andiamo!». Quale forma dell'imperativo si usa per la prima persona plurale?",
      "Si usa una parola speciale (con l'apostrofo) seguita dal verbo base, senza «to». Il pub vuole l'articolo determinativo.",
    ],
    simile: "Let's have a break.",
    spiegazione:
      "Let's + verbo base è l'imperativo della prima persona plurale («andiamo», «facciamo»): è il modo più naturale per proporre qualcosa.",
    lezione: "lezione 19{3}",
  },
  {
    id: "a1-divieto",
    livello: "A1",
    contesto:
      "Stai cucinando con il figlio piccolo della famiglia che ti ospita. Il bambino allunga la mano verso il forno caldissimo.",
    consegna: "Digli di non toccare il forno.",
    soluzioni: [
      "Don't touch the oven!",
      "Do not touch the oven!",
      "Don't touch it!",
      "Don't touch the oven, it's hot!",
      "Don't touch it, it's hot!",
    ],
    tempo: "imperativo",
    parole: [
      ["toccare", "touch"],
      ["forno", "oven"],
      ["caldo (che scotta)", "hot"],
    ],
    suggerimenti: [
      "È un ordine urgente, un divieto rivolto direttamente a una persona. Che modo verbale si usa per dare ordini?",
      "Imperativo negativo: un ausiliare con la negazione (contratti insieme) + verbo base. Non serve il soggetto.",
    ],
    simile: "Don't open the door!",
    spiegazione:
      "L'imperativo negativo si fa con don't + verbo base, uguale per tutti: Don't touch! In inglese non si usa l'infinito come in italiano («non toccare»).",
    lezione: "lezione 19{2}",
  },
  {
    id: "a1-cosa-fai",
    livello: "A1",
    contesto:
      "Telefoni al tuo amico Jack. Lui risponde senza fiato e dietro di lui senti un gran rumore e della musica.",
    consegna: "Chiedigli che cosa sta facendo.",
    soluzioni: [
      "What are you doing?",
      "Jack, what are you doing?",
      "What are you doing now?",
      "What are you doing right now?",
    ],
    tempo: "present continuous",
    parole: [
      ["fare", "do"],
      ["adesso / proprio ora", "now / right now"],
    ],
    suggerimenti: [
      "Gli chiedi di un'azione in corso in questo preciso momento. Quale tempo si usa?",
      "Present continuous in forma di domanda: parola interrogativa + forma di «essere» + soggetto + verbo con -ing.",
    ],
    simile: "Where are you going?",
    spiegazione:
      "Per un'azione in corso adesso: What are you doing? «What do you do?» significa invece «che lavoro fai?».",
    lezione: "lezione 12{4}",
  },
  {
    id: "a1-genitivo",
    livello: "A1",
    contesto:
      "Davanti al college un ragazzo vuole spostare una bici rossa che blocca l'ingresso. Tu sai che è di tuo fratello, che studia lì.",
    consegna: "Digli che quella è la bici di tuo fratello.",
    soluzioni: [
      "That's my brother's bike.",
      "That is my brother's bike.",
      "It's my brother's bike.",
      "It is my brother's bike.",
      "That's my brother's bicycle.",
      "It's my brother's bicycle.",
    ],
    tempo: "present simple",
    parole: [
      ["fratello", "brother"],
      ["bici", "bike / bicycle"],
    ],
    suggerimenti: [
      "Indichi una cosa e dici di chi è. Il tempo è semplice: quale? La difficoltà è il possesso: in inglese «la bici di mio fratello» si costruisce al contrario.",
      "Prima il possessore, poi apostrofo + s, poi la cosa posseduta, senza articolo e senza «of». Per indicare una cosa lontana: il dimostrativo + «essere».",
    ],
    simile: "This is my friend's car.",
    spiegazione:
      "Il genitivo sassone: possessore + 's + cosa posseduta (my brother's bike). Con le persone è molto più naturale di «the bike of my brother».",
    lezione: "lezione 5{6}",
  },
  {
    id: "a1-ora",
    livello: "A1",
    contesto:
      "Alla fermata dell'autobus una signora anziana ti chiede l'ora. Guardi l'orologio: sono le sette e mezza.",
    consegna: "Dille che ore sono.",
    soluzioni: [
      "It's half past seven.",
      "It is half past seven.",
      "It's seven thirty.",
      "It is seven thirty.",
    ],
    tempo: "present simple",
    parole: [
      ["mezza (ora)", "half"],
      ["sette", "seven"],
      ["trenta", "thirty"],
    ],
    suggerimenti: [
      "Dici l'ora di adesso con il verbo «essere». In inglese le frasi sull'ora hanno sempre un soggetto: quale, visto che non è una persona?",
      "Soggetto impersonale + «essere» + l'ora. All'inglese britannico: prima la frazione, poi una preposizione che significa «dopo», poi l'ora. Oppure, più semplice: l'ora seguita dai minuti.",
    ],
    simile: "It's quarter past nine.",
    spiegazione:
      "L'ora si dice con it's: It's half past seven (le sette e mezza) oppure It's seven thirty. Mai «They are seven»: il soggetto è sempre it.",
    lezione: "lezione 8{5}",
  },
  {
    id: "a1-saluto",
    livello: "A1",
    contesto:
      "Sono le nove di mattina. Entri nella segreteria del college e la segretaria, che hai conosciuto ieri, alza gli occhi dal computer.",
    consegna: "Salutala e chiedile come sta.",
    soluzioni: [
      "Good morning! How are you?",
      "Good morning, how are you?",
      "Hello! How are you?",
      "Hi! How are you?",
      "Good morning! How are you today?",
    ],
    tempo: "present simple",
    parole: [
      ["buongiorno (di mattina)", "good morning"],
      ["ciao / salve", "hello / hi"],
      ["oggi", "today"],
    ],
    suggerimenti: [
      "Le chiedi come sta in questo momento, ma la domanda si fa con il verbo «essere», non con «stare». Quale tempo si usa con «essere» per una condizione di adesso?",
      "Prima il saluto adatto all'ora del giorno. Poi la domanda: parola interrogativa che significa «come» + «essere» (seconda persona) + «tu».",
    ],
    simile: "Good afternoon! How is your mother?",
    spiegazione:
      "«Come stai?» si dice How are you? con to be: in inglese non esiste un verbo «stare» separato. Good morning si usa fino a mezzogiorno.",
    lezione: "S1{2}",
  },
  {
    id: "a1-anche-tu",
    livello: "A1",
    contesto:
      "Alla Freshers' Fair un ragazzo ti chiede se sei uno studente di Oxford. Gli rispondi di sì, e vuoi sapere se lo è anche lui.",
    consegna: "Chiedigli se anche lui è uno studente.",
    soluzioni: [
      "Are you a student too?",
      "Are you a student as well?",
      "Are you a student here too?",
      "And you? Are you a student too?",
      "Are you also a student?",
    ],
    tempo: "present simple",
    parole: [
      ["studente", "student"],
      ["anche (in fondo alla frase)", "too / as well"],
      ["qui", "here"],
    ],
    suggerimenti: [
      "Gli chiedi chi è, con il verbo «essere». Come si fa una domanda con «essere»: serve un ausiliare?",
      "Con «essere» basta invertire: prima il verbo, poi il soggetto. Ricorda l'articolo davanti a «studente»; «anche» si mette alla fine della domanda.",
    ],
    simile: "Is she a teacher too?",
    spiegazione:
      "Le domande con to be si fanno invertendo verbo e soggetto (Are you...?), senza do. Too e as well vanno in fondo alla frase.",
    lezione: "lezione 2{4}",
  },
  {
    id: "a1-dove-abiti",
    livello: "A1",
    contesto:
      "Durante una pausa tra le lezioni chiacchieri con una compagna di corso. Vorresti sapere in che zona di Oxford abita.",
    consegna: "Chiedile dove abita.",
    soluzioni: [
      "Where do you live?",
      "Where do you live in Oxford?",
      "So, where do you live?",
    ],
    tempo: "present simple",
    parole: [
      ["abitare / vivere", "live"],
      ["dove", "where"],
    ],
    suggerimenti: [
      "Dove abita è una situazione stabile, non un'azione di adesso. Quale tempo serve, e come si costruisce la domanda?",
      "Parola interrogativa che significa «dove» + l'ausiliare del present simple + soggetto + verbo base. In italiano manca l'ausiliare, in inglese è obbligatorio.",
    ],
    simile: "Where does your brother work?",
    spiegazione:
      "Le domande al present simple vogliono do/does: Where do you live? «Where you live?» è sbagliato.",
    lezione: "lezione 10{5}",
  },
  {
    id: "a1-spelling",
    livello: "A1",
    contesto:
      "Al telefono con la segreteria del corso devi dare il nome della tua tutor, la professoressa Featherstonehaugh. Non hai idea di come si scriva quel cognome.",
    consegna: "Chiedi all'impiegato come si scrive il cognome.",
    soluzioni: [
      "How do you spell it?",
      "How do you spell her surname?",
      "How do you spell that?",
      "Sorry, how do you spell it?",
      "How do you spell her name?",
    ],
    tempo: "present simple",
    parole: [
      ["fare lo spelling / scrivere lettera per lettera", "spell"],
      ["cognome", "surname"],
      ["come", "how"],
    ],
    suggerimenti: [
      "È una domanda generale («come si scrive?»), non un'azione in corso. Quale tempo? Attenzione: l'italiano usa il «si» impersonale, l'inglese no.",
      "Parola interrogativa per «come» + ausiliare del present simple + il «tu» generico + il verbo che significa «dire le lettere di una parola» + la parola di cui chiedi.",
    ],
    simile: "How do you pronounce this word?",
    spiegazione:
      "Il «si» impersonale italiano diventa spesso you generico: come si scrive? = How do you spell it? Spell significa dire o scrivere le lettere di una parola.",
    lezione: "S9{5}",
  },
  {
    id: "a1-plurale-irregolare",
    livello: "A1",
    contesto:
      "Fai da babysitter per una famiglia inglese. La mamma ti telefona per sapere dove siete. Sei al parco con i suoi tre bambini, che giocano sulle altalene.",
    consegna: "Dille che i tre bambini sono al parco con te.",
    soluzioni: [
      "The three children are in the park with me.",
      "The children are in the park with me.",
      "The three children are at the park with me.",
      "The children are at the park with me.",
      "The kids are in the park with me.",
    ],
    tempo: "present simple",
    parole: [
      ["bambino / bambini", "child / children", "plurale irregolare"],
      ["parco", "park"],
      ["con me", "with me"],
    ],
    suggerimenti: [
      "Dici dove si trovano i bambini adesso, con il verbo «essere». Quale tempo? E attenzione: il plurale di «bambino» in inglese non si fa con -s.",
      "Il plurale irregolare di child + «essere» al plurale + il luogo + «con» + il pronome complemento di «io».",
    ],
    simile: "The women are in the kitchen.",
    spiegazione:
      "Child ha il plurale irregolare children (come man → men, woman → women, person → people). «Childs» non esiste.",
    lezione: "lezione 4{4}",
  },
  {
    id: "a1-suo-di-lei",
    livello: "A1",
    contesto:
      "Mostri a un amico la foto della tua nuova coinquilina, una ragazza tedesca. Lui ti chiede come si chiama. Si chiama Anna.",
    consegna: "Rispondi che il suo nome è Anna.",
    soluzioni: [
      "Her name is Anna.",
      "Her name's Anna.",
      "She's Anna.",
      "She is Anna.",
    ],
    tempo: "present simple",
    parole: [["nome", "name"]],
    suggerimenti: [
      "Dici chi è, con il verbo «essere». Il problema è «suo»: in italiano non dice se il possessore è un uomo o una donna. In inglese sì: chi è il possessore qui?",
      "Il possessivo che si usa quando il possessore è una donna + «nome» + «essere» + il nome. (Quello per un uomo è un'altra parola.)",
    ],
    simile: "His name is Paul.",
    spiegazione:
      "In inglese il possessivo si accorda con il possessore, non con la cosa: her name (di lei), his name (di lui). L'italiano «suo» non fa questa distinzione.",
    lezione: "lezione 5{3}",
  },
  {
    id: "a1-presentare",
    livello: "A1",
    contesto:
      "Sei al pub con due amiche italiane, Giulia e Sara. Arriva il tuo compagno di corso Tom, che non le conosce. Le indichi con la mano.",
    consegna: "Presentagliele: «Queste sono le mie amiche Giulia e Sara».",
    soluzioni: [
      "These are my friends Giulia and Sara.",
      "These are my friends, Giulia and Sara.",
      "Tom, these are my friends Giulia and Sara.",
      "Tom, these are my friends, Giulia and Sara.",
    ],
    tempo: "present simple",
    parole: [
      ["amica / amiche", "friend / friends"],
      ["mie", "my"],
    ],
    suggerimenti: [
      "Presenti delle persone che sono lì con te, con il verbo «essere». Le persone sono due: che cosa cambia nel dimostrativo e nel verbo?",
      "Il dimostrativo plurale per le cose vicine + «essere» al plurale + il possessivo + «amiche» al plurale + i nomi.",
    ],
    simile: "These are my parents.",
    spiegazione:
      "Per presentare qualcuno si usa this is (una persona) o these are (più persone). These è il plurale di this.",
    lezione: "lezione 15{4}",
  },
  {
    id: "a1-aiutami",
    livello: "A1",
    contesto:
      "Sei appena arrivato all'ostello con una valigia enorme e la tua stanza è al terzo piano, senza ascensore. Il ragazzo della reception è libero.",
    consegna: "Chiedigli se può aiutarti.",
    soluzioni: [
      "Can you help me?",
      "Can you help me, please?",
      "Could you help me?",
      "Could you help me, please?",
      "Can you help me with my suitcase?",
      "Could you help me with my suitcase, please?",
    ],
    tempo: "can|could",
    parole: [
      ["aiutare", "help"],
      ["valigia", "suitcase"],
      ["per favore", "please"],
    ],
    suggerimenti: [
      "Chiedi un favore. Quale modale si usa per chiedere «puoi...?» (e quale per chiederlo in modo più gentile)?",
      "Modale + «tu» + verbo base + il pronome che indica te come complemento (non quello soggetto).",
    ],
    simile: "Can you call me later?",
    spiegazione:
      "Per chiedere un favore: Can you / Could you + verbo base. Dopo il verbo il pronome va in forma complemento: help me, non «help I».",
    lezione: "lezione 16{2}",
  },
  {
    id: "a1-di-chi",
    livello: "A1",
    contesto:
      "Finita la lezione, l'aula si svuota. Su una sedia è rimasto uno zaino blu. Il professore guarda i pochi studenti rimasti.",
    consegna: "Sei il professore: chiedi di chi è questo zaino.",
    soluzioni: [
      "Whose bag is this?",
      "Whose backpack is this?",
      "Whose rucksack is this?",
      "Whose is this bag?",
      "Whose is this?",
    ],
    tempo: "present simple",
    parole: [
      ["zaino", "bag / backpack / rucksack"],
      ["questo", "this"],
    ],
    suggerimenti: [
      "Chiedi a chi appartiene una cosa, con il verbo «essere». C'è una parola interrogativa apposta per «di chi?»: quale?",
      "La parola interrogativa per il possesso + la cosa (senza articolo) + «essere» + il dimostrativo per una cosa vicina.",
    ],
    simile: "Whose car is that?",
    spiegazione:
      "Di chi? = whose, seguito subito dalla cosa: Whose bag is this? Non va confuso con who's (= who is), che si pronuncia uguale.",
    lezione: "lezione 14{4}",
  },
  {
    id: "a1-mio",
    livello: "A1",
    contesto:
      "Al bar, un ragazzo sta per prendere dal tavolo un ombrello rosso. È il tuo: l'hai appoggiato lì un minuto fa.",
    consegna: "Fermalo gentilmente e digli che è tuo.",
    soluzioni: [
      "Sorry, it's mine.",
      "Sorry, that's mine.",
      "Excuse me, that's mine.",
      "Excuse me, it's mine.",
      "Sorry, that umbrella is mine.",
      "Excuse me, that's my umbrella.",
    ],
    tempo: "present simple",
    parole: [
      ["ombrello", "umbrella"],
      ["scusi", "sorry / excuse me"],
    ],
    suggerimenti: [
      "Dici a chi appartiene una cosa, con il verbo «essere». «È mio» da solo, senza il nome della cosa: quale forma del possessivo si usa quando non segue un nome?",
      "Soggetto (pronome o dimostrativo) + «essere» + il pronome possessivo di prima persona, che è diverso dall'aggettivo possessivo «my».",
    ],
    simile: "Is this pen yours?",
    spiegazione:
      "Quando il possessivo sta da solo si usa il pronome: mine, yours, his, hers, ours, theirs. «It's my» è sbagliato: my vuole sempre un nome dopo.",
    lezione: "lezione 14{1}",
  },
  {
    id: "a1-un-po-di-acqua",
    livello: "A1",
    contesto:
      "Hai appena finito una lunga corsa e ti fermi in un caffè. Hai una sete terribile e chiedi al cameriere qualcosa da bere.",
    consegna: "Chiedi un po' d'acqua, per favore.",
    soluzioni: [
      "Can I have some water, please?",
      "Could I have some water, please?",
      "Can I have a glass of water, please?",
      "Could I have a glass of water, please?",
      "Can I have some water?",
    ],
    tempo: "can|could",
    parole: [
      ["acqua", "water", "non numerabile"],
      ["un bicchiere di", "a glass of"],
      ["per favore", "please"],
    ],
    suggerimenti: [
      "Fai una richiesta adesso. Quale modale si usa per chiedere qualcosa («posso avere...?»)?",
      "Modale + io + «avere» alla forma base + la quantità. L'acqua non si conta: niente «a», ma il quantificatore che significa «un po' di», oppure un contenitore che si può contare.",
    ],
    simile: "Can I have some bread, please?",
    spiegazione:
      "Water è non numerabile: some water o a glass of water, mai «a water». Can/Could I have...? è il modo normale per chiedere qualcosa.",
    lezione: "lezione 17{4}",
  },
  {
    id: "a1-quanto-costa",
    livello: "A1",
    contesto:
      "In un negozio di souvenir vicino al Radcliffe Camera vedi una felpa blu dell'università. L'etichetta del prezzo non c'è.",
    consegna: "Chiedi alla commessa quanto costa questa felpa.",
    soluzioni: [
      "How much is this sweatshirt?",
      "How much is this hoodie?",
      "How much is this jumper?",
      "Excuse me, how much is this sweatshirt?",
      "How much does this sweatshirt cost?",
      "How much is it?",
    ],
    tempo: "present simple",
    parole: [
      ["felpa", "sweatshirt / hoodie"],
      ["maglione", "jumper"],
      ["costare", "cost"],
    ],
    suggerimenti: [
      "Chiedi il prezzo attuale: quale tempo? Per i prezzi l'inglese usa un'espressione con «quanto» che vale per le cose non numerabili (come il denaro).",
      "L'espressione per «quanto» + «essere» + il dimostrativo per una cosa vicina + l'oggetto. Oppure la stessa espressione + ausiliare + oggetto + il verbo «costare».",
    ],
    simile: "How much are these shoes?",
    spiegazione:
      "Per chiedere un prezzo: How much is...? (o How much does it cost?). How many si usa per contare le cose, non per i soldi.",
    lezione: "S5{4}",
  },
  {
    id: "a1-quanti",
    livello: "A1",
    contesto:
      "Una tua amica italiana sta pensando di iscriversi al tuo corso di inglese. Al telefono ti chiede quante persone ci sono in classe. Tu fai a lei la stessa domanda per il suo corso attuale.",
    consegna: "Chiedile quanti studenti ci sono nella sua classe.",
    soluzioni: [
      "How many students are there in your class?",
      "How many students are in your class?",
      "How many people are there in your class?",
      "How many people are in your class?",
    ],
    tempo: "present simple",
    parole: [
      ["studente", "student"],
      ["persone", "people"],
      ["classe", "class"],
    ],
    suggerimenti: [
      "Chiedi un numero di cose che si possono contare, in una situazione presente. Quale espressione si usa per «quanti»?",
      "L'espressione per «quanti» + il nome al plurale + la domanda di «ci sono» (verbo prima dell'avverbio) + il luogo.",
    ],
    simile: "How many rooms are there in the house?",
    spiegazione:
      "How many + nome plurale + are there...? chiede il numero di cose numerabili. Con le cose non numerabili si usa how much.",
    lezione: "lezione 7{4}",
  },
  {
    id: "a1-dove-stazione",
    livello: "A1",
    contesto:
      "Sei appena sceso dall'autobus in una città che non conosci, Bath. Devi prendere il treno e vedi una signora con il cane.",
    consegna: "Fermala educatamente e chiedile dov'è la stazione.",
    soluzioni: [
      "Excuse me, where is the station?",
      "Excuse me, where's the station?",
      "Excuse me, where is the train station?",
      "Excuse me, where's the train station?",
      "Where is the station, please?",
      "Excuse me, where is the railway station?",
    ],
    tempo: "present simple",
    parole: [
      ["mi scusi (per fermare qualcuno)", "excuse me"],
      ["stazione (dei treni)", "station / train station / railway station"],
    ],
    suggerimenti: [
      "Chiedi dove si trova un luogo adesso, con il verbo «essere». Come si attira l'attenzione di uno sconosciuto in modo educato?",
      "La formula per fermare qualcuno + parola interrogativa per «dove» + «essere» + il luogo con l'articolo determinativo.",
    ],
    simile: "Excuse me, where is the post office?",
    spiegazione:
      "Excuse me si usa per attirare l'attenzione (prima); sorry per scusarsi (dopo). Where is...? (where's) chiede dove si trova qualcosa.",
    lezione: "S4{1}",
  },
  {
    id: "a1-indicazioni",
    livello: "A1",
    contesto:
      "Un turista ti chiede la strada per il Museo Ashmolean. Sai che deve andare sempre dritto e poi girare a sinistra al semaforo.",
    consegna: "Digli di andare dritto e poi girare a sinistra.",
    soluzioni: [
      "Go straight on and then turn left.",
      "Go straight on and turn left.",
      "Go straight ahead and then turn left.",
      "Go straight ahead and turn left.",
      "Go straight on, then turn left.",
      "Go straight on and then turn left at the traffic lights.",
    ],
    tempo: "imperativo",
    parole: [
      ["andare", "go"],
      ["dritto", "straight on / straight ahead"],
      ["girare", "turn"],
      ["a sinistra", "left"],
      ["semaforo", "traffic lights"],
    ],
    suggerimenti: [
      "Dai istruzioni dirette a una persona. Quale modo verbale si usa per le indicazioni stradali?",
      "Imperativo: verbo base senza soggetto. Due istruzioni collegate da «e poi». «Dritto» e «a sinistra» sono avverbi, senza preposizione.",
    ],
    simile: "Take the second street on the right.",
    spiegazione:
      "Le indicazioni stradali si danno all'imperativo: Go straight on, turn left, take the first right. Niente «you must».",
    lezione: "lezione 19{5}",
  },
  {
    id: "a1-accanto",
    livello: "A1",
    contesto:
      "Un amico ti telefona: deve ritirare un pacco all'ufficio postale ma non lo trova. Tu sai che è proprio accanto alla banca, in Cornmarket Street.",
    consegna: "Digli che l'ufficio postale è accanto alla banca.",
    soluzioni: [
      "The post office is next to the bank.",
      "It's next to the bank.",
      "It is next to the bank.",
      "The post office is right next to the bank.",
      "The post office is beside the bank.",
    ],
    tempo: "present simple",
    parole: [
      ["ufficio postale", "post office"],
      ["banca", "bank"],
    ],
    suggerimenti: [
      "Dici dove si trova un edificio: una situazione stabile, con il verbo «essere». Quale tempo? E quale preposizione di luogo significa «accanto a»?",
      "Il luogo + «essere» + la preposizione di due parole che significa «accanto a» + la banca con l'articolo.",
    ],
    simile: "The café is opposite the library.",
    spiegazione:
      "Accanto a = next to (o beside). Altre preposizioni di luogo: opposite (di fronte a), between (tra), behind (dietro).",
    lezione: "lezione 7{6}",
  },
  {
    id: "a1-sabato",
    livello: "A1",
    contesto:
      "Una compagna di corso ti chiede quando c'è la festa di fine trimestre. È sabato prossimo, ma lei vuole solo sapere il giorno.",
    consegna: "Dille che la festa è sabato.",
    soluzioni: [
      "The party is on Saturday.",
      "The party's on Saturday.",
      "It's on Saturday.",
      "It is on Saturday.",
    ],
    tempo: "present simple",
    parole: [
      ["festa", "party"],
      ["sabato", "Saturday", "i giorni vogliono la maiuscola"],
    ],
    suggerimenti: [
      "Per un evento in programma l'inglese usa spesso il presente di «essere». Il punto difficile è la preposizione: con i giorni della settimana quale si usa?",
      "Soggetto + «essere» + la preposizione dei giorni + il giorno con la maiuscola. In italiano non si mette niente, in inglese sì.",
    ],
    simile: "My exam is on Monday.",
    spiegazione:
      "Con i giorni si usa on: on Saturday, on Monday morning. In con mesi e anni, at con le ore.",
    lezione: "lezione 9{3}",
  },
  {
    id: "a1-alle-nove",
    livello: "A1",
    contesto:
      "Un nuovo studente ti chiede a che ora comincia la lezione di grammatica del lunedì. Comincia alle nove in punto.",
    consegna: "Digli che la lezione comincia alle nove.",
    soluzioni: [
      "The lesson starts at nine.",
      "The lesson starts at nine o'clock.",
      "The lesson starts at 9.",
      "The lesson begins at nine.",
      "It starts at nine.",
      "It starts at nine o'clock.",
      "The class starts at nine.",
    ],
    tempo: "present simple",
    parole: [
      ["lezione", "lesson / class"],
      ["cominciare", "start / begin"],
      ["le nove in punto", "nine o'clock"],
    ],
    suggerimenti: [
      "È un orario fisso, come quelli dei treni e delle lezioni. Quale tempo si usa per gli orari stabiliti? E attenzione al soggetto: è la lezione, terza persona.",
      "Present simple (con la -s della terza persona) + la preposizione delle ore + l'ora.",
    ],
    simile: "The museum opens at ten.",
    spiegazione:
      "Gli orari fissi vogliono il present simple: The lesson starts at nine. Con le ore la preposizione è at.",
    lezione: "lezione 9{4}",
  },
  {
    id: "a1-a-giugno",
    livello: "A1",
    contesto:
      "Tua nonna ti chiede al telefono quando hai l'esame finale. Non sai ancora il giorno preciso, solo il mese: giugno.",
    consegna: "Dille che l'esame è a giugno.",
    soluzioni: [
      "My exam is in June.",
      "My exam's in June.",
      "The exam is in June.",
      "It's in June.",
      "It is in June.",
      "My final exam is in June.",
    ],
    tempo: "present simple",
    parole: [
      ["esame", "exam"],
      ["finale", "final"],
      ["giugno", "June", "i mesi vogliono la maiuscola"],
    ],
    suggerimenti: [
      "Per un evento già in calendario basta il presente di «essere». Con i mesi quale preposizione di tempo si usa?",
      "Soggetto + «essere» + la preposizione dei periodi lunghi (mesi, anni, stagioni) + il mese con la maiuscola.",
    ],
    simile: "Her birthday is in March.",
    spiegazione:
      "In con mesi, anni, stagioni e parti del giorno (in June, in 2025, in summer, in the morning). On con i giorni, at con le ore.",
    lezione: "lezione 9{2}",
  },
  {
    id: "a1-in-questo-periodo",
    livello: "A1",
    contesto:
      "Di solito vivi in un appartamento con altri studenti, ma questo mese, durante un corso estivo, stai da una famiglia inglese. Un amico ti chiede dove abiti.",
    consegna: "Digli che in questo periodo vivi con una famiglia inglese.",
    soluzioni: [
      "I'm living with an English family at the moment.",
      "I am living with an English family at the moment.",
      "I'm living with an English family this month.",
      "I am living with an English family this month.",
      "At the moment I'm living with an English family.",
      "I'm staying with an English family this month.",
      "I'm staying with an English family at the moment.",
    ],
    tempo: "present continuous",
    parole: [
      ["vivere / stare (da qualcuno)", "live / stay"],
      ["famiglia", "family"],
      ["inglese", "English"],
      ["in questo periodo", "at the moment / this month"],
    ],
    suggerimenti: [
      "Non è la tua situazione di sempre: è temporanea, vale solo per questo periodo. Quale tempo si usa per le situazioni temporanee?",
      "Present continuous: «essere» + verbo in -ing. Poi «con» + articolo indeterminativo (attenzione: davanti a una vocale cambia) + l'aggettivo prima del nome.",
    ],
    simile: "She's working in a café this summer.",
    spiegazione:
      "Il present continuous si usa anche per le situazioni temporanee (in questo periodo), non solo per ciò che succede in questo istante.",
    lezione: "lezione 12{5}",
  },
  {
    id: "a1-oggi-invece",
    livello: "A1",
    contesto:
      "Il tuo amico Paul va sempre al lavoro in bici. Oggi però piove a dirotto e lo vedi alla fermata. Un collega ti chiede: «Isn't that Paul? Doesn't he cycle?»",
    consegna:
      "Spiega che di solito va in bici, ma oggi prende l'autobus.",
    soluzioni: [
      "He usually cycles, but today he's taking the bus.",
      "He usually cycles, but today he is taking the bus.",
      "He usually goes by bike, but today he's taking the bus.",
      "He usually goes by bike, but today he is taking the bus.",
      "He usually rides his bike, but today he's taking the bus.",
    ],
    tempo: "present continuous",
    parole: [
      ["andare in bici", "cycle / go by bike / ride a bike"],
      ["di solito", "usually"],
      ["prendere (l'autobus)", "take"],
      ["oggi", "today"],
    ],
    suggerimenti: [
      "Ci sono due idee: un'abitudine (di solito) e un'eccezione di oggi. Quale tempo per ciascuna?",
      "Prima parte: avverbio di frequenza + present simple (terza persona). Seconda parte, dopo «ma oggi»: present continuous, «essere» + verbo in -ing.",
    ],
    simile: "She usually drinks tea, but today she's having coffee.",
    spiegazione:
      "Present simple per le abitudini (he usually cycles), present continuous per quello che succede adesso o oggi in via eccezionale (he's taking the bus).",
    lezione: "lezione 13{1}",
  },
  {
    id: "a1-so",
    livello: "A1",
    contesto:
      "In classe l'insegnante fa una domanda difficile sulla storia di Oxford. Nessuno alza la mano, ma tu la risposta la conosci.",
    consegna: "Di' che tu sai la risposta.",
    soluzioni: [
      "I know the answer.",
      "I know the answer!",
      "I know it.",
      "I know the answer, sir.",
    ],
    tempo: "present simple",
    parole: [
      ["sapere / conoscere", "know"],
      ["risposta", "answer"],
    ],
    suggerimenti: [
      "La conosci proprio adesso: verrebbe voglia di usare il present continuous. Ma «sapere» è un verbo di stato: quale tempo vogliono questi verbi anche quando parli di adesso?",
      "Present simple: soggetto + verbo base + la risposta con l'articolo determinativo.",
    ],
    simile: "I understand the question.",
    spiegazione:
      "I verbi di stato (know, understand, like, want, believe) non vanno al continuous: I know, mai «I'm knowing».",
    lezione: "lezione 13{3}",
  },
  {
    id: "a1-preferisco",
    livello: "A1",
    contesto:
      "La mamma della famiglia che ti ospita ti chiede ogni mattina se vuoi tè o caffè. Vuoi spiegarle una volta per tutte i tuoi gusti: il tè ti piace più del caffè.",
    consegna: "Dille che preferisci il tè al caffè.",
    soluzioni: [
      "I prefer tea to coffee.",
      "I prefer tea.",
      "I like tea more than coffee.",
      "I like tea better than coffee.",
    ],
    tempo: "present simple",
    parole: [
      ["preferire", "prefer"],
      ["tè", "tea"],
      ["caffè", "coffee"],
    ],
    suggerimenti: [
      "È un gusto generale, non una scelta di adesso. Quale tempo? Poi: «preferire A a B»: quale preposizione introduce la seconda cosa?",
      "Soggetto + «preferire» + la prima cosa (senza articolo, in generale) + la stessa preposizione dell'italiano «a» nel senso di direzione + la seconda cosa.",
    ],
    simile: "I prefer summer to winter.",
    spiegazione:
      "Prefer A to B: I prefer tea to coffee (non «than»). Than si usa con i comparativi: I like tea more than coffee.",
    lezione: "lezione 20{6}",
  },
  {
    id: "a1-mi-piace-nuotare",
    livello: "A1",
    contesto:
      "Un amico inglese ti chiede che cosa ti piace fare d'estate in Italia. Adori nuotare nel mare.",
    consegna: "Digli che ti piace nuotare nel mare.",
    soluzioni: [
      "I like swimming in the sea.",
      "I love swimming in the sea.",
      "I like to swim in the sea.",
      "I love to swim in the sea.",
    ],
    tempo: "present simple",
    parole: [
      ["nuotare", "swim"],
      ["mare", "the sea"],
    ],
    suggerimenti: [
      "È un gusto generale, che vale sempre. Quale tempo? E dopo «piacere», quale forma prende il verbo che indica l'attività?",
      "Soggetto + verbo dei gusti + l'attività nella forma in -ing (attenzione: in «nuotare» la consonante finale raddoppia) + «nel mare».",
    ],
    simile: "She likes dancing.",
    spiegazione:
      "Dopo like, love, enjoy, hate l'attività va in -ing: I like swimming (in inglese britannico è la forma più naturale). Il soggetto è chi prova il gusto.",
    lezione: "lezione 20{3}",
  },
  {
    id: "a1-ero-a-casa",
    livello: "A1",
    contesto:
      "La polizia sta facendo domande su un furto avvenuto ieri sera nel tuo palazzo. L'agente ti chiede dove eri. Eri a casa tutta la sera.",
    consegna: "Rispondi che ieri sera eri a casa.",
    soluzioni: [
      "I was at home last night.",
      "I was at home yesterday evening.",
      "Last night I was at home.",
      "I was home last night.",
      "I was at home all evening.",
      "I was at home all evening last night.",
    ],
    tempo: "past simple",
    parole: [
      ["a casa", "at home / home"],
      ["ieri sera", "last night / yesterday evening"],
      ["tutta la sera", "all evening"],
    ],
    suggerimenti: [
      "Ieri sera è un momento del passato, concluso. Qual è il passato del verbo «essere» per la prima persona?",
      "Il passato di «essere» per «io» (è diverso da quello per «tu» e «noi») + «a casa» + l'espressione di tempo.",
    ],
    simile: "We were at the cinema on Saturday.",
    spiegazione:
      "Il passato di to be: I/he/she/it was, you/we/they were. Ieri sera = last night (non «yesterday night»).",
    lezione: "lezione 21{1}",
  },
  {
    id: "a1-eri-alla-festa",
    livello: "A1",
    contesto:
      "Sophie racconta che ieri sera alla festa del college c'era un sacco di gente. Ti sembra di non averla vista, ma non ne sei sicuro.",
    consegna: "Chiedile se lei era alla festa.",
    soluzioni: [
      "Were you at the party?",
      "Were you at the party last night?",
      "Were you at the party too?",
      "Sophie, were you at the party?",
    ],
    tempo: "past simple",
    parole: [
      ["festa", "party"],
      ["ieri sera", "last night"],
    ],
    suggerimenti: [
      "Le chiedi di una situazione passata, con il verbo «essere». Qual è il passato di «essere» con «tu»? E come si fa la domanda?",
      "Con «essere» non serve did: basta mettere il verbo al passato prima del soggetto. Poi la preposizione per gli eventi + la festa.",
    ],
    simile: "Was he at work yesterday?",
    spiegazione:
      "Le domande con was/were si fanno con l'inversione, senza did: Were you at the party? «Did you be» è sbagliato.",
    lezione: "lezione 21{2}",
  },
  {
    id: "a1-traffico",
    livello: "A1",
    contesto:
      "Arrivi alla lezione delle dieci con venti minuti di ritardo. L'insegnante ti guarda. Il tuo autobus è rimasto bloccato in coda per mezz'ora in Botley Road.",
    consegna: "Scusati e spiega che c'era molto traffico.",
    soluzioni: [
      "Sorry, there was a lot of traffic.",
      "I'm sorry, there was a lot of traffic.",
      "Sorry I'm late, there was a lot of traffic.",
      "There was a lot of traffic.",
      "Sorry, there was so much traffic.",
    ],
    tempo: "past simple",
    parole: [
      ["traffico", "traffic", "non numerabile"],
      ["molto (con i non numerabili)", "a lot of"],
      ["scusi", "sorry"],
    ],
    suggerimenti: [
      "Il traffico c'era prima, adesso è finito. Qual è il passato dell'espressione «c'è»?",
      "La stessa espressione di «c'è» con il verbo «essere» al passato (singolare, perché il traffico non si conta) + «molto» + traffico.",
    ],
    simile: "There were a lot of people at the concert.",
    spiegazione:
      "C'era = there was, c'erano = there were. Traffic è non numerabile: a lot of traffic, mai «a traffic» o «traffics».",
    lezione: "lezione 21{5}",
  },
  {
    id: "a1-film-ieri",
    livello: "A1",
    contesto:
      "Un collega ti chiede che cosa hai fatto ieri sera. Sei rimasto a casa e hai guardato un film sul divano.",
    consegna: "Digli che ieri sera hai guardato un film.",
    soluzioni: [
      "I watched a film last night.",
      "Last night I watched a film.",
      "I watched a movie last night.",
      "I watched a film at home last night.",
      "I stayed at home and watched a film.",
    ],
    tempo: "past simple",
    parole: [
      ["guardare", "watch"],
      ["film", "film / movie"],
      ["ieri sera", "last night"],
      ["restare a casa", "stay at home"],
    ],
    suggerimenti: [
      "Ieri sera è un momento del passato, finito. Quale tempo serve? In italiano diciamo «ho guardato», ma in inglese con un momento passato preciso non si usa «have».",
      "Past simple di un verbo regolare: verbo base + la desinenza del passato. Uguale per tutte le persone.",
    ],
    simile: "We played tennis on Sunday.",
    spiegazione:
      "Il passato prossimo italiano con un momento preciso (ieri sera) diventa past simple: I watched. I verbi regolari aggiungono -ed.",
    lezione: "lezione 22{1}",
  },
  {
    id: "a1-comprato",
    livello: "A1",
    contesto:
      "La tua coinquilina nota la giacca nuova che hai addosso. Ti chiede se è nuova. L'hai comprata ieri ai saldi.",
    consegna: "Dille che l'hai comprata ieri.",
    soluzioni: [
      "I bought it yesterday.",
      "Yes, I bought it yesterday.",
      "I bought it yesterday in the sales.",
      "Yes, I bought it yesterday in the sales.",
      "I bought this jacket yesterday.",
    ],
    tempo: "past simple",
    parole: [
      ["comprare", "buy", "verbo irregolare"],
      ["giacca", "jacket"],
      ["ai saldi", "in the sales"],
      ["ieri", "yesterday"],
    ],
    suggerimenti: [
      "Ieri: un'azione finita in un momento preciso del passato. Quale tempo? Il verbo «comprare» è regolare o irregolare?",
      "Past simple irregolare di «comprare» (controlla i paradigmi) + il pronome per la giacca + il momento.",
    ],
    simile: "She found her keys this morning.",
    spiegazione:
      "Buy è irregolare: buy, bought, bought. «I buyed» è un errore comune: i verbi irregolari vanno imparati a memoria.",
    lezione: "lezione 23{2}",
  },
  {
    id: "a1-weekend",
    livello: "A1",
    contesto:
      "È lunedì mattina. Incontri il tuo amico Daniel in biblioteca. Sai che venerdì voleva partire per un weekend fuori città.",
    consegna: "Chiedigli che cosa ha fatto nel fine settimana.",
    soluzioni: [
      "What did you do at the weekend?",
      "What did you do over the weekend?",
      "What did you do on the weekend?",
      "What did you do this weekend?",
      "So, what did you do at the weekend?",
    ],
    tempo: "past simple",
    parole: [
      ["fare", "do"],
      ["fine settimana", "weekend", "nel weekend: at the weekend (britannico)"],
    ],
    suggerimenti: [
      "Il weekend è finito: un periodo passato e concluso. Quale tempo? E come si costruisce una domanda aperta in quel tempo?",
      "Parola interrogativa per «che cosa» + l'ausiliare del passato + soggetto + verbo base (il verbo «fare» compare una volta sola, alla forma base) + il periodo.",
    ],
    simile: "Where did you go on holiday?",
    spiegazione:
      "Domande al past simple: parola interrogativa + did + soggetto + verbo base. What did you do? «What you did?» è sbagliato.",
    lezione: "lezione 24{3}",
  },
  {
    id: "a1-non-ho-capito",
    livello: "A1",
    contesto:
      "Il professore ha appena spiegato velocissimo un esercizio. Tu non hai capito niente. Alla fine ti chiede: «Is everything clear?»",
    consegna: "Rispondi che ti dispiace, ma non hai capito.",
    soluzioni: [
      "Sorry, I didn't understand.",
      "I'm sorry, I didn't understand.",
      "Sorry, I didn't understand that.",
      "Sorry, I didn't understand the exercise.",
      "I'm sorry, but I didn't understand.",
    ],
    tempo: "past simple",
    parole: [
      ["capire", "understand", "verbo irregolare"],
      ["esercizio", "exercise"],
      ["mi dispiace", "sorry / I'm sorry"],
    ],
    suggerimenti: [
      "La spiegazione è finita: «non ho capito» si riferisce a quel momento passato. Quale tempo serve, e come si fa la negativa?",
      "L'ausiliare del passato con la negazione (contratti) + il verbo «capire» alla forma base, non al passato.",
    ],
    simile: "Sorry, I didn't hear you.",
    spiegazione:
      "Negativa del past simple: didn't + verbo base. I didn't understand (non «I didn't understood»). Nel parlato si sente anche I don't understand, riferito a adesso.",
    lezione: "lezione 24{1}",
  },
  {
    id: "a1-chi-ha-mangiato",
    livello: "A1",
    contesto:
      "Ieri hai comprato un pacco di biscotti al cioccolato e l'hai lasciato in cucina. Stamattina il pacco è vuoto. Hai tre coinquilini.",
    consegna: "Chiedi a tutti chi ha mangiato i tuoi biscotti.",
    soluzioni: [
      "Who ate my biscuits?",
      "Who ate my cookies?",
      "Who ate all my biscuits?",
      "OK, who ate my biscuits?",
      "Who has eaten my biscuits?",
    ],
    tempo: "past simple|present perfect",
    parole: [
      ["mangiare", "eat", "verbo irregolare"],
      ["biscotti", "biscuits", "cookies è americano"],
      ["tutti (i biscotti)", "all"],
    ],
    suggerimenti: [
      "È successo nel passato. Ma attenzione: la domanda è sul SOGGETTO (chi ha mangiato?). Quando «chi» è il soggetto, serve l'ausiliare did?",
      "Parola interrogativa «chi» + direttamente il verbo al passato (irregolare) + il complemento. Nessun ausiliare.",
    ],
    simile: "Who broke the window?",
    spiegazione:
      "Quando who è il soggetto non si usa did: Who ate my biscuits? (non «Who did eat»). Did serve solo se who è il complemento: Who did you see?",
    lezione: "lezione 24{5}",
  },
  {
    id: "a1-piu-lentamente",
    livello: "A1",
    contesto:
      "Sei a Newcastle e il signore del negozio parla con un accento fortissimo e velocissimo. Capisci una parola su tre.",
    consegna: "Chiedigli gentilmente se può parlare più lentamente.",
    soluzioni: [
      "Could you speak more slowly, please?",
      "Can you speak more slowly, please?",
      "Could you speak slowly, please?",
      "Sorry, could you speak more slowly?",
      "Could you speak a bit more slowly, please?",
      "Could you talk more slowly, please?",
    ],
    tempo: "could|can",
    parole: [
      ["parlare", "speak / talk"],
      ["lentamente", "slowly"],
      ["un po'", "a bit"],
    ],
    suggerimenti: [
      "Chiedi un favore a uno sconosciuto. Quale modale rende la richiesta più cortese?",
      "Modale cortese + tu + verbo base + «più» + l'avverbio che si forma da «lento» con -ly.",
    ],
    simile: "Could you open the door, please?",
    spiegazione:
      "Could you...? è la richiesta più cortese. «Più lentamente» = more slowly: con gli avverbi in -ly il comparativo si fa con more.",
    lezione: "lezione 25{4}",
  },
  {
    id: "a1-sento-musica",
    livello: "A1",
    contesto:
      "Sono le due di notte. La tua coinquilina ti telefona dalla sua camera, spaventata: crede di aver sentito un rumore. Anche tu senti qualcosa: musica dall'appartamento di sopra.",
    consegna: "Dille che senti della musica.",
    soluzioni: [
      "I can hear music.",
      "I can hear some music.",
      "I can hear music upstairs.",
      "I can hear music from upstairs.",
      "Don't worry, I can hear music.",
    ],
    tempo: "can",
    parole: [
      ["sentire (con le orecchie)", "hear"],
      ["musica", "music", "non numerabile"],
      ["di sopra", "upstairs"],
    ],
    suggerimenti: [
      "La percezione è adesso, ma «sentire» è un verbo dei sensi: non va al continuous. In inglese britannico si usa spesso un modale davanti ai verbi dei sensi. Quale?",
      "Il modale della capacità + il verbo «sentire» alla forma base + la musica (senza articolo).",
    ],
    simile: "I can see the sea from my window.",
    spiegazione:
      "Con see, hear, smell, taste si usa spesso can: I can hear music (= sento della musica). «I'm hearing» è sbagliato.",
    lezione: "lezione 25{6}",
  },
  {
    id: "a1-non-so-nuotare",
    livello: "A1",
    contesto:
      "I tuoi amici vogliono affittare una barca a remi sul Tamigi. Tu hai un po' paura dell'acqua: non hai mai imparato a nuotare.",
    consegna: "Di' che non sai nuotare.",
    soluzioni: [
      "I can't swim.",
      "I cannot swim.",
      "Sorry, I can't swim.",
      "I'm sorry, but I can't swim.",
      "I can't swim very well.",
    ],
    tempo: "can",
    parole: [
      ["nuotare", "swim"],
      ["molto bene", "very well"],
    ],
    suggerimenti: [
      "Parli di una capacità che non hai. Quale modale si usa per «saper fare», e come diventa negativo?",
      "Modale della capacità con la negazione (attenzione: la forma intera si scrive tutta attaccata) + verbo base.",
    ],
    simile: "My dad can't cook.",
    spiegazione:
      "La negativa di can è can't (o cannot, scritto attaccato). Niente do: «I don't can swim» è sbagliato.",
    lezione: "lezione 25{2}",
  },
  {
    id: "a1-piu-grande",
    livello: "A1",
    contesto:
      "Una signora inglese ti chiede se vivere a Londra non sia meglio che a Oxford. Le rispondi che Londra è bella, ma molto più grande e caotica.",
    consegna: "Dille che Londra è più grande di Oxford.",
    soluzioni: [
      "London is bigger than Oxford.",
      "London is much bigger than Oxford.",
      "London's bigger than Oxford.",
      "London is a lot bigger than Oxford.",
    ],
    tempo: "present simple",
    parole: [
      ["grande", "big"],
      ["molto (con i comparativi)", "much / a lot"],
    ],
    suggerimenti: [
      "È un confronto tra due città, un fatto stabile. Quale tempo? E come si fa il comparativo di un aggettivo corto?",
      "Aggettivo corto + la desinenza del comparativo (attenzione: la consonante finale raddoppia) + la parola che introduce il secondo termine («di»).",
    ],
    simile: "My sister is taller than me.",
    spiegazione:
      "Aggettivi corti: -er + than (bigger than). Big raddoppia la g: bigger. «More big» è sbagliato. Il «di» del confronto è than, non «of».",
    lezione: "lezione 26{1}",
  },
  {
    id: "a1-piu-interessante",
    livello: "A1",
    contesto:
      "Avete appena visto al cinema il film tratto dal tuo romanzo preferito. Il tuo amico è entusiasta, tu sei deluso: il libro era molto meglio.",
    consegna: "Digli che il libro è più interessante del film.",
    soluzioni: [
      "The book is more interesting than the film.",
      "The book is much more interesting than the film.",
      "The book's more interesting than the film.",
      "The book is more interesting than the movie.",
    ],
    tempo: "present simple",
    parole: [
      ["libro", "book"],
      ["interessante", "interesting"],
      ["film", "film / movie"],
    ],
    suggerimenti: [
      "È un giudizio generale su due opere, che vale sempre: quale tempo? L'aggettivo «interessante» è lungo: come si fa il comparativo?",
      "Con gli aggettivi lunghi non si aggiunge -er: si mette una parola prima dell'aggettivo. Poi la parola del confronto.",
    ],
    simile: "Physics is more difficult than chemistry.",
    spiegazione:
      "Aggettivi lunghi (due sillabe o più, se non finiscono in -y): more + aggettivo + than. «Interestinger» non esiste.",
    lezione: "lezione 26{3}",
  },
  {
    id: "a1-alto-come",
    livello: "A1",
    contesto:
      "Mostri alla tua amica una foto di famiglia. Lei nota che tuo fratello di sedici anni è cresciuto tantissimo: ora è alto esattamente come vostro padre.",
    consegna: "Dille che tuo fratello è alto quanto tuo padre.",
    soluzioni: [
      "My brother is as tall as my father.",
      "My brother is as tall as my dad.",
      "My brother's as tall as my father.",
      "He is as tall as my father.",
      "He's as tall as my dad.",
    ],
    tempo: "present simple",
    parole: [
      ["fratello", "brother"],
      ["alto (persone)", "tall"],
      ["padre / papà", "father / dad"],
    ],
    suggerimenti: [
      "È un confronto di uguaglianza in una situazione presente. Quale tempo? Come si dice «alto quanto»?",
      "Il verbo «essere» + la stessa parolina ripetuta prima e dopo l'aggettivo (che resta normale, senza -er) + il secondo termine.",
    ],
    simile: "This test is as easy as the last one.",
    spiegazione:
      "Il comparativo di uguaglianza è as + aggettivo + as. Per le persone «alto» si dice tall, non high.",
    lezione: "lezione 26{6}",
  },
  {
    id: "a1-idea",
    livello: "A1",
    contesto:
      "Tu e i tuoi amici non sapete che regalo fare alla vostra insegnante per la fine del corso. Improvvisamente ti viene in mente la soluzione perfetta.",
    consegna: "Esclama che hai un'idea.",
    soluzioni: [
      "I've got an idea!",
      "I have got an idea!",
      "I have an idea!",
      "I've got an idea.",
      "Wait, I've got an idea!",
    ],
    tempo: "have got|present simple",
    parole: [["idea", "idea"]],
    suggerimenti: [
      "Dici che in questo momento «hai» qualcosa: un possesso, anche se astratto. Quale verbo inglese si usa per «avere»? Poi attenzione all'articolo davanti a una parola che comincia per vocale.",
      "Have got (oppure have) + l'articolo indeterminativo nella forma che si usa davanti ai suoni vocalici + idea.",
    ],
    simile: "She's got an umbrella in her bag.",
    spiegazione:
      "Davanti a un suono vocalico l'articolo è an: an idea, an apple, an hour. Conta il suono, non la lettera: a university, an hour.",
    lezione: "lezione 3{2}",
  },
  {
    id: "a1-animali",
    livello: "A1",
    contesto:
      "Un ragazzo inglese ti chiede se ti dispiace che nella casa dove andrai a vivere ci siano due gatti e un cane. Al contrario: per te è una bellissima notizia.",
    consegna: "Digli che adori gli animali (in generale).",
    soluzioni: [
      "I love animals.",
      "I love animals!",
      "No, I love animals.",
      "Not at all, I love animals!",
      "I really love animals.",
    ],
    tempo: "present simple",
    parole: [
      ["adorare / amare", "love"],
      ["animali", "animals"],
    ],
    suggerimenti: [
      "È un gusto generale. Quale tempo? E l'articolo: in italiano diciamo «gli animali», ma in inglese, quando parli di una categoria in generale, serve?",
      "Soggetto + il verbo che significa «amare» + il nome al plurale, senza nessun articolo.",
    ],
    simile: "Cats are independent.",
    spiegazione:
      "Quando si parla di una categoria in generale non si usa the: I love animals, Dogs are friendly. «I love the animals» indica degli animali precisi.",
    lezione: "lezione 3{7}",
  },
  {
    id: "a1-a-letto",
    livello: "A1",
    contesto:
      "Sono le undici e mezza di sera. Un amico ti scrive per invitarti a bere qualcosa in centro. Tu sei già sotto le coperte, stanchissimo.",
    consegna: "Rispondigli che sei già a letto.",
    soluzioni: [
      "Sorry, I'm already in bed.",
      "I'm already in bed.",
      "I am already in bed.",
      "Sorry, I'm in bed.",
      "I'm in bed, sorry.",
    ],
    tempo: "present simple",
    parole: [
      ["letto", "bed"],
      ["già", "already"],
      ["scusa", "sorry"],
    ],
    suggerimenti: [
      "Descrivi dove sei adesso, con il verbo «essere». Quale tempo? E «a letto» in inglese vuole l'articolo?",
      "Soggetto + «essere» + l'avverbio che significa «già» + la preposizione di luogo «dentro» + letto, senza articolo.",
    ],
    simile: "My brother is at school now.",
    spiegazione:
      "In bed, at school, at work, in hospital: con i luoghi usati per la loro funzione non c'è l'articolo. «In the bed» indica un letto preciso.",
    lezione: "lezione 3{9}",
  },
  {
    id: "a1-piove",
    livello: "A1",
    contesto:
      "Stai per uscire e la tua coinquilina ti chiede se ti serve l'ombrello. Guardi fuori dalla finestra: sta piovendo forte.",
    consegna: "Dille che sta piovendo.",
    soluzioni: [
      "It's raining.",
      "It is raining.",
      "Yes, it's raining.",
      "It's raining a lot.",
      "Yes, it's raining hard.",
    ],
    tempo: "present continuous",
    parole: [
      ["piovere", "rain"],
      ["forte (pioggia)", "hard / a lot"],
    ],
    suggerimenti: [
      "Sta succedendo proprio adesso. Quale tempo? E il soggetto: in italiano non c'è, ma in inglese ogni frase ne vuole uno. Quale si usa per il tempo atmosferico?",
      "Il soggetto impersonale + «essere» + il verbo «piovere» con -ing.",
    ],
    simile: "It's snowing in Scotland.",
    spiegazione:
      "Per il tempo atmosferico il soggetto è it, che non significa niente: It's raining, It's cold. «Is raining» senza soggetto è sbagliato.",
    lezione: "lezione 1{4}",
  },
  {
    id: "a1-senza-macchina",
    livello: "A1",
    contesto:
      "Un amico ti chiede di accompagnarlo in macchina all'aeroporto di Heathrow domattina presto. Purtroppo non puoi: non hai l'auto.",
    consegna: "Digli che ti dispiace, ma non hai la macchina.",
    soluzioni: [
      "Sorry, I haven't got a car.",
      "I'm sorry, I haven't got a car.",
      "Sorry, I don't have a car.",
      "I'm sorry, I don't have a car.",
      "I haven't got a car.",
      "I don't have a car.",
    ],
    tempo: "have got|present simple",
    parole: [
      ["macchina", "car"],
      ["mi dispiace", "sorry / I'm sorry"],
    ],
    suggerimenti: [
      "Parli di un possesso, nella situazione di adesso. Come si fa la negativa di have got? (E quella di have da solo?)",
      "Have got: si nega l'ausiliare (forma contratta) e got resta. Have da solo: ausiliare del present simple negativo + have. In italiano diciamo «la macchina», in inglese: «una macchina».",
    ],
    simile: "We haven't got any milk.",
    spiegazione:
      "Negativa: I haven't got a car oppure I don't have a car. «I haven't a car» è antiquato. L'italiano «non ho la macchina» in inglese vuole a.",
    lezione: "lezione 6{3}",
  },
  {
    id: "a1-hai-una-penna",
    livello: "A1",
    contesto:
      "Sei all'ufficio postale e devi compilare un modulo, ma ti accorgi di non avere niente per scrivere. Accanto a te c'è una signora.",
    consegna: "Chiedile se ha una penna.",
    soluzioni: [
      "Have you got a pen?",
      "Excuse me, have you got a pen?",
      "Do you have a pen?",
      "Excuse me, do you have a pen?",
      "Sorry, have you got a pen?",
    ],
    tempo: "have got|present simple",
    parole: [
      ["penna", "pen"],
      ["mi scusi", "excuse me"],
    ],
    suggerimenti: [
      "Le chiedi se possiede qualcosa adesso. Come si fa la domanda con have got?",
      "Have got: l'ausiliare va prima del soggetto, got resta dopo. Oppure con have da solo: l'ausiliare del present simple + soggetto + have.",
    ],
    simile: "Have you got a minute?",
    spiegazione:
      "Domande: Have you got...? oppure Do you have...? Tutte e due sono corrette; la prima è più britannica.",
    lezione: "lezione 6{3}",
  },
  {
    id: "a1-capelli-lunghi",
    livello: "A1",
    contesto:
      "Devi andare a prendere all'aeroporto la cugina di un amico, che non hai mai visto. Lui ti descrive com'è: ha i capelli lunghi e scuri.",
    consegna: "Ripeti la descrizione: lei ha i capelli lunghi e scuri.",
    soluzioni: [
      "She's got long dark hair.",
      "She has got long dark hair.",
      "She has long dark hair.",
      "She's got long, dark hair.",
    ],
    tempo: "have got|present simple",
    parole: [
      ["capelli", "hair", "non numerabile: singolare"],
      ["lunghi", "long"],
      ["scuri", "dark"],
    ],
    suggerimenti: [
      "Descrivi una caratteristica fisica: in inglese si usa «avere». Quale forma di «avere» con «lei»? E attenzione: «capelli» in inglese è plurale o singolare?",
      "Have got (o has) alla terza persona + prima gli aggettivi (lunghezza, poi colore) + la parola per «capelli», che è non numerabile: niente -s e niente articolo.",
    ],
    simile: "He's got short curly hair.",
    spiegazione:
      "Hair è non numerabile: long hair (mai «hairs», che sono i singoli peli). Gli aggettivi vanno prima del nome: lunghezza, poi colore.",
    lezione: "S2{4}",
  },
  {
    id: "a1-mal-di-gola",
    livello: "A1",
    contesto:
      "In farmacia, il farmacista ti chiede che problema hai. Da ieri ti fa male la gola e fai fatica a deglutire.",
    consegna: "Digli che hai mal di gola.",
    soluzioni: [
      "I've got a sore throat.",
      "I have got a sore throat.",
      "I have a sore throat.",
      "I've got a really sore throat.",
    ],
    tempo: "have got|present simple",
    parole: [
      ["mal di gola", "a sore throat"],
      ["gola", "throat"],
      ["dolorante", "sore"],
    ],
    suggerimenti: [
      "Parli di un disturbo che hai adesso. In inglese malattie e dolori si «hanno», come in italiano. Quale forma di «avere»?",
      "Have got (o have) + articolo indeterminativo + l'aggettivo che significa «dolorante» + gola. In italiano non c'è l'articolo, in inglese sì.",
    ],
    simile: "She's got a cold.",
    spiegazione:
      "I disturbi si dicono con have got + a: a sore throat, a headache, a cold. In italiano «ho mal di gola» non ha articolo, in inglese sì.",
    lezione: "S8{4}",
  },
  {
    id: "a1-bancomat",
    livello: "A1",
    contesto:
      "Sei in un piccolo paese delle Cotswolds e il pub accetta solo contanti. Esci e chiedi a un passante.",
    consegna: "Chiedigli se c'è un bancomat qui vicino.",
    soluzioni: [
      "Is there a cash machine near here?",
      "Excuse me, is there a cash machine near here?",
      "Is there a cashpoint near here?",
      "Excuse me, is there a cashpoint near here?",
      "Is there an ATM near here?",
      "Is there a cash machine nearby?",
    ],
    tempo: "present simple",
    parole: [
      ["bancomat", "cash machine / cashpoint / ATM"],
      ["qui vicino", "near here / nearby"],
    ],
    suggerimenti: [
      "Chiedi se una cosa esiste in un luogo adesso. Come si trasforma «c'è» in una domanda?",
      "Inverti l'espressione di «c'è»: prima il verbo, poi l'avverbio. Poi «un» + bancomat + «vicino a qui».",
    ],
    simile: "Is there a bus stop near here?",
    spiegazione:
      "La domanda di there is è Is there...? Nel Regno Unito il bancomat è a cash machine o a cashpoint.",
    lezione: "lezione 7{3}",
  },
  {
    id: "a1-terzo-piano",
    livello: "A1",
    contesto:
      "Un fattorino ti telefona: è davanti al tuo palazzo con un pacco e chiede a che piano abiti. Abiti al terzo piano.",
    consegna: "Digli che abiti al terzo piano.",
    soluzioni: [
      "I live on the third floor.",
      "I'm on the third floor.",
      "I am on the third floor.",
      "It's the third floor.",
      "I live on the 3rd floor.",
    ],
    tempo: "present simple",
    parole: [
      ["abitare", "live"],
      ["piano", "floor"],
      ["terzo", "third"],
    ],
    suggerimenti: [
      "Dove abiti è un fatto stabile. Quale tempo? Poi ti servono un numero ordinale e la preposizione giusta per i piani.",
      "Soggetto + «abitare» + la preposizione «sopra» (si sta SU un piano) + l'articolo + l'ordinale di «tre» (irregolare) + piano.",
    ],
    simile: "Our office is on the second floor.",
    spiegazione:
      "I piani vogliono on: on the third floor. Gli ordinali first, second, third sono irregolari; dal quarto si aggiunge -th (fourth, fifth).",
    lezione: "lezione 8{4}",
  },
  {
    id: "a1-mai-carne",
    livello: "A1",
    contesto:
      "Sei a cena dalla famiglia che ti ospita per la prima volta. La signora sta per servirti l'arrosto. Tu sei vegetariano da anni.",
    consegna: "Spiegale gentilmente che non mangi mai la carne.",
    soluzioni: [
      "Sorry, I never eat meat.",
      "I'm sorry, I never eat meat.",
      "I never eat meat.",
      "Sorry, I never eat meat, I'm a vegetarian.",
      "I never eat meat, I'm vegetarian.",
    ],
    tempo: "present simple",
    parole: [
      ["mangiare", "eat"],
      ["carne", "meat", "non numerabile, senza articolo"],
      ["vegetariano", "vegetarian"],
    ],
    suggerimenti: [
      "È un'abitudine stabile. Quale tempo? Con quale avverbio di frequenza dici «mai»? E ti serve anche la negazione don't?",
      "Soggetto + l'avverbio che significa «mai» + verbo base, senza altre negazioni (quell'avverbio è già negativo) + carne senza articolo.",
    ],
    simile: "She never drinks alcohol.",
    spiegazione:
      "Never è già negativo: I never eat meat. «I don't never eat» è una doppia negazione, sbagliata in inglese.",
    lezione: "lezione 11{4}",
  },
  {
    id: "a1-quanto-spesso",
    livello: "A1",
    contesto:
      "Il tuo nuovo amico Jake è in forma smagliante e ti dice che va in palestra. Vuoi sapere con che frequenza ci va.",
    consegna: "Chiedigli quanto spesso va in palestra.",
    soluzioni: [
      "How often do you go to the gym?",
      "So how often do you go to the gym?",
      "How often do you go to the gym, Jake?",
    ],
    tempo: "present simple",
    parole: [
      ["andare", "go"],
      ["palestra", "gym"],
    ],
    suggerimenti: [
      "Chiedi di un'abitudine. Quale tempo? E quale espressione interrogativa significa «quanto spesso»?",
      "L'espressione di due parole per «quanto spesso» + l'ausiliare del present simple + soggetto + verbo base + «in palestra» (in inglese: a + la palestra).",
    ],
    simile: "How often does she visit her parents?",
    spiegazione:
      "How often...? chiede la frequenza e vuole il present simple con do/does. Si risponde con once a week, twice a month, every day.",
    lezione: "lezione 11{5}",
  },
  {
    id: "a1-sempre-in-ritardo",
    livello: "A1",
    contesto:
      "Avete appuntamento alle sette e la vostra amica Kate, come al solito, non c'è. Un altro amico chiede se dovete preoccuparvi.",
    consegna: "Rispondi che no, lei è sempre in ritardo.",
    soluzioni: [
      "No, she's always late.",
      "No, she is always late.",
      "She's always late.",
      "She is always late.",
      "Don't worry, she's always late.",
      "No, Kate is always late.",
    ],
    tempo: "present simple",
    parole: [
      ["in ritardo", "late"],
      ["sempre", "always"],
    ],
    suggerimenti: [
      "È una sua caratteristica abituale. Quale tempo e quale verbo («essere in ritardo»)? Poi: dove va l'avverbio di frequenza quando il verbo è «essere»?",
      "Con «essere» l'avverbio di frequenza va DOPO il verbo, non prima come con gli altri verbi. Poi l'aggettivo che significa «in ritardo».",
    ],
    simile: "He's usually very tired on Mondays.",
    spiegazione:
      "Con to be l'avverbio di frequenza va dopo il verbo: she's always late. Con gli altri verbi va prima: she always arrives late.",
    lezione: "lezione 11{3}",
  },
  {
    id: "a1-non-cucina",
    livello: "A1",
    contesto:
      "Tua madre, al telefono, ti chiede se il tuo coinquilino Ben ti aiuta a preparare la cena. Ben non cucina mai: vive di pizze surgelate.",
    consegna: "Dille che il tuo coinquilino non cucina.",
    soluzioni: [
      "My flatmate doesn't cook.",
      "My flatmate does not cook.",
      "Ben doesn't cook.",
      "He doesn't cook.",
      "My roommate doesn't cook.",
      "My flatmate doesn't cook at all.",
    ],
    tempo: "present simple",
    parole: [
      ["coinquilino", "flatmate", "roommate è americano"],
      ["cucinare", "cook"],
      ["per niente", "at all"],
    ],
    suggerimenti: [
      "È un'abitudine (anzi, la mancanza di un'abitudine). Quale tempo? E con un soggetto alla terza persona singolare, quale ausiliare serve per la negativa?",
      "Ausiliare del present simple per he/she/it + not (contratti) + verbo BASE: la -s della terza persona è già nell'ausiliare.",
    ],
    simile: "My father doesn't drink coffee.",
    spiegazione:
      "Con he, she, it la negativa è doesn't + verbo base: he doesn't cook (non «he doesn't cooks»). La -s si mette una volta sola.",
    lezione: "lezione 10{4}",
  },
  {
    id: "a1-questo-autobus",
    livello: "A1",
    contesto:
      "Sei alla fermata di High Street. Arriva un autobus, ma il numero sul display non ti dice niente. L'autista apre le porte.",
    consegna: "Chiedigli se questo autobus va alla stazione.",
    soluzioni: [
      "Does this bus go to the station?",
      "Excuse me, does this bus go to the station?",
      "Does this bus go to the train station?",
      "Does this bus stop at the station?",
    ],
    tempo: "present simple",
    parole: [
      ["autobus", "bus"],
      ["andare", "go"],
      ["fermarsi", "stop"],
      ["stazione", "station"],
    ],
    suggerimenti: [
      "Il percorso dell'autobus è fisso, sempre uguale: quale tempo? Il soggetto è «questo autobus», terza persona: quale ausiliare per la domanda?",
      "Ausiliare per la terza persona + il dimostrativo + autobus + verbo base (senza -s) + la destinazione.",
    ],
    simile: "Does this train stop at Reading?",
    spiegazione:
      "Domande alla terza persona: Does + soggetto + verbo base. Gli orari e i percorsi dei mezzi vogliono il present simple.",
    lezione: "lezione 10{5}",
  },
  {
    id: "a1-hai-fame",
    livello: "A1",
    contesto:
      "Il tuo amico ha studiato in biblioteca tutto il giorno senza pranzare. Alle sei lo vedi pallido e silenzioso.",
    consegna: "Chiedigli se ha fame.",
    soluzioni: [
      "Are you hungry?",
      "Aren't you hungry?",
      "Are you very hungry?",
    ],
    tempo: "present simple",
    parole: [["affamato", "hungry"]],
    suggerimenti: [
      "In italiano la fame si «ha». In inglese si usa un altro verbo, con un aggettivo. Quale verbo? E come diventa una domanda?",
      "Il verbo «essere» prima del soggetto + l'aggettivo che significa «affamato». Nessun ausiliare do.",
    ],
    simile: "Are you thirsty?",
    spiegazione:
      "Fame, sete, freddo, caldo, sonno si dicono con to be: Are you hungry? I'm cold. «Do you have hunger?» è sbagliato.",
    lezione: "lezione 2{8}",
  },
  {
    id: "a1-sveglia",
    livello: "A1",
    contesto:
      "Un amico italiano ti chiede com'è la tua giornata tipo a Oxford. Cominci dal mattino: ti alzi tutti i giorni alle sette.",
    consegna: "Digli che ti alzi alle sette ogni mattina.",
    soluzioni: [
      "I get up at seven every morning.",
      "I get up at seven o'clock every morning.",
      "Every morning I get up at seven.",
      "I get up at 7 every morning.",
      "I wake up at seven every morning.",
    ],
    tempo: "present simple",
    parole: [
      ["alzarsi", "get up"],
      ["svegliarsi", "wake up"],
      ["ogni mattina", "every morning"],
    ],
    suggerimenti: [
      "È la tua routine quotidiana. Quale tempo? «Alzarsi» in italiano è riflessivo: in inglese?",
      "Present simple del phrasal verb che significa «alzarsi» (non è riflessivo) + la preposizione delle ore + l'ora + la frequenza.",
    ],
    simile: "She goes to bed at eleven every night.",
    spiegazione:
      "Alzarsi = get up, svegliarsi = wake up: niente pronome riflessivo («I get me up» è sbagliato). La routine vuole il present simple.",
    lezione: "lezione 10{7}",
  },
  {
    id: "a1-sta-scrivendo",
    livello: "A1",
    contesto:
      "Qualcuno telefona in ufficio e chiede della tua collega Lucy. Lei è alla scrivania, ma è concentratissima: sta scrivendo un'email importante.",
    consegna: "Spiega che in questo momento sta scrivendo un'email.",
    soluzioni: [
      "She's writing an email.",
      "She is writing an email.",
      "Lucy is writing an email.",
      "She's writing an email at the moment.",
      "She's writing an email right now.",
    ],
    tempo: "present continuous",
    parole: [
      ["scrivere", "write"],
      ["email", "email"],
      ["in questo momento", "at the moment / right now"],
    ],
    suggerimenti: [
      "L'azione è in corso adesso. Quale tempo? Attenzione all'ortografia: come si aggiunge -ing a un verbo che finisce con una -e muta?",
      "«Essere» (terza persona) + il verbo con -ing (la -e finale cade) + articolo davanti a una parola che comincia per vocale + email.",
    ],
    simile: "He's making a cake.",
    spiegazione:
      "I verbi che finiscono con -e muta la perdono davanti a -ing: write → writing, make → making. An davanti a email (suono vocalico).",
    lezione: "lezione 12{3}",
  },
  {
    id: "a1-mi-ascolti",
    livello: "A1",
    contesto:
      "Stai spiegando al tuo coinquilino i turni per pulire la cucina. Lui guarda il telefono e annuisce senza alzare gli occhi.",
    consegna: "Chiedigli, un po' irritato, se ti sta ascoltando.",
    soluzioni: [
      "Are you listening to me?",
      "Are you listening?",
      "Hey, are you listening to me?",
      "Are you even listening to me?",
    ],
    tempo: "present continuous",
    parole: [
      ["ascoltare", "listen (to)", "si ascolta qualcuno: listen to"],
      ["mi (complemento)", "me"],
    ],
    suggerimenti: [
      "Chiedi di un'azione in corso proprio adesso. Quale tempo, e come diventa una domanda?",
      "«Essere» prima del soggetto + il verbo «ascoltare» con -ing + la preposizione che questo verbo vuole sempre prima della persona + il pronome complemento.",
    ],
    simile: "Are you waiting for the bus?",
    spiegazione:
      "Listen vuole to prima di ciò che si ascolta: listen to me, listen to music. Domanda al present continuous: Are you + -ing?",
    lezione: "lezione 12{4}",
  },
  {
    id: "a1-torta",
    livello: "A1",
    contesto:
      "Hai preparato il tiramisù per il compleanno della tua coinquilina. Arriva un'amica di lei che non conosci, e tu le porgi il piatto.",
    consegna: "Chiedile se vuole un po' di torta.",
    soluzioni: [
      "Would you like some cake?",
      "Would you like some tiramisu?",
      "Would you like a piece of cake?",
      "Do you want some cake?",
    ],
    tempo: "conditional|present simple",
    parole: [
      ["torta", "cake"],
      ["una fetta di", "a piece of / a slice of"],
    ],
    suggerimenti: [
      "È un'offerta cortese a una persona che non conosci. Quale forma corrisponde all'italiano «vorresti / gradisci»?",
      "Domanda con il modale del condizionale prima del soggetto + «piacere» + la quantità. Nelle offerte si usa la parola per «un po' di» che di solito sta nelle frasi affermative.",
    ],
    simile: "Would you like some tea?",
    spiegazione:
      "Nelle offerte si usa some anche nelle domande, perché ci si aspetta un sì: Would you like some cake? Any sarebbe una domanda neutra.",
    lezione: "lezione 18{2}",
  },
  {
    id: "a1-qualcosa-da-mangiare",
    livello: "A1",
    contesto:
      "Torni a casa alle undici di sera dopo una lunga giornata. Apri il frigorifero condiviso e chiedi alla coinquilina, che è in cucina.",
    consegna: "Chiedile se c'è qualcosa da mangiare.",
    soluzioni: [
      "Is there anything to eat?",
      "Is there anything to eat in the fridge?",
      "Is there something to eat?",
      "Is there any food?",
    ],
    tempo: "present simple",
    parole: [
      ["mangiare", "eat"],
      ["cibo", "food"],
      ["frigo", "fridge"],
    ],
    suggerimenti: [
      "Chiedi se qualcosa esiste adesso. Come si fa la domanda di «c'è»? E «qualcosa» nelle domande normali come si dice?",
      "Domanda di «c'è» + la parola per «qualcosa» che si usa nelle domande (comincia come il quantificatore delle domande) + to + verbo base.",
    ],
    simile: "Is there anything to drink?",
    spiegazione:
      "Nelle domande si usano anything, anyone, anywhere (le forme di any). Qualcosa da + verbo = something/anything to + verbo base.",
    lezione: "lezione 18{4}",
  },
  {
    id: "a1-turisti",
    livello: "A1",
    contesto:
      "Un amico che vuole visitare Oxford a luglio ti chiede com'è la città d'estate. Gli spieghi che è affollatissima.",
    consegna: "Digli che d'estate ci sono molti turisti a Oxford.",
    soluzioni: [
      "There are a lot of tourists in Oxford in summer.",
      "There are lots of tourists in Oxford in summer.",
      "In summer there are a lot of tourists in Oxford.",
      "There are a lot of tourists in Oxford in the summer.",
      "There are many tourists in Oxford in summer.",
    ],
    tempo: "present simple",
    parole: [
      ["turisti", "tourists"],
      ["estate", "summer"],
      ["molti", "a lot of / lots of / many"],
    ],
    suggerimenti: [
      "È una situazione che si ripete ogni anno. Quale tempo? Le cose di cui parli sono tante e si contano: «ci sono» al plurale.",
      "L'espressione di «ci sono» + l'espressione più comune per «molti» nelle frasi affermative + il nome al plurale + il luogo + la preposizione delle stagioni.",
    ],
    simile: "There are a lot of bikes in Cambridge.",
    spiegazione:
      "Nelle frasi affermative a lot of è più naturale di many. Con le stagioni: in summer (o in the summer).",
    lezione: "lezione 18{6}",
  },
  {
    id: "a1-pochi-soldi",
    livello: "A1",
    contesto:
      "È la fine del mese e un amico ti propone una cena in un ristorante costoso. Il tuo conto in banca è quasi vuoto.",
    consegna: "Digli che non hai molti soldi.",
    soluzioni: [
      "I haven't got much money.",
      "I have not got much money.",
      "I don't have much money.",
      "Sorry, I haven't got much money.",
      "Sorry, I don't have much money.",
      "I haven't got much money this month.",
    ],
    tempo: "have got|present simple",
    parole: [
      ["soldi", "money", "non numerabile: singolare"],
      ["questo mese", "this month"],
    ],
    suggerimenti: [
      "Parli di quello che possiedi adesso, in forma negativa. Quale forma di «avere»? E «molti» con i soldi: i soldi in inglese si contano?",
      "Negativa di have got (o di have) + il quantificatore per «molto» con i nomi non numerabili + money (singolare).",
    ],
    simile: "We haven't got much time.",
    spiegazione:
      "Money è non numerabile: much money (non «many moneys»). Much si usa soprattutto nelle negative e nelle domande.",
    lezione: "lezione 18{5}",
  },
  {
    id: "a1-li-adoro",
    livello: "A1",
    contesto:
      "La tua amica inglese ti ha portato dei cioccolatini artigianali dal Belgio. Ne assaggi uno: sono buonissimi.",
    consegna: "Ringraziala e dille che li adori.",
    soluzioni: [
      "Thank you, I love them!",
      "Thanks, I love them!",
      "Thank you! I love them!",
      "Thank you, I love them.",
      "I love them, thank you!",
    ],
    tempo: "present simple",
    parole: [
      ["adorare", "love"],
      ["grazie", "thank you / thanks"],
    ],
    suggerimenti: [
      "Esprimi un gusto. Quale tempo? Poi: «li» si riferisce ai cioccolatini (cose, plurale). Quale pronome complemento usi?",
      "Ringraziamento + soggetto + «amare» + il pronome complemento plurale, che vale per persone e cose. In inglese il pronome va DOPO il verbo.",
    ],
    simile: "These shoes are great. I love them.",
    spiegazione:
      "Il pronome complemento plurale è them, per persone e cose, e va dopo il verbo: I love them (non «I them love»).",
    lezione: "lezione 16{6}",
  },
  {
    id: "a1-non-preoccuparti",
    livello: "A1",
    contesto:
      "Un ragazzo, al bar, ti urta e ti rovescia qualche goccia di caffè sulla manica. Si scusa mille volte, mortificato. In realtà non è successo niente.",
    consegna: "Digli di non preoccuparsi, va tutto bene.",
    soluzioni: [
      "Don't worry, it's OK.",
      "Don't worry, it's fine.",
      "Don't worry about it.",
      "Don't worry, it's all right.",
      "Don't worry!",
      "Don't worry, it's OK!",
    ],
    tempo: "imperativo",
    parole: [
      ["preoccuparsi", "worry", "non è riflessivo in inglese"],
      ["va bene", "it's OK / it's fine / it's all right"],
    ],
    suggerimenti: [
      "Gli dici di NON fare una cosa: è un invito, rivolto a lui direttamente. Quale modo verbale?",
      "Imperativo negativo (ausiliare con la negazione + verbo base) del verbo «preoccuparsi», che in inglese non vuole il pronome riflessivo. Poi «va bene».",
    ],
    simile: "Don't panic, we have time.",
    spiegazione:
      "Don't worry è una delle frasi più usate in inglese. Worry non è riflessivo: «don't worry yourself» è sbagliato.",
    lezione: "lezione 19{7}",
  },
  {
    id: "a1-ricetta",
    livello: "A1",
    contesto:
      "Insegni alla tua coinquilina inglese a preparare il tiramisù. Lei ha le uova sbattute nella ciotola e aspetta le istruzioni.",
    consegna: "Dille di aggiungere lo zucchero e mescolare.",
    soluzioni: [
      "Add the sugar and mix.",
      "Add the sugar and stir.",
      "Add the sugar and mix well.",
      "Add the sugar and then mix.",
    ],
    tempo: "imperativo",
    parole: [
      ["aggiungere", "add"],
      ["zucchero", "sugar"],
      ["mescolare", "mix / stir"],
      ["bene", "well"],
    ],
    suggerimenti: [
      "Dai istruzioni passo per passo, come in una ricetta. Quale modo verbale si usa?",
      "Imperativo: verbo base senza soggetto + lo zucchero (quello già pronto: articolo determinativo) + «e» + secondo verbo base.",
    ],
    simile: "Cut the onions and fry them.",
    spiegazione:
      "Le ricette si scrivono all'imperativo: Add, mix, cut, bake. Non si usa «you must» né l'infinito come nelle ricette italiane («aggiungere lo zucchero»).",
    lezione: "lezione 19{6}",
  },
  {
    id: "a1-prenotare-tavolo",
    livello: "A1",
    contesto:
      "Telefoni a un ristorante indiano di Cowley Road per sabato sera. Risponde il proprietario: «Hello, Taj Mahal, how can I help?» Siete in due.",
    consegna: "Di' che vorresti prenotare un tavolo per due.",
    soluzioni: [
      "I'd like to book a table for two.",
      "I would like to book a table for two.",
      "I'd like to book a table for two, please.",
      "I'd like to book a table for two people.",
      "I'd like to reserve a table for two.",
      "I'd like to book a table for two on Saturday.",
    ],
    tempo: "conditional",
    parole: [
      ["prenotare", "book / reserve"],
      ["tavolo", "table"],
      ["per due (persone)", "for two (people)"],
    ],
    suggerimenti: [
      "Esprimi un desiderio in modo cortese. Quale forma significa «vorrei»? E se dopo c'è un verbo, come si collega?",
      "La forma di «vorrei» (modale contratto + «piacere») + to + il verbo «prenotare» + il tavolo + per quante persone.",
    ],
    simile: "I'd like to order a taxi, please.",
    spiegazione:
      "Would like + to + verbo: I'd like to book. Book è il verbo britannico più comune per «prenotare» (anche reserve).",
    lezione: "S6{1}",
  },
  {
    id: "a1-conto",
    livello: "A1",
    contesto:
      "Avete finito di cenare in un pub e state per perdere l'ultimo autobus. Fai un cenno al cameriere.",
    consegna: "Chiedi il conto, per favore.",
    soluzioni: [
      "Can we have the bill, please?",
      "Could we have the bill, please?",
      "Can I have the bill, please?",
      "Could I have the bill, please?",
      "Can we get the bill, please?",
      "Excuse me, can we have the bill, please?",
    ],
    tempo: "can|could",
    parole: [
      ["il conto", "the bill", "check è americano"],
      ["per favore", "please"],
    ],
    suggerimenti: [
      "Fai una richiesta adesso. Quale modale usi per chiedere «possiamo avere...?»",
      "Modale + noi (siete in due) + «avere» + il conto, che in inglese britannico si chiama come «la fattura» + please.",
    ],
    simile: "Can we have the menu, please?",
    spiegazione:
      "Il conto al ristorante è the bill in inglese britannico (the check in quello americano). Can/Could we have...? è la formula normale.",
    lezione: "S6{6}",
  },
  {
    id: "a1-allergia",
    livello: "A1",
    contesto:
      "Al ristorante il cameriere ti consiglia un dolce alle nocciole. Tu sei allergico alla frutta secca e devi stare attento.",
    consegna: "Spiegagli che sei allergico alla frutta secca.",
    soluzioni: [
      "I'm allergic to nuts.",
      "I am allergic to nuts.",
      "Sorry, I'm allergic to nuts.",
      "I'm sorry, I'm allergic to nuts.",
    ],
    tempo: "present simple",
    parole: [
      ["allergico", "allergic"],
      ["frutta secca", "nuts"],
    ],
    suggerimenti: [
      "È una condizione stabile, con il verbo «essere». Quale tempo? Poi: «allergico A»: quale preposizione segue «allergic»?",
      "Soggetto + «essere» + l'aggettivo + la preposizione che indica direzione + la frutta secca (plurale, senza articolo).",
    ],
    simile: "My sister is allergic to cats.",
    spiegazione:
      "Allergic to: I'm allergic to nuts. Nuts è la parola generica per la frutta secca a guscio (nocciole, noci, mandorle).",
    lezione: "S6{4}",
  },
  {
    id: "a1-biglietto",
    livello: "A1",
    contesto:
      "Alla biglietteria della stazione di Oxford. Vuoi andare a Londra in giornata e tornare la sera stessa.",
    consegna: "Chiedi un biglietto di andata e ritorno per Londra.",
    soluzioni: [
      "I'd like a return ticket to London, please.",
      "I would like a return ticket to London, please.",
      "Can I have a return ticket to London, please?",
      "Could I have a return ticket to London, please?",
      "I'd like a day return to London, please.",
    ],
    tempo: "conditional|can|could",
    parole: [
      ["biglietto", "ticket"],
      ["andata e ritorno", "return", "solo andata: single"],
      ["per Londra", "to London"],
    ],
    suggerimenti: [
      "Fai una richiesta cortese adesso. Quale formula significa «vorrei»?",
      "La formula di «vorrei» + articolo + il tipo di biglietto (andata e ritorno è una sola parola, messa prima di «biglietto») + la preposizione di direzione + la città.",
    ],
    simile: "I'd like a single ticket to Bristol, please.",
    spiegazione:
      "Return = andata e ritorno, single = solo andata (in inglese britannico). Si dice a ticket TO London, non «for London».",
    lezione: "S7{1}",
  },
  {
    id: "a1-provare",
    livello: "A1",
    contesto:
      "In un negozio di abbigliamento trovi un maglione che ti piace moltissimo. Vedi i camerini in fondo al negozio e chiami la commessa.",
    consegna: "Chiedile se puoi provarlo.",
    soluzioni: [
      "Can I try it on?",
      "Can I try it on, please?",
      "Could I try it on?",
      "Could I try it on, please?",
      "Excuse me, can I try this on?",
      "Can I try this jumper on?",
    ],
    tempo: "can|could",
    parole: [
      ["provare (un vestito)", "try on", "phrasal verb separabile"],
      ["maglione", "jumper"],
    ],
    suggerimenti: [
      "Chiedi il permesso. Quale modale? «Provare un vestito» in inglese è un phrasal verb: quale?",
      "Modale + io + il phrasal verb. Attenzione: se l'oggetto è un pronome («lo»), va IN MEZZO tra il verbo e la particella.",
    ],
    simile: "Can I put my coat on?",
    spiegazione:
      "Try on è un phrasal verb separabile: con un pronome si dice try it on, mai «try on it».",
    lezione: "S5{3}",
  },
  {
    id: "a1-carta",
    livello: "A1",
    contesto:
      "Alla cassa di una piccola libreria dell'usato. Hai solo la carta, niente contanti, e non vedi il cartello delle carte accettate.",
    consegna: "Chiedi al libraio se puoi pagare con la carta.",
    soluzioni: [
      "Can I pay by card?",
      "Can I pay by card, please?",
      "Could I pay by card?",
      "Can I pay with my card?",
      "Can I pay by credit card?",
    ],
    tempo: "can|could",
    parole: [
      ["pagare", "pay"],
      ["carta (di credito)", "card / credit card"],
      ["contanti", "cash"],
    ],
    suggerimenti: [
      "Chiedi un permesso. Quale modale? E con i mezzi di pagamento quale preposizione si usa al posto dell'italiano «con»?",
      "Modale + io + «pagare» + la preposizione dei mezzi (la stessa di «in autobus») + carta, senza articolo.",
    ],
    simile: "Can I pay in cash?",
    spiegazione:
      "Pay by card (o by credit card), ma pay in cash. Senza articolo, come by bus, by train.",
    lezione: "S5{5}",
  },
  {
    id: "a1-mal-di-schiena",
    livello: "A1",
    contesto:
      "Dal medico, la dottoressa ti chiede dove senti dolore. Hai sollevato una valigia pesante e da due giorni ti fa male la schiena.",
    consegna: "Dille che ti fa male la schiena.",
    soluzioni: [
      "My back hurts.",
      "My back really hurts.",
      "My back is hurting.",
      "I've got a pain in my back.",
      "I have a pain in my back.",
    ],
    tempo: "present simple|present continuous|have got",
    parole: [
      ["schiena", "back"],
      ["fare male", "hurt", "verbo irregolare (hurt, hurt, hurt)"],
      ["dolore", "pain"],
    ],
    suggerimenti: [
      "È un dolore di adesso. In italiano diciamo «MI fa male LA schiena»: in inglese il soggetto è la parte del corpo, e al posto dell'articolo c'è un'altra parola. Quale?",
      "Il possessivo «mia» + schiena + il verbo «fare male» al present simple, terza persona.",
    ],
    simile: "My feet hurt.",
    spiegazione:
      "Le parti del corpo vogliono il possessivo: my back hurts (non «the back hurts me»). Hurt alla terza persona: hurts.",
    lezione: "S8{3}",
  },
  {
    id: "a1-al-telefono",
    livello: "A1",
    contesto:
      "Telefoni all'agenzia immobiliare per l'appartamento che hai visto online. Risponde una segretaria. Vuoi parlare con l'agente, Mr Brown.",
    consegna: "Chiedi se puoi parlare con Mr Brown.",
    soluzioni: [
      "Can I speak to Mr Brown, please?",
      "Could I speak to Mr Brown, please?",
      "Can I speak to Mr Brown?",
      "Could I speak to Mr Brown?",
      "Hello, can I speak to Mr Brown, please?",
      "Can I talk to Mr Brown, please?",
    ],
    tempo: "can|could",
    parole: [
      ["parlare (con)", "speak (to) / talk (to)"],
      ["signor", "Mr", "si legge «mister»"],
    ],
    suggerimenti: [
      "Al telefono chiedi il permesso di parlare con qualcuno. Quale modale si usa?",
      "Modale + io + «parlare» + la preposizione che in inglese britannico segue questo verbo (non è «with», anche se si usa) + Mr Brown + please.",
    ],
    simile: "Can I speak to the manager, please?",
    spiegazione:
      "Al telefono: Can/Could I speak to...? Non si dice «I am Marco» ma «It's Marco» o «This is Marco» per presentarsi.",
    lezione: "S9{2}",
  },
  {
    id: "a1-ripetere",
    livello: "A1",
    contesto:
      "Al telefono, la linea è disturbata. La receptionist del dentista ti dice l'orario dell'appuntamento, ma non riesci a sentirlo.",
    consegna: "Chiedile gentilmente se può ripetere.",
    soluzioni: [
      "Could you repeat that, please?",
      "Can you repeat that, please?",
      "Sorry, could you repeat that, please?",
      "Could you say that again, please?",
      "Sorry, could you say that again?",
      "Could you repeat that?",
    ],
    tempo: "could|can",
    parole: [
      ["ripetere", "repeat / say again"],
      ["quello (che hai detto)", "that"],
    ],
    suggerimenti: [
      "Chiedi un favore cortese. Quale modale lo rende più gentile?",
      "Modale cortese + tu + «ripetere» + il pronome dimostrativo che indica ciò che ha appena detto + please.",
    ],
    simile: "Could you spell that, please?",
    spiegazione:
      "Could you repeat that? o Could you say that again? sono le formule standard. «Repeat» da solo, senza oggetto, suona brusco.",
    lezione: "S9{4}",
  },
  {
    id: "a1-invito",
    livello: "A1",
    contesto:
      "Sabato compi vent'anni e organizzi una piccola festa in giardino. Incontri la tua vicina inglese, molto simpatica.",
    consegna: "Chiedile se le piacerebbe venire alla tua festa.",
    soluzioni: [
      "Would you like to come to my party?",
      "Would you like to come to my party on Saturday?",
      "Would you like to come to my birthday party?",
      "Do you want to come to my party?",
    ],
    tempo: "conditional|present simple",
    parole: [
      ["venire", "come"],
      ["festa (di compleanno)", "(birthday) party"],
      ["sabato", "Saturday"],
    ],
    suggerimenti: [
      "È un invito cortese. Quale formula significa «ti piacerebbe / vorresti»? Come si costruisce la domanda?",
      "Modale del condizionale + soggetto + «piacere» + to + il verbo «venire» + «alla mia festa».",
    ],
    simile: "Would you like to have dinner with us?",
    spiegazione:
      "Would you like to + verbo? è la formula per invitare. Si accetta con I'd love to! e si rifiuta con I'm sorry, I can't.",
    lezione: "S10{7}",
  },
  {
    id: "a1-scusa-ritardo",
    livello: "A1",
    contesto:
      "Arrivi al bar dove ti aspettano i tuoi amici con un quarto d'ora di ritardo. Tutti ti guardano.",
    consegna: "Scusati per il ritardo.",
    soluzioni: [
      "Sorry I'm late.",
      "Sorry, I'm late.",
      "I'm sorry I'm late.",
      "Sorry I'm late!",
      "Sorry for being late.",
    ],
    tempo: "present simple|gerundio",
    parole: [
      ["scusa", "sorry"],
      ["in ritardo", "late"],
    ],
    suggerimenti: [
      "Il ritardo è una condizione presente (sei in ritardo adesso). Quale verbo e quale tempo? In inglese non si «fa» ritardo e non si «è in» ritardo con una preposizione.",
      "La parola per scusarsi + soggetto + «essere» + l'aggettivo che significa «in ritardo».",
    ],
    simile: "Sorry I'm so tired today.",
    spiegazione:
      "Sorry I'm late è la formula fissa. Late è un aggettivo: I'm late (non «I'm in late» o «I make late»).",
    lezione: "S10{6}",
  },
  {
    id: "a1-alto-magro",
    livello: "A1",
    contesto:
      "Un'amica deve andare a prendere tuo fratello alla stazione e non l'ha mai visto. Ti chiede com'è.",
    consegna: "Dille che è alto e magro.",
    soluzioni: [
      "He's tall and thin.",
      "He is tall and thin.",
      "He's tall and slim.",
      "He is tall and slim.",
      "He's very tall and thin.",
      "My brother is tall and thin.",
    ],
    tempo: "present simple",
    parole: [
      ["alto (persone)", "tall"],
      ["magro", "thin / slim", "slim è più positivo"],
    ],
    suggerimenti: [
      "Descrivi l'aspetto fisico, una caratteristica stabile. Quale verbo e quale tempo? Per «alto» riferito a una persona c'è una parola apposta.",
      "Pronome per lui + «essere» + i due aggettivi collegati da «e». Per le persone «alto» non è high.",
    ],
    simile: "She's short and slim.",
    spiegazione:
      "Per le persone: tall (alto), short (basso), thin / slim (magro). High si usa per le cose (a high wall, a high mountain).",
    lezione: "S2{3}",
  },
  {
    id: "a1-simpatico",
    livello: "A1",
    contesto:
      "Tua madre ti chiede com'è il nuovo coinquilino. Ti trovi benissimo: è simpatico, socievole e ti ha già invitato a uscire con i suoi amici.",
    consegna: "Dille che il tuo coinquilino è molto simpatico.",
    soluzioni: [
      "My flatmate is very friendly.",
      "My flatmate is really friendly.",
      "He's very friendly.",
      "He is very friendly.",
      "My flatmate is very nice.",
      "He's very nice.",
    ],
    tempo: "present simple",
    parole: [
      ["coinquilino", "flatmate"],
      ["simpatico", "friendly / nice", "attenzione: sympathetic significa «comprensivo»"],
    ],
    suggerimenti: [
      "Descrivi il suo carattere, una caratteristica stabile. Quale verbo e quale tempo? Attenzione a «simpatico»: la parola inglese che gli somiglia è un falso amico.",
      "Soggetto + «essere» + «molto» + un aggettivo che significa «cordiale, amichevole» (oppure «carino, gentile»).",
    ],
    simile: "Our teacher is very kind.",
    spiegazione:
      "Simpatico = friendly o nice. Sympathetic è un falso amico: significa comprensivo, partecipe del dolore altrui.",
    lezione: "S2{8}",
  },
];
