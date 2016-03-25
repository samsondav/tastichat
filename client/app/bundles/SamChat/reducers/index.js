import messagesReducer from './messagesReducer';
import nicknameReducer from './nicknameReducer';
import { combineReducers } from 'redux';

const samChatReducer = combineReducers({
  $$messages: messagesReducer,
  nickname: nicknameReducer,
});

export default samChatReducer;
