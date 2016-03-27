import { connect } from 'react-redux';
import InputNickname from '../components/InputNickname';
import enterNickname from '../actions/enterNickname';

const mapStateToProps = state => ({
  initialNickname: state.nickname,
  userColour: state.colour,
});

const mapDispatchToProps = dispatch => ({
  dispatchName: newNickame => dispatch(enterNickname(newNickame)),
});

// We need to ask the user for their name before we can do anything else
export default connect(mapStateToProps, mapDispatchToProps)(InputNickname);
