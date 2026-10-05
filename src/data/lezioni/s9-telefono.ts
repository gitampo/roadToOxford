import { Lezione } from "@/types/lezione";

export const telefono: Lezione = {
  id: "S9",
  titolo: "Al telefono",
  descrizione: "Telefonare, capire, fare lo spelling, lasciare un messaggio",
  chiavi: "telefonare, this is, hold on, spelling, segreteria, videochiamata",
  livello: "Situazioni",
  sottotitolo: "Situazioni · Lezione S9 · B1",
  citazione: {
    testo: "Mr. Watson, come here, I want to see you.",
    fonte:
      "Alexander Graham Bell, la prima telefonata della storia (10 marzo 1876)",
    traduzione: "Signor Watson, venga qui, voglio vederla.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "PERCHÉ È PIÙ DIFFICILE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Al telefono anche chi parla bene va in difficoltà. Mancano le labbra da guardare, i gesti, le espressioni del viso; l'audio è peggiore; e l'altro non vede quando non hai capito. Per questo servono frasi fisse e qualche strategia.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "prima della chiamata",
              "scrivi che cosa devi dire e le parole difficili",
            ],
            [
              "durante",
              "chiedi di ripetere senza vergogna, e ripeti tu i dati importanti",
            ],
            ["nomi, indirizzi, numeri", "fai lo spelling e chiedi lo spelling"],
            ["alla fine", "riassumi quello che avete deciso"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Anche molti britannici giovani detestano telefonare e preferiscono i messaggi. Ma per il medico, il padrone di casa, la banca o un colloquio, la telefonata resta inevitabile.",
        },
      ],
    },
    {
      titolo: "RISPONDERE E PRESENTARSI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il nostro \"pronto?\" è semplicemente Hello?. In un ufficio si risponde con il nome del posto e il proprio. La regola più importante è come presentarsi: al telefono non si dice I'm Marco, ma It's Marco o This is Marco (lezione 15{4}).",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Hello?", it: "Pronto?" },
            {
              en: "Good morning, Oxford Dental Practice, Sarah speaking. How can I help?",
              it: "Buongiorno, studio dentistico Oxford, sono Sarah. In che cosa posso esserle utile?",
            },
            { en: "Hi, it's Marco.", it: "Ciao, sono Marco." },
            {
              en: "Hello, this is Marco Rossi. I'm calling about the room.",
              it: "Buongiorno, sono Marco Rossi. Chiamo per la stanza.",
            },
            {
              en: "Could I speak to Mrs Green, please?",
              it: "Potrei parlare con la signora Green, per favore?",
            },
            { en: "Is that Sam?", it: "Parlo con Sam?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Is that Sam? (non Are you Sam?) chiede chi c'è dall'altra parte. Chi risponde dice Speaking! per \"sono io\". E I'm calling about... è la formula più chiara per dire subito il motivo della chiamata.",
        },
      ],
    },
    {
      titolo: "ATTENDERE E PASSARE LA CHIAMATA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Le telefonate a un ufficio sono piene di phrasal verbs (lezione 47{1}). Questi sono quelli che sentirai di sicuro.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Who's calling, please?", "Chi parla, scusi?"],
            [
              "Hold on a moment. / Hold the line, please.",
              "Attenda un attimo. / Resti in linea.",
            ],
            ["I'll put you through.", "Le passo la chiamata."],
            [
              "I'm afraid she's not available at the moment.",
              "Mi dispiace, al momento non è disponibile.",
            ],
            ["She's on another call.", "È al telefono su un'altra linea."],
            ["Can I take a message?", "Vuole lasciare un messaggio?"],
            [
              "Could you ask her to call me back?",
              "Può chiederle di richiamarmi?",
            ],
            [
              "I couldn't get through.",
              "Non sono riuscito a prendere la linea.",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Molti uffici rispondono con un menù automatico. Le frasi registrate sono sempre le stesse.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Press one for appointments.",
              it: "Prema uno per gli appuntamenti.",
            },
            {
              en: "Your call is important to us.",
              it: "La sua chiamata è importante per noi.",
            },
            {
              en: "You are number three in the queue.",
              it: "Lei è il terzo in attesa.",
            },
            { en: "Please hold.", it: "Resti in attesa." },
          ],
        },
      ],
    },
    {
      titolo: "QUANDO NON SI SENTE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Queste frasi sono le più utili di tutta la lezione: ti permettono di non fingere di aver capito. Usale senza problemi, anche più volte nella stessa telefonata.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Sorry, I didn't catch that.", "Scusi, non ho capito."],
            ["Could you repeat that, please?", "Può ripetere, per favore?"],
            [
              "Could you speak a bit more slowly?",
              "Può parlare un po' più piano?",
            ],
            ["Could you speak up a bit?", "Può parlare un po' più forte?"],
            ["You're breaking up.", "La linea va e viene."],
            ["The line's really bad.", "Si sente malissimo."],
            ["We got cut off.", "È caduta la linea."],
            ["I'll call you back.", "Ti richiamo."],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Could you repeat that? vuole l\'oggetto that: Can you repeat? da solo suona incompleto. Speak up significa "parlare più forte", non "parlare apertamente".',
        },
      ],
    },
    {
      titolo: "LO SPELLING E I NUMERI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I nomi italiani non sono familiari agli inglesi: dovrai fare lo spelling di continuo. Alcune lettere si pronunciano in modo molto diverso dall'italiano, e sono proprio quelle che causano gli errori.",
        },
        {
          tipo: "tabella",
          righe: [
            ["A", 'si dice /eɪ/, come "ei"'],
            ["E", 'si dice /iː/, come "ii"'],
            ["I", 'si dice /aɪ/, come "ai"'],
            ["G / J", '/dʒiː/ "gi" / /dʒeɪ/ "gei"'],
            ["H", '/eɪtʃ/, come "eic"'],
            ["R", '/ɑː/, come una "a" lunga'],
            ["W", 'double u, "dabliu"'],
            ["Y", '/waɪ/, come "uai"'],
            ["Z", "zed nel Regno Unito, zee negli Stati Uniti"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Per evitare confusioni (B o P? M o N?) si usa una parola per ogni lettera: B for Bravo, M for Mike (è l'alfabeto internazionale NATO). Le lettere doppie si dicono double: Rossi è R-O-double S-I.",
        },
        {
          tipo: "testo",
          testo:
            "I numeri di telefono si dicono una cifra alla volta. Nel Regno Unito lo zero si dice di solito oh, e due cifre uguali double.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Oh seven seven double oh, nine double oh, one two three.",
              it: "07700 900123",
            },
            {
              en: "It's marco dot rossi at gmail dot com.",
              it: "È marco.rossi@gmail.com",
            },
            {
              en: "All lower case, all one word.",
              it: "Tutto minuscolo, tutto attaccato.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Negli indirizzi email @ si dice at, il punto dot, il trattino dash o hyphen, il trattino basso underscore. Sulla pronuncia delle vocali inglesi trovi di più nella lezione 58{3}.",
        },
      ],
    },
    {
      titolo: "LASCIARE UN MESSAGGIO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Se nessuno risponde, parte la segreteria (voicemail): Please leave a message after the tone. Un buon messaggio è breve e ha sempre la stessa struttura: chi sei, perché chiami, che cosa vuoi, il tuo numero (detto lentamente, due volte) e un saluto.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Hi, this is Marco Rossi.", it: "Salve, sono Marco Rossi." },
            {
              en: "I'm calling about the room in Cowley Road.",
              it: "Chiamo per la stanza in Cowley Road.",
            },
            {
              en: "Could you call me back when you get a chance?",
              it: "Potrebbe richiamarmi quando può?",
            },
            {
              en: "My number is 07700 900123. That's 07700 900123.",
              it: "Il mio numero è 07700 900123. Ripeto, 07700 900123.",
            },
            { en: "Thanks very much. Bye!", it: "Grazie mille. Arrivederci!" },
          ],
        },
      ],
    },
    {
      titolo: "CHIUDERE LA TELEFONATA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'I britannici chiudono una telefonata con calma e con molta gentilezza. Una formula tipica è I\'ll let you go, letteralmente "ti lascio andare": vuol dire "non ti rubo altro tempo", ed è il segnale che la telefonata sta per finire.',
        },
        {
          tipo: "tabella",
          righe: [
            ["Thanks for your help.", "Grazie dell'aiuto."],
            ["Thanks for calling.", "Grazie di aver chiamato."],
            ["Right, I'll let you go.", "Bene, non ti trattengo oltre."],
            [
              "Speak soon! / Talk to you later!",
              "Ci sentiamo presto! / Ci sentiamo dopo!",
            ],
            [
              "Bye! Bye-bye! Bye!",
              "Ciao! (i britannici lo ripetono più volte)",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            '"Chiudere" il telefono è hang up (un phrasal verb), non close: She hung up on me vuol dire "mi ha sbattuto il telefono in faccia".',
        },
      ],
    },
    {
      titolo: "MESSAGGI E VIDEOCHIAMATE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Oggi gran parte delle comunicazioni passa da messaggi e videochiamate. Anche qui ci sono frasi fisse, e alcune sono diventate famose con le lezioni e le riunioni online.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Text me. / Message me.", "Mandami un messaggio."],
            [
              "Sorry, I missed your call.",
              "Scusa, non ho sentito la chiamata.",
            ],
            ["Can I call you back in five?", "Ti richiamo tra cinque minuti?"],
            ["You're on mute.", "Hai il microfono spento."],
            ["Can you see my screen?", "Vedi il mio schermo?"],
            ["You froze.", "Ti si è bloccata l'immagine."],
            ["Can you hear me now?", "Mi senti adesso?"],
          ],
        },
        {
          tipo: "tabella",
          righe: [
            ["btw", "by the way: a proposito"],
            ["tbh", "to be honest: a dire il vero"],
            ["asap", "as soon as possible: il prima possibile"],
            ["ETA", "estimated time of arrival: tra quanto arrivi?"],
            ["np", "no problem: figurati"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Le abbreviazioni si usano solo nei messaggi informali, tra amici. In una mail a un professore o a un'azienda non vanno mai usate: lì valgono le regole dell'inglese formale (lezione 54{3}).",
        },
      ],
    },
    {
      titolo: "UN DIALOGO: LA STANZA IN AFFITTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Marco ha visto online l'annuncio di una stanza a Oxford e chiama il proprietario.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Mr Hall: Hello?", it: "Pronto?" },
            {
              en: "Marco: Hello, is that Mr Hall?",
              it: "Buongiorno, parlo con il signor Hall?",
            },
            { en: "Mr Hall: Speaking.", it: "Sono io." },
            {
              en: "Marco: Hi, this is Marco Rossi. I'm calling about the room in Cowley Road. Is it still available?",
              it: "Salve, sono Marco Rossi. La chiamo per la stanza in Cowley Road. È ancora disponibile?",
            },
            {
              en: "Mr Hall: Yes, it is. Would you like to come and see it?",
              it: "Sì. Vuole venire a vederla?",
            },
            {
              en: "Marco: Yes, please. Sorry, you're breaking up a bit. Could you say that again?",
              it: "Sì, grazie. Scusi, la linea va e viene. Può ripetere?",
            },
            {
              en: "Mr Hall: I said, would you like to come and see it? How about Thursday at six?",
              it: "Dicevo, vuole venire a vederla? Che ne dice di giovedì alle sei?",
            },
            {
              en: "Marco: Thursday at six is perfect. Could you give me the address?",
              it: "Giovedì alle sei va benissimo. Mi può dare l'indirizzo?",
            },
            {
              en: "Mr Hall: It's 42 Cowley Road. The door's next to a bakery.",
              it: "Cowley Road 42. La porta è accanto a un panificio.",
            },
            {
              en: "Marco: Forty-two, next to the bakery. And can I ask how much the rent is?",
              it: "Quarantadue, accanto al panificio. E posso chiederle quanto è l'affitto?",
            },
            {
              en: "Mr Hall: It's six hundred and fifty a month, bills included.",
              it: "Seicentocinquanta al mese, bollette incluse.",
            },
            {
              en: "Marco: Great. Could I have your name again, for my notes?",
              it: "Perfetto. Mi ripete il suo nome, per segnarmelo?",
            },
            { en: "Mr Hall: Hall. H-A-double L.", it: "Hall. H-A-doppia L." },
            {
              en: "Marco: Thanks, Mr Hall. So, Thursday at six, at 42 Cowley Road. See you then!",
              it: "Grazie, signor Hall. Allora, giovedì alle sei, al 42 di Cowley Road. A giovedì!",
            },
            {
              en: "Mr Hall: See you then. Bye!",
              it: "A giovedì. Arrivederci!",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Marco usa tutte le strategie: ripete l'indirizzo (Forty-two, next to the bakery), chiede di ripetere quando la linea va male, si fa fare lo spelling del nome e alla fine riassume l'appuntamento. Can I ask how much the rent is? è una domanda indiretta: l'ordine è soggetto + verbo (lezione 42{5}).",
        },
      ],
    },
    {
      titolo: "GLI ERRORI TIPICI",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "Hello, I'm Marco. (al telefono)", sbagliato: true },
            {
              en: "Hello, it's Marco. / This is Marco.",
              it: "Pronto, sono Marco.",
            },
            { en: "Who speaks?", sbagliato: true },
            { en: "Who's calling, please?", it: "Chi parla, scusi?" },
            { en: "Are you Sam? (al telefono)", sbagliato: true },
            { en: "Is that Sam?", it: "Parlo con Sam?" },
            { en: "I call you later.", sbagliato: true },
            { en: "I'll call you later.", it: "Ti chiamo più tardi." },
            { en: "The line fell.", sbagliato: true },
            { en: "We got cut off.", it: "È caduta la linea." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "I'll call you later: è una promessa o una decisione presa adesso, quindi serve will (lezione 28{3}). Il presente I call you later è un calco dall'italiano.",
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
          testo: "Presentarsi al telefono",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Chiami un'amica. Come ti presenti?",
          opzioni: ["Hi, I'm Luca.", "Hi, here Luca.", "Hi, it's Luca."],
          giusta: 2,
          spiegazione:
            "Al telefono ci si presenta con It's... o This is..., non con I'm.",
          rivedi: "RISPONDERE E PRESENTARSI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Vuoi sapere se dall'altra parte c'è Emma. Che cosa chiedi?",
          opzioni: ["Is that Emma?", "Are you Emma?", "Who is Emma?"],
          giusta: 0,
          spiegazione:
            "Al telefono si chiede Is that...?. Se è lei, risponderà Speaking!",
          rivedi: "RISPONDERE E PRESENTARSI",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni frase al suo significato.",
          coppie: [
            ["Hold on a moment.", "Attenda un attimo."],
            ["I'll put you through.", "Le passo la chiamata."],
            ["Can I take a message?", "Vuole lasciare un messaggio?"],
            ["Could you call me back?", "Può richiamarmi?"],
          ],
          rivedi: "ATTENDERE E PASSARE LA CHIAMATA",
        },
        {
          tipo: "sottotitolo",
          testo: "Capire e farsi capire",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "La voce dall'altra parte va e viene. Che cosa dici?",
          opzioni: [
            "You're breaking down.",
            "You're breaking up.",
            "The line is broken.",
          ],
          giusta: 1,
          spiegazione:
            'You\'re breaking up = la linea va e viene. Break down significa "guastarsi" o "crollare".',
          rivedi: "QUANDO NON SI SENTE",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Può ripetere, per favore?"',
          prima: "Could you repeat",
          dopo: ", please?",
          risposte: ["that"],
          spiegazione: "Repeat vuole l'oggetto: Could you repeat that?",
          rivedi: "QUANDO NON SI SENTE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Come si legge, in inglese britannico, il numero 0115 2290?",
          opzioni: [
            "Zero one one five, two two nine zero.",
            "One hundred fifteen, two thousand two hundred ninety.",
            "Oh one one five, double two nine oh.",
          ],
          giusta: 2,
          spiegazione:
            "Una cifra alla volta, lo zero come oh e due cifre uguali con double.",
          rivedi: "LO SPELLING E I NUMERI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come si fa lo spelling di "Russo"?',
          opzioni: ["R-U-double S-O", "R-U-S-S-O", "R-U-two S-O"],
          giusta: 0,
          spiegazione: "Le lettere doppie si dicono con double.",
          rivedi: "LO SPELLING E I NUMERI",
        },
        {
          tipo: "sottotitolo",
          testo: "Chiudere e scrivere",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come si dice "Mi ha chiuso il telefono in faccia"?',
          opzioni: [
            "She closed the phone on me.",
            "She hung up on me.",
            "She shut me.",
          ],
          giusta: 1,
          spiegazione: "Chiudere una telefonata = hang up.",
          rivedi: "CHIUDERE LA TELEFONATA",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Durante una lezione online parli, ma nessuno ti sente. Che cosa ti diranno?",
          opzioni: ["You froze.", "You're breaking up.", "You're on mute."],
          giusta: 2,
          spiegazione:
            "You're on mute = hai il microfono spento. You froze = ti si è bloccata l'immagine.",
          rivedi: "MESSAGGI E VIDEOCHIAMATE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è giusta?",
          opzioni: [
            "I'll call you back in ten minutes.",
            "I call you back in ten minutes.",
            "I'll to call you back in ten minutes.",
          ],
          giusta: 0,
          spiegazione: "È una promessa fatta adesso: serve will.",
          rivedi: "GLI ERRORI TIPICI",
        },
        {
          tipo: "sottotitolo",
          testo: "Scrivi",
        },
        {
          tipo: "testo",
          testo:
            "Questo esercizio non ha un punteggio: scrivi il tuo testo e confrontalo con il modello.",
        },
        {
          tipo: "scrivi",
          consegna:
            "Chiami l'ambulatorio del tuo GP per spostare un appuntamento, ma risponde la segreteria. Scrivi il messaggio che lasci.",
          punti: [
            "chi sei",
            "perché chiami",
            "che cosa chiedi",
            "il tuo numero, ripetuto",
            "un saluto",
          ],
          modello:
            "Hello, this is Giulia Ferri, date of birth the third of March 2004. I'm calling about my appointment on Monday at ten. I'm afraid I can't come, so could I move it to later in the week? Could you call me back on 07700 900456? That's 07700 900456. Thank you very much. Bye!",
          spiegazione:
            "Controlla This is per presentarti, I'm calling about per il motivo, could per la richiesta e il numero ripetuto due volte.",
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
