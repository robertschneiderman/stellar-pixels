import {connect} from 'react-redux';
import SearchResults from './search_results';
import { requestSearchItems } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    items: state.photos.items,
    page: state.photos.page,
    query: state.photos.query,
    loading: state.loading['search-items']
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchItems: (query, page) => dispatch(requestSearchItems(query, page))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);