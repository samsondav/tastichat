import { connect } from 'react-redux'
import MessagesList from '../components/MessagesList'

const mapStateToProps = state => {
  return {
    messages: state
  }
}

const MessagesListContainer = connect(mapStateToProps)(MessagesList)

export default MessagesListContainer
