import { Lezione } from "@/types/lezione";

export const tagQuestions: Lezione = {
  id: "40",
  titolo: "Tag questions",
  descrizione: "Chiedere conferma e coinvolgere chi ascolta: \"vero?\", \"no?\"",
  chiavi:
    "question tags, domande coda, vero, no, isn't it, don't you, intonazione, aren't I, let's, shall we",
  livello: "B1",
  citazione: {
    testo: "It's a lovely day, isn't it?",
    fonte: "Conversazione britannica",
    traduzione: "È una bella giornata, vero?",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COSA SONO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Una tag question (o question tag) è la piccola domanda che si aggiunge alla fine di una frase: isn't it?, don't you?, can't she?. In italiano diciamo semplicemente \"vero?\" o \"no?\", sempre uguali. In inglese invece la coda cambia a ogni frase: dipende dal verbo, dal soggetto e dal fatto che la frase sia affermativa o negativa.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You're Italian, aren't you?", it: "Sei italiano, vero?" },
            { en: "She can swim, can't she?", it: "Sa nuotare, no?" },
            { en: "They didn't call, did they?", it: "Non hanno chiamato, vero?" },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Servono a due cose: chiedere conferma di qualcosa che pensi già di sapere, e coinvolgere chi ascolta nella conversazione. Per i britannici sono un modo di essere cortesi: una frase secca come It's cold può sembrare brusca, mentre It's cold, isn't it? invita l'altro a rispondere.",
        },
        {
          tipo: "nota",
          testo:
            "Le tag questions sono molto più frequenti nell'inglese britannico che in quello americano. Gli americani usano spesso right? o huh? al loro posto: You're coming, right?",
        },
      ],
    },
    {
      titolo: "LA REGOLA DI BASE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La regola si riassume in due punti. Primo: la coda ripete l'ausiliare della frase (be, do, have, will, can...) e il soggetto, trasformato in pronome. Secondo: la polarità si inverte. Se la frase è affermativa, la coda è negativa; se la frase è negativa, la coda è affermativa.",
        },
        {
          tipo: "tabella",
          righe: [
            ["frase affermativa", "coda negativa: It's late, isn't it?"],
            ["frase negativa", "coda affermativa: It isn't late, is it?"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Nella coda il soggetto è sempre un pronome, anche se nella frase c'è un nome: Your brother lives in London, doesn't he? (non doesn't your brother?). E la coda negativa usa sempre la forma contratta: isn't it?, non is not it?.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Maria is a doctor, isn't she?" },
            { en: "The shops aren't open, are they?" },
            { en: "Your parents have met him, haven't they?" },
          ],
        },
      ],
    },
    {
      titolo: "QUANDO NON C'È L'AUSILIARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il present simple e il past simple affermativi non hanno un ausiliare visibile: I work, she lives, they went. In questi casi la coda usa do, does o did, proprio come le domande e le negazioni (lezioni 10{5} e 24{3}).",
        },
        {
          tipo: "tabella",
          righe: [
            ["You work here,", "don't you?"],
            ["She lives nearby,", "doesn't she?"],
            ["They went home,", "didn't they?"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Con tutti gli altri tempi la coda riprende l'ausiliare che c'è già: il primo della fila, quello che cambia con il soggetto.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You're working tomorrow, aren't you?", it: "present continuous: be" },
            { en: "She's finished, hasn't she?", it: "present perfect: have" },
            { en: "He'll help us, won't he?", it: "will: la forma negativa è won't" },
            { en: "We should leave, shouldn't we?", it: "modale: si ripete il modale" },
            { en: "You'd been waiting long, hadn't you?", it: "past perfect continuous: had" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Attenzione a 's e 'd, che possono nascondere due verbi diversi. He's tired = he is (isn't he?), ma He's left = he has (hasn't he?). You'd like it = you would (wouldn't you?), ma You'd seen it = you had (hadn't you?).",
        },
      ],
    },
    {
      titolo: "I CASI SPECIALI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Alcune code non seguono la regola meccanica. Sono poche, ma molto frequenti, e sono proprio quelle che distinguono chi parla bene.",
        },
        {
          tipo: "tabella",
          righe: [
            ["I'm right,", "aren't I? (non amn't I)"],
            ["Let's go,", "shall we?"],
            ["Open the window,", "will you? / would you? / can you?"],
            ["Don't be late,", "will you?"],
            ["There's a problem,", "isn't there?"],
            ["Nothing happened,", "did it?"],
            ["Everybody knows,", "don't they?"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "I'm... aren't I? è un'eccezione storica: amn't I esiste solo in alcuni dialetti (in Scozia e in Irlanda) e suona strano altrove. Con let's la coda è shall we?, perché let's è una proposta (lezione 19{3}). Con l'imperativo la coda addolcisce l'ordine e lo trasforma in una richiesta: Pass me the salt, would you?",
        },
        {
          tipo: "testo",
          testo:
            "Con there is / there are la coda ripete there, non it (lezione 7{1}). Dopo nothing, everything, something la coda usa it; dopo nobody, everybody, somebody usa they, anche se il verbo è al singolare: Somebody called, didn't they?",
        },
      ],
    },
    {
      titolo: "LE PAROLE NEGATIVE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Una frase può essere negativa anche senza not: basta una parola come never, nobody, nothing, no, hardly, seldom. In questi casi la frase conta come negativa, quindi la coda è affermativa.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "You never listen, do you?", it: "Non ascolti mai, vero?" },
            { en: "Nobody came, did they?", it: "Non è venuto nessuno, vero?" },
            { en: "There's no milk, is there?", it: "Non c'è latte, vero?" },
            { en: "He hardly ever calls, does he?", it: "Non chiama quasi mai, eh?" },
            { en: "You never listen, don't you?", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "L'inglese standard non ammette la doppia negazione (lezione 18{3}): visto che la frase è già negativa grazie a never o nobody, una coda negativa ne aggiungerebbe un'altra.",
        },
      ],
    },
    {
      titolo: "L'INTONAZIONE CAMBIA IL SENSO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La stessa coda può fare due cose diverse, e a deciderlo è la voce. Se la voce scende sulla coda, non stai davvero chiedendo: sei sicuro e vuoi solo che l'altro sia d'accordo. Se la voce sale, è una vera domanda: non sei sicuro e vuoi una conferma.",
        },
        {
          tipo: "tabella",
          righe: [
            ["voce che scende ↘", "sono sicuro, dammi ragione: It's lovely, isn't it?"],
            ["voce che sale ↗", "non so, dimmelo tu: You've got the keys, haven't you?"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Pensa a due situazioni. Guardi un tramonto con un amico e dici Beautiful, isn't it? con la voce che scende: non ti aspetti un no. Stai per chiudere la porta di casa e chiedi You've got the keys, haven't you? con la voce che sale: hai un dubbio vero, e la risposta conta.",
        },
        {
          tipo: "nota",
          testo:
            "Sull'accento e sul ritmo dell'inglese britannico trovi di più nella lezione 58{5}.",
        },
      ],
    },
    {
      titolo: "COME SI RISPONDE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Qui gli italiani sbagliano spesso. In inglese yes e no si riferiscono ai fatti, non a quello che ha detto l'altro: yes se la cosa è vera, no se non lo è. La forma della domanda non conta.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "You aren't coming, are you? — No, I'm not.",
              it: "Non vieni, vero? — No, non vengo.",
            },
            {
              en: "You aren't coming, are you? — Yes, I am!",
              it: "Non vieni, vero? — Sì che vengo!",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "In italiano a \"Non vieni, vero?\" potresti rispondere \"Sì\" per dire \"sì, hai ragione, non vengo\". In inglese Yes vorrebbe dire il contrario: che vieni. Per evitare equivoci, aggiungi sempre la risposta breve con l'ausiliare: Yes, I am / No, I'm not.",
        },
      ],
    },
    {
      titolo: "LE CODE SENZA INVERSIONE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Esiste anche una coda con la stessa polarità della frase: affermativa + affermativa. Non chiede conferma, ma esprime sorpresa, interesse o, con un certo tono, ironia e sospetto.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "So you're moving to Oxford, are you? How exciting!",
              it: "Ah, quindi ti trasferisci a Oxford? Che bello!",
            },
            {
              en: "Oh, you think you're clever, do you?",
              it: "Ah, ti credi furbo, eh?",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "È un uso tipicamente britannico e piuttosto colloquiale. Riconoscerlo è più importante che usarlo: se qualcuno ti dice You think that's funny, do you?, non sta facendo una domanda.",
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
        { tipo: "sottotitolo", testo: "Abbina" },
        {
          tipo: "abbina",
          consegna: "Abbina ogni frase alla sua coda.",
          coppie: [
            ["You like jazz,", "don't you?"],
            ["She hasn't called,", "has she?"],
            ["They'll be late,", "won't they?"],
            ["He went home,", "didn't he?"],
            ["We can't park here,", "can we?"],
          ],
        },
        { tipo: "sottotitolo", testo: "Scegli la coda" },
        {
          tipo: "sceltaMultipla",
          domanda: "I'm late, ___?",
          opzioni: ["amn't I", "aren't I", "am I not"],
          giusta: 1,
          spiegazione:
            "Con I'm la coda è aren't I?: un'eccezione da imparare a memoria.",
          rivedi: "I CASI SPECIALI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Let's have a break, ___?",
          opzioni: ["don't we", "shall we", "will we"],
          giusta: 1,
          spiegazione: "Dopo let's la coda è sempre shall we?",
          rivedi: "I CASI SPECIALI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Nobody saw us, ___?",
          opzioni: ["didn't they", "did they", "did he"],
          giusta: 1,
          spiegazione:
            "Nobody rende la frase negativa, quindi la coda è affermativa; dopo nobody il pronome è they.",
          rivedi: "LE PAROLE NEGATIVE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "He's already left, ___?",
          opzioni: ["isn't he", "hasn't he", "didn't he"],
          giusta: 1,
          spiegazione:
            "He's left è he has left (present perfect): la coda ripete has.",
          rivedi: "QUANDO NON C'È L'AUSILIARE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "There's a bank near here, ___?",
          opzioni: ["isn't it", "isn't there", "is there"],
          giusta: 1,
          spiegazione:
            "Con there is la coda ripete there, e la frase è affermativa: isn't there?",
          rivedi: "I CASI SPECIALI",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            '"You didn\'t lock the door, did you?" La porta in realtà è chiusa a chiave. Cosa rispondi?',
          opzioni: ["No, I didn't.", "Yes, I did.", "Yes, I didn't."],
          giusta: 1,
          spiegazione:
            "Yes e no seguono i fatti: l'hai chiusa, quindi Yes, I did.",
          rivedi: "COME SI RISPONDE",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Guardando il panorama con un amico dici \"Amazing view, isn't it?\". Come va la voce sulla coda?",
          opzioni: [
            "Sale: è una vera domanda.",
            "Scende: cerchi solo il suo accordo.",
          ],
          giusta: 1,
          spiegazione:
            "Sei sicuro di quello che dici: la voce scende.",
          rivedi: "L'INTONAZIONE CAMBIA IL SENSO",
        },
        { tipo: "sottotitolo", testo: "Completa" },
        {
          tipo: "completa",
          consegna: "Completa con la coda giusta.",
          prima: "Your sister works in a hospital,",
          dopo: "",
          risposte: ["doesn't she?", "doesn't she"],
          spiegazione:
            "Present simple affermativo con she: la coda è doesn't she?",
          rivedi: "QUANDO NON C'È L'AUSILIARE",
        },
        {
          tipo: "completa",
          consegna: "Completa con la coda giusta.",
          prima: "You never eat meat,",
          dopo: "",
          risposte: ["do you?", "do you"],
          spiegazione:
            "Never rende la frase negativa: la coda è affermativa.",
          rivedi: "LE PAROLE NEGATIVE",
        },
        {
          tipo: "riordina",
          consegna: 'Traduci "Mi aiuti, vero?" (con will).',
          parole: ["you?", "help", "me,", "won't", "You'll"],
          soluzione: ["You'll", "help", "me,", "won't", "you?"],
          spiegazione: "La negazione di will nella coda è won't.",
          rivedi: "QUANDO NON C'È L'AUSILIARE",
        },
        { tipo: "sottotitolo", testo: "Traduci" },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi la tua versione e confrontala con quella proposta.",
        },
        {
          tipo: "traduci",
          consegna: "Traduci in inglese.",
          testo:
            "Non hai ancora finito, vero? Andiamo a prendere un caffè, va bene? Nessuno se ne accorgerà, no?",
          soluzione:
            "You haven't finished yet, have you? Let's go and get a coffee, shall we? Nobody will notice, will they?",
          spiegazione:
            "Frase negativa → coda affermativa (have you?). Let's → shall we? Nobody → frase negativa, pronome they, coda affermativa con will.",
        },
      ],
    },
    {
      titolo: "IL TUO RISULTATO",
      blocchi: [
        { tipo: "punteggio" },
        {
          tipo: "nota",
          testo:
            "Tocca un esercizio sbagliato qui sopra per andare al riquadro da rivedere.",
        },
      ],
    },
  ],
};
