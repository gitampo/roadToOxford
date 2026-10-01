import { Lezione } from "@/types/lezione";

export const haveGot: Lezione = {
  id: "6",
  titolo: "Have got",
  descrizione: "Descrivere cosa possiedi e com'è una persona",
  chiavi: "avere, possesso",
  livello: "[A1]",
  citazione: {
    testo: "I've got a bad feeling about this.",
    fonte: "Star Wars",
    traduzione: "Ho un brutto presentimento.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "A COSA SERVE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Have got significa \"avere\" nel senso di possedere. È tipico dell'inglese britannico, soprattutto nel parlato.",
        },
        {
          tipo: "tabella",
          righe: [
            ["I have got", "io ho"],
            ["you have got", "tu hai"],
            ["he / she / it has got", "lui / lei ha"],
            ["we have got", "noi abbiamo"],
            ["you have got", "voi avete"],
            ["they have got", "loro hanno"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Got qui non significa niente da solo: è un rinforzo. Il verbo vero è have.",
        },
      ],
    },
    {
      titolo: "LE FORME CONTRATTE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Nel parlato si usa quasi sempre la forma contratta:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I've got", "I have got"],
            ["you've got", "you have got"],
            ["he's got", "he has got"],
            ["we've got", "we have got"],
            ["they've got", "they have got"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've got a sister.", it: "Ho una sorella." },
            { en: "She's got a new phone.", it: "Ha un telefono nuovo." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "He's got = he has got, non he is got. Lo stesso 's che hai visto nelle lezioni 2{2} e 5{8}.",
        },
      ],
    },
    {
      titolo: "NEGATIVA E DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nella negativa si aggiunge not dopo have. Nelle domande have passa davanti al soggetto, got resta dopo.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I haven't got a car.", it: "Non ho la macchina." },
            { en: "He hasn't got time.", it: "Non ha tempo." },
            { en: "Have you got a pen?", it: "Hai una penna?" },
            { en: "Has she got a brother?", it: "Ha un fratello?" },
          ],
        },
        {
          tipo: "testo",
          testo: "Le risposte brevi usano have, senza got:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Yes, I have. / No, I haven't.", it: "Sì. / No." },
            { en: "Yes, I have got.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "PER DESCRIVERE LE PERSONE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Have got si usa molto per l'aspetto fisico, dove l'italiano usa \"avere\" o \"essere\":",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She's got blue eyes.", it: "Ha gli occhi azzurri." },
            { en: "He's got short hair.", it: "Ha i capelli corti." },
            { en: "I've got a beard.", it: "Ho la barba." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Hair è non numerabile quando parli di tutti i capelli: \"She's got long hair\", mai \"long hairs\".",
        },
      ],
    },
    {
      titolo: "FAMIGLIA, MALATTIE, IMPEGNI",
      blocchi: [
        {
          tipo: "testo",
          testo: "Si usa anche per la famiglia, i disturbi di salute e gli impegni:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've got two brothers.", it: "Ho due fratelli." },
            { en: "I've got a headache.", it: "Ho mal di testa." },
            { en: "She's got a cold.", it: "Ha il raffreddore." },
            { en: "We've got a meeting at ten.", it: "Abbiamo una riunione alle dieci." },
          ],
        },
      ],
    },
    {
      titolo: "HAVE GOT O HAVE?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per il possesso puoi usare anche have da solo, come un verbo normale. Il significato è lo stesso, cambiano negativa e domande:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I've got a car.", "I have a car."],
            ["I haven't got a car.", "I don't have a car."],
            ["Have you got a car?", "Do you have a car?"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Have got è più britannico e informale, have è più americano. Il present simple con do/don't lo vedrai nella lezione 10{4}.",
        },
      ],
    },
    {
      titolo: "QUANDO NON SI USA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Have got si usa solo al presente e solo per il possesso. Quando have indica un'azione (mangiare, fare), got non ci va:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have breakfast at seven.", it: "Faccio colazione alle sette." },
            { en: "I've got breakfast at seven.", sbagliato: true },
            { en: "We have a shower.", it: "Facciamo la doccia." },
            { en: "Have a good time!", it: "Divertiti!" },
          ],
        },
        {
          tipo: "testo",
          testo: "E non si usa per l'età: in inglese l'età si dice con to be.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've got 20 years.", sbagliato: true },
            { en: "I'm 20.", it: "Ho 20 anni." },
          ],
        },
      ],
    },
  ],
};
