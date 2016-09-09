import {connect} from 'react-redux';
import FeedPage from './feed_page';
import { loadPage, requestFeedItems, favoriteFeed } from '../../actions/search_actions';

const mapStateToProps = state => ({
  loading: state.loading['load-page'],  
  currentUser: state.session.currentUser,
  items: state.search.items
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadPage: () => dispatch(loadPage()),    
    favoriteFeed: photo_id => dispatch(favoriteFeed(photo_id)),    
    requestFeedItems: () => dispatch(requestFeedItems())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPage);
