import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button";
import Imagens from '../../img/img';



import styles from '../css/ultimosPassosCss';
const UltimosPassos: React.FC<{ navigation: any }> = ({ navigation }) => {


    return (
        <View style={styles.containerPrincipal}>

            <Text style={styles.ultimo}>Últimos<Text style={styles.passos}> passos</Text></Text>
            <Text style={styles.acabando}>Já estamos acabando, adicione as {'\n'}últimas informações para criarmos a {'\n'}sua conta!</Text>

            <View style={styles.circulo}>
            </View>
            <Button
                style={[styles.buttonFoto, {
                    backgroundColor: '#FF914D',
                }]} // Defina a cor de fundo desejada aqui
                color='#FF914D'
                variant="primary"
                title="Adicione uma foto de perfil"

                onPress={() => navigation.navigate('ultimosPassos')}
            />

            <View style={styles.container2}>

                <Text style={styles.voce}>Fale um pouco sobre você</Text>
                <TextInput
                    style={{
                        borderBottomWidth: 2,
                        borderColor: '#fff',
                        color: '#fff',
                        fontSize: 16,
                        top: 84,
                        bottom: 37,
                        marginHorizontal: -50,
                        right: '1%'

                    }}
                    placeholder="Escreva um pouco sobre você..."
                    placeholderTextColor="#fff"
                    returnKeyType='done'>

                </TextInput>
            </View>

            <View style={styles.container3}>
                <Text style={styles.promova}>Promova seu trabalho, e adicione {'\n'}fotos ao seu portfólio!</Text>

            
            </View>
            <Button
                    style={[styles.buttonEnviar, {
                        backgroundColor: '#FF914D',
                    }]} // Defina a cor de fundo desejada aqui
                    color='#FF914D'
                    variant="primary"
                    title="Criar conta"
                    onPress={() => navigation.navigate('ultimosPassos')}

                />

        </View>

    );
};

export default UltimosPassos;






