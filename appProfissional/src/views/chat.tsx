import React, { useState, useEffect, useRef, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, TextInput, Image, Pressable, Animated, ScrollView, Alert, Modal } from 'react-native';
import styles from '../css/chatCss';
import Imagens from "../../img/img";
import api from '../../axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pusher from 'pusher-js';
import myContext from '../functions/authContext';
import { TextInputMask } from 'react-native-masked-text';


//imports para gerar e compartilhar PDF
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';



const Chat: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {

    //chat
    const [mensagem, setMensagem] = useState('');  // Armazena a mensagem atual
    const [mensagens, setMensagens] = useState<any[]>([]);  // Armazena todas as mensagens
    const { roomId, idContratante, idSolicitarPedido } = route.params;  // Recebe o roomId da rota
    const { user } = useContext(myContext);  // Pega o usuário autenticado (o profissional) do contexto
    const [token, setToken] = useState<string | null>(null);  // Token de autenticação
    const [buttonScale] = useState(new Animated.Value(1));
    const scrollViewRef = useRef<ScrollView>(null);  // Ref para ScrollView

    //PDF
    const [dataContratante, setDataContratante] = useState<any>(null);
    const [dataContratado, setDataContratado] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSharing, setIsSharing] = useState(false); // novo estado



    //MODAL
    const [isModalVisible, setModalVisible] = useState(false); // Estado do modal
    const [descServico, setDescServico] = useState('');
    const [dataMarcada, setDataMarcada] = useState('');
    const [horaMarcada, setHoraMarcada] = useState('')
    const [valorCobrado, setValorCobrado] = useState('');
    const [formaPagamento, setFormaPagamento] = useState('');
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);




    // Toggle para exibir ou esconder o modal
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };



    // Função para buscar mensagens da sala





    const fetchMensagens = async () => {
        try {
            const token = await AsyncStorage.getItem('authToken');
            if (!token) {
                console.error('Token não encontrado');
                return;
            }
            const response = await api.get(`/chat/messages/${roomId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setMensagens(response.data.messages);
        } catch (error) {
            console.error('Erro ao buscar mensagens:', error);
        }
    };

    // Função para enviar mensagem
    const enviarMensagem = async () => {
        if (!mensagem.trim()) return; // Evita enviar mensagens vazias
        try {
            const token = await AsyncStorage.getItem('authToken');
            if (!token) {
                console.error('Token não encontrado');
                return;
            }
            
            const response = await api.post('/chat/send', {
                roomId,  // ID da sala de chat
                message: mensagem,  // Mensagem a ser enviada
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            
            setMensagens((prevMensagens) => [...prevMensagens, response.data.message]);  // Atualiza as mensagens usando o estado anterior
            await setMensagem('');  // Limpa o campo de entrada
            
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        }
    };
    // Configuração do Pusher para receber mensagens em tempo real
    useEffect(() => {
        const pusher = new Pusher('c58eb1455bc63e559d2c', {
            cluster: 'sa1',
        });

        const channel = pusher.subscribe(`chat-room-${roomId}`);
        channel.bind('new-message', (data: { message: any; }) => {
            setMensagens((prevMensagens) => [...prevMensagens, data.message]);  // Atualiza as mensagens
        });

        return () => {
            pusher.unsubscribe(`chat-room-${roomId}`);
        };
    }, [roomId]);

    // Carregar mensagens da sala ao montar o componente
    useEffect(() => {
        fetchMensagens();
    }, [roomId]);

    // Rolar o ScrollView para o final sempre que as mensagens mudarem
    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [mensagens]);

    // Animação do botão de envio
    const onPressIn = () => {
        Animated.spring(buttonScale, { toValue: 0.9, useNativeDriver: true }).start();
    };

    const onPressOut = () => {
        Animated.spring(buttonScale, { toValue: 1, useNativeDriver: true }).start();
    };


    // Buscar dados do contratado
    useEffect(() => {
        const fetchDataContratado = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/pro/${user.idContratado}`);
                setDataContratado(response.data);
            } catch (err: any) {
                setError(err.message);
                Alert.alert('Erro ao buscar dados do Contratado', err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchDataContratado();
    }, [user.idContratado]);

    // Buscar dados do contratante
    useEffect(() => {
        const fetchDataContratante = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/cli/${idContratante}`);
                setDataContratante(response.data);
            } catch (err: any) {
                setError(err.message);
                Alert.alert('Erro ao buscar dados do Contratante', err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchDataContratante();
    }, [idContratante]);

    const createPDF = async () => {
        if (!dataContratante || !dataContratado) {
            Alert.alert('Erro', 'Nenhum dado disponível para gerar o PDF.');
            return;
        }

        
    
        const { nomeContratante, cpfContratante } = dataContratante;
        const { nomeContratado, cpfContratado } = dataContratado;
    
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Contrato de Prestação de Serviços</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                h1 { text-align: center; color: navy; }
                h2 { color: darkblue; margin-top: 20px; }
                p { margin-bottom: 10px; }
                .section { margin-bottom: 15px; }
            </style>
        </head>
        <body>
            <h1>Contrato de Prestação de Serviços</h1>
        
            <div class="section">
                <h2>1. Partes</h2>
                <p><strong>Contratante:</strong> ${nomeContratante}</p>
                <p><strong>CPF do Contratante:</strong> ${cpfContratante}</p>
                <p><strong>Contratado:</strong> ${nomeContratado}</p>
                <p><strong>CPF do Contratado:</strong> ${cpfContratado}</p>
            </div>
        
            <div class="section">
                <h2>2. Objeto do Contrato</h2>
                <p>O presente contrato tem como objeto a prestação do serviço descrito a seguir: ${descServico}.</p>
                <p><strong>Data e Hora da Execução:</strong> ${dataMarcada}, às ${horaMarcada}.</p>
            </div>
        
            <div class="section">
                <h2>3. Valor e Forma de Pagamento</h2>
                <p><strong>Valor Total:</strong> ${valorCobrado}</p>
                <p><strong>Forma de Pagamento:</strong> ${formaPagamento}</p>
            </div>
        
            <div class="section">
                <h2>4. Obrigações do Contratante</h2>
                <ul>
                    <li>Efetuar o pagamento conforme estipulado.</li>
                    <li>Fornecer informações precisas e completas para a execução do serviço.</li>
                    <li>Garantir acesso ao local e condições adequadas para a realização do serviço.</li>
                </ul>
            </div>
        
            <div class="section">
                <h2>5. Obrigações do Contratado</h2>
                <ul>
                    <li>Realizar o serviço com diligência, competência e dentro do prazo combinado.</li>
                    <li>Respeitar as normas de segurança e conduta aplicáveis.</li>
                    <li>Notificar o contratante sobre qualquer situação que possa impedir a execução do serviço.</li>
                </ul>
            </div>
        
            <div class="section">
                <h2>6. Cancelamento e Penalidades</h2>
                <p>Em caso de cancelamento pelo contratante sem aviso prévio de 24 horas, será aplicada uma multa de 20% do valor total.</p>
                <p>O contratado pode cancelar o serviço por motivos de força maior, devendo comunicar o contratante imediatamente e, se necessário, reembolsar valores pagos antecipadamente.</p>
            </div>
        
            <div class="section">
                <h2>7. Disposições Finais</h2>
                <p>Este contrato é regido pelas leis aplicáveis e reflete a vontade das partes, sendo assinado eletronicamente e com valor legal.</p>
                <p>Quaisquer alterações a este contrato devem ser feitas por escrito e assinadas por ambas as partes.</p>
            </div>
        
           
        </body>
        </html>
        
        `;
    
        try {
            const valorNumericoString = valorCobrado.replace(/[R$\s]/g, '').replace(',', '.');
            const dataISO = dataMarcada.split('/').reverse().join('-');
            const { uri } = await Print.printToFileAsync({ html });



            console.log("Dados enviados ao backend:", {
                valor: valorNumericoString,
                data: dataISO,
                hora: horaMarcada,
                desc_servicoRealizado: descServico,
                forma_pagamento: formaPagamento,
            });
        
            const response = await api.post(`/pedidos/${idSolicitarPedido}/contrato`, {
                valor: valorNumericoString,
                data: dataISO,
                hora: horaMarcada,
                desc_servicoRealizado: descServico,
                forma_pagamento: formaPagamento,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

        
            if (response.status === 201) {
                Alert.alert('Sucesso', 'PDF gerado e contrato criado com sucesso!');

            await Sharing.shareAsync(uri);
                navigation.navigate('pedidosAgendadosTab', );


            } else {
                Alert.alert('Erro', 'Não foi possível criar o contrato. Verifique os dados e tente novamente.');
            }
        } catch (error: any) {
            console.error("Erro ao criar contrato:", error.response?.data);
            if (error.response && error.response.status === 422) {
                Alert.alert('Erro de Validação', JSON.stringify(error.response.data.error));
            } else {
                Alert.alert('Erro', 'Não foi possível gerar o PDF ou criar o contrato.');
            }
        }
    };        

    // Recarregar as mensagens a cada 5 segundos
    useEffect(() => {
        fetchMensagens(); // Busca inicial de mensagens
        const intervalId = setInterval(() => {
            fetchMensagens(); // Recarregar mensagens a cada 5 segundos
        }, 1000);

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
    }, [roomId]);

    const nomeContratante = dataContratante ? dataContratante.nomeContratante : 'Chat';

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.navChat}>
                <View style={styles.navContent}>
                    <View style={styles.navbar}>
                        <Text style={styles.textNav}>{nomeContratante}</Text>
                        <TouchableOpacity onPress={toggleModal} style={styles.botaoPDF}>
                            <Text style={styles.textoBotao}>Fechar negócio.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Detalhes do Serviço</Text>

                        <ScrollView style={styles.modalForm} showsVerticalScrollIndicator={false}>
                            <Text style={styles.modalLabel}>Descrição de Serviço:</Text>
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Descrição do serviço que será realizado"
                                value={descServico}
                                onChangeText={setDescServico}
                            />

                            <Text style={styles.modalLabel}>Data Marcada:</Text>
                            <TextInputMask
                                type={'datetime'}
                                options={{
                                    format: 'DD/MM/YYYY', // Ajuste o formato da data conforme necessário
                                }}
                                value={dataMarcada}
                                onChangeText={text => setDataMarcada(text)}
                                style={styles.modalInput}
                                placeholder="Digite a data marcada"
                                placeholderTextColor="#999"
                                returnKeyType='done'
                            />
                            <Text style={styles.modalLabel}>Hora Marcada:</Text>
                            <TextInputMask
                                type={'datetime'}
                                options={{
                                    format: 'HH:mm',
                                }}
                                value={horaMarcada}  // Corrigido para horaMarcada
                                onChangeText={text => setHoraMarcada(text)}
                                style={styles.modalInput}
                                placeholder="Digite a hora marcada"
                                placeholderTextColor="#999"
                                returnKeyType='done'
                            />


                            <Text style={styles.modalLabel}>Valor Cobrado:</Text>
                            <TextInputMask
                                type={'money'}

                                value={valorCobrado}
                                onChangeText={text => setValorCobrado(text)}
                                style={styles.modalInput}
                                placeholder="Digite a data marcada"
                                placeholderTextColor="#999"
                                returnKeyType='done'
                            />

                            <Text style={styles.modalLabel}>Forma de Pagamento:</Text>
                            <TouchableOpacity
                                style={styles.selectContainer}
                                onPress={() => setShowPaymentOptions(!showPaymentOptions)}
                            >
                                <Text style={styles.selectText}>
                                    {formaPagamento ? formaPagamento : "Selecione uma opção"}
                                </Text>
                            </TouchableOpacity>

                            {showPaymentOptions && (
                                <View style={styles.optionsContainer}>
                                    {["Pix", "Cartão de Crédito", "Cartão de Débito"].map((option) => (
                                        <TouchableOpacity
                                            key={option}
                                            style={styles.optionButton}
                                            onPress={() => {
                                                setFormaPagamento(option);
                                                setShowPaymentOptions(false);
                                            }}
                                        >
                                            <Text style={styles.optionText}>{option}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </ScrollView>

                        <View style={styles.modalButtons}>
                            <TouchableOpacity onPress={createPDF} style={styles.confirmButton}>
                                <Text style={styles.buttonText}>Confirmar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleModal} style={styles.cancelButton}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>




            <ScrollView style={styles.mensagensContainer} ref={scrollViewRef}>
  {mensagens.map((msg, index) => {
    // Verificar se a mensagem foi enviada pelo contratante ou pelo contratado
    const isContratado = msg.idContratado === user.idContratado;
    const cor = isContratado ? "#ADD8E6" : "#FFD580";
    const alinhamento = isContratado ? "flex-end" : "flex-start";

    return (
      <View
        key={index}
        style={[
          styles.mensagemItem,
          {
            alignSelf: alinhamento,
            backgroundColor: cor,
            borderRadius: 10,
            padding: 10,
            maxWidth: '70%',
          },
        ]}
      >
        <Text>{msg.message}</Text>
      </View>
    );
  })}
</ScrollView>



            {/* Input para enviar mensagem */}
            <View style={styles.enviarMensagem}>
                <View style={styles.inputContent}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua mensagem..."
                        value={mensagem}
                        onChangeText={setMensagem}  // Atualiza o estado com o valor digitado
                    />
                    <Animated.View style={[styles.enviar, { transform: [{ scale: buttonScale }] }]}>
                        <Pressable
                            onPress={enviarMensagem}
                            onPressIn={onPressIn}  // Animação ao pressionar
                            onPressOut={onPressOut}  // Animação ao soltar
                        >
                            <Image source={Imagens.iconEnviar} style={styles.icon} />
                        </Pressable>
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

export default Chat;
function setReload(arg0: (prevReload: any) => boolean) {
    throw new Error('Function not implemented.');
}

