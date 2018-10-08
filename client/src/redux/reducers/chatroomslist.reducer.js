const default_state = [
    {
        name: 'Good Chatroom', 
        participants: 1,
        messages: [
            {
                username: '',
                timestamp: '',
                message: 'Welcome to Good Chatroom'
            }
        ]
    },
    {
        name: 'Not-so-good Chatroom', 
        participants: 1,
        messages: [
            {
                username: '',
                timestamp: '',
                message: 'Welcome to Not-so-good Chatroom'
            }
        ]
    },

]; 

export default (state = default_state, action) => {
    switch(action.type){
        case 'UPDATE_CHATROOMSLIST': {
            return action.payload;
        }
        case 'RECEIVE_MESSAGE': {
            const chatrooms = state.map(item => {
                if (item.name === action.payload.roomname){
                    item.messages.push(action.payload);
                }
                return item; 
            });
            return chatrooms;
        }
        case 'RECEIVE_OWN_MESSAGE': {
            const chatrooms = state.map(item => {
                if (item.name === action.payload.roomname){
                    item.messages.push(action.payload);
                }
                return item; 
            });
            return chatrooms;
        }
        default: return state; 
    }
}