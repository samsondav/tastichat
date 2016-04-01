import Immutable from 'immutable';

const initialState = Immutable.List([]);

const message = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return action.messageRecord;
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
    case 'SERVER_PUBLISHED_MESSAGE':
      if (state.some(m => m.id === action.messageRecord.id)) {
        // message is already in the store, do nothing
        return state;
      }
      return state.push(action.messageRecord);
    default:
      return state;
  }
};

export default messages;
