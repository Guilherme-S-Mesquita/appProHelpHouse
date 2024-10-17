import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    ultimos: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '900',
        top: 95,
        left: 25
    },
    passos: {
        color: '#FF914D',
    },
    acabando: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '900',
        top: 110,
        left: 25
    },
    background: {
        flex: 1,
        backgroundColor: '#004aad',  // Fundo azul
    },
    fundoAzul: {
        backgroundColor: '#004aad',  // Cor de fundo do container principal
        width: 350,
        borderRadius: 25,
        marginTop: '40%',
        marginLeft: 33,
        flex: 1
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgPerfil: {
        borderRadius: 100,
        width: 190,
        height: 180,
        justifyContent: 'center',
        bottom: 45,
        borderColor: '#fff',  // Borda branca para destacar o perfil
        borderWidth: 5,
        right: 25
    },
    nome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',  // Nome branco
        bottom: 65,
        marginTop: 15,
    },
    textLocalizacao: {
        bottom: 65,
        color: '#fff'  // Texto de localização branco
    },
    button: {
        width: 145,
        height: 45,
        backgroundColor: '#FF914D',
        padding: 10,
        borderRadius: 25,
        marginTop: 20,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.3,
        bottom: 85,
        left:120
    },
    buttonText: {
        color: '#FFFF',
        fontSize: 15,
        zIndex: 1,
        fontWeight: '700',
        top:5,
        left:19
    },
    cameraIcon: {
        position: 'absolute',
        top: 92,
        right: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 20,
        padding: 5,
        marginRight: 100
    },
    container2: {
        bottom: 250
    },
    voce: {
        fontWeight: '900',
        color: 'white',
        fontSize: 18,
        left: 15
    },
    container3: {
        bottom: 150,


    },
    promova: {
        fontWeight: '900',
        color: 'white',
        fontSize: 18,

    },
    buttonEnviar: {
        left: 75,
        height: 50,
        width: 160,
        borderRadius: 25,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.3,
        bottom: 25

    },
});

export default styles;