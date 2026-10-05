/**
 * Schermata: impara dal contesto.
 * Raggiungibile da /contesto, con il bottone nella pagina del test.
 * L'app propone una situazione (breve o di qualche riga) e una consegna; lo
 * studente scrive la frase inglese adatta e la verifica. La correzione
 * (analisi/correzione.ts) dice se è giusta, quale tempo verbale ha usato e
 * quale serviva, gli errori tipici e le parole che mancano o sono in più.
 * Si possono sbloccare dei suggerimenti, uno alla volta: le parole che
 * servono (il vocabolario), il tempo/modo verbale, la costruzione e infine
 * una frase inglese simile. Poi si può
 * vedere la soluzione e passare al contesto successivo.
 */

import { Correzione, correggi } from "@/analisi/correzione";
import { usePalette } from "@/components/analisi/colori";
import LineaTitolo from "@/components/lineaTitolo";
import TestoConRimandi from "@/components/testoConRimandi";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, constants, Spacing } from "@/constants/theme";
import { CONTESTI, Contesto, Parola } from "@/data/contesti";
import { registraAttivita } from "@/data/progressi";
import { useTastiera } from "@/hooks/use-tastiera";
import { useTheme } from "@/hooks/use-theme";
import { useRef, useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const VERDE = ColoriAttivita.test;
const LIVELLI = ["A1", "A2", "B1", "B2-C1"] as const;
type Livello = (typeof LIVELLI)[number];

// I contesti di un livello, in ordine casuale
function mescolati(livello: Livello) {
  const lista = CONTESTI.filter((c) => c.livello === livello);
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
}

export default function ImparaDalContesto() {
  const theme = useTheme();
  const pal = usePalette();
  const [livello, setLivello] = useState<Livello>("A1");
  const [lista, setLista] = useState(() => mescolati("A1"));
  const [indice, setIndice] = useState(0);
  const c = lista[indice % lista.length];
  // La tastiera non copre mai il campo della risposta
  const scroll = useRef<ScrollView>(null);
  const tastiera = useTastiera(scroll);

  function cambiaLivello(l: Livello) {
    setLivello(l);
    setLista(mescolati(l));
    setIndice(0);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText type="title" style={constants.title}>
          Impara dal contesto
        </ThemedText>
        <LineaTitolo colore={VERDE} />

        <ScrollView
          ref={scroll}
          onScroll={tastiera.onScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.contenuto}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          <ThemedText style={[styles.guida, { color: theme.textSecondary }]}>
            Leggi la situazione e scrivi in inglese la frase giusta. Se ti
            blocchi (anche solo su una parola), sblocca un suggerimento alla
            volta.
          </ThemedText>
          <View style={styles.livelli}>
            {LIVELLI.map((l) => {
              const attivo = l === livello;
              return (
                <Pressable
                  key={l}
                  onPress={() => cambiaLivello(l)}
                  style={[
                    styles.livello,
                    {
                      borderColor: attivo
                        ? pal.verde
                        : theme.backgroundSelected,
                      backgroundColor: attivo
                        ? VERDE + "1f"
                        : theme.backgroundElement,
                    },
                  ]}
                >
                  <ThemedText
                    style={[
                      styles.nomeLivello,
                      { color: attivo ? pal.verde : theme.text },
                    ]}
                  >
                    {l}
                  </ThemedText>
                </Pressable>
              );
            })}
          </View>
          <View style={styles.rigaAvanzamento}>
            <ThemedText
              style={[styles.etichetta, { color: theme.textSecondary }]}
            >
              Contesto {(indice % lista.length) + 1} di {lista.length}
            </ThemedText>
          </View>
          {/* Ogni contesto ha il suo stato: cambiando contesto si riparte */}
          <Esercizio
            key={`${c.id}-${indice}`}
            c={c}
            onSuccessivo={() => setIndice((i) => i + 1)}
          />
          <View style={{ height: tastiera.spazio }} />
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

function Esercizio({
  c,
  onSuccessivo,
}: {
  c: Contesto;
  onSuccessivo: () => void;
}) {
  const theme = useTheme();
  const pal = usePalette();
  const [risposta, setRisposta] = useState("");
  const [correzione, setCorrezione] = useState<Correzione | null>(null);
  const [contato, setContato] = useState(false);
  const [aiuti, setAiuti] = useState(0);
  const [soluzione, setSoluzione] = useState(false);

  // I suggerimenti: prima le parole che servono (il vocabolario non deve
  // bloccare chi sta ragionando sul tempo verbale), poi quelli del contesto
  // e, per ultima, la frase simile
  const suggerimenti: {
    titolo: string;
    testo?: string;
    parole?: Parola[];
    corsivo?: boolean;
  }[] = [
    ...(c.parole.length ? [{ titolo: "Parole utili", parole: c.parole }] : []),
    ...c.suggerimenti.map((testo, i) => ({
      titolo: ["Ragiona sul tempo", "Come si forma"][i] ?? "Aiuto",
      testo,
    })),
    { titolo: "Una frase simile", testo: `«${c.simile}»`, corsivo: true },
  ];
  const finito =
    soluzione ||
    correzione?.esito === "giusta" ||
    correzione?.esito === "quasi";

  function verifica() {
    if (!risposta.trim()) return;
    Keyboard.dismiss();
    const k = correggi(risposta, c);
    setCorrezione(k);
    // Conta nelle statistiche solo il primo tentativo
    if (!contato) {
      registraAttivita({
        risposte: 1,
        giuste: k.esito === "sbagliata" ? 0 : 1,
      });
      setContato(true);
    }
  }

  function mostraSoluzione() {
    setSoluzione(true);
    if (!contato) {
      registraAttivita({ risposte: 1, giuste: 0 });
      setContato(true);
    }
  }

  const coloreEsito =
    correzione?.esito === "giusta"
      ? pal.verde
      : correzione?.esito === "quasi"
        ? "#f59e0b"
        : pal.rosso;

  return (
    <View style={styles.esercizio}>
      {/* Il contesto e la consegna */}
      <View style={[styles.card, { backgroundColor: theme.backgroundElement }]}>
        <ThemedText style={[styles.etichetta, { color: theme.textSecondary }]}>
          Il contesto
        </ThemedText>
        <ThemedText style={styles.testoContesto}>{c.contesto}</ThemedText>
        <View style={[styles.consegna, { borderColor: pal.verde }]}>
          <ThemedText style={[styles.etichetta, { color: pal.verde }]}>
            Cosa devi scrivere
          </ThemedText>
          <ThemedText style={styles.testoConsegna}>{c.consegna}</ThemedText>
        </View>
      </View>

      {/* La risposta */}
      <View
        style={[
          styles.cardCampo,
          { borderColor: correzione ? coloreEsito : theme.backgroundSelected },
        ]}
      >
        <TextInput
          value={risposta}
          onChangeText={(t) => {
            setRisposta(t);
            // Cambiando la risposta la correzione vecchia non vale più
            if (correzione && correzione.esito === "sbagliata")
              setCorrezione(null);
          }}
          placeholder="Scrivi la frase in inglese…"
          placeholderTextColor={theme.textSecondary}
          multiline
          editable={!soluzione}
          autoCapitalize="sentences"
          autoCorrect={false}
          style={[styles.campo, { color: theme.text }]}
        />
        {!finito && (
          <Pressable
            onPress={verifica}
            disabled={!risposta.trim()}
            style={({ pressed }) => [
              styles.bottone,
              { backgroundColor: VERDE },
              !risposta.trim() && { opacity: 0.35 },
              pressed && { opacity: 0.8 },
            ]}
          >
            <ThemedText style={styles.testoBottone}>Verifica</ThemedText>
          </Pressable>
        )}
      </View>

      {/* La correzione */}
      {correzione && (
        <View
          style={[
            styles.card,
            {
              borderWidth: 1,
              borderColor: coloreEsito + "88",
              backgroundColor: coloreEsito + "12",
            },
          ]}
        >
          <ThemedText style={[styles.esito, { color: coloreEsito }]}>
            {correzione.esito === "giusta"
              ? "✓ Giusto!"
              : correzione.esito === "quasi"
                ? "≈ Quasi giusto: va bene"
                : "✗ Non ancora"}
          </ThemedText>
          {correzione.messaggi.map((m, i) => (
            <View key={i} style={styles.messaggio}>
              <ThemedText
                style={[styles.tipoMessaggio, { color: theme.textSecondary }]}
              >
                {m.tipo === "tempo"
                  ? "Tempo verbale"
                  : m.tipo === "errore"
                    ? "Errore"
                    : m.tipo === "parole"
                      ? "Le parole"
                      : "Nota"}
              </ThemedText>
              <ThemedText style={styles.piccolo}>{m.testo}</ThemedText>
              {m.lezione && (
                <TestoConRimandi
                  testo={`Ripassa: ${m.lezione}`}
                  style={[styles.piccolo, { color: theme.textSecondary }]}
                />
              )}
            </View>
          ))}
          {correzione.esito === "sbagliata" && !soluzione && (
            <ThemedText
              style={[styles.piccolo, { color: theme.textSecondary }]}
            >
              Correggi la frase e verifica di nuovo, oppure sblocca un
              suggerimento.
            </ThemedText>
          )}
        </View>
      )}

      {/* I suggerimenti sbloccati */}
      {aiuti > 0 && (
        <View style={styles.aiuti}>
          {suggerimenti.slice(0, aiuti).map((s, i) => (
            <View
              key={i}
              style={[styles.aiuto, { borderColor: theme.backgroundSelected }]}
            >
              <ThemedText style={[styles.etichetta, { color: "#f59e0b" }]}>
                Suggerimento {i + 1} · {s.titolo}
              </ThemedText>
              {s.testo && (
                <ThemedText
                  style={[styles.piccolo, s.corsivo && styles.corsivo]}
                >
                  {s.testo}
                </ThemedText>
              )}
              {/* Il vocabolario: italiano → inglese, con la nota sotto */}
              {s.parole?.map(([it, en, nota]) => (
                <View key={it} style={styles.voce}>
                  <ThemedText style={styles.piccolo}>
                    <ThemedText
                      style={[styles.piccolo, { color: theme.textSecondary }]}
                    >
                      {it} →{" "}
                    </ThemedText>
                    <ThemedText style={[styles.inglese, { color: pal.verde }]}>
                      {en}
                    </ThemedText>
                  </ThemedText>
                  {nota && (
                    <ThemedText
                      style={[styles.notaVoce, { color: theme.textSecondary }]}
                    >
                      {nota}
                    </ThemedText>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      )}

      {/* I comandi: suggerimento, soluzione */}
      {!finito && (
        <View style={styles.comandi}>
          {aiuti < suggerimenti.length && (
            <Pressable
              onPress={() => setAiuti((a) => a + 1)}
              style={({ pressed }) => [
                styles.bottoneVuoto,
                { borderColor: "#f59e0b" },
                pressed && { opacity: 0.7 },
              ]}
            >
              <ThemedText style={[styles.testoComando, { color: "#f59e0b" }]}>
                💡 Vedi suggerimento ({aiuti + 1}/{suggerimenti.length})
              </ThemedText>
            </Pressable>
          )}
          <Pressable
            onPress={mostraSoluzione}
            hitSlop={8}
            style={({ pressed }) => pressed && { opacity: 0.7 }}
          >
            <ThemedText
              style={[styles.testoComando, { color: theme.textSecondary }]}
            >
              Vedi soluzione
            </ThemedText>
          </Pressable>
        </View>
      )}

      {/* La soluzione */}
      {finito && (
        <View
          style={[
            styles.card,
            { borderWidth: 1, borderColor: theme.backgroundSelected },
          ]}
        >
          <ThemedText
            style={[styles.etichetta, { color: theme.textSecondary }]}
          >
            La soluzione
          </ThemedText>
          <ThemedText style={[styles.soluzione, { color: pal.verde }]}>
            {correzione && correzione.esito !== "sbagliata"
              ? correzione.vicina
              : c.soluzioni[0]}
          </ThemedText>
          {c.soluzioni.length > 1 && (
            <>
              <ThemedText
                style={[
                  styles.etichetta,
                  { color: theme.textSecondary, marginTop: 4 },
                ]}
              >
                Vanno bene anche
              </ThemedText>
              {c.soluzioni
                .filter(
                  (s) =>
                    s !==
                    (correzione && correzione.esito !== "sbagliata"
                      ? correzione.vicina
                      : c.soluzioni[0]),
                )
                .slice(0, 4)
                .map((s) => (
                  <ThemedText
                    key={s}
                    style={[styles.piccolo, { color: theme.textSecondary }]}
                  >
                    · {s}
                  </ThemedText>
                ))}
            </>
          )}
          <ThemedText style={[styles.piccolo, { marginTop: 4 }]}>
            {c.spiegazione}
          </ThemedText>
          {c.lezione && (
            <TestoConRimandi
              testo={`Ripassa: ${c.lezione}`}
              style={[styles.piccolo, { color: theme.textSecondary }]}
            />
          )}
        </View>
      )}

      {(finito || correzione) && (
        <Pressable
          onPress={onSuccessivo}
          style={({ pressed }) => [
            styles.bottone,
            styles.successivo,
            { backgroundColor: VERDE },
            pressed && { opacity: 0.8 },
          ]}
        >
          <ThemedText style={styles.testoBottone}>
            Frase successiva →
          </ThemedText>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenuto: {
    gap: Spacing.three,
    paddingBottom: Spacing.six,
  },
  guida: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  livelli: {
    flexDirection: "row",
    gap: Spacing.two,
  },
  livello: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 9,
    alignItems: "center",
  },
  nomeLivello: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 17,
    lineHeight: 22,
  },
  rigaAvanzamento: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  etichetta: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  esercizio: {
    gap: Spacing.three,
  },
  card: {
    borderRadius: 16,
    padding: Spacing.three,
    gap: 8,
  },
  testoContesto: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  consegna: {
    borderLeftWidth: 3,
    paddingLeft: 10,
    gap: 2,
    marginTop: 4,
  },
  testoConsegna: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    lineHeight: 21,
  },
  cardCampo: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    gap: 10,
  },
  campo: {
    minHeight: 64,
    padding: 4,
    fontFamily: "Inter_400Regular",
    fontSize: 17,
    lineHeight: 24,
    textAlignVertical: "top",
  },
  bottone: {
    alignSelf: "flex-end",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  successivo: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  testoBottone: {
    color: "#000000",
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
  },
  esito: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 17,
    lineHeight: 23,
  },
  messaggio: {
    gap: 2,
  },
  tipoMessaggio: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
  },
  aiuti: {
    gap: Spacing.two,
  },
  aiuto: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    gap: 4,
  },
  comandi: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: Spacing.two,
  },
  bottoneVuoto: {
    borderWidth: 1,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  testoComando: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  soluzione: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 20,
    lineHeight: 27,
  },
  piccolo: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  corsivo: {
    fontStyle: "italic",
  },
  voce: {
    paddingVertical: 2,
  },
  inglese: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    lineHeight: 20,
  },
  notaVoce: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 16,
  },
});
