import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Imagens from "../../img/img";
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
import { Image } from 'react-native';
import PedidosAgendados from '../views/pedidosAgendados';
import TelaPerfil from '../views/telaPerfil';
import TelaConfiguracao from '../views/configuracaoo';
import MeuHistorico from '../views/meuHistorico';
import Suporte from '../views/suporte';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#e9e9e7',
          height: 80,
        },
        tabBarShowLabel: false,  // Oculta os rótulos das abas
      }}
    >
      <Tab.Screen
        name="HomeScreen" 
        component={TelaServico}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => ( // esse focused está importada para não aparecer o titulo
            <Image 
              source={Imagens.iconTab} 
              style={{
                width: 44, 
                height: 44,
              
              }} 
            />
          ),
        }}
      />

      <Tab.Screen
        name="pedidosAgendadosTab"
        component={PedidosAgendados}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image 
              source={Imagens.imgPedido} 
              style={{
                width: 59, 
                height: 59, 
                top:6
               
              }} 
            />
          ),
        }}
      />

 
      
      <Tab.Screen
        name="PerfilScreen"
        component={TelaPerfil}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image 
              source={Imagens.iconTab2} 
              style={{
                width: 46, 
                height: 46, 
              }} 
            />
          ),
        }}
      />
        
        <Tab.Screen
        name="Suporte"
        component={Suporte}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image 
              source={Imagens.iconSuporte} 
              style={{
                width: 46, 
                height: 60, 
                top:5
               
              }} 
            />
          ),
        }}
      />
       

    </Tab.Navigator>
  );
};
 //NAO MEXER ==== NAO MEXER ==== NAO MEXER === NAO MEXER

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="loading">
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
      <Stack.Screen name="pedidosAgendados" component={PedidosAgendados} options={{ headerShown: false }} />
      <Stack.Screen name="perfil" component={TelaPerfil} options={{ headerShown: false }} />
      <Stack.Screen name="configuracao" component={TelaConfiguracao} options={{ headerShown: false }} />
      <Stack.Screen name="meuHistorico" component={MeuHistorico} options={{ headerShown: false }} />
      <Stack.Screen name="suporte" component={Suporte} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
