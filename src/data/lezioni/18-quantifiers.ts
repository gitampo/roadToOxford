import { Lezione } from "@/types/lezione";

export const quantifiers: Lezione = {
  id: "18",
  titolo: "Some, any, much, many",
  descrizione: "Fare la spesa, chiedere quantità",
  chiavi: "quantificatori, a lot of",
  livello: "A1",
  citazione: {
    testo: "Much Ado About Nothing.",
    fonte: "William Shakespeare",
    traduzione: "Molto rumore per nulla.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "SOME E ANY",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Some e any significano \"un po' di\", \"qualche\", \"del/della\". Si usano con i plurali e con i non numerabili.",
        },
        {
          tipo: "tabella",
          righe: [
            ["some", "frasi affermative"],
            ["any", "frasi negative e domande"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have some friends in London.", it: "Ho degli amici a Londra." },
            { en: "There's some milk.", it: "C'è del latte." },
            { en: "I don't have any money.", it: "Non ho soldi." },
            { en: "Are there any eggs?", it: "Ci sono uova?" },
          ],
        },
      ],
    },
    {
      titolo: "SOME NELLE DOMANDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Quando offri o chiedi qualcosa, e ti aspetti un sì, si usa some anche nelle domande:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Would you like some tea?", it: "Vuoi del tè?" },
            { en: "Can I have some water, please?", it: "Posso avere dell'acqua, per favore?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Any nelle frasi affermative significa \"qualsiasi\": \"Take any seat\" (siediti dove vuoi).",
        },
      ],
    },
    {
      titolo: "NO E NOT ANY",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "No ha lo stesso significato di not any, ma si usa con il verbo affermativo. Mai insieme a un'altra negazione:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I haven't got any time.", it: "Non ho tempo." },
            { en: "I've got no time.", it: "Non ho tempo." },
            { en: "I haven't got no time.", sbagliato: true },
          ],
        },
      ],
    },
    {
      titolo: "SOMETHING, ANYONE, NOWHERE…",
      blocchi: [
        {
          tipo: "testo",
          testo: "Le stesse regole valgono per le parole composte:",
        },
        {
          tipo: "tabella",
          righe: [
            ["something / anything / nothing", "qualcosa / niente"],
            ["someone / anyone / no one", "qualcuno / nessuno"],
            ["somewhere / anywhere / nowhere", "da qualche parte / da nessuna parte"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I want to eat something.", it: "Voglio mangiare qualcosa." },
            { en: "Is anyone here?", it: "C'è qualcuno?" },
            { en: "I didn't see anything.", it: "Non ho visto niente." },
            { en: "Nobody knows.", it: "Nessuno lo sa." },
          ],
        },
      ],
    },
    {
      titolo: "MUCH E MANY",
      blocchi: [
        {
          tipo: "testo",
          testo: "Significano entrambi \"molto\", ma si usano con nomi diversi:",
        },
        {
          tipo: "tabella",
          righe: [
            ["many + plurale", "many books, many people"],
            ["much + non numerabile", "much time, much money"],
          ],
        },
        {
          tipo: "testo",
          testo: "Si usano soprattutto nelle domande e nelle negative:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "How many brothers have you got?", it: "Quanti fratelli hai?" },
            { en: "How much is it?", it: "Quanto costa?" },
            { en: "I don't have much time.", it: "Non ho molto tempo." },
          ],
        },
      ],
    },
    {
      titolo: "A LOT OF",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nelle frasi affermative much suona formale. Si usa a lot of, che va bene con tutto:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have a lot of friends.", it: "Ho molti amici." },
            { en: "She drinks a lot of coffee.", it: "Beve molto caffè." },
            { en: "I have much money.", sbagliato: true },
            { en: "I have a lot of money.", it: "Ho molti soldi." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Lots of è ancora più informale. Alla fine della frase si usa a lot, senza of: \"I like it a lot\".",
        },
      ],
    },
    {
      titolo: "A FEW E A LITTLE",
      blocchi: [
        {
          tipo: "testo",
          testo: "Significano \"un po'\", \"qualche\":",
        },
        {
          tipo: "tabella",
          righe: [
            ["a few + plurale", "a few days"],
            ["a little + non numerabile", "a little sugar"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Senza a, il significato diventa negativo: \"pochi, non abbastanza\".",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I have a few friends.", it: "Ho qualche amico (è positivo)." },
            { en: "I have few friends.", it: "Ho pochi amici (non abbastanza)." },
            { en: "There's a little milk left.", it: "È rimasto un po' di latte." },
          ],
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
          testo: "Some, any, no",
        },
        {
          tipo: "completa",
          consegna: "Completa con some o any.",
          prima: "I have",
          dopo: "friends in London.",
          risposte: ["some"],
          spiegazione: "Frase affermativa: some.",
          rivedi: "SOME E ANY",
        },
        {
          tipo: "completa",
          consegna: "Completa con some o any.",
          prima: "Are there",
          dopo: "eggs in the fridge?",
          risposte: ["any"],
          spiegazione: "Domanda normale, senza offrire nulla: any.",
          rivedi: "SOME E ANY",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Offri del tè a un ospite. Cosa dici?",
          opzioni: ["Would you like any tea?", "Would you like some tea?"],
          giusta: 1,
          spiegazione: "Quando offri o chiedi qualcosa e ti aspetti un sì, si usa some anche nelle domande.",
          rivedi: "SOME NELLE DOMANDE",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le frasi che significano \"Non ho tempo\".",
          parole: ["I haven't got any time.", "I haven't got no time.", "I've got no time.", "I've got any time."],
          giuste: [0, 2],
          spiegazione: "Not + any oppure no con il verbo affermativo. Mai due negazioni insieme.",
          rivedi: "NO E NOT ANY",
        },
        {
          tipo: "sottotitolo",
          testo: "Something, anyone, nowhere",
        },
        {
          tipo: "completa",
          consegna: "Completa: \"C'è qualcuno?\".",
          prima: "Is",
          dopo: "here?",
          risposte: ["anyone", "anybody"],
          spiegazione: "Domanda: le composte con any.",
          rivedi: "SOMETHING, ANYONE, NOWHERE…",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Non ho visto niente\"?",
          opzioni: ["I didn't see nothing.", "I didn't see anything.", "I saw anything."],
          giusta: 1,
          spiegazione: "Con il verbo negativo si usa anything. In alternativa: I saw nothing. Mai entrambe le negazioni.",
          rivedi: "SOMETHING, ANYONE, NOWHERE…",
        },
        {
          tipo: "sottotitolo",
          testo: "Much, many, a lot of",
        },
        {
          tipo: "completa",
          consegna: "Completa con much o many.",
          prima: "How",
          dopo: "brothers have you got?",
          risposte: ["many"],
          spiegazione: "Brothers è plurale numerabile: many.",
          rivedi: "MUCH E MANY",
        },
        {
          tipo: "completa",
          consegna: "Completa con much o many.",
          prima: "I don't have",
          dopo: "time.",
          risposte: ["much"],
          spiegazione: "Time è non numerabile: much.",
          rivedi: "MUCH E MANY",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase suona più naturale?",
          opzioni: ["I have much money.", "I have a lot of money."],
          giusta: 1,
          spiegazione: "Nelle frasi affermative much suona formale o strano: si usa a lot of.",
          rivedi: "A LOT OF",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si dice \"Mi piace molto\" (alla fine della frase)?",
          opzioni: ["I like it a lot of.", "I like it a lot.", "I like it much."],
          giusta: 1,
          spiegazione: "Alla fine della frase si usa a lot, senza of.",
          rivedi: "A LOT OF",
        },
        {
          tipo: "sottotitolo",
          testo: "A few e a little",
        },
        {
          tipo: "completa",
          consegna: "Completa con few o little.",
          prima: "Can I have a",
          dopo: "sugar, please?",
          risposte: ["little"],
          spiegazione: "Sugar è non numerabile: a little.",
          rivedi: "A FEW E A LITTLE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase ha un significato negativo (non abbastanza)?",
          opzioni: ["I have a few friends.", "I have few friends."],
          giusta: 1,
          spiegazione: "Senza a, few significa \"pochi, non abbastanza\". A few è positivo: \"qualche\".",
          rivedi: "A FEW E A LITTLE",
        },
        {
          tipo: "sottotitolo",
          testo: "Traduci",
        },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi la tua versione e confrontala con quella proposta.",
        },
        {
          tipo: "traduci",
          consegna: "Traduci in inglese.",
          testo: "C'è del latte, ma non ci sono uova. Hai molti amici a Londra? No, solo qualcuno.",
          soluzione:
            "There's some milk, but there aren't any eggs. Have you got many friends in London? No, only a few.",
          spiegazione:
            "Controlla: some nell'affermativa, any nella negativa, many nella domanda con un plurale, a few (positivo) per \"qualcuno\".",
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
