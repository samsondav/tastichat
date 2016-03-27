import Immutable from 'immutable';

const initialState = Immutable.List([]);

const message = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return Immutable.Map({
        sentAt: action.sentAt,
        body: action.body,
        author: action.author,
        localId: action.localId,
        colour: action.colour,
        state: 'PENDING',
      });
    case 'SERVER_RECEIVED_MESSAGE':
      if (state.get('localId') === action.localId) {
        return state.merge({
          id: action.id,
          localId: null,
          state: 'RECEIVED',
        });
      }
      return state;
    case 'SERVER_REJECTED_MESSAGE':
      if (state.get('localId') === action.localId) {
        return state.merge({
          id: action.id,
          localId: null,
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
