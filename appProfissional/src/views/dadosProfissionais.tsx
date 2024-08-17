import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground,Image } from 'react-native';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import Imagens from "../../img/img";
// alem de importar imagens, importem também o Css para ser realizada a manutenção com mais facilidadegit 
import styles from '../css/dadosProfissionaisCss'; // Importa o arquivo de estilos


 function dadosProfissionais({navigation}) {
  return (
    <ImageBackground 
      source={Imagens.fundoBemVindo}
      style={styles.background}  // Define o estilo para a imagem de fundo
      resizeMode="cover"  // Ajusta a imagem para cobrir a tela
    >
      <View style={styles.container}>

      
      </View>
    
    </ImageBackground>
  );
};


export default dadosProfissionais;