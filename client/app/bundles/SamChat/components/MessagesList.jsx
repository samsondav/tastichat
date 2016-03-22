import React, { PropTypes } from 'react';
import Message from './message';

const MessagesList = ({ messages }) => (
  <ul>
    {
      messages.map(message => <Message message={message} key={message.id} />)
    }
  </ul>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MessagesList
