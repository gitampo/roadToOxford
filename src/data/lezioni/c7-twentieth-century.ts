import { Lezione } from "@/types/lezione";

export const twentiethCentury: Lezione = {
  id: "C7",
  titolo: "Il Novecento",
  descrizione: "Le due guerre, il modernismo",
  chiavi: "McCrae, Joyce, Woolf, Beckett (solo riassunto)",
  livello: "Cultura",
  citazione: {
    testo: "yes I said yes I will Yes.",
    fonte: "James Joyce, Ulisse",
    traduzione: "sì dissi sì voglio Sì.",
    immagine: require("@/assets/images/textures/quadretti.jpg"),
  },
  riquadri: [
    {
      titolo: "LA GRANDE GUERRA",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "La Prima guerra mondiale (1914–1918) fu un trauma enorme: milioni di morti nelle trincee del fronte occidentale, in Francia e in Belgio. Una generazione di giovani partì con entusiasmo e tornò, se tornò, sconvolta.",
        },
        {
          tipo: "testo",
          testo:
            "I war poets raccontarono la guerra dall'interno, senza retorica. John McCrae, medico militare canadese, scrisse In Flanders Fields nel 1915, dopo la morte di un amico:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "In Flanders fields the poppies blow", it: "Nei campi delle Fiandre sbocciano i papaveri" },
            { en: "Between the crosses, row on row,", it: "tra le croci, fila dopo fila," },
          ],
        },
        {
          tipo: "nota",
          testo:
            "Da questa poesia viene il papavero rosso che i britannici portano sul petto a novembre per ricordare i caduti. È un confronto classico con Ungaretti e con La guerra di Piero di De André.",
        },
      ],
    },
    {
      titolo: "IL MODERNISMO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Dopo la guerra le certezze vittoriane crollarono. Freud aveva mostrato l'inconscio, Einstein la relatività, la guerra la fragilità della civiltà. Gli scrittori modernisti cercarono forme nuove per rappresentare una realtà frammentata.",
        },
        {
          tipo: "tabella",
          righe: [
            ["stream of consciousness", "il flusso libero dei pensieri"],
            ["interior monologue", "i pensieri del personaggio, senza filtro"],
            ["subjective time", "il tempo della mente, non dell'orologio"],
          ],
        },
      ],
    },
    {
      titolo: "JAMES JOYCE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "James Joyce (1882–1941), irlandese, visse quasi sempre all'estero, anche a Trieste. Dubliners (1914) sono racconti sulla \"paralisi\" della vita a Dublino: personaggi che vorrebbero cambiare vita e non ci riescono. L'ultimo racconto, The Dead, si chiude così:",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "His soul swooned slowly as he heard the snow falling faintly through the universe", it: "La sua anima svenne lentamente mentre udiva la neve cadere lieve attraverso l'universo" },
          ],
        },
        {
          tipo: "testo",
          testo:
            "Ulysses (1922) racconta un solo giorno, il 16 giugno 1904, nella vita del dublinese Leopold Bloom, come un'Odissea moderna. Si chiude con il monologo di sua moglie Molly: pagine senza punteggiatura, fino al celebre \"yes\" finale.",
        },
      ],
    },
    {
      titolo: "VIRGINIA WOOLF",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Virginia Woolf (1882–1941) usò il flusso di coscienza per mostrare come il tempo interiore scorra diversamente da quello dell'orologio. Mrs Dalloway (1925) racconta una giornata di una signora londinese che prepara una festa, e intreccia i suoi pensieri con quelli di un reduce traumatizzato dalla guerra.",
        },
        {
          tipo: "esempi",
          esempi: [
            { en: "Mrs Dalloway said she would buy the flowers herself.", it: "La signora Dalloway disse che i fiori li avrebbe comprati lei." },
          ],
        },
        {
          tipo: "nota",
          testo:
            "In A Room of One's Own sostenne che una donna, per scrivere, ha bisogno di soldi e di una stanza tutta per sé. È un testo fondamentale del femminismo.",
        },
      ],
    },
    {
      titolo: "LA SECONDA GUERRA MONDIALE",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Nel 1940 la Gran Bretagna restò sola contro la Germania nazista. Londra fu bombardata per mesi durante il Blitz, ma resistette, guidata da Winston Churchill. Dopo la guerra l'impero si dissolse rapidamente e le colonie diventarono indipendenti, molte entrando nel Commonwealth.",
        },
      ],
    },
    {
      titolo: "BECKETT E IL TEATRO DELL'ASSURDO",
      blocchi: [
        {
          tipo: "testo",
          testo:
            "Samuel Beckett (1906–1989), irlandese, scrisse Aspettando Godot prima in francese (1953) e poi in inglese. Due vagabondi, Vladimir ed Estragon, aspettano accanto a un albero un certo Godot, che non arriva mai. Parlano, litigano, pensano di andarsene, ma restano.",
        },
        {
          tipo: "testo",
          testo:
            "Nel teatro dell'assurdo non c'è una vera trama né una conclusione: il linguaggio gira a vuoto, come la vita dei personaggi. È il ritratto di un mondo che, dopo la guerra, sembra aver perso il suo senso.",
        },
        {
          tipo: "nota",
          testo:
            "L'opera di Beckett è ancora protetta dal diritto d'autore, quindi qui ne trovi solo il riassunto.",
        },
      ],
    },
  ],
};
