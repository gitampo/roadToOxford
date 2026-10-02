import { Lezione } from "@/types/lezione";

export const haveGot: Lezione = {
  id: "6",
  titolo: "Have got",
  descrizione: "Descrivere cosa possiedi e com'è una persona",
  chiavi: "avere, possesso",
  livello: "A1",
  citazione: {
    testo: "I've got a bad feeling about this.",
    fonte: "Star Wars",
    traduzione: "Ho un brutto presentimento.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "A COSA SERVE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Have got significa \"avere\" nel senso di possedere. È tipico dell'inglese britannico, soprattutto nel parlato.",
        },
        {
          tipo: "tabella",
          righe: [
            ["I have got", "io ho"],
            ["you have got", "tu hai"],
            ["he / she / it has got", "lui / lei ha"],
            ["we have got", "noi abbiamo"],
            ["you have got", "voi avete"],
            ["they have got", "loro hanno"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Got qui non significa niente da solo: è un rinforzo. Il verbo vero è have.",
        },
      ],
    },
    {
      titolo: "LE FORME CONTRATTE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Nel parlato si usa quasi sempre la forma contratta:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I've got", "I have got"],
            ["you've got", "you have got"],
            ["he's got", "he has got"],
            ["we've got", "we have got"],
            ["they've got", "they have got"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've got a sister.", it: "Ho una sorella." },
            { en: "She's got a new phone.", it: "Ha un telefono nuovo." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "He's got = he has got, non he is got. Lo stesso 's che hai visto nelle lezioni 2{2} e 5{8}.",
        },
      ],
    },
    {
      titolo: "NEGATIVA E DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nella negativa si aggiunge not dopo have. Nelle domande have passa davanti al soggetto, got resta dopo.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I haven't got a car.", it: "Non ho la macchina." },
            { en: "He hasn't got time.", it: "Non ha tempo." },
            { en: "Have you got a pen?", it: "Hai una penna?" },
            { en: "Has she got a brother?", it: "Ha un fratello?" },
          ],
        },
        {
          tipo: "testo",
          testo: "Le risposte brevi usano have, senza got:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Yes, I have. / No, I haven't.", it: "Sì. / No." },
            { en: "Yes, I have got.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "PER DESCRIVERE LE PERSONE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Have got si usa molto per l'aspetto fisico, dove l'italiano usa \"avere\" o \"essere\":",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She's got blue eyes.", it: "Ha gli occhi azzurri." },
            { en: "He's got short hair.", it: "Ha i capelli corti." },
            { en: "I've got a beard.", it: "Ho la barba." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Hair è non numerabile quando parli di tutti i capelli: \"She's got long hair\", mai \"long hairs\".",
        },
      ],
    },
    {
      titolo: "FAMIGLIA, MALATTIE, IMPEGNI",
      blocchi: [
        {
          tipo: "testo",
          testo: "Si usa anche per la famiglia, i disturbi di salute e gli impegni:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've got two brothers.", it: "Ho due fratelli." },
            { en: "I've got a headache.", it: "Ho mal di testa." },
            { en: "She's got a cold.", it: "Ha il raffreddore." },
            { en: "We've got a meeting at ten.", it: "Abbiamo una riunione alle dieci." },
          ],
        },
      ],
    },
    {
      titolo: "HAVE GOT O HAVE?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per il possesso puoi usare anche have da solo, come un verbo normale. Il significato è lo stesso, cambiano negativa e domande:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I've got a car.", "I have a car."],
            ["I haven't got a car.", "I don't have a car."],
            ["Have you got a car?", "Do you have a car?"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Have got è più britannico e informale, have è più americano. Il present simple con do/don't lo vedrai nella lezione 10{4}.",
        },
      ],
    },
    {
      titolo: "QUANDO NON SI USA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Have got si usa solo al presente e solo per il possesso. Quando have indica un'azione (mangiare, fare), got non ci va:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have breakfast at seven.", it: "Faccio colazione alle sette." },
            { en: "I've got breakfast at seven.", sbagliato: true },
            { en: "We have a shower.", it: "Facciamo la doccia." },
            { en: "Have a good time!", it: "Divertiti!" },
          ],
        },
        {
          tipo: "testo",
          testo: "E non si usa per l'età: in inglese l'età si dice con to be.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've got 20 years.", sbagliato: true },
            { en: "I'm 20.", it: "Ho 20 anni." },
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
          testo: "Have o has?",
        },
        {
          tipo: "completa",
          consegna: "Completa con have o has.",
          prima: "She",
          dopo: "got a new phone.",
          risposte: ["has"],
          spiegazione: "He, she e it vogliono has got; tutti gli altri have got.",
          rivedi: "A COSA SERVE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "In questa frase, che cosa significa 's?",
          citazione: "He's got two sisters.",
          opzioni: ["he is", "he has", "il possesso"],
          giusta: 1,
          spiegazione: "Davanti a got, 's è sempre has: he has got. \"He is got\" non esiste.",
          rivedi: "LE FORME CONTRATTE",
        },
        {
          tipo: "sottotitolo",
          testo: "Negative e domande",
        },
        {
          tipo: "riordina",
          consegna: "Chiedi \"Hai una penna?\".",
          parole: ["got", "pen", "you", "have", "a"],
          soluzione: ["have", "you", "got", "a", "pen"],
          spiegazione: "Have passa davanti al soggetto, got resta dopo.",
          rivedi: "NEGATIVA E DOMANDE",
        },
        {
          tipo: "completa",
          consegna: "Completa la negativa: \"Non ha tempo\".",
          prima: "He",
          dopo: "got time.",
          risposte: ["hasn't", "has not"],
          spiegazione: "Not va dopo have/has: he hasn't got.",
          rivedi: "NEGATIVA E DOMANDE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qual è la risposta breve corretta?",
          citazione: "Have you got a car?",
          opzioni: ["Yes, I have got.", "Yes, I have.", "Yes, I've."],
          giusta: 1,
          spiegazione:
            "Le risposte brevi usano solo have, senza got. E nella risposta breve affermativa non si contrae.",
          rivedi: "NEGATIVA E DOMANDE",
        },
        {
          tipo: "sottotitolo",
          testo: "Descrivere",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Ha i capelli lunghi\"?",
          opzioni: ["She's got long hairs.", "She's got long hair.", "She has the long hair."],
          giusta: 1,
          spiegazione:
            "Hair, quando indica tutti i capelli, è non numerabile: niente -s. E niente articolo the.",
          rivedi: "PER DESCRIVERE LE PERSONE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni frase alla traduzione.",
          coppie: [
            ["I've got a headache.", "Ho mal di testa."],
            ["She's got a cold.", "Ha il raffreddore."],
            ["We've got a meeting.", "Abbiamo una riunione."],
            ["He's got blue eyes.", "Ha gli occhi azzurri."],
          ],
          rivedi: "FAMIGLIA, MALATTIE, IMPEGNI",
        },
        {
          tipo: "sottotitolo",
          testo: "Have got o have?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale domanda ha lo stesso significato di \"Have you got a car?\"",
          opzioni: ["Do you have a car?", "Are you have a car?", "Have you a car got?"],
          giusta: 0,
          spiegazione:
            "Con have da solo, come verbo normale, negativa e domande usano do: Do you have…? I don't have…",
          rivedi: "HAVE GOT O HAVE?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["I've got breakfast at seven.", "I have breakfast at seven.", "I've breakfast at seven."],
          giusta: 1,
          spiegazione:
            "Qui have è un'azione (fare colazione), non un possesso: got non ci va.",
          rivedi: "QUANDO NON SI USA",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le frasi in cui si può usare have got.",
          parole: ["Ho due fratelli.", "Faccio la doccia.", "Ho 20 anni.", "Ho un cane.", "Divertiti!", "Ho il raffreddore."],
          giuste: [0, 3, 5],
          spiegazione:
            "Have got è per il possesso, la famiglia e i disturbi: I've got two brothers, a dog, a cold. Fare la doccia è un'azione (have a shower), l'età si dice con to be (I'm 20).",
          rivedi: "QUANDO NON SI USA",
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
          consegna: "Descrivi una persona della tua famiglia in 4–5 frasi, usando have got.",
          punti: ["chi è", "capelli e occhi", "un oggetto che possiede", "qualcosa che non ha"],
          modello:
            "This is my sister, Chiara. She's got long brown hair and green eyes. She's got a small dog called Pippo. She hasn't got a car, so she goes everywhere by bike.",
          spiegazione:
            "Controlla: has got con he/she, hair senza -s, hasn't got nella negativa.",
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
