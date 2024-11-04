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

interface Pedido {
    idSolicitarPedido: number;
    descricaoPedido: string;
    tituloPedido: string;
    contratante: Contratante;
}

const PedidosAgendados: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
    // Recebe os parâmetros da rota
    const {  tipoServico, dataMarcada, valorCobrado, formaPagamento } = route.params;  
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
            <ScrollView>
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
                        <Text style={styles.data}>
                          Tipo de Serviço: {tipoServico || "Informação não disponível"}
                            </Text>
                            Cliente: <Text style={styles.nomeCliente}>{pedido.contratante.nomeContratante}</Text>
                        </Text>
                        <Text style={styles.localizacao}>
                            Localização: {pedido.contratante.cidadeContratante}, {pedido.contratante.bairroContratante}
                            <Text style={styles.doisKm}> À 2 km de você</Text>
                        </Text>
                        <Text style={styles.data}>
                            Data e hora: <Text style={styles.diaHora}>{dataMarcada}</Text>
                        </Text>
                        <Text style={styles.situaçãoPagamento}>
                            Situação do Pagamento: <Text style={styles.sinal}>{formaPagamento}</Text>
                            <Text style={styles.sinal}> Sinal R$ {valorCobrado}</Text>
                        </Text>
                        <TouchableOpacity style={styles.botaoConversar}>
                            <Text style={styles.conversar}>Conversar</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default PedidosAgendados;
