import { Lezione } from "@/types/lezione";

export const pastSimpleRegular: Lezione = {
  id: "22",
  titolo: "Past Simple: verbi regolari",
  descrizione: "Raccontare cosa hai fatto",
  chiavi: "passato semplice, -ed",
  livello: "A1",
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
    {
      titolo: "ESERCIZI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora mettiti alla prova. Ogni esercizio, se sbagli, ti indica il riquadro da rivedere: dopo averlo riletto, torni qui con un tocco. In fondo trovi il tuo risultato.",
        },
        {
          tipo: "sottotitolo",
          testo: "La forma",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: ["She workeds in a bank.", "She worked in a bank.", "She works yesterday."],
          giusta: 1,
          spiegazione: "Al past simple il verbo è uguale per tutti: niente -s della terza persona.",
          rivedi: "COME SI FORMA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si traduce \"Ieri sera ho guardato un film\"?",
          opzioni: ["I have watched a film last night.", "I watched a film last night."],
          giusta: 1,
          spiegazione:
            "Con un momento finito (last night) si usa il past simple, anche dove l'italiano usa il passato prossimo.",
          rivedi: "A COSA SERVE",
        },
        {
          tipo: "sottotitolo",
          testo: "Come si scrive",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni verbo al suo passato.",
          coppie: [
            ["live", "lived"],
            ["study", "studied"],
            ["enjoy", "enjoyed"],
            ["stop", "stopped"],
            ["travel", "travelled"],
          ],
          spiegazione:
            "-e + d, consonante + y → -ied, vocale + y → -ed, consonante raddoppiata in stop e (in britannico) travel.",
          rivedi: "COME SI SCRIVE -ED",
        },
        {
          tipo: "completa",
          consegna: "Completa con il passato di \"try\".",
          prima: "I",
          dopo: "to call you.",
          risposte: ["tried"],
          spiegazione: "Consonante + y: la y diventa -ied.",
          rivedi: "COME SI SCRIVE -ED",
        },
        {
          tipo: "completa",
          consegna: "Completa con il passato di \"play\".",
          prima: "We",
          dopo: "football all afternoon.",
          risposte: ["played"],
          spiegazione: "Vocale + y: si aggiunge solo -ed.",
          rivedi: "COME SI SCRIVE -ED",
        },
        {
          tipo: "sottotitolo",
          testo: "Come si pronuncia",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca i verbi in cui -ed si pronuncia /id/, con una sillaba in più.",
          parole: ["wanted", "walked", "needed", "played", "started", "watched"],
          giuste: [0, 2, 4],
          spiegazione: "Il suono /id/ c'è solo dopo t e d: wanted, needed, started. Walked e watched finiscono con /t/, played con /d/.",
          rivedi: "COME SI PRONUNCIA -ED",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quante sillabe ha \"worked\"?",
          opzioni: ["Una: \"uorkt\"", "Due: \"uor-ked\""],
          giusta: 0,
          spiegazione: "Dopo k la -ed si pronuncia /t/: nessuna sillaba in più.",
          rivedi: "COME SI PRONUNCIA -ED",
        },
        {
          tipo: "sottotitolo",
          testo: "Il tempo e la storia",
        },
        {
          tipo: "riordina",
          consegna: "Traduci \"Siamo arrivati due ore fa\".",
          parole: ["hours", "arrived", "ago", "two", "we"],
          soluzione: ["we", "arrived", "two", "hours", "ago"],
          rivedi: "LE ESPRESSIONI DI TEMPO",
        },
        {
          tipo: "riordina",
          consegna: "Metti le azioni in ordine: \"Ho aperto la porta, ho guardato fuori e ho chiamato il cane\".",
          parole: ["looked", "called", "I", "outside", "the", "opened", "door", "and", "my", "dog"],
          soluzione: ["I", "opened", "the", "door", "looked", "outside", "and", "called", "my", "dog"],
          spiegazione: "Con il past simple le azioni si mettono in fila, e il soggetto non si ripete.",
          rivedi: "RACCONTARE UNA STORIA",
        },
        {
          tipo: "sottotitolo",
          testo: "Scrivi",
        },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi il tuo testo e confrontalo con il modello.",
        },
        {
          tipo: "scrivi",
          consegna: "Racconta cosa hai fatto ieri in 4–5 frasi, usando solo verbi regolari.",
          punti: ["la mattina", "il pomeriggio", "la sera", "almeno un'espressione di tempo"],
          modello:
            "Yesterday morning I walked to school and I studied history. In the afternoon I played tennis with my sister. In the evening I cooked dinner and watched a film. I finished my homework at eleven.",
          spiegazione:
            "Controlla la grafia (studied, played) e che non ci siano -s con he o she.",
        },
      ],
    },
    {
      titolo: "IL TUO RISULTATO",
      blocchi: [
        {
          tipo: "punteggio",
        },
        {
          tipo: "nota",
          testo:
            "Tocca un esercizio sbagliato qui sopra per andare al riquadro da rivedere.",
        },
      ],
    },
  ],
};
