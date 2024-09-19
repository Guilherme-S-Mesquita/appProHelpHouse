import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Api from '../../componentes/apiCep/api';
import AntDesign from '@expo/vector-icons/AntDesign';
import config from '../../config/config.json';
import styles from '../css/cad2Css';

const Cadastro2: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
    const { nomeContratado, sobrenomeContratado, nascContratado, cpfContratado, telefoneContratado, profissaoContratado, emailContratado, password, descContratado } = route.params;
    const [cepContratado, setCepContratado] = useState('');
    const [bairroContratado, setBairroContratado] = useState('');
    const [ruaContratado, setRuaContratado] = useState('');
    const [numCasaContratado, setNumCasaContratado] = useState('');
    const [cidadeContratado, setCidadeContratado] = useState('');

    const Verificar = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/proo', {
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

            if (response.ok) {
                console.log('Os dados foram inseridos com sucesso!');
            }

            const data = await response.json();

        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao enviar os dados.');
            console.error('Erro:', error);
        }
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
                <View style={styles.title}>
                    <Text style={styles.titulo2}>Dados <Text style={styles.pessoais}>Profissionais</Text></Text>
                </View>
                <View style={styles.input}>
                    <View style={styles.inputsCep}>
                        <Text style={styles.title3}>Buscar cep</Text>
                        <AntDesign style={styles.icon} name="search1" size={24} color="black" onPress={buscarCep} />
                    </View>
                    <FloatingLabelInput
                        label="CEP"
                        value={cepContratado}
                        keyboardType="numeric"
                        maxLength={9}
                        onChangeText={handleCepChange}
                        containerStyles={{ borderBottomWidth: 5, borderColor: '#fff', marginTop: 20, marginBottom: 10 }}
                    />
                    <FloatingLabelInput
                        label="Cidade"
                        value={cidadeContratado}
                        onChangeText={setCidadeContratado}
                        containerStyles={{ borderBottomWidth: 5, borderColor: '#fff', marginTop: 20, marginBottom: 10 }}
                    />
                    <FloatingLabelInput
                        label="Bairro"
                        value={bairroContratado}
                        onChangeText={setBairroContratado}
                        containerStyles={{ borderBottomWidth: 5, borderColor: '#fff', marginTop: 20, marginBottom: 10 }}
                    />
                    <FloatingLabelInput
                        label="Rua"
                        value={ruaContratado}
                        onChangeText={setRuaContratado}
                        containerStyles={{ borderBottomWidth: 5, borderColor: '#fff', marginTop: 20, marginBottom: 10 }}
                    />
                    <FloatingLabelInput
                        label="Número"
                        value={numCasaContratado}
                        onChangeText={setNumCasaContratado}
                        keyboardType="numeric"
                        containerStyles={{ borderBottomWidth: 5, borderColor: '#fff', marginTop: 20, marginBottom: 10 }}
                    />
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.buttonEnviar1} onPress={async () => {
                        await Verificar();
                        navigation.navigate('login');
                    }}>
                        <Text style={styles.buttonText2}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Cadastro2;
