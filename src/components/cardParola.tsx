import { ColoriAttivita, Spacing } from "@/constants/theme";
import {
  altrePronunce,
  traduzioneCorrisponde,
  traduzioniPerCategoria,
} from "@/data/vocabolario";
import { useTheme } from "@/hooks/use-theme";
import { Voce } from "@/types/vocabolario";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./themed-text";

const ROSSO = ColoriAttivita.vocabolario;
// Quante traduzioni per categoria si vedono nella card: le altre sono nel dettaglio
const MAX_TRADUZIONI = 3;

type Props = {
  voce: Voce;
  // La ricerca in italiano: le traduzioni che corrispondono vanno per prime,
  // in rosso, e compaiono anche i phrasal verbs e le espressioni trovati
  cercaItaliano?: string;
};

// La card di una parola nella lista: parola e fonetica, le traduzioni divise
// per categoria, la descrizione e la linetta rossa. Toccandola si apre il dettaglio
export default function CardParola({ voce, cercaItaliano }: Props) {
  const theme = useTheme();
  const q = cercaItaliano?.trim() ?? "";
  const evidenzia = (t: string) => q !== "" && traduzioneCorrisponde(t, q);

  // Phrasal verbs ed espressioni che contengono la parola italiana cercata
  const extraTrovati =
    q === ""
      ? []
      : [...(voce.phrasalVerbs ?? []), ...(voce.espressioni ?? [])].flatMap(
          (e) => {
            const trovate = e.significati
              .flatMap((s) => s.traduzioni)
              .filter(evidenzia);
            return trovate.length > 0 ? [{ testo: e.testo, trovate }] : [];
          },
        );

  return (
    <Link
      href={{ pathname: "/parola/[id]", params: { id: voce.id } }}
      asChild
    >
      <Pressable style={({ pressed }) => pressed && { opacity: 0.7 }}>
        {/* Il contenuto sta in una View interna: sul web Link (asChild) non
            passa al Pressable lo stile scritto come funzione */}
        <View style={styles.card}>
          <View style={styles.intestazione}>
            <ThemedText style={styles.parola}>{voce.parola}</ThemedText>
            <ThemedText style={[styles.fonetica, { color: theme.textSecondary }]}>
              {voce.fonetica}
              {altrePronunce(voce).map(
                (p) => `  ·  ${p.categoria} ${p.fonetica}`,
              )}
            </ThemedText>
          </View>

          {traduzioniPerCategoria(voce).map((g) => {
            // Con la ricerca in italiano, prima le traduzioni trovate
            const ordinate = [
              ...g.traduzioni.filter(evidenzia),
              ...g.traduzioni.filter((t) => !evidenzia(t)),
            ].slice(0, MAX_TRADUZIONI);
            return (
              <View key={g.categoria} style={styles.riga}>
                <Text style={styles.categoria}>{g.categoria}</Text>
                <Text style={[styles.traduzioni, { color: theme.text }]}>
                  {ordinate.map((t, i) => (
                    <Text key={t}>
                      {i > 0 && " · "}
                      <Text style={evidenzia(t) && styles.trovata}>{t}</Text>
                    </Text>
                  ))}
                </Text>
              </View>
            );
          })}

          {extraTrovati.map((e) => (
            <View key={e.testo} style={styles.riga}>
              <Text style={[styles.categoria, styles.espressione]}>
                {e.testo}
              </Text>
              <Text style={[styles.traduzioni, styles.trovata]}>
                {e.trovate.join(" · ")}
              </Text>
            </View>
          ))}

          <ThemedText style={[styles.descrizione, { color: theme.textSecondary }]}>
            {voce.descrizione}
          </ThemedText>
          <View style={styles.lineaRossa} />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 4,
    paddingVertical: 10,
    paddingRight: Spacing.two,
    marginBottom: Spacing.two,
  },
  intestazione: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    columnGap: Spacing.two,
    marginBottom: 2,
  },
  parola: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 24,
    lineHeight: 30,
  },
  fonetica: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  // Etichetta della categoria a sinistra, traduzioni a destra
  riga: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: Spacing.two,
  },
  categoria: {
    width: 92,
    color: ROSSO,
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  // Un phrasal verb trovato cercando in italiano: si legge com'è scritto
  espressione: {
    fontSize: 12,
    letterSpacing: 0,
    textTransform: "none",
  },
  traduzioni: {
    flex: 1,
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    lineHeight: 21,
  },
  trovata: {
    color: ROSSO,
  },
  descrizione: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 19,
    marginTop: 2,
  },
  // Come la linetta gialla delle lezioni
  lineaRossa: {
    width: 40,
    height: 2,
    backgroundColor: ROSSO,
    marginTop: Spacing.three,
  },
});
