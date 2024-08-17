import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button";
import Map from '../../componentes/Map/map';  // Importe o componente Map

import styles from '../css/cadastroCss';
const Cadastro: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [Nome, setNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [Nascimento, setNascimento] = useState('');
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
                <Text style={styles.titulo}>CADASTRO</Text>
            </View>
            <View style={styles.fundo}>
                <View style={styles.containerCadastro}>

                    <View style={styles.title}>
                        <Text style={styles.titulo2}>Dados <Text style={styles.pessoais}>Pessoais</Text></Text>
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.nome}>Nome</Text>
                        {/* Nome */}
                        <TextInput
                            value={Nome}
                            onChangeText={value => setNome(value)}
                            style={{
                                borderBottomWidth: 3,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: -10,
                                marginBottom: 27,
                                marginHorizontal: -20,
                            }}
                            placeholder="Digite seu nome..."
                            placeholderTextColor="#fff"
                        />

                        <Text style={styles.sobrenome}>Sobrenome</Text>
                        {/* Nome */}
                        <TextInput
                            value={Sobrenome}
                            onChangeText={value => setNome(value)}
                            style={{
                                borderBottomWidth: 3,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: -10,
                                marginBottom: 25,
                                marginHorizontal: -20,
                            }}
                            placeholder="Digite seu Sobrenome..."
                            placeholderTextColor="#fff"
                        />

                        <Text style={styles.nascimeto}>Data de nascimento</Text>
                        {/* Data de Nascimento */}
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY',
                            }}
                            value={Nascimento}
                            onChangeText={text => setNascimento(text)}
                            style={{
                                borderBottomWidth: 3,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: 10,
                                marginBottom: 25,
                                marginHorizontal: -20,
                            }}
                            placeholder="Digite sua data de nascimento..."
                            placeholderTextColor="#fff"

                        />
                        <Text style={styles.cpf}>CPF</Text>
                        {/* CPF */}
                        <TextInput
                            value={cpf}
                            onChangeText={handleCPFChange}
                            keyboardType="numeric"
                            maxLength={14}
                            style={{
                                borderBottomWidth: 3,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: 10,
                                marginBottom: 19,
                                marginHorizontal: -20,
                            }}
                          placeholder="Digite o seu CPF..."
                            placeholderTextColor="#fff"
                        />

                        <Text style={styles.telefone}>Telefone</Text>
                        {/* Telefone */}
                        <TextInput
                            value={telefone}
                            onChangeText={handlePhoneChange}
                            keyboardType="numeric"
                            maxLength={15}
                            style={{
                                borderBottomWidth: 3,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 16,
                                marginTop: 10,
                                marginHorizontal: -20,
                            }}
                            placeholder="Digite o seu telefone..."
                            placeholderTextColor="#fff"
                        />

                        <View>
                            <Button
                                style={[styles.buttonEnviar, {
                                    backgroundColor: '#FF914D',  
                                    
                            

                                }]} // Defina a cor de fundo desejada aqui
                                color='#FF914D'
                                variant="primary"
                                title="Próximo"
                                onPress={() => navigation.navigate('cadastro1')}
                            />
                        </View>

                    </View>

                </View>
            </View>
        </View>


    );
};

export default Cadastro;
