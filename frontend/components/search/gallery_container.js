import {connect} from 'react-redux';
import Gallery from './gallery';
import { requestImageDetail, favorite } from '../../actions/search_actions';

const mapStateToProps = state => {
  // debugger;
  return {
    currentUser: state.session.currentUser,
    imageDetail: state.photos.image
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestImageDetail: image => dispatch(requestImageDetail(image)),
    favorite: photo_id => dispatch(favorite(photo_id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
