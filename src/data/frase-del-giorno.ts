/**
 * La frase del giorno: la citazione di una lezione, diversa ogni giorno.
 * Le citazioni sono scelte per legarsi a quello che la lezione insegna,
 * quindi chi non capisce la frase sa quale lezione aprire.
 */

import { LEZIONI } from "@/data/lezioni";
import { Lezione } from "@/types/lezione";

// Le lezioni che hanno una citazione da mostrare
const CON_CITAZIONE = LEZIONI.filter((l) => l.citazione?.testo);

// Il numero del giorno (cambia a mezzanotte, ora locale): un giorno, una lezione.
// Si scorrono le lezioni in ordine e, finito il giro, si ricomincia
export function lezioneDelGiorno(data = new Date()): Lezione {
  const giorno = Math.floor(
    Date.UTC(data.getFullYear(), data.getMonth(), data.getDate()) / 86_400_000,
  );
  return CON_CITAZIONE[giorno % CON_CITAZIONE.length];
}
