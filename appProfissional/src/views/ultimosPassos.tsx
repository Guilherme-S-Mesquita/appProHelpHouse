import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons'; // Certifique-se de ter instalado o @expo/vector-icons
import styles from '../css/ultimosPassosCss';

// Mock das funções para evitar erro
const useImage = () => ({ imageUrl: null });
const useUser = () => ({ userData: { nomeContratante: 'Cássio Ramos', bairroContratante: 'Bairro que trabalha' } });

// Mock das imagens (substitua pelos paths corretos)
const Imagens = {
  fotoFundo: require('../../assets/eletricistaTrampando.png'),
  perfil: require('../../assets/cassioPerfil.jpeg'),
  mestreDeObra: require('../../assets/trampoEletricista2.jpg'),
  mestreDeObra2: require('../../assets/trampoEletricista3.jpg'),
  mestreDeObra3: require('../../assets/eletricistaTrampando.png')
  
};

const PerfilProfissionalScreen: React.FC<{route: any, navigation: any }> = ({ route, navigation }) => {
    const { imageUrl } = useImage(); // Obtém a URL da imagem do contexto
    const { userData } = useUser(); // Altere para userData

    // Estado para armazenar as áreas de atuação
    const [areasAtuacao, setAreasAtuacao] = useState<string[]>(['Eletrica', 'Reparos']);
    const [novaArea, setNovaArea] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    // Função para adicionar uma nova área
    const adicionarAreaAtuacao = () => {
        if (novaArea.trim() !== '') {
            setAreasAtuacao([...areasAtuacao, novaArea.trim()]);
            setNovaArea(''); // Limpa o campo de input
            setModalVisible(false); // Fecha o modal após adicionar a área
        }
    };

    // Função para remover uma área
    const removerAreaAtuacao = (index: number) => {
        const novasAreas = areasAtuacao.filter((_, i) => i !== index);
        setAreasAtuacao(novasAreas);
    };

    return (
        <ScrollView>
            <View style={styles.containerCapaFundo}>
                <TouchableOpacity>
                    <Image source={Imagens.fotoFundo} style={styles.capaFundo} />
                </TouchableOpacity>
            </View>

            <View style={styles.containerImgPerfil}>
                <TouchableOpacity style={styles.buttonEditarPerfil}>
                    <Text style={styles.textButton}>Editar perfil</Text>
                </TouchableOpacity>
                
                {/* Verifica se há uma URL de imagem e exibe-a, caso contrário, exibe a imagem padrão */}
                <TouchableOpacity>
                    <Image source={imageUrl ? { uri: imageUrl } : Imagens.perfil} style={styles.imgPerfil} />
                </TouchableOpacity>
                
                <Text style={styles.nome}>
                    {userData ? userData.nomeContratante : 'Nome não disponível'}
                </Text>
                <Text style={styles.textBiografia}>
                    Trabalhando como eletricista a mais de{'\n'} 15 anos, formado em eletrotécnica.
                </Text>
                
                <Text style={styles.textLocalizacao}>
                    <Entypo name="location-pin" size={24} color="red" /> Atua em 
                    {userData && userData.bairroContratante ? userData.bairroContratante : 'Localização não disponível'}
                </Text>
                
                <Text style={styles.vejaMais}>Minhas áreas de atuação</Text>
                
                {/* Áreas de atuação e botão de adicionar */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25, marginTop: 30, marginBottom: 80,  }}>
                    {/* Botão de adicionar área */}
                    <TouchableOpacity
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

                {/* Seção de Avaliações */}
                <Text style={styles.vejaMais}>Avaliações</Text>
                
                <View style={styles.containerBase}>
                    <Image source={Imagens.perfil} style={styles.imgAvaliacao} />
                    <Text style={styles.nomeAvaliador}>João Felipe</Text>
                    <Text style={styles.textAvaliacao}>Ótimo profissional, entrega no prazo!</Text>
                </View>

                <View style={styles.margin}></View>

                <View style={styles.containerBase}>
                    <Image source={Imagens.perfil} style={styles.imgAvaliacao} />
                    <Text style={styles.nomeAvaliador}>Lucas</Text>
                    <Text style={styles.textAvaliacao}>Ótimo profissional!</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default PerfilProfissionalScreen;
