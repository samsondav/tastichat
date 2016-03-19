import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/helloWorldStore';
import HelloWorld from '../containers/HelloWorld';

export default props => (
  <Provider store={createStore(props)}>
    <HelloWorld />
  </Provider>
);
