import { connect } from 'react-redux';
import React from 'react';
import ChatWindow from '../components/ChatWindow';
import InputNicknameContainer from '../containers/InputNicknameContainer';

import { AnimateInOut } from 'state-transitions';

const SamChat = ({ nickname }) => {
  const showLoginPage = nickname.length === 0;

  return (
    <div>
      <InputNicknameContainer visible={showLoginPage} />
      <ChatWindow />
    </div>
  )
};

const mapStateToProps = state => ({ nickname: state.nickname });

export default connect(mapStateToProps)(SamChat);
