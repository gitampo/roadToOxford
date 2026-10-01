import { Lezione } from "@/types/lezione";

export const advancedPhrasalVerbs: Lezione = {
  id: "56",
  titolo: "Phrasal verbs avanzati",
  descrizione: "Capire e usare l'inglese colloquiale",
  chiavi: "verbi frasali avanzati",
  livello: "[B2-C1]",
  citazione: {
    testo: "Get up, stand up, stand up for your rights.",
    fonte: "Bob Marley, Get Up, Stand Up",
    traduzione: "Alzati, alzati in piedi, difendi i tuoi diritti.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL SIGNIFICATO DELLE PARTICELLE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le particelle non sono casuali: spesso hanno un significato ricorrente. Conoscerlo aiuta a indovinare phrasal verbs mai visti.",
        },
        {
          tipo: "tabella",
          righe: [
            ["up", "completare, aumentare: eat up, speed up"],
            ["down", "diminuire, fermare: slow down, calm down"],
            ["out", "fino in fondo, far sparire: sort out, run out"],
            ["off", "staccare, partire: switch off, set off"],
            ["on", "continuare: carry on, keep on"],
            ["over", "ripetere, esaminare: think over, go over"],
          ],
        },
      ],
    },
    {
      titolo: "TRE PAROLE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alcuni phrasal verbs hanno due particelle. Non si separano mai:",
        },
        {
          tipo: "tabella",
          righe: [
            ["put up with", "sopportare"],
            ["come up with", "farsi venire in mente"],
            ["catch up with", "raggiungere, mettersi in pari"],
            ["get away with", "farla franca"],
            ["look down on", "guardare dall'alto in basso"],
            ["stand up for", "difendere"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I can't put up with this noise.", it: "Non sopporto questo rumore." },
            { en: "She came up with a brilliant idea.", it: "Le è venuta un'idea geniale." },
          ],
        },
      ],
    },
    {
      titolo: "UN VERBO, TANTI SIGNIFICATI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Lo stesso phrasal verb può avere significati molto diversi. Il contesto è tutto:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The plane took off.", it: "L'aereo è decollato." },
            { en: "Take off your shoes.", it: "Togliti le scarpe." },
            { en: "Her career took off.", it: "La sua carriera è decollata." },
            { en: "He took off his teacher perfectly.", it: "Ha imitato perfettamente il suo insegnante." },
          ],
        },
      ],
    },
    {
      titolo: "LAVORO E STUDIO",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["take on", "assumere; accettare (un incarico)"],
            ["lay off", "licenziare (per crisi)"],
            ["set up", "fondare, avviare"],
            ["hand in", "consegnare"],
            ["drop out", "abbandonare (gli studi)"],
            ["brush up on", "ripassare, rinfrescare"],
            ["point out", "far notare"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I need to brush up on my French before the trip.", it: "Devo rinfrescare il mio francese prima del viaggio." },
          ],
        },
      ],
    },
    {
      titolo: "EMOZIONI E RELAZIONI",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["cheer up", "tirarsi su"],
            ["calm down", "calmarsi"],
            ["fall out (with)", "litigare (con)"],
            ["make up", "fare pace; inventare"],
            ["get over", "superare, riprendersi da"],
            ["look up to", "ammirare"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It took her months to get over the break-up.", it: "Le ci sono voluti mesi per superare la rottura." },
          ],
        },
      ],
    },
    {
      titolo: "DAL VERBO AL NOME",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Molti phrasal verbs diventano nomi, spesso scritti attaccati o con il trattino:",
        },
        {
          tipo: "tabella",
          righe: [
            ["break down → a breakdown", "un guasto; un crollo nervoso"],
            ["check in → check-in", "l'accettazione"],
            ["work out → a workout", "un allenamento"],
            ["set back → a setback", "una battuta d'arresto"],
            ["take away → a takeaway", "cibo da asporto (britannico)"],
          ],
        },
      ],
    },
  ],
};
