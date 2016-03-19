import React from 'react';
import { Provider } from 'react-redux';
import Immutable from 'immutable';


const createStore = props => (
    {
      $$samChatAppstore: Immutable.fromJS({
        messages: props.messages,
      }),
    }
);

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
export default (props) => {
  // const store = createStore(props);
  const messages = props.messages.map(message => {
    return <div>{message}</div>;
  });
  const reactComponent = (
    <div>
      {messages}
    </div>
  );
  return reactComponent;
};
