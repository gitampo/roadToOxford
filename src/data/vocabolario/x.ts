import { Voce } from "@/types/vocabolario";

export const X: Voce[] = [
  {
    id: "x-ray",
    parola: "X-ray",
    fonetica: "/ˈeks reɪ/",
    descrizione: "Una foto dell'interno del corpo fatta con i raggi: radiografia.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "la foto",
            traduzioni: ["radiografia", "lastra"],
            esempi: [
              { en: "The doctor sent me for an X-ray.", it: "Il medico mi ha mandato a fare una radiografia." },
              { en: "The X-ray showed that my wrist was broken.", it: "La lastra ha mostrato che avevo il polso rotto." },
            ],
          },
          {
            indicazione: "i raggi",
            traduzioni: ["raggi X"],
            esempi: [{ en: "X-rays were discovered in 1895.", it: "I raggi X furono scoperti nel 1895." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "X-rays · X-rayed · X-rayed · X-raying",
        significati: [
          {
            traduzioni: ["fare una radiografia a", "passare ai raggi X"],
            esempi: [
              { en: "They X-rayed my knee.", it: "Mi hanno fatto una radiografia al ginocchio." },
              { en: "All bags are X-rayed at the airport.", it: "All'aeroporto tutte le borse passano ai raggi X." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "\"Fare una radiografia\" è have an X-ray (il paziente) o take an X-ray (il medico), non make an X-ray.",
      "La X si legge come la lettera: /eks/. Si scrive con la X maiuscola e il trattino.",
    ],
  },
  {
    id: "xenophobia",
    parola: "xenophobia",
    fonetica: "/ˌzenəˈfəʊbiə/",
    descrizione: "La paura o l'odio per gli stranieri: xenofobia.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            traduzioni: ["xenofobia"],
            esempi: [
              { en: "The campaign aims to fight racism and xenophobia.", it: "La campagna vuole combattere il razzismo e la xenofobia." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "xenophobic",
        significati: [
          {
            indicazione: "l'aggettivo",
            traduzioni: ["xenofobo"],
            esempi: [{ en: "His comments were openly xenophobic.", it: "I suoi commenti erano apertamente xenofobi." }],
          },
        ],
      },
    ],
    attenzione: [
      "All'inizio di parola la x inglese si pronuncia /z/: xenophobia /ˌzenəˈfəʊbiə/, xylophone /ˈzaɪləfəʊn/. Non /ks/ come in italiano.",
    ],
  },
];
