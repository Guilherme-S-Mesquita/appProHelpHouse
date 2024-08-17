import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BemVindoScreen from '../views/bemVindo';
import CadastroScreen from '../views/cadastro';
import ConfirmedIdScreen from '../views/confirmeId';
import LoadingScreen from '../views/loading';
import loginScreen from '../views/login';
// import mapScreen from '/github/appProHelpHouse/appProfissional/componentes/Map/map';
import Cadastro1 from '../views/cadastroScreen2';
import HomeScreen from '../views/home';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="bemvindo">
<<<<<<< HEAD
=======
      <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>
>>>>>>> e073409db85293b6b0830ea2c87aafa693824ce1
      <Stack.Screen name="bemvindo" component={BemVindoScreen} options={{headerShown: false}}/>
      <Stack.Screen name="cadastro" component={CadastroScreen} options={{headerShown: false}}/>
      <Stack.Screen name="confirmeid" component={ConfirmedIdScreen} options={{headerShown: false}} />
      <Stack.Screen name="loading" component={LoadingScreen} options={{headerShown: false}} />
      <Stack.Screen name="login" component={loginScreen} options={{headerShown: false}} />
      {/* <Stack.Screen name="map" component={mapScreen} options={{headerShown: false}} />  */}
      <Stack.Screen name="cadastro1" component={Cadastro1} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
