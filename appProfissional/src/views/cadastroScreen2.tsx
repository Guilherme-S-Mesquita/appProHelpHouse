import React, { useState } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';  // Importando o MapView e Marker
import Map from '../../componentes/Map/map';  // Importe o componente Map
import Api from '../../componentes/apiCep/api'


import styles from '../css/cad2Css';

const Cadastro: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [Cep, setCep] = useState('');
    const [Bairro, setBairro] = useState('');
    const [Rua, setRua] = useState('');
    const [Numero, setNumero] = useState('');
    const [tempoTrabalhado, setTempoTrabalhado] = useState('');



    async function buscarCep() {
        // Se Cep for vazio vai aparecer um alerta
        if (Cep == "") {
            Alert.alert('Cep inválido')
            setCep("")
        }
        try {
            // await serve para esperar a resposta que vai ser passada
            const response = await Api.get(`/${Cep}/json/`)
            //Esse get, serve para puxar a info la do servidor da API 


            //Os set São as infos que você vai pegar da API
            setBairro(response.data.bairro)
            setRua(response.data.logradouro);

            // Caso não carregue retornara um erro
        } catch (error) {
            console.log('ERROGAY' + error)
        }
    }

    const formatCep = (text: string) => {
        // Remove todos os caracteres que não são números
        let cleaned = text.replace(/\D/g, '');

        // Aplica a formatação para CEP
        if (cleaned.length > 5) {
            // Formato completo: XXXXX-XXX
            cleaned = cleaned.replace(/(\d{5})(\d{3})/, '$1-$2');
        } else {
            // Caso ainda não tenha 8 dígitos, apenas retorna os números sem formatação
            cleaned = cleaned.slice(0, 5);
        }

        // Retorna o CEP formatado ou parcialmente formatado
        return cleaned;
    };


    const handleCepChange = (text) => {
        setCep(formatCep(text));
    };







    return (
        <View style={styles.container}>

            <View style={styles.containerCadastro}>
                <View style={styles.title}>
                    <Text style={styles.titulo2}>Dados <Text style={styles.pessoais}>Profissionais</Text></Text>
                </View>
                <View style={styles.legenda}>
                    <Text style={styles.legendaTitle}>Há qunato tempo você atua</Text>
                    <Text style={styles.legendaTitle}>nessa área?</Text>
                    <View style={styles.inputTempoTrabalhado}>
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY',
                            }}

                            value={tempoTrabalhado}
                            customTextInput={FloatingLabelInput}
                            customTextInputProps={{
                                containerStyles: {
                                    marginTop: 20,
                                    marginBottom: 10,
                                    backgroundColor: '#7098E2',
                                    borderRadius: 40,
                                    height: '80%',

                                },
                                customLabelStyles: {
                                    topFocused: -20,
                                    colorFocused: '#fff',
                                    fontSizeFocused: 16,
                                },
                                labelStyles: {
                                    paddingHorizontal: 5,
                                    color: '#FF8F49',
                                },
                                inputStyles: {
                                    fontSize: 18,
                                    color: '#fff',
                                },
                            }}

                        />
                    </View>
                </View>
                <View style={styles.input}>

                    {/* Nome */}
                    <FloatingLabelInput
                        label="Cep"
                        value={Cep}
                        
                        keyboardType="numeric"
                        maxLength={9}
                        onChangeText={handleCepChange}
                        containerStyles={{
                            borderBottomWidth: 5,
                            borderColor: '#fff',
                            marginTop: 20,
                            marginBottom: 10,
                        }}
                        customLabelStyles={{
                            topFocused: -20,
                            colorFocused: '#fff',  // Cor do label quando o input está em foco
                            fontSizeFocused: 16,
                            colorBlurred: '#E5E1DA',  // Cor do label quando o input não está em foco
                        }}
                        labelStyles={{
                            paddingHorizontal: 5,
                            fontWeight: 'bold',
                        }}
                        inputStyles={{
                            color: '#fff',
                            fontSize: 16,
                        }}
                    />

                    <FloatingLabelInput
                        label="Bairro"
                        value={Bairro}
                        onChangeText={value => setBairro(value)}
                        containerStyles={{
                            borderBottomWidth: 5,
                            borderColor: '#fff',
                            marginTop: 20,
                            marginBottom: 10,
                        }}
                        customLabelStyles={{
                            topFocused: -20,
                            colorFocused: '#fff',
                            colorBlurred: '#E5E1DA',  // Cor do label quando o input não está em foco

                            fontSizeFocused: 16,
                        }}
                        labelStyles={{
                            paddingHorizontal: 5,
                            color: '#FF8F49',
                            fontWeight: 'bold'
                        }}
                        inputStyles={{
                            color: '#fff',
                            fontSize: 16,
                        }}
                    />

                    <View style={styles.inputRow}>
                        {/* Rua */}
                        <FloatingLabelInput
                            label="Rua"
                            value={Rua}
                            onChangeText={value => setRua(value)}
                            containerStyles={{
                                borderBottomWidth: 5,
                                borderColor: '#fff',
                                marginTop: 20,
                                marginBottom: 10,


                            }}
                            customLabelStyles={{
                                topFocused: -20,
                                colorFocused: '#fff',
                                fontSizeFocused: 16,
                                colorBlurred: '#E5E1DA',  // Cor do label quando o input não está em foco

                            }}
                            labelStyles={{
                                paddingHorizontal: 5,
                                color: '#FF8F49',
                                fontWeight: 'bold'

                            }}
                            inputStyles={{
                                color: '#fff',
                                fontSize: 16,
                            }}
                        />
                        <View style={styles.inputNum}>

                            {/* Numero */}
                            <FloatingLabelInput
                                label="Numero"
                                value={Numero}

                                onChangeText={value => setNumero(value)}
                                keyboardType="numeric"
                                containerStyles={{
                                    borderBottomWidth: 5,
                                    borderColor: '#fff',
                                    marginTop: 20,
                                    marginBottom: 10,
                                    marginLeft: 10,  // Espaçamento entre os inputs
                                    width: 80,       // Largura fixa para o campo de número
                                }}
                                customLabelStyles={{
                                    topFocused: -20,
                                    colorFocused: '#fff',
                                    fontSizeFocused: 16,
                                    colorBlurred: '#E5E1DA',  // Cor do label quando o input não está em foco

                                }}
                                labelStyles={{
                                    paddingHorizontal: 5,
                                    color: '#FF8F49',
                                    fontWeight: 'bold'

                                }}
                                inputStyles={{
                                    color: '#fff',
                                    fontSize: 16,
                                }}


                            />



                        </View>

                    </View>

                </View>
                <View style={styles.containerButton}>
                    <Button
                        style={[styles.buttonEnviar, {
                            backgroundColor: '#FF914D',
                            width: '40%'
                        }]} // Defina a cor de fundo desejada aqui
                        color='#FF914D'
                        variant="primary"
                        title="Buscar Cep"
                        onPress={buscarCep}
                    />
                </View>
                <View style={styles.mapContainer}>
                    <View>
                        <Map />

                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button
                        style={[styles.buttonEnviar1, {
                            backgroundColor: '#FF914D',
                            width: '70%'
                        }]} // Defina a cor de fundo desejada aqui
                        color='#FF914D'
                        variant="primary"
                        title="Cadastrar-se"
                        onPress={() => navigation.navigate('home')}

                    />
                </View>



            </View>


        </View>
    );
};

export default Cadastro;
