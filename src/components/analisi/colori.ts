/**
 * I colori dell'analisi della frase: uno per ogni categoria grammaticale e
 * uno per ogni famiglia di ruoli dell'analisi logica.
 * Ogni colore ha due versioni: chiara per il tema scuro (si legge sul nero)
 * e scura per il tema chiaro (si legge sul bianco). usePalette sceglie
 * quella giusta.
 */

import type { Categoria } from "@/analisi";
import { useColorScheme } from "@/hooks/use-color-scheme";

// [tema scuro, tema chiaro]
const CATEGORIE_COLORI: Record<Categoria, [string, string]> = {
  nome: ["#4da3ff", "#2563eb"],
  verbo: ["#ff6b6b", "#dc2626"],
  aggettivo: ["#4ade80", "#16a34a"],
  avverbio: ["#a78bfa", "#7c3aed"],
  pronome: ["#22d3ee", "#0891b2"],
  articolo: ["#94a3b8", "#64748b"],
  preposizione: ["#f59e0b", "#d97706"],
  congiunzione: ["#f472b6", "#db2777"],
  numerale: ["#eab308", "#a16207"],
  interiezione: ["#fb923c", "#ea580c"],
};

const BLU: [string, string] = ["#4da3ff", "#2563eb"];
const ROSSO: [string, string] = ["#ff6b6b", "#dc2626"];
const VERDE: [string, string] = ["#4ade80", "#16a34a"];
const ARANCIONE: [string, string] = ["#f59e0b", "#d97706"];
const VIOLA: [string, string] = ["#a78bfa", "#7c3aed"];
const GRIGIO: [string, string] = ["#94a3b8", "#64748b"];

export function usePalette() {
  const v = useColorScheme() === "dark" ? 0 : 1;
  const categoria = Object.fromEntries(
    Object.entries(CATEGORIE_COLORI).map(([c, colori]) => [c, colori[v]]),
  ) as Record<Categoria, string>;

  return {
    categoria,
    verde: VERDE[v],
    rosso: ROSSO[v],
    // Il colore di un ruolo dell'analisi logica, per famiglia
    ruolo(ruolo: string) {
      if (ruolo.startsWith("soggetto")) return BLU[v];
      if (
        [
          "predicato verbale",
          "copula",
          "nome del predicato",
          "complemento predicativo del soggetto",
        ].includes(ruolo)
      )
        return ROSSO[v];
      if (ruolo === "complemento oggetto") return VERDE[v];
      if (ruolo.startsWith("complemento")) return ARANCIONE[v];
      if (ruolo.includes("coda")) return VIOLA[v];
      return GRIGIO[v];
    },
    // Il colore dell'etichetta di una proposizione
    proposizione(tipo: string) {
      if (tipo === "principale") return VERDE[v];
      if (tipo.startsWith("coordinata")) return BLU[v];
      if (tipo.includes("tag")) return VIOLA[v];
      return ARANCIONE[v];
    },
  };
}

export type Palette = ReturnType<typeof usePalette>;
