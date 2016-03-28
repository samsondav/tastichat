import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

const messageClass = (message) => {
  switch (message.get('state')) {
    case 'RECEIVED':
      return 'messages-list__message messages-list__message--sent';
    case 'PENDING':
      return 'messages-list__message messages-list__message--sending';
    case 'REJECTED':
      return 'messages-list__message messages-list__message--failed';
    default:
      return null;
  }
};

const Message = ({ message }) => (
    <li
      className={messageClass(message)}
      style={{
        background: `linear-gradient(to top, ${message.get('colour')}, #FFFFFF)`,
      }}
    >
        {message.get('author')} said "{message.get('body')}" at {message.get('sentAt').toString()}
    </li>
);

const messageShape = ImmutablePropTypes.contains({
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  sentAt: PropTypes.instanceOf(Date),
  colour: PropTypes.string.isRequired,
}).isRequired;

Message.propTypes = {
  message: messageShape,
};

export default Message;
