import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import { useImage } from '../imageContext';
import Entypo from '@expo/vector-icons/Entypo';
import styles from '../css/ultimosPassosCss';

const UltimosPassos: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const [uploading, setUploading] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { imageUrl, setImageUrl } = useImage();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const uploadMedia = async () => {
        if (!selectedImage) {
            Alert.alert('Erro', 'Nenhuma imagem selecionada.');
            return;
        }

        setUploading(true);

        try {
            const response = await fetch(selectedImage);
            const blob = await response.blob();
            const filename = selectedImage.substring(selectedImage.lastIndexOf('/') + 1);
            const storageRef = ref(storage, `images/${filename}`);
            await uploadBytes(storageRef, blob);
            const url = await getDownloadURL(storageRef);
            setImageUrl(url);
            setSelectedImage(null);
            Alert.alert('Sucesso', 'Imagem enviada com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar a imagem:', error);
            Alert.alert('Erro', 'Falha ao enviar a imagem.');
        } finally {
            setUploading(false);
        }
    };

    const { nomeContratado, sobrenomeContratado, nascContratado, cpfContratado, telefoneContratado, emailContratado, password, cepContratado,
        bairroContratado, ruaContratado, numCasaContratado, cidadeContratado, profissaoContratado, descContratado } = route.params;

    const Verificar = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/proo', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nomeContratado,
                    sobrenomeContratado,
                    profissaoContratado,
                    cpfContratado,
                    emailContratado,
                    telefoneContratado,
                    password,
                    nascContratado,
                    cepContratado,
                    bairroContratado,
                    ruaContratado,
                    numCasaContratado,
                    cidadeContratado,
                    descContratado
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Erro ao enviar os dados:', errorData);
                Alert.alert('Erro', errorData.message || 'Erro ao enviar os dados.');
                return;
            }

            const data = await response.json();
            console.log('Os dados foram inseridos com sucesso!', data);
            Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
            navigation.navigate('homeStack'); // Navegar para a tela de perfil
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao enviar os dados.');
            console.error('Erro:', error);
        }
    };

    return (
        <ImageBackground 
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.fundoAzul}>
            <View style={styles.container}>
              <Image source={selectedImage ? { uri: selectedImage } : { uri: imageUrl }} style={styles.imgPerfil} />
              <View style={styles.cameraIcon}>
                <TouchableOpacity onPress={pickImage}>
                  <Entypo name="camera" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              <Text style={styles.nome}>Nome não disponível</Text>
              <Text style={styles.textLocalizacao}>
                <Entypo name="location-pin" size={24} color="red" /> 
                Localização não disponível
              </Text>

              {selectedImage && (
                <TouchableOpacity onPress={uploadMedia} style={styles.button} disabled={uploading}>
                  <Text style={styles.buttonText}>{uploading ? 'Enviando...' : 'Enviar Imagem'}</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={Verificar} style={styles.button}>
                <Text style={styles.buttonText}>Ir para Perfil Profissional</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
    );
};

export default UltimosPassos;
