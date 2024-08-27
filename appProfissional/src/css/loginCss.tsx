import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },

      title: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',    
        height:'14%'
      },
      titulo: {
        color: '#004AAD',
        fontSize: 30,
        fontWeight: '900',
        top:20
      },

      help:{
        width:300,
        height:300,
      },
     input:{
      width:280,
      height:60,
      marginBottom:40,
     },
     button:{
      position: 'relative',
      top: '3%',
      backgroundColor: '#FF914D',
      shadowColor: 'black',
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 9 },
      shadowOpacity: 0.5,
      elevation: 5,
      borderRadius: 150,
      width:130,
      color:'#004AAD',


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
      conta:{
          marginTop:'39%'
      },
      helpText:{
        color:'#004AAD'
      },
      houseText:{
        color:'#F6A059'
      },
      buttonCad:{
        marginTop:'10%',
        width:160,
        color:'#004AAD'
      },
      // branco:{
      //   backgroundColor:'#F5FCFF',
      //   left:'9%',
      //   height:'8%',
      //   width:'38%',
      //   top:-55,
      // },
  

});

export default styles;
