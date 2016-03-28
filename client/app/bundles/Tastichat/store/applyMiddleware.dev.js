import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import stateInvariant from 'redux-immutable-state-invariant';

export default compose(
  // development middleware
  applyMiddleware(stateInvariant(), thunk, createLogger()),
  DevTools.instrument(),
);
