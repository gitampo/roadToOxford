import { Lezione } from "@/types/lezione";

export const lavoroAffari: Lezione = {
  id: "M2",
  titolo: "Lavoro e affari",
  descrizione: "Le espressioni dell'ufficio, delle trattative e dei progetti",
  chiavi:
    "cut corners, by the book, call the shots, the bottom line, go the extra mile",
  livello: "Modi di dire",
  citazione: {
    testo: "The bottom line is, we need this deal.",
    fonte: "Modo di dire inglese",
    traduzione: "Il succo è che quest'accordo ci serve.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "CUT CORNERS",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Cut corners vuol dire fare le cose in fretta e al risparmio, saltando passaggi o regole: come chi taglia l'angolo invece di seguire la strada. Ha sempre un senso negativo: il risultato è di qualità peggiore o poco onesto.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "They cut corners on safety to save money.",
              it: "Hanno risparmiato sulla sicurezza per spendere meno.",
            },
            {
              en: "A good lawyer doesn't cut corners.",
              it: "Un buon avvocato non prende scorciatoie.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "L'opposto è do something by the book: seguire le regole alla lettera, come scritte nel manuale. In Better Call Saul è la differenza tra Jimmy, che prende scorciatoie, e suo fratello Chuck, che fa tutto by the book.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "We have to do this by the book.",
              it: "Dobbiamo farlo seguendo le regole alla lettera.",
            },
            {
              en: "He's a by-the-book kind of manager.",
              it: "È un manager tutto regole e procedure.",
            },
          ],
        },
      ],
    },
    {
      titolo: "CALL THE SHOTS",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Chi calls the shots è chi comanda, chi prende le decisioni. Nel biliardo, il giocatore che "chiama" il colpo dichiara quale palla manderà in buca: decide lui.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Who calls the shots around here?",
              it: "Chi comanda qui?",
            },
            {
              en: "It's my company. I call the shots.",
              it: "È la mia azienda. Decido io.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "The bottom line è il punto essenziale, la cosa che conta davvero. Nasce dalla contabilità: l'ultima riga di un bilancio è quella con il guadagno o la perdita finale. Si usa spesso all'inizio di una frase: The bottom line is...",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "The bottom line is, we can't afford it.",
              it: "Il succo è che non possiamo permettercelo.",
            },
            {
              en: "All they care about is the bottom line.",
              it: "Gli interessa solo il guadagno.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nel secondo esempio the bottom line torna al senso letterale: il profitto. Il contesto dice quale dei due significati è quello giusto.",
        },
      ],
    },
    {
      titolo: "GET THE BALL ROLLING",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Get (o start) the ball rolling significa avviare qualcosa, dare il via: basta una spinta e poi la palla rotola da sola. Si usa per progetti, riunioni, conversazioni.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Let's get the ball rolling with a quick introduction.",
              it: "Cominciamo con una breve presentazione.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Learn the ropes vuol dire imparare come funziona un lavoro nuovo. Viene dalle navi a vela: un marinaio nuovo doveva prima di tutto imparare a usare le corde. Si dice anche know the ropes (sapere come funziona) e show someone the ropes (insegnare a qualcuno il mestiere).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "It took me a month to learn the ropes.",
              it: "Mi ci è voluto un mese per imparare il mestiere.",
            },
            {
              en: "Sarah will show you the ropes.",
              it: "Sarah ti spiegherà come funziona.",
            },
          ],
        },
      ],
    },
    {
      titolo: "GO THE EXTRA MILE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Go the extra mile significa fare più di quanto richiesto, impegnarsi oltre il dovuto. L'immagine viene dal Vangelo di Matteo: se qualcuno ti costringe a fare un miglio con lui, fanne due.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "She always goes the extra mile for her clients.",
              it: "Fa sempre qualcosa in più per i suoi clienti.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Pull your weight vuol dire fare la propria parte del lavoro. Viene dal canottaggio: ogni rematore deve tirare il remo con tutto il suo peso, o la barca rallenta. Si usa quasi sempre al negativo, per lamentarsi di qualcuno.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Tom isn't pulling his weight.",
              it: "Tom non fa la sua parte.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il possessivo cambia con il soggetto: I pull my weight, she pulls her weight, they pull their weight.",
        },
      ],
    },
    {
      titolo: "PLAY IT BY EAR",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Play it by ear vuol dire non fare piani e decidere sul momento, in base a come vanno le cose. Il musicista che suona "a orecchio" non legge lo spartito: improvvisa ascoltando.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I don't know how long the meeting will take. Let's play it by ear.",
              it: "Non so quanto durerà la riunione. Vediamo al momento.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Think on your feet significa ragionare in fretta e reagire bene a una situazione imprevista, senza tempo per prepararsi: come chi deve pensare stando in piedi, davanti a tutti. È una qualità molto apprezzata in un colloquio di lavoro o in un'aula di tribunale.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "In court you have to think on your feet.",
              it: "In tribunale devi avere prontezza di riflessi.",
            },
          ],
        },
      ],
    },
    {
      titolo: "A LONG SHOT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'A long shot è un tentativo con poche probabilità di riuscire: un tiro da molto lontano. Si usa spesso per dire "lo so che è difficile, ma proviamo".',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "It's a long shot, but it's worth a try.",
              it: "Le probabilità sono poche, ma vale la pena provare.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Not by a long shot è un\'altra cosa: vuol dire "per niente, neanche lontanamente". Is it finished? Not by a long shot! (È finito? Neanche per sogno!)',
        },
        {
          tipo: "testo",
          testo:
            'In the long run vuol dire "alla lunga, a lungo termine". Il contrario è in the short run (nel breve periodo).',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "It's expensive now, but it will save us money in the long run.",
              it: "Ora costa, ma alla lunga ci farà risparmiare.",
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
            ["call the shots", "comandare"],
            ["learn the ropes", "imparare il mestiere"],
            ["a long shot", "un tentativo difficile"],
            ["play it by ear", "decidere sul momento"],
            ["by the book", "seguendo le regole"],
          ],
        },
        {
          tipo: "sceltaMultipla",
          domanda: '"They cut corners." Che giudizio esprime la frase?',
          opzioni: [
            "Positivo: sono stati efficienti",
            "Negativo: hanno lavorato male per fare prima o spendere meno",
            "Neutro: hanno girato l'angolo",
          ],
          giusta: 1,
          spiegazione:
            "Cut corners è sempre negativo: si saltano passaggi o regole e la qualità ne soffre.",
          rivedi: "CUT CORNERS",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Un collega non fa la sua parte. Come lo dici?",
          opzioni: [
            "He isn't pulling his weight.",
            "He isn't going the extra mile.",
            "He isn't calling the shots.",
          ],
          giusta: 0,
          spiegazione:
            "Pull your weight = fare la propria parte. Go the extra mile è fare di più del dovuto: non farlo non è una colpa.",
          rivedi: "GO THE EXTRA MILE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Cosa significa "Not by a long shot"?',
          opzioni: [
            "Con un tiro lungo",
            "Per niente, neanche lontanamente",
            "Alla lunga",
          ],
          giusta: 1,
          spiegazione:
            "A long shot è un tentativo difficile, ma not by a long shot è un modo forte per dire di no.",
          rivedi: "A LONG SHOT",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Inizi una riunione. Cosa dici?",
          opzioni: [
            "Let's get the ball rolling.",
            "Let's cut corners.",
            "Let's pull our weight.",
          ],
          giusta: 0,
          spiegazione: "Get the ball rolling = dare il via, cominciare.",
          rivedi: "GET THE BALL ROLLING",
        },
        { tipo: "sottotitolo", testo: "Completa" },
        {
          tipo: "completa",
          consegna: 'Completa: "Il succo è che..."',
          prima: "The bottom",
          dopo: "is, we need more time.",
          risposte: ["line"],
          spiegazione:
            "The bottom line: l'ultima riga del bilancio, cioè quello che conta.",
          rivedi: "CALL THE SHOTS",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "alla lunga".',
          prima: "It will pay off in the long",
          dopo: ".",
          risposte: ["run"],
          spiegazione: "In the long run = a lungo termine.",
          rivedi: "A LONG SHOT",
        },
        {
          tipo: "riordina",
          consegna: 'Traduci "Ti insegnerà lei il mestiere".',
          parole: ["ropes", "she'll", "the", "you", "show"],
          soluzione: ["she'll", "show", "you", "the", "ropes"],
          spiegazione:
            "Show someone the ropes: insegnare a qualcuno come funziona un lavoro.",
          rivedi: "GET THE BALL ROLLING",
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
            "Qui comanda lei, e fa sempre tutto secondo le regole. Non prende mai scorciatoie.",
          soluzione:
            "She calls the shots here, and she always does everything by the book. She never cuts corners.",
          spiegazione:
            "Controlla la -s della terza persona (calls, does, cuts) e i tre idiomi: call the shots, by the book, cut corners.",
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
