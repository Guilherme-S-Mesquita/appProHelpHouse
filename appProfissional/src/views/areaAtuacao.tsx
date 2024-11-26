import React, { useState } from 'react';
import { View, Text, TextInput, Image, Alert, FlatList, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button } from "../../componentes/Button/Button";
import styles from '../css/areaAtuacaoCss';
import { Platform } from 'react-native';


const AreaAtuacao: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const { nomeContratado, sobrenomeContratado, nascContratado, cpfContratado, telefoneContratado, emailContratado, password,
        cepContratado, bairroContratado, ruaContratado, numCasaContratado, cidadeContratado, regiaoContratado } = route.params;

    const [profissoesSelecionadas, setProfissoesSelecionadas] = useState<string[]>([]);
    const [descProfissaoContratado, setDescProfissaoContratado] = useState<string>('');

    //isso aqui é o array da flatList, como estamos usando essas imagens no checkBox e cada uma precisa de um estilo diferente coloquei dentro do array e puxei eles no renderItem que é o checkBox
    const profissoes = [
        { id: '1', label: 'Pedreiro', icon: require('../../assets/pedreiro.png'), style: styles.linhaCima, width: 80, height: 190, top: 15 },
        { id: '2', label: 'Mecânico', icon: require('../../assets/mecanico.png'), style: styles.linhaCima, width: 79, height: 192, top: 22 },
        { id: '3', label: 'Eletricista', icon: require('../../assets/eletricista.png'), style: styles.linhaCima, width: 70, height: 179, top: 20 },
        { id: '4', label: 'Jardineiro', icon: require('../../assets/jardineiro.png'), style: styles.linhaCima, width: 95, height: 196, top: 29 },
        { id: '5', label: 'Encanador', icon: require('../../assets/encanador.png'), style: styles.linhaCima, width: 72, height: 152, top: 35 },
        { id: '6', label: 'Diarista', icon: require('../../assets/diarista.png'), style: styles.linhaCima, width: 80, height: 190, top: 35 },
        { id: '7', label: 'Babá', icon: require('../../assets/baba.png'), style: styles.linhaCima, width: 80, height: 170, top: 25 },
        { id: '8', label: 'Chaveiro', icon: require('../../assets/chaveiro.png'), style: styles.linhaBaixo, width: 80, height: 195, top: 19 },
        { id: '9', label: 'Costureira', icon: require('../../assets/costureira.png'), style: styles.linhaBaixo, width: 90, height: 180, top: 25 },
        { id: '10', label: 'Instalador', icon: require('../../assets/instalador.png'), style: styles.linhaBaixo, width: 90, height: 180, top: 15 },
        { id: '11', label: 'Professor', icon: require('../../assets/professor.png'), style: styles.linhaBaixo, width: 90, height: 180, top: 19 },
        { id: '12', label: 'Personal Organizer', icon: require('../../assets/personalOrg.png'), style: styles.linhaBaixo, width: 90, height: 159, top: 15 },
        { id: '13', label: 'Cozinheiro', icon: require('../../assets/cozinheiro.png'), style: styles.linhaBaixo, width: 90, height: 180, top: 15 },
        { id: '14', label: 'Montador de Móveis', icon: require('../../assets/montador.png'), style: styles.linhaBaixo, width: 90, height: 180, top: 19 },
        { id: '15', label: 'Fisioterapeuta', icon: require('../../assets/fisio.png'), style: styles.linhaFisio, width: 90, height:160, top: 20,},
        { id: '16', label: 'Personal trainer', icon: require('../../assets/personal.png'), style: styles.linhaPersonal, width: 90, height: 290, top: 19 }
    ];
    //aqui ta pegando a quantidade total de itens que tem no array e dividindo por dois
    const halfwayIndex = Math.ceil(profissoes.length / 2);
   
    const handleCheckboxChange = (profession: string, isChecked: boolean) => {
        if (isChecked) {
            setProfissoesSelecionadas(prevState => [...prevState, profession]);
        } else {
            setProfissoesSelecionadas(prevState => prevState.filter(item => item !== profession));
        }
    };

    // Função para processar os dados e navegar para a próxima tela
    const dadosCad = () => {
        const profissaoContratado = profissoesSelecionadas.join(', '); //concatena as profissões em uma string
        if (profissaoContratado.length === 0) {
            Alert.alert('Selecione pelo menos uma Profissão.');
            console.log("Nenhuma Profissão selecionada");
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

    const renderItem = ({ item }: { item: typeof profissoes[0] }) => (
        <View style={[item.style, styles.flatList1]}>
            <BouncyCheckbox
                size={95}
                fillColor="#F6A059"
                unFillColor="#588acd"
                iconComponent={
                    <Image
                        source={item.icon}
                        style={{
                            width: item.width,
                            height: item.height,
                            top: item.top,
                            resizeMode: 'center',
                        }}
                    />
                }
                innerIconStyle={{ borderWidth: 4 }}
                onPress={(isChecked: boolean) => handleCheckboxChange(item.label, isChecked)}
            />
        </View>
    );
    const { width } = Dimensions.get('window');


    const [pontinho, setPontinho] = useState(0)

    return (
        <View style={styles.containerPrincipal}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{
                        flexGrow: 1,
                        alignItems: 'center',
                        padding: 20,
                    }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.container2}>
                        <View style={styles.meioCirculo} />
                        <Text style={styles.emQuais}>Em quais<Text style={styles.areas}> áreas</Text> {'\n'}
                            <Text style={styles.voce}>    você atua?</Text>
                        </Text>

                        <Text style={styles.selecione}>Selecione as suas profissões:</Text>

                        <View style={{ bottom: 180 }}>
                            <FlatList
                                data={profissoes}
                                keyExtractor={(item) => item.id}
                                renderItem={renderItem}
                                horizontal={true}
                                pagingEnabled
                                onMomentumScrollEnd={(event) => {
                                    const currentIndex = Math.round(event.nativeEvent.contentOffset.x / width);
                                    setPontinho(currentIndex);
                                }}
                                scrollEventThrottle={16}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 10, alignItems: 'center', bottom:180 }}

                            />
                            {/* aqui é a onde forma as bolinhas, esse [0,1] é o indice de paginas do array */}
                            <View style={styles.pontoPai}>
                                {[0, 1].map((i) => (
                                    <View
                                        key={i}
                                        style={[
                                            styles.ponto,
                                            { backgroundColor: i === pontinho ? '#F6A059' : '#fff' },
                                        ]}
                                    />
                                ))}
                            </View>
                            <Text style={styles.aindaNao}>  Ainda não encontrou uma {'\n'}profissão que te defina?</Text>
                            <TextInput
                                style={styles.descricaoInput}
                                value={descProfissaoContratado}
                                onChangeText={setDescProfissaoContratado}
                                placeholder="Descreva brevemente sua área..."
                                placeholderTextColor="#fff"
                                returnKeyType='done'
                            />

                        </View>

                        <Button
                            style={[styles.buttonEnviar, { backgroundColor: '#FF914D' }]}
                            color='#FF914D'
                            variant="primary"
                            title="Próximo"
                            onPress={dadosCad}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    );
};

export default AreaAtuacao;
