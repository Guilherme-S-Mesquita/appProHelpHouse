import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button";
import styles from '../css/cadastroCss';
import moment from 'moment';


const Cadastro: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const { emailContratado, password } = route.params;
    const [nomeContratado, setNomeContratado] = useState('');
    const [sobrenomeContratado, setSobrenomeContratado] = useState('');
    const [nascContratado, setNascContratado] = useState('');
    const [cpfContratado, setCpfContratado] = useState('');
    const [telefoneContratado, setTelefoneContratado] = useState('');


    // Ele leva para outra pagina e guarda as infos que foi inseridas aqui
    const dadosCad = () => {
        navigation.navigate('cadastro2', {
            nomeContratado: nomeContratado,
            sobrenomeContratado: sobrenomeContratado,
            nascContratado: nascContratado,
            cpfContratado: cpfContratado,
            telefoneContratado: telefoneContratado,
            emailContratado: emailContratado,
            password: password,

        });
    };
    const handleDateChange = (text : any) => {
        setNascContratado(text);
        
        // Convertendo a data para o formato do backend (YYYY-MM-DD)
        const formattedDate = moment(text, 'DD/MM/YYYY').format('YYYY-MM-DD');
        
        // Aqui você pode usar 'formattedDate' para enviar para o backend
        console.log('Data formatada para o backend:', formattedDate);
    };

    return (
        <View style={styles.container}>

            <View style={styles.title}>
                <Text style={styles.titulo}>CADASTRE-SE</Text>
            </View>
            <View style={styles.fundo}>
                <View style={styles.containerCadastro}>
                    
                    <Text style={styles.tituloDados2}>Dados <Text style={styles.pessoais}>Pessoais</Text></Text>

                    <View style={styles.input}>

                        <View style={styles.nome}>
                            <Text style={styles.textTitle}>Nome</Text>
                        </View>
                        <TextInput
                            value={nomeContratado}
                            onChangeText={value => setNomeContratado(value)}
                            style={{
                                opacity: 0.7,
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 18,
                                marginBottom: 37,
                                marginHorizontal: -20,
                                bottom: 3,
                                fontWeight: '700'
                            }}
                            placeholder="Digite seu nome..."
                            placeholderTextColor="#fff"
                            returnKeyType='done'
                        />

                        <View style={styles.sobrenome}>
                            <Text style={styles.textTitle}>Sobrenome</Text>
                        </View>
                        <TextInput

                            value={sobrenomeContratado}
                            onChangeText={value => setSobrenomeContratado(value)}
                            style={{
                                opacity: 0.7,
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 18,
                                marginTop: -10,
                                marginBottom: 37,
                                marginHorizontal: -20,
                                top: 10,
                                fontWeight: '700'
                            }}
                            placeholder="Digite seu sobrenome..."
                            placeholderTextColor="#fff"
                            returnKeyType='done'
                        />

                        <View style={styles.nascimento}>
                            <Text style={styles.textTitle}>Data de Nascimento</Text>
                        </View>
                        <TextInputMask
                              type={'datetime'}
                              options={{
                                  format: 'DD/MM/YYYY'  // Alterado para o formato brasileiro
                              }}
                            value={nascContratado}
                            onChangeText={handleDateChange}
                            style={{
                                opacity: 0.7,
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 18,
                                marginBottom: 37,
                                marginHorizontal: -20,
                                top: 18,
                                fontWeight: '700'
                            }}
                            placeholder="Digite a data em que nasceu..."
                            placeholderTextColor="#fff"
                            returnKeyType='done'
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
                                opacity: 0.7,
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                marginTop: 5,
                                marginBottom: 37,
                                marginHorizontal: -20,
                                top: 17,
                                fontSize: 18,
                                fontWeight: '700'
                            }}
                            placeholder="Digite o seu CPF..."
                            placeholderTextColor="#fff"
                            returnKeyType='done'
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
                                opacity: 0.7,
                                borderBottomWidth: 2,
                                borderColor: '#fff',
                                color: '#fff',
                                fontSize: 18,
                                marginBottom: 37,
                                marginHorizontal: -20,
                                marginTop: 5,
                                top: 25,
                                fontWeight: '700'
                            }}
                            placeholder="(XX) XXXXX-XXXX"
                            placeholderTextColor="#fff"
                            returnKeyType='done'
                            onChangeText={value => setTelefoneContratado(value)}

                        />

                    </View>

                    <Button
                        style={[styles.buttonEnviar, { backgroundColor: '#FF914D' }]}
                        variant="primary"
                        title="Próximo"
                        onPress={dadosCad}

                    />




                </View>
            </View>
        </View>


    );

};
export default Cadastro;