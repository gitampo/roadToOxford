import { Lezione } from "@/types/lezione";

export const simpleVsContinuous: Lezione = {
  id: "13",
  titolo: "Present Simple o Continuous?",
  descrizione: "Distinguere abitudini e azioni in corso; i verbi di stato",
  chiavi: "verbi di stato, state verbs",
  livello: "[A1]",
  citazione: {
    testo: "I'm lovin' it.",
    fonte: "Slogan McDonald's",
    traduzione: "Mi piace un sacco. (Un uso volutamente \"sbagliato\" di un verbo di stato.)",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "LA DIFFERENZA",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["present simple", "abitudini, cose sempre vere"],
            ["present continuous", "adesso, in questo periodo"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I play tennis every Saturday.", it: "Gioco a tennis ogni sabato." },
            { en: "I'm playing tennis now.", it: "Sto giocando a tennis adesso." },
            { en: "She works in London.", it: "Lavora a Londra (è il suo lavoro)." },
            { en: "She's working in London this month.", it: "Questo mese lavora a Londra (è temporaneo)." },
          ],
        },
      ],
    },
    {
      titolo: "PERMANENTE O TEMPORANEO?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La domanda da farsi è: è una cosa stabile o temporanea?",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I live in Milan.", it: "Abito a Milano (da sempre, stabile)." },
            { en: "I'm living in Milan.", it: "Sto abitando a Milano (per un po')." },
            { en: "He usually drives to work, but today he's walking.", it: "Di solito va al lavoro in macchina, ma oggi va a piedi." },
          ],
        },
      ],
    },
    {
      titolo: "I VERBI DI STATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alcuni verbi descrivono uno stato, non un'azione. Di solito non si usano al continuous, nemmeno se parli di adesso:",
        },
        {
          tipo: "tabella",
          righe: [
            ["like, love, hate, want", "gusti e desideri"],
            ["know, understand, believe", "pensieri"],
            ["remember, forget, mean", "memoria e significato"],
            ["belong, own, need", "possesso e bisogno"],
            ["seem, sound", "apparenza"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm knowing the answer.", sbagliato: true },
            { en: "I know the answer.", it: "So la risposta." },
            { en: "I'm wanting a coffee.", sbagliato: true },
            { en: "I want a coffee.", it: "Voglio un caffè." },
          ],
        },
      ],
    },
    {
      titolo: "VERBI CON DUE SIGNIFICATI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alcuni verbi sono di stato in un significato e di azione in un altro:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I think it's a good idea.", it: "Penso che sia una buona idea (opinione)." },
            { en: "I'm thinking about you.", it: "Sto pensando a te (azione)." },
            { en: "I have a car.", it: "Ho una macchina (possesso)." },
            { en: "I'm having lunch.", it: "Sto pranzando (azione)." },
            { en: "This soup tastes good.", it: "Questa zuppa è buona (stato)." },
            { en: "He's tasting the soup.", it: "Sta assaggiando la zuppa (azione)." },
          ],
        },
      ],
    },
    {
      titolo: "SEE E HEAR",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "See e hear sono percezioni involontarie, quindi di solito vanno al simple. Spesso si usano con can:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I can hear music.", it: "Sento della musica." },
            { en: "I'm hearing music.", sbagliato: true },
            { en: "I'm listening to music.", it: "Sto ascoltando musica (azione volontaria)." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Look e listen sono azioni volontarie e vanno bene al continuous. See e hear no.",
        },
      ],
    },
    {
      titolo: "LO SLOGAN SBAGLIATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "\"I'm lovin' it\" è famoso proprio perché mette love, un verbo di stato, al continuous. È una scelta voluta per sembrare più vivace. In un compito o a un esame scrivi \"I love it\".",
        },
        {
          tipo: "nota",
          testo:
            "Nel parlato informale capita di sentire verbi di stato al continuous, per dare enfasi. Prima di usarli così, impara bene la regola.",
        },
      ],
    },
  ],
};
