import LineaTitolo from "@/components/lineaTitolo";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, constants, Spacing } from "@/constants/theme";
import {
  confermaEliminazione,
  eliminaNota,
  leggiNote,
  salvaNote,
} from "@/data/appunti";
import { Nota } from "@/types/nota";
import { Link, useFocusEffect } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useCallback, useState } from "react";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
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
        <ThemedView style={{ flexDirection: "row" }}>
          <ThemedText type="title" style={constants.title}>
            Appunti
          </ThemedText>
          <ThemedView style={{ flex: 1, marginLeft: 90 }}>
            <Pressable onPress={() => setAperto(true)}>
              <SymbolView
                name={{
                  ios: "square.and.pencil",
                  android: "edit",
                  web: "edit",
                }}
                size={50}
                tintColor={"#cc7717"}
              />
            </Pressable>
          </ThemedView>
        </ThemedView>
        <LineaTitolo colore={ColoriAttivita.appunti} />
        <ThemedText type="subtitle" style={{ marginBottom: 20 }}>
          Lista note
        </ThemedText>
        <FlatList
          data={note}
          keyExtractor={(nota) => nota.id}
          renderItem={({ item }) => {
            // L'anteprima: la descrizione; se non c'è, l'appunto scritto o
            // la porzione evidenziata. Sempre su una riga, poi i puntini
            const anteprima = item.descrizione || item.testo || item.citazione;
            return (
              // Swipe a sinistra: compare "Elimina" sulla destra
              <Swipeable
                friction={2}
                rightThreshold={40}
                overshootRight={false}
                renderRightActions={(_progresso, _spostamento, metodi) => (
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
                      name={{ ios: "trash", android: "delete", web: "delete" }}
                      size={22}
                      tintColor="#ffffff"
                    />
                    <ThemedText style={styles.testoElimina}>Elimina</ThemedText>
                  </Pressable>
                )}
              >
                <Link
                  href={{ pathname: "/appunto/[id]", params: { id: item.id } }}
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
                      <ThemedText style={styles.titoloNota} numberOfLines={1}>
                        {item.titolo}
                      </ThemedText>
                      {anteprima ? (
                        <ThemedText
                          style={styles.descrizioneNota}
                          numberOfLines={1}
                        >
                          {anteprima}
                        </ThemedText>
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
              Nessuna nota. Tocca la matita per scriverne una.
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
            behavior={Platform.OS === "ios" ? "padding" : "height"}
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
                    placeholder="Descrizione"
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
});
