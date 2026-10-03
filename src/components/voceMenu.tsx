import { Href, Link } from "expo-router";
import { SymbolView, SymbolViewProps } from "expo-symbols";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { ThemedText } from "./themed-text";

type Props = {
  voce: string;
  href: Href;
  // Nome dell'icona per piattaforma: { ios: "...", android: "...", web: "..." }
  icona: SymbolViewProps["name"];
  // Il colore dell'attività: si usa per l'icona e, leggero, per il bordo
  colore: string;
  // Lato del quadrato
  lato?: number;
  // Dopo quanti millisecondi compare all'apertura (per farli entrare in sequenza)
  ritardo?: number;
  style?: StyleProp<ViewStyle>;
};

// Un tasto del menu della home: un quadrato con l'icona colorata al centro e il
// nome in basso.
// Compare con una dissolvenza dal basso; quando lo premi si rimpicciolisce un po'
// e torna con un piccolo rimbalzo.
// Lo stile esterno (per esempio la posizione) va sul contenitore animato: il
// Pressable ha uno stile fisso, perché sul web Link (asChild) non accetta lo
// stile come funzione o come array
export default function VoceMenu({
  voce,
  href,
  icona,
  colore,
  lato = 120,
  ritardo = 0,
  style,
}: Props) {
  const theme = useTheme();
  const scala = useSharedValue(1);
  const stileScala = useAnimatedStyle(() => ({
    transform: [{ scale: scala.value }],
  }));

  return (
    <Animated.View
      entering={FadeInDown.delay(ritardo).duration(500)}
      style={style}
    >
      <Link href={href} asChild>
        <Pressable
          style={styles.premibile}
          onPressIn={() => (scala.value = withSpring(0.9))}
          onPressOut={() => (scala.value = withSpring(1))}
        >
          <Animated.View style={[styles.tasto, stileScala]}>
            <View
              style={[
                styles.quadrato,
                {
                  width: lato,
                  height: lato,
                  backgroundColor: theme.backgroundElement,
                  borderColor: colore + "55",
                  // Un alone del colore dell'attività
                  boxShadow: `0 0 12px ${colore}40`,
                },
              ]}
            >
              <View style={styles.centro}>
                <SymbolView
                  name={icona}
                  size={Math.round(lato * 0.32)}
                  tintColor={colore}
                />
              </View>
              <ThemedText style={styles.nome}>{voce}</ThemedText>
            </View>
          </Animated.View>
        </Pressable>
      </Link>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  premibile: {
    alignItems: "center",
  },
  tasto: {
    alignItems: "center",
  },
  quadrato: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    paddingBottom: Spacing.two,
  },
  // Lo spazio sopra il nome: l'icona ci sta in mezzo
  centro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nome: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.5,
    textAlign: "center",
  },
});
