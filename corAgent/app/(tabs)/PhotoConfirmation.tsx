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
import { Crop, Trash2, Check } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const PhotoConfirmation = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fdfcf8" />
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>A imagem está nítida?</Text>
      </View>

      {/* Área Central: Preview */}
      <View style={styles.previewArea}>
        <View style={styles.imageContainer}>
          <Image
            source={{ 
              uri: 'https://storage.googleapis.com/banani-generated-images/generated-images/9d939780-1968-4005-93ca-532f506b1c19.jpg' 
            }}
            style={styles.previewImage}
            resizeMode="cover"
          />
          
          {/* Ícone de Ajuste (Overlay) */}
          <TouchableOpacity 
            style={styles.editOverlay} 
            activeOpacity={0.8}
            onPress={() => console.log('Abrir Crop')}
          >
            <Crop size={32} color="white" />
          </TouchableOpacity>
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
          onPress={() => console.log('Enviado para análise')}
          activeOpacity={0.8}
        >
          <Check size={24} color="#3a3055" strokeWidth={3} />
          <Text style={styles.btnTextPositive}>Enviar para análise</Text>
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
    overflow: 'hidden',
    backgroundColor: '#f1eceb',
    // Sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    // Sombra Android
    elevation: 8,
    position: 'relative',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  editOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -32, // Metade do height
    marginLeft: -32, // Metade do width
    backgroundColor: 'rgba(58, 48, 85, 0.4)',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
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