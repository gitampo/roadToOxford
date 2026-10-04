import { Lezione } from "@/types/lezione";

export const tempoDenaro: Lezione = {
  id: "M5",
  titolo: "Tempo e denaro",
  descrizione: "Scadenze, fretta, spese e risparmi",
  chiavi:
    "in the nick of time, call it a day, make ends meet, pay through the nose",
  livello: "Modi di dire",
  citazione: {
    testo: "Money doesn't grow on trees.",
    fonte: "Modo di dire inglese",
    traduzione: "I soldi non crescono sugli alberi.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "TIME FLIES",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Time flies è il nostro "il tempo vola". Si sente spesso nella forma completa time flies when you\'re having fun: il tempo vola quando ci si diverte, detta anche con ironia quando ci si annoia.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Is it midnight already? Time flies!",
              it: "È già mezzanotte? Il tempo vola!",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'In the nick of time vuol dire appena in tempo, all\'ultimo istante. Nick era una tacca: un tempo si contava (anche il tempo) incidendo tacche su un bastoncino, quindi "nella tacca" era il momento esatto.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "We got to the station in the nick of time.",
              it: "Siamo arrivati in stazione appena in tempo.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Non confonderlo con on time (puntuale, all'orario previsto) e in time (in tempo, abbastanza presto). In the nick of time è in time, ma per un pelo.",
        },
      ],
    },
    {
      titolo: "CALL IT A DAY",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Call it a day vuol dire smettere di lavorare (per oggi), considerare finita la giornata. Si usa anche per chiudere definitivamente un'attività o una relazione. Di sera si sente anche call it a night.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "We've done enough. Let's call it a day.",
              it: "Abbiamo fatto abbastanza. Per oggi basta.",
            },
            {
              en: "After forty years, he decided to call it a day.",
              it: "Dopo quarant'anni ha deciso di smettere.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Around the clock (in britannico anche round the clock) vuol dire giorno e notte, senza interruzioni: le lancette fanno tutto il giro dell'orologio, due volte.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Doctors worked around the clock.",
              it: "I medici hanno lavorato giorno e notte.",
            },
            {
              en: "The shop is open around the clock.",
              it: "Il negozio è aperto 24 ore su 24.",
            },
          ],
        },
      ],
    },
    {
      titolo: "KILL TIME",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Kill time è identico al nostro "ammazzare il tempo": fare qualcosa per far passare il tempo mentre si aspetta.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I read a magazine to kill time at the airport.",
              it: "Ho letto una rivista per ammazzare il tempo in aeroporto.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Beat the clock vuol dire riuscire a finire qualcosa prima della scadenza, come in una gara a cronometro. Race against the clock (o against time) è la corsa contro il tempo.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "It was a race against the clock, but we beat it.",
              it: "È stata una corsa contro il tempo, ma ce l'abbiamo fatta.",
            },
          ],
        },
      ],
    },
    {
      titolo: "MAKE ENDS MEET",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Make ends meet vuol dire riuscire a pagare le spese con quello che si guadagna: far incontrare le due estremità, entrate e uscite. È il nostro "arrivare a fine mese" e si usa quasi sempre con struggle (faticare) o al negativo.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Many families are struggling to make ends meet.",
              it: "Molte famiglie fanno fatica ad arrivare a fine mese.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "On a shoestring vuol dire con pochissimi soldi, con un budget minimo. Lo shoestring è il laccio da scarpe: una cosa da pochi centesimi. Si dice anche a shoestring budget.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "We travelled around Europe on a shoestring.",
              it: "Abbiamo girato l'Europa con quattro soldi.",
            },
          ],
        },
      ],
    },
    {
      titolo: "BREAK THE BANK",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Break the bank vuol dire costare troppo, mandare in rovina. Viene dal gioco d'azzardo: \"far saltare il banco\" significava vincere tutti i soldi del casinò. Oggi si usa quasi sempre al negativo, per rassicurare: won't break the bank = non costa poi così tanto.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "A nice dinner won't break the bank.",
              it: "Una bella cena non ci manderà in rovina.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "A rip-off è una fregatura, un prezzo esagerato per quello che si ottiene. Il verbo è rip someone off (fregare qualcuno). Entrambi sono informali.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Ten euros for a coffee? That's a rip-off!",
              it: "Dieci euro per un caffè? È un furto!",
            },
            {
              en: "The taxi driver ripped us off.",
              it: "Il tassista ci ha fregato.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il sostantivo ha il trattino (a rip-off), il verbo no (to rip off). Succede con molti phrasal verbs: a check-in, to check in (lezione 56{6}).",
        },
      ],
    },
    {
      titolo: "PAY THROUGH THE NOSE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Pay through the nose vuol dire pagare un prezzo esagerato, spesso perché non c'era scelta. In italiano diciamo \"pagare un occhio della testa\": cambia la parte del corpo, ma l'idea è la stessa. Simile è cost an arm and a leg (lezione 55{3}).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "We had to pay through the nose for the tickets.",
              it: "Abbiamo pagato i biglietti a peso d'oro.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Money doesn't grow on trees è uguale all'italiano: i soldi non crescono sugli alberi. È la frase classica dei genitori ai figli che chiedono troppo.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "You want another phone? Money doesn't grow on trees!",
              it: "Vuoi un altro telefono? I soldi non crescono sugli alberi!",
            },
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
        { tipo: "sottotitolo", testo: "Il significato" },
        {
          tipo: "abbina",
          consegna: "Abbina ogni modo di dire al suo significato.",
          coppie: [
            ["make ends meet", "arrivare a fine mese"],
            ["in the nick of time", "appena in tempo"],
            ["around the clock", "giorno e notte"],
            ["on a shoestring", "con pochissimi soldi"],
            ["a rip-off", "una fregatura"],
          ],
        },
        {
          tipo: "sceltaMultipla",
          domanda: "È tardi e siete tutti stanchi. Cosa proponi?",
          opzioni: [
            "Let's kill time.",
            "Let's call it a day.",
            "Let's beat the clock.",
          ],
          giusta: 1,
          spiegazione: "Call it a day: per oggi basta, chiudiamo qui.",
          rivedi: "CALL IT A DAY",
        },
        {
          tipo: "sceltaMultipla",
          domanda: '"It won\'t break the bank." Cosa vuol dire?',
          opzioni: [
            "Non costa molto",
            "La banca è chiusa",
            "Non ci sono soldi",
          ],
          giusta: 0,
          spiegazione:
            "Break the bank = costare troppo. Al negativo rassicura: non è una spesa enorme.",
          rivedi: "BREAK THE BANK",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come si dice "pagare un occhio della testa"?',
          opzioni: [
            "pay an eye of the head",
            "pay through the nose",
            "pay on a shoestring",
          ],
          giusta: 1,
          spiegazione:
            "Gli idiomi non si traducono alla lettera: l'inglese usa il naso, non l'occhio.",
          rivedi: "PAY THROUGH THE NOSE",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Il treno parte alle 9:00 e arrivi alle 8:59. Sei arrivato...",
          opzioni: [
            "in the nick of time",
            "around the clock",
            "on a shoestring",
          ],
          giusta: 0,
          spiegazione: "In the nick of time: in tempo, ma all'ultimo istante.",
          rivedi: "TIME FLIES",
        },
        { tipo: "sottotitolo", testo: "Completa" },
        {
          tipo: "completa",
          consegna: 'Completa: "il tempo vola".',
          prima: "Time",
          dopo: "when you're having fun.",
          risposte: ["flies"],
          spiegazione: "Time flies: con la -s della terza persona.",
          rivedi: "TIME FLIES",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "ammazzare il tempo".',
          prima: "I played a game to",
          dopo: "time.",
          risposte: ["kill"],
          spiegazione: "Kill time: come in italiano.",
          rivedi: "KILL TIME",
        },
        {
          tipo: "riordina",
          consegna: 'Traduci "Fanno fatica ad arrivare a fine mese".',
          parole: ["meet", "struggle", "ends", "they", "make", "to"],
          soluzione: ["they", "struggle", "to", "make", "ends", "meet"],
          spiegazione:
            "Struggle to make ends meet: la combinazione più frequente.",
          rivedi: "MAKE ENDS MEET",
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
            "Abbiamo viaggiato con quattro soldi, ma all'aeroporto abbiamo pagato un caffè a peso d'oro. Che fregatura!",
          soluzione:
            "We travelled on a shoestring, but at the airport we paid through the nose for a coffee. What a rip-off!",
          spiegazione:
            "Pay for something: pagare qualcosa vuole for. What a + sostantivo per le esclamazioni: what a rip-off!",
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
