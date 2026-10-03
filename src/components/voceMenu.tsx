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
  // Le misure del riquadro: se è molto più largo che alto (per esempio l'ultimo
  // della griglia, quando le voci sono dispari) l'icona va a sinistra del nome
  larghezza?: number;
  altezza?: number;
  // Dopo quanti millisecondi compare all'apertura (per farli entrare in sequenza)
  ritardo?: number;
  style?: StyleProp<ViewStyle>;
};

// Un tasto del menu della home: un riquadro con l'icona colorata al centro e il
// nome in basso (o, se il riquadro è lungo e basso, icona e nome affiancati).
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
  larghezza = 120,
  altezza = 120,
  ritardo = 0,
  style,
}: Props) {
  const theme = useTheme();
  const orizzontale = larghezza >= altezza * 1.6;
  // L'icona segue il lato corto, così non schiaccia il nome
  const latoIcona = Math.round(
    Math.min(altezza * (orizzontale ? 0.4 : 0.32), larghezza * 0.32),
  );
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
                orizzontale && styles.riquadroLungo,
                {
                  width: larghezza,
                  height: altezza,
                  backgroundColor: theme.backgroundElement,
                  borderColor: colore + "55",
                  // Un alone del colore dell'attività
                  boxShadow: `0 0 12px ${colore}40`,
                },
              ]}
            >
              <View style={!orizzontale && styles.centro}>
                <SymbolView name={icona} size={latoIcona} tintColor={colore} />
              </View>
              <ThemedText
                numberOfLines={2}
                adjustsFontSizeToFit
                minimumFontScale={0.8}
                style={[styles.nome, orizzontale && styles.nomeAffiancato]}
              >
                {voce}
              </ThemedText>
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
    paddingHorizontal: Spacing.one,
  },
  // Icona e nome sulla stessa riga, al centro
  riquadroLungo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: Spacing.three,
    paddingBottom: 0,
    paddingHorizontal: Spacing.three,
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
  nomeAffiancato: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: "left",
    flexShrink: 1,
  },
});
