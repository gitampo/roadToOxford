import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { SymbolView } from "expo-symbols";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  // Il testo cercato e la funzione che lo cambia (di solito uno useState)
  valore: string;
  onCambia: (testo: string) => void;
  placeholder: string;
  // Altro da mettere in fondo alla barra, dopo la ✕ (per esempio il tasto
  // EN → IT del Vocabolario)
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

// La barra di ricerca in cima alle liste (Lezioni, Vocabolario): il campo,
// la ✕ per cancellare quando c'è del testo e, se serve, altri pulsanti
export default function BarraRicerca({
  valore,
  onCambia,
  placeholder,
  children,
  style,
}: Props) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.barra,
        { backgroundColor: theme.backgroundElement },
        style,
      ]}
    >
      <TextInput
        style={[styles.campo, { color: theme.text }]}
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor={theme.textSecondary}
        value={valore}
        onChangeText={onCambia}
        placeholder={placeholder}
      />
      {valore.length > 0 && (
        <Pressable onPress={() => onCambia("")} hitSlop={10}>
          <SymbolView
            name={{
              ios: "xmark.circle.fill",
              android: "close",
              web: "close",
            }}
            size={18}
            tintColor={theme.textSecondary}
          />
        </Pressable>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  barra: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
    borderRadius: 10,
    paddingLeft: 12,
    paddingRight: 8,
    marginBottom: Spacing.four,
  },
  campo: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    paddingVertical: 10,
  },
});
