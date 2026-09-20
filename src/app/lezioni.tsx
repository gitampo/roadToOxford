/**
 * Schermata: elenco delle lezioni.
 * Raggiungibile da /lezioni. Mostra un riquadro per ogni lezione;
 * toccandone uno si apre la lezione corrispondente.
 */

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function Lezioni() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ThemedView style={{ flex: 1, paddingTop: 60, paddingHorizontal: Spacing.four }}>
            <ThemedText type="title">Lezioni</ThemedText>
        </ThemedView>
        </SafeAreaView>
    );    
}