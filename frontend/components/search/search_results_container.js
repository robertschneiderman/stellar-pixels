import {connect} from 'react-redux';
import SearchResults from './search_results';
import { requestSearchItems } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    items: state.search.items,
    loading: state.loading['search-items'],
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