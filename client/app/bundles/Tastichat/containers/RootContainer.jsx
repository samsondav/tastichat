import { connect } from 'react-redux';
import React from 'react';
import ChatPage from '../components/ChatPage';
import WelcomePage from '../components/WelcomePage';
import _ from 'lodash';

const mapStateToProps = state => ({
  currentPage: state.currentPage,
  thisWarrior: state.$$warriors.get(state.thisFruit),
});

const TastichatApp = ({ currentPage, thisWarrior }) => {
  return (
    <div>
      <WelcomePage
        visible={currentPage === 'welcome'}
        thisWarrior={thisWarrior}
      />
      <ChatPage visible={currentPage === 'chat'} />
    </div>
  )
};

export default connect(mapStateToProps)(TastichatApp);
