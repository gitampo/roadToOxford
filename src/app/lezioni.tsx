/**
 * Schermata: elenco delle lezioni.
 * Raggiungibile da /lezioni. Mostra un riquadro per ogni lezione;
 * toccandone uno si apre la lezione corrispondente.
 * In alto ci sono la ricerca per parola e le linguette dei livelli; sotto, le
 * lezioni sono raggruppate per livello, ognuno con la sua intestazione.
 * Ogni lezione ha una barra dei progressi, sotto l'icona del grafico: conta
 * i riquadri di teoria già aperti e le risposte giuste agli esercizi
 * (compresi quelli dei testi che la lezione apre).
 */

import Linguette from "@/components/linguette";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { constants, Spacing } from "@/constants/theme";
import { LEZIONI } from "@/data/lezioni";
import { TESTI } from "@/data/testi";
import { useRisultati } from "@/hooks/use-risultati";
import { useTheme } from "@/hooks/use-theme";
import { useVisti } from "@/hooks/use-visti";
import { ESERCIZI_CON_PUNTEGGIO, Lezione } from "@/types/lezione";
import { Link } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GIALLO = "#ffe100";
const LARGHEZZA_COLONNA = 32;

// I livelli, nell'ordine in cui compaiono le lezioni (A1, A2, B1, ...)
const LIVELLI = [...new Set(LEZIONI.map((l) => l.livello))];

// Quanti esercizi con punteggio ha una lezione (senza contare i testi)
function contaEsercizi(lezione: Lezione | undefined) {
  return (lezione?.riquadri ?? []).reduce(
    (somma, r) =>
      somma +
      r.blocchi.filter((b) =>
        (ESERCIZI_CON_PUNTEGGIO as readonly string[]).includes(b.tipo),
      ).length,
    0,
  );
}

// I numeri dei riquadri di teoria (quelli senza esercizi con punteggio)
function riquadriTeoria(lezione: Lezione | undefined) {
  return (lezione?.riquadri ?? []).flatMap((r, i) =>
    r.blocchi.some((b) =>
      (ESERCIZI_CON_PUNTEGGIO as readonly string[]).includes(b.tipo),
    )
      ? []
      : [i + 1],
  );
}

// Gli id di una lezione e dei testi che apre (come il Sonetto 18 nel C3)
function idCollegati(lezione: Lezione) {
  const testi = (lezione.riquadri ?? []).flatMap((r) =>
    r.blocchi.flatMap((b) => (b.tipo === "apri" ? [b.id] : [])),
  );
  return [lezione.id, ...testi];
}

// Minuscole, senza accenti e senza spazi ai lati, per confrontare i testi
function normalizza(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

// Vero se la lezione contiene il testo cercato
function corrisponde(lezione: Lezione, query: string) {
  const testo = normalizza(
    [lezione.livello, lezione.titolo, lezione.descrizione, lezione.chiavi].join(
      " ",
    ),
  );
  return testo.includes(normalizza(query));
}

export default function Lezioni() {
  const risultati = useRisultati(LEZIONI.flatMap(idCollegati));
  const visti = useVisti(LEZIONI.flatMap(idCollegati));
  const theme = useTheme();
  const [query, setQuery] = useState("");
  // null = tutti i livelli
  const [livello, setLivello] = useState<string | null>(null);

  const lezioniFiltrate = LEZIONI.filter(
    (lezione) =>
      (livello === null || lezione.livello === livello) &&
      corrisponde(lezione, query),
  );

  // Una sezione per livello, saltando quelli senza lezioni dopo il filtro
  const sezioni = LIVELLI.map((l) => ({
    livello: l,
    lezioni: lezioniFiltrate.filter((lezione) => lezione.livello === l),
  })).filter((s) => s.lezioni.length > 0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText type="title" style={constants.title}>
          Lezioni
        </ThemedText>
        <ThemedView
          style={[styles.barra, { backgroundColor: theme.backgroundElement }]}
        >
          <TextInput
            style={[styles.ricerca, { color: theme.text }]}
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor={theme.textSecondary}
            value={query}
            onChangeText={setQuery}
            placeholder="Ricerca per parola..."
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery("")} hitSlop={10}>
              <SymbolView
                name={{
                  ios: "xmark.circle.fill",
                  android: "close",
                  web: "close",
                }}
                size={18}
                tintColor={theme.textSecondary}
              />
            </Pressable>
          )}
        </ThemedView>

        <Linguette
          voci={LIVELLI}
          attiva={livello}
          onCambia={setLivello}
          colore={GIALLO}
        />

        <ScrollView keyboardDismissMode="on-drag">
          {sezioni.map((sezione) => (
            <ThemedView key={sezione.livello} style={styles.sezione}>
              <ThemedView style={styles.intestazione}>
                <ThemedText style={styles.intestazioneTitolo}>
                  {sezione.livello}
                </ThemedText>
                <ThemedText
                  style={[
                    styles.intestazioneConteggio,
                    { color: theme.textSecondary },
                  ]}
                >
                  {sezione.lezioni.length}{" "}
                  {sezione.lezioni.length === 1 ? "lezione" : "lezioni"}
                </ThemedText>
                {/* L'icona dei progressi, in colonna con le barre delle card */}
                <ThemedView style={[styles.colonne, styles.colonna]}>
                  <SymbolView
                    name={{
                      ios: "chart.bar.fill",
                      android: "bar_chart",
                      web: "bar_chart",
                    }}
                    size={16}
                    tintColor={theme.textSecondary}
                  />
                </ThemedView>
              </ThemedView>
              {sezione.lezioni.map((lezione) => (
                <CardLezione
                  key={lezione.id}
                  lezione={lezione}
                  risultati={risultati}
                  visti={visti}
                />
              ))}
            </ThemedView>
          ))}
          {lezioniFiltrate.length === 0 && (
            <ThemedText style={{ color: theme.textSecondary }}>
              Nessun riferimento trovato
            </ThemedText>
          )}
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

// Il riquadro di una lezione, con la barra dei progressi a destra
function CardLezione({
  lezione,
  risultati,
  visti,
}: {
  lezione: Lezione;
  risultati: ReturnType<typeof useRisultati>;
  visti: ReturnType<typeof useVisti>;
}) {
  const theme = useTheme();
  const ids = idCollegati(lezione);
  const trova = (id: string) => [...LEZIONI, ...TESTI].find((l) => l.id === id);

  // Teoria: i riquadri di teoria aperti, della lezione e dei suoi testi
  const teoria = ids.reduce(
    (somma, id) => somma + riquadriTeoria(trova(id)).length,
    0,
  );
  const letti = ids.reduce(
    (somma, id) =>
      somma +
      riquadriTeoria(trova(id)).filter((p) => visti[id]?.includes(p)).length,
    0,
  );

  // Esercizi: somma gli esercizi della lezione e dei suoi testi
  const totale = ids.reduce(
    (somma, id) => somma + contaEsercizi(trova(id)),
    0,
  );
  const giuste = ids.reduce(
    (somma, id) => somma + (risultati[id]?.giuste ?? 0),
    0,
  );

  // Progressi: riquadri di teoria aperti + risposte giuste, sul totale
  const fatti = letti + giuste;
  const daFare = teoria + totale;

  return (
    <Link
      href={{ pathname: "/lezione/[id]", params: { id: lezione.id } }}
      asChild
    >
      <Pressable style={({ pressed }) => pressed && { opacity: 0.7 }}>
        {/* La riga sta in una View interna: sul web Link (asChild) non passa
            al Pressable lo stile scritto come funzione, e la riga si perdeva */}
        <View style={styles.voce}>
          <ThemedView style={styles.testi}>
            <ThemedText style={styles.titolo}>{lezione.titolo}</ThemedText>
            {lezione.descrizione && (
              <ThemedText
                style={[styles.descrizione, { color: theme.textSecondary }]}
              >
                {lezione.descrizione}
              </ThemedText>
            )}
            {lezione.chiavi && (
              <ThemedText style={[styles.chiavi, { color: theme.textSecondary }]}>
                {lezione.chiavi}
              </ThemedText>
            )}
            <ThemedView style={styles.lineaGialla} />
          </ThemedView>
          {/* Occupa il posto della barra, che è in posizione assoluta e da sola
              non toglierebbe spazio al testo */}
          <ThemedView style={styles.segnaposto} />
          <ThemedView style={[styles.colonne, styles.colonneCard]}>
            <BarraProgresso
              percentuale={daFare > 0 ? fatti / daFare : 0}
              colore={GIALLO}
            />
          </ThemedView>
        </View>
      </Pressable>
    </Link>
  );
}

// Una barretta verticale che si riempie dal basso per la percentuale (da 0 a 1).
// Il binario si vede sempre, anche vuoto
function BarraProgresso({
  percentuale,
  colore,
}: {
  percentuale: number;
  colore: string;
}) {
  const theme = useTheme();

  return (
    <ThemedView style={[styles.colonna, { flex: 1 }]}>
      <ThemedView
        style={[styles.binario, { backgroundColor: theme.backgroundSelected }]}
      >
        <ThemedView
          style={[
            styles.riempimento,
            { height: `${percentuale * 100}%`, backgroundColor: colore },
          ]}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  voce: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
    borderRadius: 10,
    overflow: "hidden",
  },
  // La colonna di destra (icona nell'intestazione, barra nelle card),
  // larga uguale così stanno incolonnate
  colonne: {
    marginLeft: "auto",
    backgroundColor: "transparent",
  },
  // Nella card la barra è posizionata in assoluto: va dall'altezza del titolo
  // a quella della linea gialla, qualunque sia l'altezza del testo.
  // top/bottom = padding (e marginBottom) di "testi"
  colonneCard: {
    position: "absolute",
    top: 10,
    bottom: 10 + Spacing.three,
    right: 0,
    marginLeft: 0,
  },
  segnaposto: {
    width: LARGHEZZA_COLONNA,
    alignSelf: "stretch",
    backgroundColor: "transparent",
  },
  // La colonna è larga come l'icona sopra; la barra sta al centro
  colonna: {
    width: LARGHEZZA_COLONNA,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  // flex-end: il riempimento parte dal fondo e sale
  binario: {
    flex: 1,
    width: 5,
    borderRadius: 3,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  riempimento: {
    width: "100%",
  },
  testi: {
    flex: 1,
    // Senza minWidth: 0 le parole lunghe allargherebbero il testo oltre la barra
    minWidth: 0,
    gap: 2,
    backgroundColor: "transparent",
    marginBottom: Spacing.three,
    padding: 10,
    borderRadius: 10,
  },
  // La stessa linetta che sta sotto i titoli dei riquadri nella lezione
  lineaGialla: {
    width: 40,
    height: 2,
    backgroundColor: GIALLO,
    marginTop: Spacing.three,
  },
  titolo: {
    fontFamily: "Inter_600SemiBold",
    color: GIALLO,
  },
  descrizione: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 19,
  },
  chiavi: {
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    fontSize: 12,
    lineHeight: 17,
    opacity: 0.8,
  },

  barra: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: Spacing.four,
  },
  ricerca: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    paddingVertical: 10,
  },
  sezione: {
    marginBottom: Spacing.three,
  },
  intestazione: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
    marginBottom: Spacing.one,
  },
  intestazioneTitolo: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 22,
    lineHeight: 28,
  },
  intestazioneConteggio: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
});
