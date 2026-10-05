import { Lezione } from "@/types/lezione";

export const victorianAge: Lezione = {
  id: "C6",
  titolo: "L'età vittoriana",
  descrizione: "La società vittoriana, il colonialismo, il cartismo",
  chiavi: "Dickens, Stevenson, Wilde",
  livello: "Letteratura",
  citazione: {
    testo: "We are all in the gutter, but some of us are looking at the stars.",
    fonte: "Oscar Wilde, Il ventaglio di Lady Windermere",
    traduzione: "Siamo tutti nel fango, ma alcuni di noi guardano le stelle.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "LA REGINA VITTORIA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Vittoria regnò dal 1837 al 1901, per 63 anni. Fu un periodo di ottimismo e progresso: ferrovie, telegrafo, fabbriche, e un impero che copriva un quarto delle terre emerse, "l\'impero su cui non tramonta mai il sole".',
        },
        {
          tipo: "nota",
          testo:
            "Nel 1851 la Great Exhibition, nel Crystal Palace di Londra, mostrò al mondo le meraviglie dell'industria britannica.",
        },
      ],
    },
    {
      titolo: "IL COMPROMESSO VITTORIANO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La società vittoriana predicava rispettabilità, famiglia, lavoro e morale rigida. Ma dietro questa facciata c'erano povertà, sfruttamento e ipocrisia: è il cosiddetto Victorian compromise.",
        },
        {
          tipo: "testo",
          testo:
            "Per i poveri c'erano le workhouses, istituti in cui ricevevano cibo e alloggio in cambio di un lavoro durissimo. Erano volutamente terribili, per scoraggiare chi chiedeva aiuto.",
        },
        {
          tipo: "nota",
          testo:
            "Il movimento cartista (Chartism) chiedeva il voto per tutti gli uomini. Fu sconfitto, ma quasi tutte le sue richieste furono approvate nei decenni successivi.",
        },
      ],
    },
    {
      titolo: "IL ROMANZO VITTORIANO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il romanzo fu il genere dominante. Spesso usciva a puntate sulle riviste: i lettori aspettavano il capitolo successivo come oggi si aspetta un nuovo episodio di una serie. Gli scrittori raccontavano la società e le sue ingiustizie.",
        },
      ],
    },
    {
      titolo: "CHARLES DICKENS",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Charles Dickens (1812–1870) da bambino lavorò in una fabbrica di lucido da scarpe, mentre il padre era in prigione per debiti. Nei suoi romanzi racconta la Londra dei poveri con umorismo e indignazione. In Oliver Twist, un orfano cresciuto in una workhouse osa chiedere più cibo:",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Please, sir, I want some more.",
              it: "Per favore, signore, ne vorrei ancora un po'.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "In Hard Times descrive Coketown, una città industriale immaginaria:",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "It was a town of red brick, or of brick that would have been red if the smoke and ashes had allowed it.",
              it: "Era una città di mattoni rossi, o di mattoni che sarebbero stati rossi se il fumo e la cenere l'avessero permesso.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Riconosci la struttura? Would have been… if… had allowed: è un third conditional (lezione 41{1}).",
        },
        {
          tipo: "apri",
          id: "coketown",
          titolo: "Hard Times: Coketown",
          descrizione: "Charles Dickens, 1854 · lettura e analisi completa",
        },
      ],
    },
    {
      titolo: "STEVENSON: JEKYLL E HYDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Robert Louis Stevenson (1850–1894), scozzese, scrisse anche L'isola del tesoro. In Lo strano caso del Dr Jekyll e Mr Hyde (1886) uno stimato medico beve una pozione e si trasforma in Hyde, la parte malvagia di sé.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Man is not truly one, but truly two.",
              it: "L'uomo non è veramente uno, ma veramente due.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "È il perfetto simbolo del compromesso vittoriano: una faccia rispettabile di giorno, un'altra nascosta di notte.",
        },
        {
          tipo: "apri",
          id: "jekyll-hyde",
          titolo: "Dr Jekyll and Mr Hyde",
          descrizione:
            "Robert Louis Stevenson, 1886 · lettura e analisi completa",
        },
      ],
    },
    {
      titolo: "OSCAR WILDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Oscar Wilde (1854–1900), irlandese, studiò a Oxford al Magdalen College. Fu il maggiore esponente dell'Estetismo, il movimento dell'\"arte per l'arte\": l'arte non deve insegnare né essere utile, ma solo essere bella.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "All art is quite useless.",
              it: "Tutta l'arte è del tutto inutile. (Prefazione a Dorian Gray)",
            },
            {
              en: "The truth is rarely pure and never simple.",
              it: "La verità è raramente pura e mai semplice. (The Importance of Being Earnest)",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Nel Ritratto di Dorian Gray un giovane bellissimo resta sempre giovane, mentre il suo ritratto invecchia e si deforma per ogni sua colpa. L'importanza di chiamarsi Ernesto è una commedia brillante che prende in giro l'ipocrisia dell'alta società.",
        },
        {
          tipo: "nota",
          testo:
            "Nel 1895 Wilde fu condannato a due anni di lavori forzati per omosessualità. Morì povero a Parigi nel 1900.",
        },
        {
          tipo: "apri",
          id: "dorian-gray",
          titolo: "The Picture of Dorian Gray: la prefazione",
          descrizione: "Oscar Wilde, 1891 · lettura e analisi completa",
        },
      ],
    },
  ],
};
