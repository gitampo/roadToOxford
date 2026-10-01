/**
 * Salvataggio dei progressi sul telefono (AsyncStorage).
 * Per ogni lezione si salvano le risposte agli esercizi e il risultato.
 */

import { Risultato, StatoEsercizio } from "@/types/lezione";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Progressi = {
  stati: Record<string, StatoEsercizio>;
  risultato: Risultato;
};

const chiave = (id: string) => `progressi:${id}`;

export async function leggiProgressi(id: string): Promise<Progressi | null> {
  try {
    const testo = await AsyncStorage.getItem(chiave(id));
    return testo ? (JSON.parse(testo) as Progressi) : null;
  } catch {
    return null;
  }
}

export async function salvaProgressi(id: string, progressi: Progressi) {
  try {
    await AsyncStorage.setItem(chiave(id), JSON.stringify(progressi));
  } catch {
    // Se il salvataggio fallisce, l'app continua a funzionare senza memoria
  }
}

export async function cancellaProgressi(id: string) {
  try {
    await AsyncStorage.removeItem(chiave(id));
  } catch {}
}

// Legge i risultati di più lezioni in una volta sola (per la lista delle lezioni)
export async function leggiRisultati(
  ids: string[],
): Promise<Record<string, Risultato>> {
  try {
    const coppie = await AsyncStorage.multiGet(ids.map(chiave));
    const risultati: Record<string, Risultato> = {};
    coppie.forEach(([, testo], i) => {
      if (testo) risultati[ids[i]] = (JSON.parse(testo) as Progressi).risultato;
    });
    return risultati;
  } catch {
    return {};
  }
}
