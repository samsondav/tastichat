import React, { PropTypes } from 'react';

const isSending = (message) => {
  if (message.localId) {
    return true;
  }
  return false;
}

const Message = ({ message }) =>
  (
    <li
      className={isSending(message) ? "sending" : "sent"}
    >
      {message.author} said "{message.body}" at {message.timestamp.toString()}
    </li>
  );

const messageShape = PropTypes.shape({
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date),
}).isRequired;

Message.propTypes = {
  message: messageShape,
};

export default Message;
