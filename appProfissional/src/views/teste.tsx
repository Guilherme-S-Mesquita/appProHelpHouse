import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from "../../componentes/Button/Button"; // Verifique se o caminho está correto
import {getPro} from "../functions/getPro";




const List: React.FC<{ navigation: any }> = ({ navigation })=> {

  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState (false);
const [error, setError] = useState (false)

  useEffect(() => {
    getPro(setData, setLoading, setError);
  }, [])
  useEffect(() => {
    console.log(data)
  }, [data]);


  return (
    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Criar Usuário</Text>

    </TouchableOpacity>
  );
};


export default List;