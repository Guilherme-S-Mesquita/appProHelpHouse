import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import Imagens from "../../img/img";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import { useNavigation } from '@react-navigation/native'; // Importar o hook useNavigation
import styles from '../css/loginCss';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [cont, setCont] = useState('');
    const [show, setShow] = useState(false);
    const [senha, setSenha] = useState('');
    const navigation = useNavigation(); // Usar o hook useNavigation

    // Defina a função handleLoginPress
 

    return (
        <View style={styles.container}>
            <Image source={Imagens.helpHouse} style={styles.help} />

            <View style={styles.input}>
                <FloatingLabelInput
                    label="Email"
                    value={email}
                    staticLabel
                    hintTextColor={'#aaa'}
                    hint="exemple@exemple.com"
                    containerStyles={{
                        borderWidth: 2,
                        paddingHorizontal: 10,
                        backgroundColor: '#fff',
                        borderColor: '#004AAD',
                        borderRadius: 50,
                        borderTopWidth: 5,
                        borderLeftWidth: 5,
                        borderRightWidth: 5,
                        borderBottomWidth: 5,
                    }}
                    customLabelStyles={{
                        colorFocused: '#FF8F49',
                        fontSizeFocused: 12,
                    }}
                    labelStyles={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 5,
                        color: '#FF8F49',
                    }}
                    inputStyles={{
                        color: '#000',
                        paddingHorizontal: 10,
                    }}
                    onChangeText={value => {
                        setEmail(value);
                    }}
                />
            </View>

            <View style={styles.input}>
                <FloatingLabelInput
                    label="Senha"
                    isPassword
                   
                    togglePassword={show}
                    value={cont}
                    onChangeText={value => setCont(value)}
                    customShowPasswordComponent={<Text>Show</Text>}
                    customHidePasswordComponent={<Text>Hide</Text>}
                    containerStyles={{
                        borderWidth: 2,
                        paddingHorizontal: 10,
                        backgroundColor: '#fff',
                        borderColor: '#004AAD',
                        borderRadius: 50,
                        borderTopWidth: 5,
                        borderLeftWidth: 5,
                        borderRightWidth: 5,
                        borderBottomWidth: 5,
                    }}
                    customLabelStyles={{
                        colorFocused: '#FF8F49',
                        fontSizeFocused: 12,
                    }}
                    labelStyles={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 5,
                        color: '#FF8F49',
                    }}
                    inputStyles={{
                        color: '#000',
                        paddingHorizontal: 10,
                    }}
                />
            </View>

            <Button
                style={styles.button}
                color='#004AAD'
                variant="primary"
                title="Entrar" 
               
            />
        </View>
    );
};

export default Login;
