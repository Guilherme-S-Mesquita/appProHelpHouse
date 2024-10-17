import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button } from "../../componentes/Button/Button";
import Imagens from '../../img/img';
import styles from '../css/areaAtuacaoCss';

const AreaAtuacao: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const { nomeContratado, sobrenomeContratado, nascContratado, cpfContratado, telefoneContratado, emailContratado, password,
         cepContratado, bairroContratado, ruaContratado, numCasaContratado, cidadeContratado, regiaoContratado } = route.params;

    const [profissoesSelecionadas, setProfissoesSelecionadas] = useState<string[]>([]); 
    const [descContratado, setDescContratado] = useState<string>(''); 

    const handleCheckboxChange = (profession: string, isChecked: boolean) => {
        if (isChecked) {
            setProfissoesSelecionadas(prevState => [...prevState, profession]);
        } else {
            setProfissoesSelecionadas(prevState => prevState.filter(item => item !== profession));
        }
    };

    // Função para processar os dados e navegar para a próxima tela
    const dadosCad = () => {
        const profissaoContratado = profissoesSelecionadas.join(', '); // Concatena as profissões em uma string
    
        console.log("Profissões selecionadas: ", profissaoContratado);
        console.log("Descrição: ", descContratado);
    
        navigation.navigate('ultimosPassos', {
            nomeContratado,
            sobrenomeContratado,
            nascContratado,
            cpfContratado,
            telefoneContratado,
            emailContratado,
            password,
            cepContratado,
            bairroContratado,
            ruaContratado,
            numCasaContratado,
            cidadeContratado,
            profissaoContratado, 
            descContratado, 
            regiaoContratado  
        });
    };
    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.container2}>
                <View style={styles.meioCirculo} />
                <Text style={styles.emQuais}>
                    Em quais
                    <Text style={styles.areas}> áreas</Text>
                    {'\n'}
                    <Text style={styles.voce}>você atua?</Text>
                </Text>

                <View style={styles.pesquisa}>
                    <Image source={Imagens.lupa} style={styles.lupa} />
                    <TextInput
                        placeholder='buscar...'
                        style={styles.input}
                        placeholderTextColor='white'
                        keyboardType='default'
                    />
                </View>

                <View style={styles.trabalhos}>
                    {/* Checkbox Pedreiro */}
                    <View style={styles.pedreiro}>
                        <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            iconComponent={
                                <Image
                                    source={require('../../assets/pedreiro.png')}
                                    style={{ width: 80, height: 100, top: 15 }}
                                />
                            }
                            innerIconStyle={{ borderWidth: 4 }}
                            onPress={(isChecked: boolean) => handleCheckboxChange('pedreiro', isChecked)}
                        />
                    </View>

                    {/* Checkbox Mecânico */}
                    <View style={styles.mecanico}>
                        <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            iconComponent={
                                <Image
                                    source={require('../../assets/mecanico.png')}
                                    style={{ width: 79, height: 110, top: 19 }}
                                />
                            }
                            innerIconStyle={{ borderWidth: 4 }}
                            onPress={(isChecked: boolean) => handleCheckboxChange('mecanico', isChecked)}
                        />
                    </View>

                    {/* Checkbox Eletricista */}
                    <View style={styles.eletricista}>
                        <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            iconComponent={
                                <Image
                                    source={require('../../assets/eletricista.png')}
                                    style={{ width: 72, height: 119, top: 15 }}
                                />
                            }
                            innerIconStyle={{ borderWidth: 4 }}
                            onPress={(isChecked: boolean) => handleCheckboxChange('eletricista', isChecked)}
                        />
                    </View>

                    {/* Checkbox Jardineiro */}
                    <View style={styles.jadineiro}>
                        <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            iconComponent={
                                <Image
                                    source={require('../../assets/jardineiro.png')}
                                    style={{ width: 95, height: 115, top: 25, left: 2 }}
                                />
                            }
                            innerIconStyle={{ borderWidth: 4 }}
                            onPress={(isChecked: boolean) => handleCheckboxChange('jardineiro', isChecked)}
                        />
                    </View>

                    {/* Checkbox Encanador */}
                    <View style={styles.encanador}>
                        <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            iconComponent={
                                <Image
                                    source={require('../../assets/encanador.png')}
                                    style={{ width: 72, height: 152, top: 35 }}
                                />
                            }
                            innerIconStyle={{ borderWidth: 4 }}
                            onPress={(isChecked: boolean) => handleCheckboxChange('encanador', isChecked)}
                        />
                    </View>

                    {/* Checkbox Diarista */}
                    <View style={styles.diarista}>
                        <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            iconComponent={
                                <Image
                                    source={require('../../assets/diarista.png')}
                                    style={{ width: 80, height: 155, top: 35 }}
                                />
                            }
                            innerIconStyle={{ borderWidth: 4 }}
                            onPress={(isChecked: boolean) => handleCheckboxChange('diarista', isChecked)}
                        />
                    </View>

                    <Text style={styles.aindaNao}>
                        Ainda não encontrou uma {'\n'}profissão que te defina?
                    </Text>

                    <Text style={styles.descricaoBreve}>
                        Descreva brevemente sua área de atuação...
                    </Text>

                    {/* Campo de entrada para a descrição do contratado */}
                    <TextInput
                    style={styles.descricaoInput}
                        value={descContratado}
                        onChangeText={value => setDescContratado(value)}
                        placeholder="Descreva brevemente sua área..."
                        placeholderTextColor="#fff"
                        returnKeyType='done'
                    />
                </View>
            </View>

            <Button
                style={[styles.buttonEnviar, { backgroundColor: '#FF914D' }]}
                color='#FF914D'
                variant="primary"
                title="Próximo"
                onPress={dadosCad} // Chama diretamente a função
            />
        </View>
    );
};

export default AreaAtuacao;
