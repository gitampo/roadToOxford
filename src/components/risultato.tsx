import { useTheme } from "@/hooks/use-theme";
import { Risultato } from "@/types/lezione";
import { StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export const VERDE = "#4ade80";
export const GIALLO = "#ffe100";
export const ROSSO = "#ff6b6b";

// Rosso sotto il 50%, giallo fino all'80%, verde sopra
export function coloreRisultato({ giuste, totale }: Risultato) {
  const percentuale = totale === 0 ? 0 : giuste / totale;
  if (percentuale < 0.5) return ROSSO;
  if (percentuale < 0.8) return GIALLO;
  return VERDE;
}

export function consiglio(r: Risultato) {
  if (r.risposte < r.totale) {
    return `Hai fatto ${r.risposte} esercizi su ${r.totale}: finiscili per avere il tuo risultato.`;
  }
  const percentuale = r.totale === 0 ? 0 : r.giuste / r.totale;
  if (percentuale < 0.5) {
    return "Ti consiglio di rileggere con calma l'analisi dei versi, soprattutto le parti indicate qui sotto, e poi di rifare gli esercizi.";
  }
  if (percentuale < 0.8) {
    return "Buona base. Rivedi le parti indicate qui sotto e rifai gli esercizi: puoi arrivare al massimo.";
  }
  if (r.giuste < r.totale) {
    return "Ottimo risultato. Dai un'occhiata alle poche parti da rivedere e questo testo è tuo.";
  }
  return "Perfetto: questo testo lo padroneggi. Puoi passare al prossimo.";
}

// La barra di progresso: si riempie in base alle risposte giuste
export function BarraRisultato({
  risultato,
  etichetta,
  compatta = false,
}: {
  risultato: Risultato;
  etichetta?: string;
  compatta?: boolean;
}) {
  const theme = useTheme();
  const colore = coloreRisultato(risultato);
  const finito = risultato.risposte >= risultato.totale;
  const larghezza = risultato.totale === 0 ? 0 : risultato.giuste / risultato.totale;

  return (
    <ThemedView style={[styles.contenitore, compatta && styles.contenitoreCompatto]}>
      <ThemedView style={styles.intestazione}>
        <ThemedText
          style={[styles.etichetta, compatta && styles.etichettaCompatta, { color: theme.textSecondary }]}
        >
          {etichetta ?? "Esercizi"}
          {finito ? "" : " · in corso"}
        </ThemedText>
        <ThemedText style={[styles.punteggio, compatta && styles.punteggioCompatto, { color: colore }]}>
          {risultato.giuste}/{risultato.totale}
        </ThemedText>
      </ThemedView>
      <ThemedView
        style={[
          styles.barra,
          compatta && styles.barraCompatta,
          { backgroundColor: theme.backgroundSelected },
        ]}
      >
        <ThemedView
          style={[
            styles.riempimento,
            { width: `${larghezza * 100}%`, backgroundColor: colore },
          ]}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    gap: 6,
    backgroundColor: "transparent",
  },
  contenitoreCompatto: {
    gap: 3,
  },
  intestazione: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    backgroundColor: "transparent",
  },
  etichetta: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  etichettaCompatta: {
    fontSize: 11,
  },
  punteggio: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
  },
  punteggioCompatto: {
    fontSize: 13,
  },
  barra: {
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
  },
  barraCompatta: {
    height: 4,
  },
  riempimento: {
    height: "100%",
    borderRadius: 3,
  },
});
