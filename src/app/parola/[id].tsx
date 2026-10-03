/**
 * Schermata: il dettaglio di una parola del vocabolario.
 * Raggiungibile da /parola/[id] (toccando una card del vocabolario).
 * In alto parola, fonetica e descrizione (e il riquadro del falso amico, se lo
 * è); poi una sezione per ogni uso (verbo, sostantivo...) con i significati
 * numerati, le traduzioni e gli esempi; in fondo phrasal verbs, espressioni,
 * gli errori da evitare e le lezioni in cui si parla della parola.
 */

import CardEsempi from "@/components/cardEsempi";
import CardNota from "@/components/cardNota";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, Spacing } from "@/constants/theme";
import { LEZIONI } from "@/data/lezioni";
import { PARADIGMI } from "@/data/paradigmi";
import { VOCABOLARIO } from "@/data/vocabolario";
import { useTheme } from "@/hooks/use-theme";
import { Espressione, Significato, Uso, Voce } from "@/types/vocabolario";
import { Href, Link, useLocalSearchParams } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ROSSO = ColoriAttivita.vocabolario;

// "SCUOLA E PROBLEMI" → "Scuola e problemi"
function primaMaiuscola(testo: string) {
  return testo.charAt(0) + testo.slice(1).toLowerCase();
}

export default function DettaglioParola() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const voce = VOCABOLARIO.find((v) => v.id === id);
  const theme = useTheme();

  if (!voce) {
    return <ThemedText>Parola non trovata</ThemedText>;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView>
        <ThemedView style={styles.container}>
          {/* Intestazione: parola, fonetica, descrizione */}
          <ThemedText style={[styles.etichetta, { color: theme.textSecondary }]}>
            Vocabolario
          </ThemedText>
          <View style={styles.titolo}>
            <ThemedText style={styles.parola}>{voce.parola}</ThemedText>
            <ThemedText style={[styles.fonetica, { color: theme.textSecondary }]}>
              {voce.fonetica}
            </ThemedText>
          </View>
          <ThemedText
            style={[styles.descrizione, { color: theme.textSecondary }]}
          >
            {voce.descrizione}
          </ThemedText>
          <View style={styles.lineaRossa} />

          {voce.falsoAmico && <FalsoAmico voce={voce} />}

          {voce.usi.map((uso, i) => (
            <SezioneUso key={i} uso={uso} voce={voce} />
          ))}

          {voce.phrasalVerbs && (
            <Sezione titolo="Phrasal verbs">
              {voce.phrasalVerbs.map((e) => (
                <BloccoEspressione key={e.testo} espressione={e} />
              ))}
            </Sezione>
          )}

          {voce.espressioni && (
            <Sezione titolo="Espressioni">
              {voce.espressioni.map((e) => (
                <BloccoEspressione key={e.testo} espressione={e} />
              ))}
            </Sezione>
          )}

          {voce.attenzione && (
            <Sezione titolo="Attenzione">
              {voce.attenzione.map((testo, i) => (
                <CardNota key={i} testo={testo} />
              ))}
            </Sezione>
          )}

          {voce.lezioni && (
            <Sezione titolo="Nelle lezioni">
              {voce.lezioni.map((l) => (
                <LinkLezione
                  key={`${l.id}-${l.riquadro}`}
                  id={l.id}
                  riquadro={l.riquadro}
                />
              ))}
            </Sezione>
          )}
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

// Una sezione della pagina: titoletto rosso e contenuto
function Sezione({
  titolo,
  fonetica,
  children,
}: {
  titolo: string;
  fonetica?: string;
  children: React.ReactNode;
}) {
  const theme = useTheme();

  return (
    <View style={styles.sezione}>
      <View style={styles.titoloSezione}>
        <Text style={styles.sottotitolo}>{titolo}</Text>
        {fonetica && (
          <Text style={[styles.foneticaSezione, { color: theme.textSecondary }]}>
            {fonetica}
          </Text>
        )}
      </View>
      {children}
    </View>
  );
}

// Un uso della parola (verbo transitivo, sostantivo...): forme e significati
function SezioneUso({ uso, voce }: { uso: Uso; voce: Voce }) {
  const theme = useTheme();
  // Il verbo è tra i paradigmi? Allora è irregolare e si può aprire la tabella
  const irregolare =
    uso.categoria === "verbo" &&
    uso.forme &&
    PARADIGMI.some((p) => p.present === voce.parola);

  return (
    <Sezione
      titolo={[uso.categoria, uso.dettaglio].filter(Boolean).join(" · ")}
      // La pronuncia della sezione solo se è diversa da quella della parola
      fonetica={uso.fonetica !== voce.fonetica ? uso.fonetica : undefined}
    >
      {uso.forme && (
        <View style={styles.forme}>
          <ThemedText style={[styles.testoForme, { color: theme.textSecondary }]}>
            Forme: <Text style={{ color: theme.text }}>{uso.forme}</Text>
          </ThemedText>
          {irregolare && (
            <Link href="/paradigmi" push asChild>
              <Pressable hitSlop={6}>
                <Text style={styles.link}>Verbo irregolare: vedi i paradigmi →</Text>
              </Pressable>
            </Link>
          )}
        </View>
      )}
      {uso.significati.map((s, i) => (
        <BloccoSignificato
          key={i}
          significato={s}
          numero={uso.significati.length > 1 ? i + 1 : undefined}
        />
      ))}
    </Sezione>
  );
}

// Un significato: numero, indicazione, etichette, traduzioni ed esempi
function BloccoSignificato({
  significato,
  numero,
}: {
  significato: Significato;
  numero?: number;
}) {
  const theme = useTheme();

  return (
    <View style={styles.significato}>
      {numero !== undefined && <Text style={styles.numero}>{numero}</Text>}
      <View style={styles.corpoSignificato}>
        {(significato.indicazione || significato.etichette) && (
          <View style={styles.rigaIndicazione}>
            {significato.indicazione && (
              <ThemedText
                style={[styles.indicazione, { color: theme.textSecondary }]}
              >
                {significato.indicazione}
              </ThemedText>
            )}
            {significato.etichette?.map((e) => (
              <Text
                key={e}
                style={[
                  styles.etichettaSignificato,
                  {
                    color: theme.textSecondary,
                    borderColor: theme.backgroundSelected,
                  },
                ]}
              >
                {e}
              </Text>
            ))}
          </View>
        )}
        <ThemedText style={styles.traduzioni}>
          {significato.traduzioni.join(", ")}
        </ThemedText>
        {significato.esempi && (
          <CardEsempi esempi={significato.esempi} colore={ROSSO} />
        )}
      </View>
    </View>
  );
}

// Un phrasal verb o un'espressione, con i suoi significati
function BloccoEspressione({ espressione }: { espressione: Espressione }) {
  return (
    <View style={styles.espressione}>
      <ThemedText style={styles.testoEspressione}>{espressione.testo}</ThemedText>
      {espressione.significati.map((s, i) => (
        <BloccoSignificato
          key={i}
          significato={s}
          numero={espressione.significati.length > 1 ? i + 1 : undefined}
        />
      ))}
    </View>
  );
}

// Il riquadro rosso in cima per i falsi amici: actually ≠ attualmente
function FalsoAmico({ voce }: { voce: Voce }) {
  const theme = useTheme();
  if (!voce.falsoAmico) return null;

  return (
    <View style={styles.falsoAmico}>
      <Text style={styles.sottotitolo}>Falso amico</Text>
      <ThemedText style={styles.confronto}>
        {voce.parola} <Text style={{ color: ROSSO }}>≠</Text>{" "}
        {voce.falsoAmico.parola}
      </ThemedText>
      <ThemedText style={[styles.testoFalsoAmico, { color: theme.textSecondary }]}>
        {voce.falsoAmico.spiegazione}
      </ThemedText>
    </View>
  );
}

// Apre la lezione direttamente al riquadro in cui si parla della parola
function LinkLezione({ id, riquadro }: { id: string; riquadro: number }) {
  const theme = useTheme();
  const lezione = LEZIONI.find((l) => l.id === id);
  if (!lezione) return null;
  const titoloRiquadro = lezione.riquadri?.[riquadro - 1]?.titolo;
  const href: Href = {
    pathname: "/lezione/[id]",
    params: { id, pagina: String(riquadro) },
  };

  return (
    <Link href={href} push asChild>
      <Pressable style={({ pressed }) => pressed && { opacity: 0.7 }}>
        <View
          style={[
            styles.lezione,
            { backgroundColor: theme.backgroundElement },
          ]}
        >
          <View style={{ flex: 1 }}>
            <ThemedText style={styles.titoloLezione}>
              Lezione {lezione.id} · {lezione.titolo}
            </ThemedText>
            {titoloRiquadro && (
              <ThemedText
                style={[styles.riquadroLezione, { color: theme.textSecondary }]}
              >
                {primaMaiuscola(titoloRiquadro)}
              </ThemedText>
            )}
          </View>
          <SymbolView
            name={{
              ios: "chevron.right",
              android: "chevron_right",
              web: "chevron_right",
            }}
            size={14}
            tintColor={ROSSO}
          />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.six,
    paddingHorizontal: Spacing.four,
  },
  etichetta: {
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontFamily: "Inter_600SemiBold",
    marginTop: Spacing.one,
  },
  titolo: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    columnGap: Spacing.three,
    marginTop: Spacing.two,
  },
  parola: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 38,
    lineHeight: 46,
  },
  fonetica: {
    fontFamily: "Inter_400Regular",
    fontSize: 17,
  },
  descrizione: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    lineHeight: 21,
    marginTop: Spacing.one,
  },
  lineaRossa: {
    width: 40,
    height: 2,
    backgroundColor: ROSSO,
    marginTop: Spacing.three,
  },
  sezione: {
    marginTop: Spacing.five,
    gap: Spacing.three,
  },
  titoloSezione: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: Spacing.two,
  },
  // Come i titoletti dentro i riquadri delle lezioni, ma in rosso
  sottotitolo: {
    color: ROSSO,
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontFamily: "Inter_600SemiBold",
  },
  foneticaSezione: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  forme: {
    gap: 2,
  },
  testoForme: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  link: {
    color: ROSSO,
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
    lineHeight: 20,
  },
  significato: {
    flexDirection: "row",
    gap: 12,
  },
  numero: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 18,
    lineHeight: 24,
    color: ROSSO,
    width: 14,
  },
  corpoSignificato: {
    flex: 1,
    gap: 6,
  },
  rigaIndicazione: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 6,
  },
  indicazione: {
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    fontSize: 14,
    lineHeight: 20,
  },
  // Registro, varietà, ambito: piccole etichette con il bordo
  etichettaSignificato: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 7,
    paddingVertical: 1,
  },
  traduzioni: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 18,
    lineHeight: 24,
  },
  espressione: {
    gap: Spacing.two,
  },
  testoEspressione: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 19,
    lineHeight: 25,
  },
  falsoAmico: {
    marginTop: Spacing.four,
    borderWidth: 1,
    borderColor: ROSSO,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 6,
  },
  confronto: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 20,
    lineHeight: 26,
  },
  testoFalsoAmico: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 21,
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
  riquadroLezione: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
  },
});
