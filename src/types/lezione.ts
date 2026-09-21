/**
 * Forma di una lezione.
 * Definisce quali campi ha una lezione; usato da data/lezioni.ts
 * e dalle schermate che la mostrano.
 */

import { Citazione } from "./citazione";

export type Lezione = {
    id: string;
    titolo: string;
    testo: string;
    livello: string;
    citazione: Citazione;
}