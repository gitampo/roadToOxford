/**
 * Un grafico a barre semplice, disegnato con react-native-svg.
 * Una barra per ogni valore; null = nessun dato (si vede solo il binario).
 * La larghezza si adatta al contenitore: la si misura con onLayout.
 */

import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { G, Line, Rect, Text as SvgText } from "react-native-svg";

type Props = {
  valori: (number | null)[];
  // Una etichetta sotto ogni barra ("" per non scriverla)
  etichette: string[];
  colore: string;
  // Il valore che riempie tutta l'altezza; se manca, il più alto dei valori
  massimo?: number;
  // Come scrivere il valore sopra la barra (per esempio con il %)
  formato?: (v: number) => string;
  altezza?: number;
};

// Spazio sopra le barre per il numero, e sotto per le etichette
const SOPRA = 16;
const SOTTO = 18;

export default function Grafico({
  valori,
  etichette,
  colore,
  massimo,
  formato = String,
  altezza = 140,
}: Props) {
  const theme = useTheme();
  const [larghezza, setLarghezza] = useState(0);

  // Mai zero, per non dividere per zero quando non c'è ancora niente
  const max = Math.max(massimo ?? Math.max(0, ...valori.map((v) => v ?? 0)), 1);
  const area = altezza - SOPRA - SOTTO; // l'altezza utile per le barre
  const colonna = larghezza / valori.length;
  const barra = Math.min(colonna * 0.6, 28);

  return (
    <View
      style={styles.contenitore}
      onLayout={(e) => setLarghezza(e.nativeEvent.layout.width)}
    >
      {larghezza > 0 && (
        <Svg width={larghezza} height={altezza}>
          {/* La linea di base */}
          <Line
            x1={0}
            x2={larghezza}
            y1={SOPRA + area}
            y2={SOPRA + area}
            stroke={theme.backgroundSelected}
            strokeWidth={1}
          />
          {valori.map((v, i) => {
            // In SVG la y cresce verso il basso: la barra parte dalla base
            // e sale per la sua altezza
            const h = v === null ? 0 : (v / max) * area;
            const x = i * colonna + (colonna - barra) / 2;
            const centro = i * colonna + colonna / 2;
            return (
              <G key={i}>
                {/* Il binario, sempre visibile anche senza dati */}
                <Rect
                  x={x}
                  y={SOPRA}
                  width={barra}
                  height={area}
                  rx={4}
                  fill={theme.backgroundElement}
                />
                {h > 0 && (
                  <Rect
                    x={x}
                    y={SOPRA + area - h}
                    width={barra}
                    height={h}
                    rx={4}
                    fill={colore}
                  />
                )}
                {v !== null && v > 0 && (
                  <SvgText
                    x={centro}
                    y={SOPRA + area - h - 4}
                    fontSize={10}
                    fill={theme.textSecondary}
                    textAnchor="middle"
                  >
                    {formato(v)}
                  </SvgText>
                )}
                <SvgText
                  x={centro}
                  y={altezza - 4}
                  fontSize={10}
                  fill={theme.textSecondary}
                  textAnchor="middle"
                >
                  {etichette[i]}
                </SvgText>
              </G>
            );
          })}
        </Svg>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    width: "100%",
  },
});
