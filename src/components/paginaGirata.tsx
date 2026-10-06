import { ReactNode, useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Una scheda con due facciate (per esempio il contesto e la soluzione, o la
// frase da analizzare e la sua analisi) che resta sempre allo stesso posto.
// Il cambio è una dissolvenza incrociata con un leggero scorrimento, come
// voltare pagina: la facciata vecchia esce verso sinistra
// mentre la nuova entra da destra. Intanto l'altezza della scheda passa con
// continuità da quella di una facciata a quella dell'altra, così quello che
// sta sotto scivola invece di saltare. Le due facciate sono sempre montate
// (una sopra l'altra) e misurate; tutto il movimento dipende da un solo
// valore, avanzamento (0 = fronte, 1 = retro), animato sul thread
// dell'interfaccia. Con "riduci movimento" il cambio è immediato
export default function PaginaGirata({
  retro,
  fronte,
  retroContenuto,
}: {
  retro: boolean;
  fronte: ReactNode;
  retroContenuto: ReactNode;
}) {
  const ridotto = useReducedMotion();
  const avanzamento = useSharedValue(retro ? 1 : 0);
  const altezzaFronte = useSharedValue(0);
  const altezzaRetro = useSharedValue(0);

  useEffect(() => {
    avanzamento.set(
      withTiming(retro ? 1 : 0, {
        duration: ridotto ? 0 : 480,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }),
    );
  }, [retro, ridotto, avanzamento]);

  const stileScheda = useAnimatedStyle(() => {
    const f = altezzaFronte.get();
    const r = altezzaRetro.get();
    // Finché le facciate non sono misurate, l'altezza è quella del fronte
    if (!f) return {};
    return { height: f + ((r || f) - f) * avanzamento.get() };
  });
  const stileFronte = useAnimatedStyle(() => {
    const t = avanzamento.get();
    return {
      opacity: interpolate(t, [0, 0.55], [1, 0], Extrapolation.CLAMP),
      transform: [{ translateX: -28 * t }, { scale: 1 - 0.03 * t }],
    };
  });
  const stileRetro = useAnimatedStyle(() => {
    const t = avanzamento.get();
    return {
      opacity: interpolate(t, [0.45, 1], [0, 1], Extrapolation.CLAMP),
      transform: [{ translateX: 28 * (1 - t) }, { scale: 0.97 + 0.03 * t }],
    };
  });

  return (
    <Animated.View style={[styles.scheda, stileScheda]}>
      <Animated.View
        style={[styles.facciata, stileFronte]}
        pointerEvents={retro ? "none" : "auto"}
        aria-hidden={retro}
        onLayout={(e) => altezzaFronte.set(e.nativeEvent.layout.height)}
      >
        {fronte}
      </Animated.View>
      <Animated.View
        style={[styles.facciata, stileRetro]}
        pointerEvents={retro ? "auto" : "none"}
        aria-hidden={!retro}
        onLayout={(e) => altezzaRetro.set(e.nativeEvent.layout.height)}
      >
        {retroContenuto}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  // Le due facciate stanno una sopra l'altra dentro la scheda
  scheda: {
    overflow: "hidden",
  },
  facciata: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});
