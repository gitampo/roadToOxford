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

// Aggiunge una nota in cima all'elenco salvato (usato dalle lezioni, che non
// hanno l'elenco in memoria come la pagina Appunti)
export async function aggiungiNota(nota: Nota) {
  const note = await leggiNote();
  await salvaNote([nota, ...note]);
}

// Sostituisce una nota già salvata con la sua versione modificata (stesso id)
export async function aggiornaNota(nota: Nota) {
  const note = await leggiNote();
  await salvaNote(note.map((n) => (n.id === nota.id ? nota : n)));
}

// Il titolo di una nota presa da una lezione: le prime tre parole della
// porzione evidenziata, con i puntini se ce ne sono altre
export function titoloDaCitazione(citazione: string) {
  const parole = citazione.trim().split(/\s+/);
  return parole.slice(0, 3).join(" ") + (parole.length > 3 ? "…" : "");
}
