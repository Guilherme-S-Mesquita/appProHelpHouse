import React, { useContext,useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, ImageBackground, TextInput, ScrollView,KeyboardAvoidingView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import { useImage } from '../imageContext';
import Entypo from '@expo/vector-icons/Entypo';
import styles from '../css/ultimosPassosCss';
import { useUser } from '../proContext';
import api from '../../axios';
import myContext from '../functions/authContext';
import Imagens from '../../img/img';


const UltimosPassos: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const [uploading, setUploading] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { imageUrl, setImageUrl } = useImage();

    const [uploadingPor, setUploadingPor] = useState<boolean>(false);
    const [selectedImagePor, setSelectedImagePor] = useState<string | null>(null);
    const { portifolio1, setPortifolio1 } = useImage();

    const [uploadingPortifolio2, setUploadingPortifolio2] = useState<boolean>(false);
    const [selectedImagePortifolio2, setSelectedImagePortifolio2] = useState<string | null>(null);
    const { portifolio2, setPortifolio2 } = useImage();

    const [uploadingPortifolio3, setUploadingPortifolio3] = useState<boolean>(false);
    const [selectedImagePortifolio3, setSelectedImagePortifolio3] = useState<string | null>(null);
    const { portifolio3, setPortifolio3 } = useImage();


    const { setUserId, setUserData } = useUser();
    const [loading, setLoading] = useState<boolean>(false); // New state for data submission loading
    const userContext = useContext(myContext);
    const { user, setUser } = useContext(myContext);
    // const [descricao, setDescricao] = useState('');
    const[descContratado, setDescContratado] = useState('');


    // Pick Image Function
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };
    

    // Upload Image to Firebase
    const uploadMedia = async () => {
        if (!selectedImage) {
            Alert.alert('Erro', 'Nenhuma imagem selecionada.');
            return;
        }

        setUploading(true);

        try {
            const response = await fetch(selectedImage);
            const blob = await response.blob();
            const filename = selectedImage.substring(selectedImage.lastIndexOf('/') + 1);
            const storageRef = ref(storage, `images/${filename}`);
            await uploadBytes(storageRef, blob);
            const url = await getDownloadURL(storageRef);
            setImageUrl(url);
            setSelectedImage(null);
            Alert.alert('Sucesso', 'Imagem enviada com sucesso!');
            console.log(response)
        } catch (error) {
            console.error('Erro ao enviar a imagem:', error);
            Alert.alert('Erro', 'Falha ao enviar a imagem.');
        } finally {
            setUploading(false);
        }
    };





    const pickImage1 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.canceled) {
            setSelectedImagePor(result.assets[0].uri);
        }
    };


    const uploadMedia1 = async () => {
        if (!selectedImagePor) {
            Alert.alert('Erro', 'Nenhuma imagem selecionada.');
            return;
        }

        setUploadingPor(true);

        try {
            const response = await fetch(selectedImagePor);
            const blob = await response.blob();
            const filename = selectedImagePor.substring(selectedImagePor.lastIndexOf('/') + 1);
            const storageRef = ref(storage, `images/${filename}`);
            await uploadBytes(storageRef, blob);
            const url = await getDownloadURL(storageRef);
            setPortifolio1(url);
            setSelectedImagePor(null);
            Alert.alert('Sucesso', 'Imagem enviada com sucesso!');
            console.log(response)
        } catch (error) {
            console.error('Erro ao enviar a imagem:', error);
            Alert.alert('Erro', 'Falha ao enviar a imagem.');
        } finally {
            setUploadingPor(false);
        }
    };





    const pickImage2 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.canceled) {
            setSelectedImagePortifolio2(result.assets[0].uri);
        }
    };


    const uploadMedia2 = async () => {
        if (!selectedImagePortifolio2) {
            Alert.alert('Erro', 'Nenhuma imagem selecionada.');
            return;
        }

        setUploadingPor(true);

        try {
            const response = await fetch(selectedImagePortifolio2);
            const blob = await response.blob();
            const filename = selectedImagePortifolio2.substring(selectedImagePortifolio2.lastIndexOf('/') + 1);
            const storageRef = ref(storage, `images/${filename}`);
            await uploadBytes(storageRef, blob);
            const url = await getDownloadURL(storageRef);
            setPortifolio2(url);
            setSelectedImagePortifolio2(null);
            Alert.alert('Sucesso', 'Imagem enviada com sucesso!');
            console.log(response)
        } catch (error) {
            console.error('Erro ao enviar a imagem:', error);
            Alert.alert('Erro', 'Falha ao enviar a imagem.');
        } finally {
            setUploadingPortifolio2(false);
        }
    };


    const pickImage3 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.canceled) {
            setSelectedImagePortifolio3(result.assets[0].uri);
        }
    };





    const uploadMedia3 = async () => {
        if (!selectedImagePortifolio3) {
            Alert.alert('Erro', 'Nenhuma imagem selecionada.');
            return;
        }

        setUploadingPor(true);

        try {
            const response = await fetch(selectedImagePortifolio3);
            const blob = await response.blob();
            const filename = selectedImagePortifolio3.substring(selectedImagePortifolio3.lastIndexOf('/') + 1);
            const storageRef = ref(storage, `images/${filename}`);
            await uploadBytes(storageRef, blob);
            const url = await getDownloadURL(storageRef);
            setPortifolio3(url);
            setSelectedImagePortifolio3(null);
            Alert.alert('Sucesso', 'Imagem enviada com sucesso!');
            console.log(response)
        } catch (error) {
            console.error('Erro ao enviar a imagem:', error);
            Alert.alert('Erro', 'Falha ao enviar a imagem.');
        } finally {
            setUploadingPortifolio3(false);
        }
    };






















    // Extracting route params
    const { nomeContratado, sobrenomeContratado, nascContratado, cpfContratado, telefoneContratado, emailContratado, password, cepContratado,
        bairroContratado, ruaContratado, numCasaContratado, cidadeContratado, profissaoContratado, regiaoContratado,descProfissaoContratado } = route.params;

    // Submit Professional Data
    const Verificar = async () => {
        setLoading(true); // Start the loading state
        try {
            const response = await api.post('/proo', {
                nomeContratado,
                sobrenomeContratado,
                profissaoContratado,
                cpfContratado,
                emailContratado,
                telefoneContratado,
                password,
                nascContratado,
                cepContratado,
                bairroContratado,
                ruaContratado,
                numCasaContratado,
                cidadeContratado,
                descContratado,
                regiaoContratado,
                descProfissaoContratado,
                imagemContratado:imageUrl,
                portifilioPro1:portifolio1,
                portifilioPro2:portifolio2,
                portifilioPro3:portifolio3
            });

            const result = response.data;

            // Pegando id do profissional
            const idPro = result.data.idContratado;
            if (idPro) {
                setUserId(idPro);
                await fetchDadosPro(idPro);
            }

            console.log('Os dados foram inseridos com sucesso!', result);
            navigation.navigate('login'); // Navigate to profile page

        } catch (error: any) {
            if (error.response) {
                console.error('Erro:', error.response.data);
                Alert.alert('Erro', error.response.data.message || 'Ocorreu um erro ao enviar os dados.');
            } else {
                console.error('Erro:', error.message);
                Alert.alert('Erro', 'Ocorreu um erro ao enviar os dados.');
            }
        } finally {
            setLoading(false); // End the loading state
        }
    };

    // Fetch Professional Data
    const fetchDadosPro = async (idPro: string) => {
        try {
            const response = await api.get(`/pro/${idPro}`);
            const data = response.data;

            if (response.status === 200) {
                console.log('Dados recebidos:', data);
                setUserData(data);
                setUser(data);
            } else {
                console.error('Erro ao buscar os dados do profissional:', data.message);
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (

        <View style={styles.containerPrincipal}>
            <Text style={styles.ultimos}>Últimos<Text style={styles.passos}> passos</Text></Text>
            <Text style={styles.acabando}>Já estamos acabando, adicione as {'\n'}últimas informações para criarmos a {'\n'}sua conta!</Text>

            <ImageBackground style={styles.background} resizeMode="cover">
                <View style={styles.fundoAzul}>
                    <View style={styles.container}>
                        <Image source={selectedImage ? { uri: selectedImage } : { uri: imageUrl }} style={styles.imgPerfil} />
                        <View style={styles.cameraIcon}>
                            <TouchableOpacity onPress={pickImage}>
                                <Entypo name="camera" size={34} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.container2}>

                <Text style={styles.voce}>Fale um pouco sobre você</Text>
                <TextInput
                 value={descContratado}
                 onChangeText={setDescContratado}
                    style={{
                        borderBottomWidth: 2,
                        borderColor: '#fff',
                        color: '#fff',
                        fontSize: 18,
                        top: 30,
                        paddingHorizontal: 5,
                        width:351,
                        right:9,
                        fontWeight:'600'
                    }}
                     returnKeyType='done'
                    placeholder=""
                    placeholderTextColor="#fff"
                    >
                </TextInput>
            </View>







            <View style={styles.containerProtifolio}>
                <Text style={styles.textPromova}>Promova o seu trabalho,adicione {'\n'}fotos no seu portifólio!</Text>
        <View style={styles.portfolioItem}>
            <Image 
                source={selectedImagePor ? { uri: selectedImagePor } : { uri: portifolio1 }} 
                    style={styles.imgPortifilio} 
                        />
                        <View style={[styles.IconPor, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                        <TouchableOpacity onPress={pickImage1}>
                        <Entypo name="plus" size={34} color="white" />  
                    </TouchableOpacity>
            </View>
        </View>
        <View style={styles.portfolioItem}>
            <Image 
                source={selectedImagePortifolio2 ? { uri: selectedImagePortifolio2 } : { uri: portifolio2 }} 
                    style={styles.imgPortifilio} 
                        />
                        <View style={[styles.IconPor, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                        <TouchableOpacity onPress={pickImage2}>
                        <Entypo name="plus" size={34} color="white" />  
                    </TouchableOpacity>
            </View>
        </View>

        <View style={styles.portfolioItem}>
            <Image 
                source={selectedImagePortifolio3 ? { uri: selectedImagePortifolio3 } : { uri: portifolio3 }} 
                    style={styles.imgPortifilio} 
                        />
                        <View style={[styles.IconPor, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                        <TouchableOpacity onPress={pickImage3}>
                        <Entypo name="plus" size={34} color="white" />  
                    </TouchableOpacity>
            </View>
        </View>
    </View>











            <View style={styles.container}>
                {selectedImage && (
                    <TouchableOpacity onPress={uploadMedia} style={styles.button} disabled={uploading}>
                        <Text style={styles.buttonText}>{uploading ? 'Enviando...' : 'Confirmar imagem'}</Text>
                    </TouchableOpacity>
                )}

                {selectedImagePor && (
                    <TouchableOpacity onPress={uploadMedia1} style={styles.button} disabled={uploadingPor}>
                        <Text style={styles.buttonText}>{uploadingPor ? 'Enviando...' : 'Confirmar imagem'}</Text>
                    </TouchableOpacity>
                )}

                {selectedImagePortifolio2 && (
                    <TouchableOpacity onPress={uploadMedia2} style={styles.button} disabled={uploadingPortifolio2}>
                        <Text style={styles.buttonText}>{uploadingPortifolio2 ? 'Enviando...' : 'Confirmar imagem'}</Text>
                    </TouchableOpacity>
                )}

                {selectedImagePortifolio3 && (
                    <TouchableOpacity onPress={uploadMedia3} style={styles.button} disabled={uploadingPortifolio3}>
                        <Text style={styles.buttonText}>{uploadingPortifolio3 ? 'Enviando...' : 'Confirmar imagem'}</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity onPress={Verificar} style={styles.button} disabled={loading}>
                    <Text style={styles.buttonText}>{loading ? 'Salvando...' : 'Criar conta'}</Text>
                </TouchableOpacity>
            </View>
        
</View>

    );
};

export default UltimosPassos;