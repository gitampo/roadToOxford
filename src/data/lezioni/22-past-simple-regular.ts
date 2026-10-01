import { Lezione } from "@/types/lezione";

export const pastSimpleRegular: Lezione = {
  id: "22",
  titolo: "Past Simple: verbi regolari",
  descrizione: "Raccontare cosa hai fatto",
  chiavi: "passato semplice, -ed",
  livello: "[A1]",
  citazione: {
    testo: "And they lived happily ever after.",
    fonte: "Finale delle fiabe",
    traduzione: "E vissero felici e contenti.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "A COSA SERVE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il past simple racconta azioni finite nel passato, in un momento preciso. Traduce sia il passato prossimo (ho giocato) sia il passato remoto (giocai).",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I watched a film last night.", it: "Ieri sera ho guardato un film." },
            { en: "She visited Oxford in 2019.", it: "Ha visitato Oxford nel 2019." },
          ],
        },
      ],
    },
    {
      titolo: "COME SI FORMA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nei verbi regolari si aggiunge -ed. È uguale per tutte le persone, anche per he, she, it:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I worked", "ho lavorato"],
            ["you worked", "hai lavorato"],
            ["he / she / it worked", "ha lavorato"],
            ["we / you / they worked", "abbiamo, avete, hanno lavorato"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Buone notizie: al past simple niente -s della terza persona.",
        },
      ],
    },
    {
      titolo: "COME SI SCRIVE -ED",
      blocchi: [
        {
          tipo: "tabella",
          righe: [
            ["di solito + -ed", "play → played"],
            ["finisce in -e: + -d", "live → lived"],
            ["consonante + y → -ied", "study → studied"],
            ["vocale + y → -ed", "enjoy → enjoyed"],
            ["vocale + consonante accentata: si raddoppia", "stop → stopped"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nell'inglese britannico si raddoppia anche la l finale: travel → travelled. In americano: traveled.",
        },
      ],
    },
    {
      titolo: "COME SI PRONUNCIA -ED",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La -ed non si legge quasi mai \"ed\". Ha tre pronunce:",
        },
        {
          tipo: "tabella",
          righe: [
            ["/t/ dopo p, k, s, sh, ch, f", "walked, stopped, watched"],
            ["/d/ dopo suoni sonori e vocali", "played, lived, called"],
            ["/id/ solo dopo t e d", "wanted, needed, started"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il suono /id/, con una sillaba in più, si sente solo dopo t e d. \"Worked\" è una sillaba sola: \"uorkt\".",
        },
      ],
    },
    {
      titolo: "LE ESPRESSIONI DI TEMPO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il past simple va con espressioni che indicano un momento finito:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I called her yesterday.", it: "L'ho chiamata ieri." },
            { en: "We arrived two hours ago.", it: "Siamo arrivati due ore fa." },
            { en: "They moved to Leeds last year.", it: "L'anno scorso si sono trasferiti a Leeds." },
            { en: "When did you start?", it: "Quando hai iniziato?" },
          ],
        },
      ],
    },
    {
      titolo: "RACCONTARE UNA STORIA",
      blocchi: [
        {
          tipo: "testo",
          testo: "Con il past simple le azioni si mettono in fila, una dopo l'altra:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I opened the door, looked outside and called my dog.", it: "Ho aperto la porta, ho guardato fuori e ho chiamato il cane." },
            { en: "First we walked to the centre, then we visited the museum.", it: "Prima siamo andati in centro a piedi, poi abbiamo visitato il museo." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Negativa e domande (didn't, did you…?) le vedi nella lezione 24{1}. Prima, nella lezione 23{1}, i verbi irregolari.",
        },
      ],
    },
  ],
};
