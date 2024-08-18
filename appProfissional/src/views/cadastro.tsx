import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button";

import styles from '../css/cadastroCss';

const Cadastro: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [show, setShow] = useState('');

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setShow(!show);
    //     }, 5000);
    //     return () => clearTimeout(timeout);
    // }, [show]);

    // Ele leva para outra pagina e guarda as infos que foi inseridas aqui
    const dadosCad = () => {
        navigation.navigate('cadastro1', {
            nome:nome,
            sobrenome:sobrenome,
            nascimento:nascimento,
            cpf:cpf,
            telefone:telefone,
            email:email,
            senha:senha,
        });
    };

 



    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titulo}>CADASTRO</Text>
            </View>
            <View style={styles.fundo}>
                <View style={styles.containerCadastro}>

                    <View style={styles.title}>
                        <Text style={styles.titulo2}>Dados <Text style={styles.pessoais}>Pessoais</Text></Text>
                    </View>

                    <View style={styles.input}>
                        <FloatingLabelInput
                            label=""
                            value={email}
                            hintTextColor={'#aaa'}
                            hint="exemple@exemple.com"
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
                            onChangeText={value => setEmail(value)}
                        />

                        <FloatingLabelInput
                            label=""
                            isPassword
                            hint="Digite sua senha"
                            hintTextColor={'#aaa'}
                            value={senha}
                            onChangeText={value => setSenha(value)}
                            customShowPasswordComponent={<Text>Show</Text>}
                            customHidePasswordComponent={<Text>Hide</Text>}
                            containerStyles={{
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                marginTop: -10,
                                marginBottom: 37,
                                marginHorizontal: -20,
                            }}
                            inputStyles={{
                                color: '#fff',
                                paddingHorizontal: 10,
                                fontWeight: 'bold'
                            }}
                        />

                        <TextInput
                            value={nome}
                            onChangeText={value => setNome(value)}
                            style={{
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: -10,
                                marginBottom: 37,
                                marginHorizontal: -20,
                            }}
                            placeholder="Digite seu nome..."
                            placeholderTextColor="#fff"
                        />

                        <TextInput
                            value={sobrenome}
                            onChangeText={value => setSobrenome(value)}
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
                                format: 'DD/MM/YYYY',
                            }}
                            value={nascimento}
                            onChangeText={text => setNascimento(text)}
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
                            value={cpf}
                            
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
                            onChangeText={text => setCpf(text)}
                        />

                        <TextInput
                            value={telefone}
                          
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
                            onChangeText={value => setTelefone(value)}

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
    );
};

export default Cadastro;
