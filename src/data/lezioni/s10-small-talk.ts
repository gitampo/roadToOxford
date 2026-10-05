import { Lezione } from "@/types/lezione";

export const smallTalk: Lezione = {
  id: "S10",
  titolo: "Small talk e buone maniere",
  descrizione:
    "Chiacchierare, chiedere con garbo, scusarsi, invitare e rifiutare",
  chiavi:
    "small talk, tempo atmosferico, cortesia, would you mind, sorry, inviti",
  livello: "Situazioni",
  sottotitolo: "Situazioni · Lezione S10 · B1",
  citazione: {
    testo:
      "It is commonly observed, that when two Englishmen meet, their first talk is of the weather.",
    fonte: "Samuel Johnson, The Idler (1758)",
    traduzione:
      "Si osserva comunemente che, quando due inglesi si incontrano, il primo argomento è il tempo.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COS'È LO SMALL TALK",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Lo small talk è la conversazione leggera che si fa con colleghi, vicini, compagni di corso o sconosciuti: alla fermata dell'autobus, in ascensore, prima di una riunione. Non serve a scambiarsi informazioni, ma a creare un clima amichevole. Per i britannici è un rito sociale importantissimo: chi non lo fa sembra freddo o scortese.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "argomenti sicuri",
              "il tempo, il fine settimana, i viaggi, il cibo, lo studio o il lavoro in generale, lo sport, gli animali, le serie TV",
            ],
            [
              "argomenti da evitare con chi conosci poco",
              "soldi e stipendi, politica, religione, età, peso, quanto hai pagato qualcosa",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "La regola d'oro: risposte brevi e positive, e sempre una domanda in cambio. Lo small talk è un palleggio, non un monologo (lezione S1{9}).",
        },
      ],
    },
    {
      titolo: "IL TEMPO, NATURALMENTE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Come diceva Samuel Johnson già nel Settecento, il tempo è l'argomento britannico per eccellenza. Non perché interessi davvero, ma perché è neutro e riguarda tutti: è il modo perfetto per cominciare a parlare con chiunque. Spesso si usa una tag question, che invita l'altro a rispondere (lezione 40{1}).",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Lovely day, isn't it?", it: "Che bella giornata, vero?" },
            { en: "Isn't it cold today?", it: "Che freddo oggi, eh?" },
            {
              en: "It's freezing! / It's a bit chilly.",
              it: "Si gela! / Fa un po' freschino.",
            },
            {
              en: "It's pouring down. / It's drizzling.",
              it: "Piove a dirotto. / Pioviggina.",
            },
            { en: "It looks like rain.", it: "Sembra che stia per piovere." },
            {
              en: "They say it'll clear up later.",
              it: "Dicono che più tardi si rasserena.",
            },
            {
              en: "Typical British summer!",
              it: "Tipica estate britannica! (ironico, quando piove)",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "A una frase sul tempo si risponde dando ragione: Yes, gorgeous, isn't it? o I know, horrible!. Contraddire (\"in realtà non fa così freddo\") rompe il rito. Sull'intonazione delle tag questions, rivedi la lezione 40{6}.",
        },
      ],
    },
    {
      titolo: "HOW ARE YOU? NON È UNA DOMANDA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "How are you? e le sue varianti sono saluti, non domande vere. La risposta attesa è breve e positiva, seguita dalla stessa domanda all'altro. Raccontare i propri problemi a chi te lo chiede di passaggio mette in imbarazzo.",
        },
        {
          tipo: "tabella",
          righe: [
            ["How are you? / How are you doing?", "Come stai?"],
            ["How's it going?", "Come va?"],
            ["You alright?", "Tutto bene? (britannico, informale)"],
            ["Fine, thanks. And you?", "Bene, grazie. E tu?"],
            ["Not bad, thanks. You?", "Non male, grazie. E tu? (= bene)"],
            ["Can't complain.", "Non mi lamento."],
            ["Good, thanks!", "Bene, grazie!"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Not bad per un britannico vuol dire \"bene\": è understatement, il gusto di dire meno di quello che si pensa. Ne vedrai altri esempi nel riquadro sull'accordo e il disaccordo. Con un amico vero, naturalmente, puoi rispondere sinceramente: Honestly? Not great. I've got exams.",
        },
      ],
    },
    {
      titolo: "IL WEEKEND E I PROGETTI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il lunedì si chiede del fine settimana appena passato (past simple), il venerdì di quello che sta per arrivare (present continuous o going to, lezione 27{4}).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Did you have a nice weekend?",
              it: "Hai passato un bel fine settimana?",
            },
            {
              en: "How was your weekend?",
              it: "Com'è andato il fine settimana?",
            },
            {
              en: "Are you up to anything nice this weekend?",
              it: "Fai qualcosa di bello questo fine settimana?",
            },
            {
              en: "Have you got any plans for the holidays?",
              it: "Hai programmi per le vacanze?",
            },
            {
              en: "Not much, just a quiet one.",
              it: "Niente di speciale, un fine settimana tranquillo.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Per tenere viva la conversazione servono le reazioni: brevi espressioni che mostrano interesse, sorpresa o partecipazione. Sono la colla dello small talk.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Oh, nice! / That sounds fun!", "Che bello! / Sembra divertente!"],
            ["Really? / No way!", "Davvero? / Non ci credo!"],
            ["Lucky you!", "Beato te!"],
            ["Oh no! / What a shame!", "Oh no! / Che peccato!"],
            ["Fair enough.", "Giusto, ci sta."],
            ["Tell me about it!", "A chi lo dici! (lezione M8{1})"],
          ],
        },
      ],
    },
    {
      titolo: "CHIEDERE CON GENTILEZZA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Più la richiesta è grande, o più la persona è lontana da te, più la frase si allunga (lezione 54{5}). Ecco la scala, dalla richiesta più semplice alla più delicata.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Can you...?", "Puoi...? (tra amici)"],
            ["Could you...?", "Potresti...? (la più usata)"],
            ["Would you mind + -ing?", "Ti dispiacerebbe...?"],
            ["Do you mind if I...?", "Ti dispiace se io...?"],
            [
              "I was wondering if you could...",
              "Mi chiedevo se potessi... (molto cortese)",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            'Con mind attenzione alla logica della risposta. Mind significa "dispiacere", quindi la domanda è "ti dispiace?": per dire di sì, cioè che puoi farlo, si risponde di no. Dopo would you mind il verbo va in -ing (lezione 48{2}).',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Would you mind opening the window?",
              it: "Ti dispiacerebbe aprire la finestra?",
            },
            { en: "No, not at all.", it: "No, figurati. (= sì, la apro)" },
            {
              en: "Do you mind if I sit here?",
              it: "Ti dispiace se mi siedo qui?",
            },
            { en: "No, go ahead!", it: "No, prego! (= siediti pure)" },
            { en: "Would you mind open the window?", sbagliato: true },
            { en: "Do you mind if I sit here? — Yes, sure!", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Rispondere Yes, sure! a Do you mind? è un errore comunissimo e crea un piccolo malinteso: letteralmente stai dicendo "sì, mi dispiace". Nella pratica molti capiscono lo stesso, ma la risposta corretta è No, not at all o No, go ahead.',
        },
      ],
    },
    {
      titolo: "SORRY IN TUTTE LE SALSE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I britannici dicono sorry di continuo, e non sempre per scusarsi. È una parola multiuso, da capire in base alla situazione.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Sorry! (dopo un urto)", "Scusi!"],
            ["Sorry? (con il tono che sale)", "Come, scusi? Non ho capito."],
            ["Sorry to interrupt, but...", "Scusa se interrompo, ma..."],
            ["I'm so sorry I'm late.", "Scusami tanto per il ritardo."],
            [
              "I'm sorry to hear that.",
              "Mi dispiace (per una brutta notizia).",
            ],
            ["Sorry, but I don't agree.", "Mi spiace, ma non sono d'accordo."],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Excuse me e sorry non sono intercambiabili: excuse me si dice prima (per chiedere attenzione o per passare), sorry dopo (per scusarsi di qualcosa che è successo). Alle scuse si risponde in modo leggero.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "No worries!", it: "Figurati! / Tranquillo!" },
            {
              en: "That's OK. / Don't worry about it.",
              it: "Non fa niente. / Non preoccuparti.",
            },
            { en: "No harm done.", it: "Nessun danno." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "What? per chiedere di ripetere è brusco. Usa Sorry? oppure, più formale, Pardon?. E se qualcuno ti urta per strada, non stupirti se è lui a dire sorry anche quando la colpa è tua: è un riflesso nazionale.",
        },
      ],
    },
    {
      titolo: "INVITARE, ACCETTARE, RIFIUTARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per invitare si usa spesso Do you fancy + -ing? (britannico, informale) oppure Would you like to...? (lezione 20{4}).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Do you fancy going for a drink after class?",
              it: "Ti va di andare a bere qualcosa dopo la lezione?",
            },
            {
              en: "Would you like to come to dinner on Friday?",
              it: "Ti andrebbe di venire a cena venerdì?",
            },
            { en: "Are you free on Saturday?", it: "Sei libero sabato?" },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Accettare è facile. Rifiutare, alla britannica, ha uno schema preciso: ringraziare o mostrare entusiasmo, scusarsi, dare una ragione, proporre un'alternativa. Un no secco (No, I can't) suona offensivo.",
        },
        {
          tipo: "tabella",
          righe: [
            ["I'd love to!", "Molto volentieri!"],
            ["Sounds great! / Count me in!", "Ottima idea! / Ci sono!"],
            [
              "I'd love to, but I'm afraid I can't.",
              "Mi piacerebbe tanto, ma purtroppo non posso.",
            ],
            [
              "That's really kind of you, but I've got an exam.",
              "Sei molto gentile, ma ho un esame.",
            ],
            ["Maybe another time?", "Magari un'altra volta?"],
            [
              "How about next week instead?",
              "Che ne dici della settimana prossima?",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            'I\'m afraid qui non significa "ho paura": è il modo britannico di introdurre una notizia sgradita, come il nostro "purtroppo". E attenzione alle risposte vaghe come Maybe o I\'ll see: spesso, con garbo, vogliono dire no.',
        },
      ],
    },
    {
      titolo: "ACCORDO E DISACCORDO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Essere d'accordo si può fare in modo diretto. Il disaccordo, invece, si ammorbidisce sempre: prima si riconosce il punto dell'altro, poi si dice il proprio.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Absolutely. / Exactly.", "Assolutamente. / Esatto."],
            ["I couldn't agree more.", "Sono completamente d'accordo."],
            ["I see what you mean, but...", "Capisco che cosa intendi, ma..."],
            ["That's a good point, but...", "Giusta osservazione, ma..."],
            [
              "I'm not sure about that.",
              "Non ne sono così sicuro. (= non sono d'accordo)",
            ],
            ["I'm afraid I disagree.", "Temo di non essere d'accordo."],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I agree with you.", it: "Sono d'accordo con te." },
            { en: "I'm agree with you.", sbagliato: true },
            {
              en: "You're wrong.",
              it: "Hai torto. (molto diretto: meglio evitarlo)",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Il gusto britannico per l'understatement fa sì che alcune frasi vogliano dire molto più, o molto meno, di quello che dicono. Non è una regola rigida, ma conoscerle evita parecchi malintesi.",
        },
        {
          tipo: "tabella",
          righe: [
            ["That's not bad.", "È buono, mi piace."],
            ["It's quite good.", "È discreto, niente di speciale."],
            ["Interesting...", "Mah, non mi convince."],
            ["I'll bear it in mind.", "Ne terrò conto. (spesso: non lo farò)"],
            [
              "With the greatest respect...",
              "Con tutto il rispetto... (= stai sbagliando)",
            ],
            ["It's not my cup of tea.", "Non fa per me. (lezione 56{5})"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Agree è un verbo, non un aggettivo: si dice I agree, non I'm agree (l'italiano \"sono d'accordo\" trae in inganno). La negativa è I don't agree o I disagree.",
        },
      ],
    },
    {
      titolo: "CHIUDERE UNA CONVERSAZIONE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Andarsene di colpo sembra scortese. Si segnala che la conversazione sta finendo con una parola come Anyway o Right, poi si dà un motivo e si saluta con calore.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Anyway, I'd better get going.",
              it: "Be', devo proprio andare.",
            },
            {
              en: "Right, I'll let you get on.",
              it: "Bene, ti lascio alle tue cose.",
            },
            {
              en: "It was lovely chatting to you.",
              it: "È stato bello chiacchierare con te.",
            },
            { en: "See you around!", it: "Ci si vede!" },
            { en: "Catch you later!", it: "A dopo! (informale)" },
          ],
        },
        {
          tipo: "nota",
          testo:
            'I\'d better significa "è meglio che io": I\'d better go, "è meglio che vada". È uno dei modi più gentili di congedarsi, perché fa capire che te ne vai per un dovere, non per noia.',
        },
      ],
    },
    {
      titolo: "UN DIALOGO: ALLA FERMATA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "È lunedì mattina e piove. Alla fermata dell'autobus Davide incontra Mrs Patel, la sua vicina di casa.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Mrs Patel: Morning, Davide! Awful weather, isn't it?",
              it: "Buongiorno, Davide! Che tempo orribile, vero?",
            },
            {
              en: "Davide: Morning! I know, it hasn't stopped raining since Saturday.",
              it: "Buongiorno! Già, non ha smesso di piovere da sabato.",
            },
            {
              en: "Mrs Patel: Typical! Did you have a nice weekend, apart from the rain?",
              it: "Tipico! Hai passato un bel fine settimana, a parte la pioggia?",
            },
            {
              en: "Davide: Yes, not bad, thanks. Some friends came over from Italy.",
              it: "Sì, non male, grazie. Sono venuti a trovarmi degli amici dall'Italia.",
            },
            {
              en: "Mrs Patel: Oh, lovely! Did you show them around Oxford?",
              it: "Che bello! Gli hai fatto vedere Oxford?",
            },
            {
              en: "Davide: We tried, but we spent most of the time in a pub! How about you?",
              it: "Ci abbiamo provato, ma siamo stati quasi sempre in un pub! E lei?",
            },
            {
              en: "Mrs Patel: Oh, very quiet. I was gardening, until the rain started.",
              it: "Oh, molto tranquillo. Facevo giardinaggio, finché non ha cominciato a piovere.",
            },
            {
              en: "Davide: Sorry, would you mind holding my umbrella for a second? I can't find my bus pass.",
              it: "Scusi, le dispiacerebbe tenermi l'ombrello un attimo? Non trovo l'abbonamento.",
            },
            {
              en: "Mrs Patel: Not at all. Here you are.",
              it: "Figurati. Ecco.",
            },
            {
              en: "Davide: Thanks! Oh, here's my bus. It was lovely chatting to you.",
              it: "Grazie! Oh, ecco il mio autobus. È stato bello fare due chiacchiere.",
            },
            {
              en: "Mrs Patel: You too, dear. Have a good day!",
              it: "Anche per me, caro. Buona giornata!",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "C'è tutto lo small talk britannico: il tempo con la tag question, il weekend, la domanda restituita (How about you?), la richiesta con would you mind + -ing, la risposta Not at all, e la chiusura It was lovely chatting to you.",
        },
      ],
    },
    {
      titolo: "GLI ERRORI TIPICI",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "I'm agree.", sbagliato: true },
            { en: "I agree.", it: "Sono d'accordo." },
            { en: "Would you mind to help me?", sbagliato: true },
            {
              en: "Would you mind helping me?",
              it: "Ti dispiacerebbe aiutarmi?",
            },
            { en: "Thank you! — Please!", sbagliato: true },
            { en: "Thank you! — You're welcome!", it: "Grazie! — Prego!" },
            { en: "What? (per far ripetere)", sbagliato: true },
            { en: "Sorry? / Pardon?", it: "Come, scusi?" },
            { en: "No, I can't come. (a un invito)", sbagliato: true },
            {
              en: "I'd love to, but I'm afraid I can't.",
              it: "Mi piacerebbe, ma purtroppo non posso.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Please non è mai la risposta a un grazie: si usa solo per chiedere. Il nostro "prego" ha molte traduzioni, che trovi nella lezione S6{7}.',
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
          testo: "Lo small talk",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Un nuovo collega che conosci appena ti fa small talk. Quale argomento eviti?",
          opzioni: ["Il suo stipendio", "Il fine settimana", "Il tempo"],
          giusta: 0,
          spiegazione:
            "Soldi, politica, religione, età e peso non si toccano con chi si conosce poco.",
          rivedi: "COS'È LO SMALL TALK",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Una vicina ti dice "Lovely day, isn\'t it?". Qual è la risposta più naturale?',
          opzioni: [
            "Actually, it's going to rain later.",
            "Yes, gorgeous, isn't it?",
            "Why are you asking me?",
          ],
          giusta: 1,
          spiegazione:
            "A una frase sul tempo si risponde dando ragione: lo scopo è creare un clima amichevole.",
          rivedi: "IL TEMPO, NATURALMENTE",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Un compagno di corso ti saluta con "How\'s it going?" mentre passa. Che cosa rispondi?',
          opzioni: [
            "Badly. I've got a headache and my landlord is awful.",
            "It's going to the library.",
            "Not bad, thanks. You?",
          ],
          giusta: 2,
          spiegazione:
            "How's it going? è un saluto: si risponde in breve e si restituisce la domanda.",
          rivedi: "HOW ARE YOU? NON È UNA DOMANDA",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni reazione al suo significato.",
          coppie: [
            ["Lucky you!", "Beato te!"],
            ["What a shame!", "Che peccato!"],
            ["No way!", "Non ci credo!"],
            ["Fair enough.", "Giusto, ci sta."],
          ],
          rivedi: "IL WEEKEND E I PROGETTI",
        },
        {
          tipo: "sottotitolo",
          testo: "Cortesia",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Ti dispiacerebbe chiudere la porta?"',
          prima: "Would you mind",
          dopo: "the door?",
          risposte: ["closing", "shutting"],
          spiegazione: "Dopo would you mind il verbo va in -ing.",
          rivedi: "CHIEDERE CON GENTILEZZA",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Ti chiedono "Do you mind if I open the window?" e per te va bene. Che cosa rispondi?',
          opzioni: ["No, go ahead.", "Yes, I mind.", "Yes, please mind."],
          giusta: 0,
          spiegazione:
            "Mind = dispiacere: per dire che va bene si risponde No (not at all / go ahead).",
          rivedi: "CHIEDERE CON GENTILEZZA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Non hai capito che cosa ti hanno detto. Che cosa dici?",
          opzioni: ["What?", "Sorry?", "Repeat."],
          giusta: 1,
          spiegazione:
            "Sorry? con il tono che sale (o Pardon?) è il modo gentile; What? è brusco.",
          rivedi: "SORRY IN TUTTE LE SALSE",
        },
        {
          tipo: "sottotitolo",
          testo: "Inviti e opinioni",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Un'amica ti invita a una festa, ma hai un esame. Qual è il rifiuto più britannico?",
          opzioni: [
            "No, I can't.",
            "No, I don't want to come.",
            "I'd love to, but I'm afraid I've got an exam. Maybe another time?",
          ],
          giusta: 2,
          spiegazione:
            "Entusiasmo + scusa + ragione + alternativa: un no secco suona offensivo.",
          rivedi: "INVITARE, ACCETTARE, RIFIUTARE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come si dice "Sono d\'accordo con te"?',
          opzioni: [
            "I agree with you.",
            "I'm agree with you.",
            "I'm agreed to you.",
          ],
          giusta: 0,
          spiegazione: "Agree è un verbo: I agree, senza am.",
          rivedi: "ACCORDO E DISACCORDO",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Proponi un'idea a un collega inglese, e lui risponde \"I'll bear it in mind\". Che cosa intende, probabilmente?",
          opzioni: [
            "Che la metterà in pratica subito",
            "Che non la trova molto convincente",
            "Che non ha capito",
          ],
          giusta: 1,
          spiegazione:
            'Per l\'understatement britannico, "ne terrò conto" spesso significa "probabilmente no".',
          rivedi: "ACCORDO E DISACCORDO",
        },
        {
          tipo: "riordina",
          consegna: 'Congedati: "Be\', è meglio che vada".',
          parole: ["better", "anyway,", "going", "get", "I'd"],
          soluzione: ["anyway,", "I'd", "better", "get", "going"],
          spiegazione:
            "Anyway segnala la fine della conversazione; I'd better = è meglio che io.",
          rivedi: "CHIUDERE UNA CONVERSAZIONE",
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
            "Il lunedì mattina incontri in cucina il tuo coinquilino inglese. Scrivi un breve dialogo di small talk (6–8 battute) che finisca con un invito.",
          punti: [
            "il tempo",
            "il fine settimana",
            "una reazione",
            "una domanda restituita",
            "un invito e la risposta",
          ],
          modello:
            "A: Morning! Freezing today, isn't it? B: I know! I had to wear two jumpers. Did you have a nice weekend? A: Not bad, thanks. I went to a concert on Saturday. B: Oh, nice! Who did you see? A: A jazz band at the Holywell Music Room. What about you? B: Very quiet, I was studying. A: Fair enough. Do you fancy going for a pizza tonight? B: I'd love to! What time?",
          spiegazione:
            "Controlla le tag questions (isn't it?), le domande restituite (What about you?), le reazioni (Oh, nice!) e Do you fancy + -ing.",
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
