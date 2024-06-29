import { View } from "react-native";
import { styles } from "./styles";

import Logo from "../../assets/SVG/logo.svg";

export function Header() {
  return (
      <View style={styles.container}>
        <Logo width={110} height={110} />
      </View>
  );
}
