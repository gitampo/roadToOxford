/**
 * Schermata: le statistiche (i miglioramenti).
 * Raggiungibile da /miglioramenti, con il bottone nella pagina del test. Mostra quanto si è studiato e quanto si risponde
 * bene, nel tempo, leggendo lo storico giorno per giorno (vedi progressi.ts):
 * - in alto tre numeri di riepilogo, sempre in vista;
 * - sotto, in un carosello che si scorre verso destra, tre sezioni:
 *   la precisione delle ultime 8 settimane (risposte giuste sul totale) come
 *   curva su un grafico cartesiano; l'avanzamento in ogni livello, con gli
 *   stessi conti della lista lezioni; l'attività degli ultimi 14 giorni
 *   (riquadri letti + esercizi fatti).
 */

import { Children, useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Grafico from "@/components/grafico";
import GraficoCurva from "@/components/graficoCurva";
import LineaTitolo from "@/components/lineaTitolo";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, constants, Spacing } from "@/constants/theme";
import { avanzamento, idCollegati } from "@/data/avanzamento";
import { LEZIONI } from "@/data/lezioni";
import { dataDi, Giorno, Storico } from "@/data/progressi";
import { useRisultati } from "@/hooks/use-risultati";
import { useStorico } from "@/hooks/use-storico";
import { useTheme } from "@/hooks/use-theme";
import { useVisti } from "@/hooks/use-visti";

const VERDE = ColoriAttivita.test;
const GIORNI = 14;
const SETTIMANE = 8;
const INIZIALI = ["D", "L", "M", "M", "G", "V", "S"]; // getDay(): 0 = domenica

const LIVELLI = [...new Set(LEZIONI.map((l) => l.livello))];

// Il giorno che sta n giorni prima di oggi
function giorniFa(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

// Somma i giorni dello storico tra due date comprese ("2026-10-01")
function somma(storico: Storico, da: string, a: string): Giorno {
  const tot = { risposte: 0, giuste: 0, riquadri: 0 };
  for (const [data, g] of Object.entries(storico)) {
    // Le date in questo formato si confrontano anche come testo
    if (data < da || data > a) continue;
    tot.risposte += g.risposte;
    tot.giuste += g.giuste;
    tot.riquadri += g.riquadri;
  }
  return tot;
}

// Le giuste in percentuale; null se non c'è nessuna risposta
function precisione(g: Giorno) {
  return g.risposte > 0 ? Math.round((g.giuste / g.risposte) * 100) : null;
}

export default function Miglioramenti() {
  const theme = useTheme();
  const storico = useStorico();
  const ids = LEZIONI.flatMap(idCollegati);
  const risultati = useRisultati(ids);
  const visti = useVisti(ids);

  // Attività: un valore per ognuno degli ultimi 14 giorni, oggi per ultimo.
  // I giorni senza studio valgono 0, così la barra resta vuota ma c'è
  const giorni = Array.from({ length: GIORNI }, (_, i) =>
    giorniFa(GIORNI - 1 - i),
  );
  const attivita = giorni.map((d) => {
    const g = storico[dataDi(d)];
    return g ? g.riquadri + g.risposte : 0;
  });

  // Precisione: le settimane vanno da lunedì a domenica, l'ultima è questa
  const lunedi = giorniFa((new Date().getDay() + 6) % 7);
  const settimane = Array.from({ length: SETTIMANE }, (_, i) => {
    const inizio = new Date(lunedi);
    inizio.setDate(inizio.getDate() - 7 * (SETTIMANE - 1 - i));
    const fine = new Date(inizio);
    fine.setDate(fine.getDate() + 6);
    return { inizio, g: somma(storico, dataDi(inizio), dataDi(fine)) };
  });

  // Il miglioramento: l'ultima settimana con risposte contro la prima.
  // Serve almeno due settimane con dati, se no non c'è niente da confrontare
  const conDati = settimane.flatMap((s) => {
    const p = precisione(s.g);
    return p === null ? [] : [p];
  });
  const tendenza =
    conDati.length >= 2 ? conDati[conDati.length - 1] - conDati[0] : null;

  // I tre numeri in alto
  const oggi = storico[dataDi()];
  const settimana = somma(storico, dataDi(giorniFa(6)), dataDi());
  const sempre = somma(storico, "0000-00-00", "9999-99-99");
  const vuoto = Object.keys(storico).length === 0;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText type="title" style={constants.title}>
          Le tue statistiche
        </ThemedText>
        <LineaTitolo colore={VERDE} />

        <ScrollView contentContainerStyle={styles.contenuto}>
          {/* Il riepilogo, sempre in vista in alto */}
          <View style={styles.riquadri}>
            <Numero
              valore={oggi ? oggi.riquadri + oggi.risposte : 0}
              etichetta="attività oggi"
            />
            <Numero
              valore={settimana.riquadri + settimana.risposte}
              etichetta="negli ultimi 7 giorni"
            />
            <Numero
              valore={
                precisione(sempre) === null ? "–" : `${precisione(sempre)}%`
              }
              etichetta="risposte giuste"
            />
          </View>

          {vuoto && (
            <ThemedText style={[styles.nota, { color: theme.textSecondary }]}>
              I grafici partono da oggi: ogni riquadro che apri per la prima
              volta e ogni esercizio che completi finiscono qui.
            </ThemedText>
          )}

          {/* Sotto, le sezioni una accanto all'altra: si scorre a destra */}
          <Carosello titoli={["Precisione", "Livelli", "Costanza"]}>
            <Sezione
              etichetta="Il miglioramento"
              titolo="Precisione"
              spiegazione="Le risposte giuste sul totale, settimana per settimana. È il segno che stai capendo meglio, non solo facendo di più."
            >
              <GraficoCurva
                valori={settimane.map((s) => precisione(s.g))}
                etichette={settimane.map(
                  (s) => `${s.inizio.getDate()}/${s.inizio.getMonth() + 1}`,
                )}
                colore={VERDE}
                massimo={100}
                griglia={[0, 25, 50, 75, 100]}
                formato={(v) => `${v}%`}
              />
              {tendenza !== null && (
                <ThemedText
                  style={[styles.nota, { color: theme.textSecondary }]}
                >
                  {tendenza > 0
                    ? `Sei migliorato di ${tendenza} punti rispetto alla prima settimana del grafico.`
                    : tendenza < 0
                      ? `Sei sceso di ${-tendenza} punti rispetto alla prima settimana del grafico: ripassa i riquadri degli esercizi sbagliati.`
                      : "Sei stabile rispetto alla prima settimana del grafico."}
                </ThemedText>
              )}
            </Sezione>

            <Sezione
              etichetta="Dove sei arrivato"
              titolo="Per livello"
              spiegazione="Riquadri di teoria letti e risposte giuste, sul totale del livello."
            >
              {/* Su due colonne: la card resta bassa come le altre */}
              <View style={styles.grigliaLivelli}>
                {LIVELLI.map((livello) => {
                  const lezioni = LEZIONI.filter((l) => l.livello === livello);
                  const tot = lezioni.reduce(
                    (t, l) => {
                      const a = avanzamento(l, risultati, visti);
                      return {
                        fatti: t.fatti + a.fatti,
                        daFare: t.daFare + a.daFare,
                      };
                    },
                    { fatti: 0, daFare: 0 },
                  );
                  const quota = tot.daFare > 0 ? tot.fatti / tot.daFare : 0;
                  return (
                    <View key={livello} style={styles.livello}>
                      <View style={styles.rigaLivello}>
                        <ThemedText style={styles.nomeLivello}>
                          {livello}
                        </ThemedText>
                        <ThemedText
                          style={[
                            styles.percentuale,
                            { color: theme.textSecondary },
                          ]}
                        >
                          {Math.round(quota * 100)}%
                        </ThemedText>
                      </View>
                      <View
                        style={[
                          styles.binario,
                          { backgroundColor: theme.backgroundElement },
                        ]}
                      >
                        <View
                          style={[
                            styles.riempimento,
                            {
                              width: `${quota * 100}%`,
                              backgroundColor: VERDE,
                            },
                          ]}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
            </Sezione>

            <Sezione
              etichetta="La costanza"
              titolo="Gli ultimi 14 giorni"
              spiegazione="Riquadri letti ed esercizi fatti, giorno per giorno."
            >
              <Grafico
                valori={attivita}
                etichette={giorni.map((d) => INIZIALI[d.getDay()])}
                colore={VERDE}
              />
            </Sezione>
          </Carosello>
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

// Le sezioni una accanto all'altra, una per schermata: si scorre a destra e
// a sinistra e ci si ferma sempre su una sezione intera. Sopra, i nomi delle
// sezioni: quello attivo è verde, e toccandone uno ci si va.
// Il carosello esce dai margini della pagina (margini negativi) e ogni
// pagina li rimette al suo interno: così le card restano allineate al resto
// e mentre si scorre non vengono tagliate dal bordo del contenuto
function Carosello({
  titoli,
  children,
}: {
  titoli: string[];
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const scroll = useRef<ScrollView>(null);
  const [larghezza, setLarghezza] = useState(0);
  const [attiva, setAttiva] = useState(0);

  function vaiA(i: number) {
    scroll.current?.scrollTo({ x: i * larghezza, animated: true });
    setAttiva(i);
  }

  return (
    <View style={styles.carosello}>
      <View style={styles.schede}>
        {titoli.map((t, i) => (
          <Pressable key={t} onPress={() => vaiA(i)} hitSlop={8}>
            <ThemedText
              style={[
                styles.scheda,
                { color: i === attiva ? VERDE : theme.textSecondary },
              ]}
            >
              {t}
            </ThemedText>
            <View
              style={[
                styles.lineaScheda,
                { backgroundColor: i === attiva ? VERDE : "transparent" },
              ]}
            />
          </Pressable>
        ))}
      </View>
      <ScrollView
        ref={scroll}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.pagine}
        contentContainerStyle={styles.filaPagine}
        onLayout={(e) => setLarghezza(e.nativeEvent.layout.width)}
        onMomentumScrollEnd={(e) =>
          setAttiva(Math.round(e.nativeEvent.contentOffset.x / larghezza))
        }
        // Sul web non c'è la fine dello slancio: si aggiorna durante lo
        // scorrimento (scrollEventThrottle limita quante volte)
        onScroll={(e) => {
          if (larghezza > 0)
            setAttiva(Math.round(e.nativeEvent.contentOffset.x / larghezza));
        }}
        scrollEventThrottle={100}
      >
        {larghezza > 0 &&
          Children.map(children, (c) => (
            <View style={[styles.pagina, { width: larghezza }]}>{c}</View>
          ))}
      </ScrollView>
    </View>
  );
}

// Un numero grande con la sua etichetta sotto
function Numero({
  valore,
  etichetta,
}: {
  valore: number | string;
  etichetta: string;
}) {
  const theme = useTheme();
  return (
    <ThemedView type="backgroundElement" style={styles.numero}>
      <ThemedText style={[styles.cifra, { color: VERDE }]}>{valore}</ThemedText>
      <ThemedText style={[styles.etichetta, { color: theme.textSecondary }]}>
        {etichetta}
      </ThemedText>
    </ThemedView>
  );
}

// Una sezione della pagina: una card con il bordo, che in alto ha
// un'etichetta verde (a cosa serve), il titolo, la linetta e una riga di
// spiegazione; sotto, separato da più spazio, il contenuto
function Sezione({
  etichetta,
  titolo,
  spiegazione,
  children,
}: {
  etichetta: string;
  titolo: string;
  spiegazione: string;
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <View style={[styles.sezione, { borderColor: theme.backgroundSelected }]}>
      <View style={styles.intestazione}>
        <ThemedText style={[styles.etichettaSezione, { color: VERDE }]}>
          {etichetta}
        </ThemedText>
        <ThemedText style={styles.titoloSezione}>{titolo}</ThemedText>
        <View style={[styles.linetta, { backgroundColor: VERDE }]} />
        <ThemedText
          style={[styles.spiegazione, { color: theme.textSecondary }]}
        >
          {spiegazione}
        </ThemedText>
      </View>
      <View style={styles.corpo}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenuto: {
    gap: Spacing.three,
    paddingBottom: Spacing.six,
  },
  carosello: {
    gap: Spacing.three,
  },
  schede: {
    flexDirection: "row",
    gap: Spacing.four,
  },
  scheda: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  lineaScheda: {
    height: 2,
    borderRadius: 1,
    marginTop: 4,
  },
  // Esce dai margini della pagina, che ogni pagina rimette al suo interno
  pagine: {
    marginHorizontal: -Spacing.four,
  },
  // Ogni card è alta quanto il suo contenuto, non quanto la più alta
  filaPagine: {
    alignItems: "flex-start",
  },
  pagina: {
    paddingHorizontal: Spacing.four,
  },
  riquadri: {
    flexDirection: "row",
    gap: Spacing.two,
  },
  numero: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  cifra: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 26,
    lineHeight: 32,
  },
  etichetta: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    lineHeight: 14,
    textAlign: "center",
  },
  nota: {
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    fontSize: 13,
    lineHeight: 19,
  },
  sezione: {
    borderWidth: 1,
    borderRadius: 16,
    padding: Spacing.three,
    gap: Spacing.three,
  },
  intestazione: {
    gap: 4,
  },
  etichettaSezione: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  linetta: {
    width: 32,
    height: 2,
    borderRadius: 1,
    marginTop: 2,
    marginBottom: 4,
  },
  corpo: {
    gap: Spacing.three,
  },
  titoloSezione: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 20,
    lineHeight: 26,
  },
  spiegazione: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 19,
  },
  grigliaLivelli: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: Spacing.three,
    rowGap: Spacing.three,
  },
  // Due per riga: ognuno prende metà dello spazio, meno lo stacco
  livello: {
    gap: 4,
    flexBasis: "45%",
    flexGrow: 1,
  },
  rigaLivello: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nomeLivello: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  percentuale: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
  },
  binario: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
  },
  riempimento: {
    height: "100%",
    borderRadius: 4,
  },
});
