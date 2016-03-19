import React, { PropTypes } from 'react';

const messageShape = PropTypes.shape({
  key: PropTypes.number,
  author: PropTypes.string,
  body: PropTypes.string,
});

// A component for displaying a list of messages
export default class MessagesList extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(messageShape).isRequired,
  }

  render() {
    const messages = this.props.messages.map(message => (
      <div className="message">
        {message.key}. {message.author} said "{message.body}"
      </div>
    ));
    return (
      <div className="messages-list">
        {messages}
      </div>
    );
  }
}
