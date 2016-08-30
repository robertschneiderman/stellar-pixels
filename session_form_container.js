import {connect} from 'react-redux';
import SessionContainer from './greeting_container';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    formType: formType,
    processForm: user => dispatch(processForm()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GreetingContainer);