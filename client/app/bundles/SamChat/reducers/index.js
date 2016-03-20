const messages = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return [
        ...state,
        {
          body: action.body
        }
      ]
    default:
      return state
  }
}

export default messages
