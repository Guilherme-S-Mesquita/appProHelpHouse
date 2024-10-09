import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Imagens from "../../img/img";
import styles from '../css/perfilCss';
import { useImage } from '../imageContext'; 

const TelaPerfilScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { imageUrl } = useImage();
  
  return (
    <ImageBackground 
      source={Imagens.fundoBemVindo}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.fundoBranco}>
        <View style={styles.container}>
          {imageUrl ? (
            <Image source={{ uri: imageUrl }} style={styles.imgPerfil} />
          ) : (
            <Image style={styles.imgPerfil} />
          )}

          <View style={styles.container}>
            {/* Exibindo as informações do usuário */}
            <Text style={styles.nome}>
              Nome não disponível
            </Text>
            <Text style={styles.textLocalizacao}>
              <Entypo name="location-pin" size={24} color="red" /> 
              Localização não disponível
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TelaPerfilScreen;