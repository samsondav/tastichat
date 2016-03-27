import React from 'react';
import { Provider } from 'react-redux';
import SamChatContainer from '../containers/SamChatContainer';
import createStoreFromProps from '../store/samChatStore'
import DevTools from '../containers/DevTools';

// SamChatApp is a function that takes props and returns a react component
export default props => {
  return <Provider store={createStoreFromProps(props)}>
  <div>
    <SamChatContainer />
    <DevTools />
  </div>
  </Provider>
};
