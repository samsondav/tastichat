import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import SamChat from '../components/SamChat';
import messages from '../reducers';
import thunk from 'redux-thunk';

// SamChatApp is a function that takes props and returns a react component
export default props => {
  const store = createStore(
    messages,
    props.messages,
    applyMiddleware(thunk)
  );
  return <Provider store={store}>
    <SamChat />
  </Provider>
};
