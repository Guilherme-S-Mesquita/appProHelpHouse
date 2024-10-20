import React, { useContext, useState } from 'react';
import { View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Imagens from "../../img/img";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import styles from '../css/loginCss';
import api from '../../axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage para armazenar o token
import myContext from '../functions/authContext';



const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [emailContratado, setEmailContratado] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const userContext = useContext(myContext);

    const { user, setUser } = useContext(myContext); 

    const handleLogin = async () => {
        if (!emailContratado || !password) {
            setMessage('Preencha todos os campos');
            return;
        }
    
        setMessage(''); // Limpa a mensagem anterior
        setLoading(true);  // Exibe o indicador de carregamento
    
        try {
            const response = await api.post('/authpro', {
                emailContratado,
                password,
            });
    
            // Se login bem-sucedido
            if (response.data && response.data.status === 'Sucesso' && response.data.token) {
                console.log("Token recebido:", response.data.token);
    
                // Armazena o usuário e o token
                setUser(response.data.user);
                await AsyncStorage.setItem('authToken', response.data.token);
    
                // Navega para a tela inicial
                navigation.navigate('Home');
            } else {
                setMessage('Credenciais incorretas, tente novamente.');
            }
        } catch (error: any) {
            console.error('Erro ao fazer login:', error);
    
            // Mensagem de erro apropriada
            if (error.response && error.response.status === 401) {
                setMessage('Usuário ou senha incorretos.');
            } else {
                setMessage('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
            }
        } finally {
            setLoading(false); // Esconde o indicador de carregamento
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
                        position: 'relative',
                    }}
                    customLabelStyles={{
                        colorFocused: '#FF8F49',
                        fontSizeFocused: 12,
                    }}
                    labelStyles={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 5,
                        color: '#FF8F49',
                        height: '29%',
                    }}
                    inputStyles={{
                        color: '#000',
                        paddingHorizontal: 10,
                        height: 49,
                    }}
                    onChangeText={setEmailContratado}
                />
                <Text style={styles.errorMessage}>{message}</Text>
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
                        backgroundColor: '#fefefe',
                        paddingHorizontal: 5,
                        color: '#FF8F49',
                    }}
                    inputStyles={{
                        color: '#000',
                        paddingHorizontal: 10,
                    }}
                />
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#004AAD" />
            ) : (
                <Button
                    style={styles.button}
                    color='#004AAD'
                    variant="primary"
                    title="Entrar"
                    onPress={handleLogin}
                />
            )}

            <View>
                <View style={styles.conta}>
                    <Text>Ainda não tem uma conta</Text>
                    <Text>Profissional <Text style={styles.helpText}>Help</Text><Text style={styles.houseText}>House</Text>? </Text>
                </View>
            </View>

            <Button
                style={[styles.buttonCad, { backgroundColor: '#004AAD' }]}
                variant="primary"
                title="Cadastre-se"
                onPress={() => navigation.navigate('cadastroEmail')}
            />
        </View>
    );
};

export default Login;
