import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type Props = {
  // Le voci della barra, nell'ordine; "Tutti" va in testa da solo
  voci: string[];
  // La voce attiva; null = "Tutti"
  attiva: string | null;
  onCambia: (voce: string | null) => void;
  // Il colore della linetta sotto la voce attiva
  colore: string;
};

// La barra di linguette che scorre in orizzontale sotto la ricerca (livelli
// in Lezioni, categorie nel Vocabolario). Quella attiva ha la linetta colorata
// sotto; toccare quella già attiva torna a "Tutti"
export default function Linguette({ voci, attiva, onCambia, colore }: Props) {
  const theme = useTheme();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      style={styles.scroll}
      contentContainerStyle={styles.riga}
    >
      {[null, ...voci].map((v) => {
        const selezionata = attiva === v;
        return (
          <Pressable
            key={v ?? "tutti"}
            onPress={() => onCambia(selezionata ? null : v)}
            hitSlop={8}
            style={styles.linguetta}
          >
            <Text
              style={[
                styles.testo,
                { color: selezionata ? theme.text : theme.textSecondary },
              ]}
            >
              {v ?? "Tutti"}
            </Text>
            {/* Sempre presente, trasparente se non attiva:
                così l'altezza non cambia quando si seleziona */}
            <View
              style={[
                styles.linea,
                { backgroundColor: selezionata ? colore : "transparent" },
              ]}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    // Senza flexGrow: 0 la riga si allungherebbe in verticale; senza
    // flexShrink: 0 la lista sotto la "schiaccerebbe" tagliandone il fondo
    flexGrow: 0,
    flexShrink: 0,
    marginBottom: Spacing.four,
  },
  riga: {
    gap: Spacing.four,
    paddingHorizontal: 12,
  },
  linguetta: {
    alignItems: "center",
  },
  // Text semplice e non ThemedText, che aggiunge lineHeight: 24
  testo: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    includeFontPadding: false,
  },
  // La linetta, larga quanto la parola
  linea: {
    alignSelf: "stretch",
    height: 2,
    marginTop: 6,
  },
});
