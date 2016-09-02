import {connect} from 'react-redux';
import SearchFilters from './search_filters';
import { requestSearchItems } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    items: state.search,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchItems: search => dispatch(requestSearchItems(search)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilters);