import React, { PropTypes } from 'react';
import Message from './message';

const messageKey = (message) => {
  if (message.id) {
    return message.id;
  }
  return `local_${message.localId}`;
};

const MessagesList = ({ messages }) => {
  return <ul className="messages-list">
    {
      messages.map(message => <Message message={message} key={messageKey(message)} />)
    }
  </ul>
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MessagesList
