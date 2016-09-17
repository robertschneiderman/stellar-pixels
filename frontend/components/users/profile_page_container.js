import {connect} from 'react-redux';
import ProfilePage from './profile_page';
import * as ACTIONS from '../../actions/photos_actions';
import { follow, requestUser } from '../../actions/users_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    loading: state.loading['user'],
    photos: state.photos,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestUser: (user_id) => dispatch(requestUser(user_id)),
    requestProfilePhotos: (user_id) => dispatch(ACTIONS.requestProfilePhotos(user_id)),
    follow: (broadcaster_id) => dispatch(follow(broadcaster_id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
