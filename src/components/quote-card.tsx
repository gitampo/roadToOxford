import { Citazione } from "@/types/citazione";
import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";
import { StyleSheet } from "react-native";

type Props = {
    citazione: Citazione;
};

export function QuoteCard({ citazione } : Props) {
    return(
        <ThemedView style={styles.card}>
            <ThemedText style={styles.testo}>"{citazione.testo}"</ThemedText>
            <ThemedText style={styles.fonte}>{citazione.fonte}</ThemedText>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    card: { backgroundColor: '#e7cd5ab4', borderColor: '#ffec9884', borderRadius: 5, padding: 10, marginTop: 10},
    testo: { fontStyle: 'italic', fontSize: 16},
    fonte: { fontSize: 13, marginTop: 8, marginLeft: 250},
});