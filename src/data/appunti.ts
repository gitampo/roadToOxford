/**
 * Salvataggio degli appunti sul telefono (AsyncStorage).
 * Tutte le note stanno in un unico elenco, sotto la chiave "appunti".
 */

import { Nota } from "@/types/nota";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CHIAVE = "appunti";

export async function leggiNote(): Promise<Nota[]> {
  try {
    const testo = await AsyncStorage.getItem(CHIAVE);
    return testo ? (JSON.parse(testo) as Nota[]) : [];
  } catch {
    return [];
  }
}

export async function salvaNote(note: Nota[]) {
  try {
    await AsyncStorage.setItem(CHIAVE, JSON.stringify(note));
  } catch {
    // Se il salvataggio fallisce, l'app continua a funzionare senza memoria
  }
}
