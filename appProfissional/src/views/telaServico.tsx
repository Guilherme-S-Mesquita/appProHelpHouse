import React from 'react';
import { View, Text, TouchableOpacity,Image} from 'react-native';
import styles from '../css/telaServicoCss';
import Imagens from '../../img/img';


const TelaServico: React.FC <{ navigation: any }> = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
      <Image source={Imagens.iconFiltro} style={styles.filtroImg} />
      </View>
       
      <View style={styles.containerGanhos}>
      <Text style={styles.ola}>Olá, <Text style={styles.nomeUsuario}>José Claúdio</Text></Text>
        <Text style={styles.ganhos}>R$1250 <Text style={styles.periodoGanhos}>Nos últimos <Text style={styles.trintaDias}>30 dias</Text></Text></Text>
        <Image source={Imagens.jesus} style={styles.jesusImg} />
        <Text style={styles.localizacao}>São Paulo, raio de <Text style={styles.oitoKm}>8km</Text></Text>
        <TouchableOpacity style={styles.botaoAlterarRaio2}>
          <Text style={styles.botaoAlterarRaio1}>Alterar raio</Text>
        </TouchableOpacity>
        <Text style={styles.servicosPendentes}>Você tem <Text style={styles.seteServicos}>7 serviços</Text> para hoje</Text>
      </View>

      <View style={styles.containerNovosPedidos}>
        <View style={styles.azul}>
        <Text style={styles.tituloNovosPedidos}>Novos Pedidos</Text>
        </View>
          <View style={styles.cartaoSolicitacao}>
            <Text style={styles.tituloSolicitacao}>Pintura de comôdos</Text>
           
                <Text style={styles.clienteSolicitacao}>Mariana Silva</Text>
                <Text style={styles.localizacaoSolicitacao}><Image source={Imagens.iconLocalizacao} style={styles.locImg}/>São Paulo, Guaianases.<Text style={styles.doisKm}> Á 2km de você</Text></Text>
                <View style={styles.containerDesc}>
                  <Text style={styles.desc}>Descrição:</Text>
                  <Text style={styles.breveDesc}>Preciso de pintura na parte de fora de minha casa, gostaria do serviço realizado até dia 11/10.</Text>
                  <TouchableOpacity style={styles.botaoConversar}>
                    <Text style={styles.conversar}>Conversar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.botaoNegar}>
                    <Text style={styles.negar}>Negar</Text>
                  </TouchableOpacity>
                </View>
              
          </View>
          <View style={styles.cartaoSolicitacao2}>
          <Text style={styles.tituloSolicitacao2}>Montar Guarda-roupa</Text>

          </View>
      </View>

      <View style={styles.barraNavegacao}>
        <TouchableOpacity style={styles.itemNavegacao}>
        <Image source={Imagens.iconHome} style={styles.homeImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemNavegacao}>
        <Image source={Imagens.iconMais} style={styles.maisImg} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemNavegacao}>
        <Image source={Imagens.iconChat} style={styles.chatImg} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemNavegacao}>
        <Image source={Imagens.iconPerfil} style={styles.perfilImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TelaServico;