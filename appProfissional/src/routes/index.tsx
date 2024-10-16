import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { ImageProvider } from "../imageContext";
import AppNavigator from "./stack";
import { UserProvider } from '../proContext';



export default function  App(){
  return (

    <NavigationContainer>
      <ImageProvider>
        <UserProvider>
        <AppNavigator />
        </UserProvider>
      </ImageProvider>
    </NavigationContainer>
    
    );
}
