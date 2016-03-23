import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/sendMessage';

// All Redux connected components with no mapDispatchToProps argument specified
// get props.dispatch set automatically
class WriteMessage extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      authorText: '',
      bodyText: ''
    }
  }

  handleButtonClick(event) {
    debugger
  }

  createChangeHandler(key) {
    return event => {
      const newState = {};
      newState[key] = event.target.value;
      this.setState(newState);
    };
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
        onClick={this.handleButtonClick.bind(this)}
      >
        Send Message
      </button>
    </form>
    );
  }
}

export default connect()(WriteMessage);
