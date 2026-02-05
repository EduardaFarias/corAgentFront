import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Apple, Camera, ImagePlus } from 'lucide-react-native'; // Corrigi ImagePlusIcon para ImagePlus (nome padrão)
import { useRouter } from 'expo-router';

// 1. IMPORTANTE: Importe o hook que controla a câmera
import { useImagePicker } from '../../hooks/useImagePicker'; 

const { width } = Dimensions.get('window');

const CameraAgenteAlimentarScreen = () => {
  const router = useRouter();

  // 2. IMPORTANTE: Inicialize o hook dizendo que este é o agente 'food'
  // Isso garante que a navegação leve o 'agentType: food' para a próxima tela
  const { takePhoto, pickImage } = useImagePicker('food');

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#fef9f6" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <ArrowLeft size={24} color="#33283e" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Icon Badge */}
        <View style={styles.iconBadge}>
          <Apple size={40} color="#33283e" />
        </View>

        {/* Title & Description */}
        <Text style={styles.title}>Agente Alimentar</Text>
        <Text style={styles.description}>
          Identifique se frutas e alimentos estão maduros ou seguros para consumo
        </Text>

        {/* Main Illustration Card */}
        <View style={styles.card}>
          <Image
           // Certifique-se que o caminho da imagem está correto no seu projeto
           source={require("../../assets/images/food-apple.png")}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      {/* Footer Action Buttons */}
      {/* Juntei os dois botões em um único container footer para arrumar o layout */}
      <View style={styles.footer}>
        
        {/* Botão Câmera */}
        <TouchableOpacity 
          style={styles.actionButton}
          activeOpacity={0.9}
          onPress={takePhoto} // 3. Conectado aqui
        >
          <Camera size={24} color="#ffffff" />
          <Text style={styles.actionButtonText}>Tirar Foto</Text>
        </TouchableOpacity>

        {/* Botão Galeria */}
        <TouchableOpacity 
          style={[styles.actionButton, styles.galleryButton]} // Adicionei um estilo extra se quiser diferenciar
          activeOpacity={0.9}
          onPress={pickImage} // 4. Conectado aqui
        >
          <ImagePlus size={24} color="#ffffff" />
          <Text style={styles.actionButtonText}>Enviar da Galeria</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef9f6',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ede8e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 40, // Espaço extra para scroll não ficar preso no footer
  },
  iconBadge: {
    width: 80,
    height: 80,
    backgroundColor: '#f6d6c6',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#33283e',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#9b8f9e',
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: 280,
  },
  card: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 24,
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 34,
    width: '100%',
    gap: 16, // Espaço entre os botões
  },
  actionButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#463257',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  galleryButton: {
    backgroundColor: '#8c7b99', // Uma cor ligeiramente diferente para diferenciar (opcional)
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CameraAgenteAlimentarScreen;