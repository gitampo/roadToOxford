import type { Contesto } from ".";

// I contesti di livello B1
export const CONTESTI_B1: Contesto[] = [
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
  {
    id: "b1-al-tuo-posto",
    livello: "B1",
    contesto:
      "Il tuo amico ha litigato con la sua ragazza e le ha detto cose pesanti di cui ora si pente. Ti chiede che cosa dovrebbe fare.",
    consegna: "Digli che al suo posto chiederesti scusa.",
    soluzioni: [
      "If I were you, I would apologise.",
      "If I were you, I'd apologise.",
      "If I were you, I would apologize.",
      "If I were you, I'd apologize.",
      "If I were you, I would say sorry.",
      "If I were you, I'd say sorry.",
      "If I were you, I'd apologise to her.",
      "I would apologise if I were you.",
      "I'd apologise if I were you.",
    ],
    tempo: "conditional",
    parole: [
      ["chiedere scusa", "apologise / say sorry", "apologise è britannico, apologize americano"],
      ["a lei", "to her"],
    ],
    suggerimenti: [
      "«Al tuo posto» è una situazione immaginaria: tu non sei lui. Quale periodo ipotetico si usa per le situazioni irreali nel presente?",
      "La formula fissa per i consigli è: if + io + il passato di «essere» (nella forma speciale usata per tutte le persone in queste ipotesi), poi would + verbo base.",
    ],
    simile: "If I were you, I would take the job.",
    spiegazione:
      "If I were you, I would... è la formula per dare consigli. Si usa were anche con I: è il congiuntivo inglese dell'ipotesi irreale.",
    lezione: "lezione 36{3}",
  },
  {
    id: "b1-deduzione-must",
    livello: "B1",
    contesto:
      "Passi davanti alla casa di Laura per restituirle un libro. Le luci sono accese, la sua bici è appoggiata al cancello e si sente la musica. Il tuo amico pensa che sia fuori città.",
    consegna: "Digli che deve essere in casa per forza (ne sei quasi sicuro).",
    soluzioni: [
      "She must be at home.",
      "She must be home.",
      "Laura must be at home.",
      "Laura must be home.",
      "She must be in.",
      "No, she must be at home.",
    ],
    tempo: "must",
    parole: [
      ["a casa", "at home / home / in"],
    ],
    suggerimenti: [
      "Non stai dando un ordine: stai facendo una deduzione logica dagli indizi (luci, bici, musica). Quale modale esprime «sono quasi sicuro che sia così»?",
      "Il modale della deduzione positiva + il verbo «essere» alla forma base + il luogo. È lo stesso modale dell'obbligo, ma qui ha un altro significato.",
    ],
    simile: "He must be tired after such a long journey.",
    spiegazione:
      "Must + verbo base esprime una deduzione quasi certa: she must be at home (= sono sicuro che è a casa). Il contrario è can't be.",
    lezione: "lezione 45{2}",
  },
  {
    id: "b1-deduzione-cant",
    livello: "B1",
    contesto:
      "Un amico ti dice di aver visto il vostro compagno Mark al pub ieri sera. Ma tu sai per certo che Mark è in Australia da un mese: ti ha mandato foto da Sydney stamattina.",
    consegna: "Digli che non può essere stato Mark: non può essere lui.",
    soluzioni: [
      "It can't be Mark.",
      "It cannot be Mark.",
      "That can't be Mark.",
      "That can't be true.",
      "It can't be true.",
      "It can't be him, he's in Australia.",
      "It can't be Mark, he's in Australia.",
      "That can't be Mark, he's in Australia.",
      "It couldn't be Mark.",
    ],
    tempo: "can|could",
    parole: [
      ["vero", "true"],
      ["lui (complemento)", "him"],
      ["Australia", "Australia"],
    ],
    suggerimenti: [
      "È una deduzione negativa: hai la prova che è impossibile. Quale modale si usa per dire «non può essere» con sicurezza?",
      "Soggetto impersonale (o un dimostrativo) + il modale della possibilità alla forma negativa + il verbo «essere» alla forma base. Attenzione: il contrario della deduzione con must NON è mustn't.",
    ],
    simile: "She can't be hungry, she's just eaten.",
    spiegazione:
      "La deduzione negativa si fa con can't (impossibile), non con mustn't, che significa «è vietato».",
    lezione: "lezione 45{3}",
  },
  {
    id: "b1-tag",
    livello: "B1",
    contesto:
      "Alla fermata dell'autobus, a gennaio, c'è un vento gelido. Accanto a te una signora si stringe nel cappotto. Vuoi fare un po' di small talk all'inglese.",
    consegna:
      "Commenta che oggi fa freddo, cercando il suo accordo con una coda interrogativa.",
    soluzioni: [
      "It's cold today, isn't it?",
      "It is cold today, isn't it?",
      "It's freezing today, isn't it?",
      "It's really cold today, isn't it?",
      "It's very cold today, isn't it?",
      "It's cold, isn't it?",
      "It's freezing, isn't it?",
    ],
    tempo: "present simple",
    parole: [
      ["freddo", "cold"],
      ["gelido", "freezing"],
      ["oggi", "today"],
    ],
    suggerimenti: [
      "Descrivi il tempo di oggi con il verbo «essere». Poi vuoi una conferma («vero?»): in inglese non si dice «true?», ma si ripete l'ausiliare in fondo. Come?",
      "Frase affermativa con il soggetto impersonale + «essere» + aggettivo; poi virgola e la coda: lo stesso verbo, ma NEGATIVO e contratto, seguito dal pronome soggetto.",
    ],
    simile: "It's a lovely day, isn't it?",
    spiegazione:
      "Le tag questions ripetono l'ausiliare al contrario: frase affermativa → coda negativa (It's cold, isn't it?). Sono il cuore dello small talk britannico.",
    lezione: "lezione 40{2}",
  },
  {
    id: "b1-passivo-presente",
    livello: "B1",
    contesto:
      "Lavori come receptionist in un piccolo hotel di Oxford. Una coppia appena arrivata chiede a che ora si può fare colazione: la sala è aperta dalle sette alle dieci.",
    consegna: "Di' che la colazione viene servita dalle 7 alle 10.",
    soluzioni: [
      "Breakfast is served from seven to ten.",
      "Breakfast is served from 7 to 10.",
      "Breakfast is served from seven until ten.",
      "Breakfast is served from 7 until 10.",
      "Breakfast is served between seven and ten.",
      "Breakfast is served between 7 and 10.",
      "Breakfast is served from 7 am to 10 am.",
    ],
    tempo: "passiva",
    parole: [
      ["colazione", "breakfast", "senza articolo"],
      ["servire", "serve"],
    ],
    suggerimenti: [
      "Non importa CHI serve la colazione (il personale), importa la colazione. È un fatto abituale, ogni giorno. Quale forma del verbo serve, e in quale tempo?",
      "Passivo al present simple: forma di «essere» al presente + participio passato. Poi l'orario: «da... a...» oppure «tra... e...».",
    ],
    simile: "English is spoken all over the world.",
    spiegazione:
      "Present simple passivo: am/is/are + participio passato. Si usa quando conta l'azione, non chi la fa. I pasti (breakfast, lunch, dinner) non vogliono l'articolo.",
    lezione: "lezione 43{2}",
  },
  {
    id: "b1-passivo-perfetto",
    livello: "B1",
    contesto:
      "Esci dalla biblioteca e la tua bici, che avevi legato alla rastrelliera, non c'è più. Resta solo il lucchetto tagliato a terra. Chiami un amico, sconvolto.",
    consegna: "Digli che ti hanno rubato la bici (forma passiva).",
    soluzioni: [
      "My bike has been stolen!",
      "My bike has been stolen.",
      "My bicycle has been stolen!",
      "Someone has stolen my bike!",
      "Somebody has stolen my bike!",
      "My bike's been stolen!",
    ],
    tempo: "present perfect",
    parole: [
      ["bici", "bike / bicycle"],
      ["rubare", "steal", "verbo irregolare"],
      ["qualcuno", "someone / somebody"],
    ],
    suggerimenti: [
      "Il furto è appena avvenuto e la conseguenza è evidente adesso (la bici non c'è). Quale tempo collega un fatto passato a un risultato presente? E se non sai chi è stato, quale forma del verbo usi?",
      "Present perfect passivo: ausiliare + il participio di «essere» + il participio passato (irregolare) di «rubare». Il soggetto è la bici.",
    ],
    simile: "Our flight has been cancelled.",
    spiegazione:
      "Present perfect passivo: has/have been + participio. Si usa per le notizie e i fatti recenti con effetto nel presente, quando non si sa (o non importa) chi è stato.",
    lezione: "lezione 43{2}",
  },
  {
    id: "b1-domanda-indiretta",
    livello: "B1",
    contesto:
      "Sei appena sceso dal pullman a Londra e cerchi la stazione di Paddington. Vuoi chiedere a un passante, in modo molto educato.",
    consegna:
      "Chiedigli, con una domanda indiretta, se può dirti dov'è la stazione.",
    soluzioni: [
      "Could you tell me where the station is?",
      "Could you tell me where the station is, please?",
      "Excuse me, could you tell me where the station is?",
      "Can you tell me where the station is?",
      "Could you tell me where Paddington station is?",
      "Excuse me, could you tell me where Paddington station is?",
      "Do you know where the station is?",
    ],
    tempo: "could|can|present simple",
    parole: [
      ["dire (a qualcuno)", "tell"],
      ["stazione", "station"],
      ["scusi (per attirare l'attenzione)", "excuse me"],
    ],
    suggerimenti: [
      "La domanda diretta sarebbe «Where is the station?». Per essere più cortese la inserisci dentro un'altra domanda. Quale modale rende la richiesta gentile?",
      "Modale cortese + tu + «dire» + me, poi la domanda indiretta. Attenzione: nella domanda indiretta l'ordine NON è quello della domanda, ma quello di una frase normale (soggetto prima del verbo).",
    ],
    simile: "Do you know what time the museum opens?",
    spiegazione:
      "Nelle domande indirette l'ordine è quello della frase affermativa: Could you tell me where the station is? (non «where is the station»).",
    lezione: "lezione 42{5}",
  },
  {
    id: "b1-ordine-indiretto",
    livello: "B1",
    contesto:
      "Al telefono con il proprietario di casa, lui ti ha detto: «Wait for the plumber at home tomorrow.» Ora la tua coinquilina vuole sapere perché domani non vieni a lezione.",
    consegna: "Riferiscile che il proprietario ti ha detto di aspettare l'idraulico.",
    soluzioni: [
      "The landlord told me to wait for the plumber.",
      "He told me to wait for the plumber.",
      "The landlord asked me to wait for the plumber.",
      "He asked me to wait for the plumber.",
      "The landlord told me to wait for the plumber at home.",
      "The landlord told me to wait for the plumber at home tomorrow.",
    ],
    tempo: "past simple",
    parole: [
      ["proprietario di casa", "landlord"],
      ["aspettare", "wait (for)", "si aspetta qualcuno: wait for"],
      ["idraulico", "plumber", "la b non si pronuncia"],
    ],
    suggerimenti: [
      "Riferisci un ordine che hai ricevuto nel passato. Il verbo che introduce va al passato; ma che cosa diventa un imperativo nel discorso indiretto?",
      "Il verbo «dire (a qualcuno)» al passato + la persona a cui l'ha detto + to + verbo base. Niente «that» e niente congiuntivo come in italiano.",
    ],
    simile: "The doctor told me to stay in bed.",
    spiegazione:
      "Gli ordini e le richieste nel discorso indiretto: tell/ask + persona + to + verbo base (told me to wait). «He said me to wait» è sbagliato: say non vuole la persona.",
    lezione: "lezione 42{6}",
  },
  {
    id: "b1-non-vedo-lora",
    livello: "B1",
    contesto:
      "Scrivi un'email a Tom, un amico inglese che non vedi da un anno. Ha appena comprato i biglietti: verrà a trovarti a Roma il mese prossimo. Chiudi l'email con una frase calorosa.",
    consegna: "Scrivigli che non vedi l'ora di vederlo.",
    soluzioni: [
      "I'm looking forward to seeing you.",
      "I am looking forward to seeing you.",
      "I'm really looking forward to seeing you.",
      "I'm looking forward to seeing you next month.",
      "I can't wait to see you.",
      "I cannot wait to see you.",
    ],
    tempo: "present continuous|can",
    parole: [
      ["non vedere l'ora (di)", "look forward to", "phrasal verb"],
      ["vedere", "see"],
      ["il mese prossimo", "next month"],
    ],
    suggerimenti: [
      "È un sentimento che provi in questo periodo, in attesa di un evento futuro. La forma più usata è un phrasal verb al present continuous. Quale?",
      "Present continuous del phrasal verb che significa «non vedere l'ora»: attenzione, la sua ultima parola è una preposizione, quindi il verbo che segue va in -ing (non alla forma base).",
    ],
    simile: "We're looking forward to meeting your parents.",
    spiegazione:
      "Look forward to + -ing: qui to è una preposizione, quindi seeing, non see. «I'm looking forward to see you» è uno degli errori più comuni anche ai livelli alti.",
    lezione: "lezione 47{5}",
  },
  {
    id: "b1-scopo",
    livello: "B1",
    contesto:
      "Al colloquio di ammissione al corso estivo, il docente ti chiede perché hai scelto proprio l'Inghilterra. Sei venuto per migliorare il tuo inglese.",
    consegna: "Rispondi che sei venuto in Inghilterra per migliorare il tuo inglese.",
    soluzioni: [
      "I came to England to improve my English.",
      "I came here to improve my English.",
      "I have come to England to improve my English.",
      "I've come here to improve my English.",
      "I came to England in order to improve my English.",
    ],
    tempo: "past simple|present perfect",
    parole: [
      ["venire", "come", "verbo irregolare"],
      ["Inghilterra", "England"],
      ["migliorare", "improve"],
      ["il mio inglese", "my English"],
    ],
    suggerimenti: [
      "Racconti una scelta fatta e conclusa (il tuo arrivo). Quale tempo? Poi devi spiegare lo scopo («per...»): in inglese non si dice «for + verbo».",
      "Past simple irregolare di «venire» + il luogo. Lo scopo si esprime con la forma più semplice dell'infinito, quella con «to».",
    ],
    simile: "She went to the library to study.",
    spiegazione:
      "Lo scopo («per fare») si esprime con to + verbo base (o in order to): I came to improve my English. «For improve» o «for improving» sono errori tipici.",
    lezione: "lezione 48{7}",
  },
  {
    id: "b1-abituato",
    livello: "B1",
    contesto:
      "Hai noleggiato un'auto in Scozia. Alla prima rotonda prendi la direzione sbagliata e il tuo amico scozzese sobbalza. Ti scusi: in Italia si guida a destra.",
    consegna: "Spiegagli che non sei abituato a guidare a sinistra.",
    soluzioni: [
      "I'm not used to driving on the left.",
      "I am not used to driving on the left.",
      "Sorry, I'm not used to driving on the left.",
      "I'm not used to driving on the left side.",
    ],
    tempo: "present simple",
    parole: [
      ["guidare", "drive"],
      ["a sinistra", "on the left"],
    ],
    suggerimenti: [
      "Non parli di un'abitudine passata, ma del tuo stato di ADESSO: la cosa per te è nuova e strana. Quale espressione significa «essere abituato a»? Che tempo serve per «essere»?",
      "Present simple negativo di «essere» + l'aggettivo che si scrive come il passato di «usare» + to. Attenzione: qui to è una preposizione, quindi il verbo dopo va in -ing.",
    ],
    simile: "She isn't used to getting up so early.",
    spiegazione:
      "Be used to + -ing = essere abituato a (I'm not used to driving). Non va confuso con used to + verbo base, che indica un'abitudine passata.",
    lezione: "lezione 38{5}",
  },
  {
    id: "b1-tracce",
    livello: "B1",
    contesto:
      "Rientri a casa rosso in faccia, sudato e senza fiato. La coinquilina ti guarda preoccupata e ti chiede che cosa ti è successo. Sei stato a correre nel parco fino a un minuto fa.",
    consegna: "Spiegale che hai corso (si vedono le tracce dell'attività).",
    soluzioni: [
      "I've been running.",
      "I have been running.",
      "I've been running in the park.",
      "I have been running in the park.",
      "Don't worry, I've been running.",
    ],
    tempo: "present perfect continuous",
    parole: [
      ["correre", "run"],
      ["parco", "park"],
      ["non preoccuparti", "don't worry"],
    ],
    suggerimenti: [
      "L'attività è appena finita e se ne vedono gli effetti adesso (il sudore, il fiato corto). Conta l'attività, non il risultato. Quale tempo si usa?",
      "Present perfect continuous: ausiliare + participio di «essere» + verbo in -ing. Attenzione al raddoppio della consonante nell'-ing di «correre».",
    ],
    simile: "Your eyes are red. Have you been crying?",
    spiegazione:
      "Il present perfect continuous spiega le tracce visibili di un'attività appena finita: I've been running (per questo sono sudato).",
    lezione: "lezione 39{3}",
  },
  {
    id: "b1-errore",
    livello: "B1",
    contesto:
      "Hai mandato per sbaglio un'email destinata alla tua tutor a tutto il gruppo del corso. Scrivi subito un messaggio a tutti per scusarti.",
    consegna: "Scrivi che ti dispiace, hai fatto un errore.",
    soluzioni: [
      "Sorry, I made a mistake.",
      "I'm sorry, I made a mistake.",
      "I am sorry, I made a mistake.",
      "Sorry, I've made a mistake.",
      "I'm sorry, I've made a mistake.",
      "Sorry everyone, I made a mistake.",
    ],
    tempo: "past simple|present perfect",
    parole: [
      ["errore", "mistake"],
      ["mi dispiace", "sorry / I'm sorry"],
    ],
    suggerimenti: [
      "L'errore è avvenuto pochi minuti fa ed è concluso. Va bene il past simple (oppure il present perfect, perché il risultato è ancora lì). Ma il problema vero è il verbo: «fare» un errore è do o make?",
      "Il verbo di «fare» che si usa per creare o produrre qualcosa, al passato (è irregolare) + articolo + la parola per «errore».",
    ],
    simile: "I made a terrible decision.",
    spiegazione:
      "Make a mistake, mai «do a mistake». Make si usa per creare o produrre (make a decision, make a noise); do per attività e compiti (do homework).",
    lezione: "lezione 46{3}",
  },
  {
    id: "b1-relativa-omessa",
    livello: "B1",
    contesto:
      "Cerchi dappertutto il libro di storia che hai comprato ieri alla Blackwell's. Il tuo coinquilino stava riordinando il soggiorno.",
    consegna: "Chiedigli se ha visto il libro che hai comprato ieri.",
    soluzioni: [
      "Have you seen the book I bought yesterday?",
      "Have you seen the book that I bought yesterday?",
      "Have you seen the book which I bought yesterday?",
      "Did you see the book I bought yesterday?",
      "Did you see the book that I bought yesterday?",
    ],
    tempo: "present perfect|past simple",
    parole: [
      ["vedere", "see", "verbo irregolare"],
      ["libro", "book"],
      ["comprare", "buy", "verbo irregolare"],
      ["ieri", "yesterday"],
    ],
    suggerimenti: [
      "Ci sono due verbi. «Hai visto?» riguarda un periodo che arriva fino ad ora; «ho comprato ieri» un momento preciso e finito. Quale tempo per ciascuno?",
      "Domanda al present perfect (ausiliare + soggetto + participio) + il libro + una relativa con il past simple. Il pronome relativo che fa da complemento si può anche omettere.",
    ],
    simile: "Where's the cake we made this morning?",
    spiegazione:
      "Quando il relativo fa da complemento oggetto si può omettere: the book (that) I bought. Con yesterday serve il past simple; have you seen va bene perché il periodo arriva fino ad ora.",
    lezione: "lezione 44{3}",
  },
  {
    id: "b1-nonostante",
    livello: "B1",
    contesto:
      "Racconti la gita a Stonehenge. Ha piovuto tutto il giorno, ma vi siete divertiti lo stesso e non avete rinunciato a nessuna tappa.",
    consegna: "Di' che, anche se pioveva, vi siete divertiti.",
    soluzioni: [
      "Although it was raining, we had a great time.",
      "Although it was raining, we had fun.",
      "Although it was raining, we enjoyed ourselves.",
      "Although it rained, we had a great time.",
      "Even though it was raining, we had a great time.",
      "Even though it was raining, we had fun.",
      "We had a great time although it was raining.",
      "We had fun although it was raining.",
    ],
    tempo: "past simple|past continuous",
    parole: [
      ["piovere", "rain"],
      ["divertirsi", "have fun / have a great time / enjoy ourselves"],
    ],
    suggerimenti: [
      "La pioggia è lo sfondo della giornata (un'azione in corso); il divertimento è il fatto principale. Quali due tempi del passato si usano per sfondo e fatto?",
      "Una congiunzione che significa «anche se» (seguita da soggetto + verbo, non da un nome) + sfondo al past continuous; poi il fatto principale al past simple. Attenzione: «divertirsi» non si traduce con un verbo riflessivo come in italiano.",
    ],
    simile: "Although she was tired, she finished the report.",
    spiegazione:
      "Although / even though + soggetto + verbo; despite vorrebbe invece un nome o un -ing (despite the rain). Divertirsi = have fun / have a great time.",
    lezione: "lezione 55{4}",
  },
  {
    id: "b1-unless",
    livello: "B1",
    contesto:
      "Sono le 8:52 e il pullman per Londra parte alle 9:00 dalla stazione di Gloucester Green. Il tuo amico sta ancora cercando le chiavi con calma.",
    consegna: "Avvertilo che, a meno che non si sbrighi, perderà il pullman.",
    soluzioni: [
      "Unless you hurry, you'll miss the coach.",
      "Unless you hurry, you will miss the coach.",
      "Unless you hurry up, you'll miss the coach.",
      "Unless you hurry, you'll miss the bus.",
      "You'll miss the coach unless you hurry.",
      "You'll miss the coach unless you hurry up.",
      "If you don't hurry, you'll miss the coach.",
      "If you don't hurry up, you'll miss the coach.",
    ],
    tempo: "future simple",
    parole: [
      ["sbrigarsi", "hurry (up)"],
      ["perdere (un mezzo)", "miss"],
      ["pullman", "coach", "bus è l'autobus urbano"],
    ],
    suggerimenti: [
      "È una conseguenza reale e probabile nel futuro, se una condizione non si avvera. Quale periodo ipotetico? E quale congiunzione significa «a meno che non», cioè «se non»?",
      "La congiunzione + present simple AFFERMATIVO (contiene già il senso negativo), poi will + verbo base. «Perdere» un mezzo non è «lose».",
    ],
    simile: "Unless it rains, we'll have lunch in the garden.",
    spiegazione:
      "Unless = if not, e vuole il verbo affermativo: unless you hurry (= if you don't hurry). Dopo unless, come dopo if, niente will. Perdere il treno/l'autobus = miss.",
    lezione: "lezione 34{6}",
  },
  {
    id: "b1-pp-causa",
    livello: "B1",
    contesto:
      "Ieri sera, al pub, hai divorato tre porzioni di patatine in dieci minuti. Oggi un amico ti prende in giro. Ti giustifichi: per tutto il giorno non avevi mangiato niente.",
    consegna: "Spiega che avevi fame perché non avevi mangiato tutto il giorno.",
    soluzioni: [
      "I was hungry because I hadn't eaten all day.",
      "I was hungry because I had not eaten all day.",
      "I was so hungry because I hadn't eaten all day.",
      "I was starving because I hadn't eaten all day.",
      "I hadn't eaten all day, so I was hungry.",
      "I was hungry because I hadn't eaten anything all day.",
    ],
    tempo: "past perfect",
    parole: [
      ["affamato", "hungry / starving"],
      ["mangiare", "eat", "verbo irregolare"],
      ["tutto il giorno", "all day"],
    ],
    suggerimenti: [
      "La fame era ieri sera (passato); il digiuno era PRIMA, per tutto il giorno. Quale tempo indica la causa avvenuta prima di un momento passato?",
      "Prima parte: il passato di «essere» + affamato. Poi «perché» + had not (contratto) + il participio irregolare di «mangiare».",
    ],
    simile: "She was tired because she hadn't slept well.",
    spiegazione:
      "Il past perfect spiega la causa di una situazione passata: I was hungry because I hadn't eaten (prima).",
    lezione: "lezione 37{5}",
  },
  {
    id: "b1-pp-mai-prima",
    livello: "B1",
    contesto:
      "Racconti a un'amica inglese il tuo primo inverno a Oxford. Lei ride quando le dici che sei uscito in pigiama a toccare la neve: prima di venire in Inghilterra non l'avevi mai vista.",
    consegna: "Spiegale che non avevi mai visto la neve prima di venire in Inghilterra.",
    soluzioni: [
      "I had never seen snow before I came to England.",
      "I'd never seen snow before I came to England.",
      "Before I came to England, I had never seen snow.",
      "I had never seen snow before coming to England.",
      "I'd never seen snow before I moved to England.",
    ],
    tempo: "past perfect",
    parole: [
      ["vedere", "see", "verbo irregolare"],
      ["neve", "snow", "non numerabile, senza articolo"],
      ["venire / trasferirsi", "come / move"],
    ],
    suggerimenti: [
      "Il tuo arrivo è un momento del passato. L'esperienza mancata riguarda tutto il periodo PRIMA di quel momento. Quale tempo è il «present perfect del passato»?",
      "Had + mai + il participio irregolare di «vedere» + neve senza articolo + «prima che» + past simple irregolare di «venire».",
    ],
    simile: "He had never flown before his trip to Japan.",
    spiegazione:
      "Il past perfect con never indica un'esperienza mai fatta fino a un momento del passato: I had never seen snow before...",
    lezione: "lezione 37{2}",
  },
  {
    id: "b1-pp-quando-arrivati",
    livello: "B1",
    contesto:
      "Tu e i tuoi amici siete arrivati alla festa a mezzanotte, dopo aver sbagliato strada tre volte. La casa era vuota: tutti se n'erano già andati.",
    consegna: "Racconta che quando siete arrivati tutti erano già andati a casa (by the time).",
    soluzioni: [
      "By the time we arrived, everyone had gone home.",
      "By the time we arrived, everyone had already gone home.",
      "By the time we got there, everyone had gone home.",
      "By the time we got there, everyone had already gone home.",
      "Everyone had gone home by the time we arrived.",
      "By the time we arrived, everybody had gone home.",
    ],
    tempo: "past perfect",
    parole: [
      ["arrivare", "arrive / get there"],
      ["tutti", "everyone / everybody", "vuole il verbo al singolare"],
      ["andare a casa", "go home", "home senza preposizione"],
    ],
    suggerimenti: [
      "Due azioni passate: il vostro arrivo e la partenza degli altri, che è avvenuta PRIMA. Quale tempo per ciascuna?",
      "L'espressione che significa «nel momento in cui / quando ormai» + past simple; poi «tutti» + had + il participio irregolare di «andare» + casa.",
    ],
    simile: "By the time the police arrived, the thief had escaped.",
    spiegazione:
      "By the time (quando ormai) + past simple, e l'azione già conclusa al past perfect. Go home: senza to.",
    lezione: "lezione 37{4}",
  },
  {
    id: "b1-pp-dopo-che",
    livello: "B1",
    contesto:
      "Racconti l'estate della tua coinquilina: prima ha finito tutti gli esami, poi è partita per un mese in Grecia.",
    consegna: "Di' che dopo aver finito gli esami è andata in vacanza (con «after» + past perfect).",
    soluzioni: [
      "After she had finished her exams, she went on holiday.",
      "After she'd finished her exams, she went on holiday.",
      "She went on holiday after she had finished her exams.",
      "After she had finished her exams, she went on holiday to Greece.",
      "After she had finished her exams, she went to Greece.",
    ],
    tempo: "past perfect",
    parole: [
      ["finire", "finish"],
      ["esami", "exams"],
      ["andare in vacanza", "go on holiday"],
      ["Grecia", "Greece"],
    ],
    suggerimenti: [
      "Due azioni passate in sequenza: quale è avvenuta prima? Quale tempo la segnala?",
      "«Dopo che» + lei + had + participio di «finire» + i suoi esami; poi il past simple irregolare di «andare» + «in vacanza» (on + holiday).",
    ],
    simile: "After we had eaten, we went for a walk.",
    spiegazione:
      "Dopo after il past perfect sottolinea che la prima azione era conclusa. Andare in vacanza = go on holiday (britannico).",
    lezione: "lezione 37{4}",
  },
  {
    id: "b1-pp-biografia",
    livello: "B1",
    contesto:
      "Presenti alla classe la biografia di una scrittrice. Prima di trasferirsi a Londra, nel 1920, aveva studiato a Parigi per cinque anni.",
    consegna: "Di' che aveva studiato a Parigi prima di trasferirsi a Londra.",
    soluzioni: [
      "She had studied in Paris before she moved to London.",
      "She'd studied in Paris before she moved to London.",
      "Before she moved to London, she had studied in Paris.",
      "She had studied in Paris before moving to London.",
      "She had studied in Paris for five years before she moved to London.",
    ],
    tempo: "past perfect",
    parole: [
      ["studiare", "study"],
      ["Parigi", "Paris"],
      ["trasferirsi", "move"],
      ["Londra", "London"],
    ],
    suggerimenti: [
      "Nella biografia il momento di riferimento è il trasferimento. Lo studio era PRIMA. Quale tempo per lo studio? E per il trasferimento?",
      "Lei + had + participio di «studiare» + il luogo + «prima che» + lei + past simple di «trasferirsi».",
    ],
    simile: "He had worked as a teacher before he became a writer.",
    spiegazione:
      "Nelle biografie il past perfect riporta indietro nel tempo rispetto al racconto principale, che è al past simple.",
    lezione: "lezione 37{6}",
  },
  {
    id: "b1-non-mi-piaceva",
    livello: "B1",
    contesto:
      "La tua amica si stupisce: bevi quattro caffè al giorno. Le racconti che fino a vent'anni lo trovavi amarissimo e lo detestavi.",
    consegna: "Dille che una volta il caffè non ti piaceva.",
    soluzioni: [
      "I didn't use to like coffee.",
      "I did not use to like coffee.",
      "I never used to like coffee.",
      "I didn't use to like coffee at all.",
    ],
    tempo: "used to",
    parole: [
      ["piacere", "like"],
      ["caffè", "coffee"],
    ],
    suggerimenti: [
      "È una situazione del passato che oggi non è più vera. Quale forma la esprime? E come si fa la sua negativa?",
      "Negativa con l'ausiliare del passato: did not (contratto) + la forma base dell'espressione (attenzione: senza -d finale) + to + verbo base.",
    ],
    simile: "We didn't use to have a car.",
    spiegazione:
      "Negativa: didn't use to (senza -d, perché did porta già il passato). Si sente anche never used to.",
    lezione: "lezione 38{2}",
  },
  {
    id: "b1-would-ricordi",
    livello: "B1",
    contesto:
      "Scrivi un tema sui ricordi d'infanzia per il corso di scrittura. Ricordi le estati dai nonni in campagna: ogni anno ci andavate per tutto luglio.",
    consegna: "Scrivi che ogni estate andavate a casa dei nonni (usa «would»).",
    soluzioni: [
      "Every summer we would go to my grandparents' house.",
      "Every summer we'd go to my grandparents' house.",
      "Every summer we would go to our grandparents' house.",
      "We would go to my grandparents' house every summer.",
      "Every summer we would go to my grandparents.",
    ],
    tempo: "conditional",
    parole: [
      ["ogni estate", "every summer"],
      ["nonni", "grandparents"],
      ["casa", "house"],
    ],
    suggerimenti: [
      "È un'azione ripetuta nel passato, un ricordo nostalgico. Oltre a used to, quale modale si usa nei racconti per le abitudini passate?",
      "«Ogni estate» + noi + il modale (lo stesso del condizionale) + verbo base + il genitivo sassone plurale: i nonni + apostrofo + casa.",
    ],
    simile: "On Sundays my father would make pancakes.",
    spiegazione:
      "Would + verbo base racconta abitudini passate (azioni ripetute), soprattutto nei ricordi. Non si usa per gli stati: «I would have long hair» è sbagliato, si dice I used to have.",
    lezione: "lezione 38{4}",
  },
  {
    id: "b1-facevi-sport",
    livello: "B1",
    contesto:
      "Il tuo nuovo amico è altissimo e muscoloso. Ti chiedi se da ragazzo facesse sport a livello agonistico.",
    consegna: "Chiedigli se da ragazzo praticava qualche sport (used to).",
    soluzioni: [
      "Did you use to play any sport?",
      "Did you use to play any sports?",
      "Did you use to do any sport?",
      "Did you use to play any sport when you were young?",
      "Did you use to play sport at school?",
    ],
    tempo: "used to",
    parole: [
      ["praticare (uno sport)", "play / do"],
      ["sport", "sport", "in inglese britannico spesso non numerabile"],
      ["da giovane", "when you were young"],
    ],
    suggerimenti: [
      "Chiedi di un'abitudine passata che forse non c'è più. Quale forma? Come diventa una domanda?",
      "Ausiliare del passato + soggetto + la forma base dell'espressione (senza -d) + to + «praticare» + il quantificatore delle domande + sport.",
    ],
    simile: "Did you use to live in the country?",
    spiegazione:
      "Domande: Did you use to...? (use senza -d). Con gli sport con la palla si usa play; con gli altri do o go (go swimming).",
    lezione: "lezione 38{2}",
  },
  {
    id: "b1-cera-un-cinema",
    livello: "B1",
    contesto:
      "Passeggi con tuo nonno, che ha studiato a Oxford negli anni Sessanta. Davanti a un supermercato si ferma: lì, una volta, c'era un cinema.",
    consegna: "Sei il nonno: di' che qui una volta c'era un cinema.",
    soluzioni: [
      "There used to be a cinema here.",
      "There used to be a cinema here!",
      "A cinema used to be here.",
      "There used to be a cinema here when I was a student.",
    ],
    tempo: "used to",
    parole: [
      ["cinema", "cinema"],
      ["qui", "here"],
    ],
    suggerimenti: [
      "È una situazione del passato che oggi non esiste più. Quale forma la esprime? E come si combina con «c'era»?",
      "L'avverbio dell'espressione «c'è» + la forma delle situazioni passate + to + «essere» alla forma base + un cinema + qui.",
    ],
    simile: "There used to be a lake in this park.",
    spiegazione:
      "There used to be = una volta c'era (e ora non più). Used to vale per azioni e stati passati.",
    lezione: "lezione 38{6}",
  },
  {
    id: "b1-da-quanto-aspetti",
    livello: "B1",
    contesto:
      "Arrivi alla fermata e vedi il tuo amico seduto sulla panchina con l'aria stufa. Il bus non passa da un sacco di tempo.",
    consegna: "Chiedigli da quanto tempo sta aspettando.",
    soluzioni: [
      "How long have you been waiting?",
      "How long have you been waiting here?",
      "How long have you been waiting for the bus?",
    ],
    tempo: "present perfect continuous",
    parole: [
      ["aspettare", "wait (for)"],
      ["autobus", "bus"],
    ],
    suggerimenti: [
      "L'attesa è cominciata nel passato e continua adesso; ti interessa la durata. Quale tempo? Come diventa una domanda?",
      "L'espressione per «quanto tempo» + ausiliare + soggetto + il participio di «essere» + «aspettare» in -ing.",
    ],
    simile: "How long have you been learning Spanish?",
    spiegazione:
      "How long have you been + -ing? chiede la durata di un'azione che continua ancora. «How long are you waiting?» è sbagliato.",
    lezione: "lezione 39{1}",
  },
  {
    id: "b1-quantita",
    livello: "B1",
    contesto:
      "È mezzogiorno. Il tuo capo ti chiede come procede il lavoro. Stamattina hai già mandato tre email ai clienti e la mattina non è ancora finita.",
    consegna: "Digli che stamattina hai scritto tre email (conta il risultato, il numero).",
    soluzioni: [
      "I've written three emails this morning.",
      "I have written three emails this morning.",
      "I've sent three emails this morning.",
      "I've already written three emails this morning.",
      "This morning I've written three emails.",
    ],
    tempo: "present perfect",
    parole: [
      ["scrivere", "write", "verbo irregolare"],
      ["mandare", "send", "verbo irregolare"],
      ["stamattina", "this morning"],
    ],
    suggerimenti: [
      "La mattina non è finita. Ma attenzione: conta quante email (un risultato contabile), non quanto è durata l'attività. Simple o continuous?",
      "Present perfect SEMPLICE: ausiliare + il participio irregolare di «scrivere» + il numero + email + stamattina.",
    ],
    simile: "She's read four books this month.",
    spiegazione:
      "Con una quantità (three emails, four books) si usa il present perfect simple: conta il risultato. Il continuous si usa per la durata (I've been writing emails all morning).",
    lezione: "lezione 39{4}",
  },
  {
    id: "b1-ho-questa-bici",
    livello: "B1",
    contesto:
      "Un amico prende in giro la tua bici arrugginita. Tu ci sei affezionatissimo: ce l'hai da quando avevi dodici anni.",
    consegna: "Digli che hai questa bici da quando avevi dodici anni.",
    soluzioni: [
      "I've had this bike since I was twelve.",
      "I have had this bike since I was twelve.",
      "I've had this bike since I was 12.",
      "I've had it since I was twelve.",
      "I've had this bicycle since I was twelve.",
    ],
    tempo: "present perfect",
    parole: [
      ["avere (possedere)", "have", "verbo di stato in questo senso"],
      ["bici", "bike"],
      ["dodici", "twelve"],
    ],
    suggerimenti: [
      "La situazione è cominciata nel passato e continua. «Avere» nel senso di possedere è un verbo di stato: simple o continuous?",
      "Present perfect semplice: ausiliare + il participio di «avere» + la bici + «da quando» + io + passato di «essere» + l'età.",
    ],
    simile: "We've known each other since we were children.",
    spiegazione:
      "I verbi di stato (have = possedere, know, be) non vanno al continuous: I've had this bike (non «I've been having»). Since + frase al past simple.",
    lezione: "lezione 39{5}",
  },
  {
    id: "b1-lavoro-qui-da",
    livello: "B1",
    contesto:
      "Fai il cameriere part-time in un caffè di Oxford. Una cliente abituale ti chiede se sei nuovo: hai cominciato a marzo, sei mesi fa.",
    consegna: "Dille che lavori qui da sei mesi.",
    soluzioni: [
      "I've been working here for six months.",
      "I have been working here for six months.",
      "I've worked here for six months.",
      "I have worked here for six months.",
      "I've been working here for 6 months.",
    ],
    tempo: "present perfect continuous|present perfect",
    parole: [
      ["lavorare", "work"],
      ["qui", "here"],
      ["sei mesi", "six months"],
    ],
    suggerimenti: [
      "In italiano «lavoro qui da sei mesi», al presente. In inglese l'azione è cominciata nel passato e dura ancora. Quale tempo?",
      "Present perfect continuous (have + been + -ing) oppure simple: con work e live la differenza è minima. Poi la preposizione per una durata.",
    ],
    simile: "They've been living in Bath for two years.",
    spiegazione:
      "Con live e work il present perfect simple e continuous si equivalgono: I've worked / I've been working here for six months.",
    lezione: "lezione 39{6}",
  },
  {
    id: "b1-tag-negativa",
    livello: "B1",
    contesto:
      "Il tuo coinquilino è in pigiama sul divano alle otto di sera, e la festa comincia alle nove. Hai il sospetto che non abbia nessuna intenzione di venire.",
    consegna: "Chiediglielo con una frase negativa e una coda interrogativa («non vieni, vero?»).",
    soluzioni: [
      "You aren't coming, are you?",
      "You're not coming, are you?",
      "You are not coming, are you?",
      "You aren't coming to the party, are you?",
      "You're not coming to the party, are you?",
    ],
    tempo: "present continuous",
    parole: [["venire", "come"]],
    suggerimenti: [
      "Si parla di un programma per stasera: quale tempo si usa per i programmi? La frase è negativa: come sarà la coda?",
      "Present continuous negativo (you + «essere» con not + -ing) + virgola + coda: lo stesso ausiliare in forma AFFERMATIVA + il pronome.",
    ],
    simile: "She isn't English, is she?",
    spiegazione:
      "Frase negativa → coda affermativa: You aren't coming, are you? La coda riprende sempre l'ausiliare della frase.",
    lezione: "lezione 40{2}",
  },
  {
    id: "b1-tag-do",
    livello: "B1",
    contesto:
      "In biblioteca incontri un ragazzo che vedi sempre al supermercato sotto casa tua. Pensi che abiti nel tuo quartiere e vuoi una conferma.",
    consegna: "Chiedigli conferma: abiti qui vicino, vero?",
    soluzioni: [
      "You live near here, don't you?",
      "You live around here, don't you?",
      "You live nearby, don't you?",
      "You live near me, don't you?",
    ],
    tempo: "present simple",
    parole: [
      ["abitare", "live"],
      ["qui vicino", "near here / around here / nearby"],
    ],
    suggerimenti: [
      "È una situazione stabile: present simple affermativo. Ma per la coda serve un ausiliare e la frase non ne ha uno. Quale si usa?",
      "Frase affermativa al present simple + virgola + l'ausiliare del present simple al NEGATIVO + il pronome.",
    ],
    simile: "She works in a bank, doesn't she?",
    spiegazione:
      "Se la frase non ha ausiliari, la coda usa do/does/did: You live near here, don't you?",
    lezione: "lezione 40{3}",
  },
  {
    id: "b1-tag-passato",
    livello: "B1",
    contesto:
      "Sabato c'era la festa di Jack. Nelle foto su Instagram ti sembra di riconoscere la tua amica Lucy sullo sfondo. Le chiedi conferma.",
    consegna: "Chiedile conferma: sei andata alla festa, vero?",
    soluzioni: [
      "You went to the party, didn't you?",
      "You went to Jack's party, didn't you?",
      "You were at the party, weren't you?",
      "You were at Jack's party, weren't you?",
    ],
    tempo: "past simple",
    parole: [
      ["andare", "go", "verbo irregolare"],
      ["festa", "party"],
    ],
    suggerimenti: [
      "La festa è passata: quale tempo? La frase affermativa non ha ausiliari: quale ausiliare usa la coda al passato?",
      "Past simple irregolare di «andare» + alla festa + virgola + l'ausiliare del passato al negativo + il pronome.",
    ],
    simile: "You saw the film, didn't you?",
    spiegazione:
      "Al past simple la coda usa did: You went, didn't you? Con was/were la coda ripete be: You were there, weren't you?",
    lezione: "lezione 40{3}",
  },
  {
    id: "b1-tag-lets",
    livello: "B1",
    contesto:
      "Avete finito di cenare e la conversazione langue. Proponi agli amici di spostarvi in un pub lì vicino, con una coda per chiedere il loro parere.",
    consegna: "Proponi di andare al pub con una coda interrogativa («andiamo, che ne dite?»).",
    soluzioni: [
      "Let's go to the pub, shall we?",
      "Let's go, shall we?",
      "Let's go to the pub now, shall we?",
    ],
    tempo: "imperativo",
    parole: [
      ["andare", "go"],
      ["pub", "pub"],
    ],
    suggerimenti: [
      "È una proposta che include anche te. Quale forma? E la coda di questa forma è un caso speciale: quale modale si usa?",
      "La forma per «andiamo» + il pub + virgola + il modale delle proposte (prima persona plurale) + noi.",
    ],
    simile: "Let's start, shall we?",
    spiegazione:
      "La coda di Let's è sempre shall we? (Let's go, shall we?). È uno dei casi speciali delle tag questions.",
    lezione: "lezione 40{4}",
  },
  {
    id: "b1-tag-never",
    livello: "B1",
    contesto:
      "Organizzi un weekend in Galles con un amico. Dal suo entusiasmo capisci che non ci è mai stato e vuoi conferma.",
    consegna: "Chiedigli conferma: non sei mai stato in Galles, vero?",
    soluzioni: [
      "You've never been to Wales, have you?",
      "You have never been to Wales, have you?",
      "You've never been to Wales before, have you?",
    ],
    tempo: "present perfect",
    parole: [["Galles", "Wales"]],
    suggerimenti: [
      "È un'esperienza di tutta la vita: quale tempo? La frase contiene «mai», che è già negativo: come sarà la coda?",
      "Present perfect con never + virgola + coda con l'ausiliare in forma AFFERMATIVA (perché never rende negativa la frase) + il pronome.",
    ],
    simile: "Nobody called, did they?",
    spiegazione:
      "Never, nobody, nothing rendono negativa la frase: la coda è affermativa. You've never been to Wales, have you?",
    lezione: "lezione 40{5}",
  },
  {
    id: "b1-3c-treno",
    livello: "B1",
    contesto:
      "Siete arrivati in stazione due minuti dopo la partenza dell'ultimo treno. La tua amica aveva voluto fermarsi a comprare un caffè.",
    consegna: "Dille che se foste partiti prima, non avreste perso il treno.",
    soluzioni: [
      "If we had left earlier, we wouldn't have missed the train.",
      "If we'd left earlier, we wouldn't have missed the train.",
      "If we had left earlier, we would not have missed the train.",
      "We wouldn't have missed the train if we had left earlier.",
      "If we had left earlier, we wouldn't have missed it.",
    ],
    tempo: "conditional perfect",
    parole: [
      ["partire", "leave", "verbo irregolare"],
      ["prima (più presto)", "earlier"],
      ["perdere (un mezzo)", "miss"],
    ],
    suggerimenti: [
      "È un'ipotesi irreale sul passato: siete partiti tardi e il treno è perso. Quale periodo ipotetico?",
      "If + had + participio irregolare di «partire» + il comparativo di «presto»; poi would + not + have + il participio di «perdere».",
    ],
    simile: "If you had told me, I wouldn't have worried.",
    spiegazione:
      "Third conditional: if + past perfect, would (not) have + participio. Prima = earlier (before va usato come avverbio solo da solo).",
    lezione: "lezione 41{1}",
  },
  {
    id: "b1-avrei-potuto-aiutarti",
    livello: "B1",
    contesto:
      "Il tuo amico ha passato tutta la notte a sistemare da solo il computer. Tu sei un esperto di informatica, ma lui non ti ha chiesto niente.",
    consegna: "Digli che se te l'avesse chiesto, avresti potuto aiutarlo.",
    soluzioni: [
      "If you had asked me, I could have helped you.",
      "If you'd asked me, I could have helped you.",
      "If you had asked me, I could've helped you.",
      "I could have helped you if you had asked me.",
      "If you had asked me, I could have helped.",
    ],
    tempo: "could have",
    parole: [
      ["chiedere", "ask"],
      ["aiutare", "help"],
    ],
    suggerimenti: [
      "Ipotesi irreale sul passato, ma la conseguenza è una POSSIBILITÀ («avrei potuto»), non un fatto. Quale modale al posto di would?",
      "If + had + participio di «chiedere» + me; poi io + il passato del modale della possibilità + have + participio di «aiutare».",
    ],
    simile: "If I had known, I could have come earlier.",
    spiegazione:
      "Nel third conditional could have = avrei potuto, might have = forse avrei, would have = avrei.",
    lezione: "lezione 41{4}",
  },
  {
    id: "b1-wish-mangiato",
    livello: "B1",
    contesto:
      "Dopo il pranzo di Natale con la famiglia inglese che ti ospita (tacchino, patate, pudding, mince pies...) sei sul divano e non riesci a muoverti.",
    consegna: "Di' che vorresti non aver mangiato così tanto.",
    soluzioni: [
      "I wish I hadn't eaten so much.",
      "I wish I had not eaten so much.",
      "I wish I hadn't eaten so much!",
      "I wish I hadn't eaten that much.",
      "If only I hadn't eaten so much.",
    ],
    tempo: "past perfect",
    parole: [
      ["mangiare", "eat", "verbo irregolare"],
      ["così tanto", "so much"],
    ],
    suggerimenti: [
      "È un rimpianto per qualcosa di già fatto (nel passato). Quale tempo segue wish quando il rimpianto riguarda il passato?",
      "Wish + io + had not (contratto) + il participio irregolare di «mangiare» + «così tanto».",
    ],
    simile: "I wish I hadn't said that.",
    spiegazione:
      "Wish + past perfect = rimpianto sul passato (vorrei non aver...). Wish + past simple = desiderio sul presente.",
    lezione: "lezione 41{5}",
  },
  {
    id: "b1-cosa-avresti-fatto",
    livello: "B1",
    contesto:
      "Un amico ti racconta che in vacanza a Roma ha rischiato di perdere il passaporto, ma l'ha ritrovato all'ultimo. Gli fai una domanda ipotetica.",
    consegna: "Chiedigli che cosa avrebbe fatto se avesse perso il passaporto.",
    soluzioni: [
      "What would you have done if you had lost your passport?",
      "What would you have done if you'd lost your passport?",
      "If you had lost your passport, what would you have done?",
      "If you'd lost your passport, what would you have done?",
    ],
    tempo: "conditional perfect",
    parole: [
      ["fare", "do"],
      ["perdere", "lose", "verbo irregolare"],
      ["passaporto", "passport"],
    ],
    suggerimenti: [
      "È un'ipotesi irreale sul passato (non l'ha perso). Quale periodo ipotetico? Come si costruisce la domanda nella frase principale?",
      "Parola interrogativa + would + soggetto + have + participio di «fare»; poi if + soggetto + had + participio di «perdere».",
    ],
    simile: "Where would you have gone if you had had more money?",
    spiegazione:
      "Domande al third conditional: What would you have done if you had...? L'ausiliare would va prima del soggetto.",
    lezione: "lezione 41{6}",
  },
  {
    id: "b1-ri-will",
    livello: "B1",
    contesto:
      "Ieri il tecnico della caldaia ti ha detto al telefono: «I'll call you tomorrow». Oggi non si è fatto sentire e la tua coinquilina ti chiede notizie.",
    consegna: "Riferiscile che il tecnico ha detto che ti avrebbe chiamato.",
    soluzioni: [
      "He said he would call me.",
      "He said that he would call me.",
      "He said he'd call me.",
      "He told me he would call me.",
      "He said he would call me today.",
      "The engineer said he would call me.",
    ],
    tempo: "conditional",
    parole: [
      ["dire", "say / tell", "irregolari"],
      ["chiamare", "call"],
      ["tecnico", "engineer"],
    ],
    suggerimenti: [
      "Riferisci una promessa fatta nel passato. Che cosa succede a will nel discorso indiretto?",
      "Il passato di «dire» + lui + il passato di will (la stessa forma del condizionale) + verbo base + me.",
    ],
    simile: "She said she would help us.",
    spiegazione:
      "Nel discorso indiretto will diventa would: «I'll call you» → He said he would call me. Tomorrow diventa the next day (o today, se è già il giorno dopo).",
    lezione: "lezione 42{2}",
  },
  {
    id: "b1-ri-giorno-prima",
    livello: "B1",
    contesto:
      "La settimana scorsa la tua amica ti aveva detto: «I was at the museum yesterday». Ora racconti a un altro amico quello che ti aveva detto.",
    consegna: "Riferisci che aveva detto di essere stata al museo il giorno prima.",
    soluzioni: [
      "She said she had been at the museum the day before.",
      "She said that she had been at the museum the day before.",
      "She said she'd been at the museum the day before.",
      "She said she had been to the museum the day before.",
      "She said she had been at the museum the previous day.",
    ],
    tempo: "past perfect",
    parole: [
      ["dire", "say"],
      ["museo", "museum"],
      ["il giorno prima", "the day before / the previous day"],
    ],
    suggerimenti: [
      "Nel discorso indiretto i tempi fanno un passo indietro. Il past simple «I was» che cosa diventa? E «yesterday»?",
      "Il passato di «dire» + lei + had + il participio di «essere» + al museo + l'espressione che sostituisce «ieri» (il giorno prima).",
    ],
    simile: "He said he had seen her the week before.",
    spiegazione:
      "Discorso indiretto: past simple → past perfect, yesterday → the day before, here → there, this → that.",
    lezione: "lezione 42{4}",
  },
  {
    id: "b1-ri-dove-abitavo",
    livello: "B1",
    contesto:
      "Racconti a un'amica un incontro curioso alla fermata: una signora anziana ti ha fatto mille domande, tra cui «Where do you live?».",
    consegna: "Riferisci che ti ha chiesto dove abitavi.",
    soluzioni: [
      "She asked me where I lived.",
      "She asked where I lived.",
      "She asked me where I was living.",
      "She wanted to know where I lived.",
    ],
    tempo: "past simple|past continuous",
    parole: [
      ["chiedere", "ask"],
      ["abitare", "live"],
    ],
    suggerimenti: [
      "Riferisci una domanda fatta nel passato. Il tempo fa un passo indietro: present simple → ? E l'ordine delle parole resta quello della domanda?",
      "Il passato di «chiedere» + me + «dove» + soggetto + verbo al passato. Niente ausiliare do e niente inversione: l'ordine è quello di una frase normale.",
    ],
    simile: "He asked me what time it was.",
    spiegazione:
      "Domande indirette: niente do/did e ordine soggetto-verbo. She asked me where I lived (non «where did I live»).",
    lezione: "lezione 42{5}",
  },
  {
    id: "b1-ri-se",
    livello: "B1",
    contesto:
      "Al controllo passaporti l'agente, sentendo il tuo accento, ti ha chiesto: «Are you Italian?». Lo racconti a un amico.",
    consegna: "Riferisci che l'agente ti ha chiesto se eri italiano.",
    soluzioni: [
      "He asked me if I was Italian.",
      "He asked me whether I was Italian.",
      "He asked if I was Italian.",
      "The officer asked me if I was Italian.",
      "She asked me if I was Italian.",
    ],
    tempo: "past simple",
    parole: [
      ["chiedere", "ask"],
      ["italiano", "Italian", "con la maiuscola"],
    ],
    suggerimenti: [
      "È una domanda sì/no riferita nel passato. Quale parola introduce la domanda indiretta quando non c'è una parola interrogativa? E che cosa diventa «are»?",
      "Il passato di «chiedere» + me + la congiunzione che significa «se» + io + il passato di «essere» + italiano.",
    ],
    simile: "She asked me if I liked jazz.",
    spiegazione:
      "Le domande sì/no indirette si introducono con if o whether: He asked me if I was Italian.",
    lezione: "lezione 42{5}",
  },
  {
    id: "b1-ri-told",
    livello: "B1",
    contesto:
      "Ieri la tua collega ti ha detto in confidenza: «I'm leaving the company». Oggi un altro collega ti chiede se sai perché lei sembra così felice.",
    consegna: "Riferisci che ti ha detto che se ne andava dall'azienda.",
    soluzioni: [
      "She told me that she was leaving the company.",
      "She told me she was leaving the company.",
      "She told me that she was leaving.",
      "She told me she was leaving.",
      "She said she was leaving the company.",
      "She said that she was leaving.",
    ],
    tempo: "past continuous",
    parole: [
      ["dire (a qualcuno)", "tell", "vuole la persona: tell me"],
      ["andarsene / lasciare", "leave", "verbo irregolare"],
      ["azienda", "company"],
    ],
    suggerimenti: [
      "Nel discorso indiretto i tempi fanno un passo indietro. Il present continuous («I'm leaving») che cosa diventa?",
      "Il passato di «dire» che vuole la persona + me + (that) + lei + il passato di «essere» + «andarsene» in -ing + l'azienda.",
    ],
    simile: "He told me he was moving to Leeds.",
    spiegazione:
      "Tell vuole la persona (told me), say no (she said that...). Present continuous → past continuous: I'm leaving → she was leaving.",
    lezione: "lezione 42{3}",
  },
  {
    id: "b1-pass-futuro",
    livello: "B1",
    contesto:
      "Sei il rappresentante degli studenti. I tuoi compagni ti chiedono quando sapranno i voti dell'esame. Il dipartimento li pubblicherà la settimana prossima.",
    consegna: "Di' che i risultati verranno pubblicati la settimana prossima (forma passiva).",
    soluzioni: [
      "The results will be published next week.",
      "The results will be posted next week.",
      "The results will be published next week online.",
      "The results will be announced next week.",
      "They will be published next week.",
    ],
    tempo: "future simple",
    parole: [
      ["risultati", "results"],
      ["pubblicare", "publish / post"],
      ["annunciare", "announce"],
      ["la settimana prossima", "next week", "senza preposizione"],
    ],
    suggerimenti: [
      "Non importa chi li pubblica: contano i risultati. È nel futuro. Quale forma del verbo e quale tempo?",
      "Passivo al futuro: il modale del futuro + «essere» alla forma base + participio passato + quando.",
    ],
    simile: "The new library will be opened in May.",
    spiegazione:
      "Passivo al futuro: will be + participio. Next week non vuole preposizioni («in the next week» ha un altro senso).",
    lezione: "lezione 43{2}",
  },
  {
    id: "b1-pass-nato",
    livello: "B1",
    contesto:
      "In gita a Stratford-upon-Avon, un bambino del gruppo chiede alla guida perché tutti fotografano una vecchia casa a graticcio. Sei tu la guida.",
    consegna: "Spiega che Shakespeare è nato qui, a Stratford.",
    soluzioni: [
      "Shakespeare was born here.",
      "Shakespeare was born here, in Stratford.",
      "Shakespeare was born in Stratford.",
      "Shakespeare was born in this house.",
      "This is where Shakespeare was born.",
    ],
    tempo: "past simple",
    parole: [
      ["nascere", "be born"],
      ["qui", "here"],
      ["casa", "house"],
    ],
    suggerimenti: [
      "È un fatto concluso del passato. In inglese «nascere» è un passivo: quale forma di «essere» per una persona del passato?",
      "Shakespeare + il passato di «essere» (singolare) + il participio di «bear» + il luogo.",
    ],
    simile: "Mozart was born in Salzburg.",
    spiegazione:
      "Nascere = be born, sempre passivo: was born. Per un personaggio morto «Shakespeare is born» è sbagliato.",
    lezione: "lezione 43{5}",
  },
  {
    id: "b1-pass-by",
    livello: "B1",
    contesto:
      "Al quiz del pub chiedono: «Who wrote Hamlet?». Il tuo compagno di squadra pensa a Marlowe. Tu sei sicuro.",
    consegna: "Rispondi con una frase passiva: Amleto è stato scritto da Shakespeare.",
    soluzioni: [
      "Hamlet was written by Shakespeare.",
      "Hamlet was written by William Shakespeare.",
      "No, Hamlet was written by Shakespeare.",
      "It was written by Shakespeare.",
    ],
    tempo: "past simple",
    parole: [
      ["scrivere", "write", "verbo irregolare"],
      ["da (agente)", "by"],
    ],
    suggerimenti: [
      "L'opera è il soggetto (subisce l'azione), il fatto è concluso. Quale forma e quale tempo? Come si introduce chi ha fatto l'azione?",
      "Hamlet + il passato di «essere» + il participio irregolare di «scrivere» + la preposizione dell'agente + l'autore.",
    ],
    simile: "The Mona Lisa was painted by Leonardo.",
    spiegazione:
      "Nel passivo chi fa l'azione si introduce con by: written by Shakespeare. Il participio di write è written.",
    lezione: "lezione 43{1}",
  },
  {
    id: "b1-pass-modale",
    livello: "B1",
    contesto:
      "Stai preparando il cartello per la sala esami del college. Devi scrivere che i telefoni devono essere spenti.",
    consegna: "Scrivi che i cellulari devono essere spenti (passivo con modale).",
    soluzioni: [
      "Mobile phones must be switched off.",
      "Mobile phones must be turned off.",
      "Phones must be switched off.",
      "All mobile phones must be switched off.",
      "Mobile phones must be switched off during the exam.",
    ],
    tempo: "must",
    parole: [
      ["cellulare", "mobile phone"],
      ["spegnere", "switch off / turn off"],
      ["durante l'esame", "during the exam"],
    ],
    suggerimenti: [
      "È un obbligo, e non importa chi spegne i telefoni: contano i telefoni. Come si combina un modale con la forma passiva?",
      "Telefoni + il modale dell'obbligo + «essere» alla forma base + il participio del phrasal verb «spegnere».",
    ],
    simile: "The form must be signed by a parent.",
    spiegazione:
      "Passivo con un modale: modale + be + participio (must be switched off, can be found, should be done).",
    lezione: "lezione 43{2}",
  },
  {
    id: "b1-pass-continuous",
    livello: "B1",
    contesto:
      "Un amico in macchina ti chiede perché il navigatore lo manda per una strada lunghissima. Tu sai che la strada principale è chiusa per lavori in questi giorni.",
    consegna: "Spiegagli che stanno riparando la strada (passivo: la strada è in riparazione).",
    soluzioni: [
      "The road is being repaired.",
      "The main road is being repaired.",
      "The road is being repaired at the moment.",
      "The road's being repaired.",
      "It's being repaired.",
    ],
    tempo: "present continuous",
    parole: [
      ["strada", "road"],
      ["principale", "main"],
      ["riparare", "repair"],
    ],
    suggerimenti: [
      "L'azione è in corso adesso e non conta chi lavora: conta la strada. Quale tempo e quale forma?",
      "Passivo al present continuous: «essere» + il participio di «essere» in -ing + il participio di «riparare».",
    ],
    simile: "My car is being serviced today.",
    spiegazione:
      "Passivo al present continuous: am/is/are being + participio. The road is being repaired = stanno riparando la strada.",
    lezione: "lezione 43{2}",
  },
  {
    id: "b1-pass-persona",
    livello: "B1",
    contesto:
      "Tua zia ti chiede come fai a permetterti Oxford. Hai ricevuto una borsa di studio che copre tutte le tasse.",
    consegna: "Dille che ti hanno dato una borsa di studio (passivo con la persona come soggetto).",
    soluzioni: [
      "I was given a scholarship.",
      "I've been given a scholarship.",
      "I have been given a scholarship.",
      "I was given a full scholarship.",
      "I was awarded a scholarship.",
    ],
    tempo: "past simple|present perfect",
    parole: [
      ["dare", "give", "verbo irregolare"],
      ["borsa di studio", "scholarship"],
      ["assegnare", "award"],
    ],
    suggerimenti: [
      "In italiano diresti «mi hanno dato». In inglese il soggetto può essere la persona che riceve. Quale forma del verbo?",
      "Io + il passato di «essere» (o il present perfect passivo) + il participio irregolare di «dare» + la borsa di studio.",
    ],
    simile: "She was offered a job in London.",
    spiegazione:
      "Con give, offer, send, tell il passivo può avere come soggetto la persona: I was given a scholarship (= mi hanno dato).",
    lezione: "lezione 43{4}",
  },
  {
    id: "b1-rel-which",
    livello: "B1",
    contesto:
      "Il giorno dopo il cinema racconti a un collega del film che avete visto. Ti è piaciuto moltissimo.",
    consegna: "Di' che il film che avete visto ieri sera era fantastico (con «which»).",
    soluzioni: [
      "The film which we saw last night was amazing.",
      "The film that we saw last night was amazing.",
      "The film we saw last night was amazing.",
      "The film which we saw last night was great.",
      "The film which we saw last night was fantastic.",
      "The movie which we saw last night was amazing.",
    ],
    tempo: "past simple",
    parole: [
      ["film", "film / movie"],
      ["vedere", "see", "verbo irregolare"],
      ["fantastico", "amazing / great / fantastic"],
    ],
    suggerimenti: [
      "Due fatti passati: la visione e il giudizio. Quale tempo? Il film è una cosa: quale pronome relativo si usa per le cose?",
      "Il film + il relativo per le cose + noi + passato irregolare di «vedere» + ieri sera + passato di «essere» + aggettivo.",
    ],
    simile: "The cake which you made was delicious.",
    spiegazione:
      "Which (o that) per le cose, who per le persone. Quando il relativo è complemento si può omettere: the film we saw.",
    lezione: "lezione 44{1}",
  },
  {
    id: "b1-rel-where",
    livello: "B1",
    contesto:
      "Accompagni un amico a vedere la casa in Northmoor Road dove Tolkien scrisse Lo Hobbit. Vi fermate davanti al cancello.",
    consegna: "Digli che questa è la casa dove viveva Tolkien.",
    soluzioni: [
      "This is the house where Tolkien lived.",
      "This is the house where Tolkien used to live.",
      "This is the house where Tolkien wrote The Hobbit.",
      "This is the house in which Tolkien lived.",
      "This is the house that Tolkien lived in.",
    ],
    tempo: "past simple|used to",
    parole: [
      ["casa", "house"],
      ["vivere", "live"],
      ["scrivere", "write", "verbo irregolare"],
    ],
    suggerimenti: [
      "Indichi un luogo adesso e dici che cosa vi succedeva nel passato. Quali tempi? Per un luogo, quale relativo si usa?",
      "Il dimostrativo + «essere» + la casa + il relativo per i luoghi + Tolkien + il past simple di «vivere».",
    ],
    simile: "That's the café where we first met.",
    spiegazione:
      "Where è il relativo per i luoghi (= in which). The house where Tolkien lived.",
    lezione: "lezione 44{1}",
  },
  {
    id: "b1-rel-whose",
    livello: "B1",
    contesto:
      "In mensa un'amica ti indica un ragazzo con l'aria disperata. Tu lo conosci: è quello a cui ieri hanno rubato la bici fuori dalla biblioteca.",
    consegna: "Dille che è lo studente a cui hanno rubato la bici (con «whose»).",
    soluzioni: [
      "That's the student whose bike was stolen.",
      "That is the student whose bike was stolen.",
      "He's the student whose bike was stolen.",
      "That's the student whose bike was stolen yesterday.",
      "That's the guy whose bike was stolen.",
    ],
    tempo: "past simple",
    parole: [
      ["studente", "student"],
      ["bici", "bike"],
      ["rubare", "steal", "verbo irregolare"],
    ],
    suggerimenti: [
      "Indichi una persona e aggiungi un'informazione su qualcosa che le apparteneva. Quale relativo esprime il possesso («il cui»)?",
      "Quello è lo studente + il relativo del possesso + la bici + il passivo al passato (il passato di «essere» + il participio di «rubare»).",
    ],
    simile: "She's the woman whose son won the prize.",
    spiegazione:
      "Whose = il cui, la cui, di cui: the student whose bike was stolen. È seguito subito dal nome posseduto.",
    lezione: "lezione 44{1}",
  },
  {
    id: "b1-rel-non-defining",
    livello: "B1",
    contesto:
      "Presenti la tua famiglia in un tema. Hai una sola sorella, che vive a Roma e fa il medico. Vuoi aggiungere l'informazione su Roma come inciso.",
    consegna: "Scrivi che tua sorella, che vive a Roma, è medico.",
    soluzioni: [
      "My sister, who lives in Rome, is a doctor.",
      "My sister, who lives in Rome, works as a doctor.",
      "My sister, who lives in Rome, is a GP.",
    ],
    tempo: "present simple",
    parole: [
      ["sorella", "sister"],
      ["vivere", "live"],
      ["Roma", "Rome"],
      ["medico", "doctor"],
    ],
    suggerimenti: [
      "Situazioni stabili: quale tempo? L'informazione su Roma è un inciso (hai una sola sorella): che cosa la racchiude? E si può usare that?",
      "Mia sorella + virgola + il relativo per le persone (non that) + present simple + virgola + «essere» + articolo + professione.",
    ],
    simile: "Oxford, which is about an hour from London, has 39 colleges.",
    spiegazione:
      "Le relative non restrittive (incisi) stanno tra virgole e non accettano that: My sister, who lives in Rome, ... Anche qui la professione vuole a.",
    lezione: "lezione 44{4}",
  },
  {
    id: "b1-rel-preposizione",
    livello: "B1",
    contesto:
      "La settimana scorsa avevi parlato al tuo amico di un appartamento in affitto vicino al centro. Ora ci passate davanti.",
    consegna: "Digli che questo è l'appartamento di cui gli avevi parlato (preposizione in fondo).",
    soluzioni: [
      "This is the flat I told you about.",
      "This is the flat that I told you about.",
      "This is the flat which I told you about.",
      "This is the flat I was telling you about.",
      "That's the flat I told you about.",
    ],
    tempo: "past simple|past continuous",
    parole: [
      ["appartamento", "flat", "apartment è americano"],
      ["parlare di (a qualcuno)", "tell (someone) about"],
    ],
    suggerimenti: [
      "Indichi una cosa adesso e ricordi un fatto passato. Quali tempi? In inglese parlato la preposizione di «di cui» non va all'inizio: dove va?",
      "Questo è l'appartamento + (relativo, si può omettere) + io + passato di «dire» + te + la preposizione «di/riguardo a» IN FONDO alla frase.",
    ],
    simile: "Is this the song you were talking about?",
    spiegazione:
      "Nell'inglese parlato la preposizione va in fondo alla relativa: the flat I told you about. «About which I told you» è formale.",
    lezione: "lezione 44{5}",
  },
  {
    id: "b1-rel-omessa-persona",
    livello: "B1",
    contesto:
      "Alla festa hai visto la tua amica chiacchierare a lungo con una ragazza bionda che non conosci. Più tardi le chiedi chi fosse.",
    consegna: "Chiedile chi era la ragazza con cui stava parlando.",
    soluzioni: [
      "Who was the girl you were talking to?",
      "Who was that girl you were talking to?",
      "Who's the girl you were talking to?",
      "Who is the girl you were talking to?",
      "Who was the girl that you were talking to?",
    ],
    tempo: "past continuous",
    parole: [
      ["ragazza", "girl"],
      ["parlare con", "talk to"],
    ],
    suggerimenti: [
      "La conversazione era in corso alla festa: quale tempo per la relativa? E il pronome relativo, che è complemento, è necessario?",
      "«Chi» + «essere» + la ragazza + (relativo omesso) + tu + past continuous di «parlare» + la preposizione in fondo.",
    ],
    simile: "What's the name of the book you're reading?",
    spiegazione:
      "Il relativo complemento si omette spesso nel parlato: the girl (who) you were talking to. La preposizione resta in fondo.",
    lezione: "lezione 44{3}",
  },
  {
    id: "b1-rel-what",
    livello: "B1",
    contesto:
      "Il tuo tutor usa un'espressione idiomatica che non conosci e poi ti guarda aspettando una risposta. Sei un po' imbarazzato.",
    consegna: "Digli che non capisci che cosa intende.",
    soluzioni: [
      "I don't understand what you mean.",
      "Sorry, I don't understand what you mean.",
      "I'm sorry, I don't understand what you mean.",
      "I'm not sure what you mean.",
      "Sorry, I'm not sure what you mean.",
    ],
    tempo: "present simple",
    parole: [
      ["capire", "understand"],
      ["intendere / voler dire", "mean"],
    ],
    suggerimenti: [
      "Sono due stati presenti (capire, voler dire), tutti e due verbi di stato. Quale tempo? E come si dice «quello che / ciò che»?",
      "Negativa del present simple di «capire» + la parola che significa «ciò che» + tu + il verbo «voler dire», senza ausiliari né inversione.",
    ],
    simile: "I don't know what she wants.",
    spiegazione:
      "What = ciò che, quello che: I don't understand what you mean. Mean = voler dire (non «want to say»).",
    lezione: "lezione 44{6}",
  },
  {
    id: "b1-forse-biblioteca",
    livello: "B1",
    contesto:
      "Un compagno cerca la vostra amica Sarah e ti chiede dov'è. Non lo sai con certezza, ma spesso il pomeriggio studia in biblioteca.",
    consegna: "Digli che forse è in biblioteca.",
    soluzioni: [
      "She might be at the library.",
      "She may be at the library.",
      "She could be at the library.",
      "She might be in the library.",
      "She may be in the library.",
      "She could be in the library.",
    ],
    tempo: "might|may|could",
    parole: [["biblioteca", "library"]],
    suggerimenti: [
      "Non è una certezza, è un'ipotesi possibile sul presente. Quale modale esprime «forse è...»?",
      "Lei + un modale di possibilità + «essere» alla forma base + la preposizione di luogo + la biblioteca.",
    ],
    simile: "He might be stuck in traffic.",
    spiegazione:
      "Might, may e could + verbo base esprimono una possibilità («forse»). Must be = quasi sicuro; can't be = impossibile.",
    lezione: "lezione 45{4}",
  },
  {
    id: "b1-devono-fare-festa",
    livello: "B1",
    contesto:
      "Sono le undici di sera e dall'appartamento di sotto arrivano musica altissima, risate e il tintinnio di bicchieri. La tua coinquilina sbuffa.",
    consegna: "Dille che devono star facendo una festa (deduzione su un'azione in corso).",
    soluzioni: [
      "They must be having a party.",
      "They must be having a party!",
      "The neighbours must be having a party.",
      "They must be having a party downstairs.",
    ],
    tempo: "must",
    parole: [
      ["fare una festa", "have a party"],
      ["vicini", "neighbours"],
      ["di sotto", "downstairs"],
    ],
    suggerimenti: [
      "È una deduzione quasi certa su un'azione in corso adesso. Quale modale? E come si combina con il continuous?",
      "Loro + il modale della deduzione + «essere» alla forma base + «avere» in -ing + una festa.",
    ],
    simile: "She must be sleeping, the lights are off.",
    spiegazione:
      "Deduzione su un'azione in corso: must/might/can't + be + -ing. «Fare una festa» = have a party.",
    lezione: "lezione 45{6}",
  },
  {
    id: "b1-non-puo-aver-finito",
    livello: "B1",
    contesto:
      "Il tuo coinquilino dice di aver già finito il saggio di 5000 parole che il professore ha assegnato due ore fa. Ti sembra assolutamente impossibile.",
    consegna: "Di' a un amico che non può aver già finito.",
    soluzioni: [
      "He can't have finished already.",
      "He can't have finished it already.",
      "He cannot have finished already.",
      "He can't have finished yet.",
      "He can't have finished the essay already.",
      "He couldn't have finished already.",
    ],
    tempo: "can|could",
    parole: [
      ["finire", "finish"],
      ["già", "already"],
      ["saggio", "essay"],
    ],
    suggerimenti: [
      "È una deduzione negativa sicura, su qualcosa che riguarda il passato. Quale modale per «è impossibile»? E come si sposta nel passato?",
      "Lui + il modale della possibilità al negativo + have + participio di «finire» + già.",
    ],
    simile: "She can't have seen us, it was too dark.",
    spiegazione:
      "Can't have + participio = non può aver... (impossibile nel passato). Il contrario è must have + participio.",
    lezione: "lezione 45{5}",
  },
  {
    id: "b1-forse-perso-autobus",
    livello: "B1",
    contesto:
      "La tua amica doveva arrivare alle sette per la cena ed è in ritardo di mezz'ora, senza avvisare. Gli altri ospiti si preoccupano.",
    consegna: "Di' che forse ha perso l'autobus.",
    soluzioni: [
      "She might have missed the bus.",
      "She may have missed the bus.",
      "She could have missed the bus.",
      "Maybe she missed the bus.",
      "She might've missed the bus.",
    ],
    tempo: "might have|may have|could have|past simple",
    parole: [
      ["perdere (un mezzo)", "miss"],
      ["autobus", "bus"],
    ],
    suggerimenti: [
      "È un'ipotesi possibile su qualcosa che potrebbe essere già successo. Quale modale di possibilità, e come si sposta nel passato?",
      "Lei + il modale della possibilità + have + participio del verbo «perdere» un mezzo + l'autobus.",
    ],
    simile: "He might have forgotten about the meeting.",
    spiegazione:
      "Might/may/could have + participio = forse ha... (possibilità nel passato).",
    lezione: "lezione 45{5}",
  },
  {
    id: "b1-fare-compiti",
    livello: "B1",
    contesto:
      "Il fratellino della famiglia che ti ospita ti chiede di giocare a calcio in giardino. Tu hai una consegna domattina e sei indietro.",
    consegna: "Digli che non puoi, devi fare i compiti.",
    soluzioni: [
      "Sorry, I have to do my homework.",
      "I can't, I have to do my homework.",
      "Sorry, I can't. I have to do my homework.",
      "I have to do my homework.",
      "I can't, I've got to do my homework.",
    ],
    tempo: "have to|can",
    parole: [
      ["compiti", "homework", "non numerabile"],
      ["mi dispiace", "sorry"],
    ],
    suggerimenti: [
      "È un obbligo che hai adesso. Quale forma usi? E «fare i compiti»: do o make?",
      "Io + la forma dell'obbligo con «avere» + to + il verbo «fare» che si usa per compiti e lavori + il possessivo + compiti (singolare).",
    ],
    simile: "I need to do the washing-up.",
    spiegazione:
      "Do si usa per lavori e attività (do homework, do the shopping, do exercise). Homework è non numerabile: niente -s.",
    lezione: "lezione 46{2}",
  },
  {
    id: "b1-prendere-decisione",
    livello: "B1",
    contesto:
      "Tu e i tuoi coinquilini discutete da un'ora se rinnovare il contratto d'affitto. Il padrone di casa vuole una risposta entro stasera.",
    consegna: "Di' che dovete prendere una decisione.",
    soluzioni: [
      "We need to make a decision.",
      "We have to make a decision.",
      "We need to make a decision tonight.",
      "We have to make a decision today.",
      "We must make a decision.",
      "We've got to make a decision.",
    ],
    tempo: "have to|must|present simple|have got",
    parole: [
      ["avere bisogno di / dovere", "need to / have to"],
      ["decisione", "decision"],
    ],
    suggerimenti: [
      "È una necessità adesso. Quale verbo o modale usi? E «prendere una decisione»: in inglese il verbo non è «prendere».",
      "Noi + «avere bisogno di» + to + il verbo «fare» che si usa per creare o produrre + una decisione.",
    ],
    simile: "I need to make a phone call.",
    spiegazione:
      "Prendere una decisione = make a decision (non «take», che è più raro). Make si usa per creare: make a decision, a mistake, a plan.",
    lezione: "lezione 46{3}",
  },
  {
    id: "b1-mi-ha-fatto-piangere",
    livello: "B1",
    contesto:
      "Ieri sera hai visto un film commovente sulla Seconda guerra mondiale. Una collega ti chiede com'era.",
    consegna: "Dille che il film ti ha fatto piangere.",
    soluzioni: [
      "That film made me cry.",
      "The film made me cry.",
      "It made me cry.",
      "That film really made me cry.",
      "It was so sad, it made me cry.",
    ],
    tempo: "past simple",
    parole: [
      ["fare (fare fare)", "make", "verbo irregolare"],
      ["piangere", "cry"],
    ],
    suggerimenti: [
      "È un fatto concluso (ieri sera). Quale tempo? «Fare + verbo» (causare una reazione) in inglese usa make: e dopo, il verbo va con o senza to?",
      "Il film + il passato irregolare di make + me + il verbo «piangere» alla forma base, senza to.",
    ],
    simile: "That joke made everyone laugh.",
    spiegazione:
      "Make + persona + verbo base (senza to): it made me cry, she made me laugh. «Made me to cry» è sbagliato.",
    lezione: "lezione 46{5}",
  },
  {
    id: "b1-favore",
    livello: "B1",
    contesto:
      "Devi partire per il weekend e il tuo coinquilino è l'unico che resta in casa. Hai bisogno di chiedergli una cortesia.",
    consegna: "Chiedigli se può farti un favore.",
    soluzioni: [
      "Could you do me a favour?",
      "Can you do me a favour?",
      "Could you do me a favour, please?",
      "Would you do me a favour?",
      "Could I ask you a favour?",
    ],
    tempo: "could|can|conditional",
    parole: [["favore", "favour", "americano: favor"]],
    suggerimenti: [
      "È una richiesta cortese. Quale modale? E «fare un favore»: do o make?",
      "Modale cortese + tu + il verbo «fare» delle attività + me + un favore.",
    ],
    simile: "Could you do me a quick favour?",
    spiegazione:
      "Fare un favore = do someone a favour (non «make»). Could you do me a favour? è la formula più comune.",
    lezione: "lezione 46{2}",
  },
  {
    id: "b1-badare-gatto",
    livello: "B1",
    contesto:
      "Vai in Italia per una settimana e la tua gatta Mimi resta sola. La tua vicina ama gli animali.",
    consegna: "Chiedile se può badare al tuo gatto.",
    soluzioni: [
      "Can you look after my cat?",
      "Could you look after my cat?",
      "Could you look after my cat, please?",
      "Can you look after my cat while I'm away?",
      "Could you look after my cat next week?",
      "Would you mind looking after my cat?",
    ],
    tempo: "can|could|conditional",
    parole: [
      ["badare a / prendersi cura di", "look after", "phrasal verb"],
      ["gatto", "cat"],
      ["mentre sono via", "while I'm away"],
    ],
    suggerimenti: [
      "È una richiesta cortese. Quale modale? «Badare a» in inglese è un phrasal verb con il verbo «guardare»: quale particella?",
      "Modale + tu + «guardare» + la particella che significa «dietro/dopo» + il possessivo + gatto.",
    ],
    simile: "Who looks after the children when you're at work?",
    spiegazione:
      "Look after = badare a, prendersi cura di. Look for = cercare, look at = guardare: la particella cambia il significato.",
    lezione: "lezione 47{5}",
  },
  {
    id: "b1-smesso-fumare",
    livello: "B1",
    contesto:
      "Un vecchio amico ti offre una sigaretta, come ai tempi del liceo. Tu non fumi più: hai smesso tre mesi fa e ne sei fiero.",
    consegna: "Digli che hai smesso di fumare (phrasal verb).",
    soluzioni: [
      "I've given up smoking.",
      "I have given up smoking.",
      "No thanks, I've given up smoking.",
      "No thanks, I've given up.",
      "I've given up smoking, actually.",
    ],
    tempo: "present perfect",
    parole: [
      ["smettere / rinunciare a", "give up", "phrasal verb; give è irregolare"],
      ["fumare", "smoke"],
    ],
    suggerimenti: [
      "Hai smesso nel passato e il risultato vale adesso (non fumi). Quale tempo? «Smettere (un'abitudine)» si dice con un phrasal verb con «dare».",
      "Present perfect: ausiliare + il participio irregolare di give + la particella «su» + il verbo «fumare» in -ing.",
    ],
    simile: "She's given up chocolate for Lent.",
    spiegazione:
      "Give up = smettere, rinunciare a; dopo vuole -ing: give up smoking. Il participio di give è given.",
    lezione: "lezione 47{6}",
  },
  {
    id: "b1-abbassare-musica",
    livello: "B1",
    contesto:
      "Sono le due di notte e hai un esame alle nove. Dalla camera del tuo coinquilino arriva musica a tutto volume. Bussi.",
    consegna: "Chiedigli se può abbassare la musica.",
    soluzioni: [
      "Could you turn the music down?",
      "Could you turn the music down, please?",
      "Can you turn the music down, please?",
      "Could you turn down the music?",
      "Could you turn it down, please?",
    ],
    tempo: "could|can",
    parole: [
      ["abbassare (il volume)", "turn down", "phrasal verb separabile"],
      ["musica", "music"],
    ],
    suggerimenti: [
      "È una richiesta cortese. Quale modale? «Abbassare» il volume è un phrasal verb con «girare». Quale particella?",
      "Modale + tu + «girare» + la musica + la particella che significa «giù» (oppure la particella prima della musica).",
    ],
    simile: "Can you turn the heating up?",
    spiegazione:
      "Turn down = abbassare, turn up = alzare (il volume, il riscaldamento). È separabile: turn the music down, turn it down.",
    lezione: "lezione 47{3}",
  },
  {
    id: "b1-scoperto",
    livello: "B1",
    contesto:
      "Hai appena aperto l'email con i risultati dell'esame di guida, che temevi tantissimo. Promosso! Chiami subito tua madre.",
    consegna: "Dille che hai appena scoperto di aver passato l'esame.",
    soluzioni: [
      "I've just found out that I passed!",
      "I've just found out that I passed.",
      "I've just found out I passed!",
      "I've just found out that I passed my driving test!",
      "I have just found out that I passed!",
    ],
    tempo: "present perfect",
    parole: [
      ["scoprire (un'informazione)", "find out", "phrasal verb; find è irregolare"],
      ["superare (un esame)", "pass"],
      ["esame di guida", "driving test"],
    ],
    suggerimenti: [
      "La scoperta è di pochi secondi fa: quale tempo, con quale avverbio («appena»)? E «scoprire un'informazione» si dice con un phrasal verb con «trovare».",
      "Ausiliare + l'avverbio «appena» + il participio irregolare di find + la particella «fuori» + (that) + io + past simple di «superare».",
    ],
    simile: "I've just found out that my flight is delayed.",
    spiegazione:
      "Find out = scoprire un'informazione (discover è più formale, per una scoperta vera). Just + present perfect per una cosa appena successa.",
    lezione: "lezione 47{2}",
  },
  {
    id: "b1-vado-d-accordo",
    livello: "B1",
    contesto:
      "Tua madre ti chiede come va con i quattro ragazzi con cui condividi la casa. Va tutto benissimo: non avete mai litigato.",
    consegna: "Dille che vai d'accordo con i tuoi coinquilini.",
    soluzioni: [
      "I get on well with my flatmates.",
      "I get on with my flatmates.",
      "I get on really well with my flatmates.",
      "I get along well with my flatmates.",
      "I get on very well with my flatmates.",
    ],
    tempo: "present simple",
    parole: [
      ["andare d'accordo (con)", "get on (with) / get along (with)", "phrasal verb"],
      ["coinquilini", "flatmates"],
    ],
    suggerimenti: [
      "È una situazione stabile. Quale tempo? «Andare d'accordo» è un phrasal verb con get: quale particella, e quale preposizione prima della persona?",
      "Io + get + la particella «su» + bene + la preposizione «con» + i coinquilini.",
    ],
    simile: "She gets on well with her boss.",
    spiegazione:
      "Get on (well) with someone = andare d'accordo (britannico); get along with è più americano.",
    lezione: "lezione 47{5}",
  },
  {
    id: "b1-non-rimandare",
    livello: "B1",
    contesto:
      "La tua amica deve chiamare la banca per un problema col conto, ma da due settimane continua a dire «lo faccio domani».",
    consegna: "Dille di non rimandare (phrasal verb).",
    soluzioni: [
      "Don't put it off.",
      "Don't put it off!",
      "Don't put it off any longer.",
      "Stop putting it off!",
      "Don't put it off again.",
    ],
    tempo: "imperativo",
    parole: [
      ["rimandare", "put off", "phrasal verb separabile"],
      ["più a lungo", "any longer"],
    ],
    suggerimenti: [
      "È un consiglio diretto, negativo. Quale modo verbale? «Rimandare» è un phrasal verb con put: quale particella? E dove va il pronome?",
      "Imperativo negativo + put + il pronome per «la cosa» + la particella (il pronome va in mezzo).",
    ],
    simile: "Don't throw it away!",
    spiegazione:
      "Put off = rimandare. Con un pronome il phrasal verb separabile si divide: put it off (mai «put off it»).",
    lezione: "lezione 47{6}",
  },
  {
    id: "b1-smesso-di",
    livello: "B1",
    contesto:
      "Parli di tua sorella, che fumava un pacchetto al giorno. L'anno scorso ha smesso definitivamente e ora corre le maratone.",
    consegna: "Di' che ha smesso di fumare l'anno scorso (con stop).",
    soluzioni: [
      "She stopped smoking last year.",
      "My sister stopped smoking last year.",
      "She gave up smoking last year.",
      "Last year she stopped smoking.",
    ],
    tempo: "past simple",
    parole: [
      ["smettere", "stop"],
      ["fumare", "smoke"],
      ["l'anno scorso", "last year"],
    ],
    suggerimenti: [
      "È un fatto concluso in un momento preciso. Quale tempo? Attenzione: stop + -ing e stop + to hanno significati diversi. Quale vuoi?",
      "Lei + il passato di stop (raddoppia la p) + il verbo «fumare» in -ing + l'anno scorso.",
    ],
    simile: "He stopped eating meat two years ago.",
    spiegazione:
      "Stop + -ing = smettere di fare. Stop + to = fermarsi per fare: she stopped to smoke = si è fermata per fumare!",
    lezione: "lezione 48{6}",
  },
  {
    id: "b1-ricordati-di",
    livello: "B1",
    contesto:
      "Esci per primo la mattina e la tua coinquilina è sempre l'ultima ad andarsene. Ieri ha lasciato la porta aperta tutto il giorno.",
    consegna: "Ricordale di chiudere a chiave la porta.",
    soluzioni: [
      "Remember to lock the door.",
      "Please remember to lock the door.",
      "Remember to lock the door!",
      "Don't forget to lock the door.",
      "Don't forget to lock the door!",
    ],
    tempo: "imperativo",
    parole: [
      ["ricordarsi", "remember", "non è riflessivo"],
      ["dimenticare", "forget"],
      ["chiudere a chiave", "lock"],
    ],
    suggerimenti: [
      "È un'esortazione diretta. Quale modo verbale? Remember + to e remember + -ing hanno significati diversi: qui l'azione è da fare in futuro.",
      "Imperativo di «ricordarsi» + to + «chiudere a chiave» + la porta.",
    ],
    simile: "Remember to buy some milk.",
    spiegazione:
      "Remember to + verbo = ricordarsi di fare (dopo). Remember + -ing = ricordare di aver fatto (prima): I remember locking it.",
    lezione: "lezione 48{6}",
  },
  {
    id: "b1-deciso-di",
    livello: "B1",
    contesto:
      "Dopo mesi di dubbi, hai scelto: il prossimo anno farai l'Erasmus in Germania. Lo annunci ai tuoi amici a cena.",
    consegna: "Di' che hai deciso di studiare all'estero.",
    soluzioni: [
      "I've decided to study abroad.",
      "I have decided to study abroad.",
      "I've decided to study abroad next year.",
      "I've decided to study in Germany next year.",
      "I've decided to go abroad to study.",
    ],
    tempo: "present perfect",
    parole: [
      ["decidere", "decide"],
      ["studiare", "study"],
      ["all'estero", "abroad", "senza preposizione"],
    ],
    suggerimenti: [
      "La decisione è appena presa e vale adesso (è una notizia). Quale tempo? Dopo decide, il verbo va con to o con -ing?",
      "Present perfect di «decidere» + to + verbo base + l'avverbio «all'estero» (senza preposizioni prima).",
    ],
    simile: "We've decided to sell the car.",
    spiegazione:
      "Decide, want, hope, plan, agree vogliono to + verbo base. Abroad è un avverbio: «to study in abroad» è sbagliato.",
    lezione: "lezione 48{3}",
  },
  {
    id: "b1-nuotare-fa-bene",
    livello: "B1",
    contesto:
      "Il tuo amico si lamenta del mal di schiena. Tu hai risolto lo stesso problema andando in piscina due volte a settimana.",
    consegna: "Digli che nuotare fa bene (il gerundio come soggetto).",
    soluzioni: [
      "Swimming is good for you.",
      "Swimming is really good for you.",
      "Swimming is good for your back.",
      "Swimming is very good for you.",
    ],
    tempo: "present simple",
    parole: [
      ["nuotare / il nuoto", "swim / swimming"],
      ["fare bene (a)", "be good for"],
      ["schiena", "back"],
    ],
    suggerimenti: [
      "È una verità generale. Quale tempo? In italiano il soggetto è un infinito («nuotare»). In inglese, quando un verbo fa da soggetto, che forma prende?",
      "Il verbo «nuotare» in -ing (la m raddoppia) + «essere» + buono + «per» + te.",
    ],
    simile: "Reading helps you relax.",
    spiegazione:
      "Un verbo usato come soggetto va in -ing: Swimming is good for you. «To swim is good» è possibile ma molto formale.",
    lezione: "lezione 48{5}",
  },
  {
    id: "b1-evito",
    livello: "B1",
    contesto:
      "Un amico ti chiede perché per andare a Londra prendi sempre il treno, anche se hai la macchina. Il traffico e i parcheggi ti fanno impazzire.",
    consegna: "Digli che eviti di guidare a Londra.",
    soluzioni: [
      "I avoid driving in London.",
      "I always avoid driving in London.",
      "I try to avoid driving in London.",
      "I avoid driving in London if I can.",
    ],
    tempo: "present simple",
    parole: [
      ["evitare", "avoid"],
      ["guidare", "drive"],
    ],
    suggerimenti: [
      "È un'abitudine. Quale tempo? Dopo avoid il verbo va con to o con -ing?",
      "Io + «evitare» + il verbo «guidare» in -ing (la e cade) + a Londra.",
    ],
    simile: "She avoids eating late at night.",
    spiegazione:
      "Avoid, enjoy, finish, mind, suggest vogliono -ing: I avoid driving. «I avoid to drive» è sbagliato.",
    lezione: "lezione 48{2}",
  },
  {
    id: "b1-senza-salutare",
    livello: "B1",
    contesto:
      "Alla festa il tuo amico Tom era nervoso. A un certo punto è sparito: non ha detto niente a nessuno. Oggi un'amica ti chiede che fine abbia fatto.",
    consegna: "Rispondi che se n'è andato senza salutare.",
    soluzioni: [
      "He left without saying goodbye.",
      "Tom left without saying goodbye.",
      "He left without saying goodbye to anyone.",
      "He went home without saying goodbye.",
    ],
    tempo: "past simple",
    parole: [
      ["andarsene", "leave", "verbo irregolare"],
      ["senza", "without"],
      ["salutare (andando via)", "say goodbye"],
    ],
    suggerimenti: [
      "È un fatto concluso. Quale tempo? Dopo una preposizione come «senza», che forma prende il verbo in inglese?",
      "Lui + il passato irregolare di «andarsene» + la preposizione «senza» + «dire» in -ing + arrivederci.",
    ],
    simile: "She passed the exam without studying much.",
    spiegazione:
      "Dopo una preposizione (without, before, after, of, for) il verbo va in -ing: without saying. «Without to say» è sbagliato.",
    lezione: "lezione 48{4}",
  },
  {
    id: "b1-dipende",
    livello: "B1",
    contesto:
      "Un amico ti chiede se domenica andrete a fare il picnic a Port Meadow. Non lo sai ancora: è stata prevista pioggia.",
    consegna: "Rispondi che dipende dal tempo.",
    soluzioni: [
      "It depends on the weather.",
      "It depends on the weather!",
      "I don't know, it depends on the weather.",
      "That depends on the weather.",
    ],
    tempo: "present simple",
    parole: [
      ["dipendere (da)", "depend (on)"],
      ["tempo (atmosferico)", "weather"],
    ],
    suggerimenti: [
      "È una situazione presente. Quale tempo (soggetto impersonale, terza persona)? «Dipendere DA»: in inglese la preposizione non è from.",
      "Soggetto impersonale + «dipendere» con la -s + la preposizione «su» + il tempo atmosferico (con l'articolo).",
    ],
    simile: "The price depends on the size.",
    spiegazione:
      "Depend on, non «depend from»: è una preposizione retta da imparare. Il tempo atmosferico = the weather (time è il tempo che passa).",
    lezione: "lezione 49{2}",
  },
  {
    id: "b1-interessato",
    livello: "B1",
    contesto:
      "Al colloquio per un posto da guida turistica al castello di Oxford ti chiedono perché vuoi quel lavoro. Ami da sempre il Medioevo.",
    consegna: "Di' che sei molto interessato alla storia.",
    soluzioni: [
      "I'm very interested in history.",
      "I am very interested in history.",
      "I'm really interested in history.",
      "I'm interested in history.",
      "I'm very interested in medieval history.",
    ],
    tempo: "present simple",
    parole: [
      ["interessato", "interested", "interesting = interessante"],
      ["storia", "history", "story = racconto"],
    ],
    suggerimenti: [
      "È uno stato stabile. Quale verbo e quale tempo? Che preposizione segue interested? E quale aggettivo descrive come ti senti tu (non come è la cosa)?",
      "Io + «essere» + molto + l'aggettivo in -ed + la preposizione «in» + storia (senza articolo).",
    ],
    simile: "She's interested in politics.",
    spiegazione:
      "Interested in: preposizione in. -ed descrive chi prova (I'm interested), -ing la cosa (history is interesting).",
    lezione: "lezione 49{4}",
  },
  {
    id: "b1-brava-in",
    livello: "B1",
    contesto:
      "Il tuo amico deve preparare l'esame di statistica e chiede chi potrebbe aiutarlo. Tua sorella è bravissima in matematica.",
    consegna: "Digli che tua sorella è brava in matematica.",
    soluzioni: [
      "My sister is good at maths.",
      "My sister's good at maths.",
      "My sister is very good at maths.",
      "My sister is really good at maths.",
      "She's good at maths.",
    ],
    tempo: "present simple",
    parole: [
      ["bravo (in)", "good (at)"],
      ["matematica", "maths", "americano: math"],
    ],
    suggerimenti: [
      "È una caratteristica stabile. Quale verbo e quale tempo? «Bravo IN qualcosa»: quale preposizione segue good?",
      "Mia sorella + «essere» + bravo + la preposizione che non è «in» + la materia (maths, senza articolo).",
    ],
    simile: "He's terrible at cooking.",
    spiegazione:
      "Good at, bad at (bravo, scarso in): she's good at maths. «Good in maths» è un errore tipico degli italiani.",
    lezione: "lezione 49{4}",
  },
  {
    id: "b1-paura-ragni",
    livello: "B1",
    contesto:
      "In campeggio nel Lake District, il tuo amico vuole dormire all'aperto senza tenda. Tu rabbrividisci al pensiero di ragni ovunque.",
    consegna: "Digli che hai paura dei ragni.",
    soluzioni: [
      "I'm afraid of spiders.",
      "I am afraid of spiders.",
      "I'm scared of spiders.",
      "I'm terrified of spiders.",
      "I'm really afraid of spiders.",
    ],
    tempo: "present simple",
    parole: [
      ["avere paura (di)", "be afraid (of) / be scared (of)"],
      ["terrorizzato", "terrified"],
      ["ragni", "spiders"],
    ],
    suggerimenti: [
      "La paura in inglese non si «ha»: si «è». Quale verbo e quale tempo? Che preposizione segue afraid?",
      "Io + «essere» + l'aggettivo che significa «impaurito» + la preposizione «di» (of) + ragni, senza articolo (in generale).",
    ],
    simile: "My brother is scared of the dark.",
    spiegazione:
      "Avere paura = be afraid of / be scared of. «I have fear of spiders» è sbagliato.",
    lezione: "lezione 49{4}",
  },
  {
    id: "b1-discusso",
    livello: "B1",
    contesto:
      "Il tuo capo ti chiede com'è andata la riunione di ieri con il cliente sul problema delle consegne in ritardo. L'avete affrontato a lungo.",
    consegna: "Digli che avete discusso il problema.",
    soluzioni: [
      "We discussed the problem.",
      "We discussed the problem yesterday.",
      "We discussed the problem in detail.",
      "We talked about the problem.",
    ],
    tempo: "past simple",
    parole: [
      ["discutere (di)", "discuss", "senza preposizione"],
      ["parlare di", "talk about"],
      ["problema", "problem"],
    ],
    suggerimenti: [
      "La riunione è stata ieri. Quale tempo? Attenzione: in italiano «discutere DI qualcosa», in inglese discuss vuole una preposizione?",
      "Noi + il past simple di «discutere» + il problema, SENZA preposizione in mezzo.",
    ],
    simile: "They discussed the plan for an hour.",
    spiegazione:
      "Discuss non vuole preposizioni: discuss the problem (mai «discuss about»). Talk about invece sì.",
    lezione: "lezione 49{3}",
  },
  {
    id: "b1-motivo",
    livello: "B1",
    contesto:
      "Il tuo treno è fermo da quaranta minuti in aperta campagna, senza annunci. Passa il controllore e gli chiedi spiegazioni.",
    consegna: "Chiedigli qual è il motivo del ritardo.",
    soluzioni: [
      "What's the reason for the delay?",
      "What is the reason for the delay?",
      "Excuse me, what's the reason for the delay?",
      "Why are we delayed?",
      "What's causing the delay?",
    ],
    tempo: "present simple|present continuous",
    parole: [
      ["motivo", "reason"],
      ["ritardo", "delay"],
    ],
    suggerimenti: [
      "Chiedi una situazione presente. Quale verbo e quale tempo? «Il motivo DI»: quale preposizione segue reason?",
      "«Che cosa» + «essere» + il motivo + la preposizione dello scopo («per») + il ritardo.",
    ],
    simile: "What's the reason for your visit?",
    spiegazione:
      "Reason for (non «reason of»): the reason for the delay. Anche: a cause of, a solution to, an increase in.",
    lezione: "lezione 49{5}",
  },
  {
    id: "b1-grafico",
    livello: "B1",
    contesto:
      "Presenti un grafico per il corso di economia. La linea delle vendite di un'azienda è salita del dieci per cento rispetto all'anno precedente.",
    consegna: "Di' che le vendite sono aumentate del dieci per cento.",
    soluzioni: [
      "Sales increased by ten per cent.",
      "Sales increased by 10 per cent.",
      "Sales rose by ten per cent.",
      "Sales went up by ten per cent.",
      "Sales increased by ten percent.",
      "Sales have increased by ten per cent.",
    ],
    tempo: "past simple|present perfect",
    parole: [
      ["vendite", "sales"],
      ["aumentare", "increase / rise / go up", "rise è irregolare"],
      ["per cento", "per cent"],
    ],
    suggerimenti: [
      "Descrivi un cambiamento avvenuto in un periodo concluso (l'anno scorso). Quale tempo? E «aumentare DEL dieci per cento»: quale preposizione introduce la quantità del cambiamento?",
      "Vendite + past simple di «aumentare» + la preposizione dell'agente (la stessa del passivo) + dieci per cento.",
    ],
    simile: "Prices fell by five per cent last month.",
    spiegazione:
      "Nei grafici la variazione si introduce con by: increased by 10%. Il valore finale con to: rose to 2 million.",
    lezione: "lezione 50{3}",
  },
  {
    id: "b1-metodo",
    livello: "B1",
    contesto:
      "Scrivi la sezione «Metodi» della tua relazione di biologia. Devi dire che i campioni sono stati analizzati in laboratorio, senza dire chi l'ha fatto.",
    consegna: "Scrivi che i campioni sono stati analizzati in laboratorio (passivo).",
    soluzioni: [
      "The samples were analysed in the laboratory.",
      "The samples were analyzed in the laboratory.",
      "The samples were analysed in the lab.",
      "Samples were analysed in the laboratory.",
    ],
    tempo: "past simple",
    parole: [
      ["campioni", "samples"],
      ["analizzare", "analyse", "americano: analyze"],
      ["laboratorio", "laboratory / lab"],
    ],
    suggerimenti: [
      "Nei metodi scientifici si racconta che cosa è stato fatto, senza nominare i ricercatori. Quale forma e quale tempo?",
      "I campioni + il passato di «essere» al plurale + il participio di «analizzare» + nel laboratorio.",
    ],
    simile: "The data were collected over six months.",
    spiegazione:
      "Il passivo al past simple è la norma nei metodi scientifici: The samples were analysed. Conta il procedimento, non chi l'ha fatto.",
    lezione: "lezione 50{2}",
  },
  {
    id: "b1-tuttavia",
    livello: "B1",
    contesto:
      "Nella conclusione del tuo saggio hai scritto che l'esperimento è stato fatto con cura. Ora devi aggiungere un limite, con un connettivo formale.",
    consegna: "Scrivi: «Tuttavia, i risultati non erano chiari».",
    soluzioni: [
      "However, the results were not clear.",
      "However, the results weren't clear.",
      "However, the results were unclear.",
      "However, the results were not very clear.",
    ],
    tempo: "past simple",
    parole: [
      ["tuttavia", "however", "seguito da virgola"],
      ["risultati", "results"],
      ["chiaro", "clear"],
    ],
    suggerimenti: [
      "Descrivi i risultati dell'esperimento ormai concluso. Quale tempo? E quale connettivo formale significa «tuttavia», all'inizio della frase?",
      "Il connettivo + virgola + i risultati + il passato di «essere» al plurale + not + chiari.",
    ],
    simile: "However, further research is needed.",
    spiegazione:
      "However (tuttavia) apre una nuova frase ed è seguito dalla virgola. But invece unisce due parti della stessa frase.",
    lezione: "lezione 50{5}",
  },
  {
    id: "b1-contiene-frutta-secca",
    livello: "B1",
    contesto:
      "Al ristorante thailandese il piatto che vuoi ordinare ha un nome complicato e nessuna descrizione. Sei allergico alla frutta secca.",
    consegna: "Chiedi al cameriere se questo piatto contiene frutta secca.",
    soluzioni: [
      "Does this dish contain nuts?",
      "Does this dish contain any nuts?",
      "Excuse me, does this dish contain nuts?",
      "Are there any nuts in this dish?",
      "Does this dish have nuts in it?",
    ],
    tempo: "present simple",
    parole: [
      ["piatto (pietanza)", "dish", "plate è il piatto oggetto"],
      ["contenere", "contain"],
      ["frutta secca", "nuts"],
    ],
    suggerimenti: [
      "Chiedi una caratteristica fissa del piatto. Quale tempo? Come si fa la domanda alla terza persona?",
      "Ausiliare della terza persona + questo piatto + il verbo «contenere» alla forma base + frutta secca.",
    ],
    simile: "Does this sauce contain gluten?",
    spiegazione:
      "Dish = piatto come pietanza; plate = piatto come oggetto. Domande alla terza persona con does + verbo base.",
    lezione: "S6{4}",
  },
  {
    id: "b1-errore-conto",
    livello: "B1",
    contesto:
      "Controlli il conto del ristorante e trovi tre birre che nessuno ha ordinato. Chiami il cameriere e vuoi farlo notare in modo gentile.",
    consegna: "Digli, con cortesia britannica, che temi ci sia un errore nel conto.",
    soluzioni: [
      "I'm afraid there's a mistake on the bill.",
      "I'm afraid there is a mistake on the bill.",
      "I'm afraid there's a mistake in the bill.",
      "Excuse me, I'm afraid there's a mistake on the bill.",
      "I think there's a mistake on the bill.",
      "Sorry, I think there's a mistake on the bill.",
    ],
    tempo: "present simple",
    parole: [
      ["temo che (cortese)", "I'm afraid"],
      ["errore", "mistake"],
      ["conto", "bill"],
    ],
    suggerimenti: [
      "È una situazione presente. Quale tempo? Gli inglesi ammorbidiscono le lamentele: quale espressione con «paura» si usa per dire «mi dispiace, ma...»?",
      "L'espressione cortese «temo» + «c'è» + un errore + la preposizione «su» + il conto.",
    ],
    simile: "I'm afraid I can't come tomorrow.",
    spiegazione:
      "I'm afraid... (= mi dispiace, ma...) ammorbidisce le cattive notizie e le lamentele: è tipicamente britannico e non esprime paura.",
    lezione: "S6{6}",
  },
  {
    id: "b1-mal-di-testa-da",
    livello: "B1",
    contesto:
      "Dal medico di base. Il dottore ti chiede da quanto tempo hai mal di testa. È cominciato tre giorni fa e non è mai passato.",
    consegna: "Rispondi che hai mal di testa da tre giorni.",
    soluzioni: [
      "I've had a headache for three days.",
      "I have had a headache for three days.",
      "I've had this headache for three days.",
      "I've had a headache for three days now.",
      "I've had a headache since Monday.",
    ],
    tempo: "present perfect",
    parole: [
      ["mal di testa", "a headache"],
      ["tre giorni", "three days"],
    ],
    suggerimenti: [
      "In italiano: «ho mal di testa da tre giorni», al presente. In inglese il disturbo è cominciato nel passato e continua. Quale tempo? (Have qui è un verbo di stato.)",
      "Present perfect: ausiliare + il participio di «avere» + articolo + mal di testa + la preposizione della durata + tre giorni.",
    ],
    simile: "She's had a cough since last week.",
    spiegazione:
      "Durata fino ad ora = present perfect + for/since: I've had a headache for three days. «I have a headache since three days» è il classico errore italiano.",
    lezione: "S8{5}",
  },
  {
    id: "b1-quante-volte-prenderle",
    livello: "B1",
    contesto:
      "Il farmacista ti dà una scatola di pastiglie per la gola, ma la scritta è minuscola e non hai capito la posologia.",
    consegna: "Chiedigli ogni quanto dovresti prenderle.",
    soluzioni: [
      "How often should I take them?",
      "How often do I take them?",
      "How often should I take these?",
      "How many times a day should I take them?",
      "How often do I need to take them?",
    ],
    tempo: "should|present simple",
    parole: [
      ["prendere (medicine)", "take"],
      ["ogni quanto", "how often"],
      ["volte al giorno", "times a day"],
    ],
    suggerimenti: [
      "Chiedi un consiglio sulla frequenza. Quale modale del consiglio usi? E come si dice «ogni quanto»?",
      "L'espressione della frequenza + il modale del consiglio + io + «prendere» + il pronome per le pastiglie.",
    ],
    simile: "How often should I water this plant?",
    spiegazione:
      "Le medicine si «prendono» con take (take two tablets). How often should I...? chiede la frequenza consigliata.",
    lezione: "S8{6}",
  },
  {
    id: "b1-camera-sbagliata",
    livello: "B1",
    contesto:
      "Arrivi in hotel con la tua ragazza. Avevate prenotato una matrimoniale, ma in camera c'è un solo lettino. Torni alla reception.",
    consegna: "Spiega che avevi prenotato una doppia, ma questa è una singola.",
    soluzioni: [
      "I booked a double room, but this is a single.",
      "I booked a double room, but this is a single room.",
      "We booked a double room, but this is a single.",
      "We booked a double room, but this is a single room.",
      "I booked a double room, but this one is a single.",
      "Excuse me, I booked a double room, but this is a single.",
    ],
    tempo: "past simple",
    parole: [
      ["prenotare", "book"],
      ["camera matrimoniale", "double room"],
      ["singola", "single (room)"],
    ],
    suggerimenti: [
      "La prenotazione è un fatto concluso nel passato; la camera è com'è adesso. Quali tempi? (In inglese qui basta il past simple, non serve il trapassato.)",
      "Io + past simple di «prenotare» + una doppia + ma + questa + «essere» + una singola.",
    ],
    simile: "I ordered a large pizza, but this is a medium.",
    spiegazione:
      "In inglese una sequenza chiara si racconta al past simple: I booked a double room. Il past perfect non è obbligatorio quando l'ordine è evidente.",
    lezione: "S7{6}",
  },
  {
    id: "b1-rimborso",
    livello: "B1",
    contesto:
      "Le cuffie che hai comprato una settimana fa si sono rotte dopo due giorni. Non vuoi cambiarle con altre: vuoi indietro i tuoi soldi.",
    consegna: "Chiedi gentilmente un rimborso.",
    soluzioni: [
      "I'd like a refund, please.",
      "I would like a refund, please.",
      "Could I have a refund, please?",
      "Can I have a refund, please?",
      "I'd like to get a refund, please.",
      "I'd like a refund for these headphones, please.",
    ],
    tempo: "conditional|could|can",
    parole: [
      ["rimborso", "refund"],
      ["cuffie", "headphones"],
    ],
    suggerimenti: [
      "È una richiesta cortese adesso. Quale formula significa «vorrei»?",
      "La formula di «vorrei» + articolo + rimborso + please.",
    ],
    simile: "I'd like to exchange this for a smaller size.",
    spiegazione:
      "Refund = rimborso (I'd like a refund); exchange = cambio con un altro prodotto. Nel Regno Unito di solito serve lo scontrino (receipt).",
    lezione: "S5{6}",
  },
  {
    id: "b1-chiamo-per-stanza",
    livello: "B1",
    contesto:
      "Hai visto online l'annuncio di una stanza in affitto a Headington. Chiami il numero e risponde la proprietaria.",
    consegna: "Dille che chiami per la stanza che ha messo in annuncio.",
    soluzioni: [
      "I'm calling about the room you advertised.",
      "I'm calling about the room that you advertised.",
      "Hello, I'm calling about the room you advertised.",
      "I'm ringing about the room you advertised.",
      "I'm phoning about the room you advertised.",
      "I'm calling about the room you advertised online.",
    ],
    tempo: "present continuous",
    parole: [
      ["chiamare", "call / ring / phone"],
      ["a proposito di", "about"],
      ["stanza", "room"],
      ["mettere un annuncio", "advertise"],
    ],
    suggerimenti: [
      "Descrivi quello che stai facendo proprio adesso (questa telefonata). Quale tempo? La stanza è stata pubblicizzata prima: quale tempo nella relativa?",
      "Present continuous di «chiamare» + «a proposito di» + la stanza + (relativo omesso) + lei + past simple di «pubblicizzare».",
    ],
    simile: "I'm writing about the job you posted.",
    spiegazione:
      "Al telefono si spiega il motivo con I'm calling about... (present continuous: lo stai facendo ora).",
    lezione: "S9{9}",
  },
];
