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

import BarraRicerca from "@/components/barraRicerca";
import Linguette from "@/components/linguette";
import LineaTitolo from "@/components/lineaTitolo";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { constants, Spacing } from "@/constants/theme";
import { avanzamento, idCollegati } from "@/data/avanzamento";
import { LEZIONI } from "@/data/lezioni";
import { PAROLE_RICERCA } from "@/data/lezioni/ricerca";
import { useRisultati } from "@/hooks/use-risultati";
import { useTheme } from "@/hooks/use-theme";
import { useVisti } from "@/hooks/use-visti";
import { Lezione } from "@/types/lezione";
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

// "Tempi verbali" e "Modi verbali" non sono livelli: sono filtri che
// raccolgono le lezioni sparse nei vari livelli (restano divise per livello
// sotto). Per ogni gruppo, i numeri delle lezioni che ne fanno parte
const GRUPPI: Record<string, string[]> = {
  "Tempi verbali": [
    "10",
    "12",
    "13",
    "21",
    "22",
    "23",
    "24",
    "27",
    "28",
    "29",
    "30",
    "31",
    "35",
    "37",
    "38",
    "39",
  ],
  // Imperativo, condizionali (con wish, che fa da congiuntivo), infinito e -ing
  "Modi verbali": ["19", "34", "36", "41", "48", "52"],
};

// Le linguette: i livelli, con i gruppi subito dopo B2-C1
const VOCI = LIVELLI.flatMap((l) =>
  l === "B2-C1" ? [l, ...Object.keys(GRUPPI)] : [l],
);

// Il numero di ogni lezione: la sua posizione nell'elenco completo ("Tutti"),
// lo stesso anche quando si filtra per livello o si cerca
const NUMERO = new Map(LEZIONI.map((l, i) => [l.id, i + 1]));

// Vero se la lezione rientra nella linguetta scelta (null = tutte)
function nelFiltro(lezione: Lezione, voce: string | null) {
  if (voce === null) return true;
  if (voce in GRUPPI) return GRUPPI[voce].includes(lezione.id);
  return lezione.livello === voce;
}

// Minuscole, senza accenti e senza spazi ai lati, per confrontare i testi
function normalizza(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
}

// Vero se la lezione contiene il testo cercato. Un numero da solo cerca la
// lezione con quel numero (così "2" trova la 2 e non anche la 12 o la 21)
function corrisponde(lezione: Lezione, query: string) {
  const numero = query.trim().replace(/\.$/, "");
  if (/^\d+$/.test(numero)) return NUMERO.get(lezione.id) === Number(numero);
  const testo = testoRicerca(lezione);
  // Tutte le parole cercate devono esserci, in qualsiasi ordine
  // ("countable nouns", "nouns countable"), ciascuna all'inizio di una
  // parola: "count" trova countable, ma "pub" non trova "repubblica"
  return normalizza(query)
    .replace(/[^a-z0-9'+-]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .every((parola) => testo.includes(" " + parola));
}

// Il testo in cui si cerca: quello che si vede (livello, titolo,
// descrizione, chiavi), i titoli dei riquadri e le parole di ricerca
// nascoste (data/lezioni/ricerca.ts: countable, present perfect...)
const testiRicerca = new Map<string, string>();
function testoRicerca(lezione: Lezione) {
  let testo = testiRicerca.get(lezione.id);
  if (testo === undefined) {
    testo = normalizza(
      [
        lezione.livello,
        lezione.titolo,
        lezione.descrizione,
        lezione.chiavi,
        ...(lezione.riquadri ?? []).map((r) => r.titolo),
        ...(PAROLE_RICERCA[lezione.id] ?? []),
      ]
        .filter(Boolean)
        .join(" "),
    );
    // Uno spazio prima di ogni parola (anche dopo / ( : , ...) per
    // riconoscerne l'inizio
    testo = " " + testo.replace(/[^a-z0-9'+-]+/g, " ");
    testiRicerca.set(lezione.id, testo);
  }
  return testo;
}

export default function Lezioni() {
  const risultati = useRisultati(LEZIONI.flatMap(idCollegati));
  const visti = useVisti(LEZIONI.flatMap(idCollegati));
  const theme = useTheme();
  const [query, setQuery] = useState("");
  // La linguetta scelta (un livello o "Tempi verbali"); null = tutte
  const [livello, setLivello] = useState<string | null>(null);

  const lezioniFiltrate = LEZIONI.filter(
    (lezione) => nelFiltro(lezione, livello) && corrisponde(lezione, query),
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
        <LineaTitolo colore={GIALLO} />
        <BarraRicerca
          valore={query}
          onCambia={setQuery}
          placeholder="Ricerca per parola o numero..."
          style={{ marginBottom: Spacing.four }}
        />

        <Linguette
          voci={VOCI}
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
  // Progressi: riquadri di teoria aperti + risposte giuste, sul totale
  const { fatti, daFare } = avanzamento(lezione, risultati, visti);

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
            <ThemedText style={styles.titolo}>
              <Text style={{ color: GIALLO }}>{NUMERO.get(lezione.id)}. </Text>
              {lezione.titolo}
            </ThemedText>
            {lezione.descrizione && (
              <ThemedText
                style={[styles.descrizione, { color: theme.textSecondary }]}
              >
                {lezione.descrizione}
              </ThemedText>
            )}
            {lezione.chiavi && (
              <ThemedText
                style={[styles.chiavi, { color: theme.textSecondary }]}
              >
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
