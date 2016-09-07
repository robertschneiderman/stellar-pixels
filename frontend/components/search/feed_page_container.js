import {connect} from 'react-redux';
import FeedPage from './feed_page';
import { requestFeedItems } from '../../actions/search_actions';

const mapStateToProps = state => ({
  items: state.search.items
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestFeedItems: () => dispatch(requestFeedItems()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPage);
