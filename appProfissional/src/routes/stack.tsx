import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

// import mapScreen from '/github/appProHelpHouse/appProfissional/componentes/Map/map';
import BemVindoScreen from '../views/bemVindo';
import CadastroScreen from '../views/cadastro';
import ConfirmedIdScreen from '../views/confirmeId';
import LoadingScreen from '../views/loading';
import LoginScreen from '../views/login';
import AreaAtuacao from '../views/areaAtuacao';
import Cadastro1 from '../views/cadastroScreen2';
import UltimosPassos from '../views/ultimosPassos';
import HomeScreen from '../views/home';
import PesquisaScreen from '../views/pesquisa';
import PerfilScreen from '../views/perfil';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


//NAO MEXER ==== NAO MEXER ==== NAO MEXER === NAO MEXER
// Definindo a função Tabs
 const Tabs = () => {
   return (
     <Tab.Navigator>
       <Tab.Screen name="home" component={HomeScreen} />
       <Tab.Screen name="pesquisa" component={PesquisaScreen}/>
       <Tab.Screen name="perfil" component={PerfilScreen}/>
   </Tab.Navigator>
  );
 };
 //NAO MEXER ==== NAO MEXER ==== NAO MEXER === NAO MEXER

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="bemvindo">
      {/* <Stack.Screen name="map" component={mapScreen} options={{headerShown: false}} />  */}
      <Stack.Screen name="homeStack" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="bemvindo" component={BemVindoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="cadastro" component={CadastroScreen} options={{ headerShown: false }} />
      <Stack.Screen name="confirmeid" component={ConfirmedIdScreen} options={{ headerShown: false }} />
      <Stack.Screen name="loading" component={LoadingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="cadastro1" component={Cadastro1} options={{ headerShown: false }} />
      <Stack.Screen name="areaAtuacao" component={AreaAtuacao} options={{ headerShown: false }} />
      <Stack.Screen name="ultimosPassos" component={UltimosPassos} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
