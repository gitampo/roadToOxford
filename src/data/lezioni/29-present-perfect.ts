import { Lezione } from "@/types/lezione";

export const presentPerfect: Lezione = {
  id: "29",
  titolo: "Present Perfect",
  descrizione: "Parlare di esperienze",
  chiavi: "passato prossimo, ever, never",
  livello: "[A2]",
  citazione: {
    testo: "Houston, we've had a problem.",
    fonte: "Jack Swigert, Apollo 13, 1970",
    traduzione: "Houston, abbiamo avuto un problema.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COME SI FORMA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Have / has + participio passato. Il participio dei verbi regolari è uguale al past simple (-ed); quello degli irregolari è la terza colonna dei paradigmi.",
        },
        {
          tipo: "tabella",
          righe: [
            ["I have ('ve) worked", "ho lavorato"],
            ["he / she has ('s) worked", "ha lavorato"],
            ["we / they have ('ve) seen", "abbiamo, hanno visto"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I haven't finished.", it: "Non ho finito." },
            { en: "Have you eaten?", it: "Hai mangiato?" },
            { en: "Yes, I have. / No, I haven't.", it: "Sì. / No." },
          ],
        },
      ],
    },
    {
      titolo: "IL PROBLEMA PER GLI ITALIANI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il present perfect assomiglia al nostro passato prossimo (ho visto), ma non si usa allo stesso modo. È il tempo che collega il passato al presente: conta il risultato adesso, non quando è successo.",
        },
        {
          tipo: "nota",
          testo:
            "Regola d'oro: se dici quando è successo (ieri, nel 2020, due giorni fa), non puoi usare il present perfect. Serve il past simple.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have seen him yesterday.", sbagliato: true },
            { en: "I saw him yesterday.", it: "L'ho visto ieri." },
          ],
        },
      ],
    },
    {
      titolo: "LE ESPERIENZE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il primo uso: parlare delle esperienze della vita, senza dire quando:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've been to London three times.", it: "Sono stato a Londra tre volte." },
            { en: "She has never eaten sushi.", it: "Non ha mai mangiato il sushi." },
            { en: "Have you ever met a famous person?", it: "Hai mai incontrato una persona famosa?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Ever (mai, nelle domande) e never (mai, nelle negative) sono le parole chiave delle esperienze.",
        },
      ],
    },
    {
      titolo: "BEEN O GONE?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Go ha due participi. Been significa che sei andato e tornato; gone che sei andato e sei ancora lì.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She's been to Paris.", it: "È stata a Parigi (e ora è tornata)." },
            { en: "She's gone to Paris.", it: "È andata a Parigi (ed è ancora lì)." },
          ],
        },
      ],
    },
    {
      titolo: "UN RISULTATO ADESSO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il secondo uso: un'azione passata che ha una conseguenza visibile adesso:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've lost my keys.", it: "Ho perso le chiavi (e adesso non le ho)." },
            { en: "He's broken his leg.", it: "Si è rotto la gamba (e adesso è ingessato)." },
            { en: "Someone has taken my bike!", it: "Qualcuno mi ha preso la bici!" },
          ],
        },
      ],
    },
    {
      titolo: "I PARTICIPI IRREGOLARI",
      blocchi: [
        {
          tipo: "testo",
          testo: "Alcuni participi da sapere subito:",
        },
        {
          tipo: "tabella",
          righe: [
            ["be → been", "stato"],
            ["do → done", "fatto"],
            ["see → seen", "visto"],
            ["eat → eaten", "mangiato"],
            ["write → written", "scritto"],
            ["take → taken", "preso"],
            ["make → made", "fatto"],
            ["buy → bought", "comprato"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "La terza colonna della pagina Paradigmi è proprio il participio passato.",
        },
      ],
    },
    {
      titolo: "HAVE È L'AUSILIARE PER TUTTI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano alcuni verbi vogliono essere (sono andato). In inglese l'ausiliare è sempre have:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I am arrived.", sbagliato: true },
            { en: "I have arrived.", it: "Sono arrivato." },
            { en: "They've left.", it: "Sono partiti." },
          ],
        },
      ],
    },
  ],
};
