import { Lezione } from "@/types/lezione";

export const perfectVsPast: Lezione = {
  id: "30",
  titolo: "Present Perfect o Past Simple?",
  descrizione: "Parlare di eventi recenti",
  chiavi: "just, already, yet",
  livello: "A2",
  citazione: {
    testo: "I have not yet begun to fight!",
    fonte: "John Paul Jones, 1779 (attribuita)",
    traduzione: "Non ho ancora cominciato a combattere!",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "LA DOMANDA DA FARSI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il momento è finito o no? Se il periodo di tempo è concluso, past simple. Se arriva fino ad adesso, present perfect.",
        },
        {
          tipo: "tabella",
          righe: [
            ["past simple", "yesterday, last week, in 2019, ago"],
            ["present perfect", "ever, never, just, already, yet, today, this week"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I went to Rome last year.", it: "L'anno scorso sono andato a Roma." },
            { en: "I've been to Rome twice.", it: "Sono stato a Roma due volte (nella vita)." },
          ],
        },
      ],
    },
    {
      titolo: "DALLA DOMANDA AL RACCONTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Una conversazione tipica inizia con il present perfect (l'esperienza) e continua con il past simple (i dettagli, quando e come):",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Have you ever been to Scotland?", it: "Sei mai stato in Scozia?" },
            { en: "Yes, I have. I went there in 2022.", it: "Sì. Ci sono andato nel 2022." },
            { en: "Did you like it?", it: "Ti è piaciuta?" },
            { en: "Yes, I loved it!", it: "Sì, moltissimo!" },
          ],
        },
      ],
    },
    {
      titolo: "JUST",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Just significa \"appena\". Va tra have e il participio:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've just arrived.", it: "Sono appena arrivato." },
            { en: "She's just left.", it: "È appena uscita." },
          ],
        },
      ],
    },
    {
      titolo: "ALREADY E YET",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Already significa \"già\" e va tra have e il participio. Yet significa \"ancora\" (nelle negative) o \"già\" (nelle domande), e va alla fine:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've already done my homework.", it: "Ho già fatto i compiti." },
            { en: "I haven't finished yet.", it: "Non ho ancora finito." },
            { en: "Have you called her yet?", it: "L'hai già chiamata?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Yet va sempre alla fine della frase. \"I haven't yet finished\" è molto formale.",
        },
      ],
    },
    {
      titolo: "TODAY, THIS WEEK",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con un periodo non ancora finito (oggi, questa settimana, quest'anno) si usa il present perfect:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've drunk three coffees today.", it: "Oggi ho bevuto tre caffè (e la giornata non è finita)." },
            { en: "Have you seen Tom this week?", it: "Hai visto Tom questa settimana?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Se this morning è già finito (è pomeriggio), si usa il past simple: \"I saw him this morning\".",
        },
      ],
    },
    {
      titolo: "LE DOMANDE CON WHEN",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "When chiede un momento preciso, quindi vuole sempre il past simple:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "When have you arrived?", sbagliato: true },
            { en: "When did you arrive?", it: "Quando sei arrivato?" },
          ],
        },
      ],
    },
    {
      titolo: "LE NOTIZIE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Anche le notizie seguono lo schema: si annuncia con il present perfect, si raccontano i dettagli con il past simple.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "A fire has destroyed a school in Leeds.", it: "Un incendio ha distrutto una scuola a Leeds." },
            { en: "It started at about 3 am.", it: "È iniziato verso le 3 di notte." },
            { en: "Nobody was hurt.", it: "Nessuno è rimasto ferito." },
          ],
        },
      ],
    },
  ],
};
