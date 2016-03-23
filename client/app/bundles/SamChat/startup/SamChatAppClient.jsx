import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import SamChat from '../components/SamChat';
import messages from '../reducers';
import thunk from 'redux-thunk';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  messages,
  applyMiddleware(thunk)
);

// SamChatApp is a function that takes props and returns a react component
export default props => (
  <Provider store={store}>
    <SamChat />
  </Provider>
);
