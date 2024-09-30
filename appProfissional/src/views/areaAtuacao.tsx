import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button";
import Imagens from '../../img/img';
import BouncyCheckbox from "react-native-bouncy-checkbox";


import styles from '../css/areaAtuacaoCss';
const AreaAtuacao: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [checkboxState, setCheckboxState] = React.useState(false);
    return (
        <View style={styles.containerPrincipal}>


            <View style={styles.container2}>
                <View style={styles.meioCirculo}>
                </View>
                <Text style={styles.emQuais}>Em quais
                    <Text style={styles.areas}> áreas</Text>
                    {'\n'} <Text style={styles.voce}>você atua?</Text>
                </Text>

                <View style={styles.pesquisa}>
                    <Image source={Imagens.lupa} style={styles.lupa} />
                    <TextInput
                        placeholder='buscar..'
                        style={styles.input}
                        placeholderTextColor='white'
                        keyboardType='default'

                    />

                </View>
                {/* <ScrollView> */}
                <View style={styles.trabalhos}>

                    <View style={styles.pedreiro}>
                        <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            isChecked={false} // Para garantir que o check está desmarcado
                            iconComponent={
                                <Image
                                    source={require('../../assets/pedreiro.png')}
                                    style={{
                                        width: 80,
                                        height: 100,
                                        top: 15,

                                    }}
                                />
                            }
                            innerIconStyle={{ borderWidth: 4, }}
                            onPress={(isChecked: boolean) => { console.log(isChecked) }}
                        />
                    </View>

                    <View style={styles.mecanico}>
                        <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            isChecked={false} // Para garantir que o check está desmarcado
                            iconComponent={
                                <Image
                                    source={require('../../assets/mecanico.png')}
                                    style={{
                                        width: 79,
                                        height: 110,
                                        top:19
                                    }}
                                />
                            }
                            innerIconStyle={{ borderWidth: 4 }}
                            onPress={(isChecked: boolean) => { console.log(isChecked) }}
                        />
                    </View>

                    <View style={styles.eletricista}>
                    <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            isChecked={false} // Para garantir que o check está desmarcado
                            iconComponent={
                                <Image
                                    source={require('../../assets/eletricista.png')}
                                    style={{
                                        width: 72,
                                        height: 119,
                                        top:15
                                    }}
                                />
                            }
    
                            innerIconStyle={{ borderWidth: 4 }}
                            textStyle={{ fontFamily: "JosefinSans-Regular", color:'red', zIndex:10, fontSize:15 }}
                            onPress={(isChecked: boolean) => { console.log(isChecked) }}
                        />
                    </View>

                    <View style={styles.jadineiro}>
                    <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            isChecked={false} // Para garantir que o check está desmarcado
                            iconComponent={
                                <Image
                                    source={require('../../assets/jardineiro.png')}
                                    style={{
                                        width: 95,
                                        height: 115,
                                        top:25,
                                        left:2
                                    }}
                                />
                            }
                            innerIconStyle={{ borderWidth: 4 }}
                            onPress={(isChecked: boolean) => { console.log(isChecked) }}
                        />
        
                    </View>


                    <View style={styles.encanador}>
                    <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            isChecked={false} // Para garantir que o check está desmarcado
                            iconComponent={
                                <Image
                                    source={require('../../assets/encanador.png')}
                                    style={{
                                        width:72,
                                        height: 152,
                                        top:35
                                    }}
                                />
                            }
                            innerIconStyle={{ borderWidth: 4 }}
                            onPress={(isChecked: boolean) => { console.log(isChecked) }}
                        />
                 
                     
                    </View>

                    <View style={styles.diarista}>
                    <BouncyCheckbox
                            size={95}
                            fillColor="#F6A059"
                            unFillColor="#588acd"
                            isChecked={false} // Para garantir que o check está desmarcado
                            iconComponent={
                                <Image
                                    source={require('../../assets/diarista.png')}
                                    style={{
                                        width: 80,
                                        height: 155,
                                        top:35
                                    }}
                                />
                            }
                            innerIconStyle={{ borderWidth: 4 }}
                            onPress={(isChecked: boolean) => { console.log(isChecked) }}
                        />
                    </View>


                    <Text style={styles.aindaNao}>Ainda não encontrou uma {'\n'}profissão que te defina?</Text>

                    <Text style={styles.descricaoBreve}>Descreva brevemente sua área de atuação...</Text>
                    <TextInput
                        placeholder='Descreva brevemente..'
                        style={styles.descricaoInput}
                        placeholderTextColor='white'
                        keyboardType='default'
                        returnKeyType='done'

                    />

                </View>


                {/* </ScrollView> */}
            </View>

            <Button
                style={[styles.buttonEnviar, {
                    backgroundColor: '#FF914D',

                }]} // Defina a cor de fundo desejada aqui
                color='#FF914D'
                variant="primary"
                title="Próximo"
                onPress={() => navigation.navigate('ultimosPassos')}
            />
        </View>

    );
};

export default AreaAtuacao;