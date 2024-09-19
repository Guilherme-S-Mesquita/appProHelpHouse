import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Imagens from "../../img/img";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import styles from '../css/loginCss';
// axios e como se importasse a API da uma olhada la no arquivo axios.js
import axios from '../../axios';

const Login: React.FC<{ navigation: any,  }> = ({ navigation }) => {
    const [emailContratado, setEmailContratado] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage]= useState ('')
    const [show, setShow] = useState(false);
 

    
    const handleLogin = async () => {
        if (!emailContratado || !password) {
            setMessage('Preencha todos os campos');
            return;
        }
    
        console.log("Email:", emailContratado);
        console.log("Password:", password);
    
        try {
            const response = await axios.post('http://localhost:8000/api/authpro', {
                emailContratado:emailContratado,
                password:password,
            });
    
            console.log("Resposta da API:", response.data);
    
            if (response.data && response.data.status === 'Sucesso') {
                navigation.navigate('homeStack', { screen: 'home' });
            } else {
                setMessage('Credenciais incorretas, tente novamente.');
            }
    
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setMessage('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
        }
    };
        

    return (
        <View style={styles.container}>
            <Image source={Imagens.helpHouse} style={styles.help} />

            <View style={styles.input}>
           
                <FloatingLabelInput
                    label=" Email "
                    value={emailContratado}
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
                       position:'relative',
                       
                    }}
                    customLabelStyles={{
                        colorFocused: '#FF8F49',
                        fontSizeFocused: 12,
                        

                    }}
                    labelStyles={{
                        backgroundColor: '#F5FCFF',
                        paddingHorizontal: 5,
                        color: '#FF8F49',
                        height:'29%',

                    }}
                    inputStyles={{
                        color: '#000',
                        paddingHorizontal: 10,
                        
                        
                    }}
                    onChangeText={setEmailContratado}
                    // onChangeText={(text)=>{form.emailContratado = text}}

                />
                 <Text style={styles.errorMessage}>{message}</Text> 
                 {/* <Text style={styles.branco}></Text>  */}
            </View>

            <View style={styles.input}>
                <FloatingLabelInput
                    label="Senha"
                    isPassword
                    staticLabel
                    togglePassword={show}
                    value={password}
                    onChangeText={setPassword}
                    customShowPasswordComponent={<Text>Mostrar</Text>}
                    customHidePasswordComponent={<Text>Esconder</Text>}
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
                        backgroundColor: '#F5FCFF',
                        paddingHorizontal: 5,
                        color: '#FF8F49',

                    }}
                    inputStyles={{
                        color: '#000',
                        paddingHorizontal: 10,
                    }}
                    // onChangeText={(text)=>{form.password = text}}
                      
                />

            </View>
           
            <Button
                style={styles.button}
                color='#004AAD'
                variant="primary"
                title="Entrar"
                onPress={handleLogin}
            />


            <View>
                <View style={styles.conta}>
                    <Text>Ainda não tem uma conta</Text>
                    <Text>Profissional <Text style={styles.helpText} >Help</Text><Text style={styles.houseText}>House</Text>? </Text>
                </View>
            </View>

            <Button
                style={[styles.buttonCad, { backgroundColor: '#004AAD' }]} // Defina a cor de fundo desejada aqui
                color='#004AAD'
                variant="primary"
                title="Cadastre-se"

                onPress={() => navigation.navigate('cadastroEmail')}
            />
        </View>
    );
};

export default Login;
function setError(arg0: string) {
    throw new Error('Function not implemented.');
}
