import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#004AAD',
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
  },
  title3: {
    fontSize: 15,
    marginTop: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputsCep: {
    flexDirection: 'row',

  },
  icon: {
    color: '#fff',


   
     
  },
  buscarCep:{

  },
  title4: {
    overflow: 'hidden',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft:20

  },

  containerCadastro: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',

  },
  dados: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '900',
    top:70,
    

  },
  profissionais: {
    color: '#FF914D'
  },
  input: {
    width: 280,
    height: 60,
    position: 'relative',
    top:120,
    flexDirection: 'column',  // Esta linha pode ser removida se a direção for definida localmente
    right:25
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
    width: '100%',
    height: '30%',

    display: 'flex',
    position: 'relative',
    top: '30%'
  },
  Buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  buttonEnviar: {
    width: 145,
    top:655,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.3,
    elevation: 5,
},

  buttonEnviar1: {
    borderRadius: 22,
    backgroundColor: '#FF914D',
    width: 125,
    height: 45,
    top: 430,
    left:150,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.3,
    elevation: 5,

  },
  buttonText2: {
    fontSize: 19,
    fontWeight: 'bold',
    position: 'relative',
    color: '#fff',
    left:24,
    top:9
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
