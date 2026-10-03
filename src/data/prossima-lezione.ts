/**
 * La "prossima fermata" del tabellone della home: la prima lezione, nell'ordine
 * del corso, che non è ancora completata.
 * Una lezione è completata quando sono stati aperti tutti i suoi riquadri e,
 * se ha esercizi con punteggio, sono stati fatti tutti.
 */

import { LEZIONI } from "@/data/lezioni";
import { ESERCIZI_CON_PUNTEGGIO, Lezione, Risultato } from "@/types/lezione";

function contaEsercizi(lezione: Lezione) {
  return (lezione.riquadri ?? []).reduce(
    (somma, r) =>
      somma +
      r.blocchi.filter((b) =>
        (ESERCIZI_CON_PUNTEGGIO as readonly string[]).includes(b.tipo),
      ).length,
    0,
  );
}

export function lezioneCompletata(
  lezione: Lezione,
  visti: number[] | undefined,
  risultato: Risultato | undefined,
) {
  const riquadri = lezione.riquadri?.length ?? 0;
  for (let pagina = 1; pagina <= riquadri; pagina++) {
    if (!visti?.includes(pagina)) return false;
  }
  const esercizi = contaEsercizi(lezione);
  return esercizi === 0 || (risultato?.risposte ?? 0) >= esercizi;
}

// undefined = tutte le lezioni completate: si è arrivati a Oxford
export function prossimaLezione(
  visti: Record<string, number[]>,
  risultati: Record<string, Risultato>,
): Lezione | undefined {
  return LEZIONI.find(
    (l) => !lezioneCompletata(l, visti[l.id], risultati[l.id]),
  );
}
