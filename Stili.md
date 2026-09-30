# Proprietà di stile in React Native

Guida di riferimento alle proprietà che puoi usare dentro `style={{ ... }}` o in `StyleSheet.create({ ... })`.

Nota: non sono "funzioni" ma **proprietà**: ognuna ha un nome e un valore, per esempio `borderWidth: 1`.
I numeri senza unità sono punti (simili ai pixel). Molte proprietà accettano anche percentuali come stringa: `width: "50%"`.

---

## 1. Layout con Flexbox (come si dispongono i figli)

Queste proprietà si mettono sul **contenitore** e decidono come sono sistemati gli elementi al suo interno.

**flexDirection**
Direzione in cui vengono messi i figli. Valori: `"column"` (uno sotto l'altro, è il predefinito), `"row"` (uno accanto all'altro), `"column-reverse"`, `"row-reverse"`.

**justifyContent**
Come distribuire i figli **lungo la direzione principale** (verticale se `column`, orizzontale se `row`). Valori: `"flex-start"` (all'inizio), `"flex-end"` (alla fine), `"center"` (al centro), `"space-between"` (primo all'inizio, ultimo alla fine, spazio in mezzo), `"space-around"`, `"space-evenly"` (spazi tutti uguali).

**alignItems**
Come allineare i figli **sull'altro asse** (orizzontale se `column`, verticale se `row`). Valori: `"stretch"` (si allungano, è il predefinito), `"flex-start"`, `"flex-end"`, `"center"`, `"baseline"` (allinea la base del testo).

**alignSelf**
Come `alignItems`, ma si mette sul **singolo figlio** e vale solo per lui. Utile per spostare un solo elemento. Valori: `"auto"`, `"flex-start"`, `"flex-end"`, `"center"`, `"stretch"`, `"baseline"`.

**flexWrap**
Se i figli non ci stanno su una riga, decide se andare a capo. Valori: `"nowrap"` (predefinito, non va a capo), `"wrap"`, `"wrap-reverse"`.

**alignContent**
Quando ci sono più righe (con `flexWrap: "wrap"`), decide come distribuire le righe. Valori come `justifyContent` più `"stretch"`.

**gap**
Spazio fisso tra un figlio e l'altro. Molto comodo: evita di mettere margini su ogni elemento. Esempio: `gap: 16`.

**rowGap**
Come `gap`, ma solo tra le righe (spazio verticale).

**columnGap**
Come `gap`, ma solo tra le colonne (spazio orizzontale).

---

## 2. Flex (quanto spazio prende un figlio)

Queste si mettono sul **figlio**.

**flex**
Quanto spazio libero prende l'elemento rispetto ai fratelli. `flex: 1` significa "prendi tutto lo spazio disponibile". Se due fratelli hanno `flex: 1` e `flex: 2`, il secondo è grande il doppio.

**flexGrow**
Quanto l'elemento può **crescere** per riempire lo spazio libero. `0` = non cresce.

**flexShrink**
Quanto l'elemento può **restringersi** se lo spazio non basta. `0` = non si restringe mai.

**flexBasis**
Dimensione di partenza dell'elemento prima che `flexGrow` e `flexShrink` la modifichino.

---

## 3. Dimensioni

**width**
Larghezza. Numero (`width: 200`) o percentuale (`width: "50%"`).

**height**
Altezza. Numero o percentuale.

**minWidth**
Larghezza minima: l'elemento non diventa mai più stretto di così.

**maxWidth**
Larghezza massima: l'elemento non diventa mai più largo di così. Utile su tablet e web.

**minHeight**
Altezza minima. La usi già nella `QuoteCard` (`minHeight: 170`).

**maxHeight**
Altezza massima.

**aspectRatio**
Rapporto tra larghezza e altezza. `aspectRatio: 1` = quadrato, `aspectRatio: 16 / 9` = rettangolo da video. Basta dare la larghezza e l'altezza viene calcolata da sola.

---

## 4. Spazi: margin (fuori) e padding (dentro)

**margin**
Spazio **fuori** dall'elemento, su tutti e quattro i lati. Allontana l'elemento dagli altri.

**marginTop / marginBottom / marginLeft / marginRight**
Margine su un solo lato.

**marginHorizontal**
Margine a sinistra e a destra insieme.

**marginVertical**
Margine sopra e sotto insieme.

**marginStart / marginEnd**
Come left/right, ma si adattano alle lingue scritte da destra a sinistra.

**padding**
Spazio **dentro** l'elemento, tra il bordo e il contenuto. Allontana il contenuto dal bordo.

**paddingTop / paddingBottom / paddingLeft / paddingRight**
Padding su un solo lato.

**paddingHorizontal**
Padding a sinistra e a destra insieme. Lo usi in `constants.container`.

**paddingVertical**
Padding sopra e sotto insieme.

**paddingStart / paddingEnd**
Come left/right, ma si adattano alle lingue da destra a sinistra.

---

## 5. Posizionamento

**position**
Come viene posizionato l'elemento. `"relative"` (predefinito: segue il flusso normale) oppure `"absolute"` (esce dal flusso e si posiziona rispetto al genitore, usando top/left/right/bottom).

**top / bottom / left / right**
Distanza dai bordi del genitore. Con `position: "absolute"` fissano la posizione esatta; con `"relative"` spostano l'elemento rispetto a dove sarebbe normalmente.

**inset**
Imposta top, bottom, left e right tutti insieme. `inset: 0` con `position: "absolute"` fa coprire all'elemento tutto il genitore.

**zIndex**
Chi sta sopra quando due elementi si sovrappongono. Numero più alto = più in primo piano.

---

## 6. Colori e sfondo

**backgroundColor**
Colore di sfondo. Esempi: `"#000000"`, `"red"`, `"rgba(255, 225, 0, 0.2)"`. Gli ultimi due caratteri in `"#79620633"` sono la trasparenza.

**opacity**
Trasparenza dell'intero elemento (e dei figli). Da `0` (invisibile) a `1` (pieno).

---

## 7. Bordi

**borderWidth**
Spessore del bordo su tutti i lati. Senza `borderColor` il bordo è nero!

**borderTopWidth / borderBottomWidth / borderLeftWidth / borderRightWidth**
Spessore del bordo su un solo lato. Esempio: `borderLeftWidth: 3` per una linea solo a sinistra.

**borderColor**
Colore del bordo su tutti i lati.

**borderTopColor / borderBottomColor / borderLeftColor / borderRightColor**
Colore del bordo su un solo lato.

**borderRadius**
Arrotonda gli angoli. Più alto il numero, più rotondi. Per fare un cerchio: `width` e `height` uguali e `borderRadius` uguale alla metà.

**borderTopLeftRadius / borderTopRightRadius / borderBottomLeftRadius / borderBottomRightRadius**
Arrotonda un solo angolo.

**borderStyle**
Tipo di linea del bordo. Valori: `"solid"` (continua, predefinito), `"dashed"` (tratteggiata), `"dotted"` (puntini).

**borderCurve**
Solo iOS. `"continuous"` rende gli angoli arrotondati più morbidi, stile Apple.

---

## 8. Ombre

**boxShadow**
Ombra attorno all'elemento, funziona su iOS e Android. Si scrive come stringa: `boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"` (spostamento orizzontale, verticale, sfocatura, colore).

**elevation**
Solo Android. Ombra semplice data da un numero: più alto = ombra più grande.

**shadowColor**
Solo iOS (metodo vecchio). Colore dell'ombra.

**shadowOffset**
Solo iOS. Di quanto è spostata l'ombra: `{ width: 0, height: 4 }`.

**shadowOpacity**
Solo iOS. Quanto è visibile l'ombra, da 0 a 1.

**shadowRadius**
Solo iOS. Quanto è sfocata l'ombra.

---

## 9. Testo (solo su `Text` / `ThemedText`)

**color**
Colore del testo.

**fontSize**
Grandezza del testo.

**fontWeight**
Spessore del testo. Valori: `"normal"`, `"bold"`, oppure da `100` (sottilissimo) a `900` (grassissimo).

**fontFamily**
Font da usare. Nella tua app: `"PlayfairDisplay_700Bold"`, `"PlayfairDisplay_600SemiBold"`, `"Inter_400Regular"`.

**fontStyle**
`"normal"` oppure `"italic"` (corsivo).

**lineHeight**
Altezza di ogni riga. Più alta = righe più distanziate e testo più facile da leggere. Di solito circa 1,5 volte il `fontSize`.

**letterSpacing**
Spazio tra le lettere. Lo usi nella home (`letterSpacing: 2`).

**textAlign**
Allineamento del testo. Valori: `"left"`, `"center"`, `"right"`, `"justify"` (giustificato), `"auto"`.

**textTransform**
Cambia maiuscole/minuscole senza toccare il testo originale. Valori: `"none"`, `"uppercase"` (TUTTO MAIUSCOLO), `"lowercase"`, `"capitalize"` (Prima Lettera Maiuscola).

**textDecorationLine**
Linee sul testo. Valori: `"none"`, `"underline"` (sottolineato), `"line-through"` (barrato), `"underline line-through"`.

**textDecorationColor**
Colore della sottolineatura o barratura.

**textDecorationStyle**
Stile della linea: `"solid"`, `"double"`, `"dotted"`, `"dashed"`.

**textShadowColor / textShadowOffset / textShadowRadius**
Ombra dietro al testo: colore, spostamento (`{ width: 1, height: 1 }`) e sfocatura.

**fontVariant**
Varianti del font, per esempio `["tabular-nums"]` per numeri tutti della stessa larghezza (utile per timer e punteggi).

**includeFontPadding**
Solo Android. `false` toglie lo spazio extra sopra e sotto il testo, utile per centrarlo bene.

**textAlignVertical**
Solo Android. Allineamento verticale del testo: `"top"`, `"center"`, `"bottom"`.

**writingDirection**
Direzione di scrittura: `"ltr"` (da sinistra a destra) o `"rtl"`.

**userSelect**
Se il testo si può selezionare e copiare: `"auto"`, `"none"`, `"text"`.

---

## 10. Immagini (solo su `Image` / `ImageBackground`)

**resizeMode** *(è una prop, non uno stile, ma si usa spesso)*
Come l'immagine riempie lo spazio. `"cover"` (riempie tutto, può tagliare), `"contain"` (si vede tutta, possono restare bordi vuoti), `"stretch"` (si deforma), `"center"`, `"repeat"`.

**objectFit**
Versione "stile" di `resizeMode`: `"cover"`, `"contain"`, `"fill"`, `"scale-down"`.

**tintColor**
Colora tutti i pixel non trasparenti dell'immagine con un solo colore. Utile per icone.

**overlayColor**
Solo Android. Colore da mettere negli angoli quando l'immagine ha `borderRadius`.

**imageStyle** *(prop di `ImageBackground`)*
Stile applicato solo all'immagine di sfondo e non al contenuto. Lo usi nella `QuoteCard` per l'`opacity` della texture.

---

## 11. Trasformazioni ed effetti

**transform**
Sposta, ruota o ingrandisce l'elemento senza cambiare il layout degli altri. È una lista:
- `{ translateX: 10 }` / `{ translateY: 10 }`: sposta
- `{ scale: 1.2 }`: ingrandisce (anche `scaleX`, `scaleY`)
- `{ rotate: "45deg" }`: ruota (anche `rotateX`, `rotateY`, `rotateZ`)
- `{ skewX: "10deg" }` / `{ skewY: "10deg" }`: inclina

Esempio: `transform: [{ rotate: "-5deg" }, { scale: 0.9 }]`.

**transformOrigin**
Punto attorno a cui avviene la trasformazione. Esempio: `transformOrigin: "top left"`.

**filter**
Effetti grafici. Esempi: `filter: "brightness(0.5)"` (più scuro), `"grayscale(1)"` (bianco e nero), `"blur(4px)"` (sfocato, solo Android). Alcuni effetti funzionano solo su una piattaforma.

**mixBlendMode**
Come i colori dell'elemento si mescolano con quelli sotto: `"multiply"`, `"screen"`, `"overlay"`, ecc.

---

## 12. Visibilità e contenuto che esce

**display**
`"flex"` (visibile, predefinito) oppure `"none"` (nascosto, non occupa spazio).

**overflow**
Cosa fare se un figlio esce dai bordi. `"visible"` (si vede), `"hidden"` (viene tagliato; serve anche per far rispettare il `borderRadius` alle immagini dentro), `"scroll"`.

**backfaceVisibility**
Se il retro dell'elemento si vede quando è ruotato di 180°: `"visible"` o `"hidden"`. Serve per le carte che si girano (flashcard).

**pointerEvents**
Se l'elemento riceve i tocchi. `"auto"` (sì), `"none"` (i tocchi passano attraverso), `"box-none"` (solo i figli li ricevono), `"box-only"` (solo l'elemento, non i figli).

**cursor**
Solo web/iPad con mouse. Forma del cursore: `"auto"` o `"pointer"` (manina, per le cose cliccabili).

---

## 13. Direzione del layout

**direction**
Direzione generale del layout: `"inherit"`, `"ltr"`, `"rtl"`. Utile solo per lingue da destra a sinistra.

---

## Trucchi utili

- **Più stili insieme**: `style={[styles.card, { marginTop: 10 }]}`. L'ultimo vince se ci sono conflitti.
- **Stile condizionale**: `style={[styles.bottone, attivo && styles.bottoneAttivo]}`.
- **Bordo che non si vede?** Prova `borderColor: "red"` per un attimo: se compare, era solo il colore.
- **Elemento che non si posiziona?** Ricorda: `justifyContent` e `alignItems` vanno sul **genitore**, `alignSelf` sul **figlio**.
