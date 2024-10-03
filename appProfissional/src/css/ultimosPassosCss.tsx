import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({


    containerPrincipal: {

        height: 100,
        backgroundColor: '#004AAD',
        flex: 1,
        alignItems: 'center',
    },
    ultimo: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '900',
        top: 95,
        right:45
    },
    passos: {
        color: '#F6A059',
    },
    acabando: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '900',
        top: 110,
        right:35
    },
    circulo: {
        bottom: 15,
        width: 190,
        height: 190,
        backgroundColor: 'white',
        borderRadius: 925,
        marginTop: 145,
        borderWidth: 7,
        borderColor: '#F6A059',
        left:5
    },
    container2: {

    },
    voce: {
        fontWeight: '900',
        color: 'white',
        fontSize: 18,
        top: 35,
        right:55
    },

    container3: {

    },
    promova: {
        fontWeight: '900',
        color: 'white',
        fontSize: 18,
        top: 80,
        right:20
    },
    buttonEnviar: {
        top: 175,
        height: 50,
        width: 160,
        borderRadius: 25,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.3,
    },
    buttonText:{
        fontWeight: '500',
        color: 'white',
        fontSize: 15,
        top: 140,
        zIndex:10
    }
});
export default styles;