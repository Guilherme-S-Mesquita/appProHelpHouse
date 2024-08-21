import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import Map from '../../componentes/Map/map';  // Importe o componente Map
import Api from '../../componentes/apiCep/api'

import config from '../../config/config.json'
import styles from '../css/cad2Css';



// CHAMA FIO ESSA AQUI DEU CERTO 
//  RO


const Cadastro1: React.FC<{route: any, navigation: any,  }> = ({ route ,navigation }) => {
    const { nome, sobrenome, nascimento, cpf, telefone, email, senha } = route.params;
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [tempoTrabalhado, setTempoTrabalhado] = useState('');
 
 async function cadastroContratado() {
  

    // Aqui quando ele aperta o button chama essa função asincrona que mesmo se de errado o app continua funcionando
    let enderecoResponse = await fetch('http://127.0.0.1:8000/api/enderecos', {
    //    Aqui ele chama o metodo POST para os campos que foram inseridos
        method: 'POST',
    // Transforma os campos em Json 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    //Pegando os campos 
        body: JSON.stringify({
            cepEndereco: cep,
            bairroEndereco: bairro,
            ruaEndereco: rua,
            numCasaEndereco: numero,
            // Outros campos de endereço
        })
    });
    // Converte o Json para um atributo em JS
    let enderecoData = await enderecoResponse.json();
    // se ocorrer tudo bem 
    if (enderecoResponse.ok) {
        // ele chama esssa função
        console.log('Endereço criado:', enderecoData);
    } else {
        // se der bosta
        console.error('Erro ao criar o endereço:', enderecoData);
    }
    const idEndereco = enderecoData.id;  
    
    
    // Aqui quando ele aperta o button chama essa função asincrona que mesmo se de errado o app continua funcionando
    let usuarioResponse = await fetch('http://127.0.0.1:8000/api/clientes', {
        
     //    Aqui ele chama o metodo POST para os campos que foram inseridos
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomeContratado: nome,
            sobrenome: sobrenome,
            email: email,
            nascimento: nascimento,
            cpf: cpf,
            telefone: telefone,
            senha: senha,
            idEndereco: idEndereco,  // Use o ID do endereço criado anteriormente
            // Outros campos do usuário ou serviço
        })
    });
    
    let usuarioData = await usuarioResponse.json();
    
    if (usuarioResponse.ok) {
        console.log('Usuário/Serviço criado com sucesso:', usuarioData);
    } else {
        console.error('Erro ao criar o usuário/serviço:', usuarioData);
    }
    
      
        
    } 
 

    
 
 

    async function buscarCep() {
        // Se Cep for vazio vai aparecer um alerta
        if (cep == "") {
            Alert.alert('Cep inválido')
            setCep("")
        }
        try {
            // await serve para esperar a resposta que vai ser passada
            const response = await Api.get(`/${cep}/json/`)
            //Esse get, serve para puxar a info la do servidor da API 


            //Os set São as infos que você vai pegar da API
            setBairro(response.data.bairro)
            setRua(response.data.logradouro);

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
        setCep(formatCep(text));
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
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY',
                            }}

                            value={tempoTrabalhado}
                            customTextInput={FloatingLabelInput}
                            customTextInputProps={{
                                containerStyles: {
                                    marginTop: 20,
                                    marginBottom: 10,
                                    backgroundColor: '#7098E2',
                                    borderRadius: 40,
                                    height: '80%',

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
                        label="Cep"
                        value={cep}
                        
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
                        label="Bairro"
                        value={bairro}
                        onChangeText={value => setBairro(value)}
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
                            value={rua}
                            onChangeText={value => setRua(value)}
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
                                value={numero}

                                onChangeText={value => setNumero(value)}
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
                <View style={styles.containerButton}>
                    <Button
                        style={[styles.buttonEnviar, {
                            backgroundColor: '#FF914D',
                            width: '40%'
                        }]} // Defina a cor de fundo desejada aqui
                        color='#FF914D'
                        variant="primary"
                        title="Buscar Cep"
                        onPress={buscarCep}
                    />

                        
                </View>
                <View style={styles.mapContainer}>
                    <View>
                        <Map />

                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button
                        style={[styles.buttonEnviar1, {
                            backgroundColor: '#FF914D',
                            width: '70%'
                        }]} // Defina a cor de fundo desejada aqui
                        color='#FF914D'
                        variant="primary"
                        title="Cadastrar-se"
                         onPress={() => navigation.navigate('areaAtuacao')}
                         // onPress={cadastroContratado}

                    />
                  
                </View>



            </View>


        </View>
    );
};

export default Cadastro1 ;
