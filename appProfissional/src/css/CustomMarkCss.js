import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    markerImage: {
        width: '100%',
        height: '100%',
    },
    markerContainer: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderColor: '#FF0',
        borderWidth: 4,
        backgroundColor: 'blue',
        overflow: 'hidden',
    },
    calloutContainer: {
        width: 150,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    calloutTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    calloutDescription: {
        fontSize: 14,
        marginBottom: 5,
    },
    calloutImage: {
        width: '100%',
        height: 50,
        borderRadius: 5,
    },
});

export default styles;
