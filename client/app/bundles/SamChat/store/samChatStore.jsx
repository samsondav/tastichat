import { createStore } from 'redux';
import samChatReducer from '../reducers';
import applyMiddleware from './applyMiddleware';
import Immutable from 'immutable';
import MessageRecord from './MessageRecord';

const importMessages = messages =>
  Immutable.List(
    messages.map(
      message => {
        const messageRecord = new MessageRecord(message);
        return messageRecord.set('sentAt', new Date(message.sent_at));
      }
    )
  );

// creates the application store from initial props
export default ({ messages, colour }) => {
  const initialMessages = importMessages(messages);
  return createStore(
    samChatReducer,
    {
      $$messages: initialMessages,
      colour: colour,
    },
    applyMiddleware
  );
}
