import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { X, Check, Lock } from 'lucide-react-native';

const PriceTable = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#fef9f5" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <X size={24} color="#3c3050" />
        </TouchableOpacity>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoCircle}>
            <View style={styles.logoInner} />
          </View>
          <View>
            <Text style={styles.brandTitle}>CorAgent</Text>
            <Text style={styles.brandSubtitle}>PREMIUM</Text>
          </View>
        </View>

        {/* Title Section */}
        <View style={styles.textCenter}>
          <Text style={styles.heroTitle}>Desbloqueie o Poder Total</Text>
          <Text style={styles.heroSubtitle}>
            Compare os planos e escolha a melhor visão para o seu dia a dia.
          </Text>
        </View>

        {/* Comparison Table */}
        <View style={styles.table}>
          {/* Headers */}
          <View style={styles.tableRow}>
            <View style={[styles.cell, styles.labelCell]} />
            <Text style={styles.columnHeader}>Free</Text>
            <Text style={styles.columnHeader}>Médio</Text>
            <Text style={[styles.columnHeader, styles.premiumHeader]}>Pro</Text>
          </View>

          {/* Rows */}
          <ComparisonRow label="Agentes Ilimitados" free={<Lock size={18} color="#8a7b91" opacity={0.5}/>} medio={<Check size={20} color="#5b4a73" />} pro={<Check size={20} color="#5b4a73" />} />
          <ComparisonRow label="Análise de Gráficos" free={<Lock size={18} color="#8a7b91" opacity={0.5}/>} medio={<Lock size={18} color="#8a7b91" opacity={0.5}/>} pro={<Check size={20} color="#5b4a73" />} />
          <ComparisonRow label="Stylist Pessoal" free={<Lock size={18} color="#8a7b91" opacity={0.5}/>} medio={<Lock size={18} color="#8a7b91" opacity={0.5}/>} pro={<Check size={20} color="#5b4a73" />} />
          <ComparisonRow label="Sem Anúncios" free={<X size={18} color="#8a7b91" opacity={0.5}/>} medio={<Check size={20} color="#5b4a73" />} pro={<Check size={20} color="#5b4a73" />} />
        </View>

        {/* Premium Card */}
        <View style={styles.premiumCard}>
          <Text style={styles.planName}>PLANO PRO</Text>
          <Text style={styles.price}>R$ 29,90</Text>
          <Text style={styles.period}>por mês, cancele quando quiser</Text>
          
          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
            <Text style={styles.primaryButtonText}>Assinar Agora</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Restaurar Compras</Text>
          </TouchableOpacity>
          <Text style={styles.legalText}>
            Ao assinar, você concorda com nossos{' '}
            <Text style={styles.underline}>Termos de Uso</Text> e{' '}
            <Text style={styles.underline}>Política de Privacidade</Text>.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Componente auxiliar para as linhas da tabela
const ComparisonRow = ({ label, free, medio, pro }: any) => (
  <View style={styles.tableRow}>
    <Text style={[styles.cell, styles.rowLabel]}>{label}</Text>
    <View style={styles.cell}>{free}</View>
    <View style={styles.cell}>{medio}</View>
    <View style={[styles.cell, styles.highlightCell]}>{pro}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef9f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 60,
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3c3050',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 20,
    marginBottom: 30,
  },
  logoCircle: {
    width: 48,
    height: 48,
    backgroundColor: '#f5d6c8',
    borderRadius: 24,
    borderWidth: 4,
    borderColor: '#5b4a73',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoInner: {
    width: 20,
    height: 20,
    backgroundColor: '#3c3050',
    borderRadius: 10,
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#3c3050',
    lineHeight: 22,
  },
  brandSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#8a7b91',
    letterSpacing: 1,
  },
  textCenter: {
    alignItems: 'center',
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3c3050',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#8a7b91',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  table: {
    width: '100%',
    marginBottom: 24,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  cell: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelCell: {
    flex: 1.5,
    alignItems: 'flex-start',
  },
  columnHeader: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    color: '#3c3050',
    textAlign: 'center',
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#00000014',
  },
  premiumHeader: {
    color: '#5b4a73',
    borderBottomColor: '#5b4a73',
  },
  rowLabel: {
    flex: 1.5,
    fontSize: 13,
    fontWeight: '500',
    color: '#3c3050',
    textAlign: 'left',
  },
  highlightCell: {
    backgroundColor: 'rgba(245, 214, 200, 0.2)',
    borderRadius: 4,
  },
  premiumCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: '#00000014',
    alignItems: 'center',
    shadowColor: '#3c3050',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    marginBottom: 24,
  },
  planName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5b4a73',
    letterSpacing: 1,
    marginBottom: 8,
  },
  price: {
    fontSize: 32,
    fontWeight: '700',
    color: '#5b4a73',
    marginBottom: 4,
  },
  period: {
    fontSize: 14,
    color: '#8a7b91',
    fontWeight: '500',
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: '#5b4a73',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    gap: 12,
  },
  footerLink: {
    fontSize: 14,
    color: '#8a7b91',
    fontWeight: '500',
  },
  legalText: {
    fontSize: 11,
    color: '#8a7b91',
    textAlign: 'center',
    lineHeight: 16,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default PriceTable;