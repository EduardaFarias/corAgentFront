// src/services/api.ts
import { Platform } from 'react-native';

// Ajuste o IP conforme seu ambiente
const API_URL = 'http://192.168.0.107:5000'

export const apiService = {
  // Para Agente Alimentar, Stylist, etc.
  analyzeImage: async (imageUri: string, functionality: string) => {
    const formData = new FormData();
    formData.append('functionality', functionality);
    formData.append('image', {
      uri: imageUri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    } as any);

    try {
      const response = await fetch(`${API_URL}/analyze-image`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Erro na API analyzeImage:", error);
      throw error;
    }
  },

  // Para o Agente Básico (Cor por Pixel)
  getPixelColor: async (imageUri: string, touchX: number, touchY: number, width: number, height: number) => {
    const formData = new FormData();
    formData.append('touchX', touchX.toString());
    formData.append('touchY', touchY.toString());
    formData.append('displayWidth', width.toString());
    formData.append('displayHeight', height.toString());
    formData.append('image', {
      uri: imageUri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    } as any);

    try {
      const response = await fetch(`${API_URL}/get-pixel-color`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Erro na API getPixelColor:", error);
      throw error;
    }
  }
};