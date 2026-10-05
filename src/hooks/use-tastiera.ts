/**
 * La tastiera non deve MAI coprire il campo in cui si sta scrivendo.
 *
 * Si usa con una ScrollView:
 *   const tastiera = useTastiera(scrollRef);
 *   <ScrollView ref={scrollRef} onScroll={tastiera.onScroll} scrollEventThrottle={16}>
 *     ...
 *     <View style={{ height: tastiera.spazio }} />
 *   </ScrollView>
 *
 * Quando la tastiera è aperta:
 * - in fondo al contenuto c'è uno spazio alto quanto la tastiera, così si
 *   può sempre scorrere fino all'ultimo campo;
 * - si guarda quale campo ha il cursore (anche se sta in un componente
 *   lontano, come gli esercizi di una lezione) e, se finisce sotto la
 *   tastiera, la pagina scorre quanto basta per mostrarlo con un po' di
 *   margine;
 * - il controllo si ripete ogni poco finché la tastiera resta aperta: così
 *   funziona anche passando da un campo all'altro e quando un campo su più
 *   righe cresce mentre si scrive.
 * Funziona allo stesso modo su iOS e Android (anche con l'app "da bordo a
 * bordo", dove Android non restringe più la finestra). Sul web non fa niente:
 * lì la tastiera non c'è.
 */

import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import {
  Keyboard,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";

// Lo spazio libero da lasciare tra il campo e la tastiera
const MARGINE = 24;

export function useTastiera(scrollRef: RefObject<ScrollView | null>) {
  const [spazio, setSpazio] = useState(0);
  // Dove si trova la tastiera sullo schermo (il suo bordo in alto), o null
  const cimaTastiera = useRef<number | null>(null);
  // Quanto è già stata scorsa la pagina
  const scorrimento = useRef(0);
  // L'ultimo campo controllato e la sua altezza: il controllo periodico
  // interviene solo se cambia il campo o se cresce (così chi scorre su per
  // rileggere non viene riportato giù di continuo)
  const ultimo = useRef<{ campo: unknown; altezza: number } | null>(null);

  // Se il campo attivo è (anche in parte) sotto la tastiera, scorre su.
  // sempre = false: solo se il campo è cambiato o è cresciuto
  const porta = useCallback(
    (sempre = true) => {
      const cima = cimaTastiera.current;
      const campo = TextInput.State.currentlyFocusedInput?.() as
        | {
            measureInWindow?: (
              cb: (x: number, y: number, w: number, h: number) => void,
            ) => void;
          }
        | null
        | undefined;
      if (cima === null || !campo?.measureInWindow || !scrollRef.current)
        return;
      campo.measureInWindow((_x, y, _w, h) => {
        const cambiato =
          ultimo.current?.campo !== campo || h > (ultimo.current?.altezza ?? 0);
        ultimo.current = { campo, altezza: h };
        if (!sempre && !cambiato) return;
        // Un campo più alto dello spazio visibile: si mostra almeno la riga
        // dove si scrive (la parte bassa)
        const fondo = y + h + MARGINE;
        if (fondo > cima) {
          scrollRef.current?.scrollTo({
            y: scorrimento.current + (fondo - cima),
            animated: true,
          });
        }
      });
    },
    [scrollRef],
  );

  useEffect(() => {
    if (Platform.OS === "web") return;
    let controllo: ReturnType<typeof setInterval> | undefined;
    const mostra = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        cimaTastiera.current = e.endCoordinates.screenY;
        setSpazio(e.endCoordinates.height);
        // Si aspetta che lo spazio in fondo sia stato aggiunto, poi si scorre
        setTimeout(() => porta(true), Platform.OS === "ios" ? 60 : 120);
        setTimeout(() => porta(true), 300);
        if (controllo) clearInterval(controllo);
        controllo = setInterval(() => porta(false), 350);
      },
    );
    const nascondi = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        cimaTastiera.current = null;
        ultimo.current = null;
        setSpazio(0);
        if (controllo) clearInterval(controllo);
        controllo = undefined;
      },
    );
    return () => {
      mostra.remove();
      nascondi.remove();
      if (controllo) clearInterval(controllo);
    };
  }, [porta]);

  const onScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scorrimento.current = e.nativeEvent.contentOffset.y;
  }, []);

  return { spazio, onScroll, porta };
}
