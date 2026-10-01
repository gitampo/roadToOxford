import { Lezione } from "@/types/lezione";

export const phrasalVerbs: Lezione = {
  id: "46",
  titolo: "Phrasal verbs di base",
  descrizione: "Parlare in modo naturale nella vita quotidiana",
  chiavi: "verbi frasali",
  livello: "B1",
  citazione: {
    testo: "Never gonna give you up, never gonna let you down.",
    fonte: "Rick Astley, Never Gonna Give You Up",
    traduzione: "Non ti abbandonerò mai, non ti deluderò mai.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COSA SONO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Un phrasal verb è un verbo + una particella (up, down, out, on, off…). Insieme formano un verbo nuovo, spesso con un significato diverso da quello delle due parole:",
        },
        {
          tipo: "tabella",
          righe: [
            ["give (dare) → give up", "arrendersi, smettere"],
            ["look (guardare) → look after", "prendersi cura di"],
            ["get (ottenere) → get up", "alzarsi"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nel parlato i madrelingua usano i phrasal verbs molto più dei verbi \"latini\": dicono find out, non discover; go on, non continue.",
        },
      ],
    },
    {
      titolo: "LA GIORNATA",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["wake up", "svegliarsi"],
            ["get up", "alzarsi"],
            ["get dressed", "vestirsi"],
            ["go out", "uscire"],
            ["come back", "tornare"],
            ["sit down", "sedersi"],
            ["stand up", "alzarsi in piedi"],
            ["lie down", "sdraiarsi"],
          ],
        },
      ],
    },
    {
      titolo: "OGGETTI E VESTITI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["put on", "mettersi (un vestito)"],
            ["take off", "togliersi; decollare"],
            ["turn on / off", "accendere / spegnere"],
            ["turn up / down", "alzare / abbassare (il volume)"],
            ["pick up", "raccogliere; andare a prendere"],
            ["throw away", "buttare via"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Turn off the lights, please.", it: "Spegni le luci, per favore." },
            { en: "I'll pick you up at eight.", it: "Passo a prenderti alle otto." },
          ],
        },
      ],
    },
    {
      titolo: "SEPARABILI O NO?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con molti phrasal verbs il complemento può stare in mezzo o dopo. Ma se è un pronome (it, them, me), deve stare in mezzo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Put on your coat. / Put your coat on.", it: "Mettiti il cappotto." },
            { en: "Put it on.", it: "Mettilo." },
            { en: "Put on it.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Alcuni non si separano mai, come look after: \"look after the kids\", \"look after them\".",
        },
      ],
    },
    {
      titolo: "RELAZIONI E PERSONE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["get on with", "andare d'accordo con"],
            ["look after", "prendersi cura di"],
            ["look forward to", "non vedere l'ora di"],
            ["break up", "lasciarsi"],
            ["let down", "deludere"],
            ["grow up", "crescere"],
            ["bring up", "crescere (un figlio); sollevare (un argomento)"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I get on well with my sister.", it: "Vado d'accordo con mia sorella." },
            { en: "I'm looking forward to seeing you.", it: "Non vedo l'ora di vederti." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Look forward to vuole -ing, perché to qui è una preposizione: \"looking forward to meeting you\".",
        },
      ],
    },
    {
      titolo: "SCUOLA E PROBLEMI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["find out", "scoprire"],
            ["look up", "cercare (in un dizionario)"],
            ["give up", "arrendersi, smettere"],
            ["carry on / go on", "continuare"],
            ["fill in", "compilare"],
            ["work out", "capire, risolvere; allenarsi"],
            ["run out of", "rimanere senza"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Look it up in the dictionary.", it: "Cercalo sul dizionario." },
            { en: "We've run out of milk.", it: "Siamo rimasti senza latte." },
            { en: "Don't give up!", it: "Non mollare!" },
          ],
        },
      ],
    },
  ],
};
