import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, ActivityIndicator } from 'react-native';
import styles from '../css/pedidosAgendadosCss';
import Imagens from '../../img/img';


const PedidosAgendados = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.agendamentos}>
                    <Text style={styles.textoAgendamento}>Agendamentos</Text>


                    <View style={styles.cabeçalhoPedido}>
                        <Text style={styles.pedido}>Pedidos</Text>
                        <Image source={Imagens.iconFiltro} style={styles.filtro} />


                    </View>

                </View>

                <View style={styles.cartaoSolicitação}>
                    <Text style={styles.tituloSolicitação}>Conserto de Chuveiro</Text>
                    <Text style={styles.cliente}>Cliente:<Text style={styles.nomeCliente}> Mariana Silva</Text></Text>
                    <Text style={styles.localizacao}>São Paulo, Guaianases.<Text style={styles.doisKm}> Á 2 km de você</Text></Text>
                    <Text style={styles.data}>Data e hora:<Text style={styles.diaHora}> 20/9 ás 14:00</Text></Text>
                    <Text style={styles.situaçãoPagamento}>Situação do Pagamento:<Text style={styles.sinal}> Sinal R$50,00</Text></Text>
                    <TouchableOpacity style={styles.botaoConversar}> 
                    <Text style={styles.conversar}>Conversar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>

    );
};



export default PedidosAgendados;