import { useTheme } from "@/hooks/use-theme";
import { Esempio } from "@/types/lezione";
import { StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

const GIALLO = "#ffe100";
const ROSSO = "#ff6b6b";

type Props = {
  esempi: Esempio[];
};

export default function CardEsempi({ esempi }: Props) {
  const theme = useTheme();

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      {esempi.map((esempio, i) => (
        <ThemedView key={i} type="backgroundElement">
          <ThemedText
            style={[
              styles.inglese,
              esempio.sbagliato && styles.ingleseSbagliato,
            ]}
          >
            {esempio.en}
          </ThemedText>
          {esempio.sbagliato ? (
            <ThemedText style={[styles.italiano, { color: ROSSO }]}>
              ✗ sbagliato
            </ThemedText>
          ) : (
            esempio.it && (
              <ThemedText
                style={[styles.italiano, { color: theme.textSecondary }]}
              >
                {esempio.it}
              </ThemedText>
            )
          )}
        </ThemedView>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderLeftWidth: 3,
    borderLeftColor: GIALLO,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 12,
  },
  inglese: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    lineHeight: 22,
  },
  ingleseSbagliato: {
    color: ROSSO,
    textDecorationLine: "line-through",
  },
  italiano: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
  },
});
