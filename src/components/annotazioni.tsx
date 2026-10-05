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
 * Dopo il salvataggio la porzione resta evidenziata: toccandola compare la
 * card con l'appunto e il pulsante "Vai alla nota".
 *
 * AreaAnnotazioni avvolge il contenuto della lezione e tiene la selezione;
 * i testi la leggono con useSelezione e le note già prese con useNoteSalvate
 * (vedi TestoConRimandi).
 */

import { aggiungiNota, leggiNote, titoloDaCitazione } from "@/data/appunti";
import { ColoriAttivita, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Nota } from "@/types/nota";
import { useFocusEffect, useRouter } from "expo-router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
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
  // Le note già prese in questo riquadro
  note: Nota[];
  // Mostra la card di una nota; y: dove l'utente ha toccato
  apriNota: (nota: Nota, y: number) => void;
};

const ContestoSelezione = createContext<Contesto | null>(null);

// null fuori da una lezione, e sul web (dove si usa la selezione del
// browser): lì i testi non si dividono in parole da toccare
export function useSelezione() {
  const contesto = useContext(ContestoSelezione);
  return Platform.OS === "web" ? null : contesto;
}

// Le note del riquadro, da evidenziare nei testi (anche sul web).
// null fuori da una lezione
export function useNoteSalvate() {
  return useContext(ContestoSelezione);
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
  // Le note prese in questo riquadro, e quella di cui si vede la card
  const [note, setNote] = useState<Nota[]>([]);
  const [aperta, setAperta] = useState<{ nota: Nota; y: number } | null>(null);

  // Rilette ogni volta che si torna sulla lezione: dalla pagina della nota
  // si può modificarla o eliminarla
  useFocusEffect(
    useCallback(() => {
      let attivo = true;
      leggiNote().then((tutte) => {
        if (!attivo) return;
        setNote(
          tutte.filter(
            (n) =>
              n.citazione &&
              n.lezione?.id === lezione.id &&
              n.lezione.pagina === pagina,
          ),
        );
      });
      return () => {
        attivo = false;
      };
    }, [lezione.id, pagina]),
  );

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
    const nota: Nota = {
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
      // Sul web la selezione è del browser: non si sa in quali parole sta
      posizione:
        selezione.chiave === "web"
          ? undefined
          : {
              chiave: selezione.chiave,
              da: Math.min(selezione.ancora, selezione.fine),
              a: Math.max(selezione.ancora, selezione.fine),
            },
      data: ora,
    };
    await aggiungiNota(nota);
    setNote((n) => [nota, ...n]);
    chiudiModulo();
    setSelezione(null);
    if (Platform.OS === "web") window.getSelection()?.removeAllRanges();
    setSalvata(true);
  }

  return (
    <ContestoSelezione.Provider
      value={{
        selezione,
        seleziona: setSelezione,
        note,
        apriNota: (nota, y) => setAperta({ nota, y }),
      }}
    >
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
          // "padding" anche su Android: con l'app da bordo a bordo la
          // finestra non si restringe più, e "height" non basterebbe
          behavior="padding"
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

      {aperta && (
        <CardAppunto
          nota={aperta.nota}
          y={aperta.y}
          onChiudi={() => setAperta(null)}
        />
      )}
    </ContestoSelezione.Provider>
  );
}

// La card che compare toccando una porzione evidenziata: come l'anteprima
// dei rimandi, sopra o sotto il punto toccato
function CardAppunto({
  nota,
  y,
  onChiudi,
}: {
  nota: Nota;
  y: number;
  onChiudi: () => void;
}) {
  const theme = useTheme();
  const router = useRouter();
  const { height } = useWindowDimensions();

  // Se il tocco è nella metà bassa dello schermo, la card va sopra
  const posizione =
    y > height / 2 ? { bottom: height - y + 16 } : { top: y + 28 };

  function vaiAllaNota() {
    onChiudi();
    router.push({ pathname: "/appunto/[id]", params: { id: nota.id } });
  }

  return (
    <Modal transparent animationType="fade" onRequestClose={onChiudi}>
      {/* Toccando fuori dalla card si chiude */}
      <Pressable style={styles.sfondoCard} onPress={onChiudi} />
      <ThemedView type="backgroundElement" style={[styles.card, posizione]}>
        <ThemedText style={[styles.etichetta, { color: theme.textSecondary }]}>
          Il tuo appunto
        </ThemedText>
        <ThemedText style={styles.titoloCard}>{nota.titolo}</ThemedText>
        <ScrollView style={styles.contenutoCard}>
          <View style={{ gap: 8 }}>
            <ThemedText
              style={[styles.citazione, { color: theme.textSecondary }]}
            >
              {nota.citazione}
            </ThemedText>
            <ThemedText
              style={[
                styles.testoCard,
                !nota.testo && {
                  color: theme.textSecondary,
                  fontStyle: "italic",
                },
              ]}
            >
              {nota.testo ?? "Nessun appunto scritto."}
            </ThemedText>
          </View>
        </ScrollView>
        <Pressable
          onPress={vaiAllaNota}
          style={({ pressed }) => [
            styles.aggiungi,
            styles.vaiAllaNota,
            pressed && { opacity: 0.8 },
          ]}
        >
          <ThemedText style={styles.testoAggiungi}>Vai alla nota →</ThemedText>
        </Pressable>
      </ThemedView>
    </Modal>
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
  sfondoCard: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  card: {
    position: "absolute",
    left: 16,
    right: 16,
    borderWidth: 1,
    borderColor: ARANCIONE,
    borderRadius: 12,
    padding: 14,
    gap: 8,
  },
  etichetta: {
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    fontFamily: "Inter_600SemiBold",
  },
  titoloCard: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 17,
    lineHeight: 22,
  },
  contenutoCard: {
    maxHeight: 220,
  },
  testoCard: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  vaiAllaNota: {
    alignSelf: "flex-end",
    paddingVertical: 8,
    marginTop: 4,
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
