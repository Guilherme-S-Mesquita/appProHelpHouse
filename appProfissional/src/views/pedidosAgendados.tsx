import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, ActivityIndicator } from 'react-native';
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

const PedidosAgendados: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user } = useContext(myContext);

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const response = await api.get('/pedidos/aceitos');
                setPedidos(response.data); // Armazena os pedidos aceitos no estado
            } catch (err) {
                setError('Erro ao carregar pedidos');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPedidos();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text style={{ color: 'red' }}>{error}</Text>;
    }

    return (
        <View style={styles.container}>

            <View style={styles.container2}>
                <View style={styles.agendamentos}>
                    <TouchableOpacity>
                        <Text style={styles.textoAgendamento}>Agendados</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.textAndamento}>Em andamento</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cabeçalhoPedido}>
                    <Text style={styles.pedido}>Pedidos</Text>
                    <Image source={Imagens.iconFiltro} style={styles.filtro} />
                </View>
            </View>

            <ScrollView>
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

                        <TouchableOpacity style={styles.botaoConversar}>
                            <Text style={styles.conversar}>Iniciar</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
};

export default PedidosAgendados;
