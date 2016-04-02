import _ from 'lodash';
import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Message from './Message';
import Config from 'lib/Config';

// NPM-packaged ActionCable would be cleaner but we can't rely on it being up-to-date right now.
// Use rails to inject it and use the global one instead.
// import ActionCable from 'es6-actioncable';
const ActionCable = window.ActionCable;

class MessagesList extends React.Component {
  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'authorWarrior');
  }

  componentDidMount() {
    // HACK: ActionCable **should** autodetect the meta tag but for some reason
    // its not working, so manually supply it here instead
    const url = Config.getActionCableURL();
    console.log('Connecting to ActionCable using ', url);
    this._cable = ActionCable.createConsumer(url);
    const chatWindowId = Config.getChatWindowId();
    // subscribe to actioncable message publications
    this._messaging = this._cable.subscriptions.create('MessagesChannel', {
      received: data => {
        console.log('received: ', data);
        if (data && data.broadcaster_id !== chatWindowId) {
          this.props.addMessageFromServer(data.message);
        }
      },
    });

    this._scrollToBottom();
  }

  componentWillUnmount() {
    // close connection to actioncable
    if (this._messaging) {
      this._messaging.unsubscribe();
    }
    if (this._cable) {
      ActionCable.endConsumer(this._cable);
    }
    delete this._messaging;
    delete this._cable;
  }

  messageKey(message) {
    if (message.has('id')) {
      return message.get('id');
    }
    return `local_${message.get('localId')}`;
  }

  // every new message scrolls to the bottom
  componentDidUpdate() {
    this._scrollToBottom();
  }

  authorWarrior(message) {
    return this.props.warriors.get(message.fruit);
  }

  _scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  render() {
    const messages = this.props.messages.sortBy(message => message.sentAt);
    return (
      <ul
        className="messages-list"
        ref={node => this._ul = node}
      >
        {
          messages.map(message => <Message message={message} authorWarrior={this.authorWarrior(message)} key={this.messageKey(message)} />)
        }
      </ul>
    );
  }
}

MessagesList.propTypes = {
  messages: ImmutablePropTypes.list.isRequired,
  warriors: ImmutablePropTypes.map.isRequired,
  addMessageFromServer: PropTypes.func.isRequired,
};

export default MessagesList;
