import { Lezione } from "@/types/lezione";

export const emozioni: Lezione = {
  id: "M6",
  titolo: "Emozioni e stati d'animo",
  descrizione: "Felicità, tristezza, nervosismo e rabbia",
  chiavi:
    "over the moon, feel blue, butterflies in my stomach, lose your temper",
  livello: "Modi di dire",
  citazione: {
    testo: "Keep your chin up.",
    fonte: "Modo di dire inglese",
    traduzione: "Su con la vita.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "OVER THE MOON",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Over the moon vuol dire felicissimo, entusiasta. È molto britannico, tipico dei calciatori dopo una vittoria. Ricorda la filastrocca in cui "the cow jumped over the moon": una gioia così grande da saltare sopra la luna.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "She was over the moon when she got into Oxford.",
              it: "Era al settimo cielo quando l'hanno presa a Oxford.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            'On cloud nine ha lo stesso significato ed è più americano. È il nostro "al settimo cielo": cambia solo il numero.',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Since the wedding, they've been on cloud nine.",
              it: "Dal matrimonio sono al settimo cielo.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Attenzione al numero: in inglese cloud nine, non cloud seven.",
        },
      ],
    },
    {
      titolo: "FEEL BLUE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In inglese il blu è il colore della tristezza: feel blue vuol dire sentirsi giù, malinconici. Da qui viene anche il blues, la musica della malinconia. Per un italiano è una trappola: da noi il blu non ha questo significato.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I'm feeling a bit blue today.",
              it: "Oggi sono un po' giù.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Down in the dumps significa la stessa cosa, in modo informale: giù di morale, abbattuto.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "He's been down in the dumps since he lost his job.",
              it: "È giù di morale da quando ha perso il lavoro.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Anche gli altri colori cambiano significato: green with envy (verde d'invidia, non di rabbia), see red (vedere rosso, arrabbiarsi: qui siamo uguali).",
        },
      ],
    },
    {
      titolo: "BUTTERFLIES IN MY STOMACH",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Have butterflies in your stomach è un falso amico. In italiano le farfalle nello stomaco sono quasi sempre l'innamoramento; in inglese sono soprattutto l'agitazione prima di una prova: un esame, un colloquio, un discorso in pubblico.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I always get butterflies before an exam.",
              it: "Prima di un esame ho sempre un nodo allo stomaco.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Get cold feet vuol dire perdere il coraggio all'ultimo momento e tirarsi indietro da una cosa già decisa. Il caso classico è chi scappa prima del matrimonio.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "He got cold feet the night before the wedding.",
              it: "La sera prima del matrimonio si è tirato indietro per la paura.",
            },
          ],
        },
      ],
    },
    {
      titolo: "LOSE YOUR TEMPER",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Lose your temper vuol dire perdere la pazienza, arrabbiarsi all'improvviso. Il temper è il controllo del proprio umore: chi lo perde esplode. Il contrario è keep your temper (mantenere la calma).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I'm sorry I lost my temper.",
              it: "Scusa se ho perso la pazienza.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Blow off steam (in britannico let off steam) vuol dire sfogarsi, scaricare la tensione, come una pentola a pressione che fa uscire il vapore. Si usa per lo sport, le urla, una corsa.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I go running to let off steam.",
              it: "Vado a correre per sfogarmi.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il possessivo segue il soggetto: I lost my temper, she lost her temper. Non si dice lose the temper.",
        },
      ],
    },
    {
      titolo: "KEEP YOUR CHIN UP",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Keep your chin up vuol dire non scoraggiarsi: tieni alto il mento, come chi affronta le difficoltà a testa alta. In italiano: "su con la vita", "non mollare". Spesso basta chin up!',
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Chin up! You'll pass next time.",
              it: "Su con la vita! La prossima volta lo passi.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Hang in there vuol dire tieni duro, resisti: aggrappati, non lasciare la presa. È informale e si dice a chi sta passando un periodo difficile.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I know it's hard, but hang in there.",
              it: "Lo so che è dura, ma tieni duro.",
            },
          ],
        },
      ],
    },
    {
      titolo: "AT THE END OF MY TETHER",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Be at the end of your tether (in americano at the end of your rope) vuol dire non poterne più, aver esaurito la pazienza o le forze. Il tether è la corda che lega un animale al palo: arrivato in fondo, non può andare oltre.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Three nights without sleep: I'm at the end of my tether.",
              it: "Tre notti senza dormire: non ce la faccio più.",
            },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Drive someone up the wall vuol dire far impazzire qualcuno, esasperarlo, tanto da fargli venire voglia di arrampicarsi sui muri. È informale.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "That noise is driving me up the wall!",
              it: "Quel rumore mi sta facendo impazzire!",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Simili: drive someone crazy, drive someone mad. Per l'ultima goccia che fa traboccare il vaso c'è the last straw (lezione 55{4}).",
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
            ["over the moon", "felicissimo"],
            ["feel blue", "essere giù"],
            ["get cold feet", "tirarsi indietro per paura"],
            ["let off steam", "sfogarsi"],
            ["hang in there", "tieni duro"],
          ],
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Un amico inglese dice: "I\'ve got butterflies." Domani ha un colloquio. Cosa prova?',
          opzioni: ["È innamorato", "È agitato", "Ha mal di stomaco"],
          giusta: 1,
          spiegazione:
            "In inglese le butterflies sono soprattutto il nervosismo prima di una prova, non l'innamoramento.",
          rivedi: "BUTTERFLIES IN MY STOMACH",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come si dice "al settimo cielo"?',
          opzioni: ["on cloud seven", "on cloud nine", "on the seventh sky"],
          giusta: 1,
          spiegazione: "In inglese il numero è nove: on cloud nine.",
          rivedi: "OVER THE MOON",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale frase è corretta?",
          opzioni: [
            "She lost the temper.",
            "She lost her temper.",
            "She lost temper.",
          ],
          giusta: 1,
          spiegazione:
            "Lose your temper vuole il possessivo del soggetto: her temper.",
          rivedi: "LOSE YOUR TEMPER",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            '"The neighbours\' music is driving me up the wall." Come ti senti?',
          opzioni: ["Esasperato", "Allegro", "Coraggioso"],
          giusta: 0,
          spiegazione: "Drive someone up the wall: far impazzire, esasperare.",
          rivedi: "AT THE END OF MY TETHER",
        },
        { tipo: "sottotitolo", testo: "Completa" },
        {
          tipo: "completa",
          consegna: 'Completa: "Su con la vita!"',
          prima: "Keep your",
          dopo: "up!",
          risposte: ["chin"],
          spiegazione: "Keep your chin up: tieni alto il mento.",
          rivedi: "KEEP YOUR CHIN UP",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Oggi sono un po\' giù".',
          prima: "I'm feeling a bit",
          dopo: "today.",
          risposte: ["blue", "down"],
          spiegazione:
            "Feel blue: in inglese il blu è il colore della tristezza.",
          rivedi: "FEEL BLUE",
        },
        {
          tipo: "riordina",
          consegna: 'Traduci "Non ce la faccio più".',
          parole: ["tether", "at", "my", "of", "I'm", "the", "end"],
          soluzione: ["I'm", "at", "the", "end", "of", "my", "tether"],
          spiegazione: "At the end of my tether: arrivato in fondo alla corda.",
          rivedi: "AT THE END OF MY TETHER",
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
            "Prima dell'esame ero agitatissimo, ma quando ho visto il voto ero al settimo cielo.",
          soluzione:
            "Before the exam I had butterflies in my stomach, but when I saw the mark I was over the moon.",
          spiegazione:
            "Butterflies per l'agitazione, over the moon (o on cloud nine) per la gioia. Il voto scolastico è mark in britannico, grade in americano.",
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
