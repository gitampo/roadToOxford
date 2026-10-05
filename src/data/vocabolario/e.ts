import { Voce } from "@/types/vocabolario";

export const E: Voce[] = [
  {
    id: "eventually",
    parola: "eventually",
    fonetica: "/ɪˈventʃuəli/",
    descrizione: "Falso amico: significa \"alla fine\", non \"eventualmente\".",
    usi: [
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "dopo molto tempo, o dopo molti tentativi",
            traduzioni: ["alla fine", "finalmente", "col tempo"],
            esempi: [
              {
                en: "After three hours we eventually found the hotel.",
                it: "Dopo tre ore alla fine abbiamo trovato l'albergo.",
              },
              {
                en: "Don't worry, you'll get used to it eventually.",
                it: "Non preoccuparti, col tempo ti ci abituerai.",
              },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "eventualmente",
      spiegazione:
        "Eventually dice che una cosa succede di sicuro, ma tardi. \"Eventualmente\" (se capita, se serve) si dice if necessary, if need be o possibly.",
    },
    attenzione: [
      "\"Eventualmente ti chiamo\" è I'll call you if necessary. I'll call you eventually vuol dire \"prima o poi ti chiamo\".",
      "L'aggettivo eventual segue la stessa regola: the eventual winner è \"il vincitore finale\", non \"l'eventuale vincitore\" (che è the possible winner).",
    ],
    lezioni: [{ id: "50", riquadro: 7 }],
  },
  {
    id: "educated",
    parola: "educated",
    fonetica: "/ˈedʒukeɪtɪd/",
    descrizione: "Falso amico: significa \"istruito\", non \"educato\".",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "che ha studiato",
            traduzioni: ["istruito", "colto"],
            esempi: [
              { en: "She's a highly educated woman.", it: "È una donna molto istruita." },
              { en: "He was educated at Eton and Oxford.", it: "Ha studiato a Eton e a Oxford." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "an educated guess",
        significati: [
          {
            traduzioni: ["un'ipotesi fondata"],
            esempi: [{ en: "I don't know, but I can make an educated guess.", it: "Non lo so, ma posso fare un'ipotesi ragionata." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "educato",
      spiegazione:
        "Educated vuol dire istruito. Educato, nel senso di gentile e con le buone maniere, si dice polite o well-mannered.",
    },
    attenzione: [
      "\"Un bambino educato\" è a polite child. \"Maleducato\" è rude, non uneducated (che vuol dire senza istruzione).",
      "Education è l'istruzione, la scuola. L'educazione nel senso di buone maniere è good manners.",
    ],
  },
  {
    id: "enough",
    parola: "enough",
    fonetica: "/ɪˈnʌf/",
    descrizione: "Quanto basta: abbastanza, sufficiente.",
    usi: [
      {
        categoria: "aggettivo",
        dettaglio: "prima del nome",
        significati: [
          {
            traduzioni: ["abbastanza", "sufficiente"],
            esempi: [
              { en: "We don't have enough chairs.", it: "Non abbiamo abbastanza sedie." },
              { en: "Is there enough time?", it: "C'è abbastanza tempo?" },
            ],
          },
        ],
      },
      {
        categoria: "avverbio",
        dettaglio: "dopo l'aggettivo o l'avverbio",
        significati: [
          {
            traduzioni: ["abbastanza"],
            esempi: [
              { en: "The room isn't big enough.", it: "La stanza non è abbastanza grande." },
              { en: "You're not old enough to drive.", it: "Non hai l'età per guidare." },
            ],
          },
        ],
      },
      {
        categoria: "pronome",
        significati: [
          {
            traduzioni: ["abbastanza"],
            esempi: [{ en: "I've had enough, thanks.", it: "Sono a posto, grazie." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "That's enough!",
        significati: [
          {
            traduzioni: ["Basta!"],
            esempi: [{ en: "That's enough! Go to your room.", it: "Basta! Vai in camera tua." }],
          },
        ],
      },
      {
        testo: "have had enough (of)",
        significati: [
          {
            traduzioni: ["averne abbastanza (di)", "non poterne più"],
            esempi: [{ en: "I've had enough of this rain.", it: "Non ne posso più di questa pioggia." }],
          },
        ],
      },
    ],
    attenzione: [
      "La posizione cambia: enough va prima del nome (enough money) ma dopo l'aggettivo o l'avverbio (old enough, fast enough). Mai enough old.",
      "Si pronuncia /ɪˈnʌf/: gh suona come f, come in tough e laugh.",
    ],
  },
  {
    id: "experience",
    parola: "experience",
    fonetica: "/ɪkˈspɪəriəns/",
    descrizione: "Quello che si impara facendo, o una cosa vissuta.",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "non numerabile: conoscenza pratica",
            traduzioni: ["esperienza"],
            esempi: [
              { en: "Do you have any experience of teaching?", it: "Hai esperienza di insegnamento?" },
              { en: "She has ten years' experience as a nurse.", it: "Ha dieci anni di esperienza come infermiera." },
            ],
          },
          {
            indicazione: "numerabile: un fatto vissuto",
            traduzioni: ["esperienza"],
            esempi: [{ en: "Living abroad was an amazing experience.", it: "Vivere all'estero è stata un'esperienza fantastica." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "experiences · experienced · experienced · experiencing",
        significati: [
          {
            traduzioni: ["provare", "vivere", "subire"],
            esempi: [{ en: "Many students experience stress before exams.", it: "Molti studenti provano stress prima degli esami." }],
          },
        ],
      },
    ],
    attenzione: [
      "Experience non è \"esperimento\": in laboratorio si fa an experiment. We did an experiment, non We did an experience.",
      "L'esperienza lavorativa è work experience, non numerabile: niente an davanti.",
    ],
    lezioni: [{ id: "50", riquadro: 7 }],
  },
  {
    id: "earn",
    parola: "earn",
    fonetica: "/ɜːn/",
    descrizione: "Ricevere soldi in cambio del proprio lavoro: guadagnare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "earns · earned · earned · earning",
        significati: [
          {
            indicazione: "soldi, lavorando",
            traduzioni: ["guadagnare"],
            esempi: [{ en: "She earns £30,000 a year.", it: "Guadagna 30.000 sterline all'anno." }],
          },
          {
            indicazione: "rispetto, un premio",
            traduzioni: ["guadagnarsi", "meritarsi"],
            esempi: [{ en: "You've earned a rest.", it: "Ti sei meritato un po' di riposo." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "earn a living",
        significati: [
          {
            traduzioni: ["guadagnarsi da vivere"],
            esempi: [{ en: "He earns a living as a translator.", it: "Si guadagna da vivere facendo il traduttore." }],
          },
        ],
      },
    ],
    attenzione: [
      "Guadagnare lavorando è earn; vincere soldi (alla lotteria, in una gara) è win: I won £100.",
      "Gain vuol dire ottenere o aumentare (gain experience, gain weight), non guadagnare uno stipendio.",
    ],
  },
  {
    id: "easy",
    parola: "easy",
    fonetica: "/ˈiːzi/",
    descrizione: "Che non richiede fatica: facile.",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["facile", "semplice"],
            esempi: [
              { en: "The test was really easy.", it: "La verifica era facilissima." },
              { en: "It's not easy to learn a language.", it: "Non è facile imparare una lingua." },
            ],
          },
          {
            indicazione: "tranquillo, senza problemi",
            traduzioni: ["comodo", "tranquillo"],
            esempi: [{ en: "They have an easy life.", it: "Fanno una vita comoda." }],
          },
        ],
      },
      {
        categoria: "avverbio",
        significati: [
          {
            traduzioni: ["piano", "con calma"],
            etichette: ["informale"],
            esempi: [{ en: "Take it easy!", it: "Prenditela con calma!" }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "Easier said than done.",
        significati: [
          {
            traduzioni: ["Facile a dirsi."],
            esempi: [{ en: "Just relax? Easier said than done!", it: "Rilassarmi e basta? Facile a dirsi!" }],
          },
        ],
      },
    ],
    attenzione: [
      "L'avverbio di easy è easily: She passed easily. Easy come avverbio resta solo in espressioni fisse come take it easy e go easy on.",
      "Comparativo e superlativo: easier, easiest (la y diventa i).",
    ],
    lezioni: [{ id: "26", riquadro: 2 }],
  },
  {
    id: "editor",
    parola: "editor",
    fonetica: "/ˈedɪtə(r)/",
    descrizione: "Falso amico: significa \"redattore, curatore\", non \"editore\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "di un giornale",
            traduzioni: ["direttore", "caporedattore"],
            esempi: [{ en: "She's the editor of a national newspaper.", it: "È la direttrice di un quotidiano nazionale." }],
          },
          {
            indicazione: "di un libro, di un testo",
            traduzioni: ["redattore", "curatore"],
            esempi: [{ en: "The editor corrected my mistakes.", it: "Il redattore ha corretto i miei errori." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "editore",
      spiegazione: "L'editore, la casa che pubblica i libri, è publisher: Oxford University Press is a publisher.",
    },
    attenzione: ["Edit vuol dire correggere o curare un testo; la casa editrice è a publishing house."],
  },
  {
    id: "effort",
    parola: "effort",
    fonetica: "/ˈefət/",
    descrizione: "L'energia che si mette per fare qualcosa: sforzo, impegno.",
    usi: [
      {
        categoria: "sostantivo",
        significati: [
          {
            traduzioni: ["sforzo", "impegno", "fatica"],
            esempi: [
              { en: "Learning a language takes a lot of effort.", it: "Imparare una lingua richiede molto impegno." },
              { en: "Thanks for making the effort to come.", it: "Grazie di esserti sforzato di venire." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Fare uno sforzo si dice make an effort, non do an effort.",
      "L'accento è sulla prima sillaba: Effort.",
    ],
    lezioni: [{ id: "46", riquadro: 3 }],
  },
  {
    id: "either",
    parola: "either",
    fonetica: "/ˈaɪðə(r)/",
    descrizione: "L'uno o l'altro di due; nelle negative, neanche.",
    usi: [
      {
        categoria: "pronome",
        significati: [
          {
            indicazione: "tra due cose",
            traduzioni: ["l'uno o l'altro", "uno qualsiasi dei due"],
            esempi: [{ en: "— Tea or coffee? — Either is fine.", it: "— Tè o caffè? — Va bene tutto." }],
          },
        ],
      },
      {
        categoria: "avverbio",
        dettaglio: "in fondo a una frase negativa",
        significati: [
          {
            traduzioni: ["neanche", "nemmeno"],
            esempi: [{ en: "— I don't like it. — I don't like it either.", it: "— Non mi piace. — Neanche a me." }],
          },
        ],
      },
      {
        categoria: "congiunzione",
        dettaglio: "either... or",
        significati: [
          {
            traduzioni: ["o... o"],
            esempi: [{ en: "You can either stay or come with us.", it: "O resti o vieni con noi." }],
          },
        ],
      },
    ],
    attenzione: [
      "Neanche nelle frasi negative è either, non too o also: I don't either.",
      "Il contrario è neither... nor (né... né), che è già negativo: Neither Tom nor Anna came.",
      "Si pronuncia /ˈaɪðə/ in Gran Bretagna e /ˈiːðər/ in America: vanno bene tutte e due.",
    ],
  },
  {
    id: "end",
    parola: "end",
    fonetica: "/end/",
    descrizione: "L'ultima parte di qualcosa: fine.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "nel tempo",
            traduzioni: ["fine"],
            esempi: [{ en: "See you at the end of the month.", it: "Ci vediamo a fine mese." }],
          },
          {
            indicazione: "nello spazio",
            traduzioni: ["fondo", "estremità"],
            esempi: [{ en: "The bathroom is at the end of the corridor.", it: "Il bagno è in fondo al corridoio." }],
          },
          {
            indicazione: "uno scopo",
            traduzioni: ["fine", "scopo"],
            etichette: ["formale"],
            esempi: [{ en: "The end justifies the means.", it: "Il fine giustifica i mezzi." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "ends · ended · ended · ending",
        significati: [
          {
            traduzioni: ["finire", "terminare", "concludere"],
            esempi: [{ en: "How does the film end?", it: "Come finisce il film?" }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "in the end",
        significati: [
          {
            traduzioni: ["alla fine"],
            esempi: [{ en: "In the end, we decided to stay.", it: "Alla fine abbiamo deciso di restare." }],
          },
        ],
      },
      {
        testo: "end up",
        significati: [
          {
            traduzioni: ["finire per", "ritrovarsi"],
            esempi: [{ en: "We ended up sleeping in the car.", it: "Abbiamo finito per dormire in macchina." }],
          },
        ],
      },
    ],
    attenzione: [
      "In the end (alla fine, dopo tutto) e at the end of (alla fine di qualcosa) non sono uguali: at the end of the film, ma In the end we won.",
    ],
  },
  {
    id: "enjoy",
    parola: "enjoy",
    fonetica: "/ɪnˈdʒɔɪ/",
    descrizione: "Trarre piacere da qualcosa: godersi, divertirsi.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "enjoys · enjoyed · enjoyed · enjoying",
        significati: [
          {
            traduzioni: ["godersi", "apprezzare", "piacere"],
            esempi: [
              { en: "I really enjoyed the film.", it: "Il film mi è piaciuto molto." },
              { en: "She enjoys reading.", it: "Le piace leggere." },
            ],
          },
          {
            indicazione: "enjoy yourself",
            traduzioni: ["divertirsi"],
            esempi: [{ en: "Did you enjoy yourselves at the party?", it: "Vi siete divertiti alla festa?" }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "Enjoy your meal!",
        significati: [
          {
            traduzioni: ["Buon appetito!"],
            esempi: [{ en: "Here's your pizza. Enjoy your meal!", it: "Ecco la pizza. Buon appetito!" }],
          },
        ],
      },
    ],
    attenzione: [
      "Enjoy vuole sempre un oggetto: I enjoyed it o I enjoyed myself, mai solo I enjoyed.",
      "Dopo enjoy si usa -ing: I enjoy cooking, non I enjoy to cook.",
    ],
    lezioni: [{ id: "48", riquadro: 2 }],
  },
  {
    id: "estate",
    parola: "estate",
    fonetica: "/ɪˈsteɪt/",
    descrizione: "Falso amico: significa \"tenuta, proprietà\", non la stagione \"estate\".",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "un terreno con una grande casa",
            traduzioni: ["tenuta", "proprietà"],
            esempi: [{ en: "The family owns a large estate in Scotland.", it: "La famiglia possiede una grande tenuta in Scozia." }],
          },
          {
            indicazione: "un quartiere",
            traduzioni: ["quartiere", "complesso residenziale"],
            etichette: ["UK"],
            esempi: [{ en: "He grew up on a council estate.", it: "È cresciuto in un quartiere di case popolari." }],
          },
          {
            indicazione: "i beni di chi è morto",
            traduzioni: ["patrimonio", "eredità"],
            esempi: [{ en: "She left her estate to charity.", it: "Ha lasciato il suo patrimonio in beneficenza." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "estate",
      spiegazione: "La stagione dell'estate è summer.",
    },
    attenzione: ["Real estate = beni immobili; an estate agent (UK) = un agente immobiliare."],
  },
  {
    id: "even",
    parola: "even",
    fonetica: "/ˈiːvn/",
    descrizione: "Rafforza una sorpresa: perfino, anche.",
    usi: [
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "per una cosa sorprendente",
            traduzioni: ["perfino", "anche", "addirittura"],
            esempi: [
              { en: "Everyone came, even my grandmother.", it: "Sono venuti tutti, perfino mia nonna." },
              { en: "He didn't even say goodbye.", it: "Non ha neanche salutato." },
            ],
          },
          {
            indicazione: "+ comparativo",
            traduzioni: ["ancora"],
            esempi: [{ en: "Today is even colder than yesterday.", it: "Oggi fa ancora più freddo di ieri." }],
          },
        ],
      },
      {
        categoria: "aggettivo",
        significati: [
          {
            indicazione: "liscio, regolare",
            traduzioni: ["piano", "uniforme"],
            esempi: [{ en: "The floor isn't even.", it: "Il pavimento non è in piano." }],
          },
          {
            indicazione: "un numero",
            traduzioni: ["pari"],
            esempi: [{ en: "2, 4 and 6 are even numbers.", it: "2, 4 e 6 sono numeri pari." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "even though / even if",
        significati: [
          {
            traduzioni: ["anche se"],
            esempi: [
              { en: "She went to work even though she was ill.", it: "È andata al lavoro anche se era malata." },
              { en: "I'll go even if it rains.", it: "Ci vado anche se piove." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Even though parla di un fatto vero (anche se era malata, e lo era); even if di un'ipotesi (anche se piovesse).",
      "Nelle negative \"neanche\" si dice not even: Not even a word!",
    ],
    lezioni: [{ id: "55", riquadro: 3 }],
  },
  {
    id: "evidence",
    parola: "evidence",
    fonetica: "/ˈevɪdəns/",
    descrizione: "Fatti che dimostrano qualcosa: prove.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            traduzioni: ["prove", "prova", "dati"],
            esempi: [
              { en: "There's no evidence that he was there.", it: "Non c'è nessuna prova che lui fosse lì." },
              { en: "Scientists have found new evidence.", it: "Gli scienziati hanno trovato nuove prove." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Evidence è non numerabile: niente plurale e niente an. Una prova = a piece of evidence.",
      "Non vuol dire \"evidenza\" nel senso di cosa ovvia: è evidente = it's obvious o it's clear.",
      "Nei saggi è fondamentale: support your argument with evidence (sostieni la tesi con delle prove).",
    ],
  },
  {
    id: "expect",
    parola: "expect",
    fonetica: "/ɪkˈspekt/",
    descrizione: "Pensare che qualcosa succederà: aspettarsi.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "expects · expected · expected · expecting",
        significati: [
          {
            indicazione: "prevedere",
            traduzioni: ["aspettarsi", "prevedere"],
            esempi: [
              { en: "I didn't expect to see you here!", it: "Non mi aspettavo di vederti qui!" },
              { en: "It's expected to rain tomorrow.", it: "Domani è prevista pioggia." },
            ],
          },
          {
            indicazione: "una persona, una cosa in arrivo",
            traduzioni: ["aspettare"],
            esempi: [
              { en: "We're expecting guests tonight.", it: "Stasera aspettiamo ospiti." },
              { en: "She's expecting a baby.", it: "Aspetta un bambino." },
            ],
          },
          {
            indicazione: "pretendere",
            traduzioni: ["pretendere", "esigere"],
            esempi: [{ en: "Teachers expect you to do your homework.", it: "Gli insegnanti pretendono che tu faccia i compiti." }],
          },
        ],
      },
    ],
    attenzione: [
      "Expect (aspettarsi, pensare che arriverà) e wait for (aspettare, passare il tempo finché arriva) non sono uguali: I'm waiting for the bus.",
      "Hope è sperare: I hope it doesn't rain, ma I expect it will rain (penso che pioverà).",
    ],
  },
  {
    id: "explain",
    parola: "explain",
    fonetica: "/ɪkˈspleɪn/",
    descrizione: "Rendere chiaro qualcosa: spiegare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "explains · explained · explained · explaining",
        significati: [
          {
            traduzioni: ["spiegare"],
            esempi: [
              { en: "Can you explain this rule to me?", it: "Mi spieghi questa regola?" },
              { en: "Let me explain.", it: "Lascia che ti spieghi." },
            ],
          },
          {
            indicazione: "giustificare",
            traduzioni: ["spiegare", "giustificare"],
            esempi: [{ en: "That explains why he was so tired.", it: "Questo spiega perché era così stanco." }],
          },
        ],
      },
    ],
    attenzione: [
      "Spiegare qualcosa a qualcuno è explain something to somebody: Explain it to me, non Explain me it.",
      "Il nome è explanation (senza la i di explain): Thanks for the explanation.",
    ],
  },
];
