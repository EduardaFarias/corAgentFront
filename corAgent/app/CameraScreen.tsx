import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { X, Zap, ZapOff, RefreshCw, Camera as CameraIcon } from 'lucide-react-native';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<'back' | 'front'>('back');
  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const cameraRef = useRef<any>(null);
  const router = useRouter();

  // 1. Verificação de Permissão
  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.permissionText}>Precisamos de acesso à sua câmera</Text>
        <TouchableOpacity style={styles.btnPermission} onPress={requestPermission}>
          <Text style={styles.btnText}>Conceder Permissão</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 2. Função para Tirar Foto
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
        base64: true,
      });
      console.log(photo.uri);
      // Aqui você enviaria o URI para a sua tela de "Confirmação de Captura"
      // router.push({ pathname: '/confirmacao', params: { imageUri: photo.uri } });
    }
  };

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent />
      
      {/* 1. Feche a tag da CameraView aqui (self-closing) */}
      <CameraView 
        style={StyleSheet.absoluteFill} 
        facing={facing} 
        flash={flash}
        ref={cameraRef}
      />

      {/* 2. Os controles agora ficam em um overlay absoluto, sem textos soltos */}
      <View style={styles.overlay}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => router.back()}>
            <X color="white" size={28} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => setFlash(f => f === 'off' ? 'on' : 'off')}>
            {flash === 'on' ? <Zap color="#ffd580" size={26} /> : <ZapOff color="white" size={26} />}
          </TouchableOpacity>
        </View>

        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.sideBtn} onPress={toggleCameraFacing}>
            <RefreshCw color="white" size={28} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.captureBtn} onPress={takePicture}>
            <View style={styles.captureBtnInner}>
              <CameraIcon color="#3a3055" size={32} />
            </View>
          </TouchableOpacity>

          <View style={styles.sideBtnPlaceholder} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  containerCenter: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fdfcf8', padding: 20 },
  camera: { flex: 1 },
  permissionText: { fontSize: 18, color: '#3a3055', textAlign: 'center', marginBottom: 20, fontWeight: '600' },
  btnPermission: { backgroundColor: '#5b4b7a', padding: 16, borderRadius: 12 },
  btnText: { color: 'white', fontWeight: '700' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  captureBtn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  captureBtnInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  sideBtnPlaceholder: {
    width: 50, // Mantém o alinhamento do botão de captura no centro
  },
});