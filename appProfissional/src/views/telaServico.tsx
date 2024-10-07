import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import api from '../../axios'; // Importa a instância do Axios
import myContext from '../functions/authContext';

// Define o tipo Pedido
interface Contratante {
  nomeContratante: string;
}

interface Pedido {
  idSolicitarPedido: number;
  descricaoPedido: string;
  contratante: Contratante;
}

const TelaServico: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]); // Tipamos o estado pedidos como uma lista de Pedido
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Acessando o contexto do usuário
  const { user } = useContext(myContext);

  // Função para buscar pedidos pendentes
  const fetchPedidosPendentes = async () => {
    if (!user || !user.idContratado) {
      // Tratamento de erro se idContratado não estiver definido
      Alert.alert('Erro', 'ID do contratado não encontrado.');
      console.error('ID do contratado não encontrado.');
      return;
    }

    setLoading(true);
    try {
      const idContratado = user.idContratado;
      const response = await api.get(`/profissional/${idContratado}/pedidos`);
      setPedidos(response.data); 
    } catch (error) {
      console.error('Erro ao buscar pedidos pendentes:', error);
      Alert.alert('Erro', 'Falha ao buscar pedidos.');
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Chama a função ao montar o componente
  useEffect(() => {
    fetchPedidosPendentes();
  }, [user]); // Chama a função sempre que o `user` mudar

  // Função para aceitar ou recusar o pedido
  const responderPedido = async (idPedido: number, acao: string) => {
    try {
      const response = await api.post(`/profissional/pedido/${idPedido}/responder`, { acao });
      Alert.alert('Sucesso', `Pedido ${acao} com sucesso!`);
      fetchPedidosPendentes(); // Atualiza a lista de pedidos após a resposta
    } catch (error) {
      console.error('Erro ao responder pedido:', error);
      Alert.alert('Erro', `Falha ao ${acao} o pedido.`);
    }
  };

  return (
    <ScrollView>
      {loading ? (
        <Text>Carregando...</Text>
      ) : pedidos.length === 0 ? (
        <Text>Nenhum pedido pendente.</Text> // Feedback se não houver pedidos
      ) : (
        pedidos.map((pedido, i) => (
          <View key={i}>
            <Text>{pedido.descricaoPedido}</Text>
            <Text>{pedido.contratante.nomeContratante}</Text> {/* Agora o TypeScript reconhece contratante */}
            <TouchableOpacity onPress={() => responderPedido(pedido.idSolicitarPedido, 'aceito')}>
              <Text>Aceitar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => responderPedido(pedido.idSolicitarPedido, 'recusado')}>
              <Text>Recusar</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
      {error && <Text style={{ color: 'red' }}>Ocorreu um erro ao carregar os pedidos.</Text>}
    </ScrollView>
  );
};

export default TelaServico;
