/**
 * Forma di una lezione.
 * Definisce quali campi ha una lezione; usato da data/lezioni.ts
 * e dalle schermate che la mostrano.
 */

import { Citazione } from "./citazione";

export type Lezione = {
    id: string;
    titolo: string;
    // A cosa serve la lezione, in una frase (dalla colonna "Uso" di Lezioni.md)
    descrizione?: string;
    // Parole chiave in italiano, utili anche per la ricerca
    chiavi?: string;
    // Vecchio formato: tutto il testo in un'unica stringa.
    // Le lezioni già divise in riquadri non lo usano più.
    testo?: string;
    livello: string;
    // Testo mostrato in alto al posto di "livello · Lezione id"
    sottotitolo?: string;
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
  // Una card che apre un'altra lezione (per esempio l'analisi di un testo)
  | { tipo: "apri"; id: string; titolo: string; descrizione?: string }
  // Un testo letterario (poesia o brano), una riga per verso.
  // evidenzia: [prima, ultima] riga da mettere in risalto (partendo da 0)
  // traduzione: una riga italiana per ogni riga del testo
  | {
      tipo: "brano";
      righe: string[];
      traduzione?: string[];
      evidenzia?: [number, number];
    }
  | { tipo: "nota"; testo: string }
  // Un titoletto per dividere un riquadro lungo in sezioni
  | { tipo: "sottotitolo"; testo: string }
  | Esercizio
  // Il riepilogo dei risultati di tutti gli esercizi della lezione
  | { tipo: "punteggio" };

// Campi comuni a tutti gli esercizi
type BaseEsercizio = {
  // Spiegazione mostrata dopo la risposta (può contenere rimandi "lezione 28{3}")
  spiegazione?: string;
  // Titolo del riquadro da rivedere se si sbaglia
  rivedi?: string;
};

export type Esercizio = BaseEsercizio &
  (
    // Domanda con più risposte, una sola giusta
    | {
        tipo: "sceltaMultipla";
        domanda: string;
        citazione?: string;
        opzioni: string[];
        giusta: number;
      }
    // Rimettere in ordine le parole (date già mescolate)
    | {
        tipo: "riordina";
        consegna: string;
        citazione?: string;
        parole: string[];
        soluzione: string[];
      }
    // Abbinare gli elementi delle due colonne
    | { tipo: "abbina"; consegna: string; coppie: [string, string][] }
    // Scrivere la parola mancante tra "prima" e "dopo"
    | {
        tipo: "completa";
        consegna: string;
        prima: string;
        dopo: string;
        risposte: string[];
      }
    // Toccare le parole (o sillabe) giuste
    | {
        tipo: "seleziona";
        consegna: string;
        parole: string[];
        giuste: number[];
        sillabe?: boolean;
      }
    // Tradurre liberamente, poi confrontare con la soluzione
    | { tipo: "traduci"; consegna: string; testo: string; soluzione: string }
    // Scrivere un breve testo, poi confrontarlo con un modello
    | {
        tipo: "scrivi";
        consegna: string;
        punti: string[];
        modello: string;
      }
  );

// Lo stato di un esercizio (la risposta data). "corretta" viene scritta
// quando l'esercizio è finito.
export type StatoEsercizio = { corretta?: boolean } & Record<string, unknown>;

// Il risultato degli esercizi di una lezione, salvato sul telefono
export type Risultato = { giuste: number; totale: number; risposte: number };

// Gli esercizi che hanno una risposta giusta e contano nel punteggio
export const ESERCIZI_CON_PUNTEGGIO = [
  "sceltaMultipla",
  "riordina",
  "abbina",
  "completa",
  "seleziona",
] as const;

export type Riquadro = {
  titolo: string;
  blocchi: Blocco[];
};
