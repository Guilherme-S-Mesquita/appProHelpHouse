import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  fundo: {
    height: '100%',
    width: '140%',
    backgroundColor: '#004AAD',
    position: 'absolute',
    top: 150,
    left: -75,
    borderRadius:270,
  },

  textTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    bottom: 35,
  },
  titulo: {
    color: '#004AAD',
    fontSize: 30,
    fontWeight: '900',
    top: 77
  },

  tituloDados2: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '900',
    top: 55,
  },
  pessoais: {
    color: '#FF914D',
  },
  containerCadastro: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',

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
    marginBottom: 200,
  },

  phoneSeparator: {
    fontSize: 30,
    color: '#fff',
  },
  phoneInput: {
    width: 30,
  },
  nome: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    bottom: 19,
    right: 25
  },
  dataNasc: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    bottom: 7,
    right: 25
  },
  cpf: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    top: 4,
    right: 25
  },
  telefone: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    right: 25,
    top: 5
  },
  profissao: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    top: 15,
    right: 25
  },

  buttonEnviar: {
    position: 'relative',
    width: 145,
    left: 60,
    top: 55,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.3,
    elevation: 5,
  },

});

export default styles;
