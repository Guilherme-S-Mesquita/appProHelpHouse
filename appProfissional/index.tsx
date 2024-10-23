import {
    Pusher,
    PusherEvent,
  } from '@pusher/pusher-websocket-react-native';
  
  const pusher = Pusher.getInstance();
  
    await pusher.init({
      apiKey: "6aef362f6c720f776c8b",
      cluster: "sa1"
    });
      
    await pusher.connect();
    await pusher.subscribe({
      channelName: "channel", 
      onEvent: (event: PusherEvent) => {
        console.log(`Event received: ${event}`);
      }
    });