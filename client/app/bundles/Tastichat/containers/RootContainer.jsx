import { connect } from 'react-redux';
import React from 'react';
import ChatPage from '../components/ChatPage';
import WelcomePageContainer from '../containers/WelcomePageContainer';
import _ from 'lodash';

const mapStateToProps = state => ({
  currentPage: state.currentPage
});

const TastichatApp = ({ currentPage }) => {
  if (currentPage === 'welcome') {
    return <WelcomePageContainer />;
  }
  return <ChatPage />;
};

export default connect(mapStateToProps)(TastichatApp);
