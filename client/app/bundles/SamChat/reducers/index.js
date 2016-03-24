const initialState = [
  {id: 1, body: 'test', author: 'test', timestamp: (new Date)}
];

const message = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        timestamp: action.timestamp,
        body: action.body,
        author: action.author,
        localId: action.localId,
      };
    case 'SERVER_RECEIVED_MESSAGE':
      if (state.localId === action.localId) {
        return Object.assign(state, {
          id: action.id,
          localId: null,
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
      return state.map(m =>
        message(m, action)
      );
    default:
      return state;
  }
};

export default messages;
