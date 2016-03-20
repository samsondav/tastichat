const initialState = [
  {key: '1', body: 'test', author: 'test'}
]

const samChat = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return [
        ...state,
        {
          key: action.key,
          body: action.body,
          author: action.author
        }
      ]
    default:
      return state
  }
}

export default samChat
