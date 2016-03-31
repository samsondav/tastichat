import React, { PropTypes } from 'react';
import MessageRecord from '../store/MessageRecord';
import WarriorRecord from '../store/WarriorRecord';

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

const Message = ({ message, authorWarrior }) => (
    <li className="message">
      <div className="message__author">
        <img src={message.avatarUrl} />
        <span>{authorWarrior.name}</span>
      </div>
      <div
        className={messageClass(message)}
        style={{
          background: `linear-gradient(to top right, ${authorWarrior.colour}, #FFFFFF)`,
        }}
      >
        {message.get('fruit')} said "{message.get('body')}" at {message.get('sentAt').toString()}
      </div>
    </li>
);

Message.propTypes = {
  message: PropTypes.instanceOf(MessageRecord).isRequired,
  authorWarrior: PropTypes.instanceOf(WarriorRecord).isRequired,
};

export default Message;
