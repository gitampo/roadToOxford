/**
 * Forma di una voce del vocabolario.
 * Definisce quali campi ha una parola; usato da data/vocabolario e dalle
 * schermate del vocabolario (lista e dettaglio).
 *
 * Una voce è una parola inglese. Si divide in usi (verbo, sostantivo...), ogni
 * uso in significati, e ogni significato ha le sue traduzioni ed esempi.
 * La ricerca dall'italiano si ricava dalle traduzioni: non va scritta a parte.
 */

import { Esempio } from "./lezione";

export type Categoria =
  | "verbo"
  | "sostantivo"
  | "aggettivo"
  | "avverbio"
  | "pronome"
  | "preposizione"
  | "congiunzione"
  | "interiezione";

export type Significato = {
  // Quale significato è, in breve: serve a scegliere la traduzione giusta
  // (per esempio "di una macchina" per run → funzionare)
  indicazione?: string;
  traduzioni: string[];
  // Registro, varietà, ambito: "informale", "US", "legale"...
  etichette?: string[];
  esempi?: Esempio[];
};

// La parola usata come verbo, come sostantivo...
export type Uso = {
  categoria: Categoria;
  // Per esempio "transitivo", "intransitivo", "numerabile"
  dettaglio?: string;
  // Solo se la pronuncia cambia con la categoria (record: /ˈrekɔːd/ nome,
  // /rɪˈkɔːd/ verbo); altrimenti vale quella della voce
  fonetica?: string;
  // Le forme della parola: "runs · ran · run · running"
  forme?: string;
  significati: Significato[];
};

// Un phrasal verb o un'espressione: una voce in miniatura
export type Espressione = {
  testo: string;
  significati: Significato[];
};

export type Voce = {
  // Stabile: si usa nell'indirizzo della pagina e nei collegamenti
  id: string;
  parola: string;
  fonetica: string;
  // Una frase sola, quella del significato più diffuso; per i falsi amici
  // l'avvertenza ("significa 'in realtà', non 'attualmente'")
  descrizione: string;
  usi: Uso[];
  phrasalVerbs?: Espressione[];
  espressioni?: Espressione[];
  // Se è un falso amico: la parola italiana che le somiglia e cosa cambia.
  // Le voci con questo campo compaiono anche nella linguetta "Falsi amici"
  falsoAmico?: { parola: string; spiegazione: string };
  // Errori tipici degli italiani, uno per riga (tipo "nota")
  attenzione?: string[];
  // Le lezioni in cui si parla della parola: id della lezione e numero del
  // riquadro (da 1), come nei rimandi "lezione 28{3}"
  lezioni?: { id: string; riquadro: number }[];
};
