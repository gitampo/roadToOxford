import { Lezione } from "@/types/lezione";

export const guaiProblemi: Lezione = {
  id: "M3",
  titolo: "Guai e problemi",
  descrizione: "Quando le cose si mettono male",
  chiavi:
    "in hot water, bite the bullet, the elephant in the room, spill the beans",
  livello: "Modi di dire",
  citazione: {
    testo: "Let's address the elephant in the room.",
    fonte: "Modo di dire inglese",
    traduzione: "Parliamo del problema che tutti fingono di non vedere.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IN HOT WATER",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Essere in hot water vuol dire essere nei guai, di solito con qualcuno che ha autorità: il capo, i genitori, la legge. Come in italiano "essere nei pasticci", si usa con be, get e land: get into hot water (cacciarsi nei guai).',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "He's in hot water with his boss again.",
              it: "È di nuovo nei guai con il capo.",
            },
            {
              en: "That joke landed her in hot water.",
              it: "Quella battuta l'ha messa nei guai.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "A slippery slope è una china scivolosa: un primo passo che sembra innocuo ma porta, una cosa dopo l'altra, a conseguenze sempre peggiori. Si usa molto nelle discussioni per mettere in guardia.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "One small lie is a slippery slope.",
              it: "Una piccola bugia è l'inizio di una china pericolosa.",
            },
          ],
        },
      ],
    },
    {
      titolo: "BITE THE BULLET",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Bite the bullet significa decidersi ad affrontare una cosa spiacevole ma inevitabile, invece di rimandarla. Secondo la spiegazione più diffusa, un tempo ai soldati feriti si faceva mordere un proiettile durante le operazioni senza anestesia.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I hate the dentist, but I'll have to bite the bullet.",
              it: "Odio il dentista, ma dovrò farmi coraggio.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Face the music vuol dire affrontare le conseguenze di quello che si è fatto, accettare la punizione o le critiche. L'immagine è quella di chi deve presentarsi davanti a tutti, con la musica che suona.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "You made the mistake, now you have to face the music.",
              it: "L'errore l'hai fatto tu, ora ne paghi le conseguenze.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "La differenza: bite the bullet è fare una cosa difficile (un esame, una visita, una telefonata); face the music è subire le conseguenze di un errore.",
        },
      ],
    },
    {
      titolo: "THE ELEPHANT IN THE ROOM",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "The elephant in the room è un problema evidente e importante di cui nessuno vuole parlare, come un elefante in salotto che tutti fingono di non vedere. Si usa spesso con address (affrontare) o mention.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Nobody mentioned the money, but it was the elephant in the room.",
              it: "Nessuno ha parlato dei soldi, ma era il problema che tutti avevano in mente.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'Sweep something under the rug (in inglese britannico under the carpet) è identico al nostro "nascondere la polvere sotto il tappeto": nascondere un problema invece di risolverlo.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "You can't just sweep this under the rug.",
              it: "Non puoi semplicemente nascondere il problema.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Address qui non è "indirizzo": è un verbo e vuol dire affrontare una questione. Address the problem = affrontare il problema.',
        },
      ],
    },
    {
      titolo: "BETWEEN A ROCK AND A HARD PLACE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Essere between a rock and a hard place vuol dire dover scegliere tra due possibilità entrambe cattive. È il nostro \"tra l'incudine e il martello\": cambiano gli oggetti, ma l'idea di essere schiacciati è la stessa.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "If I tell the truth I lose my job; if I lie I lose my friend. I'm between a rock and a hard place.",
              it: "Se dico la verità perdo il lavoro, se mento perdo l'amico. Sono tra l'incudine e il martello.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "In questi casi si sceglie the lesser of two evils: il male minore, l'opzione meno dannosa tra due cattive.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Paying the fine was the lesser of two evils.",
              it: "Pagare la multa era il male minore.",
            },
          ],
        },
      ],
    },
    {
      titolo: "CROSS THAT BRIDGE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'We\'ll cross that bridge when we come to it significa "ci penseremo quando sarà il momento": inutile preoccuparsi oggi di un problema che forse arriverà domani. Si dice per tranquillizzare qualcuno.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "What if they say no? - We'll cross that bridge when we come to it.",
              it: "E se dicono di no? - Ci penseremo quando succederà.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'A blessing in disguise è una benedizione travestita: una cosa che sembra una sfortuna ma si rivela un bene. È il nostro "non tutto il male vien per nuocere".',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Losing that job was a blessing in disguise.",
              it: "Perdere quel lavoro è stata una fortuna, alla fine.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nella prima frase when we come to it è al presente anche se parla del futuro: dopo when si usa il present simple, come dopo if (lezione 34{4}).",
        },
      ],
    },
    {
      titolo: "SPILL THE BEANS",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Spill the beans vuol dire rivelare un segreto, spesso per sbaglio o troppo presto: rovesciare i fagioli, cioè far uscire tutto. È informale e corrisponde al nostro "vuotare il sacco". Simile è let the cat out of the bag (lezione 55{4}).',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Come on, spill the beans! Who is she?",
              it: "Dai, vuota il sacco! Chi è lei?",
            },
            {
              en: "Don't spill the beans about the party.",
              it: "Non dire niente della festa.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Add insult to injury significa peggiorare una situazione già brutta, aggiungendo all'offesa la beffa. Viene da un'antica favola: un uomo calvo cerca di schiacciare una mosca che lo punge e si colpisce da solo la testa. In italiano: \"oltre al danno, la beffa\".",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "My flight was cancelled and, to add insult to injury, they lost my luggage.",
              it: "Il volo è stato cancellato e, oltre al danno la beffa, mi hanno perso il bagaglio.",
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
          consegna: "Abbina ogni modo di dire all'equivalente italiano.",
          coppie: [
            ["between a rock and a hard place", "tra l'incudine e il martello"],
            ["add insult to injury", "oltre al danno, la beffa"],
            ["spill the beans", "vuotare il sacco"],
            ["a blessing in disguise", "non tutto il male vien per nuocere"],
            ["the lesser of two evils", "il male minore"],
          ],
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Tutti sanno che l'azienda sta perdendo soldi, ma nessuno ne parla. Il problema è...",
          opzioni: [
            "a slippery slope",
            "the elephant in the room",
            "a blessing in disguise",
          ],
          giusta: 1,
          spiegazione:
            "The elephant in the room: un problema evidente che tutti fingono di non vedere.",
          rivedi: "THE ELEPHANT IN THE ROOM",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Rimandi da settimane una telefonata difficile. Oggi la fai. Cosa dici?",
          opzioni: [
            "I'll face the music.",
            "I'll bite the bullet.",
            "I'll spill the beans.",
          ],
          giusta: 1,
          spiegazione:
            "Bite the bullet: affrontare una cosa spiacevole. Face the music si usa per le conseguenze di un errore.",
          rivedi: "BITE THE BULLET",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Cosa significa "She\'s in hot water"?',
          opzioni: ["Sta facendo il bagno", "Ha la febbre", "È nei guai"],
          giusta: 2,
          spiegazione: "In hot water: nei guai, di solito con chi ha autorità.",
          rivedi: "IN HOT WATER",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: [
            "We'll cross that bridge when we will come to it.",
            "We'll cross that bridge when we come to it.",
            "We cross that bridge when we will come to it.",
          ],
          giusta: 1,
          spiegazione:
            "Will nella frase principale, present simple dopo when: when we come to it.",
          rivedi: "CROSS THAT BRIDGE",
        },
        { tipo: "sottotitolo", testo: "Completa" },
        {
          tipo: "completa",
          consegna: 'Completa: "nascondere il problema".',
          prima: "Don't sweep it under the",
          dopo: ".",
          risposte: ["rug", "carpet"],
          spiegazione:
            "Under the rug (americano) o under the carpet (britannico).",
          rivedi: "THE ELEPHANT IN THE ROOM",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Ora ne paghi le conseguenze".',
          prima: "Now you have to face the",
          dopo: ".",
          risposte: ["music"],
          spiegazione:
            "Face the music: affrontare le conseguenze dei propri errori.",
          rivedi: "BITE THE BULLET",
        },
        {
          tipo: "riordina",
          consegna: 'Traduci "Dai, vuota il sacco!".',
          parole: ["beans", "on,", "spill", "the", "come"],
          soluzione: ["come", "on,", "spill", "the", "beans"],
          spiegazione: "Spill the beans: rivelare un segreto. Come on = dai.",
          rivedi: "SPILL THE BEANS",
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
            "Ho perso il treno e, oltre al danno la beffa, ha cominciato a piovere. Ma forse non tutto il male vien per nuocere: ho conosciuto Anna.",
          soluzione:
            "I missed the train and, to add insult to injury, it started to rain. But maybe it was a blessing in disguise: I met Anna.",
          spiegazione:
            "Perdere un treno è miss, non lose. Conoscere qualcuno per la prima volta è meet (met). Poi i due idiomi: add insult to injury, a blessing in disguise.",
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
