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
        backgroundColor:'#004AAD',
        top:40,
        borderRadius:45,
        width:384,
        left:5
      },
      ola: {
        fontSize: 24,
        top:3,
      },
      nomeUsuario: {
        color: '#FFA500',
        fontFamily:'bold',
        fontWeight: '700',
      },
      containerGanhos: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        margin: 10,
        top:55,
        height:250
      },
      ganhos: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#4CAF50',
        top:19,
      },
      periodoGanhos: {
        fontSize: 15,
        color: 'black',
      },
      trintaDias:{
        color:'F6A059'
      },
      jesusImg:{
        width:60,
        height:60,
        borderRadius:80,
        left:260
      },
      localizacao: {
        top:-33,
        fontSize:14,
        left:5,
        color:'black',
        fontWeight:'bold'
      },
      oitoKm:{
        color:'#E60012'
      },
      botaoAlterarRaio2: {
        backgroundColor: '#004AAD',
        padding: 10,
        borderRadius: 65,
        top:-3,
        width:150,
        left:55
      },
      botaoAlterarRaio1: {
        color: 'white',
        textAlign: 'center',
        fontWeight:'bold',
      },
      servicosPendentes: {
        top: 32,
        left:31,
        fontSize:18,
        fontWeight:'bold'
      },
      seteServicos:{
        color:'#F6A059',
      },
      containerNovosPedidos: {
        padding: 20,
        top:105,  
        backgroundColor:'#004AAD',
        height:480,
        width:350,
        left:22,
        borderRadius:25
      },
      azul:{
        top:-45,  
        backgroundColor:'#004AAD',
        left:-20,
        width:170,
        height:200,
        borderRadius:15
      },
      tituloNovosPedidos: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'white',
        top:8,
        left:21
      },
      cartaoSolicitacao: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        height:280,
        bottom:195
      },
      tituloSolicitacao: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#004AAD',
        bottom:7
      },
      clienteSolicitacao: {
        color:'black',
        fontWeight:'bold',
        fontSize:16.5,
        bottom:1.5
      },
      localizacaoSolicitacao: {
        color: 'black',
        fontWeight:'bold',
        fontSize:12,
        top:4
      },
      doisKm:{
        color: '#545454',
        fontWeight:'bold',
        fontSize:12,
        top:4,
      },
      containerDesc:{
      backgroundColor:'#fff',
      borderRadius:10,
      height:180,
      width:282,
      top:15,
      },
      desc:{
        color: '#004AAD',
        fontWeight:'bold',
        fontSize:17,
        left:15,
        top:13
      },
      breveDesc:{
        color:'black',
        fontWeight:'bold',
        fontSize:14,
        top:28,
        left:21,
        width:240
      },
      botaoConversar: {
        backgroundColor: '#004AAD',
        padding: 7,
        borderRadius: 65,
        top:60,
        width:100,
        left:25
      },
      conversar:{
        color: 'white',
        textAlign: 'center',
        fontWeight:'bold',
        fontSize:14
      },
      botaoNegar:{
        backgroundColor: '#94030E',
        padding: 6.5,
        borderRadius: 65,
        top:30,
        width:100,
        left:153
      },
      negar:{
        color: 'white',
        textAlign: 'center',
        fontWeight:'bold',
        fontSize:14
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
