import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({


<<<<<<< HEAD
    baseURL:'http://172.20.10.3:8000/api',
=======
    baseURL:'http://192.168.1.194:8000/api',
>>>>>>> d77c95869d8ff628a4cc34c5d0163ac127ff7cc5


});

// Adiciona o interceptor para incluir o token em todas as requisições
api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
