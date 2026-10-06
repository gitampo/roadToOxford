/**
 * Schermata: impara dal contesto.
 * Raggiungibile da /contesto, con il bottone nella pagina del test.
 * L'app propone una situazione (breve o di qualche riga) e una consegna; lo
 * studente scrive la frase inglese adatta e la verifica. La correzione
 * (analisi/correzione.ts) dice se è giusta, quale tempo verbale ha usato e
 * quale serviva, gli errori tipici e le parole che mancano o sono in più.
 * Si possono sbloccare dei suggerimenti, uno alla volta: le parole che
 * servono (il vocabolario), il tempo/modo verbale, la costruzione e infine
 * una frase inglese simile. Poi si può
 * vedere la soluzione e passare al contesto successivo.
 */

import { Correzione, correggi, Messaggio } from "@/analisi/correzione";
import { usePalette } from "@/components/analisi/colori";
import PaginaGirata from "@/components/paginaGirata";
import IntestazioneTest, {
  contenitoreTest,
} from "@/components/intestazioneTest";
import TestoConRimandi from "@/components/testoConRimandi";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ColoriAttivita, Spacing } from "@/constants/theme";
import { CONTESTI, Contesto, Parola } from "@/data/contesti";
import { registraAttivita } from "@/data/progressi";
import { useTastiera } from "@/hooks/use-tastiera";
import { useTheme } from "@/hooks/use-theme";
import { useRef, useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SymbolView, SymbolViewProps } from "expo-symbols";

const VERDE = ColoriAttivita.test;
// Il colore dei suggerimenti
const AMBRA = "#f59e0b";
const LIVELLI = ["A1", "A2", "B1", "B2-C1"] as const;
type Livello = (typeof LIVELLI)[number];

// I contesti di un livello, in ordine casuale
function mescolati(livello: Livello) {
  const lista = CONTESTI.filter((c) => c.livello === livello);
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
}

export default function ImparaDalContesto() {
  const theme = useTheme();
  const pal = usePalette();
  const [livello, setLivello] = useState<Livello>("A1");
  const [lista, setLista] = useState(() => mescolati("A1"));
  const [indice, setIndice] = useState(0);
  const c = lista[indice % lista.length];
  // La tastiera non copre mai il campo della risposta
  const scroll = useRef<ScrollView>(null);
  const tastiera = useTastiera(scroll);
  // Dove comincia l'esercizio nella pagina: quando la scheda gira, la si
  // riporta in vista
  const yEsercizio = useRef(0);

  function cambiaLivello(l: Livello) {
    setLivello(l);
    setLista(mescolati(l));
    setIndice(0);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={contenitoreTest}>
        <IntestazioneTest titolo="Impara dal contesto" />

        <ScrollView
          ref={scroll}
          onScroll={tastiera.onScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.contenuto}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          <ThemedText style={[styles.guida, { color: theme.textSecondary }]}>
            Leggi la situazione e scrivi in inglese la frase giusta. Se ti
            blocchi (anche solo su una parola), sblocca un suggerimento alla
            volta.
          </ThemedText>
          <View style={styles.livelli}>
            {LIVELLI.map((l) => {
              const attivo = l === livello;
              return (
                <Pressable
                  key={l}
                  onPress={() => cambiaLivello(l)}
                  style={[
                    styles.livello,
                    {
                      borderColor: attivo
                        ? pal.verde
                        : theme.backgroundSelected,
                      backgroundColor: attivo
                        ? VERDE + "1f"
                        : theme.backgroundElement,
                    },
                  ]}
                >
                  <ThemedText
                    style={[
                      styles.nomeLivello,
                      { color: attivo ? pal.verde : theme.text },
                    ]}
                  >
                    {l}
                  </ThemedText>
                </Pressable>
              );
            })}
          </View>
          <View style={styles.rigaAvanzamento}>
            <ThemedText
              style={[styles.etichetta, { color: theme.textSecondary }]}
            >
              Contesto {(indice % lista.length) + 1} di {lista.length}
            </ThemedText>
          </View>
          {/* Ogni contesto ha il suo stato: cambiando contesto si riparte */}
          <View
            onLayout={(e) => {
              yEsercizio.current = e.nativeEvent.layout.y;
            }}
          >
            <Esercizio
              key={`${c.id}-${indice}`}
              c={c}
              onSuccessivo={() => setIndice((i) => i + 1)}
              onGira={() =>
                scroll.current?.scrollTo({
                  y: Math.max(0, yEsercizio.current - Spacing.two),
                  animated: true,
                })
              }
            />
          </View>
          <View style={{ height: tastiera.spazio }} />
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

function Esercizio({
  c,
  onSuccessivo,
  onGira,
}: {
  c: Contesto;
  onSuccessivo: () => void;
  onGira: () => void;
}) {
  const theme = useTheme();
  const pal = usePalette();
  const [risposta, setRisposta] = useState("");
  const [correzione, setCorrezione] = useState<Correzione | null>(null);
  const [contato, setContato] = useState(false);
  const [aiuti, setAiuti] = useState(0);
  const [soluzione, setSoluzione] = useState(false);

  // I suggerimenti: prima le parole che servono (il vocabolario non deve
  // bloccare chi sta ragionando sul tempo verbale), poi quelli del contesto
  // e, per ultima, la frase simile
  const suggerimenti: {
    titolo: string;
    testo?: string;
    parole?: Parola[];
    corsivo?: boolean;
  }[] = [
    ...(c.parole.length ? [{ titolo: "Parole utili", parole: c.parole }] : []),
    ...c.suggerimenti.map((testo, i) => ({
      titolo: ["Ragiona sul tempo", "Come si forma"][i] ?? "Aiuto",
      testo,
    })),
    { titolo: "Una frase simile", testo: `«${c.simile}»`, corsivo: true },
  ];
  const finito =
    soluzione ||
    correzione?.esito === "giusta" ||
    correzione?.esito === "quasi";
  // Quale facciata della scheda si vede: il contesto o, a esercizio finito,
  // la soluzione (la scheda "gira pagina" e resta al suo posto)
  const [retro, setRetro] = useState(false);
  // A esercizio finito la scheda gira e torna in vista
  function giraSullaSoluzione() {
    setRetro(true);
    onGira();
  }
  const soluzioneMostrata =
    correzione && correzione.esito !== "sbagliata"
      ? correzione.vicina
      : c.soluzioni[0];

  function verifica() {
    if (!risposta.trim()) return;
    Keyboard.dismiss();
    const k = correggi(risposta, c);
    setCorrezione(k);
    if (k.esito !== "sbagliata") giraSullaSoluzione();
    // Conta nelle statistiche solo il primo tentativo
    if (!contato) {
      registraAttivita({
        risposte: 1,
        giuste: k.esito === "sbagliata" ? 0 : 1,
      });
      setContato(true);
    }
  }

  function mostraSoluzione() {
    setSoluzione(true);
    giraSullaSoluzione();
    if (!contato) {
      registraAttivita({ risposte: 1, giuste: 0 });
      setContato(true);
    }
  }

  const coloreEsito =
    correzione?.esito === "giusta"
      ? pal.verde
      : correzione?.esito === "quasi"
        ? AMBRA
        : pal.rosso;

  return (
    <View style={styles.esercizio}>
      {/* La scheda: davanti il contesto e la consegna; a esercizio finito
          gira pagina e dietro c'è la soluzione. Si può girare avanti e
          indietro per rileggere il contesto */}
      <PaginaGirata
        retro={retro}
        fronte={
          <View
            style={[styles.card, { backgroundColor: theme.backgroundElement }]}
          >
            <View style={styles.rigaScheda}>
              <ThemedText
                style={[styles.etichetta, { color: theme.textSecondary }]}
              >
                Il contesto
              </ThemedText>
              {finito && (
                <Gira
                  testo="Soluzione"
                  colore={pal.verde}
                  onPress={() => setRetro(true)}
                />
              )}
            </View>
            <ThemedText style={styles.testoContesto}>{c.contesto}</ThemedText>
            <View style={[styles.consegna, { borderColor: pal.verde }]}>
              <ThemedText style={[styles.etichetta, { color: pal.verde }]}>
                Cosa devi scrivere
              </ThemedText>
              <ThemedText style={styles.testoConsegna}>{c.consegna}</ThemedText>
            </View>
          </View>
        }
        retroContenuto={
          <View
            style={[
              styles.card,
              {
                backgroundColor: theme.backgroundElement,
                borderWidth: 1,
                borderColor: VERDE + "66",
              },
            ]}
          >
            <View style={styles.rigaScheda}>
              <ThemedText style={[styles.etichetta, { color: pal.verde }]}>
                La soluzione
              </ThemedText>
              <Gira
                testo="Il contesto"
                colore={theme.textSecondary}
                onPress={() => setRetro(false)}
              />
            </View>
            <ThemedText
              style={[styles.consegnaRetro, { color: theme.textSecondary }]}
            >
              {c.consegna}
            </ThemedText>
            <ThemedText style={[styles.soluzione, { color: pal.verde }]}>
              {soluzioneMostrata}
            </ThemedText>
            {c.soluzioni.length > 1 && (
              <>
                <ThemedText
                  style={[
                    styles.etichetta,
                    { color: theme.textSecondary, marginTop: 4 },
                  ]}
                >
                  Vanno bene anche
                </ThemedText>
                {c.soluzioni
                  .filter((s) => s !== soluzioneMostrata)
                  .slice(0, 4)
                  .map((s) => (
                    <ThemedText
                      key={s}
                      style={[styles.piccolo, { color: theme.textSecondary }]}
                    >
                      · {s}
                    </ThemedText>
                  ))}
              </>
            )}
            <ThemedText style={[styles.piccolo, { marginTop: 4 }]}>
              {c.spiegazione}
            </ThemedText>
            {c.lezione && (
              <TestoConRimandi
                testo={`Ripassa: ${c.lezione}`}
                style={[styles.piccolo, { color: theme.textSecondary }]}
              />
            )}
          </View>
        }
      />

      {/* La risposta */}
      <View
        style={[
          styles.cardCampo,
          { borderColor: correzione ? coloreEsito : theme.backgroundSelected },
        ]}
      >
        <TextInput
          value={risposta}
          onChangeText={(t) => {
            setRisposta(t);
            // Cambiando la risposta la correzione vecchia non vale più
            if (correzione && correzione.esito === "sbagliata")
              setCorrezione(null);
          }}
          placeholder="Scrivi la frase in inglese…"
          placeholderTextColor={theme.textSecondary}
          multiline
          editable={!soluzione}
          autoCapitalize="sentences"
          autoCorrect={false}
          style={[styles.campo, { color: theme.text }]}
        />
        {!finito && (
          <Pressable
            onPress={verifica}
            disabled={!risposta.trim()}
            style={({ pressed }) => [
              styles.bottone,
              { backgroundColor: VERDE },
              !risposta.trim() && { opacity: 0.35 },
              pressed && { opacity: 0.8 },
            ]}
          >
            <ThemedText style={styles.testoBottone}>Verifica</ThemedText>
          </Pressable>
        )}
      </View>

      {/* La correzione */}
      {correzione && (
        <SchedaCorrezione
          correzione={correzione}
          risposta={risposta}
          colore={coloreEsito}
          conInvito={correzione.esito === "sbagliata" && !soluzione}
        />
      )}

      {/* I suggerimenti sbloccati */}
      {aiuti > 0 && (
        <View style={styles.aiuti}>
          {suggerimenti.slice(0, aiuti).map((s, i) => (
            <View
              key={i}
              style={[
                styles.aiuto,
                { borderColor: AMBRA + "40", backgroundColor: AMBRA + "0d" },
              ]}
            >
              <ThemedText style={[styles.etichetta, { color: AMBRA }]}>
                Suggerimento {i + 1} · {s.titolo}
              </ThemedText>
              {s.testo && (
                <ThemedText
                  style={[styles.piccolo, s.corsivo && styles.corsivo]}
                >
                  {s.testo}
                </ThemedText>
              )}
              {/* Il vocabolario: italiano → inglese, con la nota sotto */}
              {s.parole?.map(([it, en, nota]) => (
                <View key={it} style={styles.voce}>
                  <ThemedText style={styles.piccolo}>
                    <ThemedText
                      style={[styles.piccolo, { color: theme.textSecondary }]}
                    >
                      {it} →{" "}
                    </ThemedText>
                    <ThemedText style={[styles.inglese, { color: pal.verde }]}>
                      {en}
                    </ThemedText>
                  </ThemedText>
                  {nota && (
                    <ThemedText
                      style={[styles.notaVoce, { color: theme.textSecondary }]}
                    >
                      {nota}
                    </ThemedText>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      )}

      {/* I comandi: suggerimento e soluzione, due tasti affiancati della
          stessa altezza. Il suggerimento è quello in evidenza (si consiglia
          di provarci prima); i pallini dicono quanti ne restano */}
      {!finito && (
        <View style={styles.comandi}>
          <Pressable
            onPress={() => setAiuti((a) => a + 1)}
            disabled={aiuti >= suggerimenti.length}
            style={({ pressed }) => [
              styles.comando,
              styles.comandoPrincipale,
              {
                backgroundColor: AMBRA + "1a",
                borderColor: AMBRA + "80",
              },
              aiuti >= suggerimenti.length && { opacity: 0.45 },
              pressed && { opacity: 0.7 },
            ]}
          >
            <View style={styles.rigaComando}>
              <SymbolView
                name={{
                  ios: "lightbulb.fill",
                  android: "lightbulb",
                  web: "lightbulb",
                }}
                size={18}
                tintColor={AMBRA}
              />
              <ThemedText style={[styles.testoComando, { color: AMBRA }]}>
                {aiuti >= suggerimenti.length
                  ? "Suggerimenti finiti"
                  : "Suggerimento"}
              </ThemedText>
            </View>
            <View style={styles.pallini}>
              {suggerimenti.map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.pallino,
                    {
                      borderColor: AMBRA,
                      backgroundColor: i < aiuti ? AMBRA : "transparent",
                    },
                  ]}
                />
              ))}
            </View>
          </Pressable>
          <Pressable
            onPress={mostraSoluzione}
            style={({ pressed }) => [
              styles.comando,
              {
                backgroundColor: theme.backgroundElement,
                borderColor: theme.backgroundSelected,
              },
              pressed && { opacity: 0.7 },
            ]}
          >
            <View style={styles.rigaComando}>
              <SymbolView
                name={{ ios: "eye", android: "visibility", web: "visibility" }}
                size={18}
                tintColor={theme.textSecondary}
              />
              <ThemedText
                style={[styles.testoComando, { color: theme.textSecondary }]}
              >
                Soluzione
              </ThemedText>
            </View>
          </Pressable>
        </View>
      )}

      {(finito || correzione) && (
        <Pressable
          onPress={onSuccessivo}
          style={({ pressed }) => [
            styles.bottone,
            styles.successivo,
            { backgroundColor: VERDE },
            pressed && { opacity: 0.8 },
          ]}
        >
          <ThemedText style={styles.testoBottone}>
            Frase successiva →
          </ThemedText>
        </Pressable>
      )}
    </View>
  );
}

// Per ogni tipo di messaggio della correzione: titolo e icona
const TIPI_MESSAGGIO: Record<
  Messaggio["tipo"],
  { titolo: string; icona: SymbolViewProps["name"] }
> = {
  tempo: {
    titolo: "Tempo verbale",
    icona: { ios: "clock", android: "schedule", web: "schedule" },
  },
  errore: {
    titolo: "Errore",
    icona: {
      ios: "exclamationmark.triangle",
      android: "warning",
      web: "warning",
    },
  },
  parole: {
    titolo: "Le parole",
    icona: { ios: "text.word.spacing", android: "notes", web: "notes" },
  },
  nota: {
    titolo: "Nota",
    icona: { ios: "info.circle", android: "info", web: "info" },
  },
};

// Il riquadro della correzione: in alto l'esito (con un'icona e quante cose
// sono da sistemare) e la frase dello studente; sotto un punto per ogni
// problema, con la sua icona. Gli errori puntuali mostrano il pezzo
// sbagliato barrato e, accanto, come si corregge; poi la regola e il rimando
// alla lezione. In fondo, se la frase è sbagliata, che cosa fare adesso
function SchedaCorrezione({
  correzione,
  risposta,
  colore,
  conInvito,
}: {
  correzione: Correzione;
  risposta: string;
  colore: string;
  conInvito: boolean;
}) {
  const theme = useTheme();
  const pal = usePalette();
  const { esito, messaggi } = correzione;
  // Nella risposta quasi giusta le parole diverse non sono errori: si
  // mostrano in ambra e senza barrarle (day → evening)
  const quasi = esito === "quasi";
  const coloreTuo = quasi ? colore : pal.rosso;
  const titolo =
    esito === "giusta"
      ? "Giusto!"
      : esito === "quasi"
        ? "Quasi giusto: va bene"
        : "Non ancora";
  const sottotitolo =
    esito === "giusta"
      ? "La tua frase è corretta."
      : esito === "quasi"
        ? "C'è una piccola differenza: guardala."
        : messaggi.length === 1
          ? "C'è una cosa da sistemare."
          : `Ci sono ${messaggi.length} cose da sistemare.`;
  const icona: SymbolViewProps["name"] =
    esito === "giusta"
      ? { ios: "checkmark", android: "check", web: "check" }
      : esito === "quasi"
        ? { ios: "equal", android: "drag_handle", web: "drag_handle" }
        : { ios: "xmark", android: "close", web: "close" };

  return (
    <View
      style={[
        styles.correzione,
        {
          backgroundColor: theme.backgroundElement,
          borderColor: colore + "55",
        },
      ]}
    >
      {/* L'esito */}
      <View
        style={[
          styles.testataCorrezione,
          { backgroundColor: colore + "14", borderColor: colore + "33" },
        ]}
      >
        <View style={[styles.bollino, { backgroundColor: colore }]}>
          <SymbolView name={icona} size={18} tintColor="#fff" weight="bold" />
        </View>
        <View style={styles.testiEsito}>
          <ThemedText style={[styles.esito, { color: colore }]}>
            {titolo}
          </ThemedText>
          <ThemedText
            style={[styles.sottotitoloEsito, { color: theme.textSecondary }]}
          >
            {sottotitolo}
          </ThemedText>
        </View>
      </View>

      {/* La frase dello studente, come riferimento */}
      {esito !== "giusta" && risposta.trim() !== "" && (
        <View style={[styles.laTuaFrase, { borderColor: colore + "66" }]}>
          <ThemedText
            style={[styles.etichetta, { color: theme.textSecondary }]}
          >
            La tua frase
          </ThemedText>
          <ThemedText style={styles.testoTuaFrase}>
            {risposta.trim()}
          </ThemedText>
        </View>
      )}

      {/* Un punto per ogni problema */}
      {messaggi.map((m, i) => {
        const tipo = TIPI_MESSAGGIO[m.tipo];
        // La correzione è un pezzo di frase (She goes) o una descrizione
        // (past simple (to go al passato)): la seconda va su una riga a parte
        const descrittiva =
          !!m.giusto &&
          (/[()]/.test(m.giusto) || m.giusto.split(" ").length > 4);
        return (
          <View
            key={i}
            style={[styles.punto, { borderTopColor: theme.backgroundSelected }]}
          >
            <View
              style={[styles.iconaPunto, { backgroundColor: colore + "1a" }]}
            >
              <SymbolView name={tipo.icona} size={16} tintColor={colore} />
            </View>
            <View style={styles.corpoPunto}>
              <ThemedText style={styles.titoloPunto}>{tipo.titolo}</ThemedText>
              {/* Il pezzo sbagliato → la correzione */}
              {m.sbagliato && (
                <View style={styles.rigaCorrezione}>
                  <View
                    style={[
                      styles.pezzo,
                      { backgroundColor: coloreTuo + "1a" },
                    ]}
                  >
                    <ThemedText
                      style={[
                        styles.testoPezzo,
                        !quasi && styles.barrato,
                        { color: coloreTuo },
                      ]}
                    >
                      {m.sbagliato}
                    </ThemedText>
                  </View>
                  {m.giusto && !descrittiva && (
                    <>
                      <SymbolView
                        name={{
                          ios: "arrow.right",
                          android: "arrow_forward",
                          web: "arrow_forward",
                        }}
                        size={14}
                        tintColor={theme.textSecondary}
                      />
                      <View
                        style={[
                          styles.pezzo,
                          { backgroundColor: pal.verde + "1a" },
                        ]}
                      >
                        <ThemedText
                          style={[styles.testoPezzo, { color: pal.verde }]}
                        >
                          {m.giusto}
                        </ThemedText>
                      </View>
                    </>
                  )}
                </View>
              )}
              {descrittiva && (
                <ThemedText style={[styles.piccolo, { color: pal.verde }]}>
                  Serve: {m.giusto}
                </ThemedText>
              )}
              <ThemedText style={[styles.piccolo, { color: theme.text }]}>
                {m.testo}
              </ThemedText>
              {m.lezione && (
                <View
                  style={[
                    styles.ripassa,
                    { borderColor: theme.backgroundSelected },
                  ]}
                >
                  <SymbolView
                    name={{
                      ios: "book",
                      android: "menu_book",
                      web: "menu_book",
                    }}
                    size={13}
                    tintColor={theme.textSecondary}
                  />
                  <TestoConRimandi
                    testo={`Ripassa: ${m.lezione}`}
                    style={[
                      styles.testoRipassa,
                      { color: theme.textSecondary },
                    ]}
                  />
                </View>
              )}
            </View>
          </View>
        );
      })}

      {/* Che cosa fare adesso */}
      {conInvito && (
        <View
          style={[styles.invito, { borderTopColor: theme.backgroundSelected }]}
        >
          <SymbolView
            name={{
              ios: "arrow.uturn.backward",
              android: "undo",
              web: "undo",
            }}
            size={14}
            tintColor={theme.textSecondary}
          />
          <ThemedText
            style={[styles.testoInvito, { color: theme.textSecondary }]}
          >
            Correggi la frase e verifica di nuovo, oppure sblocca un
            suggerimento.
          </ThemedText>
        </View>
      )}
    </View>
  );
}

// Il tastino in alto a destra della scheda per girarla (Soluzione,
// Il contesto)
function Gira({
  testo,
  colore,
  onPress,
}: {
  testo: string;
  colore: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={({ pressed }) => [styles.gira, pressed && { opacity: 0.6 }]}
    >
      <SymbolView
        name={{
          ios: "arrow.trianglehead.2.clockwise",
          android: "autorenew",
          web: "autorenew",
        }}
        size={14}
        tintColor={colore}
      />
      <ThemedText style={[styles.testoGira, { color: colore }]}>
        {testo}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contenuto: {
    gap: Spacing.three,
    paddingBottom: Spacing.six,
  },
  guida: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  livelli: {
    flexDirection: "row",
    gap: Spacing.two,
  },
  livello: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 9,
    alignItems: "center",
  },
  nomeLivello: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 17,
    lineHeight: 22,
  },
  rigaAvanzamento: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  etichetta: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  esercizio: {
    gap: Spacing.three,
  },
  card: {
    borderRadius: 16,
    padding: Spacing.three,
    gap: 8,
  },
  testoContesto: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 24,
  },
  consegna: {
    borderLeftWidth: 3,
    paddingLeft: 10,
    gap: 2,
    marginTop: 4,
  },
  testoConsegna: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    lineHeight: 21,
  },
  cardCampo: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    gap: 10,
  },
  campo: {
    minHeight: 64,
    padding: 4,
    fontFamily: "Inter_400Regular",
    fontSize: 17,
    lineHeight: 24,
    textAlignVertical: "top",
  },
  bottone: {
    alignSelf: "flex-end",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  successivo: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  testoBottone: {
    color: "#000000",
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
  },
  esito: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 17,
    lineHeight: 23,
  },
  aiuti: {
    gap: Spacing.two,
  },
  aiuto: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    gap: 4,
  },
  comandi: {
    flexDirection: "row",
    gap: Spacing.two,
  },
  comando: {
    flex: 1,
    minHeight: 56,
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  // Il suggerimento è più largo: è il primo aiuto da provare
  comandoPrincipale: {
    flex: 1.6,
  },
  rigaComando: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  testoComando: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    lineHeight: 18,
  },
  pallini: {
    flexDirection: "row",
    gap: 5,
  },
  pallino: {
    width: 7,
    height: 7,
    borderRadius: 4,
    borderWidth: 1,
  },
  // La correzione
  correzione: {
    borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden",
    // Spazio in fondo: l'ultima sezione non tocca il bordo
    paddingBottom: Spacing.three,
  },
  testataCorrezione: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: Spacing.three,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },
  bollino: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  testiEsito: {
    flex: 1,
    gap: 2,
  },
  sottotitoloEsito: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
  },
  laTuaFrase: {
    marginHorizontal: Spacing.three,
    marginTop: Spacing.three,
    paddingLeft: 12,
    borderLeftWidth: 3,
    gap: 4,
  },
  testoTuaFrase: {
    fontFamily: "PlayfairDisplay_600SemiBold",
    fontSize: 18,
    lineHeight: 25,
    fontStyle: "italic",
  },
  punto: {
    flexDirection: "row",
    gap: 12,
    marginHorizontal: Spacing.three,
    marginTop: Spacing.three,
    paddingTop: Spacing.three,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  iconaPunto: {
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  corpoPunto: {
    flex: 1,
    gap: 6,
  },
  titoloPunto: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    lineHeight: 19,
  },
  rigaCorrezione: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
  },
  pezzo: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  testoPezzo: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    lineHeight: 19,
  },
  barrato: {
    textDecorationLine: "line-through",
  },
  ripassa: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  testoRipassa: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
  },
  invito: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginHorizontal: Spacing.three,
    marginTop: Spacing.three,
    paddingTop: Spacing.three,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  testoInvito: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
  },
  rigaScheda: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  gira: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  testoGira: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
  },
  consegnaRetro: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
  },
  soluzione: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 20,
    lineHeight: 27,
  },
  piccolo: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  corsivo: {
    fontStyle: "italic",
  },
  voce: {
    paddingVertical: 2,
  },
  inglese: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    lineHeight: 20,
  },
  notaVoce: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 16,
  },
});
