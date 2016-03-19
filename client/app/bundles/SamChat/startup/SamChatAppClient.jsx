import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/samChatStore';
import SamChat from '../containers/SamChat';

// SamChatApp is a function that takes props and returns a react component
export default props => (
  <Provider store={createStore(props)}>
    <SamChat />
  </Provider>
);
