import {connect} from 'react-redux';
import Splash from './splash';
import { requestSearchPhotos } from '../actions/search_actions';
import { login } from '../actions/session_actions';


const mapStateToProps = state => ({
  
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchPhotos: items => dispatch(requestSearchPhotos(items)),
    login: user => dispatch(login(user))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
