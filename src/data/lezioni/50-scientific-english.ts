import { Lezione } from "@/types/lezione";

export const scientificEnglish: Lezione = {
  id: "50",
  titolo: "L'inglese scientifico",
  descrizione: "Presentare dati e ricerche",
  chiavi: "inglese scientifico, ESP",
  livello: "B1",
  citazione: {
    testo: "If I have seen further it is by standing on the shoulders of Giants.",
    fonte: "Isaac Newton, 1675",
    traduzione: "Se ho visto più lontano, è perché stavo sulle spalle di giganti.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "LA LINGUA DELLA SCIENZA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Oggi quasi tutta la ricerca scientifica si pubblica in inglese. Ha uno stile preciso: frasi chiare, molto passivo, verbi al presente per i fatti e al passato per gli esperimenti.",
        },
        {
          tipo: "tabella",
          righe: [
            ["present simple", "fatti generali: Water boils at 100°C."],
            ["past simple", "cosa hai fatto: We measured the temperature."],
            ["passive", "il procedimento: The samples were heated."],
          ],
        },
      ],
    },
    {
      titolo: "IL PASSIVO NEI METODI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nella descrizione di un esperimento conta cosa è stato fatto, non chi l'ha fatto. Per questo si usa il passivo (lezione 43{3}):",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The solution was heated to 80°C.", it: "La soluzione è stata scaldata a 80°C." },
            { en: "Data were collected over six months.", it: "I dati sono stati raccolti in sei mesi." },
            { en: "The results are shown in Table 2.", it: "I risultati sono riportati nella Tabella 2." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nei testi scientifici data è spesso plurale (data were). Nel linguaggio di tutti i giorni si usa al singolare (data is).",
        },
      ],
    },
    {
      titolo: "DESCRIVERE UN GRAFICO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["rise / increase", "salire, aumentare"],
            ["fall / decrease / drop", "scendere, diminuire"],
            ["remain stable", "rimanere stabile"],
            ["peak at", "raggiungere il picco a"],
            ["fluctuate", "oscillare"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Temperatures rose sharply between 1990 and 2020.", it: "Le temperature sono salite bruscamente tra il 1990 e il 2020." },
            { en: "The number of cases fell by 15%.", it: "Il numero di casi è diminuito del 15%." },
            { en: "Sales peaked at 2 million in 2018.", it: "Le vendite hanno raggiunto il picco di 2 milioni nel 2018." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "By indica la differenza (fell by 15%), to il valore finale (fell to 200).",
        },
      ],
    },
    {
      titolo: "PRUDENZA: L'HEDGING",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Uno scienziato raramente dice \"è così\". Per esprimere i risultati con cautela si usano i modali e verbi come suggest e appear:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The results suggest that…", it: "I risultati suggeriscono che…" },
            { en: "This may be due to…", it: "Questo potrebbe essere dovuto a…" },
            { en: "It appears that the drug is effective.", it: "Sembra che il farmaco sia efficace." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "\"This proves that the drug works\" non è sbagliato, ma in un articolo scientifico suona troppo sicuro. Un solo studio raramente dimostra qualcosa.",
        },
      ],
    },
    {
      titolo: "COLLEGARE LE IDEE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["however", "tuttavia"],
            ["therefore", "quindi"],
            ["moreover / furthermore", "inoltre"],
            ["whereas", "mentre (contrasto)"],
            ["as a result", "di conseguenza"],
            ["in contrast", "al contrario"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The first group improved; however, the second did not.", it: "Il primo gruppo è migliorato; il secondo, invece, no." },
          ],
        },
      ],
    },
    {
      titolo: "NUMERI E SIMBOLI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["3.5", "three point five"],
            ["½", "a half"],
            ["¾", "three quarters"],
            ["x²", "x squared"],
            ["x³", "x cubed"],
            ["10⁶", "ten to the power of six"],
            ["%", "per cent"],
            ["°C", "degrees Celsius"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Ricorda: in inglese la virgola decimale è un punto (3.5), e la virgola separa le migliaia (3,500).",
        },
      ],
    },
    {
      titolo: "I FALSI AMICI DELLA SCIENZA",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["experiment", "esperimento"],
            ["experience", "esperienza (non esperimento!)"],
            ["argument", "tesi, argomentazione; litigio"],
            ["eventually", "alla fine (non eventualmente)"],
            ["actually", "in realtà (non attualmente)"],
            ["sensible", "ragionevole (non sensibile)"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "We did an experience in the lab.", sbagliato: true },
            { en: "We did an experiment in the lab.", it: "Abbiamo fatto un esperimento in laboratorio." },
          ],
        },
      ],
    },
  ],
};
