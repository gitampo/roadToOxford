import { Lezione } from "@/types/lezione";

export const medicoFarmacia: Lezione = {
  id: "S8",
  titolo: "Dal medico e in farmacia",
  descrizione: "Dire come stai, descrivere i sintomi, capire i consigli",
  chiavi: "medico, GP, sintomi, mal di testa, febbre, hurt, ricetta, emergenze",
  livello: "Situazioni",
  sottotitolo: "Situazioni · Lezione S8 · A2",
  citazione: {
    testo: "An apple a day keeps the doctor away.",
    fonte: "Proverbio inglese",
    traduzione: "Una mela al giorno toglie il medico di torno.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "COME FUNZIONA LA SANITÀ",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel Regno Unito la sanità pubblica si chiama NHS (National Health Service). Il medico di base è il GP (general practitioner), e il suo ambulatorio si chiama surgery o GP practice. Se studi o vivi lì per un periodo lungo, la prima cosa da fare è registrarti presso un GP (register with a GP): molte università hanno un ambulatorio convenzionato per gli studenti.",
        },
        {
          tipo: "tabella",
          righe: [
            ["the GP", "il medico di base"],
            ["the surgery", "l'ambulatorio del medico (non la chirurgia!)"],
            ["an appointment", "un appuntamento"],
            ["the chemist's / the pharmacy", "la farmacia"],
            ["a prescription", "una ricetta medica"],
            ["A&E (Accident and Emergency)", "il pronto soccorso"],
            ["NHS 111", "il numero per consigli medici non urgenti"],
            ["999 (o 112)", "il numero delle emergenze"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Per un problema non grave ma che ti preoccupa, prima di andare al pronto soccorso chiama il 111 o usa il sito dell'NHS: ti dicono dove andare. Il farmacista (pharmacist) può consigliarti per i disturbi leggeri senza bisogno del medico.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "I'd like to register with a GP.",
              it: "Vorrei registrarmi presso un medico di base.",
            },
            {
              en: "I'd like to make an appointment with a doctor.",
              it: "Vorrei prendere un appuntamento con un medico.",
            },
            {
              en: "Is there anything available today?",
              it: "C'è qualcosa di libero oggi?",
            },
          ],
        },
      ],
    },
    {
      titolo: "DIRE COME STAI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            '"Mi sento male" ha in inglese diverse versioni, e una di queste è una trappola. Nel Regno Unito I feel sick vuol dire "ho la nausea", non "sto male" in generale; e I\'ve been sick vuol dire "ho vomitato".',
        },
        {
          tipo: "tabella",
          righe: [
            [
              "I don't feel well. / I feel ill.",
              "Non mi sento bene. / Sto male.",
            ],
            ["I feel sick.", "Ho la nausea."],
            ["I've been sick.", "Ho vomitato."],
            ["I feel dizzy.", "Mi gira la testa."],
            [
              "I feel weak / tired all the time.",
              "Mi sento debole / sempre stanco.",
            ],
            [
              "I'm feeling a bit under the weather.",
              "Sono un po' giù di corda (non grave).",
            ],
          ],
        },
        {
          tipo: "testo",
          testo:
            "Le malattie comuni si dicono con have got e, spesso, con l'articolo a, che in italiano non mettiamo (lezioni 3{3} e 6{5}).",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I've got a cold.", it: "Ho il raffreddore." },
            { en: "I've got the flu.", it: "Ho l'influenza." },
            { en: "I've got a temperature.", it: "Ho la febbre." },
            { en: "I've got a sore throat.", it: "Ho mal di gola." },
            { en: "I've got a cough.", it: "Ho la tosse." },
            { en: "I have fever.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nel Regno Unito \"ho la febbre\" si dice più spesso I've got a temperature che I've got a fever. Il numero si dice così: I've got a temperature of 38, cioè 38 gradi. In America invece senti i gradi Fahrenheit: 100 °F sono circa 38 °C.",
        },
      ],
    },
    {
      titolo: "DOVE FA MALE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            'Per dire dove hai dolore ci sono due costruzioni. La prima usa ache (dolore persistente) attaccato alla parte del corpo; la seconda usa il verbo hurt, "fare male", con la parte del corpo come soggetto.',
        },
        {
          tipo: "tabella",
          righe: [
            ["a headache", "mal di testa"],
            ["(a) stomach ache", "mal di pancia, mal di stomaco"],
            ["(a) toothache", "mal di denti"],
            ["(an) earache", "mal d'orecchio"],
            ["(a) backache", "mal di schiena"],
            ["a sore throat", "mal di gola (con sore, non ache)"],
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "My knee hurts.", it: "Mi fa male il ginocchio." },
            { en: "My feet hurt.", it: "Mi fanno male i piedi." },
            { en: "It hurts here.", it: "Mi fa male qui." },
            {
              en: "It hurts when I breathe.",
              it: "Mi fa male quando respiro.",
            },
            {
              en: "My back is killing me!",
              it: "Ho un mal di schiena tremendo! (informale)",
            },
            { en: "My head hurts me.", sbagliato: true },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Con hurt in inglese non serve il "mi": la parte del corpo ha già il possessivo (lezione 5{5}). My head hurts, non my head hurts me. E attenzione a I\'m hurt, che vuol dire "sono ferito" (o "ci sono rimasto male"), non "mi fa male".',
        },
      ],
    },
    {
      titolo: "I SINTOMI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il medico vuole capire che cosa senti. Questo è il vocabolario per descriverlo con precisione.",
        },
        {
          tipo: "tabella",
          righe: [
            ["to cough / to sneeze", "tossire / starnutire"],
            [
              "a runny nose / a blocked nose",
              "il naso che cola / il naso chiuso",
            ],
            ["a rash", "uno sfogo sulla pelle"],
            ["itchy", "che prude"],
            ["swollen", "gonfio"],
            ["a bruise", "un livido"],
            ["a cut / a burn", "un taglio / una scottatura"],
            ["I've sprained my ankle.", "Ho preso una storta alla caviglia."],
            [
              "I think I've broken my wrist.",
              "Credo di essermi rotto il polso.",
            ],
            ["I can't sleep.", "Non riesco a dormire."],
            ["I've lost my appetite.", "Non ho appetito."],
          ],
        },
        {
          tipo: "nota",
          testo:
            "I've sprained my ankle e I've broken my wrist: per un incidente appena successo, che ha un effetto adesso, si usa il present perfect (lezione 29{5}).",
        },
      ],
    },
    {
      titolo: "LE DOMANDE DEL MEDICO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La domanda che arriva sempre è da quanto tempo hai il problema. Si fa con How long have you...? e il present perfect, simple o continuous: l'italiano usa il presente (\"da quanto tempo hai la tosse?\"), l'inglese no (lezioni 31{3} e 39{2}).",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "How long have you had the cough?",
              it: "Da quanto tempo hai la tosse?",
            },
            { en: "For about a week.", it: "Da circa una settimana." },
            { en: "Since Monday.", it: "Da lunedì." },
            {
              en: "I've been coughing for three days.",
              it: "Tossisco da tre giorni.",
            },
            { en: "I cough since three days.", sbagliato: true },
          ],
        },
        {
          tipo: "tabella",
          righe: [
            ["What seems to be the problem?", "Qual è il problema?"],
            ["Have you got any allergies?", "Ha delle allergie?"],
            ["Are you taking any medication?", "Prende dei farmaci?"],
            ["Does it hurt when I press here?", "Le fa male se premo qui?"],
            ["Have you had this before?", "L'ha già avuto in passato?"],
            ["Could you roll up your sleeve?", "Può tirare su la manica?"],
          ],
        },
        {
          tipo: "testo",
          testo: "E queste sono le domande che puoi fare tu:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Is it serious?", it: "È grave?" },
            {
              en: "How often should I take it?",
              it: "Ogni quanto devo prenderlo?",
            },
            { en: "Should I stay at home?", it: "Devo restare a casa?" },
            {
              en: "Could I have a sick note?",
              it: "Potrei avere un certificato medico?",
            },
          ],
        },
      ],
    },
    {
      titolo: "I CONSIGLI DEL MEDICO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il medico ti darà consigli con should, you'd better e need to (lezione 32{4}), e ti dirà che cosa fare se le cose non migliorano con il first conditional (lezione 34{3}).",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It's nothing serious.", it: "Non è niente di grave." },
            {
              en: "You should rest for a couple of days.",
              it: "Dovrebbe riposare per un paio di giorni.",
            },
            {
              en: "You'd better stay in bed.",
              it: "Farebbe meglio a stare a letto.",
            },
            {
              en: "You need to drink plenty of fluids.",
              it: "Deve bere molti liquidi.",
            },
            {
              en: "I'll give you a prescription.",
              it: "Le faccio una ricetta.",
            },
            {
              en: "Take one tablet three times a day after meals.",
              it: "Prenda una compressa tre volte al giorno dopo i pasti.",
            },
            {
              en: "If it doesn't get better in a few days, come back.",
              it: "Se non migliora in qualche giorno, torni.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Three times a day (tre volte al giorno): in inglese "al giorno", "alla settimana" si dicono con a, non con at the. Allo stesso modo: twice a week, once a month.',
        },
      ],
    },
    {
      titolo: "IN FARMACIA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel Regno Unito molti farmaci da banco, come il paracetamolo e l'ibuprofene, si trovano anche al supermercato, in confezioni piccole. Per tutto il resto, e per un consiglio, c'è il farmacista.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Can you recommend something for a cough?",
              it: "Mi può consigliare qualcosa per la tosse?",
            },
            {
              en: "Have you got anything for hay fever?",
              it: "Avete qualcosa per il raffreddore da fieno?",
            },
            {
              en: "Do I need a prescription for this?",
              it: "Serve la ricetta per questo?",
            },
            {
              en: "I'd like to collect a prescription.",
              it: "Vorrei ritirare un farmaco con la ricetta.",
            },
            { en: "How many should I take?", it: "Quante ne devo prendere?" },
          ],
        },
        {
          tipo: "tabella",
          righe: [
            ["painkillers", "antidolorifici"],
            ["tablets / pills", "compresse / pillole"],
            ["cough mixture / cough syrup", "sciroppo per la tosse"],
            ["throat sweets / lozenges", "pastiglie per la gola"],
            ["plasters", "cerotti (band-aids negli Stati Uniti)"],
            ["cream / ointment", "crema / pomata"],
            [
              "May cause drowsiness.",
              "Può causare sonnolenza (sulle confezioni).",
            ],
          ],
        },
        {
          tipo: "nota",
          testo:
            'Medicine è la parola giusta per "medicina, farmaco". Drugs significa anche "farmaci", ma è soprattutto la parola per "droghe": I need some drugs, detto in farmacia, suona male. E la ricetta del medico è a prescription: recipe è la ricetta di cucina.',
        },
      ],
    },
    {
      titolo: "LE EMERGENZE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In un'emergenza si chiama il 999 (funziona anche il 112). L'operatore chiede subito quale servizio ti serve, poi dove sei: tieni a mente l'indirizzo o un punto di riferimento.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Emergency, which service do you require?",
              it: "Emergenze, quale servizio le serve?",
            },
            { en: "Ambulance, please.", it: "Un'ambulanza, per favore." },
            { en: "There's been an accident.", it: "C'è stato un incidente." },
            { en: "Someone has collapsed.", it: "Una persona è svenuta." },
            { en: "He's not breathing.", it: "Non respira." },
            { en: "She's bleeding a lot.", it: "Sta perdendo molto sangue." },
            { en: "Call an ambulance!", it: "Chiamate un'ambulanza!" },
            { en: "Is there a doctor here?", it: "C'è un medico?" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Le tre risposte possibili alla prima domanda sono Police, Fire o Ambulance. Parla lentamente e non preoccuparti degli errori: l'operatore è abituato a chi non parla bene inglese e ti farà domande semplici.",
        },
      ],
    },
    {
      titolo: "UN DIALOGO: DAL GP",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Chiara ha la tosse e la febbre da qualche giorno. Ha preso un appuntamento dal GP del suo college.",
        },
        {
          tipo: "esempi",
          esempi: [
            {
              en: "Doctor: Hello, come in and take a seat. What seems to be the problem?",
              it: "Buongiorno, entri e si sieda. Qual è il problema?",
            },
            {
              en: "Chiara: I've got a bad cough and a sore throat, and I've had a temperature since Tuesday.",
              it: "Ho una brutta tosse e mal di gola, e ho la febbre da martedì.",
            },
            {
              en: "Doctor: I see. How high was your temperature?",
              it: "Capisco. Quanto aveva di febbre?",
            },
            {
              en: "Chiara: About thirty-eight and a half.",
              it: "Circa trentotto e mezzo.",
            },
            {
              en: "Doctor: Any other symptoms? Headache, aches and pains?",
              it: "Altri sintomi? Mal di testa, dolori?",
            },
            {
              en: "Chiara: Yes, my whole body aches, and I feel really tired.",
              it: "Sì, mi fa male tutto il corpo e mi sento molto stanca.",
            },
            {
              en: "Doctor: Are you taking any medication at the moment?",
              it: "Al momento prende qualche farmaco?",
            },
            { en: "Chiara: Just paracetamol.", it: "Solo paracetamolo." },
            {
              en: "Doctor: Let me listen to your chest. ... Breathe in deeply. ... OK, it's a viral infection. Nothing serious.",
              it: "Mi faccia ascoltare i polmoni. ... Respiri profondamente. ... Va bene, è un'infezione virale. Niente di grave.",
            },
            {
              en: "Chiara: So I don't need antibiotics?",
              it: "Quindi non mi servono antibiotici?",
            },
            {
              en: "Doctor: No, antibiotics don't work on viruses. You should rest and drink plenty of fluids. Keep taking paracetamol for the fever.",
              it: "No, gli antibiotici non funzionano sui virus. Dovrebbe riposare e bere molto. Continui a prendere il paracetamolo per la febbre.",
            },
            {
              en: "Chiara: Should I stay at home?",
              it: "Devo restare a casa?",
            },
            {
              en: "Doctor: Yes, at least until the fever goes. If you're not better in a week, come back and see me.",
              it: "Sì, almeno finché non passa la febbre. Se tra una settimana non sta meglio, torni da me.",
            },
            { en: "Chiara: Thank you, doctor.", it: "Grazie, dottore." },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Nota che il medico britannico, per un\'infezione virale, non prescrive antibiotici: è normale, e chiederli con insistenza non serve. Keep + -ing significa "continuare a": Keep taking paracetamol (lezione 48{2}).',
        },
      ],
    },
    {
      titolo: "GLI ERRORI TIPICI",
      blocchi: [
        {
          tipo: "esempi",
          esempi: [
            { en: "I have fever.", sbagliato: true },
            { en: "I've got a temperature.", it: "Ho la febbre." },
            { en: "I have cold.", sbagliato: true },
            { en: "I've got a cold.", it: "Ho il raffreddore." },
            { en: "I have pain at the stomach.", sbagliato: true },
            {
              en: "I've got stomach ache. / My stomach hurts.",
              it: "Ho mal di pancia.",
            },
            { en: "The doctor gave me a recipe.", sbagliato: true },
            {
              en: "The doctor gave me a prescription.",
              it: "Il medico mi ha fatto una ricetta.",
            },
            { en: "I'm sick since three days.", sbagliato: true },
            {
              en: "I've been ill for three days.",
              it: "Sto male da tre giorni.",
            },
          ],
        },
        {
          tipo: "nota",
          testo:
            'Surgery nel Regno Unito è soprattutto l\'ambulatorio del medico; vuol dire anche "intervento chirurgico" (He needs surgery), ma non è il reparto di chirurgia dell\'ospedale. Sick è l\'aggettivo americano per "malato"; nel Regno Unito si preferisce ill, perché sick fa pensare alla nausea.',
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
          testo: "La sanità britannica",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni parola al suo significato.",
          coppie: [
            ["GP", "medico di base"],
            ["surgery", "ambulatorio del medico"],
            ["A&E", "pronto soccorso"],
            ["prescription", "ricetta medica"],
          ],
          rivedi: "COME FUNZIONA LA SANITÀ",
        },
        {
          tipo: "sottotitolo",
          testo: "Come stai e dove fa male",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Una ragazza inglese ti dice "I feel sick". Che cosa ha?',
          opzioni: ["La febbre", "La nausea", "Il raffreddore"],
          giusta: 1,
          spiegazione:
            'Nel Regno Unito I feel sick vuol dire "ho la nausea". Per "sto male" si dice I don\'t feel well o I feel ill.',
          rivedi: "DIRE COME STAI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come si dice "Ho il raffreddore"?',
          opzioni: ["I have cold.", "I am cold.", "I've got a cold."],
          giusta: 2,
          spiegazione:
            'Con molte malattie serve l\'articolo: a cold. I am cold vuol dire "ho freddo".',
          rivedi: "DIRE COME STAI",
        },
        {
          tipo: "sceltaMultipla",
          domanda: 'Come si dice "Mi fa male il ginocchio"?',
          opzioni: ["My knee hurts.", "My knee hurts me.", "I hurt the knee."],
          giusta: 0,
          spiegazione:
            'La parte del corpo, con il possessivo, è il soggetto di hurt: non serve il "mi".',
          rivedi: "DOVE FA MALE",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Ho mal di testa".',
          prima: "I've got a",
          dopo: ".",
          risposte: ["headache"],
          spiegazione: "Head + ache = headache, con l'articolo a.",
          rivedi: "DOVE FA MALE",
        },
        {
          tipo: "abbina",
          consegna: "Abbina ogni sintomo alla traduzione.",
          coppie: [
            ["a runny nose", "il naso che cola"],
            ["a rash", "uno sfogo sulla pelle"],
            ["swollen", "gonfio"],
            ["a bruise", "un livido"],
            ["itchy", "che prude"],
          ],
          rivedi: "I SINTOMI",
        },
        {
          tipo: "sottotitolo",
          testo: "Dal medico",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Il medico chiede "How long have you had the cough?". Che cosa rispondi?',
          opzioni: ["Since five days.", "For five days.", "From five days."],
          giusta: 1,
          spiegazione:
            "Per una durata si usa for; since vuole un punto di partenza (since Monday).",
          rivedi: "LE DOMANDE DEL MEDICO",
        },
        {
          tipo: "riordina",
          consegna: 'Di\' al medico: "Tossisco da una settimana".',
          parole: ["coughing", "a", "for", "I've", "week", "been"],
          soluzione: ["I've", "been", "coughing", "for", "a", "week"],
          spiegazione:
            "Un'azione che dura fino a adesso: present perfect continuous + for.",
          rivedi: "LE DOMANDE DEL MEDICO",
        },
        {
          tipo: "completa",
          consegna: 'Completa: "Prenda una compressa due volte al giorno".',
          prima: "Take one tablet twice",
          dopo: "day.",
          risposte: ["a"],
          spiegazione:
            '"Al giorno" si dice a day: twice a day, three times a day.',
          rivedi: "I CONSIGLI DEL MEDICO",
        },
        {
          tipo: "sottotitolo",
          testo: "Farmacia ed emergenze",
        },
        {
          tipo: "sceltaMultipla",
          domanda: "In farmacia, che cosa chiedi?",
          opzioni: [
            "I need some drugs for my cough.",
            "Give me a recipe for my cough.",
            "Can you recommend something for a cough?",
          ],
          giusta: 2,
          spiegazione:
            "Drugs fa pensare alle droghe; recipe è la ricetta di cucina. Can you recommend something for...? è perfetto.",
          rivedi: "IN FARMACIA",
        },
        {
          tipo: "sceltaMultipla",
          domanda:
            'Chiami il 999 e l\'operatore chiede "Which service do you require?". Una persona è svenuta. Che cosa rispondi?',
          opzioni: ["Ambulance, please.", "Police, please.", "Doctor, please."],
          giusta: 0,
          spiegazione: "Le risposte possibili sono Police, Fire o Ambulance.",
          rivedi: "LE EMERGENZE",
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
            "Sei dal GP. Descrivi i tuoi sintomi (inventali tu) e fai due domande al medico.",
          punti: [
            "che cosa hai",
            "dove fa male",
            "da quanto tempo",
            "se prendi già qualcosa",
            "due domande",
          ],
          modello:
            "I don't feel very well. I've got a sore throat and a headache, and my ears hurt too. I've had a temperature since Saturday, and I've been coughing a lot at night, so I can't sleep. I'm taking paracetamol, but it doesn't help much. Is it serious? Should I stay at home?",
          spiegazione:
            'Controlla l\'articolo a con le malattie, hurt senza "mi", e il present perfect con for e since.',
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
