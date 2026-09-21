import { Spacing } from "@/constants/theme";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type Props = {
  titolo: string;
  children: React.ReactNode;
};

export function Sezione({ titolo, children }: Props) {
  const [aperta, setAperta] = useState(false);

  return (
    <ThemedView style={styles.card}>
      <Pressable onPress={() => setAperta((a) => !a)}>
        <ThemedText>{titolo}</ThemedText>
      </Pressable>
      {aperta && children}
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
