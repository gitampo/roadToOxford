import { Lezione } from "@/types/lezione";

export const infinitiveGerund: Lezione = {
  id: "47",
  titolo: "Infinito o -ing?",
  descrizione: "Esprimere scelte, preferenze e opinioni",
  chiavi: "to do, doing, gerundio",
  livello: "B1",
  citazione: {
    testo: "Stop Making Sense.",
    fonte: "Talking Heads, 1984",
    traduzione: "Smettila di avere senso.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL PROBLEMA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Quando un verbo segue un altro verbo, in italiano c'è quasi sempre l'infinito (voglio andare, mi piace leggere). In inglese dipende dal primo verbo: alcuni vogliono to + verbo, altri il verbo in -ing.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I want to go.", it: "Voglio andare." },
            { en: "I enjoy reading.", it: "Mi piace leggere." },
            { en: "I enjoy to read.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "I VERBI CON -ING",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["enjoy", "godersi, piacere"],
            ["finish", "finire"],
            ["mind", "dispiacere"],
            ["avoid", "evitare"],
            ["suggest", "suggerire"],
            ["keep", "continuare"],
            ["practise", "esercitarsi"],
            ["can't stand", "non sopportare"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Have you finished eating?", it: "Hai finito di mangiare?" },
            { en: "He suggested going to the cinema.", it: "Ha proposto di andare al cinema." },
          ],
        },
      ],
    },
    {
      titolo: "I VERBI CON TO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["want", "volere"],
            ["decide", "decidere"],
            ["hope", "sperare"],
            ["plan", "progettare"],
            ["promise", "promettere"],
            ["learn", "imparare"],
            ["need", "avere bisogno"],
            ["would like", "vorrei"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've decided to study abroad.", it: "Ho deciso di studiare all'estero." },
            { en: "She promised to call.", it: "Ha promesso di chiamare." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Un trucco approssimativo: i verbi con to guardano spesso al futuro (want, hope, plan, decide).",
        },
      ],
    },
    {
      titolo: "DOPO LE PREPOSIZIONI: SEMPRE -ING",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Dopo una preposizione (in, of, at, about, without, before, after) il verbo va sempre in -ing:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm interested in learning Chinese.", it: "Mi interessa imparare il cinese." },
            { en: "She left without saying goodbye.", it: "Se n'è andata senza salutare." },
            { en: "I'm good at swimming.", it: "Sono bravo a nuotare." },
            { en: "Thank you for helping me.", it: "Grazie per avermi aiutato." },
          ],
        },
      ],
    },
    {
      titolo: "-ING COME SOGGETTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Quando un'azione è il soggetto della frase, si usa -ing. In italiano usiamo l'infinito:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Swimming is good for you.", it: "Nuotare fa bene." },
            { en: "Learning a language takes time.", it: "Imparare una lingua richiede tempo." },
          ],
        },
      ],
    },
    {
      titolo: "CAMBIANO SIGNIFICATO",
      blocchi: [
        {
          tipo: "testo",
          testo: "Alcuni verbi vogliono tutte e due le forme, ma con significati diversi:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I stopped smoking.", it: "Ho smesso di fumare." },
            { en: "I stopped to smoke.", it: "Mi sono fermato per fumare." },
            { en: "Remember to lock the door.", it: "Ricordati di chiudere a chiave (dopo)." },
            { en: "I remember locking the door.", it: "Mi ricordo di aver chiuso a chiave (prima)." },
            { en: "I tried to open it.", it: "Ho cercato di aprirlo (sforzo)." },
            { en: "Try restarting it.", it: "Prova a riavviarlo (esperimento)." },
          ],
        },
      ],
    },
    {
      titolo: "TO PER DIRE PERCHÉ",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per indicare lo scopo (per, per fare) si usa to, non for:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I came here for study English.", sbagliato: true },
            { en: "I came here to study English.", it: "Sono venuto qui per studiare inglese." },
            { en: "I went out to buy some bread.", it: "Sono uscito a comprare il pane." },
          ],
        },
      ],
    },
  ],
};
