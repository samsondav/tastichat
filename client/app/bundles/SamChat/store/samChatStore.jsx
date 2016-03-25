import { createStore  } from 'redux';
import samChatReducer from '../reducers';
import applyMiddleware from './applyMiddleware'

const importMessages = messages => {
  return messages.map(message => {
    let newObject = Object.assign(message, { sentAt: new Date(message.sent_at) })
    delete newObject.sent_at;
    return newObject;
  });
}
// creates the application store from initial props
export default props =>
  createStore(
    samChatReducer,
    { messages: importMessages(props.messages) },
    applyMiddleware
  );
