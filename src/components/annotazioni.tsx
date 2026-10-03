/**
 * Gli appunti presi dentro una lezione.
 * Nei testi dei riquadri si tiene premuto su una parola per iniziare la
 * selezione e si tocca la parola finale per allungarla (o accorciarla).
 * Finché c'è una selezione, in basso compare la barra con "Aggiungi nota":
 * si scrive l'appunto e la nota finisce nell'elenco della pagina Appunti.
 *
 * Sul web (dove le scritte non hanno il "tieni premuto") si seleziona come
 * sempre col mouse: la barra compare appena si lascia il tasto.
 *
 * AreaAnnotazioni avvolge il contenuto della lezione e tiene la selezione;
 * i testi la leggono con useSelezione (vedi TestoConRimandi).
 */

import { aggiungiNota, titoloDaCitazione } from "@/data/appunti";
import { ColoriAttivita, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export const ARANCIONE = ColoriAttivita.appunti;

// La selezione in corso. chiave: il testo in cui si trova (un blocco del
// riquadro); ancora: la parola tenuta premuta; fine: l'ultima toccata.
// Le parole sono numerate da 0 dentro il testo; il tratto selezionato va
// dalla più piccola alla più grande delle due
export type Selezione = {
  chiave: string;
  ancora: number;
  fine: number;
  testo: string;
};

type Contesto = {
  selezione: Selezione | null;
  seleziona: (s: Selezione) => void;
};

const ContestoSelezione = createContext<Contesto | null>(null);

// null fuori da una lezione, e sul web (dove si usa la selezione del
// browser): lì i testi non si dividono in parole da toccare
export function useSelezione() {
  const contesto = useContext(ContestoSelezione);
  return Platform.OS === "web" ? null : contesto;
}

type Props = {
  lezione: { id: string; titolo: string };
  pagina: number;
  titoloRiquadro: string;
  children: React.ReactNode;
};

export function AreaAnnotazioni({
  lezione,
  pagina,
  titoloRiquadro,
  children,
}: Props) {
  const theme = useTheme();
  const [selezione, setSelezione] = useState<Selezione | null>(null);
  const [scrivendo, setScrivendo] = useState(false);
  const [appunto, setAppunto] = useState("");
  // Il messaggio "Nota salvata", che sparisce da solo
  const [salvata, setSalvata] = useState(false);
  // Il contenuto della lezione (sul web, per sapere se il testo selezionato
  // col mouse sta lì dentro)
  const contenuto = useRef<View>(null);

  // Sul web: quando si lascia il mouse dopo aver selezionato del testo nella
  // lezione, quel testo diventa la selezione per l'appunto
  useEffect(() => {
    if (Platform.OS !== "web") return;
    function dopoSelezione() {
      const sel = window.getSelection();
      const testo = sel?.toString().replace(/\s+/g, " ").trim();
      const area = contenuto.current as unknown as HTMLElement | null;
      if (!testo || !sel?.anchorNode || !area?.contains(sel.anchorNode)) return;
      setSelezione({ chiave: "web", ancora: 0, fine: 0, testo });
    }
    document.addEventListener("mouseup", dopoSelezione);
    return () => document.removeEventListener("mouseup", dopoSelezione);
  }, []);

  // Cambiando riquadro la selezione non ha più senso
  useEffect(() => {
    setSelezione(null);
  }, [pagina]);

  useEffect(() => {
    if (!salvata) return;
    const t = setTimeout(() => setSalvata(false), 1800);
    return () => clearTimeout(t);
  }, [salvata]);

  function chiudiModulo() {
    setScrivendo(false);
    setAppunto("");
  }

  async function salva() {
    if (!selezione) return;
    const ora = Date.now();
    await aggiungiNota({
      id: String(ora),
      titolo: titoloDaCitazione(selezione.testo),
      citazione: selezione.testo,
      testo: appunto.trim() || undefined,
      lezione: {
        id: lezione.id,
        titolo: lezione.titolo,
        pagina,
        riquadro: titoloRiquadro,
      },
      data: ora,
    });
    chiudiModulo();
    setSelezione(null);
    setSalvata(true);
  }

  return (
    <ContestoSelezione.Provider value={{ selezione, seleziona: setSelezione }}>
      <View ref={contenuto} style={{ flex: 1 }}>
        {children}
      </View>

      {/* La barra in basso, sopra il contenuto */}
      {(selezione || salvata) && (
        <View
          style={[styles.barra, { backgroundColor: theme.backgroundElement }]}
        >
          {selezione ? (
            <>
              <ThemedText
                numberOfLines={1}
                style={[styles.anteprima, { color: theme.textSecondary }]}
              >
                “{selezione.testo}”
              </ThemedText>
              <View style={styles.pulsanti}>
                <Pressable
                  onPress={() => setSelezione(null)}
                  hitSlop={8}
                  style={({ pressed }) => pressed && { opacity: 0.6 }}
                >
                  <ThemedText style={{ color: theme.textSecondary }}>
                    Annulla
                  </ThemedText>
                </Pressable>
                <Pressable
                  onPress={() => setScrivendo(true)}
                  style={({ pressed }) => [
                    styles.aggiungi,
                    pressed && { opacity: 0.8 },
                  ]}
                >
                  <ThemedText style={styles.testoAggiungi}>
                    ✎ Aggiungi nota
                  </ThemedText>
                </Pressable>
              </View>
            </>
          ) : (
            <ThemedText style={styles.salvata}>
              ✓ Nota salvata in Appunti
            </ThemedText>
          )}
        </View>
      )}

      {/* Il modulo per scrivere l'appunto */}
      <Modal
        visible={scrivendo}
        transparent
        animationType="fade"
        onRequestClose={chiudiModulo}
      >
        <KeyboardAvoidingView
          style={styles.velo}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ThemedView style={styles.scheda}>
            <ThemedText style={styles.titoloScheda}>Nuova nota</ThemedText>
            <ThemedText
              style={[styles.citazione, { color: theme.textSecondary }]}
              numberOfLines={6}
            >
              {selezione?.testo}
            </ThemedText>
            <TextInput
              value={appunto}
              onChangeText={setAppunto}
              placeholder="Scrivi il tuo appunto…"
              placeholderTextColor={theme.textSecondary}
              multiline
              autoFocus
              style={[
                styles.campo,
                {
                  color: theme.text,
                  borderColor: theme.backgroundSelected,
                },
              ]}
            />
            <View style={styles.pulsanti}>
              <Pressable onPress={chiudiModulo} hitSlop={8}>
                <ThemedText style={{ color: theme.textSecondary }}>
                  Annulla
                </ThemedText>
              </Pressable>
              <Pressable
                onPress={salva}
                style={({ pressed }) => [
                  styles.aggiungi,
                  pressed && { opacity: 0.8 },
                ]}
              >
                <ThemedText style={styles.testoAggiungi}>Salva</ThemedText>
              </Pressable>
            </View>
          </ThemedView>
        </KeyboardAvoidingView>
      </Modal>
    </ContestoSelezione.Provider>
  );
}

const styles = StyleSheet.create({
  barra: {
    position: "absolute",
    left: Spacing.three,
    right: Spacing.three,
    bottom: Spacing.three,
    borderWidth: 1,
    borderColor: ARANCIONE,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 8,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
  },
  anteprima: {
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    fontSize: 13,
    lineHeight: 18,
  },
  pulsanti: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: Spacing.four,
  },
  aggiungi: {
    backgroundColor: ARANCIONE,
    borderRadius: 999,
    paddingVertical: 7,
    paddingHorizontal: 14,
  },
  testoAggiungi: {
    color: "#000000",
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  salvata: {
    color: ARANCIONE,
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    textAlign: "center",
  },
  velo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  scheda: {
    width: "88%",
    maxWidth: 520,
    borderWidth: 1,
    borderColor: ARANCIONE,
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  titoloScheda: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 20,
    lineHeight: 26,
  },
  // La porzione evidenziata, con la barretta arancione come una citazione
  citazione: {
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    fontSize: 14,
    lineHeight: 20,
    borderLeftWidth: 3,
    borderLeftColor: ARANCIONE,
    paddingLeft: 10,
  },
  campo: {
    minHeight: 110,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    textAlignVertical: "top",
  },
});
