import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground, TextInput, Alert } from 'react-native';
import Imagens from '../../img/img';
import styles from '../css/configuracaoCss';
import myContext from '../functions/authContext';
import Entypo from '@expo/vector-icons/Entypo';
import api from '../../axios';

const TelaConfiguracao: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
const { user } = useContext(myContext);
   
  // Estados para os dados do formulário
  const [telefone, setTelefoneContratado] = useState(user ? user.telefoneContratado : '');
  const [email, setEmailContratado] = useState(user ? user.emailContratado : '');
  const [cep, setCepContratado] = useState(user ? user.cepContratado : '');

  // Função para atualizar o usuário
  async function update() {
    if (!user) {
      Alert.alert("Erro", "Usuário não encontrado");
      return;
    }

    // Remove caracteres não numéricos dos campos telefone e cep
    const telefoneFormatado = telefone.replace(/\D/g, '');
    const cepFormatado = cep.replace(/\D/g, '');

    try {
      // Chama a API com os dados atualizados
      const response = await api.put(`/cli/${user.idContratado}`, {
        
        telefoneContratado: telefoneFormatado,
        emailContratado: email,
        cepContratado: cepFormatado
      });

      if (response.status === 200) {
        Alert.alert("Sucesso", "Dados atualizados com sucesso!");
      } else {
        Alert.alert("Erro", "Houve um problema ao atualizar. Tente novamente.");
      }
    } catch (error: any) {
      console.error("Erro ao atualizar:", error.response?.data);
      // Exibe mensagens de erro detalhadas
      const errorMsg = error.response?.data?.message || "Erro ao atualizar os dados. Tente novamente.";
      const errorDetails = error.response?.data?.errors ? JSON.stringify(error.response.data.errors) : '';
      Alert.alert("Erro", `${errorMsg}\n${errorDetails}`);
    }
  }
    return (
        <ImageBackground
            source={Imagens.fundo}
            style={styles.fundo}
            resizeMode="cover">

            <Text style={styles.config}>Configurações</Text>
            <View style={styles.branco}>
                <Text style={styles.meus}>Meus dados</Text>
                <Text style={styles.cep}>CEP</Text>
                {/* Campo para editar o CEP */}
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.input}
                        value={cep}
                        onChangeText={setCepContratado}
                        keyboardType="numeric"
                        placeholder="Digite o CEP"
                    />
                    <Entypo name="edit" size={22} color="black" style={{ marginLeft: 20, top: 5 }} />
                </View>
                <Text style={styles.email}>Email</Text>
                {/* Campo para editar o Email */}
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmailContratado}
                        keyboardType="email-address"
                        placeholder="Digite o email"
                    />
                    <Entypo name="edit" size={22} color="black" style={{ marginLeft: 20, top: 5 }} />
                </View>
                <Text style={styles.fone}>Telefone</Text>
                {/* Campo para editar o Telefone */}
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.input}
                        value={telefone}
                        onChangeText={setTelefoneContratado}
                        keyboardType="phone-pad"
                        placeholder="Digite o telefone"
                    />
                    <Entypo name="edit" size={22} color="black" style={{ marginLeft: 20, top: 5 }} />
                </View>
               
            </View>
        </ImageBackground>


    );
};
export default TelaConfiguracao;


