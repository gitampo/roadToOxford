import { Href, Link } from "expo-router";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";
import { Spacing } from "@/constants/theme";

type Props = {
  voce: string;
  href: Href;
  style?: StyleProp<ViewStyle>;
};

export default function VoceMenu({ voce, href, style }: Props) {
  return (
    <ThemedView style={[styles.riquadro, style]}>
      <Link href={href}>
          <ThemedText type="link" style={styles.testoVoce}>{voce}</ThemedText>
      </Link>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  riquadro: {
    borderWidth: 1,
    borderColor: "#4da3ff",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
  },
  testoVoce: {
    fontSize: 20,
  }
});
