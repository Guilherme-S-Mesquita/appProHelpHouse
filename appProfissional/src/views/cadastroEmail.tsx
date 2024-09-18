import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Imagens from "../../img/img";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import styles from '../css/loginCss';




const CadastroEmail: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [emailContratado, setEmailContratado] = useState('');
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState('');

    const dadosLogin = () => {
        navigation.navigate('cadastro', {
            emailContratado:emailContratado,
            password:password
       
          
        });
    }


    return (
        <View style={styles.container}>
        
        
        <View style={styles.title}>
                <Text style={styles.titulo}>CADASTRO</Text>
            </View>
         
            <Image source={Imagens.helpHouse} style={styles.help} />

            <View style={styles.input}>
           
                <FloatingLabelInput
                    label=" Usuário ou Email "
                    value={emailContratado}
                    staticLabel
                    hintTextColor={'#aaa'}
                    hint="exemple@exemple.com"
                    containerStyles={{
                        borderWidth: 2,
                        paddingHorizontal: 10,
                        backgroundColor: '#F5FCFF',
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
                    onChangeText={value => {
                        setEmailContratado(value);
                    }}
                />
                 {/* <Text style={styles.branco}></Text>  */}
            </View>

            <View style={styles.input}>
                <FloatingLabelInput
                    label="Senha"
                    isPassword
                    staticLabel
                    togglePassword={show}
                    value={password}
                    onChangeText={value => setPassword(value)}
                    customShowPasswordComponent={<Text>Mostrar</Text>}
                    customHidePasswordComponent={<Text>Esconder</Text>}
                    containerStyles={{
                        borderWidth: 2,
                        paddingHorizontal: 10,
                        backgroundColor: '#F5FCFF',
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

                />

            </View>
    

    
            <Button
                style={[styles.buttonCad, { backgroundColor: '#004AAD' }]} // Defina a cor de fundo desejada aqui
                color='#004AAD'
                variant="primary"
                title="Proximo"

                onPress={dadosLogin}
            />
        </View>
    );
};

export default CadastroEmail;
