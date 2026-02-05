import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const ResultCosmetics = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fbf5f3" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.iconBtnBack} 
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#1e2130" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Shopping Assistant</Text>
        
        <TouchableOpacity style={styles.iconBtnTransparent}>
          <ShoppingBag size={24} color="#1e2130" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Circles Comparison */}
        <View style={styles.comparisonContainer}>
          {/* Left Circle */}
          <View style={styles.circleWrapper}>
            <View style={[styles.circle, { backgroundColor: '#c88a4d' }]} />
            <View style={styles.circleLabelContainer}>
              <Text style={styles.circleLabel}>Cor da Pele</Text>
              <Text style={styles.circleSubLabel}>REFERÊNCIA</Text>
            </View>
          </View>

          {/* Right Circle */}
          <View style={styles.circleWrapper}>
            <View style={[styles.circle, { backgroundColor: '#b0703c' }]} />
            <View style={styles.circleLabelContainer}>
              <Text style={styles.circleLabel}>Base Matte</Text>
              <Text style={styles.circleSubLabel}>PRODUTO</Text>
            </View>
          </View>
        </View>

        {/* Match Score */}
        <View style={styles.matchContainer}>
          <Text style={styles.matchText}>95% Match</Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '95%' }]} />
          </View>
          <Text style={styles.matchStatus}>Alta Similaridade</Text>
        </View>

        {/* Description Card */}
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionTag}>DESCRIÇÃO VISUAL</Text>
          <Text style={styles.descriptionText}>
            Tom similar a{"\n"}"Terra Queimada" ou{"\n"}"Telha Escura"
          </Text>
        </View>

        {/* Success Button */}
        <TouchableOpacity style={styles.approvedBtn} activeOpacity={0.8}>
          <View style={styles.checkCircle}>
            <Check size={14} color="white" strokeWidth={3} />
          </View>
          <Text style={styles.approvedBtnText}>Aprovado para seu perfil</Text>
        </TouchableOpacity>

        {/* Footer Actions */}
        <View style={styles.footerActions}>
          <TouchableOpacity 
            style={styles.btnSecondary}
            onPress={() => console.log('Refazer')}
          >
            <Text style={styles.btnSecondaryText}>Refazer</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.btnPrimary}
            onPress={() => console.log('Salvar')}
          >
            <Text style={styles.btnPrimaryText}>Salvar Item</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf5f3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  iconBtnBack: {
    width: 40,
    height: 40,
    backgroundColor: '#f7f3f2',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnTransparent: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e2130',
  },
  scrollContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 30,
  },
  comparisonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    width: '100%',
    marginTop: 10,
    marginBottom: 32,
  },
  circleWrapper: {
    alignItems: 'center',
    gap: 12,
  },
  circle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#ffffff',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    // Sombra para Android
    elevation: 3,
  },
  circleLabelContainer: {
    alignItems: 'center',
  },
  circleLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9ca3af',
    marginBottom: 4,
  },
  circleSubLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#d1d5db',
    letterSpacing: 0.5,
  },
  matchContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },
  matchText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#3b2a50',
  },
  progressBarBg: {
    width: '100%',
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 99,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#23c464',
    borderRadius: 99,
  },
  matchStatus: {
    fontSize: 14,
    fontWeight: '500',
    color: '#23c464',
    marginTop: 4,
  },
  descriptionCard: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#f3f4f6',
    marginBottom: 32,
  },
  descriptionTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3b2a50',
    lineHeight: 25,
    textAlign: 'center',
  },
  approvedBtn: {
    width: '100%',
    backgroundColor: '#23c464',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
    // Sombra botão
    shadowColor: '#23c464',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  checkCircle: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
  },
  approvedBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  footerActions: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
  },
  btnSecondary: {
    flex: 1,
    height: 52,
    backgroundColor: '#fbf5f3',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSecondaryText: {
    color: '#3b2a50',
    fontSize: 15,
    fontWeight: '600',
  },
  btnPrimary: {
    flex: 1,
    height: 52,
    backgroundColor: '#3b2a50',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimaryText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default ResultCosmetics;