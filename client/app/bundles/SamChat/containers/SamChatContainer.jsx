import { connect } from 'react-redux';
import React from 'react';
import ChatWindow from '../components/ChatWindow';
import InputNicknameContainer from '../containers/InputNicknameContainer';

const SamChat = ({ nickname }) => {
  if (nickname.length === 0) {
    return <InputNicknameContainer />;
  }
  return <ChatWindow />;
};

const mapStateToProps = state => ({ nickname: state.nickname });

export default connect(mapStateToProps)(SamChat);
