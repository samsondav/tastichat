import React, { PropTypes } from 'react';
import _ from 'lodash';

class WriteMessage extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleSubmit');
  }

  handleSubmit(e) {
    e.preventDefault(); // do not allow browser to make a post
    const body = this._input.value;
    const submitTime = new Date;

    this.props.sendMessage(body, submitTime);
  }

  createChangeHandler(key) {
    return event => this.setState({ [key]: event.target.value });
  }

  componentDidUpdate() {
    this._input.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={node => this._input = node}
          type="text"
          className="write-message__body"
        />
      </form>
    );
  }
}

export default WriteMessage;
