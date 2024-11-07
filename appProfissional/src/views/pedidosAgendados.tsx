import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, ActivityIndicator, Modal } from 'react-native';
import styles from '../css/pedidosAgendadosCss';
import Imagens from '../../img/img';
import api from '../../axios';
import myContext from '../functions/authContext';

interface Contratante {
    nomeContratante: string;
    bairroContratante: string;
    cidadeContratante: string;
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

const PedidosAgendados: React.FC<{ route: any; navigation: any }> = () => {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [pedidoSelecionado, setPedidoSelecionado] = useState<Pedido | null>(null);
    const { user } = useContext(myContext);
    const [pedido, setPedido] = useState<Pedido | null>(null)

    useEffect(() => {
        if (!user?.idContratado) return;

        const fetchPedidos = async () => {
            try {
                const response = await api.get(`/pedidos/aceitos/${user.idContratado}`);
                setPedidos(response.data);
            } catch (err) {
                setError('Erro ao carregar pedidos');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPedidos();
    }, [user?.idContratado]);
    const iniciarPedido = async (idSolicitarPedido: number) => {
        console.log("Iniciando pedido com ID:", idSolicitarPedido); // Verifique o ID
        try {
            const response = await api.patch(`/pedidos/${idSolicitarPedido}/andamento/`);
            console.log("Resposta da API:", response.data); // Log de resposta
            setPedidoSelecionado(response.data.pedido);

            setModalVisible(!modalVisible);

            console.log("Estado de modalVisible após set:", modalVisible); // Confirme o estado após set
            Alert.alert("Sucesso", "Pedido está em andamento!");
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
            <View style={styles.agendamentos}>
                <Text style={styles.textoAgendamento}>Agendamentos</Text>
                <View style={styles.cabeçalhoPedido}>
                    <Text style={styles.pedido}>Pedidos</Text>
                    <Image source={Imagens.iconFiltro} style={styles.filtro} />
                </View>
            </View>

            {pedidos.map((pedido) => (
                <View key={pedido.idSolicitarPedido} style={styles.cartaoSolicitação}>
                    <Text style={styles.tituloSolicitação}>{pedido.tituloPedido}</Text>
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
                            <Text style={styles.situaçãoPagamento}>
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
            ))}

            {modalVisible && (
              <Modal
              visible={modalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setModalVisible(false)}
          >
              <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                      {pedidoSelecionado && pedidoSelecionado.contratante ? (
                          <>
                              <Text style={styles.modalTitle}>{pedidoSelecionado.tituloPedido}</Text>
                              <Text style={styles.modalCliente}>
                                  Cliente: {pedidoSelecionado.contratante.nomeContratante}
                              </Text>
                              <Text style={styles.modalLocalizacao}>
                                  {pedidoSelecionado.contratante.cidadeContratante}, {pedidoSelecionado.contratante.bairroContratante}
                              </Text>
                              <Text style={styles.modalSituacao}>
                                  Situação do pagamento: {pedidoSelecionado.contrato?.forma_pagamento || "Informação indisponível"} - R$ {pedidoSelecionado.contrato?.valor || "0.00"}
                              </Text>
                              <Text style={styles.modalStatus}>Status: Em andamento</Text>
          
                              <TouchableOpacity
                                  style={styles.botaoFechar}
                                  onPress={() => setModalVisible(false)}
                              >
                                  <Text style={styles.textoBotaoFechar}>Fechar</Text>
                              </TouchableOpacity>
                          </>
                      ) : (
                          <Text>Informações do pedido estão indisponíveis.</Text>
                      )}
                  </View>
              </View>
          </Modal>
          
            )}

        </View>
    );
};

export default PedidosAgendados;
