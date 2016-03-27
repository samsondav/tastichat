import $$messages from './messagesReducer';
import nickname from './nicknameReducer';
import { combineReducers } from 'redux';

const samChatReducer = combineReducers({
  $$messages,
  nickname,
});

export default samChatReducer;
