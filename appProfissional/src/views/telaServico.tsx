import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, ActivityIndicator } from 'react-native';
import styles from '../css/telaServicoCss';
import Imagens from '../../img/img';
import myContext from '../functions/authContext';
import api from '../../axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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

const TelaServico: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {

  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [contadorPedidos, setContadorPedidos] = useState<number>(0);
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





  useEffect(() => {
    let isMounted = true; //ESSA VARIVAEL SERVER PARA VERIFICAR SE HÁ ALGUM PEDIDO
    let delay = 2000; 
  
    const fetchPedidosComPollingExponencial = async () => {
      if (!user || !user.idContratado || !token) return;
  
      try {
        const response = await api.get(`/profissional/${user.idContratado}/pedidos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        //SE REQUISIÇÃO FOR IGUAL A TRUE, ENTÃO BUSQUE DO BANCO E ATUALIZE AS INFO
        if (isMounted) {
          setPedidos(response.data.pedidos || []);// ATUALIZAÇÃO PEDIDO
          setContadorPedidos(response.data.contadorPedidos || 0);//ATUALIZAÇÃO CONTADOR
  
          // DELEY POSSIVEL DE UM PEDIDO AO OUTRO
          delay = 2000;
        }
      } catch (error:any) {
        console.error("Erro ao buscar pedidos:", error.message || error);
  
        // Incrementa o atraso ao ocorrer erro
        delay = Math.min(delay * 2, 30000); // Máximo de 30 segundos
      } finally {
        if (isMounted) {
          setTimeout(fetchPedidosComPollingExponencial, delay);
        }
      }
    };
  
    fetchPedidosComPollingExponencial();
  
    return () => {
      isMounted = false; // Limpa a montagem ao desmontar o componente
    };
  }, [user, token]);
  

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
  const meuHistorico = () => {
    navigation.navigate('meuHistorico');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.cabecalho}>
        <Text style={styles.tituloHome}>Meus Pedidos Pendentes</Text>
        <MaterialIcons name="filter-list-alt" size={24} color="white" style={styles.filtroImg} />
      </View>

      
        <Text style={styles.ola}>Olá, <Text style={styles.nomeUsuario}>{user.nomeContratado}</Text></Text>
        <Image
          source={{ uri: user.imagemContratado }}
          style={styles.jesusImg}
        />
        <View style={styles.containerGanhos}>
        <Text style={styles.periodoGanhos}>Seu faturamento: <Text style={styles.ganhos}>R${user.valorTotalRecebido} </Text></Text>
        <Text style={styles.localizacao}>Atuando em {user.cidadeContratado}</Text>
        <TouchableOpacity style={styles.botaoAlterarRaio2}>
          <Text style={styles.botaoAlterarRaio1}  onPress={meuHistorico}>historico dos serviços</Text>
        </TouchableOpacity>
        <Text style={styles.servicosPendentes}>Você tem <Text style={styles.seteServicos}> {contadorPedidos}</Text>  pedidos para hoje</Text>
      </View>

      
      
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : error ? (
          <Text style={{ color: 'red' }}>{error}</Text>
        ) : pedidos.length === 0 ? (
          <Text style={{ marginTop: 60, marginLeft: 20, fontWeight: 'bold', fontSize: 20, top:18}}>Nenhum pedido pendente.</Text>
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
                  <Image source={Imagens.iconLocalizacao} style={styles.locImg} />
                  {pedido.contratante?.cidadeContratante ?? 'Estado não disponível'},{pedido.contratante?.bairroContratante ?? 'Bairro não disponível'}
                </Text>

                <View style={styles.containerDesc}>
                  <Text style={styles.desc}>Descrição:</Text>
                  <Text style={styles.breveDesc}>
                    {pedido.descricaoPedido}
                  </Text>

                  <TouchableOpacity
                    style={styles.botaoConversar}
                    onPress={() => createChatRoom(
                      pedido.contratante?.idContratante,
                      user.idContratado,
                      navigation,
                      pedido.idSolicitarPedido // Corrected order
                    )}
                  >
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


