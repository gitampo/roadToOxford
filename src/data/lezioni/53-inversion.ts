import { Lezione } from "@/types/lezione";

export const inversion: Lezione = {
  id: "53",
  titolo: "Inversione ed enfasi",
  descrizione: "Dare enfasi",
  chiavi: "inversione, frasi scisse",
  livello: "B2-C1",
  citazione: {
    testo: "Never in the field of human conflict was so much owed by so many to so few.",
    fonte: "Winston Churchill, 1940",
    traduzione: "Mai nella storia dei conflitti umani così tanti dovettero così tanto a così pochi.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COS'È L'INVERSIONE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Quando una frase inizia con un'espressione negativa o restrittiva, l'ordine diventa quello di una domanda: ausiliare prima del soggetto. Si usa nella lingua scritta, nei discorsi e per dare enfasi.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have never seen such a thing.", it: "Non ho mai visto una cosa simile (normale)." },
            { en: "Never have I seen such a thing.", it: "Mai ho visto una cosa simile (enfatico)." },
          ],
        },
      ],
    },
    {
      titolo: "LE ESPRESSIONI CHE LA RICHIEDONO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["never / rarely / seldom", "mai / raramente"],
            ["not only… but also", "non solo… ma anche"],
            ["no sooner… than", "non appena"],
            ["hardly… when", "appena… che"],
            ["under no circumstances", "in nessun caso"],
            ["not until", "solo quando"],
            ["only then / only after", "solo allora / solo dopo"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Not only is she clever, but she's also kind.", it: "Non solo è intelligente, ma è anche gentile." },
            { en: "No sooner had I arrived than it started to rain.", it: "Ero appena arrivato che ha iniziato a piovere." },
            { en: "Under no circumstances should you open this door.", it: "In nessun caso devi aprire questa porta." },
          ],
        },
      ],
    },
    {
      titolo: "SERVE L'AUSILIARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Come nelle domande, se non c'è un ausiliare si usa do / does / did:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Rarely he goes out.", sbagliato: true },
            { en: "Rarely does he go out.", it: "Esce raramente." },
            { en: "Little did they know…", it: "Non potevano immaginare che…" },
          ],
        },
      ],
    },
    {
      titolo: "INVERSIONE NEI CONDIZIONALI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nell'inglese formale si può togliere if e invertire had, were o should:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Had I known, I would have come.", it: "Se l'avessi saputo, sarei venuto." },
            { en: "Were I you, I would accept.", it: "Se fossi in te, accetterei." },
            { en: "Should you need help, please call us.", it: "Se dovesse aver bisogno di aiuto, ci chiami." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "\"Should you have any questions…\" è una formula tipica delle email formali.",
        },
      ],
    },
    {
      titolo: "LE FRASI SCISSE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per mettere in risalto una parte della frase si usa It is/was… that, oppure What… is:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It was Tom who broke the window.", it: "È stato Tom a rompere la finestra." },
            { en: "It's the noise that I can't stand.", it: "È il rumore che non sopporto." },
            { en: "What I need is a long holiday.", it: "Quello di cui ho bisogno è una lunga vacanza." },
          ],
        },
      ],
    },
    {
      titolo: "DO ENFATICO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Do, does, did in una frase affermativa aggiungono forza. Nel parlato si pronunciano con l'accento:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I do like your dress!", it: "Mi piace davvero il tuo vestito!" },
            { en: "She did tell you, I was there.", it: "Te l'ha detto eccome, c'ero anch'io." },
            { en: "Do sit down.", it: "Si accomodi, prego." },
          ],
        },
      ],
    },
  ],
};
