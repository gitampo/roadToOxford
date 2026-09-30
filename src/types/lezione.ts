/**
 * Forma di una lezione.
 * Definisce quali campi ha una lezione; usato da data/lezioni.ts
 * e dalle schermate che la mostrano.
 */

import { Citazione } from "./citazione";

export type Lezione = {
    id: string;
    titolo: string;
    // Vecchio formato: tutto il testo in un'unica stringa.
    // Le lezioni già divise in riquadri non lo usano più.
    testo?: string;
    livello: string;
    citazione: Citazione;
    riquadri?: Riquadro[];
}

export type Esempio = {
  en: string;
  it?: string;
  // true se l'esempio mostra un errore da evitare
  sbagliato?: boolean;
};

export type Blocco =
  | { tipo: "testo"; testo: string }
  | { tipo: "esempi"; esempi: Esempio[] }
  | { tipo: "tabella"; righe: [string, string][] }
  | { tipo: "nota"; testo: string };

export type Riquadro = {
  titolo: string;
  blocchi: Blocco[];
};
