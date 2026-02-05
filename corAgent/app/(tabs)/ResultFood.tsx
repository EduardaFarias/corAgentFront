import React, { useMemo, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ChevronLeft, MoreHorizontal, Volume2, Square, Bookmark, Sparkles } from 'lucide-react-native'; // Adicionei 'Square' para o botão de parar
import * as Speech from 'expo-speech'; // <--- BIBLIOTECA DE VOZ

// IMPORTE SEU SERVIÇO AQUI
import { apiService } from '../../hooks/api'; 

const ResultFood = () => {
  const router = useRouter();
  
  // 1. Recebendo APENAS a imagem da tela anterior
  const params = useLocalSearchParams();
  const imageUri = params.imageUri as string; // Convertendo para string garantida

  // 2. Estados para controlar a requisição
  const [loading, setLoading] = useState(true);
  const [foodData, setFoodData] = useState({
    classification: 'Analisando...',
    justification: 'Aguarde enquanto nossa IA verifica o alimento...'
  });
// Estado para controlar a voz
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 1. Função para falar o texto
  const handleSpeak = () => {
    const textToRead = foodData.justification;

    if (isSpeaking) {
      // Se já estiver falando, para a leitura
      Speech.stop();
      setIsSpeaking(false);
    } else {
      // Se não estiver, começa a falar
      setIsSpeaking(true);
      Speech.speak(textToRead, {
        language: 'pt-BR', // Força português do Brasil
        pitch: 1.0,        // Tom da voz normal
        rate: 0.9,         // Velocidade um pouquinho mais lenta para ficar natural
        onDone: () => setIsSpeaking(false),    // Quando acabar, muda o botão
        onStopped: () => setIsSpeaking(false), // Quando parar, muda o botão
      });
    } };

    // Garante que a voz pare se o usuário sair da tela
  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);


  // 3. Onde a mágica acontece: Chama a API assim que a tela abre
  useEffect(() => {
    const fetchAnalysis = async () => {
      if (!imageUri) return;

      try {
        setLoading(true);
        // Chama a função analyzeImage do seu arquivo api.ts
        // Passamos 'food_quality' para cair no if correto do Python
        const result = await apiService.analyzeImage(imageUri, 'food_quality');
        
        // Atualiza o estado com a resposta da Groq
        setFoodData({
          classification: result.classification || 'Indeterminado',
          justification: result.justification || 'Sem detalhes disponíveis.'
        });

      } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Não foi possível conectar ao servidor de análise.");
        setFoodData({
          classification: 'Erro',
          justification: 'Falha na conexão. Verifique sua internet ou o servidor.'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [imageUri]); // Executa toda vez que imageUri mudar (ou seja, ao abrir a tela)

  // 4. Lógica de Cores (agora olhando para foodData)
  const statusColor = useMemo(() => {
    if (loading) return '#6b7280'; // Cinza enquanto carrega
    const text = foodData.classification.toLowerCase();
    if (text.includes('imprópria') || text.includes('ruim')) return '#ef4444'; 
    if (text.includes('regular')) return '#f59e0b'; 
    return '#1b6a3a'; 
  }, [foodData.classification, loading]);

  const statusBgColor = useMemo(() => {
    if (loading) return '#f3f4f6';
    const text = foodData.classification.toLowerCase();
    if (text.includes('imprópria') || text.includes('ruim')) return '#fee2e2';
    if (text.includes('regular')) return '#fef3c7';
    return '#dff3e1';
  }, [foodData.classification, loading]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fef9f6" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerIconBtn} 
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
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
        <View style={styles.photoArea}>
          <View style={styles.photoFrame}>
            <Image
              source={{ uri: imageUri || 'https://via.placeholder.com/400' }}
              style={styles.analyzedImage}
              resizeMode="cover"
            />
            {/* Overlay de carregamento sobre a imagem (opcional) */}
            {loading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" color="#4a3f63" />
              </View>
            )}
          </View>
        </View>

        <View style={styles.bottomPanel}>
          <View style={styles.dragHandle} />

          {/* Se estiver carregando, mostramos um indicador. Se não, mostramos os dados */}
          {loading ? (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Processando imagem...</Text>
              <ActivityIndicator size="small" color="#3c3350" style={{marginTop: 8}}/>
            </View>
          ) : (
            <>
              <View style={styles.titleRow}>
                <View style={styles.titleContainer}>
                  <Text style={styles.resultTitle}>Qualidade do Alimento</Text>
                </View>
              
              </View>

              <Text style={styles.descriptionText}>
                {foodData.justification}
              </Text>

              <View style={styles.actionsRow}>
                {/* 2. Botão de Voz Conectado */}
                <TouchableOpacity 
                  style={[
                    styles.btnActionPrimary, 
                    isSpeaking && { backgroundColor: '#ef4444' } // Fica vermelho se estiver falando
                  ]} 
                  activeOpacity={0.8}
                  onPress={handleSpeak}
                >
                  {isSpeaking ? (
                    <Square size={20} color="#ffffff" fill="#ffffff" /> // Ícone de Parar
                  ) : (
                    <Volume2 size={20} color="#ffffff" /> // Ícone de Falar
                  )}
                  
                  <Text style={styles.btnTextPrimary}>
                    {isSpeaking ? "Parar leitura" : "Ler em voz alta"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnActionSecondary} activeOpacity={0.8}>
                  <Bookmark size={18} color="#3c3350" />
                  <Text style={styles.btnTextSecondary}>Salvar</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.infoRow}>
                <Sparkles size={16} color="#f2b89a" />
                <Text style={styles.infoText}>
                  Gerado com apoio de IA. Verifique sempre antes de consumir.
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fef9f6' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 12 },
  headerTitle: { fontSize: 16, fontWeight: '600', color: '#3c3350' },
  headerIconBtn: { width: 40, height: 40, borderRadius: 8, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 3, elevation: 2 },
  content: { flex: 1 },
  scrollContent: { flexGrow: 1 },
  photoArea: { paddingHorizontal: 20, paddingVertical: 16, alignItems: 'center', justifyContent: 'center' },
  photoFrame: { width: '100%', height: 280, borderRadius: 12, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#00000014', overflow: 'hidden', position: 'relative' },
  analyzedImage: { width: '100%', height: '100%' },
  loadingOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(255,255,255,0.4)', alignItems: 'center', justifyContent: 'center' },
  bottomPanel: { flex: 1, backgroundColor: '#ffffff', borderTopLeftRadius: 12, borderTopRightRadius: 12, paddingHorizontal: 20, paddingTop: 16, paddingBottom: 32, shadowColor: '#000', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.08, shadowRadius: 18, elevation: 10, minHeight: 300 },
  dragHandle: { width: 44, height: 4, borderRadius: 2, backgroundColor: '#f1eceb', alignSelf: 'center', marginBottom: 16 },
  loadingContainer: { alignItems: 'center', justifyContent: 'center', paddingVertical: 40 },
  loadingText: { color: '#9b8f9e', fontSize: 14 },
  titleRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 },
  titleContainer: { flex: 1, marginRight: 8 },
  resultTitle: { fontSize: 20, fontWeight: '700', color: '#3c3350' },
  subtitle: { fontSize: 13, fontWeight: '500', color: '#9b8f9e', marginTop: 2 },
  badge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, flexDirection: 'row', alignItems: 'center' },
  badgeText: { fontSize: 12, fontWeight: '700', textTransform: 'capitalize' },
  descriptionText: { fontSize: 15, fontWeight: '500', lineHeight: 21, color: '#3c3350', marginBottom: 24 },
  actionsRow: { flexDirection: 'row', gap: 12, marginBottom: 20 },
  btnActionPrimary: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 12, backgroundColor: '#4a3f63', borderRadius: 8 },
  btnTextPrimary: { color: '#ffffff', fontSize: 14, fontWeight: '600' },
  btnActionSecondary: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 12, backgroundColor: '#f1eceb', borderRadius: 8 },
  btnTextSecondary: { color: '#3c3350', fontSize: 14, fontWeight: '600' },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  infoText: { flex: 1, fontSize: 12, color: '#9b8f9e', lineHeight: 16 },
});

export default ResultFood;