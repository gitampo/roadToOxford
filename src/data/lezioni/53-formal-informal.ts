import { Lezione } from "@/types/lezione";

export const formalInformal: Lezione = {
  id: "53",
  titolo: "Inglese formale e informale",
  descrizione: "Scrivere email formali, affrontare un colloquio",
  chiavi: "registro, formale, informale",
  livello: "B2-C1",
  citazione: {
    testo: "In matters of grave importance, style, not sincerity, is the vital thing.",
    fonte: "Oscar Wilde, L'importanza di chiamarsi Ernesto",
    traduzione: "Nelle questioni di grande importanza, lo stile, non la sincerità, è la cosa essenziale.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL REGISTRO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In inglese non c'è il \"Lei\": la formalità si esprime con la scelta delle parole e delle strutture. Lo stesso concetto può suonare molto diverso:",
        },
        {
          tipo: "tabella",
          righe: [
            ["informale", "formale"],
            ["get", "receive / obtain"],
            ["ask for", "request"],
            ["help", "assist"],
            ["find out", "discover / ascertain"],
            ["need", "require"],
            ["start", "commence"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "I verbi formali vengono spesso dal latino, quindi per un italiano sono facili da capire. Quelli informali sono spesso phrasal verbs.",
        },
      ],
    },
    {
      titolo: "LE CARATTERISTICHE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["contrazioni (I'm, don't)", "forme intere (I am, do not)"],
            ["frasi brevi e dirette", "frasi più complesse, passivo"],
            ["phrasal verbs", "verbi di origine latina"],
            ["domande dirette", "domande indirette"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Where's the station?", it: "Dov'è la stazione? (diretta)" },
            { en: "Could you tell me where the station is?", it: "Mi saprebbe dire dov'è la stazione? (indiretta, più cortese)" },
          ],
        },
      ],
    },
    {
      titolo: "L'EMAIL FORMALE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["Dear Mr / Ms Smith,", "Gentile signor / signora Smith,"],
            ["Dear Sir or Madam,", "Gentili signori (destinatario sconosciuto)"],
            ["I am writing to…", "Le scrivo per…"],
            ["I would be grateful if…", "Le sarei grato se…"],
            ["Please find attached…", "In allegato trova…"],
            ["I look forward to hearing from you.", "In attesa di un Suo riscontro."],
            ["Yours sincerely, / Kind regards,", "Distinti saluti, / Cordiali saluti,"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nel britannico: \"Yours sincerely\" se conosci il nome, \"Yours faithfully\" se hai scritto \"Dear Sir or Madam\". Ms si usa per le donne senza indicare lo stato civile.",
        },
      ],
    },
    {
      titolo: "L'EMAIL INFORMALE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["Hi Tom, / Hey!", "Ciao Tom,"],
            ["Thanks for your email.", "Grazie per l'email."],
            ["Just wanted to let you know…", "Volevo solo dirti che…"],
            ["Let me know if…", "Fammi sapere se…"],
            ["Speak soon, / Cheers, / Love,", "A presto, / Ciao, / Un abbraccio,"],
          ],
        },
      ],
    },
    {
      titolo: "AMMORBIDIRE LE RICHIESTE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Gli inglesi tendono a evitare le richieste dirette. Più la situazione è formale, più la frase si allunga:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Send me the file.", it: "Mandami il file (brusco)." },
            { en: "Could you send me the file?", it: "Mi mandi il file? (normale)" },
            { en: "I was wondering if you could send me the file.", it: "Mi chiedevo se potesse mandarmi il file (molto cortese)." },
          ],
        },
      ],
    },
    {
      titolo: "IL COLLOQUIO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "A un colloquio di lavoro o di ammissione all'università si usa un registro neutro-formale: niente slang, ma nemmeno parole troppo pompose.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Could you tell me a little about yourself?", it: "Può parlarmi un po' di sé?" },
            { en: "I'm particularly interested in this course because…", it: "Sono particolarmente interessato a questo corso perché…" },
            { en: "One of my strengths is that I'm very organised.", it: "Uno dei miei punti di forza è che sono molto organizzato." },
            { en: "Could you repeat the question, please?", it: "Potrebbe ripetere la domanda, per favore?" },
          ],
        },
      ],
    },
  ],
};
