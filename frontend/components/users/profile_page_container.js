import {connect} from 'react-redux';
import ProfilePage from './profile_page';
import { requestUserPhotos, follow } from '../../actions/search_actions';

const mapStateToProps = state => {
  // debugger;
  return {
    currentUser: state.session.currentUser,
    loading: state.loading['user'],
    user: state.search.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestUserPhotos: (user_id) => dispatch(requestUserPhotos(user_id)),
    follow: (broadcaster_id) => dispatch(follow(broadcaster_id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
