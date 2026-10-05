import { Lezione } from "@/types/lezione";

export const renaissance: Lezione = {
  id: "C3",
  titolo: "Il Rinascimento",
  descrizione: "Tudor, Enrico VIII, Elisabetta I, l'Impero",
  chiavi: "Shakespeare (Sonetto 18, Romeo and Juliet, Hamlet), Donne",
  livello: "Letteratura",
  citazione: {
    testo: "All the world's a stage, and all the men and women merely players.",
    fonte: "William Shakespeare, Come vi piace",
    traduzione:
      "Il mondo intero è un palcoscenico, e tutti gli uomini e le donne non sono che attori.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "I TUDOR",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel 1485 finì la Guerra delle due Rose tra le famiglie York e Lancaster. Il vincitore, Enrico VII, fondò la dinastia Tudor e portò stabilità al paese.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Henry VII", "1485–1509"],
            ["Henry VIII", "1509–1547"],
            ["Edward VI", "1547–1553"],
            ["Mary I", "1553–1558"],
            ["Elizabeth I", "1558–1603"],
          ],
        },
      ],
    },
    {
      titolo: "ENRICO VIII E LA ROTTURA CON ROMA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Enrico VIII voleva annullare il matrimonio con Caterina d'Aragona, che non gli aveva dato un figlio maschio. Il papa rifiutò, e nel 1534 con l'Atto di Supremazia il re si proclamò capo della Chiesa d'Inghilterra. Si sposò sei volte.",
        },
        {
          tipo: "testo",
          testo:
            'Thomas More, umanista e suo cancelliere, rifiutò di riconoscerlo e fu giustiziato nel 1535. Nel 1516 aveva scritto Utopia, la descrizione di un\'isola con una società perfetta. La parola "utopia" viene da lì.',
        },
        {
          tipo: "nota",
          testo:
            "Dopo di lui, Edoardo VI rafforzò il protestantesimo e Maria I tentò di riportare il cattolicesimo, perseguitando i protestanti: per questo la chiamarono Bloody Mary.",
        },
      ],
    },
    {
      titolo: "L'ETÀ ELISABETTIANA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Elisabetta I regnò 45 anni senza mai sposarsi: la \"Virgin Queen\". Nel 1588 la flotta inglese sconfisse l'Invincibile Armata spagnola. Fu un'epoca di esplorazioni, commerci e grande fioritura del teatro.",
        },
        {
          tipo: "testo",
          testo:
            "Nello stesso periodo nasceva la rivoluzione scientifica: Francis Bacon sosteneva che la conoscenza dovesse basarsi sull'osservazione e sugli esperimenti.",
        },
        {
          tipo: "nota",
          testo:
            "Alla morte di Elisabetta, nel 1603, il trono passò a Giacomo I Stuart, già re di Scozia. Nel 1620 i Padri Pellegrini partirono sulla Mayflower per l'America.",
        },
      ],
    },
    {
      titolo: "IL TEATRO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I primi teatri pubblici nacquero a Londra alla fine del Cinquecento. Erano edifici rotondi e aperti al cielo, come il Globe (1599): i ricchi sedevano nelle gallerie coperte, il popolo stava in piedi davanti al palco per un penny. I ruoli femminili erano recitati da ragazzi.",
        },
        {
          tipo: "tabella",
          righe: [
            ["public theatres", "all'aperto, per tutti, spettacoli di giorno"],
            ["private theatres", "al chiuso, a lume di candela, più costosi"],
          ],
        },
      ],
    },
    {
      titolo: "SHAKESPEARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "William Shakespeare (1564–1616), nato a Stratford-upon-Avon, fu attore, autore e socio della compagnia del Globe. Scrisse circa 37 opere teatrali (commedie, tragedie, drammi storici) e 154 sonetti. Ha inventato o reso popolari centinaia di parole ed espressioni usate ancora oggi.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "O Romeo, Romeo, wherefore art thou Romeo?",
              it: "O Romeo, Romeo, perché sei tu Romeo? (Romeo and Juliet)",
            },
            {
              en: "To be, or not to be, that is the question.",
              it: "Essere o non essere, questo è il problema. (Hamlet)",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Wherefore non significa "dove" ma "perché": Giulietta si chiede perché Romeo debba appartenere proprio alla famiglia nemica.',
        },
      ],
    },
    {
      titolo: "ROMEO AND JULIET E HAMLET",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Romeo and Juliet, ambientata a Verona, racconta l'amore tra due giovani di famiglie nemiche, i Montecchi e i Capuleti. È una tragedia di amore e odio, in cui la fretta e il caso portano alla morte dei protagonisti. Shakespeare si ispirò a un poema inglese tratto da novelle italiane.",
        },
        {
          tipo: "testo",
          testo:
            "In Hamlet il principe di Danimarca scopre che lo zio ha ucciso suo padre per prenderne il trono e sposarne la vedova. Amleto vuole vendicarsi, ma continua a esitare e a riflettere: è il primo grande personaggio moderno, diviso tra pensiero e azione.",
        },
        {
          tipo: "apri",
          id: "romeo-juliet",
          titolo: "Romeo and Juliet",
          descrizione:
            "La scena del balcone, circa 1595 · lettura e analisi completa",
        },
        {
          tipo: "apri",
          id: "hamlet",
          titolo: "Hamlet: to be, or not to be",
          descrizione: "Il monologo, circa 1600 · lettura e analisi completa",
        },
      ],
    },
    {
      titolo: "IL SONETTO 18",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il sonetto più famoso di Shakespeare: il poeta paragona la persona amata a un giorno d'estate, e promette che la sua bellezza vivrà per sempre nei versi. Lo leggiamo tutto e lo analizziamo verso per verso, tra significato e grammatica.",
        },
        {
          tipo: "apri",
          id: "sonetto-18",
          titolo: "Sonetto 18",
          descrizione: "William Shakespeare, 1609 · lettura e analisi completa",
        },
      ],
    },
    {
      titolo: "JOHN DONNE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "John Donne (1572–1631) è il maggiore dei poeti metafisici: poesie piene di immagini sorprendenti, ragionamenti e un tono da conversazione. Nelle poesie d'amore, come The Sun Rising, rimprovera il sole di svegliare gli amanti:",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Busy old fool, unruly sun,",
              it: "Vecchio sciocco affaccendato, sole indisciplinato,",
            },
            { en: "Why dost thou thus,", it: "perché mai" },
            {
              en: "Through windows, and through curtains call on us?",
              it: "attraverso finestre e tende vieni a chiamarci?",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'Nelle poesie religiose, come Batter my heart, il tono è altrettanto intenso: il poeta chiede a Dio di "colpirgli il cuore" con violenza per poter rinascere.',
        },
        {
          tipo: "apri",
          id: "death-be-not-proud",
          titolo: "Death, be not proud",
          descrizione: "John Donne, 1633 · lettura e analisi completa",
        },
      ],
    },
  ],
};
