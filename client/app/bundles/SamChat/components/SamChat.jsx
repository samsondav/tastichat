import React, { PropTypes } from 'react';
import MessagesListContainer from '../containers/MessagesListContainer'
import WriteMessageContainer from '../containers/WriteMessageContainer'

const SamChat = () => (
  <div className="chat-window">
    <WriteMessageContainer />
    <MessagesListContainer />
  </div>
);

export default SamChat;
