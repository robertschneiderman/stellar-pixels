import {connect} from 'react-redux';
import Gallery from './gallery';
import { requestImageDetail } from '../../actions/search_actions';

const mapStateToProps = state => {
  // debugger;
  return {
    imageDetail: state.search.image
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestImageDetail: image => dispatch(requestImageDetail(image)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
