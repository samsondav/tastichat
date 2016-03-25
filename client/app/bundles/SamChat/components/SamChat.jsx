import React, { PropTypes } from 'react';
import MessagesListContainer from '../containers/MessagesListContainer'
import WriteMessageContainer from '../containers/WriteMessageContainer'
import InputNicknameContainer from '../containers/InputNicknameContainer'

const SamChat = () => (
  <div className="chat-window">
    <InputNicknameContainer />
    <WriteMessageContainer />
    <MessagesListContainer />
  </div>
);

export default SamChat;
