import $$messages from './messagesReducer';
import nickname from './nicknameReducer';
import { combineReducers } from 'redux';

// it is not currently possible for the user to change his colour
const colourReducer = (state = '#000000') => state;

const samChatReducer = combineReducers({
  $$messages,
  nickname,
  colour: colourReducer,
});

export default samChatReducer;
