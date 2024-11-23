import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  fundo: {
    height: '100%',
    width: 620,
    backgroundColor: '#004AAD',
    zIndex: 1,
    borderRadius: 300,
    top: 40,
  },
  scrollContainer: {

  },
  textTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '900',
    bottom: 25,
  },
  title: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 90
  },
  titulo: {
    color: '#004AAD',
    fontSize: 30,
    fontWeight: '900',
    top: 20
  },
  tituloDados: {
    top: 30,
    left: 2,
    display: 'flex',
    flexDirection: 'row',
  },
  tituloDados2: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '900',
    top: 55
  },
  pessoais: {
    color: '#FF914D',
  },
  containerCadastro: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  titulo2: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '900',
    top: 65,
    marginBottom: -25
  },
  textInputStyle: {
    opacity: 0.7,
    borderBottomWidth: 2,
    borderColor: '#fff',
    color: '#fff',
    fontSize: 16,
    marginTop: -10,
    marginBottom: 37,
    marginHorizontal: -20,
    bottom: -50
  },
  input: {
    width: 280,
    height: 60,
    top: 120,
    position: 'relative',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonEnviar: {
    position: 'relative',
    width: 130,
    top: 510,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  nome: {
    right: 18,
    top: 10,  
  },
  sobrenome: {
    right: 18,
    top: 15, 
  },
  nascimento: {
    right: 18,
    top: 28, 

  },
  cpf: {
    right: 18,
    top: 38, 
  },

  telefone: {
    right: 18,
    top: 44, 
  },
  senha: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18,
    right: 20,
    top: 65
  },
  buttons: {
    width: '100%',
    height: '10%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',

  }

});

export default styles;
