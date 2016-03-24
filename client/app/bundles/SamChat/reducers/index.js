const initialState = [ ];

const message = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        sent_at: action.sent_at,
        body: action.body,
        author: action.author,
        localId: action.localId,
        state: 'PENDING',
      };
    case 'SERVER_RECEIVED_MESSAGE':
      if (state.localId === action.localId) {
        return Object.assign(state, {
          id: action.id,
          localId: null,
          state: 'RECEIVED',
        });
      }
      return state;
    case 'SERVER_REJECTED_MESSAGE':
      if (state.localId === action.localId) {
        return Object.assign(state, {
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
      return [
        ...state,
        message(undefined, action),
      ];
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
