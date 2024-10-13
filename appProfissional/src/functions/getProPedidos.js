import api from "../../axios"

export const getPedidoPro = async (idContratado, setData, setLoading, setError) => {
    setLoading(true);

    try {
        const response = await api.get(`/profissional/${idContratado}/pedidos`);
        setData(response?.data);
    } catch (e) {
        setError(true);
    } finally {
        setLoading(false);
    }
};
