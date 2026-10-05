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
  registraAttivita,
  salvaProgressi,
  segnaVisto,
} from "@/data/progressi";
import { TESTI } from "@/data/testi";
import { useTastiera } from "@/hooks/use-tastiera";
import { useTheme } from "@/hooks/use-theme";
import {
  Blocco,
  ESERCIZI_CON_PUNTEGGIO,
  Lezione,
  StatoEsercizio,
} from "@/types/lezione";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { usePreventRemove } from "expo-router/react-navigation";
import { SymbolView } from "expo-symbols";
import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  Easing,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { SafeAreaView } from "react-native-safe-area-context";

const GIALLO = "#ffe100";
// La curva delle animazioni di iOS: parte veloce e rallenta dolcemente
const curva = Easing.bezier(0.2, 0.9, 0.3, 1);

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
  // Negli esercizi da scrivere la tastiera non copre mai il campo
  const tastiera = useTastiera(scrollRef);
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
  // Lo swipe indietro nativo di iOS, dentro un riquadro, faceva prima vedere
  // la lista delle lezioni (la schermata scorreva via) e solo dopo tornava
  // all'indice. Dentro i riquadri quel gesto è spento (gestureEnabled più
  // sotto) e lo sostituisce questo: dal bordo sinistro, il riquadro segue il
  // dito e, lasciato abbastanza a destra, si torna all'indice
  const { width: larghezzaSchermo } = useWindowDimensions();
  const spostamento = useSharedValue(0);
  const opacita = useSharedValue(1);
  // Vero quando l'indice compare dopo uno swipe: entra con l'animazione
  const entrataDaSwipe = useRef(false);

  const swipeIndietro = Gesture.Pan()
    .enabled(pagina > 0)
    // Parte solo dai primi 30 punti a sinistra, come lo swipe di sistema
    .hitSlop({ left: 0, width: 30 })
    .activeOffsetX(10)
    // Se il dito va in verticale è uno scroll, non uno swipe
    .failOffsetY([-20, 20])
    .onUpdate((e) => {
      spostamento.value = Math.max(0, e.translationX);
    })
    .onEnd((e) => {
      const basta =
        e.translationX > larghezzaSchermo * 0.35 || e.velocityX > 500;
      if (!basta) {
        // Torna al suo posto, ripartendo dalla velocità del dito
        spostamento.value = withSpring(0, {
          damping: 26,
          stiffness: 260,
          velocity: e.velocityX,
        });
        return;
      }
      // Esce a destra: più il dito era veloce, più è breve (tra 100 e 200 ms)
      const resto = larghezzaSchermo - e.translationX;
      const durata = Math.min(
        200,
        Math.max(100, (resto / Math.max(e.velocityX, 1)) * 1000),
      );
      spostamento.value = withTiming(
        larghezzaSchermo,
        { duration: durata, easing: curva },
        (finito) => {
          if (!finito) return;
          // Nascosto prima di cambiare pagina: il riquadro vecchio non deve
          // ricomparire nemmeno per un attimo
          opacita.value = 0;
          scheduleOnRN(fineSwipe);
        },
      );
    });
  function fineSwipe() {
    entrataDaSwipe.current = true;
    tornaAllIndice();
  }
  // L'indice entra da sinistra con un leggero spostamento e una dissolvenza,
  // come la pagina sotto nello swipe di iOS. Parte dopo che React l'ha
  // disegnato, così non si vede mai il contenuto sbagliato
  useEffect(() => {
    if (pagina !== 0 || !entrataDaSwipe.current) return;
    entrataDaSwipe.current = false;
    spostamento.value = -larghezzaSchermo * 0.15;
    opacita.value = 0.3;
    spostamento.value = withTiming(0, { duration: 180, easing: curva });
    opacita.value = withTiming(1, { duration: 180, easing: curva });
  }, [pagina, larghezzaSchermo, spostamento, opacita]);

  const stileSwipe = useAnimatedStyle(() => ({
    opacity: opacita.value,
    transform: [{ translateX: spostamento.value }],
  }));
  // Sotto il riquadro che scorre: un velo scuro che si schiarisce man mano
  // che il riquadro esce, come l'ombra della pagina di sotto in iOS
  const stileVelo = useAnimatedStyle(() => ({
    opacity:
      spostamento.value > 0
        ? 0.35 * (1 - spostamento.value / larghezzaSchermo)
        : 0,
  }));

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
      {/* Lo swipe di sistema solo sull'indice, dove deve chiudere la lezione */}
      <Stack.Screen options={{ gestureEnabled: pagina === 0 }} />
      <ThemedView style={{ flex: 1 }}>
        {/* Il velo sta fuori dal GestureDetector, che vuole un solo figlio */}
        <Animated.View
          pointerEvents="none"
          style={[StyleSheet.absoluteFill, styles.veloSwipe, stileVelo]}
        />
        <GestureDetector gesture={swipeIndietro}>
          <Animated.View
            style={[
              { flex: 1, backgroundColor: theme.background },
              styles.paginaSwipe,
              stileSwipe,
            ]}
          >
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
                scrollEventThrottle={16}
                onScroll={(e) => {
                  scrollY.current = e.nativeEvent.contentOffset.y;
                  tastiera.onScroll(e);
                }}
              >
                <ThemedView style={styles.container}>
                  {/* Intestazione: livello, titolo e barra di avanzamento.
                      Dentro un riquadro il titolo della lezione sale al posto
                      del livello, e sopra i trattini va quello del riquadro */}
                  <ThemedText
                    style={[styles.etichetta, { color: theme.textSecondary }]}
                  >
                    {pagina > 0 && riquadroCorrente
                      ? `${lezione.titolo} · Riquadro ${pagina} di ${numeroRiquadri}`
                      : (lezione.sottotitolo ??
                        `${lezione.livello} · Lezione ${lezione.id}`)}
                  </ThemedText>
                  {pagina > 0 && riquadroCorrente ? (
                    <ThemedText style={[styles.titoloRiquadro, styles.vicino]}>
                      {riquadroCorrente.titolo}
                    </ThemedText>
                  ) : (
                    <ThemedText style={styles.titoloLezione}>
                      {lezione.titolo}
                    </ThemedText>
                  )}
                  {/* La linea gialla sotto il titolo, in copertina e nei
                      riquadri */}
                  <ThemedView style={styles.lineaGialla} />
                  {pagina === 0 && lezione.descrizione && (
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
                        <ThemedView style={styles.blocchi}>
                          {riquadroCorrente.blocchi.map((blocco, i) => (
                            <MostraBlocco
                              key={i}
                              chiave={String(i)}
                              blocco={blocco}
                              paginaSpiegazione={paginaSpiegazione}
                              vaiA={vaiA}
                              stato={stati[`${pagina}-${i}`]}
                              onStato={(nuovo) => {
                                const k = `${pagina}-${i}`;
                                // Una risposta conta nello storico solo quando
                                // l'esercizio si chiude (corretta passa da
                                // vuota a vero o falso): l'abbina, per
                                // esempio, chiama onStato a ogni coppia
                                if (
                                  nuovo.corretta !== undefined &&
                                  stati[k]?.corretta === undefined
                                ) {
                                  registraAttivita({
                                    risposte: 1,
                                    giuste: nuovo.corretta ? 1 : 0,
                                  });
                                }
                                setStati((s) => ({ ...s, [k]: nuovo }));
                              }}
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
                <View style={{ height: tastiera.spazio }} />
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
          </Animated.View>
        </GestureDetector>

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
  veloSwipe: {
    backgroundColor: "#000000",
  },
  // L'ombra sul bordo sinistro del riquadro mentre scorre: sembra un foglio
  // che si solleva. A riposo il bordo è fuori schermo e non si vede
  paginaSwipe: {
    boxShadow: "-8px 0 24px rgba(0, 0, 0, 0.35)",
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
  // Il titolo del riquadro, attaccato all'etichetta sopra
  vicino: {
    marginTop: -Spacing.two,
  },
  lineaGialla: {
    width: 40,
    height: 2,
    backgroundColor: GIALLO,
    marginTop: -Spacing.two,
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
