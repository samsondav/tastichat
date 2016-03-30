import React, { PropTypes } from 'react';
import MessageRecord from '../store/MessageRecord';

const messageClass = (message) => {
  switch (message.get('state')) {
    case 'RECEIVED':
      return 'message__body message__body--sent';
    case 'PENDING':
      return 'message__body message__body--sending';
    case 'REJECTED':
      return 'message__body message__body--failed';
    default:
      return null;
  }
};

const Message = ({ message }) => (
    <li
      className={messageClass(message)}
      style={{
        background: `linear-gradient(to top right, ${message.get('colour')}, #FFFFFF)`,
      }}
    >
        {message.get('fruit')} said "{message.get('body')}" at {message.get('sentAt').toString()}
    </li>
);

Message.propTypes = {
  message: PropTypes.instanceOf(MessageRecord).isRequired,
};

export default Message;
