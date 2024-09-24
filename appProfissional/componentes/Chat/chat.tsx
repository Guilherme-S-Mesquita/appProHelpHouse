import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Pusher from 'pusher-js/react-native'; // Importação do Pusher

const Chat: React.FC = () => {
    useEffect(() => {
        // Configuração do Pusher
        const pusher = new Pusher('1858907', {
            cluster: 'sa1',
            
        });

        // Subscribing to the channel
        const channel = pusher.subscribe('channel.${roomId}');

        // Binding to an event
        channel.bind('SendRealTimeMessage', function (data: any) {
            console.log('Evento recebido:', data);
        });

        // Cleanup ao desmontar o componente
        return () => {
            pusher.unsubscribe('channel.${roomId}');
        };
    }, []);

    return (
        <View>
            <Text>Chat Teste</Text>
        </View>
    );
};

export default Chat;
