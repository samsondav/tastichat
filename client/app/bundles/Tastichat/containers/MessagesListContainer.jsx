import { connect } from 'react-redux'
import MessagesList from '../components/MessagesList'
import serverPublishedMessage from '../actions/serverPublishedMessage';

const mapStateToProps = applicationState => {
  return {
    messages: applicationState.$$messages,
    warriors: applicationState.$$warriors,
  };
};

const mapDispatchToProps = dispatch => ({
  addMessageFromServer: message => dispatch(serverPublishedMessage(message)),
});

class MessagesListContainer extends connect(mapStateToProps, mapDispatchToProps)(MessagesList) {
}

export default MessagesListContainer;
