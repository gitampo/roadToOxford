import { useTheme } from "@/hooks/use-theme";
import { StatoEsercizio, Esercizio as TipoEsercizio } from "@/types/lezione";
import { ReactNode } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";
import TestoConRimandi from "./testoConRimandi";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

const GIALLO = "#ffe100";
const VERDE = "#4ade80";
const ROSSO = "#ff6b6b";

// Lo stato di un esercizio è salvato nella pagina della lezione (e sul telefono),
// così le risposte restano anche se si cambia riquadro o si chiude l'app.
export type { StatoEsercizio };

type Props = {
  esercizio: TipoEsercizio;
  stato: StatoEsercizio | undefined;
  onStato: (stato: StatoEsercizio) => void;
  // Porta al riquadro con quel titolo
  onRivedi: (titolo: string) => void;
};

// Sceglie il componente giusto in base al tipo di esercizio
export default function Esercizio(props: Props) {
  const { esercizio } = props;
  if (esercizio.tipo === "sceltaMultipla") return <SceltaMultipla {...props} esercizio={esercizio} />;
  if (esercizio.tipo === "riordina") return <Riordina {...props} esercizio={esercizio} />;
  if (esercizio.tipo === "abbina") return <Abbina {...props} esercizio={esercizio} />;
  if (esercizio.tipo === "completa") return <Completa {...props} esercizio={esercizio} />;
  if (esercizio.tipo === "seleziona") return <Seleziona {...props} esercizio={esercizio} />;
  if (esercizio.tipo === "traduci") return <Traduci {...props} esercizio={esercizio} />;
  return <Scrivi {...props} esercizio={esercizio} />;
}

// Restringe il tipo dell'esercizio per ogni componente
type PropsDi<T extends TipoEsercizio["tipo"]> = Omit<Props, "esercizio"> & {
  esercizio: Extract<TipoEsercizio, { tipo: T }>;
};

// ---------- Pezzi comuni ----------

function Card({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <ThemedView
      type="backgroundElement"
      style={[styles.card, { borderColor: theme.backgroundSelected }]}
    >
      {children}
    </ThemedView>
  );
}

function Consegna({ testo, citazione }: { testo: string; citazione?: string }) {
  return (
    <>
      <ThemedText style={styles.consegna}>{testo}</ThemedText>
      {citazione && <ThemedText style={styles.citazione}>{citazione}</ThemedText>}
    </>
  );
}

function Pulsante({
  testo,
  onPress,
  disabilitato = false,
}: {
  testo: string;
  onPress: () => void;
  disabilitato?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabilitato}
      style={({ pressed }) => [
        styles.pulsante,
        disabilitato && { opacity: 0.35 },
        pressed && { opacity: 0.8 },
      ]}
    >
      <ThemedText style={styles.testoPulsante}>{testo}</ThemedText>
    </Pressable>
  );
}

// Una parola o un'opzione da toccare
function Gettone({
  testo,
  onPress,
  colore,
  disabilitato = false,
  piccolo = false,
}: {
  testo: string;
  onPress?: () => void;
  colore?: string;
  disabilitato?: boolean;
  piccolo?: boolean;
}) {
  const theme = useTheme();
  return (
    <Pressable
      onPress={onPress}
      disabled={disabilitato || !onPress}
      style={({ pressed }) => [
        styles.gettone,
        piccolo && styles.gettonePiccolo,
        { borderColor: colore ?? theme.backgroundSelected },
        colore && { backgroundColor: colore + "22" },
        pressed && { opacity: 0.6 },
      ]}
    >
      <ThemedText style={[styles.testoGettone, colore ? { color: colore } : null]}>
        {testo}
      </ThemedText>
    </Pressable>
  );
}

// Esito, spiegazione e link al riquadro da rivedere
function Esito({
  corretta,
  titolo,
  spiegazione,
  rivedi,
  onRivedi,
  children,
}: {
  corretta?: boolean;
  titolo?: string;
  spiegazione?: string;
  rivedi?: string;
  onRivedi: (titolo: string) => void;
  children?: ReactNode;
}) {
  const theme = useTheme();
  const colore = corretta === undefined ? GIALLO : corretta ? VERDE : ROSSO;
  return (
    <ThemedView
      type="backgroundElement"
      style={[styles.esito, { borderLeftColor: colore }]}
    >
      <ThemedText style={[styles.titoloEsito, { color: colore }]}>
        {titolo ?? (corretta ? "✓ Giusto!" : "✗ Non proprio")}
      </ThemedText>
      {children}
      {spiegazione && (
        <TestoConRimandi
          testo={spiegazione}
          style={[styles.spiegazione, { color: theme.textSecondary }]}
        />
      )}
      {rivedi && (
        <Pressable onPress={() => onRivedi(rivedi)} hitSlop={6}>
          <ThemedText style={styles.rivedi}>
            ↺ Rivedi: {rivedi.charAt(0) + rivedi.slice(1).toLowerCase()}
          </ThemedText>
        </Pressable>
      )}
    </ThemedView>
  );
}

function CampoTesto({
  valore,
  onCambia,
  bloccato,
  righe = 1,
  segnaposto,
}: {
  valore: string;
  onCambia: (testo: string) => void;
  bloccato: boolean;
  righe?: number;
  segnaposto: string;
}) {
  const theme = useTheme();
  return (
    <TextInput
      value={valore}
      onChangeText={onCambia}
      editable={!bloccato}
      multiline={righe > 1}
      placeholder={segnaposto}
      placeholderTextColor={theme.textSecondary}
      autoCapitalize="none"
      autoCorrect={false}
      style={[
        styles.campo,
        righe > 1 && { minHeight: righe * 24, textAlignVertical: "top" },
        {
          color: theme.text,
          backgroundColor: theme.background,
          borderColor: theme.backgroundSelected,
        },
      ]}
    />
  );
}

// Toglie maiuscole, spazi e apostrofi "curvi" per confrontare le risposte
function normalizza(testo: string) {
  return testo.trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, " ");
}

// ---------- Scelta multipla ----------

function SceltaMultipla({ esercizio, stato, onStato, onRivedi }: PropsDi<"sceltaMultipla">) {
  const scelta = stato?.scelta as number | undefined;
  const risposto = scelta !== undefined;

  return (
    <Card>
      <Consegna testo={esercizio.domanda} citazione={esercizio.citazione} />
      <ThemedView type="backgroundElement" style={styles.opzioni}>
        {esercizio.opzioni.map((opzione, i) => {
          let colore: string | undefined;
          if (risposto && i === esercizio.giusta) colore = VERDE;
          else if (risposto && i === scelta) colore = ROSSO;
          return (
            <Gettone
              key={i}
              testo={opzione}
              colore={colore}
              disabilitato={risposto}
              onPress={() => onStato({ scelta: i, corretta: i === esercizio.giusta })}
            />
          );
        })}
      </ThemedView>
      {risposto && (
        <Esito
          corretta={stato?.corretta}
          spiegazione={esercizio.spiegazione}
          rivedi={stato?.corretta ? undefined : esercizio.rivedi}
          onRivedi={onRivedi}
        />
      )}
    </Card>
  );
}

// ---------- Riordina ----------

function Riordina({ esercizio, stato, onStato, onRivedi }: PropsDi<"riordina">) {
  const theme = useTheme();
  const scelte = (stato?.scelte as number[] | undefined) ?? [];
  const verificato = stato?.corretta !== undefined;
  const completo = scelte.length === esercizio.parole.length;

  function controlla() {
    const frase = scelte.map((i) => esercizio.parole[i]).join(" ");
    onStato({ scelte, corretta: normalizza(frase) === normalizza(esercizio.soluzione.join(" ")) });
  }

  return (
    <Card>
      <Consegna testo={esercizio.consegna} citazione={esercizio.citazione} />
      {/* La frase che si sta costruendo: toccando una parola la si toglie */}
      <ThemedView
        type="backgroundElement"
        style={[styles.frase, { borderColor: theme.backgroundSelected }]}
      >
        {scelte.length === 0 && (
          <ThemedText style={[styles.segnaposto, { color: theme.textSecondary }]}>
            Tocca le parole qui sotto nell'ordine giusto
          </ThemedText>
        )}
        {scelte.map((i, posizione) => (
          <Gettone
            key={posizione}
            testo={esercizio.parole[i]}
            colore={verificato ? (stato?.corretta ? VERDE : ROSSO) : GIALLO}
            disabilitato={verificato}
            onPress={() => onStato({ scelte: scelte.filter((_, p) => p !== posizione) })}
          />
        ))}
      </ThemedView>
      {!verificato && (
        <ThemedView type="backgroundElement" style={styles.opzioniRiga}>
          {esercizio.parole.map((parola, i) =>
            scelte.includes(i) ? null : (
              <Gettone key={i} testo={parola} onPress={() => onStato({ scelte: [...scelte, i] })} />
            ),
          )}
        </ThemedView>
      )}
      {!verificato && <Pulsante testo="Controlla" onPress={controlla} disabilitato={!completo} />}
      {verificato && (
        <Esito
          corretta={stato?.corretta}
          spiegazione={esercizio.spiegazione}
          rivedi={stato?.corretta ? undefined : esercizio.rivedi}
          onRivedi={onRivedi}
        >
          {!stato?.corretta && (
            <ThemedText style={styles.soluzione}>{esercizio.soluzione.join(" ")}</ThemedText>
          )}
        </Esito>
      )}
    </Card>
  );
}

// ---------- Abbina ----------

// Mescola la colonna destra sempre nello stesso modo (ordinando per un "hash")
function ordineMescolato(testi: string[]) {
  const hash = (t: string) => [...t].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 997, 7);
  return testi.map((_, i) => i).sort((a, b) => hash(testi[a]) - hash(testi[b]));
}

function Abbina({ esercizio, stato, onStato, onRivedi }: PropsDi<"abbina">) {
  const abbinati = (stato?.abbinati as number[] | undefined) ?? [];
  const errori = (stato?.errori as number | undefined) ?? 0;
  const selezionata = stato?.selezionata as number | undefined;
  const sbagliata = stato?.sbagliata as number | undefined;
  const finito = stato?.corretta !== undefined;
  const destra = ordineMescolato(esercizio.coppie.map((c) => c[1]));

  function tocca(i: number) {
    if (selezionata === undefined) return;
    if (i === selezionata) {
      const nuovi = [...abbinati, i];
      const fine = nuovi.length === esercizio.coppie.length;
      onStato({ abbinati: nuovi, errori, ...(fine ? { corretta: errori === 0 } : {}) });
    } else {
      onStato({ abbinati, errori: errori + 1, selezionata, sbagliata: i });
    }
  }

  return (
    <Card>
      <Consegna testo={esercizio.consegna} />
      <ThemedView type="backgroundElement" style={styles.colonne}>
        <ThemedView type="backgroundElement" style={styles.colonna}>
          {esercizio.coppie.map(([sinistra], i) => (
            <Gettone
              key={i}
              testo={sinistra}
              colore={abbinati.includes(i) ? VERDE : selezionata === i ? GIALLO : undefined}
              disabilitato={abbinati.includes(i) || finito}
              onPress={() => onStato({ abbinati, errori, selezionata: i })}
            />
          ))}
        </ThemedView>
        <ThemedView type="backgroundElement" style={styles.colonna}>
          {destra.map((i) => (
            <Gettone
              key={i}
              testo={esercizio.coppie[i][1]}
              colore={abbinati.includes(i) ? VERDE : sbagliata === i ? ROSSO : undefined}
              disabilitato={abbinati.includes(i) || finito}
              onPress={() => tocca(i)}
            />
          ))}
        </ThemedView>
      </ThemedView>
      {!finito && (
        <ThemedText style={styles.aiuto}>
          Tocca un elemento a sinistra, poi quello che gli corrisponde a destra.
        </ThemedText>
      )}
      {finito && (
        <Esito
          corretta={stato?.corretta}
          titolo={errori === 0 ? "✓ Tutto giusto!" : `Completato, con ${errori} ${errori === 1 ? "errore" : "errori"}`}
          spiegazione={esercizio.spiegazione}
          rivedi={stato?.corretta ? undefined : esercizio.rivedi}
          onRivedi={onRivedi}
        />
      )}
    </Card>
  );
}

// ---------- Completa ----------

function Completa({ esercizio, stato, onStato, onRivedi }: PropsDi<"completa">) {
  const testo = (stato?.testo as string | undefined) ?? "";
  const verificato = stato?.corretta !== undefined;

  function controlla() {
    const giusta = esercizio.risposte.some((r) => normalizza(r) === normalizza(testo));
    onStato({ testo, corretta: giusta });
  }

  return (
    <Card>
      <Consegna testo={esercizio.consegna} />
      <ThemedText style={styles.citazione}>
        {esercizio.prima}
        <ThemedText style={[styles.citazione, { color: GIALLO }]}> ___ </ThemedText>
        {esercizio.dopo}
      </ThemedText>
      <CampoTesto
        valore={testo}
        onCambia={(t) => onStato({ testo: t })}
        bloccato={verificato}
        segnaposto="Scrivi la parola mancante"
      />
      {!verificato && <Pulsante testo="Controlla" onPress={controlla} disabilitato={testo.trim() === ""} />}
      {verificato && (
        <Esito
          corretta={stato?.corretta}
          spiegazione={esercizio.spiegazione}
          rivedi={stato?.corretta ? undefined : esercizio.rivedi}
          onRivedi={onRivedi}
        >
          {!stato?.corretta && (
            <ThemedText style={styles.soluzione}>Risposta giusta: {esercizio.risposte[0]}</ThemedText>
          )}
        </Esito>
      )}
    </Card>
  );
}

// ---------- Seleziona ----------

function Seleziona({ esercizio, stato, onStato, onRivedi }: PropsDi<"seleziona">) {
  const selezionate = (stato?.selezionate as number[] | undefined) ?? [];
  const verificato = stato?.corretta !== undefined;

  function alterna(i: number) {
    onStato({
      selezionate: selezionate.includes(i)
        ? selezionate.filter((s) => s !== i)
        : [...selezionate, i],
    });
  }

  function controlla() {
    const giuste =
      selezionate.length === esercizio.giuste.length &&
      esercizio.giuste.every((g) => selezionate.includes(g));
    onStato({ selezionate, corretta: giuste });
  }

  return (
    <Card>
      <Consegna testo={esercizio.consegna} />
      <ThemedView
        type="backgroundElement"
        style={[styles.opzioniRiga, esercizio.sillabe && { gap: 4 }]}
      >
        {esercizio.parole.map((parola, i) => {
          const scelta = selezionate.includes(i);
          const giusta = esercizio.giuste.includes(i);
          let colore: string | undefined;
          if (!verificato) colore = scelta ? GIALLO : undefined;
          else if (scelta) colore = giusta ? VERDE : ROSSO;
          else if (giusta) colore = VERDE; // quelle che mancavano
          return (
            <Gettone
              key={i}
              testo={parola}
              colore={colore}
              piccolo={esercizio.sillabe}
              disabilitato={verificato}
              onPress={() => alterna(i)}
            />
          );
        })}
      </ThemedView>
      {!verificato && (
        <Pulsante testo="Controlla" onPress={controlla} disabilitato={selezionate.length === 0} />
      )}
      {verificato && (
        <Esito
          corretta={stato?.corretta}
          spiegazione={esercizio.spiegazione}
          rivedi={stato?.corretta ? undefined : esercizio.rivedi}
          onRivedi={onRivedi}
        />
      )}
    </Card>
  );
}

// ---------- Traduci (senza punteggio) ----------

function Traduci({ esercizio, stato, onStato, onRivedi }: PropsDi<"traduci">) {
  const testo = (stato?.testo as string | undefined) ?? "";
  const mostrata = stato?.mostrata === true;

  return (
    <Card>
      <Consegna testo={esercizio.consegna} citazione={esercizio.testo} />
      <CampoTesto
        valore={testo}
        onCambia={(t) => onStato({ testo: t })}
        bloccato={mostrata}
        righe={3}
        segnaposto="Scrivi la tua traduzione"
      />
      {!mostrata && (
        <Pulsante
          testo="Confronta"
          onPress={() => onStato({ testo, mostrata: true })}
          disabilitato={testo.trim() === ""}
        />
      )}
      {mostrata && (
        <Esito
          titolo="Una traduzione possibile"
          spiegazione={esercizio.spiegazione}
          rivedi={esercizio.rivedi}
          onRivedi={onRivedi}
        >
          <ThemedText style={styles.soluzione}>{esercizio.soluzione}</ThemedText>
        </Esito>
      )}
    </Card>
  );
}

// ---------- Scrivi (senza punteggio) ----------

function Scrivi({ esercizio, stato, onStato, onRivedi }: PropsDi<"scrivi">) {
  const theme = useTheme();
  const testo = (stato?.testo as string | undefined) ?? "";
  const mostrata = stato?.mostrata === true;

  return (
    <Card>
      <Consegna testo={esercizio.consegna} />
      <ThemedText style={[styles.aiuto, { color: theme.textSecondary }]}>
        Nella tua risposta prova a parlare di:
      </ThemedText>
      {esercizio.punti.map((punto, i) => (
        <ThemedText key={i} style={styles.punto}>
          • {punto}
        </ThemedText>
      ))}
      <CampoTesto
        valore={testo}
        onCambia={(t) => onStato({ testo: t })}
        bloccato={mostrata}
        righe={6}
        segnaposto="Write your analysis in English…"
      />
      {!mostrata && (
        <Pulsante
          testo="Confronta con il modello"
          onPress={() => onStato({ testo, mostrata: true })}
          disabilitato={testo.trim().length < 20}
        />
      )}
      {mostrata && (
        <Esito
          titolo="Un'analisi modello"
          spiegazione={esercizio.spiegazione}
          rivedi={esercizio.rivedi}
          onRivedi={onRivedi}
        >
          <ThemedText style={styles.soluzione}>{esercizio.modello}</ThemedText>
        </Esito>
      )}
    </Card>
  );
}

// ---------- Punteggio finale ----------

export function Punteggio({
  giuste,
  totale,
  risposte,
  sbagliati,
  onRivedi,
  onRicomincia,
}: {
  giuste: number;
  totale: number;
  risposte: number;
  sbagliati: { testo: string; rivedi?: string }[];
  onRivedi: (titolo: string) => void;
  onRicomincia: () => void;
}) {
  const theme = useTheme();
  const percentuale = totale === 0 ? 0 : giuste / totale;
  let messaggio = "Ottimo lavoro: questo testo lo padroneggi.";
  if (percentuale < 0.9) messaggio = "Buon risultato. Rivedi le parti qui sotto e ce l'hai.";
  if (percentuale < 0.6) messaggio = "Rileggi l'analisi con calma, poi riprova gli esercizi sbagliati.";

  return (
    <Card>
      <ThemedText style={styles.punteggio}>
        {giuste}
        <ThemedText style={[styles.punteggioTotale, { color: theme.textSecondary }]}>
          {" "}/ {totale}
        </ThemedText>
      </ThemedText>
      {risposte < totale ? (
        <ThemedText style={[styles.spiegazione, { color: theme.textSecondary }]}>
          Hai completato {risposte} esercizi su {totale}. Torna indietro per finire gli altri.
        </ThemedText>
      ) : (
        <ThemedText style={styles.consegna}>{messaggio}</ThemedText>
      )}
      {sbagliati.length > 0 && (
        <ThemedView type="backgroundElement" style={styles.opzioni}>
          <ThemedText style={[styles.aiuto, { color: theme.textSecondary }]}>
            Da rivedere:
          </ThemedText>
          {sbagliati.map((s, i) => (
            <Pressable
              key={i}
              disabled={!s.rivedi}
              onPress={() => s.rivedi && onRivedi(s.rivedi)}
              style={({ pressed }) => [styles.daRivedere, pressed && { opacity: 0.6 }]}
            >
              <ThemedText style={[styles.testoDaRivedere, { color: ROSSO }]}>✗ </ThemedText>
              <ThemedText style={[styles.testoDaRivedere, { flex: 1 }]}>
                {s.testo}
                {s.rivedi && (
                  <ThemedText style={[styles.testoDaRivedere, { color: GIALLO }]}>
                    {"  → " + s.rivedi.charAt(0) + s.rivedi.slice(1).toLowerCase()}
                  </ThemedText>
                )}
              </ThemedText>
            </Pressable>
          ))}
        </ThemedView>
      )}
      <ThemedText style={[styles.aiuto, { color: theme.textSecondary }]}>
        Il risultato è salvato: lo ritrovi nell'indice del testo e nella lista delle lezioni.
      </ThemedText>
      {risposte > 0 && <Pulsante testo="Rifai gli esercizi" onPress={onRicomincia} />}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    gap: 12,
  },
  consegna: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    lineHeight: 22,
  },
  citazione: {
    fontFamily: "PlayfairDisplay_600SemiBold",
    fontSize: 17,
    lineHeight: 24,
  },
  opzioni: {
    gap: 8,
  },
  opzioniRiga: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  gettone: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  gettonePiccolo: {
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  testoGettone: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    lineHeight: 20,
  },
  frase: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    minHeight: 56,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
  },
  segnaposto: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
  },
  pulsante: {
    alignSelf: "flex-start",
    backgroundColor: GIALLO,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  testoPulsante: {
    color: "#000000",
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
  },
  esito: {
    borderLeftWidth: 3,
    paddingLeft: 12,
    gap: 6,
  },
  titoloEsito: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
  },
  spiegazione: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  soluzione: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    lineHeight: 22,
  },
  rivedi: {
    color: GIALLO,
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  colonne: {
    flexDirection: "row",
    gap: 10,
  },
  colonna: {
    flex: 1,
    gap: 8,
  },
  aiuto: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 18,
  },
  punto: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  campo: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
  },
  punteggio: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 48,
    lineHeight: 56,
    color: GIALLO,
  },
  punteggioTotale: {
    fontFamily: "PlayfairDisplay_600SemiBold",
    fontSize: 24,
  },
  daRivedere: {
    flexDirection: "row",
    paddingVertical: 4,
  },
  testoDaRivedere: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
});
