import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    title: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 65,
        zIndex: 1

    },
    titulo: {
        color: '#004AAD',
        fontSize: 30,
        fontWeight: '900',
        top: 100
    },
    titulo2: {
        color: '#f6a059',
    },
    help: {
        width: 110,
        height: 50,
        right: 120,
        top:45
    },
    input: {
        width: 280,
        height: 60,
        marginBottom: 40,
    },
    button: {
        position: 'relative',
        top: 20,
        backgroundColor: '#FF914D',
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.5,
        elevation: 5,
        borderRadius: 150,
        width: 160,
        color: '#004AAD',


    },
    inputFocused: {
        position: 'absolute',
        fontSize: 20,
        color: '#FF8F49',
        margin: 0,
        marginLeft: 20,
        backgroundColor: '#000'
    },
    label: {
        position: 'relative',
        fontSize: 18,
        color: '#FF8F49',
    },
    conta: {
        top: 110,

    },
    helpText: {
        color: '#004AAD'
    },
    houseText: {
        color: '#F6A059'
    },
    buttonCad: {
        top: 250,
        width: 130,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.5,
        elevation: 5,
    },
    errorMessage: {
        color: '#FF0000'
    },
    maeInput: {
        top: 200
    },

});

export default styles;
