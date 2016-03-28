import $$messages from './messagesReducer';
import $$warriors from './fruitsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  $$messages,
  $$warriors,
  thisFruit: (state = 'ghost', action) => state,
});

export default rootReducer;
