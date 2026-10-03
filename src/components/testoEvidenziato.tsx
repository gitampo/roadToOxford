import { StyleProp, Text, TextStyle } from "react-native";
import { ThemedText } from "./themed-text";

// Una lettera senza accenti e in minuscolo ("È" → "e"). Si lavora lettera per
// lettera così il testo normalizzato ha la stessa lunghezza dell'originale e
// le posizioni trovate valgono per tutti e due
function normalizzaLettera(c: string) {
  return (
    c
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .charAt(0) || c
  );
}

function normalizza(testo: string) {
  return testo.split("").map(normalizzaLettera).join("");
}

// Vero se il testo contiene quello che si cerca (senza badare a maiuscole e
// accenti). Con la ricerca vuota tutto corrisponde
export function contiene(testo: string | undefined, cerca: string) {
  const q = normalizza(cerca.trim());
  return q === "" || (testo !== undefined && normalizza(testo).includes(q));
}

// Per le anteprime su una riga: se la parola cercata sta più avanti, il testo
// parte poco prima di lei (con i puntini), così si vede subito
export function estratto(testo: string, cerca: string, prima = 20) {
  const q = normalizza(cerca.trim());
  const i = q === "" ? -1 : normalizza(testo).indexOf(q);
  if (i <= prima + 5) return testo;
  // Parte dall'inizio di una parola, non a metà
  const da = testo.lastIndexOf(" ", i - prima) + 1;
  return "…" + testo.slice(da);
}

type Props = {
  testo: string;
  // Quello che si sta cercando: ogni volta che compare viene evidenziato
  cerca: string;
  // Il colore dell'evidenziatore (quello della pagina)
  colore: string;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
};

// Un testo con le parti cercate evidenziate, come con un evidenziatore
export default function TestoEvidenziato({
  testo,
  cerca,
  colore,
  style,
  numberOfLines,
}: Props) {
  const q = normalizza(cerca.trim());
  const pezzi: React.ReactNode[] = [];

  if (q !== "") {
    const n = normalizza(testo);
    let ultimo = 0;
    let i = n.indexOf(q);
    while (i !== -1) {
      if (i > ultimo) pezzi.push(testo.slice(ultimo, i));
      pezzi.push(
        <Text key={i} style={{ backgroundColor: colore + "59" }}>
          {testo.slice(i, i + q.length)}
        </Text>,
      );
      ultimo = i + q.length;
      i = n.indexOf(q, ultimo);
    }
    if (ultimo < testo.length) pezzi.push(testo.slice(ultimo));
  }

  return (
    <ThemedText style={style} numberOfLines={numberOfLines}>
      {q === "" ? testo : pezzi}
    </ThemedText>
  );
}
