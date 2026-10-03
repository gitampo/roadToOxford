/**
 * La riga scorrevole della home, come le scritte luminose sui treni:
 * "Next stop: Lezione 1: Pronomi Personali" in giallo, poi in bianco lo scopo
 * dell'app. Mostra la prossima lezione da fare e, toccandola, la apre.
 */

import { Lezione } from "@/types/lezione";
import { Spacing } from "@/constants/theme";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const GIALLO = "#ffe100";
// Velocità di scorrimento, in punti al secondo
const VELOCITA = 40;
// Lo spazio tra una frase e la successiva
const SPAZIO = 48;
const SOTTOTITOLO =
  "Impara l'inglese da zero fino a sostenere una vera conversazione in Inghilterra.";

type Props = {
  // undefined = corso finito
  lezione: Lezione | undefined;
};

export function Tabellone({ lezione }: Props) {
  const scritta = lezione
    ? `Next stop: Lezione ${lezione.id}: ${lezione.titolo}`
    : "Next stop: Oxford. Hai completato il corso!";

  // La larghezza di un giro (le due frasi), misurata: serve per farla ripartire senza scatti
  const [larghezza, setLarghezza] = useState(0);
  const x = useSharedValue(0);

  useEffect(() => {
    if (larghezza === 0) return;
    // Due copie del giro una dopo l'altra: quando la prima è uscita tutta,
    // la seconda è esattamente dove era partita la prima, e si ricomincia
    const giro = larghezza;
    x.value = 0;
    x.value = withRepeat(
      withTiming(-giro, { duration: (giro / VELOCITA) * 1000, easing: Easing.linear }),
      -1,
      false,
    );
    return () => cancelAnimation(x);
  }, [larghezza, x]);

  const stile = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }],
  }));

  return (
    <Link
      href={
        lezione
          ? { pathname: "/lezione/[id]", params: { id: lezione.id } }
          : "/lezioni"
      }
      asChild
    >
      {/* Stile fisso: sul web Link (asChild) non accetta funzioni o array */}
      <Pressable style={styles.striscia}>
        <Animated.View style={[styles.scorrimento, stile]}>
          <View
            style={styles.giro}
            onLayout={(e) => setLarghezza(e.nativeEvent.layout.width)}
          >
            <Giro scritta={scritta} />
          </View>
          <View style={styles.giro}>
            <Giro scritta={scritta} />
          </View>
        </Animated.View>
      </Pressable>
    </Link>
  );
}

// Un giro della riga: la prossima fermata in giallo e il sottotitolo in bianco,
// ognuno seguito dal suo spazio
function Giro({ scritta }: { scritta: string }) {
  return (
    <>
      <Text style={styles.scritta}>{scritta}</Text>
      <View style={{ width: SPAZIO }} />
      <Text style={[styles.scritta, styles.bianco]}>{SOTTOTITOLO}</Text>
      <View style={{ width: SPAZIO }} />
    </>
  );
}

const styles = StyleSheet.create({
  striscia: {
    height: 36,
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#0d0d0f",
    borderColor: "#26272b",
    borderWidth: 1,
    borderRadius: 8,
  },
  // Più largo della striscia: la scritta non va mai a capo
  scorrimento: {
    position: "absolute",
    left: Spacing.three,
    flexDirection: "row",
    alignItems: "center",
  },
  giro: {
    flexDirection: "row",
    alignItems: "center",
  },
  scritta: {
    flexShrink: 0,
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    letterSpacing: 1,
    color: GIALLO,
  },
  bianco: {
    fontFamily: "Inter_400Regular",
    color: "#ffffff",
  },
});
