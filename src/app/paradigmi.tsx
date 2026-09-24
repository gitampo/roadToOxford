import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { constants } from "@/constants/theme";
import { PARADIGMI } from "@/data/paradigmi";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Paradigmi() {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedView style={constants.container}>
          <ThemedText type="title" style={constants.title}>
            Paradigmi
          </ThemedText>
          <ThemedText type="subtitle" style={constants.subtitle}>
            Lista verbi irregolari
          </ThemedText>
          <ThemedView style={styles.riga}>
            <ThemedText style={styles.intestazione}>Italiano</ThemedText>
            <ThemedText style={styles.intestazione}>Present</ThemedText>
            <ThemedText style={styles.intestazione}>Past simple</ThemedText>
            <ThemedText style={styles.intestazione}>Past Participle</ThemedText>
          </ThemedView>
          {PARADIGMI.map((p) => (
            <ThemedView key={p.present} style={styles.riga}>
              <ThemedText style={styles.cella}>{p.traduzione}</ThemedText>
              <ThemedText style={styles.cella}>{p.present}</ThemedText>
              <ThemedText style={styles.cella}>{p.past_simple}</ThemedText>
              <ThemedText style={styles.cella}>{p.past_participle}</ThemedText>
            </ThemedView>
          ))}
        </ThemedView>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  riga: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  cella: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#333",
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  intestazione: {
    flex: 1,
    fontWeight: "bold",
    borderRightWidth: 1,
    borderRightColor: "#333",
    paddingVertical: 6,
    paddingHorizontal: 5,
  },
});
