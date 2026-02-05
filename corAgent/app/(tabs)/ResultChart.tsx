import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';
import { ArrowLeft, ChevronRight, Sparkles, FileText } from 'lucide-react-native';

const ResultChart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <ArrowLeft size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Data Accessibility</Text>
        <View style={styles.betaBadge}>
          <Text style={styles.betaText}>BETA</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Visual Comparison Section */}
        <View style={styles.comparisonGrid}>
          <View style={styles.visualCard}>
            <View style={styles.visualLabel}>
              <Text style={styles.labelText}>Original</Text>
            </View>
            <View style={styles.visualContent}>
              <Image 
                source={{ uri: 'https://storage.googleapis.com/banani-generated-images/generated-images/3771a7c5-af78-494b-bbbb-e486ebd230d7.jpg' }}
                style={styles.visualImg}
                resizeMode="contain"
              />
              <Text style={styles.visualInfoText}>Q4 Financials</Text>
            </View>
          </View>

          <View style={styles.visualCard}>
            <View style={styles.visualLabel}>
              <Text style={styles.labelText}>Renderizado</Text>
            </View>
            <View style={[styles.visualContent, { backgroundColor: '#fff' }]}>
              <Image 
                source={{ uri: 'https://storage.googleapis.com/banani-generated-images/generated-images/66b6ef40-766b-4c18-9bc4-85b974822d85.jpg' }}
                style={styles.visualImg}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* Stats List */}
        <View style={styles.statsList}>
          {/* Item 1 */}
          <TouchableOpacity style={styles.statCard}>
            <View style={styles.statIcon}>
              <Image source={{ uri: 'https://storage.googleapis.com/banani-generated-images/generated-images/030abdc4-ebb5-4cee-8500-0c7169302644.jpg' }} style={styles.fullImg} />
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statTitle}>Vendas Q1: 30%</Text>
              <Text style={styles.statSubtitle}>Tendência de Alta • Setor Financeiro</Text>
            </View>
            <ChevronRight size={20} color="#c7c7cc" />
          </TouchableOpacity>

          {/* Item 2 */}
          <TouchableOpacity style={styles.statCard}>
            <View style={styles.statIcon}>
              <Image source={{ uri: 'https://storage.googleapis.com/banani-generated-images/generated-images/1d3274ea-2508-491f-b473-29a4f4ef88ef.jpg' }} style={styles.fullImg} />
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statTitle}>Marketing: 45%</Text>
              <Text style={styles.statSubtitle}>Estável • Campanhas Digitais</Text>
            </View>
            <ChevronRight size={20} color="#c7c7cc" />
          </TouchableOpacity>

          {/* Item 3 */}
          <TouchableOpacity style={styles.statCard}>
            <View style={[styles.statIcon, styles.statIconSolid]} />
            <View style={styles.statInfo}>
              <Text style={styles.statTitle}>Outros: 25%</Text>
              <Text style={styles.statSubtitle}>Queda Leve • Investimentos</Text>
            </View>
            <ChevronRight size={20} color="#c7c7cc" />
          </TouchableOpacity>
        </View>

        {/* AI Summary */}
        <View style={styles.summaryBox}>
          <View style={styles.summaryHeader}>
            <Sparkles size={14} color="#3f3750" />
            <Text style={styles.summaryHeaderText}>RESUMO IA</Text>
          </View>
          <Text style={styles.summaryText}>
            A tendência principal é de crescimento no setor Financeiro (Listrado), enquanto os investimentos mostram retração.
          </Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.exportBtn}>
          <FileText size={18} color="white" />
          <Text style={styles.exportBtnText}>Exportar como Texto/PDF</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fffcf9', // --background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: '#efedeb',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#2d2a32',
    marginLeft: 16,
  },
  betaBadge: {
    backgroundColor: '#3f3750',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  betaText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  mainContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  comparisonGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  visualCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    height: 180,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.04)',
    elevation: 2, // Shadow para Android
    shadowColor: '#000', // Shadow para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
  },
  visualLabel: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#4a4453',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    zIndex: 2,
  },
  labelText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
  },
  visualContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  visualImg: {
    width: '80%',
    height: '100%',
  },
  visualInfoText: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 8,
  },
  statsList: {
    gap: 12,
  },
  statCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.03)',
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden',
  },
  statIconSolid: {
    backgroundColor: '#3f3750',
    borderWidth: 0,
  },
  fullImg: {
    width: '100%',
    height: '100%',
  },
  statInfo: {
    flex: 1,
  },
  statTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2d2a32',
  },
  statSubtitle: {
    fontSize: 13,
    color: '#88868b',
    fontWeight: '400',
    marginTop: 4,
  },
  summaryBox: {
    backgroundColor: '#efedf0',
    borderRadius: 6,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#3f3750',
    marginTop: 24,
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  summaryHeaderText: {
    color: '#3f3750',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  summaryText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#4a4a4f',
    fontWeight: '500',
  },
  footer: {
    padding: 20,
    backgroundColor: 'transparent',
  },
  exportBtn: {
    backgroundColor: '#3f3750',
    height: 52,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  exportBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default ResultChart;