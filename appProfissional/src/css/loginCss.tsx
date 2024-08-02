import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },

      help:{
        width:300,
        height:300,
       
      },
      buttons:{
        width:'100%',
        
      },
      itensButtons:{
        position:'relative',
        alignItems:'center',
        lineHeight:80,
      },
      input: {
        position:'relative',
        
        height: 45,
        borderColor: '#004AAD', // Cor da borda em azul
        borderWidth: 4,
        borderRadius: 20,
        marginBottom: 20,
        borderStyle: 'solid',   // Define o estilo da borda
        width: '80%',
        color: '#000', // Cor do texto em azul
        zIndex:111,
      },
      inputFocused:{
     position:'absolute',
        fontSize:20,
        color:'#FF8F49',
        margin:0,
        marginLeft:20,
        backgroundColor:'#000'
        
      },
      
      label:{
      position:'relative',
      fontSize:18,
      color:'#FF8F49',

      },
   
   
});

export default styles;
