import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log("ownProps:", ownProps);

  // const formType = ownProps.location.pathname.slice(1).replace(/\-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  // const processForm = (formType === 'Login') ? login : signup;
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    formType: ownProps.formType
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);