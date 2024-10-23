import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
<<<<<<< HEAD
    baseURL: 'http://192.168.1.13:8000/api',
=======
    baseURL: 'http://172.20.10.6:8000/api',
>>>>>>> 2252855ebd31b36a27900cf05c7d089c283b4cc4
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
