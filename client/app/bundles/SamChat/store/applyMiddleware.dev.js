import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

export default compose(
  // development middleware
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument(),
);
