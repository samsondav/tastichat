import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import ChatPage from '../components/ChatPage';
import WelcomePageContainer from '../containers/WelcomePageContainer';

const mapStateToProps = state => ({
  currentPage: state.currentPage
});

class TastichatApp extends React.Component {
  render() {
    if (this.props.currentPage === 'welcome') {
      return <WelcomePageContainer />;
    }
    return <ChatPage />;
  }
};

TastichatApp.propTypes = {
  currentPage: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(TastichatApp);
