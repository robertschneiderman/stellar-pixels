import {connect} from 'react-redux';
import SearchResults from './search_results';
import { requestSearchPhotos } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    photos: state.search.photos,
    page: state.search.page,
    query: state.search.query,
    loading: state.loading['search-items']
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchPhotos: (query, page) => dispatch(requestSearchPhotos(query, page))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);