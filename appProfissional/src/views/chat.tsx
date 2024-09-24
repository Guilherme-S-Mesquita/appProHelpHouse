import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, Pressable, Animated  } from 'react-native';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import styles from '../css/chatCss'; // Importa o arquivo de estilos
import Imagens from "../../img/img";


const Chat: React.FC<{ navigation: any }> = ({ navigation }) => {
    // Estado para armazenar a mensagem digitada
    const [mensagem, setMensagem] = useState('');
    const [buttonScale] = useState(new Animated.Value(1));
    
    const enviarMensagem = () => {
        if (mensagem.trim()) {
            console.log('Mensagem enviada:', mensagem);
            setMensagem(''); 
        }
    };

    const onPressIn = () => {
        // Animação de reduzir o botão
        Animated.spring(buttonScale, {
            toValue: 0.9, // Reduz a escala para 90%
            useNativeDriver: true,
        }).start();
    };

    const onPressOut = () => {
        // Volta a escala para o normal
        Animated.spring(buttonScale, {
            toValue: 1, // Volta à escala original
            useNativeDriver: true,
        }).start();
    };

    
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.navChat}>
                <View style={styles.navContent}>
                    <View style={styles.navbar}>
                        <Text style={styles.textNav}>Chat</Text>
                    </View>
                    <View style={styles.confirmarTrampo}>
                        <View style={styles.infoPessoa}>
                        <View style={styles.foto}></View>
                        <Text style={styles.textName}>Mariana Silva</Text>
                        </View>
                        <View style={styles.buttons}>
                        <Button title="Fechar Negocio"
                            style={styles.fecharNegocio}
                                onPress={() => navigation.navigate('Chat')} />
                            <Button title="Negar"
                             style={styles.Negar}
                                onPress={() => navigation.navigate('Chat')} />
                        </View>
                    </View>
                </View>
            </View>





           <View style={styles.enviarMensagem}>
                <View style={styles.inputContent}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua mensagem..."
                        value={mensagem}
                        onChangeText={(text) => setMensagem(text)} // Atualiza o estado com o valor digitado
                    />
                    <Animated.View style={[styles.enviar, { transform: [{ scale: buttonScale }] }]}>
                    <Pressable
                        onPress={enviarMensagem}
                        onPressIn={onPressIn} // Reduz a escala quando pressionado
                        onPressOut={onPressOut} // Volta à escala normal ao soltar
                    >
                        <Image source={Imagens.iconEnviar} style={styles.icon} />
                    </Pressable>
                </Animated.View>
                </View>
           </View>
        </View>
    );
}

export default Chat;
