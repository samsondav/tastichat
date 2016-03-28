const initialState = 'removeme';

const nickname = (state = initialState, action) => {
  switch (action.type) {
    case 'ENTER_NICKNAME':
      return action.nickname;
    default:
      return state;
  }
};

export default nickname;
