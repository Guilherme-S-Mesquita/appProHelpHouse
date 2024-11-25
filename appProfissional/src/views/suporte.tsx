import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert, ImageBackground, Pressable, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from '../css/suporteCss';
import Imagens from "../../img/img";
import { MaterialIcons } from '@expo/vector-icons'; // Expo Icons
import Icon from 'react-native-vector-icons/FontAwesome';

const Suporte: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [activeIndex, setActiveIndex] = useState(null);

    const perfilNav = () => {
        navigation.navigate('homeStack');
    };
    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Fecha a resposta se já estiver aberta
        } else {
            setActiveIndex(index); // Abre a resposta clicada
        }
    };

    // Perguntas e respostas
    const faqs = [
        { question: 'O HelpHouse é seguro? ', answer: 'Claro! O Help House preza a integridade e proteção de nossos usuários.' },
        { question: 'Como posso alterar minhas informações? ', answer: 'Acessando a aba de configurações que se encontra na tela de perfil.' },
        { question: 'Como funciona o pagamento pelos serviços realizados?', answer: 'Após finalizar seu trabalho na tela de pedidos agendados, irá aparecer a forma de pagamento que você definiu com seu cliente. Após isso, só esperar seu pagamento .' },
        { question: 'Posso escolher os serviços que quero aceitar?', answer: 'Sim, aqui no Help House você tem o poder de escolher se irá aceitar ou não os serviços disponíveis.' },
        { question: 'Preciso pagar algo para usar o app?', answer: 'O primeiro mês aqui no Help House é inteiramente grátis. Após o primeiro mês é cobrado uma taxa de $55,00/mês' },
    ];


    return (
        <ImageBackground
            source={Imagens.fundoBemVindo}
            style={styles.background}
            resizeMode="cover"
        >

            <View style={{ marginTop: 70 }}>
                <TouchableOpacity>
                    <AntDesign name="leftcircle" size={30} color='#ffff' style={{ marginLeft: 24 }} onPress={perfilNav} />
                </TouchableOpacity>
                <Text style={styles.TextSuporte}>Suporte</Text>
            </View>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.titulo}>Precisando de ajuda?</Text>
            </View>


            <View style={styles.fundoBranco}>
                <View>
                    <Text style={styles.problema}>Perguntas frequentes</Text>
                    {faqs.map((faq, index) => (
                        <View key={index} style={styles.faqItem}>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <AntDesign name="down" size={18} color="black" style={{ color: '#0044CC' }} />
                                <TouchableOpacity onPress={() => toggleAnswer(index)} style={styles.questionContainer}>
                                    <Text style={styles.question}>{faq.question}</Text>
                                </TouchableOpacity> </View>
                            {activeIndex === index && (
                                <Text style={styles.answer}>{faq.answer}</Text>
                            )}
                        </View>
                    ))}
                </View>
                <Text style={styles.subTitulo}>Ainda está com duvida? {'\n'}Entre em contato conosco através de nossos canais:</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Icon name="envelope" size={20} color="black" style={styles.iconEmail} />
                    <Text style={styles.subTitulo2}>sevencode@gmail.com</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Icon name="whatsapp" size={30} color="green" style={styles.iconWhats} />
                    <Text style={styles.subTitulo4}>(11) 9 7777-7777</Text>
                </View>
            </View>

        </ImageBackground >

    );
};

export default Suporte;
