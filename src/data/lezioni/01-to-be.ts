import { Lezione } from "@/types/lezione";

export const toBe: Lezione = {
  id: "1",
  titolo: "Pronomi e Verbo Essere",
  testo: `In inglese il soggetto va sempre espresso. In italiano puoi dire "sono stanco", in inglese devi dire "I am tired": senza il pronome la frase è sbagliata.

I PRONOMI PERSONALI

I — io
you — tu
he — lui
she — lei
it — esso/essa (cose e animali)
we — noi
you — voi
they — loro

"I" si scrive sempre maiuscolo, anche in mezzo alla frase.
"You" vale sia per "tu" sia per "voi": lo capisci dal contesto.

IL VERBO TO BE (ESSERE)

I am
you are
he / she / it is
we are
you are
they are

Nel parlato si usano quasi sempre le forme contratte:
I'm, you're, he's, she's, it's, we're, they're.

I'm Francesco.
She's from Italy.
They're students.

LA FORMA NEGATIVA

Basta aggiungere "not" dopo il verbo:

I'm not tired.
He isn't here.
We aren't ready.

LE DOMANDE

Il verbo passa davanti al soggetto:

You are Italian. → Are you Italian?
She is at home. → Is she at home?

Alle domande si risponde con le risposte brevi:

Yes, I am. — No, I'm not.
Yes, she is. — No, she isn't.

Attenzione: nella risposta affermativa breve non si contrae. "Yes, I'm" è sbagliato.

L'ERRORE TIPICO DEGLI ITALIANI

Per l'età, e per alcune sensazioni, l'inglese usa "to be" dove l'italiano usa "avere":

I am 20 years old. — Ho 20 anni.
I am hungry. — Ho fame.
I am cold. — Ho freddo.
I am right. — Ho ragione.

"I have 20 years" è l'errore più riconoscibile di chi parla inglese da italiano. Evitarlo fa già una grande differenza.`,
  livello: "[A1]",
  citazione: {
    testo: "I am me. I am not you.",
    fonte: "Rei Ayanami, Evangelion",
    traduzione: "Io sono io. Io non sono te.",
    immagine: require("@/assets/images/textures/rei.jpeg"),
  },
};
