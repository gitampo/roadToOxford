import { Lezione } from "@/types/lezione";

export const verbsPreference: Lezione = {
  id: "20",
  titolo: "Esprimere gusti e preferenze",
  descrizione: "Esprimere gusti; ordinare con would like",
  chiavi: "like, love, hate, preferenze",
  livello: "A1",
  citazione: {
    testo: "I love it when a plan comes together.",
    fonte: "A-Team",
    traduzione: "Adoro i piani ben riusciti.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "DAL PIÙ AL MENO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["love", "adorare"],
            ["really like", "piacere molto"],
            ["like", "piacere"],
            ["don't mind", "non dispiacere"],
            ["don't like", "non piacere"],
            ["hate", "odiare"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I love chocolate.", it: "Adoro il cioccolato." },
            { en: "I don't mind rain.", it: "La pioggia non mi dà fastidio." },
            { en: "I hate Mondays.", it: "Odio il lunedì." },
          ],
        },
      ],
    },
    {
      titolo: "LIKE È AL CONTRARIO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano \"mi piace\" ha come soggetto la cosa che piace. In inglese il soggetto è la persona:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I like pizza.", it: "Mi piace la pizza." },
            { en: "She likes cats.", it: "Le piacciono i gatti." },
            { en: "Pizza likes me.", sbagliato: true },
            { en: "Me like pizza.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Ricorda la -s della terza persona: she likes, he loves, it hates.",
        },
      ],
    },
    {
      titolo: "LIKE + -ING",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Dopo like, love, hate, enjoy e don't mind, un'attività si esprime con il verbo in -ing:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I like reading.", it: "Mi piace leggere." },
            { en: "She enjoys cooking.", it: "Le piace cucinare." },
            { en: "I don't mind waiting.", it: "Non mi dispiace aspettare." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Con enjoy e don't mind si usa solo -ing. Con like, love e hate va bene anche to: \"I like to read\".",
        },
      ],
    },
    {
      titolo: "LIKE O WOULD LIKE?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Like parla di gusti in generale. Would like ('d like) significa \"vorrei\": è un desiderio per adesso, ed è il modo gentile di chiedere.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I like coffee.", it: "Mi piace il caffè (in generale)." },
            { en: "I'd like a coffee, please.", it: "Vorrei un caffè, per favore." },
            { en: "Would you like to come?", it: "Ti andrebbe di venire?" },
          ],
        },
        {
          tipo: "nota",
          testo: "Dopo would like si usa to + verbo: \"I'd like to go\", non \"I'd like going\".",
        },
      ],
    },
    {
      titolo: "AL RISTORANTE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Would like è la base per ordinare:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "What would you like?", it: "Cosa desidera?" },
            { en: "I'd like the fish, please.", it: "Vorrei il pesce, per favore." },
            { en: "Would you like anything to drink?", it: "Desidera qualcosa da bere?" },
            { en: "Could I have the bill, please?", it: "Posso avere il conto, per favore?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "\"I want the fish\" è grammaticalmente giusto, ma al ristorante suona scortese.",
        },
      ],
    },
    {
      titolo: "PREFER",
      blocchi: [
        {
          tipo: "testo",
          testo: "Prefer si usa con to per confrontare due cose:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I prefer tea to coffee.", it: "Preferisco il tè al caffè." },
            { en: "I prefer walking to driving.", it: "Preferisco camminare che guidare." },
          ],
        },
        {
          tipo: "testo",
          testo: "Per una scelta di adesso si usa would rather ('d rather) + verbo base:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'd rather stay at home tonight.", it: "Stasera preferirei restare a casa." },
          ],
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
          testo: "Gusti",
        },
        {
          tipo: "riordina",
          consegna: "Metti in ordine, dal più positivo al più negativo.",
          parole: ["hate", "like", "don't like", "love", "don't mind"],
          soluzione: ["love", "like", "don't mind", "don't like", "hate"],
          rivedi: "DAL PIÙ AL MENO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Mi piace la pizza\"?",
          opzioni: ["Pizza likes me.", "Me like pizza.", "I like pizza."],
          giusta: 2,
          spiegazione: "In inglese il soggetto di like è la persona, non la cosa che piace.",
          rivedi: "LIKE È AL CONTRARIO",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Le piacciono i gatti\".",
          prima: "She",
          dopo: "cats.",
          risposte: ["likes"],
          spiegazione: "Il soggetto è she, quindi likes con la -s.",
          rivedi: "LIKE È AL CONTRARIO",
        },
        {
          tipo: "sottotitolo",
          testo: "Like + -ing",
        },
        {
          tipo: "completa",
          consegna: "Completa con il verbo \"cook\".",
          prima: "She enjoys",
          dopo: ".",
          risposte: ["cooking"],
          spiegazione: "Dopo enjoy si usa solo -ing.",
          rivedi: "LIKE + -ING",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le frasi corrette.",
          parole: ["I like reading.", "I like to read.", "I enjoy to read.", "I don't mind waiting.", "I don't mind to wait."],
          giuste: [0, 1, 3],
          spiegazione: "Con like va bene sia -ing sia to; con enjoy e don't mind solo -ing.",
          rivedi: "LIKE + -ING",
        },
        {
          tipo: "sottotitolo",
          testo: "Like o would like?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Al bar, come ordini un caffè?",
          opzioni: ["I like a coffee.", "I'd like a coffee, please.", "I want coffee."],
          giusta: 1,
          spiegazione: "I'd like = vorrei: è il modo gentile di chiedere. I like parla di gusti in generale.",
          rivedi: "LIKE O WOULD LIKE?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Completa: \"I'd like ___ to the cinema tonight.\"",
          opzioni: ["going", "to go", "go"],
          giusta: 1,
          spiegazione: "Dopo would like si usa to + verbo.",
          rivedi: "LIKE O WOULD LIKE?",
        },
        {
          tipo: "riordina",
          consegna: "Il cameriere chiede \"Cosa desidera?\".",
          parole: ["like", "you", "what", "would"],
          soluzione: ["what", "would", "you", "like"],
          rivedi: "AL RISTORANTE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Perché \"I want the fish\" è da evitare al ristorante?",
          opzioni: ["È grammaticalmente sbagliato", "È giusto, ma suona scortese", "Si dice solo in America"],
          giusta: 1,
          spiegazione: "Want è corretto ma diretto: al ristorante si dice I'd like the fish, please.",
          rivedi: "AL RISTORANTE",
        },
        {
          tipo: "sottotitolo",
          testo: "Prefer",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Preferisco il tè al caffè\".",
          prima: "I prefer tea",
          dopo: "coffee.",
          risposte: ["to"],
          spiegazione: "Prefer A to B: si confronta con to, non con than.",
          rivedi: "PREFER",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Stasera preferirei restare a casa\"?",
          opzioni: ["I'd rather stay at home tonight.", "I'd rather to stay at home tonight.", "I prefer stay at home tonight."],
          giusta: 0,
          spiegazione: "Would rather vuole il verbo base, senza to.",
          rivedi: "PREFER",
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
          consegna: "Scrivi 4–5 frasi sui tuoi gusti.",
          punti: ["una cosa che adori", "un'attività che ti piace (con -ing)", "una cosa che non ti dispiace", "una cosa che odi", "una preferenza con prefer… to"],
          modello:
            "I love Japanese food. I really like playing the guitar in the evening. I don't mind getting up early. I hate waiting for the bus in the rain! I prefer the mountains to the sea.",
          spiegazione:
            "Controlla: -ing dopo like, don't mind e hate; prefer… to per il confronto.",
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
