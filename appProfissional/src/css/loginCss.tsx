import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%', // Ocupa 80% da largura do contêiner pai

  },

  title: {
    width: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '14%'
  },
  titulo: {
    color: '#004AAD',
    fontSize: 30,
    fontWeight: '900',
    top: 20
  },

  help: {
    width: 300,
    height: 300,
  },
  input: {
    width: 280,
    height: 60,
    marginBottom: 40,
  },
  button: {
    position: 'relative',
    top: 40,
    backgroundColor: '#FF914D',
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 150,
    width: 130,
    color: '#004AAD',
  },
  inputFocused: {
    position: 'absolute',
    fontSize: 20,
    color: '#fff',
    margin: 0,
    marginLeft: 20,
    backgroundColor: '#000'
  },
  label: {
    position: 'relative',
    fontSize: 18,
    color: '#fff',
  },
  conta: {
  marginTop:150,
    bottom: 45
  },
  helpText: {
    color: '#004AAD'
  },
  houseText: {
    color: '#F6A059'
  },
  buttonCad: {
    marginTop: 10,
    width: 130,
    color: '#004AAD',
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 150,
    bottom:25

  },
  errorMessage: {
    color: '#FF0000'
  },
  button3:{
    backgroundColor:'#FF8F49',
    borderRadius:25,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    width:160,  
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.5,
    
  },
  buttonText2:{
    color:'#F5FCFF',
    fontSize:18,
    fontWeight:'bold'
  },

  button2:{
    backgroundColor:'#004AAD',
    borderRadius:25,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    width:160,  
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.5,
    
  },


});

export default styles;
