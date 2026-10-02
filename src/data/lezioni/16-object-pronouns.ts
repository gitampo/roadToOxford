import { Lezione } from "@/types/lezione";

export const objectPronouns: Lezione = {
  id: "16",
  titolo: "Pronomi complemento",
  descrizione: "Riferirsi a persone e cose già nominate",
  chiavi: "pronomi complemento, me, him, them",
  livello: "A1",
  citazione: {
    testo: "Show me the money!",
    fonte: "Jerry Maguire",
    traduzione: "Fammi vedere i soldi!",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "SOGGETTO E COMPLEMENTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I pronomi soggetto (lezione 1{1}) fanno l'azione. I pronomi complemento la ricevono, e vanno dopo il verbo:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I → me", "mi, me"],
            ["you → you", "ti, te"],
            ["he → him", "lo, gli, lui"],
            ["she → her", "la, le, lei"],
            ["it → it", "lo, la"],
            ["we → us", "ci, noi"],
            ["you → you", "vi, voi"],
            ["they → them", "li, le, loro"],
          ],
        },
      ],
    },
    {
      titolo: "DOPO IL VERBO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano il pronome va spesso prima del verbo (ti amo). In inglese va sempre dopo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I love you.", it: "Ti amo." },
            { en: "Call me later.", it: "Chiamami più tardi." },
            { en: "Do you know him?", it: "Lo conosci?" },
            { en: "I you love.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "DOPO LE PREPOSIZIONI",
      blocchi: [
        {
          tipo: "testo",
          testo: "Dopo una preposizione si usa sempre il pronome complemento:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "This is for you.", it: "Questo è per te." },
            { en: "Come with us.", it: "Vieni con noi." },
            { en: "Look at them.", it: "Guardali." },
            { en: "between you and me", it: "tra me e te" },
            { en: "between you and I", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "ME TOO E ME NEITHER",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nelle risposte brevi e dopo to be, nel parlato si usa il pronome complemento:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm hungry. — Me too.", it: "Ho fame. — Anch'io." },
            { en: "I don't like it. — Me neither.", it: "Non mi piace. — Neanche a me." },
            { en: "Who's there? — It's me.", it: "Chi è? — Sono io." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "\"It is I\" è corretto ma molto formale e antiquato. Nel parlato si dice sempre \"It's me\".",
        },
      ],
    },
    {
      titolo: "DUE COMPLEMENTI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con verbi come give, send, show, tell ci possono essere due complementi: la persona e la cosa. Due ordini possibili:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Give me the book.", it: "Dammi il libro." },
            { en: "Give the book to me.", it: "Dai il libro a me." },
            { en: "I sent her a message.", it: "Le ho mandato un messaggio." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Se la cosa è un pronome (it, them), si usa l'ordine con to: \"Give it to me\", non \"Give me it\".",
        },
      ],
    },
    {
      titolo: "IT E THEM PER LE COSE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Anche le cose vogliono il pronome. In italiano spesso lo lasciamo sottinteso, in inglese no:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Do you like this song? — Yes, I love.", sbagliato: true },
            { en: "Do you like this song? — Yes, I love it.", it: "Ti piace questa canzone? — Sì, la adoro." },
            { en: "Where are my keys? I can't find them.", it: "Dove sono le mie chiavi? Non le trovo." },
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
          testo: "Soggetto o complemento?",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni pronome soggetto al pronome complemento.",
          coppie: [
            ["I", "me"],
            ["he", "him"],
            ["she", "her"],
            ["we", "us"],
            ["they", "them"],
          ],
          spiegazione: "You e it restano uguali.",
          rivedi: "SOGGETTO E COMPLEMENTO",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Lo conosci?\" (parlando di Marco).",
          prima: "Do you know",
          dopo: "?",
          risposte: ["him"],
          spiegazione: "Il pronome complemento di he è him, e va dopo il verbo.",
          rivedi: "DOPO IL VERBO",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Chiamami più tardi\".",
          parole: ["later", "me", "call"],
          soluzione: ["call", "me", "later"],
          spiegazione: "In inglese il pronome va sempre dopo il verbo.",
          rivedi: "DOPO IL VERBO",
        },
        {
          tipo: "sottotitolo",
          testo: "Dopo le preposizioni",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Vieni con noi\".",
          prima: "Come with",
          dopo: ".",
          risposte: ["us"],
          spiegazione: "Dopo una preposizione si usa il pronome complemento.",
          rivedi: "DOPO LE PREPOSIZIONI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale espressione è corretta?",
          opzioni: ["between you and I", "between you and me"],
          giusta: 1,
          spiegazione: "Between è una preposizione, quindi vuole me. \"Between you and I\" è un errore comune anche tra i madrelingua.",
          rivedi: "DOPO LE PREPOSIZIONI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Un amico dice \"I'm hungry\". Come rispondi \"Anch'io\"?",
          opzioni: ["I too.", "Me too.", "Also I."],
          giusta: 1,
          spiegazione: "Nelle risposte brevi del parlato si usa il pronome complemento: Me too.",
          rivedi: "ME TOO E ME NEITHER",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Un amico dice \"I don't like it\". Come rispondi \"Neanche a me\"?",
          opzioni: ["Me too.", "Me neither.", "I don't neither."],
          giusta: 1,
          spiegazione: "Dopo una frase negativa, \"anche\" diventa neither.",
          rivedi: "ME TOO E ME NEITHER",
        },
        {
          tipo: "sottotitolo",
          testo: "Due complementi",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["Give me it.", "Give it to me.", "Give to me it."],
          giusta: 1,
          spiegazione: "Se la cosa è un pronome (it, them), si usa l'ordine con to: Give it to me.",
          rivedi: "DUE COMPLEMENTI",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Le ho mandato un messaggio\".",
          parole: ["a", "her", "sent", "message", "I"],
          soluzione: ["I", "sent", "her", "a", "message"],
          spiegazione: "Prima la persona (her), poi la cosa (a message). In alternativa: I sent a message to her.",
          rivedi: "DUE COMPLEMENTI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Completa la risposta.",
          citazione: "Do you like this song? — Yes, I love ___.",
          opzioni: ["(niente)", "it", "her"],
          giusta: 1,
          spiegazione: "In inglese il pronome per le cose non si sottintende: I love it.",
          rivedi: "IT E THEM PER LE COSE",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Dove sono le mie chiavi? Non le trovo\".",
          prima: "Where are my keys? I can't find",
          dopo: ".",
          risposte: ["them"],
          spiegazione: "Per le cose al plurale si usa them.",
          rivedi: "IT E THEM PER LE COSE",
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
          testo: "Ho comprato un regalo per Anna. Glielo do stasera, ma non dirlo a lei!",
          soluzione: "I bought a present for Anna. I'm giving it to her tonight, but don't tell her!",
          spiegazione:
            "Controlla: give it to her (la cosa è un pronome, quindi l'ordine con to), tell her con il pronome dopo il verbo.",
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
