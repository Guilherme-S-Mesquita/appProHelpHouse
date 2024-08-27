import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Imagens from "../../img/img";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import styles from '../css/loginCss';
// axios e como se importasse a API da uma olhada la no arquivo axios.js
import axios from '../../axios';



// VALIDAÇÃO DE LOGIN
// const [form, setForm] = useState({
//     emailContratado:'',
//     password:'',
// })


// // cria a variavel login
// const login = ()=>{
//     axios.post ('login', form).then((data)=>{
//         console.log(data)
//     }).catch((err)=>{
//         console.log(err)
//     })
// }




const Login: React.FC<{ navigation: any,  }> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [cont, setCont] = useState('');
    const [show, setShow] = useState(false);
    const [senha, setSenha] = useState('');

    // Defina a função handleLoginPress


    return (
        <View style={styles.container}>
            <Image source={Imagens.helpHouse} style={styles.help} />

            <View style={styles.input}>
           
                <FloatingLabelInput
                    label=" Usuário ou Email "
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
                    onChangeText={value => setEmail(value)}
                    // onChangeText={(text)=>{form.emailContratado = text}}

                />
                 {/* <Text style={styles.branco}></Text>  */}
            </View>

            <View style={styles.input}>
                <FloatingLabelInput
                    label="Senha"
                    isPassword
                    staticLabel
                    togglePassword={show}
                    value={cont}
                  
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
                      onChangeText={value => setCont(value)}
                />

            </View>
           
            <Button
                style={styles.button}
                color='#004AAD'
                variant="primary"
                title="Entrar"
                onPress={() => navigation.navigate('confirmeid')}
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
