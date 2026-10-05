import { Lezione } from "@/types/lezione";

export const relativeClauses: Lezione = {
  id: "44",
  titolo: "Le frasi relative",
  descrizione: "Definire persone e cose",
  chiavi: "pronomi relativi, who, which, that",
  livello: "B1",
  citazione: {
    testo: "Not all those who wander are lost.",
    fonte: "J.R.R. Tolkien, Il Signore degli Anelli",
    traduzione: "Non tutti quelli che vagano sono perduti.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "WHO, WHICH, THAT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I pronomi relativi collegano due frasi e corrispondono a \"che\", \"il quale\", \"cui\". In inglese la scelta dipende da cosa indicano:",
        },
        {
          tipo: "tabella",
          righe: [
            ["who", "persone"],
            ["which", "cose e animali"],
            ["that", "persone e cose (più informale)"],
            ["whose", "di cui (possesso)"],
            ["where", "luoghi"],
            ["when", "momenti"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The girl who lives next door is Irish.", it: "La ragazza che abita accanto è irlandese." },
            { en: "The book which I'm reading is great.", it: "Il libro che sto leggendo è bellissimo." },
          ],
        },
      ],
    },
    {
      titolo: "WHO PER LE PERSONE",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "The man which called you", sbagliato: true },
            { en: "The man who called you", it: "L'uomo che ti ha chiamato" },
            { en: "The woman whose car was stolen", it: "La donna a cui hanno rubato la macchina" },
            { en: "The hotel where we stayed", it: "L'albergo dove siamo stati" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Whose si usa anche per le cose: \"a company whose products are famous\".",
        },
      ],
    },
    {
      titolo: "QUANDO SI PUÒ OMETTERE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Se il pronome è il complemento (dopo c'è un altro soggetto), si può togliere. Nel parlato si toglie quasi sempre:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The film (that) we saw was boring.", it: "Il film che abbiamo visto era noioso." },
            { en: "The people (who) I met were friendly.", it: "Le persone che ho conosciuto erano cordiali." },
          ],
        },
        {
          tipo: "testo",
          testo: "Se è il soggetto, non si può togliere:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The man lives next door is a doctor.", sbagliato: true },
            { en: "The man who lives next door is a doctor.", it: "L'uomo che abita accanto è un medico." },
          ],
        },
      ],
    },
    {
      titolo: "DEFINING E NON-DEFINING",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alcune relative dicono di chi stai parlando (defining). Altre aggiungono un'informazione extra: vanno tra virgole e non vogliono that.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "My brother who lives in Rome is a lawyer.", it: "Il mio fratello che abita a Roma è avvocato (ne ho più di uno)." },
            { en: "My brother, who lives in Rome, is a lawyer.", it: "Mio fratello, che abita a Roma, è avvocato (ne ho uno solo)." },
            { en: "Oxford, that is near London, is beautiful.", sbagliato: true },
            { en: "Oxford, which is near London, is beautiful.", it: "Oxford, che è vicina a Londra, è bellissima." },
          ],
        },
      ],
    },
    {
      titolo: "LA PREPOSIZIONE IN FONDO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano la preposizione va prima del pronome (la persona con cui parlo). In inglese, nel parlato, va in fondo alla frase:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "the person I was talking to", it: "la persona con cui parlavo" },
            { en: "the house I grew up in", it: "la casa in cui sono cresciuto" },
            { en: "the person to whom I was talking", it: "la persona con la quale parlavo (formale)" },
          ],
        },
      ],
    },
    {
      titolo: "WHAT: CIÒ CHE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "\"Quello che\", \"ciò che\" si dice what, senza nome davanti:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "What I need is a holiday.", it: "Quello di cui ho bisogno è una vacanza." },
            { en: "I don't understand what you mean.", it: "Non capisco cosa intendi." },
            { en: "That's the thing what I said.", sbagliato: true },
          ],
        },
      ],
    },
  ],
};
