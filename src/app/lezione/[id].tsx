import { QuoteCard } from "@/components/quote-card";
import { Sezione } from "@/components/sezione";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { styles } from "@/constants/theme";
import { LEZIONI } from "@/data/lezioni";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dettagli() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lezione = LEZIONI.find((l) => l.id === id);
  const indice = LEZIONI.findIndex((l) => l.id === id);

  if (!lezione) {
    return <ThemedText>Lezione non trovata</ThemedText>;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.title}>
            Lezione {indice + 1}
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            {lezione.livello} - {lezione.titolo}
          </ThemedText>
          <QuoteCard citazione={lezione.citazione} />
          <Sezione titolo="Teoria">
            <ThemedText>{lezione.testo}</ThemedText>
          </Sezione>
          <Sezione titolo="Quiz">
            <ThemedText>{lezione.testo}</ThemedText>
          </Sezione>
          <Sezione titolo="Scrivi un testo e l'IA te lo correggerà!">
            <ThemedText>{lezione.testo}</ThemedText>
          </Sezione>
        </ThemedView>
      </SafeAreaView>
    </ScrollView>
  );
}
