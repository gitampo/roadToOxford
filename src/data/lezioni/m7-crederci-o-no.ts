import { Lezione } from "@/types/lezione";

export const credercioNo: Lezione = {
  id: "M7",
  titolo: "Crederci o no",
  descrizione: "Fidarsi, dubitare e smascherare una bugia",
  chiavi:
    "I'm not buying that, too good to be true, something fishy, fall for it, benefit of the doubt",
  livello: "Modi di dire",
  citazione: {
    testo: "I'm not buying that.",
    fonte: "Modo di dire inglese",
    traduzione: "Non me la bevo.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "I'M NOT BUYING IT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'In inglese informale buy vuol dire anche credere a qualcosa, accettare una spiegazione: come se una storia fosse una merce che ti vogliono vendere. I\'m not buying it (o that) è il nostro "non me la bevo": non credo a quello che mi stai dicendo.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I'm not buying that.",
              it: "Non me la bevo.",
            },
            {
              en: "He said the dog ate his homework, but the teacher didn't buy it.",
              it: "Ha detto che il cane gli aveva mangiato i compiti, ma la prof non ci ha creduto.",
            },
            {
              en: "Do you really buy his story?",
              it: "Ma tu credi davvero alla sua storia?",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'Per dire che non ci si fa ingannare facilmente si usa I wasn\'t born yesterday, identico al nostro "non sono nato ieri".',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Don't try that with me. I wasn't born yesterday.",
              it: "Non provarci con me. Non sono nato ieri.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il verbo è al present continuous (I'm not buying it) perché è la reazione a quello che si sta ascoltando proprio ora. Al passato si usa il simple: She didn't buy it.",
        },
      ],
    },
    {
      titolo: "TOO GOOD TO BE TRUE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Too good to be true si dice di un\'offerta o di una notizia così bella da essere sospetta. Esiste in italiano ("troppo bello per essere vero") e in inglese ha anche un proverbio: if it sounds too good to be true, it probably is.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "A free holiday in the Bahamas? It sounds too good to be true.",
              it: "Una vacanza gratis alle Bahamas? Sembra troppo bello per essere vero.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'A likely story! è ironico: alla lettera "una storia probabile", ma vuol dire il contrario, cioè "sì, come no". Si risponde così a una scusa poco credibile.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I was stuck in traffic for three hours. - A likely story!",
              it: "Sono rimasto bloccato nel traffico per tre ore. - Sì, come no!",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "L'ironia sta tutta nel tono. Scritta, a likely story si capisce solo dal contesto.",
        },
      ],
    },
    {
      titolo: "SOMETHING FISHY",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Fishy, alla lettera "che sa di pesce", vuol dire sospetto, poco pulito: come il pesce che non è più fresco. Si dice something\'s fishy o it sounds fishy: in italiano "qui qualcosa non quadra".',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "There's something fishy about this contract.",
              it: "In questo contratto c'è qualcosa che non quadra.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'Smell a rat vuol dire sentire puzza di imbroglio, cominciare a sospettare un inganno: come un cane che fiuta un topo nascosto. In italiano diciamo "sentire puzza di bruciato".',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "When he refused to show me the receipts, I smelled a rat.",
              it: "Quando si è rifiutato di mostrarmi le ricevute, ho sentito puzza di bruciato.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il passato di smell è smelled, ma in britannico si usa anche smelt: I smelt a rat.",
        },
      ],
    },
    {
      titolo: "FALL FOR IT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Fall for something vuol dire cascarci, farsi ingannare da un trucco o da una bugia. Attenzione: fall for someone ha un altro significato, innamorarsi di qualcuno.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "It was an old trick, but he fell for it.",
              it: "Era un trucco vecchio, ma ci è cascato.",
            },
            {
              en: "She fell for him the first time they met.",
              it: "Si è innamorata di lui la prima volta che si sono visti.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'Hook, line and sinker rafforza l\'idea: amo, lenza e piombo, come un pesce che inghiotte tutto. Swallow it hook, line and sinker o fall for it hook, line and sinker vuol dire crederci completamente, senza il minimo dubbio. In italiano: "abboccare in pieno".',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I told them I was a famous singer and they fell for it hook, line and sinker.",
              it: "Gli ho detto che ero un cantante famoso e ci sono cascati in pieno.",
            },
          ],
        },
      ],
    },
    {
      titolo: "TAKE MY WORD FOR IT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Take someone's word for it vuol dire credere a qualcuno sulla parola, senza controllare. Take my word for it = fidati di me; I'll take your word for it = ti credo sulla parola.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "The film is brilliant, take my word for it.",
              it: "Il film è bellissimo, fidati.",
            },
            {
              en: "I haven't checked, but I'll take your word for it.",
              it: "Non ho controllato, ma ti credo sulla parola.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'Give someone the benefit of the doubt vuol dire credere alla versione di qualcuno anche senza prove, finché non si dimostra il contrario. Viene dal linguaggio dei tribunali ed è uguale al nostro "concedere il beneficio del dubbio". Rispetto a take my word for it c\'è un dubbio in più: non sei sicuro, ma scegli di fidarti.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "He says he was ill. Let's give him the benefit of the doubt.",
              it: "Dice che stava male. Concediamogli il beneficio del dubbio.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'Cross my heart è una formula per giurare di dire la verità, nata da un gesto infantile: tracciare una croce sul cuore. Spesso diventa cross my heart and hope to die, come il nostro "giuro" o "croce sul cuore".',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I didn't tell anyone, cross my heart.",
              it: "Non l'ho detto a nessuno, giuro.",
            },
          ],
        },
      ],
    },
    {
      titolo: "THE JURY IS STILL OUT",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "The jury is still out vuol dire che non si è ancora deciso, che non ci sono prove sufficienti per dire chi ha ragione. Viene dai tribunali: la giuria è ancora fuori dall'aula, riunita a discutere, e il verdetto non è arrivato.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Is the new diet healthy? The jury is still out.",
              it: "La nuova dieta fa bene? Non si sa ancora.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "That's a stretch vuol dire \"mi sembra un po' tirata\": un'interpretazione o una spiegazione che va oltre quello che i fatti permettono, come un elastico tirato troppo.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Calling him a genius is a bit of a stretch.",
              it: "Chiamarlo genio mi sembra un po' esagerato.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Jury è un nome collettivo: in americano vuole il verbo al singolare (the jury is), in britannico anche al plurale (the jury are), se si pensa ai singoli giurati.",
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
            ["I'm not buying it", "non me la bevo"],
            ["smell a rat", "sentire puzza di bruciato"],
            ["fall for it", "cascarci"],
            ["cross my heart", "giuro"],
            ["the jury is still out", "non si sa ancora"],
          ],
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Un collega ti dà una scusa poco credibile. Come rispondi?",
          opzioni: [
            "I'm not buying that.",
            "I'm not selling that.",
            "I'm not paying that.",
          ],
          giusta: 0,
          spiegazione:
            "Buy, in senso figurato, vuol dire credere: I'm not buying that = non ci credo.",
          rivedi: "I'M NOT BUYING IT",
        },
        {
          tipo: "sceltaMultipla",
          domanda: '"A likely story!" Cosa pensa chi lo dice?',
          opzioni: [
            "Che la storia è probabile",
            "Che la storia è bella",
            "Che la storia è una bugia",
          ],
          giusta: 2,
          spiegazione:
            'È ironico: alla lettera "una storia probabile", ma significa "sì, come no".',
          rivedi: "TOO GOOD TO BE TRUE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: '"She fell for him." Cosa è successo?',
          opzioni: [
            "Si è innamorata di lui",
            "È caduta su di lui",
            "Lui l'ha ingannata",
          ],
          giusta: 0,
          spiegazione:
            "Fall for someone = innamorarsi. Fall for something (a trick, a lie) = cascarci.",
          rivedi: "FALL FOR IT",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Qualcosa nel contratto non ti convince. Cosa dici?",
          opzioni: [
            "It's too good to be true.",
            "There's something fishy about it.",
            "I'll take your word for it.",
          ],
          giusta: 1,
          spiegazione: "Fishy = sospetto: qualcosa non quadra.",
          rivedi: "SOMETHING FISHY",
        },
        { tipo: "sottotitolo", testo: "Completa" },
        {
          tipo: "completa",
          consegna: 'Completa: "Non sono nato ieri".',
          prima: "I wasn't born",
          dopo: ".",
          risposte: ["yesterday"],
          spiegazione: "I wasn't born yesterday: come in italiano.",
          rivedi: "I'M NOT BUYING IT",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Fidati di me".',
          prima: "Take my",
          dopo: "for it.",
          risposte: ["word"],
          spiegazione: "Take someone's word for it: credere sulla parola.",
          rivedi: "TAKE MY WORD FOR IT",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "concedergli il beneficio del dubbio".',
          prima: "Let's give him the benefit of the",
          dopo: ".",
          risposte: ["doubt"],
          spiegazione: "The benefit of the doubt: come in italiano.",
          rivedi: "TAKE MY WORD FOR IT",
        },
        {
          tipo: "riordina",
          consegna: 'Traduci "Ci è cascato in pieno".',
          parole: ["sinker", "it", "line", "fell", "he", "hook,", "for", "and"],
          soluzione: [
            "he",
            "fell",
            "for",
            "it",
            "hook,",
            "line",
            "and",
            "sinker",
          ],
          spiegazione:
            "Hook, line and sinker: amo, lenza e piombo, cioè tutto.",
          rivedi: "FALL FOR IT",
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
            "Mi ha detto che aveva perso il telefono, ma non me la bevo: qui qualcosa non quadra.",
          soluzione:
            "He told me he had lost his phone, but I'm not buying it: there's something fishy here.",
          spiegazione:
            "Il discorso indiretto vuole il past perfect (he had lost: lezione 41{2}), poi i due idiomi: I'm not buying it e something fishy.",
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
