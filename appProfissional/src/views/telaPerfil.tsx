import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button } from "../../componentes/Button/Button";
import Imagens from '../../img/img';
import styles from '../css/telaPerfilCss';
import UltimosPassos from './ultimosPassos';
import myContext from '../functions/authContext';
import TelaConfiguracao from './configuracao';


const TelaPerfil: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
     const navegar = () => {
        navigation.navigate('configuracao', {
        
        });
    };
    const { user } = useContext(myContext);
    return (

        <View style={styles.containerPai}>
              <Image source={Imagens.sep} style={styles.palmeiras} />

            <Image
                source={{ uri: user.imagemContratado }}
                style={styles.ImgUser}
            />
            <View style={styles.containerMae}>
                <ScrollView>
                    <TouchableOpacity style={styles.botao2}>
                        <Text style={styles.botaoText2} onPress={navegar}>Editar perfil</Text>
                    </TouchableOpacity>

                    <Text style={styles.nomeUsuario}>{user.nomeContratado} <Text style={styles.nomeUsuario}>{user.sobrenomeContratado}</Text></Text>

                    <Text style={styles.area}>Minhas áreas de atuação</Text>
                    
                    <Text style={styles.profissoesUser}>{user.profissaoContratado}</Text>
                    
                    <Text style={styles.mim}>Sobre mim</Text>
                    <Text style={styles.descUser}>{user.descContratado}</Text>

                    <Image source={Imagens.iconLocalizacao} style={styles.localiza} />
                    <Text style={styles.zona}>Atua em  <Text style={styles.zonaUser}>{user.regiaoContratado}</Text></Text>
                

                    
                 <Text style={styles.meu}>Meu Portifólio</Text>
           
                    <View style={styles.containerVerical}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity><Image source={user.portifilioPro1 ? {uri: user.portifilioPro1} : Imagens.mancha} style={styles.fotosRolagem}/></TouchableOpacity>
                        <TouchableOpacity><Image source={user.portifilioPro2 ? {uri: user.portifilioPro2} : Imagens.mancha} style={styles.fotosRolagem}/></TouchableOpacity>
                        <TouchableOpacity><Image source={user.portifilioPro3 ? {uri: user.portifilioPro3} : Imagens.mancha} style={styles.fotosRolagem}/></TouchableOpacity>
                    </ScrollView>
                 </View>

                </ScrollView>
            </View>

            

            <TouchableOpacity style={styles.botao1}>
                <Text style={styles.botaoText1}>Adicionar uma foto de capa ao perfil</Text>
            </TouchableOpacity>



        </View>

    );
};
export default TelaPerfil;


