import { StyleSheet } from 'react-native';
import endereco from '../../models/endereco';

const styles = StyleSheet.create({
    background: {
        flex: 1,

    },
    fundoBranco: {
        backgroundColor: '#fff',
        width: 350,
        borderRadius: 25,

        marginLeft: 39,
        height: 680
    },

    container: {
        marginLeft: 30,
        marginTop: 30,
        right: 15,
        bottom: 20
    },
    Textconfiguracao: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffff',
        marginLeft: 65,
        bottom: 30,
    },
    TextmeuDados: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#004aad',
        left: 89,
        top: 12
    },
    cep: {
        fontSize: 15,
        color: 'black',
    },
    dados: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#004aad',
        marginTop: 10,
    },
    dadosCli: {
        marginTop: 5,
        fontSize: 16,
    },
    cartao: {

    },
    nomeCartao: {
        fontSize: 16,
        fontWeight: 'bold',
        top: 3,
        marginLeft: 10
    },
    numeroCartao: {
        marginLeft: 50,
        bottom: 20
    },
    adicionar: {
        fontWeight: 'bold',
        bottom:10
    },
    endereco: {
        marginTop: 5,
        fontSize: 14,
    },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        flex: 1
    },
    saveButton: {
        width: 145,
        height: 50,
        borderRadius: 25,
        marginTop: 20,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.3,
        backgroundColor: '#004aad',
        padding: 15,
        alignItems: 'center',
        left:85,
        bottom:1
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    }


});

export default styles;
