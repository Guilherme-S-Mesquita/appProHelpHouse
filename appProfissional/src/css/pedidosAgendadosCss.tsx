import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E9E9E7',
        paddingTop: 20,
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

agendamentos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    backgroundColor: 'white',
    borderRadius: 17,
    width: 380,
    marginBottom: 20,
},
textoAgendamento: {
    color: '#004AAD',
    fontSize: 24,
    fontWeight: 'bold',
},
cartaoSolicitação: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: 360,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
},
tituloSolicitação: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004AAD',
    marginBottom: 8,
},
cliente: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF8F49',
    marginBottom: 4,
},
nomeCliente: {
    color: '#000',
},
localizacao: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
},
doisKm: {
    color: '#FF8F49',
},
data: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#004AAD',
    marginBottom: 4,
},
diaHora: {
    color: '#000',
},
situaçãoPagamento: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#004AAD',
    marginBottom: 10,
},
sinal: {
    color: '#000',
},
botaoConversar: {
    backgroundColor: '#004AAD',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 15,
},
conversar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
},
 // Estilos do Modal
 modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo com transparência
},
modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#005EB8',
    marginBottom: 8,
},
modalCliente: {
    fontSize: 16,
    color: '#ff6600',
    marginBottom: 4,
},
modalLocalizacao: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
},
modalSituacao: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
},
modalStatus: {
    fontSize: 16,
    color: '#005EB8',
    fontWeight: 'bold',
    marginBottom: 16,
},
botaoFechar: {
    backgroundColor: '#005EB8',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
},
textoBotaoFechar: {
    color: '#fff',
    fontWeight: 'bold',
},
});
export default styles;