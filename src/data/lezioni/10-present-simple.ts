import { Lezione } from "@/types/lezione";

export const presentSimple: Lezione = {
  id: "10",
  titolo: "Present Simple",
  descrizione: "Descrivere la giornata e le abitudini",
  chiavi: "presente semplice, abitudini, routine",
  livello: "[A1]",
  citazione: {
    testo: "The early bird catches the worm.",
    fonte: "Proverbio inglese",
    traduzione: "L'uccello mattiniero cattura il verme. (Il mattino ha l'oro in bocca.)",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "A COSA SERVE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il present simple serve per le abitudini, la routine e le cose sempre vere. Non per quello che succede in questo momento: per quello c'è il present continuous (lezione 12{1}).",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I get up at seven.", it: "Mi alzo alle sette." },
            { en: "She works in a bank.", it: "Lavora in una banca." },
            { en: "Water boils at 100 degrees.", it: "L'acqua bolle a 100 gradi." },
          ],
        },
      ],
    },
    {
      titolo: "LA FORMA AFFERMATIVA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il verbo è uguale per tutti, tranne che per he, she e it, che aggiungono -s:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I work", "io lavoro"],
            ["you work", "tu lavori"],
            ["he / she / it works", "lui / lei lavora"],
            ["we work", "noi lavoriamo"],
            ["you work", "voi lavorate"],
            ["they work", "loro lavorano"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "He play football.", sbagliato: true },
            { en: "He plays football.", it: "Gioca a calcio." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "La -s della terza persona è l'errore più frequente di tutto l'inglese. He, she, it: la -s ci vuole sempre.",
        },
      ],
    },
    {
      titolo: "COME SI SCRIVE LA -S",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le regole sono le stesse del plurale dei sostantivi (lezione 4{2}):",
        },
        {
          tipo: "tabella",
          righe: [
            ["dopo s, sh, ch, x, o → -es", "watches, goes, does"],
            ["consonante + y → -ies", "study → studies"],
            ["vocale + y → -s", "play → plays"],
          ],
        },
        {
          tipo: "testo",
          testo: "Have è irregolare:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She has a dog.", it: "Ha un cane." },
            { en: "She haves a dog.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "LA FORMA NEGATIVA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si usa l'ausiliare do, che non si traduce: don't (do not) o doesn't (does not) + verbo base.",
        },
        {
          tipo: "tabella",
          righe: [
            ["I / you / we / they", "don't work"],
            ["he / she / it", "doesn't work"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I don't like coffee.", it: "Non mi piace il caffè." },
            { en: "He doesn't live here.", it: "Non abita qui." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "La -s va su doesn't, quindi il verbo torna base: \"He doesn't works\" è sbagliato. La -s si usa una volta sola.",
        },
      ],
    },
    {
      titolo: "LE DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Do o does vanno davanti al soggetto, il verbo resta base:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Do you speak English?", it: "Parli inglese?" },
            { en: "Does she like music?", it: "Le piace la musica?" },
            { en: "Where do you live?", it: "Dove abiti?" },
            { en: "What time does the shop open?", it: "A che ora apre il negozio?" },
          ],
        },
        {
          tipo: "testo",
          testo: "Risposte brevi:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Yes, I do. / No, I don't.", it: "Sì. / No." },
            { en: "Yes, she does. / No, she doesn't.", it: "Sì. / No." },
          ],
        },
      ],
    },
    {
      titolo: "TO BE NON VUOLE DO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "To be e i verbi modali (can, must) fanno negativa e domande da soli, senza do:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Do you are tired?", sbagliato: true },
            { en: "Are you tired?", it: "Sei stanco?" },
            { en: "I don't be late.", sbagliato: true },
            { en: "I'm not late.", it: "Non sono in ritardo." },
          ],
        },
      ],
    },
    {
      titolo: "LA GIORNATA",
      blocchi: [
        {
          tipo: "testo",
          testo: "Con il present simple puoi raccontare la tua routine:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I wake up at seven and have breakfast.", it: "Mi sveglio alle sette e faccio colazione." },
            { en: "I go to school by bus.", it: "Vado a scuola in autobus." },
            { en: "I do my homework in the afternoon.", it: "Faccio i compiti il pomeriggio." },
            { en: "I go to bed at eleven.", it: "Vado a letto alle undici." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Molti verbi italiani riflessivi (svegliarsi, alzarsi, vestirsi) in inglese non lo sono: I get up, I get dressed.",
        },
      ],
    },
  ],
};
