import React, { PropTypes } from 'react';
import _ from 'lodash';

class WriteMessage extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      authorText: '',
      bodyText: '',
    };
    _.bindAll(this, 'handleButtonClick');
  }

  handleButtonClick(_e) {
    const author = this.state.authorText;
    const body = this.state.bodyText;
    const submitTime = new Date;

    this.props.sendMessage(author, body, submitTime);
  }

  createChangeHandler(key) {
    return event => this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <form className="write-message">
        <label>
          Name:
          <input
            type="text"
            className="write-message__author"
            value={this.state.authorText}
            onChange={this.createChangeHandler('authorText')}
          />
        </label>
        <label>
          Message:
          <input
            type="text"
            className="write-message__body"
            value={this.state.bodyText}
            onChange={this.createChangeHandler('bodyText')}
          />
        </label>
      <button
        type="button"
        className="write-message__button"
        onClick={this.handleButtonClick}
      >
        Send Message
      </button>
    </form>
    );
  }
}

export default WriteMessage;
