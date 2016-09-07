import {connect} from 'react-redux';
import FeedPage from './feed_page';

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
)(FeedPage);
