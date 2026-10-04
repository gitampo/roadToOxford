import { Lezione } from "@/types/lezione";

export const pensareDecidere: Lezione = {
  id: "M1",
  titolo: "Pensare e decidere",
  descrizione: "Ragionare, discutere e prendere decisioni",
  chiavi:
    "the bigger picture, think outside the box, on the same page, no-brainer",
  livello: "Modi di dire",
  citazione: {
    testo: "You're not seeing the bigger picture!",
    fonte: "Modo di dire inglese",
    traduzione: "Non stai vedendo il quadro generale!",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "PERCHÉ I MODI DI DIRE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Un modo di dire (idiom) è un'espressione fissa il cui significato non si ricava dalle singole parole. Nelle conversazioni vere, nelle riunioni di lavoro e nelle serie americane (pensa a Better Call Saul, tra avvocati e trattative) ne senti di continuo: se non li conosci, capisci tutte le parole ma perdi il senso della frase.",
        },
        {
          tipo: "testo",
          testo:
            "In questa sezione ogni lezione raccoglie i modi di dire di un tema. Per ognuno trovi il significato, l'immagine da cui nasce (aiuta a ricordarlo), come si costruisce nella frase, il registro (informale, neutro, da ufficio) e l'equivalente italiano, quando c'è.",
        },
        {
          tipo: "nota",
          testo:
            "Gli idiomi sono frasi fatte: non si cambiano le parole. Si dice the bigger picture, non the larger image. Una prima panoramica degli idiomi la trovi nella lezione 55{3}.",
        },
      ],
    },
    {
      titolo: "THE BIGGER PICTURE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "The big picture (o the bigger picture) è la situazione nel suo insieme, vista da lontano, senza perdersi nei dettagli. L'immagine è quella di un quadro: da vicino vedi solo pennellate, da lontano capisci il soggetto. Si usa con i verbi look at, see, keep in mind e, al negativo, miss.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "You're not seeing the bigger picture!",
              it: "Non stai vedendo il quadro generale!",
            },
            {
              en: "In the big picture, this mistake doesn't matter.",
              it: "Nel complesso, questo errore non conta.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Di solito see non va al present continuous (I see, non I'm seeing: lezione 13{5}). Qui però see vuol dire \"rendersi conto, capire\" e You're not seeing... sottolinea che l'altro, proprio in questo momento, non ci arriva: per questo suona come un rimprovero.",
        },
        {
          tipo: "testo",
          testo:
            "Il contrario è perdersi nei dettagli. Gli inglesi dicono can't see the wood for the trees (gli americani: the forest for the trees): non vedere il bosco perché si guardano i singoli alberi.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "He's so focused on the numbers that he can't see the wood for the trees.",
              it: "È così concentrato sui numeri che non vede il quadro generale.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Attenzione all\'articolo: si dice sempre THE big picture. "A big picture" sarebbe semplicemente un quadro grande.',
        },
      ],
    },
    {
      titolo: "THINK OUTSIDE THE BOX",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Think outside the box vuol dire pensare in modo creativo, fuori dagli schemi. Viene da un vecchio rompicapo: unire nove punti disposti in un quadrato con quattro linee dritte, senza staccare la penna. Si risolve solo uscendo dal quadrato immaginario. È un'espressione molto usata in ufficio, tanto da essere diventata quasi un cliché.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "We need someone who can think outside the box.",
              it: "Ci serve qualcuno che sappia pensare fuori dagli schemi.",
            },
            {
              en: "That's a very outside-the-box idea.",
              it: "È un'idea davvero originale.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Quando un'idea fallisce e bisogna ripartire da zero si dice back to the drawing board: si torna al tavolo da disegno, come un progettista il cui aereo non ha volato. L'espressione si diffuse con una vignetta americana degli anni '40, in cui un ingegnere si allontana da un aereo appena precipitato.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "The client hated it. Back to the drawing board.",
              it: "Al cliente non è piaciuto. Si ricomincia da capo.",
            },
          ],
        },
      ],
    },
    {
      titolo: "ON THE SAME PAGE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Essere on the same page significa avere la stessa idea della situazione, capirsi e andare nella stessa direzione: come musicisti o studenti che leggono la stessa pagina dello spartito o del libro. Si usa tantissimo prima di iniziare un lavoro insieme.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Before we start, let's make sure we're all on the same page.",
              it: "Prima di cominciare, assicuriamoci di essere tutti d'accordo.",
            },
            {
              en: "I don't think we're on the same page here.",
              it: "Non credo che ci stiamo capendo.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "See eye to eye vuol dire essere d'accordo, vedere le cose allo stesso modo. Si usa quasi sempre al negativo, per un disaccordo di fondo che dura nel tempo, e si costruisce con on: see eye to eye ON something.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "My brother and I don't see eye to eye on politics.",
              it: "Io e mio fratello la pensiamo diversamente sulla politica.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "La differenza: on the same page riguarda il capirsi su un piano o una situazione concreta; see eye to eye riguarda opinioni e valori.",
        },
      ],
    },
    {
      titolo: "SLEEP ON IT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Sleep on it è identico al nostro "dormirci su": rimandare una decisione al giorno dopo, per pensarci a mente fresca. È un modo gentile per non rispondere subito a una proposta.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "It's a great offer, but let me sleep on it.",
              it: "È un'ottima offerta, ma lasciami dormirci su.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Chi è on the fence è indeciso, non ha ancora scelto da che parte stare: è seduto sullo steccato tra due campi. Sit on the fence ha spesso una sfumatura critica: non prendere posizione per comodità.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I'm still on the fence about the new job.",
              it: "Sono ancora indeciso sul nuovo lavoro.",
            },
            {
              en: "Stop sitting on the fence and tell us what you think.",
              it: "Smettila di non sbilanciarti e dicci cosa ne pensi.",
            },
          ],
        },
      ],
    },
    {
      titolo: "A NO-BRAINER",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "A no-brainer è una decisione così ovvia che non serve il cervello (brain) per prenderla. È informale e si usa come un sostantivo, con l'articolo a.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Same salary, but working from home? It's a no-brainer.",
              it: "Stesso stipendio, ma lavorando da casa? Non c'è nemmeno da pensarci.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "The ball is in your court viene dal tennis: la palla è nella tua metà campo, quindi tocca a te. Si dice quando qualcuno ha fatto la sua parte e ora la prossima mossa spetta all'altro.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I've sent them my offer. Now the ball is in their court.",
              it: "Ho mandato la mia offerta. Ora tocca a loro.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Court qui è il campo da gioco (tennis court, basketball court), non il tribunale, anche se la parola è la stessa.",
        },
      ],
    },
    {
      titolo: "GET TO THE POINT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Get to the point vuol dire arrivare al dunque. Il contrario è beat around the bush (in inglese britannico beat about the bush): girarci intorno. L'immagine viene dalla caccia: i battitori colpivano i cespugli intorno alla preda per farla uscire, senza mai andare dritti su di lei.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Stop beating around the bush and get to the point.",
              it: "Smettila di menare il can per l'aia e arriva al dunque.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Cut to the chase significa la stessa cosa, ma è più diretto e un po' brusco. Viene dal cinema muto americano: \"taglia (il montaggio) e passa all'inseguimento\", cioè salta le scene noiose e vai alla parte d'azione.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I'll cut to the chase: we can't afford it.",
              it: "Vado dritto al punto: non possiamo permettercelo.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Registro: get to the point è neutro; cut to the chase è informale e, detto a un superiore, può sembrare impaziente.",
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
            ["sleep on it", "dormirci su"],
            ["on the fence", "indeciso"],
            ["a no-brainer", "una scelta ovvia"],
            ["back to the drawing board", "si ricomincia da capo"],
            ["beat around the bush", "girarci intorno"],
          ],
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Il tuo capo ti dice: "You\'re missing the bigger picture." Cosa intende?',
          opzioni: [
            "Che hai dimenticato una foto",
            "Che ti perdi nei dettagli e non vedi la situazione generale",
            "Che il tuo lavoro è troppo piccolo",
          ],
          giusta: 1,
          spiegazione:
            "The bigger picture è la situazione nel suo insieme. Missing the bigger picture = guardare solo i dettagli.",
          rivedi: "THE BIGGER PICTURE",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Hai fatto la tua proposta, ora deve rispondere l'altra parte. Cosa dici?",
          opzioni: [
            "The ball is in their court.",
            "The ball is in my court.",
            "We're on the fence.",
          ],
          giusta: 0,
          spiegazione:
            "La palla è nel loro campo: la prossima mossa tocca a loro.",
          rivedi: "A NO-BRAINER",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase usa see eye to eye in modo naturale?",
          opzioni: [
            "We see eye to eye the meeting at five.",
            "They don't see eye to eye on money.",
            "I see eye to eye you tomorrow.",
          ],
          giusta: 1,
          spiegazione:
            "See eye to eye significa essere d'accordo, si usa spesso al negativo e vuole on: see eye to eye on something.",
          rivedi: "ON THE SAME PAGE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale versione è corretta?",
          opzioni: [
            "Look at the big image.",
            "Look at a big picture.",
            "Look at the big picture.",
          ],
          giusta: 2,
          spiegazione:
            "Gli idiomi non si modificano: si dice sempre the big (o bigger) picture, con l'articolo the.",
          rivedi: "THE BIGGER PICTURE",
        },
        { tipo: "sottotitolo", testo: "Completa" },
        {
          tipo: "completa",
          consegna: "Completa con la parola che manca.",
          prima: "Let's make sure we're all on the same",
          dopo: "before the meeting.",
          risposte: ["page"],
          spiegazione:
            "On the same page: d'accordo, sulla stessa lunghezza d'onda.",
          rivedi: "ON THE SAME PAGE",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "pensare fuori dagli schemi".',
          prima: "We need to think outside the",
          dopo: ".",
          risposte: ["box"],
          spiegazione: "Think outside the box: dal rompicapo dei nove punti.",
          rivedi: "THINK OUTSIDE THE BOX",
        },
        {
          tipo: "riordina",
          consegna: 'Traduci "Vado dritto al punto".',
          parole: ["chase", "I'll", "the", "to", "cut"],
          soluzione: ["I'll", "cut", "to", "the", "chase"],
          spiegazione:
            "Cut to the chase: salta i preliminari, come al cinema si passa all'inseguimento.",
          rivedi: "GET TO THE POINT",
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
            "Non girarci intorno: sei ancora indeciso? Dormici su e domani ne parliamo.",
          soluzione:
            "Don't beat around the bush: are you still on the fence? Sleep on it and we'll talk about it tomorrow.",
          spiegazione:
            "Controlla i tre idiomi: beat around the bush, on the fence, sleep on it. E il futuro con will per la promessa (we'll talk).",
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
