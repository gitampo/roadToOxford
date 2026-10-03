import * as Device from "expo-device";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { Globo, OXFORD } from "@/components/globo";
import Notes from "@/components/notes";
import { Tabellone } from "@/components/tabellone";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import VoceMenu from "@/components/voceMenu";
import {
  ColoriAttivita,
  MaxContentWidth,
  Spacing,
} from "@/constants/theme";
import { lezioneDelGiorno } from "@/data/frase-del-giorno";
import { LEZIONI } from "@/data/lezioni";
import { prossimaLezione } from "@/data/prossima-lezione";
import { useRisultati } from "@/hooks/use-risultati";
import { useTheme } from "@/hooks/use-theme";
import { useVisti } from "@/hooks/use-visti";

function getDevMenuHint() {
  if (Platform.OS === "web") {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d";
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

// L'azzurro del globo, usato anche per l'alone e la scritta
const AZZURRO = "#4da3ff";

// Le attività della home, nella griglia sotto il globo.
// Il colore viene da ColoriAttivita (constants/theme.ts): è lo stesso dell'icona
// e del trattino sotto il titolo.
// Icone: nomi SF Symbols per iOS, Material Symbols per Android e web
const VOCI = [
  {
    voce: "Lezioni",
    href: "/lezioni",
    colore: ColoriAttivita.lezioni,
    icona: { ios: "book.fill", android: "menu_book", web: "menu_book" },
  },
  {
    voce: "Vocabolario",
    href: "/vocabolario",
    colore: ColoriAttivita.vocabolario,
    icona: {
      ios: "character.book.closed.fill",
      android: "dictionary",
      web: "dictionary",
    },
  },
  {
    voce: "Paradigmi",
    href: "/paradigmi",
    colore: ColoriAttivita.paradigmi,
    icona: { ios: "list.bullet", android: "table_chart", web: "table_chart" },
  },
  {
    voce: "Testa il tuo livello",
    href: "/lezioni",
    colore: ColoriAttivita.test,
    icona: { ios: "checkmark.seal.fill", android: "verified", web: "verified" },
  },
] as const;

// Lo spazio tra i quadrati della griglia
const SPAZIO_GRIGLIA = Spacing.three;
// La distanza tra le due colonne
const SPAZIO_COLONNE = Spacing.five;
// L'altezza minima dei riquadri, quando le righe sono tante
const ALTEZZA_MIN_TASTO = 84;
// L'altezza della scritta sotto il globo
const ALTEZZA_SCRITTE = 24;
// Quante parole della frase si vedono nella vignetta
const PAROLE_VIGNETTA = 4;
// L'altezza dello spazio della vignetta, sopra il pin
const ALTEZZA_VIGNETTA = 40;

// La home è a tema stazione: in alto il titolo e la riga che scorre con la
// prossima lezione da fare ("Next stop"); sotto, il globo (apre la frase del
// giorno) e la griglia delle attività, due per riga.
// Le misure si calcolano sullo spazio libero, così si vede sempre tutto senza scorrere
const ID_LEZIONI = LEZIONI.map((l) => l.id);

export default function HomeScreen() {
  const theme = useTheme();
  const { height } = useWindowDimensions();
  // Sugli schermi bassi il titolo si rimpicciolisce
  const schermoBasso = height < 760;
  // Lo spazio libero sotto la riga che scorre
  const [zona, setZona] = useState({ larghezza: 0, altezza: 0 });
  const righe = Math.ceil(VOCI.length / 2);
  // Due colonne: la larghezza dei riquadri non dipende da quante righe ci sono
  const larghezzaTasto = Math.floor(
    Math.min((zona.larghezza - SPAZIO_COLONNE) / 2, 150),
  );
  // L'altezza sì: quadrati finché le righe ci stanno in metà dello spazio,
  // poi si accorciano (mai sotto ALTEZZA_MIN_TASTO, così il nome ci sta sempre)
  const altezzaTasto = Math.floor(
    Math.min(
      larghezzaTasto,
      Math.max(
        ALTEZZA_MIN_TASTO,
        (zona.altezza * 0.5 - (righe - 1) * SPAZIO_GRIGLIA) / righe,
      ),
    ),
  );
  const larghezzaGriglia = 2 * larghezzaTasto + SPAZIO_COLONNE;
  const altezzaGriglia = righe * altezzaTasto + (righe - 1) * SPAZIO_GRIGLIA;
  // Il globo prende quello che resta sopra la griglia
  const latoGlobo = Math.floor(
    Math.min(
      zona.larghezza * 0.8,
      zona.altezza - altezzaGriglia - ALTEZZA_SCRITTE - Spacing.five,
    ),
  );
  // Solo l'inizio della frase di oggi, nella vignetta: il resto si scopre toccando il globo
  const inizioFrase =
    lezioneDelGiorno()
      .citazione.testo.split(" ")
      .slice(0, PAROLE_VIGNETTA)
      .join(" ") + "…";
  // Il pin di Oxford, nelle coordinate della zona (il globo è centrato in alto)
  const pinX =
    zona.larghezza / 2 - latoGlobo / 2 + (latoGlobo * OXFORD.cx) / 200;
  const pinY = (latoGlobo * OXFORD.cy) / 200;
  // La prossima fermata: si aggiorna ogni volta che si torna alla home
  const visti = useVisti(ID_LEZIONI);
  const risultati = useRisultati(ID_LEZIONI);
  const prossima = prossimaLezione(visti, risultati);

  // Il globo si rimpicciolisce un po' quando lo premi, come i tasti
  const scalaGlobo = useSharedValue(1);
  const stileGlobo = useAnimatedStyle(() => ({
    transform: [{ scale: scalaGlobo.value }],
  }));

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.page}>
        <ThemedView style={styles.intestazione}>
          <Animated.View entering={FadeInDown.duration(600)}>
            <ThemedText
              type="title"
              style={[styles.title, schermoBasso && styles.titoloCompatto]}
            >
              ROAD TO OXFORD
            </ThemedText>
          </Animated.View>

          {/* Un trattino per attività, con il suo colore: fanno da legenda.
              Agli Appunti, che non sono nella griglia ma hanno l'icona
              accanto al globo, spetta l'ultimo */}
          <Animated.View
            entering={FadeIn.delay(200).duration(600)}
            style={styles.avanzamento}
          >
            {[...VOCI.map((v) => v.colore), ColoriAttivita.appunti].map(
              (colore, i) => (
                <View
                  key={i}
                  style={[styles.trattino, { backgroundColor: colore }]}
                />
              ),
            )}
          </Animated.View>
        </ThemedView>

        <Animated.View entering={FadeInDown.delay(150).duration(600)}>
          <Tabellone lezione={prossima} />
        </Animated.View>

        {/* Lo spazio che resta: in alto il globo, sotto la griglia */}
        <View
          style={styles.zona}
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout;
            setZona({ larghezza: width, altezza: height });
          }}
        >
          {zona.altezza > 0 && (
            <>
              {/* Il globo: apre la frase del giorno */}
              <Animated.View
                entering={FadeIn.delay(300).duration(800)}
                style={[styles.globo, { width: larghezzaGriglia }]}
              >
                <Alone
                  centroX={larghezzaGriglia / 2}
                  centroY={latoGlobo / 2}
                  diametro={latoGlobo * 0.9}
                />
                <Link href="/frase-del-giorno" asChild>
                  <Pressable
                    style={styles.premibileGlobo}
                    onPressIn={() => (scalaGlobo.value = withSpring(0.95))}
                    onPressOut={() => (scalaGlobo.value = withSpring(1))}
                  >
                    <Animated.View style={[styles.premibileGlobo, stileGlobo]}>
                      <Globo dimensione={latoGlobo} />
                      <ThemedText style={styles.etichettaGlobo}>
                        Scopri la frase del giorno
                      </ThemedText>
                    </Animated.View>
                  </Pressable>
                </Link>
              </Animated.View>

              {/* Le attività, due per riga, che entrano una dopo l'altra.
                  Se sono dispari l'ultima prende tutta la riga */}
              <View
                style={[
                  styles.griglia,
                  {
                    width: larghezzaGriglia,
                    columnGap: SPAZIO_COLONNE,
                  },
                ]}
              >
                {VOCI.map((v, i) => (
                  <VoceMenu
                    key={v.voce}
                    voce={v.voce}
                    href={v.href}
                    colore={v.colore}
                    icona={v.icona}
                    larghezza={
                      i === VOCI.length - 1 && VOCI.length % 2 === 1
                        ? larghezzaGriglia
                        : larghezzaTasto
                    }
                    altezza={altezzaTasto}
                    ritardo={450 + i * 120}
                  />
                ))}
              </View>

              <Vignetta testo={inizioFrase} pinX={pinX} pinY={pinY} />

              {/* Gli appunti: in alto a destra, accanto al globo */}
              <Animated.View
                entering={FadeIn.delay(400).duration(800)}
                style={styles.appunti}
              >
                <Link href="/appunti" asChild>
                  <Pressable
                    hitSlop={10}
                    style={({ pressed }) => pressed && { opacity: 0.6 }}
                  >
                    <Notes dimensione={34} />
                  </Pressable>
                </Link>
              </Animated.View>
            </>
          )}
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

// La vignetta con l'inizio della frase del giorno: all'apertura dell'app esce
// dal pin di Oxford e si allarga verso sinistra, fuori dal globo, e resta
// aperta. Il suo angolo in basso a destra è sul pin
function Vignetta({
  testo,
  pinX,
  pinY,
}: {
  testo: string;
  pinX: number;
  pinY: number;
}) {
  const p = useSharedValue(0);

  useEffect(() => {
    // Aspetta che il globo sia comparso, poi si apre veloce con un rimbalzo
    // appena accennato, e non si richiude più
    p.value = withDelay(
      700,
      withTiming(1, { duration: 260, easing: Easing.out(Easing.back(0.6)) }),
    );
  }, [p]);

  const stile = useAnimatedStyle(() => ({
    opacity: Math.min(1, p.value * 1.5),
    transform: [{ scale: p.value }],
  }));

  return (
    <Animated.View
      style={[
        styles.livello,
        styles.vignetta,
        // Dal bordo sinistro fino al pin, appoggiata sopra di lui
        {
          left: Spacing.two,
          width: pinX - Spacing.two,
          top: pinY - ALTEZZA_VIGNETTA,
          height: ALTEZZA_VIGNETTA,
        },
        stile,
      ]}
    >
      <View style={styles.nuvoletta}>
        <ThemedText numberOfLines={1} style={styles.testoVignetta}>
          “{testo}”
        </ThemedText>
      </View>
    </Animated.View>
  );
}

// Un anello azzurro che si allarga e svanisce intorno al globo, di continuo:
// invita a toccarlo
function Alone({
  centroX,
  centroY,
  diametro,
}: {
  centroX: number;
  centroY: number;
  diametro: number;
}) {
  const p = useSharedValue(0);

  useEffect(() => {
    p.value = withRepeat(
      withTiming(1, { duration: 2400, easing: Easing.out(Easing.ease) }),
      -1,
      false,
    );
  }, [p]);

  const stile = useAnimatedStyle(() => ({
    transform: [{ scale: 1 + 0.18 * p.value }],
    opacity: 0.5 * (1 - p.value),
  }));

  return (
    <Animated.View
      style={[
        styles.livello,
        styles.alone,
        {
          width: diametro,
          height: diametro,
          borderRadius: diametro / 2,
          top: centroY - diametro / 2,
          left: centroX - diametro / 2,
        },
        stile,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.one,
    paddingBottom: Spacing.two,
    maxWidth: MaxContentWidth,
  },
  page: {
    flex: 1,
    paddingTop: Spacing.six,
    paddingBottom: Spacing.three,
    paddingHorizontal: Spacing.one,
    gap: Spacing.four,
    backgroundColor: "#000000",
    // L'alone del globo, quando si allarga, non deve far scorrere la pagina
    overflow: "hidden",
  },
  intestazione: {
    alignItems: "center",
    gap: Spacing.three,
  },
  title: {
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
    fontFamily: "PlayfairDisplay_700Bold",
    color: "#ffffff",
  },
  titoloCompatto: {
    fontSize: 28,
    lineHeight: 34,
  },
  // Niente larghezza fissa: ogni trattino è largo uguale, e la riga si
  // allunga o si accorcia con il numero delle attività
  avanzamento: {
    flexDirection: "row",
    gap: 4,
  },
  trattino: {
    width: 26,
    height: 3,
    borderRadius: 2,
  },
  // Prende tutto lo spazio libero: globo in alto, griglia in fondo
  zona: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  // L'alone: dietro a tutto, non toccabile
  livello: {
    position: "absolute",
    pointerEvents: "none",
  },
  alone: {
    borderWidth: 1,
    borderColor: AZZURRO,
  },
  globo: {
    alignItems: "center",
  },
  // L'icona degli appunti, nell'angolo in alto a destra della zona del globo
  appunti: {
    position: "absolute",
    top: 0,
    right: Spacing.two,
  },
  premibileGlobo: {
    alignItems: "center",
  },
  etichettaGlobo: {
    marginTop: Spacing.one,
    lineHeight: 20,
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: AZZURRO,
  },
  // Si apre e si richiude dall'angolo in basso a destra, cioè dal pin
  vignetta: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    transformOrigin: "right bottom",
  },
  nuvoletta: {
    maxWidth: "100%",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    backgroundColor: "#0d0d0f",
    borderColor: AZZURRO,
    borderWidth: 1,
    borderRadius: 14,
    // L'angolo a punta, quello che indica il pin
    borderBottomRightRadius: 2,
    boxShadow: `0 0 14px ${AZZURRO}55`,
  },
  testoVignetta: {
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    fontSize: 13,
    lineHeight: 18,
    color: "#ffffff",
  },
  griglia: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: SPAZIO_GRIGLIA,
  },
});
