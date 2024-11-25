import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    containerPrincipal: {
        overflow: 'hidden',
        height: '109%',
        backgroundColor: '#004AAD',
        flex: 1,
        alignItems: 'center',

    },
    scrollView: {
        flex: 1, 
    },
    scrollViewContent: {
        flexGrow: 1, 
        alignItems: 'center', 
        padding: 20, 
    },
    emQuais: {
        color: '#004AAD',
        fontSize: 30,
        fontWeight: '900',
        bottom: 115,
        left: '25.6%',
        zIndex:10
    },
    areas: {
        color: '#F6A059',

    },
    voce: {

    },
    selecione: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        left: 50,
        bottom: 55
    },
    container2: {
        flex: 1 
    },
    meioCirculo: {
        width: 440,
        height: 385,
        backgroundColor: 'white',
        borderRadius: 925,
        marginTop: -230
    },
    pesquisa: {
        justifyContent: 'center',
        height: '3.8%',
        bottom: 45,

    },
    input: {
        left: 65,
        height: 40,
        width: 315,
        borderColor: 'white',
        fontSize: 16,
        top: 5,
        borderWidth: 1,
        borderRadius: 159,
        paddingHorizontal: 40,
        color: 'white',

    },
    lupa: {
        width: 24,
        height: 24,
        position: 'absolute',
        display: 'flex',
        zIndex: 1,
        bottom: 4,
        left: 80,
    },
    trabalhos: {
        bottom: 55,
    },

  linhaCima: {
        width: 90,
        height: 90,
        marginTop: 77,
        left: '15%',
        bottom:2,
        marginRight:2
    },
    linhaFisio:{
        width: 90,
        height: 90,
        marginTop: 77,
        right: 690,
        bottom:2,
        marginRight:2
    },
    linhaPersonal:{
        width: 90,
        height: 90,
        right: 789,
        top: 150,  
        marginRight:2
    },
    linhaBaixo:{
        width: 90,
        height: 90,
        right: 699,
        top: 150,  
        marginRight:2
    },
    aindaNao: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        bottom: 275,
        textAlign: 'center',
    },
    descricaoInput: {
        backgroundColor: '#588acd',
        borderRadius: 19,
        height: 70,
        width: 350,
        bottom: 240,
        left: 50,
        paddingHorizontal: 15,
        paddingBottom: 25,
        color: 'white',
        fontSize: 18,
         fontWeight: '600',
       zIndex:10
         
    },
    buttonEnviar: {
        width: 145,
        bottom: 365,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.3,
        elevation: 5,
        left:150
    },
    checkboxImage: {
        width: 80, 
        height: 80, 
        resizeMode: 'contain',
        marginTop: 10, 
    },
    flatList1: {
        marginHorizontal: 10, 
        alignItems: 'center', 
    },
    pontoPai:{
        flexDirection : 'row',
        justifyContent:'center',
        marginTop:20,
        bottom:300,
        zIndex:10
    },
    ponto:{
        width:10,
        height:10,
        borderRadius:4,
        marginHorizontal:4
    }
});
export default styles;
