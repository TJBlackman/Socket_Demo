
export const update_username = (username) => {
    return {
        type: 'UPDATE_USERNAME',
        payload: username
    }
};

export const sign_out = () => {
    return {
        type: 'SIGN_OUT'
    }
};

export const update_chatroomlist = (array_chatrooms) => {
    return {
        type: 'UPDATE_CHATROOMSLIST',
        payload: array_chatrooms
    }
}

export const update_current_chatroom = (chatroom_obj) => {
    return {
        type: 'UPDATE_CURRENT_CHAT',
        payload: chatroom_obj
    }
}

export const receive_message = (payload) => {
    return {
        type: 'RECEIVE_MESSAGE',
        payload
    }
}

export const record_own_message = (payload) => {
    return {
        type: 'RECEIVE_OWN_MESSAGE',
        payload
    }
}