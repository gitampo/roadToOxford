import { Lezione } from "@/types/lezione";

export const romanticAge: Lezione = {
  id: "C5",
  titolo: "Il Romanticismo",
  descrizione: "Rivoluzione industriale, francese e americana",
  chiavi: "Blake, Wordsworth, Coleridge, Byron",
  livello: "Cultura",
  citazione: {
    testo: "Poetry is the spontaneous overflow of powerful feelings.",
    fonte: "William Wordsworth, Prefazione alle Lyrical Ballads",
    traduzione: "La poesia è lo spontaneo traboccare di sentimenti potenti.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "L'ETÀ DELLE RIVOLUZIONI",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Tra la fine del Settecento e l'inizio dell'Ottocento il mondo cambiò in fretta. Le colonie americane dichiararono l'indipendenza nel 1776. La Rivoluzione francese del 1789 portò idee di libertà e uguaglianza. Poi vennero le guerre napoleoniche, concluse a Waterloo nel 1815.",
        },
        {
          tipo: "tabella",
          righe: [
            ["1776", "Dichiarazione d'indipendenza americana"],
            ["1789", "Rivoluzione francese"],
            ["1815", "Battaglia di Waterloo"],
            ["1832", "Great Reform Act"],
          ],
        },
      ],
    },
    {
      titolo: "LA RIVOLUZIONE INDUSTRIALE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La Gran Bretagna fu il primo paese industriale del mondo. Con la macchina a vapore e le fabbriche tessili, milioni di persone lasciarono le campagne per città come Manchester. Il lavoro era durissimo, anche per i bambini, e le condizioni di vita terribili.",
        },
        {
          tipo: "nota",
          testo:
            "Il Reform Act del 1832 allargò il diritto di voto, ma solo a una piccola parte degli uomini. Per il resto dell'Ottocento si susseguirono riforme sul lavoro e sul voto.",
        },
      ],
    },
    {
      titolo: "CHE COS'È IL ROMANTICISMO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "In risposta alla ragione illuminista e al mondo industriale, i poeti romantici misero al centro:",
        },
        {
          tipo: "tabella",
          righe: [
            ["imagination", "l'immaginazione come forza creativa"],
            ["nature", "la natura come fonte di gioia e di verità"],
            ["the individual", "le emozioni del singolo"],
            ["childhood", "l'infanzia come età dell'innocenza"],
            ["the supernatural", "il mistero e il soprannaturale"],
          ],
        },
        {
          tipo: "nota",
          testo:
            "Nel 1798 Wordsworth e Coleridge pubblicarono insieme le Lyrical Ballads: è considerato l'inizio del Romanticismo inglese.",
        },
      ],
    },
    {
      titolo: "WILLIAM BLAKE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "William Blake (1757–1827) fu poeta e incisore. Nei Songs of Innocence (1789) e nei Songs of Experience (1794) mette a confronto due stati dell'anima: l'innocenza dell'infanzia e l'esperienza del mondo adulto, con la sua sofferenza e le sue ingiustizie sociali.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Little Lamb, who made thee?", it: "Agnellino, chi ti ha creato? (The Lamb, Innocence)" },
            { en: "Tyger Tyger, burning bright,", it: "Tigre, tigre, che bruci luminosa" },
            { en: "In the forests of the night;", it: "nelle foreste della notte (The Tyger, Experience)" },
          ],
        },
        {
          tipo: "nota",
          testo:
            "The Tyger chiede: può lo stesso Dio che ha creato l'agnello aver creato anche la tigre? Le due poesie vanno lette insieme.",
        },
      ],
    },
    {
      titolo: "WILLIAM WORDSWORTH",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "William Wordsworth (1770–1850) visse nel Lake District, nel nord dell'Inghilterra. Voleva scrivere di vita semplice con \"la lingua realmente usata dagli uomini\". Nella poesia più famosa ricorda un campo di narcisi, che torna a dargli gioia nella memoria:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "I wandered lonely as a cloud", it: "Vagavo solitario come una nuvola" },
            { en: "That floats on high o'er vales and hills,", it: "che fluttua alta sopra valli e colline," },
            { en: "When all at once I saw a crowd,", it: "quando all'improvviso vidi una folla," },
            { en: "A host, of golden daffodils;", it: "una schiera di narcisi dorati;" },
          ],
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "My heart leaps up when I behold / A rainbow in the sky:", it: "Il mio cuore sussulta quando vedo / un arcobaleno nel cielo:" },
            { en: "The Child is father of the Man;", it: "il bambino è padre dell'uomo;" },
          ],
        },
      ],
    },
    {
      titolo: "SAMUEL TAYLOR COLERIDGE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Coleridge (1772–1834) si occupò del soprannaturale. Nella Ballata del vecchio marinaio (The Rime of the Ancient Mariner) un marinaio uccide un albatro, uccello di buon augurio. Come punizione la nave resta immobile, e l'equipaggio muore di sete:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Water, water, every where,", it: "Acqua, acqua, ovunque," },
            { en: "Nor any drop to drink.", it: "e neanche una goccia da bere." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Coleridge distingueva l'immaginazione (Imagination), capace di creare, dalla fantasia (Fancy), che si limita a combinare immagini già esistenti.",
        },
      ],
    },
    {
      titolo: "BYRON E L'EROE BYRONIANO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Lord Byron (1788–1824) fu famoso quanto le sue opere: ribelle, affascinante, pieno di debiti e scandali. Morì in Grecia, dove era andato a combattere per l'indipendenza dai Turchi.",
        },
        {
          tipo: "testo",
          testo:
            "Il suo personaggio tipico, l'eroe byroniano, è orgoglioso, solitario, tormentato da una colpa segreta, e sfida le regole della società. È un modello ancora vivissimo: pensa ai vampiri o agli antieroi dei film.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "She walks in beauty, like the night", it: "Lei cammina nella bellezza, come la notte" },
          ],
        },
      ],
    },
  ],
};
