import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../css/telaServicoCss';


const TelaServico: React.FC<{ navigation: any }> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>

      </View>

      <View style={styles.containerGanhos}>
        <Text style={styles.ola}>Olá,
          <Text style={styles.nomeUsuario}>José Claúdio</Text>
        </Text>

        <Text style={styles.ganhos}>R$1250
          <Text style={styles.periodoGanhos}>  Nos últimos <Text style={styles.dias}> 30 dias</Text>
          </Text>
        </Text>

        <Text style={styles.localizacao}>São Paulo, raio de <Text style={styles.km}> 8km</Text></Text>

        <TouchableOpacity style={styles.botaoAlterarRaio2}>
          <Text style={styles.botaoAlterarRaio1}>Alterar raio</Text>
        </TouchableOpacity>
        <Text style={styles.servicosPendentes}>Você tem 7 serviços para hoje</Text>
      </View>

      <View style={styles.containerNovosPedidos}>
        <Text style={styles.tituloNovosPedidos}>Novos Pedidos</Text>

        <View style={styles.cartaoSolicitacao}>
          <Text style={styles.tituloSolicitacao}>Pintura de comôdos</Text>

          <Text style={styles.clienteSolicitacao}>Mariana Silva</Text>
          <Text style={styles.localizacaoSolicitacao}>São Paulo, Guaianases. Á 2km de você</Text>
          <Text style={styles.precoSolicitacao}>Oferece em média: R$100,00 por hora</Text>
          <Text style={styles.prazoSolicitacao}>Prazo para Realização: Sexta-Feira, 16/08</Text>

        </View>
      </View>

      <View style={styles.barraNavegacao}>
        <TouchableOpacity style={styles.itemNavegacao}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemNavegacao}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemNavegacao}>
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemNavegacao}>
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TelaServico;