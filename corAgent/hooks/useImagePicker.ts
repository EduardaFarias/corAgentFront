import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

export const useImagePicker = () => {
  const router = useRouter();

  // Função genérica para processar o resultado
  const handlePickerResult = (result: ImagePicker.ImagePickerResult) => {
    if (!result.canceled && result.assets && result.assets.length > 0) {
      router.push({
        pathname: '/PhotoConfirmation',
        params: { imageUri: result.assets[0].uri }
      });
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Precisamos de permissão para acessar a câmera!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0.8,
    });

    handlePickerResult(result);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0.8,
    });

    handlePickerResult(result);
  };

  return { takePhoto, pickImage };
};