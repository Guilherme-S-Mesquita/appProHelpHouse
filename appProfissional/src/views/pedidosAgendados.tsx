import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ActivityIndicator, Modal, ScrollView } from 'react-native';
import styles from '../css/pedidosAgendadosCss';
import Imagens from '../../img/img';
import api from '../../axios';
import myContext from '../functions/authContext';
import Staps from '../../componentes/staps/staps';
import { QrCodePix } from '../../componentes/pix';
import AntDesign from '@expo/vector-icons/AntDesign';
import TelaConfiguracao from './configuracao';
import AsyncStorage from '@react-native-async-storage/async-storage';



interface Contratante {

    nomeContratante: string;
    bairroContratante: string;
    cidadeContratante: string;
    emailContratante: string;
    cepContratante: string;
    idContratante: string;
}

interface Contrato {
    idSolicitarPedido: number;
    valor: string;
    data: string;
    hora: string;
    desc_servicoRealizado: string;
    forma_pagamento: string;
    status: string
}

interface Pedido {
    idSolicitarPedido: number;
    descricaoPedido: string;
    tituloPedido: string;
    contratante: Contratante;
    contrato?: Contrato;
}

const PedidosAgendados: React.FC<{ route: any; navigation: any; currentPosition: number, onClose: () => void }> = ({ navigation }) => {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [pedidoSelecionado, setPedidoSelecionado] = useState<Pedido | null>(null);
    const { user } = useContext(myContext);
    const [token, setToken] = useState<string | null>(null);


    useEffect(() => {
        const fetchToken = async () => {
            try {
                const savedToken = await AsyncStorage.getItem('authToken');
                if (savedToken) {
                    setToken(savedToken);
                    console.log('Token obtido do AsyncStorage:', savedToken);
                } else {
                    console.log('Nenhum token encontrado no AsyncStorage');
                }
            } catch (error) {
                console.error('Erro ao buscar o token:', error);
            }
        };
        fetchToken();
    }, []);

    useEffect(() => {
        if (!user?.idContratado) return;

        let isMounted = true; //ESSA VARIVAEL SERVER PARA VERIFICAR SE HÁ ALGUM PEDIDO
        let delay = 1000; // Começa com 1 segundo

        const fetchPedidos = async () => {
            try {
                const response = await api.get(`/pedidos/aceitos/${user.idContratado}`);
                
                
                if (isMounted) {
                setPedidos(response.data || []);
                // DELEY POSSIVEL DE UM PEDIDO AO OUTRO
                delay = 1000;
                }
            } catch (err) {
                setError('Erro ao carregar pedidos');
                console.error('Erro ao carregar pedidos:', err);
            } finally {
                if (isMounted) {
                    setTimeout(fetchPedidos, delay);
                  }
                setLoading(false);
            }
        };

        fetchPedidos();
        return () => {
            isMounted = false; // Limpa a montagem ao desmontar o componente
          };
    }, [user?.idContratado]);


    const iniciarPedido = async (idSolicitarPedido: number) => {
        try {
            const response = await api.patch(`/pedidos/${idSolicitarPedido}/pendente`);
            setPedidoSelecionado(response.data.pedido);
            setModalVisible(true);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível iniciar o pedido.");
            console.error(error);
        }
    };


    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text style={{ color: 'red' }}>{error}</Text>;
    }

    const createChatRoom = async (idContratante: string, idContratado: string, navigation: any, idSolicitarPedido: number) => {
        if (!idContratante || !idContratado) {
            Alert.alert('Erro', 'ID do contratante ou contratado não encontrado.');
            return;
        }

        try {
            console.log('Criando sala de chat para:', { idContratante, idContratado, idSolicitarPedido });
            const response = await api.post(`/chat-room/${idContratante}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            const roomId = response.data?.chat_room?.id;

            // Verifica se a resposta foi bem-sucedida
            if (response.status === 200 && roomId) {
                console.log('Sala de chat criada, Room ID:', roomId);
                navigation.navigate('Chat', { roomId, idContratante, idSolicitarPedido });
            } else {
                Alert.alert('Erro', 'Não foi possível criar ou encontrar a sala de chat.');
                console.log('Resposta da API não contém roomId:', response.data);
            }
        } catch (error: any) {
            console.error('Erro ao criar ou buscar a sala de chat:', error.response ? error.response.data : error.message);
            Alert.alert('Erro', 'Houve um problema ao criar a sala.');
        }
    };


    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <AntDesign
                    name="leftcircle"
                    size={55}
                    color="#0000"
                    style={{ marginLeft: 1, left: 1, zIndex: 10 }}
                    onPress={() => navigation.navigate('perfil')}
                />
            </TouchableOpacity>
            <View style={styles.agendamentos}>
                <Text style={styles.textoAgendamento}>Agendamentos</Text>
                <View style={styles.cabecalhoPedido}>
                    <Text style={styles.pedido}>Pedidos</Text>
                    <Image source={Imagens.iconFiltro} style={styles.filtro} />
                </View>
            </View>
            <ScrollView style={{ bottom: 20 }}>
                {pedidos.length > 0 ? (
                    pedidos.map((pedido) => (
                        <View key={pedido.idSolicitarPedido} style={styles.cartaoSolicitacao}>
                            <Text style={styles.tituloSolicitacao}>{pedido.tituloPedido}</Text>
                            <Text style={styles.cliente}>
                                Cliente: <Text style={styles.nomeCliente}>{pedido.contratante.nomeContratante}</Text>
                            </Text>
                            <Text style={styles.localizacao}>
                                {pedido.contratante.cidadeContratante}, {pedido.contratante.bairroContratante}
                                <Text style={styles.doisKm}> À 2 km de você</Text>
                            </Text>

                            {pedido.contrato && (
                                <>
                                    <Text style={styles.data}>
                                        Data e hora: <Text style={styles.diaHora}>{pedido.contrato.data} às {pedido.contrato.hora}</Text>
                                    </Text>
                                    <Text style={styles.situacaoPagamento}>
                                        Situação do Pagamento: <Text style={styles.sinal}>{pedido.contrato.forma_pagamento}</Text> - R$ {pedido.contrato.valor}
                                    </Text>
                                </>
                            )}


                            {pedido.contrato?.status === 'aceito' && (
                                <TouchableOpacity
                                    style={styles.botaoIniciar}
                                    onPress={() => iniciarPedido(pedido.idSolicitarPedido)}
                                >

                                    <Text style={styles.conversar}>Iniciar</Text>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity
                                style={styles.botaoConversar}
                                onPress={() =>
                                    createChatRoom(
                                        pedido.contratante.idContratante,
                                        user.idContratado,
                                        navigation,
                                        pedido.idSolicitarPedido
                                    )
                                }
                            >
                                <Text style={styles.conversar}>Conversar</Text>
                            </TouchableOpacity>


                        </View>
                    ))
                ) : (
                    <Text>Nenhum pedido aceito encontrado.</Text>
                )}
            </ScrollView>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {pedidoSelecionado ? (
                            <>
                                <Text style={styles.modalTitle}>{pedidoSelecionado.tituloPedido}</Text>
                                <Text style={styles.modalCliente}>
                                    Cliente: <Text style={styles.nomeCliente}>{pedidoSelecionado.contratante.nomeContratante}</Text>
                                </Text>
                                <Text style={styles.modalLocalizacao}>
                                    {pedidoSelecionado.contratante.cidadeContratante}, {pedidoSelecionado.contratante.bairroContratante}
                                </Text>
                                <Text style={styles.modalSituacao}>
                                    Situação do pagamento: {pedidoSelecionado.contrato?.forma_pagamento || "Indisponível"} - R$ {pedidoSelecionado.contrato?.valor || "0.00"}
                                </Text>

                                <Staps pedido={pedidoSelecionado} />



                                <TouchableOpacity style={styles.botaoAction} onPress={() => setModalVisible(false)}>
                                    <Text style={styles.textoBotaoFechar}>Fechar</Text>
                                </TouchableOpacity>
                            </>
                        ) : (
                            <Text>Informações do pedido estão indisponíveis.</Text>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default PedidosAgendados;
