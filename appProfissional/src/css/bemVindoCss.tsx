import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',

        marginTop: 140,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 33,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
    },
    voce: {
        color: '#FF914D',
    },
    local: {
        marginTop:60,
        width: 340,
        height: 190,
        borderRadius: 90,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent:'center',

    },
    localFilho: {
        display: 'flex',
        alignItems: 'center',
        
    },
    text:{
        fontSize:23,
        color:'rgba(0, 0, 0, 0.5);'
    },
    iconLocaliza: {
        width: 90,
        height: 90,
        position: 'relative',
        top: 90,
        zIndex: 1,
    },
    botaoAvancar:{
        marginTop:90,
        width:130,
        height:50,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.3,
        elevation: 5,
    },
 
});

export default styles;
