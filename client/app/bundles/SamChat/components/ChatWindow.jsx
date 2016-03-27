import React from 'react';
import MessagesListContainer from '../containers/MessagesListContainer';
import WriteMessageContainer from '../containers/WriteMessageContainer';

const ChatWindow = () => (
  <page className="chat-window">
    <WriteMessageContainer />
    <MessagesListContainer />
  </page>
);

export default ChatWindow;
