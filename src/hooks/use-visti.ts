import { leggiVisti } from "@/data/progressi";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

// Legge i riquadri visti di alcune lezioni.
// Come useRisultati, si aggiorna ogni volta che la schermata torna visibile.
export function useVisti(ids: string[]) {
  const [visti, setVisti] = useState<Record<string, number[]>>({});
  const chiave = ids.join(",");

  useFocusEffect(
    useCallback(() => {
      let attivo = true;
      leggiVisti(chiave.split(",")).then((v) => {
        if (attivo) setVisti(v);
      });
      return () => {
        attivo = false;
      };
    }, [chiave]),
  );

  return visti;
}
