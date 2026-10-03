/**
 * Il vocabolario: tutte le voci, in ordine alfabetico, e le funzioni per
 * cercarle. Le voci stanno in un file per lettera (a.ts, b.ts...): per
 * aggiungere una lettera, crea il file e aggiungilo a TUTTE qui sotto.
 */

import { Categoria, Voce } from "@/types/vocabolario";
import { A } from "./a";
import { B } from "./b";
import { C } from "./c";
import { D } from "./d";
import { E } from "./e";
import { F } from "./f";
import { G } from "./g";
import { H } from "./h";
import { I } from "./i";
import { J } from "./j";
import { K } from "./k";
import { L } from "./l";
import { M } from "./m";
import { N } from "./n";
import { O } from "./o";
import { P } from "./p";
import { Q } from "./q";
import { R } from "./r";
import { S } from "./s";
import { T } from "./t";
import { U } from "./u";
import { V } from "./v";
import { W } from "./w";
import { X } from "./x";
import { Y } from "./y";
import { Z } from "./z";

const TUTTE = [
  ...A,
  ...B,
  ...C,
  ...D,
  ...E,
  ...F,
  ...G,
  ...H,
  ...I,
  ...J,
  ...K,
  ...L,
  ...M,
  ...N,
  ...O,
  ...P,
  ...Q,
  ...R,
  ...S,
  ...T,
  ...U,
  ...V,
  ...W,
  ...X,
  ...Y,
  ...Z,
];

export const VOCABOLARIO: Voce[] = TUTTE.sort((a, b) =>
  a.parola.localeCompare(b.parola, "en"),
);

// Minuscole, senza accenti e senza spazi ai lati, per confrontare i testi
export function normalizza(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Tutte le traduzioni di un gruppo di significati, senza doppioni
function traduzioniDi(significati: { traduzioni: string[] }[]) {
  return [...new Set(significati.flatMap((s) => s.traduzioni))];
}

// Le traduzioni della voce divise per categoria, nell'ordine in cui compaiono.
// I due usi "verbo transitivo" e "verbo intransitivo" finiscono insieme
export function traduzioniPerCategoria(voce: Voce) {
  const gruppi: { categoria: Categoria; traduzioni: string[] }[] = [];
  for (const uso of voce.usi) {
    const gruppo = gruppi.find((g) => g.categoria === uso.categoria);
    const traduzioni = traduzioniDi(uso.significati);
    if (gruppo)
      gruppo.traduzioni = [...new Set([...gruppo.traduzioni, ...traduzioni])];
    else gruppi.push({ categoria: uso.categoria, traduzioni });
  }
  return gruppi;
}

// Le pronunce diverse da quella principale (record: il verbo è /rɪˈkɔːd/)
export function altrePronunce(voce: Voce) {
  return voce.usi.flatMap((u) =>
    u.fonetica && u.fonetica !== voce.fonetica
      ? [{ categoria: u.categoria, fonetica: u.fonetica }]
      : [],
  );
}

// Vero se la traduzione contiene il testo cercato
export function traduzioneCorrisponde(traduzione: string, query: string) {
  return normalizza(traduzione).includes(normalizza(query));
}

// Cerca in inglese: la parola, i phrasal verbs e le espressioni
// Cerca in italiano: tutte le traduzioni, anche di phrasal verbs ed espressioni
export function cerca(query: string, lingua: "en" | "it") {
  const q = normalizza(query);
  if (q === "") return VOCABOLARIO;
  return VOCABOLARIO.filter((voce) => {
    const extra = [...(voce.phrasalVerbs ?? []), ...(voce.espressioni ?? [])];
    if (lingua === "en")
      return [voce.parola, ...extra.map((e) => e.testo)].some((t) =>
        normalizza(t).includes(q),
      );
    return [...voce.usi, ...extra]
      .flatMap((u) => traduzioniDi(u.significati))
      .some((t) => traduzioneCorrisponde(t, q));
  });
}

// Le voci divise per iniziale, per la lista e la colonna delle lettere
export function perLettera(voci: Voce[]) {
  const sezioni: { lettera: string; data: Voce[] }[] = [];
  for (const voce of voci) {
    const lettera = voce.parola.charAt(0).toUpperCase();
    const ultima = sezioni[sezioni.length - 1];
    if (ultima?.lettera === lettera) ultima.data.push(voce);
    else sezioni.push({ lettera, data: [voce] });
  }
  return sezioni;
}
