import { leggiStorico, Storico } from "@/data/progressi";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

// Legge lo storico dello studio giorno per giorno.
// Come useRisultati, si aggiorna ogni volta che la schermata torna visibile:
// dopo una lezione il grafico mostra subito quello che si è appena fatto.
export function useStorico() {
  const [storico, setStorico] = useState<Storico>({});

  useFocusEffect(
    useCallback(() => {
      let attivo = true;
      leggiStorico().then((s) => {
        if (attivo) setStorico(s);
      });
      return () => {
        attivo = false;
      };
    }, []),
  );

  return storico;
}
