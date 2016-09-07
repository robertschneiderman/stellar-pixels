import {connect} from 'react-redux';
import Navbar from './navbar';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = state => {
  // console.log("state:", state);
  const email = state.session.currentUser && state.session.currentUser.email ? state.session.currentUser.email : ''

  const avatar = state.session.currentUser && state.session.currentUser.avatar ? state.session.currentUser.avatar : ''

  const id = state.session.currentUser && state.session.currentUser.id ? state.session.currentUser.id : ''

  return {
    loggedIn: !!state.session.currentUser,
    id: id,
    email: email,
    avatar: avatar
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);