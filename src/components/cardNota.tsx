import { useTheme } from "@/hooks/use-theme";
import { StyleSheet } from "react-native";
import TestoConRimandi from "./testoConRimandi";
import { ThemedView } from "./themed-view";

type Props = {
  testo: string;
};

// Riquadro tratteggiato per regole da ricordare e avvertenze
export default function CardNota({ testo }: Props) {
  const theme = useTheme();

  return (
    <ThemedView style={[styles.card, { borderColor: theme.backgroundSelected }]}>
      <TestoConRimandi
        testo={testo}
        style={[styles.testo, { color: theme.textSecondary }]}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  testo: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 21,
  },
});
