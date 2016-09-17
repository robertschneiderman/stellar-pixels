import {connect} from 'react-redux';
import SearchPage from './search_page';
import { loadPage } from '../../actions/search_actions'

const mapStateToProps = state => ({
  loading: state.loading['load-page'],
  onEnter: state.onEnter
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadPage: () => dispatch(loadPage()),
    requestSearchPhotos: items => dispatch(requestSearchPhotos(items)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
