import {connect} from 'react-redux';
import SearchFilters from './search_filters';
import { requestSearchPhotos, filterSearchItems } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    items: state.search,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchPhotos: search => dispatch(requestSearchPhotos(search)),
    filterSearchItems: search => dispatch(filterSearchItems(search))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilters);