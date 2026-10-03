import { Lezione } from "@/types/lezione";

export const oxford: Lezione = {
  id: "C8",
  titolo: "Oxford",
  descrizione: "La città e l'università",
  chiavi: "Lewis Carroll (Alice's Adventures in Wonderland)",
  livello: "Letteratura",
  citazione: {
    testo: "That sweet City with her dreaming spires.",
    fonte: "Matthew Arnold, Thyrsis",
    traduzione: "Quella dolce città con le sue guglie sognanti.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "LA CITTÀ",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Oxford si trova a circa un'ora di treno a nord-ovest di Londra, dove il Tamigi incontra il fiume Cherwell. Il nome viene da un guado (ford) dove passavano i buoi (oxen). Il poeta Matthew Arnold la chiamò \"la città delle guglie sognanti\", per i campanili e le torri dei suoi college.",
        },
      ],
    },
    {
      titolo: "L'UNIVERSITÀ",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "A Oxford si insegna almeno dal 1096: è l'università più antica del mondo anglofono. Non ha un campus unico. È formata da più di trenta college indipendenti, sparsi per la città, ciascuno con i propri edifici, la mensa, la cappella e il giardino.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Christ Church", "il più grande, con la cattedrale della città"],
            ["Magdalen", "si pronuncia \"MAUD-lin\""],
            ["Balliol, Merton, University", "tra i più antichi, del Duecento"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Gli studenti di Oxford chiamano Cambridge, la grande rivale, \"the Other Place\".",
        },
      ],
    },
    {
      titolo: "COME SI STUDIA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il cuore del metodo di Oxford è il tutorial: ogni settimana uno o due studenti incontrano un professore per discutere un saggio che hanno scritto. Devono difendere le proprie idee, a voce e in inglese.",
        },
        {
          tipo: "tabella",
          righe: [
            ["tutorial", "incontro con il tutor"],
            ["Michaelmas term", "trimestre autunnale"],
            ["Hilary term", "trimestre invernale"],
            ["Trinity term", "trimestre primaverile"],
            ["matriculation", "cerimonia di iscrizione"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Le lezioni che hai fatto sui connettivi (54), sul registro formale (53) e sull'inglese scientifico (49) servono proprio per scrivere questi saggi.",
        },
      ],
    },
    {
      titolo: "I LUOGHI DA VEDERE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["Bodleian Library", "una delle biblioteche più antiche d'Europa, aperta nel 1602"],
            ["Radcliffe Camera", "la sala di lettura rotonda, simbolo della città"],
            ["Ashmolean Museum", "il primo museo universitario, del 1683"],
            ["Christ Church Great Hall", "la mensa che ha ispirato la Sala Grande di Harry Potter"],
            ["Bridge of Sighs", "il \"Ponte dei Sospiri\" dell'Hertford College"],
          ],
        },
      ],
    },
    {
      titolo: "LEWIS CARROLL E ALICE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Charles Dodgson insegnava matematica a Christ Church. Il 4 luglio 1862 portò in barca sul fiume le tre figlie del decano, Henry Liddell, e per intrattenerle inventò una storia su una bambina che cade in una tana di coniglio. Una delle sorelle si chiamava proprio Alice.",
        },
        {
          tipo: "testo",
          testo:
            "Alice gli chiese di scriverla. Nel 1865 il libro uscì con lo pseudonimo Lewis Carroll: Alice's Adventures in Wonderland.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "\"Curiouser and curiouser!\" cried Alice.", it: "\"Sempre più curioso!\" gridò Alice." },
            { en: "We're all mad here.", it: "Qui siamo tutti matti. (lo Stregatto)" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "\"Curiouser\" è sbagliato di proposito: il comparativo corretto è \"more curious\" (lezione 26{3}). Alice è così sorpresa che dimentica la grammatica.",
        },
      ],
    },
    {
      titolo: "GLI SCRITTORI DI OXFORD",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel Novecento J.R.R. Tolkien, professore di inglese antico, e C.S. Lewis si incontravano con altri amici, nelle stanze di Lewis al Magdalen College e nel pub The Eagle and Child, per leggere ad alta voce i loro scritti. Il gruppo si chiamava The Inklings. Da quelle serate sono nati Il Signore degli Anelli e Le cronache di Narnia.",
        },
        {
          tipo: "nota",
          testo:
            "Anche Oscar Wilde, di cui hai letto nel modulo C6, studiò a Oxford.",
        },
      ],
    },
    {
      titolo: "LA TUA STRADA PER OXFORD",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per iscriversi da uno studente italiano servono, in genere:",
        },
        {
          tipo: "tabella",
          righe: [
            ["UCAS", "il portale unico per le domande alle università britanniche"],
            ["scadenza", "a metà ottobre dell'anno prima dell'inizio"],
            ["personal statement", "un testo in cui presenti te stesso"],
            ["test di inglese", "per esempio IELTS"],
            ["colloquio", "per chi supera la prima selezione"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Requisiti e scadenze cambiano da un anno all'altro e da un corso all'altro: controlla sempre sul sito ufficiale dell'università.",
        },
      ],
    },
  ],
};
