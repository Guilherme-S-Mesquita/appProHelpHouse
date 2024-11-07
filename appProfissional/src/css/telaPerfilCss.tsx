import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerPai: {
      backgroundColor: '#ede6e6',
    },
    containerMae: {
        backgroundColor: '#ffff',
        width: 500,
        height: 955,
        borderRadius: 100,
        right: 39,
        top: 95,
        zIndex:1
    },
    botao1: {
        alignItems: 'center',
        backgroundColor: '#00126f',
        width: '100%',
        height: 355,
        borderRadius:3,
        zIndex:-10,
        bottom: 1111,
    },
    botaoText1: {
        color: '#FFFF',
        top:150,
        left:49
    },
    ImgUser:{
        width: 140,
        height: 135,
        borderRadius:80,
        left:30,
        zIndex:10,
       top:185
      },
      botao2: {
        alignItems: 'center',
        backgroundColor: '#004aad',
        width:155,
        height:35,
        left:255,
        borderRadius:80,
        top:40,
        zIndex:10
    },
    botaoText2: {
        color: '#FFFF',
        top:9,
        fontFamily:'bold',
        fontWeight: '900',
    },
    nomeUsuario: {
        color: 'black',
        fontFamily:'bold',
        fontWeight: '700',
        fontSize: 25,
        top:70,
        left:60
      },
      profissoesUser:{
        color: 'black',
        fontFamily:'bold',
        fontWeight: '500',
        fontSize: 15,
        top:110,
        left:53,
        },
      area:{
        color: 'black',
        fontFamily:'bold',
        fontWeight: '700',
        fontSize: 12,
        top:100,
        left:55
      },
      zonaUser:{
        top:132,
        left:55,
        color: 'black',
        fontFamily:'bold',
        fontWeight: '500',
      },
      zona:{
        color: 'black',
        fontFamily:'bold',
        fontWeight: '600',
        fontSize: 15,
        top:125,
        left:75
      },
      mim:{
        color: 'black',
        fontFamily:'bold',
        fontWeight: '700',
        fontSize: 12,
        top:130,
        left:55 
      },
      descUser:{
        color: 'black',
        fontFamily:'bold',
        fontWeight: '500',
        fontSize: 15,
        top:139,
        left:55 
      },
      localiza:{
        height:35,
        width:25,
        left:50,
        top:152
      },
});
export default styles;
