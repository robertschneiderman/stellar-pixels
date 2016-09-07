import {connect} from 'react-redux';
import ProfilePage from './profile_page';
import { requestUserPhotos } from '../../actions/search_actions';

const mapStateToProps = state => {
  // debugger;
  return {
    user: state.search.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestUserPhotos: (user_id) => dispatch(requestUserPhotos(user_id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
