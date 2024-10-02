import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, ToastAndroid, TouchableOpacity, Alert, Image } from 'react-native';
import { Button } from "../../componentes/Button/Button";
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import styles from '../css/ultimosPassosCss';
import { StatusBar } from 'expo-status-bar';

    function UltimosPassos({ navigation }: { navigation: any }) {
        const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);

        const dadosCli = () => {
            navigation.navigate('home', {
                fotoPerfil: fotoPerfil,
            });

        }

        const selectPhoto = async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Desculpe, precisamos de permissões para acessar a galeria!');
                return;
            }
            else {
                const result = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    base64: false,
                    aspect: [4, 4],
                    quality: 1
                });


                if (result.canceled) {
                    ToastAndroid.show('Operação cancelada', ToastAndroid.SHORT)
                } else {
                    const filename = result.assets[0].uri.substring
                        (
                            result.assets[0].uri.lastIndexOf('/') + 1,
                            result.assets[0].uri.length
                        );
                    console.log(filename)
                    const formData = new FormData();
                    formData.append('file', JSON.parse(JSON.stringify({
                        name: filename,
                        uri: result.assets[0].uri,
                        type: 'image/' + filename.split('.')[1]
                    })));

                    try {
                        const cpp = await axios.post('http://localhost:8000/api/fotoPerfil',
                            formData,
                            {
                                headers:
                                {
                                    Accept: 'application/json',
                                    'Contente-Type': 'multipart/form-data',
                                },
                            }
                        );
                        if (cpp.data.erro) {
                            Alert.alert('Erro', 'Não foi possovel enviar sua imagem. por favor, tente novamente.')
                        } else {
                            Alert.alert('Sucesso', 'foi possovel enviar sua imagem')
                            const response = await fetch('http://localhost:8000/api/fotoPerfilGet');
                            const jsno = await response.json();
                            setFotoPerfil(jsno)

                        }
                    } catch {

                    }
                }
            }
        };

        return (
            <View style={styles.containerPrincipal}>

                <Text style={styles.ultimo}>Últimos<Text style={styles.passos}> passos</Text></Text>

                <Text style={styles.acabando}>Já estamos acabando, adicione as {'\n'}últimas informações para criarmos a {'\n'}sua conta!</Text>
                <View style={styles.circulo}>

                    {fotoPerfil && (
                        <Image
                            source={{ uri: fotoPerfil }}
                            style={styles.image}
                        />
                    )}
                    <TouchableOpacity style={styles.button2} onPress={selectPhoto}>
                        <Text style={styles.buttonText2}>Selecionar Foto</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.container2}>

                    <Text style={styles.voce}>Fale um pouco sobre você</Text>
                    <TextInput
                        style={{
                            borderBottomWidth: 2,
                            borderColor: '#fff',
                            color: '#fff',
                            fontSize: 16,
                            top: 55,
                            bottom: 37,

                        }}
                        placeholder="Escreva um pouco sobre você..."
                        placeholderTextColor="#fff"
                        returnKeyType='done'>

                    </TextInput>
                </View>

                <View style={styles.container3}>
                    <Text style={styles.promova}>Promova seu trabalho, e adicione {'\n'}fotos ao seu portfólio!</Text>
                </View>
               
               
                <TouchableOpacity style={styles.button2} onPress={() => {
                        dadosCli();
                    }}>
                        <Text style={styles.buttonText2}>Continuar</Text>
                    </TouchableOpacity>

                    <StatusBar style="auto" />

                {/* <Button
                    style={[styles.buttonEnviar, {
                        backgroundColor: '#FF914D',
                    }]} // Defina a cor de fundo desejada aqui
                    color='#FF914D'
                    variant="primary"
                    title="Criar conta"
                    onPress={() => navigation.navigate('ultimosPassos')}

                /> */}


            </View >

        );
    };

export default UltimosPassos;






