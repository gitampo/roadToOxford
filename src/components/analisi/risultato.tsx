/**
 * Il risultato dell'analisi di una frase, in tre schede:
 * - Grammaticale: ogni parola (o gruppo verbale) con la sua categoria;
 * - Logica: le proposizioni e, in ognuna, soggetto, predicato, complementi;
 * - Semantica: tipo di frase, significato dei tempi, chi fa che cosa...
 * In cima, la frase colorata secondo la scheda scelta (per categoria, per
 * ruolo, o con i verbi in evidenza) e la sua legenda. Se ci sono possibili
 * errori, compaiono subito, prima delle schede.
 */

import type { AnalisiFrase, Categoria, Elemento } from "@/analisi";
import { unisci } from "@/analisi";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { EsitoTraduzione, traduciFrase } from "@/data/traduzioni";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import TestoConRimandi from "../testoConRimandi";
import { ThemedText } from "../themed-text";
import { usePalette } from "./colori";

const SCHEDE = ["Grammaticale", "Logica", "Semantica"] as const;
type Scheda = (typeof SCHEDE)[number];

// Le famiglie di ruoli per la legenda della logica
const FAMIGLIE: [string, string][] = [
  ["soggetto", "soggetto"],
  ["predicato verbale", "predicato"],
  ["complemento oggetto", "oggetto"],
  ["complemento di modo", "altri complementi"],
  ["congiunzione", "collegamenti"],
];

const daA = (da: number, a: number) =>
  Array.from({ length: a - da + 1 }, (_, k) => da + k);

// Le parole di un elemento dell'analisi logica, come sono scritte
export function testoElemento(a: AnalisiFrase, e: Elemento) {
  return unisci(a.parole, e.indici ?? daA(e.da, e.a));
}

export default function RisultatoAnalisi({
  analisi,
  colore,
}: {
  analisi: AnalisiFrase;
  colore: string;
}) {
  const theme = useTheme();
  const pal = usePalette();
  const [scheda, setScheda] = useState<Scheda>("Grammaticale");
  // L'osservazione del senso toccata: le sue parole si evidenziano
  const [evidenziata, setEvidenziata] = useState<number | null>(null);
  const errori = analisi.semantica.errori;
  const scelta =
    evidenziata !== null ? analisi.semantica.senso[evidenziata] : undefined;

  // Il colore di ogni parola della frase, secondo la scheda
  const colori: (string | undefined)[] = analisi.parole.map(() => undefined);
  if (scheda === "Grammaticale")
    analisi.parole.forEach((p, i) => (colori[i] = pal.categoria[p.categoria]));
  if (scheda === "Logica")
    for (const p of analisi.proposizioni)
      for (const e of p.elementi)
        if (e.da >= 0)
          for (const k of e.indici ?? daA(e.da, e.a))
            colori[k] = pal.ruolo(e.ruolo);
  if (scheda === "Semantica") {
    if (scelta?.indici) for (const k of scelta.indici) colori[k] = colore;
    else
      for (const v of analisi.semantica.verbi)
        for (const k of v.indici) colori[k] = pal.rosso;
  }

  // La legenda: solo le voci che compaiono nella frase
  const legenda: [string, string][] =
    scheda === "Grammaticale"
      ? [...new Set(analisi.parole.map((p) => p.categoria))].map((c) => [
          pal.categoria[c],
          c,
        ])
      : scheda === "Logica"
        ? FAMIGLIE.map(
            ([r, nome]) => [pal.ruolo(r), nome] as [string, string],
          ).filter(([c]) => colori.includes(c))
        : scelta?.indici
          ? [[colore, scelta.titolo]]
          : [[pal.rosso, "i verbi"]];

  return (
    <View style={styles.contenitore}>
      {/* La frase colorata e la sua legenda */}
      <View style={[styles.card, { backgroundColor: theme.backgroundElement }]}>
        <Text style={[styles.frase, { color: theme.text }]}>
          {analisi.parole.map((p, i) => (
            <Text key={i}>
              {i > 0 && !/^'|^n't$/.test(p.testo) ? " " : ""}
              <Text
                style={
                  colori[i]
                    ? { color: colori[i] }
                    : { color: theme.textSecondary }
                }
              >
                {p.testo}
              </Text>
              {p.dopo}
            </Text>
          ))}
        </Text>
        <View style={styles.legenda}>
          {legenda.map(([c, nome]) => (
            <View key={nome} style={styles.voceLegenda}>
              <View style={[styles.pallino, { backgroundColor: c }]} />
              <ThemedText
                style={[styles.minuscolo, { color: theme.textSecondary }]}
              >
                {nome}
              </ThemedText>
            </View>
          ))}
        </View>
        <TraduzioneFrase analisi={analisi} colori={colori} colore={colore} />
      </View>

      {errori.length > 0 && (
        <View
          style={[
            styles.errori,
            {
              backgroundColor: pal.rosso + "14",
              borderColor: pal.rosso + "66",
            },
          ]}
        >
          <ThemedText style={[styles.etichetta, { color: pal.rosso }]}>
            ⚠{" "}
            {errori.length === 1
              ? "Possibile errore"
              : `${errori.length} possibili errori`}
          </ThemedText>
          {errori.map((e, i) => (
            <View key={i} style={styles.errore}>
              <ThemedText style={styles.testo}>
                <Text style={[styles.sbagliato, { color: pal.rosso }]}>
                  {e.testo}
                </Text>
                <Text style={{ color: theme.textSecondary }}>{"  →  "}</Text>
                <Text style={[styles.corretto, { color: pal.verde }]}>
                  {e.correzione}
                </Text>
              </ThemedText>
              <TestoConRimandi
                testo={
                  e.regola + (e.lezione ? ` Ripassa la ${e.lezione}.` : "")
                }
                style={[styles.piccolo, { color: theme.textSecondary }]}
              />
            </View>
          ))}
        </View>
      )}

      {/* Le tre schede */}
      <View
        style={[styles.schede, { backgroundColor: theme.backgroundElement }]}
      >
        {SCHEDE.map((s) => {
          const attiva = s === scheda;
          return (
            <Pressable
              key={s}
              onPress={() => setScheda(s)}
              style={[
                styles.scheda,
                attiva && { backgroundColor: theme.backgroundSelected },
              ]}
            >
              <ThemedText
                style={[
                  styles.nomeScheda,
                  { color: attiva ? colore : theme.textSecondary },
                ]}
              >
                {s}
              </ThemedText>
            </Pressable>
          );
        })}
      </View>

      {scheda === "Grammaticale" && <Grammaticale analisi={analisi} />}
      {scheda === "Logica" && <Logica analisi={analisi} />}
      {scheda === "Semantica" && (
        <SemanticaVista
          analisi={analisi}
          colore={colore}
          evidenziata={evidenziata}
          onEvidenzia={(i) => setEvidenziata((x) => (x === i ? null : i))}
        />
      )}
    </View>
  );
}

// La traduzione della frase intera (scritta a mano se la frase è nell'app,
// altrimenti automatica e gratuita, vedi data/traduzioni.ts) e, a richiesta,
// la traduzione parola per parola sotto ogni parola
function TraduzioneFrase({
  analisi,
  colori,
  colore,
}: {
  analisi: AnalisiFrase;
  colori: (string | undefined)[];
  colore: string;
}) {
  const theme = useTheme();
  // La traduzione ricorda per quale frase è: se la frase cambia, quella
  // vecchia non si mostra (e intanto si vede "Sto traducendo…")
  const [risposta, setRisposta] = useState<{
    per: string;
    esito: EsitoTraduzione;
  } | null>(null);
  const esito = risposta?.per === analisi.testo ? risposta.esito : null;
  const [parolaPerParola, setParolaPerParola] = useState(false);

  useEffect(() => {
    let attivo = true;
    traduciFrase(analisi.testo).then((e) => {
      if (attivo) setRisposta({ per: analisi.testo, esito: e });
    });
    return () => {
      attivo = false;
    };
  }, [analisi.testo]);

  const grigio = { color: theme.textSecondary };
  return (
    <View
      style={[styles.traduzione, { borderColor: theme.backgroundSelected }]}
    >
      <ThemedText style={[styles.etichetta, grigio]}>Traduzione</ThemedText>
      {!esito ? (
        <ThemedText style={[styles.piccolo, grigio]}>
          Sto traducendo…
        </ThemedText>
      ) : "errore" in esito ? (
        <ThemedText style={[styles.piccolo, grigio]}>{esito.errore}</ThemedText>
      ) : (
        <>
          <ThemedText style={styles.testoTraduzione}>{esito.testo}</ThemedText>
          {esito.fonte === "lezione" && esito.lezione ? (
            <TestoConRimandi
              testo={`Dalla ${esito.lezione}`}
              style={[styles.minuscolo, grigio]}
            />
          ) : (
            <ThemedText style={[styles.minuscolo, grigio]}>
              {esito.fonte === "esercizio"
                ? "Traduzione dell'app"
                : esito.fonte === "approssimativa"
                  ? "Traduzione automatica approssimativa (MyMemory): prendila con cautela"
                  : "Traduzione automatica (MyMemory): può contenere errori"}
            </ThemedText>
          )}
        </>
      )}

      <Pressable onPress={() => setParolaPerParola((x) => !x)} hitSlop={8}>
        <ThemedText style={[styles.comando, { color: colore }]}>
          {parolaPerParola ? "Nascondi parola per parola" : "Parola per parola"}
        </ThemedText>
      </Pressable>
      {parolaPerParola && (
        <View style={styles.interlineare}>
          {analisi.parole.map((p, i) => (
            <View key={i} style={styles.colonnaParola}>
              <ThemedText
                style={[
                  styles.parolaInterlineare,
                  { color: colori[i] ?? theme.text },
                ]}
              >
                {p.testo}
              </ThemedText>
              <ThemedText style={[styles.glossa, grigio]}>
                {analisi.glosse[i] || "·"}
              </ThemedText>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

// Una pillola colorata: testo del colore, sfondo dello stesso colore tenue
function Pillola({ testo, colore }: { testo: string; colore: string }) {
  return (
    <View style={[styles.pillola, { backgroundColor: colore + "22" }]}>
      <ThemedText style={[styles.testoPillola, { color: colore }]}>
        {testo}
      </ThemedText>
    </View>
  );
}

function Grammaticale({ analisi }: { analisi: AnalisiFrase }) {
  const theme = useTheme();
  const pal = usePalette();
  return (
    <View
      style={[
        styles.card,
        styles.senzaSpazio,
        { borderColor: theme.backgroundSelected, borderWidth: 1 },
      ]}
    >
      {analisi.grammaticale.map((v, i) => {
        const c = pal.categoria[v.categoria];
        // I verbi hanno i dettagli separati da ";": il primo è la
        // descrizione, gli altri diventano etichette
        const [descrizione, ...dettagli] = v.dettaglio.split("; ");
        return (
          <View
            key={i}
            style={[
              styles.riga,
              i < analisi.grammaticale.length - 1 && {
                borderBottomWidth: 1,
                borderColor: theme.backgroundSelected,
              },
            ]}
          >
            <View style={styles.rigaTitolo}>
              <ThemedText style={[styles.parola, { color: c, flex: 1 }]}>
                {v.testo}
              </ThemedText>
              <Pillola testo={v.categoria} colore={c} />
            </View>
            {v.traduzione ? (
              <ThemedText style={[styles.piccolo, styles.corsivo]}>
                = {v.traduzione}
              </ThemedText>
            ) : null}
            {descrizione ? (
              <ThemedText
                style={[styles.piccolo, { color: theme.textSecondary }]}
              >
                {descrizione}
              </ThemedText>
            ) : null}
            {dettagli.length > 0 && (
              <View style={styles.etichette}>
                {dettagli.map((d) => (
                  <View
                    key={d}
                    style={[
                      styles.tag,
                      { borderColor: theme.backgroundSelected },
                    ]}
                  >
                    <ThemedText
                      style={[styles.minuscolo, { color: theme.text }]}
                    >
                      {d}
                    </ThemedText>
                  </View>
                ))}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

function Logica({ analisi }: { analisi: AnalisiFrase }) {
  const theme = useTheme();
  const pal = usePalette();
  const molte = analisi.proposizioni.length > 1;
  return (
    <View style={styles.lista}>
      {molte && (
        <ThemedText style={[styles.piccolo, { color: theme.textSecondary }]}>
          Il periodo ha {analisi.proposizioni.length} proposizioni: ognuna ha il
          suo predicato e i suoi complementi.
        </ThemedText>
      )}
      {analisi.proposizioni.map((p, i) => (
        <View
          key={i}
          style={[
            styles.card,
            { borderColor: theme.backgroundSelected, borderWidth: 1 },
          ]}
        >
          <View style={styles.intestazione}>
            <Pillola testo={p.tipo} colore={pal.proposizione(p.tipo)} />
            <ThemedText
              style={[styles.testoProposizione, { color: theme.textSecondary }]}
            >
              “{unisci(analisi.parole, p.parole)}”
            </ThemedText>
          </View>
          {p.elementi.map((e, j) => {
            const c = pal.ruolo(e.ruolo);
            return (
              <View key={j} style={styles.elemento}>
                <View style={[styles.barretta, { backgroundColor: c }]} />
                <View style={styles.corpoElemento}>
                  <View style={styles.rigaTitolo}>
                    <ThemedText
                      style={[
                        styles.parola,
                        {
                          color: e.da < 0 ? theme.textSecondary : theme.text,
                          flexShrink: 1,
                        },
                      ]}
                    >
                      {e.da < 0 ? "(sottinteso)" : testoElemento(analisi, e)}
                    </ThemedText>
                    <Pillola testo={e.ruolo} colore={c} />
                  </View>
                  {e.domanda && (
                    <ThemedText
                      style={[
                        styles.piccolo,
                        styles.corsivo,
                        { color: theme.textSecondary },
                      ]}
                    >
                      {e.domanda}
                    </ThemedText>
                  )}
                  {e.nota && (
                    <ThemedText
                      style={[styles.piccolo, { color: theme.textSecondary }]}
                    >
                      {e.nota}
                    </ThemedText>
                  )}
                  {e.attributi && (
                    <ThemedText
                      style={[styles.piccolo, { color: theme.textSecondary }]}
                    >
                      <Text style={{ color: pal.categoria.aggettivo }}>
                        {e.attributi
                          .map((k) => analisi.parole[k].testo)
                          .join(", ")}
                      </Text>{" "}
                      = attributo (l&apos;aggettivo che accompagna il nome)
                    </ThemedText>
                  )}
                </View>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}

// Il nome di ogni tipo di osservazione del senso, e la categoria di cui
// prende il colore
const TIPI_SENSO: Record<string, [string, Categoria]> = {
  espressione: ["espressione", "congiunzione"],
  costruzione: ["costruzione", "avverbio"],
  significato: ["significato", "nome"],
  riferimento: ["riferimento", "pronome"],
  concordanza: ["concordanza", "preposizione"],
};

function SemanticaVista({
  analisi,
  colore,
  evidenziata,
  onEvidenzia,
}: {
  analisi: AnalisiFrase;
  colore: string;
  evidenziata: number | null;
  onEvidenzia: (i: number) => void;
}) {
  const theme = useTheme();
  const pal = usePalette();
  const s = analisi.semantica;
  const grigio = { color: theme.textSecondary };
  return (
    <View style={styles.lista}>
      {s.senso.length > 0 && (
        <Blocco titolo="Il senso">
          <ThemedText style={[styles.piccolo, grigio]}>
            Tocca una voce per vedere a quali parole si riferisce.
          </ThemedText>
          {s.senso.map((o, i) => {
            const [nome, categoria] = TIPI_SENSO[o.tipo];
            const c = pal.categoria[categoria];
            const attiva = evidenziata === i;
            return (
              <Pressable
                key={i}
                onPress={() => onEvidenzia(i)}
                style={[
                  styles.senso,
                  { borderColor: attiva ? colore : theme.backgroundSelected },
                  attiva && { backgroundColor: colore + "14" },
                ]}
              >
                <View style={styles.rigaTitolo}>
                  <Pillola testo={nome} colore={c} />
                  <ThemedText style={[styles.titoloSenso, { flexShrink: 1 }]}>
                    {o.titolo}
                  </ThemedText>
                </View>
                <ThemedText style={[styles.piccolo, { color: theme.text }]}>
                  {o.testo}
                </ThemedText>
                {o.lezione && (
                  <TestoConRimandi
                    testo={`Ripassa: ${o.lezione}`}
                    style={[styles.piccolo, grigio]}
                  />
                )}
              </Pressable>
            );
          })}
        </Blocco>
      )}

      <Blocco titolo="Tipo di frase">
        <ThemedText style={[styles.valore, { color: colore }]}>
          {s.tipo}
        </ThemedText>
        <ThemedText style={[styles.piccolo, grigio]}>{s.tipoNota}</ThemedText>
        {s.lezioneTipo && (
          <TestoConRimandi
            testo={`Ripassa: ${s.lezioneTipo}`}
            style={[styles.piccolo, grigio]}
          />
        )}
      </Blocco>

      {s.verbi.length > 0 && (
        <Blocco titolo={s.verbi.length === 1 ? "Il verbo" : "I verbi"}>
          {s.verbi.map((v, i) => (
            <View
              key={i}
              style={[
                styles.verbo,
                i > 0 && {
                  borderTopWidth: 1,
                  borderColor: theme.backgroundSelected,
                  paddingTop: 12,
                },
              ]}
            >
              <View style={styles.rigaTitolo}>
                <ThemedText
                  style={[styles.parola, { color: pal.rosso, flexShrink: 1 }]}
                >
                  {v.testo}
                </ThemedText>
                <Pillola testo={v.tempo} colore={colore} />
              </View>
              <Coppia etichetta="In italiano" valore={v.italiano} />
              <Coppia etichetta="Serve per" valore={v.significato} />
              {v.lezione && (
                <TestoConRimandi
                  testo={`Ripassa: ${v.lezione}`}
                  style={[styles.piccolo, grigio]}
                />
              )}
            </View>
          ))}
        </Blocco>
      )}

      {s.ipotetico && (
        <Blocco titolo="Periodo ipotetico">
          <ThemedText style={[styles.valore, { color: colore }]}>
            {s.ipotetico.tipo}
          </ThemedText>
          <ThemedText style={[styles.piccolo, grigio]}>
            {s.ipotetico.spiegazione}
          </ThemedText>
          <TestoConRimandi
            testo={`Ripassa: ${s.ipotetico.lezione}`}
            style={[styles.piccolo, grigio]}
          />
        </Blocco>
      )}

      {s.ruoli.length > 0 && (
        <Blocco titolo="Chi fa che cosa">
          {s.ruoli.map((r, i) => (
            <View
              key={i}
              style={[
                styles.verbo,
                i > 0 && {
                  borderTopWidth: 1,
                  borderColor: theme.backgroundSelected,
                  paddingTop: 12,
                },
              ]}
            >
              {s.ruoli.length > 1 && (
                <Pillola
                  testo={r.proposizione}
                  colore={pal.proposizione(r.proposizione)}
                />
              )}
              {r.voci.map((v, j) => (
                <Coppia
                  key={j}
                  etichetta={v.etichetta}
                  valore={v.testo}
                  forte
                />
              ))}
            </View>
          ))}
        </Blocco>
      )}

      {s.spie.length > 0 && (
        <Blocco titolo="Parole spia">
          {s.spie.map((x, i) => (
            <View key={i} style={styles.spia}>
              <Pillola testo={x.parola} colore={colore} />
              <ThemedText style={[styles.piccolo, grigio, { flex: 1 }]}>
                {x.spiegazione}
              </ThemedText>
            </View>
          ))}
        </Blocco>
      )}
    </View>
  );
}

// Un'etichetta a sinistra e il suo valore a destra
function Coppia({
  etichetta,
  valore,
  forte,
}: {
  etichetta: string;
  valore: string;
  forte?: boolean;
}) {
  const theme = useTheme();
  return (
    <View style={styles.coppia}>
      <ThemedText style={[styles.chiave, { color: theme.textSecondary }]}>
        {etichetta}
      </ThemedText>
      <ThemedText style={[styles.piccolo, { flex: 1 }, forte && styles.forte]}>
        {valore}
      </ThemedText>
    </View>
  );
}

function Blocco({
  titolo,
  children,
}: {
  titolo: string;
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.card,
        { borderColor: theme.backgroundSelected, borderWidth: 1 },
      ]}
    >
      <ThemedText style={[styles.etichetta, { color: theme.textSecondary }]}>
        {titolo}
      </ThemedText>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: {
    gap: Spacing.three,
  },
  card: {
    borderRadius: 16,
    padding: Spacing.three,
    gap: 10,
  },
  senzaSpazio: {
    gap: 0,
    paddingVertical: 4,
  },
  frase: {
    fontFamily: "PlayfairDisplay_700Bold",
    fontSize: 22,
    lineHeight: 31,
  },
  legenda: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 12,
    rowGap: 4,
  },
  voceLegenda: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  pallino: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  errori: {
    borderWidth: 1,
    borderRadius: 16,
    padding: Spacing.three,
    gap: 10,
  },
  errore: {
    gap: 2,
  },
  sbagliato: {
    textDecorationLine: "line-through",
  },
  corretto: {
    fontFamily: "Inter_600SemiBold",
  },
  schede: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 3,
  },
  scheda: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 9,
  },
  nomeScheda: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
  },
  lista: {
    gap: Spacing.three,
  },
  riga: {
    paddingVertical: 12,
    gap: 4,
  },
  rigaTitolo: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
  parola: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    lineHeight: 22,
  },
  pillola: {
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 2,
    alignSelf: "flex-start",
  },
  testoPillola: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    lineHeight: 17,
  },
  etichette: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 2,
  },
  tag: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  intestazione: {
    gap: 6,
    marginBottom: 2,
  },
  testoProposizione: {
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    fontSize: 14,
    lineHeight: 20,
  },
  elemento: {
    flexDirection: "row",
    gap: 10,
  },
  barretta: {
    width: 3,
    borderRadius: 2,
  },
  corpoElemento: {
    flex: 1,
    gap: 3,
    paddingVertical: 2,
  },
  verbo: {
    gap: 6,
  },
  valore: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 17,
    lineHeight: 23,
  },
  coppia: {
    flexDirection: "row",
    gap: 10,
  },
  chiave: {
    width: 112,
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 18,
  },
  forte: {
    fontFamily: "Inter_600SemiBold",
  },
  traduzione: {
    borderTopWidth: 1,
    paddingTop: 10,
    gap: 4,
  },
  testoTraduzione: {
    fontFamily: "Inter_400Regular",
    fontStyle: "italic",
    fontSize: 16,
    lineHeight: 23,
  },
  comando: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 13,
    marginTop: 4,
  },
  interlineare: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 12,
    rowGap: 10,
    marginTop: 4,
  },
  colonnaParola: {
    maxWidth: 140,
  },
  parolaInterlineare: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    lineHeight: 20,
  },
  glossa: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 16,
  },
  senso: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    gap: 6,
  },
  titoloSenso: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    lineHeight: 21,
  },
  spia: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },
  etichetta: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  testo: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    lineHeight: 21,
  },
  piccolo: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    lineHeight: 19,
  },
  minuscolo: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 16,
  },
  corsivo: {
    fontStyle: "italic",
  },
});
