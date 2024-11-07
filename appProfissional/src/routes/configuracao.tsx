import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView,TouchableOpacity, ImageBackground } from 'react-native';
import Imagens from '../../img/img';
import styles from '../css/configuracaoCss';
import myContext from '../functions/authContext';

const TelaConfiguracao: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const { user } = useContext(myContext);
    return (
<ImageBackground
 source={Imagens.fundo}
 style={styles.fundo}
 resizeMode="cover">

<Text style={styles.config}>Configurações</Text>
<View style={styles.branco}>
     <Text style={styles.meus}>Meus dados</Text>
     <Text style={styles.meus}>CEP</Text>
     <Text style={styles.meus}>Email</Text>
     <Text style={styles.meus}>Telefone</Text>
     <Text style={styles.meus}>Senha</Text>
</View>
</ImageBackground>
       

    );
};
export default TelaConfiguracao;


