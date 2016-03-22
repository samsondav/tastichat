import React, { PropTypes } from 'react';

const Message = ({ message }) =>
  <li>{message.author} said "{message.body}" at {message.timestamp.toString()}</li>;

const messageShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date),
}).isRequired;

Message.propTypes = {
  message: messageShape,
};

export default Message;
