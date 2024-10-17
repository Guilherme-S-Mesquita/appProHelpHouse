import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import { useImage } from '../imageContext';
import Entypo from '@expo/vector-icons/Entypo';
import styles from '../css/ultimosPassosCss';
import { useUser } from '../proContext';
import { Button } from "../../componentes/Button/Button";

const UltimosPassos: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const [uploading, setUploading] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { imageUrl, setImageUrl } = useImage();
    const { setUserId, setUserData } = useUser();

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
        bairroContratado, ruaContratado, numCasaContratado, cidadeContratado, profissaoContratado, descContratado, regiaoContratado} = route.params;

    const Verificar = async () => {
        try {
            const response = await fetch('http://172.20.10.2:8000/api/proo', {
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
                    descContratado,
                    regiaoContratado
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Erro ao enviar os dados:', errorData);
                Alert.alert('Erro', errorData.message || 'Erro ao enviar os dados.');
                return;
            }

            //pegando os dados e tranformando em json
            const result = await response.json();

            //pegando id do profissional
            const idPro = result.data.idContratado;
            if(idPro){
              setUserId(idPro);
              await fetchDadosPro(idPro);
            }
            console.log('Os dados foram inseridos com sucesso!', result);
            navigation.navigate('Home'); // Navegar para a tela de perfil
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao enviar os dados.');
            console.error('Erro:',error);
        }
    };

    const fetchDadosPro = async (idPro: string) => {
      try {
          const response = await fetch('http://172.20.10.2:8000/api/pro/${idPro}');
          const data = await response.json();
  
          if (response.ok) {
              console.log('Dados recebidos:', data); // Adicione este log
              setUserData(data); // Aqui você deve ter certeza de que 'data' contém os dados do usuário
          } else {
              console.error('Error fetching user data:', data.message);
          }
      } catch (error) {
          console.error('Error:', error);
      }
  };
  

    return (
        <ImageBackground 
          style={styles.background}
          resizeMode="cover"
        >
          <Text style={styles.ultimos}>Ultimos<Text style={styles.passos}> passos</Text></Text>

          <Text style={styles.acabando}>Já estamos acabando, adicione as {'\n'}últimas informações para criarmos a {'\n'}sua conta!</Text>

          <View style={styles.fundoAzul}>
            <View style={styles.container}>
              <Image source={selectedImage ? { uri: selectedImage } : { uri: imageUrl }} style={styles.imgPerfil} />
              <View style={styles.cameraIcon}>
                <TouchableOpacity onPress={pickImage}>
                  <Entypo name="camera" size={32} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
              {selectedImage && (
                <TouchableOpacity onPress={uploadMedia} style={styles.button} disabled={uploading}>
                  <Text style={styles.buttonText}>{uploading ? 'Enviando...' : 'Confirmar imagem'}</Text>
                </TouchableOpacity>
              )}
              {/* <TouchableOpacity onPress={Verificar} style={styles.button}>
                <Text style={styles.buttonText}>Ir para Perfil Profissional</Text>
              </TouchableOpacity> */}
            </View>
          </View>

          <View style={styles.container2}>

<Text style={styles.voce}>Fale um pouco sobre você</Text>
<TextInput
    style={{
        borderBottomWidth: 2,
        borderColor: '#fff',
        color: '#fff',
        fontSize: 16,
        top: 15,
        bottom: 37,
        paddingHorizontal: 5,
        width: '80%',
        left:15
    }}
    placeholder="Escreva um pouco sobre você..."
    placeholderTextColor="#fff"
    returnKeyType='done'>

</TextInput>
</View>

<View style={styles.container3}>
{/* <Text style={styles.promova}>Promova seu trabalho, e adicione {'\n'}fotos ao seu portfólio!</Text> */}
</View>
{/* <Button
style={[styles.buttonEnviar, {
    backgroundColor: '#FF914D',
}]} // Defina a cor de fundo desejada aqui
color='#FF914D'
variant="primary"
title="Criar conta"
onPress={() => navigation.navigate('Home')}

/> */}

<TouchableOpacity onPress={Verificar} style={styles.button}>
                <Text style={styles.buttonText}>Criar Perfil</Text>
              </TouchableOpacity>
        </ImageBackground>
    );
};

export default UltimosPassos;