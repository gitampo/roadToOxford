/**
 * Schermata: elenco delle lezioni.
 * Raggiungibile da /lezioni. Mostra un riquadro per ogni lezione;
 * toccandone uno si apre la lezione corrispondente.
 * Se l'utente ha fatto degli esercizi, il riquadro si colora come una barra
 * di progresso: la parte colorata è la percentuale di risposte giuste su
 * tutti gli esercizi della lezione (compresi quelli dei testi che contiene).
 */

import { coloreRisultato } from "@/components/risultato";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { constants, Spacing } from "@/constants/theme";
import { LEZIONI } from "@/data/lezioni";
import { TESTI } from "@/data/testi";
import { useRisultati } from "@/hooks/use-risultati";
import { useTheme } from "@/hooks/use-theme";
import { ESERCIZI_CON_PUNTEGGIO, Lezione } from "@/types/lezione";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Quanti esercizi con punteggio ha una lezione (senza contare i testi)
function contaEsercizi(lezione: Lezione | undefined) {
  return (lezione?.riquadri ?? []).reduce(
    (somma, r) =>
      somma +
      r.blocchi.filter((b) =>
        (ESERCIZI_CON_PUNTEGGIO as readonly string[]).includes(b.tipo),
      ).length,
    0,
  );
}

// Gli id di una lezione e dei testi che apre (come il Sonetto 18 nel C3)
function idCollegati(lezione: Lezione) {
  const testi = (lezione.riquadri ?? []).flatMap((r) =>
    r.blocchi.flatMap((b) => (b.tipo === "apri" ? [b.id] : [])),
  );
  return [lezione.id, ...testi];
}

export default function Lezioni() {
  const risultati = useRisultati(LEZIONI.flatMap(idCollegati));
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText type="title" style={constants.title}>
          Lezioni
        </ThemedText>
        <ScrollView>
          {LEZIONI.map((lezione) => {
            // Somma gli esercizi della lezione e dei suoi testi
            const ids = idCollegati(lezione);
            const totale = ids.reduce(
              (somma, id) =>
                somma +
                contaEsercizi([...LEZIONI, ...TESTI].find((l) => l.id === id)),
              0,
            );
            const giuste = ids.reduce(
              (somma, id) => somma + (risultati[id]?.giuste ?? 0),
              0,
            );
            const risposte = ids.reduce(
              (somma, id) => somma + (risultati[id]?.risposte ?? 0),
              0,
            );
            const iniziata = totale > 0 && risposte > 0;
            const percentuale = iniziata ? giuste / totale : 0;
            const colore = coloreRisultato({ giuste, totale, risposte });

            return (
              <Link
                key={lezione.id}
                href={{ pathname: "/lezione/[id]", params: { id: lezione.id } }}
                asChild
              >
                <Pressable
                  style={({ pressed }) => [
                    styles.voce,
                    pressed && { opacity: 0.7 },
                  ]}
                >
                  <ThemedView style={styles.testi}>
                    <ThemedText style={styles.titolo}>
                      {lezione.livello} - {lezione.titolo}
                    </ThemedText>
                    {lezione.descrizione && (
                      <ThemedText
                        style={[
                          styles.descrizione,
                          { color: theme.textSecondary },
                        ]}
                      >
                        {lezione.descrizione}
                      </ThemedText>
                    )}
                    {lezione.chiavi && (
                      <ThemedText
                        style={[styles.chiavi, { color: theme.textSecondary }]}
                      >
                        {lezione.chiavi}
                      </ThemedText>
                    )}
                  </ThemedView>
                  {/* La barra colorata, larga quanto la percentuale, sopra il testo.
                      È trasparente, quindi il testo si legge; pointerEvents="none"
                      fa passare il tocco al riquadro sotto */}
                  {iniziata && (
                    <ThemedView
                      pointerEvents="none"
                      style={[
                        styles.riempimento,
                        {
                          width: `${percentuale * 100}%`,
                          backgroundColor: colore + "33",
                        },
                      ]}
                    />
                  )}
                </Pressable>
              </Link>
            );
          })}
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  voce: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
    borderRadius: 10,
    overflow: "hidden",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: Spacing.two,
  },
  riempimento: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
  },
  testi: {
    flex: 1,
    gap: 2,
    backgroundColor: "transparent",
  },
  titolo: {
    fontFamily: "Inter_600SemiBold",
  },
  descrizione: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 19,
  },
  chiavi: {
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    fontSize: 12,
    lineHeight: 17,
    opacity: 0.8,
  },
});
