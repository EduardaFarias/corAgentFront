import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, radius, spacing } from "../constants/theme";
import { IconBubble } from "./IconBubble";

type Props = {
  title: string;
  subtitle?: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  span2?: boolean;
  onPress: () => void;
};

export function AgentCard({ title, subtitle, icon, span2, onPress }: Props) {
  const width = span2 ? "100%" : "48%";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.98 : 1 }] }]}
    >
      <View style={[styles.card, { width }]}>
        {span2 ? (
          <View style={styles.row}>
            <IconBubble icon={icon} />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{title}</Text>
              {!!subtitle && <Text style={styles.sub}>{subtitle}</Text>}
            </View>

            <Ionicons name="chevron-forward" size={24} color={colors.mutedForeground} />
          </View>
        ) : (
          <>
            <IconBubble icon={icon} />
            <Text style={[styles.name, { textAlign: "center" }]}>{title}</Text>
          </>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: radius.xl,
    paddingVertical: 20,
    paddingHorizontal: 16,
    minHeight: 140,
    alignItems: "center",
    justifyContent: "center",
    gap: 12
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 16
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.cardForeground,
    lineHeight: 20
  },
  sub: {
    fontSize: 13,
    fontWeight: "400",
    color: colors.mutedForeground,
    marginTop: 4
  }
});
