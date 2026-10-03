import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { constants } from "@/constants/theme";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Appunti() {
  const [aperto, setAperto] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={[constants.container, { flexDirection: "row" }]}>
        <ThemedText type="title" style={constants.title}>
          Appunti
        </ThemedText>
        <ThemedView style={{ flex: 1, marginLeft: 90 }}>
          <Pressable onPress={() => setAperto(true)}>
            <SymbolView
              name={{
                ios: "square.and.pencil",
                android: "edit",
                web: "edit",
              }}
              size={50}
              tintColor={"#cc7717"}
            />
          </Pressable>
        </ThemedView>
      </ThemedView>
      <Modal
        visible={aperto}
        transparent
        animationType="fade"
        onRequestClose={() => setAperto(false)}
      >
        <View style={styles.velo}>
          <View style={styles.scheda}>
            <ThemedView style={{flexDirection: "row"}}>
            <ThemedText type="subtitle">Nuova nota</ThemedText>
            <Pressable onPress={() => setAperto(false)}>
            <SymbolView
                name={{
                  ios: "xmark.circle.fill",
                  android: "close",
                  web: "close",
                }}
                style={{alignItems: "flex-end", marginLeft: 100}}
                size={35}
                tintColor={"#ffffff"}
              />
              </Pressable>
            </ThemedView>
            <ThemedView style={styles.finestra}>
              <TextInput placeholder="Scegli un titolo" />
            </ThemedView>
            <ThemedView style={styles.finestra}>
              <TextInput
                placeholder="Descrizione"
                multiline
                style={{ minHeight: 120, textAlignVertical: "top" }}
              />
            </ThemedView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  velo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    // niente bordo, niente height, niente paddingVertical
  },
  scheda: {
    width: "85%",
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: "#cc7717",
    borderRadius: 16,
    backgroundColor: "#000000", // o il colore che preferisci
  },
  finestra: {
    // togli width: "85%" e marginBottom (ora lo spazio lo dà il gap della scheda)
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#cc7717",
    backgroundColor: '#2E3135',
  },
});
