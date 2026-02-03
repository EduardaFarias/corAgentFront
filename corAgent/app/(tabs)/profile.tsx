import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export default function Profile() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, alignItems: "center", justifyContent: "center" },
  text: { color: colors.foreground, fontSize: 18, fontWeight: "600" }
});
