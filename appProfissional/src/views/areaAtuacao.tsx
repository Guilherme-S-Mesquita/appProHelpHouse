import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button";
import Imagens from '../../img/img';



import styles from '../css/areaAtuacaoCss';
const AreaAtuacao: React.FC<{ navigation: any }> = ({ navigation }) => {

    return (
        <View style={styles.containerPrincipal}>


            <View style={styles.container2}>
                <View style={styles.meioCirculo}>
                </View>
                <Text style={styles.emQuais}>Em quais <Text style={styles.areas}>áreas</Text> {'\n'} <Text style={styles.voce}>você atua?</Text></Text>

                <View style={styles.pesquisa}>
                    <Image source={Imagens.lupa} style={styles.lupa} />
                    <TextInput
                        placeholder='          buscar..'
                        style={styles.input}
                        placeholderTextColor='gray'
                        keyboardType='default'

                    />

                </View>
                <ScrollView>
                    <View style={styles.trabalhos}>

                        <View style={styles.pedreiro}>
                            <Text style={styles.name1}>Pedreiro</Text>
                        </View>

                        <View style={styles.mecanico}>
                            <Text style={styles.name2}>Mecânico</Text>
                        </View>

                        <View style={styles.eletricista}>
                            <Text style={styles.name3}>Eletricista</Text>
                        </View>

                        <View style={styles.pintor}>
                            <Text style={styles.name4}>Pintor</Text>
                        </View>


                        <View style={styles.encanador}>
                            <Text style={styles.name5}>Encanador</Text>
                        </View>

                        <View style={styles.diarista}>
                            <Text style={styles.name6}>Diarista</Text>
                        </View>


                        <View style={styles.descricaoAreaTrabalhada}>
                            <Text style={styles.aindaNao}>Ainda não encontrou uma {'\n'}profissão que te defina?</Text>

                            <Text style={styles.descricaoBreve}>Descreva brevemente sua área de atuação...</Text>

                            <Text style={styles.melhor}>Não deixe de adicionar fotos e vídeos para sua {'\n'} área ser melhor descrita!</Text>
                            <TextInput
                                placeholder='          buscar..'
                                style={styles.descricaoInput}
                                placeholderTextColor='gray'
                                keyboardType='default'

                            />
                        </View>
                    </View>


                </ScrollView>
            </View>
            <Button
                style={[styles.buttonEnviar, {
                    backgroundColor: '#FF914D',
                    shadowColor:'black',
                    shadowRadius:4,
                    shadowOffset:{width:900, height:350},
                    elevation:5
            

                }]} // Defina a cor de fundo desejada aqui
                color='#FF914D'
                variant="primary"
                title="Próximo"
                onPress={() => navigation.navigate('cadastro1')}
            />

        </View>

    );
};

export default AreaAtuacao;






