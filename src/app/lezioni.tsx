/**
 * Schermata: elenco delle lezioni.
 * Raggiungibile da /lezioni. Mostra un riquadro per ogni lezione;
 * toccandone uno si apre la lezione corrispondente.
 */

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { styles } from "@/constants/theme";
import { LEZIONI } from "@/data/lezioni";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Lezioni() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Lezioni
        </ThemedText>
        {LEZIONI.map((lezione) => (
          <Link
            style={styles.subtitle}
            key={lezione.id}
            href={{ pathname: "/lezione/[id]", params: { id: lezione.id } }}
          >
            <ThemedText>
              {lezione.livello} - {lezione.titolo}
            </ThemedText>
          </Link>
        ))}
      </ThemedView>
    </SafeAreaView>
  );
}
