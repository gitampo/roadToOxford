import { ImageSourcePropType } from "react-native";

export type Citazione = {
    testo: string,
    fonte: string,
    traduzione?: string,
    immagine?: ImageSourcePropType,
};