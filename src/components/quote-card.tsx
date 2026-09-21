import { Citazione } from "@/types/citazione";
import { ImageBackground, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";

type Props = {
  citazione: Citazione;
};

export function QuoteCard({ citazione }: Props) {
  return (
    <ImageBackground
      source={require("@/assets/images/textures/quadretti.jpg")}
      resizeMode="repeat"
      style={styles.card}
      imageStyle={styles.texture}
    >
      <ThemedText style={styles.testo}>"{citazione.testo}" {'\n'} {citazione.traduzione}</ThemedText>
      <ThemedText style={styles.fonte}>-{citazione.fonte}</ThemedText>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#e7cd5ab4",
    borderColor: "#ffec9884",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  testo: { fontStyle: "italic", fontSize: 16, alignSelf: "flex-start" },
  fonte: { fontSize: 13, marginTop: 8, alignSelf: "flex-end" },
  texture: { borderRadius: 5, opacity: 0.25 },
});
