import { Lezione } from "@/types/lezione";

export const pastPerfect: Lezione = {
  id: "37",
  titolo: "Past Perfect",
  descrizione: "Raccontare fatti in sequenza, come nelle storie di vita",
  chiavi: "trapassato prossimo, had + participio",
  livello: "[B1]",
  citazione: {
    testo: "He had come a long way to this blue lawn.",
    fonte: "F. Scott Fitzgerald, Il grande Gatsby",
    traduzione: "Aveva fatto molta strada per arrivare a questo prato azzurro.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL PASSATO DEL PASSATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il past perfect indica un'azione avvenuta prima di un'altra azione passata. Corrisponde al nostro trapassato prossimo: \"avevo fatto\".",
        },
        {
          tipo: "tabella",
          righe: [
            ["had + participio passato", "uguale per tutte le persone"],
            ["I had ('d) finished", "avevo finito"],
            ["she hadn't seen", "non aveva visto"],
            ["Had you eaten?", "Avevi mangiato?"],
          ],
        },
      ],
    },
    {
      titolo: "DUE MOMENTI NEL PASSATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Serve quando racconti due fatti passati e vuoi chiarire quale è venuto prima:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "When I arrived, the film had started.", it: "Quando sono arrivato, il film era iniziato (prima del mio arrivo)." },
            { en: "When I arrived, the film started.", it: "Quando sono arrivato, il film è iniziato (subito dopo)." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Una sola parola cambia il significato: con had l'ho perso, senza had ho visto l'inizio.",
        },
      ],
    },
    {
      titolo: "QUANDO NON SERVE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Se l'ordine è già chiaro, per esempio con before o after, o se racconti i fatti nell'ordine in cui sono successi, basta il past simple:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I had breakfast and went to school.", it: "Ho fatto colazione e sono andato a scuola." },
            { en: "After I finished, I went home.", it: "Dopo aver finito, sono andato a casa." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Non usare il past perfect solo perché \"è molto passato\". Serve sempre un altro momento passato di riferimento.",
        },
      ],
    },
    {
      titolo: "LE PAROLE CHIAVE",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["already", "già"],
            ["just", "appena"],
            ["never… before", "mai… prima di allora"],
            ["by the time", "quando ormai"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I had never seen the sea before.", it: "Non avevo mai visto il mare prima di allora." },
            { en: "By the time we got there, everyone had left.", it: "Quando siamo arrivati, se n'erano già andati tutti." },
            { en: "She had just gone out.", it: "Era appena uscita." },
          ],
        },
      ],
    },
    {
      titolo: "SPIEGARE UNA CAUSA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il past perfect spiega spesso perché qualcosa è successo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I was tired because I hadn't slept.", it: "Ero stanco perché non avevo dormito." },
            { en: "She was nervous because she had never flown before.", it: "Era nervosa perché non aveva mai volato." },
          ],
        },
      ],
    },
    {
      titolo: "UNA STORIA DI VITA",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "When Darwin boarded the Beagle in 1831, he had studied medicine and theology.", it: "Quando Darwin si imbarcò sul Beagle nel 1831, aveva studiato medicina e teologia." },
            { en: "He had never travelled so far.", it: "Non aveva mai viaggiato così lontano." },
            { en: "By the time he returned, he had collected thousands of specimens.", it: "Quando tornò, aveva raccolto migliaia di esemplari." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "'d può essere had o would: \"I'd gone\" = I had gone, \"I'd go\" = I would go. Lo capisci da cosa segue: participio o verbo base.",
        },
      ],
    },
  ],
};
