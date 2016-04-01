import { createStore } from 'redux';
import rootReducer from '../reducers';
import applyMiddleware from './applyMiddleware';
import Immutable from 'immutable';
import MessageRecord from './MessageRecord';
import WarriorRecord from './WarriorRecord';

const importMessages = messages =>
  Immutable.List(
    messages.map(message => new MessageRecord(message))
  );

const importWarriors = warriors => {
  const warriorRecords = {};

  Object.keys(warriors).forEach(fruit => {
    const warrior = warriors[fruit];
    warriorRecords[fruit] = new WarriorRecord(warrior);
  });
  return Immutable.Map(warriorRecords);
};

// creates the application store from initial props
export default ({ messages, warriors, thisFruit }) => {
  const $$messages = importMessages(messages);
  const $$warriors = importWarriors(warriors);
  return createStore(
    rootReducer,
    {
      $$messages,
      $$warriors,
      thisFruit,
    },
    applyMiddleware
  );
};
