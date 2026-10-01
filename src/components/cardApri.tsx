import { useRisultati } from "@/hooks/use-risultati";
import { useTheme } from "@/hooks/use-theme";
import { Link } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet } from "react-native";
import { BarraRisultato } from "./risultato";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

const GIALLO = "#ffe100";

type Props = {
  id: string;
  titolo: string;
  descrizione?: string;
};

// Card che apre un'altra lezione, per esempio l'analisi di un testo
export default function CardApri({ id, titolo, descrizione }: Props) {
  const theme = useTheme();
  // Il risultato degli esercizi del testo, se sono stati fatti
  const risultato = useRisultati([id])[id];

  return (
    // push: apre una nuova schermata sopra il modulo, così "Fine" riporta indietro
    <Link push href={{ pathname: "/lezione/[id]", params: { id } }} asChild>
      <Pressable
        style={({ pressed }) => [
          styles.card,
          { backgroundColor: theme.backgroundElement },
          pressed && { opacity: 0.7 },
        ]}
      >
        <ThemedView type="backgroundElement" style={styles.testi}>
          <ThemedText style={styles.titolo}>{titolo}</ThemedText>
          {descrizione && (
            <ThemedText style={[styles.descrizione, { color: theme.textSecondary }]}>
              {descrizione}
            </ThemedText>
          )}
          {risultato && risultato.risposte > 0 && (
            <ThemedView type="backgroundElement" style={styles.risultato}>
              <BarraRisultato risultato={risultato} compatta />
            </ThemedView>
          )}
        </ThemedView>
        <SymbolView
          name={{
            ios: "chevron.right",
            android: "chevron_right",
            web: "chevron_right",
          }}
          size={16}
          tintColor={GIALLO}
        />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: GIALLO,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  testi: {
    flex: 1,
  },
  risultato: {
    marginTop: 8,
  },
  titolo: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 18,
    lineHeight: 24,
  },
  descrizione: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
  },
});
