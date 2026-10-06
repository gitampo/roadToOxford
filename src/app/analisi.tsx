/**
 * Schermata: l'analisi della frase (senza IA: tutto a regole, vedi src/analisi).
 * Raggiungibile da /analisi, con il bottone nella pagina del test.
 * Due modalità, che convivono:
 * - "Analizza una frase": lo studente scrive una frase in inglese e l'app ne
 *   fa l'analisi grammaticale, logica e semantica (e segnala gli errori
 *   tipici);
 * - "Analizza tu": l'app propone una frase e l'analisi la fa lo studente,
 *   con gli esercizi a scelta.
 */

import { analizza } from "@/analisi";
import { FRASI, FraseEsercizio } from "@/analisi/frasi";
import EsercizioAnalisi, {
  TipoEsercizio,
} from "@/components/analisi/esercizio";
import { usePalette } from "@/components/analisi/colori";
import RisultatoAnalisi from "@/components/analisi/risultato";
import PaginaGirata from "@/components/paginaGirata";
import IntestazioneTest, {
  contenitoreTest,
} from "@/components/intestazioneTest";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, Spacing } from "@/constants/theme";
import {
  CARATTERI_PER_FRASE,
  LIMITE_GIORNALIERO,
  traduzioneNota,
  useCaratteriUsati,
} from "@/data/traduzioni";
import { useTastiera } from "@/hooks/use-tastiera";
import { useTheme } from "@/hooks/use-theme";
import { useMemo, useRef, useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SymbolView } from "expo-symbols";

const VERDE = ColoriAttivita.test;
const MODALITA = ["Analizza una frase", "Analizza tu"] as const;
const TIPI: TipoEsercizio[] = ["Grammaticale", "Logica", "Semantica"];
const LIVELLI = ["A1", "A2", "B1", "B2-C1"] as const;
const NOMI_LIVELLI: Record<(typeof LIVELLI)[number], string> = {
  A1: "Base",
  A2: "Elementare",
  B1: "Intermedio",
  "B2-C1": "Avanzato",
};

// Una frase a caso (diversa da quella attuale, se possibile)
function aCaso(lista: FraseEsercizio[], attuale?: string) {
  const altre = lista.filter((f) => f.testo !== attuale);
  const fonte = altre.length ? altre : lista;
  return fonte[Math.floor(Math.random() * fonte.length)];
}

export default function Analisi() {
  // La tastiera non copre mai il campo dove si scrive la frase
  const scroll = useRef<ScrollView>(null);
  const tastiera = useTastiera(scroll);
  const [modalita, setModalita] =
    useState<(typeof MODALITA)[number]>("Analizza una frase");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={contenitoreTest}>
        <IntestazioneTest titolo="Analisi della frase" />

        <Segmenti voci={MODALITA} attiva={modalita} onCambia={setModalita} />

        <ScrollView
          ref={scroll}
          onScroll={tastiera.onScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.contenuto}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          {modalita === "Analizza una frase" ? (
            <AnalizzaUnaFrase
              onGira={() => scroll.current?.scrollTo({ y: 0, animated: true })}
            />
          ) : (
            <AnalizzaTu />
          )}
          <View style={{ height: tastiera.spazio }} />
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

// Due passi sulla stessa scheda: davanti si scrive (o si sceglie) la frase;
// con "Analizza" la scheda volta pagina e dietro c'è l'analisi, con le
// colonne Grammaticale / Logica / Semantica. "Un'altra frase" torna davanti,
// con la frase ancora nel campo per correggerla
function AnalizzaUnaFrase({ onGira }: { onGira: () => void }) {
  const theme = useTheme();
  const pal = usePalette();
  const [testo, setTesto] = useState("");
  const [analizzato, setAnalizzato] = useState("");
  // Quattro esempi a caso dalla banca di frasi
  const [esempi] = useState(() =>
    [...FRASI].sort(() => Math.random() - 0.5).slice(0, 4),
  );
  // Se il motore sbaglia su una frase strana, la pagina non si rompe:
  // compare un messaggio
  const [risultati, guasto] = useMemo(() => {
    try {
      return [analizza(analizzato), false] as const;
    } catch {
      return [[], true] as const;
    }
  }, [analizzato]);

  // Quale facciata si vede: la frase da scrivere o la sua analisi
  const [retro, setRetro] = useState(false);

  function vai(frase = testo) {
    if (!frase.trim()) return;
    Keyboard.dismiss();
    setTesto(frase);
    setAnalizzato(frase);
    setRetro(true);
    onGira();
  }

  return (
    <PaginaGirata
      retro={retro}
      fronte={
        <View style={styles.sezione}>
          <ThemedText style={[styles.guida, { color: theme.textSecondary }]}>
            Scrivi una frase in inglese, oppure scegline una qui sotto:
            l&apos;app ne fa l&apos;analisi grammaticale, logica e semantica, e
            ti segnala gli errori più comuni.
          </ThemedText>
          {/* Il campo e i bottoni nella stessa card */}
          <View
            style={[
              styles.cardCampo,
              { backgroundColor: theme.backgroundElement },
            ]}
          >
            <TextInput
              value={testo}
              onChangeText={setTesto}
              placeholder="Es. My sister has been living in London for three years."
              placeholderTextColor={theme.textSecondary}
              multiline
              style={[styles.campo, { color: theme.text }]}
            />
            <Contatore testo={testo} analizzato={analizzato} />
            <View style={styles.rigaCampo}>
              {testo ? (
                <Pressable onPress={() => setTesto("")} hitSlop={8}>
                  <ThemedText
                    style={[styles.cancella, { color: theme.textSecondary }]}
                  >
                    Cancella
                  </ThemedText>
                </Pressable>
              ) : (
                <View />
              )}
              <Pressable
                onPress={() => vai()}
                disabled={!testo.trim()}
                style={({ pressed }) => [
                  styles.bottone,
                  { backgroundColor: VERDE },
                  !testo.trim() && { opacity: 0.35 },
                  pressed && { opacity: 0.8 },
                ]}
              >
                <ThemedText style={styles.testoBottone}>Analizza →</ThemedText>
              </Pressable>
            </View>
          </View>

          <View style={styles.esempi}>
            <ThemedText
              style={[styles.etichetta, { color: theme.textSecondary }]}
            >
              Oppure prova con
            </ThemedText>
            {esempi.map((e) => (
              <Pressable
                key={e.testo}
                onPress={() => vai(e.testo)}
                style={({ pressed }) => [
                  styles.esempio,
                  { borderColor: theme.backgroundSelected },
                  pressed && { backgroundColor: theme.backgroundElement },
                ]}
              >
                <ThemedText style={styles.testoEsempio}>{e.testo}</ThemedText>
                <ThemedText
                  style={[styles.livelloEsempio, { color: pal.verde }]}
                >
                  {e.livello} →
                </ThemedText>
              </Pressable>
            ))}
          </View>
        </View>
      }
      retroContenuto={
        <View style={styles.sezione}>
          {/* La frase analizzata, e il ritorno alla scrittura */}
          <View
            style={[
              styles.cardFrase,
              {
                backgroundColor: theme.backgroundElement,
                borderColor: VERDE + "55",
              },
            ]}
          >
            <View style={styles.rigaFrase}>
              <ThemedText style={[styles.etichetta, { color: pal.verde }]}>
                La frase
              </ThemedText>
              <Pressable
                onPress={() => setRetro(false)}
                hitSlop={10}
                style={({ pressed }) => [
                  styles.altraFrase,
                  pressed && { opacity: 0.6 },
                ]}
              >
                <SymbolView
                  name={{
                    ios: "arrow.trianglehead.2.clockwise",
                    android: "autorenew",
                    web: "autorenew",
                  }}
                  size={14}
                  tintColor={theme.textSecondary}
                />
                <ThemedText
                  style={[
                    styles.testoAltraFrase,
                    { color: theme.textSecondary },
                  ]}
                >
                  Un&apos;altra frase
                </ThemedText>
              </Pressable>
            </View>
            <ThemedText style={styles.fraseAnalizzata}>{analizzato}</ThemedText>
          </View>

          {guasto && (
            <ThemedText style={[styles.guida, { color: theme.textSecondary }]}>
              Questa frase è troppo complessa per l&apos;analisi automatica:
              prova a dividerla in frasi più brevi.
            </ThemedText>
          )}

          {risultati.map((a, i) => (
            <View key={`${analizzato}-${i}`} style={styles.risultato}>
              {risultati.length > 1 && (
                <ThemedText
                  style={[styles.etichetta, { color: theme.textSecondary }]}
                >
                  Frase {i + 1} di {risultati.length}
                </ThemedText>
              )}
              <RisultatoAnalisi analisi={a} colore={pal.verde} />
            </View>
          ))}
        </View>
      }
    />
  );
}

function AnalizzaTu() {
  const theme = useTheme();
  const pal = usePalette();
  const [livello, setLivello] = useState<(typeof LIVELLI)[number]>("A1");
  const [tipo, setTipo] = useState<TipoEsercizio>("Grammaticale");
  const frasiLivello = FRASI.filter((f) => f.livello === livello);
  const [frase, setFrase] = useState(() =>
    aCaso(FRASI.filter((f) => f.livello === "A1")),
  );
  const analisi = useMemo(() => analizza(frase.testo)[0], [frase]);

  function cambiaLivello(l: (typeof LIVELLI)[number]) {
    setLivello(l);
    setFrase(aCaso(FRASI.filter((f) => f.livello === l)));
  }

  return (
    <View style={styles.sezione}>
      <ThemedText style={[styles.guida, { color: theme.textSecondary }]}>
        Ora l&apos;analisi la fai tu: scegli il livello e il tipo di analisi.
      </ThemedText>
      <ThemedText style={[styles.etichetta, { color: theme.textSecondary }]}>
        Livello
      </ThemedText>
      <View style={styles.righe}>
        {LIVELLI.map((l) => {
          const attivo = l === livello;
          const quante = FRASI.filter((f) => f.livello === l).length;
          return (
            <Pressable
              key={l}
              onPress={() => cambiaLivello(l)}
              style={({ pressed }) => [
                styles.livello,
                {
                  borderColor: attivo ? pal.verde : theme.backgroundSelected,
                  backgroundColor: attivo
                    ? VERDE + "1f"
                    : theme.backgroundElement,
                },
                pressed && !attivo && { opacity: 0.7 },
              ]}
            >
              {attivo && (
                <View style={[styles.spunta, { backgroundColor: pal.verde }]}>
                  <ThemedText style={styles.testoSpunta}>✓</ThemedText>
                </View>
              )}
              <ThemedText
                style={[
                  styles.nomeLivello,
                  { color: attivo ? pal.verde : theme.text },
                ]}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                {l}
              </ThemedText>
              <ThemedText
                style={[
                  styles.descrizioneLivello,
                  { color: theme.textSecondary },
                ]}
                numberOfLines={1}
              >
                {NOMI_LIVELLI[l]}
              </ThemedText>
              <ThemedText
                style={[
                  styles.quanteFrasi,
                  { color: attivo ? pal.verde : theme.textSecondary },
                ]}
              >
                {quante} frasi
              </ThemedText>
            </Pressable>
          );
        })}
      </View>
      <ThemedText
        style={[
          styles.etichetta,
          { color: theme.textSecondary, marginTop: Spacing.one },
        ]}
      >
        Tipo di analisi
      </ThemedText>
      <Segmenti voci={TIPI} attiva={tipo} onCambia={setTipo} senzaMargine />

      {analisi && (
        <EsercizioAnalisi
          key={`${frase.testo}-${tipo}`}
          analisi={analisi}
          tipo={tipo}
          colore={pal.verde}
          onNuova={() => setFrase(aCaso(frasiLivello, frase.testo))}
        />
      )}
    </View>
  );
}

// Quanti caratteri di traduzione automatica restano oggi (MyMemory: 5000
// al giorno, circa 100 frasi). Mentre si scrive, il numero scende con la
// frase che si sta scrivendo; le frasi già tradotte nell'app non contano
function Contatore({
  testo,
  analizzato,
}: {
  testo: string;
  analizzato: string;
}) {
  const theme = useTheme();
  const pal = usePalette();
  const usati = useCaratteriUsati();
  const daScrivere =
    testo.trim() && testo !== analizzato && !traduzioneNota(testo)
      ? testo.trim().length
      : 0;
  const restano = Math.max(0, LIMITE_GIORNALIERO - usati - daScrivere);
  const frasi = Math.floor(restano / CARATTERI_PER_FRASE);
  const poco = restano < LIMITE_GIORNALIERO * 0.1;
  return (
    <ThemedText
      style={[
        styles.contatore,
        { color: poco ? pal.rosso : theme.textSecondary },
      ]}
    >
      Traduzioni di oggi: {restano.toLocaleString("it-IT")} /{" "}
      {LIMITE_GIORNALIERO.toLocaleString("it-IT")} caratteri · circa {frasi}{" "}
      {frasi === 1 ? "frase" : "frasi"}
    </ThemedText>
  );
}

// Una fila di pulsanti uniti, uno attivo (come le schede)
function Segmenti<T extends string>({
  voci,
  attiva,
  onCambia,
  senzaMargine,
}: {
  voci: readonly T[];
  attiva: T;
  onCambia: (v: T) => void;
  // sotto un'etichetta il margine in alto non serve
  senzaMargine?: boolean;
}) {
  const theme = useTheme();
  const pal = usePalette();
  return (
    <View
      style={[
        styles.segmenti,
        { backgroundColor: theme.backgroundElement },
        senzaMargine && { marginTop: -Spacing.two },
      ]}
    >
      {voci.map((v) => {
        const sel = v === attiva;
        return (
          <Pressable
            key={v}
            onPress={() => onCambia(v)}
            style={[
              styles.segmento,
              sel && { backgroundColor: theme.backgroundSelected },
            ]}
          >
            <ThemedText
              style={[
                styles.nomeSegmento,
                { color: sel ? pal.verde : theme.textSecondary },
              ]}
            >
              {v}
            </ThemedText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  // La frase analizzata, in cima al retro della scheda
  cardFrase: {
    borderWidth: 1,
    borderRadius: 16,
    padding: Spacing.three,
    gap: 6,
  },
  rigaFrase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  altraFrase: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  testoAltraFrase: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
  },
  fraseAnalizzata: {
    fontFamily: "PlayfairDisplay_600SemiBold",
    fontSize: 20,
    lineHeight: 27,
  },
  contenuto: {
    paddingTop: Spacing.three,
    paddingBottom: Spacing.six,
  },
  sezione: {
    gap: Spacing.three,
  },
  guida: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  cardCampo: {
    borderRadius: 16,
    padding: 12,
    gap: 8,
  },
  campo: {
    minHeight: 72,
    padding: 4,
    fontFamily: "Inter_400Regular",
    fontSize: 17,
    lineHeight: 24,
    textAlignVertical: "top",
  },
  rigaCampo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contatore: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 16,
    paddingHorizontal: 4,
  },
  cancella: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
  },
  bottone: {
    borderRadius: 999,
    paddingVertical: 9,
    paddingHorizontal: 18,
  },
  esempi: {
    gap: 8,
  },
  esempio: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  testoEsempio: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  livelloEsempio: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
  },
  testoBottone: {
    color: "#000000",
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  etichetta: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  risultato: {
    gap: Spacing.two,
    marginTop: Spacing.two,
  },
  // Le schede dei livelli, vicine alla loro etichetta
  righe: {
    flexDirection: "row",
    gap: Spacing.two,
    marginTop: -Spacing.two,
  },
  livello: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: "center",
    gap: 1,
  },
  spunta: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 14,
    height: 14,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  testoSpunta: {
    color: "#000000",
    fontSize: 9,
    lineHeight: 12,
    fontFamily: "Inter_600SemiBold",
  },
  nomeLivello: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 20,
    lineHeight: 26,
  },
  descrizioneLivello: {
    fontFamily: "Inter_400Regular",
    fontSize: 11,
    lineHeight: 14,
  },
  quanteFrasi: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    lineHeight: 14,
    marginTop: 2,
  },
  segmenti: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 3,
    marginTop: Spacing.two,
  },
  segmento: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 8,
  },
  nomeSegmento: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
  },
});
