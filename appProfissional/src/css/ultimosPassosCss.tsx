import { StyleSheet, ImageStyle } from 'react-native';
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
        right:32
    },
    passos: {
        color: '#F6A059',
    },
    acabando: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '900',
        top: 110,
        right:25
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
        
    },
    container2: {

    },
    voce: {
        fontWeight: '900',
        color: 'white',
        fontSize: 18,
        top: 35
    },

    container3: {

    },
    promova: {
        fontWeight: '900',
        color: 'white',
        fontSize: 18,
        top: 80,
    },
    buttonEnviar: {
        left: 75,
        top: 275,
        height: 50,
        width: 160,
        borderRadius: 25,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.3,

    },
    button2: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 5,
        margin: 10,
      },
      buttonText2: {
        color: 'white',
        fontSize: 16,
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 50,
      } as ImageStyle,
});
export default styles;
