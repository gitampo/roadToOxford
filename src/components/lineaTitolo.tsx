import { Spacing } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

// La linetta colorata sotto il titolo di una pagina (Lezioni, Vocabolario,
// Paradigmi, Appunti), nel colore della sua attività. Va subito dopo il
// titolo: il margine negativo la avvicina, quello sotto ridà lo spazio
export default function LineaTitolo({ colore }: { colore: string }) {
  return <View style={[styles.linea, { backgroundColor: colore }]} />;
}

const styles = StyleSheet.create({
  linea: {
    width: 40,
    height: 2,
    marginTop: -Spacing.three,
    marginBottom: Spacing.four,
  },
});
