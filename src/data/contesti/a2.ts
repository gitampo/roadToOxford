import type { Contesto } from ".";

// I contesti di livello A2
export const CONTESTI_A2: Contesto[] = [
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
  {
    id: "a2-negativa-passato",
    livello: "A2",
    contesto:
      "Sabato sera c'era la festa di compleanno di Sophie, ma avevi la febbre e sei rimasto a letto. Lunedì lei ti chiede perché non ti ha visto.",
    consegna: "Dille che non sei andato alla festa perché stavi male.",
    soluzioni: [
      "I didn't go to the party because I was ill.",
      "I did not go to the party because I was ill.",
      "I didn't go to the party because I was sick.",
      "I didn't come to the party because I was ill.",
      "I didn't come to the party because I was sick.",
      "I didn't come to your party because I was ill.",
      "I didn't come to your party because I was sick.",
    ],
    tempo: "past simple",
    parole: [
      ["andare / venire", "go / come"],
      ["festa", "party"],
      ["malato / stare male", "ill / sick"],
    ],
    suggerimenti: [
      "La festa è finita, sabato è un momento preciso del passato. Quale tempo serve, e come si fa la sua forma negativa?",
      "Negativa del past simple: ausiliare al passato + not + verbo BASE (il passato si indica una volta sola, nell'ausiliare). Nella seconda parte, «stavo male» è il passato di «essere».",
    ],
    simile: "I didn't call you because my phone was broken.",
    spiegazione:
      "Past simple negativo: didn't + verbo base. «I didn't went» è sbagliato: il passato c'è già in did.",
    lezione: "lezione 24{2}",
  },
  {
    id: "a2-domanda-passato",
    livello: "A2",
    contesto:
      "Ieri sera la tua coinquilina è andata al cinema a vedere il film di cui parlano tutti. Stamattina la incontri in cucina.",
    consegna: "Chiedile se le è piaciuto il film.",
    soluzioni: [
      "Did you like the film?",
      "Did you enjoy the film?",
      "Did you like the movie?",
      "Did you enjoy the movie?",
      "So, did you like the film?",
    ],
    tempo: "past simple",
    parole: [
      ["piacere", "like", "il soggetto è chi prova il piacere: «ti è piaciuto» → you + like"],
      ["godersi / divertirsi con", "enjoy"],
      ["film", "film / movie", "film è britannico, movie americano"],
    ],
    suggerimenti: [
      "Il film l'ha visto ieri sera: azione finita in un momento preciso. Quale tempo? E come si costruisce una domanda in quel tempo?",
      "Ausiliare del passato all'inizio + soggetto + verbo base. Attenzione alla costruzione di «piacere»: il soggetto inglese è la persona, non il film.",
    ],
    simile: "Did you enjoy the concert?",
    spiegazione:
      "Domande al past simple: Did + soggetto + verbo base. E «ti è piaciuto?» si rovescia: Did you like...?",
    lezione: "lezione 24{3}",
  },
  {
    id: "a2-nato",
    livello: "A2",
    contesto:
      "Compili un modulo all'ufficio dell'università e l'impiegato, per controllare i dati, ti chiede dove e quando sei nato. Sei nato a Napoli nel 2005.",
    consegna: "Rispondi che sei nato a Napoli nel 2005.",
    soluzioni: [
      "I was born in Naples in 2005.",
      "I was born in Naples in two thousand and five.",
      "I was born in 2005 in Naples.",
    ],
    tempo: "past simple",
    parole: [
      ["Napoli", "Naples"],
      ["nascere", "be born", "in inglese è un passivo"],
      ["2005", "two thousand and five"],
    ],
    suggerimenti: [
      "La tua nascita è un fatto concluso nel passato. Ma attenzione: in inglese «nascere» non è un verbo normale, si costruisce con «essere». Allora quale forma di «essere» al passato?",
      "Passato di «essere» (prima persona singolare) + il participio di «portare alla luce». Davanti alla città e davanti all'anno va la stessa preposizione.",
    ],
    simile: "My grandmother was born in Sicily in 1950.",
    spiegazione:
      "Nascere = be born: I was born (mai «I am born» per parlare della propria nascita). In + città, in + anno.",
    lezione: "lezione 21{3}",
  },
  {
    id: "a2-superlativo",
    livello: "A2",
    contesto:
      "Porti un'amica italiana in visita a mangiare in una piccola pizzeria di Jericho. Dopo il primo morso lei ti guarda stupita.",
    consegna: "Dille che è la pizza migliore di tutta Oxford.",
    soluzioni: [
      "It's the best pizza in Oxford.",
      "It is the best pizza in Oxford.",
      "This is the best pizza in Oxford.",
      "This is the best pizza in Oxford!",
      "It's the best pizza in Oxford!",
    ],
    tempo: "present simple",
    parole: [
      ["pizza", "pizza"],
      ["Oxford", "Oxford"],
    ],
    suggerimenti: [
      "È un giudizio che vale in generale, non solo adesso. Quale tempo? Poi: stai confrontando quella pizza con TUTTE le altre: che grado dell'aggettivo serve?",
      "Superlativo: articolo determinativo + la forma irregolare di «buono» al massimo grado. Dopo un superlativo, per un luogo, la preposizione non è «of».",
    ],
    simile: "It's the oldest pub in London.",
    spiegazione:
      "Good è irregolare: good, better, the best. Dopo il superlativo i luoghi vogliono in: the best in Oxford (non «of Oxford»).",
    lezione: "lezione 26{4}",
  },
  {
    id: "a2-previsione",
    livello: "A2",
    contesto:
      "State per uscire a fare un picnic nei University Parks. Guardi fuori: il cielo è nerissimo, nuvole basse e un tuono in lontananza.",
    consegna: "Avverti i tuoi amici che sta per piovere.",
    soluzioni: [
      "It's going to rain.",
      "It is going to rain.",
      "It's going to rain soon.",
      "Look at the sky, it's going to rain.",
      "Look at those clouds, it's going to rain.",
    ],
    tempo: "going to",
    parole: [
      ["piovere", "rain"],
      ["presto", "soon"],
      ["nuvole", "clouds"],
      ["cielo", "sky"],
    ],
    suggerimenti: [
      "È una previsione sul futuro, ma non a caso: hai una prova davanti agli occhi (le nuvole). Quale forma del futuro si usa per le previsioni basate su ciò che vedi?",
      "Soggetto impersonale (il tempo atmosferico non ha un soggetto vero) + forma di «essere» + la forma del futuro che indica intenzione o evidenza + verbo base.",
    ],
    simile: "Look out! That glass is going to fall.",
    spiegazione:
      "Be going to si usa per le previsioni basate su prove presenti: vedo le nuvole → it's going to rain. Per il tempo atmosferico il soggetto è it.",
    lezione: "lezione 27{3}",
  },
  {
    id: "a2-promessa",
    livello: "A2",
    contesto:
      "Saluti la tua amica alla stazione dopo un weekend insieme. Lei è un po' triste. Le prometti che la chiamerai domani.",
    consegna: "Promettile che la chiamerai domani.",
    soluzioni: [
      "I'll call you tomorrow.",
      "I will call you tomorrow.",
      "I'll phone you tomorrow.",
      "I will phone you tomorrow.",
      "I'll call you tomorrow, I promise.",
      "I promise I'll call you tomorrow.",
    ],
    tempo: "future simple",
    parole: [
      ["chiamare (al telefono)", "call / phone"],
      ["domani", "tomorrow"],
      ["prometto", "I promise"],
    ],
    suggerimenti: [
      "È una promessa sul futuro, decisa in questo momento. Quale forma del futuro si usa per promesse e offerte?",
      "Soggetto + il modale del futuro (di solito contratto) + verbo base + la persona (complemento) + il momento.",
    ],
    simile: "I'll help you with your homework.",
    spiegazione:
      "Will si usa per promesse, offerte e decisioni prese sul momento: I'll call you. Going to indicherebbe invece un piano già deciso prima.",
    lezione: "lezione 28{3}",
  },
  {
    id: "a2-forse",
    livello: "A2",
    contesto:
      "Un amico ti chiede che cosa fai questo weekend. Stai pensando di andare a Londra, ma non hai ancora deciso: dipende dal tempo e dai soldi.",
    consegna: "Digli che forse andrai a Londra questo weekend.",
    soluzioni: [
      "I might go to London this weekend.",
      "I may go to London this weekend.",
      "I might go to London at the weekend.",
      "I may go to London at the weekend.",
      "Maybe I'll go to London this weekend.",
      "Perhaps I'll go to London this weekend.",
    ],
    tempo: "might|may|future simple",
    parole: [
      ["andare", "go"],
      ["Londra", "London"],
      ["questo weekend", "this weekend / at the weekend"],
    ],
    suggerimenti: [
      "Non è un piano deciso né una certezza: è una possibilità. Quale modale esprime un futuro incerto («può darsi che»)?",
      "Soggetto + modale della possibilità + verbo base, senza «to». In alternativa: un avverbio che vuol dire «forse» + il futuro con will.",
    ],
    simile: "We might have a barbecue on Sunday.",
    spiegazione:
      "Might (o may) + verbo base esprime una possibilità futura, meno sicura di will e di going to.",
    lezione: "lezione 28{5}",
  },
  {
    id: "a2-appena",
    livello: "A2",
    contesto:
      "Arrivi di corsa al binario e vedi le luci rosse dell'ultimo vagone che si allontanano. Il tuo amico ti telefona per sapere se sei sul treno.",
    consegna: "Digli che il treno è appena partito.",
    soluzioni: [
      "The train has just left.",
      "The train's just left.",
      "It has just left.",
      "It's just left.",
      "I missed it, the train has just left.",
      "No, the train has just left.",
    ],
    tempo: "present perfect",
    parole: [
      ["treno", "train"],
      ["partire", "leave", "verbo irregolare"],
    ],
    suggerimenti: [
      "È successo pochi secondi fa e il risultato si vede adesso (sei ancora sul binario). Quale tempo collega un'azione appena finita al presente?",
      "Present perfect: ausiliare (terza persona) + participio passato irregolare di «partire». L'avverbio che significa «appena» va tra l'ausiliare e il participio.",
    ],
    simile: "She has just arrived.",
    spiegazione:
      "Just + present perfect indica un'azione appena conclusa: has just left. In inglese britannico è molto più naturale del past simple.",
    lezione: "lezione 30{3}",
  },
  {
    id: "a2-non-ancora",
    livello: "A2",
    contesto:
      "La tua tutor ti scrive per sapere se hai finito il saggio da consegnare venerdì. Sei a metà e ci stai ancora lavorando.",
    consegna: "Rispondi che non l'hai ancora finito.",
    soluzioni: [
      "I haven't finished it yet.",
      "I have not finished it yet.",
      "I haven't finished my essay yet.",
      "I have not finished my essay yet.",
      "I haven't finished the essay yet.",
      "Sorry, I haven't finished it yet.",
    ],
    tempo: "present perfect",
    parole: [
      ["finire", "finish"],
      ["saggio", "essay"],
      ["lo (il saggio)", "it"],
    ],
    suggerimenti: [
      "Il periodo di cui parli non è finito: fino a questo momento il lavoro non è concluso, ma lo sarà. Quale tempo si usa?",
      "Present perfect negativo: ausiliare + not + participio. L'avverbio che significa «ancora» nelle frasi negative va alla fine della frase.",
    ],
    simile: "We haven't decided yet.",
    spiegazione:
      "Yet si usa nelle negative e nelle domande col present perfect e va in fondo: I haven't finished it yet. Still sarebbe «ancora» nel senso di «continua a».",
    lezione: "lezione 30{4}",
  },
  {
    id: "a2-dal",
    livello: "A2",
    contesto:
      "Un turista ti ferma per strada e, sentendoti parlare, ti chiede da quanto vivi a Oxford. Ti sei trasferito a settembre e ci vivi ancora.",
    consegna: "Rispondi che vivi a Oxford da settembre.",
    soluzioni: [
      "I've lived in Oxford since September.",
      "I have lived in Oxford since September.",
      "I've been living in Oxford since September.",
      "I have been living in Oxford since September.",
      "I've lived here since September.",
      "I have lived here since September.",
      "I've been living here since September.",
    ],
    tempo: "present perfect|present perfect continuous",
    parole: [
      ["vivere / abitare", "live"],
      ["qui", "here"],
      ["settembre", "September", "i mesi vogliono la maiuscola"],
    ],
    suggerimenti: [
      "In italiano diciamo «vivo da settembre», al presente. Ma la situazione è iniziata nel passato e continua adesso: quale tempo inglese unisce passato e presente?",
      "Present perfect (ausiliare + participio). Per indicare il PUNTO di partenza (un mese, una data) quale preposizione: for o since?",
    ],
    simile: "She has worked here since 2020.",
    spiegazione:
      "Da + momento d'inizio = since: I've lived here since September. Con una durata (da tre mesi) si usa for. «I live here since...» è l'errore tipico degli italiani.",
    lezione: "lezione 31{2}",
  },
  {
    id: "a2-divieto",
    livello: "A2",
    contesto:
      "Sei in biblioteca alla Bodleian. Un nuovo studente si siede accanto a te e tira fuori un panino. Il regolamento è chiarissimo: niente cibo.",
    consegna: "Avvertilo che lì dentro non si può mangiare (è vietato).",
    soluzioni: [
      "You mustn't eat here.",
      "You must not eat here.",
      "You mustn't eat in here.",
      "You must not eat in here.",
      "You mustn't eat in the library.",
      "You can't eat here.",
      "You cannot eat here.",
      "Sorry, you can't eat here.",
    ],
    tempo: "must|can",
    parole: [
      ["mangiare", "eat"],
      ["qui (dentro)", "here / in here"],
      ["biblioteca", "library"],
    ],
    suggerimenti: [
      "È un divieto, una regola da rispettare. Quale modale negativo esprime «è vietato»? (Attenzione: non è lo stesso di «non è necessario».)",
      "Soggetto + modale dell'obbligo con la negazione (spesso contratta) + verbo base + il luogo. Va bene anche il modale della possibilità al negativo.",
    ],
    simile: "You mustn't use your phone during the exam.",
    spiegazione:
      "Mustn't = è vietato. Non va confuso con don't have to, che vuol dire «non è necessario». Anche can't si usa spesso per le regole.",
    lezione: "lezione 32{3}",
  },
  {
    id: "a2-non-necessario",
    livello: "A2",
    contesto:
      "Accompagni un'amica italiana al British Museum. All'ingresso lei tira fuori il portafoglio, ma tu sai che l'entrata è gratuita.",
    consegna: "Dille che non deve pagare (non è necessario).",
    soluzioni: [
      "You don't have to pay.",
      "You do not have to pay.",
      "You don't need to pay.",
      "You don't have to pay, it's free.",
      "You don't need to pay, it's free.",
      "You don't have to pay anything.",
    ],
    tempo: "have to|present simple",
    parole: [
      ["pagare", "pay"],
      ["gratis", "free"],
      ["niente (in una frase negativa)", "anything"],
    ],
    suggerimenti: [
      "Non è un divieto: lei può pagare se vuole, ma non è obbligata. Quale forma esprime l'ASSENZA di obbligo?",
      "La forma negativa di «dovere» che si costruisce come un verbo normale: ausiliare negativo + verbo dell'obbligo + to + verbo base. Non usare il modale che vuol dire «è vietato».",
    ],
    simile: "You don't have to come if you're tired.",
    spiegazione:
      "Don't have to = non è necessario; mustn't = è vietato. «You mustn't pay» vorrebbe dire che pagare è proibito!",
    lezione: "lezione 32{3}",
  },
  {
    id: "a2-avverbio",
    livello: "A2",
    contesto:
      "Presenti la tua amica Chiara a un professore. Lui le chiede da quanto è in Inghilterra; lei ci è appena arrivata, ma parla un inglese perfetto. Il professore è colpito.",
    consegna: "Spiegagli che Chiara parla inglese molto bene.",
    soluzioni: [
      "Chiara speaks English very well.",
      "She speaks English very well.",
      "Chiara speaks very good English.",
      "She speaks very good English.",
      "Chiara speaks English really well.",
      "She speaks English really well.",
    ],
    tempo: "present simple",
    parole: [
      ["parlare (una lingua)", "speak"],
      ["inglese (la lingua)", "English"],
    ],
    suggerimenti: [
      "È una capacità stabile di Chiara, non un'azione di adesso. Quale tempo serve, e che cosa succede al verbo con «lei»?",
      "Present simple, terza persona. «Bene» descrive COME parla, quindi serve un avverbio (quello di «good» è irregolare). L'avverbio va dopo la lingua, non tra verbo e complemento.",
    ],
    simile: "He plays the piano beautifully.",
    spiegazione:
      "L'avverbio di good è well (non goodly). E l'ordine è verbo + oggetto + avverbio: speaks English very well, mai «speaks very well English».",
    lezione: "lezione 33{4}",
  },
  {
    id: "a2-could-passato",
    livello: "A2",
    contesto:
      "In piscina un amico inglese si stupisce di quanto nuoti bene. Gli racconti che hai imparato prestissimo: a cinque anni nuotavi già.",
    consegna: "Digli che sapevi nuotare quando avevi cinque anni.",
    soluzioni: [
      "I could swim when I was five.",
      "I could swim when I was five years old.",
      "I could swim when I was 5.",
      "When I was five, I could swim.",
      "When I was five I could already swim.",
      "I could already swim when I was five.",
    ],
    tempo: "could",
    parole: [
      ["nuotare", "swim"],
      ["cinque", "five"],
      ["già", "already"],
    ],
    suggerimenti: [
      "È una capacità che avevi nel passato. Qual è il passato del modale che esprime il «saper fare»?",
      "Il passato di can + verbo base. Nella seconda parte, l'età si dice con «essere» al passato (non con «avere»).",
    ],
    simile: "My grandfather could speak four languages.",
    spiegazione:
      "Could è il passato di can per le capacità generali: I could swim. L'età vuole was, non had: when I was five.",
    lezione: "lezione 25{5}",
  },
  {
    id: "a2-any",
    livello: "A2",
    contesto:
      "Prepari la colazione per i tuoi coinquilini. Apri il frigorifero per il tè all'inglese, ma il cartone del latte è sparito.",
    consegna: "Di' ai coinquilini che non c'è latte nel frigo.",
    soluzioni: [
      "There isn't any milk in the fridge.",
      "There is not any milk in the fridge.",
      "There's no milk in the fridge.",
      "There is no milk in the fridge.",
      "There isn't any milk.",
      "There's no milk.",
    ],
    tempo: "present simple",
    parole: [
      ["latte", "milk", "non numerabile"],
      ["frigo", "fridge"],
    ],
    suggerimenti: [
      "Descrivi una situazione presente: qualcosa che NON esiste in un luogo. Quale espressione si usa per «c'è», e come si fa negativa?",
      "Il latte non si conta: quindi singolare. Nelle frasi negative si usa il quantificatore che corrisponde a «nessuno / per niente»; oppure, senza la negazione nel verbo, la parola che vuol dire «nessun».",
    ],
    simile: "There isn't any sugar in the cupboard.",
    spiegazione:
      "Nelle negative si usa any (there isn't any milk) oppure no con il verbo affermativo (there's no milk). Mai due negazioni insieme: «there isn't no milk» è sbagliato.",
    lezione: "lezione 18{3}",
  },
  {
    id: "a2-zero-condizionale",
    livello: "A2",
    contesto:
      "Aiuti il fratellino della famiglia che ti ospita con i compiti di scienze. Lui non capisce perché il ghiaccio nel bicchiere sparisce. Gli spieghi la regola generale.",
    consegna: "Spiegagli che se scaldi il ghiaccio, si scioglie.",
    soluzioni: [
      "If you heat ice, it melts.",
      "If you heat ice it melts.",
      "Ice melts if you heat it.",
      "When you heat ice, it melts.",
      "If you heat ice, it turns into water.",
    ],
    tempo: "present simple",
    parole: [
      ["scaldare", "heat"],
      ["ghiaccio", "ice", "non numerabile, senza articolo"],
      ["sciogliersi", "melt"],
      ["diventare", "turn into"],
    ],
    suggerimenti: [
      "Non è un'ipotesi su un caso particolare: è una legge che vale sempre. Quale periodo ipotetico si usa per le verità generali e le leggi scientifiche?",
      "Zero conditional: in tutte e due le parti lo stesso tempo, quello delle verità generali. Il soggetto della frase con if è «tu» generico; nell'altra il ghiaccio, ripreso da un pronome.",
    ],
    simile: "If you mix blue and yellow, you get green.",
    spiegazione:
      "Zero conditional: if + present simple, present simple. Si usa per le cose sempre vere (leggi scientifiche, regole). Ice è non numerabile: niente articolo.",
    lezione: "lezione 34{2}",
  },
  {
    id: "a2-intenzione",
    livello: "A2",
    contesto:
      "Sei all'ultimo anno di liceo. Durante un open day a Oxford un professore ti chiede che cosa vuoi fare dopo. Hai già deciso da tempo: medicina.",
    consegna: "Digli che studierai medicina (è un'intenzione già decisa).",
    soluzioni: [
      "I'm going to study medicine.",
      "I am going to study medicine.",
      "I'm going to study medicine at university.",
      "I'm going to study medicine here.",
    ],
    tempo: "going to",
    parole: [
      ["studiare", "study"],
      ["medicina", "medicine"],
      ["all'università", "at university"],
    ],
    suggerimenti: [
      "È un progetto per il futuro che avevi già deciso PRIMA di questa conversazione. Quale forma del futuro esprime un'intenzione?",
      "«Essere» + la forma che significa «avere intenzione di» + to + verbo base.",
    ],
    simile: "She's going to learn to drive.",
    spiegazione:
      "Be going to esprime un'intenzione già decisa. Will si usa invece per le decisioni prese sul momento.",
    lezione: "lezione 27{2}",
  },
  {
    id: "a2-appuntamento",
    livello: "A2",
    contesto:
      "Un compagno ti propone un caffè oggi pomeriggio alle tre. Non puoi: hai già fissato un incontro con la tua tutor a quell'ora, è segnato in agenda.",
    consegna: "Digli che alle tre vedi la tua tutor (appuntamento già fissato).",
    soluzioni: [
      "I'm meeting my tutor at three.",
      "I am meeting my tutor at three.",
      "Sorry, I'm meeting my tutor at three.",
      "I'm seeing my tutor at three.",
      "I'm meeting my tutor at three o'clock.",
      "I'm meeting my tutor at 3.",
    ],
    tempo: "present continuous",
    parole: [
      ["incontrare / vedere", "meet / see"],
      ["tutor", "tutor"],
      ["alle tre", "at three"],
    ],
    suggerimenti: [
      "È un appuntamento fissato, con un'ora e una persona precise. Per questi programmi l'inglese usa un tempo presente. Quale?",
      "Present continuous («essere» + -ing) + la persona + l'ora. Non serve will.",
    ],
    simile: "We're having dinner with my parents on Friday.",
    spiegazione:
      "Per gli appuntamenti già fissati (con ora, luogo, persone) si usa il present continuous: I'm meeting my tutor at three.",
    lezione: "lezione 27{4}",
  },
  {
    id: "a2-orario-treno",
    livello: "A2",
    contesto:
      "Tu e il tuo amico dovete prendere il primo treno per Londra domani. Lui ti chiede a che ora parte. Hai controllato sul sito: alle sei e dieci.",
    consegna: "Digli che il treno parte alle sei e dieci.",
    soluzioni: [
      "The train leaves at ten past six.",
      "The train leaves at six ten.",
      "It leaves at ten past six.",
      "It leaves at six ten.",
      "The train departs at ten past six.",
    ],
    tempo: "present simple",
    parole: [
      ["treno", "train"],
      ["partire", "leave / depart"],
      ["le sei e dieci", "ten past six / six ten"],
    ],
    suggerimenti: [
      "È domani, ma è un orario ufficiale, fisso, come quello di un tabellone. Quale tempo si usa per gli orari dei mezzi, anche nel futuro?",
      "Present simple (terza persona) + la preposizione delle ore + l'ora. All'inglese britannico: prima i minuti, poi una preposizione che significa «dopo», poi l'ora.",
    ],
    simile: "The film starts at half past eight.",
    spiegazione:
      "Orari e programmi ufficiali vogliono il present simple anche nel futuro: The train leaves at 6:10.",
    lezione: "lezione 27{6}",
  },
  {
    id: "a2-progetti-estate",
    livello: "A2",
    contesto:
      "Una collega ti chiede che programmi hai per l'estate. Tu e la tua ragazza avete già deciso: farete un giro della Scozia in macchina.",
    consegna: "Dille che quest'estate farete il giro della Scozia.",
    soluzioni: [
      "We're going to travel around Scotland this summer.",
      "We are going to travel around Scotland this summer.",
      "This summer we're going to travel around Scotland.",
      "We're going to tour Scotland this summer.",
      "We're going to drive around Scotland this summer.",
    ],
    tempo: "going to",
    parole: [
      ["viaggiare / girare", "travel around / tour"],
      ["guidare", "drive"],
      ["Scozia", "Scotland"],
      ["quest'estate", "this summer"],
    ],
    suggerimenti: [
      "È un progetto già deciso. Quale forma del futuro esprime un'intenzione?",
      "Soggetto «noi» + «essere» + la forma dell'intenzione + to + verbo base + la preposizione che significa «in giro per» + la Scozia + quando.",
    ],
    simile: "They're going to visit their cousins in Ireland.",
    spiegazione:
      "Be going to per i piani già decisi. This summer, next year, tomorrow non vogliono preposizioni.",
    lezione: "lezione 27{7}",
  },
  {
    id: "a2-non-lo-compro",
    livello: "A2",
    contesto:
      "Sei in un negozio di elettronica con un amico. Lui insiste perché tu compri l'ultimo modello di telefono. Costa mille sterline: hai deciso, non lo comprerai.",
    consegna: "Digli che non hai intenzione di comprarlo.",
    soluzioni: [
      "I'm not going to buy it.",
      "I am not going to buy it.",
      "I'm not going to buy it, it's too expensive.",
      "No, I'm not going to buy it.",
    ],
    tempo: "going to",
    parole: [
      ["comprare", "buy"],
      ["troppo caro", "too expensive"],
    ],
    suggerimenti: [
      "È un'intenzione (negativa) già decisa. Quale forma del futuro? Come si fa la negativa?",
      "«Essere» + not + la forma dell'intenzione + to + verbo base + il pronome per il telefono.",
    ],
    simile: "We're not going to wait any longer.",
    spiegazione:
      "La negativa di be going to: I'm not going to + verbo base. Esprime una decisione già presa di non fare qualcosa.",
    lezione: "lezione 27{2}",
  },
  {
    id: "a2-dopo-universita",
    livello: "A2",
    contesto:
      "Il tuo amico Oliver si laurea tra un mese. Hai l'impressione che abbia già dei progetti, ma non te ne ha mai parlato.",
    consegna: "Chiedigli che cosa farà dopo l'università.",
    soluzioni: [
      "What are you going to do after university?",
      "So what are you going to do after university?",
      "What are you going to do after you graduate?",
      "What are you going to do when you finish university?",
    ],
    tempo: "going to",
    parole: [
      ["fare", "do"],
      ["dopo", "after"],
      ["laurearsi", "graduate"],
    ],
    suggerimenti: [
      "Gli chiedi le sue intenzioni per il futuro. Quale forma del futuro si usa? Come diventa una domanda aperta?",
      "Parola interrogativa + «essere» prima del soggetto + la forma dell'intenzione + to + verbo base + «dopo l'università» (senza articolo).",
    ],
    simile: "Where are you going to live next year?",
    spiegazione:
      "Domanda con going to: What are you going to do? Dopo after, when, if il futuro si esprime con il presente: after you graduate.",
    lezione: "lezione 27{2}",
  },
  {
    id: "a2-offerta",
    livello: "A2",
    contesto:
      "Alla stazione vedi un'anziana signora che fatica a salire le scale con una borsa pesantissima.",
    consegna: "Offriti di portarle la borsa.",
    soluzioni: [
      "I'll carry your bag.",
      "I'll carry your bag for you.",
      "Let me help you. I'll carry your bag.",
      "I'll carry it for you.",
      "Don't worry, I'll carry your bag.",
      "Shall I carry your bag?",
    ],
    tempo: "future simple|shall",
    parole: [
      ["portare (in braccio, a mano)", "carry"],
      ["borsa", "bag"],
      ["per te", "for you"],
    ],
    suggerimenti: [
      "Ti offri di fare qualcosa, una decisione presa in questo istante. Quale forma del futuro si usa per le offerte spontanee? (In alternativa: un modale per proporre, in forma di domanda.)",
      "Soggetto + il modale del futuro contratto + verbo base + «la tua borsa». Oppure: il modale delle proposte + io + verbo base?",
    ],
    simile: "I'll open the door for you.",
    spiegazione:
      "Will si usa per le offerte decise sul momento: I'll carry it. Shall I...? è la forma interrogativa per offrirsi. Portare un peso = carry (bring è portare verso qualcuno).",
    lezione: "lezione 28{3}",
  },
  {
    id: "a2-ti-piacera",
    livello: "A2",
    contesto:
      "Una tua cugina arriva a Oxford per un anno di studio ed è un po' preoccupata. Tu ci vivi da tempo e sei sicuro che si troverà benissimo.",
    consegna: "Dille che pensi che Oxford le piacerà moltissimo.",
    soluzioni: [
      "I think you'll love Oxford.",
      "I think you will love Oxford.",
      "I'm sure you'll love Oxford.",
      "I think you'll love it.",
      "I'm sure you'll love it here.",
      "Don't worry, I think you'll love Oxford.",
    ],
    tempo: "future simple",
    parole: [
      ["adorare / piacere moltissimo", "love"],
      ["sono sicuro", "I'm sure"],
    ],
    suggerimenti: [
      "È una previsione basata sulla tua opinione (non su prove che vedi). Quale futuro si usa per le previsioni personali?",
      "«Penso che» (senza that, va bene) + soggetto + il modale del futuro contratto + «amare» + la città.",
    ],
    simile: "I'm sure you'll pass the exam.",
    spiegazione:
      "Will per le previsioni basate su un'opinione, spesso dopo I think, I'm sure, probably. Going to quando hai una prova davanti agli occhi.",
    lezione: "lezione 28{4}",
  },
  {
    id: "a2-non-lo-diro",
    livello: "A2",
    contesto:
      "La tua amica ti confida che si è innamorata di un ragazzo del vostro corso. È imbarazzatissima e ti chiede di mantenere il segreto.",
    consegna: "Promettile che non lo dirai a nessuno.",
    soluzioni: [
      "I won't tell anyone.",
      "I will not tell anyone.",
      "Don't worry, I won't tell anyone.",
      "I promise I won't tell anyone.",
      "I won't tell anybody.",
      "I won't tell anyone, I promise.",
    ],
    tempo: "future simple",
    parole: [
      ["dire (a qualcuno)", "tell"],
      ["nessuno (in una frase negativa)", "anyone / anybody"],
      ["prometto", "I promise"],
    ],
    suggerimenti: [
      "È una promessa sul futuro. Quale forma del futuro, e come si fa la sua negativa (che ha una contrazione irregolare)?",
      "Soggetto + la negativa contratta di will + «dire» + la parola per «nessuno» che si usa quando la frase è già negativa.",
    ],
    simile: "I won't be late, I promise.",
    spiegazione:
      "La negativa di will è won't (will not). In una frase già negativa «nessuno» è anyone: I won't tell anyone (non «I won't tell nobody»).",
    lezione: "lezione 28{3}",
  },
  {
    id: "a2-potrei-non-venire",
    livello: "A2",
    contesto:
      "Stasera c'è la cena di classe al pub. Tu hai un forte mal di testa e non sai se starai meglio. Avvisi la tua amica che organizza.",
    consegna: "Dille che forse non verrai stasera.",
    soluzioni: [
      "I may not come tonight.",
      "I might not come tonight.",
      "I may not come this evening.",
      "I might not come this evening.",
      "Sorry, I might not come tonight.",
      "I might not be able to come tonight.",
    ],
    tempo: "may|might",
    parole: [
      ["venire", "come"],
      ["stasera", "tonight / this evening"],
    ],
    suggerimenti: [
      "È una possibilità, non una decisione. Quale modale esprime che una cosa forse (non) succederà? Come diventa negativo?",
      "Soggetto + modale della possibilità + not (di solito non contratto) + verbo base + quando.",
    ],
    simile: "It might not rain tomorrow.",
    spiegazione:
      "May not / might not + verbo base = forse non. Mightn't esiste ma è rara; mayn't non si usa.",
    lezione: "lezione 28{5}",
  },
  {
    id: "a2-apro-finestra",
    livello: "A2",
    contesto:
      "Durante una riunione nell'ufficio della professoressa fa caldissimo. Lei si sventola con un foglio. Tu sei seduto vicino alla finestra.",
    consegna: "Proponile di aprire tu la finestra («apro la finestra?»).",
    soluzioni: [
      "Shall I open the window?",
      "Shall I open the window for you?",
      "Should I open the window?",
      "Would you like me to open the window?",
    ],
    tempo: "shall|should|conditional",
    parole: [
      ["aprire", "open"],
      ["finestra", "window"],
    ],
    suggerimenti: [
      "Ti offri di fare qualcosa e chiedi se va bene. In inglese britannico c'è un modale apposta per queste proposte in forma di domanda. Quale?",
      "Il modale delle proposte (prima persona) prima del soggetto + io + verbo base + la finestra.",
    ],
    simile: "Shall I call a taxi?",
    spiegazione:
      "Shall I...? serve per offrirsi di fare qualcosa (= vuoi che...?). Shall we...? per proporre di fare qualcosa insieme.",
    lezione: "lezione 28{3}",
  },
  {
    id: "a2-probabilmente-ritardo",
    livello: "A2",
    contesto:
      "Aspettate il vostro amico Sam per iniziare la cena. Sam non è mai arrivato puntuale in vita sua. Qualcuno propone di aspettarlo per mangiare.",
    consegna: "Di' che probabilmente arriverà in ritardo.",
    soluzioni: [
      "He'll probably be late.",
      "He will probably be late.",
      "Sam will probably be late.",
      "He'll probably arrive late.",
      "He will probably arrive late.",
    ],
    tempo: "future simple",
    parole: [
      ["probabilmente", "probably"],
      ["in ritardo", "late"],
      ["arrivare", "arrive"],
    ],
    suggerimenti: [
      "È una previsione basata su quello che sai di lui. Quale futuro? E dove si mette l'avverbio «probabilmente»?",
      "Soggetto + il modale del futuro (contratto) + l'avverbio + «essere» alla forma base + «in ritardo».",
    ],
    simile: "It'll probably rain later.",
    spiegazione:
      "Probably va dopo will (he'll probably be late), ma prima di won't (he probably won't come).",
    lezione: "lezione 28{6}",
  },
  {
    id: "a2-mai-stato",
    livello: "A2",
    contesto:
      "Un compagno di corso di Londra ti dice che sogna di fare trekking nelle Highlands. Ti viene il dubbio che non ci sia mai andato e vuoi chiederglielo.",
    consegna: "Chiedigli se è mai stato in Scozia (in tutta la sua vita).",
    soluzioni: [
      "Have you ever been to Scotland?",
      "Have you ever been to Scotland before?",
      "Have you been to Scotland before?",
    ],
    tempo: "present perfect",
    parole: [
      ["Scozia", "Scotland"],
      ["mai (nelle domande)", "ever"],
      ["prima", "before"],
    ],
    suggerimenti: [
      "Chiedi di un'esperienza in tutta la vita, senza dire quando. Quale tempo si usa per le esperienze?",
      "Domanda al present perfect: ausiliare + soggetto + la parola per «mai» nelle domande + il participio di «essere» + la preposizione di movimento + il paese.",
    ],
    simile: "Have you ever eaten sushi?",
    spiegazione:
      "Per le esperienze si usa il present perfect con ever nelle domande: Have you ever been to...? Been to = esserci stato (andato e tornato).",
    lezione: "lezione 29{3}",
  },
  {
    id: "a2-mai-assaggiato",
    livello: "A2",
    contesto:
      "Sei a cena in un ristorante scozzese e il cameriere consiglia l'haggis, il piatto tipico. Tu non l'hai mai assaggiato in vita tua.",
    consegna: "Di' che non hai mai assaggiato l'haggis.",
    soluzioni: [
      "I've never tried haggis.",
      "I have never tried haggis.",
      "I've never eaten haggis.",
      "I have never eaten haggis.",
      "I've never tasted haggis.",
      "I've never tried haggis before.",
    ],
    tempo: "present perfect",
    parole: [
      ["assaggiare / provare", "try / taste"],
      ["mangiare", "eat", "verbo irregolare"],
      ["haggis", "haggis"],
    ],
    suggerimenti: [
      "È un'esperienza che non hai mai fatto in tutta la vita fino a oggi. Quale tempo serve? Come si dice «mai» senza aggiungere not?",
      "Soggetto + ausiliare (contratto) + la parola che significa «mai» (già negativa) + il participio di «provare».",
    ],
    simile: "She's never seen the sea.",
    spiegazione:
      "I've never + participio: esperienza mai fatta. Never è già negativo: «I haven't never» è sbagliato.",
    lezione: "lezione 29{3}",
  },
  {
    id: "a2-andata-a-londra",
    livello: "A2",
    contesto:
      "Qualcuno bussa e chiede della tua coinquilina Emma. Stamattina è partita per Londra e non è ancora tornata: in questo momento è lì.",
    consegna: "Spiega che Emma è andata a Londra (ed è ancora là).",
    soluzioni: [
      "She's gone to London.",
      "She has gone to London.",
      "Emma has gone to London.",
      "Emma's gone to London.",
      "Sorry, she's gone to London.",
    ],
    tempo: "present perfect",
    parole: [["Londra", "London"]],
    suggerimenti: [
      "È partita stamattina e il risultato è presente: non è qui. Quale tempo? E attenzione: ci sono due participi possibili di «andare» con significati diversi. Quale indica che NON è ancora tornata?",
      "Ausiliare (terza persona) + il participio di «andare» che vuol dire «è là adesso» (non quello di «essere») + to + la città.",
    ],
    simile: "Tom has gone to the shops.",
    spiegazione:
      "She has gone to London = è andata ed è ancora là. She has been to London = c'è stata (ed è tornata).",
    lezione: "lezione 29{4}",
  },
  {
    id: "a2-perso-chiavi",
    livello: "A2",
    contesto:
      "Sono le undici di sera e sei davanti alla porta di casa. Frughi in tutte le tasche: le chiavi non ci sono. Chiami il tuo coinquilino.",
    consegna: "Digli che hai perso le chiavi.",
    soluzioni: [
      "I've lost my keys.",
      "I have lost my keys.",
      "I've lost my keys!",
      "Help! I've lost my keys.",
      "I think I've lost my keys.",
    ],
    tempo: "present perfect",
    parole: [
      ["perdere", "lose", "verbo irregolare"],
      ["chiavi", "keys"],
    ],
    suggerimenti: [
      "Non conta quando le hai perse: conta il risultato ADESSO (non puoi entrare). Quale tempo collega un fatto passato a una conseguenza presente?",
      "Present perfect: ausiliare + participio irregolare di «perdere» + il possessivo + chiavi. In inglese davanti alle cose tue serve il possessivo, non l'articolo.",
    ],
    simile: "Oh no, I've forgotten my wallet!",
    spiegazione:
      "Il present perfect esprime un risultato presente: I've lost my keys (e quindi non posso entrare). Con le proprie cose si usa il possessivo: my keys.",
    lezione: "lezione 29{5}",
  },
  {
    id: "a2-rotto-telefono",
    livello: "A2",
    contesto:
      "Tua madre ti scrive preoccupata: non rispondi alle chiamate da due giorni. Le rispondi dal computer: il telefono ti è caduto e lo schermo è a pezzi.",
    consegna: "Scrivile che hai rotto il telefono.",
    soluzioni: [
      "I've broken my phone.",
      "I have broken my phone.",
      "Sorry, I've broken my phone.",
      "Sorry Mum, I've broken my phone.",
      "I've broken my phone, sorry.",
    ],
    tempo: "present perfect",
    parole: [
      ["rompere", "break", "verbo irregolare"],
      ["telefono", "phone"],
      ["mamma", "Mum"],
    ],
    suggerimenti: [
      "La conseguenza è ancora presente (non puoi telefonare) e non dici quando è successo. Quale tempo?",
      "Present perfect: ausiliare + il participio irregolare di «rompere» (controlla i paradigmi: è diverso dal passato) + il possessivo + telefono.",
    ],
    simile: "He's broken his leg.",
    spiegazione:
      "Break è irregolare: break, broke, broken. Il participio (broken) serve per il present perfect: I've broken.",
    lezione: "lezione 29{6}",
  },
  {
    id: "a2-quando-arrivato",
    livello: "A2",
    contesto:
      "Un amico ti dice che suo cugino è a Oxford per una settimana di vacanza. Vuoi sapere il giorno preciso in cui è arrivato.",
    consegna: "Chiedigli quando è arrivato suo cugino.",
    soluzioni: [
      "When did your cousin arrive?",
      "When did he arrive?",
      "When did your cousin get here?",
      "When did he get here?",
      "So when did your cousin arrive?",
    ],
    tempo: "past simple",
    parole: [
      ["arrivare", "arrive / get here"],
      ["cugino", "cousin"],
    ],
    suggerimenti: [
      "Chiedi QUANDO: la risposta sarà un momento preciso del passato. Che tempo vuole when? (Attenzione: con when non si usa il present perfect.)",
      "Parola interrogativa + l'ausiliare del passato + soggetto + verbo base.",
    ],
    simile: "When did you start learning English?",
    spiegazione:
      "Le domande con when vogliono il past simple: When did he arrive? «When has he arrived?» è sbagliato, perché when chiede un momento preciso.",
    lezione: "lezione 30{6}",
  },
  {
    id: "a2-gia-visto",
    livello: "A2",
    contesto:
      "Il tuo amico ha scelto il film per la serata: è quello che hai visto al cinema la settimana scorsa. Preferiresti vedere altro.",
    consegna: "Digli che hai già visto questo film.",
    soluzioni: [
      "I've already seen this film.",
      "I have already seen this film.",
      "I've already seen it.",
      "I have already seen it.",
      "I've already seen this movie.",
      "Sorry, I've already seen this film.",
    ],
    tempo: "present perfect",
    parole: [
      ["vedere", "see", "verbo irregolare"],
      ["film", "film / movie"],
      ["già", "already"],
    ],
    suggerimenti: [
      "Non dici quando l'hai visto: conta che l'esperienza c'è già, adesso. Quale tempo? Dove si mette «già»?",
      "Ausiliare + l'avverbio che significa «già» + il participio irregolare di «vedere» + il film.",
    ],
    simile: "We've already had lunch.",
    spiegazione:
      "Already va tra l'ausiliare e il participio: I've already seen it. Se aggiungi quando («last week»), serve il past simple: I saw it last week.",
    lezione: "lezione 30{4}",
  },
  {
    id: "a2-tre-caffe-oggi",
    livello: "A2",
    contesto:
      "Sono le due del pomeriggio. La tua coinquilina ti offre un caffè. Tu ne hai già bevuti tre e ti tremano le mani.",
    consegna: "Rifiuta: oggi hai già preso tre caffè.",
    soluzioni: [
      "No thanks, I've had three coffees today.",
      "No thanks, I've already had three coffees today.",
      "I've already had three coffees today.",
      "I've had three coffees today.",
      "No, thank you. I've had three coffees today.",
    ],
    tempo: "present perfect",
    parole: [
      ["prendere / bere (un caffè)", "have", "verbo irregolare"],
      ["caffè (tazze)", "coffees"],
      ["oggi", "today"],
    ],
    suggerimenti: [
      "«Oggi» è un periodo che non è ancora finito: la giornata continua. Quale tempo si usa con today, this week, this year quando il periodo è ancora in corso?",
      "Present perfect: ausiliare + il participio di «avere» (che si usa anche per mangiare e bere) + il numero + caffè al plurale + oggi.",
    ],
    simile: "I've written two essays this week.",
    spiegazione:
      "Con un periodo non finito (today, this week) si usa il present perfect. Se oggi è finito o parli di un momento preciso (this morning, a mezzogiorno) si usa il past simple.",
    lezione: "lezione 30{5}",
  },
  {
    id: "a2-notizia",
    livello: "A2",
    contesto:
      "Sei a colazione e leggi le notizie sul telefono. Il primo ministro si è appena dimesso. Lo annunci ai tuoi coinquilini.",
    consegna: "Annuncia che il primo ministro si è dimesso.",
    soluzioni: [
      "The Prime Minister has resigned.",
      "The Prime Minister has resigned!",
      "The Prime Minister's resigned!",
      "The Prime Minister has just resigned.",
      "Have you heard? The Prime Minister has resigned.",
    ],
    tempo: "present perfect",
    parole: [
      ["primo ministro", "Prime Minister"],
      ["dimettersi", "resign", "non è riflessivo"],
    ],
    suggerimenti: [
      "È una notizia appena arrivata, importante adesso. Quale tempo si usa per dare le notizie?",
      "Present perfect alla terza persona: ausiliare + il participio del verbo che significa «dimettersi» (in inglese non è riflessivo).",
    ],
    simile: "Scientists have discovered a new planet.",
    spiegazione:
      "Le notizie si annunciano con il present perfect (has resigned); i dettagli poi si raccontano al past simple (He announced it this morning).",
    lezione: "lezione 30{7}",
  },
  {
    id: "a2-conosco-da",
    livello: "A2",
    contesto:
      "Presenti la tua migliore amica Giulia a un compagno di corso. Lui vi chiede da quanto vi conoscete. Vi siete conosciute alle elementari, dieci anni fa.",
    consegna: "Digli che conosci Giulia da dieci anni.",
    soluzioni: [
      "I've known Giulia for ten years.",
      "I have known Giulia for ten years.",
      "I've known her for ten years.",
      "I have known her for ten years.",
      "We've known each other for ten years.",
      "We have known each other for ten years.",
      "I've known her for 10 years.",
    ],
    tempo: "present perfect",
    parole: [
      ["conoscere", "know", "verbo irregolare, verbo di stato"],
      ["dieci anni", "ten years"],
      ["l'un l'altro", "each other"],
    ],
    suggerimenti: [
      "In italiano: «la conosco da dieci anni», al presente. Ma la situazione è cominciata nel passato e dura ancora. Quale tempo inglese serve? (Know è un verbo di stato: niente continuous.)",
      "Present perfect: ausiliare + il participio irregolare di «conoscere» + la persona + la preposizione che introduce una DURATA.",
    ],
    simile: "We've had this car for five years.",
    spiegazione:
      "Con i verbi di stato (know, have, be) la durata fino a ora vuole il present perfect semplice: I've known her for ten years. For + durata.",
    lezione: "lezione 31{1}",
  },
  {
    id: "a2-da-quanto",
    livello: "A2",
    contesto:
      "Fai amicizia con un signore anziano al parco. Ti racconta di Oxford com'era una volta. Vuoi sapere da quanto tempo abita qui.",
    consegna: "Chiedigli da quanto tempo vive qui.",
    soluzioni: [
      "How long have you lived here?",
      "How long have you been living here?",
      "How long have you lived in Oxford?",
      "How long have you been living in Oxford?",
    ],
    tempo: "present perfect|present perfect continuous",
    parole: [
      ["vivere", "live"],
      ["qui", "here"],
    ],
    suggerimenti: [
      "Chiedi la durata di una situazione che continua ancora adesso. In italiano usiamo il presente («da quanto vivi...»). In inglese?",
      "L'espressione per «quanto tempo» + domanda al present perfect (ausiliare + soggetto + participio) + qui.",
    ],
    simile: "How long have you had this dog?",
    spiegazione:
      "Da quanto...? = How long have you...? con il present perfect. «How long do you live here?» è l'errore tipico degli italiani.",
    lezione: "lezione 31{3}",
  },
  {
    id: "a2-fa",
    livello: "A2",
    contesto:
      "Alla festa di benvenuto un ragazzo ti chiede quando sei arrivato a Oxford. Sei arrivato due mesi fa.",
    consegna: "Digli che sei arrivato due mesi fa.",
    soluzioni: [
      "I arrived two months ago.",
      "I arrived in Oxford two months ago.",
      "I came here two months ago.",
      "I came to Oxford two months ago.",
      "I got here two months ago.",
    ],
    tempo: "past simple",
    parole: [
      ["arrivare", "arrive / get here"],
      ["venire", "come", "verbo irregolare"],
      ["due mesi", "two months"],
    ],
    suggerimenti: [
      "«Fa» indica un momento preciso del passato. Quale tempo serve? E dove va la parola che significa «fa»?",
      "Past simple + (il luogo) + la quantità di tempo + la parola per «fa», che va DOPO il periodo, come in italiano.",
    ],
    simile: "She moved to Bristol three years ago.",
    spiegazione:
      "Ago (fa) vuole sempre il past simple e va dopo il periodo: two months ago. Con for invece si indica la durata (I've been here for two months).",
    lezione: "lezione 31{6}",
  },
  {
    id: "a2-piove-da",
    livello: "A2",
    contesto:
      "Sono le quattro del pomeriggio. Ha cominciato a piovere alle sette di stamattina e non ha mai smesso. Un amico ti chiede com'è il tempo da te.",
    consegna: "Digli che piove da stamattina.",
    soluzioni: [
      "It's been raining since this morning.",
      "It has been raining since this morning.",
      "It's been raining since seven o'clock.",
      "It has been raining all day.",
      "It's been raining all day.",
    ],
    tempo: "present perfect continuous",
    parole: [
      ["piovere", "rain"],
      ["stamattina", "this morning"],
      ["tutto il giorno", "all day"],
    ],
    suggerimenti: [
      "La pioggia è iniziata nel passato e continua adesso: conta la sua durata. Quale tempo?",
      "Soggetto impersonale + ausiliare (terza persona) + il participio di «essere» + il verbo «piovere» in -ing + la preposizione che indica il punto di INIZIO.",
    ],
    simile: "The baby has been crying since six o'clock.",
    spiegazione:
      "Present perfect continuous (has been + -ing) per un'azione che dura fino ad ora. Since + punto d'inizio (this morning), for + durata (for nine hours).",
    lezione: "lezione 31{4}",
  },
  {
    id: "a2-dovuto-lavorare",
    livello: "A2",
    contesto:
      "Ieri sera eri invitato al compleanno di Kate, ma non sei andato. Oggi lei ti chiede perché. Il tuo capo al bar ti ha chiesto di restare fino a mezzanotte.",
    consegna: "Dille che ieri hai dovuto lavorare fino a tardi.",
    soluzioni: [
      "I had to work late yesterday.",
      "Sorry, I had to work late yesterday.",
      "I had to work late last night.",
      "Sorry, I had to work late last night.",
      "Yesterday I had to work late.",
    ],
    tempo: "had to|have to|past simple",
    parole: [
      ["lavorare", "work"],
      ["fino a tardi", "late"],
      ["ieri sera", "last night"],
    ],
    suggerimenti: [
      "È un obbligo che avevi nel passato. Must non ha il passato: quale forma si usa per «ho dovuto»?",
      "Il passato di «have to» (il verbo «avere» al passato + to) + verbo base + «fino a tardi» (un avverbio solo) + quando.",
    ],
    simile: "We had to take a taxi.",
    spiegazione:
      "Must non ha il passato: «ho dovuto» si dice had to + verbo base. Lavorare fino a tardi = work late.",
    lezione: "lezione 32{2}",
  },
  {
    id: "a2-troppo-zucchero",
    livello: "A2",
    contesto:
      "Il tuo coinquilino mette quattro cucchiaini di zucchero nel tè e mangia biscotti tutto il giorno. Poi si lamenta dei denti.",
    consegna: "Consigliagli di non mangiare così tanto zucchero.",
    soluzioni: [
      "You shouldn't eat so much sugar.",
      "You should not eat so much sugar.",
      "You shouldn't eat so much sugar!",
      "I think you shouldn't eat so much sugar.",
      "You shouldn't have so much sugar.",
    ],
    tempo: "should",
    parole: [
      ["mangiare", "eat"],
      ["zucchero", "sugar", "non numerabile"],
      ["così tanto", "so much"],
    ],
    suggerimenti: [
      "È un consiglio, in forma negativa. Quale modale si usa per i consigli, e come diventa negativo?",
      "Soggetto + il modale del consiglio con la negazione (contratti) + verbo base + «così tanto» con un nome non numerabile + zucchero.",
    ],
    simile: "You shouldn't stay up so late.",
    spiegazione:
      "Shouldn't + verbo base = non dovresti. Con i non numerabili «così tanto» è so much (so many con i numerabili).",
    lezione: "lezione 32{4}",
  },
  {
    id: "a2-toga",
    livello: "A2",
    contesto:
      "Un amico italiano ti chiede perché gli studenti di Oxford, nelle foto degli esami, sono vestiti in bianco e nero con una specie di mantello. Gli spieghi la regola dell'università.",
    consegna: "Spiegagli che gli studenti devono indossare la toga durante gli esami.",
    soluzioni: [
      "Students must wear a gown during exams.",
      "Students have to wear a gown during exams.",
      "Students must wear gowns during exams.",
      "Students have to wear gowns during exams.",
      "Students must wear a gown in exams.",
      "Students have to wear a gown in exams.",
    ],
    tempo: "must|have to",
    parole: [
      ["indossare", "wear"],
      ["toga", "gown"],
      ["durante", "during"],
      ["esami", "exams"],
    ],
    suggerimenti: [
      "È una regola stabile, un obbligo. Quale modale o quale forma esprime l'obbligo? Parli degli studenti in generale: serve l'articolo?",
      "Studenti (senza articolo) + il modale dell'obbligo (oppure la forma con «avere» + to) + verbo base + la toga + la preposizione che significa «durante».",
    ],
    simile: "Visitors must sign in at reception.",
    spiegazione:
      "Must e have to esprimono l'obbligo; nelle regole scritte si usa spesso must. «Indossare» = wear (non bring).",
    lezione: "lezione 32{6}",
  },
  {
    id: "a2-devo-portare",
    livello: "A2",
    contesto:
      "La tua vicina ti invita a un barbecue in giardino sabato. In Italia porteresti il dolce, ma non sai come funziona in Inghilterra.",
    consegna: "Chiedile se devi portare qualcosa.",
    soluzioni: [
      "Do I have to bring anything?",
      "Do I need to bring anything?",
      "Should I bring anything?",
      "Shall I bring anything?",
      "Do I have to bring something?",
    ],
    tempo: "have to|should|shall|present simple",
    parole: [
      ["portare (con sé)", "bring", "verbo irregolare"],
      ["qualcosa (nelle domande)", "anything"],
    ],
    suggerimenti: [
      "Chiedi se c'è un obbligo o un'aspettativa. Quale forma dell'obbligo si usa nelle domande, con l'ausiliare do?",
      "Ausiliare + io + la forma «avere + to» + verbo base + la parola per «qualcosa» che si usa nelle domande.",
    ],
    simile: "Do we have to pay for the drinks?",
    spiegazione:
      "Have to fa domande e negative con do: Do I have to...? Nelle domande «qualcosa» è di solito anything.",
    lezione: "lezione 32{2}",
  },
  {
    id: "a2-dovra-aspettare",
    livello: "A2",
    contesto:
      "Lavori alla reception di un ostello. Un ragazzo arriva alle dieci di mattina, ma le camere sono pronte solo dalle due.",
    consegna: "Digli che dovrà aspettare.",
    soluzioni: [
      "You'll have to wait.",
      "You will have to wait.",
      "I'm sorry, you'll have to wait.",
      "Sorry, you'll have to wait until two.",
      "You'll have to wait until two o'clock.",
      "I'm afraid you'll have to wait.",
    ],
    tempo: "have to|future simple",
    parole: [
      ["aspettare", "wait"],
      ["fino alle due", "until two"],
      ["mi dispiace (cortese)", "I'm afraid / I'm sorry"],
    ],
    suggerimenti: [
      "È un obbligo nel futuro. Must non ha il futuro: come si dice «dovrai»?",
      "Il modale del futuro + la forma dell'obbligo con «avere» + to + verbo base.",
    ],
    simile: "We'll have to leave early tomorrow.",
    spiegazione:
      "«Dovrò, dovrai» = will have to + verbo base. Must non ha né passato né futuro: si usano had to e will have to.",
    lezione: "lezione 32{2}",
  },
  {
    id: "a2-guida-piano",
    livello: "A2",
    contesto:
      "Il tuo amico ha appena preso la patente e parte da solo per Brighton. Nevica ed è buio. Lo saluti dalla porta di casa.",
    consegna: "Raccomandagli di guidare con prudenza.",
    soluzioni: [
      "Please drive carefully.",
      "Drive carefully!",
      "Drive carefully, please.",
      "Please drive carefully!",
      "Drive safely!",
      "Please drive safely.",
    ],
    tempo: "imperativo",
    parole: [
      ["guidare", "drive"],
      ["prudente / attento", "careful"],
      ["sicuro", "safe"],
    ],
    suggerimenti: [
      "È una raccomandazione diretta. Quale modo verbale? E «con prudenza» descrive COME guidare: serve un aggettivo o un avverbio?",
      "Imperativo + l'avverbio che si forma da «attento» con -ly (attenzione: careful ha già una l, se ne aggiunge un'altra).",
    ],
    simile: "Please speak quietly in the library.",
    spiegazione:
      "Gli avverbi di modo si formano con aggettivo + -ly: careful → carefully. Descrivono il verbo: drive carefully, non «drive careful».",
    lezione: "lezione 33{1}",
  },
  {
    id: "a2-lavora-sodo",
    livello: "A2",
    contesto:
      "Tua madre è preoccupata per tuo fratello, che fa due lavori per pagarsi gli studi. Tu lo difendi con un amico: è bravissimo e instancabile.",
    consegna: "Di' che lavora molto sodo.",
    soluzioni: [
      "He works very hard.",
      "He works really hard.",
      "My brother works very hard.",
      "My brother works really hard.",
      "He works so hard.",
    ],
    tempo: "present simple",
    parole: [
      ["lavorare", "work"],
      ["duramente / sodo", "hard", "avverbio irregolare"],
    ],
    suggerimenti: [
      "È una sua abitudine, sempre vera. Quale tempo (attenzione alla terza persona)? Poi: l'avverbio di «duro» è irregolare.",
      "Present simple con la -s + «molto» + l'avverbio, che è uguale all'aggettivo (non si aggiunge -ly: con -ly ha un altro significato).",
    ],
    simile: "She studies very hard.",
    spiegazione:
      "Hard è sia aggettivo sia avverbio: he works hard. Hardly significa invece «a malapena»: he hardly works = non lavora quasi per niente!",
    lezione: "lezione 33{4}",
  },
  {
    id: "a2-profumo",
    livello: "A2",
    contesto:
      "La tua coinquilina sta cucinando una zuppa di zucca. L'odore arriva fino in camera tua e ti viene l'acquolina. Entri in cucina.",
    consegna: "Dille che questa zuppa ha un profumo delizioso.",
    soluzioni: [
      "This soup smells delicious.",
      "That soup smells delicious.",
      "This soup smells delicious!",
      "Your soup smells delicious.",
      "The soup smells delicious.",
      "It smells delicious!",
      "It smells delicious.",
    ],
    tempo: "present simple",
    parole: [
      ["zuppa", "soup"],
      ["avere odore / profumare", "smell"],
      ["delizioso", "delicious"],
    ],
    suggerimenti: [
      "È una sensazione di adesso, ma «avere un odore» è un verbo dei sensi, di stato: niente continuous. Dopo i verbi dei sensi serve un aggettivo o un avverbio?",
      "Soggetto + il verbo dell'olfatto al present simple (terza persona) + un AGGETTIVO (non l'avverbio in -ly).",
    ],
    simile: "This cake tastes amazing.",
    spiegazione:
      "Dopo i verbi dei sensi (look, smell, taste, sound, feel) va un aggettivo: it smells delicious, non «deliciously».",
    lezione: "lezione 33{6}",
  },
  {
    id: "a2-troppo-veloce",
    livello: "A2",
    contesto:
      "Sei in macchina con la tua amica Jess sulle stradine di campagna del Cotswolds. Lei prende le curve a tutta velocità e tu ti aggrappi al sedile.",
    consegna: "Più tardi racconti a un amico che Jess guida troppo veloce.",
    soluzioni: [
      "Jess drives too fast.",
      "She drives too fast.",
      "Jess drives much too fast.",
      "She drives much too fast.",
      "She drives way too fast.",
    ],
    tempo: "present simple",
    parole: [
      ["guidare", "drive"],
      ["troppo", "too"],
      ["veloce / velocemente", "fast", "uguale come aggettivo e avverbio"],
    ],
    suggerimenti: [
      "È un'abitudine di Jess. Quale tempo (terza persona)? Poi: «veloce» qui descrive come guida. L'avverbio di fast è regolare?",
      "Present simple con la -s + «troppo» + l'avverbio di velocità, che ha la stessa forma dell'aggettivo (fastly non esiste).",
    ],
    simile: "He talks too fast.",
    spiegazione:
      "Fast, hard, late, early sono uguali come aggettivo e come avverbio: she drives fast. «Fastly» non esiste. Too = troppo.",
    lezione: "lezione 33{3}",
  },
  {
    id: "a2-quando-arrivo",
    livello: "A2",
    contesto:
      "Tua madre è preoccupata perché stasera prendi un volo da solo per tornare in Italia. Le prometti che la chiamerai appena atterrato.",
    consegna: "Dille che la chiamerai quando arrivi.",
    soluzioni: [
      "I'll call you when I arrive.",
      "I will call you when I arrive.",
      "I'll call you when I land.",
      "I'll phone you when I arrive.",
      "I'll call you when I get there.",
      "When I arrive, I'll call you.",
      "I'll call you as soon as I arrive.",
    ],
    tempo: "future simple",
    parole: [
      ["chiamare", "call / phone"],
      ["arrivare", "arrive / get there"],
      ["atterrare", "land"],
      ["appena", "as soon as"],
    ],
    suggerimenti: [
      "Ci sono due azioni future: la promessa e l'arrivo. Per la promessa quale futuro? E dopo «quando», l'inglese usa il futuro?",
      "Frase principale: will + verbo base. Dopo la congiunzione di tempo («quando», «appena») si usa il PRESENT simple, anche se il senso è futuro.",
    ],
    simile: "We'll start dinner when Dad gets home.",
    spiegazione:
      "Dopo when, as soon as, before, after, until il futuro si esprime con il present simple: when I arrive (mai «when I will arrive»).",
    lezione: "lezione 34{4}",
  },
  {
    id: "a2-se-non-partiamo",
    livello: "A2",
    contesto:
      "Mancano dieci minuti al treno per Londra e la stazione è a un quarto d'ora a piedi. I tuoi amici stanno ancora finendo la birra.",
    consegna: "Avvertili che se non partite adesso perderete il treno.",
    soluzioni: [
      "If we don't leave now, we'll miss the train.",
      "If we don't leave now, we will miss the train.",
      "We'll miss the train if we don't leave now.",
      "If we don't go now, we'll miss the train.",
      "Come on, if we don't leave now, we'll miss the train.",
    ],
    tempo: "future simple",
    parole: [
      ["partire / andarsene", "leave / go"],
      ["perdere (un mezzo)", "miss"],
      ["treno", "train"],
    ],
    suggerimenti: [
      "È una conseguenza reale e probabile nel futuro. Quale periodo ipotetico? Che tempo va dopo if?",
      "First conditional: if + present simple (qui negativo, con l'ausiliare) + will + verbo base. «Perdere» un mezzo non è lose.",
    ],
    simile: "If you don't hurry, you'll be late.",
    spiegazione:
      "First conditional: if + present simple, will + verbo base. Dopo if niente will. Perdere il treno = miss the train.",
    lezione: "lezione 34{3}",
  },
  {
    id: "a2-se-c-e-sole",
    livello: "A2",
    contesto:
      "Un amico ti chiede i programmi per domani. Se c'è il sole forse andate al mare a Brighton, ma non è sicuro: dipende anche dai treni.",
    consegna: "Digli che se domani c'è il sole forse andrete al mare.",
    soluzioni: [
      "If it's sunny tomorrow, we might go to the beach.",
      "If it is sunny tomorrow, we might go to the beach.",
      "If it's sunny tomorrow, we may go to the beach.",
      "We might go to the beach if it's sunny tomorrow.",
      "If it's sunny tomorrow, we might go to the seaside.",
    ],
    tempo: "might|may",
    parole: [
      ["soleggiato", "sunny"],
      ["domani", "tomorrow"],
      ["al mare", "to the beach / to the seaside"],
    ],
    suggerimenti: [
      "È una condizione reale sul futuro, ma la conseguenza è solo possibile, non sicura. Che cosa metti al posto di will?",
      "If + present simple (soggetto impersonale + «essere» + soleggiato) + noi + il modale della possibilità + verbo base.",
    ],
    simile: "If I finish early, I might come to the party.",
    spiegazione:
      "Nel first conditional al posto di will si possono usare might, may, can, should per una conseguenza meno sicura.",
    lezione: "lezione 34{7}",
  },
  {
    id: "a2-piante",
    livello: "A2",
    contesto:
      "Parti per due settimane e lasci le tue piante al coinquilino, che ammette di non averne mai avuta una. Gli spieghi la regola base.",
    consegna: "Spiegagli che se non annaffi le piante, muoiono.",
    soluzioni: [
      "If you don't water plants, they die.",
      "If you don't water the plants, they die.",
      "Plants die if you don't water them.",
      "If you don't water plants, they'll die.",
      "If you don't water them, they die.",
    ],
    tempo: "present simple|future simple",
    parole: [
      ["annaffiare", "water"],
      ["pianta / piante", "plant / plants"],
      ["morire", "die"],
    ],
    suggerimenti: [
      "È una verità generale, sempre valida. Quale periodo ipotetico si usa per le regole generali? Con quali tempi?",
      "Zero conditional: if + present simple negativo (tu generico) + present simple. «Annaffiare» in inglese è lo stesso verbo di «acqua».",
    ],
    simile: "If you don't feed a cat, it gets angry.",
    spiegazione:
      "Zero conditional per le verità generali: present simple in tutte e due le parti. Water è anche un verbo: annaffiare.",
    lezione: "lezione 34{2}",
  },
  {
    id: "a2-mentre",
    livello: "A2",
    contesto:
      "Racconti a un amico la serata di ieri a casa: tu cucinavi e, nello stesso momento, la tua coinquilina studiava per l'esame in salotto.",
    consegna: "Di' che mentre tu cucinavi, la tua coinquilina studiava.",
    soluzioni: [
      "While I was cooking, my flatmate was studying.",
      "While I was cooking my flatmate was studying.",
      "My flatmate was studying while I was cooking.",
      "While I was cooking, my roommate was studying.",
      "While I was making dinner, my flatmate was studying.",
    ],
    tempo: "past continuous",
    parole: [
      ["cucinare", "cook / make dinner"],
      ["coinquilina", "flatmate"],
      ["studiare", "study"],
      ["mentre", "while"],
    ],
    suggerimenti: [
      "Sono due azioni in corso nello stesso momento del passato, tutte e due «di sfondo». Quale tempo per ciascuna?",
      "La congiunzione che significa «mentre» + past continuous (was/were + -ing) + virgola + l'altra azione al past continuous.",
    ],
    simile: "While she was reading, he was watching TV.",
    spiegazione:
      "Due azioni contemporanee in corso nel passato: tutte e due al past continuous, collegate da while.",
    lezione: "lezione 35{4}",
  },
  {
    id: "a2-sfondo",
    livello: "A2",
    contesto:
      "Scrivi l'inizio di un racconto per il corso di scrittura creativa. Vuoi descrivere la scena di un mattino di primavera al parco: splendeva il sole e gli uccelli cantavano.",
    consegna: "Scrivi che splendeva il sole e gli uccelli cantavano.",
    soluzioni: [
      "The sun was shining and the birds were singing.",
      "The sun was shining, and the birds were singing.",
      "The sun was shining and birds were singing.",
    ],
    tempo: "past continuous",
    parole: [
      ["sole", "sun"],
      ["splendere", "shine"],
      ["uccelli", "birds"],
      ["cantare", "sing"],
    ],
    suggerimenti: [
      "Non sono fatti della storia, ma la descrizione dello sfondo, azioni in corso in quel momento. Quale tempo si usa per lo sfondo di un racconto?",
      "Past continuous: was (singolare) / were (plurale) + -ing. Attenzione: shine perde la -e davanti a -ing.",
    ],
    simile: "It was raining and people were running for shelter.",
    spiegazione:
      "Il past continuous descrive lo sfondo di un racconto; i fatti che fanno andare avanti la storia vanno al past simple.",
    lezione: "lezione 35{5}",
  },
  {
    id: "a2-cosa-facevi",
    livello: "A2",
    contesto:
      "Ieri sera alle nove hai provato a chiamare la tua amica per tre volte, ma non ha mai risposto. Oggi la incontri e sei curioso.",
    consegna: "Chiedile che cosa stava facendo ieri sera alle nove.",
    soluzioni: [
      "What were you doing at nine last night?",
      "What were you doing at nine o'clock last night?",
      "What were you doing last night at nine?",
      "What were you doing at 9 last night?",
    ],
    tempo: "past continuous",
    parole: [
      ["fare", "do"],
      ["alle nove", "at nine"],
      ["ieri sera", "last night"],
    ],
    suggerimenti: [
      "Le chiedi di un'azione in corso in un momento preciso del passato. Quale tempo?",
      "Parola interrogativa + il passato di «essere» (seconda persona) + soggetto + «fare» in -ing + l'ora + ieri sera.",
    ],
    simile: "Where were you going when I saw you?",
    spiegazione:
      "Il past continuous indica un'azione in corso in un momento preciso del passato: What were you doing at nine?",
    lezione: "lezione 35{2}",
  },
  {
    id: "a2-da-bambino",
    livello: "A2",
    contesto:
      "Una collega ti chiede se sei sempre vissuto a Milano. In realtà da bambino abitavi a Napoli, poi la tua famiglia si è trasferita.",
    consegna: "Dille che da bambino abitavi a Napoli.",
    soluzioni: [
      "When I was a child, I lived in Naples.",
      "When I was a child I lived in Naples.",
      "I lived in Naples when I was a child.",
      "When I was little, I lived in Naples.",
      "When I was a kid, I lived in Naples.",
      "I lived in Naples when I was a kid.",
    ],
    tempo: "past simple",
    parole: [
      ["abitare", "live"],
      ["Napoli", "Naples"],
      ["bambino", "child / kid"],
      ["piccolo", "little"],
    ],
    suggerimenti: [
      "In italiano usi l'imperfetto («abitavo»). Ma era un'azione in corso in un momento preciso, o una situazione di un periodo concluso? Serve davvero il past continuous?",
      "Per una situazione di un periodo passato concluso basta il past simple: «quando» + io + passato di «essere» + «un bambino» + past simple di «abitare».",
    ],
    simile: "When she was young, she played the violin.",
    spiegazione:
      "Non ogni imperfetto italiano diventa past continuous: le situazioni di un periodo passato vogliono il past simple (I lived in Naples).",
    lezione: "lezione 35{6}",
  },
  {
    id: "a2-se-avessi-auto",
    livello: "A2",
    contesto:
      "Un amico ti chiede perché non vai mai a visitare le Highlands, visto che le ami. Il problema è che non hai la macchina e senza è complicatissimo.",
    consegna: "Digli che se avessi una macchina, andresti in Scozia.",
    soluzioni: [
      "If I had a car, I would go to Scotland.",
      "If I had a car, I'd go to Scotland.",
      "If I had a car, I would drive to Scotland.",
      "If I had a car, I'd drive to Scotland.",
      "I would go to Scotland if I had a car.",
      "I'd drive to Scotland if I had a car.",
    ],
    tempo: "conditional",
    parole: [
      ["macchina", "car"],
      ["andare (in macchina)", "go / drive"],
      ["Scozia", "Scotland"],
    ],
    suggerimenti: [
      "La macchina non ce l'hai: è un'ipotesi irreale nel presente. Quale periodo ipotetico? Che tempo va dopo if?",
      "If + il passato di «avere» (anche se parli di adesso) + would + verbo base. In italiano c'è il congiuntivo imperfetto, in inglese il past simple.",
    ],
    simile: "If I had a garden, I would grow tomatoes.",
    spiegazione:
      "Second conditional: if + past simple, would + verbo base. Il passato non indica il tempo, ma che l'ipotesi è irreale.",
    lezione: "lezione 36{2}",
  },
  {
    id: "a2-potrei-pianoforte",
    livello: "A2",
    contesto:
      "La tua amica suona il pianoforte benissimo. Tu hai sempre voluto impararlo, ma tra università e lavoro non hai mai un minuto libero.",
    consegna: "Dille che se avessi più tempo, potresti imparare il pianoforte.",
    soluzioni: [
      "If I had more time, I could learn the piano.",
      "If I had more time, I could learn to play the piano.",
      "I could learn the piano if I had more time.",
      "If I had more free time, I could learn the piano.",
      "If I had more time, I could learn piano.",
    ],
    tempo: "could",
    parole: [
      ["tempo (libero)", "(free) time", "non numerabile"],
      ["imparare", "learn"],
      ["pianoforte", "the piano"],
    ],
    suggerimenti: [
      "È un'ipotesi irreale nel presente, ma la conseguenza è una possibilità («potrei»), non un fatto («farei»). Che modale al posto di would?",
      "If + past simple di «avere» + «più tempo» + io + il passato del modale della capacità + verbo base + lo strumento con l'articolo.",
    ],
    simile: "If we lived closer, we could see each other more often.",
    spiegazione:
      "Nel second conditional could = potrei (sarei in grado), might = forse, would = certamente. Gli strumenti vogliono the: the piano.",
    lezione: "lezione 36{5}",
  },
  {
    id: "a2-vorrei-mare",
    livello: "A2",
    contesto:
      "Febbraio a Oxford: cielo grigio da settimane. Guardi le foto della tua estate in Sicilia e sospiri.",
    consegna: "Di' che vorresti vivere vicino al mare (wish).",
    soluzioni: [
      "I wish I lived by the sea.",
      "I wish I lived near the sea.",
      "I wish I lived by the seaside.",
      "I wish I could live by the sea.",
      "I wish I could live near the sea.",
    ],
    tempo: "past simple|could",
    parole: [
      ["vivere", "live"],
      ["vicino al mare", "by the sea / near the sea"],
    ],
    suggerimenti: [
      "È un desiderio irreale sul presente: non vivi al mare. Che tempo segue wish quando si parla del presente?",
      "Wish + soggetto + il PASSATO di «vivere» (anche se il desiderio è adesso) + «vicino al mare».",
    ],
    simile: "I wish I spoke French.",
    spiegazione:
      "Wish + past simple esprime un desiderio irreale sul presente: I wish I lived by the sea (= ma non ci vivo).",
    lezione: "lezione 36{6}",
  },
  {
    id: "a2-restare-di-piu",
    livello: "A2",
    contesto:
      "È l'ultima sera della tua vacanza studio a Oxford. Gli amici ti salutano al pub. Domattina hai l'aereo e ti dispiace tantissimo partire.",
    consegna: "Di' che vorresti poter restare più a lungo.",
    soluzioni: [
      "I wish I could stay longer.",
      "I wish I could stay here longer.",
      "I wish I could stay a bit longer.",
      "I wish I could stay longer!",
      "I wish I didn't have to leave.",
    ],
    tempo: "could|past simple|have to",
    parole: [
      ["restare", "stay"],
      ["più a lungo", "longer"],
      ["partire", "leave"],
    ],
    suggerimenti: [
      "È un desiderio irreale: non puoi restare. «Vorrei POTER...»: quale forma segue wish quando c'è di mezzo una possibilità?",
      "Wish + soggetto + il passato del modale della possibilità + verbo base + il comparativo di «a lungo».",
    ],
    simile: "I wish I could fly.",
    spiegazione:
      "Wish + could + verbo base = vorrei poter... Longer è il comparativo di long: più a lungo.",
    lezione: "lezione 36{7}",
  },
  {
    id: "a2-primo-ministro",
    livello: "A2",
    contesto:
      "Durante una lezione di conversazione l'insegnante propone un gioco: ognuno deve fare al compagno una domanda immaginaria sulla politica.",
    consegna: "Chiedi al tuo compagno che cosa farebbe se fosse il primo ministro.",
    soluzioni: [
      "What would you do if you were the Prime Minister?",
      "What would you do if you were Prime Minister?",
      "If you were the Prime Minister, what would you do?",
      "If you were Prime Minister, what would you do?",
    ],
    tempo: "conditional",
    parole: [
      ["fare", "do"],
      ["primo ministro", "Prime Minister"],
    ],
    suggerimenti: [
      "È una situazione immaginaria, irreale. Quale periodo ipotetico? E nella frase con if, quale forma di «essere» si preferisce anche con «you» e «I»?",
      "Domanda: parola interrogativa + would + soggetto + verbo base; poi if + soggetto + la forma del passato di «essere» usata nelle ipotesi + il ruolo.",
    ],
    simile: "Where would you live if you could choose?",
    spiegazione:
      "Domande ipotetiche: What would you do if you were...? Nelle ipotesi irreali si usa were per tutte le persone.",
    lezione: "lezione 36{1}",
  },
  {
    id: "a2-ordinare-zuppa",
    livello: "A2",
    contesto:
      "In un pub di Jericho la cameriera ti chiede: «Are you ready to order?» Hai deciso: prendi la zuppa del giorno.",
    consegna: "Ordina la zuppa.",
    soluzioni: [
      "I'll have the soup, please.",
      "I will have the soup, please.",
      "I'll have the soup of the day, please.",
      "Can I have the soup, please?",
      "Could I have the soup, please?",
      "I'd like the soup, please.",
    ],
    tempo: "future simple|can|could|conditional",
    parole: [
      ["zuppa", "soup"],
      ["zuppa del giorno", "soup of the day"],
    ],
    suggerimenti: [
      "Decidi in questo momento che cosa prendere. Quale futuro si usa per le decisioni prese sul momento, anche quando si ordina?",
      "Soggetto + il modale del futuro contratto + il verbo «avere» (che si usa per cibi e bevande) + la zuppa + please.",
    ],
    simile: "I'll have a glass of red wine, please.",
    spiegazione:
      "Al ristorante si ordina con I'll have... (decisione del momento) o I'd like... Have si usa per mangiare e bere.",
    lezione: "S6{3}",
  },
  {
    id: "a2-iniziato",
    livello: "A2",
    contesto:
      "Sei dal medico di base per una tosse che non passa. Il dottore ti chiede quando sono cominciati i sintomi. Tre giorni fa.",
    consegna: "Rispondi che è cominciata tre giorni fa.",
    soluzioni: [
      "It started three days ago.",
      "It began three days ago.",
      "It started about three days ago.",
      "The cough started three days ago.",
      "It started 3 days ago.",
    ],
    tempo: "past simple",
    parole: [
      ["cominciare", "start / begin", "begin è irregolare"],
      ["tosse", "cough"],
      ["circa", "about"],
    ],
    suggerimenti: [
      "«Tre giorni fa» è un momento preciso del passato. Quale tempo serve?",
      "Il pronome per la tosse + il past simple di «cominciare» + la quantità di tempo + la parola per «fa» (dopo).",
    ],
    simile: "The pain started last night.",
    spiegazione:
      "Con ago si usa sempre il past simple: It started three days ago.",
    lezione: "S8{5}",
  },
  {
    id: "a2-cosa-consiglia",
    livello: "A2",
    contesto:
      "In farmacia, davanti a scaffali pieni di medicine che non conosci. Hai il raffreddore e chiedi un consiglio al farmacista.",
    consegna: "Chiedigli che cosa consiglia per il raffreddore.",
    soluzioni: [
      "What do you recommend for a cold?",
      "What would you recommend for a cold?",
      "What can you recommend for a cold?",
      "What do you suggest for a cold?",
      "What would you recommend for a cold, please?",
    ],
    tempo: "present simple|conditional|can",
    parole: [
      ["consigliare", "recommend / suggest"],
      ["raffreddore", "a cold"],
    ],
    suggerimenti: [
      "Gli chiedi un consiglio generale. Quale tempo? Come si costruisce la domanda (oppure, più cortese, con un modale al condizionale)?",
      "Parola interrogativa + ausiliare (o would) + soggetto + il verbo «consigliare» + «per» + l'articolo indeterminativo + raffreddore.",
    ],
    simile: "What do you recommend for a headache?",
    spiegazione:
      "In inglese il raffreddore vuole l'articolo: a cold (I've got a cold). Recommend = consigliare.",
    lezione: "S8{7}",
  },
  {
    id: "a2-richiamare",
    livello: "A2",
    contesto:
      "Chiami il padrone di casa, Mr Hughes, per un problema alla caldaia. Risponde sua moglie: lui è uscito e torna stasera.",
    consegna: "Chiedile se può dirgli di richiamarti.",
    soluzioni: [
      "Could you ask him to call me back?",
      "Can you ask him to call me back?",
      "Could you ask him to call me back, please?",
      "Could you tell him to call me back?",
      "Could you ask him to ring me back?",
    ],
    tempo: "could|can",
    parole: [
      ["chiedere (a qualcuno di fare)", "ask"],
      ["richiamare", "call back / ring back", "phrasal verb separabile"],
    ],
    suggerimenti: [
      "È una richiesta cortese a lei, che riguarda un'azione che farà lui. Quale modale rende la richiesta gentile? E come si dice «chiedere a qualcuno di fare qualcosa»?",
      "Modale cortese + tu + «chiedere» + lui (complemento) + to + il phrasal verb «richiamare», con il pronome «me» in mezzo.",
    ],
    simile: "Could you ask her to send me the file?",
    spiegazione:
      "Ask someone to do something = chiedere a qualcuno di fare qualcosa. Call back è separabile: call me back.",
    lezione: "S9{6}",
  },
  {
    id: "a2-doccia-rotta",
    livello: "A2",
    contesto:
      "Sei in un hotel di Edimburgo. Stamattina hai aperto la doccia ma non esce acqua. Scendi alla reception.",
    consegna: "Di' alla receptionist che la doccia della tua camera non funziona.",
    soluzioni: [
      "The shower in my room doesn't work.",
      "The shower in my room isn't working.",
      "The shower in my room does not work.",
      "Excuse me, the shower in my room doesn't work.",
      "Excuse me, the shower in my room isn't working.",
    ],
    tempo: "present simple|present continuous",
    parole: [
      ["doccia", "shower"],
      ["camera", "room"],
      ["funzionare", "work"],
    ],
    suggerimenti: [
      "Descrivi un guasto adesso. Quale tempo? E quale verbo inglese si usa per «funzionare» (riferito a macchine e impianti)?",
      "La doccia + «nella mia camera» + la negativa del present simple (terza persona) + il verbo che significa anche «lavorare».",
    ],
    simile: "The lift isn't working.",
    spiegazione:
      "Funzionare = work: it doesn't work / it isn't working (si guasta adesso). Il complemento va dopo il nome: the shower in my room.",
    lezione: "S7{6}",
  },
  {
    id: "a2-coincidenza",
    livello: "A2",
    contesto:
      "Il tuo primo treno è arrivato a Birmingham con mezz'ora di ritardo e la coincidenza per Manchester è già partita. Vai allo sportello informazioni.",
    consegna: "Spiega all'impiegato che hai perso la coincidenza.",
    soluzioni: [
      "I've missed my connection.",
      "I have missed my connection.",
      "Excuse me, I've missed my connection.",
      "My train was late and I've missed my connection.",
      "I've missed my connecting train.",
    ],
    tempo: "present perfect",
    parole: [
      ["perdere (un mezzo)", "miss"],
      ["coincidenza", "connection / connecting train"],
      ["in ritardo", "late"],
    ],
    suggerimenti: [
      "Il problema è appena successo e ha una conseguenza adesso (devi trovare un altro treno). Quale tempo?",
      "Present perfect: ausiliare + il participio del verbo che si usa per «perdere» un mezzo (non lose) + il possessivo + coincidenza.",
    ],
    simile: "We've missed the last bus.",
    spiegazione:
      "Present perfect per un fatto recente con conseguenze ora. Perdere un mezzo = miss (lose = smarrire un oggetto).",
    lezione: "S7{6}",
  },
  {
    id: "a2-cambiare-maglione",
    livello: "A2",
    contesto:
      "La settimana scorsa hai comprato un maglione, ma a casa ti sei accorto che ha un buco. Torni in negozio con lo scontrino.",
    consegna: "Di' alla commessa che vorresti restituire questo maglione.",
    soluzioni: [
      "I'd like to return this jumper.",
      "I would like to return this jumper.",
      "I'd like to return this jumper, please.",
      "I'd like to return this sweater.",
      "I'd like to bring this jumper back.",
      "Hello, I'd like to return this jumper.",
    ],
    tempo: "conditional",
    parole: [
      ["restituire (in negozio)", "return / bring back"],
      ["maglione", "jumper / sweater"],
      ["scontrino", "receipt", "la p non si pronuncia"],
    ],
    suggerimenti: [
      "Esprimi un desiderio in modo cortese. Quale formula significa «vorrei»? Come si collega a un altro verbo?",
      "La formula di «vorrei» + to + il verbo «restituire» (in inglese è lo stesso di «ritornare») + il dimostrativo + maglione.",
    ],
    simile: "I'd like to exchange these shoes.",
    spiegazione:
      "Return = restituire in negozio (exchange = cambiare con un altro). I'd like to + verbo base è la formula cortese.",
    lezione: "S5{6}",
  },
  {
    id: "a2-troppo-piccolo",
    livello: "A2",
    contesto:
      "Nel camerino provi una giacca che ti piace tanto. Ma non riesci ad abbottonarla e le maniche ti arrivano al gomito. Il commesso ti chiede come va.",
    consegna: "Digli che è troppo piccola per te.",
    soluzioni: [
      "It's too small for me.",
      "It is too small for me.",
      "It's too small.",
      "I'm afraid it's too small for me.",
      "Unfortunately it's too small for me.",
      "This jacket is too small for me.",
    ],
    tempo: "present simple",
    parole: [
      ["troppo", "too"],
      ["piccolo", "small"],
      ["purtroppo", "unfortunately / I'm afraid"],
    ],
    suggerimenti: [
      "Descrivi una caratteristica della giacca adesso. Quale tempo e quale verbo? Come si dice «troppo» davanti a un aggettivo?",
      "Il pronome per la giacca + «essere» + la parola per «troppo» + l'aggettivo + «per me».",
    ],
    simile: "These shoes are too big for me.",
    spiegazione:
      "Too + aggettivo = troppo (in senso negativo): too small. Very significa solo «molto». Have you got it in a bigger size? è la domanda successiva.",
    lezione: "S5{3}",
  },
  {
    id: "a2-quanto-ci-vuole",
    livello: "A2",
    contesto:
      "Hai la valigia pesante e il treno tra quaranta minuti. Chiedi a un passante se ti conviene andare a piedi alla stazione o prendere un taxi.",
    consegna: "Chiedigli quanto ci vuole per arrivare alla stazione.",
    soluzioni: [
      "How long does it take to get to the station?",
      "How long does it take to walk to the station?",
      "Excuse me, how long does it take to get to the station?",
      "How long does it take to the station?",
      "How long does it take to get to the station on foot?",
    ],
    tempo: "present simple",
    parole: [
      ["metterci / volerci (tempo)", "take"],
      ["arrivare (a)", "get to"],
      ["andare a piedi", "walk"],
      ["a piedi", "on foot"],
    ],
    suggerimenti: [
      "È una domanda generale sulla durata di un percorso. Quale tempo? «Ci vuole» in inglese ha un soggetto impersonale e un verbo che significa «prendere».",
      "Espressione per «quanto tempo» + ausiliare (terza persona) + soggetto impersonale + il verbo «prendere» + to + «arrivare a» + la stazione.",
    ],
    simile: "How long does it take to cook rice?",
    spiegazione:
      "Quanto ci vuole? = How long does it take (to + verbo)? Take, con soggetto it, indica il tempo necessario.",
    lezione: "S4{5}",
  },
  {
    id: "a2-programmi-weekend",
    livello: "A2",
    contesto:
      "È venerdì pomeriggio e sei in fila alla mensa dietro a una collega che conosci poco. Vuoi fare un po' di conversazione.",
    consegna: "Chiedile se ha programmi per il fine settimana.",
    soluzioni: [
      "Have you got any plans for the weekend?",
      "Do you have any plans for the weekend?",
      "Have you got any plans for this weekend?",
      "Have you got anything planned for the weekend?",
      "Are you doing anything at the weekend?",
    ],
    tempo: "have got|present simple|present continuous",
    parole: [
      ["programmi", "plans"],
      ["fine settimana", "weekend"],
    ],
    suggerimenti: [
      "Le chiedi se adesso «ha» dei programmi. Quale forma di «avere» per una domanda (britannica)? E quale quantificatore si usa nelle domande?",
      "Ausiliare di have got + soggetto + got + il quantificatore delle domande + programmi al plurale + «per il weekend».",
    ],
    simile: "Have you got any plans for the summer?",
    spiegazione:
      "Have you got any plans for the weekend? è una delle domande tipiche dello small talk. Any nelle domande con i plurali.",
    lezione: "S10{4}",
  },
  {
    id: "a2-rifiutare",
    livello: "A2",
    contesto:
      "Una compagna ti invita alla sua cena di sabato. Ti farebbe davvero piacere, ma sabato hai il turno al bar fino a mezzanotte.",
    consegna: "Rifiuta gentilmente: ti piacerebbe molto, ma sabato sei impegnato.",
    soluzioni: [
      "I'd love to, but I'm busy on Saturday.",
      "I would love to, but I'm busy on Saturday.",
      "I'd love to, but I'm working on Saturday.",
      "I'd love to, but I can't on Saturday.",
      "I'd love to, but I'm busy on Saturday, sorry.",
      "I'd love to come, but I'm busy on Saturday.",
    ],
    tempo: "conditional",
    parole: [
      ["mi piacerebbe molto", "I'd love to"],
      ["impegnato", "busy"],
      ["sabato", "on Saturday"],
    ],
    suggerimenti: [
      "Prima un desiderio cortese al condizionale («mi piacerebbe tanto»), poi il motivo. Quale formula usano gli inglesi per accettare o rifiutare con calore?",
      "Would (contratto) + il verbo «amare» + to (senza ripetere il verbo) + ma + io + «essere» + impegnato + la preposizione dei giorni + sabato.",
    ],
    simile: "I'd love to, but I've got an exam the next day.",
    spiegazione:
      "I'd love to (but...) è il modo gentile per rispondere a un invito. To resta da solo: non serve ripetere il verbo.",
    lezione: "S10{7}",
  },
  {
    id: "a2-sono-d-accordo",
    livello: "A2",
    contesto:
      "In un seminario una compagna sostiene che le biblioteche dovrebbero restare aperte anche di notte durante gli esami. La pensi esattamente come lei.",
    consegna: "Dille che sei d'accordo con lei.",
    soluzioni: [
      "I agree with you.",
      "I completely agree with you.",
      "I totally agree with you.",
      "I agree with you completely.",
      "I agree.",
      "I couldn't agree more.",
    ],
    tempo: "present simple|could",
    parole: [
      ["essere d'accordo", "agree", "è un verbo, non «be agree»"],
      ["completamente", "completely / totally"],
    ],
    suggerimenti: [
      "È la tua opinione adesso. Quale tempo? Attenzione: «essere d'accordo» in inglese non si costruisce con «essere», ma con un solo verbo.",
      "Soggetto + il verbo che significa «essere d'accordo» al present simple + la preposizione «con» + te.",
    ],
    simile: "I don't agree with him.",
    spiegazione:
      "Agree è un verbo: I agree (mai «I am agree», errore tipico degli italiani). Negativa: I don't agree.",
    lezione: "S10{8}",
  },
  {
    id: "a2-piacere-parlare",
    livello: "A2",
    contesto:
      "Hai chiacchierato per mezz'ora con un signore simpatico in treno. Arrivate a Paddington e vi salutate.",
    consegna: "Salutalo dicendo che è stato un piacere parlare con lui.",
    soluzioni: [
      "It was nice talking to you.",
      "It was lovely talking to you.",
      "It was nice to talk to you.",
      "It was great talking to you.",
      "It was nice chatting with you.",
      "It was nice talking to you. Goodbye!",
    ],
    tempo: "past simple",
    parole: [
      ["piacevole / bello", "nice / lovely / great"],
      ["parlare (con)", "talk (to)"],
      ["chiacchierare", "chat"],
    ],
    suggerimenti: [
      "La conversazione è appena finita: è un giudizio sul passato. Quale tempo del verbo «essere», con quale soggetto impersonale?",
      "Soggetto impersonale + «essere» al passato + aggettivo + il verbo «parlare» in -ing + to + te.",
    ],
    simile: "It was nice meeting you.",
    spiegazione:
      "It was nice talking to you è la formula per chiudere una conversazione. Al primo incontro si dice Nice to meet you; alla fine It was nice meeting you.",
    lezione: "S10{9}",
  },
  {
    id: "a2-mio-giro",
    livello: "A2",
    contesto:
      "Sei al pub con tre amici inglesi. Il primo giro l'ha offerto Tom, il secondo Amy. Ora tocca a te e ti alzi per andare al bancone.",
    consegna: "Di' che tocca a te offrire il giro.",
    soluzioni: [
      "It's my round.",
      "It's my round!",
      "It is my round.",
      "It's my round. What are you having?",
      "It's my round, what are you having?",
    ],
    tempo: "present simple",
    parole: [
      ["giro (di bevute)", "round"],
    ],
    suggerimenti: [
      "Dici di chi è il turno adesso. Quale verbo e quale tempo? Al pub c'è una parola apposta per il «giro» di bevute.",
      "Soggetto impersonale + «essere» + il possessivo + la parola per «giro» (la stessa di «rotondo»).",
    ],
    simile: "It's your turn.",
    spiegazione:
      "Al pub ognuno paga a turno un giro per tutti: It's my round. What are you having? (Che cosa prendete?)",
    lezione: "S3{7}",
  },
  {
    id: "a2-da-portare-via",
    livello: "A2",
    contesto:
      "Hai lezione tra cinque minuti e passi al caffè sotto la facoltà. Vuoi un caffè latte da bere per strada.",
    consegna: "Chiedi un caffè latte da portare via.",
    soluzioni: [
      "Can I have a latte to take away, please?",
      "Can I have a latte to take away?",
      "Could I have a latte to take away, please?",
      "Can I get a latte to take away, please?",
      "I'd like a latte to take away, please.",
    ],
    tempo: "can|could|conditional",
    parole: [
      ["caffè latte", "latte"],
      ["da portare via", "to take away", "americano: to go"],
    ],
    suggerimenti: [
      "Fai un'ordinazione cortese adesso. Quale modale si usa per «posso avere...?»",
      "Modale + io + «avere» + articolo + latte + l'espressione per «da portare via» (to + il phrasal verb «portare via»).",
    ],
    simile: "Can I have a sandwich to take away?",
    spiegazione:
      "Da portare via = to take away (britannico) o to go (americano). Il barista chiede: Eat in or take away?",
    lezione: "S3{3}",
  },
  {
    id: "a2-studio-legge",
    livello: "A2",
    contesto:
      "A una festa un ragazzo ti chiede che cosa fai nella vita. Sei al secondo anno di giurisprudenza a Oxford.",
    consegna: "Digli che studi legge a Oxford.",
    soluzioni: [
      "I'm studying law at Oxford.",
      "I am studying law at Oxford.",
      "I study law at Oxford.",
      "I'm a law student at Oxford.",
      "I'm studying law here at Oxford.",
    ],
    tempo: "present continuous|present simple",
    parole: [
      ["studiare", "study"],
      ["legge / giurisprudenza", "law"],
    ],
    suggerimenti: [
      "È una situazione di questo periodo della tua vita (durerà qualche anno, non per sempre). Quale tempo la presenta come temporanea? Va bene anche il tempo delle situazioni stabili.",
      "Present continuous («essere» + -ing) + la materia, senza articolo + la preposizione che si usa con le università.",
    ],
    simile: "She's doing a Master's in history.",
    spiegazione:
      "I'm studying law: il present continuous presenta lo studio come una fase temporanea. Le materie non vogliono l'articolo. At + università.",
    lezione: "S1{7}",
  },
  {
    id: "a2-tempo-libero",
    livello: "A2",
    contesto:
      "Durante un colloquio informale per un lavoro estivo ti chiedono che cosa fai nel tempo libero. Ti piace moltissimo fare escursioni in montagna.",
    consegna: "Rispondi che nel tempo libero ti piace fare escursioni.",
    soluzioni: [
      "In my free time I enjoy hiking.",
      "In my free time, I enjoy hiking.",
      "I enjoy hiking in my free time.",
      "In my free time I like hiking.",
      "In my spare time I enjoy hiking.",
      "I love hiking in my free time.",
    ],
    tempo: "present simple",
    parole: [
      ["tempo libero", "free time / spare time"],
      ["piacere / godersi", "enjoy"],
      ["fare escursioni", "hike / go hiking"],
    ],
    suggerimenti: [
      "È un gusto, un'abitudine. Quale tempo? Dopo enjoy, in che forma va il verbo dell'attività?",
      "«Nel mio tempo libero» + soggetto + il verbo che significa «godersi» + l'attività con -ing (mai to + verbo dopo enjoy).",
    ],
    simile: "At weekends I enjoy cooking for my friends.",
    spiegazione:
      "Enjoy vuole sempre -ing: I enjoy hiking («I enjoy to hike» è sbagliato). Nel tempo libero = in my free time.",
    lezione: "S1{8}",
  },
  {
    id: "a2-timida-gentile",
    livello: "A2",
    contesto:
      "Un amico ti chiede com'è la nuova ragazza del gruppo di studio, che parla pochissimo. Tu l'hai conosciuta meglio: è timida, ma molto gentile.",
    consegna: "Digli che è piuttosto timida, ma molto gentile.",
    soluzioni: [
      "She's quite shy, but very kind.",
      "She's quite shy but very kind.",
      "She is quite shy, but very kind.",
      "She's quite shy, but she's very kind.",
      "She's a bit shy, but very kind.",
      "She's quite shy, but really nice.",
    ],
    tempo: "present simple",
    parole: [
      ["timido", "shy"],
      ["gentile", "kind / nice"],
      ["piuttosto", "quite"],
      ["un po'", "a bit"],
    ],
    suggerimenti: [
      "Descrivi il carattere, una caratteristica stabile. Quale verbo e quale tempo? Poi due avverbi che graduano gli aggettivi: «piuttosto» e «molto».",
      "Lei + «essere» + l'avverbio per «piuttosto» + timida + ma + «molto» + gentile.",
    ],
    simile: "He's quite quiet, but very funny.",
    spiegazione:
      "Quite (piuttosto), a bit (un po', spesso negativo), very (molto) graduano gli aggettivi. Kind = gentile; gentle = delicato, dolce.",
    lezione: "S2{9}",
  },
  {
    id: "a2-somiglia",
    livello: "A2",
    contesto:
      "Mostri una foto di famiglia alla tua amica. Lei indica tuo fratello: stessi occhi, stesso naso, stesso sorriso di vostro padre.",
    consegna: "Dille che tuo fratello somiglia a vostro padre.",
    soluzioni: [
      "He looks like his father.",
      "He looks like my father.",
      "My brother looks like my father.",
      "My brother looks like my dad.",
      "He looks like our father.",
      "He looks like our dad.",
    ],
    tempo: "present simple",
    parole: [
      ["somigliare a", "look like"],
      ["padre / papà", "father / dad"],
    ],
    suggerimenti: [
      "È una caratteristica stabile. Quale tempo (attenzione alla terza persona)? «Somigliare a» in inglese si dice con il verbo «guardare/sembrare» + una preposizione.",
      "Soggetto + il verbo «sembrare» con la -s + la preposizione che significa «come» + il padre con il possessivo.",
    ],
    simile: "She looks like her mother.",
    spiegazione:
      "Look like = somigliare (nell'aspetto): he looks like his father. What does he look like? = Com'è d'aspetto?",
    lezione: "S2{1}",
  },
  {
    id: "a2-quanto-tempo-abbiamo",
    livello: "A2",
    contesto:
      "Tu e il tuo compagno di laboratorio dovete finire l'esperimento prima che il professore chiuda l'aula. Lui ha l'orologio, tu no.",
    consegna: "Chiedigli quanto tempo avete.",
    soluzioni: [
      "How much time have we got?",
      "How much time do we have?",
      "How much time have we got left?",
    ],
    tempo: "have got|present simple",
    parole: [
      ["tempo", "time", "non numerabile"],
      ["rimasto", "left"],
    ],
    suggerimenti: [
      "Chiedi una quantità di qualcosa che non si conta (il tempo). Quale espressione si usa per «quanto»?",
      "L'espressione di «quanto» per i non numerabili + tempo + domanda con have got (ausiliare, soggetto, got) oppure con do + have.",
    ],
    simile: "How much money have you got?",
    spiegazione:
      "Time (tempo) è non numerabile: how much time. How many times significa invece «quante volte».",
    lezione: "lezione 18{5}",
  },
  {
    id: "a2-anello",
    livello: "A2",
    contesto:
      "Una collega ammira l'anello antico che porti al dito. Te l'ha regalato tua nonna quando hai compiuto diciotto anni.",
    consegna: "Dille che te l'ha dato tua nonna.",
    soluzioni: [
      "My grandmother gave me this ring.",
      "My grandmother gave it to me.",
      "My grandma gave me this ring.",
      "My grandmother gave me this ring for my eighteenth birthday.",
      "My grandma gave it to me.",
    ],
    tempo: "past simple",
    parole: [
      ["nonna", "grandmother / grandma"],
      ["dare / regalare", "give", "verbo irregolare"],
      ["anello", "ring"],
    ],
    suggerimenti: [
      "Il regalo è un fatto concluso del passato. Quale tempo? Poi: un verbo con due complementi (a chi e che cosa). In che ordine?",
      "Past simple irregolare di «dare» + la persona (senza to) + la cosa. Oppure: la cosa (un pronome) + to + la persona.",
    ],
    simile: "My uncle sent me a postcard.",
    spiegazione:
      "Con give, send, show: give me the ring oppure give it to me. Con un pronome come oggetto si usa la seconda forma: «give me it» è poco naturale.",
    lezione: "lezione 16{5}",
  },
  {
    id: "a2-alzarsi-presto",
    livello: "A2",
    contesto:
      "Il tuo amico ti propone una corsa all'alba alle sei di mattina. Per te è un incubo: la mattina presto non sei una persona.",
    consegna: "Digli che odi alzarti presto.",
    soluzioni: [
      "I hate getting up early.",
      "I hate getting up early!",
      "I really hate getting up early.",
      "I hate to get up early.",
      "Sorry, I hate getting up early.",
    ],
    tempo: "present simple",
    parole: [
      ["odiare", "hate"],
      ["alzarsi", "get up"],
      ["presto", "early"],
    ],
    suggerimenti: [
      "È un gusto (negativo) generale. Quale tempo? Dopo «odiare», in che forma va il verbo dell'attività?",
      "Soggetto + «odiare» + il phrasal verb «alzarsi» con -ing + l'avverbio che significa «presto (di mattina)».",
    ],
    simile: "She hates waiting for the bus.",
    spiegazione:
      "Hate, love, like, enjoy + -ing: I hate getting up early. Early = presto (all'inizio del giorno), soon = presto (tra poco).",
    lezione: "lezione 20{3}",
  },
  {
    id: "a2-bella-serata",
    livello: "A2",
    contesto:
      "Tornate a casa a piedi dopo una cena con musica dal vivo, risate e tanti nuovi amici. Davanti alla porta ti rivolgi alla tua amica.",
    consegna: "Dille che è stata una serata fantastica (indicandola con «quella»).",
    soluzioni: [
      "That was a great evening!",
      "That was a great evening.",
      "That was a fantastic evening!",
      "That was a lovely evening!",
      "That was a wonderful evening!",
      "That was a great night!",
    ],
    tempo: "past simple",
    parole: [
      ["serata", "evening / night"],
      ["fantastico", "great / fantastic / wonderful"],
    ],
    suggerimenti: [
      "La serata è appena finita: è nel passato. Quale tempo di «essere»? E per riferirti a qualcosa di concluso, che dimostrativo usi?",
      "Il dimostrativo della distanza (anche nel tempo) + il passato di «essere» + articolo + aggettivo + serata.",
    ],
    simile: "That was a really good film.",
    spiegazione:
      "That si usa anche per le cose appena finite (lontane nel tempo): That was great! This invece per quello che sta succedendo: This is fun!",
    lezione: "lezione 15{5}",
  },
  {
    id: "a2-quello-rosso",
    livello: "A2",
    contesto:
      "Al mercato coperto la venditrice ti mostra due ombrelli, uno blu e uno rosso, e ti chiede quale vuoi. Ti piace quello rosso.",
    consegna: "Dille che vorresti quello rosso.",
    soluzioni: [
      "I'd like the red one, please.",
      "I would like the red one, please.",
      "I'll take the red one, please.",
      "I'll have the red one, please.",
      "Can I have the red one, please?",
    ],
    tempo: "conditional|future simple|can",
    parole: [
      ["rosso", "red"],
      ["prendere (in negozio)", "take"],
    ],
    suggerimenti: [
      "Fai una scelta cortese adesso. Quale formula significa «vorrei»? Poi: per non ripetere «ombrello», che cosa si mette dopo l'aggettivo?",
      "La formula di «vorrei» + articolo determinativo + rosso + la parola che sostituisce il nome (è lo stesso numero «uno»).",
    ],
    simile: "Which shirt? The blue one.",
    spiegazione:
      "In inglese un aggettivo non può stare da solo al posto del nome: the red one (non «the red»). Al plurale: the red ones.",
    lezione: "lezione 15{6}",
  },
  {
    id: "a2-consiglio",
    livello: "A2",
    contesto:
      "Devi scegliere quale corso opzionale seguire e sei confuso. Vai dalla tua tutor durante l'orario di ricevimento.",
    consegna: "Chiedile se può darti un consiglio.",
    soluzioni: [
      "Can you give me some advice?",
      "Could you give me some advice?",
      "Could you give me some advice, please?",
      "Can you give me a piece of advice?",
      "Can I ask your advice?",
      "Can I ask you for some advice?",
    ],
    tempo: "can|could",
    parole: [
      ["consiglio / consigli", "advice", "non numerabile"],
      ["dare", "give"],
      ["un consiglio", "a piece of advice"],
    ],
    suggerimenti: [
      "Chiedi un favore. Quale modale? Attenzione a «consiglio»: in inglese è un nome numerabile o no?",
      "Modale + tu + «dare» + me + il quantificatore per «un po' di» + consiglio (senza «an» e senza -s). Per contarlo: un pezzo di...",
    ],
    simile: "Can you give me some information about the course?",
    spiegazione:
      "Advice è non numerabile: some advice, a piece of advice (mai «an advice» o «advices»). Lo stesso vale per information e news.",
    lezione: "lezione 17{6}",
  },
  {
    id: "a2-tra-due-settimane",
    livello: "A2",
    contesto:
      "Saluti la tua amica alla stazione dopo una visita. Vi rivedrete a una festa tra due settimane esatte.",
    consegna: "Dille che vi vedrete tra due settimane.",
    soluzioni: [
      "I'll see you in two weeks.",
      "I will see you in two weeks.",
      "See you in two weeks!",
      "I'll see you in a fortnight.",
      "See you in a fortnight!",
    ],
    tempo: "future simple|imperativo|present simple",
    parole: [
      ["vedere", "see"],
      ["due settimane", "two weeks / a fortnight"],
    ],
    suggerimenti: [
      "È un'affermazione sul futuro. Quale futuro? Poi: «tra» due settimane, a partire da adesso: quale preposizione? (Non è between e non è after.)",
      "Soggetto + il modale del futuro + vedere + te + la preposizione che significa «tra (da adesso)» + il periodo.",
    ],
    simile: "The results will be ready in three days.",
    spiegazione:
      "Tra (da adesso) = in: in two weeks. After two weeks significa «dopo due settimane» in un racconto. A fortnight = due settimane (britannico).",
    lezione: "lezione 9{7}",
  },
  {
    id: "a2-com-e-andato",
    livello: "A2",
    contesto:
      "La tua amica ha avuto stamattina l'esame orale di francese per cui si preparava da mesi. La incontri al bar nel pomeriggio.",
    consegna: "Chiedile com'è andato l'esame.",
    soluzioni: [
      "How did your exam go?",
      "How did the exam go?",
      "So, how did your exam go?",
      "How did it go?",
      "How was your exam?",
      "How was the exam?",
    ],
    tempo: "past simple",
    parole: [
      ["andare (riuscire)", "go"],
      ["esame", "exam"],
    ],
    suggerimenti: [
      "L'esame è finito stamattina. Quale tempo? «Com'è andato?» in inglese usa lo stesso verbo «andare»: come si costruisce la domanda?",
      "«Come» + l'ausiliare del passato + il possessivo + esame + il verbo «andare» alla forma base. In alternativa: «come» + il passato di «essere» + l'esame.",
    ],
    simile: "How did your interview go?",
    spiegazione:
      "How did it go? = com'è andato? Go qui significa «andare (bene o male)». Anche How was it? è molto comune.",
    lezione: "lezione 24{3}",
  },
  {
    id: "a2-prima-volta",
    livello: "A2",
    contesto:
      "I tuoi amici ti portano in un ristorante indiano di Cowley Road. Guardi il menù senza capire niente: non hai mai mangiato cucina indiana.",
    consegna: "Spiega che è la prima volta che mangi cibo indiano.",
    soluzioni: [
      "This is the first time I've eaten Indian food.",
      "It's the first time I've eaten Indian food.",
      "This is the first time I have eaten Indian food.",
      "It's the first time I've had Indian food.",
      "This is the first time I've tried Indian food.",
    ],
    tempo: "present perfect",
    parole: [
      ["mangiare", "eat", "verbo irregolare"],
      ["provare / assaggiare", "try"],
      ["cibo indiano", "Indian food"],
      ["la prima volta", "the first time"],
    ],
    suggerimenti: [
      "In italiano: «è la prima volta che mangio», al presente. Ma in inglese, dopo «è la prima volta che...», si usa il tempo delle esperienze. Quale?",
      "Il dimostrativo o it + «essere» + «la prima volta» + soggetto + present perfect (ausiliare + participio irregolare di «mangiare»).",
    ],
    simile: "It's the first time I've seen snow.",
    spiegazione:
      "Dopo It's the first time... si usa il present perfect: It's the first time I've eaten Indian food (non «I eat»).",
    lezione: "lezione 29{3}",
  },
  {
    id: "a2-ambulanza",
    livello: "A2",
    contesto:
      "Per strada un signore anziano inciampa e cade. Non si muove e perde sangue dalla testa. Intorno si forma un gruppetto di persone che guarda senza fare niente.",
    consegna: "Grida a qualcuno di chiamare un'ambulanza.",
    soluzioni: [
      "Call an ambulance!",
      "Please call an ambulance!",
      "Call an ambulance, quick!",
      "Call 999!",
    ],
    tempo: "imperativo",
    parole: [
      ["chiamare", "call"],
      ["ambulanza", "ambulance"],
      ["presto!", "quick!"],
    ],
    suggerimenti: [
      "È un ordine urgente. Quale modo verbale? Attenzione all'articolo davanti a una parola che comincia per vocale.",
      "Imperativo del verbo «chiamare» + l'articolo indeterminativo nella forma per i suoni vocalici + ambulanza.",
    ],
    simile: "Call the police!",
    spiegazione:
      "Nelle emergenze si usa l'imperativo: Call an ambulance! Nel Regno Unito il numero di emergenza è il 999 (o il 112).",
    lezione: "S8{8}",
  },
];
