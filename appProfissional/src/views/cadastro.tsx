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

            {/* <View style={styles.title}>
                <Text style={styles.titulo}>CADASTRE-SE</Text>
            </View> */}
            <View style={styles.fundo}>
                <View style={styles.containerCadastro}>

                    <View style={styles.roda}>

                    <View style={styles.tituloDados}>
                        <Text style={styles.tituloDados2}>Dados <Text style={styles.pessoais}>Pessoais</Text></Text>
                    </View>




                    <View style={styles.input}>


                        {/* <FloatingLabelInput
                            label=""
                            value={profissaoContratado}
                            hintTextColor={'white'}
                            hint="Digite aqui sua Profissão..."
                            containerStyles={{
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                marginTop: -10,
                                marginBottom: 27,
                                marginHorizontal: -20,
                                bottom:-50
                            }}
                            inputStyles={{
                                color: '#fff',
                                paddingHorizontal: 10,
                                fontWeight: 'bold',

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
                                bottom:-50
                            }}
                            inputStyles={{
                                color: '#fff',
                                paddingHorizontal: 10,
                                fontWeight: 'bold'
                            }}
                            onChangeText={value => setNomeContratado(value)}
                        /> */}

                  <View style={styles.profissao}>
                        <Text style={styles.textTitle}>Profissão</Text>
                    </View>
                        <TextInput
                            value={profissaoContratado}
                            onChangeText={value => setProfissaoContratado(value)}
                            style={{
                                opacity:0.7,
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: -10,
                                marginBottom: 37,
                                marginHorizontal: -20,
                                bottom:-50
                            }}
                            placeholder="Digite sua Profissão..."
                            placeholderTextColor="#fff"
                        />

                    <View style={styles.nome}>
                        <Text style={styles.textTitle}>Nome</Text>
                    </View>
                        <TextInput
                            value={nomeContratado}
                            onChangeText={value => setNomeContratado(value)}
                            style={{
                                opacity:0.7,
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: -10,
                                marginBottom: 37,
                                marginHorizontal: -20,
                                bottom:-53
                            }}
                            placeholder="Digite seu nome..."
                            placeholderTextColor="#fff"
                        />

                    <View style={styles.sobrenome}>
                        <Text style={styles.textTitle}>Sobrenome</Text>
                    </View>
                        <TextInput

                            value={sobrenomeContratado}
                            onChangeText={value => setSobrenomeContratado(value)}
                            style={{
                                opacity:0.7,
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: -10,
                                marginBottom: 37,
                                marginHorizontal: -20,
                                bottom:-58
                            }}
                            placeholder="Digite seu sobrenome..."
                            placeholderTextColor="#fff"
                        />
                    <View style={styles.nascimento}>
                        <Text style={styles.textTitle}>Data de Nascimento</Text>
                    </View>
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'YYYY/MM/DD', // Defina o formato de entrada desejado
                            }}
                            value={nascContratado}
                            onChangeText={text => setNascContratado(text)}
                            style={{
                                opacity:0.7,
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: 5,
                                marginBottom: 37,
                                marginHorizontal: -20,
                                bottom:-54
                            }}
                            placeholder="Digite a data em que nasceu..."
                            placeholderTextColor="#fff"
                        />

                    <View style={styles.cpf}>
                        <Text style={styles.textTitle}>CPF</Text>
                    </View>
                        <TextInputMask
                          type={'cpf'}
                            value={cpfContratado}
                            keyboardType="numeric"
                            maxLength={14}
                            style={{
                                opacity:0.7,
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: 5,
                                marginBottom: 37,
                                marginHorizontal: -20,
                                bottom:-51
                            }}
                            placeholder="Digite o seu CPF..."
                            placeholderTextColor="#fff"
                            onChangeText={text => setCpfContratado(text)}
                        />
                    <View style={styles.telefone}>
                        <Text style={styles.textTitle}>Telefone</Text>
                    </View>
                        <TextInputMask
                         type={'cel-phone'}
                         options={{
                           maskType: 'BRL',
                           withDDD: true,
                           dddMask: '(99) '
                         }}

                            value={telefoneContratado}

                            keyboardType="numeric"
                            maxLength={15}
                            style={{
                                opacity:0.7,
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: 5,
                                marginBottom: 34,
                                marginHorizontal: -20,
                                bottom:-50
                            }}
                            placeholder="(XX) XXXXX-XXXX"
                            placeholderTextColor="#fff"
                            onChangeText={value => setTelefoneContratado(value)}

                        />



                        <View style={styles.buttons}>
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