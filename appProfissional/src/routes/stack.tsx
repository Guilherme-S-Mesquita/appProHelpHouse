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
import Cadastro2 from '../views/cadastroScreen2';
import UltimosPassos from '../views/ultimosPassos';
import HomeScreen from '../views/home';
import PesquisaScreen from '../views/pesquisa';
import PerfilScreen from '../views/perfil';
import CadastroEmail from '../views/cadastroEmail';
import TelaServico from '../views/telaServico';
import Chat from '../views/chat';
import List from '../functions/index';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


//NAO MEXER ==== NAO MEXER ==== NAO MEXER === NAO MEXER
// Definindo a função Tabs

 const Tabs = () => {
   return (
     <Tab.Navigator>
       <Tab.Screen name="Home" component={TelaServico}options={{ headerShown: false }} />
       <Tab.Screen name="Perfil" component={PerfilScreen}options={{ headerShown: false }}/>
   </Tab.Navigator>
  );
 };
 //NAO MEXER ==== NAO MEXER ==== NAO MEXER === NAO MEXER

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="bemvindo">
       <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
       <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
       <Stack.Screen name="Home" component={TelaServico} options={{ headerShown: false }} />
      {/* <Stack.Screen name="map" component={mapScreen} options={{headerShown: false}} />  */}
      <Stack.Screen name="homeStack" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="bemvindo" component={BemVindoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="cadastro" component={CadastroScreen} options={{ headerShown: false }} />
      <Stack.Screen name="cadastroEmail" component={CadastroEmail} options={{ headerShown: false }} />
      <Stack.Screen name="confirmeid" component={ConfirmedIdScreen} options={{ headerShown: false }} />
      <Stack.Screen name="loading" component={LoadingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="cadastro2" component={Cadastro2} options={{ headerShown: false }} />
      <Stack.Screen name="areaAtuacao" component={AreaAtuacao} options={{ headerShown: false }} />
      <Stack.Screen name="ultimosPassos" component={UltimosPassos} options={{ headerShown: false }} />
      <Stack.Screen name="PerfilScreen" component={UltimosPassos} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
