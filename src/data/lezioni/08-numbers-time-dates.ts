import { Lezione } from "@/types/lezione";

export const numbersTimeDates: Lezione = {
  id: "8",
  titolo: "Numeri, ore e date",
  descrizione: "Dire l'ora, le date, i prezzi",
  chiavi: "numeri, ore, date",
  livello: "A1",
  citazione: {
    testo: "Remember, remember the fifth of November.",
    fonte: "Filastrocca inglese",
    traduzione: "Ricorda, ricorda il cinque novembre.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "I PRIMI NUMERI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["0 zero", "11 eleven"],
            ["1 one", "12 twelve"],
            ["2 two", "13 thirteen"],
            ["3 three", "14 fourteen"],
            ["4 four", "15 fifteen"],
            ["5 five", "16 sixteen"],
            ["6 six", "17 seventeen"],
            ["7 seven", "18 eighteen"],
            ["8 eight", "19 nineteen"],
            ["9 nine", "20 twenty"],
            ["10 ten", "21 twenty-one"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nei numeri di telefono lo zero si dice spesso \"oh\", come la lettera: 020 = \"oh two oh\".",
        },
      ],
    },
    {
      titolo: "DECINE, CENTINAIA, MIGLIAIA",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["30 thirty", "70 seventy"],
            ["40 forty", "80 eighty"],
            ["50 fifty", "90 ninety"],
            ["60 sixty", "100 a hundred"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Tra decine e unità si mette il trattino. Nell'inglese britannico, dopo le centinaia si aggiunge and:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "twenty-one, forty-five", it: "21, 45" },
            { en: "a hundred and twenty", it: "120" },
            { en: "three thousand, five hundred", it: "3.500" },
            { en: "two million", it: "2.000.000" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Forty si scrive senza u (non fourty). E hundred, thousand, million non prendono la -s: two hundred, non two hundreds.",
        },
      ],
    },
    {
      titolo: "-TEEN O -TY?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Thirteen e thirty si confondono facilmente. La differenza è nell'accento:",
        },
        {
          tipo: "tabella",
          righe: [
            ["thirTEEN (13)", "accento alla fine"],
            ["THIRty (30)", "accento all'inizio"],
            ["fifTEEN (15)", "accento alla fine"],
            ["FIFty (50)", "accento all'inizio"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Punti e virgole sono al contrario rispetto all'italiano: 3,500 è tremilacinquecento, 3.5 è tre virgola cinque (\"three point five\").",
        },
      ],
    },
    {
      titolo: "I NUMERI ORDINALI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si formano quasi tutti con -th. I primi tre sono irregolari:",
        },
        {
          tipo: "tabella",
          righe: [
            ["1st first", "primo"],
            ["2nd second", "secondo"],
            ["3rd third", "terzo"],
            ["4th fourth", "quarto"],
            ["5th fifth", "quinto"],
            ["12th twelfth", "dodicesimo"],
            ["20th twentieth", "ventesimo"],
            ["21st twenty-first", "ventunesimo"],
          ],
        },
      ],
    },
    {
      titolo: "CHE ORE SONO?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si chiede \"What time is it?\" e si risponde con It's. Il modo più semplice è dire le ore e poi i minuti:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It's seven o'clock.", it: "Sono le sette." },
            { en: "It's seven fifteen.", it: "Sono le sette e un quarto." },
            { en: "It's seven forty.", it: "Sono le otto meno venti." },
          ],
        },
        {
          tipo: "testo",
          testo: "Il modo tradizionale britannico usa past (dopo) e to (a):",
        },
        {
          tipo: "tabella",
          righe: [
            ["7:05", "five past seven"],
            ["7:15", "a quarter past seven"],
            ["7:30", "half past seven"],
            ["7:45", "a quarter to eight"],
            ["7:50", "ten to eight"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Attenzione: \"half seven\" in inglese britannico significa 7:30, non 6:30 come in tedesco.",
        },
      ],
    },
    {
      titolo: "AM E PM",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nella vita di tutti i giorni si usano le 12 ore. Am va da mezzanotte a mezzogiorno, pm da mezzogiorno a mezzanotte.",
        },
        {
          tipo: "tabella",
          righe: [
            ["9 am", "le 9 di mattina"],
            ["3 pm", "le 15"],
            ["noon / midday", "mezzogiorno"],
            ["midnight", "mezzanotte"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Le 24 ore (15:00) si usano soprattutto per orari di treni, aerei e documenti ufficiali.",
        },
      ],
    },
    {
      titolo: "GIORNI E MESI",
      blocchi: [
        {
          tipo: "testo",
          testo: "Giorni e mesi si scrivono sempre con la maiuscola:",
        },
        {
          tipo: "tabella",
          righe: [
            ["Monday", "lunedì"],
            ["Tuesday", "martedì"],
            ["Wednesday", "mercoledì"],
            ["Thursday", "giovedì"],
            ["Friday", "venerdì"],
            ["Saturday", "sabato"],
            ["Sunday", "domenica"],
          ],
        },
        {
          tipo: "tabella",
          righe: [
            ["January", "gennaio"],
            ["February", "febbraio"],
            ["March", "marzo"],
            ["April", "aprile"],
            ["May", "maggio"],
            ["June", "giugno"],
            ["July", "luglio"],
            ["August", "agosto"],
            ["September", "settembre"],
            ["October", "ottobre"],
            ["November", "novembre"],
            ["December", "dicembre"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Wednesday si pronuncia \"uensdei\": la prima d è muta.",
        },
      ],
    },
    {
      titolo: "LE DATE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le date si dicono con il numero ordinale. In britannico si scrive 5th November e si legge \"the fifth of November\".",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "My birthday is on the 3rd of May.", it: "Il mio compleanno è il 3 maggio." },
            { en: "What's the date today?", it: "Che giorno è oggi?" },
          ],
        },
        {
          tipo: "testo",
          testo: "Gli anni si leggono di solito a coppie di cifre:",
        },
        {
          tipo: "tabella",
          righe: [
            ["1998", "nineteen ninety-eight"],
            ["1066", "ten sixty-six"],
            ["2008", "two thousand and eight"],
            ["2025", "twenty twenty-five"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Attenzione alle date americane: 03/05 negli Stati Uniti è il 5 marzo, nel Regno Unito il 3 maggio.",
        },
      ],
    },
    {
      titolo: "I PREZZI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La sterlina si divide in 100 pence (p). Nel parlato i pence spesso non si nominano:",
        },
        {
          tipo: "tabella",
          righe: [
            ["£5", "five pounds"],
            ["£3.50", "three pounds fifty"],
            ["80p", "eighty pence (\"eighty p\")"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "How much is it?", it: "Quanto costa?" },
            { en: "It's twelve pounds ninety-nine.", it: "Costa 12,99 sterline." },
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
          testo: "I numeri",
        },
        {
          tipo: "completa",
          consegna: "Scrivi in lettere il numero 45.",
          prima: "",
          dopo: "",
          risposte: ["forty-five", "forty five"],
          spiegazione: "Forty si scrive senza u, e tra decine e unità si mette il trattino.",
          rivedi: "DECINE, CENTINAIA, MIGLIAIA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si legge 120 in inglese britannico?",
          opzioni: ["a hundred twenty", "a hundred and twenty", "one hundreds and twenty"],
          giusta: 1,
          spiegazione:
            "In britannico dopo le centinaia si mette and. E hundred non prende mai la -s: two hundred.",
          rivedi: "DECINE, CENTINAIA, MIGLIAIA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Senti \"thirTEEN\", con l'accento alla fine. Che numero è?",
          opzioni: ["13", "30"],
          giusta: 0,
          spiegazione: "I numeri in -teen hanno l'accento alla fine, quelli in -ty all'inizio: THIRty.",
          rivedi: "-TEEN O -TY?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che numero è 3,500 in inglese?",
          opzioni: ["tre virgola cinque", "tremilacinquecento"],
          giusta: 1,
          spiegazione:
            "Punti e virgole sono al contrario: la virgola separa le migliaia, il punto i decimali (3.5 = three point five).",
          rivedi: "-TEEN O -TY?",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni numero all'ordinale.",
          coppie: [
            ["1", "first"],
            ["2", "second"],
            ["3", "third"],
            ["5", "fifth"],
            ["12", "twelfth"],
          ],
          spiegazione: "I primi tre sono irregolari; five e twelve perdono la ve: fifth, twelfth.",
          rivedi: "I NUMERI ORDINALI",
        },
        {
          tipo: "sottotitolo",
          testo: "L'ora",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni orario alla forma britannica tradizionale.",
          coppie: [
            ["7:15", "a quarter past seven"],
            ["7:30", "half past seven"],
            ["7:45", "a quarter to eight"],
            ["7:50", "ten to eight"],
          ],
          spiegazione: "Past significa \"dopo\" l'ora, to \"prima\" dell'ora successiva.",
          rivedi: "CHE ORE SONO?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Un amico inglese ti dice: \"See you at half seven\". A che ora vi vedete?",
          opzioni: ["6:30", "7:30"],
          giusta: 1,
          spiegazione: "In britannico half seven è un modo breve per half past seven.",
          rivedi: "CHE ORE SONO?",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che ora è \"3 pm\"?",
          opzioni: ["le 3 di notte", "le 15"],
          giusta: 1,
          spiegazione: "Pm va da mezzogiorno a mezzanotte: 3 pm sono le 15.",
          rivedi: "AM E PM",
        },
        {
          tipo: "sottotitolo",
          testo: "Date e prezzi",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le parole scritte correttamente.",
          parole: ["Monday", "january", "Wednesday", "august", "December", "friday"],
          giuste: [0, 2, 4],
          spiegazione: "Giorni e mesi vogliono sempre la maiuscola: January, August, Friday.",
          rivedi: "GIORNI E MESI",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Il mio compleanno è il 3 maggio\".",
          parole: ["May", "of", "my", "on", "the", "is", "birthday", "3rd"],
          soluzione: ["my", "birthday", "is", "on", "the", "3rd", "of", "May"],
          spiegazione: "Le date usano l'ordinale e on: on the third of May.",
          rivedi: "LE DATE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si legge l'anno 1998?",
          opzioni: ["one thousand nine hundred ninety-eight", "nineteen ninety-eight", "nineteen nine eight"],
          giusta: 1,
          spiegazione: "Gli anni si leggono a coppie di cifre: 19 / 98.",
          rivedi: "LE DATE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Una data americana dice 03/05. Che giorno è?",
          opzioni: ["3 maggio", "5 marzo"],
          giusta: 1,
          spiegazione: "Negli Stati Uniti si scrive prima il mese: 03/05 è il 5 marzo.",
          rivedi: "LE DATE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice £3.50 nel parlato?",
          opzioni: ["three pounds fifty", "three point fifty pounds", "three pound and fifty pences"],
          giusta: 0,
          spiegazione: "Nel parlato i pence spesso non si nominano: three pounds fifty.",
          rivedi: "I PREZZI",
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
