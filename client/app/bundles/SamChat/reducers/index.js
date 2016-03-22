const initialState = [
  {id: 1, body: 'test', author: 'test', timestamp: (new Date)}
];

let nextId = 2;

const message = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        id: nextId++,
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
