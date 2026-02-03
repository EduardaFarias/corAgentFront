import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/theme";

type Props = {
  icon: React.ComponentProps<typeof Ionicons>["name"];
};

export function IconBubble({ icon }: Props) {
  return (
    <View style={styles.bubble}>
      <Ionicons name={icon} size={28} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    width: 56,
    height: 56,
    borderRadius: 999,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center"
  }
});
