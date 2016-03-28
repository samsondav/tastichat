import React from 'react';
import { Provider } from 'react-redux';
import RootContainer from '../containers/RootContainer';
import createStoreFromProps from '../store/applicationStore'
import DevTools from '../containers/DevTools';
import Config from '../../../lib/Config';

// props.config is special, anything in here gets assigned to the global Config
// space
const setConfigFromProps = props => {
  Object.keys(props.config).forEach(key =>
    Config.set(key, props.config[key]));
}

export default props => {
  setConfigFromProps(props);
  return <Provider store={createStoreFromProps(props)}>
    <RootContainer />
    {/*<DevTools />*/}
  </Provider>
};
