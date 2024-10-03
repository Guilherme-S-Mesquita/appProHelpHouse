import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button";
import Imagens from '../../img/img';



import styles from '../css/ultimosPassosCss';
const UltimosPassos: React.FC<{ navigation: any }> = ({ navigation }) => {


    return (



        <View style={styles.containerPrincipal}>
          
                <ScrollView>
                <Text style={styles.ultimo}>Últimos<Text style={styles.passos}> passos</Text></Text>
               

                <Text style={styles.acabando}>Já estamos acabando, adicione as {'\n'}últimas informações para criarmos a {'\n'}sua conta!</Text>
              
              

                <View style={styles.circulo}>
                </View>

                <View style={styles.container2}>

                    <Text style={styles.voce}>Fale um pouco sobre você</Text>
                    <TextInput
                        style={{
                            backgroundColor: '#D3D3D3',
                            padding: 8,
                            borderRadius: 50,
                            marginRight: 10,
                            //marginTop: -200
                        }}
                        onPress={() => setModalVisible(true)}
                    >
                        <Entypo name="plus" size={18} color="black" />
                    </TouchableOpacity>

                    {/* Exibe as áreas adicionadas */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {areasAtuacao.map((area, index) => (
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: area === 'Eletrica' ? '#FFD700' : '#1E90FF', // Amarelo para Eletrica, Azul para outros
                                    borderRadius: 18, 
                                    paddingVertical: 4, 
                                    paddingHorizontal: 10, 
                                    marginRight: 10, 
                                    alignItems: 'center',
                                    
                                }}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>{area}</Text>
                                {/* Ícone para remover área */}
                                <TouchableOpacity onPress={() => removerAreaAtuacao(index)}>
                                    <AntDesign name="closecircle" size={16} color="white" style={{ marginLeft: 8 }} />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Modal para adicionar nova área */}
                <Modal visible={modalVisible} animationType="fade" transparent={true}>
                    <View style={styles.modalBackground}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Adicionar nova área</Text>
                            <TextInput
                                style={styles.inputModal}
                                placeholder="Digite a nova área"
                                value={novaArea}
                                onChangeText={setNovaArea}
                            />
                            <TouchableOpacity style={styles.buttonModal} onPress={adicionarAreaAtuacao}>
                                <Text style={styles.textButton}>Adicionar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={{ color: 'red', marginTop: 10 }}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {/* Seção de Portfólio */}
                <Text style={styles.vejaMais}>Portfólio</Text>
                
                <View style={styles.containerVerical}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity><Image source={Imagens.mestreDeObra} style={styles.fotosRolagem} /></TouchableOpacity>
                        <TouchableOpacity><Image source={Imagens.mestreDeObra2} style={styles.fotosRolagem2} /></TouchableOpacity>
                        <TouchableOpacity><Image source={Imagens.mestreDeObra3} style={styles.fotosRolagem2} /></TouchableOpacity>
                     </ScrollView>
                </View>
                <Button
                    style={[styles.buttonEnviar, {
                        backgroundColor: '#FF914D',
                    }]} // Defina a cor de fundo desejada aqui
                    color='#FF914D'
                    variant="primary"
                    title="Criar conta"
                    onPress={() => navigation.navigate('ultimosPassos')}

                />
            </ScrollView>

        </View>

    );
};

export default UltimosPassos;






