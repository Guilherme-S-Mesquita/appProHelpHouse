import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, ActivityIndicator } from 'react-native';
import styles from '../css/telaServicoCss';
import Imagens from '../../img/img';
import myContext from '../functions/authContext';
import api from '../../axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Contratante {
  nomeContratante: string;
  bairroContratante:string;
  cidadeContratante:string;
  idContratante:string;
}

interface Pedido {
  idSolicitarPedido: number;
  descricaoPedido: string;
  tituloPedido:string;
  contratante: Contratante;
}

const TelaServico: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useContext(myContext);
  const [token, setToken] = useState<string | null>(null);


  // Busca o token armazenado no AsyncStorage
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

  const getProPedidos = async (idContratado: string) => {
    try {
      console.log('Fazendo requisição para ID:', idContratado);
      const response = await api.get(`/profissional/${idContratado}/pedidos`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data)
      return response.data;
    } catch (error: any) {
      console.error('Erro ao buscar pedidos:', error.response ? error.response.data : error.message);
      throw new Error(error.response?.data?.error || 'Erro ao buscar pedidos.');
    }
  };

  useEffect(() => {
    const fetchPedidos = async () => {
      if (!user || !user.idContratado) {
        Alert.alert('Erro', 'ID do contratado não encontrado ou usuário não autenticado.');
        return;
      }

      if (!token) {
        Alert.alert('Erro', 'Token de autenticação não encontrado.');
        return;
      }

      setLoading(true);
      try {
        const pedidosData = await getProPedidos(user.idContratado);
        await console.log('Dados dos pedidos:', pedidosData);
        setPedidos(Array.isArray(pedidosData) ? pedidosData : []);
        
      } catch (error: any) {
        console.error('Erro ao buscar pedidos:', error);
        setError(error.message || 'Ocorreu um erro ao carregar os pedidos.');
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, [user, token]);


  const createChatRoom = async (idContratante: string, idContratado: string, navigation: any) => {
    if (!idContratante || !idContratado) {
      Alert.alert('Erro', 'ID do contratante ou contratado não encontrado.');
      return;
    }
  
    try {
      const response = await api.post(`/chat-room/${idContratante}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      const roomId = response.data.chat_room?.id;
  
      // Navegar para a tela de chat se a sala de chat for criada
      if (roomId) {
        navigation.navigate('Chat', { roomId, });
        console.log(roomId)
      } else {
        Alert.alert('Erro', 'Não foi possível criar ou encontrar a sala de chat.');
      }
    } catch (error: any) {
      console.error('Erro ao criar ou buscar a sala de chat:', error.response ? error.response.data : error.message);
      Alert.alert('Erro', 'Houve um problema ao criar a sala.');
    }
  };
  


  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Image source={Imagens.iconFiltro} style={styles.filtroImg} />
      </View>

      <View style={styles.containerGanhos}>
        <Text style={styles.ola}>Olá, <Text style={styles.nomeUsuario}>{user.nomeContratado}</Text></Text>
        <Text style={styles.ganhos}>R$1250 <Text style={styles.periodoGanhos}>Nos últimos <Text style={styles.trintaDias}>30 dias</Text></Text></Text>
        <Image source={Imagens.jesus} style={styles.jesusImg} />
        <Text style={styles.localizacao}>{user.estadoContratado} <Text style={styles.oitoKm}>8km</Text></Text>
        <TouchableOpacity style={styles.botaoAlterarRaio2}>
          <Text style={styles.botaoAlterarRaio1}>Alterar raio</Text>
        </TouchableOpacity>
        <Text style={styles.servicosPendentes}>Você tem <Text style={styles.seteServicos}>7 serviços</Text> para hoje</Text>
      </View>
      <ScrollView>
  {loading ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : error ? (
    <Text style={{ color: 'red' }}>{error}</Text>
  ) : pedidos.length === 0 ? (
    <Text>Nenhum pedido pendente.</Text>
  ) : (
    pedidos.map((pedido) => (
      <View key={pedido.idSolicitarPedido} style={styles.containerNovosPedidos}>
        <View style={styles.azul}>
          <Text style={styles.tituloNovosPedidos}>Novos Pedidos</Text>
        </View>

        <View style={styles.cartaoSolicitacao}>
          
        <Text style={styles.tituloSolicitacao}> {pedido.tituloPedido} </Text>
          <Text style={styles.clienteSolicitacao}>
            {pedido.contratante?.nomeContratante ?? 'Nome do contratante não disponível'}
          </Text>
          <Text style={styles.localizacaoSolicitacao}>
            <Image source={Imagens.iconLocalizacao} style={styles.locImg}/>
            {pedido.contratante?.cidadeContratante ?? 'Estado não disponível'},{pedido.contratante?.bairroContratante ?? 'Bairro não disponível'}
          </Text>

          <View style={styles.containerDesc}>
            <Text style={styles.desc}>Descrição:</Text>
            <Text style={styles.breveDesc}>
              {pedido.descricaoPedido}
            </Text>

            <TouchableOpacity style={styles.botaoConversar} 
            onPress={()=>createChatRoom(pedido.contratante?.idContratante, user.idContratado, navigation )}>
              <Text style={styles.conversar}>Conversar</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.botaoNegar}>
              <Text style={styles.negar}>Negar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ))
  )}
</ScrollView>

    
    </View>

  );
};
export default TelaServico;


