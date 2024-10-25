import React, { useContext, useState } from 'react';
import { View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Imagens from "../../img/img";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import styles from '../css/loginCss';
import api from '../../axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage para armazenar o token
import myContext from '../functions/authContext';
import Pusher from 'pusher-js/react-native'; // Importando Pusher

const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [emailContratado, setEmailContratado] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const userContext = useContext(myContext);

    const { user, setUser } = useContext(myContext); 

   // Função para lidar com o login
   const handleLogin = async () => {
    if (!emailContratado || !password) {
        setMessage('Preencha todos os campos');
        return;
    }

    setLoading(true); // Ativa o estado de loading
    setMessage(''); // Limpa mensagens anteriores


    //  app_id = "1884925"
    //  key = "6aef362f6c720f776c8b"
    //  secret = "e42c65596b0d56e57f72"
    //  cluster = "sa1"

    
    try {
        // Inicializa o Pusher sem a necessidade de armazená-lo no estado
        const pusherInstance = new Pusher('6aef362f6c720f776c8b', {
            cluster: 'sa1',
            authEndpoint: 'http://192.168.1.13:8000/api/pusher/authpro', // Endpoint de autenticação
        });

        // Conecta ao Pusher e aguarda o evento de conexão
        pusherInstance.connect();

        pusherInstance.connection.bind('connected', async () => {
            const socketId = pusherInstance.connection.socket_id; // Obtém o socket_id

            if (!socketId) {
                setMessage('Erro ao obter socket_id. Tente novamente.');
                setLoading(false);
                return;
            }

            // Faz a requisição de login com o socket_id
            const response = await api.post('/authpro', {
                emailContratado,
                password,
                socket_id: socketId, // Passa o socket_id do Pusher
                channel_name: 'private-my-channel', // Define o canal privado
            });

            if (response.data && response.data.status === 'Sucesso' && response.data.token) {
                // Armazena o usuário e o token no AsyncStorage
                await AsyncStorage.setItem('authToken', response.data.token);
                
                // Armazena o usuário autenticado no contexto, incluindo o Pusher
                setUser({ ...response.data.user, pusher: pusherInstance });
                
                // Redireciona para a página principal
                navigation.navigate('homeStack', { screen: 'home' });
            } else {
                setMessage('Credenciais incorretas, tente novamente.');
            }
        });
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Erro ao fazer login. Verifique suas credenciais.';
        setMessage(errorMessage);
    } finally {
        setLoading(false); // Desativa o estado de loading
    }
};

    

    return (
        <View style={styles.container}>
            <Image source={Imagens.helpHouse} style={styles.help} />
            <View style={[styles.input, { width: 350, height: 60 }]}>
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
                        fontSize: 18
                    }}
                    inputStyles={{
                        fontSize:18,
                        color: '#000',
                        paddingHorizontal: 10,
                        height: 49,
    
                    }}
                    onChangeText={setEmailContratado}
                />
                <Text style={styles.errorMessage}>{message}</Text>
            </View>

            <View style={[styles.input, { width: 350, height:60}]}>
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
                        fontSizeFocused: 5,
                    
                        
                    }}
                    labelStyles={{
                        backgroundColor: '#fefefe',
                        paddingHorizontal: 5,
                        color: '#FF8F49',
                        fontSize: 18
                    }}
                    inputStyles={{
                        fontSize:18,
                        color: '#000',
                        paddingHorizontal: 10,
                       
                        
                    }}
                />
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#004AAD" />
            ) : (
                <TouchableOpacity style={styles.button3} onPress={handleLogin} disabled={loading}>
                <Text style={styles.buttonText2}>Entrar</Text>
            </TouchableOpacity>
            )}

            

            <View>
                <View style={styles.conta}>
                    <Text>Ainda não tem uma conta</Text>
                    <Text>Profissional <Text style={styles.helpText}>Help</Text><Text style={styles.houseText}>House</Text>? </Text>
                </View>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#004AAD" />
            ) : (
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('cadastroEmail')} disabled={loading}>
                <Text style={styles.buttonText2}>Cadastre-se</Text>
            </TouchableOpacity>
            )}
        </View>
    );
};


export default Login;
