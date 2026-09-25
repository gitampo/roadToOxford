import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { constants } from "@/constants/theme";
import { PARADIGMI } from "@/data/paradigmi";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLONNE = [
  { titolo: "Italiano", flex: 2, campo: "traduzione" },
  { titolo: "Present", flex: 1.6, campo: "present" },
  { titolo: "P. Simple", flex: 1.6, campo: "past_simple" },
  { titolo: "P. Participle", flex: 1.8, campo: "past_participle" },
] as const;

export default function Paradigmi() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText type="title" style={constants.title}>
          Verbi irregolari
        </ThemedText>
        <ThemedText style={constants.subtitle}>
          Ti consiglio di leggere e ripetere ad alta voce tutti questi verbi finchè non li saprai a memoria.
        </ThemedText>
        <View style={styles.intestazione}>
          {COLONNE.map((c) => (
            <ThemedText key={c.titolo} style={[styles.testoIntestazione, { flex: c.flex }]}>
              {c.titolo}
            </ThemedText>
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.corpo}>
          {PARADIGMI.map((p) => (
            <View key={p.present} style={styles.riga}>
              {COLONNE.map((c) => (
                <ThemedText key={c.campo} style={[styles.cella, { flex: c.flex }]}>
                  {p[c.campo]}
                </ThemedText>
              ))}
            </View>
          ))}
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
  cella: {
    fontSize: 14,
    paddingRight: 6,
  },
});