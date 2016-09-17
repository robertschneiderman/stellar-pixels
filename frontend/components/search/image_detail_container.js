import {connect} from 'react-redux';
import ImageDetail from './image_detail';
import { favorite } from '../../actions/search_actions';


const mapStateToProps = (state, {imageId}) => {
  debugger;
  const image = state.photos.items.find((item) => {
    if (item.id == imageId) return true;
  });

  return {
    currentUser: state.session.currentUser,
    image: image
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchPhotos: items => dispatch(requestSearchPhotos(items)),
    favorite: photo_id => dispatch(favorite(photo_id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageDetail);
