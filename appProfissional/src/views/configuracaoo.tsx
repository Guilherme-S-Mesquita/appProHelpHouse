import React, { useState, useContext } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Alert } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Imagens from "../../img/img";
import styles from '../css/configuracaoCss';
import { useUser } from '../proContext';
import myContext from '../functions/authContext';
import api from '../../axios';
import Ionicons from '@expo/vector-icons/Ionicons';

const Configuracao: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { userData } = useUser();
  const { user } = useContext(myContext);

  // Estados para os dados do formulário
  const [telefone, setTelefone] = useState(user ? user.telefoneContratado : '');
  const [email, setEmail] = useState(user ? user.emailContratado : '');
  const [cep, setCep] = useState(user ? user.cepContratado : '');

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
      console.log
      // Chama a API com os dados atualizados
      const response = await api.post(`/proUp/${user.idContratado}`, {
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
      const errorMsg = error.response?.data?.message || "Erro ao atualizar os dados. Tente novamente.";
      const errorDetails = error.response?.data?.errors ? JSON.stringify(error.response.data.errors) : '';
      Alert.alert("Erro", `${errorMsg}\n${errorDetails}`);
    }
  }

  const perfilNav = () => {
    navigation.navigate('homeStack');
  };

  return (
    <ImageBackground
      source={Imagens.fundoBemVindo}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={{ marginTop: 70 }}>
        <TouchableOpacity>
          <AntDesign name="leftcircle" size={35} color='#fff' style={{ marginLeft: 20, top: 12 }} onPress={perfilNav} />
        </TouchableOpacity>
        <Text style={styles.Textconfiguracao}> Configurações</Text>
      </View>

      <View style={styles.fundoBranco}>
      <Text style={styles.TextmeuDados}>Meus dados</Text>
        <View style={styles.container}>
        
          {/* Campo para editar o CEP */}
          <Text style={styles.dados}>CEP</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.input}
              value={cep}
              onChangeText={setCep}
              keyboardType="numeric"
              placeholder="Digite o CEP"
            />
            <Entypo name="edit" size={22} color="black" style={{ marginLeft: 20, top: 9, right: 55 }} />
          </View>
          <Text style={styles.endereco}> {user.cidadeContratado} {user.bairroContratado}</Text>
          <Text style={styles.endereco}> {user.ruaContratado}, {user.numCasaContratado}</Text>
          {/* Campo para editar o email */}
          <Text style={styles.dados}>Email</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Digite o email"
            />
            <Entypo name="edit" size={22} color="black" style={{ marginLeft: 20, top: 9, right: 55 }} />
          </View>

          {/* Campo para editar o telefone */}
          <Text style={styles.dados}>Telefone</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.input}
              value={telefone}
              onChangeText={setTelefone}
              keyboardType="phone-pad"
              placeholder="Digite o telefone"
            />
            <Entypo name="edit" size={22} color="black" style={{ marginLeft: 20, top: 9, right: 55 }} />
          </View>
          <Text style={styles.dados}>Senha</Text>
          <TouchableOpacity><Text style={styles.endereco}>Trocar minha senha </Text> </TouchableOpacity>

          <Text style={styles.dados}>CPF</Text>
          <Text style={styles.endereco}>{user.cpfContratado}</Text>

          <Text style={styles.dados}>Métodos de pagamentos aceito</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Ionicons name="card" size={45} color="black" style={styles.cartao} />
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

export default Configuracao;
