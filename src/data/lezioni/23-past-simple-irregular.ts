import { Lezione } from "@/types/lezione";

export const pastSimpleIrregular: Lezione = {
  id: "23",
  titolo: "Past Simple: verbi irregolari",
  descrizione: "Raccontare eventi passati",
  chiavi: "verbi irregolari, paradigmi",
  livello: "A1",
  citazione: {
    testo: "I came, I saw, I conquered.",
    fonte: "Giulio Cesare",
    traduzione: "Venni, vidi, vinsi.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "NIENTE -ED",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I verbi irregolari non prendono -ed: hanno una forma propria al passato. Sono circa 200, ma quelli davvero frequenti sono una cinquantina.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I goed to school.", sbagliato: true },
            { en: "I went to school.", it: "Sono andato a scuola." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Come i regolari, sono uguali per tutte le persone: I went, she went, they went.",
        },
      ],
    },
    {
      titolo: "I PIÙ IMPORTANTI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["go → went", "andare"],
            ["have → had", "avere"],
            ["do → did", "fare"],
            ["make → made", "fare, preparare"],
            ["get → got", "ottenere, arrivare"],
            ["say → said", "dire"],
            ["see → saw", "vedere"],
            ["come → came", "venire"],
            ["take → took", "prendere"],
            ["give → gave", "dare"],
          ],
        },
      ],
    },
    {
      titolo: "ALTRI VERBI DI TUTTI I GIORNI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["eat → ate", "mangiare"],
            ["drink → drank", "bere"],
            ["buy → bought", "comprare"],
            ["think → thought", "pensare"],
            ["find → found", "trovare"],
            ["know → knew", "sapere, conoscere"],
            ["leave → left", "partire, lasciare"],
            ["meet → met", "incontrare"],
            ["write → wrote", "scrivere"],
            ["read → read", "leggere"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Read al passato si scrive uguale ma si pronuncia \"red\".",
        },
      ],
    },
    {
      titolo: "COME IMPARARLI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Non esiste una regola, ma ci sono dei gruppi che si somigliano. Impararli a gruppi è più facile:",
        },
        {
          tipo: "tabella",
          righe: [
            ["-ought / -aught", "buy → bought, think → thought, teach → taught"],
            ["i → a", "drink → drank, swim → swam, begin → began"],
            ["ee → e", "meet → met, feel → felt, sleep → slept"],
            ["uguali", "put → put, cut → cut, cost → cost"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Trovi l'elenco completo nella pagina Paradigmi dei verbi irregolari, dalla home.",
        },
      ],
    },
    {
      titolo: "RACCONTARE UN FINE SETTIMANA",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "On Saturday I got up late.", it: "Sabato mi sono alzato tardi." },
            { en: "I met my friends and we went to the cinema.", it: "Ho visto i miei amici e siamo andati al cinema." },
            { en: "Then we ate a pizza.", it: "Poi abbiamo mangiato una pizza." },
            { en: "I came home at midnight.", it: "Sono tornato a casa a mezzanotte." },
          ],
        },
      ],
    },
    {
      titolo: "UNA STORIA DI OXFORD",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel 1862 un professore di Oxford, Charles Dodgson, fece una gita in barca con tre bambine. Una si chiamava Alice.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "He told them a story.", it: "Raccontò loro una storia." },
            { en: "Alice loved it.", it: "Ad Alice piacque molto." },
            { en: "Later he wrote it down.", it: "Più tardi la mise per iscritto." },
            { en: "It became Alice's Adventures in Wonderland.", it: "Diventò Alice nel Paese delle Meraviglie." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Dodgson la pubblicò con lo pseudonimo Lewis Carroll. Trovi i verbi irregolari? Told, wrote, became.",
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
          testo: "I più importanti",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["I goed to school.", "I went to school.", "I wented to school."],
          giusta: 1,
          spiegazione: "Go è irregolare: il passato è went, senza -ed.",
          rivedi: "NIENTE -ED",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni verbo al suo passato.",
          coppie: [
            ["go", "went"],
            ["have", "had"],
            ["see", "saw"],
            ["take", "took"],
            ["give", "gave"],
            ["say", "said"],
          ],
          rivedi: "I PIÙ IMPORTANTI",
        },
        {
          tipo: "completa",
          consegna: "Completa con il passato di \"come\".",
          prima: "She",
          dopo: "home late.",
          risposte: ["came"],
          rivedi: "I PIÙ IMPORTANTI",
        },
        {
          tipo: "completa",
          consegna: "Completa con il passato di \"make\".",
          prima: "We",
          dopo: "a cake for her birthday.",
          risposte: ["made"],
          rivedi: "I PIÙ IMPORTANTI",
        },
        {
          tipo: "sottotitolo",
          testo: "Tutti i giorni",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni verbo al suo passato.",
          coppie: [
            ["eat", "ate"],
            ["buy", "bought"],
            ["find", "found"],
            ["leave", "left"],
            ["write", "wrote"],
          ],
          rivedi: "ALTRI VERBI DI TUTTI I GIORNI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si pronuncia \"read\" al passato?",
          opzioni: ["\"riid\", come al presente", "\"red\""],
          giusta: 1,
          spiegazione: "Si scrive uguale, ma al passato si pronuncia \"red\".",
          rivedi: "ALTRI VERBI DI TUTTI I GIORNI",
        },
        {
          tipo: "sottotitolo",
          testo: "I gruppi",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca i passati del gruppo -ought / -aught.",
          parole: ["bought", "drank", "thought", "met", "taught", "slept"],
          giuste: [0, 2, 4],
          spiegazione: "Bought, thought, taught. Drank è del gruppo i → a, met e slept del gruppo ee → e.",
          rivedi: "COME IMPARARLI",
        },
        {
          tipo: "completa",
          consegna: "Completa con il passato di \"swim\" (gruppo i → a).",
          prima: "I",
          dopo: "in the lake.",
          risposte: ["swam"],
          rivedi: "COME IMPARARLI",
        },
        {
          tipo: "completa",
          consegna: "Completa con il passato di \"cost\".",
          prima: "The ticket",
          dopo: "ten pounds.",
          risposte: ["cost"],
          spiegazione: "Put, cut e cost sono uguali al presente e al passato.",
          rivedi: "COME IMPARARLI",
        },
        {
          tipo: "sottotitolo",
          testo: "Racconta",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Ho visto i miei amici e siamo andati al cinema\".",
          parole: ["went", "friends", "the", "met", "we", "my", "cinema", "I", "to", "and"],
          soluzione: ["I", "met", "my", "friends", "and", "we", "went", "to", "the", "cinema"],
          spiegazione: "\"Vedere gli amici\" in questo senso si dice meet: met al passato.",
          rivedi: "RACCONTARE UN FINE SETTIMANA",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca i verbi irregolari della storia di Alice.",
          parole: ["told", "loved", "wrote", "published", "became"],
          giuste: [0, 2, 4],
          spiegazione: "Told (tell), wrote (write), became (become). Loved e published sono regolari.",
          rivedi: "UNA STORIA DI OXFORD",
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
          consegna: "Racconta il tuo ultimo fine settimana in 5 frasi, con almeno 5 verbi irregolari.",
          punti: ["a che ora ti sei alzato", "chi hai visto", "dove sei andato", "cosa hai mangiato o comprato", "quando sei tornato a casa"],
          modello:
            "Last Saturday I got up at nine. I met my cousin and we went to the market. I bought a book and she found a nice jacket. We ate sushi for lunch. I came home at six and slept for an hour!",
          spiegazione:
            "Conta i verbi irregolari: got, met, went, bought, found, ate, came, slept. Controlla di non aver aggiunto -ed a nessuno.",
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
