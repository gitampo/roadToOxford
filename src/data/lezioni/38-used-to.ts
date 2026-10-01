import { Lezione } from "@/types/lezione";

export const usedTo: Lezione = {
  id: "38",
  titolo: "Used to e would",
  descrizione: "Parlare di abitudini passate",
  chiavi: "abitudini passate, solevo",
  livello: "[B1]",
  citazione: {
    testo: "I used to be an adventurer like you, then I took an arrow in the knee.",
    fonte: "The Elder Scrolls V: Skyrim",
    traduzione: "Un tempo ero un avventuriero come te, poi mi sono preso una freccia nel ginocchio.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "ABITUDINI PASSATE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Used to + verbo base indica un'abitudine o una situazione del passato che ora non c'è più. Corrisponde spesso all'imperfetto italiano.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I used to play the piano.", it: "Suonavo il pianoforte (ora non più)." },
            { en: "We used to live in Naples.", it: "Abitavamo a Napoli." },
            { en: "There used to be a cinema here.", it: "Qui una volta c'era un cinema." },
          ],
        },
      ],
    },
    {
      titolo: "NEGATIVA E DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si usa did, e used diventa use, senza -d, perché il passato è già in did:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I didn't use to like vegetables.", it: "Da piccolo non mi piaceva la verdura." },
            { en: "Did you use to wear glasses?", it: "Portavi gli occhiali?" },
            { en: "I didn't used to like it.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Used to si pronuncia \"iusta\", con la s sorda. È diverso da used (\"iusd\", usato).",
        },
      ],
    },
    {
      titolo: "SOLO AL PASSATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Used to non ha il presente. Per le abitudini di oggi si usa il present simple con usually:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I use to get up at seven.", sbagliato: true },
            { en: "I usually get up at seven.", it: "Di solito mi alzo alle sette." },
          ],
        },
      ],
    },
    {
      titolo: "WOULD PER I RICORDI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Anche would indica un'abitudine passata, soprattutto nei racconti e nei ricordi. Ma solo per le azioni ripetute, non per gli stati:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Every summer we would go to the seaside.", it: "Ogni estate andavamo al mare." },
            { en: "My grandfather would tell us stories.", it: "Il nonno ci raccontava delle storie." },
            { en: "I would have long hair.", sbagliato: true },
            { en: "I used to have long hair.", it: "Avevo i capelli lunghi." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Con i verbi di stato (be, have, live, like, know) si usa solo used to.",
        },
      ],
    },
    {
      titolo: "BE USED TO: ESSERE ABITUATO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Attenzione a non confonderlo con be used to + -ing, che significa \"essere abituato a\". Get used to significa \"abituarsi\":",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm used to getting up early.", it: "Sono abituato ad alzarmi presto." },
            { en: "I'm getting used to driving on the left.", it: "Mi sto abituando a guidare a sinistra." },
          ],
        },
        {
          tipo: "tabella",
          righe: [
            ["used to do", "facevo (ora no)"],
            ["be used to doing", "sono abituato a fare"],
            ["get used to doing", "mi abituo a fare"],
          ],
        },
      ],
    },
    {
      titolo: "RACCONTARE L'INFANZIA",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "When I was little, I used to be very shy.", it: "Da piccolo ero molto timido." },
            { en: "I didn't use to have many friends.", it: "Non avevo molti amici." },
            { en: "On Sundays my mum would make pancakes.", it: "La domenica la mamma faceva i pancake." },
          ],
        },
      ],
    },
  ],
};
