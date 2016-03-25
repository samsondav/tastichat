import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/sendMessage';
import WriteMessage from '../components/WriteMessage';

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (author, body, submitTime) => dispatch(sendMessage(author, body, submitTime)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(WriteMessage);
