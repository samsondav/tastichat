import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Message from './message';

class MessagesList extends React.Component {
  messageKey(message) {
    if (message.has('id')) {
      return message.get('id');
    }
    return `local_${message.get('localId')}`;
  }

  componentWillUpdate() {
    this.shouldScrollBottom = this._ul.scrollTop + this._ul.offsetHeight === this._ul.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      window.scrollTo(0,document.body.scrollHeight);
    }
  }

  render() {
    return (
      <ul
        className="messages-list"
        ref={node => this._ul = node}
      >
        {
          this.props.messages.map(message => <Message message={message} key={this.messageKey(message)} />)
        }
      </ul>
    );
  }
}

MessagesList.propTypes = {
  messages: ImmutablePropTypes.list.isRequired,
};

export default MessagesList;
