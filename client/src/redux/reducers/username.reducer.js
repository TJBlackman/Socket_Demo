
const signin = (state = null, action) => {
    switch (action.type){
        case 'UPDATE_USERNAME': {
            return action.payload; 
        }
        case 'SIGN_OUT': {
            return ''; 
        }
        default: return state; 
    }
};

export default signin;