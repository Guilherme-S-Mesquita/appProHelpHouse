import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  map: {
    width: 300, // largura fixa em pixels
    height: 150, // altura fixa em pixels
    position:'relative',
    top:80,
  },
  buttonContainer:{
    position:'absolute',
    top:60,
    width:'100%',
    alignItems:'center',
    position:'relative',
  

  },
  markerImage:{
    width:40,
    height:40,
    borderRadius:40,
  },


});

export default styles;
