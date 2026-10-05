import { Lezione } from "@/types/lezione";

export const reazioni: Lezione = {
  id: "M8",
  titolo: "Reazioni in conversazione",
  descrizione: "Le risposte rapide che si sentono in ogni dialogo",
  chiavi: "tell me about it, give me a break, beats me, my bad, I'm all ears",
  livello: "Modi di dire",
  citazione: {
    testo: "Tell me about it.",
    fonte: "Modo di dire inglese",
    traduzione: "A chi lo dici.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "TELL ME ABOUT IT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Tell me about it sembra una richiesta ("parlamene"), ma detto con il tono giusto vuol dire "a chi lo dici!": lo so benissimo, ci sono passato anch\'io. È una trappola classica per chi impara: il senso dipende tutto dall\'intonazione.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "This exam is so hard! - Tell me about it.",
              it: "Questo esame è difficilissimo! - A chi lo dici.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'You can say that again vuol dire "puoi dirlo forte": sono completamente d\'accordo. Anche qui non è un invito a ripetere.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "It's freezing today. - You can say that again!",
              it: "Oggi si gela. - Puoi dirlo forte!",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Tell me about it con il tono di una domanda normale torna al significato letterale: Tell me about your trip = raccontami del tuo viaggio.",
        },
      ],
    },
    {
      titolo: "GIVE ME A BREAK",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Give me a break! ha due usi. Può esprimere incredulità o fastidio ("ma dai!", "ma figurati!") oppure chiedere a qualcuno di smettere di criticarci ("lasciami in pace", "dammi tregua").',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "You ran a marathon? Oh, give me a break!",
              it: "Hai corso una maratona? Ma dai, figurati!",
            },
            {
              en: "Give me a break, I'm doing my best!",
              it: "Lasciami in pace, sto facendo del mio meglio!",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Cut someone some slack vuol dire essere più indulgenti con qualcuno, non pretendere troppo. Slack è la parte lenta di una corda: allentarla dà un po' di respiro.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Cut him some slack. It's his first week.",
              it: "Sii un po' più indulgente con lui. È la sua prima settimana.",
            },
          ],
        },
      ],
    },
    {
      titolo: "IT'S NOT ROCKET SCIENCE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "It's not rocket science vuol dire che una cosa è semplice, non serve essere un genio: non è mica ingegneria aerospaziale. Esiste anche it's not brain surgery (non è neurochirurgia), con lo stesso senso.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Just follow the instructions. It's not rocket science.",
              it: "Segui le istruzioni. Non ci vuole un genio.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'Beats me è un modo informale per dire "boh, non ne ho idea": la domanda mi batte, non so rispondere. Si sente anche (it) beats me why...',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Where's Mark? - Beats me.",
              it: "Dov'è Mark? - Boh.",
            },
            {
              en: "It beats me why they cancelled the show.",
              it: "Non capisco proprio perché abbiano cancellato la serie.",
            },
          ],
        },
      ],
    },
    {
      titolo: "YOU BET",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'You bet! vuol dire "certo!", "eccome!": ci puoi scommettere. È una risposta entusiasta a una domanda o un modo informale di rispondere a un grazie ("figurati"), soprattutto in americano.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Are you coming to the party? - You bet!",
              it: "Vieni alla festa? - Eccome!",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'No way! cambia significato con il contesto. Come risposta a una richiesta è un rifiuto netto ("neanche per sogno"); come reazione a una notizia esprime stupore ("non ci credo!", "ma dai!").',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Can I borrow your car? - No way!",
              it: "Mi presti la macchina? - Neanche per sogno!",
            },
            {
              en: "I'm moving to Oxford. - No way! That's amazing!",
              it: "Mi trasferisco a Oxford. - Ma dai! Fantastico!",
            },
          ],
        },
      ],
    },
    {
      titolo: "MY BAD",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'My bad è un modo molto informale, nato nello slang americano, per dire "colpa mia", "scusa, ho sbagliato". Si usa per errori piccoli; per scusarsi seriamente serve I\'m sorry, it was my fault.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "You took my coffee. - Oh, my bad!",
              it: "Hai preso il mio caffè. - Oh, colpa mia!",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'No hard feelings vuol dire "senza rancore": si dice dopo una discussione o una sconfitta, per far capire che non c\'è risentimento.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "You won fair and square. No hard feelings.",
              it: "Hai vinto lealmente. Senza rancore.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Registro: my bad va bene con amici e colleghi, ma in una lettera formale o con un professore suona fuori luogo (lezione 54{1}).",
        },
      ],
    },
    {
      titolo: "I'M ALL EARS",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I'm all ears è il nostro \"sono tutt'orecchi\": ti ascolto con la massima attenzione. Si usa anche con un filo d'ironia, quando si è curiosi di sentire una spiegazione.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "You have a better idea? I'm all ears.",
              it: "Hai un'idea migliore? Sono tutt'orecchi.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'My lips are sealed vuol dire "acqua in bocca": le mie labbra sono sigillate, non dirò niente a nessuno.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Don't worry, my lips are sealed.",
              it: "Tranquillo, acqua in bocca.",
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
            ["you can say that again", "puoi dirlo forte"],
            ["beats me", "boh"],
            ["my bad", "colpa mia"],
            ["I'm all ears", "sono tutt'orecchi"],
            ["my lips are sealed", "acqua in bocca"],
          ],
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            '"I\'m so tired today!" - "Tell me about it." Cosa vuol dire la risposta?',
          opzioni: [
            "Raccontami perché sei stanco",
            "A chi lo dici, anch'io",
            "Non mi interessa",
          ],
          giusta: 1,
          spiegazione:
            'Con questo tono tell me about it non è una domanda: vuol dire "a chi lo dici".',
          rivedi: "TELL ME ABOUT IT",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Un amico ti chiede se vieni al concerto e tu non vedi l'ora. Cosa rispondi?",
          opzioni: ["My bad!", "You bet!", "Beats me!"],
          giusta: 1,
          spiegazione: "You bet! = certo, eccome!",
          rivedi: "YOU BET",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Hai sbagliato a scrivere a un professore. Quale scusa è adatta?",
          opzioni: [
            "My bad!",
            "Give me a break!",
            "I'm sorry, it was my fault.",
          ],
          giusta: 2,
          spiegazione:
            "My bad è troppo informale con un professore: meglio una scusa completa.",
          rivedi: "MY BAD",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            "Un collega nuovo fa un piccolo errore. Cosa dici a chi lo critica?",
          opzioni: [
            "Cut him some slack.",
            "It's not rocket science.",
            "No way!",
          ],
          giusta: 0,
          spiegazione: "Cut someone some slack: essere più indulgenti.",
          rivedi: "GIVE ME A BREAK",
        },
        { tipo: "sottotitolo", testo: "Completa" },
        {
          tipo: "completa",
          consegna: 'Completa: "Non ci vuole un genio".',
          prima: "It's not rocket",
          dopo: ".",
          risposte: ["science"],
          spiegazione:
            "It's not rocket science: non è ingegneria aerospaziale.",
          rivedi: "IT'S NOT ROCKET SCIENCE",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Senza rancore".',
          prima: "No hard",
          dopo: ".",
          risposte: ["feelings"],
          spiegazione: "No hard feelings: nessun risentimento.",
          rivedi: "MY BAD",
        },
        {
          tipo: "riordina",
          consegna: 'Traduci "Tranquillo, acqua in bocca".',
          parole: ["sealed", "lips", "don't", "my", "worry,", "are"],
          soluzione: ["don't", "worry,", "my", "lips", "are", "sealed"],
          spiegazione: "My lips are sealed: le mie labbra sono sigillate.",
          rivedi: "I'M ALL EARS",
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
            "Hai un piano migliore? Sono tutt'orecchi. Ma non dirmi che è facile: non ci credo!",
          soluzione:
            "Do you have a better plan? I'm all ears. But don't tell me it's easy: no way!",
          spiegazione:
            "La domanda con do (lezione 10{5}), poi I'm all ears e no way! per lo stupore incredulo.",
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
