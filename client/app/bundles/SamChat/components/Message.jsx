import React, { PropTypes } from 'react';

const messageClass = (message) => {
  switch (message.state) {
    case 'RECEIVED':
      return 'messages-list__message--sent'
    case 'PENDING':
      return 'messages-list__message--sending'
    case 'REJECTED':
      return 'messages-list__message--failed'
  }
}

const Message = ({ message }) =>
  (
    <li
      className={messageClass(message)}
    >
      {message.author} said "{message.body}" at {message.sent_at.toString()}
    </li>
  );

const messageShape = PropTypes.shape({
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  sent_at: PropTypes.instanceOf(Date),
}).isRequired;

Message.propTypes = {
  message: messageShape,
};

export default Message;
