/**
 * Le frasi per gli esercizi di analisi ("Analizza tu"): l'app ne propone
 * una e lo studente fa l'analisi. Sono divise per livello e prese dagli
 * argomenti delle lezioni. Ognuna è stata controllata: il motore la
 * analizza correttamente, così la "risposta giusta" è davvero giusta.
 * Ognuna ha la sua traduzione, scritta a mano.
 */

export type FraseEsercizio = {
  testo: string;
  // La traduzione, scritta a mano
  it: string;
  livello: "A1" | "A2" | "B1" | "B2-C1";
};

export const FRASI: FraseEsercizio[] = [
  // A1
  {
    livello: "A1",
    testo: "My sister is a teacher.",
    it: "Mia sorella è un'insegnante.",
  },
  {
    livello: "A1",
    testo: "We live in a small house.",
    it: "Viviamo in una casa piccola.",
  },
  {
    livello: "A1",
    testo: "There are two cats in the garden.",
    it: "Ci sono due gatti in giardino.",
  },
  {
    livello: "A1",
    testo: "She goes to school by bus.",
    it: "Va a scuola in autobus.",
  },
  {
    livello: "A1",
    testo: "The children are playing in the park.",
    it: "I bambini stanno giocando al parco.",
  },
  { livello: "A1", testo: "Do you like pizza?", it: "Ti piace la pizza?" },
  {
    livello: "A1",
    testo: "Don't open the window!",
    it: "Non aprire la finestra!",
  },
  {
    livello: "A1",
    testo: "I usually drink coffee in the morning.",
    it: "Di solito bevo il caffè la mattina.",
  },
  { livello: "A1", testo: "Are you tired?", it: "Sei stanco?" },
  {
    livello: "A1",
    testo: "We have got a big house.",
    it: "Abbiamo una casa grande.",
  },
  { livello: "A1", testo: "Where do you live?", it: "Dove abiti?" },
  {
    livello: "A1",
    testo: "My brother's car is red.",
    it: "La macchina di mio fratello è rossa.",
  },
  {
    livello: "A1",
    testo: "I am a student at Oxford.",
    it: "Sono uno studente a Oxford.",
  },
  {
    livello: "A1",
    testo: "He is from Scotland.",
    it: "Lui è scozzese.",
  },
  {
    livello: "A1",
    testo: "Is your brother at home?",
    it: "Tuo fratello è a casa?",
  },
  {
    livello: "A1",
    testo: "We aren't hungry.",
    it: "Non abbiamo fame.",
  },
  {
    livello: "A1",
    testo: "Our teacher is very kind.",
    it: "La nostra insegnante è molto gentile.",
  },
  {
    livello: "A1",
    testo: "It is cold today.",
    it: "Oggi fa freddo.",
  },
  {
    livello: "A1",
    testo: "My name is Laura.",
    it: "Mi chiamo Laura.",
  },
  {
    livello: "A1",
    testo: "Her parents are doctors.",
    it: "I suoi genitori sono medici.",
  },
  {
    livello: "A1",
    testo: "This is my new phone.",
    it: "Questo è il mio nuovo telefono.",
  },
  {
    livello: "A1",
    testo: "Those shoes are very expensive.",
    it: "Quelle scarpe sono molto care.",
  },
  {
    livello: "A1",
    testo: "An apple is on the table.",
    it: "Sul tavolo c'è una mela.",
  },
  {
    livello: "A1",
    testo: "I have an older brother.",
    it: "Ho un fratello più grande.",
  },
  {
    livello: "A1",
    testo: "She has got blue eyes.",
    it: "Ha gli occhi azzurri.",
  },
  {
    livello: "A1",
    testo: "Have you got a pen?",
    it: "Hai una penna?",
  },
  {
    livello: "A1",
    testo: "They haven't got a car.",
    it: "Non hanno la macchina.",
  },
  {
    livello: "A1",
    testo: "There is a bank near the station.",
    it: "C'è una banca vicino alla stazione.",
  },
  {
    livello: "A1",
    testo: "Is there a pharmacy in this street?",
    it: "C'è una farmacia in questa strada?",
  },
  {
    livello: "A1",
    testo: "There aren't any eggs in the fridge.",
    it: "Non ci sono uova nel frigo.",
  },
  {
    livello: "A1",
    testo: "Her flat has two bedrooms.",
    it: "Il suo appartamento ha due camere da letto.",
  },
  {
    livello: "A1",
    testo: "The lesson starts at nine o'clock.",
    it: "La lezione comincia alle nove.",
  },
  {
    livello: "A1",
    testo: "My birthday is in March.",
    it: "Il mio compleanno è a marzo.",
  },
  {
    livello: "A1",
    testo: "We have lunch at one o'clock.",
    it: "Pranziamo all'una.",
  },
  {
    livello: "A1",
    testo: "I go to the gym on Mondays.",
    it: "Vado in palestra il lunedì.",
  },
  {
    livello: "A1",
    testo: "He works in a hospital.",
    it: "Lavora in un ospedale.",
  },
  {
    livello: "A1",
    testo: "She doesn't eat meat.",
    it: "Non mangia la carne.",
  },
  {
    livello: "A1",
    testo: "Does your sister speak French?",
    it: "Tua sorella parla francese?",
  },
  {
    livello: "A1",
    testo: "What time do you get up?",
    it: "A che ora ti alzi?",
  },
  {
    livello: "A1",
    testo: "My father watches the news every evening.",
    it: "Mio padre guarda il telegiornale ogni sera.",
  },
  {
    livello: "A1",
    testo: "The shop closes at six o'clock.",
    it: "Il negozio chiude alle sei.",
  },
  {
    livello: "A1",
    testo: "We never go to the cinema on Sundays.",
    it: "Non andiamo mai al cinema la domenica.",
  },
  {
    livello: "A1",
    testo: "He is never late.",
    it: "Non è mai in ritardo.",
  },
  {
    livello: "A1",
    testo: "How often do you play tennis?",
    it: "Quanto spesso giochi a tennis?",
  },
  {
    livello: "A1",
    testo: "I sometimes read in bed.",
    it: "A volte leggo a letto.",
  },
  {
    livello: "A1",
    testo: "I am reading a book about Oxford.",
    it: "Sto leggendo un libro su Oxford.",
  },
  {
    livello: "A1",
    testo: "The children are sleeping upstairs.",
    it: "I bambini stanno dormendo al piano di sopra.",
  },
  {
    livello: "A1",
    testo: "What are you doing now?",
    it: "Che cosa stai facendo adesso?",
  },
  {
    livello: "A1",
    testo: "It is raining again.",
    it: "Sta piovendo di nuovo.",
  },
  {
    livello: "A1",
    testo: "She isn't listening to the teacher.",
    it: "Non sta ascoltando l'insegnante.",
  },
  {
    livello: "A1",
    testo: "He usually drives to the office, but today he is taking the train.",
    it: "Di solito va in ufficio in macchina, ma oggi prende il treno.",
  },
  {
    livello: "A1",
    testo: "I know the answer.",
    it: "So la risposta.",
  },
  {
    livello: "A1",
    testo: "Do you understand the question?",
    it: "Capisci la domanda?",
  },
  {
    livello: "A1",
    testo: "This bag is mine.",
    it: "Questa borsa è mia.",
  },
  {
    livello: "A1",
    testo: "These apples are delicious.",
    it: "Queste mele sono deliziose.",
  },
  {
    livello: "A1",
    testo: "Is this your bike?",
    it: "Questa è la tua bici?",
  },
  {
    livello: "A1",
    testo: "Can you help me?",
    it: "Puoi aiutarmi?",
  },
  {
    livello: "A1",
    testo: "I can see the river from my window.",
    it: "Vedo il fiume dalla mia finestra.",
  },
  {
    livello: "A1",
    testo: "Give me the keys, please.",
    it: "Dammi le chiavi, per favore.",
  },
  {
    livello: "A1",
    testo: "Could I have some water, please?",
    it: "Potrei avere un po' d'acqua, per favore?",
  },
  {
    livello: "A1",
    testo: "There is some bread in the kitchen.",
    it: "C'è del pane in cucina.",
  },
  {
    livello: "A1",
    testo: "We need some chairs for the party.",
    it: "Ci servono delle sedie per la festa.",
  },
  {
    livello: "A1",
    testo: "I have a few friends in London.",
    it: "Ho qualche amico a Londra.",
  },
  {
    livello: "A1",
    testo: "Is there a hospital in your town?",
    it: "C'è un ospedale nella tua città?",
  },
  {
    livello: "A1",
    testo: "Open your books, please.",
    it: "Aprite i libri, per favore.",
  },
  {
    livello: "A1",
    testo: "Don't be late!",
    it: "Non fare tardi!",
  },
  {
    livello: "A1",
    testo: "Let's go to the park.",
    it: "Andiamo al parco.",
  },
  {
    livello: "A1",
    testo: "Turn left at the traffic lights.",
    it: "Gira a sinistra al semaforo.",
  },
  {
    livello: "A1",
    testo: "I like swimming in the sea.",
    it: "Mi piace nuotare nel mare.",
  },
  {
    livello: "A1",
    testo: "She loves dancing.",
    it: "Adora ballare.",
  },
  {
    livello: "A1",
    testo: "I would like a cup of tea, please.",
    it: "Vorrei una tazza di tè, per favore.",
  },
  {
    livello: "A1",
    testo: "Would you like some cake?",
    it: "Vuoi un po' di torta?",
  },
  {
    livello: "A1",
    testo: "I prefer tea to coffee.",
    it: "Preferisco il tè al caffè.",
  },
  {
    livello: "A1",
    testo: "I was at home yesterday.",
    it: "Ieri ero a casa.",
  },
  {
    livello: "A1",
    testo: "Were you tired after the trip?",
    it: "Eri stanco dopo il viaggio?",
  },
  {
    livello: "A1",
    testo: "There were many people at the concert.",
    it: "C'era molta gente al concerto.",
  },
  {
    livello: "A1",
    testo: "Shakespeare was born in Stratford.",
    it: "Shakespeare nacque a Stratford.",
  },
  {
    livello: "A1",
    testo: "We visited the museum last week.",
    it: "Abbiamo visitato il museo la settimana scorsa.",
  },
  {
    livello: "A1",
    testo: "She studied in Oxford for two years.",
    it: "Ha studiato a Oxford per due anni.",
  },
  {
    livello: "A1",
    testo: "I bought a new jacket on Saturday.",
    it: "Sabato ho comprato una giacca nuova.",
  },
  {
    livello: "A1",
    testo: "They went to the beach yesterday.",
    it: "Ieri sono andati al mare.",
  },
  {
    livello: "A1",
    testo: "He wrote a long letter to his mother.",
    it: "Ha scritto una lunga lettera a sua madre.",
  },
  {
    livello: "A1",
    testo: "I didn't see you at the party.",
    it: "Non ti ho visto alla festa.",
  },
  {
    livello: "A1",
    testo: "Did she call you last night?",
    it: "Ti ha chiamato ieri sera?",
  },
  {
    livello: "A1",
    testo: "What did you do at the weekend?",
    it: "Che cosa hai fatto nel fine settimana?",
  },
  {
    livello: "A1",
    testo: "Who broke the window?",
    it: "Chi ha rotto la finestra?",
  },
  {
    livello: "A1",
    testo: "I could swim when I was six.",
    it: "Sapevo nuotare quando avevo sei anni.",
  },
  {
    livello: "A1",
    testo: "She can't drive.",
    it: "Non sa guidare.",
  },
  {
    livello: "A1",
    testo: "London is bigger than Oxford.",
    it: "Londra è più grande di Oxford.",
  },
  {
    livello: "A1",
    testo: "Physics is more difficult than maths.",
    it: "La fisica è più difficile della matematica.",
  },
  {
    livello: "A1",
    testo: "It is the oldest building in the city.",
    it: "È l'edificio più antico della città.",
  },
  {
    livello: "A1",
    testo: "My sister is taller than me.",
    it: "Mia sorella è più alta di me.",
  },
  {
    livello: "A1",
    testo: "The weather is better today.",
    it: "Oggi il tempo è migliore.",
  },
  {
    livello: "A1",
    testo: "I usually walk to university.",
    it: "Di solito vado all'università a piedi.",
  },
  {
    livello: "A1",
    testo: "The museum is opposite the park.",
    it: "Il museo è di fronte al parco.",
  },
  {
    livello: "A1",
    testo: "We live on the second floor.",
    it: "Abitiamo al secondo piano.",
  },
  {
    livello: "A1",
    testo: "Where is the station, please?",
    it: "Dov'è la stazione, per favore?",
  },
  {
    livello: "A1",
    testo: "My dog is under the table.",
    it: "Il mio cane è sotto il tavolo.",
  },
  {
    livello: "A1",
    testo: "Can I pay with my card?",
    it: "Posso pagare con la mia carta?",
  },
  {
    livello: "A1",
    testo: "My brother is allergic to cats.",
    it: "Mio fratello è allergico ai gatti.",
  },

  // A2
  {
    livello: "A2",
    testo: "Did you go to the cinema with your friends yesterday?",
    it: "Ieri sei andato al cinema con i tuoi amici?",
  },
  {
    livello: "A2",
    testo: "They are going to visit Oxford next summer.",
    it: "La prossima estate visiteranno Oxford (hanno già deciso di farlo).",
  },
  {
    livello: "A2",
    testo: "I will call you tomorrow.",
    it: "Ti chiamo domani.",
  },
  {
    livello: "A2",
    testo: "She gave her brother a beautiful present.",
    it: "Ha fatto un bel regalo a suo fratello.",
  },
  {
    livello: "A2",
    testo: "I have already finished my homework.",
    it: "Ho già finito i compiti.",
  },
  {
    livello: "A2",
    testo: "I went to the shop to buy some milk.",
    it: "Sono andato al negozio a comprare del latte.",
  },
  {
    livello: "A2",
    testo: "I want to learn English.",
    it: "Voglio imparare l'inglese.",
  },
  {
    livello: "A2",
    testo: "He went home and bought some apples.",
    it: "È andato a casa e ha comprato delle mele.",
  },
  {
    livello: "A2",
    testo: "If it rains, we will stay at home.",
    it: "Se piove, resteremo a casa.",
  },
  {
    livello: "A2",
    testo: "If I had more time, I would learn Japanese.",
    it: "Se avessi più tempo, imparerei il giapponese.",
  },
  {
    livello: "A2",
    testo: "You must wear a uniform at school.",
    it: "A scuola devi indossare la divisa.",
  },
  {
    livello: "A2",
    testo: "She cut the bread with a knife.",
    it: "Ha tagliato il pane con un coltello.",
  },
  {
    livello: "A2",
    testo: "I am going to study medicine.",
    it: "Studierò medicina.",
  },
  {
    livello: "A2",
    testo: "We are going to visit our grandparents at Christmas.",
    it: "Andremo a trovare i nonni a Natale.",
  },
  {
    livello: "A2",
    testo: "They are going to move to Leeds next year.",
    it: "Si trasferiranno a Leeds l'anno prossimo.",
  },
  {
    livello: "A2",
    testo: "She isn't going to buy that dress.",
    it: "Non comprerà quel vestito.",
  },
  {
    livello: "A2",
    testo: "What are you going to do after the exam?",
    it: "Che cosa farai dopo l'esame?",
  },
  {
    livello: "A2",
    testo: "I am meeting my tutor at three o'clock.",
    it: "Alle tre vedo il mio tutor.",
  },
  {
    livello: "A2",
    testo: "We are flying to Rome on Friday.",
    it: "Venerdì voliamo a Roma.",
  },
  {
    livello: "A2",
    testo: "The train leaves at six o'clock.",
    it: "Il treno parte alle sei.",
  },
  {
    livello: "A2",
    testo: "I'll carry your bags.",
    it: "Ti porto io le borse.",
  },
  {
    livello: "A2",
    testo: "I think that it will rain.",
    it: "Penso che pioverà.",
  },
  {
    livello: "A2",
    testo: "It will rain soon.",
    it: "Presto pioverà.",
  },
  {
    livello: "A2",
    testo: "She will probably arrive late.",
    it: "Probabilmente arriverà tardi.",
  },
  {
    livello: "A2",
    testo: "I might go to London this weekend.",
    it: "Forse questo fine settimana vado a Londra.",
  },
  {
    livello: "A2",
    testo: "It may snow tomorrow.",
    it: "Domani potrebbe nevicare.",
  },
  {
    livello: "A2",
    testo: "Shall I open the window?",
    it: "Apro la finestra?",
  },
  {
    livello: "A2",
    testo: "I have visited Scotland twice.",
    it: "Sono stato in Scozia due volte.",
  },
  {
    livello: "A2",
    testo: "Have you ever eaten Indian food?",
    it: "Hai mai mangiato cibo indiano?",
  },
  {
    livello: "A2",
    testo: "She has never seen the sea.",
    it: "Non ha mai visto il mare.",
  },
  {
    livello: "A2",
    testo: "My brother has gone to the supermarket.",
    it: "Mio fratello è andato al supermercato.",
  },
  {
    livello: "A2",
    testo: "I have lost my keys.",
    it: "Ho perso le chiavi.",
  },
  {
    livello: "A2",
    testo: "They have broken the printer again.",
    it: "Hanno rotto di nuovo la stampante.",
  },
  {
    livello: "A2",
    testo: "We have just finished dinner.",
    it: "Abbiamo appena finito di cenare.",
  },
  {
    livello: "A2",
    testo: "I have already read this book.",
    it: "Ho già letto questo libro.",
  },
  {
    livello: "A2",
    testo: "Have you finished your essay yet?",
    it: "Hai già finito il saggio?",
  },
  {
    livello: "A2",
    testo: "I haven't decided yet.",
    it: "Non ho ancora deciso.",
  },
  {
    livello: "A2",
    testo: "The Prime Minister has resigned.",
    it: "Il primo ministro si è dimesso.",
  },
  {
    livello: "A2",
    testo: "I have drunk three cups of coffee today.",
    it: "Oggi ho bevuto tre tazze di caffè.",
  },
  {
    livello: "A2",
    testo: "When did you arrive in Oxford?",
    it: "Quando sei arrivato a Oxford?",
  },
  {
    livello: "A2",
    testo: "I saw the film last month.",
    it: "Ho visto il film il mese scorso.",
  },
  {
    livello: "A2",
    testo: "She has lived in Bath for ten years.",
    it: "Vive a Bath da dieci anni.",
  },
  {
    livello: "A2",
    testo: "I have known him since 2019.",
    it: "Lo conosco dal 2019.",
  },
  {
    livello: "A2",
    testo: "How long have you lived here?",
    it: "Da quanto tempo abiti qui?",
  },
  {
    livello: "A2",
    testo: "I arrived two months ago.",
    it: "Sono arrivato due mesi fa.",
  },
  {
    livello: "A2",
    testo: "It has been raining since this morning.",
    it: "Piove da stamattina.",
  },
  {
    livello: "A2",
    testo: "He has been working here for six months.",
    it: "Lavora qui da sei mesi.",
  },
  {
    livello: "A2",
    testo: "You must wear a helmet.",
    it: "Devi indossare il casco.",
  },
  {
    livello: "A2",
    testo: "Students mustn't use their phones in the library.",
    it: "Gli studenti non devono usare il telefono in biblioteca.",
  },
  {
    livello: "A2",
    testo: "You don't have to pay.",
    it: "Non devi pagare.",
  },
  {
    livello: "A2",
    testo: "I had to work late yesterday.",
    it: "Ieri ho dovuto lavorare fino a tardi.",
  },
  {
    livello: "A2",
    testo: "You should see a doctor.",
    it: "Dovresti andare da un medico.",
  },
  {
    livello: "A2",
    testo: "You shouldn't eat sweets every day.",
    it: "Non dovresti mangiare dolci tutti i giorni.",
  },
  {
    livello: "A2",
    testo: "Do we have to bring anything?",
    it: "Dobbiamo portare qualcosa?",
  },
  {
    livello: "A2",
    testo: "She speaks English very well.",
    it: "Parla inglese molto bene.",
  },
  {
    livello: "A2",
    testo: "He drives carefully.",
    it: "Guida con prudenza.",
  },
  {
    livello: "A2",
    testo: "My grandmother walks slowly.",
    it: "Mia nonna cammina lentamente.",
  },
  {
    livello: "A2",
    testo: "They work very hard.",
    it: "Lavorano molto sodo.",
  },
  {
    livello: "A2",
    testo: "This soup tastes delicious.",
    it: "Questa zuppa è deliziosa.",
  },
  {
    livello: "A2",
    testo: "If you heat ice, it melts.",
    it: "Se scaldi il ghiaccio, si scioglie.",
  },
  {
    livello: "A2",
    testo: "If it rains tomorrow, we will stay at home.",
    it: "Se domani piove, restiamo a casa.",
  },
  {
    livello: "A2",
    testo: "If you don't hurry, you will miss the bus.",
    it: "Se non ti sbrighi, perderai l'autobus.",
  },
  {
    livello: "A2",
    testo: "I will call you when I arrive.",
    it: "Ti chiamo quando arrivo.",
  },
  {
    livello: "A2",
    testo: "Unless you study, you won't pass the exam.",
    it: "Se non studi, non passerai l'esame.",
  },
  {
    livello: "A2",
    testo: "If it is sunny, we might go to the beach.",
    it: "Se c'è il sole, forse andiamo al mare.",
  },
  {
    livello: "A2",
    testo: "I was watching TV when the lights went out.",
    it: "Stavo guardando la TV quando è andata via la luce.",
  },
  {
    livello: "A2",
    testo: "While I was cooking, my flatmate was studying.",
    it: "Mentre io cucinavo, la mia coinquilina studiava.",
  },
  {
    livello: "A2",
    testo: "What were you doing at nine o'clock last night?",
    it: "Che cosa stavi facendo ieri sera alle nove?",
  },
  {
    livello: "A2",
    testo: "It was raining and the wind was blowing.",
    it: "Pioveva e soffiava il vento.",
  },
  {
    livello: "A2",
    testo: "She was walking home when she met an old friend.",
    it: "Stava tornando a casa a piedi quando ha incontrato una vecchia amica.",
  },
  {
    livello: "A2",
    testo: "When I was a child, I lived in Naples.",
    it: "Da bambino abitavo a Napoli.",
  },
  {
    livello: "A2",
    testo: "If I had a car, I would drive to Scotland.",
    it: "Se avessi una macchina, andrei in Scozia.",
  },
  {
    livello: "A2",
    testo: "If I were you, I would apologise.",
    it: "Se fossi in te, chiederei scusa.",
  },
  {
    livello: "A2",
    testo: "What would you do if you won the lottery?",
    it: "Che cosa faresti se vincessi alla lotteria?",
  },
  {
    livello: "A2",
    testo: "If I knew the answer, I would tell you.",
    it: "Se sapessi la risposta, te la direi.",
  },
  {
    livello: "A2",
    testo: "Would you help me if I asked you?",
    it: "Mi aiuteresti se te lo chiedessi?",
  },
  {
    livello: "A2",
    testo: "She promised that she would call.",
    it: "Ha promesso che avrebbe chiamato.",
  },
  {
    livello: "A2",
    testo: "I would like to book a table for two.",
    it: "Vorrei prenotare un tavolo per due.",
  },
  {
    livello: "A2",
    testo: "Could you tell me the way to the station?",
    it: "Potrebbe indicarmi la strada per la stazione?",
  },
  {
    livello: "A2",
    testo: "Can you call me tomorrow?",
    it: "Puoi chiamarmi domani?",
  },
  {
    livello: "A2",
    testo: "My shower doesn't work.",
    it: "La mia doccia non funziona.",
  },
  {
    livello: "A2",
    testo: "I'd like to return this jumper.",
    it: "Vorrei restituire questo maglione.",
  },
  {
    livello: "A2",
    testo: "It's too small for me.",
    it: "È troppo piccolo per me.",
  },
  {
    livello: "A2",
    testo: "I have missed my connection.",
    it: "Ho perso la coincidenza.",
  },
  {
    livello: "A2",
    testo: "My head has been hurting all day.",
    it: "Mi fa male la testa da tutto il giorno.",
  },
  {
    livello: "A2",
    testo: "I agree with you.",
    it: "Sono d'accordo con te.",
  },
  {
    livello: "A2",
    testo: "I have eaten sushi only once.",
    it: "Ho mangiato il sushi solo una volta.",
  },
  {
    livello: "A2",
    testo: "We are having a party on Saturday.",
    it: "Sabato facciamo una festa.",
  },
  {
    livello: "A2",
    testo: "She has got long dark hair.",
    it: "Ha i capelli lunghi e scuri.",
  },
  {
    livello: "A2",
    testo: "She looks very tired.",
    it: "Sembra molto stanca.",
  },
  {
    livello: "A2",
    testo: "My grandmother gave me this ring.",
    it: "Mia nonna mi ha regalato questo anello.",
  },
  {
    livello: "A2",
    testo: "I hate getting up early.",
    it: "Odio alzarmi presto.",
  },
  {
    livello: "A2",
    testo: "That was a great evening!",
    it: "È stata una serata fantastica!",
  },
  {
    livello: "A2",
    testo: "Can you give me some advice?",
    it: "Puoi darmi un consiglio?",
  },
  {
    livello: "A2",
    testo: "I will see you in two weeks.",
    it: "Ci vediamo tra due settimane.",
  },
  {
    livello: "A2",
    testo: "How did your exam go?",
    it: "Com'è andato il tuo esame?",
  },
  {
    livello: "A2",
    testo: "We could see the castle from our hotel.",
    it: "Dal nostro albergo vedevamo il castello.",
  },
  {
    livello: "A2",
    testo: "My parents didn't let me go to the party.",
    it: "I miei genitori non mi hanno lasciato andare alla festa.",
  },
  {
    livello: "A2",
    testo: "We stayed at a small hotel near the sea.",
    it: "Siamo stati in un piccolo albergo vicino al mare.",
  },
  {
    livello: "A2",
    testo: "The museum was closed, so we went to the park.",
    it: "Il museo era chiuso, quindi siamo andati al parco.",
  },

  // B1
  {
    livello: "B1",
    testo: "My sister has been living in London for three years.",
    it: "Mia sorella vive a Londra da tre anni.",
  },
  {
    livello: "B1",
    testo: "The book was written by a famous author.",
    it: "Il libro è stato scritto da un autore famoso.",
  },
  {
    livello: "B1",
    testo: "The man who lives next door is a doctor.",
    it: "L'uomo che abita qui accanto è un medico.",
  },
  {
    livello: "B1",
    testo: "When I arrived, the film had already started.",
    it: "Quando sono arrivato, il film era già cominciato.",
  },
  {
    livello: "B1",
    testo: "The letter that I wrote was very long.",
    it: "La lettera che ho scritto era molto lunga.",
  },
  {
    livello: "B1",
    testo: "He seems tired because he worked all night.",
    it: "Sembra stanco perché ha lavorato tutta la notte.",
  },
  {
    livello: "B1",
    testo: "I used to play football when I was a child.",
    it: "Da bambino giocavo a calcio.",
  },
  { livello: "B1", testo: "It's late, isn't it?", it: "È tardi, vero?" },
  {
    livello: "B1",
    testo: "I enjoy reading books about history.",
    it: "Mi piace leggere libri di storia.",
  },
  {
    livello: "B1",
    testo: "My parents were born in Italy.",
    it: "I miei genitori sono nati in Italia.",
  },
  {
    livello: "B1",
    testo: "The house was destroyed by the storm.",
    it: "La casa è stata distrutta dalla tempesta.",
  },
  {
    livello: "B1",
    testo: "I think that he is right.",
    it: "Penso che abbia ragione.",
  },
  {
    livello: "B1",
    testo: "When we arrived at the station, the train had already left.",
    it: "Quando siamo arrivati in stazione, il treno era già partito.",
  },
  {
    livello: "B1",
    testo: "I had never seen snow before I came to England.",
    it: "Non avevo mai visto la neve prima di venire in Inghilterra.",
  },
  {
    livello: "B1",
    testo: "She was tired because she hadn't slept well.",
    it: "Era stanca perché non aveva dormito bene.",
  },
  {
    livello: "B1",
    testo: "After she had finished her exams, she went to Greece.",
    it: "Dopo aver finito gli esami, è andata in Grecia.",
  },
  {
    livello: "B1",
    testo: "When we reached the top, the sun had already set.",
    it: "Quando siamo arrivati in cima, il sole era già tramontato.",
  },
  {
    livello: "B1",
    testo: "They had lived in Paris before they moved to London.",
    it: "Avevano vissuto a Parigi prima di trasferirsi a Londra.",
  },
  {
    livello: "B1",
    testo: "We used to live in the countryside.",
    it: "Una volta abitavamo in campagna.",
  },
  {
    livello: "B1",
    testo: "I didn't use to like vegetables.",
    it: "Una volta non mi piacevano le verdure.",
  },
  {
    livello: "B1",
    testo: "Did you use to play the piano?",
    it: "Una volta suonavi il pianoforte?",
  },
  {
    livello: "B1",
    testo: "There used to be a cinema in this street.",
    it: "Una volta in questa strada c'era un cinema.",
  },
  {
    livello: "B1",
    testo: "Every summer we would go to the seaside.",
    it: "Ogni estate andavamo al mare.",
  },
  {
    livello: "B1",
    testo: "I don't mind waiting.",
    it: "Non mi dispiace aspettare.",
  },
  {
    livello: "B1",
    testo: "How long have you been waiting?",
    it: "Da quanto tempo stai aspettando?",
  },
  {
    livello: "B1",
    testo: "I have been learning English for five years.",
    it: "Studio inglese da cinque anni.",
  },
  {
    livello: "B1",
    testo: "She has written three emails this morning.",
    it: "Stamattina ha scritto tre email.",
  },
  {
    livello: "B1",
    testo: "Have you been crying?",
    it: "Hai pianto?",
  },
  {
    livello: "B1",
    testo: "I have had this bike since I was twelve.",
    it: "Ho questa bici da quando avevo dodici anni.",
  },
  {
    livello: "B1",
    testo: "It's cold today, isn't it?",
    it: "Oggi fa freddo, vero?",
  },
  {
    livello: "B1",
    testo: "You live in Jericho, don't you?",
    it: "Abiti a Jericho, vero?",
  },
  {
    livello: "B1",
    testo: "She didn't come to the party, did she?",
    it: "Non è venuta alla festa, vero?",
  },
  {
    livello: "B1",
    testo: "You have never been to Wales, have you?",
    it: "Non sei mai stato in Galles, vero?",
  },
  {
    livello: "B1",
    testo: "If we had taken a taxi, we wouldn't have missed the train.",
    it: "Se avessimo preso un taxi, non avremmo perso il treno.",
  },
  {
    livello: "B1",
    testo: "If you had asked me, I could have helped you.",
    it: "Se me l'avessi chiesto, avrei potuto aiutarti.",
  },
  {
    livello: "B1",
    testo: "What would you have done if you had lost your passport?",
    it: "Che cosa avresti fatto se avessi perso il passaporto?",
  },
  {
    livello: "B1",
    testo: "He said that he was tired.",
    it: "Ha detto che era stanco.",
  },
  {
    livello: "B1",
    testo: "She said that she would call me.",
    it: "Ha detto che mi avrebbe chiamato.",
  },
  {
    livello: "B1",
    testo: "He asked me where I lived.",
    it: "Mi ha chiesto dove abitavo.",
  },
  {
    livello: "B1",
    testo: "She asked me if I was Italian.",
    it: "Mi ha chiesto se ero italiano.",
  },
  {
    livello: "B1",
    testo: "The doctor told me to rest.",
    it: "Il medico mi ha detto di riposare.",
  },
  {
    livello: "B1",
    testo: "The prize was given to a young writer.",
    it: "Il premio è stato dato a una giovane scrittrice.",
  },
  {
    livello: "B1",
    testo: "The bridge was built in 1890.",
    it: "Il ponte fu costruito nel 1890.",
  },
  {
    livello: "B1",
    testo: "Hamlet was written by Shakespeare.",
    it: "Amleto fu scritto da Shakespeare.",
  },
  {
    livello: "B1",
    testo: "My bike has been stolen.",
    it: "Mi hanno rubato la bici.",
  },
  {
    livello: "B1",
    testo: "The results will be published next week.",
    it: "I risultati saranno pubblicati la settimana prossima.",
  },
  {
    livello: "B1",
    testo: "The road is being repaired.",
    it: "Stanno riparando la strada.",
  },
  {
    livello: "B1",
    testo: "Mobile phones must be switched off.",
    it: "I cellulari devono essere spenti.",
  },
  {
    livello: "B1",
    testo: "He was arrested by the police.",
    it: "È stato arrestato dalla polizia.",
  },
  {
    livello: "B1",
    testo: "The woman who lives next door is a nurse.",
    it: "La donna che abita qui accanto è un'infermiera.",
  },
  {
    livello: "B1",
    testo: "She had been waiting for an hour when the bus arrived.",
    it: "Aspettava da un'ora quando è arrivato l'autobus.",
  },
  {
    livello: "B1",
    testo: "The film which we saw last night was amazing.",
    it: "Il film che abbiamo visto ieri sera era fantastico.",
  },
  {
    livello: "B1",
    testo: "That's the student whose bike was stolen.",
    it: "Quello è lo studente a cui hanno rubato la bici.",
  },
  {
    livello: "B1",
    testo: "My sister, who lives in Rome, is a doctor.",
    it: "Mia sorella, che vive a Roma, è medico.",
  },
  {
    livello: "B1",
    testo: "I don't understand what you mean.",
    it: "Non capisco che cosa intendi.",
  },
  {
    livello: "B1",
    testo: "She must be at home.",
    it: "Dev'essere a casa.",
  },
  {
    livello: "B1",
    testo: "He can't be serious.",
    it: "Non può dire sul serio.",
  },
  {
    livello: "B1",
    testo: "They might be stuck in traffic.",
    it: "Forse sono bloccati nel traffico.",
  },
  {
    livello: "B1",
    testo: "He must have forgotten our appointment.",
    it: "Deve essersi dimenticato del nostro appuntamento.",
  },
  {
    livello: "B1",
    testo: "She might have missed the bus.",
    it: "Forse ha perso l'autobus.",
  },
  {
    livello: "B1",
    testo: "I have to do my homework.",
    it: "Devo fare i compiti.",
  },
  {
    livello: "B1",
    testo: "We need to make a decision.",
    it: "Dobbiamo prendere una decisione.",
  },
  {
    livello: "B1",
    testo: "That film made me cry.",
    it: "Quel film mi ha fatto piangere.",
  },
  {
    livello: "B1",
    testo: "Could you lend me your notes?",
    it: "Potresti prestarmi i tuoi appunti?",
  },
  {
    livello: "B1",
    testo: "Can you look after my cat?",
    it: "Puoi badare al mio gatto?",
  },
  {
    livello: "B1",
    testo: "I gave up chocolate for a month.",
    it: "Ho rinunciato al cioccolato per un mese.",
  },
  {
    livello: "B1",
    testo: "Could you turn the music down?",
    it: "Potresti abbassare la musica?",
  },
  {
    livello: "B1",
    testo: "We decided to take the train.",
    it: "Abbiamo deciso di prendere il treno.",
  },
  {
    livello: "B1",
    testo: "Remember to lock the door.",
    it: "Ricordati di chiudere a chiave la porta.",
  },
  {
    livello: "B1",
    testo: "I have decided to study abroad.",
    it: "Ho deciso di studiare all'estero.",
  },
  {
    livello: "B1",
    testo: "Swimming is good for your health.",
    it: "Nuotare fa bene alla salute.",
  },
  {
    livello: "B1",
    testo: "I avoid driving in London.",
    it: "Evito di guidare a Londra.",
  },
  {
    livello: "B1",
    testo: "He left without paying.",
    it: "Se n'è andato senza pagare.",
  },
  {
    livello: "B1",
    testo: "They agreed to help us.",
    it: "Hanno accettato di aiutarci.",
  },
  {
    livello: "B1",
    testo: "She suggested going to the cinema.",
    it: "Ha proposto di andare al cinema.",
  },
  {
    livello: "B1",
    testo: "We managed to finish the project on time.",
    it: "Siamo riusciti a finire il progetto in tempo.",
  },
  {
    livello: "B1",
    testo: "I'm afraid of spiders.",
    it: "Ho paura dei ragni.",
  },
  {
    livello: "B1",
    testo: "We discussed the problem for an hour.",
    it: "Abbiamo discusso il problema per un'ora.",
  },
  {
    livello: "B1",
    testo: "The letter must be signed by your parents.",
    it: "La lettera deve essere firmata dai tuoi genitori.",
  },
  {
    livello: "B1",
    testo: "The samples were analysed in the laboratory.",
    it: "I campioni sono stati analizzati in laboratorio.",
  },
  {
    livello: "B1",
    testo: "However, the results were not clear.",
    it: "Tuttavia, i risultati non erano chiari.",
  },
  {
    livello: "B1",
    testo: "Although it was raining, we had a great time.",
    it: "Anche se pioveva, ci siamo divertiti molto.",
  },
  {
    livello: "B1",
    testo: "I came to England to improve my English.",
    it: "Sono venuto in Inghilterra per migliorare il mio inglese.",
  },
  {
    livello: "B1",
    testo: "I can't wait to see you.",
    it: "Non vedo l'ora di vederti.",
  },
  {
    livello: "B1",
    testo: "I haven't seen him since last summer.",
    it: "Non lo vedo dall'estate scorsa.",
  },
  {
    livello: "B1",
    testo: "I have had a headache for three days.",
    it: "Ho mal di testa da tre giorni.",
  },
  {
    livello: "B1",
    testo: "You can't park here.",
    it: "Qui non puoi parcheggiare.",
  },
  {
    livello: "B1",
    testo: "I booked a double room, but this is a single.",
    it: "Ho prenotato una doppia, ma questa è una singola.",
  },
  {
    livello: "B1",
    testo: "I'm calling about the flat that you advertised.",
    it: "Chiamo per l'appartamento che ha messo in annuncio.",
  },
  {
    livello: "B1",
    testo: "Unless you hurry, you'll miss the coach.",
    it: "Se non ti sbrighi, perderai il pullman.",
  },
  {
    livello: "B1",
    testo: "If I were you, I would take the job.",
    it: "Se fossi in te, accetterei il lavoro.",
  },
  {
    livello: "B1",
    testo: "You should have called me.",
    it: "Avresti dovuto chiamarmi.",
  },
  {
    livello: "B1",
    testo: "I made a terrible mistake.",
    it: "Ho fatto un errore terribile.",
  },
  {
    livello: "B1",
    testo: "The book that you lent me was really interesting.",
    it: "Il libro che mi hai prestato era davvero interessante.",
  },
  {
    livello: "B1",
    testo: "The museum, which opened in 1683, is the oldest in Britain.",
    it: "Il museo, che aprì nel 1683, è il più antico della Gran Bretagna.",
  },
  {
    livello: "B1",
    testo: "I was walking home when it started to rain.",
    it: "Stavo tornando a casa a piedi quando ha cominciato a piovere.",
  },
  {
    livello: "B1",
    testo: "She has been living in London since 2020.",
    it: "Vive a Londra dal 2020.",
  },
  {
    livello: "B1",
    testo: "Would you mind opening the window?",
    it: "Ti dispiacerebbe aprire la finestra?",
  },
  {
    livello: "B1",
    testo: "The meeting has been cancelled.",
    it: "La riunione è stata annullata.",
  },
  {
    livello: "B1",
    testo: "The children were playing in the garden when it started to snow.",
    it: "I bambini stavano giocando in giardino quando ha cominciato a nevicare.",
  },

  // B2-C1
  {
    livello: "B2-C1",
    testo: "If I had studied harder, I would have passed the exam.",
    it: "Se avessi studiato di più, avrei superato l'esame.",
  },
  {
    livello: "B2-C1",
    testo: "You should have told me the truth.",
    it: "Avresti dovuto dirmi la verità.",
  },
  {
    livello: "B2-C1",
    testo: "Although it was raining, we went out.",
    it: "Anche se pioveva, siamo usciti.",
  },
  {
    livello: "B2-C1",
    testo: "By next June, she will have finished her degree.",
    it: "Entro giugno prossimo avrà finito la laurea.",
  },
  {
    livello: "B2-C1",
    testo: "The students who had been waiting for hours were exhausted.",
    it: "Gli studenti, che aspettavano da ore, erano esausti.",
  },
  {
    livello: "B2-C1",
    testo: "If I had taken that job, I would be rich now.",
    it: "Se avessi accettato quel lavoro, adesso sarei ricco.",
  },
  {
    livello: "B2-C1",
    testo: "I shouldn't have eaten that last slice of cake.",
    it: "Non avrei dovuto mangiare l'ultima fetta di torta.",
  },
  {
    livello: "B2-C1",
    testo: "We could have won the match.",
    it: "Avremmo potuto vincere la partita.",
  },
  {
    livello: "B2-C1",
    testo: "You could have warned me!",
    it: "Avresti potuto avvisarmi!",
  },
  {
    livello: "B2-C1",
    testo: "She might have taken the wrong road.",
    it: "Forse ha preso la strada sbagliata.",
  },
  {
    livello: "B2-C1",
    testo: "They may have forgotten about the meeting.",
    it: "Forse si sono dimenticati della riunione.",
  },
  {
    livello: "B2-C1",
    testo: "He can't have finished the essay already.",
    it: "Non può aver già finito il saggio.",
  },
  {
    livello: "B2-C1",
    testo: "I didn't need to buy a ticket.",
    it: "Non è stato necessario comprare il biglietto.",
  },
  {
    livello: "B2-C1",
    testo: "If I had studied law, I would be a lawyer now.",
    it: "Se avessi studiato legge, adesso sarei un avvocato.",
  },
  {
    livello: "B2-C1",
    testo: "If I hadn't moved to Oxford, I wouldn't know you.",
    it: "Se non mi fossi trasferito a Oxford, non ti conoscerei.",
  },
  {
    livello: "B2-C1",
    testo: "If she were more careful, she wouldn't have lost her keys.",
    it: "Se fosse più attenta, non avrebbe perso le chiavi.",
  },
  {
    livello: "B2-C1",
    testo: "Rarely have I seen such a beautiful sunset.",
    it: "Raramente ho visto un tramonto così bello.",
  },
  {
    livello: "B2-C1",
    testo: "Never have I felt so tired.",
    it: "Non mi sono mai sentito così stanco.",
  },
  {
    livello: "B2-C1",
    testo: "I do like your new haircut!",
    it: "Il tuo nuovo taglio mi piace davvero!",
  },
  {
    livello: "B2-C1",
    testo: "I did lock the door!",
    it: "La porta l'ho chiusa a chiave, eccome!",
  },
  {
    livello: "B2-C1",
    testo: "I would be grateful if you could send me the details.",
    it: "Le sarei grato se potesse mandarmi i dettagli.",
  },
  {
    livello: "B2-C1",
    testo: "I was wondering if you could help me.",
    it: "Mi chiedevo se potesse aiutarmi.",
  },
  {
    livello: "B2-C1",
    testo: "I love the city, whereas my sister prefers the countryside.",
    it: "Io amo la città, mentre mia sorella preferisce la campagna.",
  },
  {
    livello: "B2-C1",
    testo: "Moreover, the project is too expensive.",
    it: "Inoltre, il progetto è troppo costoso.",
  },
  {
    livello: "B2-C1",
    testo: "Although he is rich, he lives in a tiny flat.",
    it: "Anche se è ricco, vive in un appartamento minuscolo.",
  },
  {
    livello: "B2-C1",
    testo: "There was heavy rain all night.",
    it: "C'è stata una pioggia fortissima tutta la notte.",
  },
  {
    livello: "B2-C1",
    testo: "The exam was a piece of cake.",
    it: "L'esame è stato facilissimo.",
  },
  {
    livello: "B2-C1",
    testo: "The research was carried out in 2020.",
    it: "La ricerca è stata svolta nel 2020.",
  },
  {
    livello: "B2-C1",
    testo: "I have fallen out with my best friend.",
    it: "Ho litigato con la mia migliore amica.",
  },
  {
    livello: "B2-C1",
    testo: "The car broke down on the motorway.",
    it: "La macchina si è guastata in autostrada.",
  },
  {
    livello: "B2-C1",
    testo: "I can't work out the answer.",
    it: "Non riesco a trovare la risposta.",
  },
  {
    livello: "B2-C1",
    testo: "Could you get to the point?",
    it: "Potresti arrivare al punto?",
  },
  {
    livello: "B2-C1",
    testo: "She calls the shots in this office.",
    it: "In questo ufficio è lei a decidere.",
  },
  {
    livello: "B2-C1",
    testo: "Let's play it by ear.",
    it: "Decidiamo strada facendo.",
  },
  {
    livello: "B2-C1",
    testo: "I'll have to bite the bullet.",
    it: "Dovrò stringere i denti.",
  },
  {
    livello: "B2-C1",
    testo: "We'll cross that bridge when we come to it.",
    it: "Affronteremo il problema quando si presenterà.",
  },
  {
    livello: "B2-C1",
    testo: "Are you pulling my leg?",
    it: "Mi stai prendendo in giro?",
  },
  {
    livello: "B2-C1",
    testo: "Please keep me in the loop.",
    it: "Per favore, tienimi aggiornato.",
  },
  {
    livello: "B2-C1",
    testo: "She gave me the cold shoulder.",
    it: "Mi ha trattato con freddezza.",
  },
  {
    livello: "B2-C1",
    testo: "She bent over backwards to help me.",
    it: "Si è fatta in quattro per aiutarmi.",
  },
  {
    livello: "B2-C1",
    testo: "One coffee won't break the bank.",
    it: "Un caffè non ti manderà in rovina.",
  },
  {
    livello: "B2-C1",
    testo: "I'm over the moon!",
    it: "Sono al settimo cielo!",
  },
  {
    livello: "B2-C1",
    testo: "I've got butterflies in my stomach.",
    it: "Ho le farfalle nello stomaco.",
  },
  {
    livello: "B2-C1",
    testo: "I'm at the end of my tether.",
    it: "Non ne posso più.",
  },
  {
    livello: "B2-C1",
    testo: "I'm not buying it.",
    it: "Non me la bevo.",
  },
  {
    livello: "B2-C1",
    testo: "It sounds too good to be true.",
    it: "Sembra troppo bello per essere vero.",
  },
  {
    livello: "B2-C1",
    testo: "Tell me about it!",
    it: "A chi lo dici!",
  },
  {
    livello: "B2-C1",
    testo: "I'm all ears.",
    it: "Sono tutto orecchi.",
  },
  {
    livello: "B2-C1",
    testo: "This time tomorrow, I will be flying to New York.",
    it: "Domani a quest'ora starò volando verso New York.",
  },
  {
    livello: "B2-C1",
    testo: "I had my hair cut yesterday.",
    it: "Ieri mi sono fatto tagliare i capelli.",
  },
  {
    livello: "B2-C1",
    testo: "It is said that the college is haunted.",
    it: "Si dice che il college sia infestato.",
  },
  {
    livello: "B2-C1",
    testo: "The college is said to be haunted.",
    it: "Si dice che il college sia infestato.",
  },
  {
    livello: "B2-C1",
    testo: "She had been working there for ten years when she was promoted.",
    it: "Lavorava lì da dieci anni quando è stata promossa.",
  },
  {
    livello: "B2-C1",
    testo: "What I need is a long holiday.",
    it: "Ciò di cui ho bisogno è una lunga vacanza.",
  },
  {
    livello: "B2-C1",
    testo: "The results seem to suggest that the drug is effective.",
    it: "I risultati sembrano indicare che il farmaco sia efficace.",
  },
  {
    livello: "B2-C1",
    testo: "If I weren't so shy, I would have spoken to her.",
    it: "Se non fossi così timido, le avrei parlato.",
  },
  {
    livello: "B2-C1",
    testo: "Only then did I understand the problem.",
    it: "Solo allora ho capito il problema.",
  },
  {
    livello: "B2-C1",
    testo: "She is believed to be the richest woman in the country.",
    it: "Si ritiene che sia la donna più ricca del paese.",
  },
  {
    livello: "B2-C1",
    testo: "The man, whose car had been stolen, called the police.",
    it: "L'uomo, a cui avevano rubato la macchina, chiamò la polizia.",
  },
  {
    livello: "B2-C1",
    testo: "By next year, she will have saved enough money.",
    it: "Entro l'anno prossimo avrà risparmiato abbastanza soldi.",
  },
  {
    livello: "B2-C1",
    testo: "At eight o'clock tomorrow, we will be having dinner.",
    it: "Domani alle otto staremo cenando.",
  },
  {
    livello: "B2-C1",
    testo: "The bridge is being rebuilt after the flood.",
    it: "Il ponte viene ricostruito dopo l'alluvione.",
  },
  {
    livello: "B2-C1",
    testo: "The documents had been signed before the meeting started.",
    it: "I documenti erano stati firmati prima che iniziasse la riunione.",
  },
  {
    livello: "B2-C1",
    testo: "The thief was seen by a neighbour.",
    it: "Il ladro è stato visto da un vicino.",
  },
  {
    livello: "B2-C1",
    testo: "It is believed that the painting is a fake.",
    it: "Si ritiene che il quadro sia un falso.",
  },
  {
    livello: "B2-C1",
    testo: "The suspect is thought to have left the country.",
    it: "Si pensa che il sospettato abbia lasciato il paese.",
  },
  {
    livello: "B2-C1",
    testo: "The minister admitted that he had made a mistake.",
    it: "Il ministro ha ammesso di aver commesso un errore.",
  },
  {
    livello: "B2-C1",
    testo: "She explained that the train had been cancelled.",
    it: "Ha spiegato che il treno era stato cancellato.",
  },
  {
    livello: "B2-C1",
    testo: "He insisted that he was innocent.",
    it: "Ha insistito di essere innocente.",
  },
  {
    livello: "B2-C1",
    testo: "If he had listened to his doctor, he would be healthier now.",
    it: "Se avesse ascoltato il medico, adesso starebbe meglio.",
  },
  {
    livello: "B2-C1",
    testo: "If you had told me the truth, I wouldn't be so angry now.",
    it: "Se mi avessi detto la verità, adesso non sarei così arrabbiato.",
  },
  {
    livello: "B2-C1",
    testo: "If she spoke French, she would have got the job.",
    it: "Se parlasse francese, avrebbe ottenuto il lavoro.",
  },
  {
    livello: "B2-C1",
    testo: "He must have been very tired after the journey.",
    it: "Doveva essere molto stanco dopo il viaggio.",
  },
  {
    livello: "B2-C1",
    testo: "They might have been stuck in traffic.",
    it: "Forse erano bloccati nel traffico.",
  },
  {
    livello: "B2-C1",
    testo: "She could have been a famous singer.",
    it: "Avrebbe potuto essere una cantante famosa.",
  },
  {
    livello: "B2-C1",
    testo: "Seldom have I heard such a beautiful voice.",
    it: "Raramente ho sentito una voce così bella.",
  },
  {
    livello: "B2-C1",
    testo: "Although the hotel was expensive, the service was poor.",
    it: "Anche se l'albergo era caro, il servizio era scadente.",
  },
  {
    livello: "B2-C1",
    testo: "I had the car repaired last week.",
    it: "La settimana scorsa ho fatto riparare la macchina.",
  },
  {
    livello: "B2-C1",
    testo: "The government has introduced a new law.",
    it: "Il governo ha introdotto una nuova legge.",
  },
  {
    livello: "B2-C1",
    testo: "These findings suggest that sleep improves memory.",
    it: "Questi risultati indicano che il sonno migliora la memoria.",
  },
  {
    livello: "B2-C1",
    testo: "The meeting has been postponed until next week.",
    it: "La riunione è stata rimandata alla settimana prossima.",
  },
  {
    livello: "B2-C1",
    testo: "We had been travelling for hours when the car broke down.",
    it: "Viaggiavamo da ore quando la macchina si è guastata.",
  },
  {
    livello: "B2-C1",
    testo: "You must have been worried.",
    it: "Dovevi essere preoccupato.",
  },
  {
    livello: "B2-C1",
    testo: "The police have arrested two men.",
    it: "La polizia ha arrestato due uomini.",
  },
  {
    livello: "B2-C1",
    testo: "He claimed that he had seen a ghost.",
    it: "Sosteneva di aver visto un fantasma.",
  },
  {
    livello: "B2-C1",
    testo: "If she hadn't missed the bus, she would have arrived on time.",
    it: "Se non avesse perso l'autobus, sarebbe arrivata in tempo.",
  },
  {
    livello: "B2-C1",
    testo: "I would have called you if I had had your number.",
    it: "Ti avrei chiamato se avessi avuto il tuo numero.",
  },
  {
    livello: "B2-C1",
    testo: "He might have left his keys at home.",
    it: "Forse ha lasciato le chiavi a casa.",
  },
  {
    livello: "B2-C1",
    testo: "The castle was built in the twelfth century.",
    it: "Il castello fu costruito nel dodicesimo secolo.",
  },
  {
    livello: "B2-C1",
    testo: "The novel has been translated into twenty languages.",
    it: "Il romanzo è stato tradotto in venti lingue.",
  },
  {
    livello: "B2-C1",
    testo: "The new hospital will be opened by the mayor.",
    it: "Il nuovo ospedale sarà inaugurato dal sindaco.",
  },
  {
    livello: "B2-C1",
    testo: "My grandfather, who was a teacher, loved poetry.",
    it: "Mio nonno, che era insegnante, amava la poesia.",
  },
  {
    livello: "B2-C1",
    testo: "Never have I seen so many people.",
    it: "Non ho mai visto così tanta gente.",
  },
  {
    livello: "B2-C1",
    testo: "Although she studied hard, she failed the exam.",
    it: "Anche se ha studiato molto, è stata bocciata all'esame.",
  },
  {
    livello: "B2-C1",
    testo: "She has been living abroad for many years.",
    it: "Vive all'estero da molti anni.",
  },
  {
    livello: "B2-C1",
    testo: "The results will be announced tomorrow.",
    it: "I risultati saranno annunciati domani.",
  },
  {
    livello: "B2-C1",
    testo: "Prices have risen dramatically.",
    it: "I prezzi sono aumentati in modo drastico.",
  },
  {
    livello: "B2-C1",
    testo: "They should have apologised.",
    it: "Avrebbero dovuto chiedere scusa.",
  },
  {
    livello: "B2-C1",
    testo: "If the weather had been better, we would have gone to the beach.",
    it: "Se il tempo fosse stato migliore, saremmo andati al mare.",
  },
  {
    livello: "B2-C1",
    testo: "The thief was caught while he was leaving the shop.",
    it: "Il ladro è stato preso mentre usciva dal negozio.",
  },
];
