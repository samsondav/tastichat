import { createStore  } from 'redux';
import samChatReducer from '../reducers';
import applyMiddleware from './applyMiddleware'

const importMessages = messages => {
  return messages.map(message =>
    Object.assign(message, { sentAt: new Date(message.sent_at), sent_at: undefined })
  );
}
// creates the application store from initial props
export default props =>
  createStore(
    samChatReducer,
    { messages: importMessages(props.messages) },
    applyMiddleware
  );
