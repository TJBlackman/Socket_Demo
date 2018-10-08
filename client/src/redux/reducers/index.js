import { combineReducers } from 'redux';
import username_Reducer from './username.reducer';
import current_chat from './current_chat.reducer'
import chatroomslist from './chatroomslist.reducer';

const rootReducer = combineReducers({
  username: username_Reducer,
  current_chat: current_chat,
  chatroomslist: chatroomslist
});

export default rootReducer;