import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, StyleSheet } from 'react-native';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import styles from '../css/homeCss'; // Importa o arquivo de estilos

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
        <View style={styles.overlay}>
          <Text style={styles.title}>Bem-vindo ao Home</Text>
          <Button title="Clique Aqui" onPress={() => navigation.navigate('bemvindo')} />
        </View>
      
    </View>
  );
}

export default Home;
