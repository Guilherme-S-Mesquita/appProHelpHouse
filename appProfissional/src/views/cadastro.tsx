import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import styles from '../css/cadastroCss';

const Cadastro: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [Nome, setNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [Nascimento, setNascimento] = useState('');
    const [phone, setPhone] = useState('');
    const [Cpf, setCpf] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titulo}>CADASTRA-SE</Text>
            </View>
            <View style={styles.fundo}>
                <View style={styles.containerCadastro}>
                    <View style={styles.title}>
                        <Text style={styles.titulo2}>Dados <Text style={styles.pessoais}>Pessoais</Text></Text>
                    </View>
                    <View style={styles.input}>

                        {/* Nome */}
                        <FloatingLabelInput
                            label="Nome"
                            value={Nome}
                            onChangeText={value => setNome(value)}
                            containerStyles={{
                                borderTopWidth: 0,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderBottomWidth: 5,
                                marginTop: 50,
                                borderColor: '#fff',
                            }}
                            customLabelStyles={{
                                colorFocused: '#fff',
                                fontSizeFocused: 16,
                            }}
                            labelStyles={{
                                paddingHorizontal: 5,
                                color: '#FF8F49',
                            }}
                        />

                        {/* Sobrenome */}
                        <FloatingLabelInput
                            label="Sobrenome"
                            value={Sobrenome}
                            onChangeText={value => setSobrenome(value)}
                            containerStyles={{
                                borderTopWidth: 0,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderBottomWidth: 5,
                                marginTop: 50,
                                borderColor: '#fff',
                            }}
                            customLabelStyles={{
                                colorFocused: '#fff',
                                fontSizeFocused: 16,
                            }}
                            labelStyles={{
                                paddingHorizontal: 5,
                                color: '#FF8F49',
                            }}
                            
                        />

                        {/* Data de Nascimento */}
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY',
                            }}
                            value={Nascimento}
                            onChangeText={text => setNascimento(text)}
                            customTextInput={FloatingLabelInput}
                            customTextInputProps={{
                                label: "Nascimento",
                                containerStyles: {
                                    borderTopWidth: 0,
                                    borderLeftWidth: 0,
                                    borderRightWidth: 0,
                                    borderBottomWidth: 5,
                                    marginTop: 50,
                                    borderColor: '#fff',
                                },
                                customLabelStyles: {
                                    colorFocused: '#fff',
                                    fontSizeFocused: 16,
                                },
                                labelStyles: {
                                    paddingHorizontal: 5,
                                    color: '#FF8F49',
                                },
                            }}
                        />

                        {/* Telefone */}
                        <TextInputMask
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) ',
                            }}
                            value={phone}
                            onChangeText={text => setPhone(text)}
                            customTextInput={FloatingLabelInput}
                            customTextInputProps={{
                                label: "Phone",
                                containerStyles: {
                                    borderTopWidth: 0,
                                    borderLeftWidth: 0,
                                    borderRightWidth: 0,
                                    borderBottomWidth: 5,
                                    marginTop: 50,
                                    borderColor: '#fff',
                                },
                                customLabelStyles: {
                                    colorFocused: '#fff',
                                    fontSizeFocused: 16,
                                },
                                labelStyles: {
                                    paddingHorizontal: 5,
                                    color: '#FF8F49',
                                },
                            }}
                        />

                        {/* CPF */}
                        <TextInputMask
                            type={'cpf'}
                            value={Cpf}
                            onChangeText={text => setCpf(text)}
                            customTextInput={FloatingLabelInput}
                            customTextInputProps={{
                                label: "CPF",
                                containerStyles: {
                                    borderTopWidth: 0,
                                    borderLeftWidth: 0,
                                    borderRightWidth: 0,
                                    borderBottomWidth: 5,
                                    marginTop: 50,
                                    borderColor: '#fff',
                                },
                                customLabelStyles: {
                                    colorFocused: '#fff',
                                    fontSizeFocused: 16,
                                },
                                labelStyles: {
                                    paddingHorizontal: 5,
                                    color: '#FF8F49',
                                },
                            }}
                        />

                    </View>
                </View>
            </View>
        </View>
    );
};

export default Cadastro;
