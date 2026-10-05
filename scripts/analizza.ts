/**
 * Prova il motore di analisi della frase da terminale, senza aprire l'app.
 *   npx tsx scripts/analizza.ts "She has lived in Rome since 2015."
 * Senza frasi, analizza tutta la banca degli esercizi (src/analisi/frasi.ts):
 * utile dopo ogni modifica al motore, per controllare che le risposte
 * giuste degli esercizi siano ancora giuste.
 */

// Le lezioni (usate per i modi di dire) caricano le immagini con require:
// in Node non servono, quindi valgono 0
const estensioni = (
  require as unknown as {
    extensions: Record<string, (m: { exports: unknown }) => void>;
  }
).extensions;
for (const est of [".jpg", ".jpeg", ".png", ".webp"])
  estensioni[est] = (m) => {
    m.exports = 0;
  };

async function main() {
  const { analizza, unisci } = await import("../src/analisi");
  const { FRASI } = await import("../src/analisi/frasi");
  const frasi = process.argv.slice(2).length
    ? process.argv.slice(2)
    : FRASI.map((f) => f.testo);

  for (const f of frasi) {
    for (const a of analizza(f)) {
      console.log(`\n=== ${a.testo}`);
      console.log(
        "  grammaticale: " +
          a.grammaticale.map((v) => `${v.testo} = ${v.categoria}`).join(" | "),
      );
      for (const p of a.proposizioni) {
        const elementi = p.elementi.map((e) => {
          const testo =
            e.da < 0
              ? `(${e.nota})`
              : unisci(
                  a.parole,
                  e.indici ??
                    Array.from({ length: e.a - e.da + 1 }, (_, k) => e.da + k),
                );
          return `${testo} = ${e.ruolo}`;
        });
        console.log(`  ${p.tipo}: ${elementi.join(" | ")}`);
      }
      const s = a.semantica;
      console.log(
        `  semantica: ${s.tipo}; ${s.verbi.map((v) => `${v.testo} → ${v.tempo} (${v.significato})`).join(", ")}${s.ipotetico ? `; ${s.ipotetico.tipo}` : ""}`,
      );
      for (const o of s.senso)
        console.log(`  senso [${o.tipo}] ${o.titolo}: ${o.testo}`);
      for (const r of s.ruoli)
        console.log(
          `  ruoli [${r.proposizione}] ${r.voci.map((v) => `${v.etichetta}: ${v.testo}`).join(" · ")}`,
        );
      if (s.errori.length)
        console.log(
          "  errori: " +
            s.errori.map((e) => `${e.testo} → ${e.correzione}`).join(" | "),
        );
    }
  }
}

main();
