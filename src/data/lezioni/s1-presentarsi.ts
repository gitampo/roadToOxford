import { Lezione } from "@/types/lezione";

export const presentarsi: Lezione = {
  id: "S1",
  titolo: "Presentarsi",
  descrizione: "Salutare, dire chi sei e fare conoscenza",
  chiavi:
    "presentarsi, saluti, nice to meet you, where are you from, what do you do, età",
  livello: "Situazioni",
  sottotitolo: "Situazioni · Lezione S1 · A1",
  citazione: {
    testo:
      "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.",
    fonte: "La storia fantastica (The Princess Bride), 1987",
    traduzione:
      "Salve. Il mio nome è Inigo Montoya. Tu hai ucciso mio padre. Preparati a morire.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "LA SEZIONE SITUAZIONI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le lezioni di grammatica ti insegnano come funziona la lingua. Quelle di questa sezione ti insegnano a usarla in un momento preciso: presentarti, ordinare al bar, chiedere la strada, comprare un maglione, spiegare a un medico che cosa ti fa male. Sono organizzate per situazione, non per regola.",
        },
        {
          tipo: "testo",
          testo:
            "In ogni lezione trovi le frasi che usano davvero i madrelingua, quello che ti diranno gli altri (spesso più difficile da capire di quello che devi dire tu), le abitudini britanniche da conoscere, gli errori tipici degli italiani e un dialogo completo ambientato a Oxford.",
        },
        {
          tipo: "nota",
          testo:
            "Impara queste frasi come blocchi unici, senza smontarle parola per parola: Nice to meet you, What do you do?, Could I have...? I madrelingua non costruiscono ogni volta la frase da zero, la pescano già pronta dalla memoria. Fallo anche tu, e parlerai più in fretta e con meno errori.",
        },
        {
          tipo: "testo",
          testo:
            "Per presentarti ti servono soprattutto il verbo to be (lezione 2{1}), gli aggettivi possessivi my e your (lezione 5{1}) e il present simple (lezione 10{1}). Qui li vedi al lavoro.",
        },
      ],
    },
    {
      titolo: "SALUTARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il saluto cambia con la situazione. Hello va bene ovunque; Hi è amichevole e si usa moltissimo, anche con persone appena conosciute; Hey è più confidenziale. Good morning, good afternoon e good evening sono più formali: li senti in un ufficio, in un hotel, all'inizio di una lezione.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Hello!", "Salve! / Ciao! (va bene sempre)"],
            ["Hi! / Hey!", "Ciao! (informale)"],
            ["Good morning.", "Buongiorno (fino a mezzogiorno)"],
            [
              "Good afternoon.",
              "Buongiorno / buon pomeriggio (dopo mezzogiorno)",
            ],
            ["Good evening.", "Buonasera"],
            [
              "Alright? / You alright?",
              "Ciao, come va? (Regno Unito, informale)",
            ],
            ["Hiya!", "Ciao! (britannico, molto informale)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Good night non è un saluto d\'arrivo: si dice solo andando via la sera tardi o andando a dormire, come il nostro "buonanotte". Se entri in un pub alle nove di sera e dici Good night!, sembra che tu stia già andando via.',
        },
        {
          tipo: "testo",
          testo:
            "Alright? è il saluto più tipico in molte parti del Regno Unito, e spiazza gli stranieri: non ti stanno chiedendo se stai bene, ti stanno solo salutando. Rispondi con un altro saluto: Yeah, alright, you? oppure Not bad, thanks.",
        },
      ],
    },
    {
      titolo: "DIRE COME TI CHIAMI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            '"Mi chiamo" in inglese non si traduce parola per parola: si dice "il mio nome è" oppure, più spesso nel parlato, semplicemente "sono".',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm Marco.", it: "Sono Marco. (la forma più comune)" },
            { en: "My name's Marco.", it: "Mi chiamo Marco." },
            { en: "Everyone calls me Max.", it: "Tutti mi chiamano Max." },
            { en: "I call myself Marco.", sbagliato: true },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Per chiedere il nome a qualcuno si usa What's your name?. Se te l'hanno detto ma non l'hai capito, c'è una formula molto britannica e molto gentile: Sorry, I didn't catch your name. Catch significa \"afferrare\": non hai afferrato il nome. Nessuno si offende, anzi.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Sorry, I didn't catch your name.",
              it: "Scusa, non ho capito come ti chiami.",
            },
            { en: "How do you spell that?", it: "Come si scrive?" },
            { en: "It's M-A-R-C-O.", it: "Si scrive M-A-R-C-O." },
            { en: "What's your surname?", it: "Qual è il tuo cognome?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "First name è il nome di battesimo, surname (o last name) è il cognome. Nei moduli trovi anche full name (nome e cognome). E preparati a fare lo spelling del tuo nome: i nomi italiani non sono familiari agli inglesi, e lo chiederanno spesso. Le lettere che si sbagliano più facilmente sono A, E, I, G, J, R e Y: le trovi pronunciate nella lezione S9{5}.",
        },
      ],
    },
    {
      titolo: "PIACERE!",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Il nostro "piacere" ha tre versioni inglesi, dalla più comune alla più formale. Dopo la prima volta, quando rivedi la stessa persona, il verbo cambia: meet si usa solo per il primo incontro, poi si usa see.',
        },
        {
          tipo: "tabella",
          righe: [
            ["Nice to meet you.", "Piacere (la più comune)"],
            ["Pleased to meet you.", "Piacere (un po' più formale)"],
            ["How do you do?", "Piacere (molto formale, un po' antiquato)"],
            ["Nice to meet you too. / You too.", "Piacere mio."],
            [
              "Nice to see you again!",
              "Che bello rivederti! (dal secondo incontro)",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "How do you do? non è una domanda su come stai, anche se sembra. Alla formula si risponde con la stessa formula: How do you do?. Rispondere Fine, thanks suona strano. Oggi la senti soprattutto in situazioni molto formali o da persone anziane.",
        },
        {
          tipo: "testo",
          testo:
            "Per presentare qualcuno si usa this is, non he is o she is (lezione 15{4}). Nelle situazioni formali ci si stringe la mano; tra sconosciuti i baci sulle guance non si usano, e possono mettere in imbarazzo.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "This is my friend Anna.",
              it: "Ti presento la mia amica Anna.",
            },
            {
              en: "Have you met Tom?",
              it: "Conosci Tom? (Te l'hanno già presentato?)",
            },
            {
              en: "Tom, this is Marco. Marco, Tom.",
              it: "Tom, questo è Marco. Marco, Tom.",
            },
          ],
        },
      ],
    },
    {
      titolo: "DA DOVE VIENI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Where are you from? è una delle prime domande che ti faranno. Puoi rispondere con il paese (dopo from) o con l'aggettivo di nazionalità (dopo I'm, senza from). In inglese gli aggettivi di nazionalità hanno sempre la maiuscola.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm from Italy.", it: "Vengo dall'Italia." },
            { en: "I'm Italian.", it: "Sono italiano." },
            {
              en: "I'm from Bari, in the south of Italy.",
              it: "Sono di Bari, nel sud Italia.",
            },
            {
              en: "I'm from Milan originally, but I live in Oxford now.",
              it: "Sono di Milano, ma adesso vivo a Oxford.",
            },
            { en: "I'm from Italian.", sbagliato: true },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Un britannico curioso ti chiederà poi Whereabouts in Italy?, cioè \"di che parte d'Italia?\". Whereabouts è una parola molto usata nel Regno Unito per chiedere una zona, non un punto preciso. Se vieni da una città piccola, aiutalo: It's a small town near Florence.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Where do you live?", it: "Dove abiti?" },
            {
              en: "I live in a college in the city centre.",
              it: "Abito in un college in centro.",
            },
            { en: "Whereabouts in Italy?", it: "Di che parte d'Italia?" },
          ],
        },
      ],
    },
    {
      titolo: "QUANTI ANNI HAI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'L\'età si dice con to be, non con have: in inglese gli anni non si "hanno", si "sono" (lezione 2{8}). Puoi dire solo il numero, oppure il numero seguito da years old. Ma mai years da solo.',
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm nineteen.", it: "Ho diciannove anni." },
            { en: "I'm nineteen years old.", it: "Ho diciannove anni." },
            { en: "I have nineteen years.", sbagliato: true },
            { en: "I'm nineteen years.", sbagliato: true },
            { en: "When's your birthday?", it: "Quando è il tuo compleanno?" },
            { en: "It's on the fifth of May.", it: "Il cinque maggio." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Tra studenti chiedere l'età è normale. Con gli adulti che non conosci bene, invece, nel Regno Unito è considerato indiscreto, come chiedere quanto guadagnano. Per le date, rivedi la lezione 8{8}.",
        },
      ],
    },
    {
      titolo: "COSA FAI NELLA VITA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'What do you do? significa "che lavoro fai?" o "di che cosa ti occupi?": è al present simple perché chiede un\'attività stabile (lezione 10{1}). Non va confuso con What are you doing?, che vuol dire "che cosa stai facendo adesso?".',
        },
        {
          tipo: "tabella",
          righe: [
            ["What do you do?", "Che lavoro fai? / Di cosa ti occupi?"],
            [
              "What are you doing?",
              "Che cosa stai facendo (in questo momento)?",
            ],
            ["What do you study?", "Che cosa studi?"],
            ["What year are you in?", "A che anno sei?"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Con i mestieri l'inglese vuole l'articolo a/an, che in italiano non mettiamo: \"sono studente\" diventa I'm a student (lezione 3{3}).",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm a student.", it: "Sono studente." },
            {
              en: "I study medicine at the University of Bologna.",
              it: "Studio medicina all'Università di Bologna.",
            },
            { en: "I'm in my second year.", it: "Sono al secondo anno." },
            {
              en: "I'm doing a master's in physics.",
              it: "Faccio un master in fisica.",
            },
            {
              en: "I'm an engineer. I work for a small company.",
              it: "Sono ingegnere. Lavoro per una piccola azienda.",
            },
            { en: "I'm student.", sbagliato: true },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Attenzione alle preposizioni dopo work: work for + l'azienda o la persona per cui lavori, work at + il luogo, work in + il settore.",
        },
        {
          tipo: "tabella",
          righe: [
            ["I work for Google.", "Lavoro per Google (l'azienda)."],
            ["I work at the hospital.", "Lavoro all'ospedale (il luogo)."],
            ["I work in marketing.", "Lavoro nel marketing (il settore)."],
            [
              "I'm between jobs at the moment.",
              "Al momento sto cercando lavoro (modo gentile di dirlo).",
            ],
          ],
        },
      ],
    },
    {
      titolo: "INTERESSI E FAMIGLIA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Per parlare di quello che ti piace fare si usa like, love o enjoy seguiti dalla forma in -ing (lezione 20{3}). I\'m into è informale e molto frequente tra i giovani: vuol dire "mi appassiona".',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I love playing the guitar.",
              it: "Adoro suonare la chitarra.",
            },
            {
              en: "I'm really into photography.",
              it: "Sono appassionato di fotografia.",
            },
            {
              en: "In my free time I go running.",
              it: "Nel tempo libero vado a correre.",
            },
            { en: "I'm not very sporty.", it: "Non sono molto sportivo." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "My hobbies are... è giusto, ma suona come un tema scolastico. Nel parlato si dice I'm into..., I love... oppure In my free time I.... Lo stesso vale per I like very much: si dice I really like, con l'avverbio prima del verbo.",
        },
        {
          tipo: "testo",
          testo:
            "Per la famiglia, nel Regno Unito si usa molto have got (lezione 6{5}):",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Have you got any brothers or sisters?",
              it: "Hai fratelli o sorelle?",
            },
            {
              en: "I've got an older brother and a younger sister.",
              it: "Ho un fratello più grande e una sorella più piccola.",
            },
            { en: "I'm an only child.", it: "Sono figlio unico." },
            {
              en: "I live with two flatmates.",
              it: "Vivo con due coinquilini.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Brothers vuol dire solo fratelli maschi. "Fratelli" in generale si dice brothers and sisters (o siblings, più formale). E nel Regno Unito il coinquilino è un flatmate: roommate significa che dividi proprio la stanza.',
        },
      ],
    },
    {
      titolo: "FARE DOMANDE ANCHE TU",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Una conversazione è come una partita a tennis: dopo aver risposto, rimanda la palla. Se rispondi e basta, l'altro deve inventarsi un'altra domanda, e dopo un po' sembra un interrogatorio. Bastano tre parole per restituire la domanda.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "And you?", it: "E tu?" },
            { en: "What about you?", it: "E tu? / Tu invece?" },
            {
              en: "How about you? Where are you from?",
              it: "E tu? Di dove sei?",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Mostra anche che stai ascoltando: reagisci a quello che ti dicono prima di passare alla domanda successiva.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Oh, really?", "Ah, davvero?"],
            ["That's interesting!", "Interessante!"],
            ["Me too! / Me neither.", "Anch'io! / Neanch'io. (lezione 16{4})"],
            [
              "How long have you been in Oxford?",
              "Da quanto tempo sei a Oxford?",
            ],
            ["I've been here for two weeks.", "Sono qui da due settimane."],
          ],
        },
        {
          tipo: "nota",
          testo:
            "How long have you been here? è una delle domande più frequenti quando sei all'estero. Usa il present perfect, che vedrai nelle lezioni 29{1} e 31{3}: per ora imparala come blocco unico, insieme alla risposta I've been here for....",
        },
      ],
    },
    {
      titolo: "CONGEDARSI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Anche alla fine si torna a meet, ma con la forma in -ing: It was nice meeting you, "è stato un piacere conoscerti". Poi i saluti veri e propri, dal più formale al più informale.',
        },
        {
          tipo: "tabella",
          righe: [
            ["It was nice meeting you.", "È stato un piacere conoscerti."],
            ["Goodbye.", "Arrivederci (più formale e definitivo)."],
            ["Bye! / Bye-bye!", "Ciao!"],
            ["See you later! / See you soon!", "A dopo! / A presto!"],
            ["See you around!", "Ci si vede in giro!"],
            ["Take care!", "Stammi bene!"],
            ["Cheers!", "Ciao! / Grazie! (britannico, informale)"],
          ],
        },
        {
          tipo: "testo",
          testo: "Se vuoi restare in contatto, chiedilo in modo semplice:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Can I have your number?", it: "Mi dai il tuo numero?" },
            { en: "Are you on Instagram?", it: "Sei su Instagram?" },
            { en: "Let's keep in touch!", it: "Teniamoci in contatto!" },
          ],
        },
      ],
    },
    {
      titolo: "UN DIALOGO: LA FRESHERS' WEEK",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La Freshers' Week è la settimana di accoglienza delle matricole (freshers) nelle università britanniche: feste, banchetti delle associazioni studentesche, cene in college. Si conoscono decine di persone al giorno. Marco, appena arrivato a Oxford, incontra Emily nella sala comune del suo college.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Emily: Hi! Are you new here too?",
              it: "Ciao! Anche tu sei nuovo?",
            },
            {
              en: "Marco: Yeah, I arrived on Sunday. I'm Marco.",
              it: "Sì, sono arrivato domenica. Sono Marco.",
            },
            {
              en: "Emily: Nice to meet you, Marco. I'm Emily.",
              it: "Piacere, Marco. Io sono Emily.",
            },
            { en: "Marco: Nice to meet you too.", it: "Piacere mio." },
            {
              en: "Emily: So, where are you from?",
              it: "Allora, di dove sei?",
            },
            {
              en: "Marco: I'm from Italy. From Turin.",
              it: "Sono italiano. Di Torino.",
            },
            {
              en: "Emily: Oh, lovely! What are you studying?",
              it: "Che bello! Che cosa studi?",
            },
            {
              en: "Marco: Chemistry. I'm doing a master's. What about you?",
              it: "Chimica. Faccio un master. E tu?",
            },
            {
              en: "Emily: I'm in my first year. I'm doing History.",
              it: "Sono al primo anno. Studio storia.",
            },
            { en: "Marco: Are you from Oxford?", it: "Sei di Oxford?" },
            {
              en: "Emily: No, I'm from Leeds, up north. Have you been to England before?",
              it: "No, sono di Leeds, al nord. Eri già stato in Inghilterra?",
            },
            {
              en: "Marco: Only once, on a school trip to London.",
              it: "Solo una volta, in gita a Londra con la scuola.",
            },
            {
              en: "Emily: Well, there's a pub quiz tonight. Do you fancy coming?",
              it: "Beh, stasera c'è un quiz al pub. Ti va di venire?",
            },
            { en: "Marco: Sure, sounds great!", it: "Certo, ottima idea!" },
            {
              en: "Emily: Brilliant. See you later, then!",
              it: "Perfetto. Allora a dopo!",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Nota come la conversazione rimbalza: ogni risposta di Marco finisce con una domanda (What about you?, Are you from Oxford?). Do you fancy...? è il modo britannico più comune per proporre qualcosa: "ti va di...?". Lo ritrovi nella lezione S10{7}.',
        },
      ],
    },
    {
      titolo: "GLI ERRORI TIPICI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Questi sono gli errori che un madrelingua nota subito quando un italiano si presenta. Sono tutti calchi dell'italiano: frasi tradotte parola per parola.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have twenty years.", sbagliato: true },
            { en: "I'm twenty.", it: "Ho vent'anni." },
            { en: "I call myself Luca.", sbagliato: true },
            { en: "My name's Luca.", it: "Mi chiamo Luca." },
            { en: "I am student of engineering.", sbagliato: true },
            {
              en: "I'm an engineering student.",
              it: "Sono studente di ingegneria.",
            },
            { en: "Nice to meet you again!", sbagliato: true },
            { en: "Nice to see you again!", it: "Che piacere rivederti!" },
            { en: "I like very much music.", sbagliato: true },
            { en: "I really like music.", it: "Mi piace molto la musica." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Un engineering student è uno studente di ingegneria: in inglese la materia si mette davanti, come un aggettivo (lezione 4{6}). Allo stesso modo: a medical student, a history student, a law student.",
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
          testo: "Salutare e presentarsi",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Arrivi a una festa alle nove di sera. Come saluti la padrona di casa?",
          opzioni: ["Good night!", "Good afternoon!", "Good evening!"],
          giusta: 2,
          spiegazione:
            "Good night si dice solo andando via o andando a dormire. Arrivando la sera si dice Good evening (o semplicemente Hi!).",
          rivedi: "SALUTARE",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Un ragazzo inglese ti saluta con "Alright?". Che cosa rispondi?',
          opzioni: [
            "Yeah, alright, you?",
            "Yes, I'm not ill.",
            "Why? Do I look bad?",
          ],
          giusta: 0,
          spiegazione:
            "Alright? è un saluto, non una domanda sulla salute: si risponde con un altro saluto.",
          rivedi: "SALUTARE",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Mi chiamo Giulia".',
          prima: "My",
          dopo: "Giulia.",
          risposte: ["name's", "name is"],
          spiegazione: "Si dice My name is (o I'm), mai I call myself.",
          rivedi: "DIRE COME TI CHIAMI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Una persona ti ha appena detto il suo nome, ma non l'hai capito. Che cosa dici?",
          opzioni: [
            "What?",
            "Sorry, I didn't catch your name.",
            "Repeat your name.",
          ],
          giusta: 1,
          spiegazione:
            "Sorry, I didn't catch your name è la formula gentile: catch = afferrare.",
          rivedi: "DIRE COME TI CHIAMI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Rivedi Emily, che hai conosciuto la settimana scorsa. Che cosa le dici?",
          opzioni: [
            "Nice to meet you again!",
            "How do you do?",
            "Nice to see you again!",
          ],
          giusta: 2,
          spiegazione:
            "Meet si usa solo per il primo incontro; dopo si usa see.",
          rivedi: "PIACERE!",
        },
        {
          tipo: "riordina",
          consegna: 'Presenta la tua amica: "Ti presento la mia amica Sara".',
          parole: ["Sara", "is", "friend", "this", "my"],
          soluzione: ["this", "is", "my", "friend", "Sara"],
          spiegazione: "Per presentare qualcuno si usa this is, non she is.",
          rivedi: "PIACERE!",
        },
        {
          tipo: "sottotitolo",
          testo: "Dire chi sei",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come si dice "Sono italiano"?',
          opzioni: ["I'm Italian.", "I'm from Italian.", "I'm italian."],
          giusta: 0,
          spiegazione:
            "Dopo I'm va l'aggettivo, senza from; e gli aggettivi di nazionalità vogliono la maiuscola.",
          rivedi: "DA DOVE VIENI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come si dice "Ho vent\'anni"?',
          opzioni: ["I have twenty years.", "I'm twenty.", "I'm twenty years."],
          giusta: 1,
          spiegazione:
            "L'età si dice con to be. Va bene anche I'm twenty years old, ma non years da solo.",
          rivedi: "QUANTI ANNI HAI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Un ragazzo ti chiede "What do you do?". Che cosa vuole sapere?',
          opzioni: [
            "Che cosa stai facendo adesso",
            "Che cosa fai stasera",
            "Che lavoro fai o che cosa studi",
          ],
          giusta: 2,
          spiegazione:
            "What do you do? (present simple) chiede la tua attività stabile. What are you doing? chiederebbe che cosa stai facendo adesso.",
          rivedi: "COSA FAI NELLA VITA",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Sono studentessa".',
          prima: "I'm",
          dopo: "student.",
          risposte: ["a"],
          spiegazione: "Con i mestieri l'inglese vuole sempre l'articolo a/an.",
          rivedi: "COSA FAI NELLA VITA",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni frase alla traduzione.",
          coppie: [
            ["I work for a bank.", "Lavoro per una banca."],
            ["I work at the hospital.", "Lavoro all'ospedale."],
            ["I work in marketing.", "Lavoro nel marketing."],
            ["I'm an only child.", "Sono figlio unico."],
          ],
          rivedi: "COSA FAI NELLA VITA",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Hai appena detto da dove vieni. Come rimandi la domanda all'altro?",
          opzioni: ["What about you?", "And you what?", "You too?"],
          giusta: 0,
          spiegazione:
            "What about you? (o And you? / How about you?) restituisce la domanda e tiene viva la conversazione.",
          rivedi: "FARE DOMANDE ANCHE TU",
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
            "Durante la Freshers' Week un ragazzo ti chiede di parlarti di te. Presentati in 5–6 frasi.",
          punti: [
            "nome ed età",
            "da dove vieni",
            "che cosa studi o fai",
            "un interesse",
            "una domanda per lui",
          ],
          modello:
            "Hi, I'm Chiara. Nice to meet you! I'm twenty and I'm from Verona, in the north of Italy. I'm a physics student: I'm in my second year. In my free time I'm really into climbing. What about you? What are you studying?",
          spiegazione:
            "Controlla l'età con I'm, l'articolo davanti alla professione (a student) e chiudi con una domanda: è quello che fa continuare la conversazione.",
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
