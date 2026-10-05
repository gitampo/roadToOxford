import { Lezione } from "@/types/lezione";

// Lewis Carroll, Alice's Adventures in Wonderland (1865), capitolo 1:
// l'inizio, pubblico dominio. Una riga per ogni frase o parte di frase
const BRANO = [
  "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do:",
  "once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it,",
  '"and what is the use of a book," thought Alice, "without pictures or conversations?"',
  "So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid),",
  "whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies,",
  "when suddenly a White Rabbit with pink eyes ran close by her.",
  "There was nothing so very remarkable in that;",
  'nor did Alice think it so very much out of the way to hear the Rabbit say to itself, "Oh dear! Oh dear! I shall be late!"',
  "(when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural);",
  "but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on,",
  "Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it,",
  "and burning with curiosity, she ran across the field after it,",
  "and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.",
];

const BRANO_TRADUZIONE = [
  "Alice cominciava a essere molto stanca di stare seduta accanto alla sorella sulla riva, senza niente da fare:",
  "una volta o due aveva sbirciato nel libro che la sorella stava leggendo, ma non c'erano figure né dialoghi,",
  "«e a che cosa serve un libro», pensò Alice, «senza figure né dialoghi?»",
  "Così stava valutando tra sé (come meglio poteva, perché il caldo la faceva sentire molto assonnata e intontita)",
  "se il piacere di fare una ghirlanda di margherite valesse la fatica di alzarsi e raccogliere le margherite,",
  "quando all'improvviso un Coniglio Bianco con gli occhi rosa le passò di corsa vicinissimo.",
  "Non c'era niente di così straordinario in questo;",
  "né Alice trovò così strano sentire il Coniglio dire tra sé: «Povero me! Povero me! Farò tardi!»",
  "(quando ci ripensò, più tardi, le venne in mente che avrebbe dovuto stupirsene, ma sul momento tutto le era sembrato del tutto naturale);",
  "ma quando il Coniglio tirò fuori un orologio dal taschino del panciotto, lo guardò e poi corse via,",
  "Alice balzò in piedi, perché le balenò in mente che non aveva mai visto prima un coniglio con un taschino nel panciotto, né con un orologio da tirarne fuori,",
  "e, bruciando di curiosità, gli corse dietro attraverso il prato,",
  "e per fortuna fece appena in tempo a vederlo infilarsi in una grande tana sotto la siepe.",
];

export const alice: Lezione = {
  id: "alice",
  titolo: "Alice nel Paese delle Meraviglie",
  descrizione:
    "Il Coniglio Bianco e l'inizio di tutto: lettura, analisi ed esercizi",
  chiavi: "Lewis Carroll, Alice, nonsense, Oxford, letteratura per l'infanzia",
  livello: "Letteratura",
  sottotitolo: "Modulo C8 · Lewis Carroll",
  citazione: {
    testo: "And what is the use of a book without pictures or conversations?",
    fonte: "Lewis Carroll, Alice's Adventures in Wonderland (1865)",
    traduzione: "E a che cosa serve un libro senza figure né dialoghi?",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Sono i primi due paragrafi del libro: in poche righe Alice si annoia, vede un coniglio e lo segue nella tana. Li abbiamo divisi in righe, una per ogni frase o parte di frase. Leggili tutti una volta: le frasi sono lunghe, ma la storia è semplice. Nei riquadri successivi li analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
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
            "Lewis Carroll è lo pseudonimo di Charles Lutwidge Dodgson (1832–1898), che insegnava matematica a Oxford, al Christ Church College (lezione C8{5}). Il 4 luglio 1862 andò in barca sul Tamigi, da Oxford a Godstow, con le tre figlie del decano del college: Lorina, Alice ed Edith Liddell. Per farle divertire inventò una storia, e la piccola Alice gli chiese di scriverla.",
        },
        {
          tipo: "testo",
          testo:
            "Il libro uscì nel 1865, con le illustrazioni di John Tenniel. Era diverso da tutti i libri per bambini dell'epoca, che dovevano insegnare la morale: Alice è puro divertimento, pieno di giochi di parole, logica assurda e personaggi bizzarri. È il capolavoro del nonsense.",
        },
        {
          tipo: "nota",
          testo:
            "A Oxford si possono ancora vedere i luoghi di Alice: la grande sala da pranzo di Christ Church, il giardino del decano e, in centro, un negozio, Alice's Shop, che ispirò un episodio del secondo libro.",
        },
      ],
    },
    {
      titolo: "LE PAROLE DI ALICE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "L'inglese di Carroll è moderno e chiaro, ma con qualche espressione vittoriana:",
        },
        {
          tipo: "tabella",
          righe: [
            ["the bank", "la riva (di un fiume), non la banca"],
            ["peeped", "sbirciò"],
            ["a daisy-chain", "una ghirlanda di margherite"],
            ["worth the trouble", "che vale la pena, la fatica"],
            ["remarkable", "notevole, straordinario"],
            ["out of the way", "insolito, strano"],
            ["Oh dear!", "Povero me! Oh cielo!"],
            ["a waistcoat-pocket", "il taschino del panciotto"],
            ["started to her feet", "balzò in piedi"],
            ["a hedge", "una siepe"],
            ["pop down", "infilarsi giù, sparire di colpo"],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Bank ha due significati: "banca" e "riva di un fiume". Il contesto (her sister on the bank, in campagna) ti dice quale.',
        },
      ],
    },
    {
      titolo: "FRASI 1–3: LA NOIA",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [0, 2],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Alice è seduta sulla riva del fiume accanto alla sorella, e si annoia. Ha sbirciato nel libro della sorella, ma non ci sono figure né dialoghi: a che cosa serve un libro così? La domanda, con la logica perfetta di una bambina, è anche una battuta di Carroll sui libri noiosi dei grandi.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Alice was beginning to get very tired",
              it: "past continuous per lo sfondo della storia (lezione 35{5}); get + aggettivo = diventare",
            },
            {
              en: "tired of sitting… and of having nothing to do",
              it: "dopo of il verbo va in -ing (lezione 48{4}); nothing to do (lezione 18{4})",
            },
            {
              en: "she had peeped into the book her sister was reading",
              it: "past perfect (lezione 37{1}); relativa senza pronome: the book (that) her sister was reading (lezione 44{3})",
            },
            {
              en: "what is the use of a book…?",
              it: 'what is the use of + nome o -ing: "a che cosa serve"',
            },
            {
              en: "thought Alice",
              it: "dopo le parole riportate il verbo può venire prima del soggetto",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "What's the use of…? si usa moltissimo ancora oggi: What's the use of worrying? (a che serve preoccuparsi?). Spesso vuol dire che una cosa è inutile.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "rhetorical question (domanda retorica)",
              "what is the use of a book without pictures or conversations?",
            ],
            [
              "irony (ironia)",
              "Carroll, autore di un libro, prende in giro i libri noiosi",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 4–6: IL CONIGLIO BIANCO",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [3, 5],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Alice, assonnata per il caldo, si chiede se valga la pena alzarsi per fare una ghirlanda di margherite. Una decisione minuscola, presa con grande serietà. Ed ecco che, all'improvviso, un coniglio bianco con gli occhi rosa le passa di corsa vicino.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "she was considering… whether…",
              it: "whether = se, in una domanda indiretta (lezione 42{5})",
            },
            {
              en: "the hot day made her feel very sleepy",
              it: 'make + persona + verbo base: "la faceva sentire" (lezione 46{5})',
            },
            {
              en: "would be worth the trouble of getting up",
              it: 'worth + nome o -ing: "valere la pena"; of + -ing (lezione 48{4})',
            },
            {
              en: "when suddenly a White Rabbit… ran close by her",
              it: 'past continuous interrotto dal past simple: "stava valutando quando passò" (lezione 35{3})',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "La struttura was doing… when… did è la più classica per raccontare un imprevisto: I was sleeping when the phone rang. Carroll la usa per far entrare il fantastico nella vita di tutti i giorni.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "parenthesis (inciso)",
              "(as well as she could, for the hot day…): il narratore commenta, con un sorriso",
            ],
            [
              "bathos (abbassamento)",
              "una lunga riflessione per decidere… una ghirlanda di margherite",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 7–9: NIENTE DI STRANO?",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [6, 8],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Il narratore fa finta di niente: un coniglio che passa, niente di strano. E nemmeno sentirlo parlare, mentre dice tra sé che farà tardi, sembra strano ad Alice. Solo dopo, ripensandoci, capirà che avrebbe dovuto stupirsi. Ma sul momento tutto le sembrava naturale, come succede nei sogni.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "nor did Alice think it so very much out of the way",
              it: "dopo nor l'ausiliare va prima del soggetto: nor did Alice think (lezione 53{2})",
            },
            {
              en: "to hear the Rabbit say to itself",
              it: "hear + oggetto + verbo base: sentire un'azione intera (lezione 13{5}); itself per un animale",
            },
            {
              en: "I shall be late!",
              it: "shall = will con I e we, più britannico (lezione 28{1})",
            },
            {
              en: "it occurred to her that she ought to have wondered",
              it: "it occurred to her = le venne in mente; ought to have + participio = avrebbe dovuto (lezione 51{2})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Ought to have wondered funziona come should have wondered: un rimprovero o un rimpianto sul passato, qualcosa che si sarebbe dovuto fare e non si è fatto.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "understatement",
              "There was nothing so very remarkable in that: un coniglio parlante descritto come una cosa normale",
            ],
            [
              "irony (ironia)",
              "il narratore sa che è strano, Alice no: il lettore sorride",
            ],
          ],
        },
      ],
    },
    {
      titolo: "FRASI 10–13: L'INSEGUIMENTO",
      blocchi: [
        {
          tipo: "brano",
          righe: BRANO,
          traduzione: BRANO_TRADUZIONE,
          evidenzia: [9, 12],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Ma quando il coniglio tira fuori un orologio dal taschino del panciotto, Alice balza in piedi: un coniglio con il panciotto, e con un orologio, non l'aveva mai visto! Bruciando di curiosità, lo insegue attraverso il prato, e fa appena in tempo a vederlo sparire in una tana sotto la siepe. Comincia l'avventura.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "took a watch out of its waistcoat-pocket",
              it: "take out of: tirare fuori da; its per un animale (lezione 5{4})",
            },
            {
              en: "and looked at it, and then hurried on",
              it: "and… and… and then: azioni rapide, una dopo l'altra",
            },
            {
              en: "she had never before seen a rabbit",
              it: 'past perfect + never before: "non aveva mai visto prima" (lezione 37{1})',
            },
            {
              en: "either a waistcoat-pocket, or a watch",
              it: "either… or…: o… o…",
            },
            {
              en: "just in time to see it pop down",
              it: "in time to: in tempo per; see + oggetto + verbo base (lezione 13{5})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "La logica di Alice è comica: non la stupisce che il coniglio parli, ma che abbia un taschino e un orologio. È il tipico umorismo di Carroll, che rovescia le aspettative.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "polysyndeton (polisindeto)",
              "took a watch… and looked at it, and then hurried on: il ritmo accelera",
            ],
            [
              "metaphor (metafora)",
              "burning with curiosity: la curiosità è un fuoco",
            ],
            [
              "climax",
              "il coniglio parla, ha un orologio, scompare: la stranezza cresce fino alla tana",
            ],
          ],
        },
      ],
    },
    {
      titolo: "IL NONSENSE E IL PUNTO DI VISTA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutto l'inizio, guarda come Carroll fa entrare il fantastico. Non c'è nessuna magia annunciata: tutto comincia da un pomeriggio noioso, e la stranezza arriva un po' alla volta.",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "la noia (frasi 1–3)",
              "un pomeriggio d'estate, un libro senza figure",
            ],
            ["l'apparizione (frasi 4–6)", "un coniglio bianco, quasi normale"],
            [
              "la stranezza (frasi 7–9)",
              "il coniglio parla, ma ad Alice sembra naturale",
            ],
            ["l'avventura (frasi 10–13)", "l'orologio, la curiosità, la tana"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Il narratore guarda il mondo con gli occhi di Alice, ma ogni tanto commenta, tra parentesi, con il sorriso di un adulto. È questo doppio sguardo a rendere il libro divertente per i bambini e per i grandi, come Carroll, che era un matematico appassionato di logica.",
        },
        {
          tipo: "nota",
          testo:
            'Il nonsense non è assenza di senso: è un senso diverso, con regole sue. Nel Paese delle Meraviglie la logica funziona benissimo, solo che parte da premesse assurde. "We\'re all mad here", dirà lo Stregatto.',
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato frase per frase, rileggi tutto l'inizio con la traduzione. Nota come le frasi lunghe, piene di virgole e parentesi, imitano i pensieri di una bambina che salta da un'idea all'altra. Sotto trovi il riepilogo delle figure retoriche.",
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
              "rhetorical question (domanda retorica)",
              "what is the use of a book…? (frase 3)",
            ],
            [
              "parenthesis (inciso)",
              "(as well as she could…) (frase 4), (when she thought it over…) (frase 9)",
            ],
            [
              "bathos (abbassamento)",
              "la grande decisione sulla ghirlanda di margherite (frasi 4–5)",
            ],
            [
              "understatement",
              "There was nothing so very remarkable in that (frase 7)",
            ],
            [
              "polysyndeton (polisindeto)",
              "and looked at it, and then hurried on (frase 10)",
            ],
            ["metaphor (metafora)", "burning with curiosity (frase 12)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Down the Rabbit-Hole, il titolo del primo capitolo, è diventato un modo di dire: go down the rabbit hole significa perdersi in qualcosa di sempre più strano e complicato, come quando si passano ore a leggere su internet.",
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
          domanda: "Perché Alice non apprezza il libro della sorella?",
          opzioni: [
            "Perché è in un'altra lingua",
            "Perché è troppo corto",
            "Perché non ha figure né dialoghi",
          ],
          giusta: 2,
          spiegazione: '"It had no pictures or conversations in it".',
          rivedi: "FRASI 1–3: LA NOIA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa fa balzare in piedi Alice?",
          opzioni: [
            "Il coniglio che tira fuori un orologio dal taschino",
            "Il coniglio che parla",
            "La sorella che la chiama",
          ],
          giusta: 0,
          spiegazione:
            "Non la stupisce che parli, ma che abbia un panciotto con un orologio: è la logica comica di Carroll.",
          rivedi: "FRASI 10–13: L'INSEGUIMENTO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Chi era Lewis Carroll?",
          opzioni: [
            "Uno scrittore di professione di Londra",
            "Un professore di matematica di Oxford",
            "Il padre di Alice Liddell",
          ],
          giusta: 1,
          spiegazione:
            "Charles Dodgson insegnava matematica al Christ Church College.",
          rivedi: "IL CONTESTO",
        },
        {
          tipo: "sottotitolo",
          testo: "Le parole",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola o espressione al suo significato.",
          coppie: [
            ["bank", "riva del fiume"],
            ["peeped", "sbirciò"],
            ["worth the trouble", "valere la pena"],
            ["hedge", "siepe"],
            ["started to her feet", "balzò in piedi"],
          ],
          rivedi: "LE PAROLE DI ALICE",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Ricomponi la domanda di Alice.",
          citazione: "A che cosa serve un libro senza figure?",
          parole: [
            "of",
            "without",
            "use",
            "the",
            "pictures",
            "what's",
            "book",
            "a",
          ],
          soluzione: [
            "what's",
            "the",
            "use",
            "of",
            "a",
            "book",
            "without",
            "pictures",
          ],
          spiegazione: 'What\'s the use of + nome: "a che cosa serve".',
          rivedi: "FRASI 1–3: LA NOIA",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi con il pronome relativo che è stato omesso.",
          citazione: "the book her sister was reading",
          parole: ["reading", "the", "sister", "that", "book", "was", "her"],
          soluzione: ["the", "book", "that", "her", "sister", "was", "reading"],
          spiegazione:
            "Il relativo complemento si può omettere: the book (that) her sister was reading (lezione 44{3}).",
          rivedi: "FRASI 1–3: LA NOIA",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Quale struttura c\'è in "she was considering… when suddenly a White Rabbit ran close by her"?',
          opzioni: [
            "Due past simple",
            "Un condizionale",
            "Past continuous interrotto da un past simple",
          ],
          giusta: 2,
          spiegazione:
            "Un'azione in corso (was considering) interrotta da un evento improvviso (ran) (lezione 35{3}).",
          rivedi: "FRASI 4–6: IL CONIGLIO BIANCO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "she ought to have wondered at this"?',
          opzioni: [
            "Avrebbe dovuto stupirsene",
            "Si era stupita di questo",
            "Si stupirà di questo",
          ],
          giusta: 0,
          spiegazione:
            "Ought to have + participio = avrebbe dovuto: qualcosa che non è stato fatto (lezione 51{2}).",
          rivedi: "FRASI 7–9: NIENTE DI STRANO?",
        },
        {
          tipo: "completa",
          consegna: 'Completa con l\'ausiliare: "né Alice trovò strano..."',
          prima: "nor",
          dopo: "Alice think it so very much out of the way",
          risposte: ["did"],
          spiegazione:
            "Dopo nor l'ausiliare va prima del soggetto: nor did Alice think (lezione 53{2}).",
          rivedi: "FRASI 7–9: NIENTE DI STRANO?",
        },
        {
          tipo: "sottotitolo",
          testo: "Stile e figure",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le tre azioni del Coniglio nella frase 10.",
          parole: [
            "the",
            "Rabbit",
            "actually",
            "took",
            "a",
            "watch",
            "and",
            "looked",
            "and",
            "then",
            "hurried",
            "on",
          ],
          giuste: [3, 7, 10],
          spiegazione:
            "Took, looked, hurried: tre azioni rapide legate da and (polisindeto).",
          rivedi: "FRASI 10–13: L'INSEGUIMENTO",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["rhetorical question", "what is the use of a book…?"],
            ["understatement", "There was nothing so very remarkable in that"],
            ["metaphor", "burning with curiosity"],
            ["parenthesis", "(as well as she could…)"],
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
          consegna: "Traduci in italiano le frasi 7 e 8.",
          testo:
            'There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, "Oh dear! Oh dear! I shall be late!"',
          soluzione:
            "Non c'era niente di così straordinario in questo; né ad Alice sembrò così fuori dal comune sentire il Coniglio che diceva tra sé: «Oddio! Oddio! Farò tardi!»",
          spiegazione:
            'Come hai reso Oh dear? "Povero me", "oddio", "accidenti": ogni traduzione italiana di Alice ha fatto una scelta diversa.',
          rivedi: "FRASI 7–9: NIENTE DI STRANO?",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short analysis (4–5 sentences) of the opening of Alice's Adventures in Wonderland.",
          punti: [
            "Alice's boredom",
            "how the fantastic enters",
            "the narrator's irony",
            "the nonsense",
          ],
          modello:
            'The novel opens with an ordinary scene: Alice is bored on a river bank and wonders "what is the use of a book… without pictures or conversations?". The fantastic enters gradually, with a White Rabbit that at first seems normal. The narrator uses understatement and irony, saying that there was "nothing so very remarkable" in a talking rabbit. What finally surprises Alice is not that the Rabbit speaks, but that it has a watch and a waistcoat-pocket. This upside-down logic is typical of Carroll\'s nonsense.',
          spiegazione:
            "Hai citato il testo e usato termini come understatement, irony e nonsense? Sono le cose che un esaminatore cerca.",
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
