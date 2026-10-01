import { Lezione } from "@/types/lezione";

export const verbsPreference: Lezione = {
  id: "20",
  titolo: "Esprimere gusti e preferenze",
  descrizione: "Esprimere gusti; ordinare con would like",
  chiavi: "like, love, hate, preferenze",
  livello: "[A1]",
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
  ],
};
