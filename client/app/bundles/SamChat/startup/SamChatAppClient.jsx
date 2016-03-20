import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SamChat from '../components/SamChat';
import messages from '../reducers';

const store = createStore(messages);

// SamChatApp is a function that takes props and returns a react component
export default props => (
  <Provider store={store}>
    <SamChat />
  </Provider>
);
