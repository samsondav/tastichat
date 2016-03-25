import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Message from './message';

const messageKey = (message) => {
  if (message.has('id')) {
    return message.get('id');
  }
  return `local_${message.get('localId')}`;
};

const MessagesList = ({ messages }) => (
  <ul className="messages-list">
    {
      messages.map(message => <Message message={message} key={messageKey(message)} />)
    }
  </ul>
);

MessagesList.propTypes = {
  messages: ImmutablePropTypes.list.isRequired,
};

export default MessagesList;
