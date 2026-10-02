import { Lezione } from "@/types/lezione";

export const presentContinuous: Lezione = {
  id: "12",
  titolo: "Present Continuous",
  descrizione: "Dire cosa sta succedendo adesso",
  chiavi: "presente progressivo, -ing",
  livello: "A1",
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
          testo: "Come si forma",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Sto lavorando\"?",
          opzioni: ["I working.", "I'm working.", "I work now."],
          giusta: 1,
          spiegazione: "Serve to be + -ing: senza am la frase non ha verbo.",
          rivedi: "COME SI FORMA",
        },
        {
          tipo: "completa",
          consegna: "Completa con il verbo \"rain\".",
          prima: "Take an umbrella: it's",
          dopo: ".",
          risposte: ["raining"],
          rivedi: "COME SI FORMA",
        },
        {
          tipo: "sottotitolo",
          testo: "Come si scrive -ing",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni verbo alla sua forma in -ing.",
          coppie: [
            ["write", "writing"],
            ["run", "running"],
            ["lie", "lying"],
            ["visit", "visiting"],
            ["begin", "beginning"],
          ],
          spiegazione:
            "La -e muta cade, -ie diventa -y, la consonante si raddoppia se l'accento è sull'ultima sillaba (beGIN, ma VISit).",
          rivedi: "COME SI SCRIVE -ING",
        },
        {
          tipo: "completa",
          consegna: "Completa con il verbo \"sit\".",
          prima: "She is",
          dopo: "next to me.",
          risposte: ["sitting"],
          spiegazione: "Vocale + consonante finale, in una sola sillaba: la consonante si raddoppia.",
          rivedi: "COME SI SCRIVE -ING",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le forme scritte correttamente.",
          parole: ["makeing", "making", "swiming", "swimming", "dying", "dieing"],
          giuste: [1, 3, 4],
          spiegazione: "Make perde la e (making), swim raddoppia la m (swimming), die cambia -ie in -y (dying).",
          rivedi: "COME SI SCRIVE -ING",
        },
        {
          tipo: "sottotitolo",
          testo: "Negativa e domande",
        },
        {
          tipo: "riordina",
          consegna: "Chiedi \"Cosa stai facendo?\".",
          parole: ["doing", "you", "what", "are"],
          soluzione: ["what", "are", "you", "doing"],
          spiegazione: "Come con to be: la parola interrogativa, poi are, poi il soggetto.",
          rivedi: "NEGATIVA E DOMANDE",
        },
        {
          tipo: "completa",
          consegna: "Completa la negativa: \"Non sta ascoltando\".",
          prima: "She",
          dopo: "listening.",
          risposte: ["isn't", "is not", "'s not"],
          rivedi: "NEGATIVA E DOMANDE",
        },
        {
          tipo: "sottotitolo",
          testo: "Quando si usa",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase descrive una situazione temporanea?",
          opzioni: [
            "She lives with her parents.",
            "She's living with her parents at the moment.",
          ],
          giusta: 1,
          spiegazione: "Il continuous con at the moment indica che è una situazione di questo periodo, non per sempre.",
          rivedi: "IN QUESTO PERIODO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Il tuo inglese sta migliorando\"?",
          opzioni: ["Your English improves.", "Your English is improving.", "Your English improving."],
          giusta: 1,
          spiegazione: "Il continuous si usa anche per i cambiamenti in corso.",
          rivedi: "IN QUESTO PERIODO",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le espressioni che vanno spesso con il present continuous.",
          parole: ["right now", "every day", "at the moment", "always", "Look!", "this week"],
          giuste: [0, 2, 4, 5],
          spiegazione: "Every day e always indicano abitudini: vogliono il present simple.",
          rivedi: "LE PAROLE CHIAVE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Un amico ti chiama e senti rumore. Gli chiedi \"Cosa fai?\". Come lo dici?",
          opzioni: ["What do you do?", "What are you doing?"],
          giusta: 1,
          spiegazione: "What do you do? chiede che lavoro fai. Per l'azione di adesso serve il continuous.",
          rivedi: "L'ITALIANO USA IL PRESENTE",
        },
        {
          tipo: "sottotitolo",
          testo: "Traduci",
        },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi la tua versione e confrontala con quella proposta.",
        },
        {
          tipo: "traduci",
          consegna: "Traduci in inglese.",
          testo: "Guarda! Sta nevicando. I bambini stanno correndo in giardino e io sto facendo una foto.",
          soluzione:
            "Look! It's snowing. The children are running in the garden and I'm taking a photo.",
          spiegazione:
            "Controlla il to be in ogni frase (it's, are, I'm), running con due n e \"fare una foto\" = take a photo.",
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
