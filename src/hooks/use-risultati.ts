import { leggiRisultati } from "@/data/progressi";
import { Risultato } from "@/types/lezione";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

// Legge i risultati salvati di alcune lezioni.
// Si aggiorna ogni volta che la schermata torna visibile,
// così dopo aver fatto gli esercizi la lista mostra il nuovo risultato.
export function useRisultati(ids: string[]) {
  const [risultati, setRisultati] = useState<Record<string, Risultato>>({});
  const chiave = ids.join(",");

  useFocusEffect(
    useCallback(() => {
      let attivo = true;
      leggiRisultati(chiave.split(",")).then((r) => {
        if (attivo) setRisultati(r);
      });
      return () => {
        attivo = false;
      };
    }, [chiave]),
  );

  return risultati;
}
