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
];
