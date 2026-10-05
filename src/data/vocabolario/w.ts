import { Voce } from "@/types/vocabolario";

export const W: Voce[] = [
  {
    id: "want",
    parola: "want",
    fonetica: "/wɒnt/",
    descrizione: "Desiderare qualcosa: volere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "wants · wanted · wanted · wanting",
        significati: [
          {
            indicazione: "+ nome",
            traduzioni: ["volere", "desiderare"],
            esempi: [{ en: "I want a new bike.", it: "Voglio una bici nuova." }],
          },
          {
            indicazione: "+ to: fare qualcosa",
            traduzioni: ["volere"],
            esempi: [{ en: "She wants to study in Oxford.", it: "Vuole studiare a Oxford." }],
          },
          {
            indicazione: "+ persona + to: che qualcuno faccia",
            traduzioni: ["volere che"],
            esempi: [{ en: "I want you to come with me.", it: "Voglio che tu venga con me." }],
          },
        ],
      },
    ],
    attenzione: [
      "Volere che qualcuno faccia = want + persona + to: I want you to stay, non I want that you stay.",
      "Want è diretto: al ristorante e nei negozi è più cortese I'd like.",
      "Want non va al -ing quando vuol dire volere: I want a coffee, non I'm wanting a coffee.",
    ],
    lezioni: [{ id: "20", riquadro: 5 }],
  },
  {
    id: "way",
    parola: "way",
    fonetica: "/weɪ/",
    descrizione: "Il modo di fare qualcosa, o la strada per arrivarci.",
    usi: [
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            indicazione: "il percorso",
            traduzioni: ["strada"],
            esempi: [{ en: "Can you tell me the way to the station?", it: "Mi sa dire la strada per la stazione?" }],
          },
          {
            indicazione: "come si fa",
            traduzioni: ["modo", "maniera"],
            esempi: [{ en: "That's the best way to learn English.", it: "È il modo migliore per imparare l'inglese." }],
          },
          {
            indicazione: "la direzione",
            traduzioni: ["parte", "direzione"],
            esempi: [{ en: "This way, please.", it: "Da questa parte, prego." }],
          },
          {
            indicazione: "la distanza",
            traduzioni: ["strada (da fare)"],
            esempi: [{ en: "It's a long way from here.", it: "È lontano da qui." }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "by the way",
        significati: [
          {
            traduzioni: ["a proposito"],
            esempi: [{ en: "By the way, Anna called.", it: "A proposito, ha chiamato Anna." }],
          },
        ],
      },
      {
        testo: "No way!",
        significati: [
          {
            indicazione: "per rifiutare",
            traduzioni: ["Neanche per sogno!"],
            etichette: ["informale"],
            esempi: [{ en: "Lend you my car? No way!", it: "Prestarti la macchina? Neanche per sogno!" }],
          },
          {
            indicazione: "per la sorpresa",
            traduzioni: ["Non ci credo!", "Ma dai!"],
            etichette: ["informale"],
            esempi: [{ en: "— I passed! — No way!", it: "— Sono passato! — Ma dai!" }],
          },
        ],
      },
      {
        testo: "on the way",
        significati: [
          {
            traduzioni: ["per strada", "strada facendo"],
            esempi: [{ en: "I'll buy some bread on the way home.", it: "Compro il pane tornando a casa." }],
          },
        ],
      },
      {
        testo: "in the way",
        significati: [
          {
            traduzioni: ["in mezzo", "tra i piedi"],
            esempi: [{ en: "Move, you're in the way!", it: "Spostati, sei in mezzo!" }],
          },
        ],
      },
    ],
    attenzione: [
      "Nei cartelli britannici Way out vuol dire uscita.",
    ],
  },
  {
    id: "work",
    parola: "work",
    fonetica: "/wɜːk/",
    descrizione: "Lavorare, oppure funzionare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "works · worked · worked · working",
        significati: [
          {
            indicazione: "un'attività",
            traduzioni: ["lavorare"],
            esempi: [{ en: "She works in a bank.", it: "Lavora in banca." }],
          },
          {
            indicazione: "una macchina",
            traduzioni: ["funzionare"],
            esempi: [{ en: "The lift isn't working.", it: "L'ascensore non funziona." }],
          },
          {
            indicazione: "un piano, una cura",
            traduzioni: ["funzionare", "avere effetto"],
            esempi: [{ en: "The plan worked!", it: "Il piano ha funzionato!" }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        significati: [
          {
            indicazione: "non numerabile",
            traduzioni: ["lavoro"],
            esempi: [
              { en: "I go to work by bike.", it: "Vado al lavoro in bici." },
              { en: "I've got a lot of work to do.", it: "Ho tanto lavoro da fare." },
            ],
          },
          {
            indicazione: "numerabile: arte, letteratura",
            traduzioni: ["opera"],
            esempi: [{ en: "We studied the works of Shakespeare.", it: "Abbiamo studiato le opere di Shakespeare." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "work out",
        significati: [
          {
            indicazione: "un problema",
            traduzioni: ["capire", "risolvere"],
            esempi: [{ en: "I can't work out the answer.", it: "Non riesco a trovare la risposta." }],
          },
          {
            indicazione: "in palestra",
            traduzioni: ["allenarsi"],
            esempi: [{ en: "He works out three times a week.", it: "Si allena tre volte a settimana." }],
          },
        ],
      },
    ],
    attenzione: [
      "Work come lavoro in generale è non numerabile: a work è sbagliato. Un posto di lavoro è a job: I've found a new job.",
      "Work si pronuncia /wɜːk/, walk /wɔːk/: la differenza è nella vocale.",
    ],
    lezioni: [
      { id: "47", riquadro: 6 },
      { id: "57", riquadro: 6 },
    ],
  },
  {
    id: "wait",
    parola: "wait",
    fonetica: "/weɪt/",
    descrizione: "Restare finché qualcosa succede o qualcuno arriva: aspettare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "waits · waited · waited · waiting",
        significati: [
          {
            indicazione: "+ for: una persona, una cosa",
            traduzioni: ["aspettare", "attendere"],
            esempi: [
              { en: "I'm waiting for the bus.", it: "Sto aspettando l'autobus." },
              { en: "Wait for me!", it: "Aspettami!" },
            ],
          },
          {
            indicazione: "senza oggetto",
            traduzioni: ["aspettare"],
            esempi: [{ en: "Wait a minute!", it: "Aspetta un attimo!" }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "can't wait",
        significati: [
          {
            traduzioni: ["non vedere l'ora"],
            esempi: [{ en: "I can't wait to see you!", it: "Non vedo l'ora di vederti!" }],
          },
        ],
      },
    ],
    attenzione: [
      "Aspettare qualcuno o qualcosa è wait for: wait for me, non wait me.",
      "Wait (aspettare, passare il tempo) ed expect (aspettarsi, prevedere) non sono uguali: I expect he'll be late.",
      "Il cameriere è waiter: chi \"attende\" ai tavoli.",
    ],
    lezioni: [{ id: "49", riquadro: 2 }],
  },
  {
    id: "wake",
    parola: "wake",
    fonetica: "/weɪk/",
    descrizione: "Smettere di dormire: svegliarsi, svegliare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "wakes · woke · woken · waking",
        significati: [
          {
            traduzioni: ["svegliarsi", "svegliare"],
            esempi: [
              { en: "I woke at six.", it: "Mi sono svegliato alle sei." },
              { en: "Don't wake the baby.", it: "Non svegliare il bambino." },
            ],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "wake up",
        significati: [
          {
            traduzioni: ["svegliarsi", "svegliare"],
            esempi: [
              { en: "Wake up! It's eight o'clock!", it: "Svegliati! Sono le otto!" },
              { en: "Can you wake me up at seven?", it: "Mi svegli alle sette?" },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Wake up non è riflessivo: I wake up, non I wake myself up.",
      "Svegliarsi (wake up) e alzarsi (get up) sono due azioni diverse: I wake up at seven but I get up at half past.",
    ],
    lezioni: [
      { id: "10", riquadro: 7 },
      { id: "47", riquadro: 2 },
    ],
  },
  {
    id: "watch",
    parola: "watch",
    fonetica: "/wɒtʃ/",
    descrizione: "Guardare con attenzione qualcosa che si muove; come nome, orologio.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "watches · watched · watched · watching",
        significati: [
          {
            indicazione: "TV, film, sport",
            traduzioni: ["guardare"],
            esempi: [
              { en: "We watched a film last night.", it: "Ieri sera abbiamo guardato un film." },
              { en: "Do you watch football?", it: "Guardi il calcio?" },
            ],
          },
          {
            indicazione: "sorvegliare",
            traduzioni: ["tenere d'occhio", "sorvegliare"],
            esempi: [{ en: "Can you watch my bag for a minute?", it: "Mi tieni d'occhio la borsa un attimo?" }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["orologio (da polso)"],
            esempi: [{ en: "What a beautiful watch!", it: "Che bell'orologio!" }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "watch out",
        significati: [
          {
            traduzioni: ["fare attenzione", "stare attento"],
            esempi: [{ en: "Watch out! There's a car coming.", it: "Attento! Arriva una macchina." }],
          },
        ],
      },
    ],
    attenzione: [
      "Watch è guardare qualcosa che si muove o cambia (TV, una partita); look at è guardare una cosa ferma (a photo); see è vedere.",
      "Al cinema si dice see a film o watch a film; in TV di solito watch.",
      "L'orologio da muro è a clock, quello da polso a watch.",
    ],
  },
  {
    id: "wear",
    parola: "wear",
    fonetica: "/weə(r)/",
    descrizione: "Avere addosso un vestito o un accessorio: indossare, portare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "wears · wore · worn · wearing",
        significati: [
          {
            indicazione: "vestiti, occhiali, gioielli",
            traduzioni: ["indossare", "portare", "avere addosso"],
            esempi: [
              { en: "She's wearing a red dress.", it: "Indossa un vestito rosso." },
              { en: "Do you wear glasses?", it: "Porti gli occhiali?" },
            ],
          },
          {
            indicazione: "capelli, trucco",
            traduzioni: ["portare", "avere"],
            esempi: [{ en: "He wears his hair long.", it: "Porta i capelli lunghi." }],
          },
        ],
      },
    ],
    phrasalVerbs: [
      {
        testo: "wear out",
        significati: [
          {
            indicazione: "un oggetto",
            traduzioni: ["consumare", "consumarsi"],
            esempi: [{ en: "My shoes are worn out.", it: "Le mie scarpe sono consumate." }],
          },
          {
            indicazione: "una persona",
            traduzioni: ["sfinire", "stancare"],
            esempi: [{ en: "The children wore me out.", it: "I bambini mi hanno sfinito." }],
          },
        ],
      },
    ],
    attenzione: [
      "Wear è avere addosso, put on è l'azione di mettersi: I put on my coat and now I'm wearing it.",
      "Wear si pronuncia /weə/, come where.",
    ],
    lezioni: [{ id: "32", riquadro: 6 }],
  },
  {
    id: "win",
    parola: "win",
    fonetica: "/wɪn/",
    descrizione: "Arrivare primi o ottenere un premio: vincere.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "wins · won · won · winning",
        significati: [
          {
            indicazione: "una gara",
            traduzioni: ["vincere"],
            esempi: [
              { en: "Who won the match?", it: "Chi ha vinto la partita?" },
              { en: "We won 3–0.", it: "Abbiamo vinto 3 a 0." },
            ],
          },
          {
            indicazione: "un premio",
            traduzioni: ["vincere", "conquistare"],
            esempi: [{ en: "She won a scholarship to Oxford.", it: "Ha vinto una borsa di studio per Oxford." }],
          },
        ],
      },
    ],
    attenzione: [
      "Si vince una gara o un premio (win a match, win a prize); si batte un avversario con beat: We beat Chelsea, non We won Chelsea.",
      "Won si pronuncia /wʌn/, come one.",
    ],
    lezioni: [{ id: "41", riquadro: 6 }],
  },
  {
    id: "wish",
    parola: "wish",
    fonetica: "/wɪʃ/",
    descrizione: "Desiderare una cosa difficile o impossibile: volere che, augurare.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        forme: "wishes · wished · wished · wishing",
        significati: [
          {
            indicazione: "+ past: una situazione diversa ora",
            traduzioni: ["vorrei che", "magari"],
            esempi: [
              { en: "I wish I were taller.", it: "Vorrei essere più alto." },
              { en: "I wish you were here.", it: "Vorrei che tu fossi qui." },
            ],
          },
          {
            indicazione: "+ past perfect: un rimpianto",
            traduzioni: ["avrei voluto", "se solo"],
            esempi: [{ en: "I wish I had studied harder.", it: "Avrei voluto studiare di più." }],
          },
          {
            indicazione: "augurare",
            traduzioni: ["augurare"],
            esempi: [{ en: "We wish you a merry Christmas.", it: "Vi auguriamo buon Natale." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        dettaglio: "numerabile",
        significati: [
          {
            traduzioni: ["desiderio", "augurio"],
            esempi: [
              { en: "Make a wish!", it: "Esprimi un desiderio!" },
              { en: "Best wishes, Anna", it: "Cari saluti, Anna" },
            ],
          },
        ],
      },
    ],
    attenzione: [
      "Dopo I wish si fa un passo indietro nel tempo: per il presente il past (I wish I knew), per il passato il past perfect (I wish I had known).",
      "Wish e hope non sono uguali: hope per cose possibili (I hope you win), wish per cose irreali (I wish I could fly).",
      "Nel registro formale si usa were per tutte le persone: I wish I were rich.",
    ],
    lezioni: [
      { id: "36", riquadro: 6 },
      { id: "36", riquadro: 7 },
      { id: "41", riquadro: 5 },
    ],
  },
  {
    id: "wonder",
    parola: "wonder",
    fonetica: "/ˈwʌndə(r)/",
    descrizione: "Chiedersi qualcosa; come nome, meraviglia.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "transitivo e intransitivo",
        forme: "wonders · wondered · wondered · wondering",
        significati: [
          {
            indicazione: "farsi domande",
            traduzioni: ["chiedersi", "domandarsi"],
            esempi: [{ en: "I wonder what time it is.", it: "Mi chiedo che ore siano." }],
          },
          {
            indicazione: "I was wondering if: richiesta cortese",
            traduzioni: ["mi chiedevo se", "per caso"],
            esempi: [{ en: "I was wondering if you could help me.", it: "Mi chiedevo se potessi aiutarmi." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        significati: [
          {
            traduzioni: ["meraviglia", "stupore"],
            esempi: [{ en: "the Seven Wonders of the World", it: "le sette meraviglie del mondo" }],
          },
        ],
      },
    ],
    espressioni: [
      {
        testo: "No wonder...",
        significati: [
          {
            traduzioni: ["Non c'è da stupirsi che...", "Per forza..."],
            esempi: [{ en: "You didn't sleep? No wonder you're tired.", it: "Non hai dormito? Per forza sei stanco." }],
          },
        ],
      },
    ],
    attenzione: [
      "Dopo I wonder l'ordine è quello della frase affermativa: I wonder where she is, non I wonder where is she.",
      "Non confonderlo con wander /ˈwɒndə/ (vagare, girovagare).",
    ],
    lezioni: [{ id: "54", riquadro: 5 }],
  },
  {
    id: "worry",
    parola: "worry",
    fonetica: "/ˈwʌri/",
    descrizione: "Pensare con ansia a un problema: preoccuparsi.",
    usi: [
      {
        categoria: "verbo",
        dettaglio: "intransitivo",
        forme: "worries · worried · worried · worrying",
        significati: [
          {
            indicazione: "+ about",
            traduzioni: ["preoccuparsi", "stare in pensiero"],
            esempi: [
              { en: "Don't worry!", it: "Non preoccuparti!" },
              { en: "She worries about her exams.", it: "Si preoccupa per gli esami." },
            ],
          },
        ],
      },
      {
        categoria: "verbo",
        dettaglio: "transitivo",
        significati: [
          {
            traduzioni: ["preoccupare"],
            esempi: [{ en: "His silence worries me.", it: "Il suo silenzio mi preoccupa." }],
          },
        ],
      },
      {
        categoria: "sostantivo",
        significati: [
          {
            traduzioni: ["preoccupazione", "pensiero"],
            esempi: [{ en: "Money is my biggest worry.", it: "I soldi sono la mia preoccupazione più grande." }],
          },
        ],
      },
    ],
    attenzione: [
      "Worry non è riflessivo: Don't worry, non Don't worry yourself.",
      "Preoccupato è worried (I'm worried about you); worrying è ciò che preoccupa (worrying news).",
      "Preoccuparsi per qualcosa è worry about, non worry for.",
    ],
    lezioni: [{ id: "19", riquadro: 2 }],
  },
];
