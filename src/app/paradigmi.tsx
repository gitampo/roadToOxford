import BarraRicerca from "@/components/barraRicerca";
import LineaTitolo from "@/components/lineaTitolo";
import TestoEvidenziato, { contiene } from "@/components/testoEvidenziato";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, constants, Spacing } from "@/constants/theme";
import { PARADIGMI } from "@/data/paradigmi";
import { Paradigma } from "@/types/paradigma";
import { useTheme } from "@/hooks/use-theme";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const AZZURRO = ColoriAttivita.paradigmi;

const COLONNE = [
  { titolo: "Italiano", flex: 2, campo: "traduzione" },
  { titolo: "Present", flex: 1.6, campo: "present" },
  { titolo: "Past simple", flex: 1.6, campo: "past_simple" },
  { titolo: "Past participle", flex: 1.8, campo: "past_participle" },
] as const;

export default function Paradigmi() {
  const theme = useTheme();
  const [query, setQuery] = useState("");
  const [schermoIntero, setSchermoIntero] = useState(false);
  // Solo i verbi con la parola cercata in una delle colonne
  const verbi = PARADIGMI.filter((p) =>
    COLONNE.some((c) => contiene(p[c.campo], query)),
  );
  const conteggio = `${verbi.length} ${verbi.length === 1 ? "verbo" : "verbi"}`;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText type="title" style={constants.title}>
          Paradigmi dei verbi irregolari
        </ThemedText>
        <LineaTitolo colore={AZZURRO} />
        <ThemedText style={constants.subtitle}>
          Ti consiglio di leggere e ripetere ad alta voce tutti questi verbi
          finché non li saprai a memoria.
        </ThemedText>
        <BarraRicerca
          valore={query}
          onCambia={setQuery}
          placeholder="Cerca tra i verbi..."
        />

        {/* Come l'intestazione della lista in Appunti: titolo e quanti sono */}
        <View style={styles.titoloLista}>
          <ThemedText style={styles.titoloListaTesto}>Elenco verbi</ThemedText>
          <ThemedText
            style={[styles.conteggio, { color: theme.textSecondary }]}
          >
            {conteggio}
          </ThemedText>
          <Pulsante icona="espandi" onPress={() => setSchermoIntero(true)} />
        </View>

        <Tabella verbi={verbi} query={query} />
      </ThemedView>

      {/* La tabella a schermo intero: solo ricerca e verbi, senza titolo e
          sottotitolo, così si vedono molte più righe insieme */}
      <Modal
        visible={schermoIntero}
        animationType="fade"
        onRequestClose={() => setSchermoIntero(false)}
      >
        {/* Il Modal è una finestra a parte: serve un suo provider perché
            SafeAreaView conosca i margini dello schermo */}
        <SafeAreaProvider>
          <SafeAreaView
            style={[
              styles.schermoIntero,
              { backgroundColor: theme.background },
            ]}
          >
            <View style={styles.titoloLista}>
              <ThemedText style={styles.titoloListaTesto}>Paradigmi</ThemedText>
              <ThemedText
                style={[styles.conteggio, { color: theme.textSecondary }]}
              >
                {conteggio}
              </ThemedText>
              <Pulsante
                icona="riduci"
                onPress={() => setSchermoIntero(false)}
              />
            </View>
            <BarraRicerca
              valore={query}
              onCambia={setQuery}
              placeholder="Cerca tra i verbi..."
              style={{ marginBottom: Spacing.three }}
            />
            <Tabella verbi={verbi} query={query} />
          </SafeAreaView>
        </SafeAreaProvider>
      </Modal>
    </SafeAreaView>
  );
}

// Le etichette delle colonne e le righe dei verbi. La usano sia la pagina sia
// la vista a schermo intero
function Tabella({ verbi, query }: { verbi: Paradigma[]; query: string }) {
  const theme = useTheme();
  return (
    <>
      {/* Le etichette delle colonne, come quelle delle categorie nelle
          card del Vocabolario. Restano ferme mentre la tabella scorre */}
      <View style={styles.intestazione}>
        {COLONNE.map((c) => (
          <ThemedText
            key={c.titolo}
            style={[styles.etichetta, { flex: c.flex }]}
          >
            {c.titolo}
          </ThemedText>
        ))}
      </View>

      <ScrollView
        contentContainerStyle={styles.corpo}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        {verbi.map((p, i) => (
          <View
            key={p.present}
            style={[
              styles.riga,
              // Una riga sì e una no su sfondo appena più chiaro, così
              // l'occhio non salta di riga leggendo da sinistra a destra
              i % 2 === 1 && { backgroundColor: theme.backgroundElement },
            ]}
          >
            {COLONNE.map((c) => (
              <TestoEvidenziato
                key={c.campo}
                testo={p[c.campo]}
                cerca={query}
                colore={AZZURRO}
                style={[
                  styles.cella,
                  STILI_COLONNA[c.campo],
                  c.campo === "traduzione" && { color: theme.textSecondary },
                  { flex: c.flex },
                ]}
              />
            ))}
          </View>
        ))}
        {verbi.length === 0 && (
          <ThemedText style={[styles.vuoto, { color: theme.textSecondary }]}>
            Nessun verbo trovato
          </ThemedText>
        )}
      </ScrollView>
    </>
  );
}

// Il tasto in fondo all'intestazione: apre o chiude lo schermo intero
function Pulsante({
  icona,
  onPress,
}: {
  icona: "espandi" | "riduci";
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={({ pressed }) => [styles.pulsante, pressed && { opacity: 0.6 }]}
    >
      <SymbolView
        name={
          icona === "espandi"
            ? {
                ios: "arrow.up.left.and.arrow.down.right",
                android: "fullscreen",
                web: "fullscreen",
              }
            : {
                ios: "arrow.down.right.and.arrow.up.left",
                android: "fullscreen_exit",
                web: "fullscreen_exit",
              }
        }
        size={22}
        tintColor={AZZURRO}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  schermoIntero: {
    flex: 1,
    paddingTop: Spacing.three,
    paddingHorizontal: Spacing.three,
  },
  titoloLista: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: Spacing.two,
    marginBottom: Spacing.three,
  },
  titoloListaTesto: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 22,
    lineHeight: 28,
  },
  conteggio: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  // Spinto tutto a destra, come la matita in Appunti
  pulsante: {
    marginLeft: "auto",
    alignSelf: "center",
  },
  intestazione: {
    flexDirection: "row",
    paddingHorizontal: Spacing.two,
    paddingBottom: Spacing.two,
    borderBottomWidth: 2,
    borderBottomColor: AZZURRO,
  },
  etichetta: {
    color: AZZURRO,
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    paddingRight: Spacing.one,
  },
  corpo: {
    paddingTop: Spacing.one,
    paddingBottom: Spacing.five,
  },
  riga: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.two,
    paddingVertical: 10,
    borderRadius: 8,
  },
  cella: {
    fontSize: 15,
    lineHeight: 20,
    paddingRight: Spacing.one,
  },
  vuoto: {
    paddingVertical: Spacing.three,
    textAlign: "center",
  },
});

// Il presente è la forma da cui si parte: in grassetto. Le altre due in
// normale, l'italiano più piccolo e in grigio (è solo il promemoria)
const STILI_COLONNA = StyleSheet.create({
  traduzione: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  present: {
    fontFamily: "Inter_600SemiBold",
  },
  past_simple: {
    fontFamily: "Inter_400Regular",
  },
  past_participle: {
    fontFamily: "Inter_400Regular",
  },
});
