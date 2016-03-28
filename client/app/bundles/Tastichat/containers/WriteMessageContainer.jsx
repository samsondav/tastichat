import { connect } from 'react-redux';
import { sendMessage } from '../actions/sendMessage';
import WriteMessage from '../components/WriteMessage';

const mapStateToProps = state => {
  return {
    warriorColour: state.$$warriors.get(state.thisFruit).colour,
  };
};

const mapDispatchToProps = dispatch => ({
  sendMessage: (body, submitTime) => {
    dispatch(sendMessage(body, submitTime));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(WriteMessage);
