import {connect} from 'react-redux';
import Splash from './splash';
import { requestSearchItems } from '../actions/search_actions';
import { login } from '../actions/session_actions';


const mapStateToProps = state => ({
  
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchItems: items => dispatch(requestSearchItems(items)),
    login: user => dispatch(login(user))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
