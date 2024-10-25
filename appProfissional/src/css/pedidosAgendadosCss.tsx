import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E9E9E7',
},
cabeçalhoPedido:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 9,
    backgroundColor:'#004AAD',
    bottom:35,
    borderRadius:17,
    width:404,
    right:153
},
pedido:{
    color:'#fff',
    fontSize:28,
    fontWeight:'bold',
    left:9
},
filtro:{
height:25,
width:25,
right:20
},
agendamentos:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 9,
    backgroundColor:'white',
    top:88,
    borderRadius:17,
    width:404,
    right:-1
},
textoAgendamento:{
    color:'#F8C64F',
    fontSize:20,
    fontWeight:'bold',
    left:9,
    top:12
},
cartaoSolicitação:{
    backgroundColor:'#fff',
    borderRadius:15,
    width:374,
    height:210,
    top:135,
    left:16
},
tituloSolicitação:{
    fontSize: 24.5,
    fontWeight: 'bold',
    color:'#004AAD',
    top:14,
    left:60
},
cliente:{
    fontSize: 17,
    fontWeight: 'bold',
    color:'#FF8F49',
    top:19,
    left:39
},
nomeCliente:{
    fontSize: 17,
    fontWeight: 'bold',
    color:'black',
    top:20,
},
localizacao:{
    fontSize: 14,
    fontWeight: 'bold',
    color:'black',
    top:28,
    left:40
},
doisKm:{
    fontSize: 14,
    fontWeight: 'bold',
    color:'#FF8F49',
    top:28,
    left:40
},
data:{
    fontSize: 14,
    fontWeight: 'bold',
    color:'#004AAD',
    top:38,
    left:40
},
diaHora:{
    fontSize: 14,
    fontWeight: 'bold',
    color:'black',
},
situaçãoPagamento:{
    fontSize: 14,
    fontWeight: 'bold',
    color:'#004AAD',
    top:47,
    left:40
},
sinal:{
    fontSize: 14,
    fontWeight: 'bold',
    color:'black',
},
botaoConversar: {
    backgroundColor: '#004AAD',
    padding: 7,
    borderRadius: 65,
    top:63,
    width:100,
    left:132
  },
  conversar:{
    color: 'white',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:14
  },
});
export default styles;