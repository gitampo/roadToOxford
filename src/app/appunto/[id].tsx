/**
 * Schermata: un appunto.
 * Raggiungibile da /appunto/[id] (toccando una nota nella pagina Appunti).
 * Mostra titolo, data, descrizione e, per le note prese in una lezione, la
 * porzione di testo evidenziata (con il collegamento al riquadro) e
 * l'appunto scritto.
 * Con "Modifica" titolo, descrizione e appunto diventano campi da riscrivere;
 * la porzione evidenziata resta com'è, perché è il testo della lezione.
 */

import { ARANCIONE } from "@/components/annotazioni";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";
import { aggiornaNota, leggiNote } from "@/data/appunti";
import { useTheme } from "@/hooks/use-theme";
import { Nota } from "@/types/nota";
import { Link, useLocalSearchParams } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// "SCUOLA E PROBLEMI" → "Scuola e problemi"
function primaMaiuscola(testo: string) {
  return testo.charAt(0) + testo.slice(1).toLowerCase();
}

export default function Appunto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  // undefined = ancora in lettura, null = non trovata
  const [nota, setNota] = useState<Nota | null | undefined>(undefined);
  // La modifica: i campi in scrittura, finché non si salva o si annulla
  const [modifica, setModifica] = useState(false);
  const [titolo, setTitolo] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [testo, setTesto] = useState("");

  useEffect(() => {
    leggiNote().then((note) => setNota(note.find((n) => n.id === id) ?? null));
  }, [id]);

  // Riempie i campi con i valori attuali e passa alla modifica
  function iniziaModifica() {
    if (!nota) return;
    setTitolo(nota.titolo);
    setDescrizione(nota.descrizione ?? "");
    setTesto(nota.testo ?? "");
    setModifica(true);
  }

  async function salvaModifica() {
    if (!nota || titolo.trim() === "") return;
    const aggiornata: Nota = {
      ...nota,
      titolo: titolo.trim(),
      descrizione: descrizione.trim() || undefined,
      testo: testo.trim() || undefined,
    };
    await aggiornaNota(aggiornata);
    setNota(aggiornata);
    setModifica(false);
  }

  // I colori dei campi in modifica
  const stileCampo = {
    color: theme.text,
    borderColor: theme.backgroundSelected,
  };

  if (nota === undefined) return null;
  if (nota === null) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        <ThemedText style={styles.container}>Nota non trovata</ThemedText>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView>
        <ThemedView style={styles.container}>
          {/* In alto: data e pulsanti (Modifica, oppure Annulla e Salva) */}
          <View style={styles.intestazione}>
            <ThemedText
              style={[styles.etichetta, { color: theme.textSecondary }]}
            >
              Appunto · {new Date(nota.data).toLocaleDateString("it-IT")}
            </ThemedText>
            {modifica ? (
              <View style={styles.pulsanti}>
                <Pressable onPress={() => setModifica(false)} hitSlop={8}>
                  <ThemedText style={{ color: theme.textSecondary }}>
                    Annulla
                  </ThemedText>
                </Pressable>
                <Pressable
                  onPress={salvaModifica}
                  disabled={titolo.trim() === ""}
                  style={({ pressed }) => [
                    styles.salva,
                    (pressed || titolo.trim() === "") && { opacity: 0.6 },
                  ]}
                >
                  <ThemedText style={styles.testoSalva}>Salva</ThemedText>
                </Pressable>
              </View>
            ) : (
              <Pressable
                onPress={iniziaModifica}
                hitSlop={8}
                style={({ pressed }) => [
                  styles.pulsanti,
                  pressed && { opacity: 0.6 },
                ]}
              >
                <SymbolView
                  name={{
                    ios: "square.and.pencil",
                    android: "edit",
                    web: "edit",
                  }}
                  size={16}
                  tintColor={ARANCIONE}
                />
                <ThemedText style={styles.modifica}>Modifica</ThemedText>
              </Pressable>
            )}
          </View>

          {modifica ? (
            <TextInput
              value={titolo}
              onChangeText={setTitolo}
              placeholder="Titolo"
              placeholderTextColor={theme.textSecondary}
              style={[styles.campo, styles.campoTitolo, stileCampo]}
            />
          ) : (
            <ThemedText style={styles.titolo}>{nota.titolo}</ThemedText>
          )}
          <View style={styles.linea} />

          {modifica ? (
            <TextInput
              value={descrizione}
              onChangeText={setDescrizione}
              placeholder="Descrizione (facoltativa)"
              placeholderTextColor={theme.textSecondary}
              multiline
              style={[styles.campo, styles.campoLungo, stileCampo]}
            />
          ) : nota.descrizione ? (
            <ThemedText style={styles.testo}>{nota.descrizione}</ThemedText>
          ) : null}

          {/* La porzione evidenziata nella lezione, con il collegamento */}
          {nota.citazione ? (
            <View style={styles.sezione}>
              <ThemedText style={styles.sottotitolo}>Dalla lezione</ThemedText>
              <ThemedText
                style={[styles.citazione, { color: theme.textSecondary }]}
              >
                {nota.citazione}
              </ThemedText>
              {nota.lezione && (
                <Link
                  href={{
                    pathname: "/lezione/[id]",
                    params: {
                      id: nota.lezione.id,
                      pagina: String(nota.lezione.pagina),
                    },
                  }}
                  push
                  asChild
                >
                  <Pressable
                    style={({ pressed }) => pressed && { opacity: 0.7 }}
                  >
                    <View
                      style={[
                        styles.lezione,
                        { backgroundColor: theme.backgroundElement },
                      ]}
                    >
                      <View style={{ flex: 1 }}>
                        <ThemedText style={styles.titoloLezione}>
                          Lezione {nota.lezione.id} · {nota.lezione.titolo}
                        </ThemedText>
                        {nota.lezione.riquadro ? (
                          <ThemedText
                            style={[
                              styles.riquadro,
                              { color: theme.textSecondary },
                            ]}
                          >
                            {primaMaiuscola(nota.lezione.riquadro)}
                          </ThemedText>
                        ) : null}
                      </View>
                      <SymbolView
                        name={{
                          ios: "chevron.right",
                          android: "chevron_right",
                          web: "chevron_right",
                        }}
                        size={14}
                        tintColor={ARANCIONE}
                      />
                    </View>
                  </Pressable>
                </Link>
              )}
            </View>
          ) : null}

          {/* L'appunto scritto (in modifica si può aggiungere anche a una
              nota che non l'aveva) */}
          {modifica ? (
            <View style={styles.sezione}>
              <ThemedText style={styles.sottotitolo}>Il tuo appunto</ThemedText>
              <TextInput
                value={testo}
                onChangeText={setTesto}
                placeholder="Scrivi il tuo appunto…"
                placeholderTextColor={theme.textSecondary}
                multiline
                style={[styles.campo, styles.campoLungo, stileCampo]}
              />
            </View>
          ) : nota.testo ? (
            <View style={styles.sezione}>
              <ThemedText style={styles.sottotitolo}>Il tuo appunto</ThemedText>
              <ThemedText style={styles.testo}>{nota.testo}</ThemedText>
            </View>
          ) : null}
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.six,
    paddingHorizontal: Spacing.four,
  },
  intestazione: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: Spacing.three,
  },
  pulsanti: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
  },
  modifica: {
    color: ARANCIONE,
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  salva: {
    backgroundColor: ARANCIONE,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  testoSalva: {
    color: "#000000",
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  campo: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
  },
  campoTitolo: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 24,
    marginTop: Spacing.two,
  },
  campoLungo: {
    minHeight: 110,
    textAlignVertical: "top",
  },
  etichetta: {
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontFamily: "Inter_600SemiBold",
  },
  titolo: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 30,
    lineHeight: 38,
    marginTop: Spacing.two,
  },
  linea: {
    width: 40,
    height: 2,
    backgroundColor: ARANCIONE,
    marginTop: Spacing.three,
    marginBottom: Spacing.four,
  },
  sezione: {
    marginTop: Spacing.four,
    gap: Spacing.three,
  },
  sottotitolo: {
    color: ARANCIONE,
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontFamily: "Inter_600SemiBold",
  },
  testo: {
    fontFamily: "Inter_400Regular",
    fontSize: 17,
    lineHeight: 25,
  },
  // La porzione evidenziata, con la barretta arancione come una citazione
  citazione: {
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    fontSize: 16,
    lineHeight: 24,
    borderLeftWidth: 3,
    borderLeftColor: ARANCIONE,
    paddingLeft: 12,
  },
  lezione: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  titoloLezione: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    lineHeight: 20,
  },
  riquadro: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
  },
});
