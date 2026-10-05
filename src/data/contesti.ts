/**
 * Gli esercizi "Impara dal contesto": una situazione (breve o di qualche
 * riga) e una consegna; lo studente scrive la frase inglese adatta.
 * Ogni contesto ha:
 * - soluzioni: le frasi accettate (la prima è quella mostrata);
 * - tempo: il tempo o la forma verbale che serve, come la chiama l'analisi
 *   (serve al correttore per dire "hai usato X, qui serve Y");
 * - parole: il vocabolario che serve (italiano → inglese, con una nota se
 *   utile), il primo suggerimento da sbloccare: non sapere come si dice
 *   «occhiali di protezione» non deve impedire di allenare il tempo verbale.
 *   Solo parole di contenuto, mai la struttura che l'esercizio allena (il
 *   modale, l'ausiliare, for/since, than, by, there is, used to, wish...);
 * - suggerimenti: da sbloccare uno alla volta; aiutano a ragionare senza
 *   dare la soluzione. Il primo è una domanda sul tempo/modo verbale (quando
 *   succede? è finito?), il secondo indica la forma generale del tempo senza
 *   le parole della risposta: le scelte decisive restano allo studente;
 * - simile: l'ultimo suggerimento, una frase inglese simile a quella giusta
 *   ma su un altro argomento (stessa struttura, parole diverse);
 * - spiegazione e lezione: perché la soluzione è quella.
 */

// Una voce del vocabolario: [italiano, inglese, nota]. Le alternative
// inglesi sono separate da " / "
export type Parola = [string, string, string?];

export type Contesto = {
  id: string;
  livello: "A1" | "A2" | "B1" | "B2-C1";
  contesto: string;
  consegna: string;
  soluzioni: string[];
  tempo: string;
  parole: Parola[];
  suggerimenti: string[];
  simile: string;
  spiegazione: string;
  lezione?: string;
};

export const CONTESTI: Contesto[] = [
  // ---------- A1 ----------
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
      "Please shut the window.",
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

  // ---------- A2 ----------
  {
    id: "a2-ieri",
    livello: "A2",
    contesto:
      "Lunedì mattina, un collega ti chiede come hai passato la domenica. Ieri sei andato al mare con la tua famiglia.",
    consegna: "Raccontagli che ieri sei andato al mare con la tua famiglia.",
    soluzioni: [
      "I went to the beach with my family yesterday.",
      "Yesterday I went to the beach with my family.",
      "I went to the seaside with my family yesterday.",
      "Yesterday I went to the seaside with my family.",
      "I went to the sea with my family yesterday.",
    ],
    tempo: "past simple",
    parole: [
      ["andare", "go", "verbo irregolare"],
      ["il mare (andare al mare)", "the beach / the seaside"],
      ["la mia famiglia", "my family"],
      ["con", "with"],
      ["ieri", "yesterday"],
    ],
    suggerimenti: [
      "«Ieri»: il momento è preciso ed è finito. Quale tempo si usa per un'azione conclusa in un momento definito del passato?",
      "Past simple. Attenzione: il verbo «andare» è irregolare (controlla i paradigmi). L'ordine è: chi + verbo + dove + con chi + quando.",
    ],
    simile: "We visited my grandparents last Sunday.",
    spiegazione:
      "Con yesterday, last week, ago si usa il past simple, mai il present perfect.",
    lezione: "lezione 23{2}",
  },
  {
    id: "a2-esperienza",
    livello: "A2",
    contesto:
      "Durante un colloquio ti chiedono se conosci l'Inghilterra. Ci sei stato tre volte, ma non dici quando.",
    consegna: "Di' che sei stato in Inghilterra tre volte.",
    soluzioni: [
      "I've been to England three times.",
      "I have been to England three times.",
      "I've visited England three times.",
      "I have visited England three times.",
    ],
    tempo: "present perfect",
    parole: [
      ["Inghilterra", "England"],
      ["tre volte", "three times"],
      ["visitare", "visit"],
    ],
    suggerimenti: [
      "Non dici QUANDO ci sei stato: è un'esperienza della tua vita fino a oggi. Quale tempo collega il passato al presente?",
      "Present perfect: ausiliare «avere» + participio passato. Per «essere stato in un posto» l'inglese usa il participio di «be» seguito da una preposizione di moto.",
    ],
    simile: "She has been to Japan twice.",
    spiegazione:
      "Le esperienze senza un momento preciso vogliono il present perfect; «been to» = esserci stato (e tornato).",
    lezione: "lezione 29{3}",
  },
  {
    id: "a2-futuro-piano",
    livello: "A2",
    contesto:
      "Hai già comprato il biglietto: la prossima estate andrai in Scozia con i tuoi amici. Un'amica ti chiede che progetti hai per l'estate.",
    consegna:
      "Dille che cosa hai intenzione di fare (andare in Scozia la prossima estate).",
    soluzioni: [
      "I'm going to visit Scotland next summer.",
      "I am going to visit Scotland next summer.",
      "I'm going to go to Scotland next summer.",
      "I am going to go to Scotland next summer.",
      "I'm going to Scotland next summer.",
      "I am going to Scotland next summer.",
      "Next summer I'm going to visit Scotland.",
    ],
    tempo: "going to|present continuous",
    parole: [
      ["andare", "go"],
      ["visitare", "visit"],
      ["Scozia", "Scotland"],
      ["la prossima estate", "next summer"],
    ],
    suggerimenti: [
      "È un progetto già deciso (hai già il biglietto), non una decisione presa adesso. Quale forma del futuro esprime un'intenzione già presa?",
      "La forma è: «be» coniugato + going to + verbo base. Alla fine metti il «quando».",
    ],
    simile: "We're going to buy a new car next year.",
    spiegazione:
      "Be going to esprime un'intenzione già decisa; con il biglietto comprato va bene anche il present continuous (I'm going to Scotland).",
    lezione: "lezione 27{2}",
  },
  {
    id: "a2-decisione",
    livello: "A2",
    contesto:
      "Squilla il telefono di casa, ma tua sorella ha le mani occupate in cucina. Decidi in quel momento di rispondere tu.",
    consegna: "Dille che rispondi tu (una decisione presa adesso).",
    soluzioni: [
      "I'll answer it.",
      "I will answer it.",
      "I'll get it.",
      "I will get it.",
      "Don't worry, I'll answer it.",
      "I'll answer the phone.",
      "I will answer the phone.",
    ],
    tempo: "future simple",
    parole: [
      ["rispondere (al telefono)", "answer"],
      ["il telefono", "the phone"],
      ["lo (il telefono)", "it"],
    ],
    suggerimenti: [
      "Decidi nell'istante in cui parli, non l'avevi programmato. Quale forma del futuro si usa per le decisioni prese sul momento?",
      "Il futuro delle decisioni prese sul momento (spesso contratto) + verbo base. Il verbo può essere «rispondere» o uno più colloquiale che vuol dire «ci penso io»; l'oggetto è un pronome.",
    ],
    simile: "I'll open the door.",
    spiegazione:
      "Will si usa per le decisioni prese sul momento, le offerte e le promesse.",
    lezione: "lezione 28{2}",
  },
  {
    id: "a2-confronto",
    livello: "A2",
    contesto:
      "Stai scegliendo tra due città dove studiare. Londra è molto grande e cara; Oxford è più piccola e anche più tranquilla.",
    consegna: "Di' che Oxford è più tranquilla di Londra.",
    soluzioni: [
      "Oxford is quieter than London.",
      "Oxford is more quiet than London.",
      "Oxford is calmer than London.",
      "Oxford is more peaceful than London.",
    ],
    tempo: "present simple",
    parole: [
      ["tranquillo", "quiet / calm / peaceful"],
      ["Londra", "London"],
    ],
    suggerimenti: [
      "Stai confrontando due città: ti serve il grado comparativo dell'aggettivo «tranquillo». Come si forma il comparativo degli aggettivi corti?",
      "Aggettivo corto + -er + la parola che introduce il secondo termine di paragone (in italiano «di»). Il verbo è «essere» al presente.",
    ],
    simile: "My flat is smaller than yours.",
    spiegazione:
      "Gli aggettivi corti fanno il comparativo con -er + than; quelli lunghi con more + aggettivo + than.",
    lezione: "lezione 26{1}",
  },
  {
    id: "a2-obbligo",
    livello: "A2",
    contesto:
      "Spieghi a un nuovo studente le regole del laboratorio di chimica: è obbligatorio indossare gli occhiali di protezione, sempre.",
    consegna: "Digli che deve indossare gli occhiali di protezione.",
    soluzioni: [
      "You must wear safety glasses.",
      "You have to wear safety glasses.",
      "You must wear goggles.",
      "You have to wear goggles.",
      "You must wear protective glasses.",
      "You have to wear protective glasses.",
    ],
    tempo: "must|have to",
    parole: [
      ["indossare", "wear"],
      [
        "occhiali di protezione",
        "safety glasses / protective glasses / goggles",
      ],
    ],
    suggerimenti: [
      "È una regola, un obbligo da rispettare sempre. Quale verbo modale esprime un obbligo forte?",
      "Soggetto (tu) + modale di obbligo + verbo base («indossare»), senza to. Poi la cosa da indossare.",
    ],
    simile: "You must switch off your phone in the library.",
    spiegazione:
      "Must e have to esprimono un obbligo; must è più forte e personale, have to spesso indica regole esterne.",
    lezione: "lezione 32{1}",
  },
  {
    id: "a2-primo-condizionale",
    livello: "A2",
    contesto:
      "Il cielo è nero e le previsioni dicono pioggia. Un amico propone una passeggiata in campagna nel pomeriggio.",
    consegna: "Rispondi che se piove resterete a casa.",
    soluzioni: [
      "If it rains, we'll stay at home.",
      "If it rains, we will stay at home.",
      "If it rains, we'll stay home.",
      "If it rains, we will stay home.",
      "We'll stay at home if it rains.",
      "We will stay at home if it rains.",
    ],
    tempo: "future simple",
    parole: [
      ["piovere", "rain", "per il tempo atmosferico il soggetto è «it»"],
      ["restare", "stay"],
      ["a casa", "at home / home"],
      ["noi", "we"],
    ],
    suggerimenti: [
      "C'è una condizione possibile (se piove) e la sua conseguenza futura. Che tipo di periodo ipotetico è? In italiano diciamo «se piove», al presente: e in inglese?",
      "Nella frase con if il present simple; nell'altra il futuro + verbo base. Attenzione: il futuro non va mai nella frase con if.",
    ],
    simile: "If you study, you'll pass the test.",
    spiegazione:
      "First conditional: if + present simple, will + verbo base. Dopo if non si usa will.",
    lezione: "lezione 34{3}",
  },
  {
    id: "a2-passato-continuo",
    livello: "A2",
    contesto:
      "Racconti a un'amica una cosa strana: ieri sera stavi guardando un film quando, all'improvviso, è saltata la luce.",
    consegna:
      "Racconta che stavi guardando un film quando è andata via la luce.",
    soluzioni: [
      "I was watching a film when the lights went out.",
      "I was watching a movie when the lights went out.",
      "I was watching a film when the power went off.",
      "I was watching a movie when the power went off.",
      "I was watching a film when the power went out.",
      "I was watching a movie when the power went out.",
    ],
    tempo: "past continuous",
    parole: [
      ["guardare", "watch"],
      ["un film", "a film / a movie"],
      ["la luce, la corrente", "the lights / the power"],
      ["andare via (della luce)", "go out / go off", "verbo irregolare"],
      ["quando", "when"],
    ],
    suggerimenti: [
      "Le azioni passate sono due: una lunga, in corso (stavi guardando), e una breve che la interrompe. Servono due tempi diversi: quali?",
      "Azione lunga: was/were + verbo in -ing. Azione breve: past simple (il verbo per la luce che «se ne va» è un phrasal verb irregolare). Le due parti sono unite da «quando».",
    ],
    simile: "She was cooking when the phone rang.",
    spiegazione:
      "Il past continuous fa da sfondo (azione in corso), il past simple indica l'evento che la interrompe.",
    lezione: "lezione 35{3}",
  },

  // ---------- B1 ----------
  {
    id: "b1-durata",
    livello: "B1",
    contesto:
      "A un colloquio per un lavoro a Londra ti chiedono da quanto tempo studi inglese. Hai cominciato tre anni fa e continui ancora.",
    consegna: "Di' che studi inglese da tre anni.",
    soluzioni: [
      "I've been studying English for three years.",
      "I have been studying English for three years.",
      "I've been studying English for 3 years.",
      "I have been studying English for 3 years.",
      "I've been learning English for three years.",
      "I have been learning English for three years.",
      "I've studied English for three years.",
      "I have studied English for three years.",
    ],
    tempo: "present perfect continuous|present perfect",
    parole: [
      ["studiare / imparare", "study / learn"],
      ["inglese", "English"],
      ["tre anni", "three years"],
    ],
    suggerimenti: [
      "In italiano diciamo «studio da tre anni», al presente, ma in inglese no. L'azione è iniziata nel passato e continua adesso: quale tempo collega passato e presente e mette l'accento sulla durata?",
      "Il tempo è il present perfect continuous: have/has + been + verbo in -ing. Per una durata come «tre anni», quale preposizione si usa: for o since?",
    ],
    simile: "I have been doing this for many years.",
    spiegazione:
      "«Studio inglese da tre anni» non è un presente in inglese: l'azione dura fino ad ora, quindi present perfect continuous + for + durata.",
    lezione: "lezione 39{2}",
  },
  {
    id: "b1-trapassato",
    livello: "B1",
    contesto:
      "Racconti un viaggio disastroso. Quando sei arrivato alla stazione, il treno era già partito, quindi hai dovuto aspettare due ore.",
    consegna: "Racconta che quando sei arrivato il treno era già partito.",
    soluzioni: [
      "When I arrived at the station, the train had already left.",
      "When I got to the station, the train had already left.",
      "When I arrived, the train had already left.",
      "When I got there, the train had already left.",
      "The train had already left when I arrived at the station.",
      "The train had already left when I arrived.",
    ],
    tempo: "past perfect",
    parole: [
      ["arrivare (a)", "arrive (at) / get to", "get è irregolare"],
      ["stazione", "station"],
      ["treno", "train"],
      ["partire", "leave", "verbo irregolare"],
      ["già", "already"],
      ["quando", "when"],
    ],
    suggerimenti: [
      "Le azioni sono entrambe passate, ma una è avvenuta PRIMA dell'altra. Quale tempo indica il «passato del passato»?",
      "Per l'azione più recente (il tuo arrivo) basta il past simple; per quella avvenuta prima (la partenza del treno) serve had + participio. Puoi aggiungere un avverbio che vuol dire «già».",
    ],
    simile: "When we got to the cinema, the film had already started.",
    spiegazione:
      "Il past perfect (had + participio) indica l'azione più vecchia tra due azioni passate.",
    lezione: "lezione 37{2}",
  },
  {
    id: "b1-abitudine-passata",
    livello: "B1",
    contesto:
      "Un'amica guarda una tua vecchia foto in cui hai i capelli lunghissimi. Oggi li porti cortissimi.",
    consegna: "Spiegale che una volta avevi i capelli lunghi (oggi non più).",
    soluzioni: ["I used to have long hair.", "I used to have very long hair."],
    tempo: "used to",
    parole: [
      ["avere", "have"],
      ["i capelli", "hair", "non numerabile: sempre singolare"],
      ["lunghi", "long"],
    ],
    suggerimenti: [
      "È una situazione del passato che oggi non è più vera. Quale forma inglese esprime «una volta avevo..., ora non più»?",
      "La forma è used to + verbo base. Attenzione: in inglese «i capelli» è un nome non numerabile, quindi singolare.",
    ],
    simile: "We used to live in the countryside.",
    spiegazione:
      "Used to esprime abitudini e situazioni passate che non valgono più; hair (i capelli) è singolare in inglese.",
    lezione: "lezione 38{1}",
  },
  {
    id: "b1-passivo",
    livello: "B1",
    contesto:
      "Fai da guida turistica a Oxford e mostri la Radcliffe Camera ai visitatori. L'edificio fu costruito nel Settecento, nel 1749.",
    consegna: "Di' che l'edificio fu costruito nel 1749.",
    soluzioni: [
      "This building was built in 1749.",
      "The building was built in 1749.",
      "It was built in 1749.",
      "This building was completed in 1749.",
      "It was completed in 1749.",
    ],
    tempo: "past simple (forma passiva)",
    parole: [
      ["questo", "this"],
      ["edificio", "building"],
      ["costruire", "build", "verbo irregolare"],
      ["completare", "complete"],
    ],
    suggerimenti: [
      "Conta l'edificio, non chi l'ha costruito (e non lo dici). Il soggetto subisce l'azione: quale forma del verbo si usa?",
      "Forma passiva al past simple: was/were + participio passato. Il participio di «costruire» è irregolare; l'anno si introduce con «in».",
    ],
    simile: "The bridge was opened in 1894.",
    spiegazione:
      "Il passivo si forma con be + participio passato; al passato: was/were + participio.",
    lezione: "lezione 43{1}",
  },
  {
    id: "b1-secondo-condizionale",
    livello: "B1",
    contesto:
      "Un amico ti chiede cosa faresti se vincessi alla lotteria. Hai sempre sognato di fare il giro del mondo.",
    consegna:
      "Rispondi che se vincessi alla lotteria faresti il giro del mondo.",
    soluzioni: [
      "If I won the lottery, I would travel around the world.",
      "If I won the lottery, I'd travel around the world.",
      "I would travel around the world if I won the lottery.",
      "I'd travel around the world if I won the lottery.",
      "If I won the lottery, I would travel the world.",
      "If I won the lottery, I'd travel the world.",
    ],
    tempo: "conditional",
    parole: [
      ["vincere", "win", "verbo irregolare"],
      ["la lotteria", "the lottery"],
      ["fare il giro del mondo", "travel around the world / travel the world"],
    ],
    suggerimenti: [
      "È un'ipotesi poco probabile, quasi un sogno. Che tipo di periodo ipotetico si usa per le ipotesi irreali sul presente o sul futuro?",
      "Nella frase con if il past simple (il passato di «vincere» è irregolare); nell'altra would + verbo base.",
    ],
    simile: "If I had more time, I would learn Japanese.",
    spiegazione:
      "Second conditional: if + past simple, would + verbo base. Il passato dopo if indica che l'ipotesi è irreale.",
    lezione: "lezione 36{1}",
  },
  {
    id: "b1-discorso-indiretto",
    livello: "B1",
    contesto:
      "Ieri la tua coinquilina ti ha detto: «I'm tired.» Oggi un amico ti chiede perché non è venuta alla festa.",
    consegna: "Riferisci quello che ti ha detto (discorso indiretto).",
    soluzioni: [
      "She said she was tired.",
      "She said that she was tired.",
      "She told me she was tired.",
      "She told me that she was tired.",
    ],
    tempo: "past simple",
    parole: [
      ["dire", "say", "verbo irregolare"],
      [
        "dire (a qualcuno)",
        "tell",
        "verbo irregolare; vuole la persona: tell me",
      ],
      ["stanco / stanca", "tired"],
      ["lei", "she"],
    ],
    suggerimenti: [
      "Riferisci le parole che un'altra persona ha detto ieri. Che cosa succede al tempo verbale nel discorso indiretto?",
      "Il verbo che introduce («dire») è al passato. Il presente della frase originale fa «un passo indietro» e diventa passato; e «I» diventa il pronome che indica lei.",
    ],
    simile: "He said he was hungry.",
    spiegazione:
      "Nel discorso indiretto il present simple diventa past simple e i pronomi cambiano (I → she).",
    lezione: "lezione 42{2}",
  },
  {
    id: "b1-relativa",
    livello: "B1",
    contesto:
      "Mostri a un amico una foto di classe e indichi un ragazzo: è proprio lui che ti ha aiutato a preparare l'esame.",
    consegna: "Di' che quello è il ragazzo che ti ha aiutato con l'esame.",
    soluzioni: [
      "That's the boy who helped me with the exam.",
      "That is the boy who helped me with the exam.",
      "That's the guy who helped me with the exam.",
      "That is the guy who helped me with the exam.",
      "That's the boy that helped me with the exam.",
      "He's the boy who helped me with the exam.",
    ],
    tempo: "past simple",
    parole: [
      ["quello (indicando)", "that"],
      ["ragazzo", "boy / guy"],
      ["aiutare", "help"],
      ["mi (complemento)", "me"],
      ["con (l'esame)", "with"],
      ["esame", "exam"],
    ],
    suggerimenti: [
      "Devi indicare una persona e dire che cosa ha fatto: ti serve una proposizione relativa. L'aiuto è un fatto concluso: in quale tempo va?",
      "Comincia indicando la persona («quello è il ragazzo...»), poi il pronome relativo che si usa per le persone, poi il verbo al past simple.",
    ],
    simile: "She's the teacher who taught me French.",
    spiegazione:
      "Who introduce una relativa riferita a una persona; qui fa da soggetto di helped.",
    lezione: "lezione 44{2}",
  },
  {
    id: "b1-consiglio",
    livello: "B1",
    contesto:
      "Il tuo amico tossisce da una settimana e ha la febbre, ma non vuole andare dal medico.",
    consegna: "Consigliagli di andare dal medico.",
    soluzioni: [
      "You should see a doctor.",
      "You should go to the doctor.",
      "You should go to the doctor's.",
      "I think you should see a doctor.",
      "I think you should go to the doctor.",
    ],
    tempo: "should",
    parole: [
      ["medico", "doctor"],
      ["andare dal medico", "see a doctor / go to the doctor"],
      ["penso che", "I think"],
    ],
    suggerimenti: [
      "Non è un obbligo, è un consiglio. Quale verbo modale si usa per consigliare?",
      "Soggetto (tu) + modale del consiglio + verbo base. «Andare dal medico» si può dire «vedere un medico» oppure «andare dal dottore».",
    ],
    simile: "You should drink more water.",
    spiegazione:
      "Should + verbo base esprime un consiglio; è più morbido di must.",
    lezione: "lezione 32{4}",
  },

  // ---------- B2-C1 ----------
  {
    id: "b2-terzo-condizionale",
    livello: "B2-C1",
    contesto:
      "Non hai superato l'esame di statistica. Ripensandoci, sai benissimo perché: non hai studiato abbastanza.",
    consegna: "Di' che se avessi studiato di più, avresti superato l'esame.",
    soluzioni: [
      "If I had studied harder, I would have passed the exam.",
      "If I'd studied harder, I'd have passed the exam.",
      "If I had studied more, I would have passed the exam.",
      "If I'd studied more, I would have passed the exam.",
      "I would have passed the exam if I had studied harder.",
      "I would have passed the exam if I had studied more.",
    ],
    tempo: "conditional perfect",
    parole: [
      ["studiare", "study"],
      ["di più", "more / harder"],
      ["superare (un esame)", "pass"],
      ["l'esame", "the exam"],
    ],
    suggerimenti: [
      "L'esame è già andato male: è un'ipotesi irreale sul PASSATO, qualcosa che non è successo. Che tipo di periodo ipotetico serve?",
      "Nella frase con if: had + participio. Nell'altra: would have + participio. «Studiare di più» si può dire con un comparativo.",
    ],
    simile: "If we had left earlier, we would have caught the train.",
    spiegazione:
      "Third conditional: if + past perfect, would have + participio passato.",
    lezione: "lezione 41{1}",
  },
  {
    id: "b2-rimprovero",
    livello: "B2-C1",
    contesto:
      "Il tuo coinquilino sapeva da settimane che il padrone di casa sarebbe arrivato oggi, ma non te l'ha detto. Ti trovi la casa in disordine davanti a lui.",
    consegna: "Rimproveralo: avrebbe dovuto dirtelo.",
    soluzioni: [
      "You should have told me.",
      "You should've told me.",
      "You should have told me earlier.",
      "You should have told me before.",
    ],
    tempo: "should have",
    parole: [
      ["dire (a qualcuno)", "tell", "verbo irregolare"],
      ["me / mi", "me"],
      ["prima", "earlier / before"],
    ],
    suggerimenti: [
      "È un rimprovero per qualcosa che il tuo coinquilino NON ha fatto nel passato. Quale modale si usa per i consigli, e come si mette al passato?",
      "Modale del consiglio + have + participio passato. Il participio di «dire (a qualcuno)» è irregolare; poi il pronome che indica te.",
    ],
    simile: "You should have called me.",
    spiegazione:
      "Should have + participio esprime un rimprovero o un rimpianto: era la cosa giusta, ma non è stata fatta.",
    lezione: "lezione 51{2}",
  },
  {
    id: "b2-misto",
    livello: "B2-C1",
    contesto:
      "Anni fa hai rifiutato un lavoro molto ben pagato a New York. Oggi, guardando il tuo conto in banca, ci ripensi.",
    consegna: "Di' che se avessi accettato quel lavoro, adesso saresti ricco.",
    soluzioni: [
      "If I had accepted that job, I would be rich now.",
      "If I'd accepted that job, I'd be rich now.",
      "If I had taken that job, I would be rich now.",
      "If I'd taken that job, I'd be rich now.",
      "I would be rich now if I had accepted that job.",
      "I would be rich now if I had taken that job.",
    ],
    tempo: "conditional",
    parole: [
      ["accettare", "accept / take", "take è irregolare"],
      ["quel lavoro", "that job"],
      ["ricco", "rich"],
      ["adesso", "now"],
    ],
    suggerimenti: [
      "La condizione è nel passato (anni fa), ma la conseguenza è nel presente (adesso saresti ricco). Quale periodo ipotetico mescola i due tempi?",
      "Nella frase con if: had + participio (la condizione è passata). Nell'altra: would + verbo base, perché la conseguenza è nel presente.",
    ],
    simile: "If I had gone to bed earlier, I wouldn't be so tired now.",
    spiegazione:
      "Il condizionale misto unisce una condizione passata irreale (past perfect) a una conseguenza presente (would + base).",
    lezione: "lezione 52{1}",
  },
  {
    id: "b2-desiderio",
    livello: "B2-C1",
    contesto:
      "Alla festa tutti ballano e cantano in spagnolo. Tu non capisci una parola e ti dispiace molto.",
    consegna: "Esprimi il desiderio di saper parlare spagnolo (wish).",
    soluzioni: [
      "I wish I could speak Spanish.",
      "I wish I spoke Spanish.",
      "I wish I knew Spanish.",
      "I wish I could understand Spanish.",
    ],
    tempo: "past|could",
    parole: [
      ["parlare (una lingua)", "speak"],
      ["sapere (una lingua)", "know", "verbo irregolare"],
      ["capire", "understand"],
      ["spagnolo", "Spanish"],
    ],
    suggerimenti: [
      "È un desiderio irreale sul presente: ti piacerebbe saperlo parlare, ma non lo sai. Quale verbo inglese esprime «vorrei che / magari»?",
      "Quel verbo + soggetto + un verbo al passato (oppure il passato del modale della capacità + verbo base).",
    ],
    simile: "I wish I had more free time.",
    spiegazione:
      "Wish + past simple (o could) esprime un desiderio che nel presente non si realizza.",
    lezione: "lezione 36{6}",
  },
  {
    id: "b2-futuro-perfetto",
    livello: "B2-C1",
    contesto:
      "Stai scrivendo la tesi. Il relatore vuole sapere se riuscirai a consegnare in tempo. Sei sicuro di finirla prima della fine di maggio.",
    consegna: "Rassicuralo: entro la fine di maggio avrai finito la tesi.",
    soluzioni: [
      "I will have finished my thesis by the end of May.",
      "I'll have finished my thesis by the end of May.",
      "By the end of May, I will have finished my thesis.",
      "By the end of May, I'll have finished my thesis.",
      "I'll have finished it by the end of May.",
      "I will have finished it by the end of May.",
    ],
    tempo: "future perfect",
    parole: [
      ["finire", "finish"],
      ["la mia tesi", "my thesis"],
      ["la fine di maggio", "the end of May"],
    ],
    suggerimenti: [
      "L'azione sarà già conclusa PRIMA di un momento futuro (la fine di maggio). Quale tempo corrisponde al futuro anteriore italiano («avrò finito»)?",
      "Future perfect: will + have + participio passato. «Entro» una scadenza si dice con una preposizione che non è «until».",
    ],
    simile: "By next year, she will have saved enough money.",
    spiegazione:
      "Future perfect: will have + participio passato; si accompagna spesso a by + momento futuro.",
    lezione: "lezione 28{1}",
  },
  {
    id: "b2-enfasi",
    livello: "B2-C1",
    contesto:
      "In una riunione il tuo capo ringrazia un collega per un'idea brillante. Ma l'idea era tua, e vuoi chiarirlo con forza.",
    consegna: "Di' con enfasi che sei stato tu ad avere l'idea (frase scissa).",
    soluzioni: [
      "It was me who had the idea.",
      "It was I who had the idea.",
      "It was me who came up with the idea.",
      "It was me that had the idea.",
      "I was the one who had the idea.",
      "I'm the one who had the idea.",
    ],
    tempo: "past simple",
    parole: [
      ["avere (un'idea)", "have", "verbo irregolare"],
      ["farsi venire (un'idea)", "come up with", "come è irregolare"],
      ["idea", "idea"],
    ],
    suggerimenti: [
      "Vuoi mettere in risalto CHI ha avuto l'idea, non l'idea in sé. Quale costruzione inglese «spezza» la frase per dare enfasi a una persona?",
      "Frase scissa: It + be al passato + la persona (il pronome «io» nella forma complemento) + pronome relativo + il verbo al past simple.",
    ],
    simile: "It was Sarah who found the solution.",
    spiegazione:
      "La frase scissa It was X who... mette in risalto X: «sono stato io ad avere l'idea».",
    lezione: "lezione 53{5}",
  },
  {
    id: "b2-in-corso-durata",
    livello: "B2-C1",
    contesto:
      "Sei arrivato in ritardo di quaranta minuti all'appuntamento. La tua amica, ancora sulla panchina, ha l'aria molto seccata.",
    consegna:
      "Lei ti dice che ti sta aspettando da quaranta minuti. Scrivi la sua frase.",
    soluzioni: [
      "I've been waiting for forty minutes!",
      "I have been waiting for forty minutes!",
      "I've been waiting for 40 minutes!",
      "I have been waiting for 40 minutes!",
      "I've been waiting for you for forty minutes!",
      "I have been waiting for you for forty minutes!",
    ],
    tempo: "present perfect continuous",
    parole: [
      ["aspettare", "wait"],
      ["te / ti", "you"],
      ["quaranta minuti", "forty minutes"],
    ],
    suggerimenti: [
      "L'attesa è cominciata quaranta minuti fa e non è ancora finita: lei sottolinea quanto è durata. Quale tempo usa?",
      "Present perfect continuous: have + been + verbo in -ing. Per la durata, quale preposizione: for o since?",
    ],
    simile: "She has been working here since 2019.",
    spiegazione:
      "Il present perfect continuous mette l'accento sulla durata di un'azione che arriva fino ad ora.",
    lezione: "lezione 39{2}",
  },
  {
    id: "b2-inversione",
    livello: "B2-C1",
    contesto:
      "Sei appena tornato da un viaggio in Islanda. Racconti agli amici l'aurora boreale che hai visto: la cosa più bella di tutta la tua vita.",
    consegna:
      "Di' con enfasi, mettendo «never» all'inizio, che non hai mai visto niente di così bello.",
    soluzioni: [
      "Never have I seen anything so beautiful.",
      "Never have I seen anything more beautiful.",
      "Never before have I seen anything so beautiful.",
      "Never have I seen something so beautiful.",
      "Never in my life have I seen anything so beautiful.",
    ],
    tempo: "present perfect",
    parole: [
      ["vedere", "see", "verbo irregolare"],
      ["niente (in una frase con never)", "anything"],
      ["così bello", "so beautiful"],
      ["prima d'ora", "before"],
      ["in vita mia", "in my life"],
    ],
    suggerimenti: [
      "È un'esperienza di tutta la tua vita fino a oggi: quale tempo si usa? E che cosa succede all'ordine delle parole quando una frase comincia con un'espressione negativa come «never»?",
      "Dopo «never» all'inizio l'ordine diventa quello di una domanda: ausiliare PRIMA del soggetto, poi il participio. «Niente» in una frase già negativa si dice con una parola che comincia per any-.",
    ],
    simile: "Rarely have I heard such a beautiful voice.",
    spiegazione:
      "Con never all'inizio si usa l'inversione (ausiliare + soggetto): è un modo formale ed enfatico di dire «I have never seen anything so beautiful».",
    lezione: "lezione 53{2}",
  },
];
