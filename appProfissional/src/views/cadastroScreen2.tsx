import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import Map from '../../componentes/Map/map';  // Importe o componente Map
import Api from '../../componentes/apiCep/api'
import AntDesign from '@expo/vector-icons/AntDesign';

import config from '../../config/config.json'
import styles from '../css/cad2Css';



// CHAMA FIO ESSA AQUI DEU CERTO 
//  RO
<<<<<<< HEAD
const Cadastro1: React.FC<{route, navigation: any }> = ({ route ,navigation }) => {
    const { nome, sobrenome, nascimento, cpf, telefone, email, senha } = route.params;
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [tempoTrabalhado, setTempoTrabalhado] = useState('');

//  async function cadastroContratado() {
  
    
//         let reqs = await fetch(config.urlRootNode + 'create', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 nomeContratado: nome,
//                 sobrenome: sobrenome,
//                 email: email,
//                 nascimento: nascimento,
//                 cpf: cpf,
//                 telefone: telefone,
//                 senha: senha,
//                 cep: cep,
//                 bairro: bairro,
//                 rua: rua,
//                 numero: numero,
//             })
//         });

    
        
       
      
        
//     } 
=======
>>>>>>> 8793f05fa0e7ad68c9114b5bb0980d1011156953


const Cadastro2: React.FC<{ route: any, navigation: any, }> = ({ route, navigation }) => {
    const { nomeContratado, sobrenomeContratado, nascContratado, cpfContratado, telefoneContratado, profissaoContratado, emailContratado, password, descContratado } = route.params;
    const [cepContratado, setCepContratado] = useState('');
    const [bairroContratado, setBairroContratado] = useState('');
    const [ruaContratado, setRuaContratado] = useState('');
    const [numCasaContratado, setNumCasaContratado] = useState('');

    const [cidadeContratado, setCidadeContratado] = useState('');
    // const [tempoTrabalhadoContratado, setTempoTrabalhadoContratado] = useState('');



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


            if(response.ok){
                console.log('Os dados foram inseridos com sucesso!')
            }
            // Processa a resposta JSON
            const data = await response.json();

            // Mostra uma mensagem de sucesso

        } catch (error) {
            // Mostra uma mensagem de erro e imprime o erro no console
            Alert.alert('Erro', 'Ocorreu um erro ao enviar os dados.');
            console.error('Erro:', error);
            console.log({
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
            });
        }
    };







    async function buscarCep() {
        // Se Cep for vazio vai aparecer um alerta
        if (cepContratado == "") {
            Alert.alert('Cep inválido')
            setCepContratado("")
        }
        try {
            // await serve para esperar a resposta que vai ser passada
            const response = await Api.get(`/${cepContratado}/json/`)
            //Esse get, serve para puxar a info la do servidor da API 


            //Os set São as infos que você vai pegar da API
            setBairroContratado(response.data.bairro)
            setRuaContratado(response.data.logradouro);
            setCidadeContratado(response.data.localidade);
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


    const handleCepChange = (text: string) => {
        setCepContratado(formatCep(text));
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
                       
                    </View>
                </View>
                <View style={styles.input}>

                    <View style={styles.inputsCep}>
                        <Text style={styles.title3}>Buscar cep </Text>
                        <Text style={styles.title4}> <AntDesign style={styles.icon} name="search1" size={24} color="black" onPress={buscarCep} /></Text>
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

                            {/* Numero */}
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
         
                {/* <View style={styles.mapContainer}>
                    <View>
                     

                    </View>
                </View> */}

                <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.buttonEnviar1}  
                        onPress={async () => {
                            await Verificar();// Aguarda a conclusão da verificação
                            navigation.navigate('login'); // Navega para a tela 'login'
                            }}>
                <Text style={styles.buttonText2}>Próximo</Text>
                </TouchableOpacity>
                </View>



            </View>


        </View>
    );
};

export default Cadastro2;
