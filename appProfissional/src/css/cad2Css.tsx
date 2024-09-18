import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#004AAD',
  },
  title: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '9%'
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
  },
  title3:{
    fontSize:15,
    marginTop:5,
    color:'#fff',
    fontWeight:'bold',
    },
    inputsCep:{
      flexDirection:'row',
    },
    icon:{
      color:'#fff',
    },
    title4:{
      fontSize:20,
      marginTop:5,
      color:'#fff',
      fontWeight:'bold',
      marginLeft:150,
      },
 
  legenda: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: '20%',
    marginTop: 15

  },
  legendaTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',


  },
  inputTempoTrabalhado: {
    display: 'flex',
    width: '30%',
    flexDirection: 'row',

  },
  containerCadastro: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',

  },
  titulo2: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '900',

  },
  pessoais: {
    color: '#FF914D'
  },
  input: {
    width: 280,
    height: 60,
    position: 'relative',
    top: 10,
    flexDirection: 'column',  // Esta linha pode ser removida se a direção for definida localmente
  },
  buttonText2:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  },

  inputRow: {
    flexDirection: 'row',  // Coloca os inputs em uma linha
    width: 190,      // Usa todo o espaço disponível
    alignItems: 'center',  // Alinha verticalmente os inputs
  },
  inputNum: {
    width: 80,
    marginLeft: 30,
    flexDirection: 'column'
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    width: 60,
    borderBottomWidth: 2,
    borderColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  containerButton: {
    width:'100%',
    height:'30%',
  
    display:'flex',
    position:'relative',
    top:'30%'
  },
  Buttons:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  
  buttonEnviar: {
  },

  buttonEnviar1:{
 
  
  },
  mapContainer: {
    flexDirection: 'column',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '45%'
  },

});

export default styles;
