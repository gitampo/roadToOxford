/**
 * Quanto è avanzato lo studente in una lezione.
 * Usato dalla lista delle lezioni (la barra di ogni card) e dalla pagina dei
 * miglioramenti (il riepilogo per livello): i conti sono gli stessi.
 */

import { LEZIONI } from "@/data/lezioni";
import { TESTI } from "@/data/testi";
import { ESERCIZI_CON_PUNTEGGIO, Lezione, Risultato } from "@/types/lezione";

const conPunteggio = ESERCIZI_CON_PUNTEGGIO as readonly string[];

const trova = (id: string) => [...LEZIONI, ...TESTI].find((l) => l.id === id);

// Quanti esercizi con punteggio ha una lezione (senza contare i testi)
function contaEsercizi(lezione: Lezione | undefined) {
  return (lezione?.riquadri ?? []).reduce(
    (somma, r) =>
      somma + r.blocchi.filter((b) => conPunteggio.includes(b.tipo)).length,
    0,
  );
}

// I numeri dei riquadri di teoria (quelli senza esercizi con punteggio)
function riquadriTeoria(lezione: Lezione | undefined) {
  return (lezione?.riquadri ?? []).flatMap((r, i) =>
    r.blocchi.some((b) => conPunteggio.includes(b.tipo)) ? [] : [i + 1],
  );
}

// Gli id di una lezione e dei testi che apre (come il Sonetto 18 nel C3)
export function idCollegati(lezione: Lezione) {
  const testi = (lezione.riquadri ?? []).flatMap((r) =>
    r.blocchi.flatMap((b) => (b.tipo === "apri" ? [b.id] : [])),
  );
  return [lezione.id, ...testi];
}

// Riquadri di teoria aperti + risposte giuste (fatti), sul totale di
// riquadri di teoria ed esercizi (daFare), contando anche i testi collegati
export function avanzamento(
  lezione: Lezione,
  risultati: Record<string, Risultato>,
  visti: Record<string, number[]>,
) {
  let fatti = 0;
  let daFare = 0;
  for (const id of idCollegati(lezione)) {
    const l = trova(id);
    const teoria = riquadriTeoria(l);
    daFare += teoria.length + contaEsercizi(l);
    fatti +=
      teoria.filter((p) => visti[id]?.includes(p)).length +
      (risultati[id]?.giuste ?? 0);
  }
  return { fatti, daFare };
}
