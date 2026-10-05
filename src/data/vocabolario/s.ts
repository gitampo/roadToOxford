import { Voce } from "@/types/vocabolario";

export const S: Voce[] = [
  {
    id: "say",
    parola: "say",
    fonetica: "/seɪ/",
    descrizione: "Pronunciare delle parole: dire.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "says · said · said · saying",
        significati: [
          {
            indicazione: "con le parole",
            traduzioni: ["dire"],
            esempi: [
              { en: "She said she was tired.", it: "Ha detto che era stanca." },
              { en: "What did he say to you?", it: "Cosa ti ha detto?" },
            ],
          },
          {
            indicazione: "un testo, un cartello",
            traduzioni: ["dire", "esserci scritto"],
            esempi: [{ en: "The sign says \"No parking\".", it: "Sul cartello c'è scritto \"Divieto di sosta\"." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "let's say",
        significati: [
          {
            traduzioni: ["diciamo", "mettiamo"],
            esempi: [{ en: "Let's meet at, let's say, seven?", it: "Ci vediamo alle, diciamo, sette?" }],
          },
        ],
      },
      {
        testo: "that is to say",
        significati: [
          {
            traduzioni: ["cioè", "vale a dire"],
            etichette: ["formale"],
            esempi: [{ en: "He left last week, that is to say on Monday.", it: "È partito la settimana scorsa, cioè lunedì." }],
          },
        ],
      },
    ],
    attenzione: [
      "Say o tell? Tell vuole la persona subito dopo (tell me), say no (say something, say something to me). She told me she was tired = She said she was tired.",
      "Says si pronuncia /sez/ e said /sed/, non /seɪz/ e /seɪd/.",
    ],
    lezioni: [{ id: "42", riquadro: 3 }],
  },
  {
    id: "see",
    parola: "see",
    fonetica: "/siː/",
    descrizione: "Percepire con gli occhi: vedere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "sees · saw · seen · seeing",
        significati: [
          {
            indicazione: "con gli occhi",
            traduzioni: ["vedere"],
            esempi: [{ en: "I can see the sea from my window.", it: "Dalla mia finestra vedo il mare." }],
          },
          {
            indicazione: "capire",
            traduzioni: ["capire"],
            esempi: [{ en: "I see what you mean.", it: "Capisco cosa intendi." }],
          },
          {
            indicazione: "incontrare, frequentare",
            traduzioni: ["vedere", "incontrare", "frequentare"],
            esempi: [
              { en: "I'm seeing Tom tonight.", it: "Stasera vedo Tom." },
              { en: "Are you seeing anyone?", it: "Stai uscendo con qualcuno?" },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "I see",
        significati: [
          {
            traduzioni: ["ah, capisco"],
            esempi: [{ en: "— The shop's closed on Mondays. — I see.", it: "— Il negozio è chiuso il lunedì. — Ah, capisco." }],
          },
        ],
      },
      {
        testo: "see you",
        significati: [
          {
            traduzioni: ["ci vediamo", "a presto"],
            etichette: ["informale"],
            esempi: [{ en: "See you tomorrow!", it: "Ci vediamo domani!" }],
          },
        ],
      },
      {
        testo: "let me see",
        significati: [
          {
            traduzioni: ["vediamo", "fammi pensare"],
            esempi: [{ en: "Let me see... yes, I'm free on Friday.", it: "Vediamo... sì, venerdì sono libero." }],
          },
        ],
      },
    ],
    attenzione: [
      "Con see si usa spesso can: I can see it = lo vedo.",
      "Quando vuol dire vedere, see non va al -ing: I see a bird, non I'm seeing a bird. Va al -ing se vuol dire incontrare: I'm seeing the doctor tomorrow.",
    ],
    lezioni: [{ id: "25", riquadro: 6 }],
  },
  {
    id: "sensible",
    parola: "sensible",
    fonetica: "/ˈsensəbl/",
    descrizione: "Falso amico: significa \"ragionevole\", non \"sensibile\".",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["ragionevole", "assennato", "sensato"],
            esempi: [
              { en: "That's a very sensible decision.", it: "È una decisione molto sensata." },
              { en: "Wear sensible shoes for the walk.", it: "Per la camminata mettiti scarpe comode." },
            ],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "sensibile",
      spiegazione: "Sensibile si dice sensitive: She's very sensitive = è molto sensibile.",
    },
    lezioni: [{ id: "50", riquadro: 7 }],
  },
  {
    id: "stop",
    parola: "stop",
    fonetica: "/stɒp/",
    descrizione: "Smettere di muoversi o di fare qualcosa.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "stops · stopped · stopped · stopping",
        significati: [
          {
            indicazione: "non muoversi più",
            traduzioni: ["fermarsi", "fermare"],
            esempi: [
              { en: "The bus stops outside my house.", it: "L'autobus si ferma davanti a casa mia." },
              { en: "The police stopped the car.", it: "La polizia ha fermato la macchina." },
            ],
          },
          {
            indicazione: "+ -ing: non fare più",
            traduzioni: ["smettere di"],
            esempi: [{ en: "Stop talking!", it: "Smettila di parlare!" }],
          },
          {
            indicazione: "+ to: fermarsi per fare",
            traduzioni: ["fermarsi a", "fermarsi per"],
            esempi: [{ en: "We stopped to buy some petrol.", it: "Ci siamo fermati per fare benzina." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["fermata", "sosta"],
            esempi: [{ en: "Get off at the next stop.", it: "Scendi alla prossima fermata." }],
          },
        ],
      },
    ],
    attenzione: [
      "Stop + -ing = smettere; stop + to = fermarsi per fare. I stopped smoking (ho smesso di fumare) ≠ I stopped to smoke (mi sono fermato per fumare).",
    ],
    lezioni: [{ id: "48", riquadro: 6 }],
  },
  {
    id: "sympathetic",
    parola: "sympathetic",
    fonetica: "/ˌsɪmpəˈθetɪk/",
    descrizione: "Falso amico: significa \"comprensivo\", non \"simpatico\".",
    usi: [
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["comprensivo", "solidale"],
            esempi: [{ en: "My boss was very sympathetic when I was ill.", it: "Il mio capo è stato molto comprensivo quando ero malato." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "simpatico",
      spiegazione: "Simpatico si dice nice, friendly o likeable: He's really nice = è molto simpatico.",
    },
    attenzione: [
      "Sympathy è la comprensione per chi soffre: You have my sympathy = mi dispiace molto per te.",
    ],
  },
  {
    id: "save",
    parola: "save",
    fonetica: "/seɪv/",
    descrizione: "Tenere da parte o mettere in salvo: risparmiare, salvare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "saves · saved · saved · saving",
        significati: [
          {
            indicazione: "da un pericolo",
            traduzioni: ["salvare"],
            esempi: [{ en: "The doctors saved his life.", it: "I medici gli hanno salvato la vita." }],
          },
          {
            indicazione: "soldi, tempo",
            traduzioni: ["risparmiare", "mettere da parte"],
            esempi: [
              { en: "I'm saving for a new car.", it: "Sto risparmiando per una macchina nuova." },
              { en: "Taking the motorway saves time.", it: "Prendere l'autostrada fa risparmiare tempo." },
            ],
          },
          {
            indicazione: "un file",
            traduzioni: ["salvare"],
            esempi: [{ en: "Don't forget to save your work.", it: "Non dimenticare di salvare il lavoro." }],
          },
          {
            indicazione: "un posto",
            traduzioni: ["tenere"],
            esempi: [{ en: "Can you save me a seat?", it: "Mi tieni un posto?" }],
          },
        ],
      },
    ],
    attenzione: [
      "Nel calcio save è la parata del portiere: What a save!",
      "I risparmi sono savings (sempre plurale): She spent all her savings.",
    ],
    lezioni: [{ id: "56", riquadro: 2 }],
  },
  {
    id: "seem",
    parola: "seem",
    fonetica: "/siːm/",
    descrizione: "Dare un'impressione: sembrare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "seems · seemed · seemed · seeming",
        significati: [
          {
            traduzioni: ["sembrare", "parere"],
            esempi: [
              { en: "She seems happy.", it: "Sembra felice." },
              { en: "It seems that the shop is closed.", it: "Sembra che il negozio sia chiuso." },
              { en: "He seems to know everyone.", it: "Sembra che conosca tutti." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Seem è un verbo di stato: non va al -ing. She seems tired, non She's seeming tired.",
      "Dopo seem si usa l'aggettivo, non l'avverbio: He seems nice, non He seems nicely.",
      "Seem riguarda l'impressione in generale; look l'aspetto visibile: You look tired (dalla faccia).",
    ],
    lezioni: [{ id: "13", riquadro: 3 }],
  },
  {
    id: "set",
    parola: "set",
    fonetica: "/set/",
    descrizione: "Mettere o fissare qualcosa; come nome, un insieme.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "sets · set · set · setting",
        significati: [
          {
            indicazione: "una sveglia, un orologio",
            traduzioni: ["mettere", "impostare", "regolare"],
            esempi: [{ en: "I set my alarm for six.", it: "Ho messo la sveglia alle sei." }],
          },
          {
            indicazione: "una data, una regola",
            traduzioni: ["fissare", "stabilire"],
            esempi: [{ en: "Have you set a date for the wedding?", it: "Avete fissato la data del matrimonio?" }],
          },
          {
            indicazione: "una storia",
            traduzioni: ["ambientare"],
            esempi: [{ en: "The novel is set in Victorian London.", it: "Il romanzo è ambientato nella Londra vittoriana." }],
          },
          {
            indicazione: "la tavola",
            traduzioni: ["apparecchiare"],
            esempi: [{ en: "Can you set the table?", it: "Puoi apparecchiare la tavola?" }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        significati: [
          {
            indicazione: "il sole",
            traduzioni: ["tramontare"],
            esempi: [{ en: "The sun sets at eight in summer.", it: "D'estate il sole tramonta alle otto." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["insieme", "serie", "set"],
            esempi: [{ en: "a set of keys", it: "un mazzo di chiavi" }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "set up",
        significati: [
          {
            traduzioni: ["fondare", "avviare", "allestire"],
            esempi: [{ en: "She set up her own company.", it: "Ha fondato una sua azienda." }],
          },
        ],
      },
      {
        testo: "set off",
        significati: [
          {
            traduzioni: ["partire", "mettersi in viaggio"],
            esempi: [{ en: "We set off early in the morning.", it: "Siamo partiti la mattina presto." }],
          },
        ],
      },
    ],
    attenzione: ["Set è uguale in tutte e tre le forme: set, set, set."],
    lezioni: [
      { id: "57", riquadro: 4 },
      { id: "57", riquadro: 6 },
    ],
  },
  {
    id: "share",
    parola: "share",
    fonetica: "/ʃeə(r)/",
    descrizione: "Usare o dare in parte agli altri: condividere, dividere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "shares · shared · shared · sharing",
        significati: [
          {
            traduzioni: ["condividere", "dividere", "spartire"],
            esempi: [
              { en: "I share a flat with two friends.", it: "Divido l'appartamento con due amici." },
              { en: "Let's share the bill.", it: "Dividiamo il conto." },
              { en: "Thanks for sharing your ideas.", it: "Grazie di aver condiviso le tue idee." },
            ],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "una parte",
            traduzioni: ["parte", "quota"],
            esempi: [{ en: "Everyone must do their share.", it: "Ognuno deve fare la sua parte." }],
          },
          {
            indicazione: "in borsa",
            traduzioni: ["azione"],
            esempi: [{ en: "She bought shares in the company.", it: "Ha comprato azioni della società." }],
          },
        ],
      },
    ],
    attenzione: ["Condividere con qualcuno è share with: share a room with my sister."],
  },
  {
    id: "show",
    parola: "show",
    fonetica: "/ʃəʊ/",
    descrizione: "Far vedere qualcosa: mostrare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "shows · showed · shown · showing",
        significati: [
          {
            indicazione: "far vedere",
            traduzioni: ["mostrare", "far vedere"],
            esempi: [{ en: "Show me your photos!", it: "Fammi vedere le tue foto!" }],
          },
          {
            indicazione: "dimostrare",
            traduzioni: ["dimostrare", "indicare"],
            esempi: [{ en: "The results show that the method works.", it: "I risultati dimostrano che il metodo funziona." }],
          },
          {
            indicazione: "spiegare come",
            traduzioni: ["insegnare", "far vedere come"],
            esempi: [{ en: "Can you show me how to do it?", it: "Mi fai vedere come si fa?" }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["spettacolo", "programma", "mostra"],
            esempi: [{ en: "It's my favourite TV show.", it: "È il mio programma TV preferito." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "show off",
        significati: [
          {
            traduzioni: ["mettersi in mostra", "fare lo sbruffone"],
            esempi: [{ en: "Stop showing off!", it: "Smettila di metterti in mostra!" }],
          },
        ],
      },
      {
        testo: "show up",
        significati: [
          {
            traduzioni: ["presentarsi", "farsi vedere"],
            etichette: ["informale"],
            esempi: [{ en: "He didn't show up for the meeting.", it: "Non si è presentato alla riunione." }],
          },
        ],
      },
    ],
    attenzione: ["Mostrare qualcosa a qualcuno: show me the photo o show the photo to me. Mai show to me the photo."],
  },
  {
    id: "sign",
    parola: "sign",
    fonetica: "/saɪn/",
    descrizione: "Un segnale o un cartello; come verbo, firmare.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "scritto",
            traduzioni: ["cartello", "insegna"],
            esempi: [{ en: "The sign says \"Keep off the grass\".", it: "Il cartello dice \"Vietato calpestare l'erba\"." }],
          },
          {
            indicazione: "un indizio",
            traduzioni: ["segno", "segnale", "sintomo"],
            esempi: [{ en: "Dark clouds are a sign of rain.", it: "Le nuvole scure sono segno di pioggia." }],
          },
          {
            indicazione: "un gesto",
            traduzioni: ["segno", "cenno"],
            esempi: [{ en: "She made a sign to me to be quiet.", it: "Mi ha fatto segno di stare zitto." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "signs · signed · signed · signing",
        significati: [
          {
            traduzioni: ["firmare"],
            esempi: [{ en: "Sign here, please.", it: "Firmi qui, per favore." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "sign up (for)",
        significati: [
          {
            traduzioni: ["iscriversi (a)"],
            esempi: [{ en: "I've signed up for a yoga class.", it: "Mi sono iscritto a un corso di yoga." }],
          },
        ],
      },
    ],
    attenzione: [
      "La g è muta: sign si pronuncia /saɪn/. Nella parola signature (firma) invece si sente: /ˈsɪɡnətʃə/.",
      "La firma è signature, non sign.",
    ],
  },
  {
    id: "since",
    parola: "since",
    fonetica: "/sɪns/",
    descrizione: "Da un momento del passato fino a ora: da; anche siccome.",
    usi: [
      {
        categoria: "preposizione",
        significati: [
          {
            indicazione: "un punto preciso nel tempo",
            traduzioni: ["da", "dal"],
            esempi: [
              { en: "I've lived here since 2019.", it: "Vivo qui dal 2019." },
              { en: "I haven't seen her since Monday.", it: "Non la vedo da lunedì." },
            ],
          },
        ],
      },
      {
        categoria: "congiunzione",
        significati: [
          {
            indicazione: "il tempo",
            traduzioni: ["da quando"],
            esempi: [{ en: "I've known him since we were children.", it: "Lo conosco da quando eravamo bambini." }],
          },
          {
            indicazione: "la causa",
            traduzioni: ["siccome", "dato che", "poiché"],
            esempi: [{ en: "Since it's raining, let's stay in.", it: "Siccome piove, restiamo a casa." }],
          },
        ],
      },
    ],
    attenzione: [
      "Since vuole un punto nel tempo (since Monday, since 2019); for una durata (for three days, for a year).",
      "Con since e for si usa il present perfect, non il presente come in italiano: I've lived here since 2019, non I live here since 2019.",
    ],
    lezioni: [
      { id: "31", riquadro: 2 },
      { id: "31", riquadro: 6 },
    ],
  },
  {
    id: "sort",
    parola: "sort",
    fonetica: "/sɔːt/",
    descrizione: "Tipo, genere; come verbo, ordinare o classificare.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["tipo", "genere"],
            esempi: [{ en: "What sort of films do you like?", it: "Che tipo di film ti piace?" }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "sorts · sorted · sorted · sorting",
        significati: [
          {
            traduzioni: ["ordinare", "classificare", "smistare"],
            esempi: [{ en: "Sort the words into two groups.", it: "Dividi le parole in due gruppi." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "sort out",
        significati: [
          {
            traduzioni: ["risolvere", "sistemare", "mettere in ordine"],
            esempi: [{ en: "Don't worry, I'll sort it out.", it: "Non preoccuparti, ci penso io a sistemare tutto." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "sort of",
        significati: [
          {
            traduzioni: ["più o meno", "un po'", "tipo"],
            etichette: ["informale"],
            esempi: [{ en: "— Do you understand? — Sort of.", it: "— Capisci? — Più o meno." }],
          },
        ],
      },
    ],
    attenzione: [
      "Sort non vuol dire \"sorte\" (destino): quella è fate o luck.",
      "Sorted! nel parlato britannico vuol dire \"Sistemato! Tutto a posto!\".",
    ],
    lezioni: [{ id: "57", riquadro: 1 }],
  },
  {
    id: "spend",
    parola: "spend",
    fonetica: "/spend/",
    descrizione: "Usare soldi o tempo: spendere, passare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "spends · spent · spent · spending",
        significati: [
          {
            indicazione: "soldi",
            traduzioni: ["spendere"],
            esempi: [{ en: "I spent £50 on books.", it: "Ho speso 50 sterline in libri." }],
          },
          {
            indicazione: "tempo",
            traduzioni: ["passare", "trascorrere"],
            esempi: [
              { en: "We spent the weekend in Bath.", it: "Abbiamo passato il fine settimana a Bath." },
              { en: "She spends hours reading.", it: "Passa ore a leggere." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Si spende per qualcosa con on: spend money on clothes, non for clothes.",
      "Passare il tempo facendo qualcosa = spend + tempo + -ing: I spent the day studying.",
    ],
  },
  {
    id: "stand",
    parola: "stand",
    fonetica: "/stænd/",
    descrizione: "Stare in piedi; nelle negative, sopportare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "stands · stood · stood · standing",
        significati: [
          {
            indicazione: "in posizione",
            traduzioni: ["stare in piedi", "alzarsi"],
            esempi: [
              { en: "We had to stand for the whole journey.", it: "Siamo dovuti stare in piedi per tutto il viaggio." },
              { en: "Please stand.", it: "Alzatevi, per favore." },
            ],
          },
          {
            indicazione: "un edificio",
            traduzioni: ["trovarsi", "sorgere"],
            esempi: [{ en: "The castle stands on a hill.", it: "Il castello sorge su una collina." }],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo, nelle negative",
        significati: [
          {
            traduzioni: ["sopportare"],
            esempi: [
              { en: "I can't stand this music.", it: "Non sopporto questa musica." },
              { en: "She can't stand waiting.", it: "Non sopporta aspettare." },
            ],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "stand up",
        significati: [
          {
            traduzioni: ["alzarsi (in piedi)"],
            esempi: [{ en: "Everyone stood up when she came in.", it: "Quando è entrata si sono alzati tutti." }],
          },
        ],
      },
      {
        testo: "stand for",
        significati: [
          {
            traduzioni: ["stare per", "significare"],
            esempi: [{ en: "What does BBC stand for?", it: "Cosa vuol dire la sigla BBC?" }],
          },
        ],
      },
      {
        testo: "stand up for",
        significati: [
          {
            traduzioni: ["difendere", "prendere le difese di"],
            esempi: [{ en: "Stand up for your rights.", it: "Difendi i tuoi diritti." }],
          },
        ],
      },
    ],
    attenzione: [
      "Con il significato di \"sopportare\", stand vuole -ing: I can't stand getting up early.",
      "Stare in piedi in questo momento è be standing: She's standing by the door.",
    ],
    lezioni: [
      { id: "47", riquadro: 2 },
      { id: "57", riquadro: 2 },
    ],
  },
  {
    id: "stay",
    parola: "stay",
    fonetica: "/steɪ/",
    descrizione: "Non andarsene da un posto: restare, rimanere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "stays · stayed · stayed · staying",
        significati: [
          {
            indicazione: "non andarsene",
            traduzioni: ["restare", "rimanere"],
            esempi: [{ en: "Stay here, I'll be back in a minute.", it: "Resta qui, torno subito." }],
          },
          {
            indicazione: "per un breve periodo",
            traduzioni: ["alloggiare", "stare"],
            esempi: [{ en: "We stayed in a small hotel.", it: "Abbiamo alloggiato in un piccolo albergo." }],
          },
          {
            indicazione: "+ aggettivo",
            traduzioni: ["restare", "mantenersi"],
            esempi: [{ en: "Stay calm.", it: "Resta calmo." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["soggiorno", "permanenza"],
            esempi: [{ en: "Enjoy your stay!", it: "Buon soggiorno!" }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "stay in / stay up",
        significati: [
          {
            traduzioni: ["restare a casa / restare alzato"],
            esempi: [{ en: "We stayed up until 2 a.m.", it: "Siamo rimasti alzati fino alle due di notte." }],
          },
        ],
      },
    ],
    attenzione: [
      "Stay non vuol dire \"stare\" nel senso di essere: Come stai? = How are you?, non How do you stay?",
      "Stare a casa di qualcuno è stay with somebody: I'm staying with friends.",
    ],
    lezioni: [{ id: "20", riquadro: 6 }],
  },
  {
    id: "still",
    parola: "still",
    fonetica: "/stɪl/",
    descrizione: "Ancora, tuttora; come aggettivo, fermo.",
    usi: [
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "continua ancora",
            traduzioni: ["ancora", "tuttora"],
            esempi: [
              { en: "Are you still hungry?", it: "Hai ancora fame?" },
              { en: "She still lives with her parents.", it: "Vive ancora con i suoi genitori." },
            ],
          },
          {
            indicazione: "nonostante questo",
            traduzioni: ["comunque", "eppure", "tuttavia"],
            esempi: [{ en: "It was raining. Still, we had a good time.", it: "Pioveva. Comunque ci siamo divertiti." }],
          },
        ],
      },
      {
        categoria: "aggettivo",
        significati: [
          {
            traduzioni: ["fermo", "immobile", "calmo"],
            esempi: [
              { en: "Keep still!", it: "Stai fermo!" },
              { en: "still water", it: "acqua naturale" },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Still dice che una cosa continua (I'm still waiting); yet si usa nelle negative per qualcosa che non è ancora successo (He hasn't arrived yet).",
      "Still va prima del verbo principale ma dopo be: She still works there; she is still at work.",
      "Al bar l'acqua naturale è still water, quella frizzante sparkling water.",
    ],
  },
  {
    id: "suggest",
    parola: "suggest",
    fonetica: "/səˈdʒest/",
    descrizione: "Proporre un'idea: suggerire, proporre.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "suggests · suggested · suggested · suggesting",
        significati: [
          {
            indicazione: "proporre",
            traduzioni: ["suggerire", "proporre", "consigliare"],
            esempi: [
              { en: "I suggest going by train.", it: "Propongo di andare in treno." },
              { en: "She suggested that we should leave early.", it: "Ha suggerito di partire presto." },
            ],
          },
          {
            indicazione: "far pensare",
            traduzioni: ["indicare", "far pensare che"],
            esempi: [{ en: "The evidence suggests that he is innocent.", it: "Le prove fanno pensare che sia innocente." }],
          },
        ],
      },
    ],
    attenzione: [
      "Suggest non vuole la persona con to + verbo: I suggest going, I suggest (that) you go. Mai I suggest you to go.",
      "Nei testi accademici suggest è prudente: This suggests that... (questo fa pensare che...), meno forte di prove.",
    ],
    lezioni: [
      { id: "48", riquadro: 2 },
      { id: "50", riquadro: 4 },
    ],
  },
  {
    id: "support",
    parola: "support",
    fonetica: "/səˈpɔːt/",
    descrizione: "Aiutare o tenere su: sostenere, appoggiare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "supports · supported · supported · supporting",
        significati: [
          {
            indicazione: "aiutare, appoggiare",
            traduzioni: ["sostenere", "appoggiare", "aiutare"],
            esempi: [{ en: "My parents always support me.", it: "I miei genitori mi sostengono sempre." }],
          },
          {
            indicazione: "una squadra",
            traduzioni: ["tifare per"],
            etichette: ["UK"],
            esempi: [{ en: "Which team do you support?", it: "Per che squadra tifi?" }],
          },
          {
            indicazione: "una tesi",
            traduzioni: ["sostenere", "confermare"],
            esempi: [{ en: "The data support this theory.", it: "I dati confermano questa teoria." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "non numerabile",
        significati: [
          {
            traduzioni: ["sostegno", "appoggio", "aiuto"],
            esempi: [{ en: "Thank you for your support.", it: "Grazie per il vostro sostegno." }],
          },
        ],
      },
    ],
    falsoAmico: {
      parola: "sopportare",
      spiegazione:
        "Sopportare (tollerare) si dice stand, bear o put up with: I can't stand him = non lo sopporto.",
    },
    attenzione: ["Il tifoso di una squadra è a supporter (UK) o a fan."],
  },
  {
    id: "suppose",
    parola: "suppose",
    fonetica: "/səˈpəʊz/",
    descrizione: "Pensare che una cosa sia probabile: supporre.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "supposes · supposed · supposed · supposing",
        significati: [
          {
            traduzioni: ["supporre", "immaginare", "credere"],
            esempi: [
              { en: "I suppose you're tired after the journey.", it: "Immagino che tu sia stanco dopo il viaggio." },
              { en: "— Can I come? — I suppose so.", it: "— Posso venire? — Direi di sì." },
            ],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "be supposed to",
        significati: [
          {
            indicazione: "un dovere o un'aspettativa",
            traduzioni: ["dovere", "essere previsto che"],
            esempi: [
              { en: "You're supposed to be at school!", it: "Dovresti essere a scuola!" },
              { en: "The film is supposed to be good.", it: "Dicono che il film sia bello." },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Be supposed to è molto comune e non ha un equivalente preciso in italiano: indica cosa ci si aspetta o cosa sarebbe la regola.",
      "In be supposed to la d finale quasi non si sente: /səˈpəʊs tə/.",
    ],
  },
  {
    id: "sure",
    parola: "sure",
    fonetica: "/ʃʊə(r)/",
    descrizione: "Che non ha dubbi: sicuro, certo.",
    usi: [
      {
        categoria: "aggettivo",
        dettaglio: "dopo il verbo",
        significati: [
          {
            traduzioni: ["sicuro", "certo"],
            esempi: [
              { en: "Are you sure?", it: "Sei sicuro?" },
              { en: "I'm not sure what to do.", it: "Non so bene cosa fare." },
            ],
          },
        ],
      },
      {
        categoria: "avverbio",
        significati: [
          {
            indicazione: "per dire sì",
            traduzioni: ["certo", "come no"],
            etichette: ["informale"],
            esempi: [{ en: "— Can I borrow your pen? — Sure.", it: "— Mi presti la penna? — Certo." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "make sure",
        significati: [
          {
            traduzioni: ["assicurarsi"],
            esempi: [{ en: "Make sure you lock the door.", it: "Assicurati di chiudere a chiave." }],
          },
        ],
      },
      {
        testo: "for sure",
        significati: [
          {
            traduzioni: ["di sicuro", "con certezza"],
            esempi: [{ en: "I don't know for sure.", it: "Non lo so con certezza." }],
          },
        ],
      },
    ],
    attenzione: [
      "Sicuro nel senso di \"non pericoloso\" è safe, non sure: Is it safe to swim here?",
      "Sure si pronuncia /ʃʊə/ o /ʃɔː/: la s suona come sc di scena.",
    ],
  },
];
