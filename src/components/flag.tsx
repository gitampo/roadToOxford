import { StyleProp, View, ViewStyle } from "react-native";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

// Bandiera del Regno Unito, dall'SVG in assets/images/textures.
// Il disegno è in un riquadro 60 × 30 (proporzioni 2:1)

// Lo stesso azzurro del globo (components/globo.tsx); il resto è nero come lo sfondo
const COLORE = "#4da3ff";

type Props = {
  // Larghezza in punti; l'altezza è sempre la metà
  larghezza?: number;
  style?: StyleProp<ViewStyle>;
};

export function Flag({ larghezza = 120, style }: Props) {
  return (
    <View style={style}>
      <Svg width={larghezza} height={larghezza / 2} viewBox="0 0 60 30">
        <Defs>
          {/* Il bordo della bandiera: niente esce dal rettangolo */}
          <ClipPath id="bandiera-bordo">
            <Path d="M0,0 v30 h60 v-30 z" />
          </ClipPath>
          {/* Le metà delle diagonali dove sta la croce di San Patrizio,
              spostata rispetto al centro come nella bandiera vera */}
          <ClipPath id="bandiera-diagonali">
            <Path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#bandiera-bordo)">
          {/* Fondo */}
          <Path d="M0,0 V30 H60 V0 Z" fill="#000000" />
          {/* Croce di Sant'Andrea (diagonali azzurre) */}
          <Path d="M0,0 60,30 M60,0 0,30" stroke={COLORE} strokeWidth={6} />
          {/* Croce di San Patrizio (diagonali sottili, dentro le azzurre) */}
          <Path
            d="M0,0 60,30 M60,0 0,30"
            clipPath="url(#bandiera-diagonali)"
            stroke="#000000"
            strokeWidth={4}
          />
          {/* Croce di San Giorgio: bordo azzurro e croce centrale */}
          <Path d="M30,0 V30 M0,15 h60" stroke={COLORE} strokeWidth={10} />
          <Path d="M30,0 V30 M0,15 h60" stroke="#000000" strokeWidth={6} />
        </G>
      </Svg>
    </View>
  );
}
