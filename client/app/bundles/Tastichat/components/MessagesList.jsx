import React from 'react';
import _ from 'lodash';
import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Message from './message';
import ActionCable from 'es6-actioncable';
import getCSRFToken from 'lib/getCSRFToken';

class MessagesList extends React.Component {
  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'authorWarrior');
  }

  componentDidMount() {
    // subscribe to actioncable message publications
    this._cable = ActionCable.createConsumer('ws://localhost:3000/cable');
    this._messaging = this._cable.subscriptions.create('MessagesChannel', {
      received: data => {
        console.log('received: ', data);
        if (data) {
          this.props.addMessageFromServer(data.message);
        }
      },
    });
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
    window.scrollTo(0,document.body.scrollHeight);
  }

  authorWarrior(message) {
    return this.props.warriors.get(message.fruit);
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
