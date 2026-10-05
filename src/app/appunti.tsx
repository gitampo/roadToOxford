import BarraRicerca from "@/components/barraRicerca";
import LineaTitolo from "@/components/lineaTitolo";
import TestoEvidenziato, {
  contiene,
  estratto,
} from "@/components/testoEvidenziato";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, constants, Spacing } from "@/constants/theme";
import {
  confermaEliminazione,
  eliminaNota,
  leggiNote,
  salvaNote,
} from "@/data/appunti";
import { useTheme } from "@/hooks/use-theme";
import { Nota } from "@/types/nota";
import { Link, useFocusEffect } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useCallback, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { SafeAreaView } from "react-native-safe-area-context";

// Il rosso per eliminare (lo stesso delle risposte sbagliate)
const ROSSO = "#ff6b6b";

export default function Appunti() {
  const [aperto, setAperto] = useState(false);
  const [titolo, setTitolo] = useState("");
  const [descrizione, setDescrizione] = useState("");
  // Il testo è l'appunto vero e proprio; la descrizione un riassunto breve
  const [testo, setTesto] = useState("");
  const [note, setNote] = useState<Nota[]>([]);
  const [query, setQuery] = useState("");
  const theme = useTheme();
  // Ogni volta che la pagina torna visibile, recupera le note salvate sul
  // telefono: così compaiono anche quelle appena prese in una lezione.
  // leggiNote().then(setNote): quando la lettura è finita, il risultato va
  // dritto in setNote, e la lista si riempie con le note salvate
  useFocusEffect(
    useCallback(() => {
      leggiNote().then(setNote);
    }, []),
  );

  // Elimina una nota (dopo la conferma): dalla lista e dal telefono
  function elimina(nota: Nota) {
    confermaEliminazione(nota.titolo, () => {
      setNote((n) => n.filter((x) => x.id !== nota.id));
      eliminaNota(nota.id);
    });
  }

  // Solo le note con la parola cercata nel titolo, nella descrizione, nel
  // testo o nella porzione evidenziata
  const noteFiltrate = note.filter((n) =>
    [n.titolo, n.descrizione, n.testo, n.citazione].some((c) =>
      contiene(c, query),
    ),
  );

  function salvaNota() {
    // 1. Senza titolo non si salva: trim() toglie gli spazi,
    //    così anche un titolo fatto solo di spazi conta come vuoto
    if (titolo.trim() === "") return;

    // 2. La nuova nota, con i campi del tipo Nota
    const nuova: Nota = {
      id: String(Date.now()), // i millisecondi di adesso: diverso per ogni nota
      titolo: titolo.trim(),
      descrizione: descrizione.trim() || undefined,
      testo: testo.trim() || undefined,
      data: Date.now(),
    };

    // 3. Il nuovo elenco: la nota appena scritta in cima, poi tutte le altre.
    //    "...note" copia le note che c'erano già dentro il nuovo array
    const nuovoElenco = [nuova, ...note];
    setNote(nuovoElenco);
    salvaNote(nuovoElenco);

    // 4. Campi vuoti per la prossima nota, e il modal si chiude
    setTitolo("");
    setDescrizione("");
    setTesto("");
    setAperto(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={constants.container}>
        <ThemedText type="title" style={constants.title}>
          Appunti
        </ThemedText>
        <LineaTitolo colore={ColoriAttivita.appunti} />
        <BarraRicerca
          valore={query}
          onCambia={setQuery}
          placeholder="Cerca tra gli appunti..."
          style={{ marginBottom: Spacing.four }}
        />

        {/* L'intestazione della lista, come quelle dei livelli in Lezioni:
            titolo, quante sono e, a destra, la matita per una nota nuova */}
        <View style={styles.intestazione}>
          <ThemedText style={styles.intestazioneTitolo}>Lista note</ThemedText>
          <ThemedText
            style={[
              styles.intestazioneConteggio,
              { color: theme.textSecondary },
            ]}
          >
            {noteFiltrate.length} {noteFiltrate.length === 1 ? "nota" : "note"}
          </ThemedText>
          <Pressable
            onPress={() => setAperto(true)}
            hitSlop={10}
            style={({ pressed }) => [
              styles.nuovaNota,
              pressed && { opacity: 0.6 },
            ]}
          >
            <SymbolView
              name={{
                ios: "square.and.pencil",
                android: "edit",
                web: "edit",
              }}
              size={26}
              tintColor={ColoriAttivita.appunti}
            />
          </Pressable>
        </View>

        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: Spacing.five }}
          keyboardDismissMode="on-drag"
          data={noteFiltrate}
          keyExtractor={(nota) => nota.id}
          renderItem={({ item }) => {
            // L'anteprima: la descrizione; se non c'è, l'appunto scritto o
            // la porzione evidenziata. Sempre su una riga, poi i puntini.
            // Mentre si cerca, il primo campo che contiene la parola, a
            // partire da poco prima della parola, così si vede evidenziata
            const campi = [item.descrizione, item.testo, item.citazione];
            const conParola =
              query.trim() !== ""
                ? campi.find((c) => c && contiene(c, query))
                : undefined;
            const anteprima = conParola
              ? estratto(conParola, query)
              : item.descrizione || item.testo || item.citazione;
            return (
              // Swipe a destra: compare "Elimina" sulla sinistra
              <Swipeable
                friction={2}
                leftThreshold={40}
                overshootLeft={false}
                renderLeftActions={(_progresso, _spostamento, metodi) => (
                  <Pressable
                    onPress={() => {
                      metodi.close();
                      elimina(item);
                    }}
                    style={({ pressed }) => [
                      styles.elimina,
                      pressed && { opacity: 0.8 },
                    ]}
                  >
                    <SymbolView
                      name={{
                        ios: "trash",
                        android: "delete",
                        web: "delete",
                      }}
                      size={22}
                      tintColor="#ffffff"
                    />
                    <ThemedText style={styles.testoElimina}>Elimina</ThemedText>
                  </Pressable>
                )}
              >
                <Link
                  href={{
                    pathname: "/appunto/[id]",
                    params: { id: item.id },
                  }}
                  asChild
                >
                  <Pressable
                    // Tenendo premuto si può eliminare anche senza swipe
                    onLongPress={() => elimina(item)}
                    style={({ pressed }) => pressed && { opacity: 0.7 }}
                  >
                    {/* Lo stile sta su una View interna: sul web Link (asChild)
                      non passa al Pressable lo stile scritto come funzione */}
                    <View style={styles.nota}>
                      <TestoEvidenziato
                        testo={item.titolo}
                        cerca={query}
                        colore={ColoriAttivita.appunti}
                        style={styles.titoloNota}
                        numberOfLines={1}
                      />
                      {anteprima ? (
                        <TestoEvidenziato
                          testo={anteprima}
                          cerca={query}
                          colore={ColoriAttivita.appunti}
                          style={styles.descrizioneNota}
                          numberOfLines={1}
                        />
                      ) : null}
                      <ThemedText style={styles.dataNota}>
                        {new Date(item.data).toLocaleDateString("it-IT")}
                        {item.lezione ? ` · Lezione ${item.lezione.id}` : ""}
                      </ThemedText>
                      {/* La linetta che separa le note, come in Lezioni */}
                      <View style={styles.lineaArancione} />
                    </View>
                  </Pressable>
                </Link>
              </Swipeable>
            );
          }}
          ListEmptyComponent={
            <ThemedText>
              {query.trim() !== ""
                ? "Nessuna nota trovata"
                : "Nessuna nota. Tocca la matita per scriverne una."}
            </ThemedText>
          }
        />
        <Modal
          visible={aperto}
          transparent
          animationType="fade"
          onRequestClose={() => setAperto(false)}
        >
          {/* La tastiera spinge in su la scheda invece di coprirla */}
          <KeyboardAvoidingView
            style={styles.velo}
            // "padding" anche su Android: con l'app da bordo a bordo la
            // finestra non si restringe più, e "height" non basterebbe
            behavior="padding"
          >
            <View style={styles.scheda}>
              <ThemedView
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 12,
                  gap: 80,
                }}
              >
                <ThemedText type="subtitle">Nuova nota</ThemedText>
                <Pressable onPress={() => setAperto(false)}>
                  <SymbolView
                    name={{
                      ios: "xmark.circle.fill",
                      android: "close",
                      web: "close",
                    }}
                    style={{}}
                    size={35}
                    tintColor={"#cc7717"}
                  />
                </Pressable>
              </ThemedView>
              {/* I campi scorrono se, con la tastiera aperta, non c'è spazio */}
              <ScrollView
                style={styles.campi}
                contentContainerStyle={styles.contenutoCampi}
                keyboardShouldPersistTaps="handled"
              >
                <ThemedView style={styles.finestra}>
                  <TextInput
                    placeholder="Scegli un titolo"
                    value={titolo}
                    onChangeText={setTitolo}
                    style={{ color: "#ffffff" }}
                  />
                </ThemedView>
                <ThemedView style={styles.finestra}>
                  <TextInput
                    placeholder="Descrizione (facoltativa)"
                    value={descrizione}
                    onChangeText={setDescrizione}
                    multiline
                    style={{
                      minHeight: 50,
                      textAlignVertical: "top",
                      color: "#ffffff",
                    }}
                  />
                </ThemedView>
                {/* Il testo: l'appunto vero e proprio, quindi il campo più grande */}
                <ThemedView style={styles.finestra}>
                  <TextInput
                    placeholder="Testo"
                    value={testo}
                    onChangeText={setTesto}
                    multiline
                    style={{
                      minHeight: 160,
                      textAlignVertical: "top",
                      color: "#ffffff",
                    }}
                  />
                </ThemedView>
                <ThemedView
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <View style={styles.salva}>
                    <Pressable onPress={salvaNota}>
                      <ThemedText>Salva</ThemedText>
                    </Pressable>
                  </View>
                </ThemedView>
              </ScrollView>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  velo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    // niente bordo, niente height, niente paddingVertical
  },
  scheda: {
    width: "85%",
    // Con la tastiera aperta la scheda non supera lo spazio rimasto
    maxHeight: "90%",
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: "#cc7717",
    borderRadius: 16,
    backgroundColor: "#000000", // o il colore che preferisci
  },
  // I campi dentro la scheda: scorrono solo se non ci stanno
  campi: {
    flexGrow: 0,
  },
  contenutoCampi: {
    gap: 12,
  },
  finestra: {
    // togli width: "85%" e marginBottom (ora lo spazio lo dà il gap della scheda)
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#cc7717",
    backgroundColor: "#010101",
  },
  salva: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    padding: 5,
    borderColor: "#cc7717",
    backgroundColor: "#cc7717",
  },
  // Come le intestazioni dei livelli in Lezioni
  intestazione: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
    marginBottom: Spacing.two,
  },
  intestazioneTitolo: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 22,
    lineHeight: 28,
  },
  intestazioneConteggio: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  // La matita, spinta tutta a destra
  nuovaNota: {
    marginLeft: "auto",
  },
  nota: {
    paddingVertical: 10,
    marginBottom: Spacing.three,
    gap: 4,
  },
  // Il pulsante rosso che compare con lo swipe
  elimina: {
    backgroundColor: ROSSO,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    width: 88,
    marginBottom: Spacing.three,
    borderRadius: 12,
  },
  testoElimina: {
    color: "#ffffff",
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
  },
  // Come la linetta gialla delle lezioni, ma arancione
  lineaArancione: {
    width: 40,
    height: 2,
    backgroundColor: "#cc7717",
    marginTop: Spacing.three,
  },
  titoloNota: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 17,
  },
  descrizioneNota: {
    fontSize: 14,
    lineHeight: 20,
  },
  dataNota: {
    fontSize: 12,
    opacity: 0.6,
  },
  ricerca: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    paddingVertical: 10,
  },
});
