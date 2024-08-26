import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
    overflow:'hidden' 
  },
  fundo: {

    height: '100%',
    width: '140%',
    backgroundColor: '#004AAD',
    position: 'absolute', 
    top: '20%',            
    left: '-19%',         
    borderRadius: 310,
    zIndex: -1,
    
  },
  scrollContainer: {

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
  containerCadastro: {
    width: '100%',
    height:'100%',
   flexDirection:'column' ,
    alignItems: 'center',  
     
  },
  titulo2:{
    color: '#fff',
    fontSize: 35,
    fontWeight: '900',
    top:65,
    marginBottom:-25

  },
  pessoais:{
        color:'#FF914D',
       
  },
  input:{
    width:280,
    height:60,
    top:60,
    position:'relative',
    
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
  separator: {
    marginHorizontal: 8,
    fontSize: 28,
    color: '#fff',
  },
  phoneSeparator: {
    fontSize: 30,
    color: '#fff',
  },
  phoneInput: {
    width: 30,
  },
  buttonEnviar:{
    position:'relative',
    width:145,
    left:60,
    top:55
  },
  nome:{
    fontWeight:'700',
    color: 'white',
    marginBottom:15,
    fontSize:18,
    right:20,
    top:125
    
  },
  sobrenome:{
    fontWeight:'700',
    color: 'white',
    marginBottom:15,
    fontSize:18,
    right:22,
    top:98
  },
  nascimento:{
    fontWeight:'700',
    color: 'white',
    fontSize:18,
    right:20,
    top:79
  },
  cpf:{
    fontWeight:'700',
    color: 'white',
    fontSize:18,
    right:20,
    top:70
  },
  telefone:{
    fontWeight:'700',
    color: 'white',
    fontSize:18,
    right:22,
    top:65
  },
  usuario:{
    fontWeight:'700',
    color: 'white',
    fontSize:18,
    right:20,
    top:65
  },
  senha:{
    fontWeight:'700',
    color: 'white',
    fontSize:18,
    right:20,
    top:65
  },
  roda:{

  },
  
});

export default styles;
