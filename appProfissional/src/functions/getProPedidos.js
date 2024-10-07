import api from '../../axios'; // Importa a instância do Axios

export const getProPedidos = async (setData, setLoading, setError) => {
  setLoading(true);
  try {
    const response = await api.get(`/profissional/${idContratado}/pedidos`); // Chamada para a API
    setData(response.data);
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    setError(true);
  } finally {
    setLoading(false);
  }
};
