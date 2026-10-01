import { Lezione } from "@/types/lezione";

// Sonetto 18 di Shakespeare (1609), pubblico dominio
const SONETTO_18 = [
  "Shall I compare thee to a summer's day?",
  "Thou art more lovely and more temperate:",
  "Rough winds do shake the darling buds of May,",
  "And summer's lease hath all too short a date;",
  "Sometime too hot the eye of heaven shines,",
  "And often is his gold complexion dimm'd;",
  "And every fair from fair sometime declines,",
  "By chance or nature's changing course untrimm'd;",
  "But thy eternal summer shall not fade,",
  "Nor lose possession of that fair thou ow'st;",
  "Nor shall Death brag thou wander'st in his shade,",
  "When in eternal lines to time thou grow'st:",
  "So long as men can breathe or eyes can see,",
  "So long lives this, and this gives life to thee.",
];

const SONETTO_18_TRADUZIONE = [
  "Dovrei paragonarti a un giorno d'estate?",
  "Tu sei più bello e più mite:",
  "venti violenti scuotono i teneri boccioli di maggio,",
  "e il contratto dell'estate ha una scadenza troppo breve;",
  "a volte l'occhio del cielo splende troppo caldo,",
  "e spesso il suo volto dorato si offusca;",
  "e ogni cosa bella prima o poi perde la sua bellezza,",
  "spogliata dal caso o dal corso mutevole della natura;",
  "ma la tua eterna estate non svanirà,",
  "né perderà la bellezza che possiedi;",
  "né la Morte si vanterà che tu vaghi nella sua ombra,",
  "quando in versi eterni crescerai insieme al tempo:",
  "finché gli uomini respireranno e gli occhi vedranno,",
  "vivrà questo, e questo darà vita a te.",
];


export const sonetto18: Lezione = {
  id: "sonetto-18",
  titolo: "Sonetto 18",
  descrizione: "La bellezza resa eterna dalla poesia: lettura, analisi ed esercizi",
  chiavi: "sonetto shakespeariano, pentametro giambico, thou / thee",
  livello: "Cultura",
  sottotitolo: "Modulo C3 · William Shakespeare",
  citazione: {
    testo: "Shall I compare thee to a summer's day?",
    fonte: "William Shakespeare, Sonetto 18 (1609)",
    traduzione: "Dovrei paragonarti a un giorno d'estate?",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "IL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Leggilo tutto una volta, con calma, anche se non capisci ogni parola. Nei riquadri successivi lo analizziamo pezzo per pezzo; la traduzione completa la trovi alla fine.",
        },
        {
          tipo: "brano",
          righe: SONETTO_18,
        },
      ],
    },
    {
      titolo: "IL CONTESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I sonetti di Shakespeare sono 154 e furono pubblicati insieme nel 1609, ma molti erano stati scritti anni prima e circolavano tra amici, in manoscritto. Non raccontano una storia continua, ma si possono dividere in due gruppi:",
        },
        {
          tipo: "tabella",
          righe: [
            ["sonetti 1–126", "rivolti a un giovane uomo, il \"Fair Youth\""],
            ["sonetti 127–152", "rivolti a una donna misteriosa, la \"Dark Lady\""],
            ["sonetti 153–154", "due brevi poesie su Cupido"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Il Sonetto 18 appartiene al primo gruppo. I diciassette sonetti che lo precedono invitano il giovane a sposarsi e ad avere figli, perché la sua bellezza sopravviva in loro. Il Sonetto 18 cambia idea: non saranno i figli a rendere eterno il giovane, ma la poesia.",
        },
        {
          tipo: "nota",
          testo:
            "Non sappiamo con certezza chi fosse il Fair Youth: è uno dei grandi misteri della letteratura inglese. Il testo non dice mai il suo nome.",
        },
      ],
    },
    {
      titolo: "L'INGLESE DI SHAKESPEARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Prima di iniziare, alcune forme antiche che incontrerai. L'inglese del Cinquecento aveva ancora un \"tu\" (thou) distinto dal \"voi\" (you), con i suoi pronomi e le sue desinenze:",
        },
        {
          tipo: "tabella",
          righe: [
            ["thou", "you (soggetto: tu)"],
            ["thee", "you (complemento: te, ti)"],
            ["thy / thine", "your (tuo)"],
            ["thou art", "you are"],
            ["thou ow'st, thou grow'st", "you own, you grow: -st con thou"],
            ["hath", "has: -th al posto della -s"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "È lo stesso schema dei pronomi che conosci (lezioni 1{1}, 5{1} e 16{1}): I / me / my corrisponde a thou / thee / thy.",
        },
      ],
    },
    {
      titolo: "VERSI 1–2: LA DOMANDA",
      blocchi: [
        {
          tipo: "brano",
          righe: SONETTO_18,
          traduzione: SONETTO_18_TRADUZIONE,
          evidenzia: [0, 1],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Dovrei paragonarti a un giorno d'estate? Il poeta si chiede, e chiede a te, se il paragone è giusto. E si risponde subito: il paragone non basta, la persona amata è più bella e più \"temperate\", cioè più mite, più equilibrata dell'estate.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Shall I compare thee…?", it: "Shall I…? chiede un parere: \"dovrei…?\", \"vuoi che…?\". Come in \"Shall I open the door?\", vuoi che apra la porta? (lezione 28{3})" },
            { en: "compare thee", it: "thee è complemento, come me, him, them (lezione 16{1})" },
            { en: "more lovely and more temperate", it: "comparativi con more: aggettivi di due o più sillabe (lezione 26{3})" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Con lovely vanno bene sia lovelier sia more lovely. Shakespeare sceglie more lovely per il ritmo: \"thou ART more LOVE-ly\" segue il battito da-DUM, mentre \"thou ART LOVE-li-er\" metterebbe due accenti di fila. In più, more lovely e more temperate creano un parallelismo.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["rhetorical question (domanda retorica)", "Shall I compare thee…? Il poeta non aspetta una risposta: se la dà da solo, nel verso 2."],
          ],
        },
      ],
    },
    {
      titolo: "IL METRO: IL PENTAMETRO GIAMBICO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Prima di andare avanti, ascolta il ritmo dei versi che hai appena letto. La metrica italiana conta le sillabe (l'endecasillabo ne ha undici). Quella inglese conta gli accenti: ciò che conta è dove cade la voce. Il verso dei sonetti è il pentametro giambico.",
        },
        {
          tipo: "tabella",
          righe: [
            ["giambo (iamb)", "una sillaba debole + una forte: da-DUM"],
            ["penta-", "cinque: cinque giambi per verso"],
            ["pentametro giambico", "dieci sillabe, cinque accenti"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Ecco il primo verso diviso in piedi. Le sillabe in maiuscolo sono quelle accentate:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "shall I | com-PARE | thee TO | a SUM- | mer's DAY", it: "da-DUM / da-DUM / da-DUM / da-DUM / da-DUM" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Perché proprio il giambo? Perché è il ritmo naturale dell'inglese parlato, che alterna sillabe deboli e forti (lezione 57{5}). Molte frasi di tutti i giorni sono già giambiche: \"I want to go to bed\".",
        },
      ],
    },
    {
      titolo: "VERSI 3–4: IL VENTO E IL TEMPO",
      blocchi: [
        {
          tipo: "brano",
          righe: SONETTO_18,
          traduzione: SONETTO_18_TRADUZIONE,
          evidenzia: [2, 3],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Iniziano i difetti dell'estate. Il vento rovina i boccioli di maggio, e l'estate dura troppo poco. \"Lease\" è il contratto d'affitto: l'estate è solo in prestito, ha una scadenza.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Rough winds do shake…", it: "do enfatico: \"scuotono\" con più forza (lezione 52{6})" },
            { en: "summer's lease", it: "genitivo sassone: il contratto dell'estate (lezione 5{6})" },
            { en: "hath all too short a date", it: "inglese moderno: has a date that is much too short" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Rough winds: l'aggettivo resta invariato anche davanti a un plurale, mai \"roughs winds\" (lezione 4{1}).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["metaphor (metafora)", "summer's lease: l'estate è un contratto d'affitto, con una scadenza. Il paragone c'è, ma senza \"come\"."],
          ],
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "tabella",
          righe: [
            ["day / May", "versi 1 e 3: rima A"],
            ["temperate / date", "versi 2 e 4: rima B"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "In inglese la rima dipende dal suono, non dalla grafia: day e May finiscono con lo stesso suono \"-ei\", mentre date (\"-eit\") non rima con loro. Temperate e date oggi non rimano perfettamente: è una rima imperfetta, accettata in poesia soprattutto quando l'ultima sillaba della parola non è accentata.",
        },
      ],
    },
    {
      titolo: "VERSI 5–8: IL SOLE E IL DECLINO",
      blocchi: [
        {
          tipo: "brano",
          righe: SONETTO_18,
          traduzione: SONETTO_18_TRADUZIONE,
          evidenzia: [4, 7],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Il sole, \"l'occhio del cielo\", a volte scotta e a volte si nasconde dietro le nuvole. Poi il discorso si allarga: ogni cosa bella, prima o poi, perde la sua bellezza, per caso o per il corso della natura.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "testo",
          testo: "Prima rimettiamo i versi in ordine:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Sometime too hot the eye of heaven shines", it: "→ Sometimes the eye of heaven shines too hot" },
            { en: "And often is his gold complexion dimm'd", it: "→ And his gold complexion is often dimmed" },
          ],
        },
        {
          tipo: "tabella",
          righe: [
            ["sometime, often", "avverbi di frequenza (lezione 11{1})"],
            ["is… dimm'd", "forma passiva: to be + participio (lezione 42{1})"],
            ["dimm'd, untrimm'd", "l'apostrofo indica che -ed non è una sillaba in più (lezione 22{4})"],
            ["every fair… declines", "every + verbo al singolare, con la -s (lezione 10{2})"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Fair qui è un aggettivo usato come nome: \"ogni cosa bella\". È lo stesso meccanismo di \"the rich\", i ricchi (lezione 3{6}).",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["metaphor (metafora)", "the eye of heaven: il sole è l'occhio del cielo"],
            ["personification (personificazione)", "his gold complexion: il sole ha un volto, come una persona"],
            ["polyptoton (poliptoto)", "every fair from fair: la stessa parola in due sensi, \"ogni cosa bella\" e \"la sua bellezza\""],
          ],
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "tabella",
          righe: [
            ["shines / declines", "versi 5 e 7: rima C"],
            ["dimm'd / untrimm'd", "versi 6 e 8: rima D"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Ogni quartina usa rime nuove: è la regola del sonetto shakespeariano, più facile da seguire in inglese, che ha meno parole in rima dell'italiano.",
        },
      ],
    },
    {
      titolo: "VERSI 9–12: LA SVOLTA",
      blocchi: [
        {
          tipo: "brano",
          righe: SONETTO_18,
          traduzione: SONETTO_18_TRADUZIONE,
          evidenzia: [8, 11],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Con \"But\" il sonetto cambia direzione, è la volta. L'estate finisce, ma la \"tua eterna estate\" no. Nemmeno la Morte potrà vantarsi di averti nella sua ombra, perché vivrai \"in eternal lines\": nei versi di questa poesia.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "thy eternal summer shall not fade", it: "shall = will, futuro (lezione 28{1})" },
            { en: "that fair thou ow'st", it: "relativa senza pronome: the beauty (that) you own (lezione 43{3})" },
            { en: "Nor shall Death brag…", it: "inversione dopo una negazione: shall prima del soggetto (lezione 52{2})" },
            { en: "When… thou grow'st", it: "dopo when il presente, anche per il futuro (lezione 34{4})" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il gioco di parole: lines sono i versi, ma anche le linee del tempo. L'amato \"cresce insieme al tempo\" invece di esserne distrutto.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["antithesis (antitesi)", "thy eternal summer contro l'estate che finisce dei versi 1–8"],
            ["personification (personificazione)", "Death brag: la Morte si vanta, come una persona"],
            ["anaphora (anafora)", "Nor… / Nor…: la stessa parola all'inizio di due versi vicini"],
          ],
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "tabella",
          righe: [
            ["fade / shade", "versi 9 e 11: rima E"],
            ["ow'st / grow'st", "versi 10 e 12: rima F"],
          ],
        },
      ],
    },
    {
      titolo: "IL RITMO NEL TESTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Hai visto che il verso ha un battito regolare. Ma un poeta bravo non lo segue come un metronomo: lo rispetta quasi sempre, e lo rompe quando vuole mettere in rilievo qualcosa.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "ROUGH WINDS | do SHAKE | the DAR- | ling BUDS | of MAY", it: "verso 3: due accenti di fila all'inizio, come una raffica di vento" },
            { en: "and SUM- | mer's LEASE | hath ALL | too SHORT | a DATE", it: "verso 4: regolare, e \"all too short\" cade sugli accenti forti" },
            { en: "but THY | e-TER- | nal SUM- | mer SHALL | not FADE", it: "verso 9: il \"But\" della svolta, poi un ritmo regolare e sicuro" },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Per far tornare i conti delle sillabe, i poeti dell'epoca accorciano alcune parole con l'apostrofo:",
        },
        {
          tipo: "tabella",
          righe: [
            ["dimm'd", "dimmed: una sillaba, non due"],
            ["ow'st", "owest (da owe, che allora significava possedere): una sillaba invece di due"],
            ["wander'st", "wanderest: due sillabe invece di tre"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Il trucco per sentire il ritmo: leggi il verso ad alta voce battendo la mano sulle sillabe forti. Per sapere dove cade l'accento delle singole parole, vedi la lezione 57{2}.",
        },
      ],
    },
    {
      titolo: "VERSI 13–14: IL DISTICO",
      blocchi: [
        {
          tipo: "brano",
          righe: SONETTO_18,
          traduzione: SONETTO_18_TRADUZIONE,
          evidenzia: [12, 13],
        },
        {
          tipo: "sottotitolo",
          testo: "Il significato",
        },
        {
          tipo: "testo",
          testo:
            "Finché ci sarà qualcuno che respira e legge, questa poesia vivrà, e darà vita a te. \"This\" è la poesia stessa: il vero protagonista del sonetto è il potere dell'arte di vincere il tempo.",
        },
        {
          tipo: "sottotitolo",
          testo: "La grammatica",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "So long as men can breathe", it: "so long as = as long as, finché: presente anche per il futuro (lezione 34{4})" },
            { en: "So long lives this", it: "→ this lives so long: soggetto dopo il verbo, per il ritmo" },
            { en: "this gives life to thee", it: "this usato da solo, come pronome (lezione 15{3}); to thee = to you (lezione 16{3})" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "La promessa si è avverata: oltre 400 anni dopo tu stai leggendo questi versi, e la persona amata vive ancora in essi.",
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "tabella",
          righe: [
            ["anaphora (anafora)", "So long… / So long…: la ripetizione dà al distico il tono di una promessa solenne"],
          ],
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "tabella",
          righe: [
            ["see / thee", "versi 13 e 14: rima G, baciata"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "La rima baciata finale suona come una chiusura definitiva, quasi una sentenza. È per questo che i distici di Shakespeare sono spesso le righe più citate.",
        },
      ],
    },
    {
      titolo: "IL RAGIONAMENTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che hai letto tutte le parti, guardale dall'alto. Il sonetto shakespeariano è costruito come un'argomentazione: ogni parte ha un compito preciso.",
        },
        {
          tipo: "tabella",
          righe: [
            ["prima quartina", "la domanda e i primi difetti dell'estate"],
            ["seconda quartina", "altri difetti, poi una legge generale: tutto ciò che è bello finisce"],
            ["terza quartina", "la svolta (But): tu invece non finirai"],
            ["distico", "la ragione: vivrai in questa poesia"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Nota come il discorso si allarga e poi si stringe: dall'estate a tutte le cose belle del mondo, poi di nuovo alla persona amata, e infine alla poesia stessa.",
        },
        {
          tipo: "nota",
          testo:
            "Quando studi un sonetto, prova sempre a riassumere ogni quartina in una frase. Se ci riesci, hai capito la struttura del ragionamento.",
        },
      ],
    },
    {
      titolo: "LA FORMA: DA PETRARCA A SHAKESPEARE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il sonetto nasce in Italia nel Duecento e diventa famoso con Petrarca. Nel Cinquecento i poeti inglesi Thomas Wyatt e Henry Howard, conte di Surrey, lo portano in Inghilterra e lo adattano alla loro lingua. Shakespeare usa la forma di Surrey, che da lui prende il nome di sonetto shakespeariano.",
        },
        {
          tipo: "tabella",
          righe: [
            ["sonetto petrarchesco", "un'ottava (8 versi) + una sestina (6 versi)"],
            ["sonetto shakespeariano", "tre quartine (4+4+4) + un distico (2)"],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Perché cambiare? L'inglese ha molte meno parole che rimano tra loro rispetto all'italiano, dove quasi tutte finiscono in vocale. Lo schema petrarchesco obbliga a trovare quattro parole con la stessa rima; quello inglese ne chiede solo due per volta.",
        },
        {
          tipo: "nota",
          testo:
            "In entrambi i tipi c'è una volta: il punto in cui il ragionamento cambia direzione. In Petrarca cade tra l'ottava e la sestina; in Shakespeare spesso al verso 9, e il distico finale aggiunge un'ultima svolta o una conclusione.",
        },
      ],
    },
    {
      titolo: "RILEGGILO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Ora che l'hai analizzato verso per verso, rileggilo tutto con la traduzione. Nota quante cose vedi adesso che al primo sguardo non avevi notato. Sotto trovi il riepilogo delle rime e delle figure retoriche.",
        },
        {
          tipo: "brano",
          righe: SONETTO_18,
          traduzione: SONETTO_18_TRADUZIONE,
        },
        {
          tipo: "sottotitolo",
          testo: "Le rime",
        },
        {
          tipo: "testo",
          testo:
            "Lo schema è ABAB CDCD EFEF GG: ogni quartina ha due rime alternate, sempre nuove, e il distico chiude con una rima baciata.",
        },
        {
          tipo: "tabella",
          righe: [
            ["A: day / May", "versi 1 e 3"],
            ["B: temperate / date", "versi 2 e 4"],
            ["C: shines / declines", "versi 5 e 7"],
            ["D: dimm'd / untrimm'd", "versi 6 e 8"],
            ["E: fade / shade", "versi 9 e 11"],
            ["F: ow'st / grow'st", "versi 10 e 12"],
            ["G: see / thee", "versi 13 e 14"],
          ],
        },
        {
          tipo: "sottotitolo",
          testo: "Le figure retoriche",
        },
        {
          tipo: "testo",
          testo:
            "Ecco tutte le figure che hai incontrato, con il nome inglese: ti serviranno per scrivere un'analisi in un esame.",
        },
        {
          tipo: "tabella",
          righe: [
            ["rhetorical question (domanda retorica)", "Shall I compare thee…? (v. 1)"],
            ["metaphor (metafora)", "summer's lease (v. 4), the eye of heaven (v. 5)"],
            ["personification (personificazione)", "his gold complexion (v. 6), Death brag (v. 11)"],
            ["polyptoton (poliptoto)", "every fair from fair (v. 7)"],
            ["antithesis (antitesi)", "l'estate che finisce contro thy eternal summer (v. 9)"],
            ["anaphora (anafora)", "Nor… Nor… (vv. 10–11), So long… So long… (vv. 13–14)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Tutte servono allo stesso scopo: rendere più forte il contrasto tra ciò che passa e ciò che resta.",
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
          domanda: "Secondo il poeta, perché la bellezza della persona amata non svanirà?",
          opzioni: [
            "Perché avrà dei figli che le somiglieranno",
            "Perché vivrà nei versi di questa poesia",
            "Perché l'estate torna ogni anno",
          ],
          giusta: 1,
          spiegazione:
            "\"So long lives this, and this gives life to thee\": è la poesia a renderla eterna. La prima risposta è la tesi dei sonetti 1–17, che il Sonetto 18 abbandona.",
          rivedi: "VERSI 13–14: IL DISTICO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa indica \"the eye of heaven\"?",
          citazione: "Sometime too hot the eye of heaven shines",
          opzioni: ["La luna", "Dio", "Il sole", "Le stelle"],
          giusta: 2,
          spiegazione:
            "È una metafora: il sole è l'occhio del cielo. Nel verso dopo ha anche un \"volto dorato\" (gold complexion): è personificato.",
          rivedi: "VERSI 5–8: IL SOLE E IL DECLINO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "In quale punto il sonetto cambia direzione (la volta)?",
          opzioni: [
            "Al verso 5, con \"Sometime\"",
            "Al verso 9, con \"But\"",
            "Al verso 13, con \"So long\"",
          ],
          giusta: 1,
          spiegazione:
            "Fino al verso 8 il poeta elenca i difetti dell'estate; con \"But\" passa all'eterna estate della persona amata.",
          rivedi: "VERSI 9–12: LA SVOLTA",
        },
        {
          tipo: "sottotitolo",
          testo: "L'inglese di Shakespeare",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni forma antica alla forma moderna.",
          coppie: [
            ["thou", "you (soggetto)"],
            ["thee", "you (complemento)"],
            ["thy", "your"],
            ["art", "are"],
            ["hath", "has"],
          ],
          spiegazione:
            "Thou / thee / thy funzionano come I / me / my (lezione 16{1}).",
          rivedi: "L'INGLESE DI SHAKESPEARE",
        },
        {
          tipo: "completa",
          consegna: "Completa il verso con la forma antica di \"are\".",
          prima: "Thou",
          dopo: "more lovely and more temperate",
          risposte: ["art"],
          spiegazione: "Thou art = you are.",
          rivedi: "L'INGLESE DI SHAKESPEARE",
        },
        {
          tipo: "completa",
          consegna: "Completa il verso con la forma antica di \"has\".",
          prima: "And summer's lease",
          dopo: "all too short a date",
          risposte: ["hath"],
          spiegazione: "Hath = has: al posto della -s, l'inglese antico usava -th.",
          rivedi: "VERSI 3–4: IL VENTO E IL TEMPO",
        },
        {
          tipo: "sottotitolo",
          testo: "Rimetti in ordine",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi il verso nell'ordine dell'inglese moderno.",
          citazione: "And often is his gold complexion dimm'd",
          parole: ["often", "gold", "and", "dimmed", "his", "is", "complexion"],
          soluzione: ["and", "his", "gold", "complexion", "is", "often", "dimmed"],
          spiegazione:
            "È un passivo (is dimmed, lezione 42{1}), e l'avverbio di frequenza va tra is e il participio (lezione 11{3}).",
          rivedi: "VERSI 5–8: IL SOLE E IL DECLINO",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi il verso nell'ordine dell'inglese moderno.",
          citazione: "Sometime too hot the eye of heaven shines",
          parole: ["too", "the", "shines", "sometimes", "heaven", "hot", "eye", "of"],
          soluzione: ["sometimes", "the", "eye", "of", "heaven", "shines", "too", "hot"],
          spiegazione:
            "Nell'ordine normale il soggetto (the eye of heaven) viene prima del verbo, e \"too hot\" va dopo il verbo. Sometime, nell'inglese di Shakespeare, significa sometimes.",
          rivedi: "VERSI 5–8: IL SOLE E IL DECLINO",
        },
        {
          tipo: "riordina",
          consegna: "Riscrivi la frase nell'ordine normale.",
          citazione: "So long lives this",
          parole: ["long", "lives", "this", "so"],
          soluzione: ["this", "lives", "so", "long"],
          spiegazione:
            "Shakespeare mette il soggetto (this) dopo il verbo per il ritmo e per la ripetizione di \"So long\" (anafora).",
          rivedi: "VERSI 13–14: IL DISTICO",
        },
        {
          tipo: "sottotitolo",
          testo: "Trova la struttura",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale struttura grammaticale c'è all'inizio di questo verso?",
          citazione: "Nor shall Death brag thou wander'st in his shade",
          opzioni: [
            "Una forma passiva",
            "Un'inversione dopo una negazione",
            "Un do enfatico",
            "Un condizionale",
          ],
          giusta: 1,
          spiegazione:
            "Dopo Nor, shall va prima del soggetto (Death), come in una domanda (lezione 52{2}).",
          rivedi: "VERSI 9–12: LA SVOLTA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Perché c'è \"do\" in questo verso?",
          citazione: "Rough winds do shake the darling buds of May",
          opzioni: [
            "Perché è una domanda",
            "Perché è una frase negativa",
            "Per dare enfasi al verbo shake",
          ],
          giusta: 2,
          spiegazione:
            "È il do enfatico: rafforza il verbo, come in \"I do like it!\" (lezione 52{6}). Aiuta anche il ritmo del verso.",
          rivedi: "VERSI 3–4: IL VENTO E IL TEMPO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Che cosa è stato omesso in questa frase?",
          citazione: "that fair thou ow'st",
          opzioni: [
            "Il pronome relativo (that / which)",
            "L'articolo the",
            "Il verbo to be",
          ],
          giusta: 0,
          spiegazione:
            "That fair (which) thou ow'st: il pronome relativo si può togliere quando è complemento (lezione 43{3}).",
          rivedi: "VERSI 9–12: LA SVOLTA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Perché dopo When c'è il presente, anche se si parla del futuro?",
          citazione: "When in eternal lines to time thou grow'st",
          opzioni: [
            "È un errore di Shakespeare",
            "Dopo when, il futuro si esprime con il presente",
            "Perché il verso parla del passato",
          ],
          giusta: 1,
          spiegazione:
            "Come dopo if, dopo when non si usa will: \"I'll call you when I arrive\" (lezione 34{4}).",
          rivedi: "VERSI 9–12: LA SVOLTA",
        },
        {
          tipo: "sottotitolo",
          testo: "Rime e ritmo",
        },
        {
          tipo: "seleziona",
          consegna: "Tocca le parole che rimano con \"day\". Attenzione: conta il suono, non la grafia.",
          parole: ["May", "date", "shade", "temperate", "fade", "day"],
          giuste: [0, 5],
          spiegazione:
            "Day e May finiscono con lo stesso suono \"-ei\". Date sembra simile, ma finisce con una t: rima con temperate. Shade e fade rimano tra loro.",
          rivedi: "VERSI 3–4: IL VENTO E IL TEMPO",
        },
        {
          tipo: "seleziona",
          consegna: "Ecco il verso 4 diviso in sillabe. Tocca le 5 sillabe accentate.",
          parole: ["and", "sum", "mer's", "lease", "hath", "all", "too", "short", "a", "date"],
          giuste: [1, 3, 5, 7, 9],
          sillabe: true,
          spiegazione:
            "and SUM | mer's LEASE | hath ALL | too SHORT | a DATE: cinque giambi, un accento ogni due sillabe. Leggilo ad alta voce battendo la mano sulle sillabe forti.",
          rivedi: "IL METRO: IL PENTAMETRO GIAMBICO",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Perché \"dimm'd\" si scrive con l'apostrofo?",
          opzioni: [
            "Per indicare una parola straniera",
            "Perché -ed non è una sillaba in più: dimm'd ha una sola sillaba",
            "Perché è un errore di stampa",
          ],
          giusta: 1,
          spiegazione:
            "L'apostrofo garantisce che il verso abbia dieci sillabe. Anche oggi -ed è una sillaba solo dopo t e d (lezione 22{4}).",
          rivedi: "IL RITMO NEL TESTO",
        },
        {
          tipo: "sottotitolo",
          testo: "Figure retoriche",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale figura retorica è questa?",
          citazione: "Nor lose possession… / Nor shall Death brag…",
          opzioni: ["Metafora", "Anafora", "Antitesi", "Domanda retorica"],
          giusta: 1,
          spiegazione:
            "L'anafora (anaphora) ripete la stessa parola all'inizio di versi vicini. Succede anche con \"So long… / So long…\" nel distico.",
          rivedi: "VERSI 9–12: LA SVOLTA",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "Quale figura retorica è questa?",
          citazione: "And summer's lease hath all too short a date",
          opzioni: ["Personificazione", "Anafora", "Metafora", "Polyptoton"],
          giusta: 2,
          spiegazione:
            "L'estate è paragonata a un contratto d'affitto (lease) senza dire \"come\": è una metafora (metaphor).",
          rivedi: "VERSI 3–4: IL VENTO E IL TEMPO",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni figura retorica al suo esempio nel sonetto.",
          coppie: [
            ["personification", "Death brag"],
            ["rhetorical question", "Shall I compare thee…?"],
            ["polyptoton", "every fair from fair"],
            ["antithesis", "summer fades / eternal summer"],
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
          consegna: "Traduci in italiano il distico finale.",
          testo: "So long as men can breathe or eyes can see,\nSo long lives this, and this gives life to thee.",
          soluzione:
            "Finché gli uomini respireranno e gli occhi potranno vedere, vivrà questa poesia, e questa darà vita a te.",
          spiegazione:
            "Hai tradotto \"this\" con \"questa poesia\" o \"questi versi\"? È la scelta più chiara: \"this\" si riferisce al sonetto stesso.",
          rivedi: "VERSI 13–14: IL DISTICO",
        },
        {
          tipo: "scrivi",
          consegna: "Write a short analysis (4–5 sentences) of the third quatrain (lines 9–12).",
          punti: [
            "the volta: what changes with \"But\"",
            "the personification of Death",
            "the meaning of \"eternal lines\"",
            "one grammar structure (for example the inversion after Nor)",
          ],
          modello:
            "The third quatrain marks the volta of the sonnet. With the word \"But\", the poet moves from the faults of summer to the eternal summer of the beloved, which \"shall not fade\". Death is personified as a boastful figure who cannot claim the beloved, and the inversion \"Nor shall Death brag\" gives the line a solemn, emphatic tone. The key image is \"eternal lines\": the lines of the poem itself, which will make the beloved grow with time instead of being destroyed by it.",
          spiegazione:
            "Confronta: hai citato il testo tra virgolette? Hai usato termini tecnici come volta, personification, inversion? Sono le cose che un esaminatore cerca.",
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
