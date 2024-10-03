import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Api from '../../componentes/apiCep/api';
import AntDesign from '@expo/vector-icons/AntDesign';
import config from '../../config/config.json';
import styles from '../css/cad2Css';
import { Button } from "../../componentes/Button/Button";



const Cadastro2: React.FC<{ route: any, navigation: any, }> = ({ route, navigation }) => {
    const { nomeContratado, sobrenomeContratado, nascContratado, cpfContratado, telefoneContratado, emailContratado, password} = route.params;
    const [cepContratado, setCepContratado] = useState('');
    const [bairroContratado, setBairroContratado] = useState('');
    const [ruaContratado, setRuaContratado] = useState('');
    const [numCasaContratado, setNumCasaContratado] = useState('');
    const [cidadeContratado, setCidadeContratado] = useState('');

    const dadosCad = () => {
        navigation.navigate('areaAtuacao', {
            nomeContratado: nomeContratado,
            sobrenomeContratado: sobrenomeContratado,
            nascContratado: nascContratado,
            cpfContratado: cpfContratado,
            telefoneContratado: telefoneContratado,
            emailContratado: emailContratado,
            password: password,
            cepContratado: cepContratado,
            bairroContratado: bairroContratado,
            ruaContratado: ruaContratado,
            numCasaContratado: numCasaContratado,
            cidadeContratado: cidadeContratado,

        });
    };


    async function buscarCep() {
        if (cepContratado === "") {
            Alert.alert('Cep inválido');
            return;
        }
        try {
            const response = await Api.get(`/${cepContratado}/json/`);
            setBairroContratado(response.data.bairro);
            setRuaContratado(response.data.logradouro);
            setCidadeContratado(response.data.localidade);
        } catch (error) {
            console.log('Erro ao buscar CEP:', error);
        }
    }

    const formatCep = (text: string) => {
        let cleaned = text.replace(/\D/g, '');
        if (cleaned.length > 5) {
            cleaned = cleaned.replace(/(\d{5})(\d{3})/, '$1-$2');
        } else {
            cleaned = cleaned.slice(0, 5);
        }
        return cleaned;
    };

    const handleCepChange = (text: string) => {
        setCepContratado(formatCep(text));
    };


    return (
        <View style={styles.container}>
            <View style={styles.containerCadastro}>

                <View style={styles.input}>


                    <View style={styles.inputsCep}>
                        <Text style={styles.title3}>Buscar cep </Text>
                        <Text style={styles.title4}> <AntDesign style={styles.icon} name="search1" size={24} color="white" onPress={buscarCep} /></Text>
                    </View>

                    <FloatingLabelInput
                        label="CEP"
                        value={cepContratado}
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
                        label="Cidade"
                        value={cidadeContratado}
                        onChangeText={value => setCidadeContratado(value)}
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


                    <FloatingLabelInput
                        label="Bairro"
                        value={bairroContratado}
                        onChangeText={value => setBairroContratado(value)}
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
                            value={ruaContratado}
                            onChangeText={value => setRuaContratado(value)}
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
                            <FloatingLabelInput
                                label="Numero"
                                value={numCasaContratado}
                                onChangeText={value => setNumCasaContratado(value)}
                                keyboardType="numeric"
                                containerStyles={{
                                    borderBottomWidth: 5,
                                    borderColor: '#fff',
                                    marginTop: 20,
                                    marginBottom: 10,
                                    marginLeft: 10,
                                    width: '80%',
                                }}
                                customLabelStyles={{
                                    topFocused: -20,
                                    colorFocused: '#fff',
                                    fontSizeFocused: 16,
                                    colorBlurred: '#E5E1DA',
                                    
                                }}
                                labelStyles={{
                                    paddingHorizontal: 5,
                                    color: '#FF8F49',
                                    fontWeight: 'bold',
                                    
                                }}
                                inputStyles={{
                                    color: '#fff',
                                    fontSize: 16,
                                }}
                                 returnKeyType='done'
                            />
                        </View>

                    </View>

                </View>

                {/* <View style={styles.mapContainer}>
                    <View>
                     

                    </View>
                </View> */}

                <Button
                    style={[styles.buttonEnviar, { backgroundColor: '#FF914D' }]}
                    variant="primary"
                    title="Próximo"
                    onPress={dadosCad}

                />
            </View>
        </View>
    );
};

export default Cadastro2;
