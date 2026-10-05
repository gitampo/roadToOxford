import { Lezione } from "@/types/lezione";

// James Joyce, The Dead, da Dubliners (1914): l'ultimo paragrafo,
// pubblico dominio. Una riga per ogni frase o parte di frase
const BRANO = [
  "A few light taps upon the pane made him turn to the window.",
  "It had begun to snow again.",
  "He watched sleepily the flakes, silver and dark, falling obliquely against the lamplight.",
  "The time had come for him to set out on his journey westward.",
  "Yes, the newspapers were right: snow was general all over Ireland.",
  "It was falling on every part of the dark central plain, on the treeless hills,",
  "falling softly upon the Bog of Allen and, farther westward, softly falling into the dark mutinous Shannon waves.",
  "It was falling, too, upon every part of the lonely churchyard on the hill where Michael Furey lay buried.",
  "It lay thickly drifted on the crooked crosses and headstones, on the spears of the little gate, on the barren thorns.",
  "His soul swooned slowly as he heard the snow falling faintly through the universe",
  "and faintly falling, like the descent of their last end, upon all the living and the dead.",
];

const BRANO_TRADUZIONE = [
  "Qualche colpo leggero sul vetro lo fece voltare verso la finestra.",
  "Aveva ricominciato a nevicare.",
  "Guardò assonnato i fiocchi, argentei e scuri, cadere obliqui contro la luce del lampione.",
  "Era venuto per lui il momento di mettersi in viaggio verso occidente.",
  "Sì, i giornali avevano ragione: nevicava su tutta l'Irlanda.",
  "La neve cadeva su ogni parte della buia pianura centrale, sulle colline senza alberi,",
  "cadeva lieve sulla palude di Allen e, più a ovest, lieve cadeva nelle onde scure e ribelli dello Shannon.",
  "Cadeva anche su ogni parte del cimitero solitario sulla collina dove giaceva sepolto Michael Furey.",
  "Si posava in cumuli spessi sulle croci storte e sulle lapidi, sulle punte del piccolo cancello, sui rovi spogli.",
  "La sua anima svenne lentamente mentre udiva la neve cadere lieve attraverso l'universo",
  "e lieve cadere, come la discesa della loro ultima fine, su tutti i vivi e i morti.",
];

export const theDead: Lezione = {
  id: "the-dead",
  titolo: "The Dead: la neve",
  descrizione: "L'ultima pagina di Dubliners: lettura, analisi ed esercizi",
  chiavi: "Joyce, Dubliners, modernismo, epifania, paralisi",
  livello: "Letteratura",
  sottotitolo: "Modulo C7 · James Joyce",
  citazione: {
    testo: "Snow was general all over Ireland.",
    fonte: "James Joyce, The Dead (1914)",
    traduzione: "Nevicava su tutta l'Irlanda.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "È l'ultimo paragrafo di The Dead, il racconto che chiude Dubliners, ed è una delle pagine più belle della prosa inglese. Lo abbiamo diviso in righe, una per ogni frase o parte di frase. Leggilo lentamente, ad alta voce se puoi: ha la musica di una poesia. Nei riquadri successivi lo analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: BRANO,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "James Joyce (1882–1941), irlandese, passò quasi tutta la vita all'estero, a Trieste, Zurigo e Parigi (lezione C7{3}). Dubliners (1914) raccoglie quindici racconti sulla vita a Dublino. Il tema comune è la paralisi: personaggi che vorrebbero cambiare vita, partire, amare, e non ci riescono.",
        },
        {
          tipo: "testo",
          testo:
            "The Dead è il racconto più lungo. Durante la festa annuale di due anziane zie, nei giorni dell'Epifania, Gabriel Conroy, un professore sicuro di sé, guarda la moglie Gretta con desiderio. Ma in albergo lei gli confessa di pensare a Michael Furey, un ragazzo che l'aveva amata quando era giovane, a Galway, nell'ovest dell'Irlanda: lui era malato e morì a diciassette anni, dopo essere rimasto sotto la pioggia davanti alla sua finestra. Gabriel capisce di non aver mai provato, né suscitato, un amore così.",
        },
        {
          tipo: "nota",
          testo:
            "Joyce chiamava epifania il momento improvviso in cui un personaggio, o il lettore, vede la verità di una situazione. Questo paragrafo è l'epifania di Gabriel: mentre la moglie dorme, lui guarda la neve.",
        },
      ],
    },
    {
      titolo: "LE PAROLE DELLA NEVE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'inglese di Joyce è moderno, ma ricchissimo. Ecco le parole che ti servono:",
        },
        {
          tipo: "tabella",
          righe: [
            ["taps", "colpetti, piccoli colpi"],
            ["pane", "vetro della finestra"],
            ["flakes", "fiocchi (di neve)"],
            ["obliquely", "di traverso, obliqui"],
            ["set out", "mettersi in viaggio, partire"],
            ["westward", "verso ovest"],
            ["bog", "palude, torbiera (tipica dell'Irlanda)"],
            ["mutinous", "ribelle, ammutinato"],
            ["churchyard", "cimitero vicino a una chiesa"],
            ["drifted", "ammucchiato dal vento (snowdrift = cumulo di neve)"],
            ["headstones", "lapidi"],
            ["thorns", "spine, rovi"],
            ["swooned", "svenne, venne meno"],
            ["faintly", "debolmente, lievemente"],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 1–4: LA FINESTRA",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [0, 3],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Qualche colpetto sul vetro: è ricominciato a nevicare. Gabriel guarda i fiocchi cadere obliqui nella luce del lampione. Poi un pensiero: è venuto il momento di partire per il suo viaggio verso ovest. È un viaggio vero? È il viaggio verso Galway, verso il passato della moglie? O è il viaggio verso la morte?",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "made him turn to the window",
              it: 'make + persona + verbo base: "lo fecero voltare" (lezione 46{5})',
            },
            {
              en: "It had begun to snow again",
              it: "past perfect: un'azione cominciata prima del momento del racconto (lezione 37{1})",
            },
            {
              en: "He watched sleepily the flakes… falling",
              it: "watch + oggetto + -ing (lezione 13{5}); l'avverbio tra verbo e oggetto è insolito: Joyce lo fa apposta",
            },
            {
              en: "The time had come for him to set out",
              it: 'for + persona + to + verbo: "il momento per lui di partire"',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Di solito l'avverbio non si mette tra il verbo e il suo oggetto: si dice He watched the flakes sleepily (lezione 33{5}). Joyce rompe la regola per far arrivare sleepily subito, insieme allo sguardo di Gabriel.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "antithesis (antitesi)",
              "silver and dark: i fiocchi sono insieme luminosi e scuri",
            ],
            [
              "symbol (simbolo)",
              "his journey westward: l'ovest è Galway, il passato, ma anche la morte",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 5–7: LA NEVE SU TUTTA L'IRLANDA",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [4, 6],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "I giornali l'avevano detto: nevica su tutta l'Irlanda. Lo sguardo di Gabriel esce dalla stanza e si allarga sulla carta geografica del paese: la grande pianura centrale, le colline spoglie, le paludi, fino al fiume Shannon, a ovest. La neve copre tutto, senza distinzioni.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Yes, the newspapers were right",
              it: "discorso indiretto libero: sono i pensieri di Gabriel, non le parole del narratore",
            },
            {
              en: "It was falling on every part…",
              it: "past continuous: lo sfondo, un'azione che continua (lezione 35{5})",
            },
            {
              en: "falling softly… softly falling",
              it: "le stesse due parole in ordine inverso",
            },
            {
              en: "the dark mutinous Shannon waves",
              it: "più aggettivi prima del nome; Shannon fa da aggettivo, come un nome di luogo (lezione 4{6})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Treeless (senza alberi): il suffisso -less vuol dire "senza", come in homeless, useless. Westward (verso ovest): il suffisso -ward indica la direzione, come in forward, backward, homeward.',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "anaphora (anafora)",
              "falling… falling… falling: la parola torna come i fiocchi",
            ],
            ["chiasmus (chiasmo)", "falling softly / softly falling"],
            [
              "personification (personificazione)",
              "mutinous Shannon waves: le onde del fiume sono ribelli",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 8–9: IL CIMITERO",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [7, 8],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Il viaggio dello sguardo arriva a destinazione: il piccolo cimitero sulla collina, nell'ovest, dove è sepolto Michael Furey, il ragazzo amato da Gretta. La neve si ammucchia sulle croci storte, sulle lapidi, sulle punte del cancello, sui rovi. Croci, punte e spine: sono le immagini della Passione di Cristo.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "the churchyard… where Michael Furey lay buried",
              it: 'relativa con where per un luogo (lezione 44{1}); lie + participio: "giaceva sepolto"',
            },
            {
              en: "It lay thickly drifted",
              it: 'lie + participio + avverbio: "si posava ammucchiata"; lay = passato di lie (lezione 23{3})',
            },
            {
              en: "on the crooked crosses…, on the spears…, on the barren thorns",
              it: "tre complementi uguali in fila, come tre colpi",
            },
          ],
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["anaphora (anafora)", "on… on… on…"],
            ["alliteration (allitterazione)", "crooked crosses: due C dure"],
            [
              "symbol (simbolo)",
              "crosses, spears, thorns: le immagini della crocifissione, il sacrificio di Michael Furey",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 10–11: L'ULTIMA FRASE",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [9, 10],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "L'anima di Gabriel si scioglie, sviene lentamente, mentre sente la neve cadere lieve su tutto l'universo, come la discesa della fine ultima di tutti, sui vivi e sui morti. La neve unisce tutto: Gabriel e Michael Furey, il presente e il passato, i vivi e i morti. Il titolo del racconto, The Dead, si chiarisce nell'ultima parola.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "as he heard the snow falling",
              it: "as = mentre; hear + oggetto + -ing: sentire qualcosa mentre accade (lezione 13{5})",
            },
            {
              en: "like the descent of their last end",
              it: "like + nome: similitudine",
            },
            {
              en: "all the living and the dead",
              it: "the + aggettivo = categoria di persone: i vivi e i morti (lezione 3{6})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Hear the snow falling (con -ing) descrive un'azione in corso, che continua; hear the snow fall (verbo base) descriverebbe un'azione intera, conclusa. Joyce sceglie -ing: la neve non smette mai di cadere.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "chiasmus (chiasmo)",
              "falling faintly / faintly falling: le parole si rispecchiano, come i fiocchi che scendono",
            ],
            [
              "alliteration (allitterazione)",
              "soul swooned slowly; falling faintly: le S e le F sono suoni morbidi, sussurrati",
            ],
            ["simile (similitudine)", "like the descent of their last end"],
            [
              "antithesis (antitesi)",
              "the living and the dead: le ultime parole uniscono i due mondi",
            ],
          ],
        },
      ],
    },
    {
      titolo: "L'EPIFANIA E LA MUSICA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutto il paragrafo, guarda il movimento dello sguardo: dalla finestra all'Irlanda intera, poi al cimitero di Michael Furey, infine all'universo. È come una macchina da presa che si allontana sempre di più.",
        },
        {
          tipo: "tabella",
          righe: [
            ["la stanza (frasi 1–4)", "la finestra, i fiocchi, il viaggio"],
            ["il paese (frasi 5–7)", "la neve su tutta l'Irlanda"],
            ["il cimitero (frasi 8–9)", "la tomba del ragazzo morto per amore"],
            ["l'universo (frasi 10–11)", "i vivi e i morti, uniti dalla neve"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "La neve è un simbolo con molti significati: la morte, che tocca tutti; la paralisi dell'Irlanda; ma anche una pace che unisce e perdona. Joyce non sceglie per il lettore: lascia aperti tutti i significati.",
        },
        {
          tipo: "nota",
          testo:
            "Questa è prosa che suona come poesia: ripetizioni, chiasmi, allitterazioni. Joyce porterà queste tecniche all'estremo nell'Ulisse (1922), dove la lingua stessa diventa la protagonista.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato frase per frase, rileggi tutto il paragrafo con la traduzione. Leggi l'ultima frase ad alta voce, piano: senti la neve che cade. Sotto trovi il riepilogo delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "antithesis (antitesi)",
              "silver and dark (frase 3), the living and the dead (frase 11)",
            ],
            [
              "symbol (simbolo)",
              "the journey westward (frase 4), the snow, crosses and thorns (frase 9)",
            ],
            [
              "anaphora (anafora)",
              "falling… falling (frasi 6–8), on… on… on (frase 9)",
            ],
            [
              "chiasmus (chiasmo)",
              "falling softly / softly falling (frase 7), falling faintly / faintly falling (frasi 10–11)",
            ],
            [
              "personification (personificazione)",
              "mutinous Shannon waves (frase 7)",
            ],
            [
              "alliteration (allitterazione)",
              "crooked crosses (frase 9), soul swooned slowly (frase 10)",
            ],
            [
              "simile (similitudine)",
              "like the descent of their last end (frase 11)",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Tutte le figure lavorano sul suono: il paragrafo è costruito per essere ascoltato, lentamente, come la neve.",
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
          testo: "Comprensione",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Chi è Michael Furey?",
          opzioni: [
            "Il fratello di Gabriel",
            "Un ragazzo che aveva amato Gretta da giovane, morto a diciassette anni",
            "Un giornalista",
          ],
          giusta: 1,
          spiegazione:
            "La confessione di Gretta su Michael Furey provoca l'epifania di Gabriel.",
          rivedi: "IL CONTESTO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Dove si posa la neve, alla fine del racconto?",
          opzioni: [
            "Solo sulla casa di Gabriel",
            "Solo sulle montagne",
            "Su tutta l'Irlanda, sul cimitero, su tutti i vivi e i morti",
          ],
          giusta: 2,
          spiegazione:
            "Lo sguardo si allarga dalla finestra all'universo: la neve unisce tutto.",
          rivedi: "L'EPIFANIA E LA MUSICA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cos'è un'epifania, per Joyce?",
          opzioni: [
            "Il momento improvviso in cui un personaggio vede la verità",
            "Una festa religiosa",
            "Un tipo di rima",
          ],
          giusta: 0,
          spiegazione:
            "Il racconto è ambientato nei giorni della festa dell'Epifania, ma per Joyce l'epifania è soprattutto una rivelazione interiore.",
          rivedi: "IL CONTESTO",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola al suo significato.",
          coppie: [
            ["pane", "vetro della finestra"],
            ["flakes", "fiocchi"],
            ["headstones", "lapidi"],
            ["swooned", "svenne"],
            ["faintly", "lievemente"],
          ],
          rivedi: "LE PAROLE DELLA NEVE",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi con l'avverbio nella posizione normale.",
          citazione: "He watched sleepily the flakes",
          parole: ["flakes", "watched", "sleepily", "he", "the"],
          soluzione: ["he", "watched", "the", "flakes", "sleepily"],
          spiegazione:
            "Di solito l'avverbio non va tra il verbo e l'oggetto (lezione 33{5}). Joyce rompe la regola per dare risalto a sleepily.",
          rivedi: "FRASI 1–4: LA FINESTRA",
        },
        {
          tipo: "riordina",
          consegna: "Ricomponi la frase più famosa del racconto.",
          citazione: "I giornali avevano ragione: nevicava su tutta l'Irlanda.",
          parole: ["Ireland", "all", "general", "snow", "over", "was"],
          soluzione: ["snow", "was", "general", "all", "over", "Ireland"],
          spiegazione:
            "All over + luogo = in tutto il luogo: all over the world, all over Ireland.",
          rivedi: "FRASI 5–7: LA NEVE SU TUTTA L'IRLANDA",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che tempo verbale è "It had begun to snow again"?',
          opzioni: [
            "Past simple",
            "Past perfect",
            "Present perfect",
            "Past continuous",
          ],
          giusta: 1,
          spiegazione:
            "Had + participio: past perfect. La neve era ricominciata prima che Gabriel se ne accorgesse (lezione 37{1}).",
          rivedi: "FRASI 1–4: LA FINESTRA",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Perché Joyce scrive "heard the snow falling" e non "heard the snow fall"?',
          opzioni: [
            "Non c'è differenza",
            "Perché fall è irregolare",
            "Con -ing l'azione è in corso, continua: la neve non smette di cadere",
          ],
          giusta: 2,
          spiegazione:
            "Hear + oggetto + -ing: un'azione in corso; con il verbo base sarebbe un'azione intera (lezione 13{5}).",
          rivedi: "FRASI 10–11: L'ULTIMA FRASE",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "lo fecero voltare verso la finestra".',
          prima: "A few light taps upon the pane made him",
          dopo: "to the window.",
          risposte: ["turn"],
          spiegazione: "Make + persona + verbo base, senza to (lezione 46{5}).",
          rivedi: "FRASI 1–4: LA FINESTRA",
        },
        {
          tipo: "sottotitolo",
          testo: "Suoni e figure",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le parole che formano il chiasmo dell'ultima frase.",
          parole: [
            "the",
            "snow",
            "falling",
            "faintly",
            "through",
            "the",
            "universe",
            "and",
            "faintly",
            "falling",
          ],
          giuste: [2, 3, 8, 9],
          spiegazione:
            "Falling faintly / faintly falling: le stesse parole in ordine inverso, come uno specchio.",
          rivedi: "FRASI 10–11: L'ULTIMA FRASE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["chiasmus", "softly falling / falling softly"],
            ["personification", "mutinous Shannon waves"],
            ["alliteration", "soul swooned slowly"],
            ["simile", "like the descent of their last end"],
          ],
          rivedi: "RILEGGILO",
        },
        {
          tipo: "sottotitolo",
          testo: "Traduci e scrivi",
        },
        {
          tipo: "testo",
          testo:
            "Questi due esercizi non hanno un punteggio: non esiste un'unica risposta giusta. Scrivi la tua versione e confrontala con quella proposta.",
        },
        {
          tipo: "traduci",
          consegna: "Traduci in italiano l'ultima frase.",
          testo:
            "His soul swooned slowly as he heard the snow falling faintly through the universe and faintly falling, like the descent of their last end, upon all the living and the dead.",
          soluzione:
            "La sua anima svanì lentamente mentre ascoltava la neve cadere lieve attraverso l'universo e lieve cadere, come la discesa della loro ultima fine, su tutti i vivi e i morti.",
          spiegazione:
            'Hai mantenuto il chiasmo "cadere lieve / lieve cadere"? È il cuore musicale della frase: senza, si perde metà della sua bellezza.',
          rivedi: "FRASI 10–11: L'ULTIMA FRASE",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of the final paragraph of The Dead.",
          punti: [
            "the movement from the window to the universe",
            "the symbol of the snow",
            "sound effects (chiasmus, alliteration)",
            "the epiphany",
          ],
          modello:
            'The final paragraph of The Dead moves from Gabriel\'s window to the whole of Ireland, then to Michael Furey\'s grave, and finally to "the universe". The snow is a complex symbol: it suggests death, the paralysis of Ireland, and a peace that unites everyone, "all the living and the dead". Joyce writes prose that sounds like poetry, with the chiasmus "falling faintly… faintly falling" and soft alliteration in "his soul swooned slowly". The passage is Gabriel\'s epiphany: he understands that he has never known a love as strong as Michael Furey\'s.',
          spiegazione:
            "Hai citato il testo e usato termini come symbol, chiasmus ed epiphany? Sono le cose che un esaminatore cerca.",
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
