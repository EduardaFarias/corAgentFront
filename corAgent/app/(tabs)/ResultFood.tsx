import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, MoreHorizontal, Volume2, Bookmark, Sparkles } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const ResultFood = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fef9f6" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.7}>
          <ChevronLeft size={24} color="#3c3350" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Resultado da Análise</Text>
        
        <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.7}>
          <MoreHorizontal size={24} color="#3c3350" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Photo Area */}
        <View style={styles.photoArea}>
          <View style={styles.photoFrame}>
            <Image
              source={{ uri: 'https://storage.googleapis.com/banani-generated-images/generated-images/1a6271a4-9fdc-4fe0-ab86-b49f2fde0a45.jpg' }}
              style={styles.analyzedImage}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Bottom Panel (Simulado como parte do Scroll para melhor UX mobile) */}
        <View style={styles.bottomPanel}>
          <View style={styles.dragHandle} />

          <View style={styles.titleRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.resultTitle}>Banana - Madura</Text>
              <Text style={styles.subtitle}>Análise detalhada pronta para você</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Excelente para consumo</Text>
            </View>
          </View>

          <Text style={styles.descriptionText}>
            A casca apresenta cor amarelo-ouro com pequenas manchas marrons,
            indicando doçura ideal e textura macia, perfeita para consumo
            imediato.
          </Text>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.btnActionPrimary} activeOpacity={0.8}>
              <Volume2 size={20} color="#ffffff" />
              <Text style={styles.btnTextPrimary}>Ler em voz alta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnActionSecondary} activeOpacity={0.8}>
              <Bookmark size={18} color="#3c3350" />
              <Text style={styles.btnTextSecondary}>Salvar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoRow}>
            <Sparkles size={16} color="#f2b89a" />
            <Text style={styles.infoText}>
              Gerado com apoio de IA para leitura mais acessível e inclusiva.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef9f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3c3350',
  },
  headerIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    // Sombra leve
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  photoArea: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoFrame: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#00000014',
    overflow: 'hidden',
  },
  analyzedImage: {
    width: '100%',
    height: '100%',
  },
  bottomPanel: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
    // Sombra para dar profundidade ao painel
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 10,
  },
  dragHandle: {
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#f1eceb',
    alignSelf: 'center',
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  titleContainer: {
    flex: 1,
    marginRight: 8,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3c3350',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#9b8f9e',
    marginTop: 2,
  },
  badge: {
    backgroundColor: '#dff3e1',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1b6a3a',
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 21,
    color: '#3c3350',
    marginBottom: 24,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  btnActionPrimary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: '#4a3f63',
    borderRadius: 8,
  },
  btnTextPrimary: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  btnActionSecondary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: '#f1eceb',
    borderRadius: 8,
  },
  btnTextSecondary: {
    color: '#3c3350',
    fontSize: 14,
    fontWeight: '600',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: '#9b8f9e',
    lineHeight: 16,
  },
});

export default ResultFood;