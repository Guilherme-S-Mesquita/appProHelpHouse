import React, { useState } from 'react';
import { View, Text,TextInput,ScrollView, Image } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { TextInputMask } from 'react-native-masked-text';
import { Button } from "../../componentes/Button/Button";
import Imagens from '../../img/img';



import styles from '../css/areaAtuacaoCss';
const AreaAtuacao: React.FC<{ navigation: any }> = ({ navigation }) => {

    return (
        <View style={styles.containerPrincipal}>


            <View style={styles.container2}>
                <View style={styles.meioCirculo}>
                </View>
                <Text style={styles.emQuais}>Em quais <Text style={styles.areas}>áreas</Text> {'\n'} <Text style={styles.voce}>você atua?</Text></Text>

              <View style={styles.pesquisa}>
              
              <TextInput  
              placeholder='buscar..'
            style={styles.input}
            placeholderTextColor='gray'
            keyboardType='default'
          />

          
</View>
<ScrollView>
    
    <View style={styles.containerPrincipal}>

    </View>
</ScrollView>
            </View>
            <Button
                    style={[styles.buttonEnviar, {
                        backgroundColor: '#FF914D',

                    }]} // Defina a cor de fundo desejada aqui
                    color='#FF914D'
                    variant="primary"
                    title="Próximo"
                    onPress={() => navigation.navigate('cadastro1')}
                />
               
        </View>

    );
};

export default AreaAtuacao;






