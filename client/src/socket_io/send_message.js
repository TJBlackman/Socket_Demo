import socket from './socket';
import store from '../redux/index';


const send_message_to_server = (message) => {
    const state = store.getState();
    const obj = {
        roomname: state.current_chat.name,
        username: state.username,
        message: message,
        timestamp: new Date().toUTCString()
    };
    socket.emit(state.current_chat.name, obj);
}; 

export default send_message_to_server; 