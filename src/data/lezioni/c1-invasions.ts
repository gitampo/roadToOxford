import { Lezione } from "@/types/lezione";

export const invasions: Lezione = {
  id: "C1",
  titolo: "Invasioni e migrazioni",
  descrizione: "Celti, Romani, Anglosassoni, Vichinghi, Normanni",
  livello: "Letteratura",
  citazione: {
    testo: "They make a desert and call it peace.",
    fonte: "Tacito, Agricola (parole attribuite al capo britannico Calgaco)",
    traduzione: "Fanno un deserto e lo chiamano pace.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "UN'ISOLA DI POPOLI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La storia della Gran Bretagna antica è una storia di arrivi: Celti, Romani, Anglosassoni, Vichinghi e Normanni. Ognuno di questi popoli ha lasciato un segno anche nella lingua inglese, che è il risultato di tutte queste mescolanze.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Celts", "dal I millennio a.C."],
            ["Romans", "43 d.C. – 410 circa"],
            ["Anglo-Saxons", "dal V secolo"],
            ["Vikings", "dal 793"],
            ["Normans", "1066"],
          ],
        },
      ],
    },
    {
      titolo: "I CELTI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "I Celti erano organizzati in tribù guidate da capi guerrieri, con i druidi come sacerdoti. Prima di loro l'isola era abitata da popoli che costruirono monumenti come Stonehenge, iniziato intorno al 3000 a.C.",
        },
        {
          tipo: "testo",
          testo:
            "Le lingue celtiche sopravvivono ancora oggi ai margini dell'isola: il gallese (Welsh) in Galles e il gaelico in Scozia e in Irlanda.",
        },
        {
          tipo: "nota",
          testo:
            'Molti nomi di fiumi inglesi sono celtici: Thames, Avon (avon in gallese significa proprio "fiume").',
        },
      ],
    },
    {
      titolo: "I ROMANI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Giulio Cesare sbarcò in Britannia nel 55 e nel 54 a.C., ma la conquista vera iniziò nel 43 d.C. con l'imperatore Claudio. I Romani fondarono Londinium (Londra), costruirono strade, terme e città, e nel 122 l'imperatore Adriano fece costruire un muro per difendere il confine nord: il Vallo di Adriano.",
        },
        {
          tipo: "testo",
          testo:
            "Intorno al 410 le legioni lasciarono la Britannia per difendere Roma.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "street", it: "dal latino strata (via lastricata)" },
            {
              en: "-chester, -caster",
              it: "da castra (accampamento): Manchester, Lancaster",
            },
          ],
        },
      ],
    },
    {
      titolo: "GLI ANGLOSASSONI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Dal V secolo arrivarono dal nord della Germania e dalla Danimarca Angli, Sassoni e Juti. Spinsero i Celti verso ovest e fondarono diversi regni. Da loro vengono il nome England (Angle-land, la terra degli Angli) e la lingua: l'Old English.",
        },
        {
          tipo: "testo",
          testo:
            "Le parole più comuni dell'inglese di oggi sono di origine anglosassone:",
        },
        {
          tipo: "tabella",
          righe: [
            ["house, home", "casa"],
            ["man, woman, child", "uomo, donna, bambino"],
            ["eat, drink, sleep", "mangiare, bere, dormire"],
            ["the, and, is", "le parole grammaticali"],
          ],
        },
      ],
    },
    {
      titolo: "I VICHINGHI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel 793 i Vichinghi saccheggiarono il monastero di Lindisfarne: fu l'inizio di due secoli di incursioni. Occuparono gran parte dell'est dell'Inghilterra, una zona chiamata Danelaw. Il re sassone Alfredo il Grande riuscì a fermarli e a difendere il Wessex.",
        },
        {
          tipo: "testo",
          testo: "I Vichinghi hanno dato all'inglese parole di tutti i giorni:",
        },
        {
          tipo: "tabella",
          righe: [
            ["sky", "cielo"],
            ["egg", "uovo"],
            ["knife", "coltello"],
            ["they, them, their", "i pronomi della terza plurale!"],
          ],
        },
      ],
    },
    {
      titolo: "I NORMANNI: 1066",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel 1066 Guglielmo, duca di Normandia, sconfisse il re sassone Aroldo nella battaglia di Hastings e divenne re: Guglielmo il Conquistatore. Nel 1086 fece censire tutte le terre del regno nel Domesday Book.",
        },
        {
          tipo: "testo",
          testo:
            "Per circa tre secoli la corte e la nobiltà parlarono francese, mentre il popolo continuava a parlare inglese. Il risultato si vede ancora nel cibo: l'animale vivo, allevato dai contadini, ha un nome inglese; la carne, servita ai signori, un nome francese.",
        },
        {
          tipo: "tabella",
          righe: [
            ["cow → beef", "mucca → manzo (bœuf)"],
            ["pig → pork", "maiale → carne di maiale (porc)"],
            ["sheep → mutton", "pecora → carne di montone (mouton)"],
          ],
        },
      ],
    },
    {
      titolo: "UNA LINGUA A STRATI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Per questo l'inglese ha spesso due o tre parole per la stessa cosa: una anglosassone, semplice e quotidiana; una francese, più elegante; una latina, più tecnica.",
        },
        {
          tipo: "tabella",
          righe: [
            ["ask (anglosassone)", "question (francese), interrogate (latino)"],
            ["kingly (anglosassone)", "royal (francese), regal (latino)"],
            ["begin (anglosassone)", "commence (francese)"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Ecco perché un italiano capisce facilmente l'inglese formale (di origine latina) e fa più fatica con quello informale (di origine germanica).",
        },
      ],
    },
  ],
};
