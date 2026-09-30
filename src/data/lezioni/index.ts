import { Lezione } from "@/types/lezione"
import { pronouns } from "./01-pronouns";
import { toBe } from "./02-to-be";
import { articles } from "./03-articles";
import { pluralNouns } from "./04-plural-nouns";

export const LEZIONI: Lezione [] = [
    pronouns, toBe, articles, pluralNouns
];