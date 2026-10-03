import LineaTitolo from "@/components/lineaTitolo";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, constants, Spacing } from "@/constants/theme";
import { leggiNote, salvaNote } from "@/data/appunti";
import { Nota } from "@/types/nota";
import { Link, useFocusEffect } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useCallback, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Appunti() {
  const [aperto, setAperto] = useState(false);
  const [titolo, setTitolo] = useState("");
  const [descrizione, setDescrizione] = useState("");
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

  function salvaNota() {
    // 1. Senza titolo non si salva: trim() toglie gli spazi,
    //    così anche un titolo fatto solo di spazi conta come vuoto
    if (titolo.trim() === "") return;

    // 2. La nuova nota, con i campi del tipo Nota
    const nuova: Nota = {
      id: String(Date.now()), // i millisecondi di adesso: diverso per ogni nota
      titolo: titolo.trim(),
      descrizione: descrizione.trim(),
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
              <Link
                href={{ pathname: "/appunto/[id]", params: { id: item.id } }}
                asChild
              >
                <Pressable style={({ pressed }) => pressed && { opacity: 0.7 }}>
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
          <View style={styles.velo}>
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
                    minHeight: 120,
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
            </View>
          </View>
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
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: "#cc7717",
    borderRadius: 16,
    backgroundColor: "#000000", // o il colore che preferisci
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
