import { Link } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ColoriAttivita, Spacing } from "@/constants/theme";
import { avanzamento, idCollegati } from "@/data/avanzamento";
import { LEZIONI } from "@/data/lezioni";
import { useRisultati } from "@/hooks/use-risultati";
import { useTheme } from "@/hooks/use-theme";
import { useVisti } from "@/hooks/use-visti";

const VERDE = ColoriAttivita.test;
const LIVELLI = [...new Set(LEZIONI.map((l) => l.livello))];

// Dove sei arrivato in ogni livello: riquadri di teoria letti e risposte
// giuste sul totale del livello, con gli stessi conti della lista lezioni.
// Una card con un'etichetta e, sotto, i livelli su due colonne, ognuno con
// la percentuale e una barra. In fondo, separato da una linea, il
// collegamento alle altre statistiche (precisione e costanza). Sta nella
// pagina Test, sotto i bottoni
export default function AvanzamentoLivelli() {
  const theme = useTheme();
  const ids = LEZIONI.flatMap(idCollegati);
  const risultati = useRisultati(ids);
  const visti = useVisti(ids);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.backgroundElement,
          borderColor: VERDE + "55",
        },
      ]}
    >
      <View style={styles.intestazione}>
        <ThemedText style={[styles.etichetta, { color: VERDE }]}>
          Dove sei arrivato
        </ThemedText>
        <ThemedText
          style={[styles.spiegazione, { color: theme.textSecondary }]}
        >
          Riquadri letti e risposte giuste, sul totale di ogni livello.
        </ThemedText>
      </View>
      <View style={styles.griglia}>
        {LIVELLI.map((livello) => {
          const tot = LEZIONI.filter((l) => l.livello === livello).reduce(
            (t, l) => {
              const a = avanzamento(l, risultati, visti);
              return { fatti: t.fatti + a.fatti, daFare: t.daFare + a.daFare };
            },
            { fatti: 0, daFare: 0 },
          );
          const quota = tot.daFare > 0 ? tot.fatti / tot.daFare : 0;
          return (
            <View key={livello} style={styles.livello}>
              <View style={styles.riga}>
                <ThemedText style={styles.nome} numberOfLines={1}>
                  {livello}
                </ThemedText>
                <ThemedText
                  style={[styles.percentuale, { color: theme.textSecondary }]}
                >
                  {Math.round(quota * 100)}%
                </ThemedText>
              </View>
              <View
                style={[
                  styles.binario,
                  { backgroundColor: theme.backgroundSelected },
                ]}
              >
                <View
                  style={[
                    styles.riempimento,
                    { width: `${quota * 100}%`, backgroundColor: VERDE },
                  ]}
                />
              </View>
            </View>
          );
        })}
      </View>

      {/* In fondo: le altre statistiche. Il Pressable ha uno stile fisso:
          sul web Link (asChild) non accetta lo stile come funzione o come array,
          quindi si appiattisce */}
      <Link href="/miglioramenti" asChild>
        <Pressable
          style={StyleSheet.flatten([
            styles.altre,
            { borderTopColor: VERDE + "40" },
          ])}
          hitSlop={4}
        >
          <SymbolView
            name={{
              ios: "chart.xyaxis.line",
              android: "show_chart",
              web: "show_chart",
            }}
            size={22}
            tintColor={VERDE}
          />
          <View style={styles.testiAltre}>
            <ThemedText style={[styles.titoloAltre, { color: VERDE }]}>
              Altre statistiche
            </ThemedText>
            <ThemedText
              style={[styles.spiegazione, { color: theme.textSecondary }]}
            >
              Precisione e costanza nel tempo
            </ThemedText>
          </View>
          <SymbolView
            name={{
              ios: "chevron.right",
              android: "chevron_right",
              web: "chevron_right",
            }}
            size={18}
            tintColor={VERDE}
          />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: Spacing.three,
    gap: Spacing.three,
  },
  intestazione: {
    gap: 2,
  },
  etichetta: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  spiegazione: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
  },
  griglia: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: Spacing.three,
    rowGap: Spacing.three,
  },
  // Due per riga: ognuno prende metà dello spazio, meno lo stacco
  livello: {
    gap: 4,
    flexBasis: "45%",
    flexGrow: 1,
  },
  riga: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
  },
  nome: {
    flexShrink: 1,
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  percentuale: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
  },
  binario: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
  },
  riempimento: {
    height: "100%",
    borderRadius: 4,
  },
  altre: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
    borderTopWidth: 1,
    paddingTop: Spacing.three,
  },
  testiAltre: {
    flex: 1,
  },
  titoloAltre: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.3,
  },
});
