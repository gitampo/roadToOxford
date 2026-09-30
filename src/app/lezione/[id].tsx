import CardEsempi from "@/components/cardEsempi";
import CardNota from "@/components/cardNota";
import { QuoteCard } from "@/components/quote-card";
import Tabella from "@/components/tabella";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";
import { LEZIONI } from "@/data/lezioni";
import { useTheme } from "@/hooks/use-theme";
import { Blocco } from "@/types/lezione";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GIALLO = "#ffe100";

// "I PRONOMI PERSONALI" → "I pronomi personali"
function primaMaiuscola(testo: string) {
  return testo.charAt(0) + testo.slice(1).toLowerCase();
}

export default function Dettagli() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lezione = LEZIONI.find((l) => l.id === id);
  const indice = LEZIONI.findIndex((l) => l.id === id);
  const [pagina, setPagina] = useState(0);
  const theme = useTheme();
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);

  if (!lezione) {
    return <ThemedText>Lezione non trovata</ThemedText>;
  }

  const riquadroCorrente = lezione.riquadri?.[pagina - 1];
  const numeroRiquadri = lezione.riquadri?.length ?? 0;
  const ultimaPagina = pagina === numeroRiquadri;

  // Cambia pagina e riporta lo scroll in cima
  function vaiA(nuovaPagina: number) {
    setPagina(nuovaPagina);
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView ref={scrollRef} style={{ flex: 1 }}>
        <ThemedView style={styles.container}>
          {/* Intestazione: livello, titolo e barra di avanzamento */}
          <ThemedText
            style={[styles.etichetta, { color: theme.textSecondary }]}
          >
            {lezione.livello} · Lezione {lezione.id}
          </ThemedText>
          <ThemedText style={styles.titoloLezione}>{lezione.titolo}</ThemedText>
          <ThemedView style={styles.avanzamento}>
            {Array.from({ length: numeroRiquadri }).map((_, i) => (
              <ThemedView
                key={i}
                style={[
                  styles.trattino,
                  {
                    backgroundColor:
                      i < pagina ? GIALLO : theme.backgroundSelected,
                  },
                ]}
              />
            ))}
          </ThemedView>

          {pagina === 0 ? (
            /* Copertina: citazione + elenco dei riquadri */
            <ThemedView>
              <QuoteCard citazione={lezione.citazione} />

              {numeroRiquadri > 0 && (
                <ThemedText
                  style={[styles.etichetta, { color: theme.textSecondary }]}
                >
                  In questa lezione
                </ThemedText>
              )}
              {lezione.riquadri?.map((riquadro, i) => (
                <Pressable
                  key={i}
                  onPress={() => vaiA(i + 1)}
                  style={({ pressed }) => [
                    styles.voceIndice,
                    i > 0 && {
                      borderTopWidth: 1,
                      borderTopColor: theme.backgroundSelected,
                    },
                    pressed && { opacity: 0.6 },
                  ]}
                >
                  <ThemedText style={styles.numeroIndice}>{i + 1}</ThemedText>
                  <ThemedText style={{ flex: 1 }}>
                    {primaMaiuscola(riquadro.titolo)}
                  </ThemedText>
                  <SymbolView
                    name={{
                      ios: "chevron.right",
                      android: "chevron_right",
                      web: "chevron_right",
                    }}
                    size={14}
                    tintColor={theme.textSecondary}
                  />
                </Pressable>
              ))}
            </ThemedView>
          ) : (
            /* Riquadro */
            riquadroCorrente && (
              <ThemedView>
                <ThemedText
                  style={[styles.etichetta, { color: theme.textSecondary }]}
                >
                  Riquadro {pagina} di {numeroRiquadri}
                </ThemedText>
                <ThemedText style={styles.titoloRiquadro}>
                  {riquadroCorrente.titolo}
                </ThemedText>
                <ThemedView style={styles.lineaGialla} />
                <ThemedView style={styles.blocchi}>
                  {riquadroCorrente.blocchi.map((blocco, i) => (
                    <MostraBlocco key={i} blocco={blocco} />
                  ))}
                </ThemedView>
              </ThemedView>
            )
          )}
        </ThemedView>
      </ScrollView>


      {/* Barra dei pulsanti, fissa in fondo */}
      <ThemedView
        style={[styles.barra, { borderTopColor: theme.backgroundSelected }]}
      >
        {pagina > 0 ? (
          <Pressable
            style={({ pressed }) => [
              styles.indietro,
              pressed && { opacity: 0.6 },
            ]}
            onPress={() => vaiA(pagina - 1)}
          >
            <SymbolView
              name={{
                ios: "arrow.left",
                android: "arrow_back",
                web: "arrow_back",
              }}
              size={16}
              tintColor={theme.textSecondary}
            />
            <ThemedText style={{ color: theme.textSecondary }}>
              Indietro
            </ThemedText>
          </Pressable>
        ) : (
          <ThemedView />
        )}

        <Pressable
          style={({ pressed }) => [styles.avanti, pressed && { opacity: 0.8 }]}
          onPress={() => (ultimaPagina ? router.back() : vaiA(pagina + 1))}
        >
          <ThemedText style={styles.testoAvanti}>
            {ultimaPagina ? "Fine" : pagina === 0 ? "Inizia" : "Avanti"}
          </ThemedText>
          <SymbolView
            name={
              ultimaPagina
                ? { ios: "checkmark", android: "check", web: "check" }
                : {
                    ios: "arrow.right",
                    android: "arrow_forward",
                    web: "arrow_forward",
                  }
            }
            size={16}
            tintColor="#000000"
          />
        </Pressable>
      </ThemedView>
    </SafeAreaView>
  );
}

// Sceglie come disegnare un blocco in base al suo tipo
function MostraBlocco({ blocco }: { blocco: Blocco }) {
  if (blocco.tipo === "esempi") {
    return <CardEsempi esempi={blocco.esempi} />;
  }
  if (blocco.tipo === "tabella") {
    return <Tabella righe={blocco.righe} />;
  }
  if (blocco.tipo === "nota") {
    return <CardNota testo={blocco.testo} />;
  }
  return <ThemedText style={styles.testo}>{blocco.testo}</ThemedText>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.five,
    paddingHorizontal: Spacing.four,
    gap: Spacing.three,
  },
  etichetta: {
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontFamily: "Inter_600SemiBold",
    marginTop: Spacing.one,
  },
  titoloLezione: {
    fontFamily: "PlayfairDisplay_600SemiBold",
    fontSize: 28,
    lineHeight: 34,
  },
  avanzamento: {
    flexDirection: "row",
    gap: 4,
    marginBottom: Spacing.three,
  },
  trattino: {
    flex: 1,
    height: 3,
    borderRadius: 2,
  },
  voceIndice: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 12,
  },
  numeroIndice: {
    fontFamily: "PlayfairDisplay_700Bold",
    color: GIALLO,
    width: 24,
  },
  titoloRiquadro: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: 0.5,
    marginTop: Spacing.one,
  },
  lineaGialla: {
    width: 40,
    height: 2,
    backgroundColor: GIALLO,
    marginTop: Spacing.three,
    marginBottom: Spacing.four,
  },
  blocchi: {
    gap: Spacing.three,
  },
  testo: {
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    lineHeight: 24,
  },
  barra: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
  },
  indietro: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 12,
  },
  avanti: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: GIALLO,
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 22,
  },
  testoAvanti: {
    color: "#000000",
    fontFamily: "Inter_600SemiBold",
  },
});
