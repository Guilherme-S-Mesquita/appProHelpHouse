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
    top: '10%',
    left: '-19%',
    borderRadius: 290,
    zIndex: -1,
    top: 150,
    left: -75,
    borderRadius:2,
  },
  scrollContainer: {

  },
  textTitle:{
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    bottom:30,
  },
  title: {
    width: '100%',
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
  tituloDados: {
    width: '100%',
    height: '20%',
    top: 30,
    left: 2,
    display:'flex',
    flexDirection: 'row',
  },
  tituloDados2: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '900',
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
  buttonEnviar: {
    position: 'relative',
    width: 145,
    left: 60,
    top: 55
  },
  profissao: {
    right: 18,
    bottom: -15,  // Ajuste a posição dos títulos
  },
  textProfissao: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    bottom: -25,  // Mantém o título próximo ao campo de entrada
  },
  nome: {
    right: 18,
    bottom: -15,  // Ajuste a posição dos títulos
  },
  nome2: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    bottom: -25,  // Mantém o título próximo ao campo de entrada
  },
  sobrenome: {
    right: 18,
    bottom: -15,  // Ajuste a posição dos títulos
  },
  sobrenome2: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    bottom: -25,  // Mantém o título próximo ao campo de entrada
  },
  nascimento: {
    right: 18,
    bottom: -15,  // Ajuste a posição dos títulos
  },
  nascimento2: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    bottom: -25,  // Mantém o título próximo ao campo de entrada
  },
  cpf: {
    right: 18,
    bottom: -15,  // Ajuste a posição dos títulos
  },
  cpf2: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    bottom: -25,  // Mantém o título próximo ao campo de entrada
  },
  telefone: {
    right: 18,
    bottom: -15,  // Ajuste a posição dos títulos
  },
  telefone2: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    bottom: -25,  // Mantém o título próximo ao campo de entrada
  },
  usuario: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18,
    right: 20,
    top: 65
  },
  senha: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18,
    right: 20,
    top: 65
  },
  roda: {

  },
  buttons:{
    width:'100%',
    height:'10%',
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'flex-end',

  }

});

export default styles;
