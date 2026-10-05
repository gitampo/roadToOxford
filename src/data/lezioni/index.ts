import { Lezione } from "@/types/lezione"
import { pronouns } from "./01-pronouns";
import { toBe } from "./02-to-be";
import { articles } from "./03-articles";
import { pluralNouns } from "./04-plural-nouns";
import { possessives } from "./05-possessives";
import { haveGot } from "./06-have-got";
import { thereIs } from "./07-there-is";
import { numbersTimeDates } from "./08-numbers-time-dates";
import { prepositionsTime } from "./09-prepositions-time";
import { presentSimple } from "./10-present-simple";
import { adverbsFrequency } from "./11-adverbs-frequency";
import { presentContinuous } from "./12-present-continuous";
import { simpleVsContinuous } from "./13-simple-vs-continuous";
import { possessivePronouns } from "./14-possessive-pronouns";
import { demonstratives } from "./15-demonstratives";
import { objectPronouns } from "./16-object-pronouns";
import { countableUncountable } from "./17-countable-uncountable";
import { quantifiers } from "./18-quantifiers";
import { imperatives } from "./19-imperatives";
import { verbsPreference } from "./20-verbs-preference";
import { pastSimpleToBe } from "./21-past-simple-to-be";
import { pastSimpleRegular } from "./22-past-simple-regular";
import { pastSimpleIrregular } from "./23-past-simple-irregular";
import { pastSimpleQuestions } from "./24-past-simple-questions";
import { canCould } from "./25-can-could";
import { comparatives } from "./26-comparatives";
import { goingTo } from "./27-going-to";
import { willMayMight } from "./28-will-may-might";
import { presentPerfect } from "./29-present-perfect";
import { perfectVsPast } from "./30-perfect-vs-past";
import { forSince } from "./31-for-since";
import { mustHaveToShould } from "./32-must-have-to-should";
import { adverbsManner } from "./33-adverbs-manner";
import { firstConditional } from "./34-first-conditional";
import { pastContinuous } from "./35-past-continuous";
import { secondConditional } from "./36-second-conditional";
import { pastPerfect } from "./37-past-perfect";
import { usedTo } from "./38-used-to";
import { presentPerfectContinuous } from "./39-present-perfect-continuous";
import { tagQuestions } from "./40-tag-questions";
import { thirdConditional } from "./41-third-conditional";
import { reportedSpeech } from "./42-reported-speech";
import { passive } from "./43-passive";
import { relativeClauses } from "./44-relative-clauses";
import { modalsDeduction } from "./45-modals-deduction";
import { makeDo } from "./46-make-do";
import { phrasalVerbs } from "./47-phrasal-verbs";
import { infinitiveGerund } from "./48-infinitive-gerund";
import { dependentPrepositions } from "./49-dependent-prepositions";
import { scientificEnglish } from "./50-scientific-english";
import { pastModals } from "./51-past-modals";
import { mixedConditionals } from "./52-mixed-conditionals";
import { inversion } from "./53-inversion";
import { formalInformal } from "./54-formal-informal";
import { discourseMarkers } from "./55-discourse-markers";
import { idioms } from "./56-idioms";
import { advancedPhrasalVerbs } from "./57-advanced-phrasal-verbs";
import { pronunciation } from "./58-pronunciation";
import { presentarsi } from "./s1-presentarsi";
import { descriverePersone } from "./s2-descrivere-persone";
import { barPub } from "./s3-bar-pub";
import { indicazioni } from "./s4-indicazioni";
import { acquisti } from "./s5-acquisti";
import { ristorante } from "./s6-ristorante";
import { inViaggio } from "./s7-in-viaggio";
import { medicoFarmacia } from "./s8-medico-farmacia";
import { telefono } from "./s9-telefono";
import { smallTalk } from "./s10-small-talk";
import { invasions } from "./c1-invasions";
import { middleAges } from "./c2-middle-ages";
import { renaissance } from "./c3-renaissance";
import { revolutionReason } from "./c4-revolution-reason";
import { romanticAge } from "./c5-romantic-age";
import { victorianAge } from "./c6-victorian-age";
import { twentiethCentury } from "./c7-twentieth-century";
import { oxford } from "./c8-oxford";
import { pensareDecidere } from "./m1-pensare-decidere";
import { lavoroAffari } from "./m2-lavoro-affari";
import { guaiProblemi } from "./m3-guai-problemi";
import { personeRapporti } from "./m4-persone-rapporti";
import { tempoDenaro } from "./m5-tempo-denaro";
import { emozioni } from "./m6-emozioni";
import { credercioNo } from "./m7-crederci-o-no";
import { reazioni } from "./m8-reazioni";

export const LEZIONI: Lezione [] = [
    pronouns,
    toBe,
    articles,
    pluralNouns,
    possessives,
    haveGot,
    thereIs,
    numbersTimeDates,
    prepositionsTime,
    presentSimple,
    adverbsFrequency,
    presentContinuous,
    simpleVsContinuous,
    possessivePronouns,
    demonstratives,
    objectPronouns,
    countableUncountable,
    quantifiers,
    imperatives,
    verbsPreference,
    pastSimpleToBe,
    pastSimpleRegular,
    pastSimpleIrregular,
    pastSimpleQuestions,
    canCould,
    comparatives,
    goingTo,
    willMayMight,
    presentPerfect,
    perfectVsPast,
    forSince,
    mustHaveToShould,
    adverbsManner,
    firstConditional,
    pastContinuous,
    secondConditional,
    pastPerfect,
    usedTo,
    presentPerfectContinuous,
    tagQuestions,
    thirdConditional,
    reportedSpeech,
    passive,
    relativeClauses,
    modalsDeduction,
    makeDo,
    phrasalVerbs,
    infinitiveGerund,
    dependentPrepositions,
    scientificEnglish,
    pastModals,
    mixedConditionals,
    inversion,
    formalInformal,
    discourseMarkers,
    idioms,
    advancedPhrasalVerbs,
    pronunciation,
    // Situazioni: le frasi per la vita di tutti i giorni (presentarsi,
    // ordinare, chiedere la strada...), una lezione per situazione
    presentarsi,
    descriverePersone,
    barPub,
    indicazioni,
    acquisti,
    ristorante,
    inViaggio,
    medicoFarmacia,
    telefono,
    smallTalk,
    invasions,
    middleAges,
    renaissance,
    revolutionReason,
    romanticAge,
    victorianAge,
    twentiethCentury,
    oxford,
    // Modi di dire: una sezione a parte, per tema
    pensareDecidere,
    lavoroAffari,
    guaiProblemi,
    personeRapporti,
    tempoDenaro,
    emozioni,
    credercioNo,
    reazioni,
];
