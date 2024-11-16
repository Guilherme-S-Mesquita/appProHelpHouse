import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerPrincipal: {

        height: 100,
        backgroundColor: '#004AAD',
        flex: 1,
        alignItems: 'center',
    },
     containerProtifolio: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 70,
  },
  portfolioItem: {
    width: 110,
    height: 120,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  imgPortifilio: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  IconPor: {
    position: 'absolute',
    top: 90,
    right: 10,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

    ultimos: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '900',
        top: 95,
        zIndex:1,
        right:45
    },
    passos: {
        color: '#FF914D',
    },
    acabando: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '900',
        top: 100,
        right: 35,
        zIndex:2
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
        flex: 1,
        top:35
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgPerfil: {
        borderRadius: 100,
        width: 190,
        height: 190,
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
        height: 50,
        backgroundColor: '#FF914D',
        padding: 10,
        borderRadius: 25,
        marginTop: 20,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.3,
        bottom: 95,
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
        top: 99,
        right: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
        right:6
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