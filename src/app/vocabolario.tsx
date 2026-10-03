/**
 * Schermata: il vocabolario.
 * Raggiungibile da /vocabolario. In alto la ricerca, con il tasto EN → IT /
 * IT → EN dentro la barra; sotto, le parole in ordine alfabetico divise per
 * lettera, con la colonna delle lettere a destra per saltare.
 * Le card sono sempre in inglese: cercando in italiano cambia solo quali
 * parole compaiono, e le traduzioni trovate sono in rosso.
 * Sotto la barra, le linguette come in Lezioni: Tutti, Sostantivi, Verbi,
 * Aggettivi, Falsi amici. Una parola che è sia verbo sia sostantivo sta in
 * tutte e due.
 * Toccando una card si apre il dettaglio della parola (/parola/[id]).
 */

import CardParola from "@/components/cardParola";
import BarraRicerca from "@/components/barraRicerca";
import Linguette from "@/components/linguette";
import LineaTitolo from "@/components/lineaTitolo";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, constants, Spacing } from "@/constants/theme";
import { cerca, perLettera } from "@/data/vocabolario";
import { useTheme } from "@/hooks/use-theme";
import { Voce } from "@/types/vocabolario";
import { SymbolView } from "expo-symbols";
import { useRef, useState } from "react";
import {
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ROSSO = ColoriAttivita.vocabolario;
const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Le linguette sotto la ricerca ("Tutti" è a parte: nessun filtro)
const FILTRI: { nome: string; vale: (voce: Voce) => boolean }[] = [
  {
    nome: "Sostantivi",
    vale: (v) => v.usi.some((u) => u.categoria === "sostantivo"),
  },
  { nome: "Verbi", vale: (v) => v.usi.some((u) => u.categoria === "verbo") },
  {
    nome: "Aggettivi",
    vale: (v) => v.usi.some((u) => u.categoria === "aggettivo"),
  },
  { nome: "Falsi amici", vale: (v) => v.falsoAmico !== undefined },
];

export default function Vocabolario() {
  const theme = useTheme();
  const [query, setQuery] = useState("");
  const [lingua, setLingua] = useState<"en" | "it">("en");
  // null = tutte le parole
  const [filtro, setFiltro] = useState<string | null>(null);
  const lista = useRef<SectionList>(null);
  // L'ultima lettera scelta, per riprovare se il salto non riesce subito
  const letteraScelta = useRef("");

  const cercando = query.trim() !== "";
  const vale = FILTRI.find((f) => f.nome === filtro)?.vale ?? (() => true);
  const sezioni = perLettera(cerca(query, lingua).filter(vale));
  const lettere = sezioni.map((s) => s.lettera);

  // Salta all'intestazione della lettera (itemIndex 0 = l'intestazione)
  function vaiALettera(lettera: string) {
    const sectionIndex = lettere.indexOf(lettera);
    if (sectionIndex === -1) return;
    letteraScelta.current = lettera;
    lista.current?.scrollToLocation({
      sectionIndex,
      itemIndex: 0,
      viewOffset: 0,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText type="title" style={constants.title}>
          Vocabolario
        </ThemedText>
        <LineaTitolo colore={ROSSO} />

        <BarraRicerca
          valore={query}
          onCambia={setQuery}
          placeholder={
            lingua === "en"
              ? "Cerca una parola inglese"
              : "Cerca una parola italiana"
          }
        >
          {/* Il tasto della lingua: dice da quale lingua si cerca */}
          <Pressable
            onPress={() => setLingua((l) => (l === "en" ? "it" : "en"))}
            hitSlop={6}
            style={({ pressed }) => [
              styles.lingua,
              pressed && { opacity: 0.6 },
            ]}
          >
            <Text style={styles.testoLingua}>
              {lingua === "en" ? "EN → IT" : "IT → EN"}
            </Text>
          </Pressable>
        </BarraRicerca>

        <Linguette
          voci={FILTRI.map((f) => f.nome)}
          attiva={filtro}
          onCambia={setFiltro}
          colore={ROSSO}
        />

        <View style={styles.corpo}>
          <SectionList
            ref={lista}
            style={{ flex: 1 }}
            sections={sezioni}
            keyExtractor={(voce) => voce.id}
            stickySectionHeadersEnabled={false}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            // Le card hanno altezze diverse: se la lettera non è ancora stata
            // disegnata, prima ci si avvicina e poi si riprova
            onScrollToIndexFailed={(info) => {
              lista.current
                ?.getScrollResponder()
                ?.scrollTo({ y: info.averageItemLength * info.index });
              setTimeout(() => vaiALettera(letteraScelta.current), 50);
            }}
            renderSectionHeader={({ section }) =>
              // Mentre si cerca, solo i risultati: niente lettere
              cercando ? null : (
                <View style={styles.intestazione}>
                  <ThemedText style={styles.lettera}>
                    {section.lettera}
                  </ThemedText>
                  <ThemedText
                    style={[styles.conteggio, { color: theme.textSecondary }]}
                  >
                    {section.data.length}{" "}
                    {section.data.length === 1 ? "parola" : "parole"}
                  </ThemedText>
                </View>
              )
            }
            renderItem={({ item }) => (
              <CardParola
                voce={item}
                cercaItaliano={lingua === "it" ? query : undefined}
              />
            )}
            ListEmptyComponent={
              <ThemedText style={{ color: theme.textSecondary }}>
                Nessuna parola trovata
              </ThemedText>
            }
            contentContainerStyle={{ paddingBottom: Spacing.five }}
          />

          {/* Le lettere, come nella rubrica: quelle senza parole sono spente */}
          {!cercando && (
            <View style={styles.alfabeto}>
              {ALFABETO.map((l) => {
                const presente = lettere.includes(l);
                return (
                  <Pressable
                    key={l}
                    disabled={!presente}
                    onPress={() => vaiALettera(l)}
                    hitSlop={{ left: 12, right: 8 }}
                  >
                    <Text
                      style={[
                        styles.letteraAlfabeto,
                        {
                          color: presente ? ROSSO : theme.textSecondary,
                          opacity: presente ? 1 : 0.35,
                        },
                      ]}
                    >
                      {l}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          )}
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  lingua: {
    borderWidth: 1,
    borderColor: ROSSO,
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  testoLingua: {
    color: ROSSO,
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    letterSpacing: 0.5,
  },
  // La lista e, a destra, la colonna delle lettere
  corpo: {
    flex: 1,
    flexDirection: "row",
    gap: Spacing.two,
  },
  alfabeto: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: Spacing.five,
  },
  letteraAlfabeto: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    lineHeight: 16,
    width: 16,
    textAlign: "center",
  },
  intestazione: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
    marginTop: Spacing.two,
    marginBottom: Spacing.one,
  },
  lettera: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 22,
    lineHeight: 28,
  },
  conteggio: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
});
