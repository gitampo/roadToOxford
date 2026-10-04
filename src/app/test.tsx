import { SafeAreaView } from "react-native-safe-area-context";

import LineaTitolo from "@/components/lineaTitolo";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { constants } from "@/constants/theme";

const VERDE = "#4ade80";

export default function Test() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText type="title" style={constants.title}>
          Testa il tuo livello
        </ThemedText>
        <LineaTitolo colore={VERDE} />
      </ThemedView>
    </SafeAreaView>
  );
}
