import { Lezione } from "@/types/lezione";

export const revolutionReason: Lezione = {
  id: "C4",
  titolo: "Rivoluzione e Ragione",
  descrizione: "Guerra civile, Cromwell, Restaurazione, coffee houses",
  chiavi: "Defoe (Robinson Crusoe), Swift (Gulliver's Travels)",
  livello: "Cultura",
  citazione: {
    testo: "When a man is tired of London, he is tired of life.",
    fonte: "Samuel Johnson, 1777",
    traduzione: "Quando un uomo è stanco di Londra, è stanco della vita.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "RE CONTRO PARLAMENTO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Carlo I Stuart credeva nel diritto divino dei re e governò per undici anni senza convocare il Parlamento. Lo scontro diventò guerra: la Guerra civile (1642–1651) tra i sostenitori del re (Cavaliers) e quelli del Parlamento (Roundheads), in gran parte puritani.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Cavaliers", "realisti, spesso nobili e anglicani"],
            ["Roundheads", "parlamentari, spesso puritani"],
          ],
        },
      ],
    },
    {
      titolo: "LA REPUBBLICA DI CROMWELL",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Il Parlamento vinse grazie al New Model Army di Oliver Cromwell. Nel 1649 Carlo I fu processato e decapitato: un fatto senza precedenti in Europa. L'Inghilterra divenne una repubblica, il Commonwealth, e Cromwell ne fu il capo con il titolo di Lord Protector.",
        },
        {
          tipo: "nota",
          testo:
            "Sotto i puritani furono chiusi i teatri e vietate molte feste, compreso il Natale.",
        },
      ],
    },
    {
      titolo: "LA RESTAURAZIONE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Dopo la morte di Cromwell, nel 1660 la monarchia fu restaurata con Carlo II. Riaprirono i teatri, e nello stesso anno nacque la Royal Society, la prima grande società scientifica, di cui fece parte anche Isaac Newton.",
        },
        {
          tipo: "testo",
          testo:
            "Nel 1688, con la Gloriosa Rivoluzione, il cattolico Giacomo II fu sostituito senza spargimento di sangue da Guglielmo d'Orange e Maria. Il Bill of Rights (1689) stabilì che il re doveva governare insieme al Parlamento: nasceva la monarchia costituzionale.",
        },
        {
          tipo: "tabella",
          righe: [
            ["Tories", "vicini al re e alla Chiesa anglicana"],
            ["Whigs", "vicini al Parlamento e ai commercianti"],
          ],
        },
      ],
    },
    {
      titolo: "L'ETÀ AUGUSTEA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel Settecento salirono al trono gli Hannover. Giorgio I parlava poco l'inglese e lasciò governare i ministri: Robert Walpole è considerato il primo Primo Ministro della storia britannica. Gli scrittori si ispiravano ai classici latini dell'epoca di Augusto: da qui il nome Augustan Age, o \"Età della Ragione\".",
        },
        {
          tipo: "testo",
          testo:
            "Fu anche l'epoca delle ombre dell'impero: la Gran Bretagna dominava la tratta degli schiavi nell'Atlantico. Le Enclosure Acts recintarono le terre comuni, spingendo molti contadini verso le città.",
        },
      ],
    },
    {
      titolo: "LE COFFEE HOUSES",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "A Londra c'erano centinaia di caffè, dove per un penny si poteva bere, leggere i giornali e discutere di politica, affari e scienza. Erano chiamate \"penny universities\". Da una di queste, il caffè di Edward Lloyd, nacquero le assicurazioni Lloyd's.",
        },
        {
          tipo: "testo",
          testo:
            "Nacque il giornalismo moderno: nel 1711 Joseph Addison e Richard Steele fondarono The Spectator. Cresceva un pubblico di lettori borghesi, e con loro un nuovo genere letterario: il romanzo.",
        },
      ],
    },
    {
      titolo: "DEFOE E ROBINSON CRUSOE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Daniel Defoe (1660 circa – 1731), giornalista e commerciante, pubblicò nel 1719 Robinson Crusoe: un naufrago sopravvive per 28 anni su un'isola deserta, costruendo tutto con le proprie mani. È il simbolo dell'individualismo economico e delle ambizioni coloniali inglesi.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "It happened one day, about noon, going towards my boat, I was exceedingly surprised with the print of a man's naked foot on the shore.", it: "Un giorno, verso mezzogiorno, andando verso la mia barca, fui estremamente sorpreso dall'impronta di un piede nudo di uomo sulla spiaggia." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Crusoe salva un indigeno e lo chiama Friday (Venerdì), dal giorno in cui l'ha incontrato. Gli insegna a chiamarlo \"Master\": un rapporto che oggi si legge come ritratto del colonialismo.",
        },
      ],
    },
    {
      titolo: "SWIFT E I VIAGGI DI GULLIVER",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Jonathan Swift (1667–1745), irlandese, pubblicò nel 1726 Gulliver's Travels. Sembra un libro d'avventure, ma è una satira feroce della società inglese. Gulliver visita Lilliput, dove gli abitanti sono alti quindici centimetri, e poi il paese dei giganti e altri mondi immaginari.",
        },
        {
          tipo: "testo",
          testo:
            "A Lilliput due popoli si fanno la guerra per decidere se un uovo sodo vada rotto dalla parte larga (Big-Endians) o da quella stretta (Little-Endians): una parodia delle guerre di religione tra cattolici e protestanti.",
        },
        {
          tipo: "nota",
          testo:
            "I termini big-endian e little-endian si usano ancora oggi in informatica, per indicare l'ordine in cui vengono memorizzati i byte.",
        },
      ],
    },
  ],
};
