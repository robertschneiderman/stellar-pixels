import {connect} from 'react-redux';
import Navbar from './navbar';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = state => {
  // console.log("state:", state);
  console.log("state:", state);
  return {
    loggedIn: !!state.session.currentUser,
    username: state.session.currentUser.email
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);