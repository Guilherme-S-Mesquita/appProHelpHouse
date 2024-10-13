import api from "../../axios"

export const getPedidosPendentes = async (setData, setLoading, setError) =>{
setLoading(true);

try{
    const token = await AsyncStorage.getItem('token');
    
    const response = await api.get("/profissional/${idContratado}/pedidos");
    setData(response?.data);
    setLoading(false)
}catch (e){
    setError(true);
    setLoading(false)

}
}