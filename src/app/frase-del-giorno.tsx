/**
 * Schermata: la frase del giorno.
 * Raggiungibile da /frase-del-giorno, toccando il globo nella home.
 * Mostra la citazione di una lezione (diversa ogni giorno) e la lezione
 * in cui si impara quello che serve per capirla.
 */

import LineaTitolo from "@/components/lineaTitolo";
import { QuoteCard } from "@/components/quote-card";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, constants, Spacing } from "@/constants/theme";
import { lezioneDelGiorno } from "@/data/frase-del-giorno";
import { useTheme } from "@/hooks/use-theme";
import { Link } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Il giallo delle lezioni, per il rimando alla lezione
const GIALLO = "#ffe100";
// L'azzurro del globo, da cui si arriva qui
const AZZURRO = ColoriAttivita.globo;

export default function FraseDelGiorno() {
  const theme = useTheme();
  const lezione = lezioneDelGiorno();
  const oggi = new Date().toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText style={[styles.etichetta, { color: theme.textSecondary }]}>
          {oggi}
        </ThemedText>
        <ThemedText type="title" style={constants.title}>
          Frase del giorno
        </ThemedText>
        <LineaTitolo colore={AZZURRO} />

        <QuoteCard citazione={lezione.citazione} colore={AZZURRO} />

        {/* La lezione dove si impara quello che serve per capire la frase */}
        <ThemedView
          style={[styles.lezione, { backgroundColor: theme.backgroundElement }]}
        >
          <ThemedText
            style={[styles.etichetta, { color: theme.textSecondary }]}
          >
            La capisci con la lezione
          </ThemedText>
          <ThemedText style={styles.titoloLezione}>
            {lezione.livello} · {lezione.titolo}
          </ThemedText>
          {lezione.descrizione && (
            <ThemedText
              style={[styles.descrizione, { color: theme.textSecondary }]}
            >
              {lezione.descrizione}
            </ThemedText>
          )}
          <ThemedView style={styles.linea} />
          <Link
            href={{ pathname: "/lezione/[id]", params: { id: lezione.id } }}
            asChild
          >
            <Pressable style={styles.pulsante}>
              <Text style={styles.testoPulsante}>Apri la lezione</Text>
              <SymbolView
                name={{
                  ios: "arrow.right",
                  android: "arrow_forward",
                  web: "arrow_forward",
                }}
                size={16}
                tintColor="#000000"
              />
            </Pressable>
          </Link>
        </ThemedView>

        <ThemedText style={[styles.nota, { color: theme.textSecondary }]}>
          Domani trovi una frase nuova.
        </ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  etichetta: {
    fontSize: 11,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: Spacing.one,
  },
  lezione: {
    borderRadius: 12,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  titoloLezione: {
    fontFamily: "Inter_600SemiBold",
    color: GIALLO,
  },
  descrizione: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 19,
  },
  // Come la linetta gialla sotto i titoli delle lezioni
  linea: {
    width: 40,
    height: 2,
    backgroundColor: GIALLO,
    marginTop: Spacing.two,
    marginBottom: Spacing.three,
  },
  // Stile scritto come oggetto e non come funzione: sul web Link (asChild)
  // non accetta lo stile del Pressable come funzione o array
  pulsante: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: Spacing.two,
    backgroundColor: GIALLO,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  testoPulsante: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    color: "#000000",
  },
  nota: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    textAlign: "center",
    marginTop: Spacing.four,
  },
});
