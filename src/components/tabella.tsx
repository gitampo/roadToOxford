import { useTheme } from "@/hooks/use-theme";
import { StyleSheet } from "react-native";
import TestoConRimandi from "./testoConRimandi";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

const GIALLO = "#ffe100";

type Props = {
  righe: [string, string][];
};

// Tabella a due colonne: a sinistra in giallo, a destra in grigio
export default function Tabella({ righe }: Props) {
  const theme = useTheme();

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      {righe.map(([sinistra, destra], i) => (
        <ThemedView key={i} type="backgroundElement" style={styles.riga}>
          <ThemedText style={styles.sinistra}>{sinistra}</ThemedText>
          <TestoConRimandi
            testo={destra}
            style={[styles.destra, { color: theme.textSecondary }]}
          />
        </ThemedView>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
  },
  riga: {
    flexDirection: "row",
    gap: 16,
  },
  sinistra: {
    flex: 1,
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    color: GIALLO,
  },
  destra: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
  },
});
