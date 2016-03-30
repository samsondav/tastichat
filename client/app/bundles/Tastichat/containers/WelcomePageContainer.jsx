import { connect } from 'react-redux';
import WelcomePage from '../components/WelcomePage';
import enterChat from '../actions/enterChat';

const mapStateToProps = state => {
  return {
    thisWarrior: state.$$warriors.get(state.thisFruit),
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchLogin: () => dispatch(enterChat()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomePage);
