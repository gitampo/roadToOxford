import * as Device from "expo-device";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Globo } from "@/components/globo";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import VoceMenu from "@/components/voceMenu";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

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

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.page}>
        <ThemedText type="title" style={styles.title}>
          ROAD{"\n"}TO{"\n"}ENGLAND
        </ThemedText>
        <ThemedView style={{ flexDirection: "row", alignItems: "center" }}>
          <ThemedView style={{ width: "50%", borderRadius: 12 }}>
            <ThemedText style={styles.subtitle}>
              Learn English from absolute beginner to holding a real
              conversation in England.
            </ThemedText>
          </ThemedView>
          <Globo style={styles.globeStyle}></Globo>
        </ThemedView>
        <VoceMenu voce="Vai alle lezioni" href="/lezioni" />
        <VoceMenu voce="Paradigmi dei verbi irregolari" href="/paradigmi" />
        <VoceMenu voce="Appunti" href="/lezioni" />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.one,
    gap: Spacing.three,
    paddingBottom: BottomTabInset,
    maxWidth: MaxContentWidth,
  },
  page: {
    flex: 1,
    paddingTop: Spacing.six,
    paddingHorizontal: Spacing.four,
    gap: Spacing.three,
    backgroundColor: "#000000",
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: "left",
    marginBottom: 10,
    fontFamily: "PlayfairDisplay_700Bold",
    color: "#ffffff",
  },
  subtitle: {
    alignItems: "flex-start",
    fontFamily: "Inter_400Regular",
    letterSpacing: 2,
    opacity: 1,
  },
  code: {
    textTransform: "uppercase",
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  globeStyle: {
    marginBottom: 10,
  },
});
