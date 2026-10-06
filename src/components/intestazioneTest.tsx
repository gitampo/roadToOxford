import { useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ColoriAttivita, constants, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

const VERDE = ColoriAttivita.test;

// L'intestazione delle pagine della sezione Test (Impara dal contesto,
// Analisi della frase, Le tue statistiche, e la pagina Test stessa).
// I loro titoli sono lunghi: con il titolo grande delle altre pagine vanno a
// capo e, insieme al margine in alto, spingono l'esercizio a metà schermo.
// Qui il titolo è più piccolo e sta su una riga, e sopra c'è il nome della
// sezione (che riporta alla pagina Test): il contenuto parte subito.
export default function IntestazioneTest({
  titolo,
  conSezione = true,
}: {
  titolo: string;
  // false sulla pagina Test stessa
  conSezione?: boolean;
}) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View style={styles.intestazione}>
      {/* Senza la sezione (sulla pagina Test) resta uno spazio della stessa
          altezza: il titolo sta alla stessa altezza in tutte le pagine */}
      {!conSezione && <View style={styles.spazioSezione} />}
      {conSezione && (
        <Pressable
          onPress={() =>
            router.canGoBack() ? router.back() : router.replace("/test")
          }
          hitSlop={8}
          style={({ pressed }) => [styles.sezione, pressed && { opacity: 0.6 }]}
        >
          <SymbolView
            name={{
              ios: "chevron.left",
              android: "chevron_left",
              web: "chevron_left",
            }}
            size={14}
            tintColor={VERDE}
          />
          <ThemedText style={[styles.testoSezione, { color: VERDE }]}>
            Testa il tuo livello
          </ThemedText>
        </Pressable>
      )}
      <ThemedText
        style={[styles.titolo, { color: theme.text }]}
        numberOfLines={2}
        adjustsFontSizeToFit
      >
        {titolo}
      </ThemedText>
      <View style={[styles.linea, { backgroundColor: VERDE }]} />
    </View>
  );
}

// Il contenitore delle pagine Test: come quello delle altre pagine, ma con
// meno spazio in alto (c'è già quello della SafeAreaView)
export const contenitoreTest = [
  constants.container,
  { paddingTop: Spacing.four },
];

const styles = StyleSheet.create({
  intestazione: {
    marginBottom: Spacing.three,
  },
  sezione: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 2,
    marginBottom: Spacing.one,
  },
  // Alta quanto la riga della sezione (testo + margine sotto), misurata
  spazioSezione: {
    height: 28,
  },
  testoSezione: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  titolo: {
    fontFamily: "PlayfairDisplay_600SemiBold",
    fontSize: 34,
    lineHeight: 40,
  },
  linea: {
    width: 40,
    height: 2,
    marginTop: Spacing.two,
  },
});
