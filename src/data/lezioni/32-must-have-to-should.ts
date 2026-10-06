import { Lezione } from "@/types/lezione";

export const mustHaveToShould: Lezione = {
  id: "32",
  titolo: "Must, have to, should",
  descrizione: "Esprimere obblighi, regole e consigli",
  chiavi: "dovere, obbligo, mustn't",
  livello: "A2",
  citazione: {
    testo: "The show must go on.",
    fonte: "Queen",
    traduzione: "Lo spettacolo deve continuare.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "MUST E HAVE TO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Tutti e due significano \"dovere\". La differenza è da dove viene l'obbligo:",
        },
        {
          tipo: "tabella",
          righe: [
            ["must", "obbligo che senti tu, regole scritte"],
            ["have to", "obbligo che viene da fuori"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I must call my grandmother.", it: "Devo chiamare la nonna (lo sento io)." },
            { en: "I have to wear a uniform at work.", it: "Al lavoro devo portare la divisa (è la regola)." },
          ],
        },
      ],
    },
    {
      titolo: "COME SI USANO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Must è un modale: uguale per tutti, senza to, senza do. Have to è un verbo normale: vuole la -s e do nelle domande.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She must study.", it: "Deve studiare." },
            { en: "She has to study.", it: "Deve studiare." },
            { en: "Do you have to go?", it: "Devi andare?" },
            { en: "She musts study.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Must non ha il passato. Per \"dovevo\" si usa had to: \"I had to work yesterday\".",
        },
      ],
    },
    {
      titolo: "MUSTN'T E DON'T HAVE TO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Qui sta la trappola. Al negativo, i due verbi hanno significati completamente diversi:",
        },
        {
          tipo: "tabella",
          righe: [
            ["mustn't", "è vietato"],
            ["don't have to", "non è necessario"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You mustn't smoke here.", it: "Qui non si può fumare (è vietato)." },
            { en: "You don't have to come.", it: "Non sei obbligato a venire (puoi, se vuoi)." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Mustn't si pronuncia \"masnt\": la prima t è muta.",
        },
      ],
    },
    {
      titolo: "SHOULD: I CONSIGLI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Should significa \"dovresti\": è un consiglio, non un obbligo. Anche should è un modale.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You should see a doctor.", it: "Dovresti andare dal medico." },
            { en: "You shouldn't eat so much sugar.", it: "Non dovresti mangiare tanto zucchero." },
            { en: "What should I do?", it: "Cosa dovrei fare?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Per un consiglio ancora più gentile: \"I think you should…\" oppure \"Maybe you should…\".",
        },
      ],
    },
    {
      titolo: "DAL PIÙ FORTE AL PIÙ DEBOLE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["must / have to", "obbligo"],
            ["should", "consiglio"],
            ["don't have to", "non è necessario"],
            ["shouldn't", "sconsigliato"],
            ["mustn't", "divieto"],
          ],
        },
      ],
    },
    {
      titolo: "LE REGOLE DELLA SCUOLA",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "You must be on time.", it: "Devi essere puntuale." },
            { en: "You mustn't use your phone in class.", it: "Non puoi usare il telefono in classe." },
            { en: "You don't have to wear a uniform.", it: "Non devi portare la divisa." },
            { en: "You should revise every day.", it: "Dovresti ripassare ogni giorno." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In molte scuole britanniche la divisa è obbligatoria: lì si direbbe \"You have to wear a uniform\".",
        },
      ],
    },
    {
      titolo: "SUPPOSED TO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Be supposed to + verbo base è comunissimo nell'inglese parlato e non ha un equivalente preciso in italiano. Non dice che cosa pensi tu (come should), ma che cosa è previsto: dalle regole, dai piani, da quello che dice la gente. Ha tre usi.",
        },
        { tipo: "sottotitolo", testo: "1. La regola, quello che ci si aspetta" },
        {
          tipo: "esempi",
          esempi: [
            { en: "You're supposed to wear a helmet.", it: "Dovresti portare il casco (lo dice la regola)." },
            { en: "We're supposed to be there at eight.", it: "Dobbiamo essere lì alle otto (è quello che è previsto)." },
            { en: "You're not supposed to park here.", it: "Qui non si dovrebbe parcheggiare." },
            { en: "What am I supposed to do?", it: "E io che cosa dovrei fare?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Spesso sottintende che la regola non viene rispettata: \"You're supposed to be studying!\" (dovresti studiare, e invece...).",
        },
        { tipo: "sottotitolo", testo: "2. Doveva succedere, ma..." },
        {
          tipo: "testo",
          testo:
            "Al passato, was / were supposed to indica un piano o un'aspettativa che di solito non si è realizzata: corrisponde all'italiano \"doveva\" (e invece no).",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The train was supposed to arrive at six.", it: "Il treno doveva arrivare alle sei (ma è in ritardo)." },
            { en: "I was supposed to call her, but I forgot.", it: "Dovevo chiamarla, ma me ne sono dimenticato." },
            { en: "It wasn't supposed to rain today.", it: "Oggi non doveva piovere." },
          ],
        },
        { tipo: "sottotitolo", testo: "3. Si dice che" },
        {
          tipo: "testo",
          testo:
            "Con be (e spesso con it come soggetto) significa \"si dice che, a quanto pare\": riporta un'opinione diffusa, non la tua.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It's supposed to be a great film.", it: "Dicono che sia un film bellissimo." },
            { en: "This pub is supposed to be the oldest in Oxford.", it: "A quanto pare è il pub più antico di Oxford." },
          ],
        },
        { tipo: "sottotitolo", testo: "Supposed to, must o should?" },
        {
          tipo: "tabella",
          righe: [
            ["must / have to", "obbligo vero: si deve fare"],
            ["should", "consiglio: secondo me è giusto farlo"],
            ["be supposed to", "regola o piano (di altri): è previsto, ma spesso non succede"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You are suppose to wear a helmet.", sbagliato: true },
            { en: "You are supposed to wear a helmet.", it: "Si scrive sempre con la -d: supposed." },
            { en: "I'm supposed to going.", sbagliato: true },
            { en: "I'm supposed to go.", it: "Dopo to, il verbo base." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nel parlato la d quasi non si sente (/səˈpəʊs tə/): per questo molti la dimenticano anche quando scrivono. Grammaticalmente è un passivo, come be born: lezione 43{5}.",
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
        { tipo: "sottotitolo", testo: "Abbina" },
        {
          tipo: "abbina",
          consegna: "Abbina ogni forma al suo significato.",
          coppie: [
            ["You mustn't", "è vietato"],
            ["You don't have to", "non è necessario"],
            ["You should", "ti consiglio di"],
            ["You're supposed to", "la regola dice che"],
            ["It's supposed to be", "si dice che sia"],
          ],
        },
        { tipo: "sottotitolo", testo: "Scegli" },
        {
          tipo: "sceltaMultipla",
          domanda: "Il museo è gratis: you ___ pay.",
          opzioni: ["mustn't", "don't have to", "shouldn't"],
          giusta: 1,
          spiegazione:
            "Pagare non è vietato, è solo non necessario: don't have to. Mustn't vorrebbe dire che è proibito.",
          rivedi: "MUSTN'T E DON'T HAVE TO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Ieri ho dovuto lavorare fino a tardi: I ___ work late yesterday.",
          opzioni: ["must", "had to", "musted"],
          giusta: 1,
          spiegazione: "Must non ha il passato: \"ho dovuto\" si dice had to.",
          rivedi: "COME SI USANO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Il treno doveva arrivare alle sei, ma è in ritardo: The train ___ arrive at six.",
          opzioni: ["must", "should", "was supposed to"],
          giusta: 2,
          spiegazione:
            "Un piano del passato che non si è realizzato: was supposed to (\"doveva, ma...\").",
          rivedi: "SUPPOSED TO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Tutti dicono che il ristorante è ottimo: It ___ be very good.",
          opzioni: ["is supposed to", "must to", "has to"],
          giusta: 0,
          spiegazione:
            "Riporti un'opinione diffusa, non un obbligo: it's supposed to be = si dice che sia.",
          rivedi: "SUPPOSED TO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Hai la febbre da tre giorni. Il tuo consiglio: You ___ see a doctor.",
          opzioni: ["should", "are supposed to", "don't have to"],
          giusta: 0,
          spiegazione:
            "È un tuo consiglio, la tua opinione: should. Supposed to parlerebbe di una regola o di un piano.",
          rivedi: "SHOULD: I CONSIGLI",
        },
        { tipo: "sottotitolo", testo: "Completa" },
        {
          tipo: "completa",
          consegna: "Completa con la forma giusta di \"suppose\".",
          prima: "You're not",
          dopo: "to park here.",
          risposte: ["supposed"],
          spiegazione:
            "Be supposed to vuole sempre la -d: supposed. Al negativo: you're not supposed to.",
          rivedi: "SUPPOSED TO",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"Dovevo chiamarla, ma me ne sono dimenticato\".",
          prima: "I",
          dopo: "supposed to call her, but I forgot.",
          risposte: ["was"],
          spiegazione: "Al passato: was / were supposed to.",
          rivedi: "SUPPOSED TO",
        },
        { tipo: "sottotitolo", testo: "Traduci" },
        {
          tipo: "traduci",
          consegna: "Traduci in inglese.",
          testo: "Che cosa dovrei fare? Non sono obbligato a venire domani, vero?",
          soluzione:
            "What am I supposed to do? I don't have to come tomorrow, do I?",
          rivedi: "SUPPOSED TO",
        },
      ],
    },
    {
      titolo: "IL TUO RISULTATO",
      blocchi: [
        { tipo: "punteggio" },
        {
          tipo: "nota",
          testo:
            "Tocca un esercizio sbagliato qui sopra per andare al riquadro da rivedere.",
        },
      ],
    },
  ],
};
