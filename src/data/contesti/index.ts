/**
 * Gli esercizi "Impara dal contesto": una situazione (breve o di qualche
 * riga) e una consegna; lo studente scrive la frase inglese adatta.
 * Ogni contesto ha:
 * - soluzioni: le frasi accettate (la prima è quella mostrata);
 * - tempo: il tempo o la forma verbale che serve, come la chiama l'analisi
 *   (serve al correttore per dire "hai usato X, qui serve Y");
 * - parole: il vocabolario che serve (italiano → inglese, con una nota se
 *   utile), il primo suggerimento da sbloccare: non sapere come si dice
 *   «occhiali di protezione» non deve impedire di allenare il tempo verbale.
 *   Solo parole di contenuto, mai la struttura che l'esercizio allena (il
 *   modale, l'ausiliare, for/since, than, by, there is, used to, wish...);
 * - suggerimenti: da sbloccare uno alla volta; aiutano a ragionare senza
 *   dare la soluzione. Il primo è una domanda sul tempo/modo verbale (quando
 *   succede? è finito?), il secondo indica la forma generale del tempo senza
 *   le parole della risposta: le scelte decisive restano allo studente;
 * - simile: l'ultimo suggerimento, una frase inglese simile a quella giusta
 *   ma su un altro argomento (stessa struttura, parole diverse);
 * - spiegazione e lezione: perché la soluzione è quella.
 */

import { CONTESTI_A1 } from "./a1";
import { CONTESTI_A2 } from "./a2";
import { CONTESTI_B1 } from "./b1";
import { CONTESTI_B2 } from "./b2";

// Una voce del vocabolario: [italiano, inglese, nota]. Le alternative
// inglesi sono separate da " / "
export type Parola = [string, string, string?];

export type Contesto = {
  id: string;
  livello: "A1" | "A2" | "B1" | "B2-C1";
  contesto: string;
  consegna: string;
  soluzioni: string[];
  tempo: string;
  parole: Parola[];
  suggerimenti: string[];
  simile: string;
  spiegazione: string;
  lezione?: string;
};

export const CONTESTI: Contesto[] = [
  ...CONTESTI_A1,
  ...CONTESTI_A2,
  ...CONTESTI_B1,
  ...CONTESTI_B2,
];
