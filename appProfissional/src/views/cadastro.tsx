import React from 'react';
import { View, Image, Text } from 'react-native';
import Imagens from "../../img/img";
import styles from '../css/cadastroCss';

const Cadastro: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                    <Text style={styles.titulo}>CADASTRA-SE</Text>
                </View>
            <View style={styles.fundo}>
                
                <View style={styles.containerCadastro}>
                <View style={styles.title}>
                    <Text style={styles.titulo2}>Dados <Text style={styles.pessoais}>Pessoais</Text></Text>
                </View>
                </View>
            </View>
        </View>
    );
};

export default Cadastro;
