import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { ImageProvider } from "../imageContext";
import AppNavigator from "./stack";



export default function  App(){
  return (

    <NavigationContainer>
      <ImageProvider>
        <AppNavigator />
      </ImageProvider>
    </NavigationContainer>
    
    );
}
