import { connect } from 'react-redux'
import MessagesList from '../components/MessagesList'

const mapStateToProps = applicationState => {
  return {
    messages: applicationState.$$messages
  }
}

const MessagesListContainer = connect(mapStateToProps)(MessagesList)

export default MessagesListContainer
