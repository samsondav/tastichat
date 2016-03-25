import messages from './messages';
import { combineReducers } from 'redux'

const samChatReducer = combineReducers({
  $$messages: messages,
})

export default samChatReducer;
