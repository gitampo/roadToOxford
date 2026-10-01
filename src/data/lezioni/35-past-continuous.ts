import { Lezione } from "@/types/lezione";

export const pastContinuous: Lezione = {
  id: "35",
  titolo: "Past Continuous e Past Simple",
  descrizione: "Raccontare imprevisti e storie",
  chiavi: "passato progressivo, while, when",
  livello: "A2",
  citazione: {
    testo: "As I was going to St Ives, I met a man with seven wives.",
    fonte: "Filastrocca inglese",
    traduzione: "Mentre andavo a St Ives, incontrai un uomo con sette mogli.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COME SI FORMA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Was / were + verbo in -ing. Corrisponde a \"stavo facendo\" o all'imperfetto \"facevo\":",
        },
        {
          tipo: "tabella",
          righe: [
            ["I / he / she / it was working", "stavo, stava lavorando"],
            ["you / we / they were working", "stavi, stavamo, stavano lavorando"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I was reading at ten o'clock.", it: "Alle dieci stavo leggendo." },
            { en: "They weren't listening.", it: "Non stavano ascoltando." },
            { en: "What were you doing?", it: "Cosa stavi facendo?" },
          ],
        },
      ],
    },
    {
      titolo: "UN'AZIONE IN CORSO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il past continuous descrive un'azione che era in corso in un momento del passato. Non dice quando è iniziata o finita:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "At eight o'clock I was having dinner.", it: "Alle otto stavo cenando." },
            { en: "This time yesterday I was travelling.", it: "Ieri a quest'ora ero in viaggio." },
          ],
        },
      ],
    },
    {
      titolo: "L'IMPREVISTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'uso più comune: un'azione lunga (past continuous) interrotta da un'azione breve (past simple):",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I was having a shower when the phone rang.", it: "Stavo facendo la doccia quando ha squillato il telefono." },
            { en: "She was walking home when she saw the accident.", it: "Stava tornando a casa quando ha visto l'incidente." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "When introduce di solito l'azione breve, while quella lunga: \"While I was cooking, the lights went out\".",
        },
      ],
    },
    {
      titolo: "DUE AZIONI INSIEME",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Due azioni lunghe nello stesso momento vanno tutte e due al past continuous, spesso con while:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "While I was studying, my brother was playing video games.", it: "Mentre io studiavo, mio fratello giocava ai videogiochi." },
          ],
        },
      ],
    },
    {
      titolo: "LO SFONDO DI UNA STORIA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "All'inizio di un racconto, il past continuous descrive la scena. Poi il past simple fa andare avanti la storia:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It was raining and the wind was blowing.", it: "Pioveva e tirava vento." },
            { en: "People were hurrying home.", it: "La gente si affrettava verso casa." },
            { en: "Suddenly, someone knocked at the door.", it: "All'improvviso qualcuno bussò alla porta." },
          ],
        },
      ],
    },
    {
      titolo: "NON SEMPRE È IMPERFETTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'imperfetto italiano non si traduce sempre con il past continuous. Per le abitudini passate si usa il past simple (o used to, lezione 38{1}), e per i verbi di stato niente continuous:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "When I was a child I was playing football every day.", sbagliato: true },
            { en: "When I was a child I played football every day.", it: "Da bambino giocavo a calcio ogni giorno." },
            { en: "I was knowing the answer.", sbagliato: true },
            { en: "I knew the answer.", it: "Sapevo la risposta." },
          ],
        },
      ],
    },
  ],
};
