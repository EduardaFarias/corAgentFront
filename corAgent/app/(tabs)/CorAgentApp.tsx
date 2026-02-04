import { Tabs } from 'expo-router';
import {
  Apple,
  BarChart3,
  Bell,
  ChevronRight,
  Eye,
  History,
  Home,
  Shirt,
  ShoppingBag,
  User
} from 'lucide-react-native';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image
} from 'react-native';
// 1. Importe o SafeAreaView daqui:
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

interface AgentCardProps {
  icon: React.ReactNode;
  name: string;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const CorAgentApp = () => {
  return (
    // 2. O SafeAreaProvider deve envolver a aplicação (ou esta tela)
    <SafeAreaProvider>
      {/* 3. SafeAreaView do 'react-native-safe-area-context' lida com o topo e o fundo */}
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        {/* Configura a barra de status (hora/bateria) para combinar com seu fundo */}
        <StatusBar barStyle="dark-content" backgroundColor="#fff9f6" />
        
        <Tabs.Screen options={{ tabBarStyle: { display: 'none' } }} />

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoWrapper}>
            <Image 
      source={require("../../assets/images/corAgent-icon-removebg-preview.png")} 
      style={styles.appLogo} 
    />
            <Text style={styles.brandText}>CorAgent</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Bell size={20} color="#5b4b7a" />
          </TouchableOpacity>
        </View>

        <ScrollView 
          contentContainerStyle={styles.mainContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Olá! O que vamos identificar hoje?</Text>
          <Text style={styles.introText}>Escolha um agente especializado.</Text>

          <View>
            <View style={styles.row}>
              <AgentCard icon={<Eye size={28} color="#5b4b7a" />} name="Agente Básico" />
              <AgentCard icon={<Apple size={28} color="#5b4b7a" />} name="Agente Alimentar" />
            </View>

            <View style={styles.row}>
              <AgentCard icon={<Shirt size={28} color="#5b4b7a" />} name="Personal Stylist" />
              <AgentCard icon={<BarChart3 size={28} color="#5b4b7a" />} name="Data Accessibility" />
            </View>

            <TouchableOpacity style={styles.wideCard}>
              <View style={styles.iconContainer}>
                <ShoppingBag size={28} color="#5b4b7a" />
              </View>
              <View style={styles.wideCardTextContent}>
                <Text style={styles.agentName}>Shopping Assistant</Text>
                <Text style={styles.agentSubtext}>Ajuda para compras e rótulos</Text>
              </View>
              <ChevronRight size={24} color="#9a8f98" />
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Bottom Nav */}
        <View style={styles.bottomNav}>
          <NavItem icon={<Home size={24} />} label="Início" active />
          <NavItem icon={<History size={24} />} label="Histórico" />
          <NavItem icon={<User size={24} />} label="Perfil" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

// --- Sub-componentes mantidos com suas correções de Tipos ---

const AgentCard = ({ icon, name }: AgentCardProps) => (
  <TouchableOpacity style={styles.agentCard} activeOpacity={0.7}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.agentName}>{name}</Text>
  </TouchableOpacity>
);

const NavItem = ({ icon, label, active }: NavItemProps) => (
  <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
    {React.isValidElement(icon) && React.cloneElement(icon, { color: active ? "#5b4b7a" : "#9a8f98" } as any)}
    <Text style={[styles.navLabel, active && styles.navLabelActive]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#5b4b7a',
    marginLeft: 12,
    letterSpacing: -0.5,
  },
  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffe6d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 120, // Espaço extra para não ficar atrás do Bottom Nav
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2f2840',
    marginBottom: 8,
  },
  introText: {
    fontSize: 16,
    color: '#9a8f98',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  agentCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 64) / 2,
    minHeight: 140,
    elevation: 2, // Sombra suave no Android
    shadowColor: '#000', // Sombra suave no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ffe6d9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  agentName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2f2840',
    textAlign: 'center',
  },
  wideCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  wideCardTextContent: {
    flex: 1,
    marginLeft: 16,
  },
  agentSubtext: {
    fontSize: 13,
    color: '#9a8f98',
    marginTop: 2,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85, // Um pouco mais alto para acomodar a barra de gestos do iPhone
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.08)',
    paddingBottom: 20, // Padding para a barra de gestos
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9a8f98',
    marginTop: 4,
  },
  navLabelActive: {
    color: '#5b4b7a',
  },
  appLogo:{
    width: 32,
    height: 32,
    borderRadius: 8, // Deixa os cantos levemente arredondados se a imagem for quadrada
    resizeMode:'contain'
  },
});

export default CorAgentApp;