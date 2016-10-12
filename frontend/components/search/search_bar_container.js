import {connect} from 'react-redux';
import SearchBar from './search_bar';
import * as ACTIONS from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    page: state.photos.page,
    query: state.photos.query
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchPhotos: (query, page) => dispatch(ACTIONS.requestSearchPhotos(query, page))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
