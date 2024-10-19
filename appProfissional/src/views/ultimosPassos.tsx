import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import { useImage } from '../imageContext';
import Entypo from '@expo/vector-icons/Entypo';
import styles from '../css/ultimosPassosCss';
import { useUser } from '../proContext';
import api from '../../axios';
import { Button } from "../../componentes/Button/Button";


const UltimosPassos: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const [uploading, setUploading] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { imageUrl, setImageUrl } = useImage();
    const { setUserId, setUserData } = useUser();
    const [loading, setLoading] = useState<boolean>(false); // New state for data submission loading

    // Pick Image Function
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

    // Upload Image to Firebase
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

    // Extracting route params
    const { nomeContratado, sobrenomeContratado, nascContratado, cpfContratado, telefoneContratado, emailContratado, password, cepContratado,
        bairroContratado, ruaContratado, numCasaContratado, cidadeContratado, profissaoContratado, descContratado, regiaoContratado} = route.params;

    // Submit Professional Data
    const Verificar = async () => {
        setLoading(true); // Start the loading state
        try {
            const response = await api.post('/proo', {
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
                descContratado,
            });

            const result = response.data;

            // Pegando id do profissional
            const idPro = result.data.idContratado;
            if (idPro) {
                setUserId(idPro);
                await fetchDadosPro(idPro); // Fetch professional data
            }

            console.log('Os dados foram inseridos com sucesso!', result);
            navigation.navigate('homeStack'); // Navigate to profile page

        } catch (error: any) {
            if (error.response) {
                console.error('Erro:', error.response.data);
                Alert.alert('Erro', error.response.data.message || 'Ocorreu um erro ao enviar os dados.');
            } else {
                console.error('Erro:', error.message);
                Alert.alert('Erro', 'Ocorreu um erro ao enviar os dados.');
            }
        } finally {
            setLoading(false); // End the loading state
        }
    };

    // Fetch Professional Data
    const fetchDadosPro = async (idPro: string) => {
        try {
            const response = await api.get(`/pro/${idPro}`);
            const data = response.data;

            if (response.status === 200) {
                console.log('Dados recebidos:', data);
                setUserData(data);
            } else {
                console.error('Erro ao buscar os dados do profissional:', data.message);
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <ImageBackground style={styles.background} resizeMode="cover">
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
                        <Entypo name="location-pin" size={24} color="red" /> Localização não disponível
                    </Text>

                    {selectedImage && (
                        <TouchableOpacity onPress={uploadMedia} style={styles.button} disabled={uploading}>
                            <Text style={styles.buttonText}>{uploading ? 'Enviando...' : 'Confirmar imagem'}</Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity onPress={Verificar} style={styles.button} disabled={loading}>
                        <Text style={styles.buttonText}>{loading ? 'Salvando...' : 'Ir para Perfil Profissional'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default UltimosPassos;