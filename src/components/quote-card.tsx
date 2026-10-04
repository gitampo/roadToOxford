import { Spacing } from "@/constants/theme";
import { Citazione } from "@/types/citazione";
import { ImageBackground, StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

type Props = {
  citazione: Citazione;
  // Il colore della frase inglese, dello sfondo e del bordo. Senza, il
  // giallo delle lezioni
  colore?: string;
};

export function QuoteCard({ citazione, colore }: Props) {
  return (
    <ImageBackground
      source={citazione.immagine}
      resizeMode="cover"
      style={[
        styles.card,
        colore && {
          backgroundColor: colore + "1f",
          borderColor: colore + "40",
        },
      ]}
      imageStyle={styles.texture}
    >
      {/* Inglese e traduzione in un blocco solo, con uno spazio fisso tra i
          due: restano vicini senza mai sovrapporsi, anche su più righe */}
      <View style={styles.frasi}>
        <ThemedText style={[styles.testo, colore && { color: colore }]}>
          "{citazione.testo}"
        </ThemedText>
        {citazione.traduzione ? (
          <ThemedText style={styles.traduzione}>
            {citazione.traduzione}
          </ThemedText>
        ) : null}
      </View>
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
    padding: 15,
    minHeight: 170,
    // Le frasi in alto, la fonte in fondo
    justifyContent: "space-between",
    gap: Spacing.three,
    marginBottom: Spacing.five,
  },
  frasi: {
    gap: Spacing.two,
  },
  testo: {
    fontStyle: "italic",
    fontSize: 16,
    lineHeight: 23,
    color: "#ffe100",
  },
  fonte: {
    fontSize: 13,
    alignSelf: "flex-end",
    color: "#ffffff",
  },
  texture: {
    borderRadius: 12,
    opacity: 0.25,
  },
  traduzione: {
    color: "#ffffff",
    fontStyle: "italic",
    fontSize: 16,
    lineHeight: 23,
  },
});
