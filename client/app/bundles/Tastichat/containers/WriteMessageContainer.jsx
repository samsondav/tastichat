import { connect } from 'react-redux';
import sendMessage from '../actions/sendMessage';
import WriteMessage from '../components/WriteMessage';

const mapStateToProps = state => {
  return {
    thisWarrior: state.$$warriors.get(state.thisFruit),
    thisFruit: state.thisFruit,
  };
};

// Use mergeProps here so we can enclose the fruit into the sendMessage function
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...ownProps,
    warriorColour: stateProps.thisWarrior.colour,
    sendMessage: (body, submitTime) => {
      dispatch(sendMessage(body, stateProps.thisFruit, submitTime));
    },
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(WriteMessage);
