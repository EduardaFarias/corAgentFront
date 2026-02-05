import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Copy } from 'lucide-react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { apiService } from '../../hooks/api'; // Certifique-se que o caminho está correto

const { width } = Dimensions.get('window');

// Interface para o resultado da cor
interface ColorResult {
  hex: string;
  rgb: string;
  name: string;
}

const ResultBasic = () => {
  const router = useRouter();
  const { imageUri } = useLocalSearchParams();
  const finalUri = Array.isArray(imageUri) ? imageUri[0] : imageUri;

  const [loading, setLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState<ColorResult | null>(null);
  const [markerPosition, setMarkerPosition] = useState<{x: number, y: number} | null>(null);
  
  // Armazena as dimensões reais da imagem renderizada na tela
  const [layout, setLayout] = useState({ width: 0, height: 0 });

  const handleImagePress = async (event: any) => {
    if (loading) return; // Evita toques múltiplos enquanto processa
    
    // 1. Pega as coordenadas do toque
    const { locationX, locationY } = event.nativeEvent;
    
    // Atualiza o marcador visual imediatamente
    setMarkerPosition({ x: locationX, y: locationY });
    setLoading(true);

    try {
      // 2. Chama o backend
      const data = await apiService.getPixelColor(
        finalUri!,
        locationX,
        locationY,
        layout.width,
        layout.height
      );

      // 3. Atualiza o resultado
      setSelectedColor(data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível identificar a cor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fef9f6" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#33283e" />
        </Pressable>
        <Text style={styles.headerTitle}>Identificador de Cor</Text>
        <View style={{ width: 40 }} /> 
      </View>

      <Text style={styles.instruction}>
        Toque em qualquer ponto da imagem para descobrir a cor exata.
      </Text>

      {/* Área da Imagem Interativa */}
      <View style={styles.imageWrapper}>
        <View 
          style={styles.imageFrame}
          onLayout={(event) => {
            const { width, height } = event.nativeEvent.layout;
            setLayout({ width, height });
          }}
        >
          <Pressable onPress={handleImagePress} style={{ flex: 1 }}>
            <Image
              source={{ uri: finalUri }}
              style={styles.image}
              resizeMode="contain" 
            />
            
            {/* Marcador Visual (A bolinha onde o usuário tocou) */}
            {markerPosition && (
              <View 
                style={[
                  styles.marker, 
                  { 
                    left: markerPosition.x - 12, // -12 para centralizar (metade de 24)
                    top: markerPosition.y - 12,
                    borderColor: selectedColor ? selectedColor.hex : '#fff'
                  }
                ]} 
              >
                <View style={[styles.markerCenter, { backgroundColor: selectedColor ? selectedColor.hex : 'transparent' }]} />
              </View>
            )}
          </Pressable>
        </View>
      </View>

      {/* Painel de Resultado */}
      <View style={styles.resultContainer}>
        {loading ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#33283e" />
            <Text style={styles.loadingText}>Analisando pixel...</Text>
          </View>
        ) : selectedColor ? (
          <>
            <View style={styles.colorInfoRow}>
              {/* Preview da Cor */}
              <View style={[styles.colorPreviewBig, { backgroundColor: selectedColor.hex }]} />
              
              <View style={styles.textInfo}>
                <Text style={styles.colorNameLabel}>Cor Identificada (IA)</Text>
                <Text style={styles.colorNameValue}>{selectedColor.name}</Text>
                
                <View style={styles.hexBadge}>
                  <Text style={styles.hexText}>{selectedColor.hex.toUpperCase()}</Text>
                  <Copy size={14} color="#9b8f9e" style={{ marginLeft: 6 }} />
                </View>
              </View>
            </View>

            <View style={styles.rgbBox}>
              <Text style={styles.rgbText}>RGB: {selectedColor.rgb}</Text>
            </View>
          </>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              Nenhuma cor selecionada
            </Text>
          </View>
        )}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ede8e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#33283e',
  },
  instruction: {
    textAlign: 'center',
    color: '#9b8f9e',
    fontSize: 14,
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imageFrame: {
    width: '100%',
    aspectRatio: 3/4, // Mantém a proporção da foto tirada (normalmente portrait)
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#f1eceb',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  marker: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  markerCenter: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  resultContainer: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 15,
  },
  loadingBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  loadingText: {
    color: '#9b8f9e',
    fontWeight: '500',
  },
  colorInfoRow: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  colorPreviewBig: {
    width: 80,
    height: 80,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  textInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  colorNameLabel: {
    fontSize: 12,
    color: '#9b8f9e',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  colorNameValue: {
    fontSize: 22,
    color: '#33283e',
    fontWeight: '800',
    marginBottom: 8,
    lineHeight: 26,
  },
  hexBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f3f2',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  hexText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5b4b7a',
  },
  rgbBox: {
    padding: 16,
    backgroundColor: '#fbf5f3',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ede8e2',
  },
  rgbText: {
    fontSize: 14,
    fontFamily: 'monospace', // Se disponível, ou remova
    fontWeight: '600',
    color: '#9b8f9e',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    color: '#d1d5db',
    fontWeight: '500',
  },
});

export default ResultBasic;