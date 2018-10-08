import socket from './socket';
import store from '../redux/index';


const send_message_to_server = (name) => {
    socket.join(name);
}; 

export default send_message_to_server; 