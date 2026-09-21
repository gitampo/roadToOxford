import { Spacing } from "@/constants/theme";
import { useState } from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type Props = {
  titolo: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Sezione({ titolo, children, style }: Props) {
  const [aperta, setAperta] = useState(false);

  return (
    <ThemedView style={styles.card}>
      <Pressable onPress={() => setAperta((a) => !a)}>
        <ThemedText>{titolo}</ThemedText>
      </Pressable>
      {aperta && (
        <Animated.View
          entering={FadeIn.duration(250)}
          exiting={FadeOut.duration(100)}
        >
          {children}
        </Animated.View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderColor: "#ffffff",
    borderWidth: 1,
    padding: 10,
    marginBottom: Spacing.three,
  },
});
