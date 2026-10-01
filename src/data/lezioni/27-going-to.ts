import { Lezione } from "@/types/lezione";

export const goingTo: Lezione = {
  id: "27",
  titolo: "Il futuro: going to e present continuous",
  descrizione: "Parlare di progetti e appuntamenti",
  chiavi: "futuro intenzionale",
  livello: "[A2]",
  citazione: {
    testo: "I'm gonna make him an offer he can't refuse.",
    fonte: "Il Padrino",
    traduzione: "Gli farò un'offerta che non potrà rifiutare.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "TRE MODI PER IL FUTURO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'inglese non ha un solo futuro come l'italiano. La scelta dipende da quanto è deciso quello che succederà:",
        },
        {
          tipo: "tabella",
          righe: [
            ["present continuous", "appuntamenti già fissati"],
            ["be going to", "intenzioni e progetti"],
            ["will", "decisioni del momento, previsioni (lezione 28{2})"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "In italiano usiamo spesso il presente per il futuro: \"domani vado a Londra\". In inglese il present simple da solo, per il futuro, non va quasi mai bene.",
        },
      ],
    },
    {
      titolo: "BE GOING TO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Si forma con to be + going to + verbo base. Serve per le intenzioni, cioè quello che hai già deciso di fare:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm going to study medicine.", it: "Studierò medicina (l'ho deciso)." },
            { en: "We're going to buy a new car.", it: "Compreremo una macchina nuova." },
            { en: "She isn't going to come.", it: "Non verrà." },
            { en: "What are you going to do?", it: "Cosa farai?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nel parlato going to si pronuncia spesso \"gonna\": \"I'm gonna call her\". Si sente ovunque, ma non scriverlo in un compito.",
        },
      ],
    },
    {
      titolo: "PREVISIONI CON PROVE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Going to si usa anche per prevedere qualcosa che vedi già arrivare, perché ci sono dei segnali adesso:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Look at those clouds. It's going to rain.", it: "Guarda quelle nuvole. Sta per piovere." },
            { en: "Be careful! You're going to fall!", it: "Attento! Stai per cadere!" },
          ],
        },
      ],
    },
    {
      titolo: "PRESENT CONTINUOUS: GLI APPUNTAMENTI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il present continuous, con un'espressione di tempo futura, indica un appuntamento già organizzato, con una data e spesso con altre persone:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm meeting Sara tomorrow.", it: "Domani vedo Sara." },
            { en: "We're flying to Dublin on Friday.", it: "Venerdì voliamo a Dublino." },
            { en: "What are you doing this weekend?", it: "Cosa fai questo fine settimana?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il trucco: se è scritto in agenda, usa il present continuous.",
        },
      ],
    },
    {
      titolo: "GOING TO O CONTINUOUS?",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Spesso vanno bene tutti e due. La differenza è sottile: going to è un'intenzione, il continuous è un piano già organizzato.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm going to see a doctor.", it: "Andrò da un medico (ho deciso di farlo)." },
            { en: "I'm seeing the doctor at four.", it: "Alle quattro ho il medico (c'è l'appuntamento)." },
          ],
        },
      ],
    },
    {
      titolo: "PRESENT SIMPLE: GLI ORARI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il present simple si usa per il futuro solo con gli orari fissi: treni, aerei, film, lezioni.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "The train leaves at 8:15.", it: "Il treno parte alle 8:15." },
            { en: "The film starts at nine.", it: "Il film inizia alle nove." },
            { en: "Tomorrow I go to London.", sbagliato: true },
            { en: "Tomorrow I'm going to London.", it: "Domani vado a Londra." },
          ],
        },
      ],
    },
    {
      titolo: "PARLARE DEI PROPRI PROGETTI",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "After school I'm going to study in England.", it: "Dopo il liceo studierò in Inghilterra." },
            { en: "I'm taking the IELTS exam in June.", it: "A giugno faccio l'esame IELTS." },
            { en: "I'm not going to give up.", it: "Non mi arrenderò." },
          ],
        },
      ],
    },
  ],
};
