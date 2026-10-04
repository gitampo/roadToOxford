/**
 * Forma di un appunto.
 * Le note scritte dalla pagina Appunti hanno titolo e descrizione; quelle
 * prese dentro una lezione hanno anche la porzione di testo evidenziata
 * (citazione), l'appunto scritto (testo) e la lezione da cui vengono.
 */

export type Nota = {
  id: string;
  titolo: string;
  descrizione?: string;
  // L'appunto scritto sulla porzione evidenziata
  testo?: string;
  // La porzione di testo evidenziata nella lezione
  citazione?: string;
  // Da dove viene, per poterci tornare: lezione e riquadro (da 1)
  lezione?: { id: string; titolo: string; pagina: number; riquadro: string };
  // Dove sta la porzione evidenziata nel riquadro, per continuare a
  // mostrarla: il testo (chiave del blocco) e le parole, da 0 (vedi
  // TestoConRimandi). Manca nelle note prese sul web: lì si cerca la citazione
  posizione?: { chiave: string; da: number; a: number };
  data: number;
};
