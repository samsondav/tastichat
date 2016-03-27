import React, { PropTypes } from 'react';
import _ from 'lodash';

class WriteMessage extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      bodyText: '',
    };
    _.bindAll(this, 'handleSubmit');
  }

  handleSubmit(e) {
    e.preventDefault(); // do not allow browser to make a post
    const body = this.state.bodyText;
    const submitTime = new Date;

    this.props.sendMessage(body, submitTime);
  }

  createChangeHandler(key) {
    return event => this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <form className="write-message" onSubmit={this.handleSubmit}>
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
        type="submit"
        className="write-message__button"
      >
        Send Message
      </button>
    </form>
    );
  }
}

export default WriteMessage;
