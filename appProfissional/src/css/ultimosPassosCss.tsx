import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    containerCapaFundo: {
        justifyContent:'center',
        alignItems:'center',
    },
    capaFundo:{
        width:450,
        height:250,
    },

    //img do perfil
    containerImgPerfil:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
       
    },
    imgPerfil: {
        borderRadius: 100,
        width: 150,
        height: 150,
        marginLeft:30,
        bottom:120
    },

    buttonEditarPerfil:{
        backgroundColor:'#004aad',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius:20,
        marginLeft:220,
        marginTop:25,
        fontWeight:'bold'
    },
    textButton:{
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        fontSize:17
      },

      //nome, localizacao 
      nome:{
        fontSize:25,
        fontWeight:'bold',
        color:'black',
        bottom: 110,
        marginTop:15,
        marginLeft:20
    },
    textLocalizacao:{
        bottom: 110,
        marginLeft:20,
        marginTop:5,
    },
    textBiografia:{
        bottom: 110,
        marginLeft:20,
        marginTop:10,
        fontWeight:'bold',
    },

    //a partir da parte Veja mais 
    vejaMais:{
        fontSize:15,
        fontWeight:'bold',
        color:'black',
        bottom: 110,
        marginTop:40,
        marginLeft:25
    },

    containerVerical:{
    justifyContent:'center',
    flexDirection:'row',
    bottom: 90,
   
    },

    fotosRolagem:{
        width:150,
        height:150,
        marginLeft:15
    },
    fotosRolagem2:{
        width:150,
        height:150,
        marginLeft:10
    },

    //Avaliaçoes
    containerBase:{
        width:390,
        height:80,
       // backgroundColor:'red',
        bottom: 90,
        marginLeft:20,
        
    },

    margin:{
        marginTop:15,
    },

    imgAvaliacao:{
        width:70,
        height:70,
        borderRadius:70,
    },

    nomeAvaliador:{
        marginLeft:80,
        bottom:55,
        fontWeight:'bold',
        fontSize:17
    },

    textAvaliacao:{
        marginLeft:80,
        bottom:50,
        fontWeight:'bold',
        fontSize:12
    },

    modalBackground: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)', // Fundo escuro com opacidade
        paddingTop: 5, 
    },

    
    modalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    modalText: {
        fontSize: 18,
        marginBottom: 15,
        fontWeight: 'bold',
    },

    inputModal: {
        borderBottomWidth: 1,
        borderBottomColor: '#004aad',
        width: 200,
        marginBottom: 15,
    },

    buttonModal: {
        backgroundColor: '#004aad',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 10,
    },

    
});

export default styles;
