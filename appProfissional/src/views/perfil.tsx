import React, { useContext } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Imagens from "../../img/img";
import styles from '../css/perfilCss';
import { useImage } from '../imageContext'; 
import myContext from '../functions/authContext';

const TelaPerfilScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { imageUrl } = useImage();
  const { user } = useContext(myContext)
  console.log('Dados do usuário:', user);
  
  return (
    <ImageBackground 
      source={Imagens.fundoBemVindo}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.fundoBranco}>
        <View style={styles.container}>
          {user.imagemContratado ? (
            <Image source={{ uri: user.imagemContratado }} style={styles.imgPerfil} />
          ) : (
            <Image style={styles.imgPerfil} />
          )}

          <View style={styles.container}>
            {/* Exibindo as informações do usuário */}
            <Text style={styles.nome}>
              {user ? user.nomeContratado : 'nome indisponivel'}
            </Text>
            <Text style={styles.textLocalizacao}>
              <Entypo name="location-pin" size={24} color="red" /> 
              {user ? user.bairroContratado : 'localização indisponivel'}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TelaPerfilScreen;