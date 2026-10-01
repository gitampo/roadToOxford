import { Lezione } from "@/types/lezione";

export const objectPronouns: Lezione = {
  id: "16",
  titolo: "Pronomi complemento",
  descrizione: "Riferirsi a persone e cose già nominate",
  chiavi: "pronomi complemento, me, him, them",
  livello: "[A1]",
  citazione: {
    testo: "Show me the money!",
    fonte: "Jerry Maguire",
    traduzione: "Fammi vedere i soldi!",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "SOGGETTO E COMPLEMENTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I pronomi soggetto (lezione 1{1}) fanno l'azione. I pronomi complemento la ricevono, e vanno dopo il verbo:",
        },
        {
          tipo: "tabella",
          righe: [
            ["I → me", "mi, me"],
            ["you → you", "ti, te"],
            ["he → him", "lo, gli, lui"],
            ["she → her", "la, le, lei"],
            ["it → it", "lo, la"],
            ["we → us", "ci, noi"],
            ["you → you", "vi, voi"],
            ["they → them", "li, le, loro"],
          ],
        },
      ],
    },
    {
      titolo: "DOPO IL VERBO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In italiano il pronome va spesso prima del verbo (ti amo). In inglese va sempre dopo:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I love you.", it: "Ti amo." },
            { en: "Call me later.", it: "Chiamami più tardi." },
            { en: "Do you know him?", it: "Lo conosci?" },
            { en: "I you love.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "DOPO LE PREPOSIZIONI",
      blocchi: [
        {
          tipo: "testo",
          testo: "Dopo una preposizione si usa sempre il pronome complemento:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "This is for you.", it: "Questo è per te." },
            { en: "Come with us.", it: "Vieni con noi." },
            { en: "Look at them.", it: "Guardali." },
            { en: "between you and me", it: "tra me e te" },
            { en: "between you and I", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "ME TOO E ME NEITHER",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nelle risposte brevi e dopo to be, nel parlato si usa il pronome complemento:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm hungry. — Me too.", it: "Ho fame. — Anch'io." },
            { en: "I don't like it. — Me neither.", it: "Non mi piace. — Neanche a me." },
            { en: "Who's there? — It's me.", it: "Chi è? — Sono io." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "\"It is I\" è corretto ma molto formale e antiquato. Nel parlato si dice sempre \"It's me\".",
        },
      ],
    },
    {
      titolo: "DUE COMPLEMENTI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Con verbi come give, send, show, tell ci possono essere due complementi: la persona e la cosa. Due ordini possibili:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Give me the book.", it: "Dammi il libro." },
            { en: "Give the book to me.", it: "Dai il libro a me." },
            { en: "I sent her a message.", it: "Le ho mandato un messaggio." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Se la cosa è un pronome (it, them), si usa l'ordine con to: \"Give it to me\", non \"Give me it\".",
        },
      ],
    },
    {
      titolo: "IT E THEM PER LE COSE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Anche le cose vogliono il pronome. In italiano spesso lo lasciamo sottinteso, in inglese no:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Do you like this song? — Yes, I love.", sbagliato: true },
            { en: "Do you like this song? — Yes, I love it.", it: "Ti piace questa canzone? — Sì, la adoro." },
            { en: "Where are my keys? I can't find them.", it: "Dove sono le mie chiavi? Non le trovo." },
          ],
        },
      ],
    },
  ],
};
