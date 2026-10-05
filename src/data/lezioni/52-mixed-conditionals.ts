import { Lezione } from "@/types/lezione";

export const mixedConditionals: Lezione = {
  id: "52",
  titolo: "I condizionali misti",
  descrizione: "Collegare passato e presente nelle ipotesi",
  chiavi: "periodo ipotetico misto",
  livello: "B2-C1",
  citazione: {
    testo: "I took the one less traveled by, and that has made all the difference.",
    fonte: "Robert Frost, The Road Not Taken",
    traduzione: "Presi quella meno battuta, e questo ha fatto tutta la differenza.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "PASSATO E PRESENTE INSIEME",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I condizionali misti uniscono due tempi diversi: una condizione nel passato e una conseguenza nel presente, o il contrario.",
        },
        {
          tipo: "tabella",
          righe: [
            ["if + past perfect, would + verbo", "passato → presente"],
            ["if + past simple, would have + participio", "presente → passato"],
          ],
        },
      ],
    },
    {
      titolo: "UN PASSATO DIVERSO, UN PRESENTE DIVERSO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il tipo più comune: se il passato fosse andato diversamente, oggi le cose sarebbero diverse.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I had taken the job, I would be rich now.", it: "Se avessi accettato il lavoro, ora sarei ricco." },
            { en: "If she hadn't missed the flight, she would be here.", it: "Se non avesse perso il volo, sarebbe qui." },
            { en: "If I hadn't met you, I wouldn't be so happy.", it: "Se non ti avessi incontrato, non sarei così felice." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Le parole now, today, still aiutano a riconoscerlo: la conseguenza è nel presente.",
        },
      ],
    },
    {
      titolo: "UN PRESENTE DIVERSO, UN PASSATO DIVERSO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il contrario: una caratteristica stabile (di oggi e di sempre) avrebbe cambiato qualcosa nel passato.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I spoke French, I would have understood the film.", it: "Se sapessi il francese, avrei capito il film." },
            { en: "If he weren't so shy, he would have asked her out.", it: "Se non fosse così timido, le avrebbe chiesto di uscire." },
          ],
        },
      ],
    },
    {
      titolo: "COME RICONOSCERLI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per ogni metà della frase chiediti: di quando sto parlando? Poi scegli il tempo giusto per ciascuna:",
        },
        {
          tipo: "tabella",
          righe: [
            ["condizione passata", "if + had + participio"],
            ["condizione presente", "if + past simple"],
            ["conseguenza presente", "would + verbo"],
            ["conseguenza passata", "would have + participio"],
          ],
        },
      ],
    },
    {
      titolo: "BUT FOR E OTHERWISE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nella lingua scritta esistono modi più eleganti per esprimere un'ipotesi senza if:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "But for your help, I would have failed.", it: "Senza il tuo aiuto, sarei stato bocciato." },
            { en: "I set an alarm; otherwise I would have overslept.", it: "Ho messo la sveglia, altrimenti avrei dormito troppo." },
            { en: "Without the internet, life would be very different.", it: "Senza internet, la vita sarebbe molto diversa." },
          ],
        },
      ],
    },
    {
      titolo: "LA STRADA NON PRESA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nella poesia di Robert Frost il poeta sceglie tra due sentieri nel bosco. È il tema dei condizionali misti: una scelta passata che cambia chi sei oggi.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "If I had taken the other road, my life would be different.", it: "Se avessi preso l'altra strada, la mia vita sarebbe diversa." },
          ],
        },
      ],
    },
  ],
};
