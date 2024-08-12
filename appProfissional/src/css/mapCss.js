import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get ('window').height,
  },
  buttonContainer:{
    position:'absolute',
    bottom:20,
    width:'100%',
    alignItems:'center',

  },
  markerImage:{
    width:40,
    height:40,
    borderRadius:40,
  },


});

export default styles;
