import api from "../../axios"

export const getPro = async (setData, setLoading, setError) =>{
setLoading(true);

try{
    const response = await api.get("/cli");
    setData(response?.data);
    setLoading(false)
}catch (e){
    setError(true);
    setLoading(false)

}
}