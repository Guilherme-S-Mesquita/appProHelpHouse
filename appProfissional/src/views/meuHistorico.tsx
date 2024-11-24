import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert, ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../axios';
import styles from '../css/meuHistoricoCss';
import myContext from '../functions/authContext';
import Imagens from "../../img/img";

interface Pedido {
  idSolicitarPedido: number;
  descricaoPedido: string;
  tituloPedido: string;
  andamentoPedido: string;
  contrato?: {
    valor: string;
    data: string;
    hora: string;
    forma_pagamento: string;
    status: string;
  };
}

const MeuHistorico: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useContext(myContext);

  useEffect(() => {
    const fetchPedidosFinalizados = async () => {
      try {
        const userId = user?.idContratante || user?.idContratado;
        const userType = user?.idContratante ? 'idContratante' : 'idContratado';

        if (!userId) {
          throw new Error('ID de usuário não encontrado.');
        }

        const response = await api.get(`/pedidos/finalizados`);
        setPedidos(response.data);
      } catch (err) {
        setError('Erro ao carregar pedidos finalizados.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPedidosFinalizados();
  }, [user]);

  return (

    <View style={styles.container}>
  <View style={styles.navContent}>
    <View style={styles.navbar}>
      <TouchableOpacity>
        <AntDesign
          name="leftcircle"
          size={30}
          color="#fff"
          style={{ marginLeft: 15 }}
          onPress={() => navigation.navigate('homeStack')}
        />
      </TouchableOpacity>
      <Text style={styles.textNav}>Pedidos</Text>
    </View>

    <TouchableOpacity style={styles.tabs}>
      <Text style={styles.Texttab1}>Finalizados</Text>
    </TouchableOpacity>
  </View>

  {loading ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : error ? (
    <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
  ) : pedidos.length === 0 ? (
    <Text style={{ marginTop: 20, textAlign: 'center' }}>Nenhum pedido finalizado encontrado.</Text>
  ) : (
    <ScrollView>
      {pedidos.map((pedido) => (
        <View key={pedido.idSolicitarPedido} style={styles.cardContainer}>
          <Text style={styles.cardTitle}>{pedido.tituloPedido}</Text>
          <Text style={styles.clienteName}>Status:</Text>
                  <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold', color: '#0044CC' }}>
                    {pedido.andamentoPedido || "Não definido"}
                  </Text>
          {pedido.contrato && (
            <>
              <Text style={styles.cardText}>Valor: R$ {pedido.contrato.valor}</Text>
              <Text style={styles.cardText}>Data: {pedido.contrato.data} às {pedido.contrato.hora}</Text>
              <Text style={styles.cardText}>Descrição: {pedido.descricaoPedido}</Text>
              <Text style={styles.cardText}>Forma de pagamento: {pedido.contrato.forma_pagamento}</Text>
            </>
          )}
        </View>
      ))}
    </ScrollView>
  )}
</View>



  );
};

export default MeuHistorico;
