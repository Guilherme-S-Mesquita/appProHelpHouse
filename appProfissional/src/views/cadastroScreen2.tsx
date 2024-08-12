import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto


import styles from '../css/cad2Css';

const Cadastro: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [Nome, setNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [tempoTrabalhado, setTempoTrabalhado] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    const formatCPF = (text) => {
        let cleaned = text.replace(/\D/g, '');

        if (cleaned.length > 9) {
            cleaned = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else if (cleaned.length > 6) {
            cleaned = cleaned.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
        } else if (cleaned.length > 3) {
            cleaned = cleaned.replace(/(\d{3})(\d{0,3})/, '$1.$2');
        }

        return cleaned;
    };

    const handleCPFChange = (text) => {
        setCpf(formatCPF(text));
    };

    const formatPhone = (text) => {
        let cleaned = text.replace(/\D/g, '');

        if (cleaned.length > 10) {
            cleaned = cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (cleaned.length > 5) {
            cleaned = cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (cleaned.length > 2) {
            cleaned = cleaned.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else if (cleaned.length > 0) {
            cleaned = cleaned.replace(/(\d{0,2})/, '($1');
        }

        return cleaned;
    };

    const handlePhoneChange = (text) => {
        setTelefone(formatPhone(text));
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titulo}>CADASTRA-SE</Text>
            </View>
                <View style={styles.containerCadastro}>
                    <View style={styles.title}>
                        <Text style={styles.titulo2}>Dados <Text style={styles.pessoais}>Profissionais</Text></Text>
                    </View>
                    <View style={styles.legenda}>
                    <Text style={styles.legendaTitle}>Há qunato tempo você atua</Text>
                    <Text style={styles.legendaTitle}>nessa área?</Text>
                    <View  style={styles.inputTempoTrabalhado}>
                    <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY',
                            }}
                           
                            value={tempoTrabalhado}
                            onChangeText={text => setTempoTrabalhado(text)}
                            customTextInput={FloatingLabelInput}
                            customTextInputProps={{
                                containerStyles: {
                                    marginTop: 20,
                                    marginBottom: 10,
                                    backgroundColor:'#7098E2',
                                    borderRadius:40,
                                    height:'100%',
                                  
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
                            label="Nome"
                            value={Nome}
                            onChangeText={value => setNome(value)}
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
                            }}
                            labelStyles={{
                                paddingHorizontal: 5,
                                color: '#FF8F49',
                            }}
                            inputStyles={{
                                color: '#fff',
                                fontSize: 16,
                            }}
                        />

                        {/* Sobrenome */}
                        <FloatingLabelInput
                            label="Sobrenome"
                            value={Sobrenome}
                            onChangeText={value => setSobrenome(value)}
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
                            }}
                            labelStyles={{
                                paddingHorizontal: 5,
                                color: '#FF8F49',
                            }}
                            inputStyles={{
                                color: '#fff',
                                fontSize: 16,
                            }}
                        />

                      

                        {/* CPF */}
                        <FloatingLabelInput
                            label="CPF"
                            value={cpf}
                            onChangeText={handleCPFChange}
                            keyboardType="numeric"
                            maxLength={14}  // Limite para formato XXX.XXX.XXX-XX
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
                            }}
                            labelStyles={{
                                paddingHorizontal: 5,
                                color: '#FF8F49',

                            }}
                            inputStyles={{
                                color: '#fff',
                                fontSize: 16,
                            }}
                        />

                        {/* Telefone */}
                        <FloatingLabelInput
                            label="Telefone"
                            value={telefone}
                            onChangeText={handlePhoneChange}
                            keyboardType="numeric"
                            maxLength={15}  // Limite para formato (XX) XXXXX-XXXX
                            containerStyles={{
                                borderBottomWidth: 5,
                                borderColor: '#fff',
                                marginTop: 20,
                            }}
                            customLabelStyles={{
                                topFocused: -20,
                                colorFocused: '#fff',
                                fontSizeFocused: 16,
                            }}
                            labelStyles={{
                                paddingHorizontal: 5,
                                color: '#FF8F49',
                            }}
                            inputStyles={{
                                color: '#fff',
                                fontSize: 16,
                            }}
                        />
                        <View>
                            <Button
                                style={[styles.buttonEnviar, {
                                    backgroundColor: '#FF914D',

                                }]} // Defina a cor de fundo desejada aqui
                                color='#FF914D'
                                variant="primary"
                                title="Enviar"
                                onPress={() => navigation.navigate('map')}
                            />
                        </View>

                    </View>


                </View>
            

        </View>
    );
};

export default Cadastro;
