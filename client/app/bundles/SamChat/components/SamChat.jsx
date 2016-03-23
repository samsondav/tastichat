import React from 'react';
import MessagesListContainer from '../containers/MessagesListContainer'
import WriteMessage from '../containers/WriteMessage'

const SamChat = () => (
  <div>
    <WriteMessage />
    <MessagesListContainer />
  </div>
);

export default SamChat;
