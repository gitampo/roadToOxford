import { useTheme } from "@/hooks/use-theme";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

const GIALLO = "#ffe100";

type Props = {
  righe: string[];
  traduzione?: string[];
  evidenzia?: [number, number];
  // Se c'è, i versi si possono toccare per andare alla loro spiegazione
  // (tranne quelli già in risalto)
  onPressRiga?: (riga: number) => void;
};

// Testo letterario con i numeri di verso.
// Senza "evidenzia": tutto il testo, con la traduzione sotto ogni verso.
// Con "evidenzia": solo quelle righe in risalto (e tradotte), le altre sbiadite.
// Il pulsante in alto a destra lo apre a schermo intero.
export default function Brano({
  righe,
  traduzione,
  evidenzia,
  onPressRiga,
}: Props) {
  const theme = useTheme();
  const [schermoIntero, setSchermoIntero] = useState(false);

  // A schermo intero, toccare un verso chiude la finestra e poi va alla spiegazione
  const onPressRigaGrande = onPressRiga
    ? (riga: number) => {
        setSchermoIntero(false);
        onPressRiga(riga);
      }
    : undefined;

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedView type="backgroundElement" style={styles.intestazione}>
        <ThemedText style={[styles.suggerimento, { color: theme.textSecondary }]}>
          {onPressRiga && evidenzia === undefined
            ? "Tocca un verso per vedere la sua spiegazione"
            : ""}
        </ThemedText>
        <Pressable
          onPress={() => setSchermoIntero(true)}
          hitSlop={10}
          style={({ pressed }) => pressed && { opacity: 0.6 }}
        >
          <SymbolView
            name={{
              ios: "arrow.up.left.and.arrow.down.right",
              android: "open_in_full",
              web: "open_in_full",
            }}
            size={16}
            tintColor={theme.textSecondary}
          />
        </Pressable>
      </ThemedView>

      <Righe
        righe={righe}
        traduzione={traduzione}
        evidenzia={evidenzia}
        onPressRiga={onPressRiga}
      />

      <Modal
        visible={schermoIntero}
        animationType="slide"
        onRequestClose={() => setSchermoIntero(false)}
      >
        <SafeAreaProvider>
          <SafeAreaView
            style={[styles.schermoIntero, { backgroundColor: theme.background }]}
          >
            <ThemedView style={styles.barraSchermoIntero}>
              <Pressable
                onPress={() => setSchermoIntero(false)}
                hitSlop={10}
                style={({ pressed }) => [
                  styles.chiudi,
                  { backgroundColor: theme.backgroundElement },
                  pressed && { opacity: 0.6 },
                ]}
              >
                <SymbolView
                  name={{ ios: "xmark", android: "close", web: "close" }}
                  size={16}
                  tintColor={theme.text}
                />
              </Pressable>
            </ThemedView>
            <ScrollView contentContainerStyle={styles.contenutoSchermoIntero}>
              <Righe
                righe={righe}
                traduzione={traduzione}
                evidenzia={evidenzia}
                onPressRiga={onPressRigaGrande}
                grande
              />
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
      </Modal>
    </ThemedView>
  );
}

// I versi, uguali nella card e a schermo intero (dove sono più grandi)
function Righe({
  righe,
  traduzione,
  evidenzia,
  onPressRiga,
  grande = false,
}: Props & { grande?: boolean }) {
  const theme = useTheme();

  return (
    <>
      {righe.map((riga, i) => {
        const inRisalto =
          evidenzia !== undefined && i >= evidenzia[0] && i <= evidenzia[1];
        const sbiadita = evidenzia !== undefined && !inRisalto;
        // I versi già in risalto sono quelli spiegati qui: non serve toccarli
        const toccabile = onPressRiga !== undefined && !inRisalto;
        const mostraTraduzione =
          traduzione?.[i] && (evidenzia === undefined || inRisalto);

        return (
          <Pressable
            key={i}
            disabled={!toccabile}
            onPress={() => onPressRiga?.(i)}
            style={({ pressed }) => [
              styles.riga,
              grande && styles.rigaGrande,
              inRisalto && styles.rigaInRisalto,
              sbiadita && { opacity: 0.35 },
              pressed && { opacity: 0.6 },
            ]}
          >
            <ThemedText
              style={[
                styles.numero,
                grande && styles.numeroGrande,
                { color: theme.textSecondary },
              ]}
            >
              {i + 1}
            </ThemedText>
            <ThemedView style={styles.testi} type={grande ? "background" : "backgroundElement"}>
              <ThemedText
                style={[
                  styles.verso,
                  grande && styles.versoGrande,
                  inRisalto && { color: GIALLO },
                ]}
              >
                {riga}
              </ThemedText>
              {mostraTraduzione && (
                <ThemedText
                  style={[
                    styles.traduzione,
                    grande && styles.traduzioneGrande,
                    { color: theme.textSecondary },
                  ]}
                >
                  {traduzione[i]}
                </ThemedText>
              )}
            </ThemedView>
          </Pressable>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingRight: 14,
    gap: 6,
  },
  intestazione: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 14,
    marginBottom: 4,
  },
  suggerimento: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 12,
  },
  riga: {
    flexDirection: "row",
    gap: 10,
    borderLeftWidth: 3,
    borderLeftColor: "transparent",
    paddingLeft: 8,
  },
  rigaGrande: {
    gap: 14,
    paddingVertical: 4,
  },
  rigaInRisalto: {
    borderLeftColor: GIALLO,
  },
  numero: {
    width: 20,
    textAlign: "right",
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 24,
  },
  numeroGrande: {
    width: 24,
    fontSize: 14,
    lineHeight: 32,
  },
  testi: {
    flex: 1,
  },
  verso: {
    fontFamily: "PlayfairDisplay_600SemiBold",
    fontSize: 16,
    lineHeight: 24,
  },
  versoGrande: {
    fontSize: 22,
    lineHeight: 32,
  },
  traduzione: {
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    fontSize: 13,
    lineHeight: 18,
  },
  traduzioneGrande: {
    fontSize: 16,
    lineHeight: 22,
  },
  schermoIntero: {
    flex: 1,
  },
  barraSchermoIntero: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chiudi: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  contenutoSchermoIntero: {
    paddingRight: 24,
    paddingLeft: 8,
    paddingBottom: 32,
    gap: 10,
  },
});
