import {connect} from 'react-redux';
import ProfilePage from './profile_page';
import * as ACTIONS from '../../actions/users_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    loading: state.loading['user'],
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestUser: (user_id) => dispatch(ACTIONS.requestUser(user_id)),
    follow: (broadcaster_id) => dispatch(ACTIONS.follow(broadcaster_id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
