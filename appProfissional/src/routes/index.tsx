import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./stack";



export default function  App(){
  return (

    <NavigationContainer>
    <AppNavigator />
    </NavigationContainer>
    
    );
}
