import { Lezione } from "@/types/lezione";

export const pastSimpleIrregular: Lezione = {
  id: "23",
  titolo: "Past Simple: verbi irregolari",
  descrizione: "Raccontare eventi passati",
  chiavi: "verbi irregolari, paradigmi",
  livello: "[A1]",
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
  ],
};
