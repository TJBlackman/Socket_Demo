import io from 'socket.io-client';
import store from '../redux/index';

import { receive_message } from '../redux/actions/index';

const socket = io.connect(); 

const patch = require('socketio-wildcard')(io.Manager);
patch(socket);

const state = store.getState();

const current_roomname = state.current_chat !== null ? state.current_chat.name : 'unknwon room';


socket.on('*', (response) => {

    const message_data = response.data[1];
    store.dispatch( receive_message(message_data) );
});

export default socket; 