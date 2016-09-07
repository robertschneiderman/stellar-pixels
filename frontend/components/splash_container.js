import {connect} from 'react-redux';
import Splash from './splash';
import { requestSearchItems } from '../actions/search_actions';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchItems: items => dispatch(requestSearchItems(items)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
