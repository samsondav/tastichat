const initialState = [
  {id: 1, body: 'test', author: 'test', timestamp: (new Date)}
];

const message = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        id: action.id,
        timestamp: action.timestamp,
        body: action.body,
        author: action.author,
      };
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
    default:
      return state;
  }
};

export default messages;
