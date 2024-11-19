import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground, TextInput, Alert } from 'react-native';
import Imagens from '../../img/img';
import styles from '../css/configuracaoCss';
import myContext from '../functions/authContext';
import Entypo from '@expo/vector-icons/Entypo';
import api from '../../axios';
import AntDesign from '@expo/vector-icons/AntDesign';

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
      const response = await api.put(`/pro/${user.idContratado}`, {
        
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
      console.log(telefoneFormatado, cepFormatado )
      console.error("Erro ao atualizar:", error.response?.data);
      const errorMsg = error.response?.data?.message || "Erro ao atualizar os dados. Tente novamente.";
      const errorDetails = error.response?.data?.errors ? JSON.stringify(error.response.data.errors) : '';
      Alert.alert("Erro", `${errorMsg}\n${errorDetails}`);
    }
  }
  const perfilNav = () => {
    navigation.navigate('perfil');
  };
    return (
      <ImageBackground 
      source={Imagens.fundoBemVindo}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={{ marginTop: 70 }}>
        <TouchableOpacity>
          <AntDesign name="leftcircle" size={35} color='#004aad' style={{ marginLeft: 24 }} onPress={perfilNav} />
        </TouchableOpacity>
        <Text style={styles.Textconfiguracao}> Configurações</Text>
      </View>

      <View style={styles.fundoBranco}>
        <View style={styles.container}>
          <Text style={styles.TextmeuDados}>Meus dados</Text> 

          {/* Campo para editar o CEP */}
          <Text style={styles.dados}>CEP</Text>
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

          {/* Campo para editar o email */}
          <Text style={styles.dados}>Email</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmailContratado}
              keyboardType="email-address"
              placeholder="Digite o email"
            />
            <Entypo name="edit" size={22} color="black" style={{ marginLeft: 20, bottom: 6 }} />
          </View>

          {/* Campo para editar o telefone */}
          <Text style={styles.dados}>Telefone</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.input}
              value={telefone}
              onChangeText={setTelefoneContratado}
              keyboardType="phone-pad"
              placeholder="Digite o telefone"
            />
            <Entypo name="edit" size={22} color="black" style={{ marginLeft: 20, bottom: 6 }} />
          </View>

          {/* Botão de salvar */}
          <TouchableOpacity style={styles.saveButton} onPress={update}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
  );
};
export default TelaConfiguracao;


