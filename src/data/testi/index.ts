import { Lezione } from "@/types/lezione";
import { alice } from "./alice";
import { ancientMariner } from "./ancient-mariner";
import { beowulf } from "./beowulf";
import { canterburyTales } from "./canterbury-tales";
import { coketown } from "./coketown";
import { daffodils } from "./daffodils";
import { deathBeNotProud } from "./death-be-not-proud";
import { dorianGray } from "./dorian-gray";
import { flandersFields } from "./flanders-fields";
import { gulliver } from "./gulliver";
import { hamlet } from "./hamlet";
import { jekyllHyde } from "./jekyll-hyde";
import { lordRandal } from "./lord-randal";
import { mrsDalloway } from "./mrs-dalloway";
import { robinsonCrusoe } from "./robinson-crusoe";
import { romeoJuliet } from "./romeo-juliet";
import { sheWalksInBeauty } from "./she-walks-in-beauty";
import { sonetto18 } from "./sonetto-18";
import { theDead } from "./the-dead";
import { theTyger } from "./the-tyger";

// Testi letterari analizzati: si aprono dai moduli di Letteratura
// e non compaiono nell'elenco delle lezioni. In ordine di modulo.
export const TESTI: Lezione[] = [
  // C2 · Il Medioevo
  beowulf,
  lordRandal,
  canterburyTales,
  // C3 · Il Rinascimento
  sonetto18,
  romeoJuliet,
  hamlet,
  deathBeNotProud,
  // C4 · Rivoluzione e Ragione
  robinsonCrusoe,
  gulliver,
  // C5 · Il Romanticismo
  theTyger,
  daffodils,
  ancientMariner,
  sheWalksInBeauty,
  // C6 · L'età vittoriana
  coketown,
  jekyllHyde,
  dorianGray,
  // C7 · Il Novecento
  flandersFields,
  theDead,
  mrsDalloway,
  // C8 · Oxford
  alice,
];
