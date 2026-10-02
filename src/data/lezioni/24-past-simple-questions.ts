import { Lezione } from "@/types/lezione";

export const pastSimpleQuestions: Lezione = {
  id: "24",
  titolo: "Past Simple: negativa e domande",
  descrizione: "Chiedere e raccontare un viaggio",
  chiavi: "did, didn't",
  livello: "A1",
  citazione: {
    testo: "Why did the chicken cross the road?",
    fonte: "Indovinello tradizionale",
    traduzione: "Perché la gallina ha attraversato la strada?",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "LA NEGATIVA: DIDN'T",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si usa didn't (did not) + verbo base, per tutte le persone. Vale per regolari e irregolari.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I didn't sleep well.", it: "Non ho dormito bene." },
            { en: "She didn't come.", it: "Non è venuta." },
            { en: "We didn't see the film.", it: "Non abbiamo visto il film." },
          ],
        },
      ],
    },
    {
      titolo: "IL PASSATO SI USA UNA VOLTA SOLA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Did porta già il passato, quindi il verbo torna alla forma base. È come la -s con doesn't:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I didn't went.", sbagliato: true },
            { en: "I didn't go.", it: "Non sono andato." },
            { en: "She didn't called.", sbagliato: true },
            { en: "She didn't call.", it: "Non ha chiamato." },
          ],
        },
      ],
    },
    {
      titolo: "LE DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Did va davanti al soggetto, il verbo resta base:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Did you like it?", it: "Ti è piaciuto?" },
            { en: "Did she call you?", it: "Ti ha chiamato?" },
            { en: "Where did you go?", it: "Dove sei andato?" },
            { en: "What did you do yesterday?", it: "Cosa hai fatto ieri?" },
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Yes, I did. / No, I didn't.", it: "Sì. / No." },
          ],
        },
      ],
    },
    {
      titolo: "TO BE NON VUOLE DID",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Come al presente, to be e i modali (can, could) non vogliono l'ausiliare:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Did you be tired?", sbagliato: true },
            { en: "Were you tired?", it: "Eri stanco?" },
            { en: "I didn't can come.", sbagliato: true },
            { en: "I couldn't come.", it: "Non sono potuto venire." },
          ],
        },
      ],
    },
    {
      titolo: "WHO SENZA DID",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Quando who o what sono il soggetto della domanda, did non si usa:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Who called you?", it: "Chi ti ha chiamato? (who è il soggetto)" },
            { en: "Who did you call?", it: "Chi hai chiamato? (you è il soggetto)" },
            { en: "What happened?", it: "Cos'è successo?" },
            { en: "What did happen?", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "RACCONTARE UN VIAGGIO",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "Where did you go on holiday?", it: "Dove sei andato in vacanza?" },
            { en: "We went to Scotland.", it: "Siamo andati in Scozia." },
            { en: "How did you travel?", it: "Come avete viaggiato?" },
            { en: "We took the train.", it: "Abbiamo preso il treno." },
            { en: "Did you enjoy it?", it: "Ti è piaciuto?" },
            { en: "Yes, but it didn't stop raining!", it: "Sì, ma non ha mai smesso di piovere!" },
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
          testo: "La negativa",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["I didn't went.", "I didn't go.", "I not went."],
          giusta: 1,
          spiegazione: "Did porta già il passato: il verbo torna alla forma base.",
          rivedi: "IL PASSATO SI USA UNA VOLTA SOLA",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Non ha chiamato\".",
          prima: "She didn't",
          dopo: ".",
          risposte: ["call"],
          spiegazione: "Dopo didn't il verbo è base: call, non called.",
          rivedi: "IL PASSATO SI USA UNA VOLTA SOLA",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Non ho dormito bene\".",
          prima: "I",
          dopo: "sleep well.",
          risposte: ["didn't", "did not"],
          spiegazione: "Didn't vale per tutte le persone, con i regolari e con gli irregolari.",
          rivedi: "LA NEGATIVA: DIDN'T",
        },
        {
          tipo: "sottotitolo",
          testo: "Le domande",
        },
        {
          tipo: "riordina",
          consegna: "Chiedi \"Cosa hai fatto ieri?\".",
          parole: ["yesterday", "do", "you", "what", "did"],
          soluzione: ["what", "did", "you", "do", "yesterday"],
          spiegazione: "Did va davanti al soggetto; do qui è il verbo principale (fare).",
          rivedi: "LE DOMANDE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale domanda è corretta?",
          opzioni: ["Did you liked it?", "Did you like it?", "You liked it did?"],
          giusta: 1,
          spiegazione: "Anche nelle domande il passato è solo su did: like resta base.",
          rivedi: "LE DOMANDE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è la risposta breve corretta?",
          citazione: "Did she call you?",
          opzioni: ["Yes, she called.", "Yes, she did.", "Yes, she does."],
          giusta: 1,
          rivedi: "LE DOMANDE",
        },
        {
          tipo: "sottotitolo",
          testo: "Senza did",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si chiede \"Eri stanco?\"",
          opzioni: ["Did you be tired?", "Were you tired?", "Did you were tired?"],
          giusta: 1,
          spiegazione: "To be non vuole did, nemmeno al passato.",
          rivedi: "TO BE NON VUOLE DID",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Non sono potuto venire\"?",
          opzioni: ["I didn't can come.", "I couldn't come.", "I didn't could come."],
          giusta: 1,
          spiegazione: "Can al passato è could, e fa la negativa da solo: couldn't.",
          rivedi: "TO BE NON VUOLE DID",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Vuoi sapere chi ha telefonato a tua sorella. Cosa chiedi?",
          opzioni: ["Who did call her?", "Who called her?"],
          giusta: 1,
          spiegazione: "Who è il soggetto (è lui che ha chiamato): niente did.",
          rivedi: "WHO SENZA DID",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Vuoi sapere quale persona ha chiamato tua sorella. Cosa chiedi?",
          opzioni: ["Who did she call?", "Who called she?"],
          giusta: 0,
          spiegazione: "Qui il soggetto è she e who è il complemento: serve did.",
          rivedi: "WHO SENZA DID",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Cos'è successo?\".",
          prima: "What",
          dopo: "?",
          risposte: ["happened"],
          spiegazione: "What è il soggetto: niente did, il verbo va al passato.",
          rivedi: "WHO SENZA DID",
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
          consegna: "Scrivi un breve dialogo (5–6 battute) in cui chiedi a un amico della sua ultima vacanza.",
          punti: ["dove è andato", "come ha viaggiato", "una domanda con did", "una risposta negativa con didn't", "una domanda con what happened o who"],
          modello:
            "— Where did you go on holiday?\n— I went to Edinburgh with my family.\n— How did you travel?\n— We took the plane.\n— Did you visit the castle?\n— No, we didn't. It was closed! But we saw a lot of other things.",
          spiegazione:
            "Controlla ogni domanda: did + soggetto + verbo base. E nelle risposte il passato vero (went, took), ma il verbo base dopo didn't.",
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
