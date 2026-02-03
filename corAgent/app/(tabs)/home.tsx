import React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, radius, spacing } from "../../constants/theme";
import { AgentCard } from "@/components/AgentCard";
//import { AgentCard } from "../../components/AgentCard";

const AGENTS = [
  { key: "basic", title: "Agente Básico", icon: "eye-outline" as const },
  { key: "food", title: "Agente Alimentar", icon: "nutrition-outline" as const },
  { key: "style", title: "Personal Stylist", icon: "shirt-outline" as const },
  { key: "data", title: "Data Accessibility", icon: "bar-chart-outline" as const },
  {
    key: "shopping",
    title: "Shopping Assistant",
    icon: "bag-handle-outline" as const,
    span2: true,
    subtitle: "Ajuda para compras e rótulos"
  }
];

export default function Home() {
  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Ionicons name="eye-outline" size={32} color={colors.primary} />
          <Text style={styles.brandText}>CorAgent</Text>
        </View>

        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            styles.bellButton,
            { opacity: pressed ? 0.85 : 1 }
          ]}
        >
          <Ionicons name="notifications-outline" size={20} color={colors.primary} />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Olá! O que vamos identificar hoje?</Text>
        <Text style={styles.subtitle}>Escolha um agente especializado.</Text>

        {/* grid 2 colunas via flexWrap */}
        <View style={styles.grid}>
          {AGENTS.map((a) => (
            
            <AgentCard
              key={a.key}
              title={a.title}
              subtitle={a.subtitle}
              icon={a.icon}
              span2={a.span2}
              onPress={() => {}}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  brandText: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.primary,
    letterSpacing: -0.5
  },
  bellButton: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.foreground,
    marginBottom: spacing.xs
  },
  subtitle: {
    fontSize: 16,
    color: colors.mutedForeground,
    marginBottom: spacing.lg
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
    paddingBottom: spacing.xl
  }
});
