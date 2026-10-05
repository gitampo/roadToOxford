/**
 * Un esercizio di analisi ("Analizza tu"): l'app mostra una frase e lo
 * studente ne fa l'analisi grammaticale, logica o semantica.
 * Una domanda alla volta: in alto la frase con le parole della domanda
 * evidenziate, poi la domanda; la risposta si corregge subito, con la
 * spiegazione, e "Avanti" passa alla prossima. Alla fine il punteggio.
 * Ogni risposta conta nelle statistiche (come gli esercizi delle lezioni).
 */

import type { AnalisiFrase, Categoria } from "@/analisi";
import {
  Domanda,
  eserciziGrammaticali,
  eserciziLogici,
  eserciziSemantici,
} from "@/analisi/esercizi";
import { Spacing } from "@/constants/theme";
import { registraAttivita } from "@/data/progressi";
import { useTheme } from "@/hooks/use-theme";
import { traduzioneNota } from "@/data/traduzioni";
import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../themed-text";
import { usePalette } from "./colori";

export type TipoEsercizio = "Grammaticale" | "Logica" | "Semantica";

const GUIDA: Record<TipoEsercizio, string> = {
  Grammaticale:
    "Di ogni parola evidenziata scegli la parte del discorso. I verbi fatti di più parole (has been living) contano come uno.",
  Logica:
    "Di ogni parte evidenziata scegli il ruolo che ha nell'analisi logica.",
  Semantica: "Rispondi alle domande sul significato della frase.",
};

export default function EsercizioAnalisi({
  analisi,
  tipo,
  colore,
  onNuova,
}: {
  analisi: AnalisiFrase;
  tipo: TipoEsercizio;
  colore: string;
  onNuova: () => void;
}) {
  const theme = useTheme();
  const pal = usePalette();
  // giro cambia con "Rifai": le opzioni si rimescolano
  const [giro, setGiro] = useState(0);
  const domande = useMemo<Domanda[]>(
    () =>
      tipo === "Grammaticale"
        ? eserciziGrammaticali(analisi)
        : tipo === "Logica"
          ? eserciziLogici(analisi)
          : eserciziSemantici(analisi),
    // giro serve solo a rimescolare
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [analisi, tipo, giro],
  );
  const [indice, setIndice] = useState(0);
  // La traduzione si vede solo a richiesta: è un aiuto, non la risposta
  const [vediTraduzione, setVediTraduzione] = useState(false);
  const traduzione = traduzioneNota(analisi.testo);
  const [risposte, setRisposte] = useState<(number | undefined)[]>([]);

  const finito = indice >= domande.length;
  const d = domande[Math.min(indice, domande.length - 1)];
  const data = risposte[indice];
  const giuste = domande.filter((q, i) => risposte[i] === q.giusta).length;
  const evidenziate = new Set(finito ? [] : (d?.indici ?? []));

  function rispondi(scelta: number) {
    if (data !== undefined || !d) return;
    setRisposte((r) => {
      const nuove = [...r];
      nuove[indice] = scelta;
      return nuove;
    });
    registraAttivita({ risposte: 1, giuste: scelta === d.giusta ? 1 : 0 });
  }

  function rifai() {
    setGiro((g) => g + 1);
    setIndice(0);
    setRisposte([]);
  }

  return (
    <View style={styles.contenitore}>
      {/* La frase, con le parole della domanda evidenziate */}
      <View
        style={[styles.frase, { backgroundColor: theme.backgroundElement }]}
      >
        <Text style={[styles.testoFrase, { color: theme.text }]}>
          {analisi.parole.map((p, i) => {
            const su = evidenziate.has(i);
            return (
              <Text key={i}>
                {i > 0 && !/^'|^n't$/.test(p.testo) ? " " : ""}
                <Text
                  style={
                    su && {
                      color: colore,
                      backgroundColor: colore + "26",
                      textDecorationLine: "underline",
                      textDecorationColor: colore,
                    }
                  }
                >
                  {p.testo}
                </Text>
                {p.dopo}
              </Text>
            );
          })}
        </Text>
        {vediTraduzione && traduzione && (
          <ThemedText
            style={[
              styles.piccolo,
              { color: theme.textSecondary, fontStyle: "italic" },
            ]}
          >
            {traduzione.testo}
          </ThemedText>
        )}
        <View style={styles.comandiFrase}>
          {traduzione ? (
            <Pressable onPress={() => setVediTraduzione((x) => !x)} hitSlop={8}>
              <ThemedText
                style={[styles.testoNuova, { color: theme.textSecondary }]}
              >
                {vediTraduzione ? "Nascondi traduzione" : "Mostra traduzione"}
              </ThemedText>
            </Pressable>
          ) : (
            <View />
          )}
          <Pressable onPress={onNuova} hitSlop={8} style={styles.nuova}>
            <ThemedText style={[styles.testoNuova, { color: colore }]}>
              Nuova frase ↻
            </ThemedText>
          </Pressable>
        </View>
      </View>

      {domande.length === 0 ? (
        <ThemedText style={[styles.piccolo, { color: theme.textSecondary }]}>
          Per questa frase non ci sono domande di questo tipo: prova con
          un&apos;altra.
        </ThemedText>
      ) : finito ? (
        <Risultato
          domande={domande}
          risposte={risposte}
          giuste={giuste}
          colore={colore}
          onRifai={rifai}
          onNuova={onNuova}
        />
      ) : (
        <>
          {indice === 0 && data === undefined && (
            <ThemedText
              style={[styles.piccolo, { color: theme.textSecondary }]}
            >
              {GUIDA[tipo]}
            </ThemedText>
          )}

          {/* Avanzamento */}
          <View style={styles.avanzamento}>
            <View style={styles.rigaAvanzamento}>
              <ThemedText
                style={[styles.etichetta, { color: theme.textSecondary }]}
              >
                Domanda {indice + 1} di {domande.length}
              </ThemedText>
              <ThemedText style={[styles.etichetta, { color: pal.verde }]}>
                ✓ {giuste}
              </ThemedText>
            </View>
            <View
              style={[
                styles.binario,
                { backgroundColor: theme.backgroundElement },
              ]}
            >
              <View
                style={[
                  styles.riempimento,
                  {
                    width: `${((indice + (data !== undefined ? 1 : 0)) / domande.length) * 100}%`,
                    backgroundColor: colore,
                  },
                ]}
              />
            </View>
          </View>

          {/* La domanda */}
          <View
            style={[styles.domanda, { borderColor: theme.backgroundSelected }]}
          >
            <ThemedText
              style={[styles.etichetta, { color: theme.textSecondary }]}
            >
              {d.domanda}
            </ThemedText>
            {d.testo && (
              <ThemedText style={[styles.bersaglio, { color: colore }]}>
                {d.testo}
              </ThemedText>
            )}

            <View
              style={tipo === "Grammaticale" ? styles.griglia : styles.colonna}
            >
              {d.opzioni.map((o, j) => {
                const giusta = data !== undefined && j === d.giusta;
                const sbagliata = data === j && j !== d.giusta;
                const spenta = data !== undefined && !giusta && !sbagliata;
                const pallino =
                  tipo === "Grammaticale"
                    ? pal.categoria[o as Categoria]
                    : undefined;
                return (
                  <Pressable
                    key={o}
                    disabled={data !== undefined}
                    onPress={() => rispondi(j)}
                    style={({ pressed }) => [
                      tipo === "Grammaticale"
                        ? styles.opzioneGriglia
                        : styles.opzione,
                      {
                        borderColor: giusta
                          ? pal.verde
                          : sbagliata
                            ? pal.rosso
                            : theme.backgroundSelected,
                        backgroundColor: giusta
                          ? pal.verde + "22"
                          : sbagliata
                            ? pal.rosso + "22"
                            : pressed
                              ? theme.backgroundElement
                              : "transparent",
                      },
                      spenta && { opacity: 0.45 },
                    ]}
                  >
                    {pallino && (
                      <View
                        style={[styles.pallino, { backgroundColor: pallino }]}
                      />
                    )}
                    <ThemedText style={styles.testoOpzione}>{o}</ThemedText>
                    {(giusta || sbagliata) && (
                      <ThemedText
                        style={[
                          styles.segno,
                          { color: giusta ? pal.verde : pal.rosso },
                        ]}
                      >
                        {giusta ? "✓" : "✗"}
                      </ThemedText>
                    )}
                  </Pressable>
                );
              })}
            </View>

            {data !== undefined && (
              <View
                style={[
                  styles.spiegazione,
                  { backgroundColor: theme.backgroundElement },
                ]}
              >
                <ThemedText
                  style={[
                    styles.esito,
                    { color: data === d.giusta ? pal.verde : pal.rosso },
                  ]}
                >
                  {data === d.giusta
                    ? "Giusto!"
                    : `Era: ${d.opzioni[d.giusta]}`}
                </ThemedText>
                {d.spiegazione ? (
                  <ThemedText
                    style={[styles.piccolo, { color: theme.textSecondary }]}
                  >
                    {d.spiegazione}
                  </ThemedText>
                ) : null}
              </View>
            )}
          </View>

          {data !== undefined && (
            <Pressable
              onPress={() => setIndice((i) => i + 1)}
              style={({ pressed }) => [
                styles.bottone,
                { backgroundColor: colore },
                pressed && { opacity: 0.8 },
              ]}
            >
              <ThemedText style={styles.testoBottone}>
                {indice === domande.length - 1
                  ? "Vedi il risultato"
                  : "Avanti →"}
              </ThemedText>
            </Pressable>
          )}
        </>
      )}
    </View>
  );
}

// Il punteggio finale: il numero grande, un pallino per domanda (verde o
// rosso) e i bottoni per rifare o cambiare frase
function Risultato({
  domande,
  risposte,
  giuste,
  colore,
  onRifai,
  onNuova,
}: {
  domande: Domanda[];
  risposte: (number | undefined)[];
  giuste: number;
  colore: string;
  onRifai: () => void;
  onNuova: () => void;
}) {
  const theme = useTheme();
  const pal = usePalette();
  const tutto = giuste === domande.length;
  const quota = giuste / domande.length;
  return (
    <View
      style={[styles.risultato, { backgroundColor: theme.backgroundElement }]}
    >
      <ThemedText style={[styles.etichetta, { color: theme.textSecondary }]}>
        Il tuo risultato
      </ThemedText>
      <ThemedText
        style={[styles.cifra, { color: tutto ? pal.verde : theme.text }]}
      >
        {giuste}
        <Text style={{ color: theme.textSecondary, fontSize: 24 }}>
          {" "}
          / {domande.length}
        </Text>
      </ThemedText>
      <View style={styles.pallini}>
        {domande.map((q, i) => (
          <View
            key={i}
            style={[
              styles.pallinoEsito,
              {
                backgroundColor:
                  risposte[i] === q.giusta ? pal.verde : pal.rosso,
              },
            ]}
          />
        ))}
      </View>
      <ThemedText
        style={[
          styles.piccolo,
          { color: theme.textSecondary, textAlign: "center" },
        ]}
      >
        {tutto
          ? "Perfetto! Prova una frase di un livello più alto."
          : quota >= 0.7
            ? "Molto bene: rifallo per sistemare gli ultimi dubbi."
            : "Rifallo con calma: le spiegazioni dopo ogni risposta ti aiutano."}
      </ThemedText>
      <View style={styles.bottoni}>
        <Pressable
          onPress={onRifai}
          style={({ pressed }) => [
            styles.bottoneVuoto,
            { borderColor: colore },
            pressed && { opacity: 0.7 },
          ]}
        >
          <ThemedText style={[styles.testoBottone, { color: colore }]}>
            Rifai
          </ThemedText>
        </Pressable>
        <Pressable
          onPress={onNuova}
          style={({ pressed }) => [
            styles.bottone,
            { backgroundColor: colore },
            pressed && { opacity: 0.8 },
          ]}
        >
          <ThemedText style={styles.testoBottone}>Nuova frase</ThemedText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    gap: Spacing.three,
  },
  frase: {
    borderRadius: 16,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  testoFrase: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 21,
    lineHeight: 30,
  },
  nuova: {
    alignSelf: "flex-end",
  },
  comandiFrase: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  testoNuova: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
  },
  avanzamento: {
    gap: 6,
  },
  rigaAvanzamento: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  binario: {
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
  },
  riempimento: {
    height: "100%",
    borderRadius: 3,
  },
  domanda: {
    borderWidth: 1,
    borderRadius: 16,
    padding: Spacing.three,
    gap: 10,
  },
  etichetta: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  bersaglio: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 24,
    lineHeight: 30,
  },
  griglia: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  colonna: {
    gap: 8,
  },
  opzioneGriglia: {
    flexBasis: "47%",
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  opzione: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 14,
  },
  pallino: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },
  testoOpzione: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 19,
  },
  segno: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
  },
  spiegazione: {
    borderRadius: 12,
    padding: 12,
    gap: 4,
  },
  esito: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  bottone: {
    alignSelf: "flex-end",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bottoneVuoto: {
    borderWidth: 1,
    borderRadius: 999,
    paddingVertical: 9,
    paddingHorizontal: 20,
  },
  testoBottone: {
    color: "#000000",
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  risultato: {
    borderRadius: 16,
    padding: Spacing.four,
    alignItems: "center",
    gap: 10,
  },
  cifra: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 44,
    lineHeight: 52,
  },
  pallini: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
  },
  pallinoEsito: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  bottoni: {
    flexDirection: "row",
    gap: Spacing.two,
    marginTop: 4,
  },
  piccolo: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 19,
  },
});
