/**
 * Schermata: testa il tuo livello.
 * Raggiungibile da /test. Raccoglie gli strumenti per mettersi alla prova;
 * ognuno è un bottone che apre la sua pagina: impara dal contesto, l'analisi
 * della frase e le statistiche.
 */

import { Href, Link } from "expo-router";
import { SymbolView, SymbolViewProps } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import LineaTitolo from "@/components/lineaTitolo";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, constants, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

const VERDE = ColoriAttivita.test;

export default function Test() {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText type="title" style={constants.title}>
          Testa il tuo livello
        </ThemedText>
        <LineaTitolo colore={VERDE} />
        <ThemedText style={[styles.intro, { color: theme.textSecondary }]}>
          Sostieni conversazioni in base al tuo livello, analizza frasi,
          monitora i tuoi miglioramenti.
        </ThemedText>

        <View style={styles.bottoni}>
          <Bottone
            href="/contesto"
            titolo="Impara dal contesto"
            sottotitolo="Una situazione, la tua frase in inglese: correzione e suggerimenti"
            icona={{
              ios: "text.bubble.fill",
              android: "chat",
              web: "chat",
            }}
          />
          <Bottone
            href="/analisi"
            titolo="Analisi della frase"
            sottotitolo="Grammaticale, logica e semantica: la fa l'app o la fai tu"
            icona={{
              ios: "text.magnifyingglass",
              android: "manage_search",
              web: "manage_search",
            }}
          />
          <Bottone
            href="/miglioramenti"
            titolo="Le tue statistiche"
            sottotitolo="Precisione, livelli e costanza"
            icona={{
              ios: "chart.xyaxis.line",
              android: "show_chart",
              web: "show_chart",
            }}
          />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

// Un bottone a tutta larghezza nello stile dei tasti della home: sfondo
// grigio, bordo e alone del colore dell'attività, l'icona a sinistra e il
// testo allineato a sinistra (titolo verde e, sotto, cosa contiene) e la
// freccia a destra.
// Premendolo si rimpicciolisce un po' e torna con un piccolo rimbalzo.
// Il Pressable ha uno stile fisso: sul web Link (asChild) non accetta lo
// stile come funzione o come array (vedi VoceMenu)
function Bottone({
  href,
  titolo,
  sottotitolo,
  icona,
}: {
  href: Href;
  titolo: string;
  sottotitolo: string;
  icona: SymbolViewProps["name"];
}) {
  const theme = useTheme();
  const scala = useSharedValue(1);
  const stileScala = useAnimatedStyle(() => ({
    transform: [{ scale: scala.get() }],
  }));

  return (
    <Link href={href} asChild>
      <Pressable
        onPressIn={() => scala.set(withSpring(0.96))}
        onPressOut={() => scala.set(withSpring(1))}
      >
        <Animated.View
          style={[
            styles.bottone,
            stileScala,
            {
              backgroundColor: theme.backgroundElement,
              borderColor: VERDE + "55",
              boxShadow: `0 0 12px ${VERDE}40`,
            },
          ]}
        >
          <SymbolView name={icona} size={28} tintColor={VERDE} />
          <View style={styles.testi}>
            <ThemedText style={[styles.titolo, { color: VERDE }]}>
              {titolo}
            </ThemedText>
            <ThemedText
              style={[styles.sottotitolo, { color: theme.textSecondary }]}
            >
              {sottotitolo}
            </ThemedText>
          </View>
          {/* La freccia: il bottone apre un'altra pagina */}
          <SymbolView
            name={{
              ios: "chevron.right",
              android: "chevron_right",
              web: "chevron_right",
            }}
            size={18}
            tintColor={VERDE}
          />
        </Animated.View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  intro: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: Spacing.four,
  },
  bottoni: {
    gap: Spacing.three,
  },
  bottone: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.three,
  },
  // Il testo occupa lo spazio a destra dell'icona, allineato a sinistra
  testi: {
    flex: 1,
    alignItems: "flex-start",
  },
  titolo: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.5,
    textAlign: "left",
  },
  sottotitolo: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "left",
  },
});
