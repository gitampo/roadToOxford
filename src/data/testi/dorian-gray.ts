import { Lezione } from "@/types/lezione";

// Oscar Wilde, prefazione a The Picture of Dorian Gray (1891): una scelta
// di aforismi, nell'ordine dell'originale, pubblico dominio
const PREFAZIONE = [
  "The artist is the creator of beautiful things.",
  "To reveal art and conceal the artist is art's aim.",
  "Those who find ugly meanings in beautiful things are corrupt without being charming. This is a fault.",
  "There is no such thing as a moral or an immoral book.",
  "Books are well written, or badly written. That is all.",
  "No artist desires to prove anything.",
  "All art is at once surface and symbol.",
  "Those who go beneath the surface do so at their peril.",
  "It is the spectator, and not life, that art really mirrors.",
  "We can forgive a man for making a useful thing as long as he does not admire it.",
  "The only excuse for making a useless thing is that one admires it intensely.",
  "All art is quite useless.",
];

const PREFAZIONE_TRADUZIONE = [
  "L'artista è il creatore di cose belle.",
  "Rivelare l'arte e nascondere l'artista è lo scopo dell'arte.",
  "Chi trova significati brutti nelle cose belle è corrotto senza essere affascinante. Questo è un difetto.",
  "Non esiste un libro morale o immorale.",
  "I libri sono scritti bene o scritti male. Tutto qui.",
  "Nessun artista desidera dimostrare qualcosa.",
  "Tutta l'arte è insieme superficie e simbolo.",
  "Chi va sotto la superficie lo fa a proprio rischio.",
  "È lo spettatore, e non la vita, che l'arte rispecchia davvero.",
  "Possiamo perdonare a un uomo di aver fatto una cosa utile, purché non la ammiri.",
  "L'unica giustificazione per fare una cosa inutile è ammirarla intensamente.",
  "Tutta l'arte è del tutto inutile.",
];

export const dorianGray: Lezione = {
  id: "dorian-gray",
  titolo: "The Picture of Dorian Gray: la prefazione",
  descrizione:
    "Gli aforismi di Wilde sull'arte per l'arte: lettura, analisi ed esercizi",
  chiavi: "Wilde, Estetismo, arte per l'arte, aforisma, paradosso",
  livello: "Letteratura",
  sottotitolo: "Modulo C6 · Oscar Wilde",
  citazione: {
    testo: "All art is quite useless.",
    fonte: "Oscar Wilde, The Picture of Dorian Gray (1891)",
    traduzione: "Tutta l'arte è del tutto inutile.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La prefazione del Ritratto di Dorian Gray non è un racconto: è una serie di frasi brevi e taglienti, ognuna su una riga, come un manifesto. Ne abbiamo scelte dodici, nell'ordine in cui Wilde le ha scritte. Leggile tutte una volta: alcune sembrano assurde. Nei riquadri successivi le analizziamo una per una; la traduzione completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: PREFAZIONE,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Oscar Wilde (1854–1900), irlandese, studiò a Oxford, al Magdalen College, dove fu influenzato dal critico Walter Pater e dalla sua idea di vivere per la bellezza. Divenne il principale esponente dell'Estetismo, il movimento dell'arte per l'arte (art for art's sake): l'arte non deve educare, né essere utile, né insegnare la morale (lezione C6{6}).",
        },
        {
          tipo: "testo",
          testo:
            "Il ritratto di Dorian Gray uscì nel 1890 su una rivista. I critici lo attaccarono come un libro immorale. L'anno dopo, per l'edizione in volume, Wilde aggiunse questa prefazione: una risposta ai critici, in forma di aforismi.",
        },
        {
          tipo: "nota",
          testo:
            "Nel romanzo il giovane Dorian resta bello e giovane per sempre, mentre il suo ritratto invecchia e si deforma a ogni sua colpa. Pochi anni dopo, nei processi del 1895 che portarono Wilde in carcere, gli avvocati usarono proprio il romanzo contro di lui.",
        },
      ],
    },
    {
      titolo: "COME SI LEGGE UN AFORISMA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Prima di iniziare, due strumenti per leggere Wilde. Un aforisma è una frase breve che esprime un'idea in modo memorabile. Wilde lo usa insieme al paradosso: un'affermazione che sembra contraddittoria o assurda, ma che, a pensarci, contiene una verità.",
        },
        {
          tipo: "tabella",
          righe: [
            ["aphorism (aforisma)", "breve, definitivo, facile da citare"],
            [
              "paradox (paradosso)",
              "contrario all'opinione comune: All art is quite useless",
            ],
            [
              "antithesis (antitesi)",
              "due idee opposte nella stessa frase: reveal / conceal",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Wilde è uno degli autori più citati della lingua inglese: le sue frasi funzionano da sole, come proverbi. Leggendo, chiediti ogni volta: è vero il contrario di quello che pensavo?",
        },
      ],
    },
    {
      titolo: "RIGHE 1–3: L'ARTISTA",
      blocchi: [
        {
          tipo: "brano",
          righe: PREFAZIONE,
          traduzione: PREFAZIONE_TRADUZIONE,
          evidenzia: [0, 2],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "L'artista crea cose belle, e lo scopo dell'arte è mostrare l'opera, non la persona che l'ha fatta. Chi vede brutture nelle cose belle è corrotto, e per di più senza fascino: questo è il vero difetto. Wilde rovescia la morale: il problema non è essere corrotti, ma esserlo senza stile.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "The artist is the creator…",
              it: "the + nome singolare per parlare di una categoria intera: l'artista in generale (lezione 3{6})",
            },
            {
              en: "To reveal art and conceal the artist is art's aim",
              it: "l'infinito fa da soggetto, con il verbo al singolare (lezione 48{5}); art's aim = genitivo sassone (lezione 5{6})",
            },
            {
              en: "Those who find…",
              it: "those who = coloro che, chi (lezione 44{2})",
            },
            {
              en: "without being charming",
              it: "dopo una preposizione il verbo va in -ing (lezione 48{4})",
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
            [
              "antithesis (antitesi)",
              "reveal art / conceal the artist; ugly meanings / beautiful things",
            ],
            [
              "paradox (paradosso)",
              "corrupt without being charming: essere corrotti va bene, se si è affascinanti",
            ],
          ],
        },
      ],
    },
    {
      titolo: "RIGHE 4–6: NESSUNA MORALE",
      blocchi: [
        {
          tipo: "brano",
          righe: PREFAZIONE,
          traduzione: PREFAZIONE_TRADUZIONE,
          evidenzia: [3, 5],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "È la risposta diretta ai critici: un libro non è morale o immorale, è scritto bene o male, e basta. E nessun artista vuole dimostrare qualcosa: l'arte non è una lezione né una predica.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "There is no such thing as…",
              it: '"non esiste una cosa come…": un\'espressione fissa, utilissima',
            },
            {
              en: "a moral or an immoral book",
              it: "a davanti a consonante, an davanti a vocale (lezione 3{2})",
            },
            {
              en: "well written, or badly written",
              it: "avverbi di modo: well è l'irregolare di good (lezione 33{4})",
            },
            {
              en: "No artist desires to prove anything",
              it: "no + nome; anything in una frase già negativa (lezione 18{4}); desire + to (lezione 48{3})",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "There's no such thing as a free lunch (\"nessuno ti regala niente\") è un modo di dire famosissimo costruito allo stesso modo. Prova a usarlo: There's no such thing as a stupid question.",
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
              "moral / immoral; well written / badly written",
            ],
            [
              "aphorism (aforisma)",
              "That is all.: tre parole che chiudono la discussione",
            ],
          ],
        },
      ],
    },
    {
      titolo: "RIGHE 7–9: SUPERFICIE E SIMBOLO",
      blocchi: [
        {
          tipo: "brano",
          righe: PREFAZIONE,
          traduzione: PREFAZIONE_TRADUZIONE,
          evidenzia: [6, 8],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "L'arte è insieme bella superficie e significato nascosto; ma chi va a cercare i significati sotto la superficie lo fa a suo rischio. E l'arte, in realtà, non rispecchia la vita: rispecchia chi la guarda. Ognuno vede in un'opera quello che ha dentro di sé, e i critici che hanno trovato il romanzo immorale hanno parlato di se stessi.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "at once surface and symbol",
              it: 'at once = allo stesso tempo (anche "subito")',
            },
            {
              en: "do so at their peril",
              it: "do so sostituisce il verbo già detto (go beneath the surface); at one's peril = a proprio rischio",
            },
            {
              en: "It is the spectator… that art really mirrors",
              it: "frase scissa: mette in risalto the spectator (lezione 53{5}); mirror qui è un verbo",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            "La frase scissa It is… that… è perfetta per correggere qualcuno: It's not the book that is immoral, it's the reader. Wilde la usa proprio per rovesciare l'opinione comune.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "paradox (paradosso)",
              "art mirrors the spectator, not life: il contrario dell'idea tradizionale di arte come specchio della realtà",
            ],
            ["metaphor (metafora)", "mirrors: l'arte è uno specchio"],
          ],
        },
      ],
    },
    {
      titolo: "RIGHE 10–12: L'INUTILITÀ DELL'ARTE",
      blocchi: [
        {
          tipo: "brano",
          righe: PREFAZIONE,
          traduzione: PREFAZIONE_TRADUZIONE,
          evidenzia: [9, 11],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Chi fa una cosa utile è perdonato, purché non la ammiri: le cose utili non meritano ammirazione. Una cosa inutile, invece, si giustifica solo se la si ammira intensamente. E la conclusione: tutta l'arte è del tutto inutile. Non è un insulto: è il suo valore. L'arte esiste per essere ammirata, non per servire a qualcosa.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "forgive a man for making a useful thing",
              it: "forgive someone for + -ing: perdonare a qualcuno di aver fatto (lezione 48{4})",
            },
            {
              en: "as long as he does not admire it",
              it: "as long as = purché, a condizione che, con il presente (lezione 34{4})",
            },
            {
              en: "is that one admires it intensely",
              it: 'one = "si", un soggetto generico e formale (lezione 1{5})',
            },
            {
              en: "All art is quite useless",
              it: 'quite con un aggettivo "assoluto" vuol dire completamente, non "abbastanza"',
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Attenzione a quite. Con un aggettivo che ha delle gradazioni significa "abbastanza": quite good, quite tired (lezione S2{9}). Con un aggettivo assoluto significa "del tutto": quite useless, quite right, quite impossible. Wilde non dice che l\'arte è "abbastanza inutile", ma "completamente inutile".',
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["antithesis (antitesi)", "a useful thing / a useless thing"],
            [
              "paradox (paradosso)",
              "All art is quite useless: la frase finale, la più provocatoria",
            ],
          ],
        },
      ],
    },
    {
      titolo: "L'ESTETISMO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutti gli aforismi, mettili insieme. Formano un piccolo manifesto dell'Estetismo:",
        },
        {
          tipo: "tabella",
          righe: [
            [
              "l'artista (righe 1–3)",
              "crea bellezza e si nasconde dietro l'opera",
            ],
            [
              "la morale (righe 4–6)",
              "un libro si giudica per come è scritto, non per quello che insegna",
            ],
            ["il significato (righe 7–9)", "l'arte riflette chi la guarda"],
            [
              "l'utilità (righe 10–12)",
              "l'arte è inutile, e per questo preziosa",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            "C'è però un'ironia: il romanzo che segue è profondamente morale. Dorian, che vive solo per il piacere e la bellezza, distrugge se stesso e gli altri, e alla fine viene punito. Wilde dice che l'arte non insegna nulla, e poi scrive una storia che insegna moltissimo.",
        },
        {
          tipo: "nota",
          testo:
            "L'Estetismo si opponeva all'idea vittoriana dell'arte come strumento di educazione morale (pensa a Dickens, che usa il romanzo per denunciare le ingiustizie). Per Wilde la bellezza basta a se stessa.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che li hai analizzati uno per uno, rileggi tutti gli aforismi con la traduzione. Scegline uno che ti piace e prova a ricordarlo: è così che si leggono gli aforismi. Sotto trovi il riepilogo delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: PREFAZIONE,
          traduzione: PREFAZIONE_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["aphorism (aforisma)", "tutto il testo"],
            [
              "antithesis (antitesi)",
              "reveal / conceal (riga 2), moral / immoral (riga 4), useful / useless (righe 10–11)",
            ],
            [
              "paradox (paradosso)",
              "corrupt without being charming (riga 3), art mirrors the spectator (riga 9), All art is quite useless (riga 12)",
            ],
            ["metaphor (metafora)", "art mirrors (riga 9)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "La frase più breve è l'ultima: cinque parole che chiudono la prefazione come una sentenza.",
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
          domanda: "Secondo Wilde, come si giudica un libro?",
          opzioni: [
            "Se è scritto bene o male",
            "Se è morale o immorale",
            "Se è utile ai lettori",
          ],
          giusta: 0,
          spiegazione:
            '"Books are well written, or badly written. That is all."',
          rivedi: "RIGHE 4–6: NESSUNA MORALE",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa rispecchia davvero l'arte, secondo Wilde?",
          opzioni: ["La vita", "Lo spettatore", "L'artista", "La natura"],
          giusta: 1,
          spiegazione:
            '"It is the spectator, and not life, that art really mirrors": ognuno vede nell\'arte se stesso.',
          rivedi: "RIGHE 7–9: SUPERFICIE E SIMBOLO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Perché Wilde scrisse questa prefazione?",
          opzioni: [
            "Per spiegare la trama del romanzo",
            "Per ringraziare l'editore",
            "Per rispondere ai critici che avevano giudicato immorale il romanzo",
          ],
          giusta: 2,
          spiegazione:
            "La aggiunse nel 1891, dopo le critiche alla prima versione uscita su rivista.",
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
            ["reveal", "rivelare"],
            ["conceal", "nascondere"],
            ["peril", "rischio, pericolo"],
            ["mirror", "rispecchiare"],
            ["useless", "inutile"],
          ],
          rivedi: "RIGHE 1–3: L'ARTISTA",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Ricomponi l'aforisma.",
          citazione: "Non esiste un libro morale o immorale.",
          parole: [
            "as",
            "such",
            "is",
            "no",
            "there",
            "thing",
            "a",
            "moral",
            "book",
          ],
          soluzione: [
            "there",
            "is",
            "no",
            "such",
            "thing",
            "as",
            "a",
            "moral",
            "book",
          ],
          spiegazione:
            "There is no such thing as… = non esiste una cosa come….",
          rivedi: "RIGHE 4–6: NESSUNA MORALE",
        },
        {
          tipo: "riordina",
          consegna:
            "Riscrivi la frase scissa senza enfasi, nell'ordine normale.",
          citazione:
            "It is the spectator, and not life, that art really mirrors.",
          parole: ["the", "art", "spectator", "mirrors", "really"],
          soluzione: ["art", "really", "mirrors", "the", "spectator"],
          spiegazione:
            "La frase scissa It is… that… mette in risalto the spectator (lezione 53{5}).",
          rivedi: "RIGHE 7–9: SUPERFICIE E SIMBOLO",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Che cosa fa da soggetto in "To reveal art and conceal the artist is art\'s aim"?',
          opzioni: [
            "Due infiniti: to reveal… and conceal…",
            "Art",
            "Art's aim",
          ],
          giusta: 0,
          spiegazione:
            "L'infinito può fare da soggetto, con il verbo al singolare (lezione 48{5}).",
          rivedi: "RIGHE 1–3: L'ARTISTA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Che cosa significa "quite" in "All art is quite useless"?',
          opzioni: ["Abbastanza", "Del tutto, completamente", "Un po'"],
          giusta: 1,
          spiegazione:
            'Con un aggettivo assoluto come useless, quite significa "completamente". Con un aggettivo graduabile (quite good) significa "abbastanza".',
          rivedi: "RIGHE 10–12: L'INUTILITÀ DELL'ARTE",
        },
        {
          tipo: "completa",
          consegna:
            'Completa: "perdonare a un uomo di aver fatto una cosa utile".',
          prima: "We can forgive a man for",
          dopo: "a useful thing",
          risposte: ["making"],
          spiegazione:
            "Dopo una preposizione (for) il verbo va in -ing (lezione 48{4}).",
          rivedi: "RIGHE 10–12: L'INUTILITÀ DELL'ARTE",
        },
        {
          tipo: "sottotitolo",
          testo: "Figure e idee",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le due parole che formano un'antitesi nella riga 2.",
          parole: ["To", "reveal", "art", "and", "conceal", "the", "artist"],
          giuste: [1, 4],
          spiegazione:
            "Reveal (rivelare) e conceal (nascondere): due verbi opposti nella stessa frase.",
          rivedi: "RIGHE 1–3: L'ARTISTA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cos'è un paradosso?",
          opzioni: [
            "Una frase lunga e complicata",
            "Una rima tra due versi",
            "Un'affermazione che sembra assurda ma contiene una verità",
          ],
          giusta: 2,
          spiegazione:
            "Come All art is quite useless: sembra un insulto, ma esprime il valore dell'arte.",
          rivedi: "COME SI LEGGE UN AFORISMA",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio.",
          coppie: [
            ["antithesis", "reveal art and conceal the artist"],
            ["paradox", "All art is quite useless"],
            ["metaphor", "art really mirrors"],
            ["aphorism", "That is all."],
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
          consegna: "Traduci in italiano le righe 10 e 11.",
          testo:
            "We can forgive a man for making a useful thing as long as he does not admire it. The only excuse for making a useless thing is that one admires it intensely.",
          soluzione:
            "Possiamo perdonare a un uomo di aver fatto una cosa utile, purché non la ammiri. L'unica giustificazione per aver fatto una cosa inutile è ammirarla intensamente.",
          spiegazione:
            'Come hai reso one? In italiano il soggetto generico si rende con il "si" o con l\'infinito: "ammirarla".',
          rivedi: "RIGHE 10–12: L'INUTILITÀ DELL'ARTE",
        },
        {
          tipo: "scrivi",
          consegna:
            "Write a short paragraph (4–5 sentences) explaining Wilde's idea of art in the Preface.",
          punti: [
            "art for art's sake",
            "morality and books",
            "one paradox",
            "the irony of the novel",
          ],
          modello:
            'In the Preface to The Picture of Dorian Gray, Wilde expresses the principles of Aestheticism, or "art for art\'s sake". He argues that "there is no such thing as a moral or an immoral book": books are only well or badly written. His style is based on paradox, as in the final line, "All art is quite useless", which means that art has value in itself, not because it serves a purpose. He also suggests that art mirrors "the spectator, and not life", so critics who see immorality reveal themselves. Ironically, the novel that follows is deeply moral, since Dorian is destroyed by his own vices.',
          spiegazione:
            "Hai citato il testo e usato termini come Aestheticism e paradox? Sono le cose che un esaminatore cerca.",
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
