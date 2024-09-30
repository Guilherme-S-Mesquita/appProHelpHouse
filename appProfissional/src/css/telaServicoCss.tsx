import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
      },
      cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor:'#004AAD',
        top:40,
        borderRadius:45,
        width:399,
        left:5
      },
      ola: {
        fontSize: 24,
        fontFamily:'bold',
        fontWeight: '500',
      },
      nomeUsuario: {
        color: '#FFA500',
        fontFamily:'bold',
        fontWeight: '700',
      },
      fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      containerGanhos: {
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        margin: 10,
        top:55,
        height:250,
        width:380,
        alignContent:'center'
      },
      ganhos: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4CAF50',
        top:45
      },
      periodoGanhos: {
        fontSize: 16,
        color: 'black',
      },
      dias:{
        color:'#FFA500'
      },
      localizacao: {
        top:59,
        fontSize:15,
        left:5,
        color:'black',
        fontWeight:'bold'
      },
      km:{
        top:59,
        fontSize:15,
        left:5,
        color:'red',
        fontWeight:'bold'
      },
      botaoAlterarRaio2: {
        backgroundColor: '#004AAD',
        padding: 10,
        borderRadius: 65,
        top:83,
        width:150,
        left:55
      },
      botaoAlterarRaio1: {
        color: 'white',
        textAlign: 'center',
        fontWeight:'bold',
        
      },
      servicosPendentes: {
        top: 96,
        left:44,
        fontSize:18,
        fontWeight:'bold'
      },
      containerNovosPedidos: {
        padding: 20,
        top:95,  
        backgroundColor:'#004AAD',
        height:480,
        width:350,
        left:22,
        borderRadius:25
      },
      tituloNovosPedidos: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'white',
        bottom:10,
        left:14
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
        color:'#004AAD'
      },
      clienteSolicitacao: {
        marginTop: 3,
        color:'black',
        fontWeight:'bold',
        fontSize:15
      },
      localizacaoSolicitacao: {
        color: 'black',
        fontWeight:'bold',
        fontSize:13
      },
      precoSolicitacao: {
        color: '#4CAF50',
        fontSize:13,
        fontWeight:'bold'
      },
      prazoSolicitacao: {
        color:'black',
        fontWeight:'bold',
        fontSize:13
      },
      barraNavegacao: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingVertical: 10,
        top:24,
        backgroundColor:'white'
      },
      itemNavegacao: {
        alignItems: 'center',
      },
    

});
export default styles;
