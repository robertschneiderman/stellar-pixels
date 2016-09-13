import {connect} from 'react-redux';
import FeedPage from './feed_page';
import { loadPage } from '../../actions/search_actions';
import * as ACTIONS from '../../actions/photos_actions';

const mapStateToProps = state => ({
  loading: state.loading['load-page'],  
  currentUser: state.session.currentUser,
  photos: state.photos.photos
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadPage: () => dispatch(loadPage()),    
    favorite: photo_id => dispatch(ACTIONS.favorite(photo_id)),    
    requestFeedPhotos: () => dispatch(ACTIONS.requestFeedPhotos())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPage);
