import { LEZIONI } from "@/data/lezioni";
import { useTheme } from "@/hooks/use-theme";
import { Blocco } from "@/types/lezione";
import { Nota } from "@/types/nota";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  GestureResponderEvent,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  useWindowDimensions,
} from "react-native";
import { ARANCIONE, useNoteSalvate, useSelezione } from "./annotazioni";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

const GIALLO = "#ffe100";

// Nei dati un rimando si scrive "lezione 28{3}": lezione 28, riquadro 3.
// Nell'app si vede solo "lezione 28", sottolineato e cliccabile.
// Anche le lezioni con la lettera: M3{2} (modi di dire), C1{4} (cultura),
// S4{2} (situazioni)
const RIMANDO = /(lezione )?([MCS]?\d+)\{(\d+)\}/g;

type Props = {
  testo: string;
  style?: StyleProp<TextStyle>;
  // Se c'è (e il testo sta dentro una lezione) le parole si possono
  // selezionare per prendere un appunto: deve essere diversa per ogni testo
  // del riquadro
  chiave?: string;
};

// Un pezzo del testo: una parola (con il suo numero), uno spazio o un rimando
type Pezzo =
  | { tipo: "spazio"; testo: string }
  | { tipo: "parola"; testo: string; n: number }
  | {
      tipo: "rimando";
      testo: string;
      n: number;
      lezione: string;
      riquadro: number;
    };

// Divide il testo in parole, spazi e rimandi. Le parole e i rimandi sono
// numerati da 0: sono le unità che si possono selezionare
function dividi(testo: string) {
  const pezzi: Pezzo[] = [];
  let n = 0;
  const aggiungiTesto = (t: string) => {
    for (const p of t.split(/(\s+)/)) {
      if (p === "") continue;
      if (/^\s+$/.test(p)) pezzi.push({ tipo: "spazio", testo: p });
      else pezzi.push({ tipo: "parola", testo: p, n: n++ });
    }
  };
  let ultimo = 0;
  for (const m of testo.matchAll(RIMANDO)) {
    const inizio = m.index ?? 0;
    if (inizio > ultimo) aggiungiTesto(testo.slice(ultimo, inizio));
    pezzi.push({
      tipo: "rimando",
      testo: (m[1] ?? "") + m[2],
      n: n++,
      lezione: m[2],
      riquadro: Number(m[3]),
    });
    ultimo = inizio + m[0].length;
  }
  if (ultimo < testo.length) aggiungiTesto(testo.slice(ultimo));
  return pezzi;
}

// Il testo tra due parole (comprese), come si legge nell'app
function testoTra(pezzi: Pezzo[], da: number, a: number) {
  const primo = pezzi.findIndex((p) => p.tipo !== "spazio" && p.n === da);
  const ultimo = pezzi.findIndex((p) => p.tipo !== "spazio" && p.n === a);
  return pezzi
    .slice(primo, ultimo + 1)
    .map((p) => p.testo)
    .join("");
}

// Le note già prese che stanno in questo testo, con le parole che coprono.
// Se la nota sa in quali parole sta (ed è ancora lo stesso testo) si usa
// quello; altrimenti (note prese sul web) si cerca la citazione tra le parole
function noteNelTesto(pezzi: Pezzo[], note: Nota[], chiave?: string) {
  const unita = pezzi.flatMap((p) =>
    p.tipo === "spazio" ? [] : [p.testo.replace(/\s+/g, " ")],
  );
  const trovate: { nota: Nota; da: number; a: number }[] = [];
  for (const nota of note) {
    const citazione = nota.citazione?.replace(/\s+/g, " ").trim();
    if (!citazione) continue;
    const pos = nota.posizione;
    if (pos) {
      if (pos.chiave !== chiave) continue;
      if (
        pos.a < unita.length &&
        testoTra(pezzi, pos.da, pos.a) === nota.citazione
      ) {
        trovate.push({ nota, da: pos.da, a: pos.a });
        continue;
      }
    }
    cerca: for (let da = 0; da < unita.length; da++) {
      let tratto = "";
      for (let a = da; a < unita.length; a++) {
        tratto = a === da ? unita[a] : tratto + " " + unita[a];
        if (tratto === citazione) {
          trovate.push({ nota, da, a });
          break cerca;
        }
        if (tratto.length >= citazione.length) break;
      }
    }
  }
  return trovate;
}

type Aperto = {
  lezione: string;
  riquadro: number;
  y: number; // dove l'utente ha toccato, per posizionare il riquadrino
};

export default function TestoConRimandi({ testo, style, chiave }: Props) {
  const [aperto, setAperto] = useState<Aperto | null>(null);
  const contesto = useSelezione();
  const selezionabile = contesto !== null && chiave !== undefined;
  // La selezione, se è in questo testo
  const selezione =
    selezionabile && contesto.selezione?.chiave === chiave
      ? contesto.selezione
      : null;
  const da = selezione ? Math.min(selezione.ancora, selezione.fine) : -1;
  const a = selezione ? Math.max(selezione.ancora, selezione.fine) : -1;

  const pezzi = dividi(testo);

  // Le note salvate in questo testo restano evidenziate: toccandole si
  // apre la card dell'appunto
  const salvate = useNoteSalvate();
  const noteQui = salvate ? noteNelTesto(pezzi, salvate.note, chiave) : [];
  const notaDi = (n: number) =>
    noteQui.find((r) => n >= r.da && n <= r.a)?.nota;

  function apriNota(nota: Nota, e: GestureResponderEvent) {
    // Sul web un clic alla fine di una selezione col mouse non apre la card
    if (Platform.OS === "web" && window.getSelection()?.toString()) return;
    salvate?.apriNota(nota, e.nativeEvent.pageY);
  }

  // Tenere premuto: la selezione ricomincia da questa parola
  function inizia(n: number) {
    if (!selezionabile) return;
    contesto.seleziona({
      chiave,
      ancora: n,
      fine: n,
      testo: testoTra(pezzi, n, n),
    });
  }

  // Toccare un'altra parola mentre si seleziona: la selezione arriva fin lì
  function estendi(n: number) {
    if (!selezione || !selezionabile) return;
    contesto.seleziona({
      ...selezione,
      fine: n,
      testo: testoTra(
        pezzi,
        Math.min(selezione.ancora, n),
        Math.max(selezione.ancora, n),
      ),
    });
  }

  // Uno spazio è evidenziato se sta tra due parole selezionate (o della
  // stessa nota)
  // Per ogni pezzo, il numero della parola che lo precede (-1 se nessuna)
  const precedenti = pezzi.map((_, i) => {
    for (let j = i - 1; j >= 0; j--) {
      const q = pezzi[j];
      if (q.tipo !== "spazio") return q.n;
    }
    return -1;
  });
  const figli = pezzi.map((p, i) => {
    if (p.tipo === "spazio") {
      const precedente = precedenti[i];
      const dentro = precedente >= da && precedente < a;
      const inNota = noteQui.some(
        (r) => precedente >= r.da && precedente < r.a,
      );
      return dentro || inNota ? (
        <Text key={i} style={dentro ? styles.evidenziato : styles.annotato}>
          {p.testo}
        </Text>
      ) : (
        p.testo
      );
    }
    const evidenziato = p.n >= da && p.n <= a;
    const nota = notaDi(p.n);
    if (p.tipo === "rimando") {
      return (
        <Text
          key={i}
          style={[
            styles.link,
            nota && styles.annotato,
            evidenziato && styles.evidenziato,
          ]}
          onPress={(e: GestureResponderEvent) =>
            selezione
              ? estendi(p.n)
              : setAperto({
                  lezione: p.lezione,
                  riquadro: p.riquadro,
                  y: e.nativeEvent.pageY,
                })
          }
          onLongPress={selezionabile ? () => inizia(p.n) : undefined}
        >
          {p.testo}
        </Text>
      );
    }
    // Una parola normale: diventa un pezzo a sé solo se si può selezionare
    // o se sta in una nota
    if (!selezionabile && !nota) return p.testo;
    // Mentre si seleziona, toccare allunga la selezione; altrimenti su una
    // parola annotata apre la card della nota
    const onPress = selezione
      ? () => estendi(p.n)
      : nota && !salvate?.selezione
        ? (e: GestureResponderEvent) => apriNota(nota, e)
        : undefined;
    return (
      <Text
        key={i}
        style={[nota && styles.annotato, evidenziato && styles.evidenziato]}
        onLongPress={selezionabile ? () => inizia(p.n) : undefined}
        onPress={onPress}
      >
        {p.testo}
      </Text>
    );
  });

  return (
    <>
      <ThemedText style={style}>{figli}</ThemedText>
      {aperto && <Anteprima aperto={aperto} onChiudi={() => setAperto(null)} />}
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
          <ThemedText style={styles.testo}>
            Lezione non ancora disponibile.
          </ThemedText>
        )}
        {lezione && (
          <Pressable
            onPress={vaiAllaLezione}
            style={({ pressed }) => [
              styles.bottone,
              pressed && { opacity: 0.8 },
            ]}
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
    return (
      <ThemedText style={styles.testo}>{pulisci(blocco.testo)}</ThemedText>
    );
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
  // Le parole selezionate per un appunto, come un evidenziatore arancione
  evidenziato: {
    backgroundColor: ARANCIONE + "59",
  },
  // Le parole di una nota già salvata: lo stesso evidenziatore, più tenue
  annotato: {
    backgroundColor: ARANCIONE + "33",
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
