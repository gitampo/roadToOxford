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

// Il giallo ambra dei LED dei treni
const GIALLO = "#ffb800";
// Velocità di scorrimento, in punti al secondo
const VELOCITA = 40;
// Lo spazio tra una frase e la successiva
const SPAZIO = 48;
const SOTTOTITOLO =
  "Impara l'inglese da zero fino a sostenere una vera conversazione a Oxford.";

type Props = {
  // undefined = corso finito
  lezione: Lezione | undefined;
};

export function Tabellone({ lezione }: Props) {
  const scritta = lezione
    ? `NEXT STOP: Lezione ${lezione.id}: ${lezione.titolo}`
    : "NEXT STOP: Oxford. Hai completato il corso!";

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
  // Il pannello: nero, con la cornice scura come i display dei treni
  striscia: {
    height: 40,
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#050505",
    borderColor: "#1f1f22",
    borderWidth: 2,
    borderRadius: 6,
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
  // Doto è fatto di puntini tondi, come le matrici di LED. Il peso Black ha
  // i puntini più grossi: si legge bene anche piccolo. L'alone dello stesso
  // colore fa sembrare i LED accesi
  scritta: {
    flexShrink: 0,
    fontFamily: "Doto_900Black",
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: GIALLO,
    textShadowColor: GIALLO + "99",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  bianco: {
    color: "#ffffff",
    textShadowColor: "#ffffff80",
  },
});
