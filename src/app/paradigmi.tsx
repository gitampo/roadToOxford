import BarraRicerca from "@/components/barraRicerca";
import LineaTitolo from "@/components/lineaTitolo";
import TestoEvidenziato, { contiene } from "@/components/testoEvidenziato";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, constants } from "@/constants/theme";
import { PARADIGMI } from "@/data/paradigmi";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLONNE = [
  { titolo: "Italiano", flex: 2, campo: "traduzione" },
  { titolo: "Present", flex: 1.6, campo: "present" },
  { titolo: "P. Simple", flex: 1.6, campo: "past_simple" },
  { titolo: "P. Participle", flex: 1.8, campo: "past_participle" },
] as const;

export default function Paradigmi() {
  const [query, setQuery] = useState("");
  // Solo i verbi con la parola cercata in una delle colonne
  const verbi = PARADIGMI.filter((p) =>
    COLONNE.some((c) => contiene(p[c.campo], query)),
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText type="title" style={constants.title}>
          Paradigmi dei verbi irregolari
        </ThemedText>
        <LineaTitolo colore={ColoriAttivita.paradigmi} />
        <ThemedText style={constants.subtitle}>
          Ti consiglio di leggere e ripetere ad alta voce tutti questi verbi
          finchè non li saprai a memoria.
        </ThemedText>
        <BarraRicerca
          valore={query}
          onCambia={setQuery}
          placeholder="Cerca tra i verbi..."
        ></BarraRicerca>

        <View style={styles.intestazione}>
          {COLONNE.map((c) => (
            <ThemedText
              key={c.titolo}
              style={[styles.testoIntestazione, { flex: c.flex }]}
            >
              {c.titolo}
            </ThemedText>
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.corpo}>
          {verbi.map((p) => (
            <View key={p.present} style={styles.riga}>
              {COLONNE.map((c) => (
                <TestoEvidenziato
                  key={c.campo}
                  testo={p[c.campo]}
                  cerca={query}
                  colore={ColoriAttivita.paradigmi}
                  style={[styles.cella, { flex: c.flex }]}
                />
              ))}
            </View>
          ))}
          {verbi.length === 0 && (
            <ThemedText style={styles.vuoto}>Nessun verbo trovato</ThemedText>
          )}
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  intestazione: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#4da3ff",
    paddingBottom: 6,
    marginBottom: 4,
  },
  testoIntestazione: {
    fontSize: 12,
    fontWeight: "700",
    color: "#4da3ff",
    textTransform: "uppercase",
  },
  corpo: {
    paddingBottom: 40,
  },
  riga: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#22303d",
    paddingVertical: 8,
  },
  vuoto: {
    paddingVertical: 12,
    opacity: 0.6,
  },
  cella: {
    fontSize: 14,
    paddingRight: 6,
  },
});
