import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
      },
      ola: {
        fontSize: 18,
      },
      nomeUsuario: {
        color: '#FFA500',
        fontWeight: 'bold',
      },
      fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      containerGanhos: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        margin: 10,
      },
      ganhos: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4CAF50',
      },
      periodoGanhos: {
        fontSize: 14,
        color: '#666',
      },
      localizacao: {
        marginTop: 10,
      },
      botaoAlterarRaio2: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      botaoAlterarRaio1: {
        color: '#fff',
        textAlign: 'center',
      },
      servicosPendentes: {
        marginTop: 10,
      },
      containerNovosPedidos: {
        padding: 20,
      },
      tituloNovosPedidos: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      cartaoSolicitacao: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
      },
      tituloSolicitacao: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      clienteSolicitacao: {
        marginTop: 5,
      },
      localizacaoSolicitacao: {
        color: '#666',
      },
      precoSolicitacao: {
        color: '#4CAF50',
      },
      prazoSolicitacao: {
        fontStyle: 'italic',
      },
      barraNavegacao: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingVertical: 10,
      },
      itemNavegacao: {
        alignItems: 'center',
      },
    

});
export default styles;
