import { Spacing } from "@/constants/theme";
import { Citazione } from "@/types/citazione";
import { ImageBackground, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";

type Props = {
  citazione: Citazione;
};

export function QuoteCard({ citazione }: Props) {
  return (
    <ImageBackground
      source={citazione.immagine}
      resizeMode="cover"
      style={styles.card}
      imageStyle={styles.texture}
    >
      <ThemedText style={styles.testo}>"{citazione.testo}"</ThemedText>
      <ThemedText style={styles.traduzione}>{citazione.traduzione}</ThemedText>
      <ThemedText style={styles.fonte}>- {citazione.fonte}</ThemedText>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#79620633",
    borderColor: "#ffec9834",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    minHeight: 170,
    justifyContent: "space-between",
    marginBottom: Spacing.five,
  },
  testo: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#ffe100",
  },
  fonte: {
    fontSize: 13,
    marginTop: 8,
    alignSelf: "flex-end",
    color: "#ffffff",
  },
  texture: {
    borderRadius: 12,
    opacity: 0.25,
  },
  immagine: {
    ...StyleSheet.absoluteFill,
    opacity: 0,
  },
  traduzione: {
    color: "#ffffff",
    fontStyle: "italic",
    fontSize: 16,
  },
});
