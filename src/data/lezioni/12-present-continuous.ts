import { Lezione } from "@/types/lezione";

export const presentContinuous: Lezione = {
  id: "12",
  titolo: "Present Continuous",
  descrizione: "Dire cosa sta succedendo adesso",
  chiavi: "presente progressivo, -ing",
  livello: "[A1]",
  citazione: {
    testo: "Winter is coming.",
    fonte: "Il Trono di Spade",
    traduzione: "L'inverno sta arrivando.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "A COSA SERVE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il present continuous dice cosa sta succedendo adesso, mentre parli. Corrisponde a \"sto facendo\".",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm reading.", it: "Sto leggendo." },
            { en: "It's raining.", it: "Sta piovendo." },
            { en: "They're watching TV.", it: "Stanno guardando la TV." },
          ],
        },
      ],
    },
    {
      titolo: "COME SI FORMA",
      blocchi: [
        {
          tipo: "testo",
          testo: "To be + verbo con -ing:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I am working", "sto lavorando"],
            ["you are working", "stai lavorando"],
            ["he / she / it is working", "sta lavorando"],
            ["we are working", "stiamo lavorando"],
            ["they are working", "stanno lavorando"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I working.", sbagliato: true },
            { en: "I'm working.", it: "Sto lavorando." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "To be non si può togliere: senza, la frase non ha verbo.",
        },
      ],
    },
    {
      titolo: "COME SI SCRIVE -ING",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["di solito + -ing", "read → reading"],
            ["-e muta cade", "write → writing"],
            ["-ie diventa -y", "lie → lying"],
            ["vocale + consonante finale: si raddoppia", "run → running, sit → sitting"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "La consonante si raddoppia solo se l'accento cade sull'ultima sillaba: beGIN → beginning, ma VISit → visiting.",
        },
      ],
    },
    {
      titolo: "NEGATIVA E DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Funziona come to be: not dopo il verbo, e nelle domande to be va davanti.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm not sleeping.", it: "Non sto dormendo." },
            { en: "She isn't listening.", it: "Non sta ascoltando." },
            { en: "Are you coming?", it: "Vieni?" },
            { en: "What are you doing?", it: "Cosa stai facendo?" },
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Yes, I am. / No, I'm not.", it: "Sì. / No." },
          ],
        },
      ],
    },
    {
      titolo: "IN QUESTO PERIODO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si usa anche per situazioni temporanee, che durano in questo periodo ma non per sempre:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm studying for my exams this month.", it: "Questo mese sto studiando per gli esami." },
            { en: "She's living with her parents at the moment.", it: "Al momento vive con i suoi genitori." },
          ],
        },
        {
          tipo: "testo",
          testo: "E per i cambiamenti in corso:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The climate is getting warmer.", it: "Il clima sta diventando più caldo." },
            { en: "Your English is improving.", it: "Il tuo inglese sta migliorando." },
          ],
        },
      ],
    },
    {
      titolo: "LE PAROLE CHIAVE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Queste espressioni vanno spesso con il present continuous:",
        },
        {
          tipo: "tabella",
          righe: [
            ["now / right now", "adesso"],
            ["at the moment", "in questo momento"],
            ["today", "oggi"],
            ["this week", "questa settimana"],
            ["Look! / Listen!", "Guarda! / Ascolta!"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Look! The baby is walking!", it: "Guarda! Il bambino sta camminando!" },
          ],
        },
      ],
    },
    {
      titolo: "L'ITALIANO USA IL PRESENTE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano diciamo spesso \"cosa fai?\" anche per l'azione in corso. In inglese, se l'azione è adesso, serve il continuous:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "What do you do?", it: "Che lavoro fai?" },
            { en: "What are you doing?", it: "Cosa stai facendo (adesso)?" },
            { en: "Where are you going?", it: "Dove vai?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "\"What do you do?\" è una domanda sul lavoro, non sull'azione del momento.",
        },
      ],
    },
  ],
};
