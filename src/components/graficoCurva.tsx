/**
 * Un grafico cartesiano con una curva morbida, disegnato con react-native-svg.
 * Asse x: un punto per ogni valore (per esempio una settimana).
 * Asse y: da 0 a "massimo", con le linee della griglia e i numeri a sinistra.
 * I valori null (nessun dato) non hanno un punto: la curva passa oltre e
 * collega i punti che ci sono.
 *
 * La curva è "monotona" (metodo di Fritsch-Carlson): tra due punti non sale
 * né scende oltre i loro valori. Una curva qualsiasi, per essere morbida,
 * potrebbe superare il 100% o scendere sotto lo 0% tra un punto e l'altro.
 */

import { useTheme } from "@/hooks/use-theme";
import { useId, useState } from "react";
import { StyleSheet, View } from "react-native";
import Svg, {
  Circle,
  Defs,
  G,
  Line,
  LinearGradient,
  Path,
  Stop,
  Text as SvgText,
} from "react-native-svg";

type Props = {
  valori: (number | null)[];
  // Una etichetta sotto ogni punto
  etichette: string[];
  colore: string;
  massimo: number;
  // I valori in cui tracciare le linee della griglia (per esempio 0, 50, 100)
  griglia: number[];
  formato?: (v: number) => string;
  altezza?: number;
};

// I margini attorno all'area del grafico: a sinistra i numeri dell'asse y,
// sotto le etichette, sopra lo spazio per il numero dell'ultimo punto
const SINISTRA = 34;
const DESTRA = 12;
const SOPRA = 18;
const SOTTO = 20;

type Punto = { x: number; y: number };

// Il percorso SVG della curva monotona che passa per i punti (in ordine di x)
function curva(p: Punto[]) {
  const n = p.length;
  if (n === 0) return "";
  if (n === 1) return `M${p[0].x},${p[0].y}`;

  // Pendenza di ogni tratto, e pendenza della curva in ogni punto
  const d = p.slice(1).map((q, i) => (q.y - p[i].y) / (q.x - p[i].x));
  const m = p.map((_, i) => {
    if (i === 0) return d[0];
    if (i === n - 1) return d[n - 2];
    // Dove la direzione cambia (un picco o una valle) la curva è piatta
    if (d[i - 1] * d[i] <= 0) return 0;
    return (d[i - 1] + d[i]) / 2;
  });
  // Correzione di Fritsch-Carlson: evita che la curva "rimbalzi" oltre i punti
  for (let i = 0; i < n - 1; i++) {
    if (d[i] === 0) {
      m[i] = 0;
      m[i + 1] = 0;
      continue;
    }
    const a = m[i] / d[i];
    const b = m[i + 1] / d[i];
    const s = a * a + b * b;
    if (s > 9) {
      const t = 3 / Math.sqrt(s);
      m[i] = t * a * d[i];
      m[i + 1] = t * b * d[i];
    }
  }

  // Ogni tratto è una curva di Bézier: i due punti di controllo stanno a un
  // terzo della distanza, nella direzione della pendenza
  let percorso = `M${p[0].x},${p[0].y}`;
  for (let i = 0; i < n - 1; i++) {
    const dx = (p[i + 1].x - p[i].x) / 3;
    percorso +=
      ` C${p[i].x + dx},${p[i].y + m[i] * dx}` +
      ` ${p[i + 1].x - dx},${p[i + 1].y - m[i + 1] * dx}` +
      ` ${p[i + 1].x},${p[i + 1].y}`;
  }
  return percorso;
}

export default function GraficoCurva({
  valori,
  etichette,
  colore,
  massimo,
  griglia,
  formato = String,
  altezza = 180,
}: Props) {
  const theme = useTheme();
  const [larghezza, setLarghezza] = useState(0);
  // Un id diverso per ogni grafico, per la sfumatura (solo lettere e numeri:
  // useId contiene i due punti, che in url(#...) non funzionano)
  const sfumatura = "sfumatura" + useId().replace(/[^a-zA-Z0-9]/g, "");

  const area = { w: larghezza - SINISTRA - DESTRA, h: altezza - SOPRA - SOTTO };
  // Da un indice e da un valore alle coordinate sullo schermo.
  // In SVG la y cresce verso il basso: il valore 0 sta in fondo
  const xDi = (i: number) =>
    SINISTRA +
    (valori.length > 1 ? (i / (valori.length - 1)) * area.w : area.w / 2);
  const yDi = (v: number) => SOPRA + area.h - (v / massimo) * area.h;

  const punti = valori.flatMap((v, i) =>
    v === null ? [] : [{ x: xDi(i), y: yDi(v), v }],
  );
  const linea = curva(punti);
  // L'area sotto la curva: la curva, poi giù fino all'asse e indietro
  const base = SOPRA + area.h;
  const riempimento =
    punti.length > 1
      ? `${linea} L${punti[punti.length - 1].x},${base} L${punti[0].x},${base} Z`
      : "";
  const ultimo = punti[punti.length - 1];

  return (
    <View
      style={styles.contenitore}
      onLayout={(e) => setLarghezza(e.nativeEvent.layout.width)}
    >
      {larghezza > 0 && (
        <Svg width={larghezza} height={altezza}>
          <Defs>
            {/* Il colore sotto la curva sfuma verso il basso */}
            <LinearGradient id={sfumatura} x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={colore} stopOpacity={0.35} />
              <Stop offset="1" stopColor={colore} stopOpacity={0} />
            </LinearGradient>
          </Defs>

          {/* La griglia orizzontale, con i valori sull'asse y */}
          {griglia.map((g) => (
            <G key={g}>
              <Line
                x1={SINISTRA}
                x2={larghezza - DESTRA}
                y1={yDi(g)}
                y2={yDi(g)}
                stroke={theme.backgroundSelected}
                strokeWidth={1}
                strokeDasharray={g === 0 ? undefined : "3 4"}
              />
              <SvgText
                x={SINISTRA - 6}
                y={yDi(g) + 3}
                fontSize={10}
                fill={theme.textSecondary}
                textAnchor="end"
              >
                {formato(g)}
              </SvgText>
            </G>
          ))}

          {/* Le etichette sull'asse x */}
          {etichette.map((e, i) => (
            <SvgText
              key={i}
              x={xDi(i)}
              y={altezza - 4}
              fontSize={10}
              fill={theme.textSecondary}
              textAnchor="middle"
            >
              {e}
            </SvgText>
          ))}

          {riempimento !== "" && (
            <Path d={riempimento} fill={`url(#${sfumatura})`} />
          )}
          {punti.length > 1 && (
            <Path
              d={linea}
              fill="none"
              stroke={colore}
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Un punto per ogni valore; il colore dello sfondo al centro li
              fa sembrare "vuoti", tranne l'ultimo che è pieno */}
          {punti.map((p, i) => (
            <Circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={4}
              fill={p === ultimo ? colore : theme.background}
              stroke={colore}
              strokeWidth={2}
            />
          ))}

          {/* Il valore dell'ultimo punto, il più importante: dove sei ora */}
          {ultimo && (
            <SvgText
              x={ultimo.x}
              y={ultimo.y - 9}
              fontSize={11}
              fontWeight="bold"
              fill={colore}
              textAnchor={ultimo.x > larghezza - DESTRA - 20 ? "end" : "middle"}
            >
              {formato(ultimo.v)}
            </SvgText>
          )}
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
