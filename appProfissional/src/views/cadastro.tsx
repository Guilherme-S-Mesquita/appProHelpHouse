import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button";

import styles from '../css/cadastroCss';

const Cadastro: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const { emailContratado, password } = route.params;

    const [nomeContratado, setNomeContratado] = useState('');
    const [sobrenomeContratado, setSobrenomeContratado] = useState('');
    const [nascContratado, setNascContratado] = useState('');
    const [cpfContratado, setCpfContratado] = useState('');

    const [profissaoContratado, setProfissaoContratado] = useState('');
    const [telefoneContratado, setTelefoneContratado] = useState('');
    const [descContratado, setDescContratado] = useState('');



    // Ele leva para outra pagina e guarda as infos que foi inseridas aqui
    const dadosCad = () => {
        navigation.navigate('cadastro2', {
            nomeContratado: nomeContratado,
            sobrenomeContratado: sobrenomeContratado,
            nascContratado: nascContratado,
            cpfContratado: cpfContratado,
            telefoneContratado: telefoneContratado,
            profissaoContratado: profissaoContratado,
            emailContratado: emailContratado,
            password: password,
            descContratado: descContratado,


        });
    };





    return (
        <View style={styles.container}>

            <View style={styles.title}>
                <Text style={styles.titulo}>CADASTRO</Text>
            </View>
            <View style={styles.fundo}>
                <View style={styles.containerCadastro}>

                    <View style={styles.roda}>






                    <View style={styles.input}>


                        <FloatingLabelInput
                            label=""
                            value={profissaoContratado}
                            hintTextColor={'#aaa'}
                            hint="Jardineiro"
                            containerStyles={{
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                marginTop: -10,
                                marginBottom: 27,
                                marginHorizontal: -20,
                            }}
                            inputStyles={{
                                color: '#fff',
                                paddingHorizontal: 10,
                                fontWeight: 'bold'
                            }}
                            onChangeText={value => setProfissaoContratado(value)}
                        />

                        <FloatingLabelInput
                            label=""
                            value={nomeContratado}
                            hintTextColor={'#aaa'}
                            hint="Creiton "
                            containerStyles={{
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                marginTop: -10,
                                marginBottom: 27,
                                marginHorizontal: -20,
                            }}
                            inputStyles={{
                                color: '#fff',
                                paddingHorizontal: 10,
                                fontWeight: 'bold'
                            }}
                            onChangeText={value => setNomeContratado(value)}
                        />

                        <TextInput
                            value={sobrenomeContratado}
                            onChangeText={value => setSobrenomeContratado(value)}
                            style={{
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: -10,
                                marginBottom: 37,
                                marginHorizontal: -20,
                            }}
                            placeholder="Digite seu sobrenome..."
                            placeholderTextColor="#fff"
                        />

                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'YYYY/MM/DD', // Defina o formato de entrada desejado
                            }}
                            value={nascContratado}
                            onChangeText={text => setNascContratado(text)}
                            style={{
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: 10,
                                marginBottom: 37,
                                marginHorizontal: -20,
                            }}
                            placeholder="Digite a data em que nasceu..."
                            placeholderTextColor="#fff"
                        />


                        <TextInput
                            value={cpfContratado}

                            keyboardType="numeric"
                            maxLength={14}
                            style={{
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: 10,
                                marginBottom: 37,
                                marginHorizontal: -20,
                            }}
                            placeholder="Digite o seu CPF..."
                            placeholderTextColor="#fff"
                            onChangeText={text => setCpfContratado(text)}
                        />

                        <TextInput
                            value={telefoneContratado}

                            keyboardType="numeric"
                            maxLength={15}
                            style={{
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: 10,
                                marginBottom: 37,
                                marginHorizontal: -20,
                            }}
                            placeholder="Digite o seu telefone..."
                            placeholderTextColor="#fff"
                            onChangeText={value => setTelefoneContratado(value)}

                        />

                        <TextInput
                            value={descContratado}

                            keyboardType="numeric"
                            maxLength={15}
                            style={{
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: 10,
                                marginBottom: 37,
                                marginHorizontal: -20,
                            }}
                            placeholder=""
                            placeholderTextColor="#fff"
                            onChangeText={value => setDescContratado(value)}

                        />

                        <View>
                            <Button
                                style={[styles.buttonEnviar, { backgroundColor: '#FF914D' }]}
                                color='#FF914D'
                                variant="primary"
                                title="Próximo"
                                onPress={dadosCad}

                            />

                        </View>
                    </View>
                </View>
            </View>
        </View>
        </View>


    );
    
};
export default Cadastro;

