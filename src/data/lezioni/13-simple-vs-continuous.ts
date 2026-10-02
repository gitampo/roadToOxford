import { Lezione } from "@/types/lezione";

export const simpleVsContinuous: Lezione = {
  id: "13",
  titolo: "Present Simple o Continuous?",
  descrizione: "Distinguere abitudini e azioni in corso; i verbi di stato",
  chiavi: "verbi di stato, state verbs",
  livello: "A1",
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
          testo: "Simple o continuous?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Scegli la forma giusta.",
          citazione: "I ___ tennis every Saturday.",
          opzioni: ["play", "am playing"],
          giusta: 0,
          spiegazione: "Every Saturday indica un'abitudine: present simple.",
          rivedi: "LA DIFFERENZA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Scegli la forma giusta.",
          citazione: "Be quiet! The baby ___.",
          opzioni: ["sleeps", "is sleeping"],
          giusta: 1,
          spiegazione: "Succede adesso, mentre parli: present continuous.",
          rivedi: "LA DIFFERENZA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Scegli la forma giusta.",
          citazione: "He usually drives to work, but today he ___.",
          opzioni: ["walks", "is walking"],
          giusta: 1,
          spiegazione: "Usually → abitudine (simple). Today → eccezione temporanea (continuous).",
          rivedi: "PERMANENTE O TEMPORANEO?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase dice che vivi a Milano solo per un periodo?",
          opzioni: ["I live in Milan.", "I'm living in Milan."],
          giusta: 1,
          spiegazione: "Il continuous rende la situazione temporanea.",
          rivedi: "PERMANENTE O TEMPORANEO?",
        },
        {
          tipo: "sottotitolo",
          testo: "I verbi di stato",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca i verbi di stato, che di solito NON vanno al continuous.",
          parole: ["know", "run", "want", "eat", "believe", "need", "write", "belong"],
          giuste: [0, 2, 4, 5, 7],
          spiegazione: "Know, want, believe, need e belong descrivono stati. Run, eat e write sono azioni.",
          rivedi: "I VERBI DI STATO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["I'm knowing the answer.", "I know the answer."],
          giusta: 1,
          spiegazione: "Know è un verbo di stato: resta al simple anche se parli di adesso.",
          rivedi: "I VERBI DI STATO",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Voglio un caffè\" (adesso).",
          prima: "I",
          dopo: "a coffee.",
          risposte: ["want"],
          spiegazione: "Want è di stato: niente continuous, anche per un desiderio di adesso.",
          rivedi: "I VERBI DI STATO",
        },
        {
          tipo: "sottotitolo",
          testo: "Due significati",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "In quale frase think è un'azione (e quindi va al continuous)?",
          opzioni: ["I think it's a good idea.", "I'm thinking about you."],
          giusta: 1,
          spiegazione: "Think come opinione è di stato; think about come \"riflettere\" è un'azione.",
          rivedi: "VERBI CON DUE SIGNIFICATI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Scegli la forma giusta.",
          citazione: "Sorry, I can't talk now. I ___ lunch.",
          opzioni: ["have", "'m having"],
          giusta: 1,
          spiegazione: "Have lunch è un'azione (pranzare), quindi va al continuous. Have come possesso no.",
          rivedi: "VERBI CON DUE SIGNIFICATI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Sento della musica\"?",
          opzioni: ["I'm hearing music.", "I can hear music.", "I'm listening music."],
          giusta: 1,
          spiegazione:
            "Hear è una percezione involontaria: si usa con can. Listen è volontario e vuole to: I'm listening to music.",
          rivedi: "SEE E HEAR",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "A un esame, come scrivi \"Mi piace molto\"?",
          opzioni: ["I'm loving it.", "I love it."],
          giusta: 1,
          spiegazione: "\"I'm lovin' it\" è uno slogan che rompe la regola apposta. Nella lingua corretta love è di stato.",
          rivedi: "LO SLOGAN SBAGLIATO",
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
          consegna: "Scrivi 4–5 frasi: cosa fai di solito e cosa stai facendo di diverso in questo periodo.",
          punti: ["un'abitudine (simple)", "una cosa diversa in questo periodo (continuous)", "una cosa che stai facendo adesso", "un verbo di stato (want, need, know…)"],
          modello:
            "I usually work in an office in Turin, but this month I'm working from home. Every morning I go to the gym, but this week I'm resting because my leg hurts. Right now I'm writing this text. I need a holiday!",
          spiegazione:
            "Controlla che ogni verbo segua la logica: abitudine → simple, temporaneo o adesso → continuous, stato → simple.",
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
