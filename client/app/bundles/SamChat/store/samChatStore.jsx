import { createStore  } from 'redux';
import samChatReducer from '../reducers';
import applyMiddleware from './applyMiddleware'
import Immutable from 'immutable';


const importMessages = messages => {
  // const messagesArray = messages.map(message => {
  //   const newObject = Object.assign(message, { sentAt: new Date(message.sent_at) })
  //   delete newObject.sent_at;
  //   return newObject;
  // });
  const $$messages = Immutable.fromJS(messages);
  return $$messages.map(
    $$message =>
      $$message.set(
        'sentAt', new Date($$message.get('sent_at'))
      ).remove('sent_at')
  );
};

// creates the application store from initial props
export default props =>
  createStore(
    samChatReducer,
    { $$messages: importMessages(props.messages) },
    applyMiddleware
  );
