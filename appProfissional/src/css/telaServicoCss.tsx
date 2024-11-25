
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
      },
      cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5.5,
        backgroundColor:'#004AAD',
        top:55,
        borderRadius:17,
        width:402,
        height:42,
        left:14
      },
      filtroImg:{
        width:25,
        height: 25,
        left:355,
        position:'absolute'
      },
      tituloHome:{
        fontWeight:'700',
        fontSize:20,
        color:'#fff'
      },
      ola: {
        fontSize: 22,
        top:90,
        fontFamily:'bold',
        fontWeight: '600',
        left:80
      },
      nomeUsuario: {
        color: '#ff914d',
        fontFamily:'bold',
        fontWeight: '700',
      },
      containerGanhos: {
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 32,
        margin: 10,
        top:55,
        height:209,
        width:'90%',
        left:10
      },
      ganhos: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00BF63',
        top:20,
      },
      periodoGanhos: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
      },
      trintaDias:{
        color:'F6A059'
      },
      jesusImg:{
        width:75,
        height:75,
        borderRadius:80,
        left:300,
        top:40
      },
      localizacao: {
        fontSize:16,
        left:2,
        color:'black',
        fontWeight:'bold',
        top:25
      },
      oitoKm:{
        color:'#E60012'
      },
      botaoAlterarRaio2: {
        backgroundColor: '#004AAD',
        padding: 9,
        borderRadius: 65,
        width:190,
        left:70,
        top:55
      },
      botaoAlterarRaio1: {
        color: '#ffff',
        fontWeight:'bold',
        height:20,
        left:10,
      },
      servicosPendentes: {
        left:40,
        fontSize:18,
        fontWeight:'bold',
        top:71
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
        left:42,
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
        fontSize:13,
        top:5
      },
      locImg:{
        width:12,
        height:16,
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
      height:160,
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
        top:13,
        backgroundColor:'white'
      },
      itemNavegacao: {
        alignItems: 'center',
        bottom:12,
        width:300
      },
      homeImg:{
        width:30,
        height: 33,
        bottom:2,
        left:6
       },
      chatImg:{
        width:30,
        height: 45,
        left:8
      },
      maisImg:{
        width:32,
        height: 33,
        bottom:1,
        left:4
      }, 
      perfilImg:{
        width:25,
        height: 30,
        bottom:2,
        right:4
      },
      cartaoSolicitacao2: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        height:280,
        bottom:175
      }, 
      tituloSolicitacao2: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#004AAD',
        bottom:6
      },



});
export default styles;
