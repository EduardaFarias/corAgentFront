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
import { 
  ArrowLeft, 
  Shirt, 
  Crop, 
  ScrollText, 
  Loader, 
  Sparkles, 
  SmilePlus, 
  Undo2, 
  CheckCircle2 
} from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const ResultStylist = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#fef9f6" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity 
            style={styles.backBtn} 
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <ArrowLeft size={24} color="#3c3350" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Personal Stylist</Text>
        </View>
        <View style={styles.badgeMode}>
          <Text style={styles.badgeText}>CorAgent • Moda</Text>
        </View>
      </View>

      <ScrollView 
        style={styles.main} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Section: A Peça */}
        <View style={styles.photoCard}>
          <View style={styles.photoInner}>
            <View style={styles.photoImageWrapper}>
              <Image
                source={{ uri: 'https://storage.googleapis.com/banani-generated-images/generated-images/1d91817b-a183-4374-a504-4ca439e88df5.jpg' }}
                style={styles.photoImage}
                resizeMode="cover"
              />
            </View>

            <View style={styles.tagRow}>
              <View style={styles.tagMain}>
                <Shirt size={18} color="#ffffff" />
                <Text style={styles.tagMainLabel}>Verde Musgo</Text>
              </View>

              <TouchableOpacity style={styles.editChip} activeOpacity={0.7}>
                <Crop size={16} color="#3c3350" />
                <Text style={styles.editChipText}>ajustar recorte</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.photoCaption}>
              Peça principal identificada para o look de hoje.
            </Text>
          </View>
        </View>

        {/* Suggestions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Combina bem com:</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.suggestionsRow}
          >
            <SuggestionCard icon={<ScrollText size={24} color="#3c3350" />} label="Calça bege clara" />
            <SuggestionCard icon={<Loader size={24} color="#3c3350" />} label="Jeans azul escuro" />
            <SuggestionCard icon={<Sparkles size={24} color="#3c3350" />} label="Tênis branco neutro" />
          </ScrollView>

          <View style={styles.moodBox}>
            <SmilePlus size={24} color="#1b6a3a" />
            <Text style={styles.moodText}>
              Combinação harmônica — segura para ambiente de trabalho e encontros formais.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerHint}>
          Toque em uma peça para ver alternativas acessíveis em outras cores.
        </Text>
        <View style={styles.footerActions}>
          <TouchableOpacity style={[styles.btn, styles.btnOutline]} activeOpacity={0.7}>
            <Undo2 size={20} color="#3c3350" />
            <Text style={styles.btnTextOutline}>Trocar peça</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnPrimary]} activeOpacity={0.8}>
            <CheckCircle2 size={20} color="#ffffff" />
            <Text style={styles.btnTextPrimary}>Salvar look</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Sub-componente para os cards de sugestão
const SuggestionCard = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <TouchableOpacity style={styles.suggestionCard} activeOpacity={0.7}>
    <View style={styles.suggestionIcon}>{icon}</View>
    <Text style={styles.suggestionLabel}>{label}</Text>
  </TouchableOpacity>
);

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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#f1eceb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3c3350',
    letterSpacing: 0.5,
  },
  badgeMode: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#f6d5c7',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3c3350',
  },
  main: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  photoCard: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
    overflow: 'hidden',
    marginTop: 4,
    marginBottom: 16,
  },
  photoInner: {
    padding: 12,
    gap: 8,
  },
  photoImageWrapper: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    backgroundColor: '#f1eceb',
    overflow: 'hidden',
  },
  photoImage: {
    width: '100%',
    height: '100%',
  },
  tagRow: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagMain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#4a3f63',
  },
  tagMainLabel: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  editChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: '#f1eceb',
  },
  editChipText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#3c3350',
  },
  photoCaption: {
    fontSize: 13,
    fontWeight: '500',
    color: '#9b8f9e',
    marginTop: 4,
  },
  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#3c3350',
    marginBottom: 8,
  },
  suggestionsRow: {
    gap: 10,
    paddingRight: 20,
  },
  suggestionCard: {
    width: 110,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    padding: 10,
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#00000014',
  },
  suggestionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f1eceb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3c3350',
    textAlign: 'center',
  },
  moodBox: {
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#1b6a3a',
    backgroundColor: '#dff3e1',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  moodText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    color: '#1b6a3a',
    lineHeight: 18,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#00000014',
    backgroundColor: '#ffffff',
  },
  footerHint: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9b8f9e',
    textAlign: 'center',
    marginBottom: 12,
  },
  footerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  btn: {
    flex: 1,
    height: 52,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  btnOutline: {
    borderWidth: 2,
    borderColor: '#00000014',
  },
  btnPrimary: {
    backgroundColor: '#4a3f63',
  },
  btnTextOutline: {
    color: '#3c3350',
    fontSize: 14,
    fontWeight: '700',
  },
  btnTextPrimary: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default ResultStylist;