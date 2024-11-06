import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, Alert } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button } from "../../componentes/Button/Button";
import Imagens from '../../img/img';
import styles from '../css/areaAtuacaoCss';

const AreaAtuacao: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const { nomeContratado, sobrenomeContratado, nascContratado, cpfContratado, telefoneContratado, emailContratado, password,
        cepContratado, bairroContratado, ruaContratado, numCasaContratado, cidadeContratado, regiaoContratado } = route.params;

    const [profissoesSelecionadas, setProfissoesSelecionadas] = useState<string[]>([]);
    const [descProfissaoContratado, setDescProfissaoContratado] = useState<string>('');

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

        if (profissaoContratado.length === 0) {
            Alert.alert('Selecione pelo menos uma Profissão.');
            console.log("Nenhuma região selecionada");
            return;
        }


        console.log("Profissões selecionadas: ", profissaoContratado);
        console.log("Descrição: ", descProfissaoContratado);

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
            descProfissaoContratado,
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
                    <Text style={styles.voce}>      você atua?</Text>
                </Text>

                <Text style={styles.selecione}>Selecione as suas profissões:</Text>

                <View style={styles.trabalhos}>
                    <ScrollView horizontal showsVerticalScrollIndicator={false}>
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
                                onPress={(isChecked: boolean) => handleCheckboxChange('Pedreiro', isChecked)}
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

                                onPress={(isChecked: boolean) => handleCheckboxChange('mecânico', isChecked)}

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
                                onPress={(isChecked: boolean) => handleCheckboxChange('Eletricista', isChecked)}
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
                                onPress={(isChecked: boolean) => handleCheckboxChange('Jardineiro', isChecked)}
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
                                onPress={(isChecked: boolean) => handleCheckboxChange('Encanador', isChecked)}
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
                                onPress={(isChecked: boolean) => handleCheckboxChange('Diarista', isChecked)}
                            />
                        </View>

                        <View style={styles.baba}>
                            <BouncyCheckbox
                                size={95}
                                fillColor="#F6A059"
                                unFillColor="#588acd"
                                iconComponent={
                                    <Image
                                        source={require('../../assets/baba.png')}
                                        style={{ width: 82, height: 155, top: 25, left: 1 }}
                                    />
                                }
                                innerIconStyle={{ borderWidth: 4 }}
                                onPress={(isChecked: boolean) => handleCheckboxChange('Babá', isChecked)}
                            />
                        </View>


                        <View style={styles.chaveiro}>
                            <BouncyCheckbox
                                size={95}
                                fillColor="#F6A059"
                                unFillColor="#588acd"
                                iconComponent={
                                    <Image
                                        source={require('../../assets/chaveiro.png')}
                                        style={{
                                            width: 85, height: 155, top: 20,

                                        }}
                                    />
                                }
                                innerIconStyle={{ borderWidth: 4 }}
                                onPress={(isChecked: boolean) => handleCheckboxChange('Chaveiro', isChecked)}
                            />
                        </View>


                        <View style={styles.costureira}>
                            <BouncyCheckbox
                                size={95}
                                fillColor="#F6A059"
                                unFillColor="#588acd"
                                iconComponent={
                                    <Image
                                        source={require('../../assets/costureira.png')}
                                        style={{ width: 82, height: 155, top: 21 }}
                                    />
                                }
                                innerIconStyle={{ borderWidth: 4 }}
                                onPress={(isChecked: boolean) => handleCheckboxChange('Costureira', isChecked)}
                            />
                        </View>


                        <View style={styles.instalador}>
                            <BouncyCheckbox
                                size={95}
                                fillColor="#F6A059"
                                unFillColor="#588acd"
                                iconComponent={
                                    <Image
                                        source={require('../../assets/instalador.png')}
                                        style={{
                                            width: 85, height: 110, top: 16, right: 3
                                        }}
                                    />
                                }
                                innerIconStyle={{ borderWidth: 4 }}
                                onPress={(isChecked: boolean) => handleCheckboxChange('Instalador', isChecked)}
                            />
                        </View>
                        <View style={styles.professor}>
                            <BouncyCheckbox
                                size={95}
                                fillColor="#F6A059"
                                unFillColor="#588acd"
                                iconComponent={
                                    <Image
                                        source={require('../../assets/professor.png')}
                                        style={{ width: 92, height: 110, top: 19 }}
                                    />
                                }
                                innerIconStyle={{ borderWidth: 4 }}
                                onPress={(isChecked: boolean) => handleCheckboxChange('Professor', isChecked)}
                            />
                        </View>

                        <View style={styles.personalOrg}>
                            <BouncyCheckbox
                                size={95}
                                fillColor="#F6A059"
                                unFillColor="#588acd"
                                iconComponent={
                                    <Image
                                        source={require('../../assets/personalOrg.png')}
                                        style={{ width: 75, height: 100, top: 18 }}
                                    />
                                }
                                innerIconStyle={{ borderWidth: 4 }}
                                onPress={(isChecked: boolean) => handleCheckboxChange('Personal Organizer', isChecked)}
                            />
                        </View>

                        <View style={styles.cozinheiro}>
                            <BouncyCheckbox
                                size={95}
                                fillColor="#F6A059"
                                unFillColor="#588acd"
                                iconComponent={
                                    <Image
                                        source={require('../../assets/cozinheiro.png')}
                                        style={{ width: 85, height: 110, top: 15 }}
                                    />
                                }
                                innerIconStyle={{ borderWidth: 4 }}
                                onPress={(isChecked: boolean) => handleCheckboxChange('Cozinheiro', isChecked)}
                            />
                        </View>

                        <View style={styles.montador}>
                            <BouncyCheckbox
                                size={95}
                                fillColor="#F6A059"
                                unFillColor="#588acd"
                                iconComponent={
                                    <Image
                                        source={require('../../assets/montador.png')}
                                        style={{ width: 80, height: 110, top: 19 }}
                                    />
                                }
                                innerIconStyle={{ borderWidth: 4 }}
                                onPress={(isChecked: boolean) => handleCheckboxChange('Montador de Móveis', isChecked)}
                            />
                        </View>

                    </ScrollView>
                    <Text style={styles.aindaNao}>
                        Ainda não encontrou uma {'\n'}profissão que te defina?
                    </Text>

                    <Text style={styles.descricaoBreve}>
                        Descreva brevemente sua área de atuação...
                    </Text>

                    {/* Campo de entrada para a descrição do contratado */}
                    
                    <TextInput
                        style={styles.descricaoInput}
                        value={descProfissaoContratado}
                        onChangeText={value => setDescProfissaoContratado(value)}
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
