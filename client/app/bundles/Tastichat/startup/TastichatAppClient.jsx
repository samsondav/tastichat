import React from 'react';
import { Provider } from 'react-redux';
import RootContainer from '../containers/RootContainer';
import createStoreFromProps from '../store/applicationStore'
import DevTools from '../containers/DevTools';

export default props => {
  return <Provider store={createStoreFromProps(props)}>
    <RootContainer />
    {/*<DevTools />*/}
  </Provider>
};
