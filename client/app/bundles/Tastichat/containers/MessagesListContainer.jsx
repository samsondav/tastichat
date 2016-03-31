import { connect } from 'react-redux'
import MessagesList from '../components/MessagesList'

const mapStateToProps = applicationState => {
  return {
    messages: applicationState.$$messages,
    warriors: applicationState.$$warriors,
  }
}

const MessagesListContainer = connect(mapStateToProps)(MessagesList)

export default MessagesListContainer
