import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#004aad',  // Fundo azul
    },
    fundoAzul:{
        backgroundColor:'#004aad',  // Cor de fundo do container principal
        width:350,
        borderRadius:25,
        marginTop:'40%',
        marginLeft:33,
        flex:1
    },
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    imgPerfil: {
        borderRadius: 100,
        width: 150,
        height: 150,
        justifyContent: 'center',
        bottom: 65,
        borderColor: '#fff',  // Borda branca para destacar o perfil
        borderWidth: 5,
    },
    nome:{
        fontSize:28,
        fontWeight:'bold',
        color:'#fff',  // Nome branco
        bottom: 65,
        marginTop:15,
    },
    textLocalizacao:{
        bottom: 65,
        color: '#fff'  // Texto de localização branco
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
    cameraIcon: {
        position: 'absolute',
        top: 50,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 5,
        marginRight:100
    },
});

export default styles;
