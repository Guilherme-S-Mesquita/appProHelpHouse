import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import myContext from '../functions/authContext';
import api from '../../axios';

interface Contratante {
  nomeContratante: string;
}

interface Pedido {
  idSolicitarPedido: number;
  descricaoPedido: string;
  contratante: Contratante;
}

const TelaServico: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useContext(myContext);

  const [token, setToken] = useState<string | null>(null); // Adiciona um estado para o token

  // Busca o token armazenado no AsyncStorage
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const savedToken = await AsyncStorage.getItem('authToken');
        if (savedToken) {
          setToken(savedToken); // Armazena o token
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

  const getProPedidos = async (idContratado: string, token: string) => {
    try {
      console.log('Fazendo requisição para ID:', idContratado);
      const response = await api.get(`/profissional/${idContratado}/pedidos`, {
        headers: {
          Authorization: `Bearer ${setToken}`, // Use o token armazenado
          'Content-Type': 'application/json',
        },
      });
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
        const pedidosData = await getProPedidos(user.idContratado, token); // Passa o token corretamente
        setPedidos(pedidosData);
      } catch (error: any) {
        console.error('Erro ao buscar pedidos:', error);
        setError(error.message || 'Ocorreu um erro ao carregar os pedidos.');
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, [user, token]); // Dependências de user e token

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={{ color: 'red' }}>{error}</Text>
      ) : pedidos.length === 0 ? (
        <Text>Nenhum pedido pendente.</Text>
      ) : (
        pedidos.map((pedido) => (
          <View key={pedido.idSolicitarPedido}>
            <Text>{pedido.descricaoPedido}</Text>
            <Text>{pedido.contratante.nomeContratante}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default TelaServico;
