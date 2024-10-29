import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Fundo semitransparente
    justifyContent: 'center',
    alignItems: 'center',
},
modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2',  // Cor de destaque no título
    marginBottom: 15,
    textAlign: 'center',
},
modalForm: {
    maxHeight: '70%',
},
modalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
},
modalInput: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
},
modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
},
confirmButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
},
cancelButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
},
buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
},

selectContainer: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
  backgroundColor: '#fff',
},
selectText: {
  color: '#333',
},
optionsContainer: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  marginBottom: 10,
  backgroundColor: '#fff',
},
optionButton: {
  padding: 10,
},
optionText: {
  color: '#333',
},
selectedDate: {
  fontSize: 14,
  color: '#333',
},
placeholder: {
  fontSize: 14,
  color: '#aaa',
},


  navChat: {
    width: '100%',
    height: 230,
    display: 'flex',
  },
  navContent: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 150,
    marginTop: 30,
  },
  botaoPDF: {
    backgroundColor: '#4CAF50', // Verde
    paddingVertical: 10, // Use paddingVertical para ajustar a altura do botão
    paddingHorizontal: 15, // Ajusta o padding lateral
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  textoBotao: {
    color: '#FFFFFF', // Branco
    fontSize: 16,
    fontWeight: 'bold',
  },
  mensagensContainer: {
    flex: 1, // Ocupa todo o espaço disponível
    padding: 10,
    marginBottom: 20, // Espaço para o input de mensagem
  },
  mensagemItem: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: '90%', // Ajuste a largura máxima
  },
  navbar: {
    backgroundColor: '#004aad',
    height: 50,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'space-between', // Alinha itens com espaço entre
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10, // Adiciona padding horizontal para dar espaço
  },
  textNav: {
    fontSize: 25,
    color: '#fefefe',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  enviarMensagem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: 80, // Reduzido para dar mais espaço às mensagens
  },
  inputContent: {
    backgroundColor: '#ffffff',
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    width: 300,
    marginBottom: 2,
  },
  enviar: {
    width: 50,
    height: 50,
    backgroundColor: '#14b2f7',
    borderRadius: 25,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20, // Ajuste o tamanho do ícone
    height: 20,
  },

  onlineUsersContainer: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
},

onlineTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
},

onlineUser: {
    fontSize: 14,
    color: '#555',
    marginVertical: 2,
},
});

export default styles;
