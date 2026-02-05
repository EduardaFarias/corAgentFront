import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { 
  ArrowLeft, 
  Shirt, 
  Briefcase, 
  ChevronDown, 
  Check, 
  ArrowRight, 
  Save 
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

const ResultValidationLook = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn}>
          <ArrowLeft size={20} color="#3F3755" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Validação de Look</Text>
        
        <View style={styles.headerIconRight}>
          <Shirt size={24} color="#3F3755" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.mainContent} showsVerticalScrollIndicator={false}>
        
        {/* Image Grid */}
        <View style={styles.imageGrid}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop' }}
              style={styles.image}
            />
            <View style={styles.imageLabel}>
              <Text style={styles.labelText}>Peça A</Text>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop' }}
              style={styles.image}
            />
            <View style={styles.imageLabel}>
              <Text style={styles.labelText}>Peça B</Text>
            </View>
          </View>
        </View>

        {/* Occasion Bar */}
        <TouchableOpacity style={styles.occasionBar} activeOpacity={0.8}>
          <View style={styles.occasionContent}>
            <Briefcase size={18} color="white" />
            <Text style={styles.occasionText}>Ocasião: Entrevista de Emprego</Text>
          </View>
          <ChevronDown size={16} color="white" />
        </TouchableOpacity>

        {/* Feedback Card */}
        <View style={styles.feedbackCard}>
          <View style={styles.checkCircle}>
            <Check size={28} color="#2E7D56" strokeWidth={3} />
          </View>
          
          <Text style={styles.cardTitle}>Combinação Segura</Text>
          
          <Text style={styles.cardDescription}>
            O contraste entre o azul marinho e o caqui transmite seriedade e
            confiança, ideal para ambientes corporativos e profissionais. As
            cores são complementares e de fácil leitura.
          </Text>

          <TouchableOpacity style={styles.cardLink}>
            <Text style={styles.cardLinkText}>Ver sugestão de sapato para este look</Text>
            <ArrowRight size={16} color="#3F3755" />
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} activeOpacity={0.9}>
          <Save size={20} color="white" />
          <Text style={styles.saveButtonText}>Salvar Look Completo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#FFFBF7', // --bg-color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0EEE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3F3755', // --primary-dark
    flex: 1,
    textAlign: 'center',
  },
  headerIconRight: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  mainContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },
  imageGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 3 / 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#E5E5E5',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageLabel: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(63, 55, 85, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  labelText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  occasionBar: {
    backgroundColor: '#3F3755',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  occasionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  occasionText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  feedbackCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    // Shadow para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    // Shadow para Android
    elevation: 4,
    marginTop: 8,
  },
  checkCircle: {
    width: 56,
    height: 56,
    backgroundColor: '#DEEFDC', // --success-light
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#3F3755',
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: '#8E8E9A', // --text-secondary
    textAlign: 'center',
    marginBottom: 24,
  },
  cardLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardLinkText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#3F3755',
  },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.03)',
    backgroundColor: '#FFFBF7',
  },
  saveButton: {
    backgroundColor: '#3F3755',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default ResultValidationLook;