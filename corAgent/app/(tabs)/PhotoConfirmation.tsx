import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Trash2, Check } from 'lucide-react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const PhotoConfirmation = () => {
  const router = useRouter();
  // Pega a imagem que veio da tela anterior (já recortada), e o tipo de agente que vamos utilizar
  const { imageUri, agentType } = useLocalSearchParams();
  
  const currentAgent = Array.isArray(agentType) ? agentType[0] : agentType
  const finalUri = Array.isArray(imageUri) ? imageUri[0] : imageUri;

  const handleConfirm = () => { 
  if (currentAgent === 'basic') {
    // Se for o agente básico, vai para a tela interativa
    router.push({
      pathname: '/ResultBasic', // Nome do arquivo que criamos acima
      params: { imageUri: finalUri }
    });
  } else {
    console.log("Vai ser outro agente");
  }
};
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fdfcf8" />
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>A imagem está nítida?</Text>
      </View>

      {/* Área Central: Preview Limpo */}
      <View style={styles.previewArea}>
        <View style={styles.imageContainer}>
          <Image
            source={{ 
              uri: finalUri || 'https://via.placeholder.com/400' 
            }}
            style={styles.previewImage}
            // "cover" garante que a imagem preencha todo o espaço sem distorcer
            resizeMode="cover"
          />
          {/* NENHUM ÍCONE AQUI EM CIMA */}
        </View>
      </View>

      {/* Rodapé: Ações */}
      <View style={styles.footer}>
        {/* Botão Negativo (Refazer) */}
        <TouchableOpacity 
          style={[styles.btn, styles.btnNegative]} 
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Trash2 size={20} color="white" />
          <Text style={styles.btnTextNegative}>Refazer</Text>
        </TouchableOpacity>

        {/* Botão Positivo (Enviar) */}
        <TouchableOpacity 
          style={[styles.btn, styles.btnPositive]} 
          onPress={handleConfirm}
          activeOpacity={0.8}
        >
          <Check size={24} color="#3a3055" strokeWidth={3} />
          <Text style={styles.btnTextPositive}>Enviar p/ Análise</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfcf8',
  },
  header: {
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3a3055',
    lineHeight: 31,
    textAlign: 'center',
  },
  previewArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    maxHeight: SCREEN_HEIGHT * 0.6,
    borderRadius: 24,
    overflow: 'hidden', // Isso garante que os cantos arredondados funcionem
    backgroundColor: '#f1eceb',
    // Sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    // Sombra Android
    elevation: 8,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  footer: {
    backgroundColor: '#3a3055',
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 34,
    flexDirection: 'row',
    gap: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 16,
    gap: 8,
  },
  btnNegative: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  btnPositive: {
    flex: 1.5,
    backgroundColor: '#ffd580',
  },
  btnTextNegative: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  btnTextPositive: {
    color: '#3a3055',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

export default PhotoConfirmation;