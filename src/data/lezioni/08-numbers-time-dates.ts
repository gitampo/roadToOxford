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
  ],
};
