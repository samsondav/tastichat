import messages from './messages';
import { combineReducers } from 'redux'

const samChatReducer = combineReducers({
  messages,
})

export default samChatReducer;
