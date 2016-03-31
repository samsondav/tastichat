import React, { PropTypes } from 'react';
import _ from 'lodash';

class WriteMessage extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    warriorColour: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleSubmit');
  }

  handleSubmit(e) {
    e.preventDefault(); // do not allow browser to make a post
    const body = this._input.value;

    if (body == '') {
      return null; // do nothing if the user hasn't actually entered a message
    }

    this._input.value = '';

    const submitTime = new Date;

    this.props.sendMessage(body, submitTime);
  }

  createChangeHandler(key) {
    return event => this.setState({ [key]: event.target.value });
  }

  // Set focus when name changes (it's only set once so this is ok)
  componentDidUpdate() {
    this._input.focus();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <input
          style={{
            borderColor: this.props.warriorColour,
          }}
          placeholder="Type a reply..."
          className="write-message"
          ref={node => this._input = node}
          type="text"
          autoFocus="autofocus"
        />
      </form>
    );
  }
}

export default WriteMessage;
