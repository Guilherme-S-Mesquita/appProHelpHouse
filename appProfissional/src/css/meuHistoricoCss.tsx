import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  navContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 393,
    height: 50,
    marginTop: 110,
    marginRight: 20,
  },
  navbar: {
    backgroundColor: '#004aad',
    height: 50,
    width: 380,
    borderRadius: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  textNav: {
    fontSize: 25,
    color: '#fefefe',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 200,
    height: 60,
    backgroundColor: '#f6a059',
    padding: 8,
    borderRadius: 13,
    marginRight: 150,
    bottom: 20,
  },
  tab2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 180,
    height: 60,
    backgroundColor: '#f6a059',
    padding: 8,
    borderRadius: 13,
    marginBottom: 5,
    marginLeft: 150,
    zIndex: 1,
    bottom: 80,
  },
  Texttab1: {
    color: '#fff',
    fontSize: 20,
    top: 20,
    fontWeight: 'bold',
  },
  Texttab: {
    color: '#f6a059',
    fontSize: 20,
    top: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 20,
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0044CC', // Azul mais escuro
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#004aad',
    marginTop: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#0044CC',
    marginTop: 5,
  },
  clienteName: {
    fontWeight: 'bold',
    color: '#FF6600', // Laranja do cliente
    fontSize: 18,
  },
});

export default styles;
