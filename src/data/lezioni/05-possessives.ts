import { Lezione } from "@/types/lezione";

export const possessives: Lezione = {
  id: "5",
  titolo: "Aggettivi possessivi e 's",
  descrizione: "Parlare della famiglia e delle proprie cose",
  chiavi: "aggettivi possessivi, genitivo sassone",
  livello: "A1",
  citazione: {
    testo: "An Englishman's home is his castle.",
    fonte: "Proverbio inglese",
    traduzione: "La casa di un inglese è il suo castello.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "GLI AGGETTIVI POSSESSIVI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Servono per dire di chi è qualcosa. Ce n'è uno per ogni pronome:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I → my", "mio, mia, miei, mie"],
            ["you → your", "tuo"],
            ["he → his", "suo (di lui)"],
            ["she → her", "suo (di lei)"],
            ["it → its", "suo (di una cosa o animale)"],
            ["we → our", "nostro"],
            ["you → your", "vostro"],
            ["they → their", "loro"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "This is my brother.", it: "Questo è mio fratello." },
            { en: "Our house is small.", it: "La nostra casa è piccola." },
          ],
        },
      ],
    },
    {
      titolo: "NON CAMBIANO MAI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano il possessivo cambia con la cosa posseduta (mio, mia, miei, mie). In inglese no: my vale per tutto.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "my book, my books", it: "il mio libro, i miei libri" },
            { en: "my car, my cars", it: "la mia macchina, le mie macchine" },
          ],
        },
        {
          tipo: "testo",
          testo: "E non vogliono mai l'articolo davanti:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "the my car", sbagliato: true },
            { en: "my car", it: "la mia macchina" },
          ],
        },
      ],
    },
    {
      titolo: "HIS O HER?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "È l'errore più comune. In italiano \"suo\" si accorda con la cosa posseduta; in inglese his e her dipendono da chi possiede.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Marco and his mother", it: "Marco e sua madre (di lui)" },
            { en: "Anna and her father", it: "Anna e suo padre (di lei)" },
            { en: "Anna and his father", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Chiediti sempre: chi è il proprietario, un uomo o una donna? Se è un uomo, his. Se è una donna, her.",
        },
      ],
    },
    {
      titolo: "ITS E IT'S",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Its è il possessivo di it, per cose e animali. It's è la forma contratta di it is. Si pronunciano uguali, ma si scrivono diversi.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The dog wags its tail.", it: "Il cane scodinzola (muove la sua coda)." },
            { en: "It's a nice day.", it: "È una bella giornata." },
            { en: "The dog wags it's tail.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il trucco: se puoi sostituirlo con \"it is\", ci va l'apostrofo. Altrimenti no.",
        },
      ],
    },
    {
      titolo: "PARTI DEL CORPO E VESTITI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano diciamo \"mi lavo le mani\". In inglese, con le parti del corpo e i vestiti, si usa il possessivo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I wash my hands.", it: "Mi lavo le mani." },
            { en: "She broke her leg.", it: "Si è rotta la gamba." },
            { en: "Put on your coat.", it: "Mettiti il cappotto." },
            { en: "I wash the hands.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "IL GENITIVO SASSONE: 'S",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per dire di chi è qualcosa con un nome, si aggiunge 's al proprietario. L'ordine è il contrario dell'italiano: prima chi possiede, poi la cosa.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Mark's car", it: "la macchina di Mark" },
            { en: "my sister's room", it: "la stanza di mia sorella" },
            { en: "the teacher's desk", it: "la cattedra dell'insegnante" },
            { en: "the car of Mark", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Con le persone e gli animali si usa quasi sempre 's, non \"of\".",
        },
      ],
    },
    {
      titolo: "'S O S'?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con i plurali che finiscono in -s si aggiunge solo l'apostrofo. Con i plurali irregolari si aggiunge 's.",
        },
        {
          tipo: "tabella",
          righe: [
            ["my parents' house", "la casa dei miei genitori"],
            ["the students' books", "i libri degli studenti"],
            ["the children's toys", "i giocattoli dei bambini"],
            ["the women's team", "la squadra femminile"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Con due proprietari insieme, 's va solo sull'ultimo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Tom and Anna's house", it: "la casa di Tom e Anna (una sola casa)" },
          ],
        },
      ],
    },
    {
      titolo: "'S O OF?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con le cose e i luoghi di solito si usa of:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "the end of the film", it: "la fine del film" },
            { en: "the door of the car", it: "la portiera della macchina" },
            { en: "the centre of London", it: "il centro di Londra" },
          ],
        },
        {
          tipo: "testo",
          testo: "Con le espressioni di tempo, invece, si usa 's:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "today's newspaper", it: "il giornale di oggi" },
            { en: "a week's holiday", it: "una settimana di vacanza" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Attenzione: 's può essere anche is o has. \"Mark's tired\" = Mark is tired. \"Mark's got a car\" = Mark has got a car. Lo capisci da quello che segue.",
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
          testo: "Gli aggettivi possessivi",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni pronome al suo aggettivo possessivo.",
          coppie: [
            ["I", "my"],
            ["he", "his"],
            ["she", "her"],
            ["we", "our"],
            ["they", "their"],
          ],
          rivedi: "GLI AGGETTIVI POSSESSIVI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"i miei libri\"?",
          opzioni: ["mys books", "my books", "the my books"],
          giusta: 1,
          spiegazione:
            "Il possessivo non cambia mai (my vale per mio, mia, miei, mie) e non vuole l'articolo.",
          rivedi: "NON CAMBIANO MAI",
        },
        {
          tipo: "sottotitolo",
          testo: "His o her?",
        },
        {
          tipo: "completa",
          consegna: "Completa con his o her.",
          prima: "Anna lives with",
          dopo: "father.",
          risposte: ["her"],
          spiegazione:
            "Conta chi possiede, non la cosa posseduta: il padre è di Anna, una donna, quindi her.",
          rivedi: "HIS O HER?",
        },
        {
          tipo: "completa",
          consegna: "Completa con his o her.",
          prima: "Marco calls",
          dopo: "mother every day.",
          risposte: ["his"],
          spiegazione: "La madre è di Marco, un uomo: his, anche se la madre è una donna.",
          rivedi: "HIS O HER?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["The dog wags it's tail.", "The dog wags its tail.", "The dog wags his' tail."],
          giusta: 1,
          spiegazione:
            "Its è il possessivo; it's significa it is. Il trucco: se puoi dire \"it is\", ci va l'apostrofo.",
          rivedi: "ITS E IT'S",
        },
        {
          tipo: "completa",
          consegna: "Completa con its o it's.",
          prima: "",
          dopo: "a nice day today.",
          risposte: ["It's"],
          spiegazione: "Qui puoi dire \"It is a nice day\": quindi ci vuole l'apostrofo.",
          rivedi: "ITS E IT'S",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Mi lavo le mani\"?",
          opzioni: ["I wash the hands.", "I wash my hands.", "I wash me the hands."],
          giusta: 1,
          spiegazione: "Con le parti del corpo e i vestiti l'inglese usa il possessivo, non l'articolo.",
          rivedi: "PARTI DEL CORPO E VESTITI",
        },
        {
          tipo: "sottotitolo",
          testo: "Il genitivo sassone",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"la stanza di mia sorella\".",
          parole: ["room", "sister's", "my"],
          soluzione: ["my", "sister's", "room"],
          spiegazione: "Prima chi possiede, con 's, poi la cosa posseduta: l'ordine è il contrario dell'italiano.",
          rivedi: "IL GENITIVO SASSONE: 'S",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"la casa dei miei genitori\"?",
          opzioni: ["my parents's house", "my parents' house", "my parent's house"],
          giusta: 1,
          spiegazione:
            "Con un plurale in -s si aggiunge solo l'apostrofo: parents'. My parent's house sarebbe la casa di un genitore solo.",
          rivedi: "'S O S'?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"i giocattoli dei bambini\"?",
          opzioni: ["the childrens' toys", "the children's toys", "the toys of the children's"],
          giusta: 1,
          spiegazione: "Children è un plurale irregolare, senza -s: si aggiunge 's.",
          rivedi: "'S O S'?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"la fine del film\"?",
          opzioni: ["the film's end", "the end of the film", "the end film"],
          giusta: 1,
          spiegazione: "Con le cose di solito si usa of. Il 's è per persone e animali (e per il tempo: today's newspaper).",
          rivedi: "'S O OF?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "In questa frase, che cosa significa 's?",
          citazione: "Mark's got a new car.",
          opzioni: ["is", "has", "il possesso"],
          giusta: 1,
          spiegazione: "Davanti a got, 's è has: Mark has got a new car.",
          rivedi: "'S O OF?",
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
          testo: "Questa è la macchina di Sara. Suo fratello la usa ogni giorno, ma oggi è a casa dei suoi genitori.",
          soluzione:
            "This is Sara's car. Her brother uses it every day, but today it's at her parents' house.",
          spiegazione:
            "Controlla: Sara's car (genitivo sassone), her brother (il fratello di una donna), her parents' house (plurale in -s: solo apostrofo).",
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
