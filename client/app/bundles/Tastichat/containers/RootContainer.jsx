import { connect } from 'react-redux';
import React from 'react';
import ChatWindow from '../components/ChatWindow';

import { AnimateInOut } from 'state-transitions';

const TastichatApp = () => {
  return (
    <div>
      {/*<InputNicknameContainer visible={showLoginPage} />*/}
      <ChatWindow visible={true} />
    </div>
  )
};

export default connect()(TastichatApp);
