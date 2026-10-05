/**
 * I phrasal verbs conosciuti (verbo + particella), presi dal vocabolario
 * dell'app più i più comuni. Servono all'analisi logica: in "turn off the
 * light" off non è una preposizione con il suo complemento, ma fa parte del
 * verbo (turn off = spegnere), e "the light" è il complemento oggetto.
 */

import { VOCABOLARIO } from "@/data/vocabolario";

const PARTICELLE = new Set([
  "up",
  "down",
  "off",
  "on",
  "out",
  "in",
  "away",
  "back",
  "over",
  "around",
  "round",
  "through",
  "after",
  "for",
  "into",
  "about",
]);

const COMUNI = [
  "turn on",
  "turn off",
  "turn up",
  "turn down",
  "put on",
  "take off",
  "pick up",
  "give up",
  "give back",
  "look after",
  "look for",
  "look up",
  "find out",
  "fill in",
  "fill out",
  "switch on",
  "switch off",
  "put off",
  "put away",
  "throw away",
  "call off",
  "bring up",
  "carry on",
  "set up",
  "work out",
  "figure out",
  "make up",
  "try on",
  "write down",
  "wake up",
  "clean up",
  "hand in",
  "let down",
  "turn into",
  "run out",
];

let elenco: Set<string> | undefined;

// Vero se "base particella" è un phrasal verb conosciuto (turn off)
export function ePhrasal(base: string, particella: string) {
  if (!elenco) {
    elenco = new Set(COMUNI);
    for (const v of VOCABOLARIO)
      for (const e of v.phrasalVerbs ?? [])
        for (const alternativa of e.testo.toLowerCase().split(" / ")) {
          const [verbo, particella] = alternativa.trim().split(/\s+/);
          if (verbo && particella && PARTICELLE.has(particella))
            elenco.add(`${verbo} ${particella}`);
        }
  }
  return elenco.has(`${base} ${particella}`);
}
