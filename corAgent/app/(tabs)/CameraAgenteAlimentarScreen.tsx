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
import { ArrowLeft, Apple, Camera, ImagePlusIcon } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const CameraAgenteAlimentarScreen = () => {
  const router = useRouter();

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
           source={require("../../assets/images/food-apple.png")}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      {/* Footer Action Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.actionButton}
          activeOpacity={0.9}
          onPress={() => console.log('Abrir Câmera')}
        >
          <Camera size={24} color="#ffffff" />
          <Text style={styles.actionButtonText}>Tirar Foto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.actionButton}
          activeOpacity={0.9}
          onPress={() => console.log('Abrir Câmera')}
        >
          <ImagePlusIcon size={24} color="#ffffff" />
          <Text style={styles.actionButtonText}>Enviar Foto</Text>
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
    // Shadow para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    // Shadow para Android
    elevation: 2,
    marginBottom: 24,
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    width: '100%',
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
  actionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CameraAgenteAlimentarScreen;