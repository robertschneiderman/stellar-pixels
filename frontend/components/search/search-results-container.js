import {connect} from 'react-redux';
import SearchResults from './search-results';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    findItems: user => dispatch(signup(user)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);