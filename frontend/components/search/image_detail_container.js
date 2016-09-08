import {connect} from 'react-redux';
import ImageDetail from './image_detail';
import { favorite } from '../../actions/search_actions';


const mapStateToProps = (state, {imageId}) => {
  const image = state.search.items.find((item) => {
    if (item.id == imageId) return true;
  });

  return {
    currentUser: state.session.currentUser,
    image: image
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchItems: items => dispatch(requestSearchItems(items)),
    favorite: photo_id => dispatch(favorite(photo_id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageDetail);
