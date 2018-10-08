import join_chatroom from '../../socket_io/join_room';

export default store => next => action => {
    const state = store.getState();

    switch(action.type){
        case 'UPDATE_CURRENT_CHAT':{
            next(action);
            // join_chatroom(action.payload.name); 
            break; 
        }
        case 'RECEIVE_OWN_MESSAGE': {
            const message = action.payload; 
            action.payload = {
                roomname: state.current_chat.name,
                username: state.username,
                message: message,
                timestamp: new Date().toUTCString()
            };
            next(action);
            break;
        }

        default: next(action);
    }
}