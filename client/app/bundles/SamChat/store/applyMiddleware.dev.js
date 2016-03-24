import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';

export default compose(
  // development middleware
  applyMiddleware(thunk),
  DevTools.instrument()
);
