import { connect } from 'react-redux'
import MessagesList from '../components/MessagesList'

const mapStateToProps = applicationState => {
  return {
    messages: applicationState.$$messages.map(message => {
      return message.set('colour', applicationState.$$warriors.get(message.fruit).colour)
    }
    ),
  }
}

const MessagesListContainer = connect(mapStateToProps)(MessagesList)

export default MessagesListContainer
