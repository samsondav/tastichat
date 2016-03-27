import $$messages from './messagesReducer';
import nickname from './nicknameReducer';
import { combineReducers } from 'redux';

// it is not currently possible for the user to change his colour
const colourReducer = state => {
  if (state) {
    return state;
  }
  return '#000000';
};

const samChatReducer = combineReducers({
  $$messages,
  nickname,
  colour: colourReducer
});

export default samChatReducer;
