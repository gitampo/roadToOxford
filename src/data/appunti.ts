/**
 * Salvataggio degli appunti sul telefono (AsyncStorage).
 * Tutte le note stanno in un unico elenco, sotto la chiave "appunti".
 */

import { Nota } from "@/types/nota";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Platform } from "react-native";

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

// Toglie una nota dall'elenco salvato
export async function eliminaNota(id: string) {
  const note = await leggiNote();
  await salvaNote(note.filter((n) => n.id !== id));
}

// Chiede conferma prima di eliminare: sul telefono con l'avviso di sistema,
// sul web con quello del browser (Alert lì non mostra i pulsanti)
export function confermaEliminazione(titolo: string, onConferma: () => void) {
  const messaggio = `"${titolo}" verrà eliminata. L'operazione non si può annullare.`;
  if (Platform.OS === "web") {
    if (window.confirm(messaggio)) onConferma();
    return;
  }
  Alert.alert("Eliminare la nota?", messaggio, [
    { text: "Annulla", style: "cancel" },
    { text: "Elimina", style: "destructive", onPress: onConferma },
  ]);
}

// Il titolo di una nota presa da una lezione: le prime tre parole della
// porzione evidenziata, con i puntini se ce ne sono altre
export function titoloDaCitazione(citazione: string) {
  const parole = citazione.trim().split(/\s+/);
  return parole.slice(0, 3).join(" ") + (parole.length > 3 ? "…" : "");
}
