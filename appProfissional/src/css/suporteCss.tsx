import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  fundoBranco: {
    backgroundColor: '#fff',
    width: 350,
    borderRadius: 25,
    marginTop: 20,
    marginLeft: 22,
    height: 590
  },
  TextSuporte: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffff',
    marginLeft: 63,
    bottom: 35,
  },
  titulo: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    bottom: 10,
  },
  subTitulo: {
    color: '#0044CC',
    fontWeight: 'bold',
    bottom: 2,
    fontSize: 15,
    marginTop: 10,
    left: 5
  },
  subTitulo2: {
    color: '#004aad',
    fontWeight: 'bold',
    fontSize: 20,
    left: 55
  },

  problema: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#004aad',
    marginLeft: 35,
    marginTop: 25,
    marginBottom: 30,
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },


  input3: {
    borderBottomWidth: 3,
    borderColor: '#004aad',
    height: 40,
    marginBottom: 5,
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 5,
    width: 300,
    marginLeft: 20,
    bottom: 20
  },


  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 5,
    marginLeft: 10
  },
  questionContainer: {
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0044CC',
    right: 5,
    top: 5
  },
  answer: {
    fontSize: 17,
    color: '#555',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconEmail: {
    marginRight: 10,
    left:55,
    top:1
  },

  iconWhats: {
    marginRight: 10,
    bottom: 7,
    marginTop: 10,
    left:50
  },
  subTitulo4: {
    color: '#004aad',
    fontWeight: 'bold',
    bottom: 3,
    fontSize: 18,
    marginTop: 10,
    left:50
  },

});

export default styles;
