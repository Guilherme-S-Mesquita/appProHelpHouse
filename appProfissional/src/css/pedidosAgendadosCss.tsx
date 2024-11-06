import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E9E9E7',
        paddingTop: 20,
    },
    cabeçalhoPedido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 9,
        backgroundColor: '#004AAD',
        borderRadius: 17,
        width: 404,
        bottom: 15
    },
    pedido: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        left: 9,
    },
    filtro: {
        height: 25,
        width: 25,
        right: 20
    },
    agendamentos: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 9,
        backgroundColor: 'white',
        borderRadius: 17,
        width: 400,
        marginBottom: 20,
        top: 100,
        height: 80
    },
    textoAgendamento: {
        color: '#f8c64f',
        fontSize: 24,
        fontWeight: 'bold',
        zIndex: 10,
        top: 17,
        right:29,
    },
    textAndamento:{
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        zIndex: 10,
        top: 17,
       left:5
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
        top: 55
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
    container2:{
       bottom:39
    },
});
export default styles;