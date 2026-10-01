import { LEZIONI } from "@/data/lezioni";
import { useTheme } from "@/hooks/use-theme";
import { Blocco } from "@/types/lezione";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  GestureResponderEvent,
  Modal,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  useWindowDimensions,
} from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

const GIALLO = "#ffe100";

// Nei dati un rimando si scrive "lezione 28{3}": lezione 28, riquadro 3.
// Nell'app si vede solo "lezione 28", sottolineato e cliccabile.
const RIMANDO = /(lezione )?(\d+)\{(\d+)\}/g;

type Props = {
  testo: string;
  style?: StyleProp<TextStyle>;
};

type Aperto = {
  lezione: string;
  riquadro: number;
  y: number; // dove l'utente ha toccato, per posizionare il riquadrino
};

export default function TestoConRimandi({ testo, style }: Props) {
  const [aperto, setAperto] = useState<Aperto | null>(null);

  // Divide il testo in pezzi normali e pezzi cliccabili
  const pezzi = [];
  let ultimo = 0;
  for (const m of testo.matchAll(RIMANDO)) {
    const inizio = m.index ?? 0;
    if (inizio > ultimo) pezzi.push(testo.slice(ultimo, inizio));
    const lezione = m[2];
    const riquadro = Number(m[3]);
    pezzi.push(
      <Text
        key={inizio}
        style={styles.link}
        onPress={(e: GestureResponderEvent) =>
          setAperto({ lezione, riquadro, y: e.nativeEvent.pageY })
        }
      >
        {(m[1] ?? "") + lezione}
      </Text>,
    );
    ultimo = inizio + m[0].length;
  }
  if (ultimo < testo.length) pezzi.push(testo.slice(ultimo));

  return (
    <>
      <ThemedText style={style}>{pezzi}</ThemedText>
      {aperto && (
        <Anteprima aperto={aperto} onChiudi={() => setAperto(null)} />
      )}
    </>
  );
}

// Il riquadrino che compare sopra (o sotto) il rimando
function Anteprima({
  aperto,
  onChiudi,
}: {
  aperto: Aperto;
  onChiudi: () => void;
}) {
  const theme = useTheme();
  const router = useRouter();
  const { height } = useWindowDimensions();

  const lezione = LEZIONI.find((l) => l.id === aperto.lezione);
  const riquadro = lezione?.riquadri?.[aperto.riquadro - 1];

  // Se il tocco è nella metà bassa dello schermo, il riquadrino va sopra
  const sopra = aperto.y > height / 2;
  const posizione = sopra
    ? { bottom: height - aperto.y + 16 }
    : { top: aperto.y + 28 };

  function vaiAllaLezione() {
    onChiudi();
    router.push({
      pathname: "/lezione/[id]",
      params: { id: aperto.lezione, pagina: String(aperto.riquadro) },
    });
  }

  return (
    <Modal transparent animationType="fade" onRequestClose={onChiudi}>
      {/* Toccando fuori dal riquadrino si chiude */}
      <Pressable style={styles.sfondo} onPress={onChiudi} />
      <ThemedView
        type="backgroundElement"
        style={[
          styles.riquadrino,
          posizione,
          { borderColor: theme.backgroundSelected },
        ]}
      >
        <ThemedText style={[styles.etichetta, { color: theme.textSecondary }]}>
          Lezione {aperto.lezione}
          {lezione ? ` · ${lezione.titolo}` : ""}
        </ThemedText>
        {riquadro ? (
          <>
            <ThemedText style={styles.titolo}>{riquadro.titolo}</ThemedText>
            <ScrollView style={styles.contenuto}>
              {riquadro.blocchi.map((blocco, i) => (
                <AnteprimaBlocco key={i} blocco={blocco} />
              ))}
            </ScrollView>
          </>
        ) : (
          <ThemedText style={styles.testo}>Lezione non ancora disponibile.</ThemedText>
        )}
        {lezione && (
          <Pressable
            onPress={vaiAllaLezione}
            style={({ pressed }) => [styles.bottone, pressed && { opacity: 0.8 }]}
          >
            <ThemedText style={styles.testoBottone}>
              Vai alla lezione {aperto.lezione} →
            </ThemedText>
          </Pressable>
        )}
      </ThemedView>
    </Modal>
  );
}

// Versione compatta di un blocco, solo testo
function AnteprimaBlocco({ blocco }: { blocco: Blocco }) {
  const theme = useTheme();
  const grigio = { color: theme.textSecondary };
  // Nell'anteprima i rimandi "28{3}" diventano semplicemente "28"
  const pulisci = (t: string) => t.replace(/\{\d+\}/g, "");

  if (blocco.tipo === "testo" || blocco.tipo === "nota") {
    return <ThemedText style={styles.testo}>{pulisci(blocco.testo)}</ThemedText>;
  }
  if (blocco.tipo === "esempi") {
    return (
      <ThemedView type="backgroundElement" style={styles.lista}>
        {blocco.esempi.map((e, i) => (
          <ThemedText key={i} style={styles.testo}>
            <Text style={[styles.inglese, e.sbagliato && styles.sbagliato]}>
              {e.en}
            </Text>
            {e.it && !e.sbagliato ? (
              <Text style={grigio}>{"  " + pulisci(e.it)}</Text>
            ) : null}
          </ThemedText>
        ))}
      </ThemedView>
    );
  }
  if (blocco.tipo === "tabella") {
    return (
      <ThemedView type="backgroundElement" style={styles.lista}>
        {blocco.righe.map(([a, b], i) => (
          <ThemedText key={i} style={styles.testo}>
            <Text style={{ color: GIALLO }}>{a}</Text>
            <Text style={grigio}>{"  " + pulisci(b)}</Text>
          </ThemedText>
        ))}
      </ThemedView>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  // Al posto della sottolineatura: testo giallo in grassetto
  // su uno sfondo giallo appena accennato, come un evidenziatore
  link: {
    color: GIALLO,
    fontFamily: "Inter_600SemiBold",
    backgroundColor: "rgba(255, 225, 0, 0.12)",
  },
  sfondo: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  riquadrino: {
    position: "absolute",
    left: 16,
    right: 16,
    borderWidth: 1,
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
  titolo: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 17,
    lineHeight: 22,
  },
  contenuto: {
    maxHeight: 220,
  },
  lista: {
    gap: 4,
    marginVertical: 4,
  },
  testo: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  inglese: {
    fontFamily: "Inter_600SemiBold",
  },
  sbagliato: {
    color: "#ff6b6b",
    textDecorationLine: "line-through",
  },
  bottone: {
    alignSelf: "flex-end",
    backgroundColor: GIALLO,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginTop: 4,
  },
  testoBottone: {
    color: "#000000",
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
});
