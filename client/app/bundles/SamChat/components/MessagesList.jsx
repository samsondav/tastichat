import React, { PropTypes } from 'react';

const MessagesList = ({ messages }) => (
  <ul>
    {messages.map(message =>
      <div>{message.body}</div>)}
  </ul>
);

const messageShape = PropTypes.shape({
  key: PropTypes.number.isRequired,
  author: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired
}).isRequired

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(messageShape).isRequired
}

export default MessagesList
