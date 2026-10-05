import { Lezione } from "@/types/lezione";

export const discourseMarkers: Lezione = {
  id: "55",
  titolo: "I connettivi",
  descrizione: "Argomentare e collegare le idee",
  chiavi: "connettivi, however, nevertheless",
  livello: "B2-C1",
  citazione: {
    testo: "Nevertheless, she persisted.",
    fonte: "Mitch McConnell su Elizabeth Warren, 2017",
    traduzione: "Ciononostante, lei ha insistito.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "A COSA SERVONO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I connettivi collegano le idee e guidano chi legge: aggiungi, contrapponi, spieghi una causa, arrivi a una conclusione. Sono fondamentali nei saggi e negli esami di scrittura.",
        },
      ],
    },
    {
      titolo: "AGGIUNGERE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["also / too / as well", "anche"],
            ["in addition", "in aggiunta"],
            ["moreover / furthermore", "inoltre (formale)"],
            ["what's more", "per di più (informale)"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The flat is cheap. Moreover, it's close to the centre.", it: "L'appartamento è economico. Inoltre, è vicino al centro." },
          ],
        },
      ],
    },
    {
      titolo: "CONTRAPPORRE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["but", "ma"],
            ["however", "tuttavia"],
            ["nevertheless", "ciononostante"],
            ["although / even though", "sebbene"],
            ["despite / in spite of", "nonostante"],
            ["whereas / while", "mentre (confronto)"],
            ["on the other hand", "d'altra parte"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "However va tra due frasi, di solito dopo un punto o un punto e virgola, seguito da virgola: \"It was hard; however, we finished.\"",
        },
      ],
    },
    {
      titolo: "ALTHOUGH O DESPITE?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Hanno lo stesso significato ma una struttura diversa: although vuole una frase con verbo, despite un nome o un -ing.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Although it was raining, we went out.", it: "Sebbene piovesse, siamo usciti." },
            { en: "Despite the rain, we went out.", it: "Nonostante la pioggia, siamo usciti." },
            { en: "Despite it was raining, we went out.", sbagliato: true },
            { en: "Despite being tired, she kept working.", it: "Nonostante fosse stanca, ha continuato a lavorare." },
          ],
        },
      ],
    },
    {
      titolo: "CAUSA E CONSEGUENZA",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["because / as / since", "perché, poiché"],
            ["because of / due to", "a causa di"],
            ["so", "quindi"],
            ["therefore / consequently", "pertanto, di conseguenza"],
            ["as a result", "come risultato"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The train was cancelled due to the strike.", it: "Il treno è stato cancellato a causa dello sciopero." },
            { en: "Prices rose; therefore, demand fell.", it: "I prezzi sono saliti; di conseguenza la domanda è scesa." },
          ],
        },
      ],
    },
    {
      titolo: "ORDINARE E CONCLUDERE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["firstly / first of all", "innanzitutto"],
            ["secondly / then", "in secondo luogo / poi"],
            ["finally / lastly", "infine"],
            ["for example / for instance", "per esempio"],
            ["in other words", "in altre parole"],
            ["in conclusion / to sum up", "in conclusione / riassumendo"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Attenzione: \"at last\" significa \"finalmente\" (dopo tanta attesa), non \"infine\" in un elenco.",
        },
      ],
    },
    {
      titolo: "NEL PARLATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nella conversazione si usano connettivi più leggeri, che servono anche a prendere tempo:",
        },
        {
          tipo: "tabella",
          righe: [
            ["anyway", "comunque"],
            ["actually", "in realtà"],
            ["by the way", "a proposito"],
            ["I mean", "cioè"],
            ["well…", "beh…"],
          ],
        },
      ],
    },
  ],
};
