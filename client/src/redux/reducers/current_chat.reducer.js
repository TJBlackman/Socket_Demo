export default (state = null, action) => {
    switch(action.type){
        case 'UPDATE_CURRENT_CHAT': {
            return action.payload; 
        }
        case 'RECEIVE_MESSAGE': {
            if (state.name === action.payload.roomname){
                const all_messages = [...state.messages];
                all_messages.push(action.payload); 
                return {
                    ...state,
                    messages: all_messages
                }
            } else {
                return state;
            }
        }
        case 'RECEIVE_OWN_MESSAGE': {
            const all_messages = [...state.messages];
            all_messages.push(action.payload); 
            return {
                ...state,
                messages: all_messages
            }
        }
        default: return state; 
    }
}