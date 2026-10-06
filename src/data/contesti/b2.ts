import type { Contesto } from ".";

// I contesti di livello B2-C1
export const CONTESTI_B2: Contesto[] = [
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
  {
    id: "b2-deduzione-passato",
    livello: "B2-C1",
    contesto:
      "Avevi appuntamento con Ben alle otto davanti al teatro. Sono le nove, non è venuto e non risponde al telefono. Ben è famoso per la sua memoria pessima.",
    consegna: "Di' alla tua amica che deve essersene dimenticato (ne sei quasi sicuro).",
    soluzioni: [
      "He must have forgotten.",
      "He must've forgotten.",
      "Ben must have forgotten.",
      "He must have forgotten about it.",
      "He must have forgotten about our appointment.",
      "He must have forgotten about us.",
    ],
    tempo: "must have",
    parole: [
      ["dimenticare", "forget", "verbo irregolare"],
      ["appuntamento", "appointment / meeting"],
    ],
    suggerimenti: [
      "È una deduzione quasi certa, ma su qualcosa che è già successo (la dimenticanza è nel passato). Come si mette al passato il modale della deduzione?",
      "Modale della deduzione + have + participio passato (quello di «dimenticare» è irregolare). Il modale non cambia: è have + participio che sposta la deduzione nel passato.",
    ],
    simile: "She must have missed the train.",
    spiegazione:
      "Must have + participio = deduzione quasi certa sul passato («deve aver dimenticato»). Il contrario è can't have + participio («non può aver dimenticato»).",
    lezione: "lezione 45{5}",
  },
  {
    id: "b2-occasione-persa",
    livello: "B2-C1",
    contesto:
      "Quando hai finito il liceo, ti hanno ammesso sia a Cambridge sia a Oxford. Un nuovo amico ti chiede come mai sei finito proprio a Oxford.",
    consegna: "Digli che saresti potuto andare a Cambridge, ma hai scelto Oxford.",
    soluzioni: [
      "I could have gone to Cambridge, but I chose Oxford.",
      "I could've gone to Cambridge, but I chose Oxford.",
      "I could have gone to Cambridge but I chose Oxford.",
      "I could have studied at Cambridge, but I chose Oxford.",
      "I could have gone to Cambridge, but I preferred Oxford.",
    ],
    tempo: "could have",
    parole: [
      ["andare", "go", "verbo irregolare"],
      ["studiare", "study"],
      ["scegliere", "choose", "verbo irregolare"],
      ["preferire", "prefer"],
    ],
    suggerimenti: [
      "La prima parte è una possibilità che avevi nel passato e che NON si è realizzata. Quale modale al passato esprime un'occasione non colta? La seconda parte, invece, è un fatto concluso.",
      "Prima parte: il modale della possibilità + have + participio. Seconda parte, dopo «ma»: past simple irregolare di «scegliere».",
    ],
    simile: "We could have won the match, but we made too many mistakes.",
    spiegazione:
      "Could have + participio indica una possibilità passata che non si è realizzata («avrei potuto»). L'italiano «sarei potuto andare» non diventa «I could be gone».",
    lezione: "lezione 51{3}",
  },
  {
    id: "b2-rimpianto",
    livello: "B2-C1",
    contesto:
      "Fai l'avvocato da dieci anni ma il lavoro non ti piace. Guardando un documentario sugli ospedali da campo ripensi a quando, a diciotto anni, scegliesti giurisprudenza invece di medicina.",
    consegna: "Esprimi il rimpianto: magari avessi studiato medicina!",
    soluzioni: [
      "I wish I had studied medicine.",
      "I wish I'd studied medicine.",
      "I wish I had studied medicine instead of law.",
      "I wish I'd studied medicine instead of law.",
      "If only I had studied medicine.",
      "If only I'd studied medicine!",
    ],
    tempo: "past perfect",
    parole: [
      ["studiare", "study"],
      ["medicina", "medicine"],
      ["giurisprudenza", "law"],
      ["invece di", "instead of"],
    ],
    suggerimenti: [
      "È un desiderio irreale riferito al PASSATO: la scelta è stata fatta e non si può cambiare. Quale tempo segue wish quando si rimpiange qualcosa di passato?",
      "Wish (o l'espressione «se solo») + soggetto + had + participio passato: è lo stesso tempo della frase con if nel third conditional.",
    ],
    simile: "I wish I had listened to my parents.",
    spiegazione:
      "Wish + past perfect esprime un rimpianto per il passato (magari avessi...). Wish + past simple invece riguarda il presente (I wish I knew).",
    lezione: "lezione 41{5}",
  },
  {
    id: "b2-si-dice",
    livello: "B2-C1",
    contesto:
      "Accompagni un gruppo di turisti in un tour serale per i college di Oxford. Davanti a un vecchio portone di pietra abbassi la voce: secondo la leggenda, questo college è infestato dai fantasmi.",
    consegna: "Di' che si dice che il college sia infestato (forma passiva impersonale).",
    soluzioni: [
      "It is said that the college is haunted.",
      "The college is said to be haunted.",
      "This college is said to be haunted.",
      "It is said that this college is haunted.",
    ],
    tempo: "passiva",
    parole: [
      ["college", "college"],
      ["infestato (dai fantasmi)", "haunted"],
    ],
    suggerimenti: [
      "Non dici CHI lo racconta: è una voce che gira, un'opinione diffusa. Quale forma del verbo «dire» permette di non nominare chi parla?",
      "Due costruzioni: soggetto impersonale + passivo di «dire» al presente + that + frase; oppure il college come soggetto + passivo di «dire» + to + «essere» alla forma base + l'aggettivo.",
    ],
    simile: "He is believed to be the richest man in the country.",
    spiegazione:
      "It is said that... / X is said to be... corrispondono all'italiano «si dice che». È tipico dell'inglese giornalistico e formale (anche con believed, thought, known).",
    lezione: "lezione 43{6}",
  },
  {
    id: "b2-inversione-condizionale",
    livello: "B2-C1",
    contesto:
      "Hai scoperto solo oggi che ieri sera c'era la festa di addio di una tua compagna. Nessuno ti aveva avvisato. Le scrivi un messaggio un po' formale e dispiaciuto.",
    consegna:
      "Scrivile che, se l'avessi saputo, saresti venuto: usa l'inversione (senza if).",
    soluzioni: [
      "Had I known, I would have come.",
      "Had I known, I'd have come.",
      "Had I known about it, I would have come.",
      "Had I known about the party, I would have come.",
      "Had I known, I would have been there.",
      "Had I known about the party, I would have been there.",
    ],
    tempo: "conditional perfect",
    parole: [
      ["sapere", "know", "verbo irregolare"],
      ["venire", "come", "verbo irregolare"],
      ["esserci", "be there"],
      ["festa", "party"],
    ],
    suggerimenti: [
      "È un'ipotesi irreale sul passato: non lo sapevi e non sei venuto. Quale condizionale? E nel registro formale, come si può togliere if?",
      "Si toglie if e si mette l'ausiliare del past perfect PRIMA del soggetto, poi il participio. Nella seconda parte, come sempre: would + have + participio.",
    ],
    simile: "Had we left earlier, we would have caught the train.",
    spiegazione:
      "Nel third conditional formale if può sparire con l'inversione: Had I known = If I had known. Funziona anche con were (Were I you...) e should (Should you need...).",
    lezione: "lezione 53{4}",
  },
  {
    id: "b2-not-only",
    livello: "B2-C1",
    contesto:
      "Commenti in TV la maratona di Londra. La favorita ha vinto la gara e, in più, ha battuto il record del mondo. Vuoi sottolineare l'impresa con una frase enfatica.",
    consegna:
      "Di' che non solo ha vinto la gara, ma ha anche battuto il record (comincia con «Not only»).",
    soluzioni: [
      "Not only did she win the race, but she also broke the record.",
      "Not only did she win the race, she also broke the record.",
      "Not only did she win the race, but she also broke the world record.",
      "Not only did she win the race, she also broke the world record.",
      "Not only did she win, but she also broke the record.",
      "Not only did she win the race, but she broke the record too.",
    ],
    tempo: "past simple",
    parole: [
      ["vincere", "win", "verbo irregolare"],
      ["gara", "race"],
      ["battere (un record)", "break", "verbo irregolare"],
      ["record del mondo", "world record"],
    ],
    suggerimenti: [
      "Sono due fatti conclusi del passato. Ma quando una frase comincia con un'espressione restrittiva come «Not only», che cosa succede all'ordine delle parole?",
      "Not only + l'ausiliare del past simple + soggetto + verbo BASE (l'ausiliare porta già il passato); poi «ma anche» + soggetto + il passato irregolare di «battere», senza inversione.",
    ],
    simile: "Not only did he forget my birthday, but he also lost my present.",
    spiegazione:
      "Dopo not only all'inizio serve l'inversione: Not only did she win (come in una domanda). La seconda parte (but... also) ha l'ordine normale.",
    lezione: "lezione 53{2}",
  },
  {
    id: "b2-do-enfatico",
    livello: "B2-C1",
    contesto:
      "Tornate a casa e la porta è aperta. Il tuo coinquilino ti accusa di averla lasciata aperta. Ma tu ricordi benissimo di averla chiusa a chiave: hai anche controllato due volte.",
    consegna: "Ribatti con enfasi che tu l'avevi chiusa a chiave (do enfatico).",
    soluzioni: [
      "I did lock the door!",
      "I did lock the door.",
      "I did lock it!",
      "I did lock it.",
      "But I did lock the door!",
      "I did lock the door, I checked twice!",
    ],
    tempo: "past simple",
    parole: [
      ["chiudere a chiave", "lock"],
      ["porta", "door"],
      ["controllare", "check"],
      ["due volte", "twice"],
    ],
    suggerimenti: [
      "È un fatto concluso del passato: quale tempo? Ma vuoi ribattere con forza a un'accusa: in italiano alzeresti la voce («l'ho CHIUSA!»). In inglese c'è una struttura grammaticale apposta.",
      "In una frase affermativa si aggiunge l'ausiliare del past simple prima del verbo, che torna alla forma base. Nel parlato, l'ausiliare si pronuncia con forza.",
    ],
    simile: "I did tell you about the meeting!",
    spiegazione:
      "Il do enfatico (do/does/did + verbo base in una frase affermativa) insiste sulla verità di un fatto, spesso per contraddire qualcuno: I did lock it!",
    lezione: "lezione 53{6}",
  },
  {
    id: "b2-scissa-what",
    livello: "B2-C1",
    contesto:
      "È la fine di un trimestre massacrante: esami, saggi, notti in biblioteca. Un amico ti propone un nuovo progetto, ma tu hai le idee chiarissime su ciò che ti serve davvero.",
    consegna: "Digli con enfasi che ciò di cui hai bisogno è una vacanza (comincia con «What»).",
    soluzioni: [
      "What I need is a holiday.",
      "What I need is a holiday!",
      "What I really need is a holiday.",
      "What I need now is a holiday.",
      "What I need is a break.",
      "What I really need is a break.",
    ],
    tempo: "present simple",
    parole: [
      ["avere bisogno di", "need"],
      ["vacanza", "holiday", "vacation è americano"],
      ["pausa", "break"],
    ],
    suggerimenti: [
      "È uno stato presente (un bisogno). Vuoi mettere in risalto la COSA di cui hai bisogno, spostandola alla fine. Quale costruzione inglese corrisponde a «ciò che / quello di cui»?",
      "Frase scissa: la parola che significa «ciò che» + soggetto + verbo, poi «essere» al singolare, poi la cosa che vuoi evidenziare. Attenzione: «avere bisogno» in inglese è un solo verbo, senza preposizione.",
    ],
    simile: "What she wants is a quiet life.",
    spiegazione:
      "What + soggetto + verbo + is + X mette X in risalto (pseudo-cleft). «Avere bisogno di» = need, senza «of»: What I need, non «What I need of».",
    lezione: "lezione 53{5}",
  },
  {
    id: "b2-email-formale",
    livello: "B2-C1",
    contesto:
      "Hai visto sul sito dell'università un annuncio per un posto da assistente di ricerca nel dipartimento di storia. Scrivi l'email di candidatura al professor Davies.",
    consegna:
      "Scrivi la prima frase dopo il saluto: ti rivolgi a lui per candidarti al posto di assistente di ricerca.",
    soluzioni: [
      "I am writing to apply for the position of research assistant.",
      "I am writing to apply for the post of research assistant.",
      "I am writing to apply for the research assistant position.",
      "I'm writing to apply for the position of research assistant.",
    ],
    tempo: "present continuous",
    parole: [
      ["candidarsi (per)", "apply (for)"],
      ["posto (di lavoro)", "position / post"],
      ["assistente di ricerca", "research assistant"],
    ],
    suggerimenti: [
      "La frase descrive quello che stai facendo proprio mentre scrivi. Quale tempo si usa nella formula d'apertura delle email formali?",
      "Present continuous di «scrivere» (in un'email formale, meglio senza contrazioni) + to + verbo base per lo scopo + la preposizione che regge quel verbo + il posto.",
    ],
    simile: "I am writing to enquire about your summer courses.",
    spiegazione:
      "I am writing to + verbo (apply for, enquire about, complain about) è l'apertura standard delle email formali britanniche. Nel registro formale si evitano le contrazioni.",
    lezione: "lezione 54{3}",
  },
  {
    id: "b2-richiesta-cortese",
    livello: "B2-C1",
    contesto:
      "Devi chiedere alla tua tutor, che conosci appena, di rileggere la bozza della tua tesina prima della consegna. Sai che è molto impegnata e non vuoi sembrare invadente.",
    consegna:
      "Chiedile in modo molto cortese se potrebbe aiutarti (la formula «mi chiedevo se...»).",
    soluzioni: [
      "I was wondering if you could help me.",
      "I was wondering whether you could help me.",
      "I was wondering if you could help me with my essay.",
      "I was wondering if you could have a look at my essay.",
      "I was wondering if you could read my draft.",
      "I was wondering if you could read my essay.",
    ],
    tempo: "past continuous",
    parole: [
      ["chiedersi", "wonder"],
      ["aiutare", "help"],
      ["dare un'occhiata a", "have a look at"],
      ["bozza", "draft"],
      ["saggio / tesina", "essay"],
    ],
    suggerimenti: [
      "La richiesta riguarda adesso, ma l'inglese «allontana» la domanda nel passato per renderla meno diretta. Quale tempo del passato, con il verbo «chiedersi», crea questa distanza cortese?",
      "Past continuous di «chiedersi» + «se» + tu + il modale cortese (al passato di can) + verbo base.",
    ],
    simile: "I was wondering if I could borrow your notes.",
    spiegazione:
      "I was wondering if you could... è una delle formule più cortesi dell'inglese: il past continuous non indica il passato, ma ammorbidisce la richiesta.",
    lezione: "lezione 54{5}",
  },
  {
    id: "b2-futuro-continuous",
    livello: "B2-C1",
    contesto:
      "Un collega ti chiede se domani alle tre puoi partecipare a una videochiamata. A quell'ora sarai in aereo: il tuo volo per New York parte alle undici.",
    consegna: "Spiegagli che domani a quest'ora (alle tre) starai volando verso New York.",
    soluzioni: [
      "I'll be flying to New York.",
      "I will be flying to New York.",
      "Sorry, I'll be flying to New York.",
      "At three I'll be flying to New York.",
      "At three o'clock I'll be flying to New York.",
      "Tomorrow at three I'll be flying to New York.",
      "I'll be flying to New York at three.",
    ],
    tempo: "future continuous",
    parole: [
      ["volare", "fly", "verbo irregolare"],
      ["New York", "New York"],
      ["alle tre", "at three (o'clock)"],
    ],
    suggerimenti: [
      "Non parli di un'azione che comincia domani alle tre: a quell'ora sarà GIÀ IN CORSO. Quale futuro descrive un'azione in svolgimento in un momento preciso del futuro?",
      "Future continuous: will + be + verbo in -ing. La destinazione si introduce con la preposizione di movimento.",
    ],
    simile: "This time next week, we'll be lying on the beach.",
    spiegazione:
      "Future continuous (will be + -ing): un'azione che sarà in corso in un momento futuro. È anche un modo cortese per dire che non sarai disponibile.",
  },
  {
    id: "b2-causativo",
    livello: "B2-C1",
    contesto:
      "La tua amica nota che hai un taglio di capelli nuovo e ti chiede se te li sei tagliati da solo. Ovviamente no: sei andato dal barbiere ieri.",
    consegna: "Rispondi che ti sei fatto tagliare i capelli ieri (forma causativa).",
    soluzioni: [
      "I had my hair cut yesterday.",
      "No, I had my hair cut yesterday.",
      "I got my hair cut yesterday.",
      "No, I got my hair cut yesterday.",
      "I had my hair cut at the barber's yesterday.",
    ],
    tempo: "past simple|causativo",
    parole: [
      ["capelli", "hair", "singolare"],
      ["tagliare", "cut", "irregolare: cut, cut, cut"],
      ["dal barbiere", "at the barber's"],
    ],
    suggerimenti: [
      "Il taglio non l'hai fatto tu: l'ha fatto qualcun altro per te, ieri. Quale tempo? E quale costruzione inglese corrisponde a «farsi fare qualcosa»?",
      "Causativo: il verbo «avere» (o «ottenere») al passato + la cosa (con il possessivo) + il participio passato del verbo. «Tagliare» ha il participio uguale alla forma base.",
    ],
    simile: "We had our kitchen painted last month.",
    spiegazione:
      "Have + oggetto + participio passato = farsi fare qualcosa da qualcun altro: I had my hair cut. «I cut my hair» vorrebbe dire che te li sei tagliati da solo.",
  },
  {
    id: "b2-preferenza",
    livello: "B2-C1",
    contesto:
      "Venerdì sera i tuoi amici vogliono andare in discoteca. Tu hai avuto una settimana pesantissima e sogni solo il divano e un film.",
    consegna: "Di' che preferiresti restare a casa stasera (would rather).",
    soluzioni: [
      "I'd rather stay at home tonight.",
      "I would rather stay at home tonight.",
      "I'd rather stay home tonight.",
      "I'd rather stay in tonight.",
      "I would rather stay in tonight.",
      "Sorry, I'd rather stay at home tonight.",
      "I'd rather stay at home.",
    ],
    tempo: "conditional",
    parole: [
      ["restare", "stay"],
      ["a casa", "at home / home / in"],
      ["stasera", "tonight"],
    ],
    suggerimenti: [
      "Esprimi una preferenza per adesso, per una situazione specifica. Quale espressione con il condizionale significa «preferirei»?",
      "Would (di solito contratto) + l'avverbio che significa «piuttosto» + verbo BASE, senza to. Non serve il verbo «preferire».",
    ],
    simile: "I'd rather walk than take the bus.",
    spiegazione:
      "Would rather + verbo base (senza to) = preferirei. «I'd rather to stay» è sbagliato. Il confronto si fa con than: I'd rather stay in than go out.",
    lezione: "lezione 20{6}",
  },
  {
    id: "b2-hedging",
    livello: "B2-C1",
    contesto:
      "Presenti a un seminario i risultati di un piccolo studio su un nuovo farmaco. I dati sono incoraggianti ma il campione è piccolo: non puoi affermare nulla con certezza.",
    consegna:
      "Di' con prudenza accademica che i risultati sembrano suggerire che il farmaco sia efficace.",
    soluzioni: [
      "The results seem to suggest that the drug is effective.",
      "The results seem to suggest the drug is effective.",
      "The results suggest that the drug may be effective.",
      "The results suggest that the drug might be effective.",
      "The results seem to indicate that the drug is effective.",
      "These results seem to suggest that the drug is effective.",
    ],
    tempo: "present simple",
    parole: [
      ["risultati", "results"],
      ["sembrare", "seem"],
      ["suggerire / indicare", "suggest / indicate"],
      ["farmaco", "drug", "anche medicine"],
      ["efficace", "effective", "falso amico: «effettivo» è actual"],
    ],
    suggerimenti: [
      "È una valutazione dei dati che vale adesso: quale tempo si usa nella scrittura scientifica per descrivere i risultati? E come si «ammorbidisce» un'affermazione per non sembrare troppo sicuri?",
      "Present simple. Per la prudenza: un verbo che significa «sembrare» + to + un verbo che significa «indicare», poi that + la frase. In alternativa, un modale di possibilità nella frase finale.",
    ],
    simile: "The data appear to show a link between sleep and memory.",
    spiegazione:
      "L'hedging (seem to, appear to, may, might, suggest) è essenziale nell'inglese accademico: i risultati «suggeriscono», non «dimostrano». Effective = efficace (falso amico).",
    lezione: "lezione 50{4}",
  },
  {
    id: "b2-misto-inverso",
    livello: "B2-C1",
    contesto:
      "Alla festa di ieri c'era la ragazza che ti piace da mesi. Era sola al bancone, ma tu, timido come sei sempre stato, non sei riuscito ad avvicinarti.",
    consegna:
      "Di' che se non fossi così timido, le avresti parlato (il carattere è presente, l'occasione è passata).",
    soluzioni: [
      "If I weren't so shy, I would have spoken to her.",
      "If I wasn't so shy, I would have spoken to her.",
      "If I weren't so shy, I'd have spoken to her.",
      "If I wasn't so shy, I'd have spoken to her.",
      "If I weren't so shy, I would have talked to her.",
      "If I wasn't so shy, I would have talked to her.",
      "I would have spoken to her if I weren't so shy.",
      "I would have talked to her if I wasn't so shy.",
    ],
    tempo: "conditional perfect",
    parole: [
      ["timido", "shy"],
      ["parlare (a qualcuno)", "speak to / talk to", "speak è irregolare"],
      ["a lei", "to her"],
    ],
    suggerimenti: [
      "Le due parti hanno tempi diversi: la timidezza è una caratteristica di sempre (presente), la conversazione mancata è di ieri (passato). Quale periodo ipotetico mescola un'ipotesi presente e una conseguenza passata?",
      "Nella frase con if: il passato di «essere» al negativo (come nel second conditional). Nell'altra: would + have + participio (come nel third conditional).",
    ],
    simile: "If she weren't so busy, she would have come to the party.",
    spiegazione:
      "Condizionale misto (presente → passato): if + past simple (una condizione sempre vera), would have + participio (una conseguenza passata).",
    lezione: "lezione 52{3}",
  },
  {
    id: "b2-trapassato-progressivo",
    livello: "B2-C1",
    contesto:
      "Racconti la carriera di tua zia. Nel 2020 è diventata direttrice della banca, dopo aver lavorato lì per ben dieci anni come impiegata.",
    consegna:
      "Di' che lavorava lì da dieci anni quando è stata promossa.",
    soluzioni: [
      "She had been working there for ten years when she was promoted.",
      "She had been working there for 10 years when she was promoted.",
      "She had been working at the bank for ten years when she was promoted.",
      "She had worked there for ten years when she was promoted.",
      "When she was promoted, she had been working there for ten years.",
      "My aunt had been working there for ten years when she was promoted.",
    ],
    tempo: "past perfect continuous|past perfect",
    parole: [
      ["lavorare", "work"],
      ["lì", "there"],
      ["banca", "bank"],
      ["promuovere", "promote"],
      ["zia", "aunt"],
    ],
    suggerimenti: [
      "In italiano diciamo «lavorava lì da dieci anni», all'imperfetto. Ma è una durata che arriva fino a un momento del passato (la promozione). Quale tempo inglese corrisponde al present perfect continuous, spostato nel passato?",
      "Past perfect continuous: had + been + -ing, con for + la durata. La promozione è l'evento puntuale, al past simple e al passivo (era stata promossa da qualcun altro).",
    ],
    simile: "They had been waiting for an hour when the bus finally arrived.",
    spiegazione:
      "Past perfect continuous: la durata di un'azione fino a un momento del passato («lavorava da dieci anni quando...»). L'imperfetto italiano qui non diventa past continuous.",
    lezione: "lezione 37{2}",
  },
  {
    id: "b2-non-serviva",
    livello: "B2-C1",
    contesto:
      "Sei andato al concerto all'aperto nei giardini del college. Solo all'ingresso hai scoperto che era gratis, quindi non hai comprato nessun biglietto.",
    consegna: "Racconta che non c'è stato bisogno di comprare il biglietto (e infatti non l'hai comprato).",
    soluzioni: [
      "I didn't need to buy a ticket.",
      "I didn't need to buy a ticket, it was free.",
      "I did not need to buy a ticket.",
      "I didn't have to buy a ticket.",
      "I didn't have to buy a ticket, it was free.",
    ],
    tempo: "past simple|have to",
    parole: [
      ["comprare", "buy", "verbo irregolare"],
      ["biglietto", "ticket"],
      ["gratis", "free"],
    ],
    suggerimenti: [
      "Era una cosa non necessaria, e infatti non l'hai fatta. Quale forma esprime «non c'era bisogno di» nel passato, quando l'azione NON è stata fatta?",
      "L'ausiliare del passato negativo + need (o have) + to + verbo base. (Se l'avessi comprato inutilmente, servirebbe un'altra struttura: needn't have + participio.)",
    ],
    simile: "We didn't need to take a taxi; the hotel was close.",
    spiegazione:
      "Didn't need to = non era necessario (e non l'ho fatto). Needn't have + participio = l'ho fatto, ma era inutile: I needn't have bought a ticket.",
    lezione: "lezione 51{6}",
  },
  {
    id: "b2-non-avrei-dovuto",
    livello: "B2-C1",
    contesto:
      "Alla festa hai mangiato quattro fette di torta al cioccolato. Ora sei sul divano con il mal di pancia e ti penti dell'ultima.",
    consegna: "Di' che non avresti dovuto mangiare l'ultima fetta.",
    soluzioni: [
      "I shouldn't have eaten that last slice.",
      "I should not have eaten that last slice.",
      "I shouldn't have eaten the last slice.",
      "I shouldn't have eaten that last piece.",
      "I shouldn't have had that last slice.",
    ],
    tempo: "should have",
    parole: [
      ["mangiare", "eat", "verbo irregolare"],
      ["ultima", "last"],
      ["fetta", "slice / piece"],
    ],
    suggerimenti: [
      "È un rimpianto per qualcosa che hai fatto nel passato. Quale modale del consiglio, al negativo, e come si sposta nel passato?",
      "Il modale del consiglio con not (contratto) + have + il participio irregolare di «mangiare» + quell'ultima fetta.",
    ],
    simile: "I shouldn't have stayed up so late.",
    spiegazione:
      "Shouldn't have + participio = non avrei dovuto (ma l'ho fatto). Esprime pentimento o critica per il passato.",
    lezione: "lezione 51{2}",
  },
  {
    id: "b2-avrei-voluto-restare",
    livello: "B2-C1",
    contesto:
      "Sei tornato da un weekend a Edimburgo che ti è sembrato cortissimo. Una collega ti chiede com'è andata.",
    consegna: "Dille che ti sarebbe piaciuto restare più a lungo.",
    soluzioni: [
      "I would have liked to stay longer.",
      "I'd have liked to stay longer.",
      "I would have liked to stay a bit longer.",
      "I would have loved to stay longer.",
      "I'd have loved to stay longer.",
      "I would have liked to stay there longer.",
    ],
    tempo: "conditional perfect",
    parole: [
      ["restare", "stay"],
      ["più a lungo", "longer"],
    ],
    suggerimenti: [
      "È un desiderio riferito al passato che non si è realizzato. Qual è il passato di «vorrei / mi piacerebbe» (would like)?",
      "Would + have + il participio di «piacere» + to + verbo base + il comparativo di «a lungo».",
    ],
    simile: "I would have liked to meet your parents.",
    spiegazione:
      "Would have liked to + verbo base = mi sarebbe piaciuto. È il condizionale passato di would like.",
    lezione: "lezione 51{4}",
  },
  {
    id: "b2-forse-strada-sbagliata",
    livello: "B2-C1",
    contesto:
      "I tuoi amici dovevano arrivare in macchina al cottage un'ora fa. Non rispondono e in quella zona il navigatore sbaglia spesso. Qualcuno si preoccupa.",
    consegna: "Di' che forse hanno preso la strada sbagliata.",
    soluzioni: [
      "They may have taken the wrong road.",
      "They might have taken the wrong road.",
      "They could have taken the wrong road.",
      "They may have taken a wrong turn.",
      "They might have taken a wrong turn.",
      "Maybe they took the wrong road.",
    ],
    tempo: "may have|might have|could have|past simple",
    parole: [
      ["prendere (una strada)", "take", "verbo irregolare"],
      ["strada sbagliata", "the wrong road"],
      ["svolta sbagliata", "a wrong turn"],
    ],
    suggerimenti: [
      "È un'ipotesi possibile su qualcosa che potrebbe essere già successo. Quale modale di possibilità, e come si sposta nel passato?",
      "Loro + un modale di possibilità + have + il participio irregolare di «prendere» + la strada sbagliata.",
    ],
    simile: "He may have left his phone at home.",
    spiegazione:
      "May / might / could have + participio = forse hanno... (possibilità nel passato).",
    lezione: "lezione 51{5}",
  },
  {
    id: "b2-potevi-avvisarmi",
    livello: "B2-C1",
    contesto:
      "Arrivi alla cena e scopri che è una festa elegante: tutti in giacca e cravatta, tu in felpa. La tua amica lo sapeva da giorni.",
    consegna: "Rimproverala: avresti potuto avvisarmi!",
    soluzioni: [
      "You could have warned me!",
      "You could have warned me.",
      "You could've warned me!",
      "You could have told me!",
      "You might have warned me!",
    ],
    tempo: "could have|might have",
    parole: [
      ["avvisare / avvertire", "warn"],
      ["dire", "tell"],
    ],
    suggerimenti: [
      "È una critica: c'era una possibilità nel passato che lei non ha sfruttato. Quale modale di possibilità al passato si usa per i rimproveri?",
      "Tu + il passato del modale della possibilità + have + participio di «avvisare» + me.",
    ],
    simile: "You could have called me!",
    spiegazione:
      "Could have + participio, detto a un'altra persona, è spesso un rimprovero: avresti potuto (e non l'hai fatto).",
    lezione: "lezione 51{3}",
  },
  {
    id: "b2-misto-attento",
    livello: "B2-C1",
    contesto:
      "Hai perso di nuovo le chiavi di casa, la terza volta quest'anno. Sei sempre stato distratto, e lo sai.",
    consegna: "Di' che se fossi più attento, non avresti perso le chiavi.",
    soluzioni: [
      "If I were more careful, I wouldn't have lost my keys.",
      "If I was more careful, I wouldn't have lost my keys.",
      "If I were more careful, I would not have lost my keys.",
      "I wouldn't have lost my keys if I were more careful.",
      "If I weren't so careless, I wouldn't have lost my keys.",
    ],
    tempo: "conditional perfect",
    parole: [
      ["attento", "careful"],
      ["distratto / sbadato", "careless"],
      ["perdere", "lose", "verbo irregolare"],
      ["chiavi", "keys"],
    ],
    suggerimenti: [
      "La condizione è il tuo carattere (vale sempre, presente); la conseguenza è un fatto passato. Quale condizionale misto unisce le due cose?",
      "If + il passato di «essere» (come nel second conditional) + più attento; poi would not + have + il participio di «perdere».",
    ],
    simile: "If she were more patient, she wouldn't have shouted at him.",
    spiegazione:
      "Condizionale misto presente → passato: if + past simple (stato generale) + would have + participio (conseguenza passata).",
    lezione: "lezione 52{3}",
  },
  {
    id: "b2-but-for",
    livello: "B2-C1",
    contesto:
      "Alla cerimonia di laurea ringrazi pubblicamente il tuo tutor, che ti ha seguito anche quando volevi mollare tutto.",
    consegna: "Di' che senza il suo aiuto avresti fallito (usa «But for»).",
    soluzioni: [
      "But for your help, I would have failed.",
      "But for your help, I'd have failed.",
      "But for your help, I would have given up.",
      "I would have failed but for your help.",
      "But for your support, I would have failed.",
    ],
    tempo: "conditional perfect",
    parole: [
      ["aiuto", "help"],
      ["sostegno", "support"],
      ["fallire / non farcela", "fail"],
      ["arrendersi", "give up"],
    ],
    suggerimenti: [
      "È un'ipotesi irreale sul passato (l'aiuto c'è stato, il fallimento no). «But for» sostituisce una frase intera con if: che cosa segue, un verbo o un nome?",
      "But for + il possessivo + aiuto (un nome, niente verbo) + virgola + would have + participio di «fallire».",
    ],
    simile: "But for the traffic, we would have arrived on time.",
    spiegazione:
      "But for + nome = se non fosse stato per (= if it hadn't been for). È formale e vuole un nome, non una frase.",
    lezione: "lezione 52{5}",
  },
  {
    id: "b2-otherwise",
    livello: "B2-C1",
    contesto:
      "Un'amica è colpita perché ti sei ricordato del suo compleanno. In realtà l'avevi segnato sul calendario: con la tua memoria, te ne saresti dimenticato.",
    consegna: "Dille che l'avevi scritto; altrimenti te ne saresti dimenticato.",
    soluzioni: [
      "I wrote it down; otherwise I would have forgotten.",
      "I wrote it down, otherwise I would have forgotten.",
      "I wrote it down; otherwise I'd have forgotten.",
      "I wrote it down; otherwise I would have forgotten it.",
      "I had written it down; otherwise I would have forgotten.",
    ],
    tempo: "conditional perfect",
    parole: [
      ["annotare / scrivere", "write down", "phrasal verb; write è irregolare"],
      ["altrimenti", "otherwise"],
      ["dimenticare", "forget", "verbo irregolare"],
    ],
    suggerimenti: [
      "Prima un fatto reale del passato, poi la conseguenza irreale se non fosse successo. Quale tempo per il fatto, e quale per la conseguenza?",
      "Past simple del phrasal verb «annotare» (pronome in mezzo) + punto e virgola + «altrimenti» + would have + il participio irregolare di «dimenticare».",
    ],
    simile: "We took a taxi; otherwise we would have been late.",
    spiegazione:
      "Otherwise (altrimenti) introduce una conseguenza irreale: con un fatto passato, would have + participio.",
    lezione: "lezione 52{5}",
  },
  {
    id: "b2-non-ti-conoscerei",
    livello: "B2-C1",
    contesto:
      "Sei a cena con la tua migliore amica, conosciuta il primo giorno a Oxford. Ripensi a quanto sei stato vicino a scegliere un'altra università.",
    consegna: "Dille che se non ti fossi trasferito a Oxford, adesso non la conosceresti.",
    soluzioni: [
      "If I hadn't moved to Oxford, I wouldn't know you.",
      "If I hadn't moved to Oxford, I wouldn't know you now.",
      "If I had not moved to Oxford, I would not know you.",
      "I wouldn't know you if I hadn't moved to Oxford.",
      "If I hadn't come to Oxford, I wouldn't know you.",
    ],
    tempo: "conditional",
    parole: [
      ["trasferirsi", "move"],
      ["conoscere", "know", "verbo di stato"],
    ],
    suggerimenti: [
      "La condizione è nel passato (il trasferimento), la conseguenza nel presente (adesso). Quale condizionale misto?",
      "If + had not + participio di «trasferirsi»; poi would not + il verbo «conoscere» alla forma base (presente).",
    ],
    simile: "If I hadn't missed that bus, I wouldn't be here today.",
    spiegazione:
      "Condizionale misto passato → presente: if + past perfect, would + verbo base.",
    lezione: "lezione 52{2}",
  },
  {
    id: "b2-sarei-avvocato",
    livello: "B2-C1",
    contesto:
      "A diciotto anni hai scelto lettere invece di giurisprudenza, come voleva tuo padre. Oggi fai l'insegnante. Un amico ti chiede come sarebbe stato altrimenti.",
    consegna: "Di' che se avessi studiato legge, adesso saresti un avvocato.",
    soluzioni: [
      "If I had studied law, I would be a lawyer now.",
      "If I'd studied law, I'd be a lawyer now.",
      "If I had studied law, I'd be a lawyer now.",
      "I would be a lawyer now if I had studied law.",
      "If I had studied law, I would be a lawyer today.",
    ],
    tempo: "conditional",
    parole: [
      ["studiare", "study"],
      ["legge", "law"],
      ["avvocato", "lawyer"],
    ],
    suggerimenti: [
      "Una scelta passata (non fatta) e una situazione presente immaginaria. Quale condizionale misto?",
      "If + had + participio di «studiare» + legge; poi would + «essere» alla forma base + un avvocato + adesso.",
    ],
    simile: "If she had taken the job, she would live in Paris now.",
    spiegazione:
      "La strada non presa: if + past perfect (scelta passata), would + base (presente diverso). Le professioni vogliono a: a lawyer.",
    lezione: "lezione 52{6}",
  },
  {
    id: "b2-rarely",
    livello: "B2-C1",
    contesto:
      "Dalla cima di Arthur's Seat, a Edimburgo, guardi il sole che tramonta sul mare. Scrivi una frase enfatica nel tuo diario di viaggio.",
    consegna: "Scrivi, cominciando con «Rarely», che raramente hai visto un tramonto così bello.",
    soluzioni: [
      "Rarely have I seen such a beautiful sunset.",
      "Rarely have I seen a sunset so beautiful.",
      "Rarely have I seen such a lovely sunset.",
      "Rarely have I seen such a stunning sunset.",
    ],
    tempo: "present perfect",
    parole: [
      ["vedere", "see", "verbo irregolare"],
      ["tramonto", "sunset"],
      ["così bello", "such a beautiful (+ nome)"],
    ],
    suggerimenti: [
      "È un'esperienza di tutta la vita fino ad oggi: quale tempo? E quando la frase comincia con un avverbio negativo come «rarely», che cosa succede all'ordine?",
      "Rarely + ausiliare + io (inversione) + participio di «vedere» + «un tramonto così bello» (such + a + aggettivo + nome).",
    ],
    simile: "Seldom have I felt so welcome.",
    spiegazione:
      "Dopo rarely, seldom, never all'inizio si inverte: Rarely have I seen... Such a + aggettivo + nome (so beautiful senza nome).",
    lezione: "lezione 53{2}",
  },
  {
    id: "b2-not-until",
    livello: "B2-C1",
    contesto:
      "Racconti una giornata disastrosa: hai fatto la spesa, preso l'autobus e solo una volta arrivato a casa ti sei accorto che il portafoglio era sparito.",
    consegna: "Di' con enfasi: solo quando sei arrivato a casa ti sei reso conto di aver perso il portafoglio (Not until...).",
    soluzioni: [
      "Not until I got home did I realise I had lost my wallet.",
      "Not until I got home did I realise that I had lost my wallet.",
      "Not until I got home did I realize I had lost my wallet.",
      "Not until I arrived home did I realise I had lost my wallet.",
    ],
    tempo: "past perfect|past simple",
    parole: [
      ["arrivare a casa", "get home / arrive home"],
      ["rendersi conto", "realise", "americano: realize"],
      ["perdere", "lose", "verbo irregolare"],
      ["portafoglio", "wallet"],
    ],
    suggerimenti: [
      "Tre momenti passati: l'arrivo, la scoperta e la perdita (avvenuta prima). Quali tempi? E dopo «Not until + frase» all'inizio, dove va l'inversione?",
      "Not until + io + past simple di «arrivare a casa» + did + io + «rendersi conto» alla forma base + (that) + io + had + participio di «perdere».",
    ],
    simile: "Not until the film ended did I understand the title.",
    spiegazione:
      "Not until... all'inizio: l'inversione va nella frase principale (did I realise), non in quella con until. La perdita, precedente, va al past perfect.",
    lezione: "lezione 53{2}",
  },
  {
    id: "b2-should-you",
    livello: "B2-C1",
    contesto:
      "Sei il responsabile di un ostello e scrivi il messaggio di benvenuto per gli ospiti. Vuoi chiudere con una formula elegante.",
    consegna: "Scrivi che, se dovessero aver bisogno di aiuto, possono farvelo sapere (inversione con Should).",
    soluzioni: [
      "Should you need any help, please let us know.",
      "Should you need any help, please let me know.",
      "Should you need anything, please let us know.",
      "Should you require any assistance, please let us know.",
    ],
    tempo: "should",
    parole: [
      ["avere bisogno di", "need / require"],
      ["aiuto / assistenza", "help / assistance"],
      ["far sapere", "let (someone) know"],
    ],
    suggerimenti: [
      "È un'ipotesi futura, formale. Al posto di «If you need...» il registro formale usa un'inversione con un modale. Quale?",
      "Il modale (all'inizio, al posto di if) + tu + verbo base + qualche aiuto + virgola + please + l'imperativo di «lasciare» + noi + «sapere».",
    ],
    simile: "Should you have any questions, do not hesitate to contact us.",
    spiegazione:
      "Should you need... = if you need... (formale). È tipico delle email e dei messaggi professionali.",
    lezione: "lezione 53{4}",
  },
  {
    id: "b2-were-i",
    livello: "B2-C1",
    contesto:
      "Il tuo collega ha ricevuto un'offerta di lavoro eccellente da una ditta di Londra, ma esita. Gli dai un consiglio con tono un po' solenne.",
    consegna: "Digli che al suo posto accetteresti l'offerta (inversione con Were).",
    soluzioni: [
      "Were I you, I would accept the offer.",
      "Were I you, I'd accept the offer.",
      "Were I you, I would accept it.",
      "Were I in your position, I would accept the offer.",
      "Were I you, I would take the offer.",
    ],
    tempo: "conditional",
    parole: [
      ["accettare", "accept / take"],
      ["offerta", "offer"],
      ["posizione", "position"],
    ],
    suggerimenti: [
      "È l'equivalente formale di «If I were you». Come si costruisce togliendo if?",
      "Il verbo «essere» al congiuntivo (were) all'inizio + io + tu (complemento); poi would + accettare + l'offerta.",
    ],
    simile: "Were it not for the rain, we would go out.",
    spiegazione:
      "Were I you = If I were you (formale, con inversione). Funziona solo con were, had e should.",
    lezione: "lezione 53{4}",
  },
  {
    id: "b2-scissa-luogo",
    livello: "B2-C1",
    contesto:
      "Un amico pensa che tu abbia conosciuto tua moglie a Londra. In realtà vi siete conosciuti a Oxford, e ci tieni a sottolinearlo.",
    consegna: "Di' con enfasi che è stato a Oxford che hai conosciuto tua moglie.",
    soluzioni: [
      "It was in Oxford that I met my wife.",
      "It was in Oxford where I met my wife.",
      "No, it was in Oxford that I met my wife.",
      "It was at Oxford that I met my wife.",
    ],
    tempo: "past simple",
    parole: [
      ["conoscere (per la prima volta)", "meet", "verbo irregolare"],
      ["moglie", "wife"],
    ],
    suggerimenti: [
      "È un fatto passato. Vuoi mettere in risalto il LUOGO. Quale costruzione «spezza» la frase per dare enfasi a un elemento?",
      "It + «essere» al passato + il luogo con la preposizione + that + io + il passato irregolare di «conoscere» + mia moglie.",
    ],
    simile: "It was in 2019 that we moved to Bristol.",
    spiegazione:
      "Frase scissa: It was + elemento in risalto + that + resto della frase. Conoscere per la prima volta = meet (non know).",
    lezione: "lezione 53{5}",
  },
  {
    id: "b2-do-enfatico-presente",
    livello: "B2-C1",
    contesto:
      "La tua amica si è appena tagliata i capelli cortissimi e non è sicura del risultato. Tu lo trovi davvero bellissimo e vuoi convincerla.",
    consegna: "Dille con enfasi che il nuovo taglio ti piace davvero (do enfatico).",
    soluzioni: [
      "I do like your new haircut!",
      "I do like your new haircut.",
      "I really do like your new haircut!",
      "I do love your new haircut!",
    ],
    tempo: "present simple",
    parole: [
      ["piacere", "like"],
      ["taglio di capelli", "haircut"],
      ["nuovo", "new"],
    ],
    suggerimenti: [
      "È un gusto presente. Vuoi insistere per convincerla. Quale ausiliare si può aggiungere in una frase affermativa per dare enfasi?",
      "Io + l'ausiliare del present simple + «piacere» alla forma base + il tuo nuovo taglio.",
    ],
    simile: "She does look tired today.",
    spiegazione:
      "Il do enfatico al presente (do/does + base) rafforza un'affermazione: I do like it = mi piace davvero.",
    lezione: "lezione 53{6}",
  },
  {
    id: "b2-hardly",
    livello: "B2-C1",
    contesto:
      "Scrivi un racconto sulla tua prima giornata in Scozia. Eri appena sceso dal treno quando è cominciato un acquazzone.",
    consegna: "Scrivi, cominciando con «Hardly», che eri appena arrivato quando ha cominciato a piovere.",
    soluzioni: [
      "Hardly had I arrived when it started to rain.",
      "Hardly had I arrived when it started raining.",
      "Hardly had I arrived when it began to rain.",
      "Hardly had I got off the train when it started to rain.",
    ],
    tempo: "past perfect",
    parole: [
      ["arrivare", "arrive"],
      ["cominciare", "start / begin"],
      ["piovere", "rain"],
    ],
    suggerimenti: [
      "Due azioni passate in rapida successione: la prima appena conclusa. Quale tempo per la prima? E dopo «Hardly» all'inizio?",
      "Hardly + had + io (inversione) + participio di «arrivare» + when + soggetto impersonale + past simple di «cominciare» + to + piovere.",
    ],
    simile: "Hardly had we sat down when the phone rang.",
    spiegazione:
      "Hardly had I... when... (= appena... che): inversione con il past perfect, poi when + past simple. Si dice when, non than.",
    lezione: "lezione 53{2}",
  },
  {
    id: "b2-grato-se",
    livello: "B2-C1",
    contesto:
      "Scrivi all'ufficio ammissioni di un college per un corso estivo. Vuoi ricevere le informazioni dettagliate su costi e alloggio, con il massimo della cortesia.",
    consegna: "Scrivi che saresti grato se potessero mandarti i dettagli.",
    soluzioni: [
      "I would be grateful if you could send me the details.",
      "I would be grateful if you could send me further details.",
      "I would be very grateful if you could send me the details.",
      "I'd be grateful if you could send me the details.",
      "I would be grateful if you could send me more details.",
    ],
    tempo: "conditional|could",
    parole: [
      ["grato", "grateful"],
      ["mandare", "send", "verbo irregolare"],
      ["dettagli / ulteriori dettagli", "details / further details"],
    ],
    suggerimenti: [
      "È una richiesta molto formale, che si presenta come un'ipotesi. Quale condizionale e quale modale si usano in questa formula?",
      "Io + would + «essere» + grato + if + tu + il modale cortese (passato di can) + mandare + me + i dettagli.",
    ],
    simile: "I would be grateful if you could confirm my booking.",
    spiegazione:
      "I would be grateful if you could... è la formula più cortese delle email formali britanniche. Grateful, non «gratefull».",
    lezione: "lezione 54{5}",
  },
  {
    id: "b2-sotto-pressione",
    livello: "B2-C1",
    contesto:
      "Al colloquio per un tirocinio in una casa editrice ti chiedono qual è il tuo punto di forza. Ti viene in mente il periodo degli esami.",
    consegna: "Rispondi che lavori bene sotto pressione.",
    soluzioni: [
      "I work well under pressure.",
      "I work very well under pressure.",
      "I work really well under pressure.",
      "I think I work well under pressure.",
    ],
    tempo: "present simple",
    parole: [
      ["lavorare", "work"],
      ["bene", "well"],
      ["sotto pressione", "under pressure"],
    ],
    suggerimenti: [
      "È una tua caratteristica stabile. Quale tempo? Come si dice «bene» (avverbio) e «sotto pressione»?",
      "Io + lavorare + l'avverbio di good + la preposizione che significa «sotto» + pressione (senza articolo).",
    ],
    simile: "She works well in a team.",
    spiegazione:
      "Work well under pressure è un'espressione fissa dei colloqui. L'avverbio di good è well.",
    lezione: "lezione 54{6}",
  },
  {
    id: "b2-scuse-formali",
    livello: "B2-C1",
    contesto:
      "Lavori nel servizio clienti di una libreria online. Un cliente aspetta un libro da tre settimane. Devi rispondergli in modo formale.",
    consegna: "Scrivi: «La preghiamo di accettare le nostre scuse per il ritardo».",
    soluzioni: [
      "Please accept our apologies for the delay.",
      "Please accept my apologies for the delay.",
      "Please accept our sincere apologies for the delay.",
      "Please accept our apologies for this delay.",
    ],
    tempo: "imperativo",
    parole: [
      ["accettare", "accept"],
      ["scuse", "apologies"],
      ["ritardo", "delay"],
    ],
    suggerimenti: [
      "È un invito formale rivolto al cliente. Quale modo verbale, reso cortese da «per favore»?",
      "Please + l'imperativo di «accettare» + il possessivo + scuse (plurale) + la preposizione della causa + il ritardo.",
    ],
    simile: "Please accept our thanks for your help.",
    spiegazione:
      "Please accept our apologies for... è la scusa formale scritta. Nel parlato: Sorry for the delay.",
    lezione: "lezione 54{3}",
  },
  {
    id: "b2-le-dispiacerebbe",
    livello: "B2-C1",
    contesto:
      "In una sala d'attesa gelida, un signore ha lasciato la porta aperta e entra un vento fortissimo. Vuoi chiedergli di chiuderla senza sembrare scortese.",
    consegna: "Chiedigli se gli dispiacerebbe chiudere la porta.",
    soluzioni: [
      "Would you mind closing the door?",
      "Would you mind closing the door, please?",
      "Excuse me, would you mind closing the door?",
      "Would you mind shutting the door?",
    ],
    tempo: "conditional",
    parole: [
      ["dispiacere (dare fastidio)", "mind"],
      ["chiudere", "close / shut"],
    ],
    suggerimenti: [
      "È una richiesta molto cortese, sotto forma di domanda ipotetica («le dispiacerebbe?»). Quale modale? E dopo mind, il verbo va con to o con -ing?",
      "Would + tu + mind + «chiudere» in -ing + la porta.",
    ],
    simile: "Would you mind waiting a moment?",
    spiegazione:
      "Would you mind + -ing? è una richiesta molto cortese. Per dire di sì si risponde «No, not at all» (= non mi dispiace).",
    lezione: "lezione 54{5}",
  },
  {
    id: "b2-domanda-ruolo",
    livello: "B2-C1",
    contesto:
      "Alla fine di un colloquio di lavoro l'intervistatrice ti chiede se hai domande. Vuoi saperne di più sulle mansioni.",
    consegna: "Chiedile se può dirti qualcosa di più sul ruolo.",
    soluzioni: [
      "Could you tell me a bit more about the role?",
      "Could you tell me a little more about the role?",
      "Could you tell me more about the role?",
      "Could you tell me a bit more about the job?",
      "Can you tell me a bit more about the role?",
    ],
    tempo: "could|can",
    parole: [
      ["dire", "tell"],
      ["un po' di più", "a bit more / a little more"],
      ["ruolo / mansione", "role / position"],
    ],
    suggerimenti: [
      "È una richiesta cortese. Quale modale? Come si dice «un po' di più»?",
      "Modale cortese + tu + «dire» + me + un po' di più + la preposizione «riguardo a» + il ruolo.",
    ],
    simile: "Could you tell me a bit more about the team?",
    spiegazione:
      "Could you tell me a bit more about...? è la domanda tipica di fine colloquio: mostra interesse in modo cortese.",
    lezione: "lezione 54{6}",
  },
  {
    id: "b2-despite",
    livello: "B2-C1",
    contesto:
      "Commenti la partita di cricket del college: ha piovuto per tutto il pomeriggio, ma i giocatori non si sono fermati.",
    consegna: "Di' che nonostante la pioggia hanno giocato la partita (Despite + nome).",
    soluzioni: [
      "Despite the rain, they played the match.",
      "Despite the rain they played the match.",
      "They played the match despite the rain.",
      "In spite of the rain, they played the match.",
      "Despite the rain, they still played the match.",
    ],
    tempo: "past simple",
    parole: [
      ["pioggia", "rain"],
      ["giocare", "play"],
      ["partita", "match"],
    ],
    suggerimenti: [
      "Fatto concluso nel passato. Quale tempo? «Nonostante la pioggia»: dopo despite si mette una frase o un nome?",
      "Despite + la pioggia (nome, senza verbo né «of») + virgola + loro + past simple di «giocare» + la partita.",
    ],
    simile: "Despite the noise, I managed to sleep.",
    spiegazione:
      "Despite / in spite of + nome (o -ing): despite the rain. Although vuole una frase: although it was raining. «Despite of» è sbagliato.",
    lezione: "lezione 55{4}",
  },
  {
    id: "b2-whereas",
    livello: "B2-C1",
    contesto:
      "In un tema su città e campagna confronti te e tua sorella: tu adori la vita di città, lei preferisce la tranquillità della campagna.",
    consegna: "Scrivi che tu ami la città, mentre tua sorella preferisce la campagna (whereas).",
    soluzioni: [
      "I love the city, whereas my sister prefers the countryside.",
      "I love the city whereas my sister prefers the countryside.",
      "Whereas I love the city, my sister prefers the countryside.",
      "I love city life, whereas my sister prefers the countryside.",
    ],
    tempo: "present simple",
    parole: [
      ["amare", "love"],
      ["città", "city"],
      ["preferire", "prefer"],
      ["campagna", "countryside"],
    ],
    suggerimenti: [
      "Gusti stabili: quale tempo (attenzione alla terza persona)? Quale connettivo formale contrappone due fatti («mentre invece»)?",
      "Io + amare + la città + virgola + il connettivo di contrasto + mia sorella + «preferire» con la -s + la campagna.",
    ],
    simile: "He's very tidy, whereas his brother is really messy.",
    spiegazione:
      "Whereas (mentre, invece) contrappone due fatti. While ha lo stesso uso ma può anche indicare il tempo.",
    lezione: "lezione 55{3}",
  },
  {
    id: "b2-therefore",
    livello: "B2-C1",
    contesto:
      "Nel tuo diario di studio spieghi perché ieri non sei andato alla Bodleian: era chiusa per un evento. Vuoi un connettivo formale di conseguenza.",
    consegna: "Scrivi che la biblioteca era chiusa; perciò hai studiato a casa (therefore).",
    soluzioni: [
      "The library was closed; therefore, I studied at home.",
      "The library was closed; therefore I studied at home.",
      "The library was closed, therefore I studied at home.",
      "The library was closed. Therefore, I studied at home.",
    ],
    tempo: "past simple",
    parole: [
      ["biblioteca", "library"],
      ["chiuso", "closed"],
      ["studiare", "study"],
      ["a casa", "at home"],
    ],
    suggerimenti: [
      "Due fatti passati collegati da causa e conseguenza. Quale tempo? Quale connettivo formale significa «perciò»?",
      "La biblioteca + passato di «essere» + chiusa + punto e virgola + il connettivo + virgola + io + past simple di «studiare» + a casa.",
    ],
    simile: "The flight was cancelled; therefore, we stayed another night.",
    spiegazione:
      "Therefore (perciò, quindi) è formale; nel parlato si usa so. Di solito segue un punto o un punto e virgola.",
    lezione: "lezione 55{5}",
  },
  {
    id: "b2-as-a-result",
    livello: "B2-C1",
    contesto:
      "Scrivi un reclamo alla compagnia ferroviaria: il treno per Londra è stato cancellato senza preavviso e avete perso il concerto per cui avevate i biglietti.",
    consegna: "Scrivi la seconda frase: «Di conseguenza, abbiamo perso il concerto».",
    soluzioni: [
      "As a result, we missed the concert.",
      "As a result we missed the concert.",
      "Consequently, we missed the concert.",
      "As a consequence, we missed the concert.",
    ],
    tempo: "past simple",
    parole: [
      ["perdere (un evento)", "miss"],
      ["concerto", "concert"],
    ],
    suggerimenti: [
      "È un fatto concluso. Quale tempo? Quale connettivo di tre parole significa «di conseguenza», all'inizio della frase?",
      "Il connettivo («come un risultato») + virgola + noi + past simple del verbo che si usa per perdere treni ed eventi + il concerto.",
    ],
    simile: "As a result, the company lost millions.",
    spiegazione:
      "As a result / consequently introducono una conseguenza in una nuova frase. Perdere un evento o un mezzo = miss.",
    lezione: "lezione 55{5}",
  },
  {
    id: "b2-moreover",
    livello: "B2-C1",
    contesto:
      "Scrivi un parere per il consiglio studentesco contro la costruzione di una nuova palestra. Hai già detto che non serve; ora aggiungi un secondo argomento.",
    consegna: "Scrivi: «Inoltre, il progetto è troppo costoso».",
    soluzioni: [
      "Moreover, the project is too expensive.",
      "Furthermore, the project is too expensive.",
      "In addition, the project is too expensive.",
      "What is more, the project is too expensive.",
      "Moreover, the project is far too expensive.",
    ],
    tempo: "present simple",
    parole: [
      ["progetto", "project"],
      ["troppo", "too"],
      ["costoso", "expensive"],
    ],
    suggerimenti: [
      "È una valutazione presente. Quale tempo? Quale connettivo formale aggiunge un argomento («inoltre»)?",
      "Il connettivo + virgola + il progetto + «essere» + troppo + costoso.",
    ],
    simile: "Furthermore, the new system is easier to use.",
    spiegazione:
      "Moreover, furthermore, in addition aggiungono un argomento nei testi formali; nel parlato si usa also o and.",
    lezione: "lezione 55{2}",
  },
  {
    id: "b2-despite-ing",
    livello: "B2-C1",
    contesto:
      "La tua coinquilina aveva la febbre a 38, ma è andata comunque al lavoro perché c'era una riunione importante.",
    consegna: "Di' che nonostante stesse male è andata al lavoro (Despite + -ing).",
    soluzioni: [
      "Despite feeling ill, she went to work.",
      "Despite feeling ill she went to work.",
      "She went to work despite feeling ill.",
      "Despite being ill, she went to work.",
      "In spite of feeling ill, she went to work.",
      "Despite feeling sick, she went to work.",
    ],
    tempo: "past simple",
    parole: [
      ["sentirsi", "feel"],
      ["malato", "ill / sick"],
      ["andare al lavoro", "go to work"],
    ],
    suggerimenti: [
      "Il fatto principale è passato. Quale tempo? Dopo despite non può esserci una frase con soggetto e verbo: che forma prende il verbo?",
      "Despite + «sentirsi» in -ing + malata + virgola + lei + past simple di «andare» + al lavoro (senza articolo).",
    ],
    simile: "Despite being tired, he finished the essay.",
    spiegazione:
      "Despite + -ing quando il soggetto è lo stesso: despite feeling ill. «Despite she felt ill» è sbagliato (servirebbe although).",
    lezione: "lezione 55{4}",
  },
  {
    id: "b2-progressi",
    livello: "B2-C1",
    contesto:
      "Alla fine del trimestre il tuo insegnante di pianoforte ti chiede come ti senti. Sei soddisfatto: rispetto a settembre sei migliorato tantissimo.",
    consegna: "Di' che hai fatto molti progressi (collocazione giusta).",
    soluzioni: [
      "I've made a lot of progress.",
      "I have made a lot of progress.",
      "I've made lots of progress.",
      "I've made a lot of progress this term.",
      "I think I've made a lot of progress.",
    ],
    tempo: "present perfect",
    parole: [
      ["progressi", "progress", "non numerabile: singolare"],
      ["questo trimestre", "this term"],
    ],
    suggerimenti: [
      "Il periodo (il trimestre) arriva fino ad ora e conta il risultato. Quale tempo? E «fare progressi»: con do o con make? «Progressi» è numerabile?",
      "Present perfect del verbo «fare» dei risultati + «molti» con un non numerabile + progress (singolare, senza -es).",
    ],
    simile: "She's made great progress with her Spanish.",
    spiegazione:
      "Make progress (collocazione fissa) e progress è non numerabile: a lot of progress, mai «progresses» o «do progress».",
    lezione: "lezione 56{2}",
  },
  {
    id: "b2-pioggia-forte",
    livello: "B2-C1",
    contesto:
      "La mattina dopo un temporale il giardino del college è allagato. Il custode ti chiede se hai sentito qualcosa durante la notte.",
    consegna: "Rispondi che c'è stata una pioggia fortissima tutta la notte (collocazione).",
    soluzioni: [
      "There was heavy rain all night.",
      "There was heavy rain all night long.",
      "There was very heavy rain all night.",
      "Yes, there was heavy rain all night.",
    ],
    tempo: "past simple",
    parole: [
      ["pioggia", "rain"],
      ["tutta la notte", "all night"],
    ],
    suggerimenti: [
      "È un fatto della notte scorsa. Quale tempo per «c'era»? E la collocazione: in inglese la pioggia forte non è «strong», ma...?",
      "«C'era» al passato + l'aggettivo che significa «pesante» + pioggia (senza articolo) + tutta la notte.",
    ],
    simile: "There was heavy traffic on the motorway.",
    spiegazione:
      "Collocazioni: heavy rain, heavy traffic, heavy smoker (non «strong rain»). Strong si usa per vento, caffè, accento.",
    lezione: "lezione 56{1}",
  },
  {
    id: "b2-in-bocca-al-lupo",
    livello: "B2-C1",
    contesto:
      "La tua amica attrice sta per salire sul palco per la prima dello spettacolo della compagnia teatrale universitaria. Nel camerino le stai vicino.",
    consegna: "Augurale buona fortuna con l'espressione tipica del teatro inglese.",
    soluzioni: [
      "Break a leg!",
      "Break a leg tonight!",
      "Good luck! Break a leg!",
    ],
    tempo: "imperativo",
    parole: [
      ["rompere", "break"],
      ["gamba", "leg"],
    ],
    suggerimenti: [
      "È un augurio, in forma di ordine. Quale modo verbale? A teatro «good luck» porta sfortuna: si augura scherzosamente il contrario, come il nostro «in bocca al lupo».",
      "Imperativo del verbo «rompere» + articolo indeterminativo + una parte del corpo che serve per camminare.",
    ],
    simile: "Good luck! Fingers crossed!",
    spiegazione:
      "Break a leg! è l'«in bocca al lupo» del teatro: dire good luck sul palco porta sfortuna, quindi si augura il contrario.",
    lezione: "lezione 56{6}",
  },
  {
    id: "b2-facilissimo",
    livello: "B2-C1",
    contesto:
      "Esci dall'esame di grammatica che tutti temevano. Avevi studiato tanto e l'hai trovato semplicissimo. Un amico ti chiede com'è andata.",
    consegna: "Rispondi con il modo di dire inglese che significa «è stato facilissimo».",
    soluzioni: [
      "It was a piece of cake.",
      "It was a piece of cake!",
      "Honestly, it was a piece of cake.",
      "It was a piece of cake, actually.",
    ],
    tempo: "past simple",
    parole: [
      ["pezzo / fetta", "piece"],
      ["torta", "cake"],
    ],
    suggerimenti: [
      "Giudichi una cosa conclusa. Quale tempo di «essere»? L'immagine del modo di dire è un dolce: qualcosa di facile come mangiare una fetta di...",
      "Soggetto impersonale + il passato di «essere» + «un pezzo di» + torta.",
    ],
    simile: "Don't worry, the test is a piece of cake.",
    spiegazione:
      "A piece of cake = una cosa facilissima («un gioco da ragazzi»).",
    lezione: "lezione 56{3}",
  },
  {
    id: "b2-occhio-della-testa",
    livello: "B2-C1",
    contesto:
      "La tua amica nota il cappotto di lana scozzese che hai comprato a Edimburgo e chiede quanto l'hai pagato. Una cifra folle.",
    consegna: "Rispondi con il modo di dire inglese per «mi è costato un occhio della testa».",
    soluzioni: [
      "It cost an arm and a leg.",
      "It cost me an arm and a leg.",
      "It cost an arm and a leg!",
      "It cost me an arm and a leg!",
    ],
    tempo: "past simple",
    parole: [
      ["costare", "cost", "irregolare: cost, cost, cost"],
      ["braccio", "arm"],
      ["gamba", "leg"],
    ],
    suggerimenti: [
      "L'acquisto è concluso. Quale tempo (attenzione: «costare» ha il passato uguale al presente)? In inglese non si paga «un occhio», ma due parti del corpo: quali?",
      "Il pronome per il cappotto + il passato di «costare» + (me) + un braccio e una gamba.",
    ],
    simile: "That holiday cost us an arm and a leg.",
    spiegazione:
      "It cost an arm and a leg = è costato un occhio della testa. Cost è invariabile: cost, cost, cost.",
    lezione: "lezione 56{4}",
  },
  {
    id: "b2-piove-a-catinelle",
    livello: "B2-C1",
    contesto:
      "Un amico ti scrive per chiederti se vi vedete al parco tra mezz'ora. Guardi fuori: l'acqua scende a secchiate.",
    consegna: "Rispondi con il modo di dire inglese per «piove a catinelle».",
    soluzioni: [
      "It's raining cats and dogs.",
      "It is raining cats and dogs.",
      "No way, it's raining cats and dogs!",
      "It's raining cats and dogs here.",
    ],
    tempo: "present continuous",
    parole: [
      ["piovere", "rain"],
      ["gatti", "cats"],
      ["cani", "dogs"],
    ],
    suggerimenti: [
      "Sta succedendo adesso. Quale tempo? Il modo di dire immagina che dal cielo cadano due animali domestici.",
      "Soggetto impersonale + «essere» + piovere in -ing + gatti e cani.",
    ],
    simile: "It's pouring down outside.",
    spiegazione:
      "It's raining cats and dogs = piove a catinelle. Molto conosciuto, ma nel parlato di oggi si sente di più It's pouring (down).",
    lezione: "lezione 56{5}",
  },
  {
    id: "b2-come-up-with",
    livello: "B2-C1",
    contesto:
      "Il vostro gruppo di progetto era bloccato da giorni. Poi, ieri, la tua collega Anna ha proposto una soluzione geniale che ha convinto tutti.",
    consegna: "Racconta che Anna ha tirato fuori un'idea brillante (phrasal verb di tre parole).",
    soluzioni: [
      "She came up with a brilliant idea.",
      "Anna came up with a brilliant idea.",
      "She came up with a great idea.",
      "Anna came up with a great idea.",
      "She came up with a brilliant idea yesterday.",
    ],
    tempo: "past simple",
    parole: [
      ["farsi venire in mente / proporre", "come up with", "come è irregolare"],
      ["brillante", "brilliant"],
      ["idea", "idea"],
    ],
    suggerimenti: [
      "È un fatto concluso (ieri). Quale tempo? «Farsi venire (un'idea)» è un phrasal verb di tre parole con il verbo «venire».",
      "Anna + il passato irregolare di «venire» + la particella «su» + la preposizione «con» + un'idea brillante.",
    ],
    simile: "We need to come up with a plan.",
    spiegazione:
      "Come up with = ideare, tirare fuori (un'idea, una soluzione, un nome). Il passato di come è came.",
    lezione: "lezione 57{2}",
  },
  {
    id: "b2-put-up-with",
    livello: "B2-C1",
    contesto:
      "Da settimane i vicini fanno lavori in casa dalle sette di mattina. Oggi hai un esame e non hai dormito. Esasperato, sfoghi la rabbia con la tua coinquilina.",
    consegna: "Dille che non riesci più a sopportare questo rumore (phrasal verb).",
    soluzioni: [
      "I can't put up with this noise any longer.",
      "I can't put up with this noise any more.",
      "I can't put up with this noise anymore.",
      "I cannot put up with this noise any longer.",
      "I can't put up with the noise any longer.",
    ],
    tempo: "can",
    parole: [
      ["sopportare", "put up with", "phrasal verb di tre parole"],
      ["rumore", "noise"],
      ["più (non... più)", "any longer / any more"],
    ],
    suggerimenti: [
      "È un'incapacità che senti adesso. Quale modale negativo? «Sopportare» è un phrasal verb di tre parole con il verbo «mettere».",
      "Io + il modale della capacità al negativo + put + la particella «su» + «con» + questo rumore + l'espressione per «non... più».",
    ],
    simile: "I don't know how you put up with him.",
    spiegazione:
      "Put up with = sopportare, tollerare. «Non... più» in una frase negativa = any longer / any more.",
    lezione: "lezione 57{2}",
  },
  {
    id: "b2-run-out-of",
    livello: "B2-C1",
    contesto:
      "Domenica mattina, ore otto. Vuoi preparare il porridge, ma la bottiglia del latte è vuota e i negozi sono chiusi.",
    consegna: "Annuncia ai coinquilini che il latte è finito (phrasal verb).",
    soluzioni: [
      "We've run out of milk.",
      "We have run out of milk.",
      "We've run out of milk!",
      "Oh no, we've run out of milk.",
    ],
    tempo: "present perfect",
    parole: [
      ["finire (una scorta)", "run out of", "run, ran, run"],
      ["latte", "milk"],
    ],
    suggerimenti: [
      "La scorta è finita e la conseguenza è adesso (niente porridge). Quale tempo? «Rimanere senza» è un phrasal verb di tre parole con il verbo «correre».",
      "Noi + ausiliare + il participio di «correre» (uguale alla base) + la particella «fuori» + «di» + latte.",
    ],
    simile: "The printer has run out of ink.",
    spiegazione:
      "Run out of = rimanere senza, finire una scorta. Il participio di run è run: we've run out.",
    lezione: "lezione 57{2}",
  },
  {
    id: "b2-turn-out",
    livello: "B2-C1",
    contesto:
      "Avevi litigato con un amico sull'orario dell'ultimo treno: lui diceva le 23:40, tu le 23:10. Arrivati in stazione, aveva ragione lui.",
    consegna: "Racconta che alla fine si è scoperto che lui aveva ragione (turn out).",
    soluzioni: [
      "It turned out that he was right.",
      "It turned out he was right.",
      "In the end, it turned out that he was right.",
      "As it turned out, he was right.",
      "He turned out to be right.",
    ],
    tempo: "past simple",
    parole: [
      ["rivelarsi / risultare", "turn out"],
      ["avere ragione", "be right", "si usa be, non have"],
    ],
    suggerimenti: [
      "È un fatto concluso. Quale tempo? «Si è scoperto che» si dice con un phrasal verb con «girare». E «avere ragione» si dice con avere o con essere?",
      "Soggetto impersonale + il passato di turn + out + that + lui + il passato di «essere» + l'aggettivo «giusto».",
    ],
    simile: "It turned out that the shop was closed.",
    spiegazione:
      "It turned out that... = si è scoperto che, alla fine è risultato che. Avere ragione = be right («have reason» è sbagliato).",
    lezione: "lezione 57{3}",
  },
  {
    id: "b2-carry-out",
    livello: "B2-C1",
    contesto:
      "Scrivi l'introduzione di una relazione accademica. Devi dire quando è stata svolta la ricerca, senza nominare chi l'ha fatta.",
    consegna: "Scrivi che la ricerca è stata svolta nel 2020 (passivo con phrasal verb).",
    soluzioni: [
      "The research was carried out in 2020.",
      "This research was carried out in 2020.",
      "The study was carried out in 2020.",
      "The research was conducted in 2020.",
    ],
    tempo: "past simple",
    parole: [
      ["svolgere / condurre", "carry out / conduct"],
      ["ricerca", "research", "non numerabile"],
      ["studio", "study"],
    ],
    suggerimenti: [
      "Un fatto concluso in un anno preciso, in stile scientifico (conta la ricerca, non i ricercatori). Quale forma e quale tempo?",
      "La ricerca + il passato di «essere» + il participio del phrasal verb che significa «svolgere» (carry + particella) + nel 2020.",
    ],
    simile: "The experiment was carried out twice.",
    spiegazione:
      "Carry out = svolgere, effettuare (ricerche, esperimenti, sondaggi). Research è non numerabile: «researches» è un errore comune.",
    lezione: "lezione 57{4}",
  },
  {
    id: "b2-fall-out",
    livello: "B2-C1",
    contesto:
      "Tua madre si stupisce che tu non parli più di Marta, la tua migliore amica. In effetti avete litigato di brutto e non vi parlate da un mese.",
    consegna: "Dille che hai litigato con la tua migliore amica (phrasal verb).",
    soluzioni: [
      "I've fallen out with my best friend.",
      "I have fallen out with my best friend.",
      "I've fallen out with Marta.",
      "I fell out with my best friend.",
      "We've fallen out.",
    ],
    tempo: "present perfect|past simple",
    parole: [
      ["litigare (e rompere i rapporti)", "fall out (with)", "fall, fell, fallen"],
      ["migliore amica", "best friend"],
    ],
    suggerimenti: [
      "Il litigio è avvenuto e la conseguenza c'è ancora (non vi parlate). Quale tempo? «Litigare e rompere i rapporti» è un phrasal verb con «cadere».",
      "Io + ausiliare + il participio irregolare di «cadere» + la particella «fuori» + «con» + la mia migliore amica.",
    ],
    simile: "They fell out over money.",
    spiegazione:
      "Fall out with someone = litigare e smettere di frequentarsi. Il participio di fall è fallen.",
    lezione: "lezione 57{5}",
  },
  {
    id: "b2-break-down",
    livello: "B2-C1",
    contesto:
      "Arrivi alla riunione con due ore di ritardo e sporco di grasso. La tua capa ti chiede che cosa è successo. La macchina si è fermata in autostrada.",
    consegna: "Spiegale che la macchina si è guastata in autostrada (phrasal verb).",
    soluzioni: [
      "The car broke down on the motorway.",
      "My car broke down on the motorway.",
      "Sorry, my car broke down on the motorway.",
      "The car broke down on the M40.",
    ],
    tempo: "past simple",
    parole: [
      ["guastarsi (veicoli, macchine)", "break down", "break, broke, broken"],
      ["autostrada", "motorway", "americano: highway"],
    ],
    suggerimenti: [
      "È un fatto concluso, in un momento preciso (stamattina). Quale tempo? «Guastarsi» è un phrasal verb con «rompere».",
      "La macchina + il passato irregolare di «rompere» + la particella «giù» + la preposizione «su» + l'autostrada.",
    ],
    simile: "The lift broke down again.",
    spiegazione:
      "Break down = guastarsi (auto, ascensori, macchine) ma anche crollare emotivamente. Il nome è a breakdown.",
    lezione: "lezione 57{3}",
  },
  {
    id: "b2-work-out",
    livello: "B2-C1",
    contesto:
      "Sei bloccato da mezz'ora su un problema di logica per l'esame di filosofia. Il tuo compagno ti chiede se ce l'hai fatta.",
    consegna: "Rispondi che non riesci a capire la soluzione (phrasal verb «work out»).",
    soluzioni: [
      "I can't work out the answer.",
      "I can't work out the solution.",
      "I can't work the answer out.",
      "I cannot work out the answer.",
      "I still can't work out the answer.",
    ],
    tempo: "can",
    parole: [
      ["capire / risolvere (ragionando)", "work out"],
      ["risposta / soluzione", "answer / solution"],
    ],
    suggerimenti: [
      "È un'incapacità di adesso. Quale modale negativo? «Arrivare a capire ragionando» è un phrasal verb con il verbo «lavorare».",
      "Io + il modale della capacità al negativo + work + la particella «fuori» + la risposta.",
    ],
    simile: "Can you work out how much we owe?",
    spiegazione:
      "Work out = capire ragionando, risolvere (un calcolo, un problema). Ma anche fare ginnastica: I work out at the gym.",
    lezione: "lezione 57{3}",
  },
  {
    id: "b2-dormirci-su",
    livello: "B2-C1",
    contesto:
      "Ti offrono di cambiare stanza al college: più grande, ma più costosa. Non vuoi decidere su due piedi.",
    consegna: "Rispondi con il modo di dire per «lasciami dormirci su».",
    soluzioni: [
      "Let me sleep on it.",
      "Can I sleep on it?",
      "I'd like to sleep on it.",
      "Let me sleep on it, please.",
      "I need to sleep on it.",
    ],
    tempo: "imperativo|can|conditional|present simple",
    parole: [
      ["dormire", "sleep"],
      ["lasciare (permettere)", "let"],
    ],
    suggerimenti: [
      "Chiedi di rimandare la decisione: una richiesta diretta di permesso. Quale forma con «lasciare» (+ me + verbo base)?",
      "L'imperativo di «lasciare» + me + «dormire» alla forma base + la preposizione «su» + il pronome per la decisione.",
    ],
    simile: "Don't decide now, sleep on it.",
    spiegazione:
      "Sleep on it = dormirci su, prendersi una notte per decidere. Let me + verbo base = lasciami...",
    lezione: "M1{5}",
  },
  {
    id: "b2-arrivare-al-punto",
    livello: "B2-C1",
    contesto:
      "Durante una riunione un collega gira intorno all'argomento da dieci minuti senza dire che cosa vuole. Siete tutti stanchi.",
    consegna: "Chiedigli, con cortesia ma con fermezza, di arrivare al punto.",
    soluzioni: [
      "Could you get to the point?",
      "Could you get to the point, please?",
      "Can you get to the point, please?",
      "Sorry, could you get to the point?",
      "Could you just get to the point?",
    ],
    tempo: "could|can",
    parole: [
      ["arrivare (a)", "get (to)"],
      ["punto", "point"],
    ],
    suggerimenti: [
      "È una richiesta cortese. Quale modale? Il modo di dire è quasi uguale all'italiano «arrivare al punto»: quale verbo si usa per «arrivare»?",
      "Modale cortese + tu + get + to + il punto.",
    ],
    simile: "Let me get straight to the point.",
    spiegazione:
      "Get to the point = venire al dunque. Get straight to the point = andare dritto al punto.",
    lezione: "M1{7}",
  },
  {
    id: "b2-stessa-pagina",
    livello: "B2-C1",
    contesto:
      "Tu e il tuo socio dovete presentare il progetto domani a un cliente, ma vi accorgete di avere idee diverse sul budget.",
    consegna: "Di' che dovete essere d'accordo, sulla stessa linea (modo di dire con «page»).",
    soluzioni: [
      "We need to be on the same page.",
      "We have to be on the same page.",
      "We need to get on the same page.",
      "We need to make sure we're on the same page.",
    ],
    tempo: "present simple|have to",
    parole: [
      ["avere bisogno di / dovere", "need to / have to"],
      ["stessa", "same"],
      ["pagina", "page"],
    ],
    suggerimenti: [
      "È una necessità presente. Quale verbo usi («abbiamo bisogno di»)? L'immagine è quella di due persone che leggono lo stesso libro alla stessa pagina.",
      "Noi + «avere bisogno di» + to + «essere» + la preposizione «su» + la stessa pagina.",
    ],
    simile: "Let's make sure everyone is on the same page.",
    spiegazione:
      "Be on the same page = essere d'accordo, avere la stessa visione delle cose.",
    lezione: "M1{4}",
  },
  {
    id: "b2-chi-comanda",
    livello: "B2-C1",
    contesto:
      "Un nuovo collega vuole chiedere al direttore un giorno di ferie. Tu gli spieghi che deve parlarne con la responsabile del reparto: è lei che decide tutto.",
    consegna: "Digli che è lei a decidere qui (modo di dire con «shots»).",
    soluzioni: [
      "She calls the shots here.",
      "She's the one who calls the shots here.",
      "She calls the shots.",
      "Here, she calls the shots.",
    ],
    tempo: "present simple",
    parole: [
      ["chiamare", "call"],
      ["colpi / tiri", "shots"],
    ],
    suggerimenti: [
      "È una situazione stabile. Quale tempo (terza persona)? L'immagine viene dal biliardo: chi «chiama i colpi» decide il gioco.",
      "Lei + «chiamare» con la -s + i colpi + qui.",
    ],
    simile: "In this house, my grandmother calls the shots.",
    spiegazione:
      "Call the shots = comandare, essere chi decide.",
    lezione: "M2{2}",
  },
  {
    id: "b2-a-orecchio",
    livello: "B2-C1",
    contesto:
      "Organizzate un weekend in Cornovaglia ma il meteo è incerto. Un amico vuole un programma preciso ora per ora. Tu preferisci decidere sul momento.",
    consegna: "Proponi di improvvisare, decidendo strada facendo (modo di dire con «ear»).",
    soluzioni: [
      "Let's play it by ear.",
      "Let's just play it by ear.",
      "Why don't we play it by ear?",
      "We'll play it by ear.",
    ],
    tempo: "imperativo|future simple|present simple",
    parole: [
      ["suonare", "play"],
      ["orecchio", "ear"],
    ],
    suggerimenti: [
      "È una proposta per entrambi. Quale forma si usa per «facciamo...»? L'immagine viene dalla musica: suonare senza spartito, a orecchio.",
      "La forma esortativa + «suonare» + il pronome + la preposizione «da/a» (by) + orecchio.",
    ],
    simile: "I don't know yet; I'll play it by ear.",
    spiegazione:
      "Play it by ear = improvvisare, decidere strada facendo (come chi suona a orecchio).",
    lezione: "M2{5}",
  },
  {
    id: "b2-oltre-il-dovuto",
    livello: "B2-C1",
    contesto:
      "Scrivi una lettera di referenze per la tua ex assistente. Lei faceva sempre più di quanto le si chiedesse, restando anche il sabato.",
    consegna: "Scrivi che lei fa sempre più del dovuto (modo di dire con «mile»).",
    soluzioni: [
      "She always goes the extra mile.",
      "She always goes the extra mile for her colleagues.",
      "She always went the extra mile.",
    ],
    tempo: "present simple|past simple",
    parole: [
      ["andare", "go"],
      ["in più", "extra"],
      ["miglio", "mile"],
    ],
    suggerimenti: [
      "È una sua caratteristica abituale. Quale tempo (terza persona)? L'immagine è fare un miglio in più rispetto al percorso richiesto.",
      "Lei + sempre + «andare» con la -s + il miglio in più (con l'articolo determinativo).",
    ],
    simile: "Our hotel staff really went the extra mile.",
    spiegazione:
      "Go the extra mile = fare più del necessario, impegnarsi oltre il dovuto.",
    lezione: "M2{4}",
  },
  {
    id: "b2-cominciamo",
    livello: "B2-C1",
    contesto:
      "Sei il presidente del club di dibattito. Sono arrivati quasi tutti, è ora di iniziare la riunione.",
    consegna: "Di' a tutti di dare il via, di cominciare (modo di dire con «ball»).",
    soluzioni: [
      "Let's get the ball rolling.",
      "Let's get the ball rolling, shall we?",
      "OK, let's get the ball rolling.",
      "Right, let's get the ball rolling.",
    ],
    tempo: "imperativo",
    parole: [
      ["palla", "ball"],
      ["rotolare", "roll"],
    ],
    suggerimenti: [
      "È una proposta per tutti. Quale forma? L'immagine è dare la prima spinta a una palla perché cominci a rotolare.",
      "La forma esortativa + get + la palla + «rotolare» in -ing.",
    ],
    simile: "Who wants to get the ball rolling?",
    spiegazione:
      "Get the ball rolling = dare il via, avviare qualcosa. Get + oggetto + -ing = far fare qualcosa a qualcosa.",
    lezione: "M2{3}",
  },
  {
    id: "b2-nei-guai",
    livello: "B2-C1",
    contesto:
      "Il tuo collega ha dimenticato di inviare un'offerta importante e la ditta ha perso il cliente. Un altro collega chiede perché sia così cupo.",
    consegna: "Rispondi che è nei guai con il capo (modo di dire con «water»).",
    soluzioni: [
      "He's in hot water with his boss.",
      "He is in hot water with his boss.",
      "He's in hot water with the boss.",
      "He's in hot water.",
    ],
    tempo: "present simple",
    parole: [
      ["caldo / bollente", "hot"],
      ["acqua", "water"],
      ["capo", "boss"],
    ],
    suggerimenti: [
      "È la sua situazione adesso. Quale verbo e quale tempo? L'immagine: essere immersi nell'acqua bollente.",
      "Lui + «essere» + «in» + acqua calda + «con» + il suo capo.",
    ],
    simile: "You'll be in hot water if you're late again.",
    spiegazione:
      "Be in hot water = essere nei guai (spesso con qualcuno che ha autorità).",
    lezione: "M3{1}",
  },
  {
    id: "b2-stringere-i-denti",
    livello: "B2-C1",
    contesto:
      "Hai paura del dentista e rimandi da mesi, ma il dente ti fa sempre più male. Un amico ti chiede che cosa farai.",
    consegna: "Di' che dovrai stringere i denti e affrontarlo (modo di dire con «bullet»).",
    soluzioni: [
      "I'll have to bite the bullet.",
      "I will have to bite the bullet.",
      "I'll just have to bite the bullet.",
      "I need to bite the bullet.",
      "I'm going to bite the bullet.",
    ],
    tempo: "have to|present simple|going to",
    parole: [
      ["mordere", "bite"],
      ["proiettile", "bullet"],
    ],
    suggerimenti: [
      "È un obbligo nel futuro. Come si dice «dovrò»? L'immagine: un tempo i soldati mordevano un proiettile per sopportare il dolore.",
      "Il modale del futuro + la forma dell'obbligo con «avere» + to + «mordere» + il proiettile.",
    ],
    simile: "She bit the bullet and asked for a pay rise.",
    spiegazione:
      "Bite the bullet = stringere i denti, affrontare una cosa sgradevole ma inevitabile.",
    lezione: "M3{2}",
  },
  {
    id: "b2-vuota-il-sacco",
    livello: "B2-C1",
    contesto:
      "La tua amica è tornata da un appuntamento con il ragazzo che le piace e sorride senza dire niente. Tu muori dalla curiosità.",
    consegna: "Incoraggiala a raccontare tutto (modo di dire con «beans»).",
    soluzioni: [
      "Come on, spill the beans!",
      "Spill the beans!",
      "Come on, spill the beans.",
      "Go on, spill the beans!",
    ],
    tempo: "imperativo",
    parole: [
      ["rovesciare", "spill"],
      ["fagioli", "beans"],
      ["dai!", "come on / go on"],
    ],
    suggerimenti: [
      "È un'esortazione diretta. Quale modo verbale? L'immagine: rovesciare i fagioli dal barattolo, cioè far uscire tutto.",
      "Un'interiezione per «dai!» + l'imperativo di «rovesciare» + i fagioli.",
    ],
    simile: "Who spilled the beans about the surprise party?",
    spiegazione:
      "Spill the beans = vuotare il sacco, rivelare un segreto.",
    lezione: "M3{6}",
  },
  {
    id: "b2-ponte",
    livello: "B2-C1",
    contesto:
      "Il tuo coinquilino si agita pensando a cosa farà se non trova lavoro dopo la laurea, che è tra due anni. Tu cerchi di calmarlo.",
    consegna: "Digli che affronterete il problema quando si presenterà (modo di dire con «bridge»).",
    soluzioni: [
      "We'll cross that bridge when we come to it.",
      "We will cross that bridge when we come to it.",
      "You'll cross that bridge when you come to it.",
      "Let's cross that bridge when we come to it.",
    ],
    tempo: "future simple|imperativo",
    parole: [
      ["attraversare", "cross"],
      ["ponte", "bridge"],
      ["arrivare a", "come to"],
    ],
    suggerimenti: [
      "Parli del futuro: una decisione sul futuro + una frase con «quando». Che tempo va dopo when anche se il senso è futuro?",
      "Noi + will + «attraversare» + quel ponte + when + noi + «arrivare a» al present simple + il pronome.",
    ],
    simile: "Don't worry about the exam yet; cross that bridge when you come to it.",
    spiegazione:
      "Cross that bridge when you come to it = affrontare un problema quando si presenta. Dopo when il futuro si esprime con il present simple.",
    lezione: "M3{5}",
  },
  {
    id: "b2-elefante",
    livello: "B2-C1",
    contesto:
      "Alla riunione dei coinquilini tutti parlano delle pulizie, ma nessuno nomina il vero problema: uno di voi non paga l'affitto da due mesi.",
    consegna: "Di' che dovete parlare del problema che tutti fingono di non vedere (modo di dire con «elephant»).",
    soluzioni: [
      "We need to talk about the elephant in the room.",
      "We have to talk about the elephant in the room.",
      "Let's talk about the elephant in the room.",
      "We need to address the elephant in the room.",
    ],
    tempo: "present simple|have to|imperativo",
    parole: [
      ["parlare di", "talk about"],
      ["affrontare", "address"],
      ["elefante", "elephant"],
      ["stanza", "room"],
    ],
    suggerimenti: [
      "È una necessità presente. Quale verbo usi? L'immagine: un elefante nella stanza che tutti fingono di non vedere.",
      "Noi + «avere bisogno di» + to + «parlare di» + l'elefante + nella stanza.",
    ],
    simile: "Nobody mentioned the elephant in the room.",
    spiegazione:
      "The elephant in the room = un problema evidente che tutti evitano di nominare.",
    lezione: "M3{3}",
  },
  {
    id: "b2-ti-copro-le-spalle",
    livello: "B2-C1",
    contesto:
      "Domani la tua collega deve presentare il suo progetto al consiglio di amministrazione ed è terrorizzata. Tu sarai in sala con lei.",
    consegna: "Rassicurala: non preoccuparti, ti copro io le spalle.",
    soluzioni: [
      "Don't worry, I've got your back.",
      "Don't worry, I have got your back.",
      "Don't worry. I've got your back.",
      "I've got your back.",
    ],
    tempo: "have got|imperativo",
    parole: [
      ["preoccuparsi", "worry"],
      ["schiena / spalle", "back"],
    ],
    suggerimenti: [
      "Prima un invito negativo (imperativo), poi un'affermazione su di te, adesso. Quale forma di «avere» è tipica dell'inglese britannico? L'immagine è proteggere la schiena di qualcuno.",
      "Imperativo negativo di «preoccuparsi» + virgola + io + have got (contratto) + il tuo + schiena.",
    ],
    simile: "Thanks for having my back yesterday.",
    spiegazione:
      "I've got your back = ti copro le spalle, sono dalla tua parte.",
    lezione: "M4{1}",
  },
  {
    id: "b2-mi-prendi-in-giro",
    livello: "B2-C1",
    contesto:
      "Il tuo amico ti dice con la faccia seria che il college ha deciso di vietare il tè dopo le cinque. Non sai se credergli.",
    consegna: "Chiedigli se ti sta prendendo in giro (modo di dire con «leg»).",
    soluzioni: [
      "Are you pulling my leg?",
      "You're pulling my leg!",
      "You're pulling my leg, aren't you?",
      "Are you pulling my leg or what?",
    ],
    tempo: "present continuous",
    parole: [
      ["tirare", "pull"],
      ["gamba", "leg"],
    ],
    suggerimenti: [
      "Chiedi di un'azione in corso proprio adesso. Quale tempo? L'immagine: tirare la gamba a qualcuno per farlo inciampare.",
      "Domanda al present continuous: «essere» + tu + «tirare» in -ing + la mia gamba.",
    ],
    simile: "Relax, I'm only pulling your leg.",
    spiegazione:
      "Pull someone's leg = prendere in giro qualcuno, in modo scherzoso.",
    lezione: "M4{3}",
  },
  {
    id: "b2-tienimi-aggiornato",
    livello: "B2-C1",
    contesto:
      "Parti per una settimana proprio mentre il tuo gruppo decide la data della presentazione. Vuoi essere informato di tutto.",
    consegna: "Chiedi al tuo collega di tenerti aggiornato (modo di dire con «loop»).",
    soluzioni: [
      "Please keep me in the loop.",
      "Keep me in the loop.",
      "Keep me in the loop, please.",
      "Can you keep me in the loop?",
      "Could you keep me in the loop?",
    ],
    tempo: "imperativo|can|could",
    parole: [
      ["tenere", "keep"],
      ["giro / anello", "loop"],
    ],
    suggerimenti: [
      "È una richiesta diretta. Quale modo verbale, reso cortese da please? L'immagine: essere dentro il cerchio di chi riceve le informazioni.",
      "Please + l'imperativo di «tenere» + me + «nel» + il giro.",
    ],
    simile: "Sorry, nobody kept me in the loop.",
    spiegazione:
      "Keep someone in the loop = tenere qualcuno aggiornato. Il contrario: be out of the loop.",
    lezione: "M4{4}",
  },
  {
    id: "b2-trattato-freddamente",
    livello: "B2-C1",
    contesto:
      "Ieri hai dimenticato il compleanno della tua amica Kate. Oggi, in biblioteca, lei ti è passata accanto senza salutarti e ti ha ignorato tutto il giorno.",
    consegna: "Racconta che ti ha trattato con freddezza (modo di dire con «shoulder»).",
    soluzioni: [
      "She gave me the cold shoulder.",
      "Kate gave me the cold shoulder.",
      "She gave me the cold shoulder all day.",
      "She's been giving me the cold shoulder.",
    ],
    tempo: "past simple|present perfect continuous",
    parole: [
      ["dare", "give", "verbo irregolare"],
      ["freddo", "cold"],
      ["spalla", "shoulder"],
    ],
    suggerimenti: [
      "È successo oggi, in un momento concluso. Quale tempo? L'immagine: mostrare a qualcuno una spalla fredda, voltandogli le spalle.",
      "Lei + il passato irregolare di «dare» + me + la spalla fredda (con l'articolo determinativo).",
    ],
    simile: "Why is everyone giving me the cold shoulder?",
    spiegazione:
      "Give someone the cold shoulder = ignorare qualcuno di proposito, trattarlo con freddezza.",
    lezione: "M4{5}",
  },
  {
    id: "b2-in-quattro",
    livello: "B2-C1",
    contesto:
      "Quando sei arrivato in Inghilterra senza conoscere nessuno, la tua padrona di casa ha fatto di tutto per aiutarti: documenti, banca, medico.",
    consegna: "Racconta che si è fatta in quattro per aiutarti (modo di dire con «backwards»).",
    soluzioni: [
      "She bent over backwards to help me.",
      "My landlady bent over backwards to help me.",
      "She really bent over backwards to help me.",
    ],
    tempo: "past simple",
    parole: [
      ["piegarsi", "bend over", "bend, bent, bent"],
      ["all'indietro", "backwards"],
      ["aiutare", "help"],
    ],
    suggerimenti: [
      "È un fatto concluso. Quale tempo (il verbo «piegarsi» è irregolare)? L'immagine è un acrobata che si piega all'indietro. Poi lo scopo: «per aiutarmi».",
      "Lei + il passato irregolare di bend + over + all'indietro + to + aiutare + me.",
    ],
    simile: "The hotel staff bent over backwards for us.",
    spiegazione:
      "Bend over backwards (to do something) = farsi in quattro. Lo scopo si esprime con to + verbo base.",
    lezione: "M4{6}",
  },
  {
    id: "b2-basta-per-oggi",
    livello: "B2-C1",
    contesto:
      "Sono le sette di sera e tu e i tuoi compagni lavorate al progetto dalle nove di mattina. Nessuno riesce più a concentrarsi.",
    consegna: "Proponi di smettere per oggi (modo di dire con «day»).",
    soluzioni: [
      "Let's call it a day.",
      "Shall we call it a day?",
      "Why don't we call it a day?",
      "OK, let's call it a day.",
    ],
    tempo: "imperativo|shall|present simple",
    parole: [
      ["chiamare", "call"],
      ["giorno / giornata", "day"],
    ],
    suggerimenti: [
      "È una proposta per tutti. Quale forma per «facciamo...»? L'immagine: dichiarare conclusa la giornata di lavoro.",
      "La forma esortativa + «chiamare» + il pronome + una giornata.",
    ],
    simile: "I'm exhausted; I'm going to call it a day.",
    spiegazione:
      "Call it a day = smettere (di lavorare) per oggi. Di sera si sente anche call it a night.",
    lezione: "M5{2}",
  },
  {
    id: "b2-sbarcare-il-lunario",
    livello: "B2-C1",
    contesto:
      "In un tema sulla crisi economica parli di molte famiglie di Londra: con gli affitti altissimi, faticano ad arrivare alla fine del mese.",
    consegna: "Scrivi che fanno fatica a sbarcare il lunario (modo di dire con «ends»).",
    soluzioni: [
      "They struggle to make ends meet.",
      "They are struggling to make ends meet.",
      "Many families struggle to make ends meet.",
      "Many families are struggling to make ends meet.",
      "They find it hard to make ends meet.",
    ],
    tempo: "present simple|present continuous",
    parole: [
      ["faticare / lottare", "struggle"],
      ["estremità / fini", "ends"],
      ["incontrarsi", "meet"],
    ],
    suggerimenti: [
      "È una situazione generale (o di questo periodo). Quale tempo? L'immagine: far incontrare le due estremità del bilancio, entrate e uscite.",
      "Loro + «faticare» + to + make + i due capi + «incontrarsi» (forma base, senza to).",
    ],
    simile: "With two jobs, she can just about make ends meet.",
    spiegazione:
      "Make ends meet = sbarcare il lunario, arrivare a fine mese. Dopo make l'altro verbo va alla forma base (make ends MEET).",
    lezione: "M5{4}",
  },
  {
    id: "b2-non-rovina",
    livello: "B2-C1",
    contesto:
      "La tua amica, che risparmia su tutto, esita a prendere un caffè al bar insieme a te. Tu la convinci: è solo un caffè.",
    consegna: "Dille che un caffè non ti manderà in rovina (modo di dire con «bank»).",
    soluzioni: [
      "One coffee won't break the bank.",
      "A coffee won't break the bank.",
      "One coffee isn't going to break the bank.",
      "Come on, one coffee won't break the bank.",
      "It won't break the bank.",
    ],
    tempo: "future simple|going to",
    parole: [
      ["rompere", "break"],
      ["banca", "bank"],
      ["caffè", "coffee"],
    ],
    suggerimenti: [
      "È una previsione sul futuro, al negativo. Quale forma del futuro? L'immagine: far saltare la banca, come al casinò.",
      "Un caffè + la negativa contratta di will + «rompere» + la banca.",
    ],
    simile: "A weekend in Bath won't break the bank.",
    spiegazione:
      "Not break the bank = non costare troppo, non mandare in rovina. Si usa quasi sempre al negativo.",
    lezione: "M5{5}",
  },
  {
    id: "b2-ammazzare-il-tempo",
    livello: "B2-C1",
    contesto:
      "Il volo per Roma aveva tre ore di ritardo. Un amico ti chiede che cosa avete fatto tu e tua sorella nel frattempo: siete stati in un caffè dell'aeroporto.",
    consegna: "Racconta che avete ammazzato il tempo in un caffè (modo di dire con «time»).",
    soluzioni: [
      "We killed time in a café.",
      "We killed time in a cafe.",
      "We killed some time in a café.",
      "We killed time in a café at the airport.",
    ],
    tempo: "past simple",
    parole: [
      ["uccidere / ammazzare", "kill"],
      ["tempo", "time"],
      ["caffè (locale)", "café"],
    ],
    suggerimenti: [
      "È un fatto concluso. Quale tempo? Il modo di dire è identico all'italiano: con quale verbo?",
      "Noi + il passato di «uccidere» + tempo (senza articolo) + in un caffè.",
    ],
    simile: "I read a magazine to kill time.",
    spiegazione:
      "Kill time = ammazzare il tempo, proprio come in italiano.",
    lezione: "M5{3}",
  },
  {
    id: "b2-al-settimo-cielo",
    livello: "B2-C1",
    contesto:
      "Hai appena ricevuto l'email: ti hanno ammesso al master che sognavi da anni. Chiami tuo padre, senza riuscire a smettere di ridere.",
    consegna: "Digli che sei al settimo cielo (modo di dire con «moon»).",
    soluzioni: [
      "I'm over the moon!",
      "I'm over the moon.",
      "I am over the moon!",
      "Dad, I'm over the moon!",
    ],
    tempo: "present simple",
    parole: [
      ["sopra", "over"],
      ["luna", "moon"],
    ],
    suggerimenti: [
      "È il tuo stato d'animo adesso. Quale verbo e quale tempo? L'immagine: saltare così in alto da superare la luna.",
      "Io + «essere» + la preposizione «sopra» + la luna.",
    ],
    simile: "She was over the moon with her results.",
    spiegazione:
      "Be over the moon = essere al settimo cielo. In inglese il cielo è la luna!",
    lezione: "M6{1}",
  },
  {
    id: "b2-farfalle",
    livello: "B2-C1",
    contesto:
      "Tra dieci minuti hai il colloquio di ammissione a Oxford. Sei in corridoio e non riesci a stare fermo.",
    consegna: "Di' alla tua amica che hai le farfalle nello stomaco.",
    soluzioni: [
      "I've got butterflies in my stomach.",
      "I have got butterflies in my stomach.",
      "I have butterflies in my stomach.",
      "I've got butterflies.",
    ],
    tempo: "have got|present simple",
    parole: [
      ["farfalle", "butterflies"],
      ["stomaco", "stomach"],
    ],
    suggerimenti: [
      "È una sensazione che hai adesso. Quale forma di «avere» è tipica dell'inglese britannico? Il modo di dire è identico all'italiano.",
      "Io + have got (contratto) + farfalle + nel + il mio stomaco (con il possessivo, non l'articolo).",
    ],
    simile: "He always gets butterflies before a match.",
    spiegazione:
      "Have butterflies in your stomach = avere le farfalle nello stomaco (nervosismo o emozione). Con le parti del corpo: il possessivo.",
    lezione: "M6{3}",
  },
  {
    id: "b2-perso-le-staffe",
    livello: "B2-C1",
    contesto:
      "Durante la partita di calcetto l'arbitro ha negato un rigore evidente. Il tuo compagno di squadra si è messo a urlare e ha preso a calci il pallone.",
    consegna: "Racconta che ha perso le staffe (modo di dire con «temper»).",
    soluzioni: [
      "He lost his temper.",
      "He completely lost his temper.",
      "He lost his temper with the referee.",
      "He really lost his temper.",
    ],
    tempo: "past simple",
    parole: [
      ["perdere", "lose", "verbo irregolare"],
      ["calma / carattere", "temper"],
      ["arbitro", "referee"],
    ],
    suggerimenti: [
      "È un fatto concluso. Quale tempo (il verbo «perdere» è irregolare)? L'immagine: perdere il controllo del proprio carattere.",
      "Lui + il passato irregolare di «perdere» + il possessivo + la parola per «calma, temperamento».",
    ],
    simile: "Try not to lose your temper with the kids.",
    spiegazione:
      "Lose your temper = perdere le staffe, arrabbiarsi. Il contrario: keep your temper.",
    lezione: "M6{4}",
  },
  {
    id: "b2-su-col-morale",
    livello: "B2-C1",
    contesto:
      "Il tuo amico è stato scartato al provino della band. È abbattuto e vuole rinunciare alla musica. Tu lo incoraggi.",
    consegna: "Digli di tenere su il morale (modo di dire con «chin»).",
    soluzioni: [
      "Keep your chin up!",
      "Keep your chin up.",
      "Come on, keep your chin up!",
      "Keep your chin up, there'll be other auditions.",
    ],
    tempo: "imperativo",
    parole: [
      ["tenere", "keep"],
      ["mento", "chin"],
      ["su", "up"],
    ],
    suggerimenti: [
      "È un incoraggiamento diretto. Quale modo verbale? L'immagine: tenere il mento alto invece di abbassare la testa.",
      "L'imperativo di «tenere» + il tuo + mento + la particella «su».",
    ],
    simile: "Chin up! It's not the end of the world.",
    spiegazione:
      "Keep your chin up! = su col morale! Anche solo: Chin up!",
    lezione: "M6{5}",
  },
  {
    id: "b2-esasperato",
    livello: "B2-C1",
    contesto:
      "Il bambino che curi come babysitter non dorme da tre notti e ha appena rovesciato il latte sul tuo libro. Chiami tua madre, esausto.",
    consegna: "Dille che sei al limite della sopportazione (modo di dire con «tether»).",
    soluzioni: [
      "I'm at the end of my tether.",
      "I am at the end of my tether.",
      "I'm at the end of my tether!",
      "Mum, I'm at the end of my tether.",
    ],
    tempo: "present simple",
    parole: [
      ["fine", "end"],
      ["corda (per legare un animale)", "tether"],
    ],
    suggerimenti: [
      "È il tuo stato adesso. Quale verbo e quale tempo? L'immagine: un animale legato che arriva alla fine della sua corda e non può andare oltre.",
      "Io + «essere» + «alla fine di» + la mia + corda.",
    ],
    simile: "After a week of exams, I'm at the end of my tether.",
    spiegazione:
      "Be at the end of your tether = non poterne più, essere allo stremo (americano: at the end of your rope).",
    lezione: "M6{6}",
  },
  {
    id: "b2-giu-di-corda",
    livello: "B2-C1",
    contesto:
      "È novembre, piove da giorni e ti manca casa. Una compagna nota che sei silenzioso e ti chiede se va tutto bene.",
    consegna: "Rispondi che oggi sei un po' giù di morale (modo di dire con un colore).",
    soluzioni: [
      "I'm feeling a bit blue today.",
      "I'm feeling a bit blue.",
      "I'm a bit blue today.",
      "I feel a bit blue today.",
    ],
    tempo: "present continuous|present simple",
    parole: [
      ["sentirsi", "feel"],
      ["un po'", "a bit"],
      ["blu", "blue"],
    ],
    suggerimenti: [
      "È uno stato temporaneo, di oggi. Quale tempo lo presenta come temporaneo? In inglese la tristezza ha un colore: quale?",
      "Io + «essere» + «sentirsi» in -ing + un po' + il colore della tristezza + oggi.",
    ],
    simile: "He's been feeling blue since his girlfriend left.",
    spiegazione:
      "Feel blue = essere giù, malinconico. Feel al continuous va bene per uno stato temporaneo: I'm feeling blue.",
    lezione: "M6{2}",
  },
  {
    id: "b2-non-me-la-bevo",
    livello: "B2-C1",
    contesto:
      "Il tuo coinquilino giura che il gatto del vicino è entrato dalla finestra e ha mangiato la tua pizza avanzata. Ha ancora la salsa sul mento.",
    consegna: "Digli che non te la bevi (modo di dire con «buy»).",
    soluzioni: [
      "I'm not buying it.",
      "I am not buying it.",
      "Sorry, I'm not buying it.",
      "Nice try, but I'm not buying it.",
    ],
    tempo: "present continuous",
    parole: [
      ["comprare", "buy"],
    ],
    suggerimenti: [
      "È una reazione di adesso, all'affermazione appena sentita. Quale tempo? L'immagine: rifiutare di «comprare» una storia, come una merce che non convince.",
      "Io + «essere» + not + «comprare» in -ing + il pronome per la storia.",
    ],
    simile: "He said he was ill, but nobody bought it.",
    spiegazione:
      "I'm not buying it = non me la bevo, non ci credo. Buy = credere a una storia (informale).",
    lezione: "M7{1}",
  },
  {
    id: "b2-troppo-bello",
    livello: "B2-C1",
    contesto:
      "Un annuncio online offre un appartamento enorme in pieno centro di Oxford a 300 sterline al mese, da pagare in anticipo con un bonifico all'estero.",
    consegna: "Commenta che sembra troppo bello per essere vero.",
    soluzioni: [
      "It sounds too good to be true.",
      "It seems too good to be true.",
      "It looks too good to be true.",
      "This sounds too good to be true.",
    ],
    tempo: "present simple",
    parole: [
      ["sembrare (da quello che senti)", "sound"],
      ["sembrare", "seem / look"],
      ["vero", "true"],
    ],
    suggerimenti: [
      "È un'impressione presente. Quale tempo? Il modo di dire è come in italiano: «troppo buono per essere vero».",
      "Soggetto impersonale + un verbo che significa «sembrare» (con la -s) + troppo + buono + to + «essere» + vero.",
    ],
    simile: "The price was too good to be true.",
    spiegazione:
      "Too good to be true = troppo bello per essere vero. Too + aggettivo + to + verbo: troppo... per...",
    lezione: "M7{2}",
  },
  {
    id: "b2-qualcosa-che-non-torna",
    livello: "B2-C1",
    contesto:
      "Il nuovo inquilino del piano di sopra dice di essere un medico, ma esce solo di notte, riceve pacchi strani e non sa cos'è un'aspirina.",
    consegna: "Di' che c'è qualcosa di sospetto in lui (modo di dire con «fishy»).",
    soluzioni: [
      "There's something fishy about him.",
      "There is something fishy about him.",
      "There's something fishy about that guy.",
      "Something's fishy about him.",
    ],
    tempo: "present simple",
    parole: [
      ["qualcosa", "something"],
      ["sospetto (che puzza di pesce)", "fishy"],
      ["riguardo a", "about"],
    ],
    suggerimenti: [
      "È un'impressione presente. Quale tempo? L'immagine: qualcosa che puzza di pesce, che non convince.",
      "«C'è» + qualcosa + l'aggettivo che viene da «pesce» + la preposizione «riguardo a» + lui.",
    ],
    simile: "There's something fishy going on here.",
    spiegazione:
      "Something fishy = qualcosa di sospetto (in italiano diremmo «gatta ci cova»). L'aggettivo va dopo something.",
    lezione: "M7{3}",
  },
  {
    id: "b2-ci-sei-cascato",
    livello: "B2-C1",
    contesto:
      "Il primo aprile hai detto al tuo amico che le lezioni erano state cancellate per una settimana. Lui ha già prenotato un volo per Roma.",
    consegna: "Digli che non ci puoi credere che ci sia cascato (modo di dire con «fall»).",
    soluzioni: [
      "I can't believe you fell for it!",
      "I can't believe you fell for it.",
      "I cannot believe you fell for it!",
      "I can't believe that you fell for it!",
    ],
    tempo: "can|past simple",
    parole: [
      ["credere", "believe"],
      ["cascarci", "fall for (something)", "fall, fell, fallen"],
    ],
    suggerimenti: [
      "La tua incredulità è adesso, l'errore di lui è nel passato. Quali tempi? «Cascarci» è un phrasal verb con il verbo «cadere».",
      "Io + il modale della capacità al negativo + «credere» + tu + il passato irregolare di «cadere» + la preposizione «per» + il pronome.",
    ],
    simile: "Don't fall for that old trick.",
    spiegazione:
      "Fall for something = cascarci, farsi ingannare. (Fall for someone = innamorarsi di qualcuno!)",
    lezione: "M7{4}",
  },
  {
    id: "b2-credimi",
    livello: "B2-C1",
    contesto:
      "La tua amica vuole andare a piedi da Oxford a Blenheim Palace con i sandali. Tu l'hai fatto l'anno scorso: è lunghissimo.",
    consegna: "Dille di fidarsi di te, di crederti sulla parola (modo di dire con «word»).",
    soluzioni: [
      "Take my word for it.",
      "Take my word for it, it's a long walk.",
      "Trust me, take my word for it.",
      "Just take my word for it.",
    ],
    tempo: "imperativo",
    parole: [
      ["prendere", "take"],
      ["parola", "word"],
    ],
    suggerimenti: [
      "È un'esortazione diretta. Quale modo verbale? L'immagine: «prendere la mia parola» come garanzia.",
      "L'imperativo di «prendere» + la mia + parola + la preposizione «per» + il pronome.",
    ],
    simile: "You don't have to take my word for it; ask anyone.",
    spiegazione:
      "Take my word for it = credimi sulla parola, fidati.",
    lezione: "M7{5}",
  },
  {
    id: "b2-a-chi-lo-dici",
    livello: "B2-C1",
    contesto:
      "Un collega si lamenta: «The trains in this country are always late!». Tu, che arrivi in ritardo tutti i giorni per colpa dei treni, sei totalmente d'accordo.",
    consegna: "Rispondi con l'espressione che significa «a chi lo dici!».",
    soluzioni: [
      "Tell me about it!",
      "Tell me about it.",
      "Oh, tell me about it!",
    ],
    tempo: "imperativo",
    parole: [
      ["dire / raccontare", "tell"],
      ["riguardo a", "about"],
    ],
    suggerimenti: [
      "Sembra un invito a raccontare, ma significa il contrario: «lo so fin troppo bene!». Che modo verbale ha questa espressione?",
      "L'imperativo di «dire (a qualcuno)» + me + «riguardo a» + il pronome.",
    ],
    simile: "Tired? Tell me about it, I've been up since five.",
    spiegazione:
      "Tell me about it! = a chi lo dici! Non è una richiesta di informazioni: esprime forte accordo con una lamentela.",
    lezione: "M8{1}",
  },
  {
    id: "b2-sono-tutto-orecchi",
    livello: "B2-C1",
    contesto:
      "Il tuo amico ti dice che ha un pettegolezzo succosissimo sul vostro professore. Tu posi il telefono e ti siedi accanto a lui.",
    consegna: "Digli che sei tutto orecchi.",
    soluzioni: [
      "I'm all ears.",
      "I'm all ears!",
      "I am all ears.",
      "Go on, I'm all ears.",
    ],
    tempo: "present simple|imperativo",
    parole: [
      ["tutto", "all"],
      ["orecchie", "ears"],
    ],
    suggerimenti: [
      "È il tuo stato adesso. Quale verbo e quale tempo? Il modo di dire è identico all'italiano.",
      "Io + «essere» + tutto + orecchie.",
    ],
    simile: "Tell me everything, I'm all ears.",
    spiegazione:
      "I'm all ears = sono tutto orecchi, ti ascolto con la massima attenzione.",
    lezione: "M8{6}",
  },
];
