import { AreaAnnotazioni } from "@/components/annotazioni";
import Brano from "@/components/brano";
import CardApri from "@/components/cardApri";
import CardEsempi from "@/components/cardEsempi";
import CardNota from "@/components/cardNota";
import Esercizio, { Punteggio } from "@/components/esercizi";
import { QuoteCard } from "@/components/quote-card";
import { BarraRisultato, ROSSO, VERDE } from "@/components/risultato";
import Tabella from "@/components/tabella";
import TestoConRimandi from "@/components/testoConRimandi";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";
import { LEZIONI } from "@/data/lezioni";
import {
  cancellaProgressi,
  leggiProgressi,
  salvaProgressi,
  segnaVisto,
} from "@/data/progressi";
import { TESTI } from "@/data/testi";
import { useTheme } from "@/hooks/use-theme";
import {
  Blocco,
  ESERCIZI_CON_PUNTEGGIO,
  Lezione,
  StatoEsercizio,
} from "@/types/lezione";
import { useLocalSearchParams, useRouter } from "expo-router";
import { usePreventRemove } from "expo-router/react-navigation";
import { SymbolView } from "expo-symbols";
import { useEffect, useRef, useState } from "react";
import { Keyboard, Pressable, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GIALLO = "#ffe100";

// "I PRONOMI PERSONALI" → "I pronomi personali"
function primaMaiuscola(testo: string) {
  return testo.charAt(0) + testo.slice(1).toLowerCase();
}

// Il riepilogo di tutti gli esercizi con punteggio di una lezione
function calcolaRiepilogo(
  lezione: Lezione,
  stati: Record<string, StatoEsercizio>,
) {
  const esercizi = (lezione.riquadri ?? []).flatMap((riquadro, r) =>
    riquadro.blocchi.flatMap((blocco, b) => {
      if (!(ESERCIZI_CON_PUNTEGGIO as readonly string[]).includes(blocco.tipo))
        return [];
      const testo =
        "domanda" in blocco
          ? blocco.domanda
          : "consegna" in blocco
            ? blocco.consegna
            : "";
      const citazione =
        "citazione" in blocco && blocco.citazione
          ? ` (${blocco.citazione})`
          : "";
      return [
        {
          pagina: r + 1,
          corretta: stati[`${r + 1}-${b}`]?.corretta,
          testo: testo + citazione,
          rivedi: "rivedi" in blocco ? blocco.rivedi : undefined,
        },
      ];
    }),
  );
  const sbagliati = esercizi.filter((e) => e.corretta === false);
  return {
    totale: esercizi.length,
    giuste: esercizi.filter((e) => e.corretta === true).length,
    risposte: esercizi.filter((e) => e.corretta !== undefined).length,
    sbagliati,
    // Il primo riquadro con degli esercizi
    paginaEsercizi: esercizi[0]?.pagina,
    // Il riquadro del primo esercizio ancora senza risposta (per riprendere)
    paginaDaFare: esercizi.find((e) => e.corretta === undefined)?.pagina,
    // I riquadri da rivedere, senza doppioni
    daRivedere: [
      ...new Set(sbagliati.flatMap((e) => (e.rivedi ? [e.rivedi] : []))),
    ],
  };
}

export default function Dettagli() {
  // pagina: il riquadro da cui partire (quando si arriva da un rimando)
  const { id, pagina: paginaIniziale } = useLocalSearchParams<{
    id: string;
    pagina?: string;
  }>();
  // Cerca tra le lezioni e tra i testi analizzati dei moduli di Letteratura
  const lezione = [...LEZIONI, ...TESTI].find((l) => l.id === id);
  const indice = LEZIONI.findIndex((l) => l.id === id);
  const [pagina, setPagina] = useState(Number(paginaIniziale) || 0);
  const theme = useTheme();
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  // Le risposte agli esercizi, per riquadro e blocco ("7-2" = riquadro 7, blocco 2)
  const [stati, setStati] = useState<Record<string, StatoEsercizio>>({});
  // Quanto è stata scorsa la pagina, e dove tornare dopo un "Rivedi"
  const scrollY = useRef(0);
  const [ritorno, setRitorno] = useState<{ pagina: number; y: number } | null>(
    null,
  );
  // I riquadri visitati, in ordine: "Indietro" torna a quello precedente
  // (all'indice se ci si è arrivati dall'indice, al riquadro prima se con "Avanti")
  const [storia, setStoria] = useState<number[]>([]);

  // Swipe indietro (o tasto indietro di Android) dentro un riquadro:
  // invece di chiudere la lezione, torna all'indice. Dall'indice si esce.
  // "Fine" invece deve chiudere davvero la lezione: prima toglie il blocco, poi esce
  const [esci, setEsci] = useState(false);
  usePreventRemove(pagina > 0 && !esci, () => tornaAllIndice());

  // Torna alla copertina con l'indice dei riquadri, azzerando la storia
  function tornaAllIndice() {
    setStoria([]);
    setRitorno(null);
    setPagina(0);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }
  useEffect(() => {
    if (!esci) return;
    // Aspetta che il blocco sia stato tolto, poi chiude la lezione
    const t = setTimeout(() => router.back(), 0);
    return () => clearTimeout(t);
  }, [esci, router]);

  // All'apertura, recupera le risposte salvate sul telefono
  const [caricato, setCaricato] = useState(false);
  useEffect(() => {
    let attivo = true;
    leggiProgressi(id).then((progressi) => {
      if (!attivo) return;
      if (progressi) setStati(progressi.stati);
      setCaricato(true);
    });
    return () => {
      attivo = false;
    };
  }, [id]);

  // Ogni volta che cambia una risposta, salva tutto
  useEffect(() => {
    if (!caricato || !lezione) return;
    const r = calcolaRiepilogo(lezione, stati);
    if (r.totale === 0) return;
    if (r.risposte === 0 && Object.keys(stati).length === 0) {
      cancellaProgressi(id);
      return;
    }
    salvaProgressi(id, {
      stati,
      risultato: { giuste: r.giuste, totale: r.totale, risposte: r.risposte },
    });
  }, [stati, caricato, id, lezione]);

  // Ogni riquadro aperto conta per la barra della teoria nella lista
  useEffect(() => {
    if (pagina > 0) segnaVisto(id, pagina);
  }, [id, pagina]);

  if (!lezione) {
    return <ThemedText>Lezione non trovata</ThemedText>;
  }

  const riquadroCorrente = lezione.riquadri?.[pagina - 1];
  const numeroRiquadri = lezione.riquadri?.length ?? 0;
  const ultimaPagina = pagina === numeroRiquadri;

  // Cambia pagina e riporta lo scroll in cima
  function vaiA(nuovaPagina: number) {
    setStoria((s) => [...s, pagina]);
    setPagina(nuovaPagina);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  // Torna al riquadro visitato prima (o a quello precedente, se non c'è storia,
  // per esempio quando la lezione è stata aperta da un rimando)
  function indietro() {
    const precedente =
      storia.length > 0 ? storia[storia.length - 1] : pagina - 1;
    setStoria((s) => s.slice(0, -1));
    setPagina(precedente);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  // Tocco su un bordo dello schermo: sinistro → riquadro precedente (dal primo,
  // la copertina), destro → successivo (sull'ultimo niente, per non chiudere per
  // sbaglio). Se la tastiera è aperta, il tocco la chiude e basta
  function toccoBordo(direzione: -1 | 1) {
    if (Keyboard.isVisible()) {
      Keyboard.dismiss();
      return;
    }
    if (direzione === 1 && ultimaPagina) return;
    vaiA(pagina + direzione);
  }

  // Cancella le risposte e riporta agli esercizi
  function ricomincia() {
    setStati({});
    if (riepilogo.paginaEsercizi) vaiA(riepilogo.paginaEsercizi);
  }

  // Va al riquadro con quel titolo, senza "Torna a" (usato dalla copertina)
  function apriRiquadro(titolo: string) {
    const i = lezione?.riquadri?.findIndex((r) => r.titolo === titolo) ?? -1;
    if (i !== -1) vaiA(i + 1);
  }

  // Va al riquadro con quel titolo (usato da "Rivedi" negli esercizi)
  // e si ricorda il punto esatto da cui si è partiti
  function vaiARiquadro(titolo: string) {
    const i = lezione?.riquadri?.findIndex((r) => r.titolo === titolo) ?? -1;
    if (i === -1) return;
    setRitorno({ pagina, y: scrollY.current });
    vaiA(i + 1);
  }

  // Torna agli esercizi, nello stesso punto dello scroll
  function tornaIndietro() {
    if (!ritorno) return;
    setPagina(ritorno.pagina);
    setRitorno(null);
    // Toglie dalla storia il passaggio fatto con "Rivedi"
    setStoria((s) => {
      const i = s.lastIndexOf(ritorno.pagina);
      return i === -1 ? s : s.slice(0, i);
    });
    // Aspetta che il riquadro sia disegnato (è lungo), poi scorre al punto giusto
    setTimeout(
      () => scrollRef.current?.scrollTo({ y: ritorno.y, animated: false }),
      50,
    );
  }

  const riepilogo = calcolaRiepilogo(lezione, stati);

  // Cerca il riquadro che spiega una riga di un brano:
  // quello con lo stesso testo e la riga dentro "evidenzia"
  function paginaSpiegazione(righe: string[], riga: number) {
    const indiceRiquadro = lezione?.riquadri?.findIndex((riquadro) =>
      riquadro.blocchi.some(
        (b) =>
          b.tipo === "brano" &&
          b.righe === righe &&
          b.evidenzia !== undefined &&
          riga >= b.evidenzia[0] &&
          riga <= b.evidenzia[1],
      ),
    );
    return indiceRiquadro === undefined || indiceRiquadro === -1
      ? undefined
      : indiceRiquadro + 1;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <ThemedView style={{ flex: 1 }}>
        <ThemedView style={{ flex: 1 }}>
          {/* Dentro i riquadri il testo si può selezionare per prendere appunti */}
          <AreaAnnotazioni
            lezione={{ id: lezione.id, titolo: lezione.titolo }}
            pagina={pagina}
            titoloRiquadro={riquadroCorrente?.titolo ?? ""}
          >
            <ScrollView
              ref={scrollRef}
              style={{ flex: 1 }}
              keyboardShouldPersistTaps="handled"
              scrollEventThrottle={32}
              onScroll={(e) => {
                scrollY.current = e.nativeEvent.contentOffset.y;
              }}
            >
              <ThemedView style={styles.container}>
                {/* Intestazione: livello, titolo e barra di avanzamento */}
                <ThemedText
                  style={[styles.etichetta, { color: theme.textSecondary }]}
                >
                  {lezione.sottotitolo ??
                    `${lezione.livello} · Lezione ${lezione.id}`}
                </ThemedText>
                <ThemedText style={styles.titoloLezione}>
                  {lezione.titolo}
                </ThemedText>
                {lezione.descrizione && (
                  <ThemedText
                    style={[
                      styles.descrizioneLezione,
                      { color: theme.textSecondary },
                    ]}
                  >
                    {lezione.descrizione}
                  </ThemedText>
                )}
                <ThemedView style={styles.avanzamento}>
                  {Array.from({ length: numeroRiquadri }).map((_, i) => (
                    <ThemedView
                      key={i}
                      style={[
                        styles.trattino,
                        {
                          backgroundColor:
                            i < pagina ? GIALLO : theme.backgroundSelected,
                        },
                      ]}
                    />
                  ))}
                </ThemedView>

                {pagina === 0 ? (
                  /* Copertina: citazione + elenco dei riquadri */
                  <ThemedView>
                    <QuoteCard citazione={lezione.citazione} />

                    {/* Il risultato degli esercizi: solo se sono iniziati.
                    Finiti: spunta verde e niente pulsanti */}
                    {riepilogo.totale > 0 &&
                      riepilogo.risposte > 0 &&
                      riepilogo.risposte < riepilogo.totale && (
                        <EserciziInSospeso
                          riepilogo={riepilogo}
                          onRiprendi={() =>
                            vaiA(
                              riepilogo.paginaDaFare ??
                                riepilogo.paginaEsercizi!,
                            )
                          }
                          onRicomincia={ricomincia}
                          onRivedi={apriRiquadro}
                        />
                      )}
                    {riepilogo.totale > 0 &&
                      riepilogo.risposte >= riepilogo.totale && (
                        <ThemedView
                          type="backgroundElement"
                          style={styles.riepilogo}
                        >
                          <ThemedView
                            type="backgroundElement"
                            style={styles.completati}
                          >
                            <SymbolView
                              name={{
                                ios: "checkmark.circle.fill",
                                android: "check_circle",
                                web: "check_circle",
                              }}
                              size={24}
                              tintColor={VERDE}
                            />
                            <ThemedText style={styles.titoloRiepilogo}>
                              Hai completato gli esercizi
                            </ThemedText>
                          </ThemedView>
                          <BarraRisultato risultato={riepilogo} />
                          {riepilogo.daRivedere.length > 0 && (
                            <DaRivedere
                              titoli={riepilogo.daRivedere}
                              onRivedi={apriRiquadro}
                            />
                          )}
                        </ThemedView>
                      )}

                    {numeroRiquadri > 0 && (
                      <ThemedText
                        style={[
                          styles.etichetta,
                          { color: theme.textSecondary },
                        ]}
                      >
                        In questa lezione
                      </ThemedText>
                    )}
                    {lezione.riquadri?.map((riquadro, i) => (
                      <Pressable
                        key={i}
                        onPress={() => vaiA(i + 1)}
                        style={({ pressed }) => [
                          styles.voceIndice,
                          i > 0 && {
                            borderTopWidth: 1,
                            borderTopColor: theme.backgroundSelected,
                          },
                          pressed && { opacity: 0.6 },
                        ]}
                      >
                        <ThemedText style={styles.numeroIndice}>
                          {i + 1}
                        </ThemedText>
                        <ThemedText style={{ flex: 1 }}>
                          {primaMaiuscola(riquadro.titolo)}
                        </ThemedText>
                        <SymbolView
                          name={{
                            ios: "chevron.right",
                            android: "chevron_right",
                            web: "chevron_right",
                          }}
                          size={14}
                          tintColor={theme.textSecondary}
                        />
                      </Pressable>
                    ))}
                  </ThemedView>
                ) : (
                  /* Riquadro */
                  riquadroCorrente && (
                    <ThemedView>
                      <ThemedText
                        style={[
                          styles.etichetta,
                          { color: theme.textSecondary },
                        ]}
                      >
                        Riquadro {pagina} di {numeroRiquadri}
                      </ThemedText>
                      <ThemedText style={styles.titoloRiquadro}>
                        {riquadroCorrente.titolo}
                      </ThemedText>
                      <ThemedView style={styles.lineaGialla} />
                      <ThemedView style={styles.blocchi}>
                        {riquadroCorrente.blocchi.map((blocco, i) => (
                          <MostraBlocco
                            key={i}
                            chiave={String(i)}
                            blocco={blocco}
                            paginaSpiegazione={paginaSpiegazione}
                            vaiA={vaiA}
                            stato={stati[`${pagina}-${i}`]}
                            onStato={(nuovo) =>
                              setStati((s) => ({
                                ...s,
                                [`${pagina}-${i}`]: nuovo,
                              }))
                            }
                            onRivedi={vaiARiquadro}
                            riepilogo={riepilogo}
                            onRicomincia={ricomincia}
                          />
                        ))}
                      </ThemedView>
                    </ThemedView>
                  )
                )}
              </ThemedView>
            </ScrollView>

            {/* Nei riquadri, i bordi dello schermo (il margine vuoto ai lati del
            contenuto) portano al riquadro precedente e al successivo 
          {pagina > 0 && (
            <>
              <Pressable
                style={[styles.bordo, { left: 0 }]}
                onPress={() => toccoBordo(-1)}
              />
              <Pressable
                style={[styles.bordo, { right: 1 }]}
                onPress={() => toccoBordo(1)}
              />
            </>
          )}*/}
          </AreaAnnotazioni>
        </ThemedView>

        {/* Dopo un "Rivedi": pulsante fisso, sopra il contenuto anche quando si scorre,
            per tornare al punto esatto da cui si è partiti */}
        {ritorno && ritorno.pagina !== pagina && (
          <Pressable
            onPress={tornaIndietro}
            style={({ pressed }) => [
              styles.tornaIndietro,
              { backgroundColor: theme.background },
              pressed && { opacity: 0.8 },
            ]}
          >
            <ThemedText style={styles.testoTornaIndietro}>
              ↩ Torna a:{" "}
              {primaMaiuscola(
                lezione.riquadri?.[ritorno.pagina - 1]?.titolo ?? "",
              )}
            </ThemedText>
          </Pressable>
        )}
      </ThemedView>

      {/* Barra dei pulsanti, fissa in fondo */}
      <ThemedView
        style={[styles.barra, { borderTopColor: theme.backgroundSelected }]}
      >
        {pagina > 0 ? (
          <Pressable
            style={({ pressed }) => [
              styles.indietro,
              pressed && { opacity: 0.6 },
            ]}
            onPress={indietro}
          >
            <SymbolView
              name={{
                ios: "arrow.left",
                android: "arrow_back",
                web: "arrow_back",
              }}
              size={16}
              tintColor={theme.textSecondary}
            />
            <ThemedText style={{ color: theme.textSecondary }}>
              Indietro
            </ThemedText>
          </Pressable>
        ) : (
          <ThemedView />
        )}

        {/* Nei riquadri: torna alla copertina con l'indice */}
        {pagina > 0 && (
          <Pressable
            style={({ pressed }) => [
              styles.indietro,
              pressed && { opacity: 0.6 },
            ]}
            onPress={tornaAllIndice}
            hitSlop={8}
          >
            <SymbolView
              name={{
                ios: "list.bullet",
                android: "toc",
                web: "toc",
              }}
              size={16}
              tintColor={theme.textSecondary}
            />
            <ThemedText style={{ color: theme.textSecondary }}>
              Indice
            </ThemedText>
          </Pressable>
        )}

        <Pressable
          style={({ pressed }) => [styles.avanti, pressed && { opacity: 0.8 }]}
          onPress={() => (ultimaPagina ? setEsci(true) : vaiA(pagina + 1))}
        >
          <ThemedText style={styles.testoAvanti}>
            {ultimaPagina ? "Fine" : pagina === 0 ? "Inizia" : "Avanti"}
          </ThemedText>
          <SymbolView
            name={
              ultimaPagina
                ? { ios: "checkmark", android: "check", web: "check" }
                : {
                    ios: "arrow.right",
                    android: "arrow_forward",
                    web: "arrow_forward",
                  }
            }
            size={16}
            tintColor="#000000"
          />
        </Pressable>
      </ThemedView>
    </SafeAreaView>
  );
}

// Sceglie come disegnare un blocco in base al suo tipo
function MostraBlocco({
  chiave,
  blocco,
  paginaSpiegazione,
  vaiA,
  stato,
  onStato,
  onRivedi,
  riepilogo,
  onRicomincia,
}: {
  // Identifica il blocco nel riquadro, per selezionarne il testo
  chiave: string;
  blocco: Blocco;
  paginaSpiegazione: (righe: string[], riga: number) => number | undefined;
  vaiA: (pagina: number) => void;
  stato: StatoEsercizio | undefined;
  onStato: (stato: StatoEsercizio) => void;
  onRivedi: (titolo: string) => void;
  riepilogo: {
    totale: number;
    giuste: number;
    risposte: number;
    sbagliati: { testo: string; rivedi?: string }[];
  };
  onRicomincia: () => void;
}) {
  if (blocco.tipo === "esempi") {
    return <CardEsempi esempi={blocco.esempi} />;
  }
  if (blocco.tipo === "tabella") {
    return <Tabella righe={blocco.righe} />;
  }
  if (blocco.tipo === "nota") {
    return <CardNota testo={blocco.testo} chiave={chiave} />;
  }
  if (blocco.tipo === "sottotitolo") {
    return <ThemedText style={styles.sottotitolo}>{blocco.testo}</ThemedText>;
  }
  if (blocco.tipo === "punteggio") {
    return (
      <Punteggio
        {...riepilogo}
        onRivedi={onRivedi}
        onRicomincia={onRicomincia}
      />
    );
  }
  if (
    blocco.tipo === "sceltaMultipla" ||
    blocco.tipo === "riordina" ||
    blocco.tipo === "abbina" ||
    blocco.tipo === "completa" ||
    blocco.tipo === "seleziona" ||
    blocco.tipo === "traduci" ||
    blocco.tipo === "scrivi"
  ) {
    return (
      <Esercizio
        esercizio={blocco}
        stato={stato}
        onStato={onStato}
        onRivedi={onRivedi}
      />
    );
  }
  if (blocco.tipo === "apri") {
    return (
      <CardApri
        id={blocco.id}
        titolo={blocco.titolo}
        descrizione={blocco.descrizione}
      />
    );
  }
  if (blocco.tipo === "brano") {
    // Il testo è cliccabile se almeno un verso ha una spiegazione
    const cliccabile = blocco.righe.some((_, i) =>
      paginaSpiegazione(blocco.righe, i),
    );
    return (
      <Brano
        righe={blocco.righe}
        traduzione={blocco.traduzione}
        evidenzia={blocco.evidenzia}
        onPressRiga={
          cliccabile
            ? (riga) => {
                const pagina = paginaSpiegazione(blocco.righe, riga);
                if (pagina !== undefined) vaiA(pagina);
              }
            : undefined
        }
      />
    );
  }
  return (
    <TestoConRimandi
      testo={blocco.testo}
      chiave={chiave}
      style={styles.testo}
    />
  );
}

// I riquadri con esercizi sbagliati, da rileggere
function DaRivedere({
  titoli,
  onRivedi,
}: {
  titoli: string[];
  onRivedi: (titolo: string) => void;
}) {
  const theme = useTheme();
  return (
    <ThemedView type="backgroundElement" style={styles.daRivedere}>
      <ThemedText style={[styles.etichetta, { color: theme.textSecondary }]}>
        Da rivedere
      </ThemedText>
      {titoli.map((titolo) => (
        <Pressable key={titolo} onPress={() => onRivedi(titolo)} hitSlop={4}>
          <ThemedText style={styles.linkRiepilogo}>
            → {primaMaiuscola(titolo)}
          </ThemedText>
        </Pressable>
      ))}
    </ThemedView>
  );
}

// La card in copertina quando gli esercizi sono iniziati ma non finiti:
// quanti ne mancano, come stanno andando e il pulsante per riprendere
function EserciziInSospeso({
  riepilogo,
  onRiprendi,
  onRicomincia,
  onRivedi,
}: {
  riepilogo: ReturnType<typeof calcolaRiepilogo>;
  onRiprendi: () => void;
  onRicomincia: () => void;
  onRivedi: (titolo: string) => void;
}) {
  const theme = useTheme();
  const { totale, risposte, giuste } = riepilogo;
  const mancano = totale - risposte;
  const sbagliate = risposte - giuste;

  return (
    <ThemedView type="backgroundElement" style={styles.sospeso}>
      {/* La striscia gialla a sinistra, come le card degli esempi */}
      <ThemedView style={styles.strisciaSospeso} />

      <ThemedView type="backgroundElement" style={styles.contenutoSospeso}>
        <ThemedView type="backgroundElement" style={styles.testataSospeso}>
          <SymbolView
            name={{
              ios: "hourglass",
              android: "hourglass_empty",
              web: "hourglass_empty",
            }}
            size={20}
            tintColor={GIALLO}
          />
          <ThemedText style={styles.titoloRiepilogo}>
            Esercizi in sospeso
          </ThemedText>
          <ThemedText style={styles.contoSospeso}>
            {risposte}
            <ThemedText
              style={[styles.contoTotale, { color: theme.textSecondary }]}
            >
              /{totale}
            </ThemedText>
          </ThemedText>
        </ThemedView>

        <ThemedText style={styles.testoRiepilogo}>
          {mancano === 1
            ? "Ti manca un solo esercizio"
            : `Ti mancano ${mancano} esercizi`}
          : finiscili per avere il tuo risultato.
        </ThemedText>

        {/* Un segmento per esercizio: verde giusto, rosso sbagliato,
            grigio ancora da fare */}
        <ThemedView type="backgroundElement" style={styles.segmenti}>
          {Array.from({ length: totale }).map((_, i) => (
            <ThemedView
              key={i}
              style={[
                styles.segmento,
                {
                  backgroundColor:
                    i < giuste
                      ? VERDE
                      : i < risposte
                        ? ROSSO
                        : theme.backgroundSelected,
                },
              ]}
            />
          ))}
        </ThemedView>
        <ThemedView type="backgroundElement" style={styles.legenda}>
          <Voce colore={VERDE} testo={`${giuste} giuste`} />
          <Voce colore={ROSSO} testo={`${sbagliate} sbagliate`} />
          <Voce
            colore={theme.backgroundSelected}
            testo={`${mancano} da fare`}
          />
        </ThemedView>

        {riepilogo.daRivedere.length > 0 && (
          <DaRivedere titoli={riepilogo.daRivedere} onRivedi={onRivedi} />
        )}

        <ThemedView type="backgroundElement" style={styles.pulsantiRiepilogo}>
          <Pressable
            onPress={onRiprendi}
            style={({ pressed }) => [
              styles.riprendi,
              pressed && { opacity: 0.7 },
            ]}
          >
            <ThemedText style={styles.testoAvanti}>Riprendi</ThemedText>
            <SymbolView
              name={{
                ios: "arrow.right",
                android: "arrow_forward",
                web: "arrow_forward",
              }}
              size={16}
              tintColor="#000000"
            />
          </Pressable>
          <Pressable
            onPress={onRicomincia}
            style={({ pressed }) => [
              styles.ricomincia,
              { borderColor: theme.backgroundSelected },
              pressed && { opacity: 0.7 },
            ]}
          >
            <ThemedText
              style={[styles.testoRicomincia, { color: theme.textSecondary }]}
            >
              Rifai da capo
            </ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

// Un pallino colorato con la sua spiegazione, sotto i segmenti
function Voce({ colore, testo }: { colore: string; testo: string }) {
  const theme = useTheme();
  return (
    <ThemedView type="backgroundElement" style={styles.voceLegenda}>
      <ThemedView style={[styles.pallino, { backgroundColor: colore }]} />
      <ThemedText style={[styles.testoLegenda, { color: theme.textSecondary }]}>
        {testo}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  riepilogo: {
    borderRadius: 12,
    padding: 14,
    gap: 10,
    marginBottom: Spacing.three,
  },
  completati: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
  },
  titoloRiepilogo: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 18,
  },
  testoRiepilogo: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  daRivedere: {
    gap: 4,
  },
  linkRiepilogo: {
    color: GIALLO,
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    lineHeight: 22,
  },
  pulsantiRiepilogo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 4,
  },
  sospeso: {
    flexDirection: "row",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: Spacing.three,
  },
  strisciaSospeso: {
    width: 4,
    backgroundColor: GIALLO,
  },
  contenutoSospeso: {
    flex: 1,
    padding: Spacing.three,
    gap: 12,
  },
  testataSospeso: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
  },
  // Il conto delle risposte, spinto tutto a destra
  contoSospeso: {
    marginLeft: "auto",
    color: GIALLO,
    fontFamily: "Inter_600SemiBold",
    fontSize: 18,
  },
  contoTotale: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  segmenti: {
    flexDirection: "row",
    gap: 3,
  },
  segmento: {
    flex: 1,
    height: 6,
    borderRadius: 3,
  },
  legenda: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: Spacing.three,
    rowGap: 4,
    marginTop: -4,
  },
  voceLegenda: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  pallino: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  testoLegenda: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
  },
  // Pieno come il pulsante "Avanti" in fondo alla lezione
  riprendi: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: GIALLO,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  ricomincia: {
    borderWidth: 1,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  testoRicomincia: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  // Larga quanto il margine laterale del contenuto, così non lo copre
  bordo: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: Spacing.six,
  },
  container: {
    flex: 1,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.five,
    paddingHorizontal: Spacing.four,
    gap: Spacing.three,
  },
  etichetta: {
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontFamily: "Inter_600SemiBold",
    marginTop: Spacing.one,
  },
  descrizioneLezione: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    lineHeight: 21,
    marginTop: -Spacing.two,
  },
  titoloLezione: {
    fontFamily: "PlayfairDisplay_600SemiBold",
    fontSize: 28,
    lineHeight: 34,
  },
  avanzamento: {
    flexDirection: "row",
    gap: 4,
    marginBottom: Spacing.three,
  },
  trattino: {
    flex: 1,
    height: 3,
    borderRadius: 2,
  },
  voceIndice: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 12,
  },
  numeroIndice: {
    fontFamily: "PlayfairDisplay_700Bold",
    color: GIALLO,
    width: 24,
  },
  sottotitolo: {
    color: GIALLO,
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontFamily: "Inter_600SemiBold",
    marginTop: Spacing.four,
  },
  tornaIndietro: {
    position: "absolute",
    bottom: Spacing.three,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: GIALLO,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 18,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
  },
  testoTornaIndietro: {
    color: GIALLO,
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  titoloRiquadro: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: 0.5,
    marginTop: Spacing.one,
  },
  lineaGialla: {
    width: 40,
    height: 2,
    backgroundColor: GIALLO,
    marginTop: Spacing.three,
    marginBottom: Spacing.four,
  },
  blocchi: {
    gap: Spacing.three,
  },
  testo: {
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    lineHeight: 24,
  },
  barra: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
  },
  indietro: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 12,
  },
  avanti: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: GIALLO,
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 22,
  },
  testoAvanti: {
    color: "#000000",
    fontFamily: "Inter_600SemiBold",
  },
});
