import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',     
  },
  fundo: {
    height: '100%',
    width: '140%',
    backgroundColor: '#004AAD',
    position: 'absolute', 
    top: '20%',            
    left: '-20%',         
    borderRadius: 250,
    zIndex: -1,
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
  },
  pessoais:{
        color:'#FF914D'
  },
});

export default styles;
