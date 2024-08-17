import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Loading from '../views/loading';
import BemVindo from '../views/bemVindo';
import login from '../views/login';
import ConfirmedId from '../views/confirmeId';



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen 
        name="Loading" 
        component={Loading} 
        options={{headerShown:false}} 
        />
        <Tab.Screen 
        name="bemvindo" 
        component={BemVindo} 
        options={{headerShown:false}} 
        />
         <Tab.Screen 
        name="Login" 
        component={login} 
        options={{headerShown:false}} 
        />
         <Tab.Screen 
        name="confirme" 
        component={ConfirmedId} 
        options={{headerShown:false}} 
        />
      </Tab.Navigator>
    );
  };
  
  export default Tabs;