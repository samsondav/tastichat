const initialState = 'welcome';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ENTER_CHAT':
      return 'chat';
    default:
      return state;
  }
};
