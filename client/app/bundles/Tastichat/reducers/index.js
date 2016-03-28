import $$messages from './messagesReducer';
import $$warriors from './fruitsReducer';
import currentPage from './currentPageReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  $$messages,
  $$warriors,
  currentPage,
  thisFruit: (state = 'ghost', action) => state,
});

export default rootReducer;
