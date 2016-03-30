import { connect } from 'react-redux';
import React from 'react';
import ChatPage from '../components/ChatPage';
import WelcomePageContainer from '../containers/WelcomePageContainer';
import _ from 'lodash';

const mapStateToProps = state => ({
  currentPage: state.currentPage
});

const TastichatApp = ({ currentPage }) => {
  return (
    <div>
      <WelcomePageContainer visible={currentPage === 'welcome'} />
      <ChatPage visible={currentPage === 'chat'} />
    </div>
  )
};

export default connect(mapStateToProps)(TastichatApp);
