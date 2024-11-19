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




interface Contratante {
    nomeContratante: string;
    bairroContratante: string;
    cidadeContratante: string;
    emailContratante:string;
    cepContratante:string;
    idContratante: string;
}

interface Contrato {
    idSolicitarPedido: number;
    valor: string;
    data: string;
    hora: string;
    desc_servicoRealizado: string;
    forma_pagamento: string;
}

interface Pedido {
    idSolicitarPedido: number;
    descricaoPedido: string;
    tituloPedido: string;
    contratante: Contratante;
    contrato?: Contrato;
}

const PedidosAgendados: React.FC<{ route: any; navigation: any; currentPosition: number, onClose: () => void }> =  ({ navigation })=> {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [pedidoSelecionado, setPedidoSelecionado] = useState<Pedido | null>(null);
    const [currentPosition, setCurrentPosition] = React.useState<number>(0);
    const { user } = useContext(myContext);

    
    useEffect(() => {
        if (!user?.idContratado) return;

        const fetchPedidos = async () => {
            try {
                const response = await api.get(`/pedidos/aceitos/${user.idContratado}`);
                setPedidos(response.data || []);
            } catch (err) {
                setError('Erro ao carregar pedidos');
                console.error('Erro ao carregar pedidos:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPedidos();
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

    return (
        <View style={styles.container}>
    
      <TouchableOpacity>
        <AntDesign
          name="leftcircle"
          size={55}
          color="#0000"
          style={{ marginLeft: 1,left: 1, zIndex:10}}
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

                            <TouchableOpacity
                                style={styles.botaoConversar}
                                onPress={() => iniciarPedido(pedido.idSolicitarPedido)}
                            >
                                <Text style={styles.conversar}>Iniciar</Text>
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

                                <Staps pedido={pedidoSelecionado}/>

                         

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
