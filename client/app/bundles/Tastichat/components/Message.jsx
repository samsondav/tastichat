import React, { PropTypes } from 'react';
import MessageRecord from '../store/MessageRecord';
import WarriorRecord from '../store/WarriorRecord';

const messageStatusClass = (message) => {
  switch (message.get('state')) {
    case 'RECEIVED':
      return ' message__body--sent';
    case 'PENDING':
      return 'message__body--sending';
    case 'REJECTED':
      return 'message__body--failed';
    default:
      return null;
  }
};

const MessageMeta = ({ authorWarrior }) => (
  <div className="message__meta">
    <img className="message__avatar" src={authorWarrior.avatarUrl} />
    <div className="message__author">{authorWarrior.name}</div>
  </div>
);

const MessageBody = ({ body, colour, sentAt, status }) => (
  <div className={`message__body ${status}`}>
    <div
      className="message__bubble"
      style={{
        background: `linear-gradient(to top right, ${colour}, #FFFFFF)`,
      }}
    >
      {body}
    </div>
    <div className="message__sent-at">at {sentAt.toString()}</div>
  </div>
);

const Message = ({ message, authorWarrior }) => {
  const { body, sentAt } = message;
  const { colour } = authorWarrior;
  const status = messageStatusClass(message);

  return (
    <li className="message">
      <MessageMeta authorWarrior={authorWarrior} />
      <MessageBody body={body} colour={colour} sentAt={sentAt} status={status} />
    </li>
  );
};

Message.propTypes = {
  message: PropTypes.instanceOf(MessageRecord).isRequired,
  authorWarrior: PropTypes.instanceOf(WarriorRecord).isRequired,
};

export default Message;
