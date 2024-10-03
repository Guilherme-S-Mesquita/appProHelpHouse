import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, Alert, TouchableOpacity } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button";
import Imagens from '../../img/img';


import styles from '../css/ultimosPassosCss';
const UltimosPassos: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const { nomeContratado, sobrenomeContratado, nascContratado, cpfContratado, telefoneContratado, emailContratado, password, cepContratado, bairroContratado, ruaContratado, numCasaContratado, cidadeContratado, profissaoContratado, descContratado } = route.params;
    
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

            // Verifica se a resposta não é ok (caso 422)
            if (!response.ok) {
                const errorData = await response.json(); // tenta pegar o erro
                console.error('Erro ao enviar os dados:', errorData); // Log do erro
                Alert.alert('Erro', errorData.message || 'Erro ao enviar os dados.'); // Mensagem do erro
                return; // Sai da função
            }

            const data = await response.json();
            console.log('Os dados foram inseridos com sucesso!', data); // Log da resposta de sucesso

        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao enviar os dados.');
            console.error('Erro:', error);
            console.log({
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
            });
        }
    };

    return (

        <View style={styles.containerPrincipal}>
                <Text style={styles.ultimo}>Últimos<Text style={styles.passos}> passos</Text></Text>


                <Text style={styles.acabando}>Já estamos acabando, adicione as {'\n'}últimas informações para criarmos a {'\n'}sua conta!</Text>



                <View style={styles.circulo}>
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
                            marginBottom: 20,
                            marginHorizontal: -49,
                            right:8
                        }}
                        placeholder="Escreva um pouco sobre você..."
                        placeholderTextColor="#fff"
                        returnKeyType='done'>

                    </TextInput>
                </View> 
                <View style={styles.container3}>
                    <Text style={styles.promova}>Promova seu trabalho, e adicione {'\n'}fotos ao seu portfólio!</Text>
                </View>


           
                <TouchableOpacity
                    style={[styles.buttonEnviar, {
                        backgroundColor: '#FF914D', // Define a cor de fundo
                    }]}
                    onPress={async () => {
                        try {
                            await Verificar(); // Aguarda a conclusão da verificação
                            navigation.navigate('login'); // Navega para a tela 'login'
                        } catch (error) {
                            console.log("Erro durante a verificação:", error);
                            // Aqui você pode adicionar uma lógica de erro, como exibir um alerta
                        }
                    }}
                >
                   
                </TouchableOpacity>
                <Text style={styles.buttonText}>Criar conta</Text>

        </View>

    );
};

export default UltimosPassos;