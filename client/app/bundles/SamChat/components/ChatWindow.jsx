import React from 'react';
import MessagesListContainer from '../containers/MessagesListContainer';
import WriteMessageContainer from '../containers/WriteMessageContainer';

const ChatWindow = () => (
  <div className="chat-window">
    <WriteMessageContainer />
    <MessagesListContainer />
  </div>
);

export default ChatWindow;