import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { styles } from "@/constants/theme";
import { LEZIONI } from "@/data/lezioni";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dettagli() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lezione = LEZIONI.find((l) => l.id == id);

  if (!lezione) {
    return <ThemedText>Lezione non trovata</ThemedText>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Lezione {lezione.id} - {lezione.titolo} - {lezione.livello}
        </ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}
