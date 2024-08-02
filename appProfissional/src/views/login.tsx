import React from 'react';
import { View, TextInput, Image, Text } from 'react-native';
import Imagens from "../../img/img";
import styles from '../css/loginCss';


const Login = () => {
    return (
        <View style={styles.container}>
            <Image source={Imagens.helpHouse} style={styles.help} />


            <View style={styles.buttons}>
                <View style={styles.itensButtons}>
                    <TextInput
                        style={styles.input}
                    />
                    <Text  style={styles.label}>Usuário ou e-mail</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                    />
                     <Text  style={styles.label}>Senha</Text>
                </View>
                
            </View>


        </View>
    );
};


export default Login;