import Immutable from 'immutable';
import MessageRecord from '../store/MessageRecord';
import Config from 'lib/Config'

const initialState = Immutable.List([]);

const message = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return new MessageRecord({
        sentAt: action.sentAt,
        body: action.body,
        fruit: Config.get('FRUIT'),
        localId: action.localId,
        state: 'PENDING',
      });
    case 'SERVER_RECEIVED_MESSAGE':
      if (state.get('localId') === action.localId) {
        return state.merge({
          id: action.id,
          state: 'RECEIVED',
        });
      }
      return state;
    case 'SERVER_REJECTED_MESSAGE':
      if (state.get('localId') === action.localId) {
        return state.merge({
          id: action.id,
          state: 'REJECTED',
        });
      }
      return state;
    default:
      return state;
  }
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return state.push(message(undefined, action));
    case 'SERVER_RECEIVED_MESSAGE':
    case 'SERVER_REJECTED_MESSAGE':
      return state.map(m =>
        message(m, action)
      );
    default:
      return state;
  }
};

export default messages;
